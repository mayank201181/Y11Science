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
      heading: "The Carbon, Nitrogen & Water Cycles",
      body:
        "Energy flows *through* an ecosystem and is then lost, but **matter is recycled**. Atoms of carbon and nitrogen, and molecules of water, pass repeatedly between living organisms (the biotic part) and the air, water and soil (the abiotic part). You must know three cycles.\n\n" +
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
        "- **Denitrification**: denitrifying bacteria in waterlogged (anaerobic) soil convert nitrate → N₂, returning nitrogen to the air. This *reduces* soil fertility.\n\n" +
        "**Lightning** can also fix nitrogen — it provides enough energy to combine N₂ and O₂ into oxides of nitrogen, which dissolve in rain and reach the soil as nitrate.\n\n" +
        "Remember the four groups of bacteria: **nitrogen-fixing** (N₂ → ammonium), **nitrifying** (ammonium → nitrate), **denitrifying** (nitrate → N₂), and **decomposers / putrefying** bacteria (dead matter → ammonium). Only nitrogen-fixing and decomposer bacteria *increase* the supply of usable nitrogen to plants; denitrifying bacteria remove it.\n\n" +
        "**The Water Cycle**\n\n" +
        "Water continually cycles between the seas, the air, the land and living organisms:\n\n" +
        "- **Evaporation**: heat from the Sun turns liquid water in oceans, lakes and rivers into water vapour. **Transpiration** from plant leaves adds further water vapour to the air.\n" +
        "- **Condensation**: as moist air rises and cools, water vapour condenses into tiny droplets, forming **clouds**.\n" +
        "- **Precipitation**: droplets join, grow heavy and fall as rain, snow or hail.\n" +
        "- **Run-off and percolation**: water flows over land into rivers (run-off) or soaks down into the soil and rock (percolation), feeding **groundwater** that drains back to the sea.\n\n" +
        "Plants take up soil water through roots; some is used in photosynthesis but most is lost again by transpiration — so plants are an important link in the cycle. This is why clearing forests (deforestation) reduces transpiration and can lower local rainfall.",
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
        {
          caption: "The water cycle: evaporation and transpiration, condensation, precipitation",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Water cycle diagram showing evaporation, transpiration, condensation into clouds, precipitation and run-off back to the sea">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- sea -->
  <rect x="0" y="160" width="180" height="40" fill="#164e63"/>
  <text x="80" y="184" text-anchor="middle" font-size="10" fill="#eef0ff" font-family="sans-serif">Sea / lake</text>
  <!-- land + tree -->
  <rect x="180" y="170" width="140" height="30" fill="#3b2a0a"/>
  <rect x="244" y="150" width="6" height="22" fill="#7c4a12"/>
  <circle cx="247" cy="146" r="14" fill="#166534" stroke="#34d399" stroke-width="1.5"/>
  <text x="247" y="192" text-anchor="middle" font-size="9" fill="#eef0ff" font-family="sans-serif">land</text>
  <!-- cloud -->
  <ellipse cx="160" cy="46" rx="52" ry="20" fill="#475569" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="160" y="50" text-anchor="middle" font-size="10" fill="#eef0ff" font-family="sans-serif">Cloud</text>
  <!-- evaporation arrow -->
  <line x1="70" y1="158" x2="120" y2="64" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#wa)"/>
  <text x="62" y="120" font-size="8" fill="#38bdf8" font-family="sans-serif">evaporation</text>
  <!-- transpiration arrow -->
  <line x1="247" y1="132" x2="200" y2="60" stroke="#34d399" stroke-width="1.5" marker-end="url(#wb)"/>
  <text x="232" y="110" font-size="8" fill="#34d399" font-family="sans-serif">transpiration</text>
  <!-- condensation label -->
  <text x="160" y="20" text-anchor="middle" font-size="8" fill="#cbd5e1" font-family="sans-serif">vapour rises, cools, condenses</text>
  <!-- precipitation -->
  <line x1="140" y1="66" x2="120" y2="150" stroke="#7dd3fc" stroke-width="1" stroke-dasharray="2 3" marker-end="url(#wc)"/>
  <line x1="170" y1="66" x2="180" y2="150" stroke="#7dd3fc" stroke-width="1" stroke-dasharray="2 3" marker-end="url(#wc)"/>
  <text x="120" y="100" font-size="8" fill="#7dd3fc" font-family="sans-serif">precipitation</text>
  <!-- run-off -->
  <line x1="210" y1="172" x2="170" y2="172" stroke="#b7bce0" stroke-width="1.5" marker-end="url(#wd)"/>
  <text x="184" y="166" font-size="8" fill="#b7bce0" font-family="sans-serif">run-off</text>
  <defs>
    <marker id="wa" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#38bdf8"/></marker>
    <marker id="wb" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#34d399"/></marker>
    <marker id="wc" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#7dd3fc"/></marker>
    <marker id="wd" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#b7bce0"/></marker>
  </defs>
</svg>`,
        },
      ],
      keyPoints: [
        "Photosynthesis removes CO₂ from the atmosphere; respiration, combustion and decomposition return it.",
        "Decomposers (bacteria and fungi) release CO₂ by respiring dead organic matter.",
        "Fossil fuels are stores of ancient carbon; combustion releases this rapidly.",
        "Nitrogen cycle bacteria: nitrogen-fixing (N₂ → ammonium), nitrifying (ammonium → nitrate), denitrifying (nitrate → N₂), and decomposers (dead matter → ammonium).",
        "Plants absorb nitrate (NO₃⁻) ions from the soil to make amino acids and proteins.",
        "Water cycle: evaporation + transpiration → condensation (clouds) → precipitation → run-off/percolation back to the sea.",
      ],
      thinkDeeper:
        "Why does waterlogged soil favour denitrification and reduce soil fertility? Think about what anaerobic conditions do to the denitrifying bacteria population.",
      whyItWorks:
        "Matter (carbon, nitrogen) is conserved — it is continually recycled between biotic and abiotic components. " +
        "Energy, by contrast, is not recycled: it enters as sunlight and leaves as heat. " +
        "This is why ecosystems need a continuous energy input but only a finite, recycling supply of nutrients.",
    },

    // ── SECTION 4b: POPULATION SIZE & GROWTH ─────────────────────────────────
    {
      heading: "Population Size & Growth",
      body:
        "A **population** is all the individuals of one species in an area. Its size is set by a balance: it rises when **births + immigration** exceed **deaths + emigration**, and falls when the reverse is true.\n\n" +
        "**Factors that affect population size**\n\n" +
        "- **Food / nutrient supply**: more food allows faster growth and more survival; shortage causes deaths and slows growth.\n" +
        "- **Predation**: predators kill prey, limiting prey numbers; prey numbers in turn limit predator numbers (they oscillate, slightly out of step).\n" +
        "- **Disease**: spreads fastest in dense populations and kills more individuals as the population grows.\n" +
        "- **Competition**: members of the same species (intraspecific) and of different species (interspecific) compete for food, water, light, space and mates. The more crowded the population, the more intense the competition.\n\n" +
        "These factors become more limiting as a population grows larger — they are **density-dependent**. Abiotic factors such as temperature, drought or flood are **density-independent**.\n\n" +
        "**The sigmoid (S-shaped) growth curve**\n\n" +
        "When a few organisms colonise a new area with plentiful resources, the population grows in a characteristic S-shape with three phases:\n\n" +
        "1. **Lag phase**: numbers grow slowly. Organisms are few, and adjusting to the new conditions before reproducing.\n" +
        "2. **Log (exponential) phase**: numbers grow rapidly. Resources are abundant, there is little competition or disease, so the growth rate accelerates.\n" +
        "3. **Stationary phase (plateau)**: growth levels off. The population reaches the **carrying capacity** — the maximum size the environment can support. Limiting factors (food shortage, competition, predation, disease, build-up of waste) now make the **death rate equal the birth rate**.\n\n" +
        "(A real population may then enter a **death phase** if resources run out or toxic waste accumulates, e.g. in a closed culture of microorganisms.)",
      diagrams: [
        {
          caption: "Sigmoid population growth curve: lag, log (exponential) and stationary phases",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sigmoid population growth curve showing lag phase, log exponential phase and stationary phase at carrying capacity">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- axes -->
  <line x1="40" y1="170" x2="300" y2="170" stroke="#b7bce0" stroke-width="1.5"/>
  <line x1="40" y1="170" x2="40" y2="20" stroke="#b7bce0" stroke-width="1.5"/>
  <text x="170" y="192" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif">Time</text>
  <text x="14" y="95" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif" transform="rotate(-90 14 95)">Population size</text>
  <!-- carrying capacity line -->
  <line x1="40" y1="50" x2="300" y2="50" stroke="#fbbf24" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="250" y="44" font-size="8" fill="#fbbf24" font-family="sans-serif">carrying capacity</text>
  <!-- S curve -->
  <path d="M40,168 C90,166 95,160 120,140 C150,116 170,70 210,56 C250,50 280,50 300,50" fill="none" stroke="#34d399" stroke-width="2"/>
  <!-- phase labels -->
  <text x="70" y="150" text-anchor="middle" font-size="8" fill="#38bdf8" font-family="sans-serif">lag</text>
  <text x="150" y="120" text-anchor="middle" font-size="8" fill="#a78bfa" font-family="sans-serif">log</text>
  <text x="255" y="68" text-anchor="middle" font-size="8" fill="#34d399" font-family="sans-serif">stationary</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Population size = balance of births + immigration against deaths + emigration.",
        "Limiting factors: food supply, predation, disease, and competition (intra- and interspecific).",
        "Sigmoid curve has three phases: lag (slow start), log (rapid exponential growth), stationary (plateau).",
        "Carrying capacity = the maximum population the environment can support; here birth rate = death rate.",
        "At the plateau, density-dependent factors (food shortage, competition, disease) limit further growth.",
      ],
      discovery: {
        problem:
          "Yeast cells are added to a flask of sugar solution and counted each hour. The count rises slowly, then very fast, then levels off — and finally falls. " +
          "Can you name each phase and explain what limits the population at the plateau?",
        idea:
          "Lag (cells adjusting), log (abundant sugar, exponential growth), stationary (sugar runs low / ethanol waste builds up, so birth rate = death rate at carrying capacity), then death phase (sugar exhausted, toxic ethanol).",
      },
      strategies: ["Name the phase, then give its cause", "Separate density-dependent from density-independent factors"],
    },

    // ── SECTION 4c: SAMPLING ─────────────────────────────────────────────────
    {
      heading: "Sampling: Quadrats & Transects",
      body:
        "You usually cannot count every organism in a habitat, so you **sample** a representative part and scale up. Sampling must be **random** (to avoid bias) and use a **large enough sample** (to be reliable).\n\n" +
        "**The quadrat** is a square frame (often 0.5 m × 0.5 m = 0.25 m²) used to sample non-motile organisms such as plants.\n\n" +
        "**Method — estimating population size with quadrats**\n\n" +
        "1. Mark out the total area and measure it (length × width).\n" +
        "2. Generate **random** coordinates (e.g. using random numbers) so quadrat positions are not chosen by eye — this avoids bias.\n" +
        "3. Place the quadrat at each coordinate and count the number of the chosen species inside it (or estimate **percentage cover** for species hard to count, like grass).\n" +
        "4. Repeat for many quadrats and find the **mean number per quadrat**.\n" +
        "5. **Estimate the total** = mean number per quadrat × (total area ÷ area of one quadrat).\n\n" +
        "*Worked example*: mean = 6 daisies per 0.25 m² quadrat; field = 200 m². Number of quadrats that fit = 200 ÷ 0.25 = 800. Estimated total = 6 × 800 = **4800 daisies**.\n\n" +
        "**Transects** are used to study how a species' **distribution changes across an environmental gradient** (e.g. up a beach, from a path into a field). A line (the transect) is laid out, and a quadrat is placed at regular intervals (a **belt transect**) or organisms touching the line are recorded (a **line transect**). Plotting the data shows how abundance changes with an abiotic factor such as light, moisture or salinity.\n\n" +
        "**Reliability**: take more samples and calculate a mean; ensure positions are truly random for population estimates; use the same size quadrat throughout.",
      diagrams: [
        {
          caption: "Belt transect: quadrats placed at intervals along a line up a rocky shore",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Belt transect diagram showing a tape measure running up a shore with quadrats placed at regular intervals">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- gradient ground from sea (left) to land (right) -->
  <rect x="0" y="120" width="320" height="80" fill="#164e63"/>
  <rect x="120" y="110" width="200" height="90" fill="#3b2a0a"/>
  <text x="40" y="160" text-anchor="middle" font-size="9" fill="#eef0ff" font-family="sans-serif">sea</text>
  <text x="280" y="160" text-anchor="middle" font-size="9" fill="#eef0ff" font-family="sans-serif">land</text>
  <!-- transect line -->
  <line x1="20" y1="100" x2="300" y2="100" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="160" y="32" text-anchor="middle" font-size="9" fill="#fbbf24" font-family="sans-serif">transect line (tape measure)</text>
  <!-- quadrats at intervals -->
  <rect x="40" y="86" width="26" height="26" fill="none" stroke="#34d399" stroke-width="1.5"/>
  <rect x="120" y="86" width="26" height="26" fill="none" stroke="#34d399" stroke-width="1.5"/>
  <rect x="200" y="86" width="26" height="26" fill="none" stroke="#34d399" stroke-width="1.5"/>
  <rect x="270" y="86" width="26" height="26" fill="none" stroke="#34d399" stroke-width="1.5"/>
  <text x="160" y="190" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">A quadrat is sampled at each marked interval to show how species change along the gradient</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Sample because counting every organism is impractical; sampling must be random and large enough.",
        "Quadrat = a square frame used to count plants or slow-moving animals, or to estimate percentage cover.",
        "Estimate total = mean number per quadrat × (total area ÷ quadrat area).",
        "Use random coordinates to avoid bias when estimating population size.",
        "Use a transect (with quadrats at intervals) to study distribution across an environmental gradient.",
      ],
      discovery: {
        problem:
          "You count an average of 4 plantains in a 0.25 m² quadrat across a 50 m × 30 m field. " +
          "Estimate the total number of plantains in the field.",
        idea:
          "Total area = 50 × 30 = 1500 m². Quadrats that fit = 1500 ÷ 0.25 = 6000. Estimate = 4 × 6000 = 24 000 plantains.",
      },
      strategies: ["Random for abundance, transect for distribution", "Scale up: mean per quadrat × (area ÷ quadrat area)"],
      whyItWorks:
        "A mean of several random quadrats estimates the true density because random placement makes the sample representative — every part of the habitat has an equal chance of being sampled, so dense and sparse patches are included in proportion. Multiplying density by total area scales this estimate to the whole habitat.",
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
        "A **sustainable resource** is one that is produced as rapidly as it is removed, so it does not run out. **Sustainable development** means using resources to meet the needs of people today **without compromising the ability of future generations** to meet their own needs. Conservation also protects biodiversity, gene pools and ecosystem services. General approaches include nature reserves and protected areas, captive breeding and re-introduction of endangered species, seed banks, monitoring/protecting habitats, education, and reducing pollution and carbon emissions.\n\n" +
        "**Sustainable fishing** prevents fish stocks from collapsing (overfishing leaves too few breeding adults). Methods:\n\n" +
        "- **Quotas**: legal limits on the mass of fish that may be caught.\n" +
        "- **Net (mesh) size limits**: larger mesh lets young, immature fish escape so they can breed.\n" +
        "- **Closed seasons / protected areas**: no fishing during breeding seasons or in nurseries.\n" +
        "- **Fish farming (aquaculture)** to reduce pressure on wild stocks.\n\n" +
        "**Sustainable forestry** keeps forests as a renewable resource:\n\n" +
        "- **Replanting** (one or more new trees planted for each one felled) and **rotation** so re-growth keeps pace with felling.\n" +
        "- **Selective cutting / coppicing** rather than clear-felling, protecting habitats and soil.\n" +
        "- Setting aside **protected areas** and limiting the size of any cleared patch.\n\n" +
        "**Recycling** conserves resources and reduces pollution: recycling paper saves trees and energy; recycling metals (e.g. aluminium, copper) and glass saves limited ores and the large energy cost of extraction; composting and sewage treatment return nutrients safely. Recycling also reduces landfill and the energy used to make new materials.\n\n" +
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
        "Sustainable fishing uses quotas, larger mesh sizes and closed seasons; sustainable forestry uses replanting and selective cutting.",
        "Recycling paper, metals and glass conserves limited resources and saves the energy of extraction.",
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
      "The water cycle: evaporation and transpiration add vapour to the air, which condenses into clouds and falls as precipitation.",
      "Population growth follows a sigmoid (S-shaped) curve: lag, log (exponential), then stationary phase at the carrying capacity.",
      "Carrying capacity is the maximum population an environment can support; there the birth rate equals the death rate.",
      "Population size is limited by food supply, predation, disease and competition.",
      "Population size is estimated with quadrats: mean number per quadrat × (total area ÷ quadrat area).",
      "Sustainable resource use (fishing quotas, mesh-size limits, replanting forests, recycling) meets current needs without depleting resources for the future.",
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
      { front: "Name the two processes that add water vapour to the air in the water cycle.", back: "Evaporation (from seas, lakes, rivers) and transpiration (from plant leaves)." },
      { front: "What are the three phases of a sigmoid population growth curve?", back: "Lag phase (slow start), log/exponential phase (rapid growth), stationary phase (plateau at carrying capacity)." },
      { front: "What is carrying capacity?", back: "The maximum population size an environment can support; here birth rate equals death rate." },
      { front: "Name four factors that limit population size.", back: "Food supply, predation, disease, and competition (for food, space, water, mates)." },
      { front: "How do you estimate a plant population using quadrats?", back: "Place quadrats at random positions, find the mean number per quadrat, then multiply by (total area ÷ quadrat area)." },
      { front: "Why must quadrat positions be chosen randomly?", back: "To avoid bias, so the sample is representative of the whole habitat." },
      { front: "What is a transect used for?", back: "Studying how the distribution of a species changes across an environmental gradient (e.g. up a shore)." },
      { front: "Give two methods of sustainable fishing.", back: "Catch quotas and larger net (mesh) sizes (also closed seasons and protected areas) so enough fish survive to breed." },
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
      { term: "Niche", definition: "The role of an organism in its ecosystem — what it eats, where it lives and how it interacts with other organisms; no two species can occupy exactly the same niche." },
      { term: "Carrying capacity", definition: "The maximum population size that a particular environment can support, where birth rate equals death rate." },
      { term: "Quadrat", definition: "A square frame of known area placed (usually at random) to sample the number or percentage cover of organisms in a habitat." },
      { term: "Transect", definition: "A line across a habitat along which organisms are sampled at intervals to study how distribution changes along an environmental gradient." },
      { term: "Transpiration", definition: "The loss of water vapour from plant leaves, which adds water to the air as part of the water cycle." },
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
      // ── MCQ PAPER 1 ── ecosystems, food chains/webs, trophic levels
      {
        id: "bio-ecology-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Ecosystem vocabulary, food chains and webs, trophic levels, and feeding relationships.",
        questions: [
          {
            id: "bio-ecology-bm1-01",
            question: "What does an arrow in a food chain represent?",
            options: [
              "The direction in which energy is transferred",
              "The direction in which the predator moves",
              "Which organism is the larger of the two",
              "The order in which organisms evolved",
            ],
            answerIndex: 0,
            explanation:
              "An arrow points from the organism that is eaten to the one that eats it, showing the direction of energy (and nutrient) transfer along the chain. It does not show movement, size, or evolution.",
            guideRef: "Food Chains, Food Webs & Trophic Levels",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm1-02",
            question: "Which pair correctly matches a term to its definition?",
            options: [
              "Population = all the different species in an area",
              "Community = all the organisms of one species in an area",
              "Habitat = the place where an organism lives",
              "Niche = the non-living part of an ecosystem",
            ],
            answerIndex: 2,
            explanation:
              "A habitat is the place where an organism lives. A population is one species; a community is all the different species; a niche is the role an organism plays (not the abiotic environment).",
            guideRef: "Ecosystem Vocabulary",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm1-03",
            question:
              "In the chain phytoplankton → krill → herring → seal, which organism is a primary consumer?",
            options: ["Phytoplankton", "Krill", "Herring", "Seal"],
            answerIndex: 1,
            explanation:
              "Phytoplankton are producers (TL1). Krill eat the producers, so they are primary consumers (TL2). Herring are secondary consumers (TL3) and seals are tertiary consumers (TL4).",
            guideRef: "Food Chains, Food Webs & Trophic Levels",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm1-04",
            question:
              "Which organisms break down dead matter and return mineral ions to the soil?",
            options: [
              "Producers",
              "Herbivores",
              "Decomposers",
              "Top carnivores",
            ],
            answerIndex: 2,
            explanation:
              "Decomposers (bacteria and fungi) break down dead organisms and waste, releasing mineral ions back into the environment for producers to reabsorb. Producers make food; herbivores and carnivores are consumers.",
            guideRef: "Food Chains, Food Webs & Trophic Levels",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm1-05",
            question:
              "In a food web, a fox eats both rabbits (herbivores) and birds that eat insects. The fox is therefore occupying which trophic level(s)?",
            options: [
              "Only the third trophic level",
              "Only the second trophic level",
              "Both the third and fourth trophic levels",
              "Only the first trophic level",
            ],
            answerIndex: 2,
            explanation:
              "When the fox eats a rabbit (TL2 herbivore) it acts as a secondary consumer (TL3). When it eats an insect-eating bird (TL3) it acts as a tertiary consumer (TL4). In real food webs an organism can feed at more than one trophic level.",
            guideRef: "Food Chains, Food Webs & Trophic Levels",
            difficulty: "core",
            hints: [
              "Work out the trophic level of each prey item first.",
              "A herbivore is TL2; an insect-eating bird is TL3.",
              "A consumer's trophic level is one above whatever it is currently eating.",
            ],
          },
          {
            id: "bio-ecology-bm1-06",
            question:
              "Which abiotic factor would most directly limit the rate of photosynthesis of producers in a deep lake?",
            options: [
              "Predation by zooplankton",
              "Light intensity, which falls with depth",
              "Competition between fish species",
              "The number of decomposers present",
            ],
            answerIndex: 1,
            explanation:
              "Light intensity decreases with depth, directly limiting photosynthesis of producers lower in the water. Predation and competition are biotic factors; decomposer number does not directly limit photosynthesis.",
            guideRef: "Ecosystem Vocabulary",
            difficulty: "core",
            hints: [
              "Abiotic means non-living — rule out the living factors.",
              "Photosynthesis needs a particular resource that decreases with depth.",
              "Which of the options is a physical, non-living variable?",
            ],
          },
          {
            id: "bio-ecology-bm1-07",
            question:
              "A grassland food web loses all of its rabbits to disease. Foxes that ate rabbits now eat more voles, and grass grows taller. Which statement best describes this?",
            options: [
              "Removing one species can have knock-on effects throughout the web (a trophic cascade)",
              "Food webs are unaffected when a single species is removed",
              "The grass grows taller because foxes fertilise it",
              "Voles will increase because they have fewer predators",
            ],
            answerIndex: 0,
            explanation:
              "Removing rabbits releases grazing pressure (grass grows taller) and shifts fox predation onto voles, reducing vole numbers — knock-on effects spreading through the web. This is a trophic cascade. Voles decrease, not increase, because foxes now hunt them more.",
            guideRef: "Food Chains, Food Webs & Trophic Levels",
            difficulty: "core",
            hints: [
              "Trace each arrow connected to the rabbit and ask what changes.",
              "Fewer rabbits means less grazing — what happens to grass?",
              "Foxes still need food, so what do they switch to eating?",
            ],
          },
          {
            id: "bio-ecology-bm1-08",
            question:
              "Why is a single food chain a poorer model of an ecosystem than a food web?",
            options: [
              "A food chain shows energy flowing in both directions",
              "A food chain ignores the many alternative feeding relationships that actually exist",
              "A food chain always contains decomposers",
              "A food web only applies to aquatic ecosystems",
            ],
            answerIndex: 1,
            explanation:
              "Most organisms eat, and are eaten by, several species. A food web shows these interlinked relationships; a single food chain shows only one pathway and so oversimplifies the ecosystem.",
            guideRef: "Food Chains, Food Webs & Trophic Levels",
            difficulty: "core",
            hints: [
              "Think about how many different things a fox actually eats.",
              "Energy flow is always one-way, so rule that option out.",
              "Which model captures alternative feeding routes?",
            ],
          },
          {
            id: "bio-ecology-bm1-09",
            question:
              "Two species of bird in the same wood feed on insects at the same time of day in the same trees. According to the niche concept, what is the likely long-term outcome?",
            options: [
              "Both will coexist indefinitely with no effect on each other",
              "They will interbreed to form one species",
              "Competition will be intense; one may be excluded or the species will diverge in resource use",
              "The abiotic factors will change to support both",
            ],
            answerIndex: 2,
            explanation:
              "No two species can occupy exactly the same niche indefinitely. Intense competition for the identical resource means one species is usually excluded, or natural selection drives them to use slightly different resources (resource partitioning).",
            guideRef: "Ecosystem Vocabulary",
            difficulty: "challenge",
            hints: [
              "Recall the rule about two species sharing one niche.",
              "If two species need exactly the same resources, what does competition do?",
              "Either one loses out, or they must differ in how they use the resource.",
            ],
            strategy: "Link the niche definition to the consequence of competition.",
          },
          {
            id: "bio-ecology-bm1-10",
            question:
              "A pyramid of numbers for a parasite food chain is: 1 oak tree → 200 aphids → 2000 parasitic wasps. What shape is this pyramid?",
            options: [
              "A regular upright pyramid",
              "An irregular shape that widens towards the top",
              "An inverted pyramid that is widest at the bottom",
              "A perfect rectangle",
            ],
            answerIndex: 1,
            explanation:
              "Numbers rise at each level (1 → 200 → 2000), so the bars get wider going up — an irregular shape that widens towards the top. Pyramids of numbers can be irregular because they count individuals regardless of size; parasites are tiny and numerous.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "challenge",
            hints: [
              "Compare the count of individuals at each level: do they go up or down?",
              "Pyramids of numbers ignore the size of organisms.",
              "If each bar is wider than the one below it, what does the overall shape do?",
            ],
            strategy: "Read the actual counts before assuming a pyramid shape.",
          },
        ],
      },
      // ── MCQ PAPER 2 ── energy flow, pyramids, % transfer calculations
      {
        id: "bio-ecology-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Energy flow, energy losses, pyramids of number/biomass/energy, and percentage transfer calculations.",
        questions: [
          {
            id: "bio-ecology-bm2-01",
            question: "What is the principal source of energy for almost all ecosystems?",
            options: ["The Sun", "Heat from the Earth's core", "Decomposing bacteria", "Mineral ions in the soil"],
            answerIndex: 0,
            explanation:
              "Sunlight is the principal energy source. Producers capture a small fraction of it during photosynthesis, making it available to the rest of the ecosystem.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm2-02",
            question: "Which type of ecological pyramid is ALWAYS a true upright pyramid?",
            options: ["Pyramid of numbers", "Pyramid of biomass", "Pyramid of energy", "All three are always upright"],
            answerIndex: 2,
            explanation:
              "A pyramid of energy is always upright because energy is lost at every trophic level and can never be gained. Pyramids of numbers and biomass can be irregular or inverted.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm2-03",
            question:
              "Which is NOT a way that energy is lost between one trophic level and the next?",
            options: [
              "Heat released during respiration",
              "Undigested material lost in faeces (egestion)",
              "Energy stored in new body tissue of the consumer",
              "Nitrogenous waste lost in excretion",
            ],
            answerIndex: 2,
            explanation:
              "Energy stored in new body tissue is energy that IS passed on to the next level — it is not a loss. Respiration (heat), egestion, and excretion are all routes by which energy leaves the chain.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "core",
            hints: [
              "Three options describe energy leaving the food chain.",
              "One option describes energy that the next consumer could actually eat.",
              "New tissue/growth is the energy available to the next level.",
            ],
          },
          {
            id: "bio-ecology-bm2-04",
            question:
              "Producers fix 60 000 kJ/m²/yr. Primary consumers contain 5 400 kJ/m²/yr. What is the percentage energy transfer between these levels?",
            options: ["9%", "11%", "0.9%", "90%"],
            answerIndex: 0,
            explanation:
              "Percentage transfer = (energy in next level ÷ energy in previous level) × 100 = (5 400 ÷ 60 000) × 100 = 9%.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "core",
            hints: [
              "Percentage transfer = (energy received ÷ energy available) × 100.",
              "Divide 5 400 by 60 000 first.",
              "5 400 ÷ 60 000 = 0.09; multiply by 100.",
            ],
            strategy: "Always divide the SMALLER (upper-level) value by the larger and ×100.",
          },
          {
            id: "bio-ecology-bm2-05",
            question:
              "A crop stores 8 000 kJ/m². When eaten by cattle, only 800 kJ/m² becomes new cattle tissue. Roughly how much MORE food energy reaches humans if they eat the crop directly rather than eating the cattle?",
            options: [
              "About 10 times more",
              "About 2 times more",
              "About the same",
              "About 100 times more",
            ],
            answerIndex: 0,
            explanation:
              "Eating the crop directly gives access to 8 000 kJ; eating the cattle gives only the 800 kJ that became cattle tissue (a 10% transfer). So humans gain roughly 10× more energy by eating producers directly — this is why shorter food chains feed more people.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "core",
            hints: [
              "Compare 8 000 kJ (crop) with 800 kJ (cattle tissue).",
              "8 000 ÷ 800 = ?",
              "Removing a trophic level avoids one 90% energy loss.",
            ],
            strategy: "Each extra trophic level loses ~90% of the energy.",
          },
          {
            id: "bio-ecology-bm2-06",
            question:
              "A pyramid of biomass for a small pond appears inverted (the producer bar is smaller than the primary-consumer bar). What is the best explanation?",
            options: [
              "Energy was created at the second trophic level",
              "The phytoplankton have a very high turnover rate, so their standing biomass at any moment is small",
              "Zooplankton photosynthesise to add biomass",
              "The pyramid was drawn incorrectly; biomass pyramids cannot be inverted",
            ],
            answerIndex: 1,
            explanation:
              "Phytoplankton reproduce extremely fast and are eaten almost as quickly as they grow, so their standing biomass (mass present at one instant) can be lower than that of the zooplankton eating them. Energy is never created; a pyramid of energy would still be upright.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "challenge",
            hints: [
              "Biomass is a snapshot of mass at one moment, not a measure over time.",
              "Phytoplankton are eaten almost as fast as they are produced.",
              "A high reproduction/turnover rate keeps standing biomass low.",
            ],
            strategy: "Distinguish standing crop (a snapshot) from productivity (a rate).",
          },
          {
            id: "bio-ecology-bm2-07",
            question:
              "Energy enters producers at 100 000 kJ/m²/yr. If transfer efficiency is 10% at each step, how much energy is available to TERTIARY consumers?",
            options: ["100 kJ/m²/yr", "1 000 kJ/m²/yr", "10 kJ/m²/yr", "10 000 kJ/m²/yr"],
            answerIndex: 0,
            explanation:
              "Producer → primary → secondary → tertiary is three transfers. 100 000 × 0.1 × 0.1 × 0.1 = 100 kJ/m²/yr.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "core",
            hints: [
              "Count the transfer steps to a tertiary consumer.",
              "Producer to tertiary consumer = three ×0.1 steps.",
              "100 000 × (0.1)³ = 100 000 × 0.001.",
            ],
            strategy: "Use (0.1)^n where n is the number of arrows.",
          },
          {
            id: "bio-ecology-bm2-08",
            question:
              "Why are food chains usually limited to four or five trophic levels?",
            options: [
              "Predators above this size do not exist",
              "So little energy remains at high levels that it cannot support another consumer",
              "Decomposers stop working beyond four levels",
              "The Sun cannot provide enough light",
            ],
            answerIndex: 1,
            explanation:
              "Because roughly 90% of energy is lost at each step, the energy remaining after several transfers is too small to support a further trophic level, limiting chain length to about 4–5 links.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "core",
            hints: [
              "Apply the 10% rule a few times and watch the energy shrink.",
              "After several steps, is there enough energy left to feed another level?",
              "The limit comes from energy, not from predator size.",
            ],
          },
          {
            id: "bio-ecology-bm2-09",
            question:
              "An ecologist measures fresh mass to compare biomass at two trophic levels. Why is DRY mass a more reliable measure?",
            options: [
              "Dry mass includes the energy in water",
              "Water content varies between organisms and over time, so fresh mass is inconsistent",
              "Drying adds carbon to the sample",
              "Fresh mass cannot be measured on a balance",
            ],
            answerIndex: 1,
            explanation:
              "Water content varies widely between organisms and from day to day, so fresh mass is an unreliable comparison. Dry mass (after removing water) reflects the actual organic material and is comparable. The drawback is that organisms must be killed.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "challenge",
            hints: [
              "What part of fresh mass is not living tissue and varies a lot?",
              "Two organisms of equal dry mass can hold very different amounts of water.",
              "Removing the variable component makes the comparison fair.",
            ],
            strategy: "Identify the variable that dry mass removes.",
          },
          {
            id: "bio-ecology-bm2-10",
            question:
              "A pyramid of energy shows 10 000 kJ at TL1 and 90 kJ at TL3. What was the approximate percentage transfer between TL2 and TL3 if TL2 held 900 kJ?",
            options: ["10%", "9%", "1%", "90%"],
            answerIndex: 0,
            explanation:
              "Between TL2 (900 kJ) and TL3 (90 kJ): (90 ÷ 900) × 100 = 10%. (The TL1→TL2 step here was 9%, but the question asks only about TL2→TL3.)",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "core",
            hints: [
              "Use only the TL2 and TL3 figures for this step.",
              "Percentage = (90 ÷ 900) × 100.",
              "90 ÷ 900 = 0.1.",
            ],
            strategy: "Pick out the two adjacent levels named in the question and ignore the others.",
          },
        ],
      },
      // ── MCQ PAPER 3 ── carbon cycle, nitrogen cycle, decomposition, populations
      {
        id: "bio-ecology-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Carbon and nitrogen cycles, decomposition, nutrient recycling, and population size.",
        questions: [
          {
            id: "bio-ecology-bm3-01",
            question: "Which process returns CO₂ to the atmosphere?",
            options: ["Photosynthesis", "Respiration", "Nitrogen fixation", "Transpiration"],
            answerIndex: 1,
            explanation:
              "Respiration in all living organisms oxidises glucose and releases CO₂ to the atmosphere. Photosynthesis removes CO₂; nitrogen fixation and transpiration do not involve CO₂.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm3-02",
            question: "In which form do plants absorb nitrogen from the soil?",
            options: ["Nitrogen gas (N₂)", "Nitrate ions (NO₃⁻)", "Ammonia gas", "Protein"],
            answerIndex: 1,
            explanation:
              "Plants absorb nitrogen as nitrate ions (NO₃⁻) through their roots and use it to make amino acids and proteins. They cannot use N₂ gas directly.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm3-03",
            question: "Which process locks carbon away for millions of years?",
            options: [
              "Combustion of wood",
              "Formation of fossil fuels from undecomposed organisms",
              "Respiration of animals",
              "Decomposition of leaf litter",
            ],
            answerIndex: 1,
            explanation:
              "When organisms die in conditions that prevent full decomposition, their carbon can become coal, oil, or gas (fossil fuels) over millions of years. The other processes release carbon relatively quickly.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "core",
            hints: [
              "Which option stores carbon rather than releasing it?",
              "Think about where coal and oil come from.",
              "Fossil fuels form when decomposition is incomplete.",
            ],
          },
          {
            id: "bio-ecology-bm3-04",
            question:
              "Nitrifying bacteria carry out which conversion in the nitrogen cycle?",
            options: [
              "Nitrogen gas → ammonium ions",
              "Ammonium ions → nitrite → nitrate",
              "Nitrate → nitrogen gas",
              "Protein → ammonium ions",
            ],
            answerIndex: 1,
            explanation:
              "Nitrifying bacteria oxidise ammonium ions to nitrite and then to nitrate (nitrification). Nitrogen fixation makes ammonium from N₂; denitrification makes N₂ from nitrate; decomposers (ammonification) make ammonium from protein.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "core",
            hints: [
              "The word 'nitrification' points to making nitrate.",
              "Which starting and ending substances both contain combined nitrogen for plants?",
              "Ammonium → nitrite → nitrate is the nitrifying pathway.",
            ],
          },
          {
            id: "bio-ecology-bm3-05",
            question:
              "Decomposition of leaf litter slows markedly during a cold winter. Which factor best explains this?",
            options: [
              "Low temperature slows the enzyme activity and respiration of decomposers",
              "There is more oxygen available in winter",
              "Leaves contain more nitrogen in winter",
              "Decomposers stop needing water in winter",
            ],
            answerIndex: 0,
            explanation:
              "Decomposers rely on enzymes, which work slowly at low temperatures, and their metabolic rate falls in the cold. Warmth, moisture, and oxygen all speed decomposition; cold slows it.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "core",
            hints: [
              "Decomposers are organisms with enzymes — how does temperature affect enzymes?",
              "Cold reduces the rate of metabolic reactions.",
              "Think about the conditions that speed up rotting in a compost heap.",
            ],
          },
          {
            id: "bio-ecology-bm3-06",
            question:
              "A pond is sealed off so that no decomposers can act. Over time, what happens to the supply of mineral ions for plant growth?",
            options: [
              "It increases because nothing uses the minerals",
              "It decreases because dead matter is not broken down to release minerals",
              "It stays the same because plants make their own minerals",
              "It increases because dead organisms dissolve directly",
            ],
            answerIndex: 1,
            explanation:
              "Without decomposers, dead organisms and waste are not broken down, so the mineral ions locked in them are not recycled. The available supply for plant growth falls.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "core",
            hints: [
              "What job do decomposers do for nutrient supply?",
              "Minerals are locked inside dead bodies until something releases them.",
              "Plants cannot grow well without recycled mineral ions.",
            ],
          },
          {
            id: "bio-ecology-bm3-07",
            question:
              "Which factor would cause the size of a rabbit population to DECREASE?",
            options: [
              "An increase in available food",
              "A decrease in the number of predators",
              "An outbreak of disease",
              "An increase in suitable nesting sites",
            ],
            answerIndex: 2,
            explanation:
              "Disease raises the death rate and lowers the population. More food, fewer predators, and more nesting sites would all tend to increase the population.",
            guideRef: "Ecosystem Vocabulary",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm3-08",
            question:
              "A predator and its prey show repeating linked cycles: prey numbers rise, then predator numbers rise, then prey fall, then predators fall. Why do the predator peaks come AFTER the prey peaks?",
            options: [
              "Predators reproduce instantly when prey appear",
              "There is a time delay: more prey means more food, so predators reproduce and increase only later",
              "Prey eat the predators",
              "The two cycles are unrelated and the timing is coincidence",
            ],
            answerIndex: 1,
            explanation:
              "A rise in prey provides more food, but predators take time to feed, reproduce, and raise young, so their population peaks after the prey peak. The rising predators then reduce prey numbers, and the cycle repeats.",
            guideRef: "Ecosystem Vocabulary",
            difficulty: "challenge",
            hints: [
              "Reproduction is not instant — it takes time.",
              "Predators can only increase once there is plenty of prey to eat.",
              "The lag reflects the time to feed and raise offspring.",
            ],
            strategy: "Explain the time lag between cause (more food) and effect (more predators).",
          },
          {
            id: "bio-ecology-bm3-09",
            question:
              "Why does growing a legume crop (with Rhizobium in its root nodules) improve soil fertility for the next crop?",
            options: [
              "Legumes remove nitrate from the soil",
              "Rhizobium fix nitrogen gas into compounds, adding combined nitrogen to the soil",
              "Legumes raise the soil temperature",
              "Rhizobium denitrify the soil, releasing N₂",
            ],
            answerIndex: 1,
            explanation:
              "Rhizobium bacteria in the root nodules fix atmospheric N₂ into ammonium/combined nitrogen. When the legumes die and decompose, this adds nitrogen compounds to the soil, raising fertility for the following crop.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "challenge",
            hints: [
              "What does Rhizobium do with nitrogen gas?",
              "Nitrogen fixation adds usable nitrogen to the system.",
              "When the legume dies, where do its nitrogen compounds go?",
            ],
            strategy: "Connect nitrogen fixation to the later release of nitrogen on decomposition.",
          },
          {
            id: "bio-ecology-bm3-10",
            question:
              "Waterlogged, compacted soil tends to be low in nitrate. Which process is most responsible?",
            options: [
              "Increased nitrification by nitrifying bacteria",
              "Increased denitrification by denitrifying bacteria in anaerobic conditions",
              "Increased nitrogen fixation",
              "Increased absorption of nitrate by decomposers",
            ],
            answerIndex: 1,
            explanation:
              "Waterlogged soil is low in oxygen (anaerobic), which favours denitrifying bacteria. They convert nitrate to N₂ gas, lowering soil nitrate and fertility. Aeration would favour the nitrifying bacteria instead.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "challenge",
            hints: [
              "Waterlogged soil is short of one important gas.",
              "Which bacteria thrive in anaerobic (low-oxygen) conditions?",
              "Denitrification converts nitrate to nitrogen gas, removing it from soil.",
            ],
            strategy: "Link the abiotic condition (low oxygen) to the bacteria it favours.",
          },
        ],
      },
      // ── MCQ PAPER 4 ── human impact, pollution, eutrophication, greenhouse, conservation
      {
        id: "bio-ecology-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Pollution, eutrophication, deforestation, the greenhouse effect, climate change, and conservation.",
        questions: [
          {
            id: "bio-ecology-bm4-01",
            question: "Which gas is the main contributor to the enhanced greenhouse effect from burning fossil fuels?",
            options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
            answerIndex: 1,
            explanation:
              "Carbon dioxide released by burning fossil fuels is the main greenhouse gas driving the enhanced greenhouse effect. Methane also contributes. Oxygen and nitrogen are not greenhouse gases.",
            guideRef: "Human Impact on the Environment",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm4-02",
            question: "Which is a direct effect of deforestation?",
            options: [
              "Increased biodiversity",
              "Loss of habitat and reduced biodiversity",
              "More carbon dioxide removed from the air",
              "Increased rainfall locally",
            ],
            answerIndex: 1,
            explanation:
              "Deforestation destroys habitats and reduces biodiversity. It also reduces photosynthesis (less CO₂ removed) and reduces transpiration (often less rainfall). So the other options are wrong.",
            guideRef: "Human Impact on the Environment",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bm4-03",
            question: "What is the IMMEDIATE cause of fish death in eutrophication?",
            options: [
              "Fertiliser poisoning the fish",
              "Lack of dissolved oxygen as bacteria decompose dead plants",
              "Algae blocking the fishes' gills",
              "A rise in water temperature",
            ],
            answerIndex: 1,
            explanation:
              "Bacteria decomposing the dead water plants respire aerobically and use up dissolved oxygen, so fish suffocate. The fertiliser itself is not directly toxic, and algae do not block gills.",
            guideRef: "Human Impact on the Environment",
            difficulty: "core",
            hints: [
              "Recall the end of the eutrophication sequence.",
              "Which organisms multiply and consume the oxygen?",
              "Fish need dissolved oxygen to respire.",
            ],
          },
          {
            id: "bio-ecology-bm4-04",
            question:
              "Acid rain is mainly produced when which gases dissolve in rainwater?",
            options: [
              "Carbon dioxide and oxygen",
              "Sulfur dioxide and oxides of nitrogen",
              "Methane and ammonia",
              "Nitrogen and water vapour",
            ],
            answerIndex: 1,
            explanation:
              "Sulfur dioxide (SO₂) and oxides of nitrogen (NOₓ) from burning fossil fuels dissolve in rain to form acid rain, which damages soils, lakes, and buildings.",
            guideRef: "Human Impact on the Environment",
            difficulty: "core",
            hints: [
              "Acid rain comes from burning fossil fuels.",
              "Two acidic oxides are involved, one of sulfur and one of nitrogen.",
              "Think SO₂ and NOₓ.",
            ],
          },
          {
            id: "bio-ecology-bm4-05",
            question:
              "Which conservation method most directly helps a fish population recover from over-fishing?",
            options: [
              "Adding fertiliser to the sea",
              "Introducing catch quotas and larger net mesh sizes",
              "Removing all predators of the fish",
              "Draining coastal wetlands",
            ],
            answerIndex: 1,
            explanation:
              "Catch quotas limit how many fish are taken, and larger mesh sizes let young fish escape to breed. Both allow the population to recover. The other options harm the ecosystem.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "core",
            hints: [
              "Sustainable fishing protects breeding stock.",
              "How do you let young fish survive to reproduce?",
              "Quotas limit numbers taken; mesh size lets juveniles through.",
            ],
          },
          {
            id: "bio-ecology-bm4-06",
            question:
              "How does the natural greenhouse effect keep the Earth warm?",
            options: [
              "Greenhouse gases reflect sunlight back to space",
              "Greenhouse gases absorb outgoing infrared radiation and re-radiate some of it back to the surface",
              "Greenhouse gases generate heat by reacting with oxygen",
              "Greenhouse gases stop the Sun's rays reaching the Earth",
            ],
            answerIndex: 1,
            explanation:
              "Greenhouse gases (CO₂, CH₄, water vapour) absorb infrared radiation emitted by the warmed Earth and re-radiate part of it back to the surface, keeping the planet warmer than it would otherwise be. Human activity enhances this effect.",
            guideRef: "Human Impact on the Environment",
            difficulty: "core",
            hints: [
              "The Sun's energy arrives and the warm Earth re-emits it as infrared.",
              "Greenhouse gases act on the OUTGOING radiation, not the incoming light.",
              "They absorb infrared and send some back down.",
            ],
          },
          {
            id: "bio-ecology-bm4-07",
            question:
              "Why do micro-plastics pose a particular risk to top predators such as seabirds?",
            options: [
              "Plastics dissolve quickly and release oxygen",
              "Plastics are eaten low in the food chain and pass up to predators, accumulating along the way",
              "Plastics increase the energy available to predators",
              "Plastics only affect producers, never consumers",
            ],
            answerIndex: 1,
            explanation:
              "Small organisms ingest micro-plastics, which then pass up the food chain. Because plastics persist and accumulate, top predators can end up with the highest amounts (bioaccumulation), harming them.",
            guideRef: "Human Impact on the Environment",
            difficulty: "challenge",
            hints: [
              "Where do plastics first enter the food chain?",
              "Plastics are not broken down and do not leave the body easily.",
              "Each predator concentrates what its prey contained.",
            ],
            strategy: "Trace the plastic from low trophic levels up to the predator.",
          },
          {
            id: "bio-ecology-bm4-08",
            question:
              "A captive-breeding programme for an endangered mammal keeps detailed records to pair unrelated individuals. Why is this important?",
            options: [
              "To increase the body size of offspring",
              "To maintain genetic variation and avoid the harmful effects of inbreeding",
              "To make the animals tamer",
              "To reduce the number of offspring produced",
            ],
            answerIndex: 1,
            explanation:
              "Pairing unrelated individuals maintains genetic variation and reduces inbreeding, which can expose harmful recessive alleles and weaken the population. Healthy variation improves survival on release.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "challenge",
            hints: [
              "Small populations risk breeding close relatives.",
              "What problem arises when closely related individuals breed?",
              "Genetic variation helps a population stay healthy and adaptable.",
            ],
            strategy: "Link record-keeping to maintaining genetic diversity.",
          },
          {
            id: "bio-ecology-bm4-09",
            question:
              "Reforestation is described as a way to reduce atmospheric CO₂. Which statement best justifies this?",
            options: [
              "Trees release CO₂ as they grow",
              "Growing trees photosynthesise, fixing CO₂ into wood and acting as a carbon sink",
              "Trees increase soil denitrification",
              "Forests reflect more sunlight, cooling the air directly",
            ],
            answerIndex: 1,
            explanation:
              "Growing trees photosynthesise, removing CO₂ from the air and storing the carbon in wood — a carbon sink. This helps offset emissions and reduce the enhanced greenhouse effect.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "core",
            hints: [
              "What process in trees removes CO₂ from the air?",
              "Carbon fixed by photosynthesis is stored in wood.",
              "A growing forest stores more carbon than it releases.",
            ],
          },
          {
            id: "bio-ecology-bm4-10",
            question:
              "Which statement best defines SUSTAINABLE use of a resource such as timber?",
            options: [
              "Using as much as possible while it is cheap",
              "Using the resource at a rate that allows it to be replaced, so future generations can still use it",
              "Never using the resource at all",
              "Replacing the resource only after it has run out",
            ],
            answerIndex: 1,
            explanation:
              "Sustainable use means harvesting at a rate that allows natural replacement (e.g. replanting trees), meeting present needs without preventing future generations from meeting theirs.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "core",
            hints: [
              "Sustainability is about the rate of use versus the rate of replacement.",
              "The resource must not run out for future generations.",
              "Replanting matches removal to renewal.",
            ],
          },
        ],
      },
    ],
    qaPapers: [
      // ── QA PAPER 1 ── ecosystems, food chains/webs, trophic levels
      {
        id: "bio-ecology-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Ecosystem vocabulary, food chains and webs, trophic levels, and feeding relationships.",
        questions: [
          {
            id: "bio-ecology-bq1-01",
            question:
              "Define the terms population and community, and give one example of each from a woodland. [4]",
            marks: 4,
            modelAnswer:
              "A population is all the individuals of one species living in an area at a given time — for example, all the oak trees in the woodland. A community is all the populations of different species living and interacting in the same area — for example, the oak trees, squirrels, fungi, insects and birds of the woodland together.",
            markScheme: [
              "Population = all individuals of one species / one type of organism in an area (1)",
              "Suitable example of a population, e.g. all oak trees / all grey squirrels (1)",
              "Community = all the populations of different species living/interacting in an area (1)",
              "Suitable example of a community, e.g. all the organisms of the woodland together (1)",
            ],
            commonError:
              "Mixing up the two: a population is ONE species; a community is MANY species. An example of a community must include several different species, not just one.",
            guideRef: "Ecosystem Vocabulary",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bq1-02",
            question:
              "State what the arrows in a food chain represent, and explain why every food chain begins with a producer. [3]",
            marks: 3,
            modelAnswer:
              "The arrows show the direction of energy (and nutrient) transfer — from the organism that is eaten to the organism that eats it. Every food chain begins with a producer because producers (plants/algae) trap light energy in photosynthesis and convert it into chemical energy in food, providing the energy input for all the consumers in the chain.",
            markScheme: [
              "Arrows show direction of energy transfer / energy flow (1)",
              "Producers carry out photosynthesis / capture light energy (1)",
              "They convert light energy into chemical energy / make food that consumers depend on (1)",
            ],
            commonError:
              "Saying the arrow points 'to what is eaten' — it points FROM the food TO the feeder (the direction energy travels).",
            guideRef: "Food Chains, Food Webs & Trophic Levels",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bq1-03",
            question:
              "A food chain is: lettuce → slug → frog → heron.\n(a) Name the primary consumer and the trophic level of the heron. [2]\n(b) Explain what would happen to the frog population if all the slugs were removed. [2]",
            marks: 4,
            modelAnswer:
              "(a) The slug is the primary consumer. The heron is at the fourth trophic level (TL4), a tertiary consumer.\n\n(b) The frogs would lose their food source, so the frog population would fall/decrease, because slugs are the frogs' main prey in this chain. Some frogs may starve or move away.",
            markScheme: [
              "(a) Primary consumer = slug (1)",
              "(a) Heron = fourth trophic level / TL4 / tertiary consumer (1)",
              "(b) Frog population decreases / falls (1)",
              "(b) Because the frogs lose their food source / less food available (1)",
            ],
            commonError:
              "Counting the producer as trophic level 0 — the producer is TL1, so the heron (four organisms along) is TL4.",
            guideRef: "Food Chains, Food Webs & Trophic Levels",
            difficulty: "core",
            hints: [
              "Number each organism starting with the producer as TL1.",
              "The primary consumer is the first animal in the chain.",
              "For (b), remove the slug and ask what the frog now has to eat.",
            ],
          },
          {
            id: "bio-ecology-bq1-04",
            question:
              "Explain the difference between a habitat and a niche, using a named example. [3]",
            marks: 3,
            modelAnswer:
              "A habitat is the place where an organism lives, defined by its physical and biological features — for example, the rocky shore where a limpet lives. A niche is the role the organism plays in its ecosystem: what it eats, where and when it is active, and how it interacts with other species — for example, the limpet's niche is grazing algae off the rocks at high tide. The habitat is the 'address'; the niche is the 'occupation'.",
            markScheme: [
              "Habitat = the place / where an organism lives (1)",
              "Niche = the role of the organism / what it eats, where and when it is active (1)",
              "Suitable example distinguishing the two (e.g. limpet on rocky shore grazing algae) (1)",
            ],
            commonError:
              "Treating habitat and niche as the same thing. The habitat is the location; the niche is the role/function within that location.",
            guideRef: "Ecosystem Vocabulary",
            difficulty: "core",
            hints: [
              "One term is about WHERE, the other about WHAT the organism does.",
              "Habitat = address; niche = job.",
              "Choose one organism and describe both for it.",
            ],
          },
          {
            id: "bio-ecology-bq1-05",
            question:
              "Using a food web, explain why removing a single species can affect many other species in the ecosystem. [4]",
            marks: 4,
            modelAnswer:
              "In a food web, most organisms are linked to several others as predators and prey. Removing one species breaks these links: its prey may increase because they are no longer eaten, while its predators lose a food source and may decrease or switch to other prey. These changes pass on to further species — for example, increased prey may overgraze producers — so effects spread through the web (a trophic cascade). The interconnections mean a change at one point rarely stays isolated.",
            markScheme: [
              "Most species are linked to several others in the web (1)",
              "Removing a species means its prey is no longer eaten / prey numbers may rise (1)",
              "Its predators lose a food source / may decrease or switch prey (1)",
              "Effects pass on to further species / spread through the web (trophic cascade) (1)",
            ],
            commonError:
              "Only describing the immediate predator OR prey. Marks require showing knock-on effects spreading to further species.",
            guideRef: "Food Chains, Food Webs & Trophic Levels",
            difficulty: "core",
            hints: [
              "Follow every arrow that touches the removed species.",
              "Predators lose food; prey lose a predator — what happens to each?",
              "Then follow the next set of arrows from those species.",
            ],
          },
          {
            id: "bio-ecology-bq1-06",
            question:
              "Decomposers are essential to ecosystems but are rarely drawn in food chains. Explain their role and why they are usually left out. [3]",
            marks: 3,
            modelAnswer:
              "Decomposers (bacteria and fungi) break down dead organic matter and waste, releasing mineral ions (such as nitrate) back into the soil for producers to reabsorb, recycling nutrients. They are usually left out of food chains because they feed on dead material from every trophic level rather than fitting neatly into a single linear position in the chain.",
            markScheme: [
              "Decomposers break down dead organisms / waste (1)",
              "Release mineral ions / nutrients back into the soil for producers / recycle nutrients (1)",
              "Left out because they act on dead matter from all trophic levels / do not fit one position (1)",
            ],
            commonError:
              "Calling decomposers 'producers'. They are not producers — they obtain energy from dead organic matter, not from light.",
            guideRef: "Food Chains, Food Webs & Trophic Levels",
            difficulty: "core",
            hints: [
              "What do decomposers do to dead bodies and waste?",
              "Where do the released minerals go and who uses them?",
              "Why can't a decomposer be placed at a single trophic level?",
            ],
          },
          {
            id: "bio-ecology-bq1-07",
            question:
              "Two bird species in a wood both feed on the same insects in the same trees. Predict and explain the likely long-term outcome in terms of niches and competition. [4]",
            marks: 4,
            modelAnswer:
              "The two species would be attempting to occupy the same niche, so they would compete intensely for the same food. Because no two species can occupy exactly the same niche indefinitely, one of three things tends to happen: the better-adapted species outcompetes the other, which declines or is excluded from that area; or natural selection favours individuals that use slightly different resources (e.g. feeding at different heights or times), so the niches diverge and the species partition the resource and coexist. Either way, the intense overlap cannot persist unchanged.",
            markScheme: [
              "They occupy the same / overlapping niche so compete strongly for the same resource (1)",
              "No two species can occupy exactly the same niche indefinitely (1)",
              "One species may be outcompeted / excluded / decline (1)",
              "OR natural selection leads to resource partitioning / niche divergence so they coexist (1)",
            ],
            commonError:
              "Concluding only that 'they share the food happily' — the principle is that identical niches lead to competitive exclusion or divergence.",
            guideRef: "Ecosystem Vocabulary",
            difficulty: "challenge",
            hints: [
              "Start from the rule about two species and one niche.",
              "Intense competition has winners and losers.",
              "Alternatively, the species might change how they use the resource.",
            ],
            strategy: "Give both possible outcomes (exclusion or divergence) for full marks.",
          },
          {
            id: "bio-ecology-bq1-08",
            question:
              "Abiotic and biotic factors both affect the size of a population. Define each type of factor and give two examples of each that could limit a population of water snails in a pond. [4]",
            marks: 4,
            modelAnswer:
              "Abiotic factors are non-living, physical or chemical features of the environment. For water snails, two examples are the temperature of the water and the concentration of dissolved oxygen (or pH/light). Biotic factors are the living influences from other organisms. For water snails, two examples are predation (e.g. by fish or birds) and competition for food/algae with other grazers (or disease/parasitism).",
            markScheme: [
              "Abiotic = non-living / physical / chemical factor (1)",
              "Two suitable abiotic examples (temperature, dissolved O₂, pH, light, mineral availability) (1)",
              "Biotic = living factor / caused by other organisms (1)",
              "Two suitable biotic examples (predation, competition, disease, parasitism) (1)",
            ],
            commonError:
              "Listing 'water' or 'food' without classifying correctly, or giving predators as abiotic. Predation and competition are biotic; temperature and oxygen are abiotic.",
            guideRef: "Ecosystem Vocabulary",
            difficulty: "challenge",
            hints: [
              "Abiotic means non-living; biotic means living.",
              "Temperature and oxygen are physical/chemical — which category?",
              "Predators and competitors are other organisms — which category?",
            ],
            strategy: "Sort each example as living or non-living before writing it down.",
          },
          {
            id: "bio-ecology-bq1-09",
            question:
              "An oak tree (1 individual) supports 4000 caterpillars, which support 60 blue tits, which support 3 sparrowhawks.\n(a) Sketch in words the shape of the pyramid of NUMBERS and explain why it is not a regular pyramid. [3]\n(b) Explain why a pyramid of BIOMASS for the same community would be a regular upright pyramid. [2]",
            marks: 5,
            modelAnswer:
              "(a) The pyramid of numbers has a very narrow base because there is only one producer (the oak tree), then a much wider bar at TL2 (4000 caterpillars), narrowing again at TL3 (60 blue tits) and TL4 (3 sparrowhawks). It is irregular because pyramids of numbers count individuals regardless of size, and one huge producer can support thousands of small consumers.\n\n(b) A pyramid of biomass measures the total dry mass at each level. The single oak tree has a very large mass, far greater than the total mass of the caterpillars, which is greater than the blue tits, which is greater than the sparrowhawks. So the bars decrease going up, giving a regular upright pyramid.",
            markScheme: [
              "(a) Narrow base (1 producer) then much wider TL2 / describes irregular widening (1)",
              "(a) Pyramid of numbers counts individuals regardless of size (1)",
              "(a) One large producer supports many small consumers, so shape is irregular (1)",
              "(b) Biomass = total (dry) mass; the oak's mass exceeds that of all caterpillars etc. (1)",
              "(b) Mass decreases at each level so it is a regular upright pyramid (1)",
            ],
            commonError:
              "Confusing numbers with biomass. A single large tree gives a tiny NUMBER bar but a huge BIOMASS bar — that is why the two pyramids look different.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "challenge",
            hints: [
              "Pyramid of numbers ignores size — count the individuals.",
              "One oak = 1 individual but a very large mass.",
              "Biomass orders the levels by total mass, not count.",
            ],
            strategy: "Separate the idea of 'how many' (numbers) from 'how much mass' (biomass).",
          },
          {
            id: "bio-ecology-bq1-10",
            question:
              "Explain why most food chains contain no more than four or five trophic levels. [3]",
            marks: 3,
            modelAnswer:
              "At each trophic level a large proportion of energy (around 90%) is lost — as heat from respiration, in undigested egested material, and in excretory waste. Only about 10% is passed to the next level. After several transfers, so little energy remains that it cannot support the metabolic needs of a further trophic level, so chains are limited to about four or five links.",
            markScheme: [
              "Energy is lost at each trophic level (heat from respiration / egestion / excretion) (1)",
              "Only about 10% / a small proportion passes to the next level (1)",
              "After several steps too little energy remains to support another level (1)",
            ],
            commonError:
              "Saying 'predators get too big' — the limit is set by ENERGY availability, not body size.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "core",
            hints: [
              "How much energy passes to each successive level?",
              "List the routes by which energy is lost.",
              "What runs out after several transfers?",
            ],
          },
        ],
      },
      // ── QA PAPER 2 ── energy flow, pyramids, % transfer calculations
      {
        id: "bio-ecology-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Energy flow, energy losses, ecological pyramids, and percentage transfer calculations.",
        questions: [
          {
            id: "bio-ecology-bq2-01",
            question:
              "State the principal source of energy for ecosystems and describe how this energy first enters the living part of an ecosystem. [2]",
            marks: 2,
            modelAnswer:
              "The principal source of energy is the Sun (sunlight). It enters the living part of the ecosystem when producers (plants and algae) absorb light and use it in photosynthesis to make chemical energy stored in organic molecules such as glucose.",
            markScheme: [
              "The Sun / sunlight (1)",
              "Producers absorb light and convert it to chemical energy by photosynthesis (1)",
            ],
            commonError:
              "Saying energy enters 'through the soil' or 'from minerals' — energy enters through producers via photosynthesis of sunlight.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bq2-02",
            question:
              "List three ways in which energy is lost between one trophic level and the next. [3]",
            marks: 3,
            modelAnswer:
              "Energy is lost as heat released during respiration (including heat from movement and, in mammals/birds, maintaining body temperature); in undigested material egested as faeces; and in nitrogenous waste removed by excretion (e.g. urea).",
            markScheme: [
              "Heat from respiration / movement / maintaining body temperature (1)",
              "Egestion / undigested material lost in faeces (1)",
              "Excretion / nitrogenous waste / urea (1)",
            ],
            commonError:
              "Writing 'energy is lost when organisms die' — the standard routes are respiration (heat), egestion and excretion.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bq2-03",
            question:
              "Producers in a meadow fix 90 000 kJ/m²/yr. The primary consumers contain 9000 kJ/m²/yr and the secondary consumers contain 720 kJ/m²/yr.\n(a) Calculate the percentage energy transfer from producers to primary consumers. [2]\n(b) Calculate the percentage energy transfer from primary to secondary consumers. [2]",
            marks: 4,
            modelAnswer:
              "(a) Percentage transfer = (9000 ÷ 90 000) × 100 = 10%.\n\n(b) Percentage transfer = (720 ÷ 9000) × 100 = 8%.",
            markScheme: [
              "(a) Correct method (9000 ÷ 90 000 × 100) (1)",
              "(a) = 10% (1)",
              "(b) Correct method (720 ÷ 9000 × 100) (1)",
              "(b) = 8% (1)",
            ],
            commonError:
              "Dividing the wrong way round (90 000 ÷ 9000) — always divide the energy RECEIVED by the energy AVAILABLE in the level below.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "core",
            hints: [
              "Percentage transfer = (energy in upper level ÷ energy in lower level) × 100.",
              "For (a) use 9000 and 90 000.",
              "For (b) use 720 and 9000.",
            ],
            strategy: "Always put the smaller (upper-level) value on top of the fraction.",
            solutions: [
              {
                label: "Step-by-step percentages",
                steps: [
                  "(a) Fraction transferred = 9000 ÷ 90 000 = 0.10",
                  "(a) × 100 = 10%",
                  "(b) Fraction transferred = 720 ÷ 9000 = 0.08",
                  "(b) × 100 = 8%",
                ],
              },
            ],
          },
          {
            id: "bio-ecology-bq2-04",
            question:
              "A food chain is: maize → cattle → human. The maize stores 500 000 kJ/m². Transfer efficiency is 10% at each step.\n(a) Calculate the energy available to humans who eat the cattle. [2]\n(b) Calculate the energy available to humans if they eat the maize directly. [1]\n(c) Use your answers to explain why feeding a growing human population is easier with a more plant-based diet. [2]",
            marks: 5,
            modelAnswer:
              "(a) Cattle (TL2) = 500 000 × 0.1 = 50 000 kJ/m². Humans eating cattle (TL3) = 50 000 × 0.1 = 5000 kJ/m².\n\n(b) Humans eating maize directly (TL2) = 500 000 × 0.1 = 50 000 kJ/m².\n\n(c) Eating the maize directly gives 50 000 kJ/m², ten times more than the 5000 kJ/m² obtained by eating cattle. Removing the cattle trophic level avoids one 90% energy loss, so far more food energy is available to support a larger human population.",
            markScheme: [
              "(a) Two steps of ×0.1 shown / 500 000 × 0.1 × 0.1 (1)",
              "(a) = 5000 kJ/m² (1)",
              "(b) = 50 000 kJ/m² (1)",
              "(c) Eating plants gives ~10× more energy / avoids one trophic level loss (1)",
              "(c) More energy/food available so more people can be fed (1)",
            ],
            commonError:
              "Applying 10% only once for the cattle route, or forgetting that eating the maize directly is still ONE transfer (producer to human), not zero.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "core",
            hints: [
              "Count the arrows: maize→cattle→human is two transfers; maize→human is one.",
              "Apply ×0.1 once for each arrow.",
              "Compare the two final figures to answer (c).",
            ],
            strategy: "Show every ×0.1 step and keep the units kJ/m².",
            solutions: [
              {
                label: "Energy down each route",
                steps: [
                  "Maize (TL1) = 500 000 kJ/m²",
                  "(a) Cattle (TL2) = 500 000 × 0.1 = 50 000 kJ/m²",
                  "(a) Human eating cattle (TL3) = 50 000 × 0.1 = 5000 kJ/m²",
                  "(b) Human eating maize (TL2) = 500 000 × 0.1 = 50 000 kJ/m²",
                  "Ratio = 50 000 ÷ 5000 = 10 times more energy",
                ],
              },
            ],
          },
          {
            id: "bio-ecology-bq2-05",
            question:
              "Explain why a pyramid of energy is ALWAYS a regular upright pyramid, whereas a pyramid of numbers can be irregular. [4]",
            marks: 4,
            modelAnswer:
              "A pyramid of energy shows the energy transferred per unit area per unit time. Because energy is lost at every trophic level (as heat in respiration, egestion and excretion) and can never be gained, each level always contains less energy than the one below, so the bars always decrease going up — a regular upright pyramid. A pyramid of numbers counts individuals regardless of their size, so a single large producer (e.g. one tree) can support thousands of small consumers; this makes the number bars irregular and sometimes wider higher up.",
            markScheme: [
              "Pyramid of energy measures energy flow per area per time (1)",
              "Energy is always lost at each level and cannot be gained, so energy always decreases upward (1)",
              "Therefore energy pyramid is always a regular/upright pyramid (1)",
              "Pyramid of numbers counts individuals regardless of size, so it can be irregular (e.g. one tree → many insects) (1)",
            ],
            commonError:
              "Saying numbers pyramids are 'always inverted'. They can be irregular in either direction; the key point is that they ignore organism size.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "core",
            hints: [
              "What does an energy pyramid measure, and why can it only decrease?",
              "Energy cannot be created, only lost as you move up.",
              "Why does counting individuals give a misleading shape?",
            ],
          },
          {
            id: "bio-ecology-bq2-06",
            question:
              "An ecologist wants to compare the biomass of plankton and fish in a lake. Explain why she measures DRY mass rather than fresh (wet) mass, and state one disadvantage of using dry mass. [3]",
            marks: 3,
            modelAnswer:
              "Fresh mass includes water, and the amount of water in organisms varies greatly between species and over time, so fresh mass gives an unreliable, inconsistent comparison. Dry mass is measured after all the water is removed, so it reflects only the organic material and allows a fair comparison between trophic levels. One disadvantage is that the organisms must be killed (and dried) to measure dry mass, so it is destructive and only a sample can be taken.",
            markScheme: [
              "Water content varies between organisms / over time, making fresh mass unreliable (1)",
              "Dry mass removes water so reflects actual organic material / gives fair comparison (1)",
              "Disadvantage: organisms must be killed/dried / destructive / only a sample can be used (1)",
            ],
            commonError:
              "Saying dry mass 'measures the water' — it is the opposite: water is removed first.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "challenge",
            hints: [
              "Why is the water content of organisms a problem for comparisons?",
              "Dry mass leaves only the organic material.",
              "Think about what you must do to an organism to dry it fully.",
            ],
            strategy: "Give the reason FOR dry mass and one drawback, as the question demands both.",
          },
          {
            id: "bio-ecology-bq2-07",
            question:
              "A pond pyramid of biomass is inverted: phytoplankton biomass is smaller than the zooplankton biomass above it. Explain how this is possible without breaking the rule that energy always decreases up a food chain. [4]",
            marks: 4,
            modelAnswer:
              "Biomass is the mass present at a single moment (the standing crop). Phytoplankton reproduce very rapidly and are eaten almost as fast as they grow, so the mass present at any instant is small, even though a large total mass is produced over time. The zooplankton are larger and longer-lived, so more of their mass is present at once, giving an inverted biomass pyramid. Over time, however, the total energy produced by the phytoplankton is still greater than that reaching the zooplankton, so a pyramid of energy (measured per unit time) remains upright — no energy rule is broken.",
            markScheme: [
              "Biomass is a snapshot / standing crop at one moment (1)",
              "Phytoplankton have a high turnover / reproduce and are eaten very fast (1)",
              "So little phytoplankton mass is present at any instant (lower than zooplankton) (1)",
              "Energy measured over time is still greater at the producer level, so energy pyramid stays upright (1)",
            ],
            commonError:
              "Claiming energy is 'created' at the zooplankton level. Energy is not created — the inversion is only a snapshot of mass, not of energy flow over time.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "challenge",
            hints: [
              "Distinguish a snapshot of mass from a flow of energy over time.",
              "Phytoplankton turnover is extremely fast.",
              "What does an energy pyramid measure that a biomass snapshot does not?",
            ],
            strategy: "Use the words 'standing crop' (snapshot) versus 'energy per unit time' (flow).",
          },
          {
            id: "bio-ecology-bq2-08",
            question:
              "A grassland fixes 1 000 000 kJ/m²/yr in producers. Transfer efficiency is 10% per step.\n(a) Calculate the energy reaching the THIRD trophic level. [2]\n(b) A farmer wants to feed more people from this land. Suggest, with a reason, whether they should raise sheep (which eat grass) or grow vegetables for people to eat. [2]",
            marks: 4,
            modelAnswer:
              "(a) TL2 = 1 000 000 × 0.1 = 100 000 kJ/m²/yr. TL3 = 100 000 × 0.1 = 10 000 kJ/m²/yr.\n\n(b) They should grow vegetables for people to eat. Vegetables make people primary consumers (TL2), one transfer from the producers, whereas eating sheep makes people secondary consumers (TL3), losing another ~90% of the energy. The shorter food chain means far more food energy is available, so more people can be fed.",
            markScheme: [
              "(a) 1 000 000 × 0.1 × 0.1 / shows two steps (1)",
              "(a) = 10 000 kJ/m²/yr (1)",
              "(b) Grow vegetables / shorter food chain chosen (1)",
              "(b) Fewer transfers means less energy lost / more food energy available to feed people (1)",
            ],
            commonError:
              "Stopping at TL2 for part (a). The third trophic level needs TWO ×0.1 steps from the producers.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "core",
            hints: [
              "Producer to third level is two ×0.1 steps.",
              "Which option makes humans the lower trophic level?",
              "Shorter chain = less energy lost.",
            ],
            strategy: "Tie the calculation to the food-supply argument.",
            solutions: [
              {
                label: "Energy to the third level",
                steps: [
                  "TL1 producers = 1 000 000 kJ/m²/yr",
                  "TL2 = 1 000 000 × 0.1 = 100 000 kJ/m²/yr",
                  "TL3 = 100 000 × 0.1 = 10 000 kJ/m²/yr",
                ],
              },
            ],
          },
          {
            id: "bio-ecology-bq2-09",
            question:
              "Explain, in terms of energy, why intensive farming methods such as keeping animals warm and limiting their movement can increase meat production. [3]",
            marks: 3,
            modelAnswer:
              "Energy taken in by farm animals is normally lost as heat from respiration, including the energy used to maintain body temperature and to move around. Keeping the animals warm means less of their food energy is used to generate body heat, and restricting movement reduces the energy used in muscle activity. More of the energy from food is therefore converted into new body tissue (growth), increasing meat yield from the same amount of feed.",
            markScheme: [
              "Energy is normally lost as heat (respiration) and in movement (1)",
              "Keeping warm / limiting movement reduces these energy losses (1)",
              "More energy goes into growth / new tissue, so more meat is produced (1)",
            ],
            commonError:
              "Saying the animal 'gains energy' — it does not gain energy; it simply LOSES less, so more is available for growth.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "challenge",
            hints: [
              "Where does an animal's food energy normally go besides growth?",
              "Heat loss and movement both use energy.",
              "Reduce those losses and more energy is left for tissue.",
            ],
            strategy: "Frame it as 'less energy lost = more energy for growth'.",
          },
          {
            id: "bio-ecology-bq2-10",
            question:
              "The energy in a pyramid is: TL1 = 12 000 kJ, TL2 = 1080 kJ, TL3 = 108 kJ.\n(a) Calculate the percentage efficiency of transfer at each step. [2]\n(b) Comment on whether the transfer efficiencies are typical. [1]",
            marks: 3,
            modelAnswer:
              "(a) TL1 → TL2: (1080 ÷ 12 000) × 100 = 9%. TL2 → TL3: (108 ÷ 1080) × 100 = 10%.\n\n(b) Both efficiencies (9% and 10%) are close to the typical ‘about 10%’ rule of thumb for energy transfer between trophic levels, so they are typical.",
            markScheme: [
              "(a) TL1→TL2 = 9% (1080 ÷ 12 000 × 100) (1)",
              "(a) TL2→TL3 = 10% (108 ÷ 1080 × 100) (1)",
              "(b) Both close to the typical ~10% transfer / yes typical (1)",
            ],
            commonError:
              "Calculating one overall efficiency from TL1 to TL3 instead of each step separately.",
            guideRef: "Energy Flow & Pyramids",
            difficulty: "core",
            hints: [
              "Do each adjacent pair separately.",
              "Step 1 uses 1080 and 12 000; step 2 uses 108 and 1080.",
              "Compare your answers with the ‘about 10%’ rule.",
            ],
            strategy: "Treat each transfer as its own division.",
            solutions: [
              {
                label: "Two separate transfers",
                steps: [
                  "TL1 → TL2: 1080 ÷ 12 000 = 0.09 → 9%",
                  "TL2 → TL3: 108 ÷ 1080 = 0.10 → 10%",
                  "Both ≈ 10%, the typical value",
                ],
              },
            ],
          },
        ],
      },
      // ── QA PAPER 3 ── carbon cycle, nitrogen cycle, decomposition, populations
      {
        id: "bio-ecology-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Carbon and nitrogen cycles, decomposition, nutrient recycling, and population factors.",
        questions: [
          {
            id: "bio-ecology-bq3-01",
            question:
              "Name the two processes that REMOVE carbon dioxide from the atmosphere and return it, and state which organisms carry out the removal process. [3]",
            marks: 3,
            modelAnswer:
              "Photosynthesis removes carbon dioxide from the atmosphere; it is carried out by producers (green plants and algae). Respiration (by all living organisms) and combustion (burning of fuels) return carbon dioxide to the atmosphere.",
            markScheme: [
              "Photosynthesis removes CO₂ (1)",
              "Carried out by producers / plants / algae (1)",
              "Respiration and/or combustion return CO₂ (1)",
            ],
            commonError:
              "Saying respiration removes CO₂ — respiration RELEASES it. Only photosynthesis removes CO₂ from the air.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bq3-02",
            question:
              "State the form in which plants take up nitrogen, and explain why plants need nitrogen. [3]",
            marks: 3,
            modelAnswer:
              "Plants take up nitrogen as nitrate ions (NO₃⁻) from the soil through their roots. They need nitrogen to make amino acids, which are joined to form proteins (including enzymes), and other nitrogen-containing molecules such as DNA and chlorophyll. Proteins are essential for growth and healthy development.",
            markScheme: [
              "Taken up as nitrate ions (NO₃⁻) (1)",
              "Used to make amino acids / proteins (1)",
              "Proteins needed for growth / enzymes / (also DNA, chlorophyll) (1)",
            ],
            commonError:
              "Saying plants absorb nitrogen gas (N₂). Plants cannot use N₂ directly; they absorb nitrate ions.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bq3-03",
            question:
              "Describe the role of decomposers in both the carbon cycle and the nitrogen cycle. [4]",
            marks: 4,
            modelAnswer:
              "In the carbon cycle, decomposers (bacteria and fungi) break down dead organisms and waste, and as they respire they release carbon dioxide back into the atmosphere. In the nitrogen cycle, decomposers break down proteins and other nitrogen compounds in dead matter and waste, releasing ammonium ions (ammonification). These ammonium ions can then be converted to nitrate by nitrifying bacteria and reabsorbed by plants, recycling the nitrogen.",
            markScheme: [
              "Decomposers break down dead organisms / waste (1)",
              "Carbon cycle: respiration of decomposers releases CO₂ (1)",
              "Nitrogen cycle: break down proteins to release ammonium ions / ammonification (1)",
              "Ammonium can be converted to nitrate (nitrification) and reabsorbed by plants (1)",
            ],
            commonError:
              "Only mentioning one cycle. The question asks for the decomposers' role in BOTH carbon and nitrogen cycles.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "core",
            hints: [
              "What gas do decomposers release when they respire?",
              "What nitrogen compound do they release from dead protein?",
              "How does that nitrogen get back to plants?",
            ],
          },
          {
            id: "bio-ecology-bq3-04",
            question:
              "Explain the roles of nitrogen-fixing bacteria, nitrifying bacteria and denitrifying bacteria in the nitrogen cycle. [4]",
            marks: 4,
            modelAnswer:
              "Nitrogen-fixing bacteria (e.g. Rhizobium in root nodules, or free-living bacteria) convert atmospheric nitrogen gas (N₂) into ammonium ions/nitrogen compounds that organisms can use. Nitrifying bacteria convert ammonium ions into nitrite and then nitrate (nitrification), the form plants absorb. Denitrifying bacteria, in anaerobic/waterlogged soils, convert nitrate back into nitrogen gas (denitrification), returning nitrogen to the atmosphere and reducing soil fertility.",
            markScheme: [
              "Nitrogen-fixing bacteria: convert N₂ gas to ammonium / nitrogen compounds (1)",
              "Nitrifying bacteria: convert ammonium → nitrite → nitrate (1)",
              "Plants absorb nitrate / nitrate is the usable form (1)",
              "Denitrifying bacteria: convert nitrate → N₂ gas (in anaerobic soil) (1)",
            ],
            commonError:
              "Mixing up nitrification and nitrogen fixation. Fixation makes ammonium from N₂; nitrification makes nitrate from ammonium.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "core",
            hints: [
              "Fixation starts from nitrogen GAS.",
              "Nitrification ends at NITRATE for plants.",
              "Denitrification puts nitrogen back into the air.",
            ],
            strategy: "Pair each bacterium with its specific conversion.",
          },
          {
            id: "bio-ecology-bq3-05",
            question:
              "A gardener finds that a warm, moist, well-aerated compost heap rots much faster than a cold, dry, compacted one. Explain how temperature, moisture and oxygen each affect the rate of decomposition. [4]",
            marks: 4,
            modelAnswer:
              "Warmth increases the rate of decomposition because decomposers' enzymes and respiration work faster at higher temperatures (up to an optimum), so they break matter down more quickly. Moisture is needed because decomposers require water for their reactions and to dissolve and absorb nutrients; a dry heap slows their activity. Oxygen is needed for aerobic respiration of the decomposers, providing the energy for growth and breakdown; a well-aerated heap supplies oxygen, whereas a compacted, anaerobic heap rots slowly.",
            markScheme: [
              "Warmth speeds enzyme activity / respiration of decomposers (up to optimum) (1)",
              "Moisture/water needed for reactions / nutrient uptake by decomposers (1)",
              "Oxygen needed for aerobic respiration of decomposers (1)",
              "Each suitable condition links to a faster rate of breakdown (1)",
            ],
            commonError:
              "Listing the conditions without saying WHY each one speeds decomposers (enzymes, respiration, water for reactions).",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "core",
            hints: [
              "Decomposers are organisms with enzymes — how does warmth affect enzymes?",
              "Why do living cells need water?",
              "Aerobic respiration needs which gas?",
            ],
          },
          {
            id: "bio-ecology-bq3-06",
            question:
              "Explain why growing a crop of clover (a legume) one year can reduce the amount of nitrogen fertiliser a farmer needs the next year. [3]",
            marks: 3,
            modelAnswer:
              "Clover has root nodules containing nitrogen-fixing bacteria (Rhizobium) that convert atmospheric nitrogen gas into nitrogen compounds. When the clover dies and is ploughed in, decomposers break it down, releasing these nitrogen compounds (as ammonium, then nitrate) into the soil. This raises the soil's natural nitrate content, so less artificial nitrogen fertiliser is needed for the next crop.",
            markScheme: [
              "Clover/legume root nodules contain nitrogen-fixing bacteria (Rhizobium) (1)",
              "Bacteria fix N₂ into nitrogen compounds / ammonium (1)",
              "Decomposition of clover releases nitrate/nitrogen into soil, raising fertility (1)",
            ],
            commonError:
              "Saying the clover 'absorbs' nitrogen from the air through its leaves. It is the bacteria in the ROOT NODULES that fix nitrogen.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "challenge",
            hints: [
              "What lives in a legume's root nodules?",
              "Those bacteria carry out which process?",
              "What happens to the fixed nitrogen when the clover decomposes?",
            ],
            strategy: "Connect fixation in the living plant to release on decomposition.",
          },
          {
            id: "bio-ecology-bq3-07",
            question:
              "State three factors that can increase the size of a population and three that can decrease it. [3]",
            marks: 3,
            modelAnswer:
              "Factors that increase a population include: more available food, fewer predators, more breeding sites/space, an absence of disease, or a suitable climate. Factors that decrease a population include: shortage of food, more predators, disease, competition, and unfavourable abiotic conditions (e.g. drought or extreme temperature).",
            markScheme: [
              "Three valid increasing factors (more food, fewer predators, more space/breeding sites, no disease) (1)",
              "Three valid decreasing factors (less food, more predators, disease, competition, harsh abiotic conditions) (1)",
              "Factors correctly assigned to the right effect (1)",
            ],
            commonError:
              "Giving the same factor for both lists without explaining direction — be clear whether more or less of the factor is meant.",
            guideRef: "Ecosystem Vocabulary",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bq3-08",
            question:
              "Graphs of a predator (lynx) and its prey (hare) over many years show repeating cycles, with the lynx peaks lagging just behind the hare peaks. Explain the cause of this pattern. [4]",
            marks: 4,
            modelAnswer:
              "When hare numbers rise, there is more food for lynx, so more lynx survive and reproduce — but this takes time, so the lynx population peaks shortly AFTER the hare peak (a time lag). The increased number of lynx then eat more hares, so the hare population falls. With fewer hares, food becomes scarce for lynx, so the lynx population falls too. Reduced predation then allows hares to recover, and the cycle repeats. The predator and prey populations are linked through food supply and predation, producing the lagged oscillations.",
            markScheme: [
              "More hares = more food, so lynx survive/reproduce and increase (1)",
              "Time lag: lynx peak comes after hare peak because reproduction takes time (1)",
              "More lynx eat more hares, so hares decline (1)",
              "Fewer hares = less food, so lynx decline; hares then recover and cycle repeats (1)",
            ],
            commonError:
              "Forgetting the time lag. The key idea is that the predator response is delayed because reproduction is not instant.",
            guideRef: "Ecosystem Vocabulary",
            difficulty: "challenge",
            hints: [
              "Start with what plenty of prey does for the predator.",
              "Why can't the predator increase instantly?",
              "Once predators are abundant, what happens to prey, then back to predators?",
            ],
            strategy: "Describe one full loop of the cycle, stressing the time lag.",
          },
          {
            id: "bio-ecology-bq3-09",
            question:
              "Carbon can be locked away in fossil fuels for millions of years. Explain how fossil fuels form and how their carbon is suddenly returned to the atmosphere. [3]",
            marks: 3,
            modelAnswer:
              "Fossil fuels (coal, oil, natural gas) form from the remains of organisms that died and were buried in conditions (e.g. low oxygen) that prevented complete decomposition. Over millions of years, heat and pressure converted this organic matter into fossil fuels, locking the carbon away. The carbon is suddenly returned to the atmosphere as carbon dioxide when the fossil fuels are burned (combustion).",
            markScheme: [
              "Formed from remains of dead organisms not fully decomposed / buried in low-oxygen conditions (1)",
              "Heat and pressure over millions of years convert remains to fossil fuels (1)",
              "Combustion / burning releases the carbon as CO₂ (1)",
            ],
            commonError:
              "Saying fossil fuels form 'quickly' or that respiration releases their carbon — it is combustion that releases fossil-fuel carbon.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "core",
            hints: [
              "What conditions stop dead organisms decomposing fully?",
              "What two physical factors act over millions of years?",
              "Which process releases the stored carbon rapidly?",
            ],
          },
          {
            id: "bio-ecology-bq3-10",
            question:
              "Lightning and the Haber process both add usable nitrogen to ecosystems without bacteria. Explain how each does so and why this matters for the nitrogen cycle. [3]",
            marks: 3,
            modelAnswer:
              "Lightning provides enough energy to make nitrogen gas (N₂) react with oxygen, forming oxides of nitrogen that dissolve in rain to give nitrates, which are washed into the soil and absorbed by plants. The Haber process (industrial) combines nitrogen and hydrogen to make ammonia, which is used to manufacture nitrogen fertilisers added to soil. Both routes add combined/usable nitrogen to ecosystems alongside the work of nitrogen-fixing bacteria, increasing the nitrate available for plant growth.",
            markScheme: [
              "Lightning: energy makes N₂ react (with O₂) forming nitrogen oxides/nitrates washed into soil (1)",
              "Haber process: makes ammonia → nitrogen fertiliser added to soil (1)",
              "Both add usable/combined nitrogen (nitrate) for plants, supplementing bacterial fixation (1)",
            ],
            commonError:
              "Assuming all nitrogen fixation is biological. Lightning and the Haber process are non-biological routes that also fix nitrogen.",
            guideRef: "The Carbon Cycle & The Nitrogen Cycle",
            difficulty: "challenge",
            hints: [
              "What does lightning give that lets unreactive N₂ react?",
              "The Haber process makes which compound used in fertilisers?",
              "Both routes end up adding nitrate to the soil.",
            ],
            strategy: "Cover both routes and link them to nitrate available for plants.",
          },
        ],
      },
      // ── QA PAPER 4 ── human impact, pollution, eutrophication, greenhouse, conservation
      {
        id: "bio-ecology-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Pollution, eutrophication, deforestation, the greenhouse effect, climate change, and conservation.",
        questions: [
          {
            id: "bio-ecology-bq4-01",
            question:
              "State two greenhouse gases and describe two human activities that increase their concentration. [4]",
            marks: 4,
            modelAnswer:
              "Two greenhouse gases are carbon dioxide and methane. Burning fossil fuels (e.g. in power stations and vehicles) increases carbon dioxide. Deforestation increases carbon dioxide (less is removed by photosynthesis and burning timber releases it). Cattle farming and rice paddy fields increase methane. (Any two valid activities.)",
            markScheme: [
              "Two greenhouse gases named: carbon dioxide and methane (1)",
              "Burning fossil fuels increases CO₂ (1)",
              "Deforestation increases CO₂ (less photosynthesis / burning) (1)",
              "Cattle / rice paddies increase methane (1) — any two activities credited",
            ],
            commonError:
              "Naming oxygen or nitrogen as greenhouse gases — they are not. The main greenhouse gases are CO₂, methane and water vapour.",
            guideRef: "Human Impact on the Environment",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bq4-02",
            question:
              "Describe three harmful effects of deforestation on the environment. [3]",
            marks: 3,
            modelAnswer:
              "Deforestation reduces biodiversity by destroying the habitats of many species. It increases atmospheric carbon dioxide, because fewer trees remove CO₂ by photosynthesis and burning timber releases stored carbon, enhancing the greenhouse effect. It also disrupts the water cycle (less transpiration leads to reduced rainfall) and can cause soil erosion and flooding, as tree roots no longer bind the soil.",
            markScheme: [
              "Reduces biodiversity / destroys habitats (1)",
              "Increases atmospheric CO₂ (less photosynthesis / burning timber) (1)",
              "Disrupts water cycle / less rainfall, OR soil erosion / flooding (1)",
            ],
            commonError:
              "Only stating 'animals lose homes' — give the named consequences (biodiversity, CO₂, water cycle/erosion) for the marks.",
            guideRef: "Human Impact on the Environment",
            difficulty: "warmup",
          },
          {
            id: "bio-ecology-bq4-03",
            question:
              "Describe the full sequence of eutrophication, from fertiliser use to the death of fish. [6]",
            marks: 6,
            modelAnswer:
              "Excess fertiliser containing nitrates and phosphates is washed (leached) by rain from farmland into rivers and lakes. The mineral ions cause rapid growth of algae and cyanobacteria, forming an algal bloom over the water surface. The bloom blocks light from reaching submerged water plants, which can no longer photosynthesise and so die. Decomposing bacteria break down the dead plants and multiply rapidly. These bacteria respire aerobically, using up the dissolved oxygen in the water faster than it is replaced. The dissolved oxygen falls so low that fish and other aerobic organisms cannot respire and they suffocate and die.",
            markScheme: [
              "Fertiliser (nitrate/phosphate) leaches/runs off into water body (1)",
              "Causes rapid algal growth / algal bloom on surface (1)",
              "Bloom blocks light from submerged plants (1)",
              "Submerged plants cannot photosynthesise and die (1)",
              "Bacteria decompose dead plants and increase in number (1)",
              "Bacteria use up dissolved oxygen (aerobic respiration) → fish suffocate/die (1)",
            ],
            commonError:
              "Saying the ALGAE use up the oxygen. It is the DECOMPOSING BACTERIA respiring that deplete the dissolved oxygen.",
            guideRef: "Human Impact on the Environment",
            difficulty: "core",
            hints: [
              "Where do the minerals come from and how do they reach the water?",
              "What do excess minerals do to algae?",
              "Trace the effect of the bloom on plants, then on bacteria, then on oxygen.",
            ],
            strategy: "Write the six steps in strict cause-and-effect order.",
          },
          {
            id: "bio-ecology-bq4-04",
            question:
              "Explain how the enhanced greenhouse effect leads to global warming, and state two possible consequences of climate change. [5]",
            marks: 5,
            modelAnswer:
              "The Sun's radiation warms the Earth, which re-emits energy as infrared radiation. Greenhouse gases such as carbon dioxide and methane absorb this outgoing infrared radiation and re-radiate some of it back to the surface, keeping the planet warm (the natural greenhouse effect). Human activities (burning fossil fuels, deforestation, cattle and rice farming) have increased the concentration of these gases, so more infrared is absorbed and re-radiated, enhancing the effect and raising average global temperatures. Two possible consequences are: rising sea levels (from melting ice and thermal expansion) causing flooding of low-lying land; and more frequent extreme weather events, OR shifts/extinctions in species distribution.",
            markScheme: [
              "Earth re-emits energy as infrared radiation (1)",
              "Greenhouse gases absorb outgoing infrared and re-radiate some back to surface (1)",
              "Human activity raises greenhouse gas concentration, enhancing the effect / warming (1)",
              "Consequence 1: rising sea levels / flooding (1)",
              "Consequence 2: extreme weather / changed species distribution / extinctions (1)",
            ],
            commonError:
              "Saying greenhouse gases 'trap the Sun's rays' or 'make a hole in the ozone' — they absorb OUTGOING infrared; ozone depletion is a separate issue.",
            guideRef: "Human Impact on the Environment",
            difficulty: "core",
            hints: [
              "Distinguish incoming sunlight from outgoing infrared.",
              "Which radiation do greenhouse gases actually absorb?",
              "Name effects on sea level and on weather/species.",
            ],
          },
          {
            id: "bio-ecology-bq4-05",
            question:
              "Acid rain damages forests and lakes far from where the polluting gases were released. Explain how acid rain forms and one effect on aquatic life. [4]",
            marks: 4,
            modelAnswer:
              "Burning fossil fuels releases sulfur dioxide and oxides of nitrogen into the atmosphere. These gases dissolve in water vapour/rain to form sulfuric acid and nitric acid, producing acid rain, which can be carried long distances by wind before it falls. In lakes, the acid lowers the pH of the water; this can damage fish gills and the eggs and young of aquatic organisms, and release toxic aluminium ions from soils, killing fish and reducing biodiversity.",
            markScheme: [
              "Burning fossil fuels releases SO₂ and oxides of nitrogen (1)",
              "These dissolve in rain/water to form acids (sulfuric/nitric acid) (1)",
              "Acid rain lowers pH of lakes/soil (1)",
              "Effect on aquatic life: damages fish/eggs / releases toxic ions / kills organisms / reduces biodiversity (1)",
            ],
            commonError:
              "Naming carbon dioxide as the main cause of acid rain. The key gases are sulfur dioxide and oxides of nitrogen.",
            guideRef: "Human Impact on the Environment",
            difficulty: "core",
            hints: [
              "Which gases from burning fuels are acidic?",
              "What do they form when they dissolve in rain?",
              "How does a low pH harm life in a lake?",
            ],
          },
          {
            id: "bio-ecology-bq4-06",
            question:
              "Explain why non-biodegradable plastics are a particular pollution problem, and describe how micro-plastics can affect a marine food chain. [4]",
            marks: 4,
            modelAnswer:
              "Non-biodegradable plastics are not broken down by decomposers, so they persist in the environment for hundreds of years and accumulate, polluting land and oceans. Plastics break into tiny micro-plastics that small marine organisms ingest. These pass up the food chain as larger animals eat the smaller ones, and because plastics are not removed from the body they build up (bioaccumulate), reaching the highest concentrations in top predators such as seabirds and large fish, which can be harmed or killed.",
            markScheme: [
              "Plastics are non-biodegradable / not broken down by decomposers, so persist/accumulate (1)",
              "Micro-plastics are ingested by small organisms low in the food chain (1)",
              "Passed up the food chain as organisms are eaten (1)",
              "Bioaccumulate / concentrate in top predators, harming them (1)",
            ],
            commonError:
              "Saying plastics 'decompose slowly' and release nutrients — the point is that they are NOT broken down and instead accumulate in food chains.",
            guideRef: "Human Impact on the Environment",
            difficulty: "challenge",
            hints: [
              "Why don't decomposers remove plastic?",
              "Where do micro-plastics first enter the food chain?",
              "Why do top predators end up with the most?",
            ],
            strategy: "Link 'not broken down' to 'accumulates up the chain'.",
          },
          {
            id: "bio-ecology-bq4-07",
            question:
              "Describe three methods used to conserve endangered species or maintain biodiversity, and for ONE method explain why it is effective. [4]",
            marks: 4,
            modelAnswer:
              "Three conservation methods are: establishing nature reserves and protected areas; running captive-breeding programmes (e.g. in zoos) to increase numbers before releasing animals back into the wild; and storing seeds in seed banks to preserve plant genetic material. Captive breeding is effective because it allows endangered animals to reproduce safely away from predators and habitat loss, with breeding records used to pair unrelated individuals and maintain genetic variation, so a healthy population can be built up and reintroduced.",
            markScheme: [
              "Three valid methods (nature reserves / protected areas; captive breeding; seed banks; sustainable fishing/forestry; controlling pollution) (1)+(1)+(1)",
              "Clear explanation of why ONE chosen method is effective (e.g. captive breeding boosts numbers / maintains genetic variation for reintroduction) (1)",
            ],
            commonError:
              "Listing methods without an explanation. The question requires a reason WHY one method works for the final mark.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "core",
            hints: [
              "Think of protected areas, breeding programmes, and seed/gene banks.",
              "Pick the method you can best justify.",
              "For captive breeding, why is safety and record-keeping important?",
            ],
          },
          {
            id: "bio-ecology-bq4-08",
            question:
              "Explain what is meant by sustainable resource use, and describe how a forest can be harvested sustainably. [4]",
            marks: 4,
            modelAnswer:
              "Sustainable resource use means using a resource at a rate that allows it to be replaced naturally, so that present needs are met without preventing future generations from meeting their own needs. A forest can be harvested sustainably by replanting (or allowing natural regrowth of) a tree for each one felled, so the number of trees does not fall; by removing only mature trees and leaving younger ones to grow; by managing the rate of felling to match the rate of regrowth; and by protecting habitats and biodiversity within the forest while it is used.",
            markScheme: [
              "Sustainable = use at a rate that allows replacement (1)",
              "Meets present needs without harming future generations' needs (1)",
              "Replant a tree for each one felled / match felling to regrowth (1)",
              "Selective felling of mature trees / protect biodiversity (1)",
            ],
            commonError:
              "Defining sustainability as 'never using the resource'. It means using it at a renewable rate, not avoiding use entirely.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "core",
            hints: [
              "Sustainability balances use against replacement.",
              "How do you stop the number of trees falling?",
              "Selective felling and replanting are key ideas.",
            ],
          },
          {
            id: "bio-ecology-bq4-09",
            question:
              "Over-fishing has reduced cod stocks in a sea area. Suggest and justify three measures that could allow the cod population to recover. [4]",
            marks: 4,
            modelAnswer:
              "Catch quotas could limit the number/mass of cod taken each year, preventing the population from being fished faster than it can reproduce. Increasing the net mesh size would let smaller, younger cod escape so they survive to breed and replace the population. Closed seasons or protected breeding areas during spawning would allow cod to reproduce undisturbed. Monitoring fish numbers and enforcing the rules ensures the measures actually work, so the population can grow back to a sustainable level.",
            markScheme: [
              "Catch quotas limit numbers taken so population not over-exploited (1)",
              "Larger mesh size lets young fish escape and survive to breed (1)",
              "Closed seasons / protected breeding areas allow reproduction (1)",
              "Each measure justified by linking to recovery/breeding (1)",
            ],
            commonError:
              "Listing measures without a reason. Each measure must be linked to letting cod breed/recover for full marks.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "challenge",
            hints: [
              "How do you limit how many fish are caught?",
              "How can net design protect young fish?",
              "When and where is it most important to protect cod?",
            ],
            strategy: "Pair every measure with a justification about breeding/recovery.",
          },
          {
            id: "bio-ecology-bq4-10",
            question:
              "Genetically modified (GM) crops can be made resistant to insect pests. Discuss one benefit and one concern of growing such GM crops. [4]",
            marks: 4,
            modelAnswer:
              "A benefit is that pest-resistant GM crops (e.g. carrying the Bt toxin gene) are damaged less by insect pests, so yields are higher and farmers need to spray fewer chemical pesticides, reducing cost and pesticide pollution. A concern is the possible effect on biodiversity and non-target organisms: the toxin or the spread of the inserted gene to wild plants ('gene escape') could harm helpful insects or create resistant 'superweeds', and there are ethical worries about long-term effects and corporate control of seed supply.",
            markScheme: [
              "Benefit: higher yield / less crop damage from pests (1)",
              "Benefit detail: less pesticide use / less pollution / lower cost (1)",
              "Concern: harm to biodiversity / non-target organisms / gene escape / superweeds (1)",
              "Concern detail: unknown long-term/health effects OR ethical/corporate concerns (1)",
            ],
            commonError:
              "Giving only benefits or only concerns. A 'discuss' question needs both sides for full marks.",
            guideRef: "Conservation, Biotechnology & Genetic Modification",
            difficulty: "challenge",
            hints: [
              "What does pest resistance do to yield and pesticide use?",
              "What might happen to non-target insects or to wild plants?",
              "Give one clear point on each side.",
            ],
            strategy: "Balance one benefit against one concern, each with a supporting detail.",
          },
        ],
      },
    ],
  },
};
