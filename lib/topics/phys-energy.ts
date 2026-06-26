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
      // ─── MCQ PAPER 1 ──────────────────────────────────────────────────────
      {
        id: "phys-energy-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Energy stores, transfers, conservation and the core Ek / GPE / work formulae.",
        questions: [
          {
            id: "phys-energy-bm1-01",
            question: "Which of the following is an energy STORE rather than a transfer mechanism?",
            options: ["Heating", "Mechanical work", "Elastic (strain) energy", "Electrical working"],
            answerIndex: 2,
            explanation: "Elastic (strain) energy is a store — energy held in a stretched or compressed object. Heating, mechanical work and electrical working are all mechanisms that transfer energy between stores.",
            guideRef: "Energy Stores and Transfers",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm1-02",
            question: "A torch is switched on. Which energy transfer chain best describes what happens?",
            options: [
              "Chemical store → electrical working → light and thermal energy (waves and heating)",
              "Electrical store → chemical working → kinetic energy",
              "Light store → electrical working → chemical energy",
              "Kinetic store → heating → chemical energy",
            ],
            answerIndex: 0,
            explanation: "The battery's chemical store is transferred electrically to the bulb, which radiates light (waves) and dissipates thermal energy (heating). There is no such thing as a 'light store' or 'electrical store' in this chain.",
            guideRef: "Energy Stores and Transfers",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm1-03",
            question: "What is the unit of work done, and what is it equivalent to?",
            options: ["The watt (W), equal to 1 J/s", "The joule (J), equal to 1 N m", "The newton (N), equal to 1 kg m/s²", "The pascal (Pa), equal to 1 N/m²"],
            answerIndex: 1,
            explanation: "Work done is measured in joules. Since W = Fd (force × distance), 1 J = 1 N × 1 m = 1 N m. The watt is the unit of power, not work.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm1-04",
            question: "A 2 kg book rests on a shelf 1.5 m above the floor. How much gravitational potential energy does it have relative to the floor? (g = 10 N/kg)",
            options: ["3 J", "13.3 J", "30 J", "300 J"],
            answerIndex: 2,
            explanation: "ΔGPE = mgh = 2 × 10 × 1.5 = 30 J. Option A omits g; option B divides by g instead of multiplying.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm1-05",
            question: "A 0.5 kg ball moves at 6 m/s. What is its kinetic energy?",
            options: ["1.5 J", "3 J", "9 J", "18 J"],
            answerIndex: 2,
            explanation: "Ek = ½mv² = ½ × 0.5 × 6² = 0.5 × 0.5 × 36 = 9 J. Option D forgets the ½; option B uses v instead of v².",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "core",
            hints: [
              "Write Ek = ½mv² and substitute the values.",
              "Square the speed first: 6² = 36.",
              "Then multiply by ½ and by the mass.",
            ],
          },
          {
            id: "phys-energy-bm1-06",
            question:
              "A 1500 kg car accelerates so that its speed doubles from 10 m/s to 20 m/s. By what factor does its kinetic energy increase?",
            options: ["2", "3", "4", "8"],
            answerIndex: 2,
            explanation: "Ek ∝ v². Doubling v multiplies Ek by 2² = 4. (Check: ½ × 1500 × 100 = 75 000 J → ½ × 1500 × 400 = 300 000 J, which is 4×.)",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "core",
            hints: [
              "Kinetic energy depends on the SQUARE of speed.",
              "If v doubles, what happens to v²?",
              "The mass is unchanged, so only the v² term matters.",
            ],
            strategy: "Use the proportionality Ek ∝ v² instead of full numbers",
          },
          {
            id: "phys-energy-bm1-07",
            question:
              "A 0.6 kg ball is dropped from rest and falls 2 m (no air resistance). What is its speed just before impact? (g = 10 N/kg)",
            options: ["4.5 m/s", "6.3 m/s", "20 m/s", "40 m/s"],
            answerIndex: 1,
            explanation: "GPE lost = mgh = 0.6 × 10 × 2 = 12 J = KE gained. ½mv² = 12 → v² = 2 × 12 / 0.6 = 40 → v = √40 ≈ 6.3 m/s. The mass actually cancels: v = √(2gh) = √40.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "core",
            hints: [
              "GPE lost = KE gained: mgh = ½mv².",
              "Mass cancels, so v = √(2gh).",
              "v = √(2 × 10 × 2) = √40.",
            ],
            strategy: "v = √(2gh) for a free fall from rest",
          },
          {
            id: "phys-energy-bm1-08",
            question: "A force of 25 N pushes a trolley 8 m along the floor. The work done against friction is 60 J. How much kinetic energy does the trolley gain?",
            options: ["60 J", "140 J", "200 J", "260 J"],
            answerIndex: 1,
            explanation: "Total work done by the force = Fd = 25 × 8 = 200 J. Of this, 60 J is dissipated by friction (heat), so KE gained = 200 − 60 = 140 J.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "First find total work done by the applied force: W = Fd.",
              "Friction removes some of that energy as heat.",
              "KE gained = total work − work lost to friction.",
            ],
          },
          {
            id: "phys-energy-bm1-09",
            question:
              "A 60 kg athlete runs up a flight of stairs of total vertical height 5 m in 4 s. What is the useful power developed against gravity? (g = 10 N/kg)",
            options: ["75 W", "300 W", "750 W", "1200 W"],
            answerIndex: 2,
            explanation: "GPE gained = mgh = 60 × 10 × 5 = 3000 J. Power = E/t = 3000 / 4 = 750 W. Option B forgets to divide by time correctly; option A divides twice.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "challenge",
            hints: [
              "Find the GPE gained: mgh = 60 × 10 × 5.",
              "Power is energy per second: P = E/t.",
              "Divide the GPE (3000 J) by the time (4 s).",
              "Check the unit: J/s = W.",
            ],
            strategy: "P = mgh/t — energy gained per second",
          },
          {
            id: "phys-energy-bm1-10",
            question:
              "A spring is compressed, storing 8 J of elastic energy. When released it launches a 0.1 kg ball vertically. Ignoring air resistance and assuming all the energy is transferred to the ball, what is the maximum height reached? (g = 10 N/kg)",
            options: ["0.8 m", "1.6 m", "8 m", "80 m"],
            answerIndex: 2,
            explanation: "All elastic energy → GPE at the top: mgh = 8 → h = 8 / (0.1 × 10) = 8 / 1 = 8 m. The kinetic stage is an intermediate step but at maximum height all energy is GPE.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "challenge",
            hints: [
              "At maximum height, all the energy is gravitational potential energy.",
              "Set elastic energy = GPE: 8 = mgh.",
              "Rearrange for h: h = 8 / (mg).",
              "mg = 0.1 × 10 = 1 N.",
            ],
            strategy: "Elastic store → GPE store at the highest point; KE = 0 there",
          },
        ],
      },
      // ─── MCQ PAPER 2 ──────────────────────────────────────────────────────
      {
        id: "phys-energy-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Power, efficiency, Sankey diagrams and combined multi-stage calculations.",
        questions: [
          {
            id: "phys-energy-bm2-01",
            question: "Which formula correctly gives power?",
            options: ["P = Fd", "P = E/t", "P = ½mv²", "P = mgh"],
            answerIndex: 1,
            explanation: "Power is the rate of energy transfer, P = E/t (or W/t). Fd is work, ½mv² is kinetic energy and mgh is GPE.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm2-02",
            question: "Why can the efficiency of a real device never exceed 100%?",
            options: [
              "Because friction always speeds devices up",
              "Because that would mean useful output energy is greater than the total energy input, breaking conservation of energy",
              "Because all devices waste exactly half their energy",
              "Because efficiency is always measured as a decimal",
            ],
            answerIndex: 1,
            explanation: "Useful output can at most equal total input (when no energy is wasted). It can never exceed it, because that would create energy from nothing, violating conservation of energy.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm2-03",
            question: "A lamp is supplied with 60 J of electrical energy and emits 9 J of light. What is its efficiency?",
            options: ["6.7%", "15%", "51%", "85%"],
            answerIndex: 1,
            explanation: "Efficiency = useful output / total input × 100% = 9 / 60 × 100% = 15%. The remaining 51 J is wasted as heat.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm2-04",
            question:
              "A Sankey diagram for an electric motor shows an input arrow of width representing 500 J and a useful output arrow representing 400 J. What does the remaining branch represent?",
            options: ["100 J wasted as thermal energy", "400 J of useful work", "900 J total energy", "100 J of extra input"],
            answerIndex: 0,
            explanation: "Arrow widths must conserve energy: input (500 J) = useful (400 J) + wasted (100 J). The branch represents 100 J dissipated as heat/sound.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "In a Sankey diagram all the branches must add up to the input.",
              "Wasted energy = input − useful output.",
              "500 − 400 = ?",
            ],
          },
          {
            id: "phys-energy-bm2-05",
            question:
              "A pump produces a useful power output of 600 W while drawing 750 W of electrical power. What is its efficiency?",
            options: ["56%", "80%", "125%", "150 W"],
            answerIndex: 1,
            explanation: "Efficiency = useful power / total power × 100% = 600 / 750 × 100% = 80%. Option C inverts the ratio (which would exceed 100% — impossible).",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "Efficiency can be calculated from powers as well as energies.",
              "Efficiency = useful power / total power × 100%.",
              "600 / 750 = 0.8.",
            ],
          },
          {
            id: "phys-energy-bm2-06",
            question:
              "A motor lifts a 20 kg load at a steady speed of 0.5 m/s. What is the useful power output? (g = 10 N/kg)",
            options: ["10 W", "40 W", "100 W", "400 W"],
            answerIndex: 2,
            explanation: "Weight = mg = 20 × 10 = 200 N. At constant speed the lifting force equals the weight. P = Fv = 200 × 0.5 = 100 W.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "At steady speed the lifting force equals the weight, mg.",
              "Use P = Fv.",
              "F = 200 N, v = 0.5 m/s.",
            ],
            strategy: "P = Fv with F equal to the weight at constant speed",
          },
          {
            id: "phys-energy-bm2-07",
            question:
              "An electricity supply chain has a generator of efficiency 40%, a step-up transformer of efficiency 99% and transmission lines of efficiency 95%. What is the overall efficiency? (to the nearest whole %)",
            options: ["38%", "45%", "67%", "78%"],
            answerIndex: 0,
            explanation: "Overall = 0.40 × 0.99 × 0.95 = 0.3762 ≈ 38%. Stage efficiencies multiply as decimals; the overall value must be lower than the smallest stage (40%).",
            guideRef: "Efficiency of Electricity Generation",
            difficulty: "core",
            hints: [
              "Convert each percentage to a decimal.",
              "Multiply all three decimals together.",
              "0.40 × 0.99 × 0.95 = ?",
              "The answer must be less than 40%.",
            ],
            strategy: "Overall efficiency = product of stage efficiencies (as decimals)",
          },
          {
            id: "phys-energy-bm2-08",
            question:
              "A 1200 W kettle is 90% efficient at heating water. How much useful energy is delivered to the water in 2 minutes?",
            options: ["129 600 J", "144 000 J", "160 000 J", "2160 J",],
            answerIndex: 0,
            explanation: "Total energy = P × t = 1200 × 120 = 144 000 J. Useful = 0.90 × 144 000 = 129 600 J. Option B forgets to apply the 90% efficiency.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "First find total electrical energy: E = P × t (t in seconds!).",
              "2 minutes = 120 s.",
              "Useful energy = efficiency × total energy = 0.90 × E.",
            ],
            strategy: "E = Pt (seconds), then multiply by efficiency for useful output",
          },
          {
            id: "phys-energy-bm2-09",
            question:
              "A car engine burns fuel at a rate that releases 80 kW of chemical power but delivers only 24 kW of useful power to the wheels. How much power is wasted, and what is the efficiency?",
            options: ["56 kW wasted, 30% efficient", "56 kW wasted, 70% efficient", "104 kW wasted, 30% efficient", "24 kW wasted, 70% efficient"],
            answerIndex: 0,
            explanation: "Wasted power = 80 − 24 = 56 kW. Efficiency = 24 / 80 × 100% = 30%. Most of the energy is dissipated as heat in the engine and exhaust.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "challenge",
            hints: [
              "Wasted power = input − useful output.",
              "Efficiency = useful / input × 100%.",
              "24 / 80 = 0.30.",
            ],
            strategy: "Conservation: wasted = input − useful; efficiency = useful/input",
          },
          {
            id: "phys-energy-bm2-10",
            question:
              "A wind turbine delivers 1.5 MW of electrical power and is 45% efficient at converting the kinetic energy of the wind. What is the power carried by the wind passing through the turbine?",
            options: ["0.68 MW", "1.95 MW", "3.0 MW", "3.33 MW"],
            answerIndex: 3,
            explanation: "Input power = useful output / efficiency = 1.5 / 0.45 = 3.33 MW. Option C uses ÷0.5 by mistake; you must divide by 0.45.",
            guideRef: "Efficiency of Electricity Generation",
            difficulty: "challenge",
            hints: [
              "Efficiency = useful output / input, so input = useful / efficiency.",
              "Convert 45% to 0.45.",
              "1.5 MW ÷ 0.45 = ?",
              "The input must be larger than the 1.5 MW output.",
            ],
            strategy: "Rearrange efficiency: input = useful output ÷ efficiency",
          },
        ],
      },
      // ─── MCQ PAPER 3 ──────────────────────────────────────────────────────
      {
        id: "phys-energy-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Energy resources: renewable, non-renewable, power stations and the Sun as the ultimate source.",
        questions: [
          {
            id: "phys-energy-bm3-01",
            question: "Which of these is a NON-renewable energy resource?",
            options: ["Geothermal", "Natural gas", "Tidal", "Wave"],
            answerIndex: 1,
            explanation: "Natural gas is a fossil fuel that cannot be replenished on a human timescale. Geothermal, tidal and wave are all renewable.",
            guideRef: "Non-Renewable Energy Resources",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm3-02",
            question: "In every thermal power station, the generator carries out which energy transfer?",
            options: ["Chemical → thermal", "Thermal → kinetic", "Kinetic → electrical", "Electrical → light"],
            answerIndex: 2,
            explanation: "The spinning turbine turns the generator, converting kinetic energy into electrical energy. The boiler does chemical→thermal and the turbine does thermal→kinetic.",
            guideRef: "Non-Renewable Energy Resources",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm3-03",
            question: "Which energy resource does NOT ultimately depend on energy from the Sun?",
            options: ["Wind", "Wave", "Tidal", "Hydroelectric"],
            answerIndex: 2,
            explanation: "Tidal energy comes from the gravitational pull of the Moon (and partly the Sun) and the Earth's rotation, not solar radiation. Wind, wave and hydro are all driven by the Sun.",
            guideRef: "Renewable Energy Resources",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm3-04",
            question: "How does a nuclear power station differ from a coal-fired power station?",
            options: [
              "It uses fission to release heat instead of combustion, and produces radioactive waste",
              "It does not use a turbine or generator",
              "It releases more CO₂ per unit of electricity",
              "It depends on the weather",
            ],
            answerIndex: 0,
            explanation: "Both use the turbine-generator chain. The key difference is the heat source: nuclear fission of uranium rather than burning fuel. Nuclear emits very little CO₂ but produces radioactive waste.",
            guideRef: "Non-Renewable Energy Resources",
            difficulty: "core",
            hints: [
              "Both station types make steam and use a turbine + generator.",
              "Think about what produces the heat in each case.",
              "Consider the waste each produces.",
            ],
          },
          {
            id: "phys-energy-bm3-05",
            question: "Which statement about solar photovoltaic (PV) cells is correct?",
            options: [
              "They convert light energy directly into electrical energy",
              "They use the Sun to heat water for a turbine",
              "They produce a constant output day and night",
              "They release CO₂ while generating electricity",
            ],
            answerIndex: 0,
            explanation: "PV cells convert light directly to electricity (no turbine). Solar THERMAL panels heat water; PV does not. Output drops to zero at night and PV produces no CO₂ in operation.",
            guideRef: "Renewable Energy Resources",
            difficulty: "core",
            hints: [
              "Distinguish photovoltaic from solar thermal.",
              "'Photovoltaic' means light → voltage/electricity.",
              "Does sunlight reach the cell at night?",
            ],
          },
          {
            id: "phys-energy-bm3-06",
            question: "Which is the MAIN environmental disadvantage of burning fossil fuels for electricity?",
            options: [
              "They are renewable and run out quickly",
              "They release CO₂, a greenhouse gas that contributes to global warming",
              "They produce radioactive waste",
              "They require very large reservoirs",
            ],
            answerIndex: 1,
            explanation: "Burning fossil fuels releases CO₂ (a greenhouse gas) and SO₂ (acid rain). Radioactive waste is a nuclear issue; reservoirs relate to hydroelectric.",
            guideRef: "Non-Renewable Energy Resources",
            difficulty: "core",
          },
          {
            id: "phys-energy-bm3-07",
            question: "Why is intermittency a major drawback of wind and solar power?",
            options: [
              "They release too much CO₂ during operation",
              "Their output varies with weather/time of day, so supply may not match demand",
              "They are non-renewable",
              "They cannot be connected to a national grid",
            ],
            answerIndex: 1,
            explanation: "Wind and solar only generate when there is wind or sunlight, so output is intermittent and may not match demand. This is why energy storage and grid balancing are needed.",
            guideRef: "Renewable Energy Resources",
            difficulty: "core",
            hints: [
              "Intermittent means 'not continuous'.",
              "What controls when a wind turbine or solar panel produces power?",
              "Think about whether supply always matches demand.",
            ],
          },
          {
            id: "phys-energy-bm3-08",
            question: "A combined heat and power (CHP) plant achieves a higher overall efficiency than a conventional power station because it:",
            options: [
              "Generates electricity without any wasted heat",
              "Uses the otherwise-wasted heat for local heating",
              "Runs the turbine twice as fast",
              "Burns no fuel at all",
            ],
            answerIndex: 1,
            explanation: "CHP captures the 'waste' heat normally lost to the environment and uses it for heating buildings, raising useful efficiency to 70–80%. No real plant wastes zero heat.",
            guideRef: "Efficiency of Electricity Generation",
            difficulty: "core",
            hints: [
              "Conventional stations lose a lot of energy as waste heat.",
              "What if that heat could be put to use?",
              "CHP = Combined Heat and Power.",
            ],
          },
          {
            id: "phys-energy-bm3-09",
            question:
              "A geothermal plant and a tidal barrage are both described as 'reliable' renewables. Which best explains why?",
            options: [
              "Both depend on the weather being sunny",
              "Geothermal taps steady underground heat; tidal flows follow predictable, regular tides",
              "Both store water in large reservoirs behind dams",
              "Both convert chemical energy from fuel",
            ],
            answerIndex: 1,
            explanation: "Geothermal heat from underground rocks is essentially constant, and tides are driven by predictable Moon/Earth motion. Neither depends on day-to-day weather, so output is reliable.",
            guideRef: "Renewable Energy Resources",
            difficulty: "challenge",
            hints: [
              "Reliable means the output can be predicted/depended on.",
              "Is underground heat affected by the weather?",
              "Are tide times predictable?",
            ],
          },
          {
            id: "phys-energy-bm3-10",
            question:
              "A country wants base-load power (constant 24-hour supply) with the lowest CO₂ emissions. Which option best meets BOTH requirements?",
            options: ["Solar PV farm", "Onshore wind farm", "Nuclear power station", "Coal-fired power station"],
            answerIndex: 2,
            explanation: "Nuclear provides reliable, constant base-load power with very low CO₂ emissions per unit electricity. Solar and wind are intermittent; coal is reliable but high-CO₂.",
            guideRef: "Non-Renewable Energy Resources",
            difficulty: "challenge",
            hints: [
              "Base-load means constant, weather-independent output — rules out solar and wind.",
              "Lowest CO₂ rules out coal.",
              "Which reliable option emits very little CO₂?",
            ],
            strategy: "Filter on both criteria: reliability first, then CO₂",
          },
        ],
      },
      // ─── MCQ PAPER 4 ──────────────────────────────────────────────────────
      {
        id: "phys-energy-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Synoptic mix: conservation, multi-step calculations and resource evaluation.",
        questions: [
          {
            id: "phys-energy-bm4-01",
            question: "Which statement is a correct summary of the principle of conservation of energy?",
            options: [
              "Energy is gradually used up and destroyed",
              "Energy can be created in nuclear reactions",
              "Energy cannot be created or destroyed, only transferred between stores",
              "Energy is conserved only when there is no friction",
            ],
            answerIndex: 2,
            explanation: "Conservation of energy holds always: energy is transferred between stores, never created or destroyed. Friction does not destroy energy — it dissipates it as heat.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm4-02",
            question: "What happens to energy that is 'dissipated' to the surroundings?",
            options: [
              "It is destroyed",
              "It spreads out as thermal energy and becomes less useful",
              "It is converted back into chemical energy",
              "It is stored as elastic energy",
            ],
            answerIndex: 1,
            explanation: "Dissipated energy spreads into the surroundings as thermal energy. It still exists (conservation), but is too spread out to be useful.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm4-03",
            question:
              "A 1000 kg lift rises 18 m in 12 s carrying passengers of total mass 200 kg. What useful power is needed to raise the lift and passengers? (g = 10 N/kg)",
            options: ["1500 W", "15 000 W", "18 000 W", "180 000 W"],
            answerIndex: 2,
            explanation: "Total mass = 1200 kg. GPE = mgh = 1200 × 10 × 18 = 216 000 J. Power = 216 000 / 12 = 18 000 W. Option D forgets to divide by time.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "Add the lift and passenger masses: 1000 + 200.",
              "GPE = mgh.",
              "Power = GPE / time.",
            ],
            strategy: "Combine masses, then P = mgh/t",
          },
          {
            id: "phys-energy-bm4-04",
            question:
              "A 0.05 kg arrow leaves a bow with 40 J of kinetic energy. What is its launch speed?",
            options: ["28 m/s", "40 m/s", "57 m/s", "800 m/s"],
            answerIndex: 1,
            explanation: "Ek = ½mv² → v = √(2Ek/m) = √(2 × 40 / 0.05) = √1600 = 40 m/s. Option A wrongly uses √(Ek/m).",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "core",
            hints: [
              "Rearrange Ek = ½mv² for v: v = √(2Ek/m).",
              "2 × 40 / 0.05 = 1600.",
              "Take the square root of 1600.",
            ],
            strategy: "v = √(2Ek/m)",
          },
          {
            id: "phys-energy-bm4-05",
            question:
              "A cyclist of total mass 80 kg freewheels from rest down a hill, dropping 15 m. Friction and air resistance dissipate 3000 J. What is the cyclist's speed at the bottom? (g = 10 N/kg)",
            options: ["10 m/s", "12 m/s", "15 m/s", "17 m/s"],
            answerIndex: 2,
            explanation: "GPE lost = 80 × 10 × 15 = 12 000 J. KE at bottom = 12 000 − 3000 = 9000 J. ½ × 80 × v² = 9000 → v² = 2 × 9000 / 80 = 225 → v = √225 = 15 m/s.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "challenge",
            hints: [
              "GPE lost = mgh.",
              "KE gained = GPE lost − energy dissipated by friction.",
              "v = √(2 × KE / m).",
            ],
            strategy: "KE = GPE lost − energy wasted; then v = √(2KE/m)",
          },
          {
            id: "phys-energy-bm4-06",
            question:
              "A 1500 kg car braking from 30 m/s to rest converts all its kinetic energy to heat in the brakes. How much thermal energy is produced?",
            options: ["22 500 J", "45 000 J", "337 500 J", "675 000 J"],
            answerIndex: 3,
            explanation: "Ek = ½mv² = ½ × 1500 × 30² = 0.5 × 1500 × 900 = 675 000 J. All of this becomes heat in the brakes. Option C forgets the factor of 2 in 30².",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "core",
            hints: [
              "Heat produced = kinetic energy lost.",
              "Ek = ½mv² with v = 30 m/s.",
              "30² = 900.",
            ],
          },
          {
            id: "phys-energy-bm4-07",
            question:
              "A 2 kW immersion heater is 100% efficient and transfers 480 000 J to a tank of water. For how long was it switched on?",
            options: ["2 minutes", "4 minutes", "8 minutes", "16 minutes"],
            answerIndex: 1,
            explanation: "t = E/P = 480 000 / 2000 = 240 s = 4 minutes. Option C (8 minutes) would need twice the energy; remember to divide energy by power, then convert seconds to minutes.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "Rearrange P = E/t for time: t = E/P.",
              "480 000 / 2000 = 240 (seconds).",
              "Convert 240 s to minutes.",
            ],
            strategy: "t = E/P, then convert units",
          },
          {
            id: "phys-energy-bm4-08",
            question:
              "An electric car battery stores 50 MJ of energy. Driving at constant speed, the motor delivers 20 kW of useful power and the system is 80% efficient. How long can the car drive before the battery is empty?",
            options: ["2000 s", "2500 s", "3125 s", "40 000 s"],
            answerIndex: 0,
            explanation: "Total power drawn from battery = useful / efficiency = 20 / 0.8 = 25 kW = 25 000 W. Time = energy / power = 50 × 10⁶ / 25 000 = 2000 s. Option B wrongly ignores efficiency (50 MJ / 20 kW = 2500 s).",
            guideRef: "Efficiency of Electricity Generation",
            difficulty: "challenge",
            hints: [
              "First find the total power drawn from the battery: useful ÷ efficiency.",
              "20 kW ÷ 0.8 = 25 kW.",
              "Time = stored energy ÷ total power.",
              "50 000 000 J ÷ 25 000 W.",
            ],
            strategy: "Total power = useful ÷ efficiency; t = energy ÷ total power",
          },
          {
            id: "phys-energy-bm4-09",
            question:
              "Two identical balls are released: ball X slides down a frictionless curved ramp from height h, ball Y is dropped vertically from the same height h. Ignoring friction and air resistance, how do their speeds at the bottom compare?",
            options: [
              "Ball Y is faster because it falls straight down",
              "Ball X is faster because the ramp is longer",
              "They have equal speed because both convert the same GPE (mgh) into KE",
              "It cannot be determined without the ramp angle",
            ],
            answerIndex: 2,
            explanation: "Speed at the bottom depends only on the height dropped, not the path: both lose the same GPE (mgh) which becomes the same KE. v = √(2gh) in both cases.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "challenge",
            hints: [
              "Energy conservation depends on the change in height, not the path taken.",
              "Both balls lose the same GPE = mgh.",
              "Same KE means same speed (same mass).",
            ],
            strategy: "Frictionless speed depends only on vertical drop: v = √(2gh)",
          },
          {
            id: "phys-energy-bm4-10",
            question:
              "A 40 W LED lamp replaces a 100 W filament lamp giving the same light output of 9 W (useful). What are the efficiencies of the LED and filament lamps respectively?",
            options: ["22.5% and 9%", "9% and 22.5%", "40% and 100%", "22.5% and 90%"],
            answerIndex: 0,
            explanation: "LED: 9 / 40 × 100% = 22.5%. Filament: 9 / 100 × 100% = 9%. The LED wastes far less energy as heat, which is why it is more efficient for the same light output.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "challenge",
            hints: [
              "Efficiency = useful light power / total electrical power × 100%.",
              "Both give 9 W of useful light.",
              "LED total = 40 W; filament total = 100 W.",
              "9/40 and 9/100.",
            ],
            strategy: "Same useful output, different inputs → compare useful/input for each",
          },
        ],
      },
    ],
    qaPapers: [
      // ─── STRUCTURED PAPER 1 ───────────────────────────────────────────────
      {
        id: "phys-energy-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Stores, transfers and the foundational Ek / GPE / work calculations.",
        questions: [
          {
            id: "phys-energy-bq1-01",
            question:
              "(a) State what is meant by an energy 'store' and an energy 'transfer'. [2]\n" +
              "(b) A child winds up a clockwork toy car and lets it go; it speeds across the floor and gradually slows to a stop.\n" +
              "Describe the energy stores and transfers involved from winding up to stopping. [3]",
            marks: 5,
            modelAnswer:
              "(a) An energy store is a way in which energy is held by an object or system (e.g. kinetic, elastic). " +
              "An energy transfer is a process that moves energy from one store to another (e.g. mechanical work, heating).\n\n" +
              "(b) Winding the toy does mechanical work, increasing the elastic (strain) energy store in the spring. " +
              "When released, the spring does mechanical work on the car, transferring energy to the kinetic store (the car speeds up). " +
              "As it moves, friction and air resistance transfer energy from the kinetic store to the thermal (internal) store of the surroundings, " +
              "so the car slows and stops. Total energy is conserved throughout.",
            markScheme: [
              "Store = way energy is held / e.g. kinetic, elastic (1 mark)",
              "Transfer = process moving energy between stores / e.g. work, heating (1 mark)",
              "Winding → elastic store (via mechanical work) (1 mark)",
              "Release → kinetic store (spring does work on car) (1 mark)",
              "Friction/air resistance → thermal store of surroundings / energy dissipated (1 mark)",
            ],
            commonError: "Saying the energy is 'used up' or 'lost' — it is transferred/dissipated to thermal stores, never destroyed.",
            guideRef: "Energy Stores and Transfers",
            difficulty: "warmup",
            hints: [
              "Define 'store' as a way energy is held, 'transfer' as a process that moves it.",
              "Start with the spring: what store does winding fill?",
              "End with what happens to the kinetic energy as the car slows.",
            ],
          },
          {
            id: "phys-energy-bq1-02",
            question:
              "A 4 kg box is pushed 5 m across a horizontal floor by a constant force of 30 N acting in the direction of motion.\n\n" +
              "(a) Calculate the work done by the force. [2]\n" +
              "(b) The box gains 90 J of kinetic energy. Explain what happened to the rest of the energy. [2]",
            marks: 4,
            modelAnswer:
              "(a) W = Fd = 30 × 5 = 150 J.\n\n" +
              "(b) Only 90 J became kinetic energy, so 150 − 90 = 60 J was transferred to the thermal store " +
              "by friction between the box and the floor (the box and floor warm up slightly). Energy is conserved.",
            markScheme: [
              "W = Fd = 30 × 5 (1 mark)",
              "W = 150 J (1 mark)",
              "60 J transferred (150 − 90) (1 mark)",
              "to thermal store / wasted as heat by friction (1 mark)",
            ],
            commonError: "Forgetting that work done is shared between KE gain and heat from friction.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "warmup",
            hints: [
              "Work done = force × distance.",
              "Compare work done with the KE gained.",
              "The difference must go somewhere — think friction.",
            ],
            solutions: [
              {
                label: "Work-energy bookkeeping",
                steps: [
                  "Work done by force = 30 × 5 = 150 J",
                  "KE gained = 90 J",
                  "Energy to thermal store = 150 − 90 = 60 J",
                ],
              },
            ],
          },
          {
            id: "phys-energy-bq1-03",
            question:
              "A 0.15 kg apple falls from a branch 2.5 m above the ground.\n\n" +
              "(a) Calculate the GPE of the apple before it falls (taking the ground as zero). [2]\n" +
              "(b) Calculate its speed just before it hits the ground, assuming no air resistance. [3]",
            marks: 5,
            modelAnswer:
              "(a) GPE = mgh = 0.15 × 10 × 2.5 = 3.75 J.\n\n" +
              "(b) KE at ground = GPE lost = 3.75 J (no air resistance).\n" +
              "½mv² = 3.75 → v² = 2 × 3.75 / 0.15 = 50 → v = √50 ≈ 7.07 m/s ≈ 7.1 m/s.",
            markScheme: [
              "GPE = mgh = 0.15 × 10 × 2.5 (1 mark)",
              "GPE = 3.75 J (1 mark)",
              "KE = GPE = 3.75 J / ½mv² = 3.75 (1 mark)",
              "v² = 50 (1 mark)",
              "v = 7.1 m/s (allow 7.0–7.1) (1 mark)",
            ],
            commonError: "Rounding the GPE too early; keep 3.75 J before finding v.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "core",
            hints: [
              "GPE = mgh.",
              "All GPE becomes KE with no air resistance.",
              "Set ½mv² = 3.75 and solve for v.",
              "v = √(2 × KE / m).",
            ],
            solutions: [
              {
                label: "Energy conservation",
                steps: [
                  "GPE = 0.15 × 10 × 2.5 = 3.75 J",
                  "KE at ground = 3.75 J",
                  "v² = 2 × 3.75 / 0.15 = 50",
                  "v = √50 = 7.07 m/s ≈ 7.1 m/s",
                ],
              },
            ],
            strategy: "GPE lost = KE gained, then v = √(2KE/m)",
          },
          {
            id: "phys-energy-bq1-04",
            question:
              "A weightlifter raises a 120 kg barbell from the floor to a height of 2.0 m above the floor in 1.5 s.\n\n" +
              "(a) Calculate the work done on the barbell. [2]\n" +
              "(b) Calculate the average useful power developed. [2]\n" +
              "(c) State one assumption you have made. [1]",
            marks: 5,
            modelAnswer:
              "(a) Work done = GPE gained = mgh = 120 × 10 × 2.0 = 2400 J.\n\n" +
              "(b) Power = W/t = 2400 / 1.5 = 1600 W.\n\n" +
              "(c) Assumption: all the work goes into lifting (e.g. the barbell is raised at steady speed / no energy wasted), " +
              "or g = 10 N/kg is exact.",
            markScheme: [
              "W = mgh = 120 × 10 × 2.0 (1 mark)",
              "W = 2400 J (1 mark)",
              "P = W/t = 2400/1.5 (1 mark)",
              "P = 1600 W (1 mark)",
              "Valid assumption (steady speed / no losses / g exact) (1 mark)",
            ],
            commonError: "Multiplying by time instead of dividing — power is energy PER second.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "Work done against gravity = mgh.",
              "Power = work done ÷ time.",
              "2400 ÷ 1.5.",
            ],
            solutions: [
              {
                label: "Work then power",
                steps: [
                  "W = 120 × 10 × 2.0 = 2400 J",
                  "P = 2400 / 1.5 = 1600 W",
                ],
              },
            ],
            strategy: "Work first (mgh), then P = W/t",
          },
          {
            id: "phys-energy-bq1-05",
            question:
              "A 1200 kg car travelling at 25 m/s on a level road comes to rest by braking.\n\n" +
              "(a) Calculate the kinetic energy of the car before braking. [2]\n" +
              "(b) The braking distance is 50 m. Calculate the average braking force. [3]\n" +
              "(c) The driver then travels at 50 m/s. Without recalculating fully, state how the braking distance would change for the same braking force, and justify your answer. [2]",
            marks: 7,
            modelAnswer:
              "(a) Ek = ½mv² = ½ × 1200 × 25² = 0.5 × 1200 × 625 = 375 000 J.\n\n" +
              "(b) Work done by brakes = KE removed: Fd = 375 000 → F = 375 000 / 50 = 7500 N.\n\n" +
              "(c) Doubling the speed quadruples the kinetic energy (Ek ∝ v²). For the same braking force, the braking distance " +
              "(d = Ek/F) also quadruples, so it becomes 4 × 50 = 200 m.",
            markScheme: [
              "Ek = ½mv² = ½ × 1200 × 625 (1 mark)",
              "Ek = 375 000 J (1 mark)",
              "Fd = KE → F = 375 000 / 50 (1 mark)",
              "F = 7500 N (1 mark)",
              "method: braking distance found from work-energy (1 mark)",
              "Ek (and so distance) ∝ v² → quadruples (1 mark)",
              "Braking distance = 200 m / 4× larger (1 mark)",
            ],
            commonError: "Thinking braking distance doubles when speed doubles — it quadruples because KE depends on v².",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "challenge",
            hints: [
              "Part (a): Ek = ½mv² with v = 25 m/s.",
              "Part (b): work done by brakes (Fd) equals the KE removed.",
              "Part (c): KE depends on v², so doubling v multiplies KE by 4.",
              "Same force, 4× energy → 4× distance.",
            ],
            solutions: [
              {
                label: "Work-energy theorem for braking",
                steps: [
                  "Ek = 0.5 × 1200 × 25² = 375 000 J",
                  "Brakes do work Fd to remove this KE: F = 375 000 / 50 = 7500 N",
                  "At 50 m/s, Ek = 0.5 × 1200 × 50² = 1 500 000 J (4× larger)",
                  "Same F → d = 1 500 000 / 7500 = 200 m (4× larger)",
                ],
              },
            ],
            strategy: "Braking: Fd = ½mv²; remember Ek ∝ v²",
          },
          {
            id: "phys-energy-bq1-06",
            question:
              "A pile driver drops a 500 kg hammer from a height of 3 m onto a post, driving it 0.2 m into the ground.\n\n" +
              "(a) Calculate the GPE lost by the hammer. [2]\n" +
              "(b) Assuming all this energy is used to push the post into the ground, calculate the average resistive force of the ground on the post. [3]",
            marks: 5,
            modelAnswer:
              "(a) GPE = mgh = 500 × 10 × 3 = 15 000 J.\n\n" +
              "(b) Work done on post = force × distance into ground: F × 0.2 = 15 000 → F = 15 000 / 0.2 = 75 000 N.",
            markScheme: [
              "GPE = mgh = 500 × 10 × 3 (1 mark)",
              "GPE = 15 000 J (1 mark)",
              "W = Fd applied to post: F = 15 000 / 0.2 (1 mark)",
              "correct rearrangement (1 mark)",
              "F = 75 000 N (1 mark)",
            ],
            commonError: "Using the 3 m drop height instead of the 0.2 m penetration distance when finding the force on the post.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "GPE = mgh using the 3 m drop.",
              "That energy does work pushing the post in: W = F × 0.2 m.",
              "Rearrange F = W / d, using d = 0.2 m.",
            ],
            solutions: [
              {
                label: "Energy then force",
                steps: [
                  "GPE = 500 × 10 × 3 = 15 000 J",
                  "Energy used to push post = 15 000 J over 0.2 m",
                  "F = 15 000 / 0.2 = 75 000 N",
                ],
              },
            ],
            strategy: "GPE drop becomes work done over the penetration distance",
          },
          {
            id: "phys-energy-bq1-07",
            question:
              "(a) Write down the equation linking kinetic energy, mass and speed. [1]\n" +
              "(b) A trolley of mass 2 kg is given 16 J of kinetic energy. Calculate its speed. [2]\n" +
              "(c) The same 16 J is given to a 0.5 kg trolley. Calculate its speed and comment on how speed depends on mass for a fixed energy. [3]",
            marks: 6,
            modelAnswer:
              "(a) Ek = ½mv².\n\n" +
              "(b) 16 = ½ × 2 × v² → v² = 16 → v = 4 m/s.\n\n" +
              "(c) 16 = ½ × 0.5 × v² → v² = 64 → v = 8 m/s. For a fixed energy, a lighter object moves faster: " +
              "v = √(2Ek/m), so v is proportional to 1/√m — reducing the mass to a quarter doubles the speed.",
            markScheme: [
              "Ek = ½mv² (1 mark)",
              "v² = 16 → v = 4 m/s (1 mark for working, 1 implied) (1 mark)",
              "v = 8 m/s for the 0.5 kg trolley (1 mark)",
              "comment: lighter → faster for fixed energy (1 mark)",
              "v ∝ 1/√m / quartering mass doubles speed (1 mark)",
            ],
            commonError: "Assuming half the mass gives double the speed by direct proportion — the relationship is v ∝ 1/√m.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "core",
            hints: [
              "Rearrange Ek = ½mv² to v = √(2Ek/m).",
              "Part (b): 2 × 16 / 2 = 16, so v = 4.",
              "Part (c): 2 × 16 / 0.5 = 64, so v = 8.",
              "Compare the two speeds for the mass change.",
            ],
            solutions: [
              {
                label: "Rearranging for v",
                steps: [
                  "v = √(2Ek/m)",
                  "2 kg: v = √(32/2) = √16 = 4 m/s",
                  "0.5 kg: v = √(32/0.5) = √64 = 8 m/s",
                  "Mass ÷4 → speed ×2 (since v ∝ 1/√m)",
                ],
              },
            ],
            strategy: "v = √(2Ek/m); speed scales as 1/√m for fixed energy",
          },
          {
            id: "phys-energy-bq1-08",
            question:
              "A model rocket of mass 0.25 kg is launched vertically. Its motor does 50 J of useful work on it.\n\n" +
              "(a) Ignoring air resistance and the mass of fuel burnt, calculate the maximum height the rocket could reach. [3]\n" +
              "(b) Explain why the real rocket reaches a lower height. [2]",
            marks: 5,
            modelAnswer:
              "(a) At maximum height all the energy is GPE: mgh = 50 → h = 50 / (0.25 × 10) = 50 / 2.5 = 20 m.\n\n" +
              "(b) In reality air resistance does work against the rocket, transferring some kinetic energy to thermal energy " +
              "in the air. Less energy is available as GPE, so the rocket reaches a lower height.",
            markScheme: [
              "At max height energy is all GPE: mgh = 50 (1 mark)",
              "h = 50 / (0.25 × 10) (1 mark)",
              "h = 20 m (1 mark)",
              "air resistance does work / transfers energy to thermal store (1 mark)",
              "less energy available for GPE → lower height (1 mark)",
            ],
            commonError: "Forgetting that at the highest point KE = 0, so all the work appears as GPE.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "core",
            hints: [
              "At the top the rocket is momentarily at rest: KE = 0.",
              "So all 50 J is GPE: mgh = 50.",
              "h = 50 / (mg) with mg = 0.25 × 10.",
            ],
            solutions: [
              {
                label: "Work → GPE at apex",
                steps: [
                  "At maximum height KE = 0, so GPE = 50 J",
                  "mgh = 50 → h = 50 / (0.25 × 10)",
                  "h = 50 / 2.5 = 20 m",
                ],
              },
            ],
            strategy: "Useful work = GPE at the highest point (KE = 0 there)",
          },
          {
            id: "phys-energy-bq1-09",
            question:
              "(a) Define power and state its unit. [2]\n" +
              "(b) A crane lifts loads. In one test it raises a 600 kg load through 9 m in 18 s. Calculate the useful output power. [2]\n" +
              "(c) The crane's motor takes 4000 W of electrical power. Calculate its efficiency. [2]",
            marks: 6,
            modelAnswer:
              "(a) Power is the rate of energy transfer (or work done per unit time). Its unit is the watt (W), 1 W = 1 J/s.\n\n" +
              "(b) GPE = mgh = 600 × 10 × 9 = 54 000 J. Useful power = 54 000 / 18 = 3000 W.\n\n" +
              "(c) Efficiency = useful power / input power × 100% = 3000 / 4000 × 100% = 75%.",
            markScheme: [
              "Power = rate of energy transfer / work done per second (1 mark)",
              "Unit watt / J per s (1 mark)",
              "Useful power = mgh/t = 54 000/18 = 3000 W (1 mark)",
              "correct value 3000 W (1 mark)",
              "Efficiency = 3000/4000 × 100% (1 mark)",
              "= 75% (1 mark)",
            ],
            commonError: "Quoting efficiency as a power (3000 W) rather than a percentage.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "Power = energy transferred ÷ time.",
              "Useful power: find GPE gained, divide by 18 s.",
              "Efficiency = useful power ÷ input power × 100%.",
            ],
            solutions: [
              {
                label: "Power then efficiency",
                steps: [
                  "GPE = 600 × 10 × 9 = 54 000 J",
                  "Useful power = 54 000 / 18 = 3000 W",
                  "Efficiency = 3000 / 4000 × 100% = 75%",
                ],
              },
            ],
            strategy: "Useful power = mgh/t, then efficiency = useful/input",
          },
          {
            id: "phys-energy-bq1-10",
            question:
              "A 70 kg cyclist and bicycle (total mass 80 kg) climb a hill that rises 60 m. The cyclist provides 60 000 J of useful work.\n\n" +
              "(a) Calculate the GPE gained at the top. [2]\n" +
              "(b) Calculate the energy wasted (against friction and air resistance) during the climb. [2]\n" +
              "(c) Calculate the efficiency of the climb (useful GPE gain compared with work done). [2]",
            marks: 6,
            modelAnswer:
              "(a) GPE = mgh = 80 × 10 × 60 = 48 000 J.\n\n" +
              "(b) Energy wasted = work done − GPE gained = 60 000 − 48 000 = 12 000 J.\n\n" +
              "(c) Efficiency = useful GPE / work done × 100% = 48 000 / 60 000 × 100% = 80%.",
            markScheme: [
              "GPE = mgh = 80 × 10 × 60 (1 mark)",
              "GPE = 48 000 J (1 mark)",
              "Wasted = 60 000 − 48 000 = 12 000 J (1 mark)",
              "identifies wasted as friction/air resistance (heat) (1 mark)",
              "Efficiency = 48 000/60 000 × 100% (1 mark)",
              "= 80% (1 mark)",
            ],
            commonError: "Using 70 kg (cyclist only) instead of the total 80 kg mass.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "challenge",
            hints: [
              "Use the TOTAL mass (80 kg) for GPE.",
              "Wasted energy = work done − useful GPE gained.",
              "Efficiency = useful/total × 100%.",
            ],
            solutions: [
              {
                label: "Energy balance for the climb",
                steps: [
                  "GPE gained = 80 × 10 × 60 = 48 000 J",
                  "Wasted = 60 000 − 48 000 = 12 000 J",
                  "Efficiency = 48 000 / 60 000 × 100% = 80%",
                ],
              },
            ],
            strategy: "Useful = GPE gained; wasted = input − useful; efficiency = useful/input",
          },
        ],
      },
      // ─── STRUCTURED PAPER 2 ───────────────────────────────────────────────
      {
        id: "phys-energy-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Power, efficiency, Sankey diagrams and multi-stage energy systems.",
        questions: [
          {
            id: "phys-energy-bq2-01",
            question:
              "(a) State the equation for efficiency in terms of energy. [1]\n" +
              "(b) A filament lamp transfers 100 J of electrical energy each second, of which 5 J is emitted as light. " +
              "Calculate its efficiency. [2]\n" +
              "(c) Explain, in terms of energy, why the lamp gets hot. [2]",
            marks: 5,
            modelAnswer:
              "(a) Efficiency = (useful energy output / total energy input) × 100%.\n\n" +
              "(b) Efficiency = 5 / 100 × 100% = 5%.\n\n" +
              "(c) 95 J of every 100 J is not emitted as light; it is transferred to the thermal store of the filament and surroundings " +
              "(dissipated as heat), so the lamp gets hot.",
            markScheme: [
              "Efficiency = useful/total × 100% (1 mark)",
              "5/100 × 100% (1 mark)",
              "= 5% (1 mark)",
              "95 J (most energy) wasted as thermal energy (1 mark)",
              "dissipated to filament/surroundings → lamp heats up (1 mark)",
            ],
            commonError: "Saying efficiency is 95% (the wasted fraction) rather than 5% (the useful fraction).",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "warmup",
            hints: [
              "Efficiency uses USEFUL output (light), not wasted output.",
              "5 J useful out of 100 J in.",
              "The rest becomes heat.",
            ],
          },
          {
            id: "phys-energy-bq2-02",
            question:
              "A washing machine motor is supplied with 500 J of electrical energy. It does 350 J of useful work turning the drum; the rest is wasted.\n\n" +
              "(a) Calculate the efficiency of the motor. [2]\n" +
              "(b) Describe how you would represent this on a Sankey diagram, including the relative widths of the arrows. [3]",
            marks: 5,
            modelAnswer:
              "(a) Efficiency = 350 / 500 × 100% = 70%.\n\n" +
              "(b) Draw one input arrow representing 500 J (full width). It splits: a useful output arrow continuing straight ahead " +
              "representing 350 J (70% of the width), and a branch arrow turning aside representing the 150 J wasted as thermal/sound energy " +
              "(30% of the width). The arrow widths must be in proportion 350 : 150 and add up to the 500 J input.",
            markScheme: [
              "Efficiency = 350/500 × 100% (1 mark)",
              "= 70% (1 mark)",
              "input arrow 500 J widest, splits into two (1 mark)",
              "useful 350 J straight ahead, wasted 150 J branches off (1 mark)",
              "widths proportional / 350:150 and sum to input (1 mark)",
            ],
            commonError: "Drawing the wasted-energy arrow the same width as the useful one despite the 350:150 ratio.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "Efficiency = useful/total × 100%.",
              "Wasted energy = 500 − 350 = 150 J.",
              "Arrow widths are proportional to energy and must add up to the input.",
            ],
            solutions: [
              {
                label: "Efficiency and Sankey proportions",
                steps: [
                  "Efficiency = 350 / 500 × 100% = 70%",
                  "Wasted = 500 − 350 = 150 J",
                  "Arrows in ratio 350 (useful) : 150 (wasted), summing to 500",
                ],
              },
            ],
            strategy: "Wasted = input − useful; Sankey widths ∝ energy",
          },
          {
            id: "phys-energy-bq2-03",
            question:
              "An escalator carries an average of 90 people per minute, each of mass 70 kg, up a vertical height of 6 m.\n\n" +
              "(a) Calculate the GPE given to the people each minute. [3]\n" +
              "(b) Calculate the minimum useful power output of the escalator motor. [2]\n" +
              "(c) The motor is 60% efficient. Calculate the electrical power it must draw. [2]",
            marks: 7,
            modelAnswer:
              "(a) Mass per minute = 90 × 70 = 6300 kg. GPE = mgh = 6300 × 10 × 6 = 378 000 J per minute.\n\n" +
              "(b) Useful power = energy / time = 378 000 / 60 = 6300 W.\n\n" +
              "(c) Input power = useful / efficiency = 6300 / 0.60 = 10 500 W (10.5 kW).",
            markScheme: [
              "Total mass per minute = 90 × 70 = 6300 kg (1 mark)",
              "GPE = mgh = 6300 × 10 × 6 (1 mark)",
              "GPE = 378 000 J (1 mark)",
              "Useful power = 378 000 / 60 = 6300 W (1 mark)",
              "correct value 6300 W (1 mark)",
              "Input = 6300 / 0.60 (1 mark)",
              "= 10 500 W / 10.5 kW (1 mark)",
            ],
            commonError: "Forgetting to convert 'per minute' to 'per second' (÷60) when calculating power.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "challenge",
            hints: [
              "Find the total mass lifted in one minute first.",
              "GPE = mgh for that total mass.",
              "Power = energy per SECOND, so divide the per-minute energy by 60.",
              "Input power = useful power ÷ efficiency (0.60).",
            ],
            solutions: [
              {
                label: "Mass flow → power → input",
                steps: [
                  "Mass per minute = 90 × 70 = 6300 kg",
                  "GPE per minute = 6300 × 10 × 6 = 378 000 J",
                  "Useful power = 378 000 / 60 s = 6300 W",
                  "Input power = 6300 / 0.60 = 10 500 W",
                ],
              },
            ],
            strategy: "Total mass per minute → GPE → ÷60 for power → ÷efficiency for input",
          },
          {
            id: "phys-energy-bq2-04",
            question:
              "Two electric heaters are compared. Heater A is rated 2000 W and is 100% efficient. Heater B is a heat pump rated 800 W that delivers 2400 W of heat to a room.\n\n" +
              "(a) Calculate the heat energy delivered by Heater A in 5 minutes. [2]\n" +
              "(b) The heat pump appears to deliver more heat than the electrical power it uses. Explain how this is possible without breaking conservation of energy. [3]",
            marks: 5,
            modelAnswer:
              "(a) E = P × t = 2000 × 300 = 600 000 J (600 kJ) in 5 minutes (300 s).\n\n" +
              "(b) A heat pump does not create energy. It uses the 800 W of electrical energy to MOVE thermal energy from outside " +
              "(a cooler region) into the room. The 2400 W delivered to the room is the sum of the electrical energy used (800 W) plus " +
              "the thermal energy extracted from outside (1600 W). Total energy is conserved — the extra heat comes from the surroundings, not from nothing.",
            markScheme: [
              "E = Pt = 2000 × 300 (1 mark)",
              "E = 600 000 J / 600 kJ (1 mark)",
              "heat pump moves/transfers heat rather than creating it (1 mark)",
              "thermal energy extracted from outside/surroundings (1 mark)",
              "delivered heat = electrical input + heat moved from outside / energy conserved (1 mark)",
            ],
            commonError: "Claiming the heat pump is 'over 100% efficient' and breaks conservation — it actually moves energy from elsewhere.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "challenge",
            hints: [
              "Part (a): E = Pt with t in seconds (5 min = 300 s).",
              "Part (b): a heat pump MOVES heat, it does not generate it all.",
              "Where could the extra 1600 W of heat come from?",
              "Account for all the energy: input + heat moved in.",
            ],
            solutions: [
              {
                label: "Energy accounting for the heat pump",
                steps: [
                  "Heater A: E = 2000 × 300 = 600 000 J",
                  "Heat pump room heat 2400 W = 800 W electrical + 1600 W moved from outside",
                  "Energy is conserved: the surplus comes from the cooler surroundings",
                ],
              },
            ],
            strategy: "Heat pump moves heat; output = input + heat extracted from surroundings",
          },
          {
            id: "phys-energy-bq2-05",
            question:
              "A small hydroelectric scheme releases 2000 kg of water every second from a reservoir, falling 25 m to the turbines.\n\n" +
              "(a) Calculate the GPE lost by the water each second (the input power). [3]\n" +
              "(b) The scheme generates 420 kW of electrical power. Calculate its efficiency. [2]\n" +
              "(c) Suggest two reasons the efficiency is below 100%. [2]",
            marks: 7,
            modelAnswer:
              "(a) Input power = GPE lost per second = (m/t) g h = 2000 × 10 × 25 = 500 000 W = 500 kW.\n\n" +
              "(b) Efficiency = useful output / input × 100% = 420 / 500 × 100% = 84%.\n\n" +
              "(c) Any two of: friction in the turbine bearings/water (heat); turbulence and resistance in the pipes and water flow; " +
              "electrical resistance/heating in the generator windings; sound energy produced.",
            markScheme: [
              "Input power = (m/t) g h = 2000 × 10 × 25 (1 mark)",
              "= 500 000 W (1 mark)",
              "= 500 kW (1 mark)",
              "Efficiency = 420/500 × 100% (1 mark)",
              "= 84% (1 mark)",
              "One valid loss (friction/turbulence/resistance/sound) (1 mark)",
              "Second valid distinct loss (1 mark)",
            ],
            commonError: "Mixing units — keep input power in kW (500 kW) to match the 420 kW output.",
            guideRef: "Renewable Energy Resources",
            difficulty: "core",
            hints: [
              "Input power = GPE lost per second = (mass per second) × g × h.",
              "2000 kg/s × 10 × 25.",
              "Efficiency = electrical output ÷ input power.",
              "Losses appear as heat and sound.",
            ],
            solutions: [
              {
                label: "Mass flow power then efficiency",
                steps: [
                  "Input power = 2000 × 10 × 25 = 500 000 W = 500 kW",
                  "Efficiency = 420 / 500 × 100% = 84%",
                  "Losses: friction, turbulence, electrical resistance, sound",
                ],
              },
            ],
            strategy: "Input power = (m/t)gh; efficiency = output/input",
          },
          {
            id: "phys-energy-bq2-06",
            question:
              "A 0.5 kW food mixer is used for 3 minutes. Of the electrical energy supplied, 75% is transferred usefully to mixing the food.\n\n" +
              "(a) Calculate the total electrical energy supplied. [2]\n" +
              "(b) Calculate the useful energy output. [2]\n" +
              "(c) Calculate the energy wasted, and state the main form it takes. [2]",
            marks: 6,
            modelAnswer:
              "(a) E = P × t = 500 × 180 = 90 000 J (90 kJ). (3 min = 180 s.)\n\n" +
              "(b) Useful energy = 0.75 × 90 000 = 67 500 J.\n\n" +
              "(c) Wasted energy = 90 000 − 67 500 = 22 500 J, mainly as thermal energy (heat) in the motor, plus some sound.",
            markScheme: [
              "E = Pt = 500 × 180 (1 mark)",
              "E = 90 000 J (1 mark)",
              "Useful = 0.75 × 90 000 (1 mark)",
              "= 67 500 J (1 mark)",
              "Wasted = 90 000 − 67 500 = 22 500 J (1 mark)",
              "as thermal energy/heat (and sound) (1 mark)",
            ],
            commonError: "Using 0.5 W instead of 500 W, or forgetting to convert 3 minutes into 180 s.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "0.5 kW = 500 W; 3 min = 180 s.",
              "Total energy = Pt.",
              "Useful = 75% of total.",
              "Wasted = total − useful.",
            ],
            solutions: [
              {
                label: "Energy split by efficiency",
                steps: [
                  "E = 500 × 180 = 90 000 J",
                  "Useful = 0.75 × 90 000 = 67 500 J",
                  "Wasted = 90 000 − 67 500 = 22 500 J (heat + sound)",
                ],
              },
            ],
            strategy: "Convert units (kW→W, min→s); useful = efficiency × total",
          },
          {
            id: "phys-energy-bq2-07",
            question:
              "A jet of water from a hose hits a wall. The hose delivers 5 kg of water per second at a speed of 12 m/s.\n\n" +
              "(a) Calculate the kinetic energy delivered to the wall each second (assume the water loses all its KE). [3]\n" +
              "(b) State what this quantity represents in terms of power, and give its value with units. [2]",
            marks: 5,
            modelAnswer:
              "(a) KE per second = ½ (m/t) v² = ½ × 5 × 12² = 0.5 × 5 × 144 = 360 J each second.\n\n" +
              "(b) Energy delivered per second is power. So the power delivered to the wall is 360 W.",
            markScheme: [
              "KE = ½mv² applied to 5 kg per second (1 mark)",
              "= ½ × 5 × 144 (1 mark)",
              "= 360 J per second (1 mark)",
              "energy per second = power (1 mark)",
              "P = 360 W (1 mark)",
            ],
            commonError: "Forgetting to square the speed, or omitting the ½.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "Treat the 5 kg arriving each second as the 'mass' in ½mv².",
              "12² = 144.",
              "Energy delivered per second is power, measured in watts.",
            ],
            solutions: [
              {
                label: "KE per second is power",
                steps: [
                  "KE per second = 0.5 × 5 × 12² = 0.5 × 5 × 144 = 360 J/s",
                  "Energy per second = power = 360 W",
                ],
              },
            ],
            strategy: "Energy delivered per second IS power; use ½(m/t)v²",
          },
          {
            id: "phys-energy-bq2-08",
            question:
              "A 0.02 kg bullet is fired into a fixed wooden block and is brought to rest in a distance of 0.05 m. The bullet's speed on impact is 400 m/s.\n\n" +
              "(a) Calculate the kinetic energy of the bullet as it enters the block. [2]\n" +
              "(b) Assuming all this energy is used to do work against the resistive force of the wood, calculate the average resistive force. [3]",
            marks: 5,
            modelAnswer:
              "(a) Ek = ½mv² = ½ × 0.02 × 400² = 0.5 × 0.02 × 160 000 = 1600 J.\n\n" +
              "(b) Work done against resistance = Fd = 1600 → F = 1600 / 0.05 = 32 000 N.",
            markScheme: [
              "Ek = ½mv² = ½ × 0.02 × 160 000 (1 mark)",
              "Ek = 1600 J (1 mark)",
              "Fd = KE → F = 1600 / 0.05 (1 mark)",
              "correct rearrangement (1 mark)",
              "F = 32 000 N (1 mark)",
            ],
            commonError: "Squaring 400 incorrectly (400² = 160 000, not 1600) — a very common slip.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "challenge",
            hints: [
              "Ek = ½mv²; 400² = 160 000.",
              "The KE does work against the wood: Fd = KE.",
              "F = KE / d, with d = 0.05 m.",
            ],
            solutions: [
              {
                label: "KE then work-energy",
                steps: [
                  "Ek = 0.5 × 0.02 × 400² = 0.5 × 0.02 × 160 000 = 1600 J",
                  "Fd = 1600 → F = 1600 / 0.05",
                  "F = 32 000 N",
                ],
              },
            ],
            strategy: "KE on impact = work done against resistance (Fd)",
          },
          {
            id: "phys-energy-bq2-09",
            question:
              "A power station burns gas with an input power of 1500 MW and generates 600 MW of electrical power. The electricity is then transmitted to a city with a transmission efficiency of 92%.\n\n" +
              "(a) Calculate the efficiency of the power station itself. [2]\n" +
              "(b) Calculate the electrical power that actually reaches the city. [2]\n" +
              "(c) Calculate the overall efficiency from gas input to power delivered to the city. [2]",
            marks: 6,
            modelAnswer:
              "(a) Station efficiency = 600 / 1500 × 100% = 40%.\n\n" +
              "(b) Power reaching the city = 600 × 0.92 = 552 MW.\n\n" +
              "(c) Overall efficiency = 552 / 1500 × 100% = 36.8% (≈ 37%). " +
              "Equivalently 0.40 × 0.92 = 0.368 = 36.8%.",
            markScheme: [
              "Station efficiency = 600/1500 × 100% (1 mark)",
              "= 40% (1 mark)",
              "Power to city = 600 × 0.92 (1 mark)",
              "= 552 MW (1 mark)",
              "Overall = 552/1500 × 100% or 0.40 × 0.92 (1 mark)",
              "= 36.8% / 37% (1 mark)",
            ],
            commonError: "Adding the efficiencies (40% + 92%) instead of multiplying them as decimals.",
            guideRef: "Efficiency of Electricity Generation",
            difficulty: "challenge",
            hints: [
              "Station efficiency = electrical out ÷ gas in.",
              "Power to city = generated power × transmission efficiency.",
              "Overall efficiency = product of stage efficiencies (as decimals).",
              "0.40 × 0.92.",
            ],
            solutions: [
              {
                label: "Stage-by-stage efficiency",
                steps: [
                  "Station: 600 / 1500 = 0.40 = 40%",
                  "To city: 600 × 0.92 = 552 MW",
                  "Overall: 552 / 1500 = 0.368 = 36.8% (= 0.40 × 0.92)",
                ],
              },
            ],
            strategy: "Multiply stage efficiencies as decimals for overall efficiency",
          },
          {
            id: "phys-energy-bq2-10",
            question:
              "A pumped-storage scheme pumps 1.2 × 10⁷ kg of water up to a reservoir 300 m higher during the night, then releases it to generate electricity during peak demand.\n\n" +
              "(a) Calculate the gravitational potential energy stored when the reservoir is full. [3]\n" +
              "(b) During generation the scheme is 80% efficient. Calculate the maximum electrical energy it can supply. [2]\n" +
              "(c) Explain one advantage of pumped storage for managing electricity supply. [2]",
            marks: 7,
            modelAnswer:
              "(a) GPE = mgh = 1.2 × 10⁷ × 10 × 300 = 3.6 × 10¹⁰ J.\n\n" +
              "(b) Electrical energy = 0.80 × 3.6 × 10¹⁰ = 2.88 × 10¹⁰ J.\n\n" +
              "(c) It stores surplus energy (e.g. from baseload stations at night) as GPE and releases it quickly at times of peak " +
              "demand. This lets the grid respond rapidly to demand spikes and store energy from intermittent renewables, " +
              "improving overall grid reliability.",
            markScheme: [
              "GPE = mgh = 1.2 × 10⁷ × 10 × 300 (1 mark)",
              "correct multiplication (1 mark)",
              "GPE = 3.6 × 10¹⁰ J (1 mark)",
              "Electrical = 0.80 × 3.6 × 10¹⁰ (1 mark)",
              "= 2.88 × 10¹⁰ J (1 mark)",
              "stores surplus / releases quickly at peak demand (1 mark)",
              "improves reliability / stores intermittent renewable energy (1 mark)",
            ],
            commonError: "Errors in standard-form arithmetic — keep track of the powers of ten (10⁷ × 10 × 10² = 10¹⁰).",
            guideRef: "Renewable Energy Resources",
            difficulty: "challenge",
            hints: [
              "GPE = mgh; combine the powers of ten carefully.",
              "1.2 × 10⁷ × 10 × 300 = 1.2 × 300 × 10⁸ = 360 × 10⁸ = 3.6 × 10¹⁰ J.",
              "Useful electrical energy = 0.80 × GPE.",
              "Think about WHEN the energy is stored and released.",
            ],
            solutions: [
              {
                label: "Stored GPE then efficiency",
                steps: [
                  "GPE = 1.2 × 10⁷ × 10 × 300 = 3.6 × 10¹⁰ J",
                  "Electrical out = 0.80 × 3.6 × 10¹⁰ = 2.88 × 10¹⁰ J",
                ],
              },
            ],
            strategy: "GPE = mgh in standard form; useful = efficiency × stored",
          },
        ],
      },
      // ─── STRUCTURED PAPER 3 ───────────────────────────────────────────────
      {
        id: "phys-energy-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Energy resources, power stations and evaluation of renewable vs non-renewable.",
        questions: [
          {
            id: "phys-energy-bq3-01",
            question:
              "(a) Define a renewable energy resource. [1]\n" +
              "(b) Classify each of the following as renewable or non-renewable: coal, wind, uranium, tidal, natural gas. [3]\n" +
              "(c) State which one of these does NOT ultimately get its energy from the Sun, and where its energy comes from instead. [2]",
            marks: 6,
            modelAnswer:
              "(a) A renewable resource is one that is naturally replenished and will not run out on a human timescale.\n\n" +
              "(b) Coal — non-renewable; wind — renewable; uranium — non-renewable; tidal — renewable; natural gas — non-renewable.\n\n" +
              "(c) Tidal energy does not come from the Sun. Its energy comes from the gravitational pull of the Moon (and Sun) and the rotation of the Earth.",
            markScheme: [
              "Renewable = naturally replenished / will not run out (1 mark)",
              "coal non-renewable, gas non-renewable, uranium non-renewable (1 mark)",
              "wind renewable, tidal renewable (1 mark)",
              "tidal does not come from the Sun (1 mark)",
              "from Moon's gravity / Earth's rotation (1 mark)",
            ],
            commonError: "Classifying nuclear/uranium as renewable — uranium is a finite mined fuel.",
            guideRef: "Renewable Energy Resources",
            difficulty: "warmup",
            hints: [
              "Renewable = replenished naturally, won't run out.",
              "Fossil fuels and uranium are mined and finite.",
              "Which resource is driven by the Moon, not the Sun?",
            ],
          },
          {
            id: "phys-energy-bq3-02",
            question:
              "Describe the sequence of energy transfers that takes place in a coal-fired power station, from the chemical energy in the coal to electrical energy leaving the generator. [4]",
            marks: 4,
            modelAnswer:
              "1. Coal is burned in the furnace: chemical energy → thermal energy.\n" +
              "2. The thermal energy heats water to produce steam (heating transfer).\n" +
              "3. The high-pressure steam turns the turbine: thermal energy → kinetic energy.\n" +
              "4. The spinning turbine drives the generator: kinetic energy → electrical energy.",
            markScheme: [
              "Burning coal: chemical → thermal (1 mark)",
              "Heat boils water to make steam (1 mark)",
              "Steam turns turbine: thermal → kinetic (1 mark)",
              "Turbine drives generator: kinetic → electrical (1 mark)",
            ],
            commonError: "Skipping the steam/turbine stage and jumping straight from heat to electricity.",
            guideRef: "Non-Renewable Energy Resources",
            difficulty: "warmup",
            hints: [
              "Start with burning the coal.",
              "What does the heat do to the water?",
              "Steam → turbine → generator.",
            ],
          },
          {
            id: "phys-energy-bq3-03",
            question:
              "Compare a nuclear power station with a coal-fired power station.\n\n" +
              "(a) State one similarity in how they generate electricity. [1]\n" +
              "(b) State the key difference in how they produce heat. [2]\n" +
              "(c) Give one environmental advantage and one environmental disadvantage of nuclear compared with coal. [2]",
            marks: 5,
            modelAnswer:
              "(a) Both use heat to make steam, which drives a turbine connected to a generator (the turbine-generator chain is the same).\n\n" +
              "(b) Coal produces heat by combustion (burning fuel, a chemical reaction). Nuclear produces heat by nuclear fission — " +
              "splitting heavy nuclei such as uranium-235 — no burning is involved.\n\n" +
              "(c) Advantage: nuclear emits very little CO₂, so it contributes far less to global warming/acid rain. " +
              "Disadvantage: nuclear produces radioactive waste that remains dangerous for a very long time and must be safely stored.",
            markScheme: [
              "Both use steam/turbine/generator chain (1 mark)",
              "Coal: combustion / burning (1 mark)",
              "Nuclear: fission / splitting nuclei (1 mark)",
              "Advantage: low CO₂ / less greenhouse gas (1 mark)",
              "Disadvantage: radioactive waste / accident risk (1 mark)",
            ],
            commonError: "Saying nuclear 'burns' uranium — fission is not combustion.",
            guideRef: "Non-Renewable Energy Resources",
            difficulty: "core",
            hints: [
              "Both make steam and use a turbine + generator.",
              "Combustion vs fission for the heat source.",
              "CO₂ vs radioactive waste for the environment.",
            ],
          },
          {
            id: "phys-energy-bq3-04",
            question:
              "A coastal town is choosing between building a wind farm or a tidal barrage.\n\n" +
              "(a) State one advantage of the tidal barrage over the wind farm. [1]\n" +
              "(b) State one advantage of the wind farm over the tidal barrage. [1]\n" +
              "(c) Both are described as renewable and low-carbon. Explain why tidal output is more predictable than wind output. [2]\n" +
              "(d) Suggest one environmental concern of building a tidal barrage. [1]",
            marks: 5,
            modelAnswer:
              "(a) Tidal output is predictable/reliable because tides occur at known times; (or it can produce more concentrated power).\n\n" +
              "(b) A wind farm is cheaper to build and can be sited in more locations; tidal barrages need a suitable estuary.\n\n" +
              "(c) Tides are driven by the regular, predictable motion of the Moon and Earth, so the times and heights of tides can be " +
              "calculated years in advance. Wind depends on changeable weather, which cannot be predicted reliably, so wind output varies unpredictably.\n\n" +
              "(d) Building a barrage floods/alters the estuary, damaging habitats for wildlife (e.g. wading birds, fish migration).",
            markScheme: [
              "Tidal advantage: predictable/reliable (1 mark)",
              "Wind advantage: cheaper / more flexible siting (1 mark)",
              "Tides predictable because driven by regular Moon/Earth motion (1 mark)",
              "Wind depends on changeable weather → unpredictable (1 mark)",
              "Barrage harms estuary habitat / wildlife (1 mark)",
            ],
            commonError: "Stating both as simply 'good for the environment' without a specific comparison.",
            guideRef: "Renewable Energy Resources",
            difficulty: "core",
            hints: [
              "What makes tides so regular?",
              "Compare predictability of weather vs tides.",
              "Think about what a barrage does to an estuary's ecosystem.",
            ],
          },
          {
            id: "phys-energy-bq3-05",
            question:
              "(a) Explain what is meant by saying most renewable energy resources 'originate from the Sun'. Give two examples with brief reasoning. [4]\n" +
              "(b) Geothermal energy is renewable but is NOT derived from the Sun. State where its energy comes from. [1]",
            marks: 5,
            modelAnswer:
              "(a) The Sun's radiation drives processes on Earth that we harvest as energy. " +
              "Example 1 — wind: the Sun heats the atmosphere unevenly, causing air to move (convection), which we capture with turbines. " +
              "Example 2 — hydroelectric: the Sun evaporates water (the water cycle), which falls as rain to fill high reservoirs whose GPE we use. " +
              "(Solar, wave and biofuel are also acceptable, each traced back to solar radiation.)\n\n" +
              "(b) Geothermal energy comes from heat inside the Earth, produced mainly by the decay of radioactive elements in the rocks (and residual heat from the Earth's formation).",
            markScheme: [
              "Sun drives Earth processes we harvest (1 mark)",
              "Example 1 with correct reasoning (e.g. wind from uneven heating) (1 mark)",
              "Example 2 with correct reasoning (e.g. hydro from water cycle) (1 mark)",
              "clear link of each example to solar radiation (1 mark)",
              "geothermal from radioactive decay / Earth's internal heat (1 mark)",
            ],
            commonError: "Listing examples without explaining the link back to the Sun.",
            guideRef: "Renewable Energy Resources",
            difficulty: "core",
            hints: [
              "Think how the Sun causes wind (heating air) and rain (the water cycle).",
              "Each example needs the chain back to sunlight.",
              "Geothermal heat comes from inside the Earth, not the Sun.",
            ],
          },
          {
            id: "phys-energy-bq3-06",
            question:
              "A 250 W solar panel receives 1000 W of solar radiation on its surface.\n\n" +
              "(a) Calculate the efficiency of the panel. [2]\n" +
              "(b) State two reasons why solar panels are not 100% efficient. [2]\n" +
              "(c) Give one practical disadvantage of relying on solar panels for a country's electricity. [1]",
            marks: 5,
            modelAnswer:
              "(a) Efficiency = useful electrical output / solar input × 100% = 250 / 1000 × 100% = 25%.\n\n" +
              "(b) Any two of: much of the sunlight is reflected; some is absorbed and converted to heat rather than electricity; " +
              "the cells only respond to certain wavelengths of light; internal electrical resistance causes losses.\n\n" +
              "(c) Solar output is intermittent — it falls at night and in cloudy weather — so storage or backup supplies are needed.",
            markScheme: [
              "Efficiency = 250/1000 × 100% (1 mark)",
              "= 25% (1 mark)",
              "One valid reason for losses (reflection/heat/wavelengths) (1 mark)",
              "Second valid distinct reason (1 mark)",
              "intermittent / no output at night / weather-dependent (1 mark)",
            ],
            commonError: "Treating the 250 W rating as the input rather than the useful output.",
            guideRef: "Efficiency of Electricity Generation",
            difficulty: "core",
            hints: [
              "Efficiency = useful electrical output ÷ solar power in.",
              "250 / 1000.",
              "Where does the other 75% of the sunlight go?",
            ],
            solutions: [
              {
                label: "Efficiency from powers",
                steps: [
                  "Efficiency = 250 / 1000 × 100% = 25%",
                ],
              },
            ],
          },
          {
            id: "phys-energy-bq3-07",
            question:
              "A national grid generates 2000 MW from coal but plans to replace some with renewables.\n\n" +
              "(a) State two advantages of keeping some coal capacity rather than going fully renewable immediately. [2]\n" +
              "(b) State two reasons for increasing the proportion of renewables. [2]\n" +
              "(c) Suggest one technology that could store renewable energy to cover periods of low wind and sun. [1]",
            marks: 5,
            modelAnswer:
              "(a) Any two: coal stations are reliable and not weather-dependent; they can respond quickly to changes in demand; " +
              "the infrastructure already exists; they provide steady base-load power.\n\n" +
              "(b) Any two: renewables produce much less CO₂, reducing global warming; they do not run out (sustainable); " +
              "they produce less air pollution / acid rain; they reduce dependence on imported/finite fuels.\n\n" +
              "(c) Pumped-storage hydroelectricity (or large battery banks) — store surplus energy and release it when demand exceeds supply.",
            markScheme: [
              "Coal advantage 1 (reliable/base-load/quick response) (1 mark)",
              "Coal advantage 2 (existing infrastructure/dispatchable) (1 mark)",
              "Renewable reason 1 (less CO₂/sustainable) (1 mark)",
              "Renewable reason 2 (less pollution/no fuel cost/finite fuel reduction) (1 mark)",
              "Valid storage technology (pumped storage/batteries) (1 mark)",
            ],
            commonError: "Repeating the same point twice in different words rather than two distinct reasons.",
            guideRef: "Renewable Energy Resources",
            difficulty: "core",
            hints: [
              "Coal's strength is reliability and quick response.",
              "Renewables' strength is low CO₂ and being sustainable.",
              "How can surplus electricity be stored?",
            ],
          },
          {
            id: "phys-energy-bq3-08",
            question:
              "A wind turbine has blades that sweep an area of 2000 m². The wind carries 800 W of power per square metre of swept area. The turbine converts 40% of the wind's power into electricity.\n\n" +
              "(a) Calculate the total wind power passing through the swept area. [2]\n" +
              "(b) Calculate the electrical power output. [2]\n" +
              "(c) The turbine actually only runs at this output for 30% of the year (the 'capacity factor'). Calculate its average power output over a year. [2]",
            marks: 6,
            modelAnswer:
              "(a) Wind power = power per m² × area = 800 × 2000 = 1 600 000 W = 1.6 MW.\n\n" +
              "(b) Electrical output = 0.40 × 1 600 000 = 640 000 W = 640 kW.\n\n" +
              "(c) Average output = 0.30 × 640 000 = 192 000 W = 192 kW.",
            markScheme: [
              "Wind power = 800 × 2000 (1 mark)",
              "= 1 600 000 W / 1.6 MW (1 mark)",
              "Electrical = 0.40 × 1 600 000 (1 mark)",
              "= 640 000 W / 640 kW (1 mark)",
              "Average = 0.30 × 640 000 (1 mark)",
              "= 192 000 W / 192 kW (1 mark)",
            ],
            commonError: "Multiplying the two factors (0.40 and 0.30) before applying them, or stopping at the rated output and ignoring the capacity factor.",
            guideRef: "Efficiency of Electricity Generation",
            difficulty: "challenge",
            hints: [
              "Total wind power = power per m² × swept area.",
              "Electrical output = 40% of wind power.",
              "Average over the year = 30% of the rated electrical output.",
            ],
            solutions: [
              {
                label: "Layered scaling of power",
                steps: [
                  "Wind power = 800 × 2000 = 1 600 000 W",
                  "Electrical = 0.40 × 1 600 000 = 640 000 W",
                  "Average = 0.30 × 640 000 = 192 000 W",
                ],
              },
            ],
            strategy: "Apply each fraction in turn: area → efficiency → capacity factor",
          },
          {
            id: "phys-energy-bq3-09",
            question:
              "Explain, with reference to the carbon cycle, why burning a biofuel such as wood may be considered closer to 'carbon neutral' than burning coal, and state one reason this description can be misleading. [5]",
            marks: 5,
            modelAnswer:
              "When a tree grows it absorbs CO₂ from the atmosphere by photosynthesis, locking carbon into the wood. " +
              "When the wood is burned, that same CO₂ is released back to the atmosphere. If a new tree of similar mass is grown to replace it, " +
              "the released CO₂ is reabsorbed, so over the full cycle there is little net increase in atmospheric CO₂ — hence 'carbon neutral'. " +
              "Coal, by contrast, releases carbon that was locked away millions of years ago, adding 'new' CO₂ to the modern atmosphere with no quick reabsorption.\n\n" +
              "It can be misleading because: replacement trees take years/decades to regrow and reabsorb the CO₂; energy (often from fossil fuels) is used to harvest, process and transport the fuel; and if forests are not replanted the process is not neutral at all.",
            markScheme: [
              "Growing plant absorbs CO₂ by photosynthesis (1 mark)",
              "Burning releases the same CO₂ back (1 mark)",
              "Replacement growth reabsorbs it → little net change (1 mark)",
              "Coal releases long-stored carbon / net addition (1 mark)",
              "Misleading: regrowth time / transport emissions / not replanted (1 mark)",
            ],
            commonError: "Saying biofuels release no CO₂ — they do; the point is the cycle of reabsorption.",
            guideRef: "Renewable Energy Resources",
            difficulty: "challenge",
            hints: [
              "Where does the carbon in wood come from while the tree grows?",
              "What returns it to the air, and what could reabsorb it?",
              "Compare with carbon that has been locked underground for millions of years.",
              "Why might the 'neutral' claim not hold in practice?",
            ],
          },
          {
            id: "phys-energy-bq3-10",
            question:
              "A remote village needs 50 kW of continuous electrical power. Engineers compare a diesel generator and a solar-plus-battery system.\n\n" +
              "(a) The diesel generator is 35% efficient. Calculate the chemical power (rate of fuel energy use) it must consume to deliver 50 kW. [2]\n" +
              "(b) The solar array delivers 50 kW only in full sun (8 hours per day). Explain why a battery is essential, and state what energy transfer occurs when the battery is charging. [3]\n" +
              "(c) State one long-term advantage of the solar system over the diesel generator. [1]",
            marks: 6,
            modelAnswer:
              "(a) Efficiency = useful output / input → input power = 50 / 0.35 = 142.9 kW ≈ 143 kW of chemical (fuel) power.\n\n" +
              "(b) The solar array only generates during daylight (8 h), but the village needs power for all 24 hours. " +
              "A battery stores surplus electrical energy generated during the day and releases it at night/when the Sun is weak, " +
              "providing continuous supply. When charging, electrical energy is transferred to the chemical store of the battery.\n\n" +
              "(c) No fuel cost / no CO₂ emissions / fuel cannot run out / lower running costs (any one).",
            markScheme: [
              "Input = 50 / 0.35 (1 mark)",
              "= 143 kW (allow 142–143 kW) (1 mark)",
              "Solar only generates in daylight but demand is continuous (1 mark)",
              "Battery stores surplus and supplies at night → continuous power (1 mark)",
              "Charging: electrical → chemical store (1 mark)",
              "Valid long-term advantage (no fuel/CO₂/running cost) (1 mark)",
            ],
            commonError: "Multiplying 50 kW by 0.35 instead of dividing when finding the fuel power input.",
            guideRef: "Efficiency of Electricity Generation",
            difficulty: "challenge",
            hints: [
              "Input power = useful output ÷ efficiency.",
              "50 ÷ 0.35.",
              "The village needs power 24 h but the Sun shines only 8 h — what bridges the gap?",
              "Charging a battery stores energy in which store?",
            ],
            solutions: [
              {
                label: "Fuel power from efficiency",
                steps: [
                  "Input = 50 / 0.35 = 142.9 kW ≈ 143 kW",
                ],
              },
            ],
            strategy: "Fuel power = useful ÷ efficiency; battery bridges day-night demand",
          },
        ],
      },
      // ─── STRUCTURED PAPER 4 ───────────────────────────────────────────────
      {
        id: "phys-energy-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Synoptic challenges combining conservation, multi-step calculations and resource evaluation.",
        questions: [
          {
            id: "phys-energy-bq4-01",
            question:
              "(a) State the principle of conservation of energy. [1]\n" +
              "(b) A bouncing ball is dropped from 2.0 m and rebounds to 1.4 m. Use energy ideas to explain why it does not bounce back to its original height. [3]",
            marks: 4,
            modelAnswer:
              "(a) Energy cannot be created or destroyed, only transferred from one store to another; the total energy of a closed system is constant.\n\n" +
              "(b) On the way down, GPE transfers to KE. During the bounce, some KE is transferred to thermal energy (the ball and ground warm slightly) " +
              "and to sound energy. Less energy is therefore available as GPE on the rebound, so the ball rises to a lower height (1.4 m < 2.0 m). " +
              "The 'missing' GPE has been dissipated, not destroyed.",
            markScheme: [
              "Energy cannot be created/destroyed, only transferred (1 mark)",
              "GPE → KE on falling; bounce transfers some KE to thermal/sound (1 mark)",
              "less energy available for GPE on rebound (1 mark)",
              "energy dissipated not destroyed (total still conserved) (1 mark)",
            ],
            commonError: "Saying energy is 'lost' or 'destroyed' in the bounce rather than dissipated to thermal/sound stores.",
            guideRef: "Energy Stores and Transfers",
            difficulty: "warmup",
            hints: [
              "State conservation precisely.",
              "Where does some energy go during the bounce?",
              "Less GPE on rebound means a lower height.",
            ],
          },
          {
            id: "phys-energy-bq4-02",
            question:
              "A 0.45 kg football is kicked and leaves the ground at 18 m/s at the moment of the kick.\n\n" +
              "(a) Calculate its kinetic energy as it leaves the boot. [2]\n" +
              "(b) Ignoring air resistance, calculate the maximum height it could reach if kicked straight up. [3]",
            marks: 5,
            modelAnswer:
              "(a) Ek = ½mv² = ½ × 0.45 × 18² = 0.5 × 0.45 × 324 = 72.9 J.\n\n" +
              "(b) At maximum height KE = 0 and all energy is GPE: mgh = 72.9 → h = 72.9 / (0.45 × 10) = 72.9 / 4.5 = 16.2 m. " +
              "(Equivalently h = v²/2g = 324/20 = 16.2 m.)",
            markScheme: [
              "Ek = ½mv² = ½ × 0.45 × 324 (1 mark)",
              "Ek = 72.9 J (1 mark)",
              "mgh = Ek at max height (1 mark)",
              "h = 72.9 / 4.5 (1 mark)",
              "h = 16.2 m (1 mark)",
            ],
            commonError: "Forgetting to square the speed, or using mg = 4.5 incorrectly as the divisor only after errors.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "core",
            hints: [
              "Ek = ½mv²; 18² = 324.",
              "At the top all KE has become GPE.",
              "mgh = KE → h = KE / (mg).",
              "mg = 0.45 × 10 = 4.5 N.",
            ],
            solutions: [
              {
                label: "KE then GPE at apex",
                steps: [
                  "Ek = 0.5 × 0.45 × 18² = 0.5 × 0.45 × 324 = 72.9 J",
                  "At top: mgh = 72.9 → h = 72.9 / (0.45 × 10)",
                  "h = 72.9 / 4.5 = 16.2 m",
                ],
              },
            ],
            strategy: "KE at launch = GPE at the top; h = KE/(mg)",
          },
          {
            id: "phys-energy-bq4-03",
            question:
              "A toy car of mass 0.30 kg is released from rest at the top of a curved track 0.80 m high. It reaches the bottom at 3.2 m/s.\n\n" +
              "(a) Calculate the GPE lost. [2]\n" +
              "(b) Calculate the KE at the bottom. [2]\n" +
              "(c) Calculate the energy dissipated by friction, and hence the efficiency of the track. [3]",
            marks: 7,
            modelAnswer:
              "(a) GPE lost = mgh = 0.30 × 10 × 0.80 = 2.4 J.\n\n" +
              "(b) KE at bottom = ½mv² = ½ × 0.30 × 3.2² = 0.5 × 0.30 × 10.24 = 1.536 J ≈ 1.54 J.\n\n" +
              "(c) Energy dissipated = GPE lost − KE gained = 2.4 − 1.54 = 0.86 J. " +
              "Efficiency = KE / GPE × 100% = 1.54 / 2.4 × 100% = 64%.",
            markScheme: [
              "GPE = mgh = 0.30 × 10 × 0.80 = 2.4 J (1 mark)",
              "GPE correct value (1 mark)",
              "KE = ½ × 0.30 × 3.2² (1 mark)",
              "KE = 1.54 J (allow 1.5 J) (1 mark)",
              "Dissipated = 2.4 − 1.54 = 0.86 J (1 mark)",
              "Efficiency = 1.54/2.4 × 100% (1 mark)",
              "= 64% (allow 63–64%) (1 mark)",
            ],
            commonError: "Squaring 3.2 wrongly (3.2² = 10.24) or computing efficiency the wrong way up.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "challenge",
            hints: [
              "GPE lost = mgh.",
              "KE at the bottom = ½mv²; 3.2² = 10.24.",
              "Friction loss = GPE lost − KE gained.",
              "Efficiency = useful KE ÷ GPE input × 100%.",
            ],
            solutions: [
              {
                label: "Energy audit of the track",
                steps: [
                  "GPE lost = 0.30 × 10 × 0.80 = 2.4 J",
                  "KE at bottom = 0.5 × 0.30 × 3.2² = 1.536 J ≈ 1.54 J",
                  "Friction loss = 2.4 − 1.54 = 0.86 J",
                  "Efficiency = 1.54 / 2.4 × 100% = 64%",
                ],
              },
            ],
            strategy: "Compare KE gained with GPE lost; the shortfall is the friction loss",
          },
          {
            id: "phys-energy-bq4-04",
            question:
              "A 70 kg parachutist falls from a plane. After some time she reaches a constant (terminal) velocity of 55 m/s before opening the parachute.\n\n" +
              "(a) At terminal velocity, what is happening to her kinetic energy, and why? [2]\n" +
              "(b) Calculate her kinetic energy at terminal velocity. [2]\n" +
              "(c) As she continues to fall at constant speed through a further 100 m, the GPE she loses is no longer becoming KE. Calculate this GPE and state where the energy goes. [3]",
            marks: 7,
            modelAnswer:
              "(a) Her kinetic energy stays constant because she is moving at constant (terminal) velocity — air resistance balances her weight, " +
              "so there is no resultant force and no further acceleration, hence no change in KE.\n\n" +
              "(b) Ek = ½mv² = ½ × 70 × 55² = 0.5 × 70 × 3025 = 105 875 J ≈ 1.06 × 10⁵ J.\n\n" +
              "(c) GPE lost = mgh = 70 × 10 × 100 = 70 000 J. Since her KE is constant, this energy is transferred to the thermal store " +
              "of the surrounding air (and a little sound) through the work done against air resistance.",
            markScheme: [
              "KE constant (1 mark)",
              "because constant velocity / forces balanced / no resultant force (1 mark)",
              "Ek = ½ × 70 × 55² (1 mark)",
              "Ek = 105 875 J ≈ 1.06 × 10⁵ J (1 mark)",
              "GPE = 70 × 10 × 100 = 70 000 J (1 mark)",
              "energy goes to thermal store of air / heat (1 mark)",
              "via work done against air resistance / drag (1 mark)",
            ],
            commonError: "Assuming KE keeps increasing during the fall — at terminal velocity it is constant.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "challenge",
            hints: [
              "At terminal velocity, is she accelerating? What does that say about KE?",
              "Ek = ½mv²; 55² = 3025.",
              "GPE lost = mgh over the 100 m.",
              "If KE isn't increasing, where does the lost GPE go?",
            ],
            solutions: [
              {
                label: "Energy at terminal velocity",
                steps: [
                  "Constant velocity → no acceleration → KE constant",
                  "Ek = 0.5 × 70 × 55² = 0.5 × 70 × 3025 = 105 875 J",
                  "GPE lost over 100 m = 70 × 10 × 100 = 70 000 J",
                  "All 70 000 J → thermal store of the air (drag does work)",
                ],
              },
            ],
            strategy: "At terminal velocity KE is fixed; lost GPE all heats the air",
          },
          {
            id: "phys-energy-bq4-05",
            question:
              "A 2.5 kW electric winch hauls a 150 kg load up a vertical mine shaft.\n\n" +
              "(a) If the winch were 100% efficient, calculate the time to raise the load 40 m. [3]\n" +
              "(b) The winch is actually 75% efficient. Calculate the real time taken. [2]\n" +
              "(c) Calculate the energy wasted during the real lift. [2]",
            marks: 7,
            modelAnswer:
              "(a) GPE = mgh = 150 × 10 × 40 = 60 000 J. At 100% efficiency, t = E/P = 60 000 / 2500 = 24 s.\n\n" +
              "(b) At 75% efficiency, useful power = 0.75 × 2500 = 1875 W. t = 60 000 / 1875 = 32 s.\n\n" +
              "(c) Total electrical energy used = P × t = 2500 × 32 = 80 000 J. Energy wasted = 80 000 − 60 000 = 20 000 J. " +
              "(Check: 25% of 80 000 = 20 000 J.)",
            markScheme: [
              "GPE = mgh = 150 × 10 × 40 = 60 000 J (1 mark)",
              "t = E/P = 60 000/2500 (1 mark)",
              "t = 24 s (1 mark)",
              "useful power = 0.75 × 2500 = 1875 W (1 mark)",
              "t = 60 000/1875 = 32 s (1 mark)",
              "total energy = 2500 × 32 = 80 000 J (1 mark)",
              "wasted = 80 000 − 60 000 = 20 000 J (1 mark)",
            ],
            commonError: "Applying efficiency to the GPE instead of to the power/time, or forgetting the lift takes longer when less efficient.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "challenge",
            hints: [
              "GPE needed = mgh.",
              "At 100%: t = GPE / rated power.",
              "At 75%: useful power = 0.75 × rated; t = GPE / useful power.",
              "Wasted energy = total electrical energy − useful GPE.",
            ],
            solutions: [
              {
                label: "Ideal then real timing",
                steps: [
                  "GPE = 150 × 10 × 40 = 60 000 J",
                  "Ideal time = 60 000 / 2500 = 24 s",
                  "Useful power at 75% = 1875 W → t = 60 000 / 1875 = 32 s",
                  "Total energy used = 2500 × 32 = 80 000 J; wasted = 20 000 J",
                ],
              },
            ],
            strategy: "Efficiency reduces useful power, so the lift takes longer; waste = total − useful",
          },
          {
            id: "phys-energy-bq4-06",
            question:
              "A 1000 kg car climbs a hill at a steady 15 m/s. The road rises 1 m for every 20 m travelled along it. Friction and air resistance together produce a resistive force of 400 N.\n\n" +
              "(a) Calculate the gain in height per second. [2]\n" +
              "(b) Calculate the power needed to raise the car's GPE. [2]\n" +
              "(c) Calculate the power needed to overcome the resistive force, and hence the total useful power the engine must deliver. [3]",
            marks: 7,
            modelAnswer:
              "(a) Distance along road per second = 15 m. Height gain per second = 15 × (1/20) = 0.75 m/s.\n\n" +
              "(b) GPE power = mg × (height per second) = 1000 × 10 × 0.75 = 7500 W.\n\n" +
              "(c) Power against resistance = F × v = 400 × 15 = 6000 W. " +
              "Total power = 7500 + 6000 = 13 500 W (13.5 kW).",
            markScheme: [
              "Height per second = 15/20 = 0.75 m (1 mark)",
              "correct method (distance × gradient) (1 mark)",
              "GPE power = mg × 0.75 = 1000 × 10 × 0.75 (1 mark)",
              "= 7500 W (1 mark)",
              "Resistance power = Fv = 400 × 15 = 6000 W (1 mark)",
              "Total = 7500 + 6000 (1 mark)",
              "= 13 500 W / 13.5 kW (1 mark)",
            ],
            commonError: "Forgetting to add the power needed against friction to the power needed to gain GPE.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "challenge",
            hints: [
              "How far does the car travel along the road each second? 15 m.",
              "Height gained = distance × gradient (1/20).",
              "GPE power = mg × height-per-second.",
              "Friction power = Fv; add the two powers.",
            ],
            solutions: [
              {
                label: "Two power demands added",
                steps: [
                  "Height gain per second = 15 × (1/20) = 0.75 m",
                  "GPE power = 1000 × 10 × 0.75 = 7500 W",
                  "Resistance power = 400 × 15 = 6000 W",
                  "Total useful power = 7500 + 6000 = 13 500 W",
                ],
              },
            ],
            strategy: "Engine supplies GPE power + power against resistance (P = Fv)",
          },
          {
            id: "phys-energy-bq4-07",
            question:
              "A solar water heater absorbs 1.5 kW of solar power. It is used to heat water for a household.\n\n" +
              "(a) Calculate the solar energy absorbed in 4 hours. [2]\n" +
              "(b) The system is 70% efficient at transferring this energy to the water. Calculate the useful energy delivered to the water. [2]\n" +
              "(c) Comment on one reason a solar water heater can be more practical than solar PV for a household. [2]",
            marks: 6,
            modelAnswer:
              "(a) E = P × t = 1500 × (4 × 3600) = 1500 × 14 400 = 2.16 × 10⁷ J (21.6 MJ).\n\n" +
              "(b) Useful energy = 0.70 × 2.16 × 10⁷ = 1.512 × 10⁷ J ≈ 1.5 × 10⁷ J (15.1 MJ).\n\n" +
              "(c) Solar thermal (water heating) is typically more efficient than PV at delivering useful heat, and storing hot water " +
              "in an insulated tank is cheaper and simpler than storing electricity in batteries; so for heating water it can be more cost-effective.",
            markScheme: [
              "t = 4 × 3600 = 14 400 s (1 mark)",
              "E = 1500 × 14 400 = 2.16 × 10⁷ J (1 mark)",
              "Useful = 0.70 × 2.16 × 10⁷ (1 mark)",
              "= 1.51 × 10⁷ J (allow 1.5 × 10⁷) (1 mark)",
              "thermal more efficient for heat / hot-water storage cheaper than batteries (1 mark)",
              "valid practical/cost reasoning (1 mark)",
            ],
            commonError: "Forgetting to convert 4 hours into seconds (14 400 s) before using E = Pt.",
            guideRef: "Efficiency of Electricity Generation",
            difficulty: "core",
            hints: [
              "Convert 4 hours to seconds: 4 × 3600.",
              "E = Pt.",
              "Useful = 70% of the absorbed energy.",
              "Compare storing hot water with storing electricity.",
            ],
            solutions: [
              {
                label: "Energy then efficiency",
                steps: [
                  "t = 4 × 3600 = 14 400 s",
                  "E = 1500 × 14 400 = 2.16 × 10⁷ J",
                  "Useful = 0.70 × 2.16 × 10⁷ = 1.51 × 10⁷ J",
                ],
              },
            ],
            strategy: "Convert hours→seconds; useful = efficiency × absorbed energy",
          },
          {
            id: "phys-energy-bq4-08",
            question:
              "A roller coaster car of mass 500 kg passes point P at the top of a loop, 12 m above the ground, moving at 8 m/s. It then descends to point Q at ground level.\n\n" +
              "(a) Calculate the total mechanical energy (KE + GPE) at point P. [3]\n" +
              "(b) Assuming no friction, calculate the speed at point Q. [3]\n" +
              "(c) In reality, 9000 J is dissipated between P and Q. Calculate the actual speed at Q. [3]",
            marks: 9,
            modelAnswer:
              "(a) KE at P = ½mv² = ½ × 500 × 8² = 0.5 × 500 × 64 = 16 000 J. " +
              "GPE at P = mgh = 500 × 10 × 12 = 60 000 J. Total = 16 000 + 60 000 = 76 000 J.\n\n" +
              "(b) At Q (ground level) all the energy is KE: ½mv² = 76 000 → v² = 2 × 76 000 / 500 = 304 → v = √304 ≈ 17.4 m/s.\n\n" +
              "(c) With 9000 J dissipated, KE at Q = 76 000 − 9000 = 67 000 J. " +
              "½ × 500 × v² = 67 000 → v² = 2 × 67 000 / 500 = 268 → v = √268 ≈ 16.4 m/s.",
            markScheme: [
              "KE at P = 16 000 J (1 mark)",
              "GPE at P = 60 000 J (1 mark)",
              "Total = 76 000 J (1 mark)",
              "At Q all energy is KE: ½mv² = 76 000 (1 mark)",
              "v² = 304 (1 mark)",
              "v = 17.4 m/s (allow 17 m/s) (1 mark)",
              "KE at Q (real) = 76 000 − 9000 = 67 000 J (1 mark)",
              "v² = 268 (1 mark)",
              "v = 16.4 m/s (allow 16 m/s) (1 mark)",
            ],
            commonError: "Forgetting the car already has KE at P — the total energy is KE + GPE, not GPE alone.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "challenge",
            hints: [
              "At P the car has BOTH kinetic and potential energy — add them.",
              "8² = 64; KE = ½ × 500 × 64.",
              "At Q all the total energy is KE; solve ½mv² = total.",
              "For part (c) subtract the 9000 J before solving for v.",
            ],
            solutions: [
              {
                label: "Total mechanical energy method",
                steps: [
                  "KE at P = 0.5 × 500 × 8² = 16 000 J",
                  "GPE at P = 500 × 10 × 12 = 60 000 J; Total = 76 000 J",
                  "Frictionless Q: v = √(2 × 76 000 / 500) = √304 = 17.4 m/s",
                  "Real Q: KE = 76 000 − 9000 = 67 000 J → v = √(2 × 67 000 / 500) = √268 = 16.4 m/s",
                ],
              },
            ],
            strategy: "Total energy = KE + GPE at P; subtract dissipation for the real case",
          },
          {
            id: "phys-energy-bq4-09",
            question:
              "A tidal barrage traps 4.0 × 10⁹ kg of seawater behind it at high tide. The average height of this water above the level it is released to is 3.0 m.\n\n" +
              "(a) Calculate the gravitational potential energy stored. [3]\n" +
              "(b) The barrage generates electricity at 90% efficiency, twice per day. Calculate the electrical energy generated per day. [3]\n" +
              "(c) Give one advantage and one disadvantage of tidal barrages compared with fossil-fuel stations. [2]",
            marks: 8,
            modelAnswer:
              "(a) GPE = mgh = 4.0 × 10⁹ × 10 × 3.0 = 1.2 × 10¹¹ J.\n\n" +
              "(b) Electrical energy per release = 0.90 × 1.2 × 10¹¹ = 1.08 × 10¹¹ J. " +
              "Two releases per day: 2 × 1.08 × 10¹¹ = 2.16 × 10¹¹ J per day.\n\n" +
              "(c) Advantage: no CO₂ emissions during operation / renewable / predictable output. " +
              "Disadvantage: very high construction cost / damages estuary habitats / only works at suitable coastal sites.",
            markScheme: [
              "GPE = mgh = 4.0 × 10⁹ × 10 × 3.0 (1 mark)",
              "correct powers-of-ten handling (1 mark)",
              "GPE = 1.2 × 10¹¹ J (1 mark)",
              "per release = 0.90 × 1.2 × 10¹¹ = 1.08 × 10¹¹ J (1 mark)",
              "× 2 releases per day (1 mark)",
              "= 2.16 × 10¹¹ J per day (1 mark)",
              "valid advantage (no CO₂ / predictable / renewable) (1 mark)",
              "valid disadvantage (cost / habitat / site-limited) (1 mark)",
            ],
            commonError: "Forgetting to double for two tides per day, or mishandling the standard-form arithmetic.",
            guideRef: "Renewable Energy Resources",
            difficulty: "challenge",
            hints: [
              "GPE = mgh; multiply the numbers and add the powers of ten.",
              "4.0 × 10 × 3.0 = 120, with 10⁹ → 1.2 × 10¹¹ J.",
              "Apply 90% efficiency, then multiply by 2 (two tides).",
              "Compare CO₂ and cost with fossil fuels.",
            ],
            solutions: [
              {
                label: "Stored GPE → daily electrical energy",
                steps: [
                  "GPE = 4.0 × 10⁹ × 10 × 3.0 = 1.2 × 10¹¹ J",
                  "Per release: 0.90 × 1.2 × 10¹¹ = 1.08 × 10¹¹ J",
                  "Two releases: 2 × 1.08 × 10¹¹ = 2.16 × 10¹¹ J per day",
                ],
              },
            ],
            strategy: "GPE = mgh in standard form; apply efficiency, then count both tides",
          },
          {
            id: "phys-energy-bq4-10",
            question:
              "An engineer evaluates an energy-storage flywheel: a spinning disc that stores kinetic energy. It stores 5.0 × 10⁵ J when spinning.\n\n" +
              "(a) The flywheel delivers this energy to a machine at a steady useful power of 2.0 kW. For how long can it supply the machine, assuming no losses? [2]\n" +
              "(b) In practice the flywheel loses energy to friction in its bearings at a rate of 250 W even when not delivering useful power. Explain what this means for long-term storage and suggest one way to reduce this loss. [3]\n" +
              "(c) Compare a flywheel with a rechargeable battery as a way of storing energy: give one advantage of each. [2]",
            marks: 7,
            modelAnswer:
              "(a) t = E/P = 5.0 × 10⁵ / 2000 = 250 s.\n\n" +
              "(b) Even when idle, the flywheel loses 250 J every second to friction (transferred to thermal energy in the bearings). " +
              "Over time this dissipates the stored energy, so a flywheel is poor for long-term storage — it gradually 'runs down'. " +
              "Friction could be reduced by using magnetic bearings (so the disc does not touch its mounting) and/or enclosing the disc in a vacuum to remove air resistance.\n\n" +
              "(c) Flywheel advantage: can charge/discharge very quickly and many times without wearing out chemically. " +
              "Battery advantage: holds its charge for much longer with little leakage, so it is better for long-term storage.",
            markScheme: [
              "t = E/P = 5.0 × 10⁵ / 2000 (1 mark)",
              "t = 250 s (1 mark)",
              "idle friction continuously dissipates stored energy (to heat) (1 mark)",
              "poor for long-term storage / runs down over time (1 mark)",
              "reduce loss: magnetic bearings / vacuum enclosure (1 mark)",
              "flywheel advantage (fast charge/discharge / durable) (1 mark)",
              "battery advantage (holds charge longer / low leakage) (1 mark)",
            ],
            commonError: "Treating the 250 W idle loss as negligible — over hours it removes a large fraction of the stored energy.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "challenge",
            hints: [
              "Part (a): t = stored energy ÷ useful power.",
              "5.0 × 10⁵ ÷ 2000.",
              "Part (b): 250 W means 250 J lost every second even when idle.",
              "How could you stop the bearings from rubbing or the air from dragging?",
            ],
            solutions: [
              {
                label: "Discharge time and idle loss",
                steps: [
                  "t = 5.0 × 10⁵ / 2000 = 250 s",
                  "Idle loss 250 W = 250 J per second → stored energy steadily falls",
                  "Reduce with magnetic bearings / vacuum to cut friction and drag",
                ],
              },
            ],
            strategy: "t = E/P for discharge; idle power loss undermines long-term storage",
          },
        ],
      },
    ],
  },
};
