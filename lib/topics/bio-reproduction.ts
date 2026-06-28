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

**Seed dispersal** spreads seeds away from the parent so seedlings do not compete with the parent (or each other) for light, water, minerals and space, and so the species can colonise new areas. Fruits and seeds are *adapted* to a method of dispersal:
- **Wind**: light seeds with wings (sycamore) or parachutes of hairs (dandelion) — large surface area to be carried by air currents.
- **Animal (carried)**: hooks on the fruit (goosegrass, burdock) catch on fur or feathers.
- **Animal (eaten)**: succulent, brightly coloured, sweet fruits (blackberry, tomato) are eaten; tough seeds pass out undigested in the animal's faeces, deposited away from the parent with a supply of "fertiliser".
- **Water**: buoyant, waterproof fruits (coconut) float to new shores.
- **Self / explosive**: pods dry out and split suddenly, flinging seeds out (pea, gorse).

**Germination** is the resumption of growth by the embryo in the seed. Conditions required: **water** (activates enzymes and is the medium for metabolism; makes the seed swell and split the seed coat), **oxygen** (for aerobic respiration to release the energy/ATP the embryo needs for growth) and a **suitable (warm) temperature** (so enzymes work near their optimum rate). Light is NOT required for germination itself — the seed uses its own stored food reserves until the shoot reaches the light and green leaves can photosynthesise.`,
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
        "Seeds are dispersed by wind, animals (hooks or eaten), water, or explosive pods — reducing competition and colonising new areas.",
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

**The Placenta and umbilical cord:**
The placenta forms from embryonic and maternal tissues embedded in the uterine wall. It is the exchange organ between mother and fetus. The fetus is connected to the placenta by the **umbilical cord**, which contains blood vessels carrying the fetus's blood to and from the placenta.

Substances exchanged **from mother to fetus** via the placenta: oxygen, glucose, amino acids, water, minerals, vitamins, antibodies (passive immunity).

Substances exchanged **from fetus to mother**: carbon dioxide, urea (metabolic waste).

The placenta has:
- Vast surface area (villi) — maximises exchange
- Thin walls — reduces diffusion distance
- Rich blood supply on both sides
- The maternal and fetal blood supplies do NOT mix — exchange is by diffusion/active transport across the placental membranes.

**Amniotic fluid** surrounds the fetus inside the amniotic sac (amnion). It cushions the fetus against mechanical shock/knocks, maintains a stable temperature, and allows the fetus to move and develop freely.

**Gestation and antenatal care:** Human pregnancy (gestation) lasts about **40 weeks (9 months)**, during which the fertilised egg develops into a fully formed fetus. A pregnant woman should look after the fetus through **antenatal care**: eating a balanced diet rich in iron (for haemoglobin), calcium (for bones and teeth) and folic acid (reduces the risk of neural-tube/spinal-cord defects), and avoiding alcohol and tobacco smoke, whose chemicals cross the placenta and harm fetal development.

**Birth (labour):** At the end of pregnancy the level of progesterone falls, which (together with the hormone **oxytocin**) triggers labour. The muscular wall of the uterus contracts rhythmically and increasingly strongly; the **cervix dilates** (widens); the amniotic sac breaks ("waters break"); and the contractions push the baby out through the cervix and vagina. After the baby is delivered, the umbilical cord is cut and tied, and the placenta is expelled as the **afterbirth**.

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
        "Umbilical cord connects the fetus to the placenta; amniotic fluid cushions and protects the fetus.",
        "Gestation lasts about 40 weeks; at birth progesterone falls, oxytocin and uterine contractions push the baby out as the cervix dilates.",
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

**Use of hormones in fertility and contraception (Edexcel):**
Because FSH, LH, oestrogen and progesterone control the menstrual cycle, they can be used artificially to *increase* or *decrease* fertility.
- **To treat infertility / fertility drugs**: a woman who does not produce enough FSH may be given **FSH (and LH)** as a "fertility drug" to stimulate follicles to mature and trigger ovulation. The same hormones are used in **IVF (in-vitro fertilisation)**: FSH/LH stimulate the ovaries to mature several eggs, which are collected and fertilised by sperm outside the body; one or more resulting embryos are then placed in the uterus.
- **To reduce fertility (hormonal contraception)**: the **contraceptive pill** contains oestrogen and/or progesterone. High levels inhibit FSH from the pituitary, so no follicle matures, and suppress the LH surge, so **ovulation does not occur** — without an egg, fertilisation cannot happen.

**Methods of contraception:** ways of preventing pregnancy fall into groups:
- **Natural**: avoiding intercourse near ovulation (rhythm method); abstinence. No artificial aids but less reliable.
- **Barrier**: condom or diaphragm physically stop sperm reaching the egg. The **condom also reduces the spread of STIs** by blocking exchange of body fluids.
- **Chemical**: spermicides kill or immobilise sperm; the contraceptive pill, implant or injection use hormones to prevent ovulation (as above).
- **Surgical (sterilisation)**: cutting and tying the **sperm ducts** (vasectomy) or the **oviducts** so gametes cannot meet — usually permanent.

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

HIV does NOT spread through casual contact (handshakes, hugging, sharing food, insect bites, toilet seats).

Other STIs exist too (e.g. the bacterial infection **gonorrhoea**), but HIV/AIDS is the key example required. The condom is important because it is the only common method of contraception that *also* protects against the spread of STIs.`,
      keyPoints: [
        "Testosterone: male secondary sexual characteristics and sperm production.",
        "Oestrogen and progesterone regulate the menstrual cycle and pregnancy.",
        "FSH and LH are pituitary hormones controlling ovarian function.",
        "Fertility: FSH/LH given as fertility drugs or in IVF stimulate egg maturation/ovulation.",
        "Contraception: natural, barrier (condom — also stops STIs), chemical/hormonal (pill stops ovulation), surgical (sterilisation).",
        "HIV destroys T-helper lymphocytes, causing AIDS when immunity fails severely.",
        "HIV transmission: unprotected sex, shared needles, infected blood, mother to child — prevented by condoms, screening, ART.",
      ],
      discovery: {
        problem: "The contraceptive pill and a fertility drug can both contain hormones, yet one prevents pregnancy and the other helps cause it. Both act on the ovary. How can hormones produce opposite effects, and which hormone is being supplied in each case?",
        idea: "It depends on which hormone is given and what it does in the feedback loop. The pill supplies oestrogen/progesterone, whose high levels inhibit FSH from the pituitary — without FSH no follicle matures, so ovulation is blocked. A fertility drug supplies FSH (and LH) directly, overriding the shortage and stimulating follicles to mature and ovulate. So the same gland (ovary) is pushed in opposite directions depending on whether you raise the ovarian hormones (to switch FSH off) or the pituitary hormones (to switch the ovary on).",
      },
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
      "Seeds are dispersed by wind, animals (hooks or being eaten), water, or explosive pods to reduce competition.",
      "Gestation lasts about 40 weeks; at birth a fall in progesterone with oxytocin triggers uterine contractions and the cervix dilates.",
      "Fertility drugs and IVF use FSH/LH to stimulate egg maturation and ovulation; the contraceptive pill uses oestrogen/progesterone to stop ovulation.",
      "Contraception methods: natural, barrier (condom also blocks STIs), chemical/hormonal, and surgical (sterilisation).",
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
      { front: "Name four methods of seed dispersal.", back: "Wind (winged/parachute seeds), animal (hooks or being eaten), water (floating fruits), and self/explosive (pods that split)." },
      { front: "How long is human gestation, and what happens at birth?", back: "About 40 weeks (9 months). At birth progesterone falls and oxytocin causes the uterus wall to contract; the cervix dilates and the baby is pushed out; the placenta is delivered as the afterbirth." },
      { front: "How are FSH and LH used as fertility treatment?", back: "Given as fertility drugs (or in IVF) to stimulate follicles/eggs to mature and trigger ovulation when a woman does not produce enough FSH herself." },
      { front: "Which contraceptive method also protects against STIs, and why?", back: "The condom — it is a barrier that stops the exchange of body fluids, blocking infections such as HIV as well as preventing sperm reaching the egg." },
      { front: "What is the function of the umbilical cord?", back: "It connects the fetus to the placenta and contains blood vessels carrying the fetus's blood to and from the placenta." },
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
      { term: "Seed dispersal", definition: "The spreading of seeds away from the parent plant — by wind, animals, water or explosive mechanisms — to reduce competition and colonise new areas." },
      { term: "Gestation", definition: "The period of development of the fetus inside the uterus, lasting about 40 weeks (9 months) in humans." },
      { term: "Umbilical cord", definition: "The structure connecting the fetus to the placenta, containing blood vessels that carry the fetus's blood to and from the placenta." },
      { term: "IVF (in-vitro fertilisation)", definition: "A fertility treatment in which FSH/LH stimulate the ovaries to mature eggs, which are collected and fertilised by sperm outside the body before an embryo is placed in the uterus." },
      { term: "Contraception", definition: "The deliberate prevention of pregnancy by natural, barrier, chemical/hormonal or surgical methods." },
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
        description: "Asexual vs sexual reproduction, variation, and flower structure.",
        questions: [
          {
            id: "bio-reproduction-bm1-01",
            question: "Which process is an example of asexual reproduction?",
            options: [
              "Pollen from one plant fertilising another",
              "A potato plant growing new plants from tubers",
              "Sperm fusing with an egg cell",
              "Two gametes combining to form a zygote",
            ],
            answerIndex: 1,
            explanation: "Tubers are a form of asexual reproduction: new potato plants grow from a single parent with no gamete fusion, so they are genetically identical clones. The other options all involve the fusion of gametes, which is sexual reproduction.",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm1-02",
            question: "Which part of the stamen produces pollen grains?",
            options: ["Filament", "Anther", "Stigma", "Style"],
            answerIndex: 1,
            explanation: "The stamen is the male part of the flower, made of the anther and the filament. The anther produces and releases pollen grains; the filament is the stalk that supports the anther. The stigma and style are parts of the female carpel.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm1-03",
            question: "Which structures together make up the carpel of a flower?",
            options: [
              "Anther and filament",
              "Petal and sepal",
              "Stigma, style and ovary",
              "Ovary and anther",
            ],
            answerIndex: 2,
            explanation: "The carpel is the female reproductive part, consisting of the stigma (catches pollen), the style (connects stigma to ovary) and the ovary (contains ovules). Anther and filament form the male stamen; petals and sepals are accessory parts.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm1-04",
            question: "What is the function of the sepals in a flower bud?",
            options: [
              "To attract insects with bright colour",
              "To protect the flower while it is still a bud",
              "To produce pollen",
              "To receive pollen grains",
            ],
            answerIndex: 1,
            explanation: "Sepals are the (usually green) outer parts that enclose and protect the developing flower while it is in bud. Attracting insects is the role of petals; producing pollen is the anther; receiving pollen is the stigma.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm1-05",
            question: "A population of aphids reproduces asexually. A new pesticide is applied. Why is the whole population especially at risk?",
            options: [
              "Asexual reproduction is slower, so they cannot recover",
              "They are genetically identical, so if one is susceptible all are susceptible",
              "They cannot find mates to reproduce",
              "Asexual offspring cannot reproduce themselves",
            ],
            answerIndex: 1,
            explanation: "Asexual offspring are clones of the parent, so they share the same alleles. If the pesticide can kill one aphid it can kill them all, because none carry different alleles that might confer resistance. This lack of variation is the key disadvantage of asexual reproduction.",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "core",
            hints: [
              "What kind of offspring does asexual reproduction make?",
              "If the offspring are identical, how do they differ in their response to the pesticide?",
              "Where would resistance alleles normally come from?",
            ],
          },
          {
            id: "bio-reproduction-bm1-06",
            question: "Which statement about variation in sexual reproduction is correct?",
            options: [
              "Variation arises only from mutation during fertilisation",
              "Variation arises because gametes are formed by meiosis and combine randomly at fertilisation",
              "All offspring are identical to one parent",
              "Variation is reduced because two parents are involved",
            ],
            answerIndex: 1,
            explanation: "Meiosis shuffles alleles when forming gametes, and fertilisation randomly combines a gamete from each of two parents. Together this produces offspring with new allele combinations, giving genetic variation. Mutation contributes but is not the main source here.",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "core",
            hints: [
              "Which type of cell division makes gametes?",
              "Think about how alleles are mixed when two gametes meet.",
              "Variation needs both a shuffle (meiosis) and a random combination (fertilisation).",
            ],
          },
          {
            id: "bio-reproduction-bm1-07",
            question: "Which of these is an advantage of asexual reproduction over sexual reproduction?",
            options: [
              "It produces more genetic variation",
              "Offspring are better able to adapt to change",
              "Only one parent is needed and reproduction can be rapid",
              "It needs the fusion of two gametes",
            ],
            answerIndex: 2,
            explanation: "Asexual reproduction needs only one parent, no mate, and no gametes, so a well-adapted organism can reproduce rapidly and colonise a stable habitat quickly. Variation and adaptability are advantages of sexual reproduction, not asexual.",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "core",
            hints: [
              "Asexual reproduction makes clones — so variation cannot be the advantage.",
              "Think about how many parents and whether a mate is needed.",
              "Speed and not needing a mate are the key asexual benefits.",
            ],
          },
          {
            id: "bio-reproduction-bm1-08",
            question: "Pollination is best defined as the transfer of pollen from the:",
            options: [
              "Anther to the stigma of a flower of the same species",
              "Ovary to the stigma of any flower",
              "Stigma to the ovule down the style",
              "Anther directly into the ovule",
            ],
            answerIndex: 0,
            explanation: "Pollination is the transfer of pollen from an anther to a stigma of a flower of the same species. It is not fertilisation — that happens later, when the male nucleus fuses with the egg cell in the ovule. The movement of the male nucleus down the style follows pollination.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "core",
            hints: [
              "Pollination is a transfer between two specific structures.",
              "From which structure does pollen start, and where must it land?",
              "Be careful: pollination is not the same as fertilisation.",
            ],
          },
          {
            id: "bio-reproduction-bm1-09",
            question: "A gardener takes cuttings from one prize rose bush and grows 50 new bushes. A fungal disease then appears that this variety cannot resist. What is the most likely outcome and why?",
            options: [
              "Only a few bushes die because the cuttings vary genetically",
              "All 50 bushes are at risk because they are genetically identical clones",
              "The bushes will evolve resistance within one generation",
              "The disease cannot spread because the plants are identical",
            ],
            answerIndex: 1,
            explanation: "Cuttings are a form of asexual (vegetative) propagation, so all 50 bushes are clones of the original. They share identical alleles, including the lack of any resistance allele, so all are equally susceptible. Without genetic variation the whole crop can be wiped out by one pathogen.",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "challenge",
            hints: [
              "What does taking a cutting produce genetically?",
              "If the parent lacks resistance, what about every clone?",
              "Variation is needed for some individuals to survive a new disease.",
              "No new alleles can appear in a single generation of clones.",
            ],
            strategy: "Link 'clone = identical alleles' to shared susceptibility.",
          },
          {
            id: "bio-reproduction-bm1-10",
            question: "Some plants release pollen from their anthers before the stigmas of the same flower become receptive. What is the most likely benefit of this timing?",
            options: [
              "It guarantees self-pollination",
              "It promotes cross-pollination, increasing genetic variation",
              "It prevents the flower from producing seeds",
              "It removes the need for pollinators",
            ],
            answerIndex: 1,
            explanation: "If the anthers shed pollen before the same flower's stigma is ready, that pollen must travel to another plant to succeed — favouring cross-pollination. Cross-pollination combines alleles from two different plants, increasing genetic variation in the offspring, which aids survival under changing conditions.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "challenge",
            hints: [
              "If pollen is shed before the stigma is ready, where can it succeed?",
              "Does this make self-pollination more or less likely?",
              "Cross-pollination involves two different plants.",
              "Link the outcome to genetic variation and its advantage.",
            ],
            strategy: "Reason from the timing to the type of pollination it prevents/promotes.",
          },
        ],
      },
      {
        id: "bio-reproduction-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Pollination, fertilisation, seeds, fruit and germination.",
        questions: [
          {
            id: "bio-reproduction-bm2-01",
            question: "Which feature is typical of an insect-pollinated flower?",
            options: [
              "Small, dull, green petals",
              "Large, brightly coloured, scented petals",
              "Feathery stigma hanging outside the flower",
              "Anthers dangling on long filaments outside",
            ],
            answerIndex: 1,
            explanation: "Insect-pollinated flowers attract insects with large, brightly coloured, scented petals (and often nectar). Dull green petals, feathery hanging stigmas and dangling anthers are all adaptations of wind-pollinated flowers.",
            guideRef: "Insect- vs Wind-Pollinated Flowers",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm2-02",
            question: "After fertilisation, the wall of the ovary develops into the:",
            options: ["Seed", "Fruit", "Embryo", "Pollen tube"],
            answerIndex: 1,
            explanation: "Following fertilisation the ovule becomes a seed and the ovary wall becomes the fruit, which often helps with seed dispersal. The embryo forms inside the seed from the zygote; the pollen tube is the structure that delivered the male nucleus.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm2-03",
            question: "Which condition is NOT required for the germination of most seeds?",
            options: ["Water", "Oxygen", "A suitable temperature", "Light"],
            answerIndex: 3,
            explanation: "Germination requires water (to activate enzymes and for metabolism), oxygen (for aerobic respiration to release energy) and a suitable temperature (for enzymes to work). Light is not required for germination itself — many seeds germinate underground in the dark.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm2-04",
            question: "Why do wind-pollinated flowers produce very large quantities of pollen?",
            options: [
              "Their pollen is heavy and sticky",
              "To reward visiting insects",
              "Because dispersal by wind is random, so most pollen is wasted",
              "To make their petals more colourful",
            ],
            answerIndex: 2,
            explanation: "Wind carries pollen in random directions, so only a tiny fraction by chance lands on a stigma of the same species. Producing huge amounts of light, smooth pollen increases the chance that some reaches a stigma. Wind-pollinated flowers have no nectar and dull petals.",
            guideRef: "Insect- vs Wind-Pollinated Flowers",
            difficulty: "core",
            hints: [
              "How does wind decide where pollen goes?",
              "If delivery is random, how much pollen reaches a stigma?",
              "Producing more pollen offsets the waste.",
            ],
          },
          {
            id: "bio-reproduction-bm2-05",
            question: "What is the role of the pollen tube in plant fertilisation?",
            options: [
              "To trap insects on the stigma",
              "To carry the male nucleus from the stigma to the ovule",
              "To produce nectar",
              "To disperse the seed",
            ],
            answerIndex: 1,
            explanation: "After a pollen grain germinates on the stigma, it grows a pollen tube down through the style to the ovule. The male nucleus travels along this tube to reach and fuse with the egg cell, achieving fertilisation. The tube does not trap insects, make nectar or disperse seeds.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "core",
            hints: [
              "What must travel from the stigma down to the ovule?",
              "Fertilisation needs the male nucleus to reach the egg cell.",
              "The tube is the route the male nucleus takes.",
            ],
          },
          {
            id: "bio-reproduction-bm2-06",
            question: "What is the main advantage of seed dispersal away from the parent plant?",
            options: [
              "It increases self-pollination",
              "It reduces competition between seedlings and the parent for light, water and minerals",
              "It speeds up germination",
              "It removes the need for fertilisation",
            ],
            answerIndex: 1,
            explanation: "Dispersing seeds away from the parent spreads the offspring out, reducing competition for light, water, minerals and space between seedlings and the parent plant. It also helps the species colonise new areas. It does not affect pollination or remove the need for fertilisation.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "core",
            hints: [
              "What would happen if all seeds landed right under the parent?",
              "Think about what seedlings and the parent both need.",
              "Spreading out reduces a particular problem.",
            ],
          },
          {
            id: "bio-reproduction-bm2-07",
            question: "Self-pollination differs from cross-pollination because in self-pollination the pollen:",
            options: [
              "Comes from a different species",
              "Lands on a stigma of the same plant",
              "Is always carried by wind",
              "Cannot lead to fertilisation",
            ],
            answerIndex: 1,
            explanation: "In self-pollination, pollen is transferred to a stigma of the same flower or another flower on the same plant. In cross-pollination, pollen travels between different plants of the same species. Both can lead to fertilisation; cross-pollination gives more genetic variation.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "core",
            hints: [
              "Self = same; where does 'self' pollen land?",
              "Cross-pollination involves two different plants.",
              "Both still result in fertilisation.",
            ],
          },
          {
            id: "bio-reproduction-bm2-08",
            question: "A student investigating germination sets up four tubes of cress seeds: (1) water, warm, air; (2) no water, warm, air; (3) water, warm, no air; (4) water, cold, air. Only tube 1 germinates well. Which conclusion is fully justified?",
            options: [
              "Water alone is sufficient for germination",
              "Germination needs water, oxygen and a suitable (warm) temperature together",
              "Light is needed for germination",
              "Cold temperatures speed up germination",
            ],
            answerIndex: 1,
            explanation: "Each tube removes one condition: tube 2 lacks water, tube 3 lacks oxygen, tube 4 is too cold. Since removing any one prevents germination and only tube 1 (all conditions present) succeeds, germination needs water, oxygen and a suitable temperature together. Light was not a variable tested.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "challenge",
            hints: [
              "Identify which single condition each tube is missing.",
              "Tube 3 'no air' removes which gas needed for respiration?",
              "If removing any one condition stops germination, all are needed.",
              "Check whether light was ever changed between the tubes.",
            ],
            strategy: "Match each control tube to the one variable it removes.",
          },
          {
            id: "bio-reproduction-bm2-09",
            question: "A seed is treated so its embryo's mitochondria cannot function. Even with water, oxygen and warmth, it fails to germinate. What does this best show?",
            options: [
              "Germination does not require respiration",
              "Germination depends on energy from aerobic respiration in the embryo",
              "The seed needs light to germinate",
              "Water is not required for germination",
            ],
            answerIndex: 1,
            explanation: "Mitochondria are the site of aerobic respiration, which releases the energy (ATP) the embryo needs to grow during germination. If they cannot function, the seed cannot use the oxygen and food reserves to release energy, so it fails to germinate even with all external conditions met. This shows germination depends on respiration.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "challenge",
            hints: [
              "What do mitochondria do in a cell?",
              "Why is oxygen one of the germination conditions?",
              "Growth of the embryo needs an energy source.",
              "Link the blocked mitochondria to a lack of usable energy.",
            ],
            strategy: "Connect oxygen requirement to respiration and ATP for growth.",
          },
          {
            id: "bio-reproduction-bm2-10",
            question: "Which set of features would you expect in a flower pollinated by insects?",
            options: [
              "Sticky stigma inside the flower and large, spiky pollen grains",
              "Feathery stigma outside the flower and tiny smooth pollen",
              "No petals and no nectar",
              "Anthers on long filaments dangling in the air",
            ],
            answerIndex: 0,
            explanation: "Insect-pollinated flowers have a sticky stigma positioned inside the flower so pollen is brushed onto it by visiting insects, and large, sticky or spiky pollen grains that cling to the insect's body. Feathery external stigmas, tiny smooth pollen, dangling anthers and absence of petals/nectar are wind-pollination features.",
            guideRef: "Insect- vs Wind-Pollinated Flowers",
            difficulty: "core",
            hints: [
              "Insects must brush against the stigma and anthers inside the flower.",
              "Insect pollen must stick to a body — what texture?",
              "Eliminate the options describing wind adaptations.",
            ],
          },
        ],
      },
      {
        id: "bio-reproduction-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Human reproductive systems, gametes, fertilisation and implantation.",
        questions: [
          {
            id: "bio-reproduction-bm3-01",
            question: "Which organ in the male reproductive system produces sperm?",
            options: ["Prostate gland", "Sperm duct", "Testis", "Urethra"],
            answerIndex: 2,
            explanation: "The testes produce sperm (and the hormone testosterone). The sperm duct carries sperm towards the urethra; glands such as the prostate add fluid to form semen; the urethra carries semen out through the penis.",
            guideRef: "Human Reproductive Systems",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm3-02",
            question: "What is the main function of the oviduct (Fallopian tube)?",
            options: [
              "To produce egg cells",
              "To carry the egg towards the uterus and be the site of fertilisation",
              "To produce oestrogen",
              "To act as the birth canal",
            ],
            answerIndex: 1,
            explanation: "The oviduct carries the egg from the ovary towards the uterus; its ciliated lining wafts the egg along, and it is the normal site of fertilisation. Eggs and oestrogen are produced by the ovary; the vagina is the birth canal.",
            guideRef: "Human Reproductive Systems",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm3-03",
            question: "Which adaptation of the sperm cell provides energy for swimming?",
            options: [
              "The acrosome at the head",
              "The many mitochondria in the midpiece",
              "The haploid nucleus",
              "The jelly coat",
            ],
            answerIndex: 1,
            explanation: "The midpiece is packed with mitochondria, which carry out aerobic respiration to release the ATP needed to power the tail's movement. The acrosome contains enzymes to penetrate the egg; the nucleus carries genetic material; a jelly coat is a feature of the egg, not the sperm.",
            guideRef: "Human Reproductive Systems",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm3-04",
            question: "Why is the egg cell much larger than a sperm cell?",
            options: [
              "It has a larger nucleus with more chromosomes",
              "It contains food (nutrient) reserves to support the early embryo",
              "It needs a longer tail for swimming",
              "It must carry many mitochondria for its own movement",
            ],
            answerIndex: 1,
            explanation: "The egg is large because its cytoplasm is rich in stored nutrients (yolk) that nourish the embryo in the first days after fertilisation, before implantation. Both gametes are haploid (23 chromosomes). The egg does not swim, so it has no tail.",
            guideRef: "Human Reproductive Systems",
            difficulty: "core",
            hints: [
              "Both gametes have the same number of chromosomes.",
              "The egg does not move on its own — so not a tail.",
              "What must support the embryo before it implants?",
            ],
          },
          {
            id: "bio-reproduction-bm3-05",
            question: "What is the function of the acrosome in a sperm cell?",
            options: [
              "To provide energy for the tail",
              "To release enzymes that digest a path through the egg's coat",
              "To store the food reserves",
              "To carry the female chromosomes",
            ],
            answerIndex: 1,
            explanation: "The acrosome at the head of the sperm contains digestive enzymes that break down the jelly coat and membrane of the egg, allowing the sperm nucleus to enter. Energy comes from mitochondria in the midpiece; sperm carry male (not female) chromosomes and have little food store.",
            guideRef: "Human Reproductive Systems",
            difficulty: "core",
            hints: [
              "The acrosome is at the front (head) of the sperm.",
              "What must the sperm get through to reach the egg's nucleus?",
              "Enzymes digest a path through the egg's outer layers.",
            ],
          },
          {
            id: "bio-reproduction-bm3-06",
            question: "A zygote is formed when a sperm fuses with an egg. What is the chromosome number of a human zygote?",
            options: ["23", "46", "92", "12"],
            answerIndex: 1,
            explanation: "Each gamete is haploid with 23 chromosomes. At fertilisation the sperm (23) fuses with the egg (23), so the diploid zygote has 23 + 23 = 46 chromosomes — the full human chromosome number restored.",
            guideRef: "Human Reproductive Systems",
            difficulty: "core",
            hints: [
              "How many chromosomes are in each gamete?",
              "Fertilisation combines the two gametes.",
              "Add the two haploid numbers together.",
            ],
          },
          {
            id: "bio-reproduction-bm3-07",
            question: "After fertilisation in the oviduct, what is the correct sequence of events?",
            options: [
              "Implantation in the uterus, then division by mitosis, then fertilisation",
              "Division by mitosis to form an embryo, which travels to and implants in the uterus",
              "The zygote implants in the ovary and divides there",
              "The egg is released, fertilised, and immediately implants in the oviduct",
            ],
            answerIndex: 1,
            explanation: "After fertilisation in the oviduct, the zygote divides repeatedly by mitosis to form a ball of cells (embryo) as it travels down the oviduct to the uterus, where it implants in the uterine lining (endometrium) about 6–10 days after fertilisation. Implantation normally occurs in the uterus, not the ovary or oviduct.",
            guideRef: "Human Reproductive Systems",
            difficulty: "core",
            hints: [
              "Fertilisation comes first, then cell division.",
              "Which cell division increases cell number without changing chromosome number?",
              "Where does the embryo finally implant?",
            ],
          },
          {
            id: "bio-reproduction-bm3-08",
            question: "Why are the testes located in the scrotum, outside the main body cavity?",
            options: [
              "To make them easier to protect",
              "To keep them slightly cooler than core body temperature, which is optimal for sperm production",
              "To bring them closer to the bladder",
              "Because sperm cannot survive in any warmth",
            ],
            answerIndex: 1,
            explanation: "Sperm production works best at a temperature slightly below core body temperature. Holding the testes in the scrotum outside the body cavity keeps them a couple of degrees cooler, which is optimal for forming healthy sperm. It is not about protection or proximity to the bladder.",
            guideRef: "Human Reproductive Systems",
            difficulty: "challenge",
            hints: [
              "Think about temperature, not protection.",
              "Is the scrotum warmer or cooler than the body core?",
              "Sperm production is sensitive to temperature.",
              "Slightly cooler is described as 'optimal' for sperm.",
            ],
            strategy: "Connect external position to a temperature effect on a process.",
          },
          {
            id: "bio-reproduction-bm3-09",
            question: "Shortly after one sperm enters an egg, the jelly coat of the egg hardens. What is the importance of this change?",
            options: [
              "It provides energy to the zygote",
              "It prevents more than one sperm fertilising the egg (prevents polyspermy)",
              "It triggers ovulation",
              "It allows the egg to swim to the uterus",
            ],
            answerIndex: 1,
            explanation: "Once a sperm fuses with the egg, the jelly coat hardens to form a barrier so that no further sperm can enter. This prevents polyspermy, ensuring the zygote has the correct diploid chromosome number (46) rather than an excess from multiple sperm.",
            guideRef: "Human Reproductive Systems",
            difficulty: "challenge",
            hints: [
              "What problem would arise if several sperm entered one egg?",
              "Think about keeping the chromosome number correct.",
              "A hardened coat acts as a barrier.",
              "The term for blocking extra sperm is preventing polyspermy.",
            ],
            strategy: "Link the barrier to maintaining the correct chromosome number.",
          },
          {
            id: "bio-reproduction-bm3-10",
            question: "Which row correctly matches an organ to its function?",
            options: [
              "Sperm duct — produces testosterone",
              "Ovary — produces eggs and secretes oestrogen and progesterone",
              "Cervix — site of fertilisation",
              "Vagina — produces egg cells",
            ],
            answerIndex: 1,
            explanation: "The ovary produces egg cells by meiosis and secretes the hormones oestrogen and progesterone. The sperm duct carries sperm (testosterone is made by the testes); fertilisation occurs in the oviduct, not the cervix; the vagina receives the penis and is the birth canal, but does not produce eggs.",
            guideRef: "Human Reproductive Systems",
            difficulty: "core",
            hints: [
              "Which organ makes both eggs and the female sex hormones?",
              "Recall where fertilisation actually happens.",
              "Testosterone is made in the testes, not the sperm duct.",
            ],
          },
        ],
      },
      {
        id: "bio-reproduction-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Menstrual cycle, hormones, pregnancy, ante-natal care, birth control and STIs.",
        questions: [
          {
            id: "bio-reproduction-bm4-01",
            question: "On approximately which day of a typical 28-day menstrual cycle does ovulation occur?",
            options: ["Day 1", "Day 7", "Day 14", "Day 28"],
            answerIndex: 2,
            explanation: "In a typical 28-day cycle, ovulation (release of the mature egg) occurs around day 14, triggered by a surge in LH. Day 1 marks the start of menstruation; the second half of the cycle (days 15–28) maintains the uterine lining.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm4-02",
            question: "Which hormone repairs and thickens the uterine lining in the first half of the menstrual cycle?",
            options: ["Progesterone", "Oestrogen", "LH", "Testosterone"],
            answerIndex: 1,
            explanation: "Oestrogen, secreted by the ovary, repairs and thickens the uterine lining after menstruation. Progesterone maintains that lining in the second half of the cycle; LH triggers ovulation; testosterone is the male sex hormone.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm4-03",
            question: "What is the main function of the placenta?",
            options: [
              "To cushion the fetus against shock",
              "To exchange substances between the mother's blood and the fetus's blood",
              "To produce the egg cells",
              "To trigger ovulation",
            ],
            answerIndex: 1,
            explanation: "The placenta is the exchange organ between mother and fetus: oxygen, glucose and antibodies pass to the fetus while carbon dioxide and urea pass back to the mother. Cushioning is the job of amniotic fluid; eggs come from the ovary; ovulation is triggered by LH.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bm4-04",
            question: "Which hormone is secreted by the pituitary gland and stimulates a follicle to mature in the ovary?",
            options: ["FSH", "Progesterone", "Oestrogen", "Testosterone"],
            answerIndex: 0,
            explanation: "FSH (follicle-stimulating hormone) is released by the pituitary gland and stimulates a follicle (egg) to mature in the ovary; it also stimulates the ovary to secrete oestrogen. Oestrogen and progesterone come from the ovary; testosterone is a male hormone.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "core",
            hints: [
              "The name of the hormone describes what it stimulates.",
              "It is released by the pituitary gland, not the ovary.",
              "Which hormone makes a follicle develop?",
            ],
          },
          {
            id: "bio-reproduction-bm4-05",
            question: "Why does the menstrual cycle stop during pregnancy?",
            options: [
              "Oestrogen levels fall to zero",
              "Progesterone stays high, inhibiting FSH and LH so no new follicles mature or ovulate",
              "The ovaries are removed",
              "FSH levels rise sharply each month",
            ],
            answerIndex: 1,
            explanation: "During pregnancy progesterone remains high (from the corpus luteum and later the placenta). High progesterone inhibits the release of FSH and LH from the pituitary, so no new follicles mature, no ovulation occurs and the uterine lining is maintained rather than shed.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "challenge",
            hints: [
              "Which hormone maintains the uterine lining and stays high in pregnancy?",
              "What does progesterone do to FSH and LH?",
              "If FSH and LH are inhibited, can a follicle mature or ovulation happen?",
              "No ovulation and a maintained lining together mean no cycle.",
            ],
            strategy: "Trace the feedback: high progesterone inhibits FSH/LH, so no follicle, no ovulation, lining kept.",
          },
          {
            id: "bio-reproduction-bm4-06",
            question: "Which substances pass from the fetus to the mother across the placenta?",
            options: [
              "Oxygen and glucose",
              "Carbon dioxide and urea",
              "Amino acids and antibodies",
              "Water and minerals",
            ],
            answerIndex: 1,
            explanation: "The fetus produces waste that must be removed via the mother's circulation: carbon dioxide (from respiration) and urea (from protein breakdown) diffuse from fetal blood to maternal blood across the placenta. Oxygen, glucose, amino acids, antibodies, water and minerals pass the other way, from mother to fetus.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "core",
            hints: [
              "Think about what waste a respiring, growing fetus makes.",
              "Which gas is a waste product of respiration?",
              "Urea comes from breaking down excess protein.",
            ],
          },
          {
            id: "bio-reproduction-bm4-07",
            question: "Which of the following is good ante-natal (during pregnancy) care advice?",
            options: [
              "Drinking alcohol regularly to relax",
              "Smoking to reduce the baby's birth weight",
              "Eating a balanced diet rich in iron, calcium and folic acid and avoiding alcohol and smoking",
              "Avoiding all physical activity completely",
            ],
            answerIndex: 2,
            explanation: "Good ante-natal care includes a balanced diet (iron for haemoglobin, calcium for bones and teeth, folic acid to reduce the risk of spinal cord defects) and avoiding harmful substances such as alcohol and tobacco smoke, which can damage fetal development. Alcohol and smoking harm the fetus.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "core",
            hints: [
              "Which option benefits, rather than harms, the developing baby?",
              "Alcohol and smoking are harmful during pregnancy.",
              "Think about nutrients a growing fetus needs.",
            ],
          },
          {
            id: "bio-reproduction-bm4-08",
            question: "Which method of birth control works by preventing sperm from reaching the egg as a physical barrier AND helps prevent the spread of STIs?",
            options: [
              "Contraceptive (oral) pill",
              "Condom",
              "Intra-uterine device (IUD)",
              "Sterilisation by cutting the sperm ducts",
            ],
            answerIndex: 1,
            explanation: "A condom is a physical barrier that stops sperm reaching the egg and also reduces the exchange of body fluids, so it helps prevent the spread of sexually transmitted infections such as HIV. The pill is a hormonal method, an IUD is implanted in the uterus, and sterilisation is surgical — none of these protect against STIs.",
            guideRef: "Sex Hormones and Sexually Transmitted Infections",
            difficulty: "core",
            hints: [
              "Which method is a physical barrier you put on?",
              "STI protection needs to block exchange of body fluids.",
              "Hormonal and surgical methods do not stop infection spread.",
            ],
          },
          {
            id: "bio-reproduction-bm4-09",
            question: "The contraceptive pill often contains oestrogen and progesterone. How does this prevent pregnancy?",
            options: [
              "It physically blocks the sperm duct",
              "High levels inhibit FSH (and LH), so no follicle matures and ovulation does not occur",
              "It kills sperm in the vagina",
              "It hardens the egg's jelly coat",
            ],
            answerIndex: 1,
            explanation: "The hormones in the pill keep oestrogen and progesterone artificially high. This inhibits the release of FSH from the pituitary, so no follicle matures, and suppresses the LH surge, so ovulation does not occur. With no egg released, fertilisation cannot happen. It is not a barrier or spermicide.",
            guideRef: "Sex Hormones and Sexually Transmitted Infections",
            difficulty: "challenge",
            hints: [
              "The pill works through hormones, not a barrier.",
              "Which pituitary hormone matures a follicle?",
              "If FSH is inhibited, does a follicle mature?",
              "No ovulation means no egg to fertilise.",
            ],
            strategy: "Trace the feedback: high oestrogen/progesterone inhibit FSH and LH, blocking ovulation.",
          },
          {
            id: "bio-reproduction-bm4-10",
            question: "Which statement about HIV transmission is correct?",
            options: [
              "HIV can be caught by shaking hands with an infected person",
              "HIV can be passed on through unprotected sex, sharing needles, infected blood, and from mother to child",
              "HIV is spread mainly by insect bites",
              "HIV is spread by sharing food and drinks",
            ],
            answerIndex: 1,
            explanation: "HIV is transmitted through the exchange of body fluids: unprotected sexual intercourse, sharing contaminated needles, transfusion of infected blood, and from mother to child during birth or breastfeeding. It is NOT spread by casual contact such as handshakes, sharing food, or insect bites.",
            guideRef: "Sex Hormones and Sexually Transmitted Infections",
            difficulty: "core",
            hints: [
              "HIV spreads through body fluids, not casual contact.",
              "Rule out handshakes, food sharing and insect bites.",
              "Consider sexual contact, blood and mother-to-child routes.",
            ],
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-reproduction-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Asexual vs sexual reproduction, variation, and flower structure.",
        questions: [
          {
            id: "bio-reproduction-bq1-01",
            question: "State two differences between asexual and sexual reproduction. [2 marks]",
            marks: 2,
            modelAnswer: "Asexual reproduction involves only one parent, whereas sexual reproduction involves two parents (gametes from each). Asexual reproduction produces genetically identical offspring (clones) with no variation, whereas sexual reproduction produces offspring with genetic variation. Asexual reproduction does not involve the fusion of gametes; sexual reproduction does.",
            markScheme: [
              "Asexual: one parent / sexual: two parents (gametes from two)",
              "Asexual: identical offspring / clones / no variation — sexual: genetic variation",
              "Asexual: no gamete fusion / sexual: fusion of gametes (any two clear differences)",
            ],
            commonError: "Listing the same idea twice in different words (e.g. 'clones' and 'identical') counts as only one difference.",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bq1-02",
            question: "Name the parts labelled in the male part (stamen) and the female part (carpel) of a flower, and give the function of the anther and the stigma. [4 marks]",
            marks: 4,
            modelAnswer: "The stamen (male part) is made of the anther and the filament. The carpel (female part) is made of the stigma, the style and the ovary (containing ovules). The anther produces and releases pollen grains (containing the male gametes). The stigma is a sticky surface that receives/catches pollen grains during pollination.",
            markScheme: [
              "Stamen = anther + filament",
              "Carpel = stigma + style + ovary (allow ovule)",
              "Anther: produces / makes pollen (grains)",
              "Stigma: receives / catches pollen (sticky surface)",
            ],
            commonError: "Confusing stigma (female, receives pollen) with anther (male, makes pollen), or calling the whole female part the 'ovary' instead of the carpel.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bq1-03",
            question: "Explain why genetic variation produced by sexual reproduction can be an advantage to a species living in a changing environment. [3 marks]",
            marks: 3,
            modelAnswer: "Sexual reproduction produces offspring with different combinations of alleles, so individuals vary. If the environment changes (for example a new disease or climate change), some individuals may by chance have alleles that allow them to survive the new conditions. These individuals survive and reproduce, passing on the favourable alleles, so the species as a whole can adapt and is less likely to be wiped out.",
            markScheme: [
              "Offspring show variation / different combinations of alleles",
              "When the environment changes, some individuals (by chance) are better suited / have advantageous alleles",
              "These survive and reproduce / pass on alleles — species can adapt / survive (natural selection)",
            ],
            commonError: "Saying organisms 'choose' to adapt or change deliberately — variation already exists by chance; selection then acts on it.",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "core",
            hints: [
              "Start by stating what kind of offspring sexual reproduction makes.",
              "Why does variation matter when conditions change?",
              "Which individuals survive a new challenge?",
              "Finish with the effect on the whole species over generations.",
            ],
            strategy: "Variation → some survive change → reproduce → species adapts.",
          },
          {
            id: "bio-reproduction-bq1-04",
            question: "A farmer grows a field of one variety of wheat by sowing seed all taken from a single original plant by asexual propagation. Suggest one advantage and one disadvantage of this approach. [4 marks]",
            marks: 4,
            modelAnswer: "Advantage: all the plants are genetically identical clones, so they all share the desirable characteristics of the original plant (for example high yield or good taste), giving a uniform, predictable crop that can be produced quickly without needing pollination. Disadvantage: because the plants are all genetically identical, they have no genetic variation, so if a new disease or pest appears that the variety cannot resist, the entire crop could be destroyed.",
            markScheme: [
              "Advantage: offspring identical / clones, so keep desirable features / uniform crop / predictable / fast (1)",
              "Explanation of that advantage linked to the farmer (1)",
              "Disadvantage: no genetic variation (1)",
              "Explanation: whole crop vulnerable to one disease/pest/environmental change (1)",
            ],
            commonError: "Stating advantages or disadvantages without explaining them — each mark needs the reason, not just the word 'clones' or 'no variation'.",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "core",
            hints: [
              "Asexual propagation makes clones — what is good about uniform plants?",
              "Why might a farmer want every plant to be the same?",
              "What is the danger if all plants are identical and a disease arrives?",
              "Make sure to explain each point, not just state it.",
            ],
            strategy: "Pair each feature (identical/no variation) with a consequence for the farmer.",
          },
          {
            id: "bio-reproduction-bq1-05",
            question: "Distinguish between self-pollination and cross-pollination, and state one advantage of cross-pollination. [3 marks]",
            marks: 3,
            modelAnswer: "Self-pollination is the transfer of pollen from the anther to the stigma of the same flower, or to another flower on the same plant. Cross-pollination is the transfer of pollen from the anther of one plant to the stigma of a flower on a different plant of the same species. An advantage of cross-pollination is that it combines alleles from two different parents, producing greater genetic variation in the offspring (which can help the species adapt/survive).",
            markScheme: [
              "Self-pollination: pollen to stigma of same flower / same plant",
              "Cross-pollination: pollen to stigma of a different plant (same species)",
              "Advantage of cross: more genetic variation / new allele combinations / better adaptation",
            ],
            commonError: "Describing cross-pollination as being between different species — it must be the same species, just different plants.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "core",
            hints: [
              "Self = same plant; where does the pollen land?",
              "Cross = how many different plants are involved?",
              "Both involve the same species.",
              "The advantage links to variation.",
            ],
            strategy: "Define each clearly by 'same plant' vs 'different plant', then give the variation advantage.",
          },
          {
            id: "bio-reproduction-bq1-06",
            question: "A flower has tiny green petals, no scent, no nectar, anthers hanging outside on long filaments, and a large feathery stigma. Identify how this flower is pollinated and explain three features that support your answer. [4 marks]",
            marks: 4,
            modelAnswer: "This flower is wind-pollinated. (1) The tiny green petals with no scent and no nectar show it does not need to attract insects, because wind, not insects, carries its pollen. (2) The anthers hang outside on long filaments so they are exposed to air currents and can shed pollen freely into the wind. (3) The large, feathery stigma hangs outside the flower and has a large surface area to catch pollen grains drifting in the air.",
            markScheme: [
              "Wind-pollinated (1)",
              "Dull/green petals + no scent/nectar → no need to attract insects (1)",
              "Anthers outside on long filaments → exposed to / shed pollen into the wind (1)",
              "Feathery / large stigma outside → large surface area to catch airborne pollen (1)",
            ],
            commonError: "Listing features without explaining how each suits wind pollination — examiners want the function, e.g. 'large surface area to catch pollen'.",
            guideRef: "Insect- vs Wind-Pollinated Flowers",
            difficulty: "core",
            hints: [
              "Dull petals and no nectar point to which pollinator?",
              "Why would anthers hang outside the flower?",
              "What does a feathery stigma do well?",
              "Explain each feature with 'so that' or 'because'.",
            ],
            strategy: "State the conclusion first, then justify each feature by its function.",
          },
          {
            id: "bio-reproduction-bq1-07",
            question: "Describe what happens to a flower after fertilisation to form a fruit containing seeds. [4 marks]",
            marks: 4,
            modelAnswer: "After fertilisation, the zygote inside each ovule divides by mitosis to form an embryo, and the ovule develops into a seed (which stores food for the future seedling). The ovary wall develops and grows into the fruit, which surrounds and protects the seed(s) and often aids dispersal. The petals, stamens, stigma and style are no longer needed and usually wither and fall off.",
            markScheme: [
              "Ovule develops into a seed (containing the embryo)",
              "Zygote/embryo divides by mitosis (allow embryo forms)",
              "Ovary (wall) develops into the fruit",
              "Other parts (petals/stamens/stigma) wither / fall off (allow fruit aids dispersal)",
            ],
            commonError: "Swapping the products: the OVULE becomes the SEED and the OVARY becomes the FRUIT, not the other way round.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "core",
            hints: [
              "What does the ovule become?",
              "What does the ovary wall become?",
              "Which cell division forms the embryo?",
              "What happens to the petals and stamens?",
            ],
            strategy: "Track each structure (ovule, ovary) to its product.",
          },
          {
            id: "bio-reproduction-bq1-08",
            question: "Describe the sequence of events in the fertilisation of a flowering plant, from a pollen grain landing on the stigma to the formation of a zygote. [5 marks]",
            marks: 5,
            modelAnswer: "A pollen grain lands on the stigma of a flower of the same species (pollination). The pollen grain germinates and grows a pollen tube down through the style towards the ovary. The pollen tube grows until it reaches an ovule, entering through a small opening. The male gamete nucleus travels down the pollen tube into the ovule. Inside the ovule, the male nucleus fuses with the female gamete (egg cell). This fusion is fertilisation and produces a diploid zygote, which then develops into an embryo.",
            markScheme: [
              "Pollen grain lands on the stigma (same species) / pollination",
              "Pollen grain germinates and grows a pollen tube",
              "Pollen tube grows down through the style to the ovary/ovule",
              "Male (gamete) nucleus travels down the pollen tube to the ovule",
              "Male nucleus fuses with the egg cell / female gamete → zygote (fertilisation)",
            ],
            commonError: "Saying 'the pollen fertilises the egg' — it is the male NUCLEUS that travels down the tube and fuses with the egg, not the whole pollen grain.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "challenge",
            hints: [
              "Begin with pollination on the stigma.",
              "What grows from the pollen grain, and where does it grow?",
              "What actually travels down the tube?",
              "Name the two nuclei that fuse and the product.",
            ],
            strategy: "Order the steps and be precise that it is the male nucleus that fuses.",
          },
          {
            id: "bio-reproduction-bq1-09",
            question: "Some plants prevent self-pollination, for example by ripening their anthers and stigmas at different times. Explain why this could be advantageous for the survival of the species. [4 marks]",
            marks: 4,
            modelAnswer: "Preventing self-pollination forces cross-pollination, where pollen comes from a different plant of the same species. This combines alleles from two genetically different parents, so the offspring have new combinations of alleles and more genetic variation than if the plant pollinated itself. Greater variation means that if the environment changes (such as a new disease), some offspring are more likely to have alleles allowing them to survive and reproduce, so the species is more likely to survive in the long term.",
            markScheme: [
              "Prevents self-pollination → promotes cross-pollination (pollen from a different plant)",
              "Combines alleles from two different parents / new allele combinations",
              "More genetic variation in the offspring",
              "Variation helps species survive environmental change / disease (natural selection)",
            ],
            commonError: "Stopping at 'increases variation' without explaining why variation is useful for survival.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "challenge",
            hints: [
              "What type of pollination is forced when self-pollination is blocked?",
              "Whose alleles are combined in cross-pollination?",
              "What does this do to variation?",
              "Why is variation an advantage when conditions change?",
            ],
            strategy: "Chain: prevent self → cross-pollination → more variation → survives change.",
          },
          {
            id: "bio-reproduction-bq1-10",
            question: "Compare asexual and sexual reproduction by giving one advantage of each, and explain a situation in which each would be more useful. [4 marks]",
            marks: 4,
            modelAnswer: "An advantage of asexual reproduction is that it is rapid and needs only one parent (no mate), so an organism can quickly produce many identical offspring. This is useful in a stable, unchanging environment to which the parent is already well adapted, because all the offspring will be suited to it. An advantage of sexual reproduction is that it produces genetic variation among offspring. This is useful in a changing or unpredictable environment, because some of the varied offspring are more likely to have alleles allowing them to survive the new conditions.",
            markScheme: [
              "Asexual advantage: fast / no mate needed / many offspring quickly (clones)",
              "Asexual useful when: environment is stable / parent well adapted",
              "Sexual advantage: produces genetic variation",
              "Sexual useful when: environment is changing / unpredictable (some offspring survive)",
            ],
            commonError: "Giving advantages but not linking each to an appropriate environment, which is what the question asks for.",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "core",
            hints: [
              "What is the headline benefit of asexual reproduction?",
              "When is being identical and fast a good thing?",
              "What is the headline benefit of sexual reproduction?",
              "When does variation become valuable?",
            ],
            strategy: "Pair each advantage with the matching environment (stable vs changing).",
          },
        ],
      },
      {
        id: "bio-reproduction-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Pollination, germination and investigating germination.",
        questions: [
          {
            id: "bio-reproduction-bq2-01",
            question: "State the three conditions required for the germination of most seeds. [3 marks]",
            marks: 3,
            modelAnswer: "Water, oxygen, and a suitable (warm) temperature.",
            markScheme: [
              "Water",
              "Oxygen",
              "Suitable / warm temperature",
            ],
            commonError: "Adding 'light' to the list — light is not required for germination itself.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bq2-02",
            question: "Explain why oxygen is needed for a seed to germinate. [2 marks]",
            marks: 2,
            modelAnswer: "Oxygen is needed for aerobic respiration in the cells of the embryo. Respiration releases the energy (ATP) the embryo needs for growth and cell division during germination.",
            markScheme: [
              "Oxygen used for (aerobic) respiration",
              "Respiration releases energy / ATP for growth / cell division",
            ],
            commonError: "Saying the seed 'breathes' oxygen — be specific that oxygen is used in respiration to release energy.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "core",
            hints: [
              "Which process uses oxygen in cells?",
              "What does that process release?",
              "Link the energy to what the embryo is doing (growing).",
            ],
            strategy: "Oxygen → aerobic respiration → energy for growth.",
          },
          {
            id: "bio-reproduction-bq2-03",
            question: "Describe how you would set up an investigation to show that water is needed for germination, including how you would make it a fair test. [4 marks]",
            marks: 4,
            modelAnswer: "Set up two boiling tubes, each with the same number of the same type of seeds on cotton wool. To one tube add water so the cotton wool is damp (the variable being tested); leave the other tube dry with no water. Keep all other conditions the same in both tubes — same temperature, same access to air/oxygen, same light and same seeds — so only the presence of water differs. Leave both for several days and compare. The seeds with water should germinate while the dry seeds do not, showing water is needed.",
            markScheme: [
              "Two sets of the same seeds; one with water, one without (independent variable = water)",
              "Keep other variables the same: temperature / oxygen / light / number and type of seeds (control variables, any two)",
              "Leave for a few days and observe / count germinated seeds",
              "Expected result: watered seeds germinate, dry ones do not → water needed",
            ],
            commonError: "Changing more than one variable (e.g. also varying temperature), which means the result cannot be attributed to water alone.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "core",
            hints: [
              "What is the one variable you are testing?",
              "What two tubes do you need (with and without)?",
              "List the conditions you must keep the same.",
              "State the expected result and what it shows.",
            ],
            strategy: "Change one variable (water), control the rest, compare outcomes.",
          },
          {
            id: "bio-reproduction-bq2-04",
            question: "Explain three ways in which a wind-pollinated flower is adapted to pollination by wind. [3 marks]",
            marks: 3,
            modelAnswer: "Wind-pollinated flowers have anthers that hang outside the flower on long filaments, so they are exposed to air currents and shed their light pollen freely into the wind. They produce large amounts of small, light, smooth pollen, which is easily carried by the wind and increases the chance that some lands on a stigma. They have large, feathery stigmas that hang outside the flower, giving a large surface area to catch pollen grains drifting in the air.",
            markScheme: [
              "Anthers hang outside / on long filaments → exposed to wind / shed pollen freely",
              "Pollen small/light/smooth and in large amounts → carried by wind / increases chance of landing",
              "Feathery / large stigma outside → large surface area to catch airborne pollen",
            ],
            commonError: "Describing insect-pollinated features (bright petals, nectar) by mistake.",
            guideRef: "Insect- vs Wind-Pollinated Flowers",
            difficulty: "core",
            hints: [
              "Think about the anthers' position.",
              "Describe the pollen and its quantity.",
              "Describe the stigma's shape and position.",
              "Each point needs the feature plus why it suits wind.",
            ],
            strategy: "Feature + function for each of anthers, pollen, stigma.",
          },
          {
            id: "bio-reproduction-bq2-05",
            question: "In an experiment, equal numbers of pea seeds are kept at 5°C, 20°C and 40°C, all with water and air. After one week, the number germinated is: 5°C = 1; 20°C = 18; 40°C = 4. Explain these results. [4 marks]",
            marks: 4,
            modelAnswer: "Germination depends on enzymes, which work fastest at an optimum temperature. At 5°C very few seeds germinated because the temperature is too low: the enzymes work very slowly, so the reactions of germination are very slow. At 20°C the most seeds germinated because this is close to the optimum temperature for the enzymes, so the reactions occur quickly. At 40°C fewer germinated because the temperature is too high and begins to denature (change the shape of) the enzymes, so they can no longer catalyse the reactions properly.",
            markScheme: [
              "Germination/metabolism controlled by enzymes which have an optimum temperature",
              "Low temperature (5°C): enzymes work slowly / reactions slow → little germination",
              "20°C: near optimum → enzymes fastest → most germination",
              "High temperature (40°C): enzymes denatured / shape changed → fewer germinate",
            ],
            commonError: "Saying enzymes are 'killed' at high temperature — they are denatured (their shape changes), not killed (enzymes are not alive).",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "challenge",
            hints: [
              "What controls the rate of the reactions in germination?",
              "Why is 5°C poor for enzyme activity?",
              "Why is 20°C best?",
              "What happens to enzymes at 40°C?",
            ],
            strategy: "Explain each temperature in terms of enzyme activity and the optimum.",
          },
          {
            id: "bio-reproduction-bq2-06",
            question: "Explain why seed dispersal away from the parent plant is important, giving two reasons. [3 marks]",
            marks: 3,
            modelAnswer: "Dispersal spreads the seeds away from the parent plant so the new seedlings do not have to compete with the parent or with each other for resources such as light, water, minerals and space; this reduces competition and improves their chances of survival. It also allows the species to colonise new areas/habitats, spreading the population and reducing the risk of all offspring being destroyed in one place by disease or local disaster.",
            markScheme: [
              "Reduces competition (between seedlings and parent / each other)",
              "Names a resource competed for: light / water / minerals / space",
              "Allows colonisation of new areas / spreads population (reduces local risk)",
            ],
            commonError: "Stating 'so they don't compete' without naming any resource being competed for.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "core",
            hints: [
              "What would seedlings under the parent compete for?",
              "Name at least one resource.",
              "What is the benefit of reaching new areas?",
            ],
            strategy: "Two distinct reasons: reduce competition; colonise new areas.",
          },
          {
            id: "bio-reproduction-bq2-07",
            question: "A student measures the percentage of cress seeds that germinate at different temperatures. Out of 50 seeds at 25°C, 42 germinate. Calculate the percentage germination. [2 marks]",
            marks: 2,
            modelAnswer: "Percentage germination = (number germinated ÷ total number) × 100 = (42 ÷ 50) × 100 = 84%.",
            markScheme: [
              "Method: (42 ÷ 50) × 100",
              "Answer: 84%",
            ],
            commonError: "Forgetting to multiply by 100 (giving 0.84) or dividing the wrong way round.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "warmup",
            solutions: [
              {
                label: "Percentage calculation",
                steps: [
                  "Identify the fraction that germinated: 42 out of 50.",
                  "Write as a fraction: 42 ÷ 50 = 0.84.",
                  "Multiply by 100 to convert to a percentage: 0.84 × 100 = 84.",
                  "Answer: 84% of the seeds germinated.",
                ],
              },
            ],
          },
          {
            id: "bio-reproduction-bq2-08",
            question: "Explain why an insect-pollinated flower needs to produce much less pollen than a wind-pollinated flower. [3 marks]",
            marks: 3,
            modelAnswer: "In insect pollination the pollen is carried directly from flower to flower by an insect, which moves fairly reliably between flowers of the same species, so most of the pollen has a good chance of reaching a stigma. In wind pollination the pollen is scattered randomly by the wind, so the vast majority never lands on a suitable stigma and is wasted. Because insect delivery is much more targeted (less wasteful), the insect-pollinated flower can afford to make far less pollen.",
            markScheme: [
              "Insect carries pollen directly / reliably between flowers (of same species)",
              "Wind disperses pollen randomly → most is wasted",
              "Targeted delivery means less pollen needed (less waste)",
            ],
            commonError: "Simply stating 'insects are better' without explaining that wind dispersal is random and wasteful.",
            guideRef: "Insect- vs Wind-Pollinated Flowers",
            difficulty: "core",
            hints: [
              "How directly does an insect deliver pollen?",
              "How directed is wind dispersal?",
              "If delivery is reliable, how much pollen is wasted?",
            ],
            strategy: "Compare reliability of delivery to justify the difference in pollen amount.",
          },
          {
            id: "bio-reproduction-bq2-09",
            question: "Define pollination and explain why it is not the same as fertilisation in flowering plants. [3 marks]",
            marks: 3,
            modelAnswer: "Pollination is the transfer of pollen from an anther to a stigma of a flower of the same species. It is not the same as fertilisation: pollination is only the transfer/arrival of pollen onto the stigma, whereas fertilisation is the later event in which the male gamete nucleus (carried down the pollen tube) fuses with the female gamete (egg cell) inside the ovule. Pollination must happen first, but fertilisation only occurs once the nuclei fuse.",
            markScheme: [
              "Pollination = transfer of pollen from anther to stigma (same species)",
              "Fertilisation = fusion of male nucleus with egg cell / female gamete (in the ovule)",
              "Clear point that pollination happens first / is just transfer, fertilisation is gamete fusion",
            ],
            commonError: "Treating the two words as synonyms — pollination is transfer; fertilisation is gamete fusion.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "core",
            hints: [
              "Define pollination precisely (anther to stigma).",
              "Define fertilisation (which nuclei fuse, and where?).",
              "State which happens first.",
            ],
            strategy: "Give a clear definition of each, then contrast them.",
          },
          {
            id: "bio-reproduction-bq2-10",
            question: "A seed germinating in the dark underground still grows a shoot upwards. Explain how this is possible given the conditions germination requires, and why light is not one of those conditions. [4 marks]",
            marks: 4,
            modelAnswer: "Germination requires water, oxygen and a suitable temperature, all of which can be present underground in the dark — there is moisture in the soil, oxygen in the air spaces between soil particles, and a suitable soil temperature. The seed does not need light to germinate because it does not rely on photosynthesis at this stage: it uses the food (energy) reserves stored inside the seed itself to grow. Once the shoot reaches the surface and develops green leaves, it can then begin photosynthesis to make its own food. So light is not needed for germination, only later for the growing plant.",
            markScheme: [
              "Water, oxygen and suitable temperature can all be present underground/in the dark",
              "Light not needed because germination does not (yet) use photosynthesis",
              "Seed uses its own stored food reserves for energy/growth",
              "Light/photosynthesis only needed later, once green leaves form above ground",
            ],
            commonError: "Assuming a plant always needs light, forgetting the seed has its own food store for early growth.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "challenge",
            hints: [
              "Which germination conditions can the soil provide in the dark?",
              "Where does the early seedling get its energy if not from light?",
              "What does the seed store inside it?",
              "When does the plant finally need light?",
            ],
            strategy: "Show the three conditions are met underground; explain stored food replaces photosynthesis early on.",
          },
        ],
      },
      {
        id: "bio-reproduction-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Human reproductive systems, gametes, fertilisation and implantation.",
        questions: [
          {
            id: "bio-reproduction-bq3-01",
            question: "Name the male and female gametes in humans and state where each is produced. [2 marks]",
            marks: 2,
            modelAnswer: "The male gamete is the sperm, produced in the testes. The female gamete is the egg cell (ovum), produced in the ovaries.",
            markScheme: [
              "Male gamete = sperm, produced in the testes",
              "Female gamete = egg cell / ovum, produced in the ovaries",
            ],
            commonError: "Confusing where gametes are made (testes/ovaries) with where fertilisation occurs (oviduct).",
            guideRef: "Human Reproductive Systems",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bq3-02",
            question: "Describe two ways in which a sperm cell is adapted to its function. [2 marks]",
            marks: 2,
            modelAnswer: "A sperm cell has a long tail (flagellum) that beats so it can swim towards the egg. It has many mitochondria in the midpiece, which release energy (ATP) by aerobic respiration to power this movement. (It also has an acrosome containing enzymes to penetrate the egg, and a streamlined head to move easily through fluid.)",
            markScheme: [
              "Tail / flagellum → for swimming / movement to the egg",
              "Many mitochondria → release energy for movement (or acrosome with enzymes to penetrate egg / streamlined head)",
            ],
            commonError: "Naming a structure (e.g. 'a tail') without saying what it does — each adaptation needs its function.",
            guideRef: "Human Reproductive Systems",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bq3-03",
            question: "Explain why fertilisation in humans restores the diploid number of chromosomes, using the term 'haploid' in your answer. [3 marks]",
            marks: 3,
            modelAnswer: "Gametes (sperm and egg) are haploid, meaning each contains only one set of chromosomes — 23 in humans. At fertilisation, a sperm (23 chromosomes) fuses with an egg (23 chromosomes). The two haploid nuclei join, so the resulting zygote has 23 + 23 = 46 chromosomes, which is the diploid number. This restores the full chromosome number characteristic of human body cells.",
            markScheme: [
              "Each gamete is haploid / has 23 chromosomes (one set)",
              "Sperm and egg fuse / nuclei join at fertilisation",
              "23 + 23 = 46 → diploid number restored",
            ],
            commonError: "Stating the numbers without using or understanding 'haploid' (one set) and 'diploid' (two sets).",
            guideRef: "Human Reproductive Systems",
            difficulty: "core",
            hints: [
              "What does 'haploid' mean and how many chromosomes is that?",
              "What happens to the two gametes at fertilisation?",
              "Add the chromosome numbers to get the zygote's total.",
            ],
            strategy: "Two haploid gametes (23 each) fuse → diploid zygote (46).",
          },
          {
            id: "bio-reproduction-bq3-04",
            question: "Describe the path taken by a sperm from where it is made to where fertilisation occurs. [4 marks]",
            marks: 4,
            modelAnswer: "Sperm are made in the testes. They pass along the sperm duct (vas deferens), where fluids from glands such as the prostate and seminal vesicles are added to form semen. The semen passes through the urethra and is released from the penis into the vagina during intercourse. The sperm then swim up through the cervix and uterus and into the oviduct, where one sperm may fertilise the egg.",
            markScheme: [
              "Made in the testes",
              "Travel along the sperm duct (vas deferens); fluid added to form semen",
              "Through the urethra / penis → into the vagina",
              "Swim through cervix and uterus into the oviduct (where fertilisation occurs)",
            ],
            commonError: "Missing the oviduct as the site of fertilisation, or muddling the order of the tubes.",
            guideRef: "Human Reproductive Systems",
            difficulty: "core",
            hints: [
              "Where are sperm produced?",
              "Which duct do they travel along, and what is added?",
              "How do they leave the male body and enter the female?",
              "Where in the female do they reach the egg?",
            ],
            strategy: "Follow the route as a sequence of named structures, ending at the oviduct.",
          },
          {
            id: "bio-reproduction-bq3-05",
            question: "Explain two ways in which an egg cell is adapted to its function. [3 marks]",
            marks: 3,
            modelAnswer: "The egg cell contains a large store of food (nutrients/yolk) in its cytoplasm, which provides energy and materials to nourish the embryo in the days before it implants and gains nutrients from the mother. It has a jelly coat surrounding the cell membrane, which changes (hardens) after one sperm has entered to stop any more sperm fusing with it, preventing polyspermy and keeping the correct chromosome number. (It is also large and non-motile, as it does not need to move itself.)",
            markScheme: [
              "Food/nutrient store in cytoplasm → nourishes the early embryo",
              "Jelly coat → hardens after fertilisation to prevent more sperm entering (polyspermy)",
              "Clear link of each feature to its function (any two adaptations explained)",
            ],
            commonError: "Saying the egg has 'lots of food' without explaining it supports the embryo, or naming the jelly coat without its role.",
            guideRef: "Human Reproductive Systems",
            difficulty: "core",
            hints: [
              "Why does the egg need food reserves?",
              "What does the jelly coat do after a sperm enters?",
              "Each feature must be linked to a function.",
            ],
            strategy: "State feature, then 'so that…' function, for two adaptations.",
          },
          {
            id: "bio-reproduction-bq3-06",
            question: "Describe what happens to the zygote from fertilisation in the oviduct to implantation in the uterus. [4 marks]",
            marks: 4,
            modelAnswer: "After fertilisation in the oviduct, the zygote begins to divide by mitosis, forming first two cells, then four, and so on, becoming a ball of cells called an embryo. As it divides, the embryo is moved along the oviduct towards the uterus (helped by cilia and muscle). When it reaches the uterus, the embryo sinks into and embeds itself in the thick, blood-rich uterine lining (endometrium) — this is implantation, which happens about 6–10 days after fertilisation. The embryo then continues to develop in the uterus.",
            markScheme: [
              "Zygote divides by mitosis → ball of cells / embryo",
              "Embryo travels down the oviduct to the uterus",
              "Embryo embeds in the uterine lining / endometrium = implantation",
              "Occurs in the uterus (allow ~6–10 days after fertilisation)",
            ],
            commonError: "Saying the zygote divides by meiosis — it divides by mitosis, which keeps the chromosome number at 46.",
            guideRef: "Human Reproductive Systems",
            difficulty: "core",
            hints: [
              "Which type of cell division increases cell number after fertilisation?",
              "What is the ball of cells called?",
              "Where does it travel to?",
              "What is the name for embedding in the lining?",
            ],
            strategy: "Sequence: mitosis → embryo → travel → implant in uterus lining.",
          },
          {
            id: "bio-reproduction-bq3-07",
            question: "The acrosome of a sperm releases enzymes when it reaches the egg. Explain how this helps fertilisation, and what then happens to ensure only one sperm fertilises the egg. [4 marks]",
            marks: 4,
            modelAnswer: "The enzymes released from the acrosome digest a path through the jelly coat and outer membrane of the egg, allowing the sperm's head to reach and fuse with the egg cell membrane so its nucleus can enter. Once one sperm has entered, the egg's jelly coat changes and hardens, forming a barrier that prevents any further sperm from getting in. This ensures only one sperm fertilises the egg (prevents polyspermy), so the zygote receives just one set of male chromosomes and has the correct diploid number of 46.",
            markScheme: [
              "Acrosome enzymes digest a path through the egg's coat/membrane",
              "Allows sperm nucleus to enter and fuse with the egg",
              "After entry the jelly coat hardens / changes → barrier to other sperm",
              "Prevents polyspermy / ensures correct chromosome number (46)",
            ],
            commonError: "Forgetting the second part — explaining only how the sperm gets in, not how extra sperm are then blocked.",
            guideRef: "Human Reproductive Systems",
            difficulty: "challenge",
            hints: [
              "What do the acrosome enzymes break down?",
              "Why does the sperm need to get through that layer?",
              "What change happens to the egg coat after one sperm enters?",
              "Why does blocking extra sperm matter for the chromosome number?",
            ],
            strategy: "Two stages: enzymes let one sperm in; coat hardening keeps the rest out.",
          },
          {
            id: "bio-reproduction-bq3-08",
            question: "A man has a very low sperm count but produces normal levels of testosterone. Suggest, with reasoning, why he may still find it difficult to father a child. [3 marks]",
            marks: 3,
            modelAnswer: "Fertilisation requires a sperm to reach and fuse with the egg in the oviduct. With a very low sperm count, far fewer sperm are released, so the chance that any one sperm survives the journey through the cervix, uterus and oviduct and reaches the egg is much lower. Even though testosterone (which drives secondary sexual characteristics and stimulates sperm production) is normal, the small number of sperm reduces the probability of successful fertilisation, making it harder to father a child.",
            markScheme: [
              "Fertilisation needs a sperm to reach/fuse with the egg",
              "Low count = fewer sperm, so lower chance one reaches the egg / survives the journey",
              "Normal testosterone does not guarantee enough sperm reach the egg → lower probability of fertilisation",
            ],
            commonError: "Assuming normal testosterone means normal fertility — hormone level and actual sperm number/quality are different things.",
            guideRef: "Human Reproductive Systems",
            difficulty: "challenge",
            hints: [
              "What has to happen for fertilisation to occur?",
              "How does a low number of sperm affect the odds?",
              "Does normal testosterone guarantee many sperm reach the egg?",
            ],
            strategy: "Link low sperm number to reduced probability of one reaching the egg.",
          },
          {
            id: "bio-reproduction-bq3-09",
            question: "Compare a sperm cell and an egg cell, giving two differences and explaining how each difference relates to its function. [4 marks]",
            marks: 4,
            modelAnswer: "A sperm cell is much smaller and has a tail (flagellum) and many mitochondria, so it can swim actively towards the egg using energy from respiration; the egg cell is much larger and has no tail because it does not move itself — it is wafted along the oviduct. The egg cell contains a large store of food (yolk) in its cytoplasm to nourish the early embryo, whereas the sperm carries almost no food store because it only needs to deliver its nucleus to the egg. (Both are haploid, each carrying 23 chromosomes.)",
            markScheme: [
              "Sperm small + tail/mitochondria → swims to egg (egg large, no tail, does not move)",
              "Egg has large food/yolk store → nourishes embryo (sperm has little food)",
              "Each difference correctly linked to its function (need two)",
              "Allow: both haploid / sperm delivers nucleus only",
            ],
            commonError: "Listing differences without linking them to function, or claiming the gametes differ in chromosome number (both are haploid, 23).",
            guideRef: "Human Reproductive Systems",
            difficulty: "core",
            hints: [
              "Compare size and the presence of a tail.",
              "Why does only one of them need to swim?",
              "Which one stores food, and why?",
              "Link each difference to its job.",
            ],
            strategy: "Choose differences where the function is clear (movement; food store).",
          },
          {
            id: "bio-reproduction-bq3-10",
            question: "State the function of the oviduct and explain how its ciliated lining helps it carry out this function. [3 marks]",
            marks: 3,
            modelAnswer: "The oviduct carries the egg from the ovary towards the uterus and is the site where fertilisation occurs. Its lining is covered in cilia — tiny hair-like structures that beat in a coordinated way to waft (move) the egg, and later the developing embryo, along the oviduct towards the uterus. This movement helps bring the egg to where sperm can reach it and helps transport the embryo to the uterus for implantation.",
            markScheme: [
              "Oviduct carries egg from ovary to uterus / site of fertilisation",
              "Cilia beat / waft to move the egg (and embryo) along",
              "Helps transport egg to meet sperm / move embryo towards the uterus",
            ],
            commonError: "Confusing cilia (move the egg) with the function of the ovary (makes the egg).",
            guideRef: "Human Reproductive Systems",
            difficulty: "core",
            hints: [
              "What does the oviduct transport, and to where?",
              "What are cilia and what do they do?",
              "Link the cilia's beating to moving the egg/embryo.",
            ],
            strategy: "State the function, then explain how cilia achieve the transport.",
          },
        ],
      },
      {
        id: "bio-reproduction-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Menstrual cycle and hormones, pregnancy, placenta, ante-natal care, birth control and STIs.",
        questions: [
          {
            id: "bio-reproduction-bq4-01",
            question: "Name the four hormones that control the menstrual cycle and state where each is produced. [4 marks]",
            marks: 4,
            modelAnswer: "FSH (follicle-stimulating hormone) is produced by the pituitary gland. LH (luteinising hormone) is also produced by the pituitary gland. Oestrogen is produced by the ovary. Progesterone is produced by the ovary (specifically the corpus luteum after ovulation).",
            markScheme: [
              "FSH — pituitary gland",
              "LH — pituitary gland",
              "Oestrogen — ovary",
              "Progesterone — ovary / corpus luteum",
            ],
            commonError: "Saying FSH and LH come from the ovary — they are made by the pituitary gland; the ovary makes oestrogen and progesterone.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bq4-02",
            question: "Describe the role of oestrogen and the role of progesterone in the menstrual cycle. [4 marks]",
            marks: 4,
            modelAnswer: "Oestrogen, secreted by the ovary, repairs and thickens the lining of the uterus after menstruation; at a high level it also stimulates the pituitary to release LH (triggering ovulation) and inhibits FSH. Progesterone, secreted by the corpus luteum, maintains the thickened uterine lining ready for a possible embryo; it also inhibits FSH and LH. If fertilisation does not occur, progesterone falls, the uterine lining breaks down and menstruation begins.",
            markScheme: [
              "Oestrogen: repairs / thickens uterine lining",
              "Oestrogen: (high level) triggers LH surge / inhibits FSH (any one)",
              "Progesterone: maintains the (thickened) uterine lining",
              "Progesterone: inhibits FSH and LH / its fall causes menstruation (any one)",
            ],
            commonError: "Swapping the roles — oestrogen builds/thickens the lining; progesterone maintains it.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "core",
            hints: [
              "Which hormone rebuilds the lining in the first half?",
              "Which hormone keeps the lining in the second half?",
              "What does oestrogen do to LH at a high level?",
              "What happens when progesterone falls?",
            ],
            strategy: "Oestrogen = build/thicken; progesterone = maintain.",
          },
          {
            id: "bio-reproduction-bq4-03",
            question: "Explain the role of the placenta in exchanging substances between mother and fetus, including how its structure makes exchange efficient. [5 marks]",
            marks: 5,
            modelAnswer: "The placenta connects the mother and fetus and allows the exchange of substances between their separate blood supplies, which do not mix. Useful substances — oxygen, glucose, amino acids, water, minerals, vitamins and antibodies — pass from the mother's blood to the fetus's blood. Waste substances — carbon dioxide and urea — pass from the fetus to the mother to be removed. The placenta is adapted for efficient exchange: it has a very large surface area, created by many finger-like villi, to maximise the rate of diffusion. Its walls are very thin, giving a short diffusion distance between the two blood supplies. It has a rich blood supply on both sides, which maintains steep concentration gradients so diffusion continues quickly.",
            markScheme: [
              "Maternal and fetal blood do not mix",
              "Oxygen / glucose / amino acids / antibodies pass from mother to fetus (any one or more)",
              "Carbon dioxide and urea pass from fetus to mother",
              "Large surface area (villi) → maximises exchange / diffusion",
              "Thin walls → short diffusion distance (allow: rich blood supply maintains gradient)",
            ],
            commonError: "Stating the mother's blood flows into the fetus — the circulations stay separate; only dissolved substances cross by diffusion/active transport.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "core",
            hints: [
              "First state whether the two bloods mix.",
              "List substances passing each way.",
              "What structural feature gives a large surface area?",
              "Why do thin walls and a rich blood supply help diffusion?",
            ],
            strategy: "Cover both directions of exchange, then surface area, thin walls and gradient.",
          },
          {
            id: "bio-reproduction-bq4-04",
            question: "State two functions of the amniotic fluid during pregnancy. [2 marks]",
            marks: 2,
            modelAnswer: "The amniotic fluid cushions and protects the fetus from mechanical shock or knocks. It also helps to maintain a stable, warm temperature around the fetus. (It also allows the fetus to move freely as it develops.)",
            markScheme: [
              "Protects / cushions the fetus against mechanical shock / knocks",
              "Maintains a stable temperature / supports / allows movement (any second valid function)",
            ],
            commonError: "Confusing the amniotic fluid (protection/cushioning) with the placenta (exchange of substances).",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bq4-05",
            question: "Explain how the contraceptive pill, which contains oestrogen and/or progesterone, prevents pregnancy. [3 marks]",
            marks: 3,
            modelAnswer: "The pill keeps the level of oestrogen and/or progesterone in the blood artificially high. These high hormone levels inhibit the release of FSH from the pituitary gland, so no follicle matures in the ovary. They also suppress the LH surge, so ovulation does not occur. With no egg released, there is no egg for a sperm to fertilise, so pregnancy is prevented.",
            markScheme: [
              "Pill keeps oestrogen/progesterone artificially high",
              "Inhibits FSH (so no follicle matures) / inhibits LH (so no ovulation)",
              "No ovulation / no egg released → no fertilisation possible",
            ],
            commonError: "Describing the pill as a barrier or as killing sperm — it works hormonally by stopping ovulation.",
            guideRef: "Sex Hormones and Sexually Transmitted Infections",
            difficulty: "core",
            hints: [
              "What does the pill do to hormone levels?",
              "Which pituitary hormone is then inhibited?",
              "What happens to ovulation?",
              "No egg means what for fertilisation?",
            ],
            strategy: "High hormones → inhibit FSH/LH → no ovulation → no fertilisation.",
          },
          {
            id: "bio-reproduction-bq4-06",
            question: "Describe two pieces of ante-natal care advice for a pregnant woman and explain how each helps the developing fetus. [4 marks]",
            marks: 4,
            modelAnswer: "She should eat a balanced diet containing enough iron, calcium and folic acid: iron is needed to make haemoglobin for both her and the fetus, calcium is needed for the fetus's bones and teeth, and folic acid reduces the risk of defects in the baby's developing spinal cord/neural tube. She should avoid alcohol and not smoke: alcohol can cross the placenta and damage the development of the fetus, and chemicals in tobacco smoke (such as carbon monoxide and nicotine) reduce the oxygen reaching the fetus and can lead to low birth weight. (Other valid advice: regular ante-natal check-ups; avoiding certain infections.)",
            markScheme: [
              "Balanced diet (named nutrient: iron / calcium / folic acid)",
              "Explanation of how that nutrient benefits the fetus",
              "Avoid alcohol / smoking",
              "Explanation: harmful chemicals cross the placenta / reduce oxygen / damage development",
            ],
            commonError: "Giving advice without explaining the benefit to the fetus — both halves are needed for the marks.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "core",
            hints: [
              "Name a nutrient a pregnant woman needs and why.",
              "Why is folic acid recommended?",
              "Why are alcohol and smoking discouraged?",
              "Each piece of advice must be explained.",
            ],
            strategy: "Two pieces of advice, each paired with a clear benefit/harm to the fetus.",
          },
          {
            id: "bio-reproduction-bq4-07",
            question: "Explain how HIV is transmitted and describe two methods that help prevent its spread. [4 marks]",
            marks: 4,
            modelAnswer: "HIV is transmitted through the exchange of body fluids: through unprotected sexual intercourse, by sharing contaminated needles (for example during intravenous drug use), through transfusion of infected blood, and from an infected mother to her child during birth or breastfeeding. Methods to prevent its spread include using condoms during sexual intercourse, which act as a barrier to the exchange of body fluids, and not sharing needles or syringes. (Other valid methods: screening donated blood before transfusion; giving antiretroviral drugs to reduce transmission, including mother to child.)",
            markScheme: [
              "Transmission via body fluids — named route: unprotected sex / shared needles / infected blood / mother to child (any one+)",
              "Prevention 1: use of condoms (barrier to body fluids)",
              "Prevention 2: not sharing needles / screening blood / antiretroviral drugs",
              "Clear link of a prevention method to how it blocks transmission",
            ],
            commonError: "Listing casual-contact routes (handshakes, sharing food) as transmission — HIV is not spread this way.",
            guideRef: "Sex Hormones and Sexually Transmitted Infections",
            difficulty: "core",
            hints: [
              "HIV spreads through which type of substances?",
              "Name at least one transmission route.",
              "Which barrier method reduces fluid exchange during sex?",
              "Give a second prevention method.",
            ],
            strategy: "Match each prevention method to the transmission route it blocks.",
          },
          {
            id: "bio-reproduction-bq4-08",
            question: "Explain why a high level of progesterone during pregnancy stops further menstrual cycles, referring to hormone feedback. [4 marks]",
            marks: 4,
            modelAnswer: "During pregnancy the level of progesterone (from the corpus luteum and later the placenta) stays high instead of falling. High progesterone inhibits the release of FSH and LH from the pituitary gland. Because FSH is inhibited, no new follicle matures in the ovary, and because the LH surge is suppressed, ovulation does not occur — so no egg is released. High progesterone also maintains the thickened uterine lining, so it is not shed and menstruation does not happen. In this way the menstrual cycle is paused, protecting the developing embryo.",
            markScheme: [
              "Progesterone remains high during pregnancy (does not fall)",
              "High progesterone inhibits FSH and LH (from the pituitary)",
              "No follicle matures / no ovulation (no egg released)",
              "Uterine lining maintained (not shed) → no menstruation",
            ],
            commonError: "Forgetting that progesterone also maintains the lining (so no menstruation), not only that it blocks ovulation.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "challenge",
            hints: [
              "What happens to progesterone levels in pregnancy?",
              "Which two pituitary hormones does progesterone inhibit?",
              "If FSH and LH are inhibited, what cannot happen in the ovary?",
              "Why does the lining not break down?",
            ],
            strategy: "High progesterone → inhibits FSH/LH (no ovulation) and maintains lining (no menstruation).",
          },
          {
            id: "bio-reproduction-bq4-09",
            question: "A woman's typical menstrual cycle is 30 days and ovulation occurs about 14 days before the start of her next period. On which day of her cycle (counting day 1 as the first day of her period) does she ovulate? Show your working. [2 marks]",
            marks: 2,
            modelAnswer: "Ovulation occurs about 14 days before the next period starts. The next period begins on day 31 (the day after a 30-day cycle ends). So ovulation occurs on day 31 − 14 = day 16 of the cycle.",
            markScheme: [
              "Working: next period starts on day 31 (cycle length + 1); 31 − 14",
              "Answer: day 16",
            ],
            commonError: "Assuming ovulation is always on day 14 — the timing is measured back from the NEXT period, so for a 30-day cycle it is around day 16.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "challenge",
            hints: [
              "Ovulation is counted back from the start of the next period, not forward from day 1.",
              "When does the next period start after a 30-day cycle?",
              "Subtract 14 days from that day.",
            ],
            strategy: "Find the next period's start day, then subtract 14.",
            solutions: [
              {
                label: "Counting back from the next period",
                steps: [
                  "A 30-day cycle means day 30 is the last day; the next period starts on day 31.",
                  "Ovulation is about 14 days before the next period: 31 − 14 = 16.",
                  "So ovulation occurs on day 16 of the cycle.",
                  "(Check: from day 16 to the next period on day 31 is 31 − 16 = 15… counting day 16 itself as the day of ovulation, there are 14 full days until day 30 ends, consistent with 'about 14 days before'.)",
                ],
              },
            ],
          },
          {
            id: "bio-reproduction-bq4-10",
            question: "HIV infection can eventually lead to AIDS. Explain how HIV damages the immune system and why this makes a person vulnerable to other infections. [4 marks]",
            marks: 4,
            modelAnswer: "HIV is a virus that infects and destroys T-helper lymphocytes, a type of white blood cell that coordinates the immune response. As more and more of these cells are destroyed over time, the immune system becomes progressively weaker and can no longer respond effectively to pathogens. This stage is called AIDS. Because the immune system is so weakened, the person can no longer fight off infections that a healthy immune system would easily destroy, so opportunistic infections (such as pneumonia or tuberculosis) and some cancers can take hold and become life-threatening.",
            markScheme: [
              "HIV infects/destroys T-helper lymphocytes (white blood cells)",
              "These cells coordinate / are needed for the immune response",
              "Immune system progressively weakened → AIDS",
              "Person cannot fight off (opportunistic) infections that are normally harmless / become life-threatening",
            ],
            commonError: "Saying HIV directly causes infections like pneumonia — it weakens the immune system, which then allows other pathogens to cause those infections.",
            guideRef: "Sex Hormones and Sexually Transmitted Infections",
            difficulty: "challenge",
            hints: [
              "Which specific cells does HIV destroy?",
              "What is the job of those cells in the immune system?",
              "What happens to immunity as more are destroyed?",
              "Why does a weak immune system lead to other infections?",
            ],
            strategy: "Destroyed T-helper cells → weak immunity → opportunistic infections.",
          },
        ],
      },
    ],
  },
};
