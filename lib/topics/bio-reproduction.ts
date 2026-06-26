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
        id: "bio-reproduction-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Asexual vs sexual reproduction, plant structures, pollination and germination.",
        questions: [
          {
            id: "bio-reproduction-bm1-01",
            question: "Which of these is an example of asexual reproduction?",
            options: [
              "A bee carrying pollen between two clover plants",
              "A potato plant forming new plants from tubers",
              "A pollen tube growing down a style to an ovule",
              "An egg cell being fertilised by a sperm cell",
            ],
            answerIndex: 1,
            explanation: "Tubers (like those of the potato) produce new plants from a single parent with no gamete fusion, so the offspring are genetically identical clones. The other options all involve gametes and therefore sexual reproduction.",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm1-02",
            question: "Which part of the stamen produces pollen?",
            options: ["Filament", "Anther", "Stigma", "Style"],
            answerIndex: 1,
            explanation: "The anther produces and releases pollen grains, which contain the male gametes. The filament is only the stalk that supports the anther. The stigma and style are female (carpel) parts.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm1-03",
            question: "Which condition is NOT required for a seed to germinate?",
            options: ["Water", "Oxygen", "Light", "A suitable temperature"],
            answerIndex: 2,
            explanation: "Germination needs water (to activate enzymes and for metabolism), oxygen (for aerobic respiration to release energy) and a suitable temperature (so enzymes work). Light is not required — many seeds germinate underground in the dark.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm1-04",
            question: "What is pollination?",
            options: [
              "The fusion of the male nucleus with the egg cell",
              "The transfer of pollen from an anther to a stigma of the same species",
              "The growth of a pollen tube down the style",
              "The development of the ovule into a seed",
            ],
            answerIndex: 1,
            explanation: "Pollination is simply the transfer of pollen from an anther to a stigma of the same species. Fusion of nuclei is fertilisation; pollen-tube growth and seed development happen after pollination.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "core",
            hints: [
              "Distinguish pollination from fertilisation — one is transfer, the other is fusion.",
              "Where does the pollen start and where does it end up?",
              "Pollination happens before any pollen tube grows.",
            ],
          },
          {
            id: "bio-reproduction-bm1-05",
            question: "A plant species can reproduce both sexually and asexually. In a stable, unchanging environment where the parent is well adapted, why might asexual reproduction be favoured?",
            options: [
              "It increases genetic variation in the offspring",
              "It preserves the well-adapted parental genotype and is rapid",
              "It requires a pollinator to be present",
              "It produces offspring by meiosis",
            ],
            answerIndex: 1,
            explanation: "In a stable environment the parent's genotype is already well suited, so producing identical clones quickly (without needing a mate or pollinator) is advantageous. Asexual reproduction does not increase variation and does not use meiosis.",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "core",
            hints: [
              "Think about what asexual offspring inherit from the parent.",
              "If the environment is not changing, is variation an advantage or not needed?",
              "Consider speed and the need (or not) for a mate.",
            ],
          },
          {
            id: "bio-reproduction-bm1-06",
            question: "After fertilisation in a flowering plant, which structures become the seed and the fruit respectively?",
            options: [
              "Ovary → seed; ovule → fruit",
              "Ovule → seed; ovary wall → fruit",
              "Stigma → seed; style → fruit",
              "Pollen grain → seed; anther → fruit",
            ],
            answerIndex: 1,
            explanation: "The fertilised ovule develops into the seed (containing the embryo), and the ovary wall develops into the fruit. A common error is to swap ovule and ovary.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "core",
            hints: [
              "The structure that holds the egg cell becomes the seed.",
              "The structure surrounding the ovules becomes the fruit.",
              "Do not confuse ovule with ovary.",
            ],
          },
          {
            id: "bio-reproduction-bm1-07",
            question: "Which statement correctly compares variation produced by self-pollination and cross-pollination?",
            options: [
              "Self-pollination produces more variation than cross-pollination",
              "Cross-pollination produces more variation because alleles come from two different plants",
              "Both produce identical amounts of variation",
              "Cross-pollination produces clones",
            ],
            answerIndex: 1,
            explanation: "Cross-pollination transfers pollen between two genetically different plants of the same species, so offspring receive new combinations of alleles from two sources — giving more variation than self-pollination, where both gametes come from one plant.",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "core",
            hints: [
              "Where do the gametes come from in each case?",
              "More genetically different parents means more or less variation?",
              "Cross-pollination still involves gametes, so it is not cloning.",
            ],
          },
          {
            id: "bio-reproduction-bm1-08",
            question: "Two beakers each contain identical cress seeds on damp cotton wool at 20°C. Beaker 1 is left open; beaker 2 has a layer of oil over the water surface and is sealed. After 5 days, only the seeds in beaker 1 have germinated. What does this experiment demonstrate?",
            options: [
              "Light is required for germination",
              "Water is required for germination",
              "Oxygen is required for germination",
              "A suitable temperature is required for germination",
            ],
            answerIndex: 2,
            explanation: "Both beakers have water (damp cotton wool) and the same temperature, so those variables are controlled. The oil layer and seal prevent oxygen reaching the seeds in beaker 2. Only the oxygenated beaker germinates, showing oxygen is required.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "challenge",
            hints: [
              "Identify which variables are the SAME in both beakers (controlled).",
              "Identify the one variable that differs between the beakers.",
              "What does a layer of oil over water prevent from dissolving in?",
              "The variable that differs is the one being tested.",
            ],
            strategy: "Find the single difference between the two conditions; that difference is the variable being tested.",
          },
          {
            id: "bio-reproduction-bm1-09",
            question: "An orchard of apple trees is propagated entirely from cuttings of one prize tree. A new fungal disease that the prize tree is susceptible to arrives. What is the most likely outcome and why?",
            options: [
              "Some trees survive because cuttings produce variation",
              "All trees are at high risk because they are genetically identical clones",
              "The trees adapt to the fungus within one generation",
              "Only female trees are affected",
            ],
            answerIndex: 1,
            explanation: "Cuttings are a form of asexual reproduction, so every tree is a genetically identical clone of the susceptible prize tree. With no genetic variation, all trees share the same susceptibility, so the whole orchard is at high risk.",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "challenge",
            hints: [
              "What kind of reproduction are cuttings?",
              "How much genetic variation exists among clones?",
              "If the parent is susceptible, what about every clone?",
              "Adaptation needs variation and selection over generations.",
            ],
            strategy: "Link cloning → no variation → shared susceptibility across the whole population.",
          },
          {
            id: "bio-reproduction-bm1-10",
            question: "Why does meiosis, rather than mitosis, produce the gametes used in sexual reproduction?",
            options: [
              "Meiosis halves the chromosome number so fertilisation restores the diploid number",
              "Meiosis produces genetically identical cells",
              "Meiosis is faster than mitosis",
              "Meiosis doubles the chromosome number in gametes",
            ],
            answerIndex: 0,
            explanation: "Meiosis produces haploid gametes (half the chromosome number). When two gametes fuse at fertilisation, the diploid number is restored, keeping it constant across generations. Meiosis also shuffles alleles, producing variation — it does not make identical cells.",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "challenge",
            hints: [
              "Compare the chromosome number in a gamete with that in a body cell.",
              "What would happen to the chromosome number each generation if gametes were diploid?",
              "Meiosis is reduction division — by what factor does it reduce?",
              "Fertilisation combines two gametes; what number results?",
            ],
            strategy: "Track chromosome number: diploid parent → haploid gamete → diploid zygote.",
          },
        ],
      },
      {
        id: "bio-reproduction-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Insect vs wind pollination and flower structure–function.",
        questions: [
          {
            id: "bio-reproduction-bm2-01",
            question: "Which feature is typical of an insect-pollinated flower?",
            options: [
              "Small, dull green petals",
              "Large, brightly coloured petals",
              "Feathery stigma hanging outside the flower",
              "Pollen that is tiny, light and smooth",
            ],
            answerIndex: 1,
            explanation: "Insect-pollinated flowers have large, brightly coloured petals to attract insects visually. Dull petals, feathery hanging stigmas and tiny smooth pollen are wind-pollinated features.",
            guideRef: "Insect- vs Wind-Pollinated Flowers",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm2-02",
            question: "Wind-pollinated flowers typically produce pollen that is:",
            options: [
              "Large, sticky and spiky",
              "Small, light and smooth, in large amounts",
              "Brightly coloured to attract insects",
              "Coated in nectar",
            ],
            answerIndex: 1,
            explanation: "Wind-pollinated pollen is small, light and smooth so it is easily carried by air currents, and is produced in huge amounts to compensate for random dispersal. Sticky, spiky pollen is an insect-pollinated adaptation.",
            guideRef: "Insect- vs Wind-Pollinated Flowers",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm2-03",
            question: "What is the function of nectar in an insect-pollinated flower?",
            options: [
              "To catch airborne pollen",
              "To reward and attract visiting insects",
              "To protect the bud before it opens",
              "To produce the male gametes",
            ],
            answerIndex: 1,
            explanation: "Nectar is a sugary reward that attracts insects to the flower; while feeding, insects pick up and transfer pollen. Catching airborne pollen is the stigma's role, protection of the bud is the sepals' role, and gametes come from the anther/ovule.",
            guideRef: "Insect- vs Wind-Pollinated Flowers",
            difficulty: "core",
            hints: [
              "Think about what an insect gains by visiting the flower.",
              "Why would a flower 'pay' an insect to visit?",
              "Nectar is only found in animal-pollinated flowers.",
            ],
          },
          {
            id: "bio-reproduction-bm2-04",
            question: "Why does a wind-pollinated flower have a large, feathery stigma?",
            options: [
              "To produce more nectar",
              "To increase the surface area for catching airborne pollen",
              "To attract insects with its shape",
              "To support the anthers",
            ],
            answerIndex: 1,
            explanation: "A large, feathery stigma has a big surface area that increases the chance of trapping pollen grains drifting past in the air. It does not make nectar, attract insects, or support anthers.",
            guideRef: "Insect- vs Wind-Pollinated Flowers",
            difficulty: "core",
            hints: [
              "How does wind-pollinated pollen reach the stigma — directed or random?",
              "What does a large, branched surface help to do with random particles?",
              "Link the feature to maximising capture probability.",
            ],
          },
          {
            id: "bio-reproduction-bm2-05",
            question: "In wind-pollinated flowers, the anthers hang outside the flower on long filaments. What is the advantage of this position?",
            options: [
              "It protects the anthers from rain",
              "It allows pollen to be shed freely into moving air",
              "It brushes pollen onto visiting insects",
              "It keeps the pollen sticky",
            ],
            answerIndex: 1,
            explanation: "Anthers dangling outside on long filaments are exposed to air currents, so pollen is easily shaken free and carried away by the wind. Brushing insects is an insect-pollinated function.",
            guideRef: "Insect- vs Wind-Pollinated Flowers",
            difficulty: "core",
            hints: [
              "What carries the pollen in wind pollination?",
              "Would anthers tucked inside the flower catch the wind?",
              "Position relative to air movement is the key.",
            ],
          },
          {
            id: "bio-reproduction-bm2-06",
            question: "Which structure protects the flower while it is still a bud?",
            options: ["Sepal", "Petal", "Stigma", "Ovule"],
            answerIndex: 0,
            explanation: "Sepals enclose and protect the developing flower bud before it opens. Petals attract pollinators, the stigma receives pollen, and the ovule contains the egg cell.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm2-07",
            question: "A flower has no scent, no nectar, large dangling anthers and a branched feathery stigma. Which conclusion is best supported?",
            options: [
              "It is self-pollinating only",
              "It is wind-pollinated",
              "It is insect-pollinated",
              "It cannot be pollinated",
            ],
            answerIndex: 1,
            explanation: "No scent or nectar means no investment in attracting insects; dangling anthers shed pollen to the wind and a feathery stigma catches airborne pollen. Together these clearly indicate wind pollination.",
            guideRef: "Insect- vs Wind-Pollinated Flowers",
            difficulty: "core",
            hints: [
              "Group the features: do any attract insects?",
              "Dangling anthers and feathery stigma point to which vector?",
              "Absence of insect lures is itself evidence.",
            ],
          },
          {
            id: "bio-reproduction-bm2-08",
            question: "Insect-pollinated plants typically produce far less pollen than wind-pollinated plants. What is the best explanation?",
            options: [
              "Insect pollen is heavier so less can be made",
              "Insect transfer is more targeted, so less pollen is wasted",
              "Insects eat most of the pollen",
              "Wind-pollinated plants are always larger",
            ],
            answerIndex: 1,
            explanation: "An insect carries pollen fairly directly from flower to flower of the same species, so transfer is efficient and little is wasted. Wind dispersal is random, so vast quantities are needed to ensure some grains reach a stigma.",
            guideRef: "Insect- vs Wind-Pollinated Flowers",
            difficulty: "challenge",
            hints: [
              "Compare how directed each transfer method is.",
              "If transfer is efficient, do you need a lot of spare pollen?",
              "Random dispersal wastes most grains — what does that demand?",
              "Link pollen quantity to probability of reaching a stigma.",
            ],
            strategy: "Reason from efficiency of transfer to the quantity of pollen needed.",
          },
          {
            id: "bio-reproduction-bm2-09",
            question: "A new insecticide drastically reduces the number of bees in an area. Which crop is most likely to suffer reduced seed production as a direct result?",
            options: [
              "A wind-pollinated grass crop",
              "An insect-pollinated apple orchard",
              "A potato crop grown from tubers",
              "A self-pollinating wheat variety",
            ],
            answerIndex: 1,
            explanation: "Apples rely on insect pollinators such as bees to transfer pollen. Losing bees reduces pollination and therefore seed/fruit set. Grasses use wind, potatoes are grown asexually from tubers, and self-pollinating wheat does not need an external vector.",
            guideRef: "Insect- vs Wind-Pollinated Flowers",
            difficulty: "challenge",
            hints: [
              "Which crop depends on an animal vector?",
              "Eliminate the wind-pollinated and asexually grown options.",
              "Self-pollinating plants do not need an outside carrier.",
              "Match the missing vector to the dependent crop.",
            ],
            strategy: "Identify which option depends on the vector that has been removed.",
          },
          {
            id: "bio-reproduction-bm2-10",
            question: "Some flowers release pollen from their anthers several days before their own stigmas become receptive. What is the most likely advantage of this timing?",
            options: [
              "It guarantees self-pollination",
              "It reduces self-pollination and promotes cross-pollination",
              "It prevents the flower from being pollinated at all",
              "It speeds up germination of the seed",
            ],
            answerIndex: 1,
            explanation: "If the anthers shed pollen before the same flower's stigma is ready, the flower's own pollen is gone before it can self-pollinate. This favours cross-pollination with other plants, increasing genetic variation in the offspring.",
            guideRef: "Insect- vs Wind-Pollinated Flowers",
            difficulty: "challenge",
            hints: [
              "If pollen leaves before the stigma is ready, can the flower fertilise itself?",
              "What kind of pollination is then encouraged?",
              "Why would a plant 'want' cross-pollination?",
              "Link the outcome to genetic variation.",
            ],
            strategy: "Trace the timing: pollen gone before stigma ready → no self-pollination → cross-pollination favoured.",
          },
        ],
      },
      {
        id: "bio-reproduction-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Human reproductive systems, gametes and fertilisation.",
        questions: [
          {
            id: "bio-reproduction-bm3-01",
            question: "Which organ produces sperm in the human male?",
            options: ["Testis", "Sperm duct", "Prostate gland", "Urethra"],
            answerIndex: 0,
            explanation: "The testes produce sperm and the hormone testosterone. The sperm duct carries sperm, the prostate adds fluid to make semen, and the urethra carries semen (or urine) out of the body.",
            guideRef: "Human Reproductive Systems",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm3-02",
            question: "Which organ produces egg cells in the human female?",
            options: ["Uterus", "Ovary", "Oviduct", "Cervix"],
            answerIndex: 1,
            explanation: "The ovaries produce egg cells by meiosis and secrete oestrogen and progesterone. The oviduct carries the egg and is the site of fertilisation; the uterus is where the embryo implants; the cervix is the entrance to the uterus.",
            guideRef: "Human Reproductive Systems",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm3-03",
            question: "Where does fertilisation normally take place in a human?",
            options: ["Ovary", "Uterus", "Oviduct (Fallopian tube)", "Vagina"],
            answerIndex: 2,
            explanation: "Fertilisation occurs in the oviduct, where a sperm meets the egg after ovulation. The zygote then divides as it travels to the uterus, where it implants.",
            guideRef: "Human Reproductive Systems",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm3-04",
            question: "Which adaptation of the sperm cell provides the energy needed for swimming?",
            options: [
              "The acrosome",
              "Many mitochondria in the midpiece",
              "The haploid nucleus",
              "The jelly coat",
            ],
            answerIndex: 1,
            explanation: "The midpiece is packed with mitochondria that carry out aerobic respiration to release ATP, providing energy for the tail (flagellum) to move. The acrosome contains penetrating enzymes; the nucleus carries genetic material; the jelly coat is a feature of the egg.",
            guideRef: "Human Reproductive Systems",
            difficulty: "core",
            hints: [
              "Which organelle releases energy by respiration?",
              "Where in the sperm are these organelles concentrated?",
              "Match energy supply to movement of the tail.",
            ],
          },
          {
            id: "bio-reproduction-bm3-05",
            question: "Why are the testes located in the scrotum, outside the main body cavity?",
            options: [
              "To keep them at a slightly lower temperature, optimal for sperm production",
              "To increase their blood supply",
              "To allow them to produce more testosterone",
              "To protect them from the immune system",
            ],
            answerIndex: 0,
            explanation: "Sperm production works best at a temperature slightly below core body temperature, so the scrotum holds the testes outside the body to keep them cooler. The position is not primarily about blood supply, testosterone, or immunity.",
            guideRef: "Human Reproductive Systems",
            difficulty: "core",
            hints: [
              "Think about temperature differences inside vs outside the body.",
              "Sperm production is sensitive to heat.",
              "Why might being too warm be a problem?",
            ],
          },
          {
            id: "bio-reproduction-bm3-06",
            question: "How many chromosomes are present in a normal human zygote immediately after fertilisation?",
            options: ["23", "46", "92", "12"],
            answerIndex: 1,
            explanation: "Each haploid gamete contributes 23 chromosomes. When sperm (23) fuses with egg (23), the diploid zygote has 46 chromosomes.",
            guideRef: "Human Reproductive Systems",
            difficulty: "core",
            hints: [
              "How many chromosomes are in each gamete?",
              "Fertilisation adds the two gametes together.",
              "23 + 23 = ?",
            ],
          },
          {
            id: "bio-reproduction-bm3-07",
            question: "What is the role of the acrosome in a sperm cell?",
            options: [
              "It stores nutrients for the embryo",
              "It contains enzymes that digest the egg's outer layers",
              "It produces ATP for movement",
              "It carries the female chromosomes",
            ],
            answerIndex: 1,
            explanation: "The acrosome at the tip of the sperm head contains digestive enzymes that break down the egg's jelly coat/membrane so the sperm nucleus can enter for fertilisation. Nutrient storage is the egg's role and ATP comes from mitochondria.",
            guideRef: "Human Reproductive Systems",
            difficulty: "core",
            hints: [
              "Where on the sperm is the acrosome located?",
              "What must the sperm get through to reach the egg cell?",
              "Enzymes break things down — what would they break here?",
            ],
          },
          {
            id: "bio-reproduction-bm3-08",
            question: "The egg cell's jelly coat hardens immediately after one sperm has entered. What is the main advantage of this change?",
            options: [
              "It speeds up the swimming of remaining sperm",
              "It prevents more than one sperm fertilising the egg (polyspermy)",
              "It provides energy for cell division",
              "It increases the chromosome number of the zygote",
            ],
            answerIndex: 1,
            explanation: "Hardening of the jelly coat after fertilisation stops further sperm entering, preventing polyspermy. If several sperm fused, the zygote would have too many chromosomes and could not develop normally.",
            guideRef: "Human Reproductive Systems",
            difficulty: "challenge",
            hints: [
              "What would happen if two sperm fused with one egg?",
              "Consider the chromosome number that would result.",
              "Why must only one sperm succeed?",
              "Link 'coat hardens' to blocking further entry.",
            ],
            strategy: "Connect the structural change (hardening) to the consequence it prevents (extra chromosomes).",
          },
          {
            id: "bio-reproduction-bm3-09",
            question: "After fertilisation in the oviduct, by which process does the zygote divide as it moves towards the uterus, and what does it form?",
            options: [
              "Meiosis, forming haploid cells",
              "Mitosis, forming a ball of genetically identical cells",
              "Meiosis, forming a ball of varied cells",
              "Mitosis, forming new gametes",
            ],
            answerIndex: 1,
            explanation: "The zygote divides by mitosis, producing genetically identical cells that form a ball of cells (the embryo). Meiosis only occurs in gamete formation, not in the growing embryo.",
            guideRef: "Human Reproductive Systems",
            difficulty: "challenge",
            hints: [
              "Which type of division produces identical cells for growth?",
              "Meiosis is only for making gametes.",
              "What multicellular structure forms before implantation?",
              "Growth and repair use mitosis.",
            ],
            strategy: "Recall the role of each division type: meiosis for gametes, mitosis for growth.",
          },
          {
            id: "bio-reproduction-bm3-10",
            question: "An egg cell is much larger than a sperm cell. Which explanation best accounts for this size difference?",
            options: [
              "The egg needs a longer tail for swimming",
              "The egg contains nutrient (food) reserves to support the early embryo",
              "The egg carries twice as many chromosomes",
              "The egg has more mitochondria for swimming",
            ],
            answerIndex: 1,
            explanation: "The egg is large because it contains a store of nutrients (yolk) in its cytoplasm to nourish the embryo before it implants and gains nutrients from the mother. The egg does not swim, and it is haploid like the sperm.",
            guideRef: "Human Reproductive Systems",
            difficulty: "challenge",
            hints: [
              "Does the egg move actively, or is it moved along the oviduct?",
              "What does the early embryo need before it implants?",
              "Both gametes are haploid — so size is not about chromosome number.",
              "Large cytoplasm suggests storage of something.",
            ],
            strategy: "Match the egg's size to its function of nourishing the early embryo.",
          },
        ],
      },
      {
        id: "bio-reproduction-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Menstrual cycle, hormones, pregnancy, placenta and STIs.",
        questions: [
          {
            id: "bio-reproduction-bm4-01",
            question: "On which approximate day of a 28-day menstrual cycle does ovulation usually occur?",
            options: ["Day 1", "Day 7", "Day 14", "Day 28"],
            answerIndex: 2,
            explanation: "Ovulation typically occurs around day 14, roughly the middle of a 28-day cycle, triggered by a surge in LH. Day 1 marks the start of menstruation.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm4-02",
            question: "Which hormone triggers ovulation?",
            options: ["FSH", "LH", "Progesterone", "Testosterone"],
            answerIndex: 1,
            explanation: "A surge in LH (luteinising hormone) around day 14 triggers ovulation. FSH stimulates follicle development, progesterone maintains the uterine lining, and testosterone is the male hormone.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm4-03",
            question: "Which gas passes from the fetal blood to the maternal blood across the placenta?",
            options: ["Oxygen", "Glucose", "Carbon dioxide", "Amino acids"],
            answerIndex: 2,
            explanation: "Carbon dioxide is a waste gas produced by the fetus; it diffuses from fetal blood to maternal blood to be removed. Oxygen, glucose and amino acids pass the other way, from mother to fetus.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "core",
            hints: [
              "Which substances are wastes the fetus must get rid of?",
              "Decide the direction: mother → fetus or fetus → mother?",
              "A respiratory waste gas is involved.",
            ],
          },
          {
            id: "bio-reproduction-bm4-04",
            question: "Which hormone, secreted by the ovary, repairs and thickens the uterine lining after menstruation?",
            options: ["Progesterone", "Oestrogen", "LH", "FSH"],
            answerIndex: 1,
            explanation: "Oestrogen, secreted by the developing follicle in the ovary, causes the uterine lining to repair and thicken during days 6–13. Progesterone later maintains the lining after ovulation; FSH and LH are pituitary hormones.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "core",
            hints: [
              "Which two hormones come from the ovary itself?",
              "Which acts in the first half (before ovulation)?",
              "Repair and thickening before ovulation is its job.",
            ],
          },
          {
            id: "bio-reproduction-bm4-05",
            question: "HIV mainly infects and destroys which type of cell, leading eventually to AIDS?",
            options: ["Red blood cells", "T-helper lymphocytes", "Platelets", "Nerve cells"],
            answerIndex: 1,
            explanation: "HIV targets and destroys T-helper lymphocytes, which coordinate the immune response. As their numbers fall, the immune system weakens until opportunistic infections take hold — the condition known as AIDS.",
            guideRef: "Sex Hormones and Sexually Transmitted Infections",
            difficulty: "core",
            hints: [
              "Which white blood cells help coordinate immunity?",
              "Why do AIDS patients catch infections easily?",
              "The cell type's name includes 'helper'.",
            ],
          },
          {
            id: "bio-reproduction-bm4-06",
            question: "Which of the following is NOT a way HIV can be transmitted?",
            options: [
              "Unprotected sexual intercourse",
              "Sharing contaminated needles",
              "Shaking hands with an infected person",
              "From mother to baby during breastfeeding",
            ],
            answerIndex: 2,
            explanation: "HIV is spread through certain body fluids (blood, semen, vaginal fluid, breast milk). Shaking hands does not transfer these fluids, so it does not spread HIV. The other three are recognised routes.",
            guideRef: "Sex Hormones and Sexually Transmitted Infections",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm4-07",
            question: "What is the main function of progesterone in the second half (days 15–28) of the menstrual cycle?",
            options: [
              "To trigger ovulation",
              "To maintain the thickened uterine lining",
              "To break down the uterine lining",
              "To stimulate follicle development",
            ],
            answerIndex: 1,
            explanation: "Progesterone, secreted by the corpus luteum after ovulation, maintains the thickened uterine lining ready for implantation. If no pregnancy occurs, progesterone falls and the lining breaks down. LH triggers ovulation; FSH stimulates follicles.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "core",
            hints: [
              "What structure secretes progesterone after ovulation?",
              "Is this hormone building, breaking, or maintaining the lining?",
              "What does the lining need to be ready for?",
            ],
          },
          {
            id: "bio-reproduction-bm4-08",
            question: "A woman is in the early stages of pregnancy. Her progesterone level stays high instead of falling at the end of the cycle. What is the direct consequence of this sustained high progesterone?",
            options: [
              "Menstruation occurs as normal",
              "The uterine lining is maintained and menstruation does not occur",
              "A new follicle is released immediately",
              "Oestrogen production stops permanently",
            ],
            answerIndex: 1,
            explanation: "High progesterone maintains the uterine lining, so it is not shed — menstruation does not occur, allowing the embryo to remain implanted. Sustained progesterone also inhibits FSH and LH, preventing further ovulation, but the direct effect on the lining is maintenance, not shedding.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "challenge",
            hints: [
              "What normally causes the lining to be shed at the end of a cycle?",
              "If progesterone does not fall, does shedding happen?",
              "Why is keeping the lining important in early pregnancy?",
              "Link 'lining maintained' to 'no menstruation'.",
            ],
            strategy: "Trace cause and effect: progesterone stays high → lining maintained → no menstruation.",
          },
          {
            id: "bio-reproduction-bm4-09",
            question: "The placenta has thin walls and a very large surface area of villi. Using Fick's principle, why do these features increase the rate of exchange?",
            options: [
              "Thin walls increase diffusion distance; large area slows diffusion",
              "Thin walls reduce diffusion distance and large area increases exchange surface, both increasing diffusion rate",
              "They keep maternal and fetal blood mixed",
              "They reduce the concentration gradient",
            ],
            answerIndex: 1,
            explanation: "Rate of diffusion increases with larger surface area and shorter diffusion distance. Thin placental walls shorten the distance substances must travel, and the large villus surface area provides more space for exchange — both raise the rate of diffusion. The blood supplies stay separate and the gradient is maintained, not reduced.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "challenge",
            hints: [
              "Recall the factors in Fick's principle: surface area, distance, gradient.",
              "Does a thinner wall mean a longer or shorter path?",
              "Does more surface area help or hinder exchange?",
              "Combine both effects on diffusion rate.",
            ],
            strategy: "Apply Fick's principle term by term to each structural feature.",
          },
          {
            id: "bio-reproduction-bm4-10",
            question: "Why is keeping the maternal and fetal blood supplies separate in the placenta an advantage, even though it relies on diffusion across membranes?",
            options: [
              "It allows the bloods to mix more quickly",
              "It prevents differences in blood pressure and immune attack between mother and fetus",
              "It increases the diffusion distance to slow exchange",
              "It removes the need for a concentration gradient",
            ],
            answerIndex: 1,
            explanation: "Keeping the circulations separate protects the fetus: the mother's higher blood pressure cannot damage delicate fetal vessels, and the mother's immune system is less likely to attack the fetus, which carries different antigens. Exchange still occurs efficiently by diffusion and active transport across the thin membranes.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "challenge",
            hints: [
              "Think about what could go wrong if the two bloods mixed.",
              "Consider blood pressure differences between mother and fetus.",
              "The fetus has antigens the mother does not — what risk does that pose?",
              "Separation is protective, not a hindrance to exchange.",
            ],
            strategy: "List the problems that mixing would cause, then see how separation avoids them.",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-reproduction-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Asexual vs sexual reproduction, variation and germination.",
        questions: [
          {
            id: "bio-reproduction-bq1-01",
            question: "State two differences between asexual and sexual reproduction. [2 marks]",
            marks: 2,
            modelAnswer: "Asexual reproduction involves only one parent, whereas sexual reproduction involves two parents (or two gametes). Asexual reproduction produces genetically identical offspring (clones) with no variation, whereas sexual reproduction produces offspring with genetic variation through the fusion of gametes.",
            markScheme: [
              "Asexual: one parent / no gamete fusion; sexual: two gametes fuse / two parents (1)",
              "Asexual: offspring identical / clones / no variation; sexual: offspring show genetic variation (1)",
            ],
            commonError: "Students give two points that are really the same idea (e.g. 'one parent' and 'no mate needed') — give two genuinely different differences.",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bq1-02",
            question: "Name the three conditions required for a seed to germinate, and state why oxygen is needed. [4 marks]",
            marks: 4,
            modelAnswer: "The three conditions required for germination are water, oxygen and a suitable temperature. Oxygen is needed so that the embryo can carry out aerobic respiration, which releases the energy (ATP) needed for growth and the chemical reactions of germination.",
            markScheme: [
              "Water (1)",
              "Oxygen (1)",
              "Suitable / warm temperature (1)",
              "Oxygen needed for aerobic respiration / to release energy for growth (1)",
            ],
            commonError: "Students list light as a requirement — light is not needed for germination itself.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bq1-03",
            question: "Explain why offspring produced by sexual reproduction show genetic variation, while those produced by asexual reproduction do not. [4 marks]",
            marks: 4,
            modelAnswer: "In sexual reproduction, gametes are produced by meiosis, which shuffles alleles (through independent assortment and crossing over) so that each gamete is genetically different. At fertilisation, two gametes from two different parents fuse at random, combining alleles from both parents. This produces offspring with new allele combinations, so they vary. In asexual reproduction there is only one parent and no gamete fusion; offspring are produced by mitosis, which makes genetically identical copies, so all offspring are clones with no genetic variation (apart from rare mutations).",
            markScheme: [
              "Sexual: gametes formed by meiosis / alleles shuffled so gametes differ (1)",
              "Sexual: fertilisation combines alleles from two parents at random (1)",
              "Sexual: offspring have new combinations of alleles → variation (1)",
              "Asexual: offspring produced by mitosis from one parent → genetically identical / clones (1)",
            ],
            commonError: "Students say variation comes only from fertilisation and forget meiosis, or say asexual reproduction 'uses meiosis'.",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "core",
            hints: [
              "Which type of cell division makes gametes, and what does it do to alleles?",
              "What happens to alleles at fertilisation?",
              "Which division produces identical cells in asexual reproduction?",
              "Conclude with why one route gives variation and the other does not.",
            ],
            strategy: "Contrast the two processes step by step: division type → source of alleles → result.",
          },
          {
            id: "bio-reproduction-bq1-04",
            question: "A grower can produce new strawberry plants either from seeds (sexual reproduction) or from runners (asexual reproduction). Discuss one advantage of each method for the grower. [4 marks]",
            marks: 4,
            modelAnswer: "Producing plants from runners (asexual) means all the new plants are genetically identical clones of the parent. This is an advantage because the grower can be sure every plant will have the same desirable qualities as the parent (for example fruit size and taste), and the plants are produced quickly without needing pollination. Producing plants from seeds (sexual) creates genetic variation among the offspring. This is an advantage because some offspring may have new, useful combinations of characteristics (such as disease resistance), which the grower could select and breed from to improve the crop.",
            markScheme: [
              "Runners: offspring identical/clones → reliable / same desirable qualities as parent (1)",
              "Runners: fast / no pollination or mate needed (1)",
              "Seeds: genetic variation produced (1)",
              "Seeds: some offspring may have useful new traits (e.g. disease resistance) to select from (1)",
            ],
            commonError: "Students describe advantages without linking them to the grower's practical goal (reliability vs improvement).",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "core",
            hints: [
              "What does the grower gain from identical plants?",
              "What does the grower gain from variation?",
              "Connect each method to a real benefit for the crop.",
              "Give one clear advantage per method.",
            ],
            strategy: "Pair each reproduction method with the practical benefit it gives the grower.",
          },
          {
            id: "bio-reproduction-bq1-05",
            question: "Define the term 'gamete' and explain why gametes are haploid. [3 marks]",
            marks: 3,
            modelAnswer: "A gamete is a sex cell (such as a sperm or egg cell in animals, or pollen and egg cell in plants) that fuses with another gamete during fertilisation. Gametes are haploid, meaning they contain only one set of chromosomes (half the normal number). This is important because when two haploid gametes fuse at fertilisation, the diploid number of chromosomes is restored. If gametes were diploid, the chromosome number would double each generation.",
            markScheme: [
              "Gamete = sex cell that fuses at fertilisation (1)",
              "Haploid = contains half / one set of chromosomes (1)",
              "So fertilisation restores the diploid number / keeps chromosome number constant across generations (1)",
            ],
            commonError: "Students define haploid as 'one chromosome' rather than one set / half the normal number of chromosomes.",
            guideRef: "Human Reproductive Systems",
            difficulty: "core",
            hints: [
              "What is a gamete used for?",
              "Define haploid precisely — one set, not one chromosome.",
              "Explain what would happen to chromosome number if gametes were diploid.",
            ],
          },
          {
            id: "bio-reproduction-bq1-06",
            question: "Describe the sequence of events from a pollen grain landing on a stigma to fertilisation in a flowering plant. [5 marks]",
            marks: 5,
            modelAnswer: "The pollen grain lands on a compatible stigma of the same species and germinates. It grows a pollen tube, which grows down through the style towards the ovary, guided by chemicals. The pollen tube enters an ovule through a small opening. The male gamete (nucleus) travels down the pollen tube and into the ovule. There it fuses with the female gamete (egg cell) — this fusion is fertilisation, forming a zygote.",
            markScheme: [
              "Pollen germinates on the stigma (1)",
              "Pollen tube grows down through the style (1)",
              "Pollen tube reaches / enters the ovule in the ovary (1)",
              "Male nucleus travels down the pollen tube (1)",
              "Male nucleus fuses with the egg cell / fertilisation forms a zygote (1)",
            ],
            commonError: "Students say 'the pollen fertilises the egg', missing that the pollen tube grows and only the male nucleus travels to fuse with the egg cell.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "core",
            hints: [
              "What does the pollen grain do first on the stigma?",
              "Through which structure does the tube grow?",
              "What actually travels down the tube?",
              "Where and between what does fusion occur?",
            ],
            strategy: "List the steps in strict order and name the male nucleus explicitly.",
          },
          {
            id: "bio-reproduction-bq1-07",
            question: "Seed dispersal moves seeds away from the parent plant. Explain why dispersal away from the parent is an advantage to the offspring. [3 marks]",
            marks: 3,
            modelAnswer: "Dispersing seeds away from the parent reduces competition between the offspring and the parent plant for resources such as light, water and mineral ions. It also reduces competition between the offspring themselves, because they are spread out rather than crowded together. In addition, it allows the species to colonise new areas, increasing the chance that some seeds reach favourable conditions.",
            markScheme: [
              "Reduces competition with the parent plant (for light/water/minerals/space) (1)",
              "Reduces competition between the offspring / overcrowding (1)",
              "Allows colonisation of new areas / reaching favourable conditions (1)",
            ],
            commonError: "Students just write 'so they don't compete' once — name what they compete for and mention colonising new areas for full marks.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "core",
            hints: [
              "What resources would crowded plants compete for?",
              "Who does the seedling compete with if it grows right next to the parent?",
              "What is the benefit of reaching new ground?",
            ],
          },
          {
            id: "bio-reproduction-bq1-08",
            question: "A student sets up four test tubes of cress seeds to investigate germination. Tube A: damp cotton wool, room temperature, in the light. Tube B: damp cotton wool, room temperature, in the dark. Tube C: dry cotton wool, room temperature, in the light. Tube D: damp cotton wool, in a freezer, in the light.\n\n(a) Predict which tube(s) will show germination and explain your answer. [3]\n(b) Explain why tube A and tube B together show that light is not required for germination. [2]",
            marks: 5,
            modelAnswer: "(a) Tubes A and B will germinate. Both have water (damp cotton wool), oxygen (from the air) and a suitable temperature (room temperature), which are the three conditions needed. Tube C will not germinate because it lacks water (dry cotton wool). Tube D will not germinate because the freezer temperature is too low for the enzymes controlling germination to work.\n\n(b) Tubes A and B are identical except that A is in the light and B is in the dark. Both germinate equally well, so the presence or absence of light makes no difference — this shows that light is not required for germination.",
            markScheme: [
              "(a) A and B germinate (1)",
              "(a) C fails — no water; D fails — too cold for enzymes (1)",
              "(a) A and B have all three conditions: water, oxygen, suitable temperature (1)",
              "(b) A and B differ only in light (a fair comparison) (1)",
              "(b) Both germinate, so light makes no difference / is not required (1)",
            ],
            commonError: "Students predict that the dark tube (B) will not germinate, wrongly assuming light is needed.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "challenge",
            hints: [
              "Check each tube against the three required conditions.",
              "Which single condition is missing in C? In D?",
              "For part (b), what is the only variable that differs between A and B?",
              "If both germinate despite that difference, what does it prove?",
            ],
            strategy: "Test each tube against water, oxygen and temperature; use matched pairs to isolate one variable.",
          },
          {
            id: "bio-reproduction-bq1-09",
            question: "[Challenge] A small island population of a flowering plant reproduces almost entirely by self-pollination. A botanist warns that this population may be vulnerable in the long term. Explain the genetic reasoning behind this warning, and suggest one way the plant could still gain new variation. [5 marks]",
            marks: 5,
            modelAnswer: "In self-pollination, both gametes come from the same plant, so there is very little mixing of alleles from genetically different individuals. Over many generations this produces offspring that are very similar genetically, with low genetic variation in the population. Low variation is a problem because if the environment changes or a new disease arrives, it is unlikely that any individuals will have alleles that allow them to survive, so the whole population could be wiped out. The population also cannot adapt readily by natural selection because there is little variation for selection to act on. New variation could still arise through random mutation, which can create new alleles, or if pollen from a genetically different plant reached the island (cross-pollination), introducing new alleles.",
            markScheme: [
              "Self-pollination → both gametes from same plant → little allele mixing (1)",
              "Over generations → low genetic variation in the population (1)",
              "Low variation → unlikely any individuals survive new disease/environmental change (1)",
              "Little variation for natural selection to act on / poor adaptability (1)",
              "New variation via mutation / occasional cross-pollination from another plant (1)",
            ],
            commonError: "Students say self-pollination produces clones — it still involves gametes and meiosis, so it produces some variation, just much less than cross-pollination.",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "challenge",
            hints: [
              "Where do both gametes come from in self-pollination?",
              "What does that do to variation over many generations?",
              "Why is low variation dangerous if conditions change?",
              "Name a source of brand-new alleles that does not need another plant.",
            ],
            strategy: "Link self-pollination → low variation → reduced ability to survive change → sources of new variation.",
            solutions: [
              {
                label: "Genetic reasoning",
                steps: [
                  "Self-pollination: gametes from one plant → restricted allele pool.",
                  "Generations of selfing → population becomes genetically uniform (low variation).",
                  "If a new selection pressure appears, few or no resistant alleles exist → population at risk.",
                  "New variation can enter only via mutation or rare cross-pollination from a different plant.",
                ],
              },
            ],
          },
          {
            id: "bio-reproduction-bq1-10",
            question: "[Challenge] Explain how meiosis and fertilisation together account for the very large number of genetically different offspring possible from two parents. Refer to chromosomes and alleles in your answer. [4 marks]",
            marks: 4,
            modelAnswer: "During meiosis, the homologous chromosomes (and the alleles they carry) are separated and assorted independently into the gametes, and crossing over exchanges sections of chromosomes. This means each parent can produce a huge number of genetically different gametes, each with a different combination of alleles. At fertilisation, any one of the father's many possible sperm can fuse with any one of the mother's many possible egg cells, and this fusion is random. Combining a very large number of possible gametes from each parent in a random fertilisation gives an enormous number of genetically different possible offspring.",
            markScheme: [
              "Meiosis: independent assortment / crossing over shuffles alleles between gametes (1)",
              "Each parent can produce many genetically different gametes (1)",
              "Fertilisation is random — any sperm can fuse with any egg (1)",
              "Random combination of many possible gametes → very large number of different offspring (1)",
            ],
            commonError: "Students mention only fertilisation or only meiosis; both processes must be combined to explain the scale of variation.",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "challenge",
            hints: [
              "What two events in meiosis shuffle alleles?",
              "How many different gametes can one parent make?",
              "Is fertilisation predictable or random?",
              "Multiply the possibilities from each parent together in your reasoning.",
            ],
            strategy: "Combine variation from meiosis (per parent) with random fertilisation (between parents).",
          },
        ],
      },
      {
        id: "bio-reproduction-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Flower structure, pollination strategies and plant reproduction.",
        questions: [
          {
            id: "bio-reproduction-bq2-01",
            question: "Name the parts that make up (a) the stamen and (b) the carpel of a flower. [4 marks]",
            marks: 4,
            modelAnswer: "(a) The stamen (the male part) is made up of the anther, which produces pollen, and the filament, which is the stalk that supports the anther. (b) The carpel (the female part) is made up of the stigma, which receives pollen, the style, which connects the stigma to the ovary, and the ovary, which contains the ovule(s).",
            markScheme: [
              "Stamen = anther (1) and filament (1)",
              "Carpel = stigma + style (1) and ovary (containing ovule) (1)",
            ],
            commonError: "Students mix male and female parts, e.g. listing the stigma as part of the stamen.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bq2-02",
            question: "State the difference between pollination and fertilisation in a flowering plant. [2 marks]",
            marks: 2,
            modelAnswer: "Pollination is the transfer of pollen from an anther to a stigma of a flower of the same species. Fertilisation is the fusion of the male nucleus (from the pollen tube) with the female gamete (egg cell) inside the ovule.",
            markScheme: [
              "Pollination = transfer of pollen from anther to stigma (1)",
              "Fertilisation = fusion of male nucleus with egg cell (in the ovule) (1)",
            ],
            commonError: "Students treat the two terms as the same — pollination is transfer, fertilisation is fusion of gametes.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bq2-03",
            question: "A flower is wind-pollinated. Describe three features you would expect it to have, and for each explain how it suits wind pollination. [6 marks]",
            marks: 6,
            modelAnswer: "It would have small, dull or absent petals with no scent or nectar, because there is no need to attract insects — wind does the pollination, so investing in lures would waste energy. It would produce large amounts of small, light, smooth pollen, because this pollen is easily carried by air currents and large numbers compensate for the fact that most grains do not reach a stigma. It would have anthers on long filaments that hang outside the flower, so that the pollen is exposed to the wind and shed freely into moving air. It would also have a large, feathery stigma hanging outside the flower, which provides a large surface area to catch pollen grains drifting past in the air.",
            markScheme: [
              "Small/dull/no petals, no scent/nectar — no need to attract insects (1 feature + 1 reason)",
              "Pollen small, light, smooth, abundant — carried by air / compensates for random loss (1 feature + 1 reason)",
              "Anthers/stigma hang outside (feathery stigma) — exposed to wind / large area to catch pollen (1 feature + 1 reason)",
            ],
            commonError: "Students list features without explaining how each suits wind pollination — each mark needs a feature AND its reason.",
            guideRef: "Insect- vs Wind-Pollinated Flowers",
            difficulty: "core",
            hints: [
              "For each feature, finish the sentence 'because...'.",
              "Think about what is NOT needed when wind, not insects, carries pollen.",
              "Consider amount and shape of pollen for air transport.",
              "Where are the anthers and stigma positioned, and why?",
            ],
            strategy: "Give three feature–reason pairs; use 'because' to force an explanation each time.",
          },
          {
            id: "bio-reproduction-bq2-04",
            question: "Explain how an insect-pollinated flower is adapted to ensure pollen is transferred from one flower to another by insects. [5 marks]",
            marks: 5,
            modelAnswer: "Insect-pollinated flowers have large, brightly coloured petals that attract insects visually, and they produce scent, which attracts insects by smell. They produce nectar deep in the flower, which acts as a reward, so the insect must push past the reproductive parts to reach it. The anthers are positioned inside the flower so that they brush against the insect's body and deposit sticky or spiky pollen, which clings to the insect. When the insect visits another flower of the same species, this pollen is rubbed onto the sticky stigma, which is also positioned inside the flower, achieving cross-pollination.",
            markScheme: [
              "Brightly coloured petals / scent — attract insects (1)",
              "Nectar — reward that draws the insect into the flower (1)",
              "Anthers positioned to brush against the insect (1)",
              "Pollen sticky/spiky — clings to the insect's body (1)",
              "Sticky stigma (inside flower) picks pollen off the next insect / achieves transfer (1)",
            ],
            commonError: "Students stop at 'attracts insects' and forget to explain how pollen actually attaches to and is removed from the insect.",
            guideRef: "Insect- vs Wind-Pollinated Flowers",
            difficulty: "core",
            hints: [
              "How does the flower get noticed by an insect?",
              "Why does the insect bother to visit?",
              "How does pollen get onto the insect?",
              "How does that pollen reach the next flower's stigma?",
            ],
            strategy: "Follow the journey: attract → reward → load pollen onto insect → unload onto next stigma.",
          },
          {
            id: "bio-reproduction-bq2-05",
            question: "After fertilisation, describe what happens to (a) the ovule, (b) the ovary wall, and (c) the rest of the flower (petals and stamens). [3 marks]",
            marks: 3,
            modelAnswer: "(a) The fertilised ovule develops into a seed, which contains the embryo and a food store. (b) The ovary wall develops into the fruit, which surrounds and often helps to protect or disperse the seeds. (c) The petals and stamens are no longer needed and usually wither and fall off the flower.",
            markScheme: [
              "(a) Ovule → seed (containing the embryo) (1)",
              "(b) Ovary wall → fruit (1)",
              "(c) Petals/stamens wither and fall off / die (1)",
            ],
            commonError: "Students swap ovule and ovary, saying the ovary becomes the seed.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "core",
            hints: [
              "Which structure held the egg cell, and what does it become?",
              "Which structure surrounded the ovules, and what does it become?",
              "Are the parts that attracted pollinators still needed?",
            ],
          },
          {
            id: "bio-reproduction-bq2-06",
            question: "Explain why cross-pollination produces offspring with more genetic variation than self-pollination. [3 marks]",
            marks: 3,
            modelAnswer: "In cross-pollination, pollen is transferred between two genetically different plants of the same species, so the gametes that fuse carry different alleles from two separate genetic backgrounds. This produces offspring with new combinations of alleles, giving more variation. In self-pollination, both gametes come from the same plant, so they carry a much narrower range of alleles, and the offspring are more genetically similar with less variation.",
            markScheme: [
              "Cross-pollination: gametes come from two genetically different plants (1)",
              "Combines alleles from two different genetic backgrounds → new combinations (1)",
              "Self-pollination: both gametes from one plant → narrower allele range → less variation (1)",
            ],
            commonError: "Students say self-pollination gives 'no variation' — it gives less, not zero, because meiosis still shuffles alleles within the one plant.",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "core",
            hints: [
              "How many genetically different plants supply gametes in each case?",
              "More genetic sources means more or fewer allele combinations?",
              "Be careful: self-pollination still has some variation.",
            ],
          },
          {
            id: "bio-reproduction-bq2-07",
            question: "Describe the function of (a) the pollen tube and (b) the style during fertilisation in a flowering plant. [2 marks]",
            marks: 2,
            modelAnswer: "(a) The pollen tube grows from the pollen grain down through the style and carries the male nucleus to the ovule so it can fuse with the egg cell. (b) The style supports the stigma and provides the moist tissue through which the pollen tube grows down to reach the ovary and ovule.",
            markScheme: [
              "(a) Pollen tube carries the male nucleus to the ovule / egg cell (1)",
              "(b) Style is the tissue/route through which the pollen tube grows to the ovary (1)",
            ],
            commonError: "Students confuse the style (a route/support) with the stigma (the pollen-receiving surface).",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "core",
            hints: [
              "What does the pollen tube transport, and to where?",
              "What physical role does the style play for the tube?",
              "Do not confuse style with stigma.",
            ],
          },
          {
            id: "bio-reproduction-bq2-08",
            question: "A student claims that growing flowering plants from cuttings is 'sexual reproduction because a new plant is made'. Explain why this claim is incorrect. [3 marks]",
            marks: 3,
            modelAnswer: "Growing a plant from a cutting is asexual, not sexual, reproduction. It involves only one parent and no gametes, and there is no fusion of male and female gametes (no fertilisation). The new plant is produced by mitosis from the parent's cells, so it is a genetically identical clone of the parent. Sexual reproduction, by contrast, requires the fusion of two gametes and produces offspring with genetic variation. Making a new individual is not enough on its own to make a process 'sexual'.",
            markScheme: [
              "Cuttings involve one parent / no gametes / no fertilisation (1)",
              "New plant produced by mitosis → genetically identical clone (1)",
              "Sexual reproduction requires fusion of gametes / produces variation (so cuttings are asexual) (1)",
            ],
            commonError: "Students focus only on 'one parent' and forget to state that there is no gamete fusion and the offspring are clones.",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "core",
            hints: [
              "How many parents and gametes are involved in a cutting?",
              "Which type of cell division produces the new plant?",
              "What is the defining feature of sexual reproduction that is missing?",
            ],
          },
          {
            id: "bio-reproduction-bq2-09",
            question: "[Challenge] A gardener notices that a particular self-incompatible apple variety (its own pollen cannot fertilise its own flowers) produces very few apples when grown alone, but produces many apples when a different apple variety is planted nearby. Explain these observations. [5 marks]",
            marks: 5,
            modelAnswer: "Apples are insect-pollinated and need pollen to be transferred to the stigma for fertilisation, which must happen before fruit (apples) can develop from the ovary. Because this variety is self-incompatible, its own pollen cannot fertilise its own flowers, so when it is grown alone there is no source of compatible pollen and very little fertilisation occurs, so few apples form. When a different (compatible) apple variety is planted nearby, insects carry pollen from the second variety to the first variety's stigmas (cross-pollination). This pollen can fertilise the flowers, so many ovules are fertilised, many ovaries develop into apples, and the yield increases. This also has the benefit of producing genetic variation in the seeds.",
            markScheme: [
              "Fruit (apples) only form after fertilisation of the ovule (1)",
              "Self-incompatible: own pollen cannot fertilise own flowers (1)",
              "Grown alone: no compatible pollen → little fertilisation → few apples (1)",
              "Second variety provides compatible pollen, carried by insects (cross-pollination) (1)",
              "More flowers fertilised → more ovaries develop into apples / higher yield (1)",
            ],
            commonError: "Students forget that fruit develops from the ovary only after fertilisation, so they cannot explain why pollination affects apple number.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "challenge",
            hints: [
              "What must happen before an ovary can become a fruit?",
              "Why can the lone tree not fertilise itself?",
              "What does the second variety provide?",
              "How does the pollen get from one tree to the other?",
            ],
            strategy: "Link fertilisation to fruit formation, then explain how a pollen source restores it.",
          },
          {
            id: "bio-reproduction-bq2-10",
            question: "[Challenge] Compare insect-pollinated and wind-pollinated flowers in terms of the quantity and type of pollen produced, and explain how each is suited to its method of pollen transfer. [4 marks]",
            marks: 4,
            modelAnswer: "Insect-pollinated flowers produce relatively small amounts of pollen, and the grains are larger, sticky or spiky. This suits insect transfer because the pollen needs to cling to the insect's body, and because an insect carries pollen fairly directly from one flower to another of the same species, little pollen is wasted, so only small amounts are needed. Wind-pollinated flowers produce very large amounts of pollen, and the grains are small, light and smooth. This suits wind transfer because light, smooth grains are easily carried by air currents, and because the wind disperses pollen at random, most grains never reach a stigma, so huge quantities are needed to make successful pollination likely.",
            markScheme: [
              "Insect: small amount of pollen; large/sticky/spiky grains (1)",
              "Insect: sticky/spiky to cling to insect; directed transfer wastes little, so little needed (1)",
              "Wind: large amount of pollen; small/light/smooth grains (1)",
              "Wind: light/smooth carried by air; random dispersal wastes most, so large amount needed (1)",
            ],
            commonError: "Students compare only the type OR only the quantity of pollen; the question asks for both, each linked to the transfer method.",
            guideRef: "Insect- vs Wind-Pollinated Flowers",
            difficulty: "challenge",
            hints: [
              "Compare amount of pollen first, then grain type.",
              "Why does insect pollen need to be sticky?",
              "Why does wind pollen need to be light and abundant?",
              "Link efficiency of transfer to the quantity required.",
            ],
            strategy: "Address both quantity and type for each flower, each tied to how the pollen travels.",
          },
        ],
      },
      {
        id: "bio-reproduction-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Human reproductive systems, gametes, fertilisation and development.",
        questions: [
          {
            id: "bio-reproduction-bq3-01",
            question: "State the function of (a) the testis, (b) the oviduct, and (c) the uterus in human reproduction. [3 marks]",
            marks: 3,
            modelAnswer: "(a) The testis produces sperm (and the hormone testosterone). (b) The oviduct (Fallopian tube) carries the egg from the ovary towards the uterus and is the site where fertilisation occurs. (c) The uterus is where the embryo implants and develops into a fetus during pregnancy.",
            markScheme: [
              "(a) Testis produces sperm / testosterone (1)",
              "(b) Oviduct carries egg / site of fertilisation (1)",
              "(c) Uterus is where the embryo implants and develops (1)",
            ],
            commonError: "Students place fertilisation in the uterus rather than the oviduct.",
            guideRef: "Human Reproductive Systems",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bq3-02",
            question: "Sperm and egg cells are both gametes. State two ways in which a sperm cell differs in structure from an egg cell. [2 marks]",
            marks: 2,
            modelAnswer: "A sperm cell is much smaller than an egg cell, and a sperm cell has a tail (flagellum) for swimming whereas the egg cell does not. (Other acceptable points: the sperm has many mitochondria/an acrosome; the egg has a large store of nutrients/cytoplasm and a jelly coat.)",
            markScheme: [
              "Sperm smaller / egg much larger (1)",
              "Sperm has a tail/flagellum (and mitochondria/acrosome); egg has no tail / has food store / jelly coat (1)",
            ],
            commonError: "Students give differences in function rather than structure, or repeat the same idea twice.",
            guideRef: "Human Reproductive Systems",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bq3-03",
            question: "Explain how a sperm cell is adapted for its function of reaching and fertilising an egg cell. [5 marks]",
            marks: 5,
            modelAnswer: "The sperm cell has a long tail (flagellum) that beats to propel the sperm so it can swim towards the egg. Its midpiece contains many mitochondria that carry out aerobic respiration to release the energy (ATP) needed for the tail to move. The sperm is small and streamlined, which reduces resistance and helps it move efficiently through the fluid of the female reproductive tract. The head contains a haploid nucleus carrying the male genetic material to combine with the egg. At the front of the head is an acrosome, which contains enzymes that digest the egg's outer layers so the sperm nucleus can enter and fertilise the egg.",
            markScheme: [
              "Tail/flagellum — propulsion / swimming towards egg (1)",
              "Many mitochondria — release energy (ATP) by respiration for movement (1)",
              "Streamlined/small shape — moves efficiently through fluid (1)",
              "Haploid nucleus — carries genetic material to combine with the egg (1)",
              "Acrosome — enzymes digest/penetrate the egg's outer layers (1)",
            ],
            commonError: "Students mention the tail and acrosome but forget to link the mitochondria to energy by respiration.",
            guideRef: "Human Reproductive Systems",
            difficulty: "core",
            hints: [
              "Name each feature, then say what it does.",
              "How does the sperm get its energy to swim?",
              "How does the sperm get inside the egg?",
              "Remember the genetic role of the nucleus.",
            ],
            strategy: "Use feature → function pairs covering movement, energy, entry and genetic material.",
          },
          {
            id: "bio-reproduction-bq3-04",
            question: "Describe what happens from fertilisation in the oviduct to implantation in the uterus. [4 marks]",
            marks: 4,
            modelAnswer: "At fertilisation in the oviduct, one sperm nucleus fuses with the egg cell's nucleus to form a diploid zygote (46 chromosomes). The zygote then divides repeatedly by mitosis as it is moved along the oviduct towards the uterus, forming a ball of genetically identical cells (an embryo). When the embryo reaches the uterus, it sinks into and embeds in the thickened uterine lining (endometrium); this is called implantation, and it occurs several days after fertilisation.",
            markScheme: [
              "Sperm fuses with egg in oviduct → diploid zygote (1)",
              "Zygote divides by mitosis (1)",
              "Forms a ball of cells / embryo as it travels to the uterus (1)",
              "Embryo embeds in the uterine lining (endometrium) — implantation (1)",
            ],
            commonError: "Students say the embryo divides by meiosis; growth of the embryo is by mitosis.",
            guideRef: "Human Reproductive Systems",
            difficulty: "core",
            hints: [
              "What forms when the two gametes fuse?",
              "Which division lets the zygote become many cells?",
              "Where is the embryo travelling to?",
              "What is the embedding step called?",
            ],
            strategy: "Sequence: fertilisation → mitosis → embryo travels → implantation.",
          },
          {
            id: "bio-reproduction-bq3-05",
            question: "A human body cell contains 46 chromosomes. State the number of chromosomes in (a) a sperm cell, (b) an egg cell, and (c) a zygote, and explain why a reduction in chromosome number is necessary in gamete formation. [4 marks]",
            marks: 4,
            modelAnswer: "(a) A sperm cell contains 23 chromosomes. (b) An egg cell contains 23 chromosomes. (c) A zygote contains 46 chromosomes. The number must be halved (to 23) when gametes are made by meiosis, because at fertilisation two gametes fuse. If the gametes still had 46 chromosomes each, the zygote would have 92, and the chromosome number would double every generation. Halving it in the gametes keeps the chromosome number constant at 46 from one generation to the next.",
            markScheme: [
              "(a) Sperm = 23 (1)",
              "(b) Egg = 23 (1)",
              "(c) Zygote = 46 (1)",
              "Halving prevents doubling each generation / keeps chromosome number constant after fertilisation (1)",
            ],
            commonError: "Students give the zygote 23 chromosomes, forgetting that fertilisation adds the two gametes together.",
            guideRef: "Human Reproductive Systems",
            difficulty: "core",
            hints: [
              "Gametes are haploid — half of 46.",
              "Add the two gametes for the zygote.",
              "What would happen to the number if gametes were diploid?",
              "Link the halving to keeping the number constant.",
            ],
            solutions: [
              {
                label: "Chromosome arithmetic",
                steps: [
                  "Body cell (diploid) = 46 chromosomes.",
                  "Meiosis halves this: sperm = 46 ÷ 2 = 23; egg = 23.",
                  "Fertilisation adds gametes: 23 + 23 = 46 in the zygote.",
                  "If gametes were 46 each, zygote would be 92 and double each generation — so halving is essential.",
                ],
              },
            ],
          },
          {
            id: "bio-reproduction-bq3-06",
            question: "Explain how the egg cell is adapted to its functions in fertilisation and early development. [4 marks]",
            marks: 4,
            modelAnswer: "The egg cell is large and contains a lot of cytoplasm with stored nutrients (yolk), which nourish the embryo during its early development before it implants and can obtain food from the mother. It has a haploid nucleus carrying the female genetic material to combine with the sperm's nucleus at fertilisation. It is surrounded by a jelly coat (membrane) that changes and hardens immediately after one sperm enters, preventing any further sperm from entering (preventing polyspermy), which ensures the zygote has the correct number of chromosomes.",
            markScheme: [
              "Large / lots of cytoplasm with nutrient (yolk) store — nourishes early embryo (1)",
              "Haploid nucleus — carries genetic material to combine with sperm (1)",
              "Jelly coat / membrane changes after fertilisation (1)",
              "Prevents entry of more sperm (polyspermy) / ensures correct chromosome number (1)",
            ],
            commonError: "Students describe the egg as 'just bigger' without linking the size to its food store for the embryo.",
            guideRef: "Human Reproductive Systems",
            difficulty: "core",
            hints: [
              "Why does the egg need so much cytoplasm?",
              "What genetic role does it share with the sperm?",
              "What does the jelly coat do after one sperm enters?",
              "Why is blocking extra sperm important?",
            ],
            strategy: "Match each egg feature to nourishment, genetics or blocking polyspermy.",
          },
          {
            id: "bio-reproduction-bq3-07",
            question: "Name the male hormone testosterone's site of production and describe two effects it has at puberty. [3 marks]",
            marks: 3,
            modelAnswer: "Testosterone is produced in the testes. At puberty it stimulates the development of male secondary sexual characteristics, for example growth of facial and body hair and deepening of the voice. It also stimulates the production of sperm and the growth of the male reproductive organs.",
            markScheme: [
              "Produced in the testes (1)",
              "One secondary sexual characteristic (e.g. facial/body hair, deeper voice, muscle growth) (1)",
              "A second effect (e.g. another secondary sexual characteristic OR stimulates sperm production) (1)",
            ],
            commonError: "Students name effects that belong to oestrogen (e.g. breast development) under testosterone.",
            guideRef: "Sex Hormones and Sexually Transmitted Infections",
            difficulty: "core",
            hints: [
              "Which organ also makes the male gametes?",
              "Recall the visible changes in boys at puberty.",
              "Testosterone also affects gamete production.",
            ],
          },
          {
            id: "bio-reproduction-bq3-08",
            question: "Explain why the position of the testes in the scrotum, outside the main body cavity, is important for their function. [3 marks]",
            marks: 3,
            modelAnswer: "The testes produce sperm, and sperm production works best at a temperature slightly lower than the core body temperature. Holding the testes in the scrotum, outside the main body cavity, keeps them a few degrees cooler than the rest of the body. This lower temperature is the optimum for sperm production, so keeping the testes too warm (inside the body) would reduce the number of healthy sperm produced.",
            markScheme: [
              "Sperm production occurs in the testes (1)",
              "Scrotum keeps testes slightly cooler than core body temperature (1)",
              "This lower temperature is optimal for sperm production / too warm reduces sperm production (1)",
            ],
            commonError: "Students say the position is for 'protection' rather than temperature control.",
            guideRef: "Human Reproductive Systems",
            difficulty: "core",
            hints: [
              "What process happens in the testes?",
              "How does temperature outside the body compare with inside?",
              "Why might being too warm be harmful for this process?",
            ],
          },
          {
            id: "bio-reproduction-bq3-09",
            question: "[Challenge] Twins can be identical or non-identical. Identical twins develop when a single fertilised egg splits into two embryos; non-identical twins develop when two eggs are released and each is fertilised by a different sperm. Explain why identical twins are genetically identical to each other, but non-identical twins are not. [5 marks]",
            marks: 5,
            modelAnswer: "Identical twins come from a single zygote, formed when one sperm fertilised one egg. This zygote divides by mitosis, which produces genetically identical cells. When the early ball of cells splits into two embryos, both embryos contain the same genetic material copied from that one zygote, so the twins have identical alleles and are genetically identical (and the same sex). Non-identical twins come from two separate eggs, each fertilised by a different sperm, forming two different zygotes. Because meiosis makes each egg and each sperm genetically different, and fertilisation combines them randomly, the two zygotes have different combinations of alleles — just like ordinary siblings born at different times. They are therefore not genetically identical and may be different sexes.",
            markScheme: [
              "Identical twins: one egg + one sperm → one zygote (1)",
              "Zygote divides by mitosis (identical cells) then splits → same genetic material in both (1)",
              "So identical twins have the same alleles / genetically identical (1)",
              "Non-identical: two eggs each fertilised by a different sperm → two zygotes (1)",
              "Different gametes (meiosis) combined randomly → different alleles / like ordinary siblings (1)",
            ],
            commonError: "Students assume all twins are genetically identical, not distinguishing the one-zygote from the two-zygote origin.",
            guideRef: "Human Reproductive Systems",
            difficulty: "challenge",
            hints: [
              "How many zygotes start each type of twin?",
              "Which division copies a zygote's genes exactly?",
              "Why are two separate zygotes genetically different?",
              "Compare non-identical twins with ordinary siblings.",
            ],
            strategy: "Trace each twin type back to the number of zygotes and the division involved.",
          },
          {
            id: "bio-reproduction-bq3-10",
            question: "[Challenge] In IVF (in vitro fertilisation), eggs are collected from the ovaries, mixed with sperm in a dish, and an early embryo is later placed into the uterus. Using your knowledge of normal human reproduction, explain (a) why fertilisation can occur successfully in a dish, and (b) why the embryo is placed into the uterus rather than the oviduct. [4 marks]",
            marks: 4,
            modelAnswer: "(a) Fertilisation is simply the fusion of a sperm nucleus with an egg nucleus; it does not have to happen inside the body. As long as a healthy sperm and a mature egg are brought together in suitable conditions (warmth and a fluid medium), the sperm can use its acrosome enzymes to penetrate the egg and the nuclei can fuse to form a zygote, just as it would in the oviduct. (b) In normal reproduction the embryo implants and develops in the uterus, whose thickened lining provides a blood supply and nutrients for the developing embryo. By the time an IVF embryo is transferred, it is at the stage where it would naturally be reaching the uterus to implant, so it is placed there to give it the best chance of embedding in the uterine lining and developing.",
            markScheme: [
              "(a) Fertilisation = fusion of sperm and egg nuclei, does not require the body / oviduct (1)",
              "(a) Given suitable conditions, sperm penetrates egg and nuclei fuse to form a zygote (1)",
              "(b) The uterus (lining) is where the embryo normally implants / has blood supply and nutrients (1)",
              "(b) The transferred embryo is at the stage to implant, so it is placed where implantation occurs (1)",
            ],
            commonError: "Students think fertilisation must occur in the oviduct and so cannot explain how IVF works in a dish.",
            guideRef: "Human Reproductive Systems",
            difficulty: "challenge",
            hints: [
              "What is the essential definition of fertilisation?",
              "Does that process strictly need to be inside the body?",
              "Where does an embryo normally implant?",
              "Why does the uterine lining suit a developing embryo?",
            ],
            strategy: "Apply the core definitions of fertilisation and implantation to the artificial setting.",
          },
        ],
      },
      {
        id: "bio-reproduction-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Menstrual cycle, hormones, pregnancy, placenta and STIs.",
        questions: [
          {
            id: "bio-reproduction-bq4-01",
            question: "Name the hormone that (a) triggers ovulation and (b) maintains the uterine lining after ovulation. State where each is produced. [4 marks]",
            marks: 4,
            modelAnswer: "(a) Ovulation is triggered by LH (luteinising hormone), which is produced by the pituitary gland. (b) The uterine lining is maintained after ovulation by progesterone, which is produced by the corpus luteum (in the ovary).",
            markScheme: [
              "(a) LH (1); produced by the pituitary gland (1)",
              "(b) Progesterone (1); produced by the corpus luteum / ovary (1)",
            ],
            commonError: "Students confuse LH and FSH, or say progesterone is made in the pituitary rather than the corpus luteum.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bq4-02",
            question: "State two substances that pass from the mother to the fetus across the placenta, and two substances that pass from the fetus to the mother. [4 marks]",
            marks: 4,
            modelAnswer: "From mother to fetus: oxygen and glucose (also acceptable: amino acids, water, minerals, vitamins, antibodies). From fetus to mother: carbon dioxide and urea.",
            markScheme: [
              "Mother → fetus: oxygen (1)",
              "Mother → fetus: glucose / amino acids / antibodies / vitamins / minerals (1)",
              "Fetus → mother: carbon dioxide (1)",
              "Fetus → mother: urea (1)",
            ],
            commonError: "Students list urea or carbon dioxide as passing to the fetus, reversing the direction of waste transfer.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bq4-03",
            question: "Describe the events of the menstrual cycle from day 1 to ovulation (about day 14), naming the hormones involved. [5 marks]",
            marks: 5,
            modelAnswer: "On days 1–5 the uterine lining breaks down and is shed (menstruation). FSH, released from the pituitary gland, stimulates a follicle in the ovary to mature. The maturing follicle secretes oestrogen, so oestrogen levels rise. Oestrogen causes the uterine lining to repair and thicken in preparation for a possible pregnancy. When oestrogen reaches a high level, it triggers a surge of LH from the pituitary gland. This LH surge causes ovulation — the release of the mature egg from the ovary — at around day 14.",
            markScheme: [
              "Days 1–5: uterine lining breaks down / menstruation (1)",
              "FSH stimulates a follicle to mature in the ovary (1)",
              "Follicle secretes oestrogen → oestrogen rises (1)",
              "Oestrogen repairs and thickens the uterine lining (1)",
              "High oestrogen triggers LH surge → ovulation (~day 14) (1)",
            ],
            commonError: "Students leave out FSH or attribute the thickening of the lining to progesterone instead of oestrogen.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "core",
            hints: [
              "Start at day 1 — what is happening to the lining?",
              "Which pituitary hormone acts first on the ovary?",
              "Which hormone does the follicle release, and what does it do?",
              "What does high oestrogen trigger to cause ovulation?",
            ],
            strategy: "Go chronologically, naming hormone, source and effect at each stage.",
          },
          {
            id: "bio-reproduction-bq4-04",
            question: "Explain how the structure of the placenta is adapted for efficient exchange of substances between the mother and the fetus. [4 marks]",
            marks: 4,
            modelAnswer: "The placenta has a large surface area, produced by many finger-like villi, which increases the rate of exchange. The walls (membranes) between the maternal and fetal blood are very thin, giving a short diffusion distance so substances cross quickly. There is a rich blood supply on both the maternal and fetal sides, which maintains steep concentration gradients (for example, keeping oxygen high on the maternal side and low on the fetal side) so diffusion continues rapidly. Importantly, the maternal and fetal blood do not mix; exchange takes place across the thin membranes by diffusion and active transport.",
            markScheme: [
              "Large surface area / villi — more space for exchange (1)",
              "Thin walls/membranes — short diffusion distance (1)",
              "Rich blood supply both sides — maintains concentration gradients (1)",
              "Maternal and fetal blood do not mix / exchange across membranes (1)",
            ],
            commonError: "Students say the placenta lets the two bloods mix; in fact exchange happens across membranes without mixing.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "core",
            hints: [
              "Recall the factors that speed up diffusion.",
              "What do villi do to the surface area?",
              "Why are thin walls helpful?",
              "Does the blood actually mix?",
            ],
            strategy: "Use surface area, diffusion distance and concentration gradient as your framework.",
          },
          {
            id: "bio-reproduction-bq4-05",
            question: "State two functions of the amniotic fluid that surrounds the developing fetus. [2 marks]",
            marks: 2,
            modelAnswer: "The amniotic fluid cushions the fetus and protects it from mechanical shock or knocks. It also helps to keep the fetus at a stable temperature (and allows the fetus to move).",
            markScheme: [
              "Protects/cushions the fetus against mechanical shock (1)",
              "Maintains a stable temperature / allows movement (1)",
            ],
            commonError: "Students confuse the role of the amniotic fluid with that of the placenta (exchange of substances).",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bq4-06",
            question: "Describe how HIV is transmitted and outline two ways its transmission can be prevented. [5 marks]",
            marks: 5,
            modelAnswer: "HIV is spread when infected body fluids — blood, semen, vaginal fluid or breast milk — pass into another person's body. This happens through unprotected sexual intercourse, through sharing needles or syringes contaminated with infected blood, through transfusion of infected blood, and from an infected mother to her baby during birth or breastfeeding. Transmission can be prevented by using condoms during sexual intercourse, which act as a barrier to body fluids, and by not sharing needles, which prevents blood-to-blood contact. (Other valid methods: screening donated blood; giving antiretroviral drugs to reduce viral load and to prevent mother-to-child transmission.)",
            markScheme: [
              "HIV carried in body fluids (blood/semen/vaginal fluid/breast milk) (1)",
              "Transmission route: unprotected sex (1)",
              "Transmission route: sharing needles / infected blood / mother to child (1)",
              "Prevention 1: condoms act as a barrier to body fluids (1)",
              "Prevention 2: not sharing needles / screening blood / antiretroviral drugs (1)",
            ],
            commonError: "Students wrongly list casual contact (e.g. hugging, sharing cutlery, insect bites) as transmission routes.",
            guideRef: "Sex Hormones and Sexually Transmitted Infections",
            difficulty: "core",
            hints: [
              "Which body fluids carry HIV?",
              "List the main routes those fluids can pass between people.",
              "How does a condom help?",
              "Give a second prevention method linked to a route.",
            ],
            strategy: "Pair each prevention method with the transmission route it blocks.",
          },
          {
            id: "bio-reproduction-bq4-07",
            question: "Explain why a person with AIDS is more likely to die from infections such as pneumonia or tuberculosis than a person without HIV. [4 marks]",
            marks: 4,
            modelAnswer: "HIV infects and destroys T-helper lymphocytes, which are white blood cells that coordinate the immune response. As the number of T-helper lymphocytes falls, the immune system becomes weaker and less able to fight pathogens. In AIDS the immune system is so badly damaged that the body cannot defend itself effectively. This means opportunistic infections such as pneumonia and tuberculosis, which a healthy immune system would normally control, can grow unchecked and become life-threatening.",
            markScheme: [
              "HIV destroys T-helper lymphocytes / white blood cells (1)",
              "These cells coordinate the immune response (1)",
              "Immune system weakened / cannot fight pathogens effectively (1)",
              "Opportunistic infections (e.g. pneumonia, TB) take hold / become life-threatening (1)",
            ],
            commonError: "Students say HIV 'is' pneumonia or TB; in fact HIV weakens immunity so other pathogens cause these illnesses.",
            guideRef: "Sex Hormones and Sexually Transmitted Infections",
            difficulty: "core",
            hints: [
              "Which cells does HIV destroy?",
              "What job do those cells do?",
              "What happens to defence against pathogens as they are lost?",
              "Why do normally controllable infections become dangerous?",
            ],
            strategy: "Follow the chain: HIV → loss of T-helper cells → weak immunity → opportunistic infections.",
          },
          {
            id: "bio-reproduction-bq4-08",
            question: "The placenta passes some of the mother's antibodies to the fetus. Suggest why this is an advantage to the newborn baby, and explain why this protection is only temporary. [3 marks]",
            marks: 3,
            modelAnswer: "Maternal antibodies passed across the placenta give the fetus and newborn passive immunity, so the baby is protected against diseases that the mother is immune to during the first months of life, before its own immune system is fully developed and able to make its own antibodies. The protection is only temporary because the baby is not making these antibodies itself; the borrowed antibodies are gradually broken down and are not replaced, so the protection fades over time.",
            markScheme: [
              "Antibodies give the baby passive immunity / protection against disease (1)",
              "Useful while the baby's own immune system is not yet fully developed (1)",
              "Temporary because the baby does not make these antibodies itself / they are broken down and not replaced (1)",
            ],
            commonError: "Students describe this as active immunity; receiving ready-made antibodies is passive immunity.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "core",
            hints: [
              "What kind of immunity is gained by receiving ready-made antibodies?",
              "Why is early protection useful for a newborn?",
              "Is the baby producing these antibodies itself?",
              "What happens to antibodies that are not replaced?",
            ],
          },
          {
            id: "bio-reproduction-bq4-09",
            question: "[Challenge] The contraceptive pill contains hormones similar to oestrogen and progesterone. Using your knowledge of the menstrual cycle, explain how taking these hormones each day can prevent ovulation. [5 marks]",
            marks: 5,
            modelAnswer: "In a normal cycle, FSH from the pituitary gland stimulates a follicle to mature, and a surge of LH triggers ovulation. High levels of oestrogen and progesterone normally exert negative feedback on the pituitary gland, inhibiting the release of FSH and LH. The contraceptive pill keeps the levels of these hormones high every day. This continuous high level of oestrogen and progesterone inhibits the secretion of FSH, so no follicle matures in the ovary. It also prevents the normal LH surge, so ovulation does not occur. With no egg released, fertilisation cannot take place, so pregnancy is prevented.",
            markScheme: [
              "Normally FSH matures a follicle and an LH surge triggers ovulation (1)",
              "Oestrogen/progesterone exert negative feedback on the pituitary (1)",
              "Pill keeps these hormones high, inhibiting FSH → no follicle matures (1)",
              "Prevents the LH surge → no ovulation (1)",
              "No egg released → no fertilisation / no pregnancy (1)",
            ],
            commonError: "Students say the pill 'kills the egg' or 'blocks the sperm'; in fact it stops the egg being released by suppressing FSH and LH.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "challenge",
            hints: [
              "Which hormones normally drive follicle maturation and ovulation?",
              "What effect do high oestrogen and progesterone have on the pituitary?",
              "If FSH is suppressed, can a follicle mature?",
              "If there is no LH surge, can ovulation happen?",
            ],
            strategy: "Trace negative feedback: high hormones → low FSH/LH → no follicle, no ovulation.",
            solutions: [
              {
                label: "Feedback reasoning",
                steps: [
                  "Pill maintains high oestrogen and progesterone all the time.",
                  "Negative feedback on the pituitary suppresses FSH.",
                  "No FSH → no follicle matures → no egg developed.",
                  "Suppressed LH → no LH surge → no ovulation → no egg to fertilise.",
                ],
              },
            ],
          },
          {
            id: "bio-reproduction-bq4-10",
            question: "[Challenge] During pregnancy a woman's menstrual cycle stops and she does not ovulate. Explain the hormonal reasons for both of these effects. [5 marks]",
            marks: 5,
            modelAnswer: "During pregnancy the corpus luteum, and later the placenta, secrete high levels of progesterone (together with oestrogen). This high progesterone level maintains the thickened uterine lining, so the lining is not shed; because menstruation is the shedding of the lining, menstruation does not occur. The high levels of progesterone and oestrogen also exert negative feedback on the pituitary gland, inhibiting the release of FSH and LH. Without FSH no new follicles mature in the ovaries, and without an LH surge ovulation cannot occur, so no further eggs are released during the pregnancy. In this way the same elevated hormones both stop menstruation and prevent ovulation.",
            markScheme: [
              "High progesterone (from corpus luteum/placenta) during pregnancy (1)",
              "Maintains the uterine lining → not shed → no menstruation (1)",
              "Progesterone/oestrogen inhibit FSH and LH (negative feedback on pituitary) (1)",
              "No FSH → no follicle matures (1)",
              "No LH surge → no ovulation (1)",
            ],
            commonError: "Students explain only one effect (no periods OR no ovulation) rather than linking both to the same high progesterone level.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "challenge",
            hints: [
              "Which hormone is high throughout pregnancy, and from where?",
              "What does that hormone do to the uterine lining?",
              "What does it do to FSH and LH at the pituitary?",
              "Connect suppressed FSH and LH to no follicle and no ovulation.",
            ],
            strategy: "Use one cause (high progesterone) to explain two effects: lining maintained and FSH/LH suppressed.",
          },
        ],
      },
    ],
  },
};
