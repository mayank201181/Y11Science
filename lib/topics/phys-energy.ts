import type { Topic } from "../types";

export const physEnergy: Topic = {
  id: "phys-energy",
  title: "Energy, Work & Power",
  subject: "physics",
  icon: "⚡",
  blurb: "Energy stores, transfers, work, power, efficiency, Sankey diagrams and energy resources.",
  intro:
    "Energy is the capacity to do work — it cannot be created or destroyed, only transferred between stores. " +
    "In this topic you will master the key formulae (Ek, GPE, W, P, efficiency), read and draw Sankey diagrams, " +
    "and evaluate the full range of energy resources that power modern society.",

  guide: [
    // ─── SECTION 1 ───────────────────────────────────────────────────────────
    {
      heading: "Energy Stores and Transfers",
      body:
        "Energy is stored in several distinct ways. The main **stores** are:\n\n" +
        "- **Kinetic** — energy due to motion of an object\n" +
        "- **Gravitational potential (GPE)** — energy due to position in a gravitational field\n" +
        "- **Chemical** — energy stored in bonds (food, fuel, batteries)\n" +
        "- **Elastic/strain** — energy stored in a stretched or compressed object\n" +
        "- **Nuclear** — energy stored in the nucleus of an atom\n" +
        "- **Internal (thermal)** — total kinetic and potential energy of the particles in a substance\n" +
        "- **Electrostatic** — energy stored between charged objects\n\n" +
        "Energy is **transferred** from one store to another by four mechanisms:\n\n" +
        "- **Mechanical work** — a force acting over a distance\n" +
        "- **Electrical working** — charge flowing through a potential difference\n" +
        "- **Heating** — energy flowing from a hot region to a cooler one\n" +
        "- **Waves** — including electromagnetic (light, infrared) and sound waves\n\n" +
        "When you switch on a torch, chemical energy (battery) is transferred electrically to the bulb, " +
        "which then radiates light energy (waves) and dissipates heat energy (heating).",
      keyPoints: [
        "There are 7 key energy stores: kinetic, GPE, chemical, elastic, nuclear, internal, electrostatic.",
        "Energy is transferred by: mechanical work, electrical working, heating, and waves.",
        "No energy store is ever 'used up' — energy is always transferred, never destroyed.",
        "Dissipation means energy spreads into the surroundings as less useful thermal energy.",
        "Identifying the store → transfer → store chain is the first step in any energy problem.",
      ],
      discovery: {
        problem:
          "A compressed spring is released and fires a ball upward. Before you read on, list every energy store involved " +
          "from the moment the spring is compressed to the moment the ball reaches its highest point.",
        idea:
          "Spring compressed → **elastic store**. Released → mechanical work transfers energy to ball → **kinetic store**. " +
          "Ball rises → kinetic store decreases, **gravitational potential store** increases. At the top, kinetic = 0 " +
          "(ignoring air resistance) and all energy is in the GPE store. This chain — elastic → kinetic → GPE — " +
          "is a classic three-store sequence.",
      },
      diagrams: [
        {
          caption: "Energy transfer chain: spring → ball → height",
          svg:
            '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Energy transfer chain showing spring elastic store transferring to kinetic store of a ball, then to gravitational potential store at height">' +
            '<rect width="320" height="200" fill="#0f172a"/>' +
            // Spring box
            '<rect x="10" y="75" width="80" height="50" rx="6" fill="#1e293b" stroke="#a78bfa" stroke-width="2"/>' +
            '<text x="50" y="96" text-anchor="middle" font-size="9" fill="#a78bfa" font-family="sans-serif">Elastic</text>' +
            '<text x="50" y="110" text-anchor="middle" font-size="9" fill="#a78bfa" font-family="sans-serif">Store</text>' +
            // Arrow 1
            '<line x1="92" y1="100" x2="118" y2="100" stroke="#38bdf8" stroke-width="2" marker-end="url(#arr)"/>' +
            '<text x="105" y="94" text-anchor="middle" font-size="8" fill="#38bdf8" font-family="sans-serif">Work</text>' +
            // Kinetic box
            '<rect x="120" y="75" width="80" height="50" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="2"/>' +
            '<text x="160" y="96" text-anchor="middle" font-size="9" fill="#34d399" font-family="sans-serif">Kinetic</text>' +
            '<text x="160" y="110" text-anchor="middle" font-size="9" fill="#34d399" font-family="sans-serif">Store</text>' +
            // Arrow 2
            '<line x1="202" y1="100" x2="228" y2="100" stroke="#38bdf8" stroke-width="2" marker-end="url(#arr)"/>' +
            '<text x="215" y="94" text-anchor="middle" font-size="8" fill="#38bdf8" font-family="sans-serif">Work</text>' +
            // GPE box
            '<rect x="230" y="75" width="80" height="50" rx="6" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>' +
            '<text x="270" y="96" text-anchor="middle" font-size="9" fill="#fbbf24" font-family="sans-serif">GPE</text>' +
            '<text x="270" y="110" text-anchor="middle" font-size="9" fill="#fbbf24" font-family="sans-serif">Store</text>' +
            // Labels
            '<text x="160" y="165" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="sans-serif">Ball rises: Ek decreases, GPE increases</text>' +
            // Arrow marker
            '<defs><marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">' +
            '<path d="M0,0 L6,3 L0,6 Z" fill="#38bdf8"/></marker></defs>' +
            '</svg>',
        },
      ],
      strategies: ["List all stores at each stage", "Follow the transfer mechanism between stages"],
      whyItWorks:
        "The principle of conservation of energy guarantees that the total energy across all stores " +
        "remains constant in an isolated system. Each transfer mechanism is just a process that moves " +
        "energy between stores without creating or destroying it.",
    },

    // ─── SECTION 2 ───────────────────────────────────────────────────────────
    {
      heading: "Conservation of Energy and Key Equations",
      body:
        "**The Principle of Conservation of Energy:** Energy cannot be created or destroyed; it can only " +
        "be transferred from one store to another.\n\n" +
        "**Kinetic energy:**\n\n" +
        "`Ek = ½mv²`\n\n" +
        "where *m* = mass (kg) and *v* = speed (m/s). Ek is measured in joules (J).\n\n" +
        "**Gravitational potential energy change:**\n\n" +
        "`ΔGPE = mgΔh`\n\n" +
        "where *g* = gravitational field strength = 10 N/kg (IGCSE value), *Δh* = change in height (m).\n\n" +
        "**Work done / energy transferred:**\n\n" +
        "`W = Fd`\n\n" +
        "where *F* = force (N), *d* = distance moved in the direction of the force (m). W is in joules (J). " +
        "One joule = one newton-metre (1 J = 1 N m).\n\n" +
        "**KE ↔ GPE conservation** (no friction): When an object falls or swings, Ek gained = GPE lost.\n\n" +
        "Example — a 2 kg ball dropped from rest through 5 m:\n\n" +
        "GPE lost = mgΔh = 2 × 10 × 5 = **100 J**\n\n" +
        "Ek gained = 100 J → v = √(2Ek/m) = √(2 × 100 / 2) = √100 = **10 m/s**",
      keyPoints: [
        "Conservation of energy: total energy is always constant in a closed system.",
        "Ek = ½mv² (kinetic energy, joules); ΔGPE = mgΔh (gravitational PE, joules).",
        "W = Fd (work done = force × distance in direction of force, joules).",
        "When KE ↔ GPE (no friction): Ek gained = GPE lost (or vice versa).",
        "g = 10 N/kg is used throughout IGCSE 0625 calculations.",
      ],
      discovery: {
        problem:
          "A pendulum bob of mass 0.5 kg is raised 0.2 m above its lowest point and released from rest. " +
          "WITHOUT using any kinematics equations, predict the speed of the bob at its lowest point.",
        idea:
          "Use energy conservation: all GPE converts to KE (ignoring air resistance). " +
          "GPE = mgh = 0.5 × 10 × 0.2 = 1 J. So Ek = 1 J. Then ½mv² = 1 J → v² = 2/0.5 = 4 → v = 2 m/s. " +
          "No kinematics needed — energy conservation does the work directly.",
      },
      diagrams: [
        {
          caption: "Pendulum energy exchange: GPE ↔ Kinetic",
          svg:
            '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pendulum diagram showing GPE at top positions converting to kinetic energy at the bottom">' +
            '<rect width="320" height="200" fill="#0f172a"/>' +
            // Pivot
            '<circle cx="160" cy="20" r="6" fill="#b7bce0"/>' +
            '<text x="170" y="25" font-size="9" fill="#b7bce0" font-family="sans-serif">Pivot</text>' +
            // Left string + bob (high GPE, low KE)
            '<line x1="160" y1="20" x2="80" y2="120" stroke="#475569" stroke-width="1.5" stroke-dasharray="4,2"/>' +
            '<circle cx="80" cy="120" r="12" fill="#a78bfa" stroke="#7c3aed" stroke-width="2"/>' +
            '<text x="16" y="112" font-size="8" fill="#a78bfa" font-family="sans-serif">Max GPE</text>' +
            '<text x="16" y="123" font-size="8" fill="#a78bfa" font-family="sans-serif">Ek = 0</text>' +
            // Right string + bob (high GPE, low KE)
            '<line x1="160" y1="20" x2="240" y2="120" stroke="#475569" stroke-width="1.5" stroke-dasharray="4,2"/>' +
            '<circle cx="240" cy="120" r="12" fill="#a78bfa" stroke="#7c3aed" stroke-width="2"/>' +
            '<text x="252" y="112" font-size="8" fill="#a78bfa" font-family="sans-serif">Max GPE</text>' +
            '<text x="252" y="123" font-size="8" fill="#a78bfa" font-family="sans-serif">Ek = 0</text>' +
            // Centre string + bob (zero GPE, max KE)
            '<line x1="160" y1="20" x2="160" y2="155" stroke="#38bdf8" stroke-width="2"/>' +
            '<circle cx="160" cy="167" r="12" fill="#34d399" stroke="#059669" stroke-width="2"/>' +
            '<text x="172" y="162" font-size="8" fill="#34d399" font-family="sans-serif">Max Ek</text>' +
            '<text x="172" y="173" font-size="8" fill="#34d399" font-family="sans-serif">GPE = 0</text>' +
            // Height arrow
            '<line x1="60" y1="120" x2="60" y2="167" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#parr)" marker-start="url(#parr2)"/>' +
            '<text x="30" y="148" font-size="8" fill="#fbbf24" font-family="sans-serif">h</text>' +
            // Arrow markers
            '<defs>' +
            '<marker id="parr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#fbbf24"/></marker>' +
            '<marker id="parr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto-start-reverse"><path d="M0,0 L6,3 L0,6 Z" fill="#fbbf24"/></marker>' +
            '</defs>' +
            '<text x="160" y="195" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif">Total energy = GPE + Ek = constant</text>' +
            '</svg>',
        },
      ],
      thinkDeeper:
        "In a real pendulum, the bob gradually slows due to air resistance and friction at the pivot. " +
        "Energy is not lost — it is dissipated as thermal energy in the air and pivot. After many swings, " +
        "where has all the energy gone, and is the total still constant?",
      strategies: ["Identify the energy stores at start and end", "Set GPE lost = KE gained (no friction)", "Rearrange Ek = ½mv² for v"],
      whyItWorks:
        "Because energy is conserved, the total (KE + GPE) is the same at every point on the swing. " +
        "Writing KE_bottom = GPE_top eliminates all intermediate steps and avoids needing to know forces at each instant.",
    },

    // ─── SECTION 3 ───────────────────────────────────────────────────────────
    {
      heading: "Work Done, Power and Efficiency",
      body:
        "**Work done** is the energy transferred when a force moves its point of application:\n\n" +
        "`W = Fd`\n\n" +
        "Only the component of force **in the direction of motion** counts. If force and displacement are " +
        "perpendicular (e.g. a satellite in circular orbit), no work is done.\n\n" +
        "**Power** is the rate of energy transfer:\n\n" +
        "`P = W / t = E / t`\n\n" +
        "Unit: watt (W), where 1 W = 1 J/s. Also useful: `P = Fv` when force and velocity are constant.\n\n" +
        "**Efficiency** measures how much of the input energy is usefully used:\n\n" +
        "`efficiency = (useful energy output / total energy input) × 100%`\n\n" +
        "Or equivalently:\n\n" +
        "`efficiency = (useful power output / total power input) × 100%`\n\n" +
        "Efficiency is always between 0 % and 100 %. It can never exceed 100 % — that would violate " +
        "conservation of energy.\n\n" +
        "**Sankey diagrams** represent energy flow visually. The width of each arrow is proportional to " +
        "the amount of energy. The main arrow splits into useful output (straight ahead) and wasted energy " +
        "(arrows branching sideways or downward).",
      keyPoints: [
        "W = Fd (work done, joules); force must be in the direction of motion.",
        "P = W/t = E/t (power, watts); also P = Fv for constant force and speed.",
        "Efficiency = useful energy out / total energy in × 100%; max is 100%.",
        "Sankey diagrams: arrow widths proportional to energy; wasted energy branches off sideways.",
        "Higher efficiency means less energy wasted as heat/sound to surroundings.",
      ],
      discovery: {
        problem:
          "A motor lifts a 50 kg crate through 8 m in 10 s. The motor uses 5000 J of electrical energy. " +
          "Before calculating, predict whether the efficiency will be above or below 50%, then calculate it.",
        idea:
          "Useful output = GPE gained = mgh = 50 × 10 × 8 = 4000 J. " +
          "Efficiency = (4000 / 5000) × 100% = **80%**. " +
          "The guess depends on intuition about motor losses — the actual 80% tells us very little energy " +
          "is wasted, which is typical of a well-designed electric motor.",
      },
      diagrams: [
        {
          caption: "Sankey diagram: motor with 80% efficiency",
          svg:
            '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sankey diagram for a motor showing 5000 J input, 4000 J useful mechanical output and 1000 J wasted as heat">' +
            '<rect width="320" height="200" fill="#0f172a"/>' +
            // Input arrow (full width = 100 J ~ 80px tall, centred at y=100)
            '<rect x="10" y="60" width="100" height="80" rx="4" fill="#38bdf8" opacity="0.85"/>' +
            '<text x="60" y="97" text-anchor="middle" font-size="10" fill="#0f172a" font-weight="bold" font-family="sans-serif">Input</text>' +
            '<text x="60" y="111" text-anchor="middle" font-size="10" fill="#0f172a" font-weight="bold" font-family="sans-serif">5000 J</text>' +
            // Arrow body
            '<rect x="110" y="60" width="60" height="80" fill="#38bdf8" opacity="0.7"/>' +
            // Useful output arrow (80% = 64px tall, top-aligned)
            '<rect x="170" y="60" width="100" height="64" rx="4" fill="#34d399" opacity="0.9"/>' +
            '<text x="220" y="87" text-anchor="middle" font-size="9" fill="#0f172a" font-weight="bold" font-family="sans-serif">Useful GPE</text>' +
            '<text x="220" y="100" text-anchor="middle" font-size="9" fill="#0f172a" font-weight="bold" font-family="sans-serif">4000 J (80%)</text>' +
            // Wasted heat arrow (20% = 16px tall, drops below)
            '<rect x="170" y="124" width="80" height="16" rx="3" fill="#fb7185" opacity="0.85"/>' +
            '<path d="M250,132 L270,149 L170,149 L170,140 L250,140 Z" fill="#fb7185" opacity="0.6"/>' +
            '<text x="220" y="163" text-anchor="middle" font-size="9" fill="#fb7185" font-family="sans-serif">Wasted heat 1000 J (20%)</text>' +
            // Labels
            '<text x="160" y="188" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif">Arrow width proportional to energy</text>' +
            '</svg>',
        },
      ],
      strategies: ["Write the efficiency formula first, then identify useful and total values", "Check units — W/t gives watts, Fd gives joules"],
      whyItWorks:
        "The conservation of energy guarantees that input energy = useful output + wasted energy. " +
        "Efficiency expresses the fraction that is usefully transferred. Because wasted energy is always ≥ 0, " +
        "efficiency ≤ 100% for any real device.",
    },

    // ─── SECTION 4 ───────────────────────────────────────────────────────────
    {
      heading: "Non-Renewable Energy Resources",
      body:
        "**Fossil fuels** (coal, oil, natural gas) and **nuclear fuel** (uranium, plutonium) are non-renewable — " +
        "they cannot be replenished on a human timescale.\n\n" +
        "**How fossil-fuel power stations generate electricity:**\n\n" +
        "1. Fuel is burned → releases thermal energy (chemical store → internal store).\n" +
        "2. Thermal energy heats water → steam (heating transfer).\n" +
        "3. Steam drives a **turbine** (thermal → kinetic).\n" +
        "4. Turbine spins a **generator** → electrical energy (kinetic → electrical).\n\n" +
        "**Nuclear power stations** follow the same turbine-generator process, but heat is produced " +
        "by **nuclear fission** (splitting heavy nuclei such as uranium-235), not combustion.\n\n" +
        "**Advantages of fossil fuels:** reliable (not weather-dependent), high energy density, existing infrastructure.\n\n" +
        "**Disadvantages:** release CO₂ and SO₂ (greenhouse gas, acid rain), finite supply, " +
        "mining/extraction damage, geopolitical issues.\n\n" +
        "**Advantages of nuclear:** very low CO₂ emissions per unit electricity, very high energy density, reliable.\n\n" +
        "**Disadvantages of nuclear:** radioactive waste (long half-lives), high construction cost, " +
        "risk of accidents, public opposition.",
      keyPoints: [
        "Fossil fuels and nuclear fuel are non-renewable; they will eventually run out.",
        "Electricity generation: fuel → heat → steam → turbine → generator (all power stations use this chain).",
        "Nuclear uses fission (not combustion); produces no CO₂ but generates radioactive waste.",
        "Fossil fuels release CO₂ (greenhouse gas) contributing to global warming.",
        "Reliability advantage of both: output does not depend on weather or time of day.",
      ],
      strategies: ["Learn the turbine-generator chain — it applies to all thermal power stations", "Contrast advantages/disadvantages in a table for revision"],
    },

    // ─── SECTION 5 ───────────────────────────────────────────────────────────
    {
      heading: "Renewable Energy Resources",
      body:
        "Renewable resources are naturally replenished and produce little or no CO₂ during operation.\n\n" +
        "**Solar:** Photovoltaic cells convert light → electricity directly; solar thermal panels heat water. " +
        "Advantage: no fuel cost, low maintenance. Disadvantage: only works in daylight, needs storage.\n\n" +
        "**Wind:** Wind drives turbines → generators. Advantage: no fuel cost. Disadvantage: unreliable, noisy, visual impact.\n\n" +
        "**Hydroelectric:** Water stored in a reservoir falls through turbines. Advantage: very reliable, can respond quickly to demand, no emissions. " +
        "Disadvantage: requires suitable geography, large land flooding.\n\n" +
        "**Geothermal:** Hot underground rocks heat water → steam → turbines. Reliable. Limited to geologically active regions.\n\n" +
        "**Tidal:** Tidal barrage or turbines harness tidal flow. Reliable (tides are predictable), but high construction cost.\n\n" +
        "**Wave:** Floating devices convert wave motion → electricity. Variable output.\n\n" +
        "**Biofuel:** Burning biological material (wood, plant oils, biogas). Arguably carbon-neutral if replanted. " +
        "Disadvantage: land use, can produce CO₂ during combustion.\n\n" +
        "**The Sun as ultimate source:** Most renewables (solar, wind, wave, hydroelectric) depend ultimately on " +
        "solar radiation. The Sun drives the water cycle (enabling hydroelectric), heats the atmosphere " +
        "(creating wind), and drives photosynthesis (biofuels). Tidal energy is an exception — it comes " +
        "from the gravitational pull of the Moon and rotational energy of the Earth.",
      keyPoints: [
        "Renewables include: solar, wind, hydroelectric, geothermal, tidal, wave, biofuel.",
        "Most renewables (solar, wind, wave, hydro, biofuel) trace back to the Sun as the original energy source.",
        "Tidal energy comes from the Moon's gravity and Earth's rotation — NOT from the Sun.",
        "Hydroelectric is the most reliable renewable — not weather-dependent once water is stored.",
        "Intermittency (wind, solar, wave) is a major disadvantage requiring energy storage solutions.",
      ],
      diagrams: [
        {
          caption: "Energy resources overview: renewable vs non-renewable",
          svg:
            '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram comparing renewable and non-renewable energy resources with examples in each category">' +
            '<rect width="320" height="200" fill="#0f172a"/>' +
            // Left panel - non-renewable
            '<rect x="8" y="10" width="140" height="180" rx="8" fill="#1e293b" stroke="#fb7185" stroke-width="1.5"/>' +
            '<text x="78" y="30" text-anchor="middle" font-size="10" fill="#fb7185" font-weight="bold" font-family="sans-serif">Non-Renewable</text>' +
            '<text x="22" y="52" font-size="9" fill="#b7bce0" font-family="sans-serif">Coal</text>' +
            '<text x="22" y="68" font-size="9" fill="#b7bce0" font-family="sans-serif">Oil</text>' +
            '<text x="22" y="84" font-size="9" fill="#b7bce0" font-family="sans-serif">Natural gas</text>' +
            '<text x="22" y="100" font-size="9" fill="#b7bce0" font-family="sans-serif">Nuclear (uranium)</text>' +
            '<line x1="22" y1="112" x2="138" y2="112" stroke="#334155" stroke-width="1"/>' +
            '<text x="22" y="128" font-size="8" fill="#fb7185" font-family="sans-serif">+ Reliable, high density</text>' +
            '<text x="22" y="143" font-size="8" fill="#fb7185" font-family="sans-serif">- CO2, finite, waste</text>' +
            // Right panel - renewable
            '<rect x="172" y="10" width="140" height="180" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>' +
            '<text x="242" y="30" text-anchor="middle" font-size="10" fill="#34d399" font-weight="bold" font-family="sans-serif">Renewable</text>' +
            '<text x="186" y="52" font-size="9" fill="#b7bce0" font-family="sans-serif">Solar</text>' +
            '<text x="186" y="68" font-size="9" fill="#b7bce0" font-family="sans-serif">Wind</text>' +
            '<text x="186" y="84" font-size="9" fill="#b7bce0" font-family="sans-serif">Hydroelectric</text>' +
            '<text x="186" y="100" font-size="9" fill="#b7bce0" font-family="sans-serif">Tidal / Wave</text>' +
            '<text x="186" y="116" font-size="9" fill="#b7bce0" font-family="sans-serif">Geothermal</text>' +
            '<text x="186" y="132" font-size="9" fill="#b7bce0" font-family="sans-serif">Biofuel</text>' +
            '<line x1="186" y1="144" x2="302" y2="144" stroke="#334155" stroke-width="1"/>' +
            '<text x="186" y="160" font-size="8" fill="#34d399" font-family="sans-serif">+ Low CO2, replenishable</text>' +
            '<text x="186" y="175" font-size="8" fill="#34d399" font-family="sans-serif">- Intermittent, costly</text>' +
            '</svg>',
        },
      ],
      thinkDeeper:
        "Biofuel combustion releases CO₂ like fossil fuels. Why is biofuel described as 'carbon neutral'? " +
        "Is that description always accurate, or does it depend on how the biofuel is produced and managed? " +
        "Think about the full lifecycle of the carbon atoms involved.",
      strategies: ["Group renewables by source: Sun-derived vs tidal (Moon/Earth)", "Learn one advantage AND one disadvantage for each resource"],
    },

    // ─── SECTION 6 ───────────────────────────────────────────────────────────
    {
      heading: "Efficiency of Electricity Generation",
      body:
        "No power station converts all fuel energy into electricity — energy is always wasted as heat " +
        "in the condenser, boiler, generator and transmission lines.\n\n" +
        "**Typical efficiencies:**\n\n" +
        "- Coal/gas power station: ~35–40%\n" +
        "- Combined-cycle gas turbine: ~55–60%\n" +
        "- Nuclear: ~33%\n" +
        "- Solar PV: ~15–22%\n" +
        "- Wind turbine: ~40–50%\n\n" +
        "**Overall efficiency** of electricity generation and transmission to the consumer involves " +
        "multiplying stage efficiencies:\n\n" +
        "Overall η = η₁ × η₂ × η₃\n\n" +
        "For example: generator efficiency 40%, transformer efficiency 98%, transmission efficiency 97%:\n\n" +
        "Overall = 0.40 × 0.98 × 0.97 ≈ 0.38 = **38%**\n\n" +
        "**Reducing waste:** Combined heat and power (CHP) plants use the 'waste' heat for local heating, " +
        "boosting overall useful efficiency to 70–80%.",
      keyPoints: [
        "No power station is 100% efficient; energy is always wasted as heat.",
        "Overall efficiency = product of individual stage efficiencies (as decimals).",
        "Coal/oil stations: ~35–40%; nuclear: ~33%; wind: ~40–50%; solar PV: ~15–22%.",
        "CHP plants reuse waste heat, raising overall useful energy efficiency to 70–80%.",
        "Improving efficiency means less fuel is needed and fewer CO₂ emissions per unit of electricity.",
      ],
      strategies: ["Convert % to decimal before multiplying efficiencies", "Check: overall efficiency must be LESS than each individual stage"],
      whyItWorks:
        "Each stage passes on only its efficient fraction: if stage 1 wastes 60%, only 40% enters stage 2. " +
        "Stage 2 then takes 40% of that 40%, and so on. Multiplying decimals captures this cascading loss correctly.",
    },
  ],

  // ─── LEARN SMART ──────────────────────────────────────────────────────────
  learn: {
    keyFacts: [
      "Energy stores: kinetic, gravitational potential, chemical, elastic, nuclear, internal (thermal), electrostatic.",
      "Energy transfer mechanisms: mechanical work, electrical working, heating, waves.",
      "Conservation of energy: energy cannot be created or destroyed, only transferred.",
      "Ek = ½mv² (kinetic energy in joules; m in kg, v in m/s).",
      "ΔGPE = mgΔh (g = 10 N/kg at IGCSE; h in metres).",
      "W = Fd (work done = force × distance in direction of force; unit: joule).",
      "P = W/t = E/t (power in watts; 1 W = 1 J/s); also P = Fv.",
      "Efficiency = useful energy out / total energy in × 100% (max 100%).",
      "Sankey diagrams show energy flow with arrow widths proportional to energy.",
      "Most renewables trace their energy to the Sun; tidal energy comes from Moon/Earth gravity.",
    ],
    flashcards: [
      { front: "Formula for kinetic energy", back: "Ek = ½mv² (m in kg, v in m/s, Ek in joules)" },
      { front: "Formula for change in gravitational potential energy", back: "ΔGPE = mgΔh (g = 10 N/kg at IGCSE, h in m, GPE in joules)" },
      { front: "Formula for work done", back: "W = Fd (force in N, distance in m, W in joules; force must be in direction of motion)" },
      { front: "Formula for power", back: "P = W/t = E/t (watts); also P = Fv (force × velocity)" },
      { front: "Formula for efficiency", back: "Efficiency = (useful energy output / total energy input) × 100%; always ≤ 100%" },
      { front: "What is a Sankey diagram?", back: "A diagram where arrow widths are proportional to energy; useful output goes straight ahead, wasted energy branches off" },
      { front: "Name the 4 energy transfer mechanisms", back: "Mechanical work (force), electrical working, heating, waves" },
      { front: "Name the 7 energy stores", back: "Kinetic, gravitational potential, chemical, elastic/strain, nuclear, internal/thermal, electrostatic" },
      { front: "Which renewables originate from the Sun?", back: "Solar, wind, wave, hydroelectric, biofuel — all driven by solar radiation" },
      { front: "Which energy resource is NOT from the Sun?", back: "Tidal — comes from gravitational pull of the Moon and rotational energy of the Earth" },
      { front: "What is dissipation?", back: "Energy spreading into the surroundings as thermal energy (heat), making it less useful but not destroyed" },
      { front: "1 joule = ?", back: "1 J = 1 N m (one newton-metre); also = 1 W s (one watt-second)" },
    ],
    keyTerms: [
      { term: "Energy store", definition: "A way in which energy is held by an object or system (e.g. kinetic, gravitational potential, chemical)." },
      { term: "Energy transfer", definition: "The process by which energy moves from one store to another (by work, heating, electrical working or waves)." },
      { term: "Conservation of energy", definition: "The principle that energy cannot be created or destroyed; the total energy of a closed system is constant." },
      { term: "Work done", definition: "The energy transferred when a force causes movement in the direction of the force; W = Fd (joules)." },
      { term: "Power", definition: "The rate of energy transfer or work done; P = E/t (watts, W)." },
      { term: "Efficiency", definition: "The fraction of total input energy that is usefully transferred; expressed as a percentage." },
      { term: "Sankey diagram", definition: "A flow diagram where arrow widths represent energy amounts; shows useful output and wasted energy." },
      { term: "Dissipation", definition: "The spreading of energy into the surroundings as thermal energy, reducing its usefulness." },
      { term: "Renewable resource", definition: "An energy resource that is naturally replenished and will not run out on a human timescale." },
      { term: "Non-renewable resource", definition: "An energy resource (e.g. fossil fuel, nuclear) that cannot be replenished and will eventually be depleted." },
      { term: "Gravitational potential energy (GPE)", definition: "The energy stored by an object due to its position in a gravitational field; ΔGPE = mgΔh." },
      { term: "Kinetic energy (Ek)", definition: "The energy an object possesses due to its motion; Ek = ½mv²." },
    ],
  },

  // ─── QUICK QUIZ ──────────────────────────────────────────────────────────
  quiz: {
    mcq: [
      {
        id: "phys-energy-mcq-q01",
        question: "A 3 kg ball moves at 4 m/s. What is its kinetic energy?",
        options: ["12 J", "24 J", "48 J", "6 J"],
        answerIndex: 1,
        explanation: "Ek = ½mv² = ½ × 3 × 4² = ½ × 3 × 16 = 24 J. Option A forgets the ½; option C omits ½ and uses m × v instead of v².",
        guideRef: "Conservation of Energy and Key Equations",
        difficulty: "warmup",
      },
      {
        id: "phys-energy-mcq-q02",
        question: "Which of these is an energy TRANSFER mechanism, not an energy store?",
        options: ["Chemical energy", "Heating", "Gravitational potential energy", "Nuclear energy"],
        answerIndex: 1,
        explanation: "Heating is a transfer mechanism — it moves energy between objects. Chemical, gravitational potential, and nuclear are all stores of energy.",
        guideRef: "Energy Stores and Transfers",
        difficulty: "warmup",
      },
      {
        id: "phys-energy-mcq-q03",
        question: "A motor uses 800 J of electrical energy and does 560 J of useful work. What is its efficiency?",
        options: ["56%", "70%", "43%", "80%"],
        answerIndex: 1,
        explanation: "Efficiency = (560 / 800) × 100% = 70%. Option A confuses numerator and denominator. Option D would require more useful output than actual.",
        guideRef: "Work Done, Power and Efficiency",
        difficulty: "core",
        hints: [
          "Write out the efficiency formula first.",
          "Identify which value is useful output and which is total input.",
          "Divide useful output by total input, then multiply by 100%.",
        ],
      },
      {
        id: "phys-energy-mcq-q04",
        question: "A Sankey diagram for a filament lamp shows 20 J entering and 3 J leaving as light. What does the width of the 'wasted heat' arrow represent?",
        options: ["3 J", "17 J", "20 J", "23 J"],
        answerIndex: 1,
        explanation: "Wasted energy = input − useful output = 20 − 3 = 17 J. The total input (20 J) splits into useful light (3 J) and heat (17 J). Arrows must add up to total input.",
        guideRef: "Work Done, Power and Efficiency",
        difficulty: "core",
        hints: [
          "In a Sankey diagram, all arrows must account for the total input energy.",
          "Wasted energy = total input − useful output.",
        ],
      },
      {
        id: "phys-energy-mcq-q05",
        question: "Which energy resource does NOT ultimately originate from the Sun?",
        options: ["Wind power", "Hydroelectric power", "Biofuel", "Tidal power"],
        answerIndex: 3,
        explanation: "Tidal energy comes from the gravitational pull of the Moon and the rotational energy of the Earth — not solar radiation. Wind, hydro, and biofuel all depend on the Sun driving weather, the water cycle, and photosynthesis.",
        guideRef: "Renewable Energy Resources",
        difficulty: "core",
      },
      {
        id: "phys-energy-mcq-q06",
        question: "A 50 N force is applied to a box that moves 6 m in the direction of the force. How much work is done?",
        options: ["8.3 J", "56 J", "300 J", "900 J"],
        answerIndex: 2,
        explanation: "W = Fd = 50 × 6 = 300 J. Option D would be 50 × 18 — perhaps squaring or multiplying incorrectly.",
        guideRef: "Work Done, Power and Efficiency",
        difficulty: "warmup",
      },
    ],
    qa: [
      {
        id: "phys-energy-qa-q01",
        question:
          "A skier of mass 70 kg starts from rest at the top of a ski slope that is 40 m high. Assuming no friction, " +
          "calculate (a) the skier's gravitational potential energy at the top, and (b) the skier's speed at the bottom of the slope. [4]",
        marks: 4,
        modelAnswer:
          "(a) GPE = mgh = 70 × 10 × 40 = 28 000 J (28 kJ).\n" +
          "(b) At the bottom, all GPE converts to KE (no friction). Ek = 28 000 J.\n" +
          "½mv² = 28 000 → v² = 2 × 28 000 / 70 = 800 → v = √800 ≈ 28.3 m/s.",
        markScheme: [
          "GPE = mgh used correctly (1 mark)",
          "GPE = 28 000 J (1 mark)",
          "KE = GPE / energy conservation stated or implied (1 mark)",
          "v = 28.3 m/s (allow 28 m/s) with correct working (1 mark)",
        ],
        commonError: "Using v = u + at or other kinematics — energy conservation is the intended route and is simpler here.",
        guideRef: "Conservation of Energy and Key Equations",
        difficulty: "core",
        hints: [
          "Write ΔGPE = mgh with the numbers substituted.",
          "At the bottom, KE = GPE lost (no friction).",
          "Rearrange Ek = ½mv² to find v: v = √(2Ek/m).",
          "Check units: answer should be in m/s.",
        ],
        solutions: [
          {
            label: "Energy conservation method",
            steps: [
              "GPE at top = mgh = 70 × 10 × 40 = 28 000 J",
              "By conservation (no friction): KE at bottom = 28 000 J",
              "½mv² = 28 000 → v² = 56 000 / 70 = 800",
              "v = √800 = 28.3 m/s",
            ],
          },
        ],
        strategy: "Set KE_bottom = GPE_top (no friction)",
      },
      {
        id: "phys-energy-qa-q02",
        question:
          "A pump raises 200 kg of water per second from a well 15 m deep. " +
          "(a) Calculate the useful power output of the pump. " +
          "(b) If the pump is 60% efficient, calculate the electrical power input required. [4]",
        marks: 4,
        modelAnswer:
          "(a) Work done per second = GPE gained per second = mgh = 200 × 10 × 15 = 30 000 J.\n" +
          "Useful power = 30 000 W = 30 kW.\n" +
          "(b) Efficiency = useful power / total power input.\n" +
          "0.60 = 30 000 / P_in → P_in = 30 000 / 0.60 = 50 000 W = 50 kW.",
        markScheme: [
          "P_useful = mgh/t or mgh per second (1 mark)",
          "P_useful = 30 000 W / 30 kW (1 mark)",
          "Efficiency formula used correctly (1 mark)",
          "P_input = 50 000 W / 50 kW (1 mark)",
        ],
        commonError: "Multiplying by efficiency instead of dividing: 30 000 × 0.60 = 18 000 W (incorrect — this would be less than useful output).",
        guideRef: "Work Done, Power and Efficiency",
        difficulty: "core",
        hints: [
          "Power is energy per second. Calculate the GPE gained by 200 kg per second.",
          "Use P_useful = mgh/t = mgh per second.",
          "Rearrange: P_in = P_useful / efficiency (as a decimal).",
          "Check: P_in must be GREATER than P_useful.",
        ],
        solutions: [
          {
            label: "Step-by-step method",
            steps: [
              "Energy per second = GPE per second = 200 × 10 × 15 = 30 000 J",
              "Useful power = 30 000 J/s = 30 000 W",
              "Efficiency = useful out / total in → 0.60 = 30 000 / P_in",
              "P_in = 30 000 / 0.60 = 50 000 W = 50 kW",
            ],
          },
        ],
        strategy: "Power = energy/time; rearrange efficiency for total input",
      },
      {
        id: "phys-energy-qa-q03",
        question:
          "Compare the advantages and disadvantages of using (a) coal-fired power stations and (b) wind turbines to generate electricity. " +
          "Include comment on reliability, environmental impact and cost. [6]",
        marks: 6,
        modelAnswer:
          "(a) Coal: Advantages — very reliable (operates 24/7 regardless of weather); well-established technology; can respond quickly to changes in electricity demand; high energy density. " +
          "Disadvantages — burns fossil fuel releasing large amounts of CO₂ (greenhouse gas, contributing to climate change) and SO₂ (acid rain); finite resource that will run out; mining causes environmental damage; produces ash waste.\n\n" +
          "(b) Wind turbines: Advantages — no CO₂ emissions during operation; free fuel (wind); renewable — will not run out. " +
          "Disadvantages — intermittent/unreliable (depends on wind speed); lower power density than fossil fuels; visual and noise impact; suitable sites may be remote; requires backup or storage for calm periods.",
        markScheme: [
          "Coal: reliable / not weather-dependent (1 mark)",
          "Coal: releases CO₂ / greenhouse gas / contributes to climate change (1 mark)",
          "Coal: finite / will eventually run out (1 mark)",
          "Wind: no CO₂ / low emissions during operation (1 mark)",
          "Wind: intermittent / unreliable / depends on wind (1 mark)",
          "Wind: renewable / free fuel (1 mark)",
        ],
        commonError: "Saying wind produces 'no pollution' without qualification — manufacturing turbines and transmitting electricity do have environmental impacts.",
        guideRef: "Non-Renewable Energy Resources",
        difficulty: "core",
        hints: [
          "Structure your answer with separate paragraphs for each source.",
          "Cover three aspects for each: reliability, environmental impact, cost/resource.",
          "Use comparison language: 'unlike wind turbines, coal can...'.",
        ],
        strategy: "Compare in parallel: reliability → environmental → resource for each source",
      },
    ],
  },

  // ─── QUESTION BANK ────────────────────────────────────────────────────────
  questionBank: {
    mcqPapers: [
      {
        id: "phys-energy-bank-mcq-1",
        title: "MCQ Paper 1 — Stores, Transfers and Calculations",
        description: "Covers energy stores, transfers, Ek/GPE/work formulae, and efficiency.",
        questions: [
          {
            id: "phys-energy-bank-mcq1-q01",
            question: "Which of the following correctly defines 'work done' in physics?",
            options: [
              "The amount of energy stored in an object",
              "Force multiplied by distance moved in the direction of the force",
              "The rate of energy transfer",
              "Mass multiplied by gravitational field strength",
            ],
            answerIndex: 1,
            explanation: "Work done W = Fd, where d is the displacement in the direction of the force. Energy stored and rate of energy transfer describe store and power respectively; mass × g = weight, not work.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bank-mcq1-q02",
            question: "A car of mass 1200 kg travels at 20 m/s. What is its kinetic energy?",
            options: ["24 000 J", "240 000 J", "12 000 J", "480 000 J"],
            answerIndex: 1,
            explanation: "Ek = ½mv² = ½ × 1200 × 20² = 0.5 × 1200 × 400 = 240 000 J. Option A omits the v² (uses v=20 not v²=400). Option C omits ½ incorrectly.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bank-mcq1-q03",
            question: "An object of mass 5 kg is lifted from the ground to a height of 3 m. How much gravitational potential energy does it gain? (g = 10 N/kg)",
            options: ["15 J", "50 J", "150 J", "1500 J"],
            answerIndex: 2,
            explanation: "ΔGPE = mgh = 5 × 10 × 3 = 150 J. Option A omits g. Option B uses only m × g without h.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bank-mcq1-q04",
            question: "A machine does 6000 J of work in 30 seconds. What is its power output?",
            options: ["180 000 W", "200 W", "6030 W", "0.005 W"],
            answerIndex: 1,
            explanation: "P = W/t = 6000 / 30 = 200 W. Option A multiplies instead of divides.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bank-mcq1-q05",
            question:
              "A ball of mass 0.4 kg is dropped from rest at a height of 5 m. Assuming no air resistance, which equation gives the correct speed just before hitting the ground?",
            options: [
              "v = sqrt(mgh / m)",
              "v = sqrt(2gh)",
              "v = mgh",
              "v = sqrt(gh)",
            ],
            answerIndex: 1,
            explanation: "From energy conservation: ½mv² = mgh → v² = 2gh → v = sqrt(2gh). The mass cancels, so it does not matter how heavy the ball is. Option D omits the factor of 2.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "core",
            hints: [
              "Start from Ek = GPE: ½mv² = mgh.",
              "Cancel m from both sides.",
              "Rearrange for v.",
            ],
          },
          {
            id: "phys-energy-bank-mcq1-q06",
            question:
              "A generator has an efficiency of 80%. It is powered by a turbine that itself has an efficiency of 50%. " +
              "What is the overall efficiency of the turbine-generator system?",
            options: ["65%", "40%", "130%", "30%"],
            answerIndex: 1,
            explanation: "Overall efficiency = 0.80 × 0.50 = 0.40 = 40%. Overall efficiency is the product of individual efficiencies expressed as decimals, not their average. 130% violates conservation of energy.",
            guideRef: "Efficiency of Electricity Generation",
            difficulty: "core",
            hints: [
              "Convert percentages to decimals before multiplying.",
              "Overall efficiency = efficiency1 × efficiency2.",
              "The result must be less than either individual efficiency.",
            ],
            strategy: "Multiply efficiencies as decimals",
          },
        ],
      },
      {
        id: "phys-energy-bank-mcq-2",
        title: "MCQ Paper 2 — Energy Resources and Sankey Diagrams",
        description: "Covers renewable and non-renewable resources, Sankey diagrams, power stations and the Sun as energy source.",
        questions: [
          {
            id: "phys-energy-bank-mcq2-q01",
            question: "In a coal-fired power station, which energy transfer occurs in the turbine?",
            options: [
              "Chemical energy → thermal energy",
              "Thermal energy → kinetic energy",
              "Kinetic energy → electrical energy",
              "Nuclear energy → thermal energy",
            ],
            answerIndex: 1,
            explanation: "Steam (thermal energy) pushes turbine blades, converting thermal to kinetic energy. Chemical → thermal occurs in the boiler/furnace. Kinetic → electrical occurs in the generator. Nuclear → thermal is the nuclear power station equivalent.",
            guideRef: "Non-Renewable Energy Resources",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bank-mcq2-q02",
            question: "Which energy resource is the MOST reliable because its output does not depend on the weather?",
            options: ["Solar photovoltaic", "Wind", "Hydroelectric (stored reservoir)", "Wave"],
            answerIndex: 2,
            explanation: "Hydroelectric reservoirs store energy as gravitational PE; output is controlled by opening valves and is independent of weather. Solar depends on sunlight, wind on wind speed, wave on wave conditions.",
            guideRef: "Renewable Energy Resources",
            difficulty: "core",
          },
          {
            id: "phys-energy-bank-mcq2-q03",
            question: "A Sankey diagram for a power station shows 1000 J input, 350 J electrical output, and 650 J wasted as heat. What is the efficiency?",
            options: ["65%", "54%", "35%", "46%"],
            answerIndex: 2,
            explanation: "Efficiency = (350 / 1000) × 100% = 35%. The wasted heat (650 J) is not the useful output.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bank-mcq2-q04",
            question: "Which statement best describes why biofuels are sometimes described as 'carbon neutral'?",
            options: [
              "Biofuels release no carbon dioxide when burned",
              "The CO₂ released during combustion is absorbed by new plant growth of similar mass",
              "Biofuels contain no carbon atoms",
              "Plants absorb more CO₂ than is released by burning",
            ],
            answerIndex: 1,
            explanation: "Carbon neutral means the CO₂ released during combustion is re-absorbed by replacement plants grown as fuel, creating a closed carbon cycle. Biofuels do release CO₂; they are not carbon-free.",
            guideRef: "Renewable Energy Resources",
            difficulty: "core",
            hints: [
              "Think about what happens to CO₂ after combustion.",
              "What process in living plants removes CO₂ from the atmosphere?",
            ],
          },
          {
            id: "phys-energy-bank-mcq2-q05",
            question: "A student claims: 'When a ball falls and hits the ground, energy is destroyed.' Which response correctly refutes this?",
            options: [
              "Energy is only destroyed in nuclear reactions",
              "Energy is converted into kinetic energy during the fall, then destroyed on impact",
              "Energy is never destroyed; on impact it is transferred to thermal and sound energy stores in the ball and ground",
              "Energy is destroyed only if there is air resistance",
            ],
            answerIndex: 2,
            explanation: "Conservation of energy: energy cannot be destroyed. On impact, kinetic energy transfers to thermal energy (ball and ground warm up slightly) and sound waves. Total energy remains constant.",
            guideRef: "Energy Stores and Transfers",
            difficulty: "core",
          },
          {
            id: "phys-energy-bank-mcq2-q06",
            question:
              "A crane lifts a 2000 kg steel beam through 12 m in 40 s. " +
              "An electric motor drives the crane with a power input of 8000 W. " +
              "What is the efficiency of the crane system?",
            options: ["60%", "75%", "80%", "50%"],
            answerIndex: 1,
            explanation:
              "Useful power = GPE/time = (2000 × 10 × 12) / 40 = 240 000 / 40 = 6000 W. " +
              "Efficiency = (6000 / 8000) × 100% = 75%.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "challenge",
            hints: [
              "Calculate useful power = GPE gained per second = mgh/t.",
              "Efficiency = useful power / input power × 100%.",
              "Make sure you use the correct time (40 s).",
              "6000 W / 8000 W = 0.75 = 75%.",
            ],
            strategy: "Useful power = mgh/t; then efficiency = useful/input × 100%",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "phys-energy-bank-qa-1",
        title: "Structured Questions Paper 1 — Energy Calculations",
        description: "Calculation-heavy questions on Ek, GPE, work and power with multi-step problems.",
        questions: [
          {
            id: "phys-energy-bank-qa1-q01",
            question:
              "A pendulum bob has a mass of 0.2 kg. It is pulled to one side so that it is 0.08 m above its lowest position, then released from rest.\n\n" +
              "(a) Calculate the gravitational potential energy of the bob at its highest position. [2]\n" +
              "(b) Assuming no energy is lost to air resistance or friction, calculate the maximum speed of the bob. [2]\n" +
              "(c) State where in the swing the bob has its maximum speed, and explain why. [2]",
            marks: 6,
            modelAnswer:
              "(a) ΔGPE = mgh = 0.2 × 10 × 0.08 = 0.16 J.\n\n" +
              "(b) KE at bottom = GPE at top = 0.16 J (energy conservation, no losses).\n" +
              "½mv² = 0.16 → v² = (2 × 0.16) / 0.2 = 1.6 → v = √1.6 ≈ 1.26 m/s.\n\n" +
              "(c) Maximum speed occurs at the lowest point of the swing. At this point, all the gravitational potential energy " +
              "has been converted to kinetic energy, so kinetic energy (and therefore speed) is at its maximum.",
            markScheme: [
              "GPE = mgh = 0.2 × 10 × 0.08 (1 mark)",
              "GPE = 0.16 J (1 mark)",
              "KE = GPE = 0.16 J (energy conservation) (1 mark)",
              "v = 1.26 m/s (allow 1.3 m/s) with correct working (1 mark)",
              "Maximum speed at lowest/bottom point (1 mark)",
              "Because all GPE has been converted to KE / KE is maximum at lowest point (1 mark)",
            ],
            commonError: "Forgetting that maximum speed and maximum KE occur at the BOTTOM (lowest point), not when acceleration is greatest.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "core",
            hints: [
              "Part (a): direct substitution into ΔGPE = mgh.",
              "Part (b): at the lowest point, all GPE has become KE — set ½mv² = GPE.",
              "Rearrange for v: v² = 2 × KE / m, then take the square root.",
              "Part (c): think about which point has the most KE.",
            ],
            solutions: [
              {
                label: "Energy conservation approach",
                steps: [
                  "GPE at top = 0.2 × 10 × 0.08 = 0.16 J",
                  "KE at bottom = 0.16 J (no losses)",
                  "½ × 0.2 × v² = 0.16 → v² = 1.6 → v = 1.26 m/s",
                ],
              },
            ],
            strategy: "GPE at top = KE at bottom (no friction)",
          },
          {
            id: "phys-energy-bank-qa1-q02",
            question:
              "A student uses a ramp to slide boxes into a lorry. She pushes a 30 kg box up a 4 m ramp that is inclined so the box rises 1.5 m vertically.\n\n" +
              "(a) Calculate the minimum force needed to push the box up the ramp (ignore friction). [3]\n" +
              "(b) In practice, she needs to apply a force of 160 N. Calculate the efficiency of the ramp as a simple machine. [2]\n" +
              "(c) Suggest where energy is wasted when using the ramp. [1]",
            marks: 6,
            modelAnswer:
              "(a) Useful work output = GPE gained = mgh = 30 × 10 × 1.5 = 450 J.\n" +
              "Minimum force: W = Fd → F = W/d = 450 / 4 = 112.5 N.\n\n" +
              "(b) Input work = F × d = 160 × 4 = 640 J.\n" +
              "Efficiency = (450 / 640) × 100% = 70.3% (allow 70%).\n\n" +
              "(c) Energy is wasted due to friction between the box and the ramp surface, producing heat.",
            markScheme: [
              "GPE = mgh = 30 × 10 × 1.5 = 450 J (1 mark)",
              "F = W/d = 450 / 4 (1 mark)",
              "F = 112.5 N (1 mark)",
              "Input work = 160 × 4 = 640 J (1 mark)",
              "Efficiency = (450/640) × 100% = 70% (1 mark)",
              "Friction between box and ramp / heat produced (1 mark)",
            ],
            commonError: "Using the slant length (4 m) for GPE calculation instead of the vertical height (1.5 m).",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "GPE uses vertical height, not slant length: ΔGPE = mgh = 30 × 10 × 1.5.",
              "Minimum force: use W = Fd where d is the slant length (4 m).",
              "For efficiency: input work = applied force × slant distance.",
              "Efficiency = useful output / total input × 100%.",
            ],
            solutions: [
              {
                label: "Work-energy method",
                steps: [
                  "Useful output = GPE = 30 × 10 × 1.5 = 450 J",
                  "Minimum force = 450 / 4 = 112.5 N (frictionless ramp)",
                  "Actual input work = 160 × 4 = 640 J",
                  "Efficiency = (450/640) × 100% = 70.3%",
                ],
              },
            ],
            strategy: "GPE uses vertical height; W = Fd uses distance along slope",
          },
          {
            id: "phys-energy-bank-qa1-q03",
            question:
              "A ball of mass 0.5 kg is thrown horizontally from the top of a cliff 45 m high with a speed of 10 m/s.\n\n" +
              "(a) State the kinetic energy of the ball when it is thrown. [1]\n" +
              "(b) Calculate the gravitational potential energy of the ball at the top of the cliff (take ground as the reference level). [2]\n" +
              "(c) Calculate the speed of the ball just before it hits the ground, assuming no air resistance. [3]\n" +
              "(d) Explain why the actual speed will be less than your calculated value. [2]",
            marks: 8,
            modelAnswer:
              "(a) Ek = ½mv² = ½ × 0.5 × 10² = 25 J.\n\n" +
              "(b) GPE = mgh = 0.5 × 10 × 45 = 225 J.\n\n" +
              "(c) Total energy at top = Ek + GPE = 25 + 225 = 250 J.\n" +
              "At ground: all energy is KE (GPE = 0).\n" +
              "½mv² = 250 → v² = 2 × 250 / 0.5 = 1000 → v = √1000 ≈ 31.6 m/s.\n\n" +
              "(d) In reality, air resistance acts on the ball as it moves. Air resistance does work against the ball's motion, " +
              "transferring kinetic energy to thermal energy (heat) in the air. The ball therefore has less kinetic energy " +
              "at the bottom and so hits the ground at a lower speed.",
            markScheme: [
              "Ek = 25 J (1 mark)",
              "GPE = mgh = 0.5 × 10 × 45 (1 mark)",
              "GPE = 225 J (1 mark)",
              "Total energy = 25 + 225 = 250 J (1 mark)",
              "½mv² = 250 → v² = 1000 (1 mark)",
              "v = 31.6 m/s (allow 31–32 m/s) (1 mark)",
              "Air resistance transfers energy to thermal energy / heat (1 mark)",
              "Less KE at ground / lower speed as a result (1 mark)",
            ],
            commonError: "In part (c), ignoring the initial horizontal kinetic energy and only using GPE — the ball already has 25 J of KE at the start.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "challenge",
            hints: [
              "Part (a): Ek = ½mv² using the horizontal speed of 10 m/s.",
              "Part (b): GPE = mgh using height 45 m.",
              "Part (c): total mechanical energy at the top = Ek + GPE = 25 + 225 = 250 J. At the bottom, all of this is KE.",
              "Rearrange ½mv² = 250 for v.",
            ],
            solutions: [
              {
                label: "Energy conservation method (including initial KE)",
                steps: [
                  "Initial KE = ½ × 0.5 × 100 = 25 J",
                  "Initial GPE = 0.5 × 10 × 45 = 225 J",
                  "Total energy = 250 J (conserved, no air resistance)",
                  "At ground: KE = 250 J → v = sqrt(2 × 250 / 0.5) = sqrt(1000) = 31.6 m/s",
                ],
              },
            ],
            strategy: "Total energy = KE + GPE; conserved throughout flight (no air resistance)",
          },
          {
            id: "phys-energy-bank-qa1-q04",
            question:
              "A hydroelectric power station generates 50 MW of electrical power from water falling through a height of 200 m. " +
              "The efficiency of the turbines and generators combined is 85%.\n\n" +
              "(a) Calculate the total input power (rate of GPE transfer) needed to produce 50 MW of electrical output. [2]\n" +
              "(b) Using P = mgh/t, calculate the mass flow rate (kg/s) of water required. [3]\n" +
              "(c) State one advantage and one disadvantage of hydroelectric power compared with a coal-fired power station. [2]",
            marks: 7,
            modelAnswer:
              "(a) Efficiency = useful output / input → input power = 50 × 10⁶ / 0.85 = 58.8 × 10⁶ W ≈ 58.8 MW.\n\n" +
              "(b) Input power = mgh/t = (m/t) × g × h.\n" +
              "(m/t) = P_input / (g × h) = 58.8 × 10⁶ / (10 × 200) = 58.8 × 10⁶ / 2000 = 29 400 kg/s.\n\n" +
              "(c) Advantage: no CO₂ emissions during operation / renewable / reliable (reservoir). " +
              "Disadvantage: requires flooding large areas of land / limited suitable geography / high construction cost.",
            markScheme: [
              "Input power = 50 MW / 0.85 (1 mark)",
              "Input power = 58.8 MW (1 mark)",
              "m/t = P / (gh) correctly rearranged (1 mark)",
              "m/t = 58.8 × 10⁶ / 2000 (1 mark)",
              "m/t = 29 400 kg/s (allow 29 000 – 30 000 kg/s) (1 mark)",
              "One valid advantage stated (1 mark)",
              "One valid disadvantage stated (1 mark)",
            ],
            commonError: "Using 50 MW instead of the input power (58.8 MW) in the mass flow rate calculation.",
            guideRef: "Renewable Energy Resources",
            difficulty: "challenge",
            hints: [
              "Rearrange efficiency to find input power: P_input = P_useful / efficiency.",
              "Convert 85% to 0.85 before dividing.",
              "For part (b): P_input = (m/t) × g × h → mass flow rate = P_input / (g × h).",
              "Check the order of magnitude: 29 000 kg/s is a large flow — reasonable for a major dam.",
            ],
            solutions: [
              {
                label: "Efficiency inversion then mass flow",
                steps: [
                  "P_input = 50 × 10^6 / 0.85 = 58.82 × 10^6 W",
                  "P_input = mgh/t → m/t = P_input / (g × h)",
                  "m/t = 58.82 × 10^6 / (10 × 200) = 58.82 × 10^6 / 2000",
                  "m/t = 29 412 kg/s ≈ 29 400 kg/s",
                ],
              },
            ],
            strategy: "Rearrange efficiency for input; then rearrange P = mgh/t for mass flow",
          },
        ],
      },
      {
        id: "phys-energy-bank-qa-2",
        title: "Structured Questions Paper 2 — Resources, Sankey and Synoptic",
        description: "Evaluation of energy resources, Sankey diagram reading, efficiency and multi-step challenges.",
        questions: [
          {
            id: "phys-energy-bank-qa2-q01",
            question:
              "Draw and label a Sankey diagram for a car engine that uses 1000 J of chemical energy (petrol) and produces 250 J of useful kinetic energy. " +
              "State the efficiency and name the main form of wasted energy. [4]",
            marks: 4,
            modelAnswer:
              "Sankey diagram: one wide input arrow (labelled 'Chemical energy, 1000 J' entering from the left). " +
              "The arrow splits: a narrower straight arrow labelled 'Useful KE, 250 J' continues to the right; " +
              "a much wider arrow labelled 'Wasted thermal/heat energy, 750 J' branches downward or upward.\n\n" +
              "Efficiency = (250 / 1000) × 100% = 25%.\n\n" +
              "Main wasted energy: thermal energy (heat) — produced in engine, exhaust gases, and brake friction.",
            markScheme: [
              "Input arrow labelled with 1000 J (or correctly proportioned) (1 mark)",
              "Useful output arrow narrower than input, labelled 250 J / KE (1 mark)",
              "Wasted energy arrow wider, labelled 750 J / thermal / heat (1 mark)",
              "Efficiency = 25% (1 mark)",
            ],
            commonError: "Drawing wasted arrow wider than useful but failing to label values, or labelling efficiency as 75% (confusing wasted fraction with efficiency).",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "Input arrow must be widest (represents all 1000 J).",
              "Useful arrow: 250/1000 = 1/4 of the width.",
              "Wasted arrow: 750/1000 = 3/4 of the width.",
              "Efficiency = useful/input × 100% = 25%.",
            ],
            strategy: "Arrow widths must sum to input width; efficiency = useful/total × 100%",
          },
          {
            id: "phys-energy-bank-qa2-q02",
            question:
              "A student investigates energy resources by researching two countries: Country A uses 80% renewable energy (mostly hydro and solar), " +
              "Country B uses 80% fossil fuels.\n\n" +
              "(a) State two environmental advantages Country A has over Country B. [2]\n" +
              "(b) Explain one reason why Country B might not switch entirely to renewables. [2]\n" +
              "(c) Country A has recently installed wind turbines, but finds power output varies significantly. " +
              "Suggest two ways this problem could be managed. [2]",
            marks: 6,
            modelAnswer:
              "(a) Country A produces far less CO₂ (greenhouse gas emissions are much lower), reducing contribution to climate change. " +
              "Country A also produces less SO₂ and particulate pollution, so air quality is better / less acid rain.\n\n" +
              "(b) Fossil-fuel power stations provide reliable, controllable power 24 hours a day regardless of weather. " +
              "Switching to 100% renewables would require massive investment in energy storage (batteries/pumped hydro) to cover " +
              "periods when solar/wind output is low. The economic and infrastructure cost may be prohibitive.\n\n" +
              "(c) Any two of: (1) use pumped-storage hydroelectric — pump water uphill when surplus, release when needed; " +
              "(2) use large battery storage banks; (3) connect to a national grid that balances supply from different sources across different regions; " +
              "(4) use backup gas turbines for low-wind periods.",
            markScheme: [
              "Lower CO₂ emissions / reduced greenhouse effect / less global warming (1 mark)",
              "Less pollution / better air quality / less SO₂ / less acid rain (1 mark)",
              "Fossil fuels are reliable / not weather-dependent / dispatchable on demand (1 mark)",
              "High cost of storage / infrastructure investment / economic barrier stated (1 mark)",
              "One valid storage or grid-management solution (1 mark)",
              "Second valid and distinct solution (1 mark)",
            ],
            commonError: "Saying renewables 'produce no pollution at all' — manufacturing, transport and installation do have environmental costs.",
            guideRef: "Renewable Energy Resources",
            difficulty: "core",
            hints: [
              "Part (a): think CO₂ and other combustion products.",
              "Part (b): think about what happens when wind stops or sun sets.",
              "Part (c): how do engineers store surplus electricity, or balance demand?",
            ],
          },
          {
            id: "phys-energy-bank-qa2-q03",
            question:
              "A roller coaster car of mass 800 kg starts from rest at point A at a height of 30 m above the ground. " +
              "It rolls down to point B at the bottom (ground level), then rises to point C at a height of 20 m.\n\n" +
              "(a) Calculate the speed of the car at point B, assuming no friction. [3]\n" +
              "(b) Calculate the speed of the car at point C, assuming no friction. [3]\n" +
              "(c) In practice, the car's speed at C is measured as 12 m/s. Calculate the energy transferred to thermal energy " +
              "between A and C. [3]",
            marks: 9,
            modelAnswer:
              "(a) GPE lost A→B = mgh = 800 × 10 × 30 = 240 000 J.\n" +
              "KE at B = 240 000 J. ½mv² = 240 000 → v² = 2 × 240 000 / 800 = 600 → v = √600 ≈ 24.5 m/s.\n\n" +
              "(b) Total energy at A = 240 000 J (all GPE, Ek = 0).\n" +
              "At C: GPE = mgh_C = 800 × 10 × 20 = 160 000 J.\n" +
              "KE at C = total − GPE = 240 000 − 160 000 = 80 000 J.\n" +
              "½mv² = 80 000 → v² = 2 × 80 000 / 800 = 200 → v = √200 ≈ 14.1 m/s.\n\n" +
              "(c) Ideal KE at C = 80 000 J (from above).\n" +
              "Actual KE at C = ½ × 800 × 12² = ½ × 800 × 144 = 57 600 J.\n" +
              "Energy transferred to heat = 80 000 − 57 600 = 22 400 J.",
            markScheme: [
              "GPE at A = 240 000 J (1 mark)",
              "v at B = 24.5 m/s (allow 24–25 m/s) with correct working (1 mark)",
              "Method shown: ½mv² = GPE (1 mark)",
              "GPE at C = 160 000 J (1 mark)",
              "KE at C (ideal) = 80 000 J (1 mark)",
              "v at C (ideal) = 14.1 m/s (allow 14 m/s) (1 mark)",
              "Actual KE at C = ½ × 800 × 144 = 57 600 J (1 mark)",
              "Energy to heat = 80 000 − 57 600 (1 mark)",
              "Energy to heat = 22 400 J (1 mark)",
            ],
            commonError: "In part (c), subtracting actual from ideal GPE instead of ideal KE minus actual KE — must compare energies at the same point.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "challenge",
            hints: [
              "Part (a): all GPE at A converts to KE at B (no friction).",
              "Part (b): use conservation: total energy = KE + GPE at every point. Total energy = 240 000 J.",
              "At C: KE = total − GPE at C = 240 000 − 160 000 = 80 000 J.",
              "Part (c): compare ideal KE at C with actual KE at C using the measured 12 m/s.",
            ],
            solutions: [
              {
                label: "Three-point energy conservation",
                steps: [
                  "Total mechanical energy = GPE at A = 800 × 10 × 30 = 240 000 J",
                  "At B: KE = 240 000 J → v = sqrt(2 × 240 000 / 800) = sqrt(600) = 24.5 m/s",
                  "At C (ideal): KE = 240 000 - (800 × 10 × 20) = 240 000 - 160 000 = 80 000 J → v = sqrt(200) = 14.1 m/s",
                  "At C (actual): KE = 0.5 × 800 × 144 = 57 600 J",
                  "Thermal energy = 80 000 - 57 600 = 22 400 J",
                ],
              },
            ],
            strategy: "Fix total energy at start; track KE = total − GPE at each point",
          },
          {
            id: "phys-energy-bank-qa2-q04",
            question:
              "A student is designing a solar-powered water pump for a rural community. The pump must lift 500 kg of water per hour " +
              "from a well 8 m deep. Solar panels with an area of 2 m² receive 600 W/m² of solar energy.\n\n" +
              "(a) Calculate the minimum useful power output required by the pump. [3]\n" +
              "(b) Calculate the total solar power available from the panels. [2]\n" +
              "(c) If the solar panels are 20% efficient and the pump motor is 70% efficient, " +
              "calculate the overall efficiency of the solar-to-water-lifting system, " +
              "and determine whether the panels are large enough. [4]",
            marks: 9,
            modelAnswer:
              "(a) Mass per second = 500 / 3600 = 0.1389 kg/s.\n" +
              "Useful power = mgh/t = (m/t) × g × h = 0.1389 × 10 × 8 = 11.1 W.\n\n" +
              "(b) Total solar power = intensity × area = 600 × 2 = 1200 W.\n\n" +
              "(c) Overall efficiency = η_panel × η_pump = 0.20 × 0.70 = 0.14 = 14%.\n" +
              "Power delivered to pump from panels = 1200 × 0.20 = 240 W.\n" +
              "Useful power output = 240 × 0.70 = 168 W.\n" +
              "Required useful power = 11.1 W. Since 168 W >> 11.1 W, the panels are more than large enough.",
            markScheme: [
              "Mass flow rate = 500/3600 kg/s (1 mark)",
              "Useful power = (m/t) × g × h method (1 mark)",
              "Useful power = 11.1 W (allow 11 W) (1 mark)",
              "Solar power = 600 × 2 = 1200 W (1 mark)",
              "Overall efficiency = 0.20 × 0.70 = 0.14 = 14% (1 mark)",
              "Power output of panels (electrical) = 1200 × 0.20 = 240 W (1 mark)",
              "Actual pump output = 240 × 0.70 = 168 W (1 mark)",
              "168 W compared with 11.1 W — panels sufficient (1 mark)",
              "Correct conclusion stated (1 mark)",
            ],
            commonError: "Forgetting to convert 500 kg/hour to kg/s before calculating power — power requires mass per SECOND.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "challenge",
            hints: [
              "Convert 500 kg per hour to kg per second: divide by 3600.",
              "Useful power = (m/t) × g × h = (kg/s) × 10 × 8.",
              "Solar power available = intensity (W/m²) × area (m²).",
              "Multiply efficiencies as decimals: 0.20 × 0.70 = 0.14.",
              "Compare actual useful output (168 W) with required (11.1 W).",
            ],
            solutions: [
              {
                label: "Stage-by-stage efficiency cascade",
                steps: [
                  "Mass flow = 500/3600 = 0.1389 kg/s",
                  "Required useful power = 0.1389 × 10 × 8 = 11.1 W",
                  "Solar power = 600 W/m^2 × 2 m^2 = 1200 W",
                  "Electrical power from panels = 1200 × 0.20 = 240 W",
                  "Mechanical power from pump = 240 × 0.70 = 168 W",
                  "168 W >> 11.1 W — panels are sufficient (by a large margin)",
                ],
              },
            ],
            strategy: "Convert units first (kg/h → kg/s); cascade efficiencies as decimals",
          },
        ],
      },
    ],
  },
};
