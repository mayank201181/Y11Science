import type { Topic } from "../types";

export const bioEcology: Topic = {
  id: "bio-ecology",
  title: "Organisms & Environment",
  subject: "biology",
  icon: "🌍",
  blurb: "Ecosystems, energy flow, nutrient cycles, human impact, and biotechnology.",
  intro:
    "Every living thing is connected — to its habitat, to other organisms, and to the non-living world around it. " +
    "In this topic you will trace energy from the Sun through food webs, follow carbon and nitrogen atoms as they cycle between organisms and the environment, " +
    "and evaluate how human activities — from deforestation to genetic modification — alter these delicate systems.",

  guide: [
    // ── SECTION 1 ────────────────────────────────────────────────────────────
    {
      heading: "Ecosystem Vocabulary",
      body:
        "An **ecosystem** is all the living organisms in an area together with the non-living (abiotic) components — light, temperature, water, soil minerals — that interact with them.\n\n" +
        "Key terms you must distinguish:\n\n" +
        "- **Population**: all individuals of ONE species in a given area at a given time (e.g. all oak trees in a forest).\n" +
        "- **Community**: all the populations of DIFFERENT species living and interacting in an area.\n" +
        "- **Habitat**: the place where an organism lives, defined by its physical and biological features.\n" +
        "- **Ecosystem**: community + abiotic environment functioning as a system.\n" +
        "- **Niche**: the role an organism plays in its ecosystem (what it eats, where it lives, when it is active). No two species can occupy exactly the same niche.\n\n" +
        "Abiotic factors include light intensity, temperature, pH, water availability, mineral ion concentration, and oxygen concentration. Biotic factors include competition, predation, parasitism, and mutualism.",
      keyPoints: [
        "Population = one species; community = many species in one area.",
        "Habitat is the place; niche is the role.",
        "Ecosystem = community + abiotic environment.",
        "Abiotic factors: light, temperature, pH, water, minerals.",
        "Biotic factors: competition, predation, parasitism, mutualism.",
      ],
    },

    // ── SECTION 2 ────────────────────────────────────────────────────────────
    {
      heading: "Food Chains, Food Webs & Trophic Levels",
      body:
        "A **food chain** shows the direction of energy transfer between organisms. Arrows represent energy flow: grass → rabbit → fox.\n\n" +
        "Every food chain starts with a **producer** — a photosynthetic organism (plant or algae) that converts light energy into chemical energy stored in organic molecules. " +
        "Producers occupy **trophic level 1 (TL1)**.\n\n" +
        "**Consumers** obtain energy by eating other organisms:\n\n" +
        "- **Primary consumers (TL2)** — herbivores, eat producers.\n" +
        "- **Secondary consumers (TL3)** — carnivores, eat primary consumers.\n" +
        "- **Tertiary consumers (TL4)** — carnivores, eat secondary consumers.\n\n" +
        "**Decomposers** (bacteria and fungi) break down dead organic matter and waste, releasing minerals back into the soil.\n\n" +
        "A **food web** links many food chains, showing the realistic complexity of feeding relationships. Removing one species can have cascading effects (a **trophic cascade**).\n\n" +
        "**Rule of thumb**: approximately 10% of energy is transferred from one trophic level to the next; the rest is lost.",
      diagrams: [
        {
          caption: "A simple food web showing producers, primary and secondary consumers",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Food web diagram showing grass, rabbit, fox, caterpillar and thrush">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- nodes -->
  <rect x="120" y="160" width="80" height="26" rx="5" fill="#166534" stroke="#34d399" stroke-width="1.5"/>
  <text x="160" y="178" text-anchor="middle" font-size="11" fill="#eef0ff" font-family="sans-serif">Grass (TL1)</text>

  <rect x="20" y="100" width="80" height="26" rx="5" fill="#1e3a5f" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="60" y="118" text-anchor="middle" font-size="11" fill="#eef0ff" font-family="sans-serif">Rabbit (TL2)</text>

  <rect x="220" y="100" width="80" height="26" rx="5" fill="#1e3a5f" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="260" y="118" text-anchor="middle" font-size="11" fill="#eef0ff" font-family="sans-serif">Caterpillar (TL2)</text>

  <rect x="20" y="40" width="80" height="26" rx="5" fill="#3b1f5e" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="60" y="58" text-anchor="middle" font-size="11" fill="#eef0ff" font-family="sans-serif">Fox (TL3)</text>

  <rect x="220" y="40" width="80" height="26" rx="5" fill="#3b1f5e" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="260" y="58" text-anchor="middle" font-size="11" fill="#eef0ff" font-family="sans-serif">Thrush (TL3)</text>

  <!-- arrows -->
  <line x1="140" y1="160" x2="70" y2="127" stroke="#34d399" stroke-width="1.5" marker-end="url(#arr)"/>
  <line x1="180" y1="160" x2="250" y2="127" stroke="#34d399" stroke-width="1.5" marker-end="url(#arr)"/>
  <line x1="60" y1="100" x2="60" y2="67" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#arr)"/>
  <line x1="260" y1="100" x2="260" y2="67" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#arr)"/>
  <line x1="90" y1="52" x2="220" y2="52" stroke="#a78bfa" stroke-width="1" stroke-dasharray="4 2" marker-end="url(#arr2)"/>

  <defs>
    <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#b7bce0"/>
    </marker>
    <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#a78bfa"/>
    </marker>
  </defs>
  <text x="160" y="14" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif">Arrow = direction of energy transfer</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Producers (TL1) capture light energy via photosynthesis.",
        "Consumers are labelled primary, secondary, tertiary by trophic level.",
        "Decomposers recycle nutrients but are not usually shown in food chains.",
        "Food webs are more realistic than single food chains.",
        "~10% of energy passes from one trophic level to the next.",
      ],
      discovery: {
        problem:
          "A lake food chain is: phytoplankton → water fleas → small fish → pike. " +
          "If 1000 kJ of energy is fixed by phytoplankton, how much is available to pike? " +
          "Try to work it out before reading the energy-flow section.",
        idea:
          "At 10% transfer efficiency: TL2 gets 100 kJ, TL3 gets 10 kJ, TL4 (pike) gets 1 kJ. " +
          "Only 0.1% of the original energy reaches the top predator — this is why food chains are short.",
      },
      strategies: ["Trace the arrows", "Apply 10% rule step by step"],
    },

    // ── SECTION 3 ────────────────────────────────────────────────────────────
    {
      heading: "Energy Flow & Pyramids",
      body:
        "The **Sun** is the principal energy source for almost all ecosystems. Producers capture a tiny fraction of sunlight during photosynthesis and store it as chemical energy (glucose, starch).\n\n" +
        "**Why is energy lost between trophic levels?**\n\n" +
        "- **Respiration**: organisms use energy for metabolic processes (movement, growth, active transport, maintaining body temperature). This releases heat.\n" +
        "- **Egestion**: undigested material (e.g. cellulose in faeces) is not absorbed and passes out.\n" +
        "- **Excretion**: nitrogenous waste (urea) contains chemical energy that is lost.\n" +
        "- **Movement and heat**: energy dissipated as heat to the surroundings.\n\n" +
        "Because so much energy is lost at each step, **food chains are short** (usually 3–5 links). " +
        "There is simply not enough energy to support many trophic levels.\n\n" +
        "**Pyramids of numbers** show the count of individuals at each trophic level. They can be irregular (e.g. one oak tree supports thousands of caterpillars).\n\n" +
        "**Pyramids of biomass** show dry mass at each level — usually a true pyramid shape but can be inverted in aquatic ecosystems (high producer turnover rate).\n\n" +
        "**Pyramids of energy** show kJ transferred per unit area per unit time. These are ALWAYS a true pyramid (energy can only be lost, never gained moving up).",
      diagrams: [
        {
          caption: "Pyramid of energy: energy (kJ/m²/year) decreasing at each trophic level",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pyramid of energy showing four trophic levels with decreasing energy values">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- TL1 producer base -->
  <polygon points="40,175 280,175 245,145 75,145" fill="#166534" stroke="#34d399" stroke-width="1.5"/>
  <text x="160" y="164" text-anchor="middle" font-size="10" fill="#eef0ff" font-family="sans-serif">Producers  10 000 kJ/m2/yr</text>
  <!-- TL2 -->
  <polygon points="75,145 245,145 215,115 105,115" fill="#1e4d7a" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="160" y="134" text-anchor="middle" font-size="10" fill="#eef0ff" font-family="sans-serif">Primary consumers  1 000 kJ</text>
  <!-- TL3 -->
  <polygon points="105,115 215,115 190,85 130,85" fill="#3b1f5e" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="160" y="104" text-anchor="middle" font-size="10" fill="#eef0ff" font-family="sans-serif">Secondary consumers  100 kJ</text>
  <!-- TL4 -->
  <polygon points="130,85 190,85 172,55 148,55" fill="#7c2d12" stroke="#fb7185" stroke-width="1.5"/>
  <text x="160" y="74" text-anchor="middle" font-size="10" fill="#eef0ff" font-family="sans-serif">Tertiary  10 kJ</text>

  <text x="160" y="20" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif">Pyramid of Energy (always a true pyramid)</text>
  <text x="160" y="195" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif">~90% energy lost at each level (respiration, egestion, heat)</text>
</svg>`,
        },
      ],
      keyPoints: [
        "The Sun is the principal energy source for almost all ecosystems.",
        "Energy is lost as heat (respiration), via egestion, and excretion at each trophic level.",
        "~10% efficiency rule: only about 10% of energy transfers to the next level.",
        "Pyramids of energy are ALWAYS a true pyramid — energy is always lost.",
        "Pyramids of numbers can be irregular; pyramids of biomass can be inverted in sea ecosystems.",
      ],
      whyItWorks:
        "Energy cannot be recycled like matter. Every time ATP is hydrolysed to do cellular work, the free energy is converted to heat (second law of thermodynamics). " +
        "Heat dissipates into the environment and cannot be recaptured by organisms. " +
        "This unidirectional loss is why energy must continuously enter ecosystems from the Sun.",
      thinkDeeper:
        "If transfer efficiency rose from 10% to 20%, a 4-level chain starting with 10 000 kJ would deliver 80 kJ to TL4 instead of 10 kJ. " +
        "Could this support a fifth trophic level? Work through the numbers for both efficiencies and decide.",
      strategies: ["Apply 10% rule at each step", "Identify energy loss routes", "Always label units (kJ/m²/yr)"],
    },

    // ── SECTION 4 ────────────────────────────────────────────────────────────
    {
      heading: "The Carbon Cycle & The Nitrogen Cycle",
      body:
        "**The Carbon Cycle**\n\n" +
        "Carbon is the backbone of all organic molecules. It moves between the atmosphere (as CO₂), living organisms, and the ground.\n\n" +
        "- **Photosynthesis**: producers absorb CO₂ and water, using light energy to make glucose. CO₂ is removed from the atmosphere.\n" +
        "- **Respiration** (all organisms): glucose is oxidised, releasing CO₂ back to the atmosphere.\n" +
        "- **Combustion**: burning fossil fuels and wood releases CO₂ rapidly.\n" +
        "- **Decomposition**: bacteria and fungi break down dead organisms, releasing CO₂ through their respiration.\n" +
        "- **Fossilisation**: ancient organisms that were not fully decomposed became coal, oil, and natural gas — carbon locked away for millions of years.\n\n" +
        "**The Nitrogen Cycle** (qualitative)\n\n" +
        "Nitrogen makes up 78% of air but most organisms cannot use N₂ gas directly.\n\n" +
        "- **Nitrogen fixation**: nitrogen-fixing bacteria (e.g. *Rhizobium* in root nodules of legumes, free-living *Azotobacter*) convert N₂ → ammonium ions (NH₄⁺).\n" +
        "- **Nitrification**: nitrifying bacteria convert NH₄⁺ → nitrite → nitrate (NO₃⁻). Plants absorb nitrate.\n" +
        "- **Assimilation**: plants use nitrate to make amino acids and proteins; animals eat plants and assimilate nitrogen into their own proteins.\n" +
        "- **Decomposition/Ammonification**: decomposers break down dead organic matter and excretory products → ammonium ions.\n" +
        "- **Denitrification**: denitrifying bacteria in waterlogged soil convert nitrate → N₂, returning nitrogen to the air.\n\n" +
        "Lightning can also fix nitrogen — it provides energy to combine N₂ and O₂ forming oxides of nitrogen that dissolve in rain.",
      diagrams: [
        {
          caption: "The carbon cycle: pathways between atmosphere, living organisms and fossil fuels",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carbon cycle diagram showing CO2 in atmosphere, photosynthesis, respiration, combustion, decomposition and fossil fuels">
  <rect width="320" height="200" fill="#0f172a"/>

  <!-- Atmosphere box -->
  <rect x="100" y="8" width="120" height="28" rx="6" fill="#164e63" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="160" y="27" text-anchor="middle" font-size="10" fill="#eef0ff" font-family="sans-serif">CO2 in Atmosphere</text>

  <!-- Plants -->
  <rect x="16" y="80" width="80" height="28" rx="6" fill="#166534" stroke="#34d399" stroke-width="1.5"/>
  <text x="56" y="99" text-anchor="middle" font-size="10" fill="#eef0ff" font-family="sans-serif">Plants/Algae</text>

  <!-- Animals -->
  <rect x="120" y="80" width="80" height="28" rx="6" fill="#1e3a5f" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="160" y="99" text-anchor="middle" font-size="10" fill="#eef0ff" font-family="sans-serif">Animals</text>

  <!-- Decomposers -->
  <rect x="50" y="152" width="90" height="28" rx="6" fill="#3b2a0a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="95" y="171" text-anchor="middle" font-size="10" fill="#eef0ff" font-family="sans-serif">Decomposers</text>

  <!-- Fossil fuels -->
  <rect x="220" y="152" width="84" height="28" rx="6" fill="#1c1917" stroke="#fb7185" stroke-width="1.5"/>
  <text x="262" y="171" text-anchor="middle" font-size="10" fill="#eef0ff" font-family="sans-serif">Fossil Fuels</text>

  <!-- Arrows -->
  <!-- photosynthesis: atmosphere -> plants -->
  <line x1="120" y1="28" x2="70" y2="80" stroke="#34d399" stroke-width="1.5" marker-end="url(#ca)"/>
  <text x="72" y="58" font-size="8" fill="#34d399" font-family="sans-serif">photosyn.</text>

  <!-- respiration: plants -> atmosphere -->
  <line x1="80" y1="80" x2="120" y2="36" stroke="#38bdf8" stroke-width="1" stroke-dasharray="3 2" marker-end="url(#cb)"/>
  <text x="56" y="56" font-size="8" fill="#38bdf8" font-family="sans-serif">resp.</text>

  <!-- eating: plants -> animals -->
  <line x1="96" y1="94" x2="120" y2="94" stroke="#a78bfa" stroke-width="1.5" marker-end="url(#cc)"/>
  <text x="97" y="88" font-size="8" fill="#a78bfa" font-family="sans-serif">eating</text>

  <!-- respiration: animals -> atmosphere -->
  <line x1="180" y1="80" x2="190" y2="36" stroke="#38bdf8" stroke-width="1" stroke-dasharray="3 2" marker-end="url(#cb)"/>
  <text x="186" y="60" font-size="8" fill="#38bdf8" font-family="sans-serif">resp.</text>

  <!-- death: animals -> decomposers -->
  <line x1="150" y1="108" x2="120" y2="152" stroke="#fbbf24" stroke-width="1" marker-end="url(#cd)"/>
  <!-- death: plants -> decomposers -->
  <line x1="60" y1="108" x2="80" y2="152" stroke="#fbbf24" stroke-width="1" marker-end="url(#cd)"/>
  <text x="52" y="140" font-size="8" fill="#fbbf24" font-family="sans-serif">death</text>

  <!-- decomposers -> atmosphere -->
  <line x1="110" y1="152" x2="148" y2="36" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3 2" marker-end="url(#cd)"/>
  <text x="115" y="108" font-size="8" fill="#fbbf24" font-family="sans-serif">decomp. resp.</text>

  <!-- combustion: fossil -> atmosphere -->
  <line x1="248" y1="152" x2="220" y2="36" stroke="#fb7185" stroke-width="1.5" marker-end="url(#ce)"/>
  <text x="238" y="100" font-size="8" fill="#fb7185" font-family="sans-serif">combustion</text>

  <!-- fossilisation: decomposers -> fossil -->
  <line x1="140" y1="166" x2="220" y2="166" stroke="#fb7185" stroke-width="1" stroke-dasharray="3 2" marker-end="url(#ce)"/>
  <text x="148" y="180" font-size="8" fill="#fb7185" font-family="sans-serif">fossilisation</text>

  <defs>
    <marker id="ca" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#34d399"/></marker>
    <marker id="cb" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#38bdf8"/></marker>
    <marker id="cc" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#a78bfa"/></marker>
    <marker id="cd" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#fbbf24"/></marker>
    <marker id="ce" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#fb7185"/></marker>
  </defs>
</svg>`,
        },
      ],
      keyPoints: [
        "Photosynthesis removes CO₂ from the atmosphere; respiration and combustion return it.",
        "Decomposers (bacteria and fungi) release CO₂ by respiring dead organic matter.",
        "Fossil fuels are stores of ancient carbon; combustion releases this rapidly.",
        "In the nitrogen cycle, bacteria are essential at every stage: fixation, nitrification, denitrification.",
        "Plants absorb nitrate (NO₃⁻) ions from the soil to make amino acids and proteins.",
      ],
      thinkDeeper:
        "Why does waterlogged soil favour denitrification and reduce soil fertility? Think about what anaerobic conditions do to the denitrifying bacteria population.",
      whyItWorks:
        "Matter (carbon, nitrogen) is conserved — it is continually recycled between biotic and abiotic components. " +
        "Energy, by contrast, is not recycled: it enters as sunlight and leaves as heat. " +
        "This is why ecosystems need a continuous energy input but only a finite, recycling supply of nutrients.",
    },

    // ── SECTION 5 ────────────────────────────────────────────────────────────
    {
      heading: "Human Impact on the Environment",
      body:
        "Human activities increasingly disrupt natural ecosystems.\n\n" +
        "**Deforestation**\n\n" +
        "Clearing forests reduces biodiversity, disrupts the water cycle (less transpiration → less rain), and releases large amounts of CO₂ (burning timber, loss of carbon sink).\n\n" +
        "**Water and Air Pollution**\n\n" +
        "- Untreated sewage and industrial effluents contaminate rivers and lakes.\n" +
        "- Sulfur dioxide and nitrogen oxides (from burning fossil fuels) dissolve in rain, forming **acid rain** that damages soils, freshwater life, and building materials.\n\n" +
        "**Eutrophication** — the key sequence:\n\n" +
        "1. Farmers apply **fertilisers** (nitrates/phosphates) to fields.\n" +
        "2. Rain washes excess minerals into rivers/lakes — **leaching/run-off**.\n" +
        "3. Minerals boost growth of **algae and cyanobacteria — algal bloom** forms on the surface.\n" +
        "4. Algae block **light** — submerged water plants cannot photosynthesise and **die**.\n" +
        "5. Bacteria **decompose** the dead plant matter, reproducing rapidly and using up dissolved **oxygen**.\n" +
        "6. Other aerobic organisms (fish, invertebrates) **suffocate** and die — **deoxygenation**.\n\n" +
        "**Plastic Pollution**\n\n" +
        "Plastics persist for hundreds of years. Micro-plastics enter food chains (ingested by fish, birds, marine mammals) and are found even in deep ocean sediments.\n\n" +
        "**Enhanced Greenhouse Effect and Climate Change**\n\n" +
        "CO₂, methane, and water vapour are **greenhouse gases** — they absorb outgoing infrared radiation and re-radiate it, warming the Earth's surface (natural greenhouse effect). " +
        "Human activities (burning fossil fuels, deforestation, rice paddies, cattle farming) have increased these gases, **enhancing** the effect and causing average global temperatures to rise. " +
        "Consequences include more extreme weather, rising sea levels, and shifts in species distributions.",
      diagrams: [
        {
          caption: "Eutrophication sequence: fertiliser run-off leads to deoxygenation and fish death",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Eutrophication sequence diagram with six numbered steps from fertiliser run-off to fish death">
  <rect width="320" height="200" fill="#0f172a"/>

  <!-- Step boxes -->
  <!-- 1 -->
  <rect x="5" y="10" width="90" height="34" rx="5" fill="#166534" stroke="#34d399" stroke-width="1"/>
  <text x="50" y="24" text-anchor="middle" font-size="8.5" fill="#eef0ff" font-family="sans-serif">1. Fertiliser</text>
  <text x="50" y="38" text-anchor="middle" font-size="8.5" fill="#eef0ff" font-family="sans-serif">run-off into lake</text>

  <!-- 2 -->
  <rect x="115" y="10" width="90" height="34" rx="5" fill="#1e4d2e" stroke="#34d399" stroke-width="1"/>
  <text x="160" y="24" text-anchor="middle" font-size="8.5" fill="#eef0ff" font-family="sans-serif">2. Algal bloom</text>
  <text x="160" y="38" text-anchor="middle" font-size="8.5" fill="#eef0ff" font-family="sans-serif">covers surface</text>

  <!-- 3 -->
  <rect x="225" y="10" width="90" height="34" rx="5" fill="#3b2a0a" stroke="#fbbf24" stroke-width="1"/>
  <text x="270" y="24" text-anchor="middle" font-size="8.5" fill="#eef0ff" font-family="sans-serif">3. Light blocked</text>
  <text x="270" y="38" text-anchor="middle" font-size="8.5" fill="#eef0ff" font-family="sans-serif">plants die</text>

  <!-- 4 -->
  <rect x="225" y="90" width="90" height="34" rx="5" fill="#3b1f5e" stroke="#a78bfa" stroke-width="1"/>
  <text x="270" y="104" text-anchor="middle" font-size="8.5" fill="#eef0ff" font-family="sans-serif">4. Decomposers</text>
  <text x="270" y="118" text-anchor="middle" font-size="8.5" fill="#eef0ff" font-family="sans-serif">multiply rapidly</text>

  <!-- 5 -->
  <rect x="115" y="90" width="90" height="34" rx="5" fill="#450a0a" stroke="#fb7185" stroke-width="1"/>
  <text x="160" y="104" text-anchor="middle" font-size="8.5" fill="#eef0ff" font-family="sans-serif">5. O2 used up</text>
  <text x="160" y="118" text-anchor="middle" font-size="8.5" fill="#eef0ff" font-family="sans-serif">deoxygenation</text>

  <!-- 6 -->
  <rect x="5" y="90" width="90" height="34" rx="5" fill="#450a0a" stroke="#fb7185" stroke-width="1"/>
  <text x="50" y="104" text-anchor="middle" font-size="8.5" fill="#eef0ff" font-family="sans-serif">6. Fish and</text>
  <text x="50" y="118" text-anchor="middle" font-size="8.5" fill="#eef0ff" font-family="sans-serif">invertebrates die</text>

  <!-- Connecting arrows -->
  <line x1="95" y1="27" x2="115" y2="27" stroke="#b7bce0" stroke-width="1.5" marker-end="url(#ea)"/>
  <line x1="205" y1="27" x2="225" y2="27" stroke="#b7bce0" stroke-width="1.5" marker-end="url(#ea)"/>
  <line x1="270" y1="44" x2="270" y2="90" stroke="#b7bce0" stroke-width="1.5" marker-end="url(#ea)"/>
  <line x1="225" y1="107" x2="205" y2="107" stroke="#b7bce0" stroke-width="1.5" marker-end="url(#ea)"/>
  <line x1="115" y1="107" x2="95" y2="107" stroke="#b7bce0" stroke-width="1.5" marker-end="url(#ea)"/>

  <defs>
    <marker id="ea" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#b7bce0"/></marker>
  </defs>

  <text x="160" y="165" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif">Eutrophication: a chain of ecological consequences</text>
  <text x="160" y="180" text-anchor="middle" font-size="9" fill="#fbbf24" font-family="sans-serif">Key cause: excess nitrate/phosphate from agricultural run-off</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Deforestation increases CO₂, reduces biodiversity, and disrupts water cycles.",
        "Eutrophication sequence: fertiliser run-off → algal bloom → light blocked → plants die → decomposers increase → O₂ used up → fish die.",
        "Acid rain forms when SO₂ and NOₓ dissolve in rainwater.",
        "Greenhouse gases (CO₂, CH₄) trap infrared radiation, warming the Earth; human activity has enhanced this effect.",
        "Micro-plastics bio-accumulate through food chains and are found globally.",
      ],
      discovery: {
        problem:
          "A lake that was once full of fish and aquatic plants has become murky and green, and fish are dying. " +
          "A nearby farm recently increased its use of fertiliser. Can you sequence the events that connect the farm to the dead fish?",
        idea:
          "The fertiliser (nitrate/phosphate) runs off into the lake, stimulating algal blooms. " +
          "Algae block light, killing submerged plants. " +
          "Bacteria decomposing the dead plants multiply explosively, respiring aerobically and consuming dissolved oxygen until fish suffocate.",
      },
      strategies: ["Sequence the steps", "Identify the key variable at each stage", "Link cause to observable effect"],
    },

    // ── SECTION 6 ────────────────────────────────────────────────────────────
    {
      heading: "Conservation, Biotechnology & Genetic Modification",
      body:
        "**Conservation and Sustainable Resource Use**\n\n" +
        "Conservation aims to protect biodiversity and maintain ecosystem services for future generations. Approaches include:\n\n" +
        "- Nature reserves and protected areas.\n" +
        "- Captive breeding programmes for endangered species.\n" +
        "- Sustainable fishing (e.g. catch quotas, mesh-size regulations).\n" +
        "- Reforestation.\n" +
        "- Reducing pollution and carbon emissions.\n\n" +
        "**Biotechnology — Traditional Uses**\n\n" +
        "- **Bread/yoghurt**: yeast ferments sugars → CO₂ (causes bread to rise) and ethanol.\n" +
        "- **Alcoholic fermentation**: yeast converts glucose → ethanol + CO₂ (anaerobic).\n" +
        "- **Biological washing powders**: contain enzymes (proteases, lipases, amylases) that break down protein, fat, and starch stains at low temperatures.\n" +
        "- **Industrial fermenters**: controlled vessels used to grow microorganisms (bacteria or fungi) at large scale to produce useful substances (e.g. enzymes, antibiotics, citric acid).\n\n" +
        "**Genetic Modification (GM)**\n\n" +
        "Genetic modification involves transferring a gene from one organism into another (often a different species) so the recipient expresses the new protein.\n\n" +
        "**Insulin production**: the human gene for insulin is cut out using restriction enzymes and inserted into a bacterial plasmid using ligase. " +
        "The recombinant plasmid is placed into *E. coli* bacteria, which are grown in fermenters. The bacteria produce human insulin, which is extracted and purified for use by diabetic patients.\n\n" +
        "**GM crops** — potential benefits and concerns:\n\n" +
        "Benefits: herbicide resistance (reduces competition with weeds), pest resistance (Bt toxin in crops reduces pesticide use), improved yield, drought tolerance, enhanced nutritional content (e.g. golden rice with beta-carotene).\n\n" +
        "Concerns: reduced biodiversity (herbicide-resistant 'superweeds'), unknown long-term effects on human health, gene escape into wild populations, ethical concerns about corporate control of food supply, potential harm to non-target organisms.",
      keyPoints: [
        "Yeast ferments sugars anaerobically: glucose → ethanol + CO₂.",
        "Biological washing powders use enzymes (proteases, lipases) to work at low temperatures.",
        "GM insulin: human insulin gene inserted into E. coli plasmid; bacteria grown in fermenter.",
        "GM crops can increase yield and resistance but raise biodiversity and ethical concerns.",
        "Sustainable use means meeting current needs without compromising future generations' ability to meet theirs.",
      ],
      strategies: ["Name the enzyme, organism, and product", "Balance benefits vs. risks for evaluation questions"],
    },
  ],

  // ── LEARN SMART ─────────────────────────────────────────────────────────────
  learn: {
    keyFacts: [
      "An ecosystem is all the organisms in an area plus the abiotic factors they interact with.",
      "Producers (plants, algae) are at trophic level 1 and are the entry point for energy into most food chains.",
      "Approximately 10% of energy is transferred from one trophic level to the next; the rest is lost as heat and in egestion.",
      "Pyramids of energy are always a true pyramid — energy is always lost moving up trophic levels.",
      "The Sun is the principal energy source for almost all ecosystems.",
      "In the carbon cycle: photosynthesis removes CO₂; respiration, combustion, and decomposition return CO₂.",
      "Nitrogen-fixing bacteria convert atmospheric N₂ into ammonium ions that plants can use.",
      "Eutrophication: fertiliser run-off → algal bloom → light blocked → plants die → bacterial decomposition → O₂ used up → fish die.",
      "Burning fossil fuels and deforestation increase atmospheric CO₂, enhancing the greenhouse effect.",
      "GM insulin is produced by inserting the human insulin gene into E. coli bacteria using a plasmid vector.",
    ],
    flashcards: [
      { front: "What is a population?", back: "All individuals of one species living in a particular area at a particular time." },
      { front: "What is a habitat?", back: "The place where an organism lives, characterised by physical and biological features." },
      { front: "What is the role of decomposers?", back: "To break down dead organic matter and waste, releasing minerals back into the ecosystem for producers to absorb." },
      { front: "What percentage of energy typically passes from one trophic level to the next?", back: "Approximately 10% (90% is lost as heat via respiration, movement, or in egestion)." },
      { front: "Why are food chains short?", back: "Because so much energy is lost at each trophic level that there is not enough to support more than 4–5 links." },
      { front: "Name three routes by which energy is lost between trophic levels.", back: "Respiration (heat), egestion (undigested material in faeces), excretion (nitrogenous waste)." },
      { front: "Which type of pyramid is always a true pyramid shape?", back: "Pyramid of energy — energy can only decrease moving up trophic levels." },
      { front: "What gas do nitrogen-fixing bacteria convert N₂ into?", back: "Ammonium ions (NH₄⁺), which are then converted to nitrate by nitrifying bacteria for plant uptake." },
      { front: "What is the first step in eutrophication?", back: "Excess fertiliser (nitrates/phosphates) runs off farmland into water bodies." },
      { front: "How is human insulin produced using GM bacteria?", back: "The human insulin gene is inserted into an E. coli plasmid using restriction and ligase enzymes; bacteria grown in fermenters produce and secrete insulin." },
      { front: "What is the enhanced greenhouse effect?", back: "Human activities increasing concentrations of greenhouse gases (CO₂, CH₄), causing more infrared radiation to be absorbed and re-radiated, warming the Earth above natural levels." },
      { front: "What enzyme do biological washing powders contain to remove protein stains?", back: "Proteases (plus lipases for fats and amylases for starch)." },
    ],
    keyTerms: [
      { term: "Ecosystem", definition: "All the organisms living in an area together with the abiotic environment they interact with." },
      { term: "Community", definition: "All the populations of different species living and interacting in an area." },
      { term: "Producer", definition: "An organism (plant or alga) that makes organic molecules from inorganic substances using light energy (photosynthesis)." },
      { term: "Decomposer", definition: "An organism (bacterium or fungus) that breaks down dead organic matter and waste, recycling minerals into the environment." },
      { term: "Trophic level", definition: "A feeding level in a food chain or food web (TL1 = producers; TL2 = primary consumers, etc.)." },
      { term: "Eutrophication", definition: "The enrichment of water with minerals (esp. nitrates/phosphates), leading to algal blooms, deoxygenation, and death of aquatic organisms." },
      { term: "Nitrogen fixation", definition: "The conversion of atmospheric nitrogen gas (N₂) into ammonium ions (NH₄⁺) by nitrogen-fixing bacteria." },
      { term: "Greenhouse effect", definition: "The trapping of infrared radiation by atmospheric gases (CO₂, CH₄, H₂O), warming the Earth's surface." },
      { term: "Genetic modification", definition: "The deliberate alteration of an organism's genome by inserting, deleting, or changing genes, often from another species." },
      { term: "Fermenter", definition: "A large, controlled vessel used to grow microorganisms in optimum conditions for the production of useful products." },
      { term: "Biomass", definition: "The dry mass of living material at a given trophic level, measured in g/m² or kg/m²." },
      { term: "Sustainable resource use", definition: "Using resources at a rate that allows natural replenishment, meeting current needs without preventing future generations from meeting theirs." },
    ],
  },

  // ── QUICK QUIZ ───────────────────────────────────────────────────────────────
  quiz: {
    mcq: [
      {
        id: "bio-ecology-mcq-q01",
        question: "Which of the following best defines an ecosystem?",
        options: [
          "All individuals of one species in an area",
          "All organisms plus their abiotic environment in an area",
          "All the different species living in one place",
          "The physical location where an organism lives",
        ],
        answerIndex: 1,
        explanation:
          "An ecosystem includes both the living community (all species) AND the abiotic factors (light, temperature, minerals, water). Option A is a population; option C is a community; option D is a habitat.",
        guideRef: "Ecosystem Vocabulary",
        difficulty: "warmup",
      },
      {
        id: "bio-ecology-mcq-q02",
        question: "In a food chain grass → rabbit → fox → eagle, what trophic level is the fox?",
        options: ["TL1", "TL2", "TL3", "TL4"],
        answerIndex: 2,
        explanation:
          "Grass is TL1 (producer), rabbit is TL2 (primary consumer), fox is TL3 (secondary consumer), eagle is TL4 (tertiary consumer).",
        guideRef: "Food Chains, Food Webs & Trophic Levels",
        difficulty: "warmup",
      },
      {
        id: "bio-ecology-mcq-q03",
        question:
          "A field contains 50 000 kJ of energy in producers. Assuming 10% transfer efficiency, how much energy is available to secondary consumers?",
        options: ["500 kJ", "5 000 kJ", "50 kJ", "5 kJ"],
        answerIndex: 0,
        explanation:
          "Primary consumers receive 10% of 50 000 = 5 000 kJ. Secondary consumers receive 10% of 5 000 = 500 kJ.",
        guideRef: "Energy Flow & Pyramids",
        difficulty: "core",
        hints: [
          "Apply 10% at each transfer, not to the whole chain at once.",
          "Step 1: Producer → Primary consumer = 50 000 × 0.1.",
          "Step 2: Primary → Secondary consumer = result × 0.1.",
        ],
      },
      {
        id: "bio-ecology-mcq-q04",
        question: "Which process in the carbon cycle REMOVES CO₂ from the atmosphere?",
        options: ["Combustion", "Decomposition", "Respiration", "Photosynthesis"],
        answerIndex: 3,
        explanation:
          "Photosynthesis fixes CO₂ into organic molecules. Combustion, decomposition, and respiration all release CO₂ into the atmosphere.",
        guideRef: "The Carbon Cycle & The Nitrogen Cycle",
        difficulty: "warmup",
      },
      {
        id: "bio-ecology-mcq-q05",
        question:
          "During eutrophication, the IMMEDIATE cause of fish death is:",
        options: [
          "Poisoning by fertiliser chemicals",
          "Reduction in dissolved oxygen as bacteria decompose dead plants",
          "Direct blocking of fish gills by algae",
          "Increase in water temperature caused by the algal bloom",
        ],
        answerIndex: 1,
        explanation:
          "Fish die because aerobic bacteria decomposing the dead plants consume dissolved oxygen, causing deoxygenation. The fertiliser itself is not directly toxic to fish at typical agricultural concentrations, and algae do not block gills.",
        guideRef: "Human Impact on the Environment",
        difficulty: "core",
        hints: [
          "Recall the eutrophication sequence — what happens to oxygen?",
          "Which organisms are consuming the oxygen?",
        ],
      },
      {
        id: "bio-ecology-mcq-q06",
        question:
          "A student claims that a pyramid of biomass can be inverted in a marine ecosystem. Which explanation is correct?",
        options: [
          "Marine organisms contain less energy per unit mass than terrestrial ones.",
          "Phytoplankton have a very high turnover rate, so their standing biomass at any moment is lower than the zooplankton consuming them.",
          "Marine food chains are longer, so more energy is available at higher trophic levels.",
          "Seawater provides additional energy that compensates for energy losses.",
        ],
        answerIndex: 1,
        explanation:
          "Phytoplankton reproduce extremely rapidly. At any snapshot in time, the standing biomass of phytoplankton can be less than that of the zooplankton eating them, because the phytoplankton are being consumed as fast as they are produced. A pyramid of energy, however, is still always a true pyramid.",
        guideRef: "Energy Flow & Pyramids",
        difficulty: "challenge",
        hints: [
          "Think about the difference between standing crop (biomass at one moment) and rate of production.",
          "Phytoplankton have generation times of hours — they turn over very quickly.",
          "The pyramid of energy measures flow over time, not a snapshot — why is this relevant?",
        ],
      },
    ],
    qa: [
      {
        id: "bio-ecology-qa-q01",
        question:
          "Explain the sequence of events in eutrophication, starting with the application of fertilisers and ending with fish death. [6]",
        marks: 6,
        modelAnswer:
          "Excess fertilisers (containing nitrates and phosphates) are washed by rain from farmland into rivers and lakes (leaching/run-off). " +
          "These mineral ions cause rapid growth of algae and cyanobacteria, forming a dense algal bloom on the water's surface. " +
          "The algal bloom blocks light from reaching submerged water plants, which can no longer photosynthesise and die. " +
          "Bacteria decompose the dead plant material; the bacterial population increases greatly. " +
          "The bacteria use aerobic respiration, consuming dissolved oxygen faster than it can be replenished. " +
          "Dissolved oxygen levels fall so low that fish and other aerobic aquatic organisms suffocate and die.",
        markScheme: [
          "Fertiliser/nitrate/phosphate washes into water body (run-off/leaching)",
          "Causes algal bloom / rapid algal growth on surface",
          "Algae block light from reaching submerged plants",
          "Submerged water plants die (cannot photosynthesise)",
          "Bacteria decompose dead plants / bacteria reproduce rapidly",
          "Bacteria use up/consume dissolved oxygen (aerobic respiration)",
          "Fish / aerobic organisms die due to lack of oxygen / suffocate",
        ],
        commonError:
          "Students often say 'algae use up the oxygen' — it is the DECOMPOSING BACTERIA, not the algae, that deplete dissolved oxygen.",
        guideRef: "Human Impact on the Environment",
        difficulty: "core",
        hints: [
          "Start with where the minerals come from and how they enter the water.",
          "What does an excess of minerals do to algal growth?",
          "How does a surface bloom affect organisms below the surface?",
          "What happens to bacteria when there is a lot of dead material to decompose?",
        ],
        strategy: "Sequence the steps; use cause-and-effect language ('this causes...', 'as a result...')",
      },
      {
        id: "bio-ecology-qa-q02",
        question:
          "A food chain in a meadow is: clover → aphid → ladybird → sparrow → hawk.\n" +
          "The clover contains 200 000 kJ of energy. Assuming 10% efficiency at each step:\n" +
          "(a) Calculate the energy available to the hawk. [2]\n" +
          "(b) Suggest two reasons why energy is lost between the aphid and the ladybird. [2]\n" +
          "(c) Explain why pyramids of energy are always a true pyramid shape. [2]",
        marks: 6,
        modelAnswer:
          "(a) Clover → 200 000 kJ. " +
          "Aphid (TL2): 200 000 × 0.1 = 20 000 kJ. " +
          "Ladybird (TL3): 20 000 × 0.1 = 2 000 kJ. " +
          "Sparrow (TL4): 2 000 × 0.1 = 200 kJ. " +
          "Hawk (TL5): 200 × 0.1 = 20 kJ.\n\n" +
          "(b) Any two from: energy is released as heat during respiration; energy is lost in undigested material (egestion/faeces); energy is lost in excretion (urine/nitrogenous waste); energy is used for movement/growth.\n\n" +
          "(c) Energy is always lost at each trophic level (as heat and in waste) and can never be gained. Therefore, the energy at each successive level must be less than the level below, giving an unchanging pyramid shape.",
        markScheme: [
          "(a) Shows 10% applied at EACH of 4 steps (accept working shown)",
          "(a) Correct final answer: 20 kJ (allow ecf for method shown)",
          "(b) Any TWO from: heat from respiration / movement; egestion (undigested food in faeces); excretion; used for growth/movement",
          "(c) Energy is always lost (as heat / waste) at each trophic level",
          "(c) Cannot be regained / energy decreases inevitably at each step, so bars always smaller going up",
        ],
        commonError:
          "Applying 10% only once to the whole chain (200 000 × 0.1 = 20 000) instead of at each step — the correct answer is 20 kJ, not 20 000 kJ.",
        guideRef: "Energy Flow & Pyramids",
        difficulty: "challenge",
        hints: [
          "Apply 10% at EACH arrow in the food chain, not just once.",
          "Count the arrows: clover→aphid, aphid→ladybird, ladybird→sparrow, sparrow→hawk — that is four transfers.",
          "For part (b), think of the different fates of the energy an aphid takes in: not all of it is assimilated.",
          "For part (c), the key word is 'always' — what physical law prevents energy from increasing?",
        ],
        strategy: "Show each multiplication step separately; use correct units (kJ).",
        solutions: [
          {
            label: "Method 1: Step-by-step 10%",
            steps: [
              "TL1 (clover) = 200 000 kJ",
              "TL2 (aphid) = 200 000 × 0.1 = 20 000 kJ",
              "TL3 (ladybird) = 20 000 × 0.1 = 2 000 kJ",
              "TL4 (sparrow) = 2 000 × 0.1 = 200 kJ",
              "TL5 (hawk) = 200 × 0.1 = 20 kJ",
            ],
          },
          {
            label: "Method 2: Single exponent",
            steps: [
              "There are 4 transfer steps from TL1 to TL5.",
              "Energy at TL5 = 200 000 × (0.1)^4",
              "= 200 000 × 0.0001",
              "= 20 kJ",
            ],
          },
        ],
      },
      {
        id: "bio-ecology-qa-q03",
        question:
          "Describe how human insulin is produced using genetically modified bacteria. [5]",
        marks: 5,
        modelAnswer:
          "The human insulin gene is identified and cut out of human DNA using restriction enzymes, which cut at specific recognition sequences. " +
          "A bacterial plasmid (small circular piece of DNA) is cut open with the same restriction enzyme, creating complementary sticky ends. " +
          "The insulin gene is inserted into the plasmid; the DNA strands are joined with DNA ligase, forming a recombinant plasmid. " +
          "The recombinant plasmid is introduced into E. coli bacteria. " +
          "The bacteria are grown in large fermenters under optimum conditions. " +
          "The bacteria express the insulin gene and produce human insulin, which is extracted, purified, and supplied to diabetic patients.",
        markScheme: [
          "Human insulin gene identified / cut from human DNA",
          "Restriction enzyme(s) used to cut gene and open plasmid",
          "Complementary sticky ends / same restriction enzyme used for both",
          "Gene inserted into plasmid; ligase joins / seals the DNA (recombinant plasmid)",
          "Plasmid inserted into E. coli / bacteria",
          "Bacteria grown in fermenter (on large scale)",
          "Insulin extracted / purified from fermentation medium",
        ],
        commonError:
          "Confusing restriction enzymes (cut DNA) with ligase (joins DNA). Also, some students say the plasmid is inserted into the bacterium's chromosome — it remains as a separate plasmid.",
        guideRef: "Conservation, Biotechnology & Genetic Modification",
        difficulty: "core",
        hints: [
          "There are three main tools: restriction enzymes, ligase, and a plasmid vector.",
          "Think about what 'sticky ends' are and why both pieces of DNA must be cut with the same restriction enzyme.",
          "After the recombinant plasmid is made, how does it get into the bacterium?",
          "Where are the bacteria grown to make large quantities of insulin?",
        ],
        strategy: "Sequence: cut → insert → join → transform → grow → extract.",
      },
    ],
  },

  // ── QUESTION BANK ────────────────────────────────────────────────────────────
  // ── QUESTION BANK ────────────────────────────────────────────────────────────
  questionBank: {
    mcqPapers: [
      {
        id: "bio-ecology-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Ecosystem vocabulary, food chains, food webs, and trophic levels.",
        questions: [
          {
            id: "bio-ecology-bm1-01",
            question: "Which of the following best defines an 'ecosystem'?",
            options: [
              "All organisms of one species in a given area",
              "All organisms interacting with their non-living environment in a given area",
              "The physical environment where organisms live",
              "All the food chains in a habitat",
            ],
            answerIndex: 1,
            explanation:
              "An ecosystem includes both biotic (living) and abiotic (non-living) components. A population is all organisms of ONE species; a habitat is just the place; food chains are only part of ecosystem interactions.",
            guideRef: "Ecosystem Vocabulary",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm1-02",
            question: "In the food chain: grass → rabbit → fox → eagle, which organism is a secondary consumer?",
            options: ["Grass", "Rabbit", "Fox", "Eagle"],
            answerIndex: 2,
            explanation:
              "The primary consumer eats the producer (rabbit eats grass). The secondary consumer eats the primary consumer — that is the fox. The eagle is a tertiary consumer.",
            guideRef: "Food Chains, Food Webs & Trophic Levels",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm1-03",
            question: "Which term describes the total dry mass of organisms at a given trophic level per unit area?",
            options: ["Productivity", "Biomass", "Population density", "Standing crop energy"],
            answerIndex: 1,
            explanation:
              "Biomass is the total dry mass (or sometimes fresh mass) of organisms at a trophic level per unit area. Productivity is the rate of production of biomass. Standing crop refers to biomass present at one moment, but biomass is the correct term here.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "warmup",
            hints: [
              "Think: mass of ALL organisms at that trophic level combined — what is the word for that?",
              "Dry mass removes water, giving a true measure of organic matter.",
            ],
          },
          {
            id: "bio-ecology-bm1-04",
            question: "A food web contains the following relationships:\ngrass → locust → lizard → snake → eagle\ngrass → locust → bird → eagle\ngrass → mouse → eagle\n\nWhich organism occupies the most trophic levels?",
            options: ["Grass", "Locust", "Eagle", "Snake"],
            answerIndex: 2,
            explanation:
              "Eagle eats snake (TL5), bird (TL4), and mouse (TL3) — it occupies multiple trophic levels. Organisms in food webs often feed at more than one trophic level. Grass is always TL1; locust is TL2; snake is TL4.",
            guideRef: "Food Chains, Food Webs & Trophic Levels",
            difficulty: "core",
            hints: [
              "Trace each path the eagle sits in. Count the trophic level it occupies in each chain.",
              "An organism in a web can be at different trophic levels in different food chains.",
            ],
          },
          {
            id: "bio-ecology-bm1-05",
            question: "Approximately what percentage of energy is transferred from one trophic level to the next in a typical ecosystem?",
            options: ["1%", "10%", "50%", "90%"],
            answerIndex: 1,
            explanation:
              "The ten-percent rule: approximately 10% of the energy at one trophic level is available to the next. The remaining ~90% is lost as heat through respiration, in egested material, through excretion, and in movement.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm1-06",
            question: "A pyramid of numbers for an oak woodland shows: oak trees (1) → caterpillars (10 000) → blue tits (200) → sparrowhawk (2). Which statement about this pyramid is correct?",
            options: [
              "It is a true pyramid because numbers decrease at each level",
              "It is inverted because there are more caterpillars than oak trees",
              "It is a true pyramid at the base because one oak supports more caterpillars",
              "It cannot be drawn as a pyramid because the numbers are too different",
            ],
            answerIndex: 2,
            explanation:
              "One large oak supports 10 000 caterpillars — the pyramid is widest at TL2, not TL1. It is inverted at the base (TL1 is narrowest). This is a classic inverted pyramid of numbers where a single large producer supports many small consumers.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "core",
            hints: [
              "Compare the bar widths: which level would be narrowest?",
              "One oak tree vs. 10 000 caterpillars — which bar is wider?",
            ],
          },
          {
            id: "bio-ecology-bm1-07",
            question: "Which of the following is NOT a reason why energy is lost between trophic levels?",
            options: [
              "Energy released as heat during respiration",
              "Energy lost in undigested material (egestion)",
              "Energy used in active transport across membranes",
              "Energy fixed in glucose during photosynthesis",
            ],
            answerIndex: 3,
            explanation:
              "Photosynthesis FIXES energy into glucose — it is the entry point of energy into the food chain, not a loss between trophic levels. Energy losses between levels include heat from respiration, egestion, excretion, and energy used for movement and active processes.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "core",
            hints: [
              "The question asks what is NOT a loss. Elimination: which option adds energy rather than losing it?",
            ],
            strategy: "Identify what photosynthesis does — is it a loss or a gain of energy?",
          },
          {
            id: "bio-ecology-bm1-08",
            question: "In a lake ecosystem the energy values (kJ/m²/yr) are:\nPhytoplankton: 600 000; Zooplankton: 54 000; Small fish: 5 100\n\nWhat is the efficiency of energy transfer from zooplankton to small fish?",
            options: ["8.5%", "9.0%", "9.4%", "10.5%"],
            answerIndex: 2,
            explanation:
              "Efficiency = (5 100 / 54 000) × 100 = 9.44%, which rounds to 9.4%. The formula is always (energy out / energy in) × 100. Note: TL1 to TL2 efficiency = (54 000 / 600 000) × 100 = 9.0%, which is a different transfer.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "core",
            hints: [
              "Efficiency = (output TL / input TL) × 100. Which is input and which is output here?",
              "Divide small fish energy by zooplankton energy, not the other way around.",
            ],
            strategy: "Write the formula first; identify TL2 as input and TL3 as output.",
          },
          {
            id: "bio-ecology-bm1-09",
            question: "A food web is considered a more realistic model than a single food chain because:",
            options: [
              "It shows only the most important feeding relationships",
              "It shows that most organisms eat only one type of food",
              "It shows multiple interconnected feeding relationships reflecting that most organisms have several food sources",
              "It is easier to draw and interpret than a food chain",
            ],
            answerIndex: 2,
            explanation:
              "Most organisms eat a variety of foods and are eaten by several predators. A food chain oversimplifies by showing only one prey and one predator at each level. A food web shows the complex network of real feeding interactions.",
            guideRef: "Food Chains, Food Webs & Trophic Levels",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm1-10",
            question: "A population of rabbits is estimated using mark-release-recapture. First sample: 80 marked and released. Second sample: 100 captured, of which 16 are marked. What is the estimated population?",
            options: ["128", "250", "500", "1 280"],
            answerIndex: 2,
            explanation:
              "Lincoln Index: N = (n1 × n2) / m = (80 × 100) / 16 = 8 000 / 16 = 500. n1 = first sample marked (80), n2 = second sample (100), m = marked in second sample (16).",
            guideRef: "Ecosystem Vocabulary",
            difficulty: "challenge",
            hints: [
              "Write the formula: N = (n1 × n2) / m.",
              "n1 = 80, n2 = 100, m = 16. Substitute and calculate.",
              "Check: if 16 out of 100 are marked, what fraction of the whole population is marked?",
            ],
            strategy: "State formula → substitute → calculate. Units: number of individuals.",
          },
        ],
      },
      {
        id: "bio-ecology-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Carbon cycle, nitrogen cycle, and biogeochemical processes.",
        questions: [
          {
            id: "bio-ecology-bm2-01",
            question: "Which process removes carbon dioxide from the atmosphere and incorporates it into organic molecules?",
            options: ["Respiration", "Decomposition", "Photosynthesis", "Combustion"],
            answerIndex: 2,
            explanation:
              "Photosynthesis uses CO₂ and water to produce glucose, incorporating carbon into organic molecules. Respiration, decomposition, and combustion all release CO₂ into the atmosphere.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm2-02",
            question: "What is the correct sequence of processes in the carbon cycle when a tree dies in a forest?",
            options: [
              "Photosynthesis → respiration → decomposition",
              "Decomposition → respiration → CO₂ released",
              "Combustion → photosynthesis → nitrogen fixation",
              "Nitrogen fixation → nitrification → denitrification",
            ],
            answerIndex: 1,
            explanation:
              "When a tree dies, decomposers (bacteria and fungi) break down the organic matter. The decomposers then respire aerobically, releasing CO₂. Combustion is burning (only if set on fire); nitrogen fixation relates to the nitrogen cycle, not carbon.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm2-03",
            question: "Which type of bacteria converts ammonium ions (NH₄⁺) into nitrate ions (NO₃⁻) in the soil?",
            options: [
              "Nitrogen-fixing bacteria (e.g., Rhizobium)",
              "Denitrifying bacteria (e.g., Pseudomonas)",
              "Nitrifying bacteria (e.g., Nitrosomonas and Nitrobacter)",
              "Decomposing bacteria (saprotrophs)",
            ],
            answerIndex: 2,
            explanation:
              "Nitrifying bacteria carry out nitrification: first Nitrosomonas converts NH₄⁺ to NO₂⁻, then Nitrobacter converts NO₂⁻ to NO₃⁻. Nitrogen-fixing bacteria convert N₂ to ammonium. Denitrifying bacteria convert nitrate back to N₂.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "core",
            hints: [
              "The word 'nitrifying' contains 'nitrate' — which bacteria produce nitrate?",
              "Eliminate: Rhizobium fixes N₂; Pseudomonas denitrifies; saprotrophs decompose.",
            ],
          },
          {
            id: "bio-ecology-bm2-04",
            question: "Leguminous plants (e.g., peas and clover) can improve soil nitrogen content because they:",
            options: [
              "Absorb nitrogen gas through their leaves by diffusion",
              "Have root nodules containing nitrogen-fixing bacteria (Rhizobium)",
              "Release nitrogen-rich compounds when their leaves fall",
              "Convert atmospheric nitrogen by photosynthesis",
            ],
            answerIndex: 1,
            explanation:
              "Legumes have a mutualistic relationship with Rhizobium bacteria in root nodules. The bacteria fix atmospheric N₂ into ammonium, which the plant uses. Nitrogen cannot enter plants as N₂ gas directly; photosynthesis fixes carbon not nitrogen.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "core",
            hints: [
              "The key word is 'root nodules' — what lives in them?",
              "Which process converts N₂ to a usable form?",
            ],
          },
          {
            id: "bio-ecology-bm2-05",
            question: "Denitrifying bacteria reduce soil fertility because they:",
            options: [
              "Convert ammonium to nitrate, removing it from soil",
              "Convert nitrate back to nitrogen gas, which is released into the atmosphere",
              "Produce toxic compounds that kill plants",
              "Absorb mineral ions that plants need",
            ],
            answerIndex: 1,
            explanation:
              "Denitrifying bacteria (e.g., Pseudomonas) convert nitrate (NO₃⁻) back to N₂ gas in anaerobic conditions. This removes usable nitrogen from the soil. Ammonium → nitrate is nitrification (carried out by nitrifying bacteria, not denitrifying).",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "core",
            hints: [
              "'Denitrify' = remove nitrate. What is nitrate converted to?",
              "N₂ gas cannot be absorbed by most plants — what is the effect on soil fertility?",
            ],
          },
          {
            id: "bio-ecology-bm2-06",
            question: "Which statement about the role of decomposers in the nitrogen cycle is correct?",
            options: [
              "They convert nitrogen gas into ammonium ions",
              "They convert ammonium ions into nitrate ions",
              "They break down proteins in dead organisms, releasing ammonium ions",
              "They convert nitrate into nitrogen gas",
            ],
            answerIndex: 2,
            explanation:
              "Decomposers (bacteria and fungi) carry out ammonification: they break down proteins and other nitrogen-containing organic compounds in dead organisms and waste, releasing ammonium ions (NH₄⁺). This is NOT the same as nitrification (ammonium → nitrate) or nitrogen fixation (N₂ → ammonium).",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "core",
            hints: [
              "What do decomposers do? They break down dead organic matter.",
              "Proteins contain nitrogen. When decomposed, what nitrogen compound is released?",
            ],
          },
          {
            id: "bio-ecology-bm2-07",
            question: "Carbon dioxide concentrations in a sealed greenhouse over 24 hours would be LOWEST at:",
            options: [
              "Dawn (just after sunrise)",
              "Mid-afternoon (after several hours of photosynthesis)",
              "Midnight (middle of the night)",
              "Dusk (just after sunset)",
            ],
            answerIndex: 1,
            explanation:
              "CO₂ decreases throughout the day as plants photosynthesise. By mid-afternoon, plants have been removing CO₂ for several hours and the concentration is at its lowest. At night, only respiration occurs and CO₂ rises, peaking at dawn.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "core",
            hints: [
              "Which process removes CO₂? Which adds it?",
              "Which process only happens during the day, and for how many hours has it been running at mid-afternoon?",
            ],
          },
          {
            id: "bio-ecology-bm2-08",
            question: "Which of the following is the CORRECT order of events in the nitrogen cycle that leads to plants absorbing nitrogen?",
            options: [
              "N₂ → ammonium (nitrogen fixation) → nitrate (nitrification) → plant roots absorb nitrate",
              "N₂ → nitrate (denitrification) → ammonium (decomposition) → plant roots absorb ammonium",
              "Protein → N₂ (decomposition) → ammonium (nitrification) → plant roots absorb nitrate",
              "Ammonium → N₂ (nitrification) → nitrate (denitrification) → plant roots absorb nitrate",
            ],
            answerIndex: 0,
            explanation:
              "The correct sequence: nitrogen-fixing bacteria convert N₂ → NH₄⁺ (ammonium). Nitrifying bacteria convert NH₄⁺ → NO₂⁻ → NO₃⁻ (nitrate). Plant roots absorb nitrate. This is the core sequence for 'new' nitrogen entering an ecosystem.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "challenge",
            hints: [
              "Nitrogen fixation goes N₂ → ammonium (not nitrate).",
              "Nitrification goes ammonium → nitrate (not the reverse).",
              "Which form do plant roots absorb: ammonium or nitrate?",
              "Eliminate any option with 'denitrification' producing usable nitrogen — denitrification removes nitrogen from the cycle.",
            ],
            strategy: "Write the sequence yourself first, then match to an option.",
          },
          {
            id: "bio-ecology-bm2-09",
            question: "Burning fossil fuels contributes to the carbon cycle by:",
            options: [
              "Fixing atmospheric carbon into organic molecules",
              "Returning carbon stored in geological deposits to the atmosphere as CO₂",
              "Converting carbon dioxide into oxygen",
              "Removing carbon from the atmosphere into the oceans",
            ],
            answerIndex: 1,
            explanation:
              "Fossil fuels contain carbon that was fixed millions of years ago by photosynthesis and locked up in geological formations. Burning them releases this carbon as CO₂, disrupting the natural carbon cycle balance by adding carbon much faster than natural processes can remove it.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm2-10",
            question: "In which condition do denitrifying bacteria operate most efficiently?",
            options: [
              "Warm, well-aerated (aerobic) soils",
              "Cold, well-aerated soils",
              "Waterlogged (anaerobic) soils",
              "Dry, acidic soils",
            ],
            answerIndex: 2,
            explanation:
              "Denitrifying bacteria are anaerobic — they thrive in oxygen-poor (anaerobic) conditions such as waterlogged or compacted soils. Well-aerated soils have high oxygen, which suppresses denitrification.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "challenge",
            hints: [
              "Denitrifying bacteria are anaerobic — what does that mean for oxygen levels?",
              "Where would oxygen be absent in soil?",
            ],
          },
        ],
      },
      {
        id: "bio-ecology-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Human impact on the environment, pollution, and conservation.",
        questions: [
          {
            id: "bio-ecology-bm3-01",
            question: "Which sequence of events correctly describes eutrophication following fertiliser run-off into a river?",
            options: [
              "Algal bloom → light blocked → plants die → bacteria decompose → O₂ depleted → fish die",
              "Algal bloom → light increased → plants grow → fish population increases",
              "Fish die → O₂ depleted → plants die → algal bloom",
              "Nitrate absorbed by fish → fish die → bacteria multiply",
            ],
            answerIndex: 0,
            explanation:
              "The correct sequence for eutrophication: fertiliser run-off → excess nitrate → algal bloom → light blocked from underwater plants → plants die → bacteria decompose dead matter and multiply → bacteria consume dissolved O₂ through aerobic respiration → O₂ depleted → fish (and other aerobic organisms) die.",
            guideRef: "Human Impact on the Environment",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm3-02",
            question: "Which gas is the MAIN cause of acid rain?",
            options: [
              "Carbon dioxide (CO₂)",
              "Nitrogen gas (N₂)",
              "Sulfur dioxide (SO₂)",
              "Oxygen (O₂)",
            ],
            answerIndex: 2,
            explanation:
              "Sulfur dioxide (SO₂), released by burning fossil fuels (especially coal), dissolves in atmospheric moisture to form sulfuric acid — the primary cause of acid rain. Nitrogen oxides also contribute. CO₂ dissolves to form carbonic acid, but it is much weaker; N₂ is inert.",
            guideRef: "Human Impact on the Environment",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm3-03",
            question: "Which statement correctly explains how greenhouse gases cause global warming?",
            options: [
              "They prevent sunlight from reaching Earth's surface",
              "They absorb and re-radiate outgoing infrared radiation from Earth's surface back towards Earth",
              "They reflect incoming solar radiation back into space",
              "They increase the amount of ultraviolet radiation reaching Earth",
            ],
            answerIndex: 1,
            explanation:
              "Greenhouse gases (CO₂, methane, water vapour) absorb outgoing long-wave (infrared) radiation emitted by Earth's warm surface and re-radiate some of it back towards Earth. This traps heat and raises surface temperatures. They do NOT block incoming solar radiation.",
            guideRef: "Human Impact on the Environment",
            difficulty: "core",
            hints: [
              "The key direction is OUTGOING from Earth, not incoming from Sun.",
              "Greenhouse gases absorb infrared (heat) radiation. Does sunlight have the same wavelength as infrared?",
            ],
          },
          {
            id: "bio-ecology-bm3-04",
            question: "Deforestation is likely to increase atmospheric CO₂ levels because:",
            options: [
              "Trees absorb oxygen and release CO₂ during the day",
              "Burning or decomposition of trees releases stored carbon as CO₂, and fewer trees remain to absorb CO₂ by photosynthesis",
              "Trees produce methane when they decompose",
              "Deforestation increases rainfall, dissolving more CO₂ in water",
            ],
            answerIndex: 1,
            explanation:
              "Deforestation raises CO₂ in two ways: (1) burning/decomposition releases carbon stored in wood; (2) fewer trees means less CO₂ removed from the atmosphere by photosynthesis. Both mechanisms contribute to increased atmospheric CO₂.",
            guideRef: "Human Impact on the Environment",
            difficulty: "core",
            hints: [
              "Think of two things trees do with carbon: they store it (releasing when burned/decomposed) and they absorb it (during photosynthesis).",
              "Both effects — more release AND less absorption — raise CO₂.",
            ],
          },
          {
            id: "bio-ecology-bm3-05",
            question: "Which organism is an indicator of clean, well-oxygenated water?",
            options: [
              "Tubifex worm",
              "Rat-tailed maggot",
              "Bloodworm (chironomid larva)",
              "Mayfly nymph",
            ],
            answerIndex: 3,
            explanation:
              "Mayfly nymphs (Ephemeroptera) require high dissolved oxygen and are absent from polluted water — they are biotic indicators of clean water. Tubifex worms, rat-tailed maggots, and bloodworms are tolerant of low-oxygen polluted conditions.",
            guideRef: "Human Impact on the Environment",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm3-06",
            question: "A farmer wants to reduce the risk of fertiliser run-off causing eutrophication. Which action would be MOST effective?",
            options: [
              "Increase the amount of fertiliser applied",
              "Apply fertiliser just before heavy rain is forecast",
              "Apply fertiliser in small amounts, at the correct times, based on soil testing",
              "Switch from solid fertiliser to liquid fertiliser",
            ],
            answerIndex: 2,
            explanation:
              "Applying the correct amount at the right time, guided by soil tests, reduces excess nitrate that can leach into waterways. Increasing fertiliser amount or applying before rain both increase run-off risk. Solid vs liquid form is less important than timing and quantity.",
            guideRef: "Human Impact on the Environment",
            difficulty: "core",
            hints: [
              "Eliminate any option that increases fertiliser or applies it before rain.",
              "The goal is to minimise excess fertiliser in the soil near water.",
            ],
          },
          {
            id: "bio-ecology-bm3-07",
            question: "Which of the following is an example of in situ conservation?",
            options: [
              "Keeping an endangered animal in a zoo",
              "Storing seeds in a seed bank",
              "Establishing a nature reserve to protect a species' natural habitat",
              "Breeding endangered animals in a captive environment and releasing them",
            ],
            answerIndex: 2,
            explanation:
              "In situ conservation means conserving species in their natural habitat. A nature reserve is in situ. Zoos, seed banks, and captive breeding are ex situ (outside the natural habitat). Captive breeding with release is ex situ for breeding but in situ for release.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "core",
            hints: [
              "In situ = 'in place' = natural habitat. Ex situ = outside the natural habitat.",
              "Which option keeps organisms in their actual environment?",
            ],
          },
          {
            id: "bio-ecology-bm3-08",
            question: "Bioaccumulation (biomagnification) of a toxic pesticide through a food chain means that:",
            options: [
              "The pesticide breaks down at each trophic level, becoming less concentrated",
              "The concentration of the pesticide increases at each higher trophic level",
              "All organisms at every trophic level contain equal concentrations of the pesticide",
              "The pesticide is only found in primary producers",
            ],
            answerIndex: 1,
            explanation:
              "Bioaccumulation occurs because persistent toxins (like DDT) are not excreted — they accumulate in fatty tissues. Each organism at a higher trophic level consumes many organisms from the level below, concentrating the toxin. Top predators have the highest concentrations.",
            guideRef: "Human Impact on the Environment",
            difficulty: "core",
            hints: [
              "Think about a top predator eating many prey — what happens to the toxin from each prey?",
              "If toxins are not broken down, they must accumulate. Where do they go?",
            ],
          },
          {
            id: "bio-ecology-bm3-09",
            question: "Which of the following is NOT a consequence of deforestation?",
            options: [
              "Increased soil erosion due to loss of tree roots",
              "Loss of habitat and reduced biodiversity",
              "Increased atmospheric oxygen levels",
              "Increased atmospheric carbon dioxide levels",
            ],
            answerIndex: 2,
            explanation:
              "Deforestation does NOT increase oxygen. Trees produce oxygen through photosynthesis, so removing them reduces the rate of oxygen production. The other three are genuine consequences: soil erosion (roots hold soil), biodiversity loss (habitat destruction), and CO₂ rise (less photosynthesis, carbon released from wood).",
            guideRef: "Human Impact on the Environment",
            difficulty: "challenge",
            hints: [
              "Think carefully about oxygen: trees produce O₂ through photosynthesis. What happens when trees are removed?",
              "The question asks for what is NOT a consequence.",
            ],
          },
          {
            id: "bio-ecology-bm3-10",
            question: "Which statement about the causes of acid rain is correct?",
            options: [
              "Acid rain is caused by CO₂ from vehicle exhausts combining with rainwater to form hydrochloric acid",
              "Acid rain forms when SO₂ and NOₓ from burning fossil fuels dissolve in atmospheric water, forming sulfuric and nitric acids",
              "Acid rain is caused solely by volcanic eruptions releasing SO₂",
              "Acid rain forms when ozone in the stratosphere reacts with rainwater",
            ],
            answerIndex: 1,
            explanation:
              "Acid rain forms when SO₂ (from burning coal, oil) and NOₓ (from vehicle exhausts and power stations) dissolve in atmospheric water vapour to form H₂SO₄ and HNO₃. CO₂ forms carbonic acid, which is much weaker. Volcanic eruptions contribute SO₂ but are not the main anthropogenic cause.",
            guideRef: "Human Impact on the Environment",
            difficulty: "challenge",
            hints: [
              "Eliminate: CO₂ forms carbonic acid (weak), not hydrochloric acid.",
              "The key gases for acid rain are SO₂ and NOₓ — which option mentions both?",
            ],
          },
        ],
      },
      {
        id: "bio-ecology-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Conservation, biotechnology, genetic modification, and applied ecology.",
        questions: [
          {
            id: "bio-ecology-bm4-01",
            question: "Which of the following correctly describes the role of restriction enzymes in genetic engineering?",
            options: [
              "They join pieces of DNA together at sticky ends",
              "They replicate DNA by adding new bases",
              "They cut DNA at specific recognition sequences, producing sticky ends",
              "They introduce plasmids into bacteria",
            ],
            answerIndex: 2,
            explanation:
              "Restriction enzymes cut DNA at specific base sequences called recognition sites, leaving single-stranded overhangs called sticky ends. DNA ligase joins DNA (not restriction enzymes). DNA polymerase replicates DNA. Transformation introduces plasmids.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm4-02",
            question: "A recombinant plasmid is best described as:",
            options: [
              "A plasmid extracted from a bacterium and stored for later use",
              "A plasmid into which a foreign gene has been inserted using genetic engineering",
              "A plasmid that has been replicated many times inside a bacterium",
              "A plasmid that codes for antibiotic resistance only",
            ],
            answerIndex: 1,
            explanation:
              "Recombinant means 'containing combined genetic material from different sources'. A recombinant plasmid has had a foreign gene (e.g., human insulin gene) inserted into it using restriction enzymes and DNA ligase. It is then used as a vector to introduce the gene into a bacterium.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm4-03",
            question: "Which condition in a fermenter is controlled to prevent contamination by unwanted microorganisms?",
            options: [
              "Temperature kept at 37°C",
              "pH maintained at 7.0",
              "Sterile conditions (all equipment sterilised; sterile air supplied)",
              "Continuous stirring to aerate the culture",
            ],
            answerIndex: 2,
            explanation:
              "Sterility prevents contaminating organisms from competing with the culture microorganism or producing unwanted products. Temperature, pH, and aeration are controlled for optimal growth, but sterility specifically prevents contamination.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm4-04",
            question: "Selective breeding (artificial selection) differs from genetic engineering because selective breeding:",
            options: [
              "Changes genes within the nucleus of a cell",
              "Allows genes to be moved between unrelated species",
              "Relies on natural reproduction between organisms with desirable traits over many generations",
              "Uses restriction enzymes to cut and paste genes",
            ],
            answerIndex: 2,
            explanation:
              "Selective breeding exploits variation that already exists and uses natural reproduction — no genes are directly manipulated. It is slow (many generations). Genetic engineering directly manipulates DNA and can transfer genes between unrelated species — something impossible by selective breeding.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "core",
            hints: [
              "Selective breeding = choosing parents; no direct gene manipulation.",
              "Genetic engineering = physical cutting and inserting of DNA.",
            ],
          },
          {
            id: "bio-ecology-bm4-05",
            question: "A seed bank conserves plant biodiversity by:",
            options: [
              "Growing all endangered plant species in controlled greenhouse conditions",
              "Storing seeds from diverse plant species under dry, cold conditions to maintain viability",
              "Cross-pollinating endangered plants to produce hybrid seeds",
              "Releasing seeds into wild habitats to increase population sizes",
            ],
            answerIndex: 1,
            explanation:
              "Seed banks store seeds at very low temperature and humidity, keeping them viable (able to germinate) for decades to centuries. This preserves genetic diversity of plant species that might be extinct in the wild. This is ex situ conservation.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "core",
            hints: [
              "What conditions prevent seeds from deteriorating?",
              "Seed banks are ex situ — they store seeds outside the natural habitat.",
            ],
          },
          {
            id: "bio-ecology-bm4-06",
            question: "Which of the following is a concern about herbicide-resistant GM crops?",
            options: [
              "The crops produce lower yields than non-GM varieties",
              "Herbicide-resistance genes may spread to wild plant species, creating difficult-to-control 'superweeds'",
              "GM crops cannot be harvested by standard farm machinery",
              "Herbicide-resistant crops are more susceptible to pest insects",
            ],
            answerIndex: 1,
            explanation:
              "A major environmental concern is gene flow: if herbicide-resistance genes spread via cross-pollination to wild relatives, it could create 'superweeds' resistant to herbicides. GM crops typically produce higher, not lower, yields. Their harvest and pest resistance are not standard concerns.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "core",
            hints: [
              "What happens if pollen from herbicide-resistant GM crops reaches wild relatives?",
              "Gene flow = transfer of genes from one population to another through reproduction.",
            ],
          },
          {
            id: "bio-ecology-bm4-07",
            question: "Which enzyme seals the sugar-phosphate backbone after a gene has been inserted into a plasmid?",
            options: [
              "Restriction enzyme",
              "DNA polymerase",
              "DNA ligase",
              "RNA polymerase",
            ],
            answerIndex: 2,
            explanation:
              "DNA ligase seals the phosphodiester bonds in the sugar-phosphate backbone after the foreign gene's sticky ends have annealed to the complementary sticky ends of the plasmid. Restriction enzymes cut; DNA polymerase replicates; RNA polymerase transcribes.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm4-08",
            question: "Which of the following is an advantage of producing human insulin by genetic engineering compared to extracting it from pig pancreases?",
            options: [
              "The process is cheaper because no equipment is needed",
              "The human insulin produced is identical to natural human insulin, reducing the risk of immune reactions",
              "Bacterial insulin is more potent than human insulin",
              "The extraction process from bacteria is simpler than from pig pancreas",
            ],
            answerIndex: 1,
            explanation:
              "Genetically engineered human insulin is structurally identical to natural insulin, so patients are less likely to develop immune responses or allergic reactions. Animal insulin differs slightly in amino acid sequence and can cause reactions in some patients. The process is not necessarily cheaper (the equipment is expensive).",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "core",
            hints: [
              "Why might pig insulin cause a reaction in a human but human insulin would not?",
              "What is the key advantage of having a product that is structurally identical to the natural version?",
            ],
          },
          {
            id: "bio-ecology-bm4-09",
            question: "A conservationist argues that maintaining biodiversity is important for medicine. Which of the following BEST supports this argument?",
            options: [
              "Many medicines have been developed from compounds found in wild plant and animal species",
              "Wild species can be used as food during famines",
              "Diverse ecosystems produce more rainfall",
              "Wild animals can control agricultural pests",
            ],
            answerIndex: 0,
            explanation:
              "Many important medicines (e.g., aspirin from willow bark, penicillin from Penicillium mould, taxol from yew trees) were discovered in wild species. Losing species could mean losing potential cures. The other options are valid reasons for biodiversity, but they do not specifically support the medical argument.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "challenge",
            hints: [
              "The question specifies 'for medicine' — which option directly links biodiversity to medical discoveries?",
              "Think of a famous medicine derived from a plant or fungus.",
            ],
          },
          {
            id: "bio-ecology-bm4-10",
            question: "In fermentation of glucose by yeast to produce ethanol, which conditions are correct?",
            options: [
              "Aerobic conditions; product is CO₂ and water",
              "Anaerobic conditions; product is ethanol and CO₂",
              "Aerobic conditions; product is ethanol and oxygen",
              "Anaerobic conditions; product is lactic acid and CO₂",
            ],
            answerIndex: 1,
            explanation:
              "Yeast ferments glucose anaerobically (without oxygen) to produce ethanol (alcohol) and carbon dioxide. This is used in brewing and breadmaking. Under aerobic conditions, yeast fully respires glucose to CO₂ and water (no ethanol). Lactic acid fermentation occurs in animal muscle and some bacteria, not in yeast.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "warmup",
          },
        ],
      },
    ],

    qaPapers: [
      {
        id: "bio-ecology-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Ecosystem vocabulary, food webs, energy flow, and pyramids.",
        questions: [
          {
            id: "bio-ecology-bq1-01",
            question:
              "Define the term 'ecosystem'. [2]",
            marks: 2,
            modelAnswer:
              "An ecosystem is a community of living organisms (biotic factors) interacting with each other and with the non-living (abiotic) components of their environment, functioning as a system.",
            markScheme: [
              "All the organisms / community of organisms in an area",
              "AND the non-living (abiotic) environment / physical environment they interact with",
            ],
            commonError:
              "Defining 'ecosystem' as just the habitat or just the organisms — both biotic and abiotic components must be mentioned.",
            guideRef: "Ecosystem Vocabulary",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bq1-02",
            question:
              "Distinguish between a food chain and a food web. Explain why a food web is a more realistic model of feeding relationships in an ecosystem. [3]",
            marks: 3,
            modelAnswer:
              "A food chain shows a single linear sequence of feeding relationships (who eats whom) from producer to top consumer. " +
              "A food web shows multiple interconnected food chains, with many organisms having more than one food source or being eaten by more than one predator. " +
              "A food web is more realistic because most organisms eat several different prey species and are preyed upon by several predators, so a single chain oversimplifies the real feeding relationships in an ecosystem.",
            markScheme: [
              "Food chain: single/linear sequence of feeding from producer to consumer",
              "Food web: multiple/interconnected food chains / shows organisms with multiple prey or predators",
              "More realistic because most organisms eat/are eaten by more than one species / real relationships are complex",
            ],
            commonError:
              "Confusing food chains and food webs as showing the same information — a food web explicitly shows the complexity of real ecosystems.",
            guideRef: "Food Chains, Food Webs & Trophic Levels",
            difficulty: "warmup",
            hints: [
              "How many arrows does a food chain have compared with a food web?",
              "Can a fox eat only one type of prey? What does that tell you about which model is better?",
            ],
          },
          {
            id: "bio-ecology-bq1-03",
            question:
              "The following food web exists in a grassland ecosystem:\n\n" +
              "grass → grasshopper → frog → snake → hawk\n" +
              "grass → grasshopper → lizard → hawk\n" +
              "grass → rabbit → hawk\n" +
              "grass → rabbit → fox\n\n" +
              "(a) Identify the producers in this food web. [1]\n" +
              "(b) Name ONE tertiary consumer. [1]\n" +
              "(c) Predict and explain the effect on hawk numbers if the frog population was wiped out by disease. [2]",
            marks: 4,
            modelAnswer:
              "(a) Grass.\n\n" +
              "(b) Snake (eats frogs, which eat grasshoppers, which eat grass: TL1 → TL2 → TL3 → TL4). Also accept hawk (TL4 or TL5 depending on chain).\n\n" +
              "(c) Hawk numbers would initially decrease because frogs (via snakes) contribute to the hawk's food supply. However, hawks also eat lizards and rabbits directly, so the effect may be limited — hawks may compensate by eating more rabbits and lizards. In the long term, hawk numbers may partially recover.",
            markScheme: [
              "(a) Grass",
              "(b) Snake OR hawk (with correct reasoning)",
              "(c) Hawk numbers decrease / may decrease initially",
              "(c) Because frogs (via snakes) are a food source for hawks / food supply reduced; OR hawks have alternative food (rabbits/lizards) so effect may be limited",
            ],
            commonError:
              "Stating hawk numbers will definitely crash — hawks eat multiple prey and may compensate; the question asks you to 'predict AND explain', so reasoning is needed.",
            guideRef: "Food Chains, Food Webs & Trophic Levels",
            difficulty: "core",
            hints: [
              "Trace the path: frog → snake → hawk. If frogs disappear, what happens to snakes?",
              "Does the hawk have alternative food sources if snakes decline?",
              "Remember to explain why, not just state what happens.",
            ],
          },
          {
            id: "bio-ecology-bq1-04",
            question:
              "Explain the meaning of the term 'trophic level' and state the trophic level of each organism in the chain:\n\nphytoplankton → krill → herring → seal → killer whale. [5]",
            marks: 5,
            modelAnswer:
              "A trophic level is the feeding position or step in a food chain that an organism occupies, determined by how many energy transfers have occurred from the producer to reach that organism.\n\n" +
              "Phytoplankton: trophic level 1 (producer)\n" +
              "Krill: trophic level 2 (primary consumer)\n" +
              "Herring: trophic level 3 (secondary consumer)\n" +
              "Seal: trophic level 4 (tertiary consumer)\n" +
              "Killer whale: trophic level 5 (quaternary consumer)",
            markScheme: [
              "Trophic level = feeding position / step in food chain / number of energy transfers from producer",
              "Phytoplankton: TL1 / producer",
              "Krill: TL2 / primary consumer",
              "Herring: TL3 / secondary consumer",
              "Seal: TL4 / tertiary consumer",
              "Killer whale: TL5 / quaternary consumer",
            ],
            commonError:
              "Starting the count from 0 instead of 1 — producers are always trophic level 1.",
            guideRef: "Food Chains, Food Webs & Trophic Levels",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bq1-05",
            question:
              "A meadow ecosystem has the following energy data:\n\n" +
              "Grasses (TL1): 800 000 kJ/m²/yr\n" +
              "Grasshoppers (TL2): 72 000 kJ/m²/yr\n" +
              "Frogs (TL3): 6 500 kJ/m²/yr\n\n" +
              "(a) Calculate the percentage efficiency of energy transfer from TL1 to TL2. Show your working. [2]\n" +
              "(b) Calculate the percentage efficiency of energy transfer from TL2 to TL3. Show your working. [2]\n" +
              "(c) State TWO processes by which energy is lost between trophic levels. [2]",
            marks: 6,
            modelAnswer:
              "(a) Efficiency = (72 000 / 800 000) × 100 = 9.0%\n\n" +
              "(b) Efficiency = (6 500 / 72 000) × 100 = 9.03% (accept 9.0%)\n\n" +
              "(c) Any two from: respiration (energy lost as heat); egestion (undigested material in faeces); excretion; energy used in movement.",
            markScheme: [
              "(a) Formula: (TL2 energy / TL1 energy) × 100",
              "(a) 9% (accept 8.9%–9.1%)",
              "(b) Formula: (TL3 energy / TL2 energy) × 100",
              "(b) 9.0% (accept 9.0%–9.1%)",
              "(c) Any TWO: respiration/heat loss; egestion; excretion; movement",
            ],
            commonError:
              "Dividing TL1 by TL2 instead of TL2 by TL1 — efficiency is always (output ÷ input) × 100.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "core",
            hints: [
              "Efficiency = (energy OUT / energy IN) × 100. Which is the input and which is the output?",
              "For part (c): where does the energy go that is not passed on? Think about what organisms do with food.",
            ],
            strategy: "Show formula, substitution, and result with units for each calculation.",
            solutions: [
              {
                label: "TL1 to TL2 efficiency",
                steps: [
                  "Efficiency (%) = (energy at TL2 / energy at TL1) × 100",
                  "= (72 000 / 800 000) × 100",
                  "= 0.090 × 100",
                  "= 9.0%",
                ],
              },
              {
                label: "TL2 to TL3 efficiency",
                steps: [
                  "Efficiency (%) = (energy at TL3 / energy at TL2) × 100",
                  "= (6 500 / 72 000) × 100",
                  "= 0.0903 × 100",
                  "= 9.0% (3 s.f.)",
                ],
              },
            ],
          },
          {
            id: "bio-ecology-bq1-06",
            question:
              "Explain, using the concept of energy loss between trophic levels, why it is more energy-efficient for humans to eat crops directly rather than to eat animals that have been fed on those crops. [4]",
            marks: 4,
            modelAnswer:
              "When crops are eaten directly by humans, humans occupy trophic level 2 (primary consumer). " +
              "Only one energy transfer occurs (TL1 → TL2), so approximately 10% of the energy fixed by the crops is available to humans.\n\n" +
              "When humans eat animals that have been fed on crops, humans occupy trophic level 3 (secondary consumer). " +
              "Two energy transfers occur (TL1 → TL2 → TL3). " +
              "At each transfer roughly 90% of energy is lost (as heat through respiration, in egested material, etc.), so only about 1% of the original crop energy reaches humans. " +
              "Eating crops directly is therefore approximately 10 times more efficient.",
            markScheme: [
              "Eating crops: humans at TL2 / only one energy transfer",
              "Eating animals fed on crops: humans at TL3 / two energy transfers",
              "~90% energy lost at each trophic level (respiration / egestion / heat)",
              "More crop energy available when eaten directly / fewer transfers = less energy lost",
            ],
            commonError:
              "Vague answers like 'animals waste energy' — you must specify the trophic levels and the approximate percentage loss.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "core",
            hints: [
              "Draw the two food chains: (1) crop → human; (2) crop → animal → human. Count the arrows.",
              "How much energy passes through each arrow? Use the 10% rule.",
              "Compare: 10% of TL1 energy versus 10% of 10% (= 1%) of TL1 energy.",
            ],
          },
          {
            id: "bio-ecology-bq1-07",
            question:
              "Describe the difference between a pyramid of numbers and a pyramid of biomass. Explain why a pyramid of numbers can be inverted but a pyramid of energy is always a true pyramid. [5]",
            marks: 5,
            modelAnswer:
              "A pyramid of numbers shows the number of individual organisms at each trophic level. " +
              "A pyramid of biomass shows the total mass (or dry mass) of organisms at each trophic level.\n\n" +
              "A pyramid of numbers can be inverted because individual organisms at lower trophic levels may be very large (e.g., one oak tree supports thousands of caterpillars and millions of aphids). " +
              "A single producer can support many consumers, giving an inverted shape.\n\n" +
              "A pyramid of energy is always a true pyramid because it measures total energy flow per unit area per unit time. " +
              "Energy is always lost (as heat, egestion, etc.) at each transfer, so the total energy available must always decrease from one trophic level to the next.",
            markScheme: [
              "Pyramid of numbers: number of individual organisms at each trophic level",
              "Pyramid of biomass: total mass / dry mass of organisms at each trophic level",
              "Pyramid of numbers can be inverted: one large plant supports many small herbivores (e.g., oak tree → caterpillars)",
              "Pyramid of energy always true pyramid: energy always lost at each transfer (heat/egestion)",
              "Total energy at each level always less than level below / energy cannot be created",
            ],
            commonError:
              "Saying the pyramid of biomass is also always a true pyramid — it can be inverted in aquatic ecosystems where phytoplankton have high turnover rates.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "core",
            hints: [
              "Think of an oak tree and all the caterpillars it feeds — which is at TL1 and which at TL2? How many individuals?",
              "Why can you not have MORE energy at TL3 than TL2?",
              "What does 'energy flow' measure that standing crop does not?",
            ],
          },
          {
            id: "bio-ecology-bq1-08",
            question:
              "State the meaning of the terms (a) producer, (b) primary consumer, (c) decomposer. Give one named example of each. [6]",
            marks: 6,
            modelAnswer:
              "(a) Producer: an organism that produces organic matter by photosynthesis (or chemosynthesis), forming the first trophic level of a food chain. Example: grass / oak tree / phytoplankton.\n\n" +
              "(b) Primary consumer: an organism that feeds directly on producers (plants/algae), occupying the second trophic level. Example: rabbit / grasshopper / caterpillar / cow.\n\n" +
              "(c) Decomposer: an organism that breaks down dead organic matter and waste products, releasing inorganic nutrients back into the environment. Example: Mucor (a fungus) / Bacillus (a bacterium).",
            markScheme: [
              "(a) Produces organic matter from inorganic / photosynthesis / autotroph",
              "(a) Named example: plant / alga / phytoplankton",
              "(b) Feeds on producers / plants / herbivore",
              "(b) Named example: rabbit / grasshopper / caterpillar / any herbivore",
              "(c) Breaks down dead organic matter / saprotrophic / releases inorganic nutrients",
              "(c) Named example: named fungus or bacterium (e.g., Mucor, Rhizopus, Bacillus)",
            ],
            commonError:
              "Giving 'bacteria' as a decomposer without a specific genus — the mark scheme requires a named example.",
            guideRef: "Ecosystem Vocabulary",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bq1-09",
            question:
              "A student measures the dry biomass of organisms in a lake ecosystem:\n\n" +
              "Phytoplankton (TL1): 4 g/m²\n" +
              "Zooplankton (TL2): 12 g/m²\n" +
              "Small fish (TL3): 3 g/m²\n\n" +
              "(a) Describe the shape of a pyramid of biomass for this data. [2]\n" +
              "(b) The pyramid of biomass appears inverted between TL1 and TL2. Explain how this is possible. [3]",
            marks: 5,
            modelAnswer:
              "(a) The pyramid is inverted between TL1 and TL2: TL1 bar (4 g/m²) is narrower than TL2 bar (12 g/m²). TL3 bar (3 g/m²) is narrower than TL2. Overall: inverted at base, narrowing at TL3.\n\n" +
              "(b) Phytoplankton have a very high rate of reproduction (turnover rate) — their generation time can be hours to days. " +
              "Although the standing crop (biomass at any one moment) appears small, phytoplankton are being produced and consumed continuously. " +
              "The pyramid of biomass only shows a snapshot of standing crop, not total production. " +
              "A pyramid of energy (measuring flow over time) would show the normal, upright pyramid shape.",
            markScheme: [
              "(a) TL1 narrower than TL2 (inverted base)",
              "(a) TL3 narrower than TL2 / overall shape described correctly",
              "(b) Phytoplankton have a very high turnover/reproduction rate",
              "(b) Standing biomass at any moment is small even though productivity is high",
              "(b) Biomass pyramid shows standing crop (snapshot), not total production / contrast with energy pyramid",
            ],
            commonError:
              "Claiming phytoplankton are 'being eaten faster than they are produced' — the correct explanation is high turnover rate, not depletion.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "challenge",
            hints: [
              "What is meant by 'standing crop'? Is it the same as total production over a year?",
              "How fast can phytoplankton divide? Think about how this affects how many exist at any snapshot.",
              "What would a pyramid of energy look like for the same data? Why?",
              "Compare the concept of 'biomass present now' vs 'total biomass produced per year'.",
            ],
          },
          {
            id: "bio-ecology-bq1-10",
            question:
              "A sample of 200 aphids is collected from a rose bush. After marking and releasing them, a second sample of 150 aphids is collected, of which 30 are marked.\n\n" +
              "(a) Use the Lincoln Index to estimate the total aphid population on the rose bush. Show your working. [3]\n" +
              "(b) State TWO assumptions that must be valid for this estimate to be reliable. [2]",
            marks: 5,
            modelAnswer:
              "(a) Lincoln Index: N = (n1 × n2) / m\n" +
              "where n1 = 200, n2 = 150, m = 30\n" +
              "N = (200 × 150) / 30 = 30 000 / 30 = 1000\n" +
              "Estimated population = 1000 aphids.\n\n" +
              "(b) Any two: marked individuals have mixed randomly with the rest of the population; marking does not affect survival/behaviour; no individuals entered or left the population between samples (closed population); marks are not lost between sampling events.",
            markScheme: [
              "(a) Correct formula: N = (n1 × n2) / m",
              "(a) Correct substitution: (200 × 150) / 30",
              "(a) Answer: 1000",
              "(b) Any TWO: marked individuals mix randomly; marking does not harm/alter behaviour; closed population (no births/deaths/migration); marks not lost",
            ],
            commonError:
              "Using the formula as N = (m × n2) / n1 — the marked animals in the SECOND sample go in the denominator.",
            guideRef: "Ecosystem Vocabulary",
            difficulty: "challenge",
            hints: [
              "Write the Lincoln Index formula first: N = (n1 × n2) / m.",
              "Identify each variable: n1 is first catch, n2 is second catch, m is marked in second catch.",
              "For assumptions: think about what must be TRUE for the ratio of marked to total to represent the real population.",
              "What if half the marked aphids left the bush? Would your estimate be too high or too low?",
            ],
            strategy: "State formula → substitute values → calculate → check units.",
            solutions: [
              {
                label: "Lincoln Index calculation",
                steps: [
                  "N = (n1 × n2) / m",
                  "n1 = 200 (first sample captured and marked)",
                  "n2 = 150 (second sample)",
                  "m = 30 (marked individuals in second sample)",
                  "N = (200 × 150) / 30 = 30 000 / 30 = 1000",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "bio-ecology-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Carbon cycle, nitrogen cycle, and biogeochemical cycling processes.",
        questions: [
          {
            id: "bio-ecology-bq2-01",
            question:
              "State the process by which carbon enters living organisms from the atmosphere. Write the word equation for this process. [2]",
            marks: 2,
            modelAnswer:
              "Photosynthesis. Word equation: carbon dioxide + water → glucose + oxygen.",
            markScheme: [
              "Photosynthesis",
              "carbon dioxide + water → glucose + oxygen (accept light energy shown above arrow)",
            ],
            commonError:
              "Writing the equation for respiration instead of photosynthesis — remember, photosynthesis is the entry point of carbon into living matter.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bq2-02",
            question:
              "Describe the role of microorganisms in the carbon cycle. [4]",
            marks: 4,
            modelAnswer:
              "Microorganisms (bacteria and fungi) act as decomposers in the carbon cycle. " +
              "They break down the organic molecules in dead organisms and waste materials through the process of decomposition/saprotrophic nutrition. " +
              "During aerobic respiration, decomposers release carbon dioxide back into the atmosphere. " +
              "This returns carbon that was 'locked up' in organic matter to the atmosphere, making it available for photosynthesis again. " +
              "In anaerobic conditions, some microorganisms produce methane (CH₄), which also contains carbon.",
            markScheme: [
              "Microorganisms act as decomposers / saprotrophic nutrition",
              "Break down organic compounds in dead organisms / waste",
              "Respire aerobically releasing CO₂ into atmosphere",
              "Returns carbon to atmosphere for photosynthesis / completes carbon cycle",
            ],
            commonError:
              "Forgetting to mention respiration — decomposition requires the decomposers to respire, which is how CO₂ is released.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "core",
            hints: [
              "What do decomposers eat? What happens to the carbon in that food?",
              "All organisms respire — what gas is released during aerobic respiration?",
            ],
          },
          {
            id: "bio-ecology-bq2-03",
            question:
              "Explain how carbon from atmospheric CO₂ becomes incorporated into fossil fuels. [3]",
            marks: 3,
            modelAnswer:
              "Plants and other photosynthetic organisms remove CO₂ from the atmosphere through photosynthesis and incorporate the carbon into organic molecules. " +
              "When these organisms die, under certain conditions (low oxygen, high pressure, high temperature over millions of years), decomposition is incomplete. " +
              "The organic carbon is preserved and slowly converted into fossil fuels (coal from plant material, oil and natural gas from marine organisms). " +
              "This carbon remains 'locked up' in fossil fuels until combustion releases it as CO₂.",
            markScheme: [
              "CO₂ fixed by photosynthesis into organic molecules in living organisms",
              "Organisms die and are buried / decomposition incomplete (low O₂ / anaerobic conditions)",
              "Over millions of years, organic carbon compressed/converted into fossil fuels",
            ],
            commonError:
              "Saying organisms directly 'become' fossil fuels — fossil fuels form from the organic carbon of ancient organisms over millions of years under specific geological conditions.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "core",
            hints: [
              "How does carbon get into living organisms in the first place?",
              "What conditions prevent normal decomposition when organisms die?",
              "How long does it take for coal or oil to form?",
            ],
          },
          {
            id: "bio-ecology-bq2-04",
            question:
              "Describe the complete nitrogen cycle, beginning with atmospheric nitrogen (N₂) and ending with nitrate ions in the soil. Name the types of bacteria involved at each stage. [6]",
            marks: 6,
            modelAnswer:
              "1. Nitrogen fixation: nitrogen-fixing bacteria (e.g., Rhizobium in root nodules of legumes, or free-living Azotobacter) convert atmospheric N₂ into ammonium ions (NH₄⁺).\n\n" +
              "2. Ammonification: decomposers (saprophytic bacteria and fungi) break down proteins in dead organisms and waste, releasing ammonium ions (NH₄⁺).\n\n" +
              "3. Nitrification: nitrifying bacteria (Nitrosomonas, then Nitrobacter) convert NH₄⁺ first to nitrite (NO₂⁻) then to nitrate (NO₃⁻).\n\n" +
              "4. Nitrate ions are then absorbed by plant roots and used to synthesise proteins.\n\n" +
              "(Denitrification also occurs: denitrifying bacteria in anaerobic conditions convert nitrate back to N₂.)",
            markScheme: [
              "Nitrogen fixation: N₂ → ammonium/ammonia; nitrogen-fixing bacteria (Rhizobium / Azotobacter)",
              "Ammonification: proteins in dead matter → ammonium ions; decomposers/saprophytes",
              "Nitrification: NH₄⁺ → NO₂⁻ → NO₃⁻; nitrifying bacteria (Nitrosomonas / Nitrobacter)",
              "Nitrate absorbed by plant roots for protein synthesis",
              "Denitrification (bonus): nitrate → N₂; denitrifying bacteria",
              "Correct sequence of stages and bacteria named",
            ],
            commonError:
              "Confusing nitrification and nitrogen fixation — nitrification is ammonium → nitrate; nitrogen fixation is N₂ → ammonium.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "challenge",
            hints: [
              "Start with N₂ in the air. Which bacteria can convert this to a usable form?",
              "What happens to nitrogen in dead organisms? Which organisms do this?",
              "What is the difference between ammonium (NH₄⁺) and nitrate (NO₃⁻)? Which form do plants prefer?",
              "Nitrification has TWO steps — name a bacterium for each.",
            ],
          },
          {
            id: "bio-ecology-bq2-05",
            question:
              "Explain why leguminous plants (e.g., peas, beans) are used in crop rotation to improve soil fertility. [3]",
            marks: 3,
            modelAnswer:
              "Leguminous plants have mutualistic Rhizobium bacteria living in nodules on their roots. " +
              "These nitrogen-fixing bacteria convert atmospheric nitrogen (N₂) into ammonium/nitrate compounds that the plant can use to synthesise proteins. " +
              "When the legume plants are ploughed back into the soil (or die), the organic nitrogen compounds are released into the soil through decomposition, increasing the nitrate content of the soil. " +
              "This makes the soil more fertile for the next crop grown in rotation.",
            markScheme: [
              "Legumes have Rhizobium (nitrogen-fixing) bacteria in root nodules",
              "Bacteria fix atmospheric N₂ into ammonium/nitrate compounds",
              "When plants die/are ploughed in, nitrogen compounds released into soil",
            ],
            commonError:
              "Saying legumes themselves fix nitrogen — it is the Rhizobium bacteria in their root nodules that carry out nitrogen fixation.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "core",
            hints: [
              "What lives in the root nodules of leguminous plants?",
              "What do these microorganisms do with N₂ from the air?",
              "What happens when the legume plant dies?",
            ],
          },
          {
            id: "bio-ecology-bq2-06",
            question:
              "Compare the roles of nitrogen-fixing bacteria and denitrifying bacteria in the nitrogen cycle. [4]",
            marks: 4,
            modelAnswer:
              "Nitrogen-fixing bacteria (e.g., Rhizobium, Azotobacter) convert atmospheric nitrogen gas (N₂) into ammonium ions (NH₄⁺) or nitrate, which can be absorbed by plants. " +
              "They increase the amount of biologically available nitrogen in the ecosystem.\n\n" +
              "Denitrifying bacteria (e.g., Pseudomonas) convert nitrate (NO₃⁻) in the soil back into nitrogen gas (N₂), which is released into the atmosphere. " +
              "They operate in anaerobic conditions (e.g., waterlogged soils). " +
              "They decrease the amount of biologically available nitrogen in the ecosystem.\n\n" +
              "Both are bacteria and both affect nitrogen availability, but they act in opposite directions.",
            markScheme: [
              "Nitrogen-fixing bacteria: N₂ → ammonium/nitrate; increase available nitrogen in soil",
              "Named example: Rhizobium / Azotobacter",
              "Denitrifying bacteria: nitrate → N₂; decrease available nitrogen; operate anaerobically",
              "Named example: Pseudomonas / denitrifying bacteria",
            ],
            commonError:
              "Saying both types of bacteria increase soil fertility — denitrifying bacteria reduce available nitrogen and therefore reduce fertility.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "core",
            hints: [
              "Nitrogen-fixing goes from gas (N₂) to usable form — which way?",
              "Denitrifying goes from soil nitrogen back to gas — which way?",
              "One helps plants, one reduces available nitrogen — which is which?",
            ],
          },
          {
            id: "bio-ecology-bq2-07",
            question:
              "Describe how nitrogen from the atmosphere becomes part of a protein molecule in a human body. [5]",
            marks: 5,
            modelAnswer:
              "1. Nitrogen-fixing bacteria convert atmospheric N₂ into ammonium ions (NH₄⁺) in the soil.\n" +
              "2. Nitrifying bacteria convert ammonium ions into nitrate ions (NO₃⁻) in the soil.\n" +
              "3. Plant roots absorb nitrate ions from the soil.\n" +
              "4. Plants use nitrate to synthesise amino acids (combining nitrate with carbohydrates from photosynthesis).\n" +
              "5. Humans eat the plants (or eat animals that have eaten plants) and digest proteins into amino acids.\n" +
              "6. Amino acids are absorbed and reassembled into human proteins.",
            markScheme: [
              "Nitrogen fixation: N₂ → ammonium by bacteria",
              "Nitrification: ammonium → nitrate by nitrifying bacteria",
              "Plant roots absorb nitrate",
              "Plants synthesise amino acids / proteins using nitrate",
              "Humans eat plants/animals; digestion produces amino acids; human proteins synthesised",
            ],
            commonError:
              "Jumping from atmospheric N₂ directly to plant uptake without mentioning nitrogen-fixing bacteria — plants cannot use N₂ directly.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "challenge",
            hints: [
              "Can plants absorb N₂ gas directly from the air? If not, what must happen first?",
              "In what form do plant roots absorb nitrogen from the soil?",
              "How does nitrogen from plants get into a human?",
              "What must a human do with the proteins from plants before using them?",
            ],
          },
          {
            id: "bio-ecology-bq2-08",
            question:
              "Explain why aerobic respiration by decomposers is important for returning carbon to the atmosphere. [3]",
            marks: 3,
            modelAnswer:
              "Decomposers (bacteria and fungi) feed saprotrophically on dead organic matter, secreting enzymes to digest organic molecules outside their cells and absorbing the products. " +
              "They use aerobic respiration to release energy from these organic molecules, and as a by-product, they release carbon dioxide (CO₂) into the atmosphere. " +
              "Without decomposers, carbon would remain locked in dead organic matter and would not be recycled for use in photosynthesis.",
            markScheme: [
              "Decomposers break down dead organic matter / saprotrophic nutrition",
              "Aerobic respiration releases CO₂ as a by-product",
              "CO₂ returned to atmosphere for use in photosynthesis / completes carbon cycle",
            ],
            commonError:
              "Saying decomposers 'eat' organic matter — they digest it externally using enzymes and absorb the products (saprotrophic nutrition).",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bq2-09",
            question:
              "A scientist monitors the atmospheric CO₂ concentration in a sealed greenhouse over 24 hours. " +
              "Describe and explain the expected pattern of CO₂ concentration over one day-night cycle. [4]",
            marks: 4,
            modelAnswer:
              "During daylight hours: CO₂ concentration decreases. Plants photosynthesise, absorbing CO₂ from the air to produce glucose. " +
              "The rate of photosynthesis exceeds the rate of respiration, so there is a net uptake of CO₂.\n\n" +
              "During the night: CO₂ concentration increases. Plants (and all organisms) continue to respire aerobically, releasing CO₂. " +
              "In the dark, photosynthesis cannot occur, so CO₂ is not absorbed. " +
              "CO₂ accumulates in the greenhouse.\n\n" +
              "The lowest CO₂ point is at the end of the day (or shortly after dusk); the highest is at the end of the night (just before dawn).",
            markScheme: [
              "Daytime: CO₂ decreases",
              "Because photosynthesis rate > respiration rate / net CO₂ uptake by plants",
              "Night-time: CO₂ increases",
              "Because only respiration occurs (photosynthesis cannot occur in dark) / CO₂ released but not absorbed",
            ],
            commonError:
              "Saying plants stop respiring during the day — plants respire continuously; it is just that photosynthesis more than compensates during daylight.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "core",
            hints: [
              "During the day: which process removes CO₂ from the air? Which adds it?",
              "Which process dominates during daylight? Which dominates at night?",
              "When is CO₂ concentration at its lowest: morning, midday, or evening?",
            ],
          },
          {
            id: "bio-ecology-bq2-10",
            question:
              "Describe how the combustion of fossil fuels disrupts the carbon cycle, and explain TWO consequences for living organisms. [5]",
            marks: 5,
            modelAnswer:
              "Combustion of fossil fuels releases CO₂ that has been locked in geological deposits for millions of years back into the atmosphere very rapidly. " +
              "This disrupts the natural carbon cycle by adding carbon to the atmospheric pool far faster than natural processes can absorb it. " +
              "Atmospheric CO₂ concentration rises, enhancing the greenhouse effect and increasing global temperatures.\n\n" +
              "Consequence 1: rising sea levels (due to melting ice caps and thermal expansion of oceans) destroy coastal habitats, threatening species living there.\n\n" +
              "Consequence 2: increased ocean acidity (CO₂ dissolves in seawater to form carbonic acid, lowering pH), harming marine organisms such as corals and shellfish that rely on calcium carbonate shells.",
            markScheme: [
              "Fossil fuel combustion releases CO₂ stored for millions of years / unbalances the cycle",
              "Atmospheric CO₂ increases / enhanced greenhouse effect",
              "Consequence 1: rising sea levels / habitat destruction / species loss (any valid consequence with organism link)",
              "Consequence 2: ocean acidification / harm to corals/shellfish / any other valid consequence with organism link",
              "Each consequence must be linked to impact on living organisms",
            ],
            commonError:
              "Giving 'global warming' as the only consequence — the question asks for consequences 'for living organisms', so specific impacts on species or ecosystems are needed.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "challenge",
            hints: [
              "How is the rate of CO₂ release from fossil fuels different from the rate of CO₂ uptake by natural processes?",
              "Enhanced greenhouse effect → global warming → what happens to ice caps?",
              "CO₂ dissolves in water — what does this do to ocean pH?",
              "Name specific organisms or habitats that are harmed.",
            ],
          },
        ],
      },
      {
        id: "bio-ecology-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Human impact on the environment: pollution, eutrophication, greenhouse effect, acid rain, and conservation.",
        questions: [
          {
            id: "bio-ecology-bq3-01",
            question:
              "Describe the sequence of events that leads to eutrophication of a freshwater lake following the run-off of nitrate fertilisers from nearby farmland. [6]",
            marks: 6,
            modelAnswer:
              "1. Excess nitrates leach/run off from farmland into the lake.\n" +
              "2. High nitrate concentration causes rapid, excessive growth of algae on the water surface (algal bloom).\n" +
              "3. The algal bloom blocks sunlight from reaching submerged aquatic plants.\n" +
              "4. Submerged plants cannot photosynthesise and die.\n" +
              "5. Bacteria decompose the dead plants and algae; their population increases enormously.\n" +
              "6. Bacteria respire aerobically, consuming dissolved oxygen in the water.\n" +
              "7. Dissolved oxygen levels fall to very low levels.\n" +
              "8. Fish and other aerobic aquatic organisms cannot obtain sufficient oxygen and die (suffocate).",
            markScheme: [
              "Nitrate run-off / leaching into lake",
              "Algal bloom / rapid algal growth on surface",
              "Light blocked from submerged plants",
              "Submerged plants die",
              "Decomposing bacteria multiply / feed on dead material",
              "Bacteria use dissolved O₂ for aerobic respiration",
              "Dissolved O₂ decreases",
              "Fish/aerobic organisms die / suffocate (any 6 from above)",
            ],
            commonError:
              "Missing the intermediate step — students often jump from algal bloom to fish death without explaining the bacterial decomposition and oxygen depletion mechanism.",
            guideRef: "Human Impact on the Environment",
            difficulty: "core",
            hints: [
              "Step 1 is always fertiliser run-off. The last step is fish death. What happens in between?",
              "Why do the plants under the water die? (Hint: what does the algal bloom block?)",
              "Why do bacteria multiply? What do they consume when they respire?",
            ],
            strategy: "Use numbered steps; key words at each stage: nitrate → algal bloom → light blocked → plant death → bacterial decomposition → O₂ depletion → fish death.",
          },
          {
            id: "bio-ecology-bq3-02",
            question:
              "Explain how deforestation contributes to an increase in atmospheric CO₂ concentration. State TWO other environmental consequences of deforestation. [4]",
            marks: 4,
            modelAnswer:
              "Deforestation contributes to increased atmospheric CO₂ in two ways: " +
              "(1) trees that are burned release the carbon stored in their wood as CO₂ immediately; " +
              "(2) when trees are removed, photosynthesis that previously removed CO₂ from the atmosphere no longer occurs, so CO₂ continues to build up.\n\n" +
              "Other environmental consequences (any two): " +
              "soil erosion (tree roots hold soil; without them, rain washes topsoil away); " +
              "loss of biodiversity (habitats destroyed, species become extinct); " +
              "disruption of the water cycle (less transpiration reduces local rainfall); " +
              "flooding (tree roots absorb water; without them, rainfall runs off more quickly).",
            markScheme: [
              "Trees burned → CO₂ released from stored carbon",
              "Less photosynthesis → less CO₂ removed from atmosphere",
              "Other consequence 1: soil erosion / leaching of nutrients (1 mark)",
              "Other consequence 2: loss of biodiversity / habitat loss (1 mark)",
            ],
            commonError:
              "Only mentioning burning as the cause of CO₂ increase — the reduction in photosynthesis (less CO₂ removal) is equally important and often missed.",
            guideRef: "Human Impact on the Environment",
            difficulty: "core",
            hints: [
              "Think about what happens to trees when cleared: some are burned — what gas is released?",
              "Think about what trees do while alive — they absorb CO₂. What happens when they are gone?",
              "Soil, biodiversity, water cycle — what does each rely on trees for?",
            ],
          },
          {
            id: "bio-ecology-bq3-03",
            question:
              "Describe the enhanced greenhouse effect and explain how it could affect sea level. [5]",
            marks: 5,
            modelAnswer:
              "The natural greenhouse effect: the Sun's short-wave radiation passes through the atmosphere and warms Earth's surface. " +
              "The Earth re-emits longer-wave infrared (heat) radiation. " +
              "Greenhouse gases (CO₂, methane, water vapour) absorb this outgoing infrared radiation and re-radiate it in all directions, including back towards Earth, keeping the surface warm.\n\n" +
              "The enhanced greenhouse effect: human activities (burning fossil fuels, deforestation) have increased atmospheric CO₂ and methane beyond natural levels. " +
              "More infrared radiation is absorbed and re-radiated back to Earth, causing average global temperatures to rise (global warming).\n\n" +
              "Effect on sea level: rising temperatures cause (1) thermal expansion of ocean water and (2) melting of polar ice caps and glaciers, adding water to the oceans. " +
              "Both effects raise sea levels, potentially flooding low-lying coastal regions.",
            markScheme: [
              "Greenhouse gases (CO₂/methane) absorb outgoing infrared radiation from Earth's surface",
              "Re-radiate it back towards Earth / trap heat",
              "Human activities increased greenhouse gas concentrations (enhanced effect)",
              "Greater warming than natural / average global temperature rises",
              "Sea level rises: thermal expansion of water AND/OR melting ice caps/glaciers",
            ],
            commonError:
              "Saying greenhouse gases 'prevent sunlight from reaching Earth' — they affect OUTGOING infrared from the surface, not incoming solar radiation.",
            guideRef: "Human Impact on the Environment",
            difficulty: "core",
            hints: [
              "The greenhouse effect involves OUTGOING radiation from Earth, not incoming from the Sun.",
              "What are two ways that melting ice and warming water both raise sea level?",
              "Distinguish between natural greenhouse effect (necessary for life) and enhanced (caused by humans).",
            ],
          },
          {
            id: "bio-ecology-bq3-04",
            question:
              "Explain how acid rain is formed and describe TWO effects it has on ecosystems. [5]",
            marks: 5,
            modelAnswer:
              "Acid rain formation: burning fossil fuels releases sulfur dioxide (SO₂) and nitrogen oxides (NOₓ) into the atmosphere. " +
              "These gases dissolve in atmospheric moisture (water vapour) to form sulfuric acid (H₂SO₄) and nitric acid (HNO₃). " +
              "This lowers the pH of precipitation below 5.6, producing acid rain.\n\n" +
              "Effect 1: Acid rain lowers the pH of lakes and rivers, making the water too acidic for many aquatic organisms (fish, insects, amphibians) to survive, reducing biodiversity.\n\n" +
              "Effect 2: Acid rain leaches essential mineral ions (calcium, magnesium) from soil, making soil less fertile and damaging plant roots, leading to poor growth or death of trees and other plants.",
            markScheme: [
              "SO₂ and/or NOₓ released by burning fossil fuels",
              "Dissolve in water vapour to form sulfuric/nitric acid",
              "Precipitation has pH below 5.6 / is acidic",
              "Effect 1: acidifies lakes/rivers; kills aquatic organisms / reduces biodiversity",
              "Effect 2: leaches minerals from soil / damages plant roots / kills trees",
            ],
            commonError:
              "Saying CO₂ alone causes acid rain — CO₂ does dissolve to form carbonic acid, but the main culprits are SO₂ and NOₓ from combustion.",
            guideRef: "Human Impact on the Environment",
            difficulty: "core",
            hints: [
              "Which gases from burning fossil fuels lead to acid rain? (Not just CO₂!)",
              "What happens when SO₂ meets water in the atmosphere?",
              "Think about two different ecosystems: aquatic (lakes) and terrestrial (soil/trees).",
            ],
          },
          {
            id: "bio-ecology-bq3-05",
            question:
              "A student investigates the effect of sewage discharge on the invertebrate community downstream of a sewage outfall. The results are:\n\n" +
              "Zone A (just below outfall): Tubifex worms only\n" +
              "Zone B (1 km downstream): Tubifex worms, bloodworms, chironomid larvae\n" +
              "Zone C (3 km downstream): Mayfly nymphs, stonefly nymphs, freshwater shrimp\n\n" +
              "(a) What conclusion can be drawn about water quality in Zone C? [1]\n" +
              "(b) Explain, using the concept of indicator species, why mayfly nymphs are useful for monitoring river pollution. [2]\n" +
              "(c) Suggest why the invertebrate community recovers further downstream. [2]",
            marks: 5,
            modelAnswer:
              "(a) The water in Zone C is clean / unpolluted / of good quality, because mayfly nymphs and stonefly nymphs are indicator species that only survive in clean, well-oxygenated water.\n\n" +
              "(b) Mayfly nymphs are very sensitive to water pollution; they can only survive in water with high dissolved oxygen. Their absence indicates pollution; their presence indicates clean water. They serve as a reliable biological indicator — no chemical testing is needed.\n\n" +
              "(c) As the river flows downstream, the organic matter from sewage is progressively broken down by bacteria. The bacterial population falls as the food source is used up. Dissolved oxygen levels recover (oxygen re-enters from the atmosphere). Conditions become suitable for sensitive organisms such as mayfly nymphs to return.",
            markScheme: [
              "(a) Water is clean / high quality / well-oxygenated",
              "(b) Mayfly nymphs only present in clean, high-O₂ water / sensitive to pollution",
              "(b) Presence indicates clean water; absence indicates pollution / no chemical test needed",
              "(c) Organic matter broken down downstream / bacterial activity decreases",
              "(c) O₂ levels recover / re-oxygenation occurs further from outfall",
            ],
            commonError:
              "Saying mayfly nymphs 'clean' the water — they are indicators, not cleaners. It is the bacteria that break down the organic matter.",
            guideRef: "Human Impact on the Environment",
            difficulty: "challenge",
            hints: [
              "Which organisms in Zone C only live in clean water? What does their presence tell you?",
              "For (b): define indicator species; state what mayfly nymphs require to survive.",
              "For (c): follow the oxygen — why is there low O₂ near the outfall and higher O₂ further away?",
            ],
          },
          {
            id: "bio-ecology-bq3-06",
            question:
              "State TWO reasons why maintaining biodiversity is important, and describe ONE method used in conservation to maintain biodiversity in endangered species. [4]",
            marks: 4,
            modelAnswer:
              "Importance of biodiversity (any two):\n" +
              "1. Ecological stability: diverse ecosystems are more resilient to changes — if one species is removed, others can fill the gap.\n" +
              "2. Medicine: many drugs are derived from wild plant and animal species; losing species may mean losing potential cures.\n" +
              "3. Food security: wild plants provide genetic diversity for crop breeding.\n" +
              "4. Ecosystem services: species provide pollination, water purification, and carbon storage.\n\n" +
              "Conservation method (one of):\n" +
              "Captive breeding programmes: endangered animals are bred in zoos or wildlife centres, increasing population size. Offspring may be reintroduced to the wild once populations are large enough and suitable habitat is available.",
            markScheme: [
              "Reason 1: any valid reason (ecological stability / medicine / food security / ecosystem services)",
              "Reason 2: a different valid reason",
              "Conservation method: captive breeding / seed banks / protected areas / anti-poaching — described with enough detail (not just named)",
            ],
            commonError:
              "Giving 'conservation' itself as a reason for biodiversity — reasons must link to human benefit or ecological function.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "core",
            hints: [
              "Think about what humans get from other species: food, medicine, stability, services.",
              "For the method: pick ONE and explain how it works (not just name it).",
            ],
          },
          {
            id: "bio-ecology-bq3-07",
            question:
              "Explain why tropical rainforests are particularly important for global biodiversity. Suggest TWO reasons why deforestation of tropical rainforests is happening despite its harmful consequences. [5]",
            marks: 5,
            modelAnswer:
              "Tropical rainforests are the most biodiverse ecosystems on Earth — they cover only about 6% of land area but contain over 50% of all species. " +
              "This is because they have a stable, warm, and wet climate year-round, allowing complex multi-layered vegetation (canopy, understorey, forest floor) that creates many ecological niches. " +
              "High species diversity also means high genetic diversity.\n\n" +
              "Reasons for continued deforestation (any two): " +
              "(1) Economic pressure — timber has commercial value; land is cleared for agriculture (cattle ranching, soya, palm oil) to provide income. " +
              "(2) Population growth — increased demand for food and living space drives land conversion. " +
              "(3) Debt — developing countries may prioritise economic exploitation of natural resources over conservation.",
            markScheme: [
              "Rainforests contain very high number of species / huge biodiversity",
              "Stable warm/wet climate; many ecological niches / multi-layered structure",
              "Reason 1 for deforestation: economic / timber / agriculture / income",
              "Reason 2 for deforestation: population pressure / food demand / different valid reason",
              "(3 marks for importance, 2 marks for reasons)",
            ],
            commonError:
              "Giving 'people want wood' without explaining the economic or societal drivers — 'suggest reasons' requires some explanation.",
            guideRef: "Human Impact on the Environment",
            difficulty: "challenge",
            hints: [
              "Why do rainforests have so many species? Think about climate and habitat complexity.",
              "Why do people clear forests despite knowing it causes harm? Think about poverty, debt, economics.",
              "Is deforestation driven by individuals, corporations, or governments?",
            ],
          },
          {
            id: "bio-ecology-bq3-08",
            question:
              "Describe how non-biodegradable plastics in the ocean can harm marine organisms. [3]",
            marks: 3,
            modelAnswer:
              "Non-biodegradable plastics break down into tiny pieces called microplastics but do not decompose. " +
              "These are ingested by marine animals (fish, seabirds, whales) that mistake them for food. " +
              "Ingestion of plastics can block digestive systems, causing starvation or death. " +
              "Larger plastic waste (bags, nets) can entangle marine animals such as turtles, seals, and dolphins, restricting movement and causing injury or drowning. " +
              "Microplastics can accumulate in the food chain (bioaccumulation), reaching higher concentrations in top predators.",
            markScheme: [
              "Animals ingest plastics / microplastics, mistaking for food",
              "Blockage of digestive system / starvation (or entanglement causing injury/drowning)",
              "Bioaccumulation in food chain / reaches high concentrations in predators (any TWO valid mechanisms)",
            ],
            commonError:
              "Saying plastics 'poison' the ocean chemically — the main mechanism for animals is physical ingestion, blockage, or entanglement.",
            guideRef: "Human Impact on the Environment",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bq3-09",
            question:
              "Evaluate the use of nature reserves as a method of conserving endangered species. Include both advantages and limitations in your answer. [5]",
            marks: 5,
            modelAnswer:
              "Advantages of nature reserves:\n" +
              "They protect large areas of natural habitat from human interference, allowing populations to recover. " +
              "They preserve many species simultaneously in their natural environment (in situ conservation). " +
              "Reserves maintain natural behaviours and ecological interactions. " +
              "Ecotourism in reserves can generate income to fund conservation.\n\n" +
              "Limitations of nature reserves:\n" +
              "Reserves may be too small to support viable populations of large, wide-ranging animals. " +
              "Animals within the reserve may still be threatened by poaching. " +
              "Habitat fragmentation means reserves may not fully replicate intact ecosystems. " +
              "Economic pressures may lead to encroachment by local communities. " +
              "Climate change may alter habitat conditions within reserves over time.",
            markScheme: [
              "Advantage 1: protects habitat / prevents human interference in situ",
              "Advantage 2: preserves many species / natural behaviours / interactions / ecotourism income",
              "Limitation 1: may be too small for large animals / viable populations",
              "Limitation 2: poaching / economic pressures / encroachment / climate change",
              "Answer must include BOTH advantages AND limitations",
            ],
            commonError:
              "Only describing benefits — 'evaluate' means both sides must be considered.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "challenge",
            hints: [
              "Evaluate = advantages AND limitations. Aim for at least 2 of each.",
              "Think about what a nature reserve provides AND what it cannot provide.",
              "Consider: what if the reserve is too small? What about poaching or climate change?",
              "What does 'in situ' conservation mean? Why is it better than captive breeding in some ways?",
            ],
          },
          {
            id: "bio-ecology-bq3-10",
            question:
              "Describe the methods used in a mark-release-recapture study and explain why it is used to estimate population size rather than counting all individuals directly. [4]",
            marks: 4,
            modelAnswer:
              "Method: A sample of animals is captured, counted (n1), marked in a harmless way (e.g., paint spot, wing tag), and released back into the population. " +
              "After sufficient time for marked individuals to mix randomly with the population, a second sample is captured (n2). " +
              "The number of marked individuals in the second sample (m) is counted. " +
              "The Lincoln Index formula is applied: N = (n1 × n2) / m, giving an estimate of total population size (N).\n\n" +
              "Why not count directly: in a real ecosystem, animals move, hide, and are found in inaccessible habitats. " +
              "It is impossible to count every individual without severely disturbing the ecosystem. " +
              "Mark-release-recapture gives a statistically valid estimate without needing to find every individual.",
            markScheme: [
              "Capture, mark, and release first sample (n1)",
              "Allow time for mixing then capture second sample (n2)",
              "Count marked individuals in second sample (m)",
              "Apply Lincoln Index: N = (n1 × n2) / m",
              "Counting all individuals: impractical (animals move / hide / inaccessible) / would disturb ecosystem",
            ],
            commonError:
              "Forgetting to mention allowing time for mixing before the second capture — this is an essential step for the formula to be valid.",
            guideRef: "Ecosystem Vocabulary",
            difficulty: "core",
            hints: [
              "What are the four main steps of mark-release-recapture?",
              "Why do you need to wait between the first and second capture?",
              "Think about why counting all individuals in a forest or ocean is impractical.",
            ],
          },
        ],
      },
      {
        id: "bio-ecology-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Conservation, biotechnology, genetic modification, and applied ecology.",
        questions: [
          {
            id: "bio-ecology-bq4-01",
            question:
              "Describe how bacteria are used in a fermenter to produce a useful substance. Explain why the conditions in the fermenter must be carefully controlled. [5]",
            marks: 5,
            modelAnswer:
              "Bacteria (e.g., E. coli containing a human gene) are grown in a large vessel called a fermenter, which contains nutrients (glucose, mineral ions) and provides optimal conditions for bacterial growth. " +
              "The bacteria reproduce rapidly and produce the desired substance (e.g., human insulin) as a by-product of their metabolism.\n\n" +
              "Conditions controlled:\n" +
              "Temperature — kept at the optimum for bacterial enzymes; too high denatures enzymes and kills bacteria; too low slows growth.\n" +
              "pH — maintained at optimum; enzymes are pH-sensitive.\n" +
              "Oxygen supply — aeration and stirring provide oxygen for aerobic respiration.\n" +
              "Nutrient supply — adequate glucose and minerals fed continuously.\n" +
              "Sterility — contamination by other microorganisms would reduce yield.",
            markScheme: [
              "Bacteria grown in fermenter with nutrients",
              "Bacteria produce desired substance through their metabolism",
              "Temperature controlled: optimum for enzymes; prevents denaturation",
              "pH controlled: optimum for enzymes",
              "O₂ / aeration / stirring for aerobic respiration",
              "Sterile conditions: prevent contamination",
            ],
            commonError:
              "Not explaining WHY conditions are controlled — just listing them without reason scores partial marks only.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "core",
            hints: [
              "List the conditions first: temperature, pH, oxygen, nutrients, sterility.",
              "For each condition, state the consequence of NOT controlling it.",
              "Why must the fermenter be sterile?",
            ],
          },
          {
            id: "bio-ecology-bq4-02",
            question:
              "Describe the steps in genetic engineering by which a gene from one organism is inserted into a bacterium. [5]",
            marks: 5,
            modelAnswer:
              "1. The desired gene (e.g., human insulin gene) is identified in donor DNA.\n" +
              "2. Restriction enzymes cut the gene from the donor DNA at specific recognition sequences, leaving 'sticky ends' (short single-stranded overhangs).\n" +
              "3. The same restriction enzyme cuts the bacterial plasmid at a specific site, producing complementary sticky ends.\n" +
              "4. The gene is mixed with the cut plasmid. Complementary sticky ends anneal (join) by base pairing.\n" +
              "5. DNA ligase seals the sugar-phosphate backbone, forming a recombinant plasmid.\n" +
              "6. The recombinant plasmid is introduced into a bacterium (transformation), which then produces the protein.",
            markScheme: [
              "Desired gene identified / isolated from donor DNA",
              "Restriction enzyme cuts gene at specific sites / leaves sticky ends",
              "Same restriction enzyme cuts plasmid (complementary sticky ends)",
              "Gene inserted into plasmid; sticky ends anneal / base pair",
              "DNA ligase seals joins (recombinant plasmid formed)",
              "Recombinant plasmid introduced into bacterium (transformation)",
            ],
            commonError:
              "Saying restriction enzymes 'join' DNA — restriction enzymes CUT; it is DNA ligase that joins.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "core",
            hints: [
              "What enzyme cuts the DNA? What does it leave behind?",
              "Why must the plasmid be cut with the SAME restriction enzyme as the donor DNA?",
              "What enzyme seals the joins?",
              "What is the final step called: how does the plasmid get into the bacterium?",
            ],
          },
          {
            id: "bio-ecology-bq4-03",
            question:
              "Evaluate the use of genetically modified organisms (GMOs) in agriculture. Consider both potential benefits and ethical concerns. [6]",
            marks: 6,
            modelAnswer:
              "Benefits of GMOs in agriculture:\n" +
              "1. Increased crop yields — pest-resistant GM crops (e.g., Bt cotton) reduce crop losses.\n" +
              "2. Herbicide tolerance — herbicide-resistant crops allow farmers to spray fields to remove weeds without damaging the crop.\n" +
              "3. Nutritional improvement — GM crops can be engineered with additional nutrients (e.g., Golden Rice with beta-carotene).\n" +
              "4. Drought/salt tolerance — enables crops to grow in marginal environments.\n\n" +
              "Ethical concerns:\n" +
              "1. Environmental risks — herbicide-resistance genes may spread to wild plants, creating 'superweeds'. GM crops may harm non-target insects.\n" +
              "2. Biodiversity loss — monocultures of GM crops reduce biodiversity.\n" +
              "3. Corporate control — GM seeds are often patented; farmers may become dependent on large corporations.\n" +
              "4. Unknown health effects — long-term impacts of consuming GM food are not fully known.",
            markScheme: [
              "Benefit 1: pest/disease resistance; increased yield",
              "Benefit 2: herbicide tolerance; nutritional improvement; drought tolerance (any one more)",
              "Ethical concern 1: gene spread to wild plants / superweeds / harm to non-target organisms",
              "Ethical concern 2: biodiversity loss / corporate control / health unknowns / cultural objections",
              "Answer addresses BOTH benefits AND concerns (evaluate = balanced)",
              "At least 2 benefits and 2 concerns named and briefly explained",
            ],
            commonError:
              "Only listing bullet points without explanation — 'evaluate' requires weighing up both sides, not just naming them.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "challenge",
            hints: [
              "List benefits: think about farmers, consumers, and food security.",
              "List concerns: think about environment, biodiversity, health, economics, ethics.",
              "Evaluate means give both sides AND ideally a balanced conclusion.",
              "What is the difference between the gene spreading to wild plants vs. just growing in a farm?",
            ],
          },
          {
            id: "bio-ecology-bq4-04",
            question:
              "Describe what is meant by 'selective breeding' (artificial selection). Explain, using ONE named example, how selective breeding has been used to improve a food crop or domesticated animal. [4]",
            marks: 4,
            modelAnswer:
              "Selective breeding (artificial selection): humans choose organisms with desirable characteristics as parents for the next generation. " +
              "Only individuals with the desired trait(s) are allowed to breed. " +
              "Over many generations, the frequency of the desirable trait increases in the population.\n\n" +
              "Example — wheat: wild wheat produced small seeds. Farmers selected plants producing the largest seeds and used them as the parents for the next generation. " +
              "Over many generations, this produced modern wheat varieties with large seeds (high grain yield), short straw (easier harvesting), and disease resistance.",
            markScheme: [
              "Humans select organisms with desired characteristics to breed",
              "Only selected individuals allowed to breed / others excluded",
              "Repeated over many generations",
              "Named example: valid crop or animal with specific trait described (wheat — large seed; cattle — high milk yield)",
            ],
            commonError:
              "Confusing selective breeding with genetic engineering — in selective breeding, no genes are directly manipulated; natural reproduction is allowed between chosen parents.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bq4-05",
            question:
              "A conservation organisation uses a seed bank to conserve endangered plant species.\n\n" +
              "(a) Describe how a seed bank conserves plant biodiversity. [2]\n" +
              "(b) State ONE advantage and ONE disadvantage of seed banks compared to in situ conservation (nature reserves). [2]\n" +
              "(c) Explain why seeds in a seed bank are stored at very low temperatures and low humidity. [2]",
            marks: 6,
            modelAnswer:
              "(a) Seeds from endangered plant species are collected, cleaned, dried, and stored under controlled conditions (low temperature and low humidity). " +
              "Seeds remain viable (alive and able to germinate) for many years — sometimes centuries — preserving the genetic diversity of the species.\n\n" +
              "(b) Advantage: seed banks can store thousands of species in a small space; seeds are protected from natural disasters or climate change that could destroy wild populations. " +
              "Disadvantage: seed banks do not preserve ecological interactions of species in their natural environment; some seeds are not suitable for long-term storage; maintaining seed banks is costly.\n\n" +
              "(c) Low temperature slows the metabolic rate of seeds, reducing respiration and preventing deterioration. " +
              "Low humidity prevents germination and reduces fungal/bacterial growth, which could destroy seeds.",
            markScheme: [
              "(a) Seeds collected, dried, stored under controlled conditions",
              "(a) Maintains viable seeds / preserves genetic diversity of endangered species",
              "(b) Advantage: stores many species in small space / protected from environmental disasters",
              "(b) Disadvantage: no ecological interactions preserved / recalcitrant seeds unsuitable / costly",
              "(c) Low temperature: slows metabolism / respiration / prevents deterioration",
              "(c) Low humidity: prevents germination / prevents fungal/bacterial growth",
            ],
            commonError:
              "Saying seeds are frozen to 'kill' them — seeds are stored alive; freezing slows metabolic processes to preserve viability.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "challenge",
            hints: [
              "For (a): what problem are seed banks solving? What would happen without them?",
              "For (b): compare seed banks to nature reserves — what can a nature reserve offer that a seed bank cannot?",
              "For (c): what does low temperature do to chemical reactions? What does moisture do to seeds?",
            ],
          },
          {
            id: "bio-ecology-bq4-06",
            question:
              "Describe the role of fungi in decomposition and explain why this process is important for ecosystems. [4]",
            marks: 4,
            modelAnswer:
              "Fungi act as decomposers (saprotrophs). They secrete extracellular enzymes (proteases, carbohydrases, lipases) onto dead organic matter — the enzymes digest the organic molecules outside the fungal cells. " +
              "The soluble products (amino acids, glucose, fatty acids) are then absorbed into the fungal cells.\n\n" +
              "Importance for ecosystems:\n" +
              "1. Nutrient recycling — decomposition releases inorganic nutrients (nitrate, phosphate, mineral ions) back into the soil, making them available for plant uptake.\n" +
              "2. Carbon cycling — fungi respire, releasing CO₂ back into the atmosphere for use in photosynthesis.\n" +
              "3. Without decomposers, nutrients would remain locked in dead organic matter and primary production would eventually cease.",
            markScheme: [
              "Fungi secrete extracellular enzymes onto dead organic matter",
              "Enzymes digest organic molecules; soluble products absorbed into fungal cells",
              "Releases inorganic nutrients (nitrate / phosphate / minerals) into soil for plant uptake",
              "Returns CO₂ to atmosphere (carbon cycling) / completes nutrient cycles",
            ],
            commonError:
              "Describing fungi as ingesting food like animals — fungi digest externally (extracellular digestion) and then absorb; they do not engulf food.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "core",
            hints: [
              "How do fungi get nutrients from dead matter? Do they ingest it or digest externally?",
              "What nutrients are released when proteins and other organic compounds are broken down?",
              "Where do these nutrients go after decomposition?",
            ],
          },
          {
            id: "bio-ecology-bq4-07",
            question:
              "Explain what is meant by a 'biological indicator' and give ONE example showing how biotic indicators can be used to assess water quality in a river. [3]",
            marks: 3,
            modelAnswer:
              "A biological indicator (indicator species) is an organism whose presence, absence, or abundance gives information about the quality of the environment, particularly the level of pollution.\n\n" +
              "Example in water quality assessment: the presence of mayfly nymphs (Ephemeroptera) indicates clean, well-oxygenated water, because these organisms cannot tolerate low dissolved oxygen. " +
              "Conversely, the presence of Tubifex worms indicates highly polluted, deoxygenated water, because these organisms can tolerate low-oxygen conditions. " +
              "By surveying which species are present in different sections of a river, scientists can map pollution levels without chemical testing.",
            markScheme: [
              "Indicator species: organism whose presence/absence indicates environmental quality / pollution level",
              "Example: named organism correctly linked to clean or polluted water",
              "Explanation of why presence/absence indicates quality (e.g., mayfly nymphs need high O₂; Tubifex tolerates low O₂)",
            ],
            commonError:
              "Giving a pollution source (e.g., fertiliser) as an indicator species — an indicator species is a LIVING ORGANISM, not a chemical.",
            guideRef: "Human Impact on the Environment",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bq4-08",
            question:
              "A scientist studies a grassland ecosystem over 10 years and records a significant decrease in the number of bee species. Suggest THREE possible causes of this decline and explain the potential ecological consequences. [6]",
            marks: 6,
            modelAnswer:
              "Possible causes (any three):\n" +
              "1. Pesticide use — insecticides (especially neonicotinoids) directly harm bees; herbicides kill wildflowers, reducing pollen sources.\n" +
              "2. Habitat loss — conversion of grassland to arable farmland removes nesting sites and wildflower food sources.\n" +
              "3. Disease and parasites — the Varroa mite and associated viruses have devastated honeybee populations.\n" +
              "4. Climate change — altered flowering times mean bees may emerge when flowers are not yet in bloom (phenological mismatch).\n\n" +
              "Ecological consequences:\n" +
              "Bees are major pollinators. A decline would reduce pollination of wildflowers and agricultural crops, leading to reduced seed production. " +
              "This reduces plant diversity, which in turn reduces food and habitat for herbivores, and then for higher trophic levels — a cascade effect throughout the food web. " +
              "Many human food crops (e.g., apples, almonds) also depend on bee pollination, threatening food security.",
            markScheme: [
              "Cause 1: pesticide use / insecticides / herbicide killing flowers (1 mark)",
              "Cause 2: habitat loss / wildflower loss (1 mark)",
              "Cause 3: disease/parasites OR climate change OR invasive species (1 mark)",
              "Consequence: reduced pollination of plants / crops (1 mark)",
              "Consequence: reduced plant diversity / food web disruption / threat to food security (1+1 marks)",
            ],
            commonError:
              "Only listing causes without linking them to ecological consequences — the question explicitly asks for consequences.",
            guideRef: "Human Impact on the Environment",
            difficulty: "challenge",
            hints: [
              "What are bees used for in an ecosystem? (Think about reproduction in plants.)",
              "If bees decline, what happens to plants that rely on bees for pollination?",
              "If plant diversity falls, what happens to herbivores? And then to predators?",
              "For causes: think about human activities AND natural factors.",
            ],
          },
          {
            id: "bio-ecology-bq4-09",
            question:
              "Explain the term 'bioaccumulation' and describe, using DDT as an example, how it can affect organisms at the top of a food chain. [4]",
            marks: 4,
            modelAnswer:
              "Bioaccumulation (biomagnification): the process by which a substance accumulates in increasing concentrations as it passes up through trophic levels of a food chain. " +
              "This occurs because the substance is not broken down or excreted, so it builds up in body tissues.\n\n" +
              "DDT example: DDT (an insecticide) was sprayed on agricultural land. " +
              "Producers absorbed small amounts. Primary consumers (e.g., fish) accumulated DDT from eating many producers. " +
              "Secondary consumers (e.g., larger fish) accumulated more DDT by eating many primary consumers. " +
              "Top predators (e.g., ospreys, eagles) accumulated the highest concentrations. " +
              "High DDT concentrations in raptors caused eggshell thinning, reducing reproductive success and causing population decline.",
            markScheme: [
              "Bioaccumulation: substance accumulates in increasing concentration at each trophic level",
              "Not broken down/excreted; builds up in body tissues",
              "DDT: enters at producer level; concentrations increase at each trophic level",
              "Top predators have highest concentrations / specific harm described (e.g., eggshell thinning in birds of prey)",
            ],
            commonError:
              "Confusing bioaccumulation with pollution — bioaccumulation specifically refers to increasing concentration through food chains, not just presence in the environment.",
            guideRef: "Human Impact on the Environment",
            difficulty: "core",
            hints: [
              "Why does the concentration of DDT increase as you go up the food chain?",
              "A hawk eats many fish, each of which has eaten many invertebrates — how does this magnify the DDT level?",
              "What specific problem did high DDT levels cause in birds of prey?",
            ],
          },
          {
            id: "bio-ecology-bq4-10",
            question:
              "A population of field mice in a meadow has the following data collected over three years:\n\n" +
              "Year 1: population 240, birth rate 80/yr, death rate 50/yr\n" +
              "Year 2: population 270, birth rate 70/yr, death rate 60/yr\n" +
              "Year 3: population 280, birth rate 60/yr, death rate 58/yr\n\n" +
              "(a) Calculate the net change in population size in Year 1. [1]\n" +
              "(b) Describe the trend in population growth rate over the three years. [2]\n" +
              "(c) Suggest TWO biotic factors that could limit the field mouse population from growing further. [2]",
            marks: 5,
            modelAnswer:
              "(a) Net change = births − deaths = 80 − 50 = +30 mice.\n\n" +
              "(b) The population is still growing each year (net growth positive), but the rate of growth is slowing — the net increase in Year 1 is 30, Year 2 is 10, Year 3 is 2. " +
              "The gap between birth rate and death rate is narrowing, suggesting the population is approaching a maximum (carrying capacity).\n\n" +
              "(c) Any two biotic factors: predation (e.g., by foxes, owls); competition for food (grass, seeds) with other herbivores or intraspecific competition; disease / parasites; competition for nesting sites.",
            markScheme: [
              "(a) 30 mice (net increase) / births − deaths = 30",
              "(b) Population still growing but rate of growth decreasing each year",
              "(b) Approaching carrying capacity / birth rate and death rate converging",
              "(c) Biotic factor 1: predation / named predator (1 mark)",
              "(c) Biotic factor 2: competition for food or nesting sites / disease / parasites (1 mark)",
            ],
            commonError:
              "Giving abiotic factors (drought, temperature) as biotic factors — biotic means living factors: predation, competition, disease, parasites.",
            guideRef: "Ecosystem Vocabulary",
            difficulty: "challenge",
            hints: [
              "For (a): net change = births − deaths. Simple subtraction.",
              "For (b): calculate net change for each year (Year 1: 30; Year 2: 10; Year 3: 2). What is the trend?",
              "Biotic = living. What living things could slow the mouse population growing further?",
              "Think predator, competitor, parasite/disease.",
            ],
            solutions: [
              {
                label: "Net population changes",
                steps: [
                  "Year 1: births − deaths = 80 − 50 = +30",
                  "Year 2: births − deaths = 70 − 60 = +10",
                  "Year 3: births − deaths = 60 − 58 = +2",
                  "Trend: growth rate is declining each year (30 → 10 → 2); population approaching carrying capacity",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
