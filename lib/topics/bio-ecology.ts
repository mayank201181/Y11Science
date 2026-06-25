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
  questionBank: {
    mcqPapers: [
      {
        id: "bio-ecology-bank-mcq-1",
        title: "MCQ Paper 1 — Ecosystems & Energy",
        description: "Covers ecosystem vocabulary, food chains/webs, trophic levels and energy pyramids.",
        questions: [
          {
            id: "bio-ecology-bank-mcq1-q01",
            question: "Which term describes ALL the species living and interacting in one area?",
            options: ["Population", "Habitat", "Community", "Ecosystem"],
            answerIndex: 2,
            explanation:
              "A community is all the populations of different species in one area. A population is one species; a habitat is the place; an ecosystem adds the abiotic environment.",
            guideRef: "Ecosystem Vocabulary",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bank-mcq1-q02",
            question: "Which organisms are the producers in most terrestrial ecosystems?",
            options: ["Herbivores", "Bacteria", "Green plants", "Fungi"],
            answerIndex: 2,
            explanation:
              "Green plants (and algae) are producers because they photosynthesise, converting light energy into chemical energy. Herbivores are primary consumers; bacteria and fungi are typically decomposers.",
            guideRef: "Food Chains, Food Webs & Trophic Levels",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bank-mcq1-q03",
            question: "A food chain is: oak tree → caterpillar → blue tit → sparrowhawk. Which is the secondary consumer?",
            options: ["Oak tree", "Caterpillar", "Blue tit", "Sparrowhawk"],
            answerIndex: 2,
            explanation:
              "Oak tree = producer (TL1); caterpillar = primary consumer (TL2); blue tit = secondary consumer (TL3); sparrowhawk = tertiary consumer (TL4).",
            guideRef: "Food Chains, Food Webs & Trophic Levels",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bank-mcq1-q04",
            question:
              "Producers in an ecosystem fix 80 000 kJ. Using 10% efficiency, how much energy reaches tertiary consumers?",
            options: ["800 kJ", "80 kJ", "8 000 kJ", "8 kJ"],
            answerIndex: 1,
            explanation:
              "TL2: 80 000 × 0.1 = 8 000 kJ. TL3: 8 000 × 0.1 = 800 kJ. TL4 (tertiary): 800 × 0.1 = 80 kJ.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "core",
            hints: [
              "Count the number of transfer steps from producer to tertiary consumer.",
              "Producer → primary → secondary → tertiary = three steps.",
              "Apply 10% (×0.1) three times: 80 000 × 0.1 × 0.1 × 0.1.",
            ],
          },
          {
            id: "bio-ecology-bank-mcq1-q05",
            question:
              "Which statement about pyramids of biomass is correct?",
            options: [
              "They are always a true pyramid shape.",
              "They can be inverted in aquatic ecosystems.",
              "They measure energy flow per unit time.",
              "They are always more accurate than pyramids of numbers.",
            ],
            answerIndex: 1,
            explanation:
              "Biomass pyramids can be inverted in aquatic systems where phytoplankton (TL1) have a very high turnover rate — the standing crop at any moment can be less than the mass of zooplankton consuming them. Only pyramids of energy are always a true pyramid.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "core",
            hints: [
              "Which type of pyramid is ALWAYS a true pyramid?",
              "Think about what 'standing crop' biomass means versus energy flow.",
            ],
          },
          {
            id: "bio-ecology-bank-mcq1-q06",
            question:
              "A student draws a pyramid of numbers for a forest ecosystem where 1 oak tree supports 5 000 caterpillars, which support 200 blue tits, which support 2 sparrowhawks. Which description is correct?",
            options: [
              "A true pyramid with the largest bar at the bottom",
              "An inverted pyramid with the largest bar at the top",
              "An irregular shape with a very narrow base",
              "An inverted pyramid because decomposers are excluded",
            ],
            answerIndex: 2,
            explanation:
              "One oak tree (TL1) is a single individual supporting thousands of caterpillars. The pyramid of numbers has a very narrow base (TL1 = 1) expanding outwards at TL2 (5 000 caterpillars) — an irregular shape, not a true pyramid. This is a classic exception in pyramids of numbers.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "core",
            hints: [
              "Count the actual number of individuals at TL1 — is it larger or smaller than TL2?",
              "Pyramids of numbers represent count of individuals, not energy or mass.",
            ],
          },
        ],
      },
      {
        id: "bio-ecology-bank-mcq-2",
        title: "MCQ Paper 2 — Cycles, Human Impact & Biotechnology",
        description: "Covers carbon and nitrogen cycles, human impact, conservation, and biotechnology/GM.",
        questions: [
          {
            id: "bio-ecology-bank-mcq2-q01",
            question: "Which process converts nitrates back into atmospheric nitrogen gas?",
            options: ["Nitrification", "Nitrogen fixation", "Denitrification", "Ammonification"],
            answerIndex: 2,
            explanation:
              "Denitrification is carried out by denitrifying bacteria in anaerobic (waterlogged) soils; they convert nitrate (NO₃⁻) → N₂, returning nitrogen to the atmosphere. Nitrification converts ammonium → nitrate. Nitrogen fixation does the reverse (N₂ → NH₄⁺). Ammonification converts organic N → ammonium.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "core",
            hints: [
              "The prefix 'de-' means removal or reversal.",
              "Which process REMOVES nitrogen from the soil and puts it into the air?",
            ],
          },
          {
            id: "bio-ecology-bank-mcq2-q02",
            question: "How does deforestation affect atmospheric CO₂ concentration?",
            options: [
              "Decreases it, because fewer trees are respiring",
              "Increases it, because burning trees releases CO₂ and fewer trees photosynthesise",
              "Has no effect, because soil bacteria compensate",
              "Decreases it, because less decomposition occurs",
            ],
            answerIndex: 1,
            explanation:
              "Burning trees releases stored carbon as CO₂. Fewer trees means less photosynthesis removing CO₂ from the atmosphere. Both effects raise CO₂ concentration.",
            guideRef: "Human Impact on the Environment",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bank-mcq2-q03",
            question:
              "Which PAIR of enzymes is used to create a recombinant plasmid during insulin production?",
            options: [
              "Amylase and lipase",
              "Restriction enzyme and DNA ligase",
              "DNA polymerase and restriction enzyme",
              "Ligase and RNA polymerase",
            ],
            answerIndex: 1,
            explanation:
              "Restriction enzymes cut the DNA at specific sequences, producing sticky ends. DNA ligase joins (seals) the insulin gene into the opened plasmid, creating the recombinant plasmid.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "core",
            hints: [
              "One enzyme cuts; one enzyme joins. Which is which?",
              "Ligase is named for its function: ligation = joining.",
            ],
          },
          {
            id: "bio-ecology-bank-mcq2-q04",
            question:
              "During eutrophication, what is the DIRECT cause of the algal bloom?",
            options: [
              "Increased water temperature from climate change",
              "Excess nitrates and phosphates stimulating algal growth",
              "Sewage providing organic food for algae to consume",
              "Reduction of fish that normally graze on algae",
            ],
            answerIndex: 1,
            explanation:
              "Excess mineral ions (nitrates and phosphates) from agricultural run-off directly stimulate the growth of algae and cyanobacteria. While temperature and grazing can influence algal populations, the direct trigger in eutrophication is the nutrient enrichment.",
            guideRef: "Human Impact on the Environment",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bank-mcq2-q05",
            question:
              "A GM crop is modified to produce a bacterial toxin (Bt toxin) that kills insect pests. Which is a potential DISADVANTAGE of this modification?",
            options: [
              "The crop will require more water to grow",
              "Insects that are not pest species may also be harmed (non-target organisms)",
              "The crop will produce less yield than a conventional variety",
              "Farmers will need to apply more pesticide to protect the crop",
            ],
            answerIndex: 1,
            explanation:
              "If the Bt toxin affects non-target insects (e.g. pollinators), this could reduce biodiversity and harm ecosystems. The other options are incorrect: Bt crops generally require LESS pesticide and often have equivalent or improved yields.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "core",
            hints: [
              "Think about other insects that visit crops — not all are pests.",
              "What would happen to the food web if populations of non-pest insects declined?",
            ],
          },
          {
            id: "bio-ecology-bank-mcq2-q06",
            question:
              "The equation for alcoholic fermentation by yeast is:\nC₆H₁₂O₆ → 2C₂H₅OH + 2CO₂\n\nWhich condition is required for this process to occur?",
            options: [
              "Presence of oxygen (aerobic conditions)",
              "Absence of oxygen (anaerobic conditions)",
              "Temperature above 60°C to activate yeast enzymes",
              "Presence of mineral ions as a substrate",
            ],
            answerIndex: 1,
            explanation:
              "Alcoholic fermentation is an ANAEROBIC process — yeast ferments glucose to ethanol and CO₂ in the absence of oxygen. Above about 45°C yeast enzymes denature. Mineral ions are not the substrate; glucose is.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "warmup",
          },
        ],
      },
    ],

    qaPapers: [
      {
        id: "bio-ecology-bank-qa-1",
        title: "Structured Questions Paper 1 — Ecosystems & Energy",
        description: "Ecosystem vocabulary, food webs, energy calculations, and carbon/nitrogen cycles.",
        questions: [
          {
            id: "bio-ecology-bank-qa1-q01",
            question:
              "Fig. 1 shows a food web in a woodland ecosystem:\n\n" +
              "oak leaves → caterpillar → blue tit → sparrowhawk\n" +
              "oak leaves → aphid → blue tit\n" +
              "oak leaves → aphid → lacewing → blue tit\n\n" +
              "(a) Name the producer in this food web. [1]\n" +
              "(b) Name one secondary consumer. [1]\n" +
              "(c) Suggest what might happen to the sparrowhawk population if all blue tits were removed. Give a reason. [2]\n" +
              "(d) Explain why the sparrowhawk population is small compared to the oak tree population. [3]",
            marks: 7,
            modelAnswer:
              "(a) Oak leaves (oak tree).\n\n" +
              "(b) Blue tit (also accept lacewing — it eats aphids which are primary consumers).\n\n" +
              "(c) The sparrowhawk population would decrease/fall. Blue tits are the only food source for sparrowhawks in this web, so removing them would remove the sparrowhawk's food supply, causing sparrowhawks to starve/die.\n\n" +
              "(d) Energy is lost at each trophic level — through respiration (heat), egestion, and movement. By the time energy reaches the sparrowhawk (TL4), approximately only 0.1% of the energy originally fixed by the oak tree remains. There is insufficient energy to support a large sparrowhawk population.",
            markScheme: [
              "(a) Oak leaves / oak tree",
              "(b) Blue tit OR lacewing (with correct justification)",
              "(c) Sparrowhawk numbers decrease",
              "(c) Because blue tit is only prey / no alternative food source / sparrowhawks starve",
              "(d) Energy is lost at each trophic level",
              "(d) Lost as heat (respiration) / egestion / movement (any two routes stated)",
              "(d) Very little energy remains at TL4 / only ~0.1% of original energy / insufficient to support large numbers",
            ],
            commonError:
              "Students describe sparrowhawks eating oak leaves when tracing the food web — always follow the arrows.",
            guideRef: "Food Chains, Food Webs & Trophic Levels",
            difficulty: "core",
            hints: [
              "For (c): trace what the sparrowhawk eats — what happens if that is gone?",
              "For (d): calculate roughly how much energy passes through 3 transfers at 10% each.",
            ],
            strategy: "Read arrows carefully; trace feeding relationships step by step.",
          },
          {
            id: "bio-ecology-bank-qa1-q02",
            question:
              "The table shows the energy content at each trophic level in a lake ecosystem:\n\n" +
              "TL1 (phytoplankton): 500 000 kJ/m²/yr\n" +
              "TL2 (zooplankton): 45 000 kJ/m²/yr\n" +
              "TL3 (small fish): 4 000 kJ/m²/yr\n" +
              "TL4 (large fish): 320 kJ/m²/yr\n\n" +
              "(a) Calculate the percentage efficiency of energy transfer from TL1 to TL2. Show your working. [2]\n" +
              "(b) Suggest two reasons why the efficiency is less than 100%. [2]\n" +
              "(c) A student claims: 'this ecosystem has an inverted pyramid of biomass.' Explain why this is possible even though the pyramid of energy is a true pyramid. [3]",
            marks: 7,
            modelAnswer:
              "(a) Efficiency = (energy at TL2 / energy at TL1) × 100\n" +
              "= (45 000 / 500 000) × 100 = 9% (accept 9.0%).\n\n" +
              "(b) Any two from: energy is lost as heat through respiration; some material is not digested and is egested in faeces; energy is lost through excretion; energy is used for movement.\n\n" +
              "(c) The pyramid of biomass shows standing crop (biomass present at one moment). Phytoplankton reproduce very rapidly (high turnover rate), so although they produce a large total amount of biomass over the year, at any snapshot in time their standing biomass may be less than the zooplankton consuming them. The pyramid of energy measures total energy flow over time, which is always decreasing — so it is always a true pyramid regardless of turnover rate.",
            markScheme: [
              "(a) Correct formula: (TL2 / TL1) × 100",
              "(a) Answer: 9% (allow 8.9%–9.1%; penalise missing %)",
              "(b) Any TWO: heat from respiration; egestion; excretion; movement/growth",
              "(c) Biomass pyramid = standing crop at one moment in time",
              "(c) Phytoplankton have very high turnover/reproduction rate",
              "(c) Their standing biomass at any moment can be less than zooplankton that consume them",
              "(c) Energy pyramid measures flow over time — always true pyramid because energy always lost",
            ],
            commonError:
              "Confusing percentage efficiency with percentage energy lost — if 9% is transferred, 91% is lost, not 9%.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "challenge",
            hints: [
              "Efficiency = (output / input) × 100 — make sure you divide TL2 by TL1, not the other way.",
              "For part (b), name specific routes: what happens to energy that is eaten but not digested?",
              "For part (c), think about what 'standing crop' means versus total production over a year.",
              "Phytoplankton cell division times can be as short as a few hours — how does this affect their numbers at any given moment?",
            ],
            strategy: "Show formula, substitution, and answer with units. Distinguish standing crop from production rate.",
            solutions: [
              {
                label: "Efficiency calculation",
                steps: [
                  "Efficiency (%) = (energy transferred to next level / energy at current level) × 100",
                  "= (45 000 / 500 000) × 100",
                  "= 0.09 × 100",
                  "= 9%",
                ],
              },
            ],
          },
          {
            id: "bio-ecology-bank-qa1-q03",
            question:
              "Describe the role of decomposers in both the carbon cycle and the nitrogen cycle. [5]",
            marks: 5,
            modelAnswer:
              "In the carbon cycle, decomposers (bacteria and fungi) break down dead organic matter and excretory products through the process of decomposition. " +
              "They respire aerobically, releasing CO₂ back into the atmosphere. " +
              "This returns carbon from dead organisms to the atmosphere as carbon dioxide.\n\n" +
              "In the nitrogen cycle, decomposers break down proteins and other nitrogen-containing organic compounds in dead organisms and excretory products into ammonium ions (NH₄⁺). " +
              "This process is called ammonification (or saprotrophic nutrition). " +
              "The ammonium ions are then available for nitrifying bacteria to convert into nitrate, which plants can absorb.",
            markScheme: [
              "Carbon cycle: decomposers break down dead organic matter",
              "Carbon cycle: release CO₂ through respiration / decomposition",
              "Nitrogen cycle: decomposers break down proteins / nitrogen-containing compounds in dead organisms",
              "Nitrogen cycle: produce / release ammonium ions (NH₄⁺) / ammonification",
              "Nitrogen cycle: ammonium ions can be converted to nitrate by nitrifying bacteria for plant uptake",
            ],
            commonError:
              "Students often confuse decomposers with nitrifying bacteria — decomposers produce ammonium; nitrifying bacteria then convert ammonium to nitrate.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "core",
            hints: [
              "In the carbon cycle, what gas do decomposers release when they respire?",
              "In the nitrogen cycle, proteins contain nitrogen — what simpler molecule is produced when decomposers break proteins down?",
            ],
            strategy: "Deal with each cycle separately; name the process and the product.",
          },
          {
            id: "bio-ecology-bank-qa1-q04",
            question:
              "A scientist claims: 'If humans ate more plant-based food and less meat, the same area of farmland could feed more people.' " +
              "Use your knowledge of energy transfer in food chains to evaluate this claim. [4]",
            marks: 4,
            modelAnswer:
              "The claim is correct. When humans eat meat, they are at a higher trophic level (TL3 or TL4 in some cases) compared with eating plants directly (TL2). " +
              "At each trophic level, approximately 90% of energy is lost (as heat through respiration, egestion, and movement). " +
              "This means that producing 1 kg of beef requires far more plant material (and farmland) than producing 1 kg of plant food for direct human consumption. " +
              "By eating lower on the food chain, humans capture more of the energy originally fixed by producers, meaning the same area of land can support more people.",
            markScheme: [
              "Eating meat = higher trophic level than eating plants",
              "~90% of energy is lost at each trophic level (respiration/egestion/heat)",
              "More energy/biomass available to humans when eating plants directly (fewer transfers)",
              "Therefore the same area of land can feed more people on a plant-based diet",
            ],
            commonError:
              "Vague answers stating 'meat wastes energy' without quantifying or explaining which trophic levels are involved.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "challenge",
            hints: [
              "Draw a simple food chain: plant → cow → human. At which trophic level is each organism?",
              "What happens at each arrow in the chain?",
              "If 10% is transferred at each step, how much energy reaches a human eating a plant versus eating a cow that ate a plant?",
            ],
            strategy: "Quantify the argument using the 10% rule; compare trophic levels explicitly.",
          },
        ],
      },
      {
        id: "bio-ecology-bank-qa-2",
        title: "Structured Questions Paper 2 — Human Impact & Biotechnology",
        description: "Covers eutrophication, greenhouse effect, conservation, and genetic modification.",
        questions: [
          {
            id: "bio-ecology-bank-qa2-q01",
            question:
              "A river receives run-off from a nearby farm that uses large amounts of nitrogen-based fertiliser.\n\n" +
              "(a) Describe and explain the sequence of events that leads to fish death in the river. [5]\n" +
              "(b) Suggest TWO ways farmers could reduce fertiliser run-off. [2]",
            marks: 7,
            modelAnswer:
              "(a) Excess nitrates from fertiliser are washed by rain into the river (leaching/run-off). " +
              "The nitrates cause rapid growth of algae on the water surface (algal bloom). " +
              "The algal bloom prevents light from penetrating to submerged aquatic plants, which can no longer photosynthesise and die. " +
              "Bacteria decompose the dead plants and reproduce rapidly, consuming dissolved oxygen through aerobic respiration. " +
              "Dissolved oxygen levels fall below the level needed to sustain fish and other aerobic organisms, which suffocate and die.\n\n" +
              "(b) Any two from: apply fertiliser at times of low rainfall / when rain is not forecast; use slow-release fertilisers; apply only the recommended amount; create buffer strips of vegetation along riverbanks to absorb run-off; test soil before applying fertiliser to avoid over-application.",
            markScheme: [
              "(a) Nitrate/fertiliser run-off / leaching into river",
              "(a) Algal bloom on surface / rapid algal growth",
              "(a) Light blocked from reaching submerged plants",
              "(a) Submerged plants die",
              "(a) Bacteria decompose plants / bacteria multiply / bacteria use O2 for respiration",
              "(a) Dissolved O2 decreases / deoxygenation",
              "(a) Fish die / suffocate",
              "(b) Any TWO suitable strategies from model answer (1 mark each)",
            ],
            commonError:
              "Saying algae directly kill fish — the mechanism is via oxygen depletion by decomposing bacteria, not direct toxicity from algae.",
            guideRef: "Human Impact on the Environment",
            difficulty: "core",
            hints: [
              "Focus on the oxygen level — what does it do and why?",
              "Which organisms are responsible for the oxygen depletion?",
              "For (b): think about timing, quantity, and preventing water contact.",
            ],
            strategy: "Use SEQUENCE language: first → then → as a result → finally.",
          },
          {
            id: "bio-ecology-bank-qa2-q02",
            question:
              "Describe how burning fossil fuels contributes to climate change. Include the role of greenhouse gases in your answer. [5]",
            marks: 5,
            modelAnswer:
              "Burning fossil fuels releases carbon dioxide (and other gases such as methane) into the atmosphere. " +
              "CO₂ is a greenhouse gas: it absorbs outgoing infrared radiation (long-wave radiation) emitted by the Earth's surface, and re-radiates it in all directions, including back towards Earth. " +
              "This warms the Earth's surface — the natural greenhouse effect. " +
              "Human activities have increased atmospheric CO₂ concentration significantly above pre-industrial levels, enhancing the greenhouse effect. " +
              "The enhanced greenhouse effect causes the average global temperature to rise (global warming). " +
              "Consequences of this include melting ice caps, rising sea levels, more frequent extreme weather events, and shifts in species distributions and habitats.",
            markScheme: [
              "Burning fossil fuels releases CO₂ (and/or methane) into atmosphere",
              "Greenhouse gases absorb outgoing infrared/heat radiation from Earth",
              "Re-radiate it back towards Earth / in all directions",
              "Enhanced greenhouse effect / greater warming than natural level",
              "Average global temperature increases (global warming)",
              "Any ONE consequence: sea level rise; extreme weather; species distribution changes; ice caps melting",
            ],
            commonError:
              "Saying greenhouse gases 'trap the Sun's rays coming in' — they actually absorb OUTGOING infrared radiation from Earth's surface, not incoming solar radiation.",
            guideRef: "Human Impact on the Environment",
            difficulty: "core",
            hints: [
              "The key is the direction of radiation — is CO₂ affecting incoming or outgoing radiation?",
              "What is the difference between the natural greenhouse effect and the enhanced greenhouse effect?",
            ],
            strategy: "Flow: fuel burned → CO₂ released → IR absorbed → heat retained → temperature rises → consequences.",
          },
          {
            id: "bio-ecology-bank-qa2-q03",
            question:
              "Evaluate the use of GM crops that are resistant to herbicides. Include both potential benefits and concerns in your answer. [6]",
            marks: 6,
            modelAnswer:
              "Benefits of herbicide-resistant GM crops: Farmers can spray fields with broad-spectrum herbicides that kill all weeds but not the GM crop. " +
              "This reduces competition from weeds, leading to higher crop yields. " +
              "Weed control may reduce the need for repeated mechanical tillage, decreasing fuel use and soil erosion. " +
              "Potentially reduces the total amount of herbicide needed as it can be applied more efficiently.\n\n" +
              "Concerns: herbicide-resistant genes may transfer to wild related plant species through cross-pollination, creating herbicide-resistant 'superweeds' that are very difficult to control. " +
              "Broad-spectrum herbicide use may eliminate wildflowers and plants that serve as food and habitat for insects (including pollinators) and birds, reducing biodiversity. " +
              "Farmers may become dependent on proprietary GM seeds from large corporations, raising economic and food-security concerns. " +
              "Long-term effects of consuming GM food on human health are not yet fully understood.",
            markScheme: [
              "Benefit: farmers can apply herbicide to kill all weeds without damaging crop",
              "Benefit: increased yield / reduced competition from weeds",
              "Benefit: may reduce total herbicide use / fewer spray applications / less tillage",
              "Concern: herbicide-resistance gene may transfer to wild plants via cross-pollination ('superweeds')",
              "Concern: broad-spectrum herbicide kills wildflowers/reduces plant diversity",
              "Concern: loss of plant diversity reduces food/habitat for insects, birds / reduced biodiversity",
              "Concern: corporate control / dependency of farmers on GM seed companies (ethical/economic)",
              "Concern: unknown long-term effects on human health",
            ],
            commonError:
              "Giving only benefits or only concerns — the question asks you to 'evaluate', which requires both sides.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "challenge",
            hints: [
              "Evaluate = give BOTH advantages AND disadvantages, then reach a conclusion.",
              "Think about effects on: the farmer (economics), the environment (biodiversity), other organisms (insects), and consumers (health).",
              "What happens if herbicide-resistant genes spread to weeds?",
              "Who benefits from GM crop sales — the farmer or the corporation?",
            ],
            strategy: "Structure: benefits paragraph → concerns paragraph → brief overall conclusion.",
          },
          {
            id: "bio-ecology-bank-qa2-q04",
            question:
              "Bacteria can be used to produce useful substances in fermenters.\n\n" +
              "(a) State THREE conditions that are controlled in a fermenter to maximise bacterial growth. [3]\n" +
              "(b) Describe the steps by which the gene for human insulin is inserted into a bacterium. [4]\n" +
              "(c) Suggest ONE advantage of using bacteria to produce insulin rather than extracting it from animal pancreases. [1]",
            marks: 8,
            modelAnswer:
              "(a) Any three from: temperature (kept at optimum for enzymes); pH; oxygen supply (aeration/stirring); nutrient supply (glucose/minerals); sterile conditions (to prevent contamination).\n\n" +
              "(b) The human insulin gene is identified in human DNA and cut out using restriction enzymes, which cut at specific recognition sites, leaving sticky ends. " +
              "A bacterial plasmid is cut open with the same restriction enzyme, producing complementary sticky ends. " +
              "The insulin gene is inserted into the plasmid; complementary sticky ends bind together and DNA ligase seals the joins, forming a recombinant plasmid. " +
              "The recombinant plasmid is introduced into E. coli bacteria (transformation).\n\n" +
              "(c) Any one from: human insulin produced is identical to natural human insulin so less likely to cause immune reactions; animal insulin may not work as effectively in humans; avoids ethical concerns about using animals; can be produced in unlimited quantities from bacterial cultures.",
            markScheme: [
              "(a) Any THREE: temperature; pH; oxygen/aeration/stirring; nutrient supply; sterility",
              "(b) Insulin gene cut from human DNA using restriction enzyme",
              "(b) Plasmid cut with same restriction enzyme (complementary sticky ends)",
              "(b) Insulin gene inserted into plasmid; ligase seals joins (recombinant plasmid formed)",
              "(b) Recombinant plasmid introduced into E. coli / bacterium (transformation)",
              "(c) Human insulin identical to natural / fewer allergic reactions / unlimited supply / avoids animal use (any ONE valid point)",
            ],
            commonError:
              "Saying the insulin gene is copied and pasted — in genetic modification, it is physically cut and joined. Also confusing restriction enzyme (cuts) with ligase (joins).",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "core",
            hints: [
              "For (a): think about what bacteria need to grow and what variables can be controlled.",
              "For (b): the steps are — cut → cut plasmid → insert → join → transform.",
              "Which enzyme cuts and which enzyme joins?",
              "For (c): compare the product (human insulin from bacteria) with pig/cow insulin.",
            ],
            strategy: "Name each enzyme by function; give the steps in order.",
          },
        ],
      },
    ],
  },
};
