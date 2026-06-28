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
        "- **Electrostatic** — energy stored between charged objects (charges in an electric field)\n" +
        "- **Magnetic** — energy stored between magnets, or between a magnet and a magnetic material, in a magnetic field\n\n" +
        "Energy is **transferred** from one store to another by four mechanisms:\n\n" +
        "- **Mechanical work** — a force acting over a distance\n" +
        "- **Electrical working** — charge flowing through a potential difference\n" +
        "- **Heating** — energy flowing from a hot region to a cooler one\n" +
        "- **Waves** — including electromagnetic (light, infrared) and sound waves\n\n" +
        "When you switch on a torch, chemical energy (battery) is transferred electrically to the bulb, " +
        "which then radiates light energy (waves) and dissipates heat energy (heating).",
      keyPoints: [
        "There are 8 key energy stores: kinetic, GPE, chemical, elastic, nuclear, internal (thermal), electrostatic, magnetic.",
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
        id: "phys-energy-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Energy stores and transfers, conservation of energy, and the kinetic/GPE/work equations.",
        questions: [
          {
            id: "phys-energy-bm1-01",
            question: "Which of these is an energy STORE rather than a transfer mechanism?",
            options: ["Heating", "Electrical working", "Elastic (strain) energy", "Mechanical work"],
            answerIndex: 2,
            explanation: "Elastic (strain) energy is a store — energy held in a stretched or compressed object. Heating, electrical working and mechanical work are all ways of transferring energy between stores.",
            guideRef: "Energy Stores and Transfers",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm1-02",
            question: "A 2 kg object moves at 6 m/s. What is its kinetic energy?",
            options: ["12 J", "36 J", "72 J", "24 J"],
            answerIndex: 1,
            explanation: "Ek = ½mv² = ½ × 2 × 6² = ½ × 2 × 36 = 36 J. Option C (72 J) forgets the ½; option A (12 J) uses v instead of v².",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm1-03",
            question: "A book of mass 1.5 kg is lifted onto a shelf 2 m high. What is the gain in gravitational potential energy? (g = 10 N/kg)",
            options: ["3 J", "30 J", "15 J", "300 J"],
            answerIndex: 1,
            explanation: "ΔGPE = mgΔh = 1.5 × 10 × 2 = 30 J. Option A omits g; option C uses only m × g without the height.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm1-04",
            question: "Which statement is a correct expression of the principle of conservation of energy?",
            options: [
              "Energy is always conserved only in the absence of friction",
              "Energy cannot be created or destroyed, only transferred between stores",
              "Energy is destroyed whenever it is wasted as heat",
              "The useful energy output always equals the total energy input",
            ],
            answerIndex: 1,
            explanation: "Energy cannot be created or destroyed; the total stays constant. Friction does not destroy energy (it dissipates it as thermal energy), and useful output is always less than total input in real devices.",
            guideRef: "Energy Stores and Transfers",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm1-05",
            question: "A force of 25 N pushes a trolley 8 m in the direction of the force. How much work is done?",
            options: ["3.1 J", "33 J", "200 J", "100 J"],
            answerIndex: 2,
            explanation: "W = Fd = 25 × 8 = 200 J. Option A divides instead of multiplying; option B adds the values.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm1-06",
            question: "A 0.5 kg ball is dropped from rest through a height of 1.8 m. Ignoring air resistance, what is its speed just before it lands? (g = 10 N/kg)",
            options: ["6 m/s", "9 m/s", "18 m/s", "3.6 m/s"],
            answerIndex: 0,
            explanation: "GPE lost = KE gained: mgh = ½mv², so v = √(2gh) = √(2 × 10 × 1.8) = √36 = 6 m/s. The mass cancels and is not needed.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "core",
            hints: [
              "Set GPE lost equal to KE gained: mgh = ½mv².",
              "The mass cancels from both sides.",
              "v = √(2gh); substitute g = 10 and h = 1.8.",
            ],
            strategy: "Use v = √(2gh) when an object falls from rest",
          },
          {
            id: "phys-energy-bm1-07",
            question: "A cyclist of total mass 80 kg has 4000 J of kinetic energy. What is the cyclist's speed?",
            options: ["10 m/s", "50 m/s", "100 m/s", "7.1 m/s"],
            answerIndex: 0,
            explanation: "Ek = ½mv² → v² = 2Ek/m = (2 × 4000)/80 = 100, so v = √100 = 10 m/s. Option D forgets to multiply by 2.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "core",
            hints: [
              "Rearrange Ek = ½mv² to make v the subject.",
              "v² = 2Ek/m.",
              "Take the square root of your result.",
            ],
            strategy: "Rearrange the KE formula for v",
          },
          {
            id: "phys-energy-bm1-08",
            question: "A spring stores 12 J of elastic energy. It launches a 0.3 kg ball vertically upward. Ignoring air resistance, what is the maximum height reached? (g = 10 N/kg)",
            options: ["4.0 m", "40 m", "0.4 m", "3.6 m"],
            answerIndex: 0,
            explanation: "Elastic energy → GPE at the top: 12 = mgh = 0.3 × 10 × h = 3h, so h = 12/3 = 4.0 m. All the stored energy becomes GPE at the highest point.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "core",
            hints: [
              "At the highest point all the elastic energy has become GPE.",
              "Set the stored energy equal to mgh.",
              "Solve 12 = 0.3 × 10 × h for h.",
            ],
            strategy: "Equate the stored energy to mgh at maximum height",
          },
          {
            id: "phys-energy-bm1-09",
            question: "A 1000 kg car travelling at 20 m/s brakes to a stop. How much energy must the brakes dissipate, and into which store does it mostly go?",
            options: [
              "200 000 J, mostly into the gravitational store",
              "20 000 J, mostly into the chemical store",
              "200 000 J, mostly into the internal (thermal) store of the brakes",
              "400 000 J, mostly into the kinetic store of the road",
            ],
            answerIndex: 2,
            explanation: "Ek = ½mv² = ½ × 1000 × 20² = ½ × 1000 × 400 = 200 000 J. This kinetic energy is transferred mainly to the internal (thermal) store of the brakes and surroundings, warming them up.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "challenge",
            hints: [
              "First find the kinetic energy that must be removed.",
              "Ek = ½mv² with v = 20 m/s.",
              "Braking transfers energy by heating — which store gains it?",
              "½ × 1000 × 400 = 200 000 J.",
            ],
            strategy: "All the KE is transferred to thermal energy by the brakes",
          },
          {
            id: "phys-energy-bm1-10",
            question:
              "A 0.15 kg arrow is fired horizontally from a bow that did 45 J of useful work on it. The arrow leaves the bow at 24 m/s. What fraction of the bow's useful work became kinetic energy of the arrow?",
            options: ["About 96%", "About 50%", "About 100%", "About 75%"],
            answerIndex: 0,
            explanation: "Ek of arrow = ½ × 0.15 × 24² = ½ × 0.15 × 576 = 43.2 J. Fraction = 43.2/45 = 0.96 = 96%. The small shortfall is energy dissipated (e.g. as sound and heat in the bow).",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "challenge",
            hints: [
              "Calculate the kinetic energy the arrow actually has.",
              "Ek = ½mv² = ½ × 0.15 × 24².",
              "Divide that by the 45 J of work done.",
              "43.2 / 45 ≈ 0.96.",
            ],
            strategy: "Compare actual KE with the work input",
          },
        ],
      },
      {
        id: "phys-energy-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Work, power, efficiency and Sankey diagrams.",
        questions: [
          {
            id: "phys-energy-bm2-01",
            question: "What is the correct SI unit of power?",
            options: ["joule (J)", "watt (W)", "newton (N)", "joule per kilogram (J/kg)"],
            answerIndex: 1,
            explanation: "Power is the rate of energy transfer, measured in watts (W), where 1 W = 1 J/s. The joule is the unit of energy, the newton the unit of force.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm2-02",
            question: "A lamp transfers 600 J of electrical energy in 30 s. What is its power?",
            options: ["20 W", "18 000 W", "0.05 W", "630 W"],
            answerIndex: 0,
            explanation: "P = E/t = 600/30 = 20 W. Option B multiplies; option C divides the wrong way round.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm2-03",
            question: "An electric heater takes in 2000 J and usefully transfers 1800 J as heat to a room, the rest as light. What is its efficiency?",
            options: ["90%", "10%", "111%", "0.9%"],
            answerIndex: 0,
            explanation: "Efficiency = (useful output / total input) × 100% = (1800/2000) × 100% = 90%.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm2-04",
            question: "On a Sankey diagram, what does the WIDTH of an arrow represent?",
            options: [
              "The temperature of the energy",
              "The amount of energy transferred",
              "The speed of the energy transfer",
              "The type of energy store",
            ],
            answerIndex: 1,
            explanation: "In a Sankey diagram the width of each arrow is drawn proportional to the amount of energy it represents, so wider arrows mean more energy.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm2-05",
            question: "A filament lamp takes in 60 J of electrical energy each second and emits 6 J of light each second. What is the wasted power?",
            options: ["6 W", "60 W", "54 W", "66 W"],
            answerIndex: 2,
            explanation: "Wasted power = total input − useful output = 60 − 6 = 54 W, dissipated as heat. The values per second are already powers (J/s = W).",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "Energy per second is power (1 J/s = 1 W).",
              "Wasted = total input − useful output.",
              "60 − 6 = ?",
            ],
          },
          {
            id: "phys-energy-bm2-06",
            question: "A crane lifts a 400 kg load through 9 m in 12 s. What useful power does the crane develop? (g = 10 N/kg)",
            options: ["300 W", "3000 W", "43 200 W", "360 W"],
            answerIndex: 1,
            explanation: "Useful work = mgh = 400 × 10 × 9 = 36 000 J. Power = W/t = 36 000/12 = 3000 W.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "Find the useful work done = GPE gained = mgh.",
              "Then divide by the time taken.",
              "P = mgh/t = 36 000 / 12.",
            ],
            strategy: "Useful power = mgh/t",
          },
          {
            id: "phys-energy-bm2-07",
            question: "A car engine provides a steady driving force of 800 N while the car moves at a constant 25 m/s. What is the useful output power of the engine?",
            options: ["32 W", "20 000 W", "825 W", "775 W"],
            answerIndex: 1,
            explanation: "At constant speed, P = Fv = 800 × 25 = 20 000 W (20 kW). This uses the relation P = W/t = Fd/t = Fv.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "When force and speed are constant, P = Fv.",
              "Substitute F = 800 N and v = 25 m/s.",
              "800 × 25 = ?",
            ],
            strategy: "Use P = Fv for constant force and speed",
          },
          {
            id: "phys-energy-bm2-08",
            question: "A pump is 40% efficient and delivers 1200 W of useful power. What electrical power does it draw?",
            options: ["480 W", "3000 W", "1240 W", "2400 W"],
            answerIndex: 1,
            explanation: "Efficiency = useful/total, so total = useful/efficiency = 1200/0.40 = 3000 W. The input must be larger than the useful output, ruling out 480 W.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "Write efficiency = useful power / total power.",
              "Rearrange for total power: total = useful / efficiency.",
              "Use efficiency as the decimal 0.40.",
              "1200 / 0.40 = ?",
            ],
            strategy: "Divide useful power by efficiency to get the input",
          },
          {
            id: "phys-energy-bm2-09",
            question:
              "A motor is supplied with 5000 J. A Sankey diagram shows 3500 J as useful kinetic energy, 900 J wasted as heat in the windings, and the remainder wasted as sound. How much energy is wasted as sound?",
            options: ["600 J", "1500 J", "4400 J", "900 J"],
            answerIndex: 0,
            explanation: "All branches must sum to the input: sound = 5000 − 3500 − 900 = 600 J. The arrow widths must account for the entire 5000 J input.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "challenge",
            hints: [
              "In a Sankey diagram, all the output arrows add up to the input.",
              "Useful + heat + sound = total input.",
              "Sound = 5000 − 3500 − 900.",
            ],
            strategy: "All Sankey branches sum to the total input",
          },
          {
            id: "phys-energy-bm2-10",
            question:
              "An escalator lifts people at a rate equivalent to raising 1500 kg through 6 m every minute. The motor draws 2500 W of electrical power. What is the efficiency of the escalator? (g = 10 N/kg)",
            options: ["60%", "36%", "90%", "40%"],
            answerIndex: 0,
            explanation: "Useful power = mgh/t = (1500 × 10 × 6)/60 = 90 000/60 = 1500 W. Efficiency = (1500/2500) × 100% = 60%. Note the time is 1 minute = 60 s.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "challenge",
            hints: [
              "Find the useful power: GPE raised per second = mgh/t.",
              "Convert 1 minute to 60 seconds.",
              "Useful power = (1500 × 10 × 6)/60.",
              "Efficiency = useful power / input power × 100%.",
            ],
            strategy: "Compute useful power per second, then divide by input power",
          },
        ],
      },
      {
        id: "phys-energy-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Energy resources: how electricity is generated, renewable vs non-renewable, and the Sun as origin.",
        questions: [
          {
            id: "phys-energy-bm3-01",
            question: "Which of the following is a NON-renewable energy resource?",
            options: ["Wind", "Natural gas", "Tidal", "Geothermal"],
            answerIndex: 1,
            explanation: "Natural gas is a fossil fuel — finite and non-renewable. Wind, tidal and geothermal are all renewable resources.",
            guideRef: "Non-Renewable Energy Resources",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm3-02",
            question: "In all thermal power stations (coal, gas, nuclear), what device converts kinetic energy into electrical energy?",
            options: ["The boiler", "The turbine", "The generator", "The condenser"],
            answerIndex: 2,
            explanation: "The generator converts the kinetic energy of the spinning turbine into electrical energy. The turbine converts thermal/steam energy into kinetic energy; the boiler produces steam.",
            guideRef: "Non-Renewable Energy Resources",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm3-03",
            question: "Which energy resource does NOT ultimately get its energy from the Sun?",
            options: ["Wind", "Wave", "Tidal", "Hydroelectric"],
            answerIndex: 2,
            explanation: "Tidal energy comes from the gravitational pull of the Moon (and Sun) and the rotation of the Earth, not from solar heating. Wind, wave and hydroelectric all trace back to solar energy driving weather and the water cycle.",
            guideRef: "Renewable Energy Resources",
            difficulty: "core",
            hints: [
              "Most renewables rely on the Sun heating the atmosphere or driving the water cycle.",
              "Which resource depends on the Moon's gravity?",
            ],
          },
          {
            id: "phys-energy-bm3-04",
            question: "How does a nuclear power station differ from a coal-fired power station?",
            options: [
              "Nuclear uses a turbine and generator; coal does not",
              "Nuclear releases thermal energy by fission of uranium nuclei instead of by burning fuel",
              "Nuclear produces no electricity at night",
              "Nuclear does not use steam",
            ],
            answerIndex: 1,
            explanation: "Both use steam to drive a turbine and generator. The difference is the heat source: nuclear fission of heavy nuclei (e.g. uranium-235) rather than combustion of a fossil fuel.",
            guideRef: "Non-Renewable Energy Resources",
            difficulty: "core",
            hints: [
              "Both station types use the same steam-turbine-generator chain.",
              "Focus on where the heat comes from in each.",
            ],
          },
          {
            id: "phys-energy-bm3-05",
            question: "Which is a correct ADVANTAGE of solar photovoltaic (PV) cells?",
            options: [
              "They produce a constant output day and night",
              "They have no fuel cost and produce no CO₂ during operation",
              "They have a higher energy density than coal",
              "They work equally well in all weather",
            ],
            answerIndex: 1,
            explanation: "Solar PV has no fuel cost and emits no CO₂ while generating. However, output is intermittent (no power at night, less when cloudy), so the other options are false.",
            guideRef: "Renewable Energy Resources",
            difficulty: "core",
            hints: [
              "Think about what solar PV does and does not need to operate.",
              "Rule out any option that claims constant or all-weather output.",
            ],
          },
          {
            id: "phys-energy-bm3-06",
            question: "In a geothermal power station, where does the energy that heats the water originate?",
            options: [
              "From sunlight absorbed by surface rocks",
              "From hot rocks deep underground (heat from radioactive decay in the Earth)",
              "From the gravitational pull of the Moon",
              "From wind driving underground turbines",
            ],
            answerIndex: 1,
            explanation: "Geothermal energy comes from hot rocks deep in the Earth, heated largely by radioactive decay within the planet. Water is pumped down and returns as steam to drive turbines.",
            guideRef: "Renewable Energy Resources",
            difficulty: "core",
            hints: [
              "Geothermal means 'Earth heat'.",
              "It is one of the few resources not driven by the Sun or the Moon.",
            ],
          },
          {
            id: "phys-energy-bm3-07",
            question: "Which statement about tidal barrage power is correct?",
            options: [
              "Its output is unpredictable from day to day",
              "It is predictable because tides follow a known cycle, but has high construction cost and environmental impact on estuaries",
              "It releases large amounts of CO₂ during operation",
              "It can be built on any stretch of coastline",
            ],
            answerIndex: 1,
            explanation: "Tides are highly predictable, so tidal output can be forecast accurately. The drawbacks are very high construction cost and disruption to estuary habitats. It needs a suitable estuary, not any coastline.",
            guideRef: "Renewable Energy Resources",
            difficulty: "core",
            hints: [
              "Are tides predictable or random?",
              "Think about the cost and habitat impact of damming an estuary.",
            ],
          },
          {
            id: "phys-energy-bm3-08",
            question: "Why is hydroelectric power able to respond very quickly to a sudden surge in electricity demand?",
            options: [
              "Because sunlight can be increased on demand",
              "Because stored water can be released through turbines almost instantly, converting GPE to electrical energy",
              "Because the wind can be made stronger when needed",
              "Because coal can be burned faster",
            ],
            answerIndex: 1,
            explanation: "Water stored in a high reservoir holds gravitational PE. Opening the valves lets it fall through turbines within seconds, so output can be ramped up almost immediately — useful for meeting peaks in demand.",
            guideRef: "Renewable Energy Resources",
            difficulty: "challenge",
            hints: [
              "What store does the reservoir water hold?",
              "How quickly can valves be opened?",
              "Compare this with the slow warm-up of a coal boiler.",
            ],
            strategy: "Stored GPE can be released to the turbines on demand",
          },
          {
            id: "phys-energy-bm3-09",
            question:
              "Wind, wave, hydroelectric and biofuel resources are all described as ultimately solar in origin. Which chain of reasoning correctly explains the link for biofuel?",
            options: [
              "Sun heats the seas → tides → plant growth",
              "Sun drives photosynthesis → plants store chemical energy → burned as fuel",
              "Sun heats the air → wind → grinds grain into fuel",
              "Sun's gravity pulls plants upward → chemical energy",
            ],
            answerIndex: 1,
            explanation: "Plants capture sunlight by photosynthesis, storing it as chemical energy in their tissues. Burning the biofuel releases that stored solar energy, so biofuel is ultimately a solar resource.",
            guideRef: "Renewable Energy Resources",
            difficulty: "challenge",
            hints: [
              "How do plants capture the Sun's energy?",
              "Which store does that energy end up in inside the plant?",
              "Burning then releases that stored chemical energy.",
            ],
            strategy: "Trace the energy from sunlight to the chemical store in plants",
          },
          {
            id: "phys-energy-bm3-10",
            question:
              "A country wants a reliable, low-CO₂ baseload supply but has no suitable rivers or estuaries and limited sunshine. Which single resource best fits ALL these requirements?",
            options: ["Solar PV", "Nuclear", "Hydroelectric", "Tidal"],
            answerIndex: 1,
            explanation: "Nuclear gives reliable, weather-independent baseload power with very low CO₂ emissions per unit of electricity. Hydroelectric and tidal are ruled out by the geography; solar by limited sunshine and its intermittency.",
            guideRef: "Non-Renewable Energy Resources",
            difficulty: "challenge",
            hints: [
              "Eliminate any resource the geography rules out.",
              "Which remaining resource gives reliable, low-CO₂ baseload power?",
              "Reliability here means weather-independent and continuous.",
            ],
            strategy: "Match each requirement against each resource and eliminate",
          },
        ],
      },
      {
        id: "phys-energy-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Mixed challenge: multi-step calculations and synoptic energy reasoning.",
        questions: [
          {
            id: "phys-energy-bm4-01",
            question: "Which list places these energy quantities in the correct units?",
            options: [
              "Work in watts, power in joules, energy in newtons",
              "Work in joules, power in watts, energy in joules",
              "Work in newtons, power in watts, energy in joules",
              "Work in joules, power in joules, energy in watts",
            ],
            answerIndex: 1,
            explanation: "Work and energy are both measured in joules (J); power is measured in watts (W). The newton is the unit of force, not energy or power.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm4-02",
            question: "A 60 kg athlete runs up a flight of stairs of total height 5 m in 4 s. What is the athlete's useful power output? (g = 10 N/kg)",
            options: ["300 W", "750 W", "1200 W", "75 W"],
            answerIndex: 1,
            explanation: "Useful work = mgh = 60 × 10 × 5 = 3000 J. Power = W/t = 3000/4 = 750 W.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bm4-03",
            question: "A 0.05 kg ball is thrown straight up and rises to a height of 3.2 m. Ignoring air resistance, what speed did it leave the hand with? (g = 10 N/kg)",
            options: ["8 m/s", "6.4 m/s", "64 m/s", "5.7 m/s"],
            answerIndex: 0,
            explanation: "KE at launch = GPE at top: ½mv² = mgh → v = √(2gh) = √(2 × 10 × 3.2) = √64 = 8 m/s. The mass cancels.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "core",
            hints: [
              "All the launch KE becomes GPE at the top.",
              "½mv² = mgh, and m cancels.",
              "v = √(2gh) = √(2 × 10 × 3.2).",
            ],
            strategy: "Use v = √(2gh) for rising to maximum height",
          },
          {
            id: "phys-energy-bm4-04",
            question:
              "A roller-coaster car of mass 500 kg is at rest at the top of a 30 m drop. Friction dissipates 30 000 J during the descent. What is its kinetic energy at the bottom? (g = 10 N/kg)",
            options: ["150 000 J", "120 000 J", "180 000 J", "30 000 J"],
            answerIndex: 1,
            explanation: "GPE lost = mgh = 500 × 10 × 30 = 150 000 J. KE at bottom = GPE lost − energy dissipated = 150 000 − 30 000 = 120 000 J.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "core",
            hints: [
              "Find the GPE lost first: mgh.",
              "Energy is conserved: GPE lost = KE gained + energy dissipated by friction.",
              "KE = 150 000 − 30 000.",
            ],
            strategy: "KE gained = GPE lost − energy dissipated by friction",
          },
          {
            id: "phys-energy-bm4-05",
            question:
              "A pump lifts 50 kg of water through 20 m every second. Its electric motor is 80% efficient. What electrical power must be supplied? (g = 10 N/kg)",
            options: ["8000 W", "12 500 W", "10 000 W", "16 000 W"],
            answerIndex: 1,
            explanation: "Useful power = mgh/t = (50 × 10 × 20)/1 = 10 000 W. Input = useful/efficiency = 10 000/0.80 = 12 500 W.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "Useful power = GPE raised per second = mgh/t.",
              "The water is lifted each second, so t = 1 s.",
              "Input power = useful power / efficiency.",
              "10 000 / 0.80 = ?",
            ],
            strategy: "Find useful power, then divide by efficiency",
          },
          {
            id: "phys-energy-bm4-06",
            question:
              "Electricity passes through a generator (efficiency 90%), then a transformer (efficiency 95%). What is the overall efficiency of these two stages?",
            options: ["92.5%", "85.5%", "94.7%", "5%"],
            answerIndex: 1,
            explanation: "Overall efficiency = 0.90 × 0.95 = 0.855 = 85.5%. Stage efficiencies multiply as decimals; the overall value is less than either stage.",
            guideRef: "Efficiency of Electricity Generation",
            difficulty: "core",
            hints: [
              "Convert each percentage to a decimal.",
              "Multiply the decimals together.",
              "0.90 × 0.95 = ?",
            ],
            strategy: "Multiply stage efficiencies as decimals",
          },
          {
            id: "phys-energy-bm4-07",
            question:
              "A 1200 kg car accelerates from 10 m/s to 30 m/s on a flat road. How much work must the engine do, ignoring resistive forces?",
            options: ["240 000 J", "480 000 J", "540 000 J", "300 000 J"],
            answerIndex: 1,
            explanation: "Work = change in KE = ½m(v² − u²) = ½ × 1200 × (30² − 10²) = ½ × 1200 × (900 − 100) = ½ × 1200 × 800 = 480 000 J. You must subtract the initial KE, not just compute the final KE.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "challenge",
            hints: [
              "Work done = increase in kinetic energy.",
              "Find the KE at 30 m/s and at 10 m/s separately.",
              "Subtract: ΔKE = ½m(v² − u²).",
              "½ × 1200 × (900 − 100).",
            ],
            strategy: "Work = final KE − initial KE",
          },
          {
            id: "phys-energy-bm4-08",
            question:
              "A 2 kg block slides down a frictionless slope, dropping 2.5 m, then continues onto a rough horizontal surface where friction does 30 J of work before it stops. What was the block's KE at the bottom of the slope, and how far does it travel if the friction force is 6 N? (g = 10 N/kg)",
            options: [
              "50 J and 5 m",
              "50 J and 8.3 m",
              "25 J and 5 m",
              "30 J and 5 m",
            ],
            answerIndex: 1,
            explanation: "KE at bottom = GPE lost = mgh = 2 × 10 × 2.5 = 50 J. On the rough surface friction must remove all 50 J: W = Fd → d = W/F = 50/6 ≈ 8.3 m. (The 30 J is a distractor — friction must dissipate the full 50 J to stop the block.)",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "challenge",
            hints: [
              "KE at the bottom equals the GPE lost on the frictionless slope.",
              "To stop, friction must dissipate ALL of that KE.",
              "Use W = Fd with W = 50 J and F = 6 N to find the distance.",
              "d = 50 / 6.",
            ],
            strategy: "KE at bottom = mgh; then d = KE/F to bring it to rest",
          },
          {
            id: "phys-energy-bm4-09",
            question:
              "A wind turbine captures 30% of the kinetic energy of the wind passing through it. If 200 kW of wind power passes through and the generator is then 90% efficient, what electrical power is produced?",
            options: ["54 kW", "60 kW", "66 kW", "180 kW"],
            answerIndex: 0,
            explanation: "Power captured = 0.30 × 200 = 60 kW. Electrical output = 0.90 × 60 = 54 kW. Equivalently, overall efficiency = 0.30 × 0.90 = 0.27, so 0.27 × 200 = 54 kW.",
            guideRef: "Efficiency of Electricity Generation",
            difficulty: "challenge",
            hints: [
              "First find the power the turbine captures: 30% of 200 kW.",
              "Then apply the 90% generator efficiency to that.",
              "Or multiply both efficiencies, then by 200 kW.",
              "0.30 × 0.90 × 200.",
            ],
            strategy: "Apply each efficiency in turn, or multiply them first",
          },
          {
            id: "phys-energy-bm4-10",
            question:
              "A 0.25 kg ball is dropped from 2 m and rebounds to 1.4 m. What percentage of its kinetic energy (at impact) is retained after the bounce? (g = 10 N/kg)",
            options: ["70%", "30%", "60%", "140%"],
            answerIndex: 0,
            explanation: "KE just before impact = GPE from 2 m; KE just after = GPE that lifts it to 1.4 m. Since GPE ∝ h, the fraction retained = 1.4/2 = 0.70 = 70%. The mass and g cancel, so only the height ratio matters.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "challenge",
            hints: [
              "KE before impact equals the GPE from the drop height.",
              "KE after the bounce equals the GPE to the rebound height.",
              "Both are mgh, so the ratio is just the height ratio.",
              "1.4 / 2 = ?",
            ],
            strategy: "Energy ratio reduces to the height ratio when mass and g cancel",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "phys-energy-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Energy stores, transfers and conservation, with kinetic and gravitational PE calculations.",
        questions: [
          {
            id: "phys-energy-bq1-01",
            question:
              "A torch contains a battery, a bulb and a switch.\n\n" +
              "(a) Name the energy store in the battery. [1]\n" +
              "(b) Describe the sequence of energy transfers from the moment the torch is switched on until light leaves the bulb. [3]",
            marks: 4,
            modelAnswer:
              "(a) Chemical (energy) store.\n\n" +
              "(b) Chemical store in the battery → transferred electrically (electrical working) to the bulb → " +
              "the bulb transfers energy by light/waves (useful) and by heating to the surroundings (wasted thermal energy).",
            markScheme: [
              "Chemical store (1 mark)",
              "Energy transferred electrically / by electrical working from battery to bulb (1 mark)",
              "Bulb emits light / energy carried away by waves (1 mark)",
              "Some energy dissipated / wasted as heat / thermal energy to surroundings (1 mark)",
            ],
            commonError: "Calling electricity an energy 'store' — it is a transfer mechanism (electrical working), not a store.",
            guideRef: "Energy Stores and Transfers",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bq1-02",
            question:
              "A 3 kg mass is raised vertically through 1.2 m. (g = 10 N/kg)\n\n" +
              "(a) Calculate the gain in gravitational potential energy. [2]\n" +
              "(b) State the energy transfer that takes place if the mass is now released and falls back. [1]",
            marks: 3,
            modelAnswer:
              "(a) ΔGPE = mgΔh = 3 × 10 × 1.2 = 36 J.\n\n" +
              "(b) Gravitational potential energy is transferred to the kinetic energy store (GPE → KE).",
            markScheme: [
              "ΔGPE = mgΔh used / 3 × 10 × 1.2 (1 mark)",
              "= 36 J (1 mark)",
              "GPE transferred to kinetic store / GPE → KE (1 mark)",
            ],
            commonError: "Omitting the unit (J) or omitting g from the calculation.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "warmup",
            solutions: [
              {
                label: "Direct substitution",
                steps: [
                  "ΔGPE = mgΔh",
                  "= 3 × 10 × 1.2",
                  "= 36 J",
                ],
              },
            ],
          },
          {
            id: "phys-energy-bq1-03",
            question:
              "A 1500 kg car is travelling at 12 m/s.\n\n" +
              "(a) Calculate its kinetic energy. [2]\n" +
              "(b) The driver speeds up to 24 m/s. By what factor does the kinetic energy increase? Explain your answer. [2]",
            marks: 4,
            modelAnswer:
              "(a) Ek = ½mv² = ½ × 1500 × 12² = ½ × 1500 × 144 = 108 000 J (108 kJ).\n\n" +
              "(b) The kinetic energy increases by a factor of 4. Kinetic energy is proportional to v², " +
              "and the speed has doubled, so the KE increases by 2² = 4 times.",
            markScheme: [
              "Ek = ½mv² with values substituted (1 mark)",
              "= 108 000 J / 108 kJ (1 mark)",
              "Factor of 4 (1 mark)",
              "Because Ek ∝ v² and speed doubled, so 2² = 4 (1 mark)",
            ],
            commonError: "Thinking that doubling the speed doubles the KE — KE depends on v², so it quadruples.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "core",
            hints: [
              "Use Ek = ½mv² with v = 12 m/s for part (a).",
              "Square the speed before multiplying.",
              "For (b), note that KE depends on v², not v.",
              "Doubling v multiplies KE by 2² = 4.",
            ],
            solutions: [
              {
                label: "Calculation and ratio reasoning",
                steps: [
                  "Ek = ½ × 1500 × 12² = ½ × 1500 × 144 = 108 000 J",
                  "At 24 m/s: Ek = ½ × 1500 × 24² = ½ × 1500 × 576 = 432 000 J",
                  "Ratio = 432 000 / 108 000 = 4",
                  "This matches Ek ∝ v²: (24/12)² = 2² = 4",
                ],
              },
            ],
            strategy: "Use Ek ∝ v² to find the factor without recalculating",
          },
          {
            id: "phys-energy-bq1-04",
            question:
              "A diver of mass 65 kg steps off a platform 10 m above the water and falls from rest. (g = 10 N/kg, ignore air resistance.)\n\n" +
              "(a) Calculate the diver's gravitational potential energy at the top relative to the water. [2]\n" +
              "(b) Calculate the diver's speed as they reach the water. [3]",
            marks: 5,
            modelAnswer:
              "(a) GPE = mgh = 65 × 10 × 10 = 6500 J.\n\n" +
              "(b) By conservation of energy, KE at the water = GPE lost = 6500 J.\n" +
              "½mv² = 6500 → v² = (2 × 6500)/65 = 13 000/65 = 200 → v = √200 ≈ 14.1 m/s.",
            markScheme: [
              "GPE = mgh = 65 × 10 × 10 (1 mark)",
              "= 6500 J (1 mark)",
              "KE at water = GPE = 6500 J / energy conservation stated (1 mark)",
              "½mv² = 6500 rearranged to v² = 200 (1 mark)",
              "v = 14.1 m/s (allow 14 m/s) (1 mark)",
            ],
            commonError: "Forgetting the factor of 2 when rearranging ½mv², giving v² = 100 and v = 10 m/s.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "core",
            hints: [
              "Part (a): GPE = mgh with h = 10 m.",
              "Part (b): the GPE lost all becomes kinetic energy.",
              "Set ½mv² equal to the GPE.",
              "v = √(2 × KE / m); remember the factor of 2.",
            ],
            solutions: [
              {
                label: "Energy conservation",
                steps: [
                  "GPE = 65 × 10 × 10 = 6500 J",
                  "KE at water = 6500 J (no air resistance)",
                  "½ × 65 × v² = 6500 → v² = 13 000 / 65 = 200",
                  "v = √200 = 14.1 m/s (3 s.f.)",
                ],
              },
            ],
            strategy: "Set KE at the bottom equal to GPE lost",
          },
          {
            id: "phys-energy-bq1-05",
            question:
              "A 0.6 kg ball is thrown vertically upward at 9 m/s. (g = 10 N/kg, ignore air resistance.)\n\n" +
              "(a) Calculate the kinetic energy of the ball as it leaves the hand. [2]\n" +
              "(b) Use energy conservation to find the maximum height the ball reaches. [3]",
            marks: 5,
            modelAnswer:
              "(a) Ek = ½mv² = ½ × 0.6 × 9² = ½ × 0.6 × 81 = 24.3 J.\n\n" +
              "(b) At the highest point all KE has become GPE: mgh = 24.3 J.\n" +
              "0.6 × 10 × h = 24.3 → 6h = 24.3 → h = 4.05 m (≈ 4.1 m).",
            markScheme: [
              "Ek = ½mv² substituted (1 mark)",
              "= 24.3 J (1 mark)",
              "GPE at top = KE at launch / mgh = 24.3 (1 mark)",
              "6h = 24.3 rearranged (1 mark)",
              "h = 4.05 m / 4.1 m (1 mark)",
            ],
            commonError: "Using the mass inconsistently — note the m cancels overall, so h = v²/(2g) = 81/20 = 4.05 m also works.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "core",
            hints: [
              "Part (a): Ek = ½mv² with v = 9 m/s.",
              "Part (b): at maximum height, KE = 0 and all energy is GPE.",
              "Set mgh equal to the launch KE.",
              "Solve 0.6 × 10 × h = 24.3 for h.",
            ],
            solutions: [
              {
                label: "Energy method",
                steps: [
                  "Ek = ½ × 0.6 × 9² = ½ × 0.6 × 81 = 24.3 J",
                  "At top: mgh = 24.3 J",
                  "0.6 × 10 × h = 24.3 → 6h = 24.3",
                  "h = 4.05 m (3 s.f.)",
                ],
              },
            ],
            strategy: "All launch KE converts to GPE at the highest point",
          },
          {
            id: "phys-energy-bq1-06",
            question:
              "Define the principle of conservation of energy, and use it to explain what happens to the energy of a moving car when the driver applies the brakes and the car comes to rest. [4]",
            marks: 4,
            modelAnswer:
              "Conservation of energy: energy cannot be created or destroyed; it can only be transferred from one store to another, so the total energy is constant.\n\n" +
              "When the brakes are applied, the kinetic energy of the car is transferred (by friction at the brakes/heating) into the internal (thermal) energy store of the brakes, tyres, road and surrounding air, which warm up slightly. " +
              "The energy is not destroyed — it is dissipated into the surroundings, where it is spread out and becomes less useful.",
            markScheme: [
              "Energy cannot be created or destroyed (1 mark)",
              "Only transferred between stores / total energy constant (1 mark)",
              "Kinetic energy transferred to thermal / internal energy of brakes/surroundings (1 mark)",
              "Energy is dissipated / spread out, not destroyed (1 mark)",
            ],
            commonError: "Saying the kinetic energy is 'lost' or 'used up' — it is transferred to thermal energy, not destroyed.",
            guideRef: "Energy Stores and Transfers",
            difficulty: "core",
            hints: [
              "Start with the formal statement of the principle.",
              "Identify the store the car has while moving.",
              "Where does that energy go during braking?",
              "Use the word 'dissipated' rather than 'lost'.",
            ],
          },
          {
            id: "phys-energy-bq1-07",
            question:
              "A 1.0 kg steel ball falls from rest from a height of 1.25 m onto sand and embeds itself, stopping after sinking 0.05 m into the sand. (g = 10 N/kg)\n\n" +
              "(a) Calculate the kinetic energy of the ball just before it hits the sand. [2]\n" +
              "(b) Calculate the average resistive force exerted by the sand. [3]",
            marks: 5,
            modelAnswer:
              "(a) KE just before impact = GPE lost = mgh = 1.0 × 10 × 1.25 = 12.5 J.\n\n" +
              "(b) The sand must do work to stop the ball. The ball also falls a further 0.05 m, but taking the impact KE as 12.5 J, " +
              "work done by resistive force = KE = F × d → F = W/d = 12.5 / 0.05 = 250 N.",
            markScheme: [
              "KE = mgh = 1.0 × 10 × 1.25 (1 mark)",
              "= 12.5 J (1 mark)",
              "Work done against sand = KE = F × d (1 mark)",
              "F = 12.5 / 0.05 (1 mark)",
              "F = 250 N (1 mark)",
            ],
            commonError: "Confusing the fall height (1.25 m) with the sinking distance (0.05 m) when using W = Fd.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "challenge",
            hints: [
              "Part (a): the KE at impact equals the GPE lost during the fall.",
              "Part (b): the sand does work equal to the KE to stop the ball.",
              "Use W = Fd with d = 0.05 m, the sinking distance.",
              "F = 12.5 / 0.05.",
            ],
            solutions: [
              {
                label: "Energy and work-done method",
                steps: [
                  "KE at impact = mgh = 1.0 × 10 × 1.25 = 12.5 J",
                  "Sand does work W = 12.5 J to stop the ball",
                  "W = Fd → F = W/d = 12.5 / 0.05",
                  "F = 250 N",
                ],
              },
            ],
            strategy: "Equate the work done by the sand to the impact KE",
          },
          {
            id: "phys-energy-bq1-08",
            question:
              "A 0.10 kg ball is dropped from a height of 1.8 m. It rebounds to a height of 1.2 m. (g = 10 N/kg)\n\n" +
              "(a) Calculate the GPE of the ball before it is dropped and after it rebounds. [2]\n" +
              "(b) Calculate the energy dissipated during the bounce, and state what happens to this energy. [3]",
            marks: 5,
            modelAnswer:
              "(a) Before: GPE = mgh = 0.10 × 10 × 1.8 = 1.8 J. After rebound: GPE = 0.10 × 10 × 1.2 = 1.2 J.\n\n" +
              "(b) Energy dissipated = 1.8 − 1.2 = 0.6 J. This energy is transferred to the internal (thermal) store of the ball and ground (and a little to sound), warming them slightly — it is not destroyed.",
            markScheme: [
              "Initial GPE = 1.8 J (1 mark)",
              "Rebound GPE = 1.2 J (1 mark)",
              "Energy dissipated = 1.8 − 1.2 = 0.6 J (1 mark)",
              "Transferred to thermal / internal store (and sound) (1 mark)",
              "Energy not destroyed / conserved overall (1 mark)",
            ],
            commonError: "Stating energy is lost or destroyed rather than dissipated as thermal energy and sound.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "challenge",
            hints: [
              "Calculate GPE = mgh at each height.",
              "The difference in GPE is the energy dissipated in the bounce.",
              "Subtract: 1.8 − 1.2.",
              "Name the store(s) the energy moves to.",
            ],
            solutions: [
              {
                label: "GPE comparison",
                steps: [
                  "GPE before = 0.10 × 10 × 1.8 = 1.8 J",
                  "GPE after = 0.10 × 10 × 1.2 = 1.2 J",
                  "Energy dissipated = 1.8 − 1.2 = 0.6 J",
                ],
              },
            ],
            strategy: "Energy dissipated = drop GPE − rebound GPE",
          },
          {
            id: "phys-energy-bq1-09",
            question:
              "State the seven energy stores listed in the syllabus, and for each of the following give the main store being described: (i) a stretched catapult, (ii) a hot cup of tea, (iii) a charged thundercloud. [5]",
            marks: 5,
            modelAnswer:
              "The seven stores are: kinetic, gravitational potential, chemical, elastic (strain), nuclear, internal (thermal), and electrostatic.\n\n" +
              "(i) Stretched catapult → elastic (strain) store.\n" +
              "(ii) Hot cup of tea → internal (thermal) store.\n" +
              "(iii) Charged thundercloud → electrostatic store.",
            markScheme: [
              "Lists the stores correctly (kinetic, GPE, chemical, elastic, nuclear, internal, electrostatic) — any 7 correct (2 marks)",
              "(i) elastic / strain (1 mark)",
              "(ii) internal / thermal (1 mark)",
              "(iii) electrostatic (1 mark)",
            ],
            commonError: "Confusing 'internal (thermal)' with 'heat' — heat is a transfer, thermal energy is the store.",
            guideRef: "Energy Stores and Transfers",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bq1-10",
            question:
              "A 250 g (0.25 kg) trolley is pushed along a bench and released. It moves off at 2.0 m/s, travels 0.80 m, and stops due to friction.\n\n" +
              "(a) Calculate the initial kinetic energy of the trolley. [2]\n" +
              "(b) Calculate the average frictional force acting on the trolley. [3]",
            marks: 5,
            modelAnswer:
              "(a) Ek = ½mv² = ½ × 0.25 × 2.0² = ½ × 0.25 × 4 = 0.5 J.\n\n" +
              "(b) Friction does work equal to the KE to stop the trolley: W = Fd → F = W/d = 0.5 / 0.80 = 0.625 N (≈ 0.63 N).",
            markScheme: [
              "Ek = ½mv² substituted (1 mark)",
              "= 0.5 J (1 mark)",
              "Work done by friction = KE = F × d (1 mark)",
              "F = 0.5 / 0.80 (1 mark)",
              "F = 0.63 N (allow 0.625 N) (1 mark)",
            ],
            commonError: "Forgetting to convert 250 g to 0.25 kg, giving a KE 1000 times too large.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "Convert the mass to kilograms first.",
              "Part (a): Ek = ½mv² with v = 2.0 m/s.",
              "Part (b): friction does work equal to the KE.",
              "F = KE / distance = 0.5 / 0.80.",
            ],
            solutions: [
              {
                label: "KE then work-energy",
                steps: [
                  "m = 250 g = 0.25 kg",
                  "Ek = ½ × 0.25 × 2.0² = 0.5 J",
                  "Friction work = 0.5 J = F × 0.80",
                  "F = 0.5 / 0.80 = 0.625 N ≈ 0.63 N",
                ],
              },
            ],
            strategy: "Stopping distance: friction work equals the initial KE",
          },
        ],
      },
      {
        id: "phys-energy-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Work, power, efficiency and Sankey diagrams with multi-step calculations.",
        questions: [
          {
            id: "phys-energy-bq2-01",
            question:
              "A weightlifter lifts a 120 kg barbell from the floor to a height of 2.0 m above the floor. (g = 10 N/kg)\n\n" +
              "(a) Calculate the work done on the barbell. [2]\n" +
              "(b) If the lift takes 1.5 s, calculate the average power developed. [2]",
            marks: 4,
            modelAnswer:
              "(a) Work done = GPE gained = mgh = 120 × 10 × 2.0 = 2400 J.\n\n" +
              "(b) P = W/t = 2400 / 1.5 = 1600 W.",
            markScheme: [
              "W = mgh = 120 × 10 × 2.0 (1 mark)",
              "= 2400 J (1 mark)",
              "P = W/t = 2400 / 1.5 (1 mark)",
              "= 1600 W (1 mark)",
            ],
            commonError: "Multiplying work by time instead of dividing when finding power.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "warmup",
            solutions: [
              {
                label: "Work then power",
                steps: [
                  "W = mgh = 120 × 10 × 2.0 = 2400 J",
                  "P = W/t = 2400 / 1.5 = 1600 W",
                ],
              },
            ],
          },
          {
            id: "phys-energy-bq2-02",
            question:
              "An electric kettle is rated at 2200 W. It transfers 660 000 J of energy to heat the water during one boil.\n\n" +
              "(a) Calculate the time taken to transfer this energy. [2]\n" +
              "(b) The kettle is 88% efficient. Calculate the total electrical energy it actually consumes during the boil. [2]",
            marks: 4,
            modelAnswer:
              "(a) P = E/t → t = E/P = 660 000 / 2200 = 300 s.\n\n" +
              "(b) Efficiency = useful/total → total = useful/efficiency = 660 000 / 0.88 = 750 000 J (750 kJ).",
            markScheme: [
              "t = E/P = 660 000 / 2200 (1 mark)",
              "= 300 s (1 mark)",
              "Total = useful / efficiency = 660 000 / 0.88 (1 mark)",
              "= 750 000 J / 750 kJ (1 mark)",
            ],
            commonError: "Multiplying by 0.88 instead of dividing, giving a total smaller than the useful output.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "Part (a): rearrange P = E/t for t.",
              "Part (b): the 660 000 J is the USEFUL output.",
              "total = useful / efficiency, with efficiency as a decimal.",
              "660 000 / 0.88.",
            ],
            solutions: [
              {
                label: "Power and efficiency",
                steps: [
                  "t = E/P = 660 000 / 2200 = 300 s",
                  "Total energy = 660 000 / 0.88 = 750 000 J = 750 kJ",
                ],
              },
            ],
            strategy: "Rearrange P = E/t; divide useful energy by efficiency for total",
          },
          {
            id: "phys-energy-bq2-03",
            question:
              "A filament lamp is supplied with 100 J of electrical energy. It produces 10 J of light; the rest is wasted as heat.\n\n" +
              "(a) Calculate the efficiency of the lamp. [2]\n" +
              "(b) Sketch (in words) the Sankey diagram for this lamp, stating the width (in J) of each arrow. [3]",
            marks: 5,
            modelAnswer:
              "(a) Efficiency = (useful out / total in) × 100% = (10/100) × 100% = 10%.\n\n" +
              "(b) A single input arrow of width 100 J enters from the left. It splits into a useful output arrow of 10 J (light) " +
              "continuing straight ahead, and a wasted-energy arrow of 90 J (heat) branching away. The two output arrows (10 J + 90 J) " +
              "add up to the 100 J input.",
            markScheme: [
              "Efficiency = (10/100) × 100% (1 mark)",
              "= 10% (1 mark)",
              "Input arrow = 100 J (1 mark)",
              "Useful light arrow = 10 J going straight on (1 mark)",
              "Wasted heat arrow = 90 J branching off (1 mark)",
            ],
            commonError: "Drawing arrows that do not add up to the input, or making the wasted arrow 100 J instead of 90 J.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "Efficiency = useful light / total input × 100%.",
              "Wasted heat = input − useful = 100 − 10.",
              "In a Sankey diagram the output arrows must sum to the input.",
              "Make arrow widths proportional: 100, 10 and 90 J.",
            ],
            solutions: [
              {
                label: "Efficiency and energy split",
                steps: [
                  "Efficiency = (10/100) × 100% = 10%",
                  "Wasted heat = 100 − 10 = 90 J",
                  "Sankey: 100 J in → 10 J light (useful) + 90 J heat (wasted)",
                ],
              },
            ],
            strategy: "Useful + wasted = input; arrow widths proportional to energy",
          },
          {
            id: "phys-energy-bq2-04",
            question:
              "A motor raises a 25 kg load at a steady speed of 0.40 m/s. (g = 10 N/kg)\n\n" +
              "(a) Calculate the useful power output of the motor. [3]\n" +
              "(b) The motor draws 150 W of electrical power. Calculate its efficiency. [2]",
            marks: 5,
            modelAnswer:
              "(a) Weight of load = mg = 25 × 10 = 250 N. At steady speed the lifting force equals the weight.\n" +
              "Useful power = Fv = 250 × 0.40 = 100 W.\n\n" +
              "(b) Efficiency = (useful/total) × 100% = (100/150) × 100% = 66.7% (≈ 67%).",
            markScheme: [
              "Weight = mg = 250 N (1 mark)",
              "P = Fv = 250 × 0.40 (1 mark)",
              "Useful power = 100 W (1 mark)",
              "Efficiency = (100/150) × 100% (1 mark)",
              "= 67% (allow 66.7%) (1 mark)",
            ],
            commonError: "Forgetting to find the weight first — the force needed to lift at steady speed equals mg, not m.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "At steady speed the lifting force equals the weight, mg.",
              "Useful power = Fv = (mg) × v.",
              "Then efficiency = useful / input × 100%.",
              "100 / 150 × 100%.",
            ],
            solutions: [
              {
                label: "Force-velocity power",
                steps: [
                  "Weight = mg = 25 × 10 = 250 N",
                  "Useful power = Fv = 250 × 0.40 = 100 W",
                  "Efficiency = (100/150) × 100% = 66.7% ≈ 67%",
                ],
              },
            ],
            strategy: "Use P = Fv with F = mg, then compare with input power",
          },
          {
            id: "phys-energy-bq2-05",
            question:
              "Explain what is meant by 'efficiency', and explain why no real machine can ever be 100% efficient. Refer to conservation of energy and dissipation in your answer. [4]",
            marks: 4,
            modelAnswer:
              "Efficiency is the fraction (or percentage) of the total energy input that is transferred as useful energy output: " +
              "efficiency = useful energy output / total energy input (× 100%).\n\n" +
              "By conservation of energy, total input = useful output + wasted output. In any real machine some energy is always " +
              "dissipated to the surroundings (e.g. as heat from friction, or as sound), so the wasted output is always greater than zero. " +
              "This means the useful output is always less than the total input, so efficiency is always less than 100%.",
            markScheme: [
              "Efficiency = useful output / total input (1 mark)",
              "Total input = useful output + wasted output (conservation of energy) (1 mark)",
              "Some energy is always dissipated / wasted (e.g. heat from friction, sound) (1 mark)",
              "So useful < total, efficiency always < 100% (1 mark)",
            ],
            commonError: "Saying energy is 'lost', implying it is destroyed — efficiency is below 100% because energy is dissipated, not destroyed.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "Define efficiency as a ratio of useful to total energy.",
              "Use conservation: input = useful + wasted.",
              "Why is the wasted term always more than zero?",
              "Conclude about the maximum possible efficiency.",
            ],
          },
          {
            id: "phys-energy-bq2-06",
            question:
              "A 600 W electric drill is used for 5 minutes. It is 75% efficient.\n\n" +
              "(a) Calculate the total electrical energy supplied to the drill. [2]\n" +
              "(b) Calculate the useful energy output. [2]\n" +
              "(c) State what happens to the wasted energy. [1]",
            marks: 5,
            modelAnswer:
              "(a) E = Pt = 600 × (5 × 60) = 600 × 300 = 180 000 J (180 kJ).\n\n" +
              "(b) Useful energy = efficiency × total = 0.75 × 180 000 = 135 000 J (135 kJ).\n\n" +
              "(c) The wasted 45 000 J is dissipated as thermal energy (heat) in the motor and drill bit (and some as sound), warming the surroundings.",
            markScheme: [
              "E = Pt with t = 300 s (1 mark)",
              "= 180 000 J / 180 kJ (1 mark)",
              "Useful = 0.75 × 180 000 (1 mark)",
              "= 135 000 J / 135 kJ (1 mark)",
              "Wasted energy dissipated as heat / thermal energy (and sound) (1 mark)",
            ],
            commonError: "Forgetting to convert 5 minutes to 300 seconds before using E = Pt.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "Convert 5 minutes to seconds first (5 × 60).",
              "Part (a): E = Pt.",
              "Part (b): useful = efficiency × total input.",
              "Part (c): name the store and mechanism.",
            ],
            solutions: [
              {
                label: "Energy and efficiency",
                steps: [
                  "t = 5 × 60 = 300 s",
                  "E = Pt = 600 × 300 = 180 000 J",
                  "Useful = 0.75 × 180 000 = 135 000 J",
                  "Wasted = 180 000 − 135 000 = 45 000 J as heat/sound",
                ],
              },
            ],
            strategy: "E = Pt for total; multiply by efficiency for useful output",
          },
          {
            id: "phys-energy-bq2-07",
            question:
              "A pumped-storage hydroelectric scheme pumps 2.0 × 10⁶ kg of water up to a reservoir 90 m higher during the night, and releases it through turbines during the day. (g = 10 N/kg)\n\n" +
              "(a) Calculate the gravitational potential energy stored when all the water has been pumped up. [2]\n" +
              "(b) The generation stage (turbine + generator) is 85% efficient. Calculate the maximum electrical energy that can be generated when the water is released. [2]\n" +
              "(c) Suggest one reason such schemes are valuable to the electricity grid. [1]",
            marks: 5,
            modelAnswer:
              "(a) GPE = mgh = 2.0 × 10⁶ × 10 × 90 = 1.8 × 10⁹ J.\n\n" +
              "(b) Useful electrical energy = 0.85 × 1.8 × 10⁹ = 1.53 × 10⁹ J.\n\n" +
              "(c) They store energy when demand is low and release it quickly when demand is high / they can respond rapidly to peaks in demand.",
            markScheme: [
              "GPE = mgh = 2.0 × 10⁶ × 10 × 90 (1 mark)",
              "= 1.8 × 10⁹ J (1 mark)",
              "Useful = 0.85 × 1.8 × 10⁹ (1 mark)",
              "= 1.53 × 10⁹ J (1 mark)",
              "Stores energy / meets peak demand / responds quickly (1 mark)",
            ],
            commonError: "Slipping powers of ten — keep careful track: 2.0 × 10⁶ × 90 = 1.8 × 10⁸, then ×10 = 1.8 × 10⁹.",
            guideRef: "Renewable Energy Resources",
            difficulty: "challenge",
            hints: [
              "Part (a): GPE = mgh; handle the powers of ten carefully.",
              "2.0 × 10⁶ × 10 × 90 = ?",
              "Part (b): multiply the stored GPE by 0.85.",
              "Part (c): think about why storing energy overnight is useful.",
            ],
            solutions: [
              {
                label: "GPE stored and recovered",
                steps: [
                  "GPE = mgh = 2.0 × 10⁶ × 10 × 90",
                  "= 2.0 × 10⁶ × 900 = 1.8 × 10⁹ J",
                  "Useful electrical energy = 0.85 × 1.8 × 10⁹ = 1.53 × 10⁹ J",
                ],
              },
            ],
            strategy: "Store GPE = mgh; recover efficiency × GPE as electrical energy",
          },
          {
            id: "phys-energy-bq2-08",
            question:
              "Electricity from a power station passes through three stages on its way to a home: the generator (efficiency 38%), the step-up/step-down transformers combined (efficiency 96%), and the transmission lines (efficiency 92%).\n\n" +
              "(a) Calculate the overall efficiency of delivering electricity to the home. [3]\n" +
              "(b) If the fuel supplies 5.0 × 10⁹ J of chemical energy, calculate the useful electrical energy delivered to the home. [2]",
            marks: 5,
            modelAnswer:
              "(a) Overall efficiency = 0.38 × 0.96 × 0.92 = 0.3356 ≈ 0.336 = 33.6%.\n\n" +
              "(b) Useful energy = 0.336 × 5.0 × 10⁹ = 1.68 × 10⁹ J (≈ 1.7 × 10⁹ J).",
            markScheme: [
              "Multiplies efficiencies as decimals 0.38 × 0.96 × 0.92 (1 mark)",
              "= 0.336 (1 mark)",
              "= 33.6% (1 mark)",
              "Useful = 0.336 × 5.0 × 10⁹ (1 mark)",
              "= 1.68 × 10⁹ J / 1.7 × 10⁹ J (1 mark)",
            ],
            commonError: "Adding or averaging the percentages instead of multiplying the decimal efficiencies.",
            guideRef: "Efficiency of Electricity Generation",
            difficulty: "challenge",
            hints: [
              "Convert each percentage to a decimal.",
              "Multiply all three decimals together.",
              "0.38 × 0.96 × 0.92.",
              "Then multiply the overall efficiency by the input energy.",
            ],
            solutions: [
              {
                label: "Cascaded efficiencies",
                steps: [
                  "Overall = 0.38 × 0.96 × 0.92 = 0.3356 ≈ 0.336",
                  "= 33.6%",
                  "Useful energy = 0.336 × 5.0 × 10⁹ = 1.68 × 10⁹ J",
                ],
              },
            ],
            strategy: "Multiply stage efficiencies as decimals, then × input energy",
          },
          {
            id: "phys-energy-bq2-09",
            question:
              "A 70 kg cyclist freewheels (no pedalling) down a hill, descending a vertical height of 25 m. At the bottom the cyclist is moving at 18 m/s. (g = 10 N/kg)\n\n" +
              "(a) Calculate the GPE lost during the descent. [2]\n" +
              "(b) Calculate the kinetic energy at the bottom. [2]\n" +
              "(c) Calculate the energy dissipated by friction and air resistance during the descent. [2]",
            marks: 6,
            modelAnswer:
              "(a) GPE lost = mgh = 70 × 10 × 25 = 17 500 J.\n\n" +
              "(b) Ek = ½mv² = ½ × 70 × 18² = ½ × 70 × 324 = 11 340 J.\n\n" +
              "(c) Energy dissipated = GPE lost − KE gained = 17 500 − 11 340 = 6160 J.",
            markScheme: [
              "GPE = mgh = 70 × 10 × 25 = 17 500 J (1 mark for method, 1 for answer)",
              "Ek = ½mv² = ½ × 70 × 18² (1 mark)",
              "= 11 340 J (1 mark)",
              "Dissipated = GPE − KE = 17 500 − 11 340 (1 mark)",
              "= 6160 J (1 mark)",
            ],
            commonError: "Assuming KE at the bottom equals GPE lost — here friction and air resistance dissipate some energy, so KE < GPE lost.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "challenge",
            hints: [
              "Part (a): GPE lost = mgh.",
              "Part (b): Ek = ½mv² with v = 18 m/s.",
              "Part (c): the missing energy was dissipated by resistive forces.",
              "Dissipated = GPE lost − KE gained.",
            ],
            solutions: [
              {
                label: "Energy audit",
                steps: [
                  "GPE lost = 70 × 10 × 25 = 17 500 J",
                  "KE at bottom = ½ × 70 × 18² = ½ × 70 × 324 = 11 340 J",
                  "Dissipated = 17 500 − 11 340 = 6160 J",
                ],
              },
            ],
            strategy: "Dissipated energy = GPE lost − KE gained",
          },
          {
            id: "phys-energy-bq2-10",
            question:
              "A child's toy car is driven by a wound-up spring storing 8.0 J of elastic energy. When released, the 0.20 kg car reaches a top speed of 4.0 m/s on a level floor.\n\n" +
              "(a) Calculate the kinetic energy of the car at top speed. [2]\n" +
              "(b) Calculate the efficiency of the energy transfer from spring to motion. [2]\n" +
              "(c) State one reason the efficiency is below 100%. [1]",
            marks: 5,
            modelAnswer:
              "(a) Ek = ½mv² = ½ × 0.20 × 4.0² = ½ × 0.20 × 16 = 1.6 J.\n\n" +
              "(b) Efficiency = (useful/total) × 100% = (1.6/8.0) × 100% = 20%.\n\n" +
              "(c) Energy is dissipated by friction in the gears/axles and between the wheels and floor (and as sound), warming the surroundings.",
            markScheme: [
              "Ek = ½mv² = ½ × 0.20 × 16 (1 mark)",
              "= 1.6 J (1 mark)",
              "Efficiency = (1.6/8.0) × 100% (1 mark)",
              "= 20% (1 mark)",
              "Friction / sound dissipates energy as heat (1 mark)",
            ],
            commonError: "Using the spring energy (8.0 J) as the kinetic energy instead of calculating ½mv² from the speed.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "Part (a): Ek = ½mv² with v = 4.0 m/s.",
              "Part (b): efficiency = useful KE / stored elastic energy × 100%.",
              "1.6 / 8.0 × 100%.",
              "Part (c): where does the missing energy go?",
            ],
            solutions: [
              {
                label: "KE and efficiency",
                steps: [
                  "Ek = ½ × 0.20 × 4.0² = ½ × 0.20 × 16 = 1.6 J",
                  "Efficiency = (1.6 / 8.0) × 100% = 20%",
                ],
              },
            ],
            strategy: "Useful KE ÷ stored elastic energy gives the efficiency",
          },
        ],
      },
      {
        id: "phys-energy-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Energy resources: generation, advantages and disadvantages, and the Sun as origin.",
        questions: [
          {
            id: "phys-energy-bq3-01",
            question:
              "(a) State what is meant by a renewable energy resource. [1]\n" +
              "(b) From the following list, identify which are renewable and which are non-renewable: coal, wind, uranium, tidal, natural gas, geothermal. [3]",
            marks: 4,
            modelAnswer:
              "(a) A renewable resource is one that is naturally replenished and will not run out on a human timescale.\n\n" +
              "(b) Renewable: wind, tidal, geothermal. Non-renewable: coal, uranium, natural gas.",
            markScheme: [
              "Renewable = naturally replenished / will not run out (1 mark)",
              "Renewable: wind, tidal, geothermal (1 mark for all three)",
              "Non-renewable: coal, natural gas (1 mark)",
              "Non-renewable: uranium / nuclear (1 mark)",
            ],
            commonError: "Classifying nuclear (uranium) as renewable — uranium is a finite, mined fuel and is non-renewable.",
            guideRef: "Renewable Energy Resources",
            difficulty: "warmup",
          },
          {
            id: "phys-energy-bq3-02",
            question:
              "Describe, in order, the main energy transfers that occur in a coal-fired power station, from the chemical energy in the coal to electrical energy in the wires. [4]",
            marks: 4,
            modelAnswer:
              "1. The coal is burned, transferring chemical energy to thermal (internal) energy of the hot gases.\n" +
              "2. This thermal energy heats water in a boiler, turning it into steam (heating transfer).\n" +
              "3. The high-pressure steam drives a turbine, transferring thermal energy to the kinetic energy of the spinning turbine.\n" +
              "4. The turbine turns a generator, transferring kinetic energy to electrical energy in the wires.",
            markScheme: [
              "Coal burned: chemical → thermal energy (1 mark)",
              "Thermal energy boils water to steam (1 mark)",
              "Steam drives turbine: thermal → kinetic (1 mark)",
              "Turbine turns generator: kinetic → electrical (1 mark)",
            ],
            commonError: "Saying the turbine produces electricity — the generator does; the turbine only spins.",
            guideRef: "Non-Renewable Energy Resources",
            difficulty: "core",
            hints: [
              "Start at the furnace: what happens when coal burns?",
              "Trace the energy through the boiler and steam.",
              "What does the steam do to the turbine?",
              "What converts the turbine's motion into electricity?",
            ],
          },
          {
            id: "phys-energy-bq3-03",
            question:
              "Explain why most renewable energy resources can be traced back to the Sun. Give specific examples for wind, hydroelectric and biofuel, and name one renewable resource that does NOT originate from the Sun. [5]",
            marks: 5,
            modelAnswer:
              "The Sun heats the Earth's surface and atmosphere unevenly, and drives the water cycle and photosynthesis, so most renewable resources ultimately derive their energy from solar radiation.\n\n" +
              "Wind: the Sun heats the air unevenly, causing pressure differences that make air move (wind).\n" +
              "Hydroelectric: the Sun evaporates water, which falls as rain and collects in high reservoirs (the water cycle), storing GPE.\n" +
              "Biofuel: plants capture sunlight by photosynthesis, storing chemical energy that is released when the biofuel is burned.\n\n" +
              "Tidal energy does NOT come from the Sun — it comes mainly from the gravitational pull of the Moon and the Earth's rotation.",
            markScheme: [
              "Sun drives weather / water cycle / photosynthesis (1 mark)",
              "Wind: uneven heating of air by the Sun causes air to move (1 mark)",
              "Hydroelectric: Sun evaporates water → rain → reservoir (water cycle) (1 mark)",
              "Biofuel: photosynthesis stores the Sun's energy as chemical energy in plants (1 mark)",
              "Tidal does not come from the Sun (Moon's gravity / Earth's rotation) (1 mark)",
            ],
            commonError: "Stating geothermal or tidal comes from the Sun — geothermal comes from the Earth's internal heat and tidal from the Moon's gravity.",
            guideRef: "Renewable Energy Resources",
            difficulty: "core",
            hints: [
              "How does the Sun cause wind?",
              "How does the Sun drive the water cycle that fills reservoirs?",
              "How do plants store the Sun's energy?",
              "Which resource depends on gravity, not sunlight?",
            ],
          },
          {
            id: "phys-energy-bq3-04",
            question:
              "Compare nuclear power and coal-fired power for generating electricity. In your answer refer to carbon dioxide emissions, waste products, and reliability. [6]",
            marks: 6,
            modelAnswer:
              "CO₂ emissions: Coal-fired stations burn fossil fuel and release large amounts of CO₂ (a greenhouse gas contributing to climate change). Nuclear stations release almost no CO₂ during operation.\n\n" +
              "Waste products: Coal produces ash and gases (CO₂, SO₂ causing acid rain). Nuclear produces radioactive waste with long half-lives that must be stored safely for a very long time.\n\n" +
              "Reliability: Both are reliable and weather-independent, providing continuous baseload power; both can run day and night regardless of weather, unlike many renewables.",
            markScheme: [
              "Coal releases large amounts of CO₂ (1 mark)",
              "Nuclear releases very little / no CO₂ (1 mark)",
              "Coal waste: ash / SO₂ / acid rain (1 mark)",
              "Nuclear waste: radioactive / long-lived / must be stored safely (1 mark)",
              "Both reliable / weather-independent / baseload (1 mark)",
              "Valid comparative statement (e.g. nuclear lower CO₂ but harder waste problem) (1 mark)",
            ],
            commonError: "Claiming nuclear is renewable, or that it produces CO₂ in large amounts — it does not.",
            guideRef: "Non-Renewable Energy Resources",
            difficulty: "core",
            hints: [
              "Treat each of the three aspects in turn.",
              "Contrast the CO₂ emissions of the two sources.",
              "Compare the kinds of waste each produces.",
              "Are both reliable? Note what they have in common.",
            ],
          },
          {
            id: "phys-energy-bq3-05",
            question:
              "A remote island community wants to generate its own electricity. It is very sunny, windy, and has a fast-flowing river running down a steep hillside, but no fossil-fuel supply.\n\n" +
              "(a) Suggest TWO suitable renewable resources for the island and, for each, briefly say why it is suitable. [4]\n" +
              "(b) State one disadvantage of relying only on solar and wind power, and suggest how it could be overcome. [2]",
            marks: 6,
            modelAnswer:
              "(a) Any two of: Solar PV — the island is very sunny, so PV cells would generate a lot of electricity. Wind turbines — the island is windy, so turbines would turn frequently. Hydroelectric — the fast-flowing river down a steep hillside can drive turbines reliably.\n\n" +
              "(b) Solar and wind are intermittent — solar gives no output at night and wind stops in calm weather, so supply may not match demand. This could be overcome by storing energy (e.g. in batteries or by pumped-storage hydroelectric) or by combining them with the more reliable hydroelectric source.",
            markScheme: [
              "First resource named with valid reason (e.g. solar — very sunny) (2 marks)",
              "Second resource named with valid reason (e.g. hydro — fast river/steep hill) (2 marks)",
              "Disadvantage: solar/wind intermittent / weather-dependent (1 mark)",
              "Solution: energy storage / batteries / pumped storage / combine with hydro (1 mark)",
            ],
            commonError: "Suggesting a resource the island cannot use (e.g. tidal without mentioning the coast, or fossil fuels which are unavailable).",
            guideRef: "Renewable Energy Resources",
            difficulty: "core",
            hints: [
              "Match each resource to a feature of the island.",
              "The steep, fast river suggests one particular resource.",
              "Why might solar and wind alone be unreliable?",
              "How can intermittent supply be made dependable?",
            ],
          },
          {
            id: "phys-energy-bq3-06",
            question:
              "(a) Describe how a wind turbine generates electricity, naming the energy transfers involved. [3]\n" +
              "(b) Give one advantage and one disadvantage of wind power compared with a gas-fired power station. [2]",
            marks: 5,
            modelAnswer:
              "(a) Moving air (kinetic energy of the wind) pushes against the turbine blades, making them rotate — kinetic energy of the wind is transferred to kinetic energy of the blades. The rotating blades turn a generator, which transfers this kinetic energy to electrical energy.\n\n" +
              "(b) Advantage: wind power produces no CO₂ during operation and the fuel (wind) is free / renewable. Disadvantage: wind is intermittent/unreliable (no output when there is no wind), whereas a gas station can run on demand.",
            markScheme: [
              "Wind (kinetic energy) turns the blades (1 mark)",
              "Blades turn a generator (1 mark)",
              "Generator: kinetic → electrical energy (1 mark)",
              "Advantage: no CO₂ / free fuel / renewable (1 mark)",
              "Disadvantage: intermittent / unreliable / weather-dependent (1 mark)",
            ],
            commonError: "Saying the blades 'make electricity' directly — the generator does the conversion.",
            guideRef: "Renewable Energy Resources",
            difficulty: "core",
            hints: [
              "What store does moving air have?",
              "What does the wind do to the blades?",
              "What component converts rotation into electricity?",
              "Compare reliability and emissions with a gas station.",
            ],
          },
          {
            id: "phys-energy-bq3-07",
            question:
              "Solar power can be harnessed in two different ways: solar photovoltaic (PV) cells and solar thermal (heating) panels.\n\n" +
              "(a) State the useful energy output of each type. [2]\n" +
              "(b) Explain why solar power is described as a renewable resource but is not always reliable. [3]",
            marks: 5,
            modelAnswer:
              "(a) Solar PV cells transfer light energy directly to electrical energy. Solar thermal panels transfer light/infrared energy to thermal energy, heating water.\n\n" +
              "(b) Solar power is renewable because the Sun will continue to supply light for billions of years and the resource is naturally replenished and not used up. " +
              "It is not always reliable because the output depends on sunlight: there is no output at night and reduced output when it is cloudy or in winter, so it cannot guarantee a constant supply.",
            markScheme: [
              "PV → electrical energy (1 mark)",
              "Solar thermal → thermal energy / heats water (1 mark)",
              "Renewable: Sun's energy is replenished / will not run out (1 mark)",
              "Output depends on sunlight (1 mark)",
              "No output at night / less when cloudy / unreliable (1 mark)",
            ],
            commonError: "Confusing solar PV (makes electricity) with solar thermal (heats water).",
            guideRef: "Renewable Energy Resources",
            difficulty: "core",
            hints: [
              "What does a PV cell produce? What does a thermal panel produce?",
              "Why will the Sun's energy not run out?",
              "When does a solar panel produce no power?",
              "Link 'reliable' to whether output is constant.",
            ],
          },
          {
            id: "phys-energy-bq3-08",
            question:
              "A geothermal power station and a tidal barrage are both renewable, but neither obtains its energy from the Sun.\n\n" +
              "(a) State the original source of the energy for each. [2]\n" +
              "(b) Geothermal output is steady, but tidal output varies through the day yet is still described as reliable. Explain this apparent contradiction. [3]",
            marks: 5,
            modelAnswer:
              "(a) Geothermal energy comes from heat inside the Earth (largely from radioactive decay in the rocks). Tidal energy comes from the gravitational pull of the Moon (and the Sun) and the rotation of the Earth.\n\n" +
              "(b) Tidal output does rise and fall as the tides come in and go out, so the power is not constant. However, the times and heights of the tides are governed by the predictable motion of the Moon, so they can be calculated accurately far in advance. Because the variation is fully predictable (unlike wind or sunshine), the supply can be planned for and is therefore considered reliable.",
            markScheme: [
              "Geothermal: heat from inside the Earth / radioactive decay (1 mark)",
              "Tidal: gravitational pull of the Moon / Earth's rotation (1 mark)",
              "Tidal power is not constant — rises and falls with the tide (1 mark)",
              "Tides are predictable from the Moon's motion (1 mark)",
              "Predictability means supply can be planned for → reliable (1 mark)",
            ],
            commonError: "Treating 'reliable' as meaning 'constant' — tidal is reliable because it is predictable, not because it is steady.",
            guideRef: "Renewable Energy Resources",
            difficulty: "challenge",
            hints: [
              "Where does the Earth's internal heat come from?",
              "What causes the tides?",
              "Is tidal output constant through the day?",
              "Distinguish 'predictable' from 'constant' when judging reliability.",
            ],
          },
          {
            id: "phys-energy-bq3-09",
            question:
              "A 1.5 kW solar PV array receives 8.0 kW of solar power on a sunny day.\n\n" +
              "(a) Calculate the efficiency of the array. [2]\n" +
              "(b) The owner runs it for an average of 6.0 hours per day. Calculate the useful electrical energy generated per day, in kWh and in joules. [3]",
            marks: 5,
            modelAnswer:
              "(a) Efficiency = (useful/total) × 100% = (1.5/8.0) × 100% = 18.75% ≈ 19%.\n\n" +
              "(b) Energy per day = power × time = 1.5 kW × 6.0 h = 9.0 kWh.\n" +
              "In joules: 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J, so 9.0 kWh = 9.0 × 3.6 × 10⁶ = 3.24 × 10⁷ J.",
            markScheme: [
              "Efficiency = (1.5/8.0) × 100% (1 mark)",
              "= 18.75% ≈ 19% (1 mark)",
              "Energy = 1.5 × 6.0 = 9.0 kWh (1 mark)",
              "Uses 1 kWh = 3.6 × 10⁶ J (1 mark)",
              "= 3.24 × 10⁷ J (1 mark)",
            ],
            commonError: "Forgetting that 1 kWh = 3.6 × 10⁶ J (not 3600 J) when converting to joules.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "challenge",
            hints: [
              "Part (a): efficiency = useful output power / input power × 100%.",
              "Part (b): energy = power × time (kW × h = kWh).",
              "To convert kWh to J: 1 kWh = 1000 × 3600 J.",
              "9.0 × 3.6 × 10⁶ J.",
            ],
            solutions: [
              {
                label: "Efficiency and energy",
                steps: [
                  "Efficiency = (1.5/8.0) × 100% = 18.75% ≈ 19%",
                  "Energy = 1.5 kW × 6.0 h = 9.0 kWh",
                  "1 kWh = 1000 × 3600 = 3.6 × 10⁶ J",
                  "9.0 kWh = 9.0 × 3.6 × 10⁶ = 3.24 × 10⁷ J",
                ],
              },
            ],
            strategy: "Energy = power × time; convert kWh to J using 3.6 × 10⁶",
          },
          {
            id: "phys-energy-bq3-10",
            question:
              "Burning fossil fuels and burning biofuels both release carbon dioxide.\n\n" +
              "(a) Explain why burning biofuel is often described as 'carbon neutral' whereas burning fossil fuel is not. [3]\n" +
              "(b) Give one reason why, in practice, biofuel may not be completely carbon neutral. [1]",
            marks: 4,
            modelAnswer:
              "(a) Biofuel crops absorb CO₂ from the atmosphere by photosynthesis as they grow. When the biofuel is burned, it releases roughly the same amount of CO₂ that the plants absorbed, so if new crops are grown to replace those burned, there is no net increase in atmospheric CO₂. Fossil fuels, by contrast, release carbon that was locked away underground millions of years ago, adding 'extra' CO₂ to the atmosphere.\n\n" +
              "(b) Energy from fossil fuels is usually used to grow, harvest, process and transport the biofuel, which releases additional CO₂, so it is not truly carbon neutral. (Accept: land cleared to grow crops releases stored carbon.)",
            markScheme: [
              "Biofuel crops absorb CO₂ during growth by photosynthesis (1 mark)",
              "CO₂ released on burning ≈ CO₂ absorbed, so no net increase if replanted (1 mark)",
              "Fossil fuels release carbon stored underground long ago / adds new CO₂ (1 mark)",
              "Practical reason: fuel used to grow/process/transport / land clearance (1 mark)",
            ],
            commonError: "Stating biofuels release no CO₂ — they do; the point is the CO₂ is reabsorbed by replacement crops.",
            guideRef: "Renewable Energy Resources",
            difficulty: "core",
            hints: [
              "What do growing biofuel crops do to atmospheric CO₂?",
              "Compare the CO₂ released on burning with the CO₂ absorbed during growth.",
              "Where did fossil-fuel carbon come from?",
              "Think about the energy used in farming and transport.",
            ],
          },
        ],
      },
      {
        id: "phys-energy-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Synoptic and challenge: multi-step energy, power and efficiency problems across the topic.",
        questions: [
          {
            id: "phys-energy-bq4-01",
            question:
              "A 2.0 kg ball is projected vertically upward and just reaches a height of 5.0 m. (g = 10 N/kg, ignore air resistance.)\n\n" +
              "(a) Calculate the GPE gained at the top. [2]\n" +
              "(b) Hence find the speed at which it was projected. [3]",
            marks: 5,
            modelAnswer:
              "(a) GPE = mgh = 2.0 × 10 × 5.0 = 100 J.\n\n" +
              "(b) KE at launch = GPE at top = 100 J. ½mv² = 100 → v² = (2 × 100)/2.0 = 100 → v = √100 = 10 m/s.",
            markScheme: [
              "GPE = mgh = 2.0 × 10 × 5.0 (1 mark)",
              "= 100 J (1 mark)",
              "KE at launch = GPE = 100 J (1 mark)",
              "½ × 2.0 × v² = 100 → v² = 100 (1 mark)",
              "v = 10 m/s (1 mark)",
            ],
            commonError: "Forgetting the factor of 2: v² = 100, not 50.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "core",
            hints: [
              "Part (a): GPE = mgh with h = 5.0 m.",
              "Part (b): launch KE equals the GPE at the top.",
              "½mv² = 100 → v² = 2 × 100 / m.",
              "Take the square root.",
            ],
            solutions: [
              {
                label: "Energy conservation",
                steps: [
                  "GPE = 2.0 × 10 × 5.0 = 100 J",
                  "KE at launch = 100 J",
                  "½ × 2.0 × v² = 100 → v² = 100",
                  "v = 10 m/s",
                ],
              },
            ],
            strategy: "Launch KE equals GPE at the highest point",
          },
          {
            id: "phys-energy-bq4-02",
            question:
              "A 1200 kg car accelerates from rest to 20 m/s in 8.0 s along a level road.\n\n" +
              "(a) Calculate the kinetic energy gained by the car. [2]\n" +
              "(b) Calculate the average useful power delivered to the car. [2]\n" +
              "(c) The engine is 25% efficient. Calculate the rate at which the fuel supplies energy (the input power). [2]",
            marks: 6,
            modelAnswer:
              "(a) Ek = ½mv² = ½ × 1200 × 20² = ½ × 1200 × 400 = 240 000 J.\n\n" +
              "(b) Useful power = energy/time = 240 000 / 8.0 = 30 000 W (30 kW).\n\n" +
              "(c) Efficiency = useful/input → input = useful/efficiency = 30 000 / 0.25 = 120 000 W (120 kW).",
            markScheme: [
              "Ek = ½ × 1200 × 20² (1 mark)",
              "= 240 000 J (1 mark)",
              "Useful power = 240 000 / 8.0 = 30 000 W (1 mark for method, 1 for answer)",
              "Input = 30 000 / 0.25 (1 mark)",
              "= 120 000 W / 120 kW (1 mark)",
            ],
            commonError: "Multiplying by 0.25 instead of dividing when finding the input power.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "challenge",
            hints: [
              "Part (a): the KE gained is ½mv² (starts from rest).",
              "Part (b): useful power = KE gained / time.",
              "Part (c): input power = useful power / efficiency.",
              "30 000 / 0.25.",
            ],
            solutions: [
              {
                label: "KE, power, then input power",
                steps: [
                  "Ek = ½ × 1200 × 20² = 240 000 J",
                  "Useful power = 240 000 / 8.0 = 30 000 W",
                  "Input power = 30 000 / 0.25 = 120 000 W = 120 kW",
                ],
              },
            ],
            strategy: "KE/time gives useful power; divide by efficiency for fuel input power",
          },
          {
            id: "phys-energy-bq4-03",
            question:
              "Water flows over a waterfall at a rate of 500 kg per second, falling a height of 40 m. A hydroelectric station at the bottom captures this water. (g = 10 N/kg)\n\n" +
              "(a) Calculate the maximum power available from the falling water. [3]\n" +
              "(b) The station has an overall efficiency of 70%. Calculate the electrical power output. [2]",
            marks: 5,
            modelAnswer:
              "(a) GPE lost per second = mgh/t = (500 × 10 × 40) per second = 200 000 W = 200 kW.\n\n" +
              "(b) Electrical power = 0.70 × 200 000 = 140 000 W = 140 kW.",
            markScheme: [
              "Power = mgh per second / mgh/t (1 mark)",
              "= 500 × 10 × 40 (1 mark)",
              "= 200 000 W / 200 kW (1 mark)",
              "Electrical power = 0.70 × 200 000 (1 mark)",
              "= 140 000 W / 140 kW (1 mark)",
            ],
            commonError: "Treating the 500 kg as a one-off mass rather than a flow rate per second (which already gives power).",
            guideRef: "Renewable Energy Resources",
            difficulty: "challenge",
            hints: [
              "The mass given is per second, so mgh per second is a power.",
              "Maximum power = (mass per second) × g × h.",
              "500 × 10 × 40.",
              "Multiply by 0.70 for the electrical output.",
            ],
            solutions: [
              {
                label: "Power from flow rate",
                steps: [
                  "Power available = mgh per second = 500 × 10 × 40 = 200 000 W",
                  "Electrical output = 0.70 × 200 000 = 140 000 W = 140 kW",
                ],
              },
            ],
            strategy: "Mass per second × g × h gives power directly",
          },
          {
            id: "phys-energy-bq4-04",
            question:
              "A 0.020 kg bullet is fired horizontally at 400 m/s into a fixed wooden block and stops after penetrating 0.16 m.\n\n" +
              "(a) Calculate the kinetic energy of the bullet. [2]\n" +
              "(b) Calculate the average resistive force exerted by the wood on the bullet. [3]",
            marks: 5,
            modelAnswer:
              "(a) Ek = ½mv² = ½ × 0.020 × 400² = ½ × 0.020 × 160 000 = 1600 J.\n\n" +
              "(b) Work done by resistive force = KE = F × d → F = W/d = 1600 / 0.16 = 10 000 N.",
            markScheme: [
              "Ek = ½ × 0.020 × 400² (1 mark)",
              "= 1600 J (1 mark)",
              "Work done = KE = F × d (1 mark)",
              "F = 1600 / 0.16 (1 mark)",
              "F = 10 000 N (1 mark)",
            ],
            commonError: "Errors squaring 400 (400² = 160 000, not 1600) or using the wrong distance.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "challenge",
            hints: [
              "Part (a): Ek = ½mv²; square v = 400 carefully.",
              "Part (b): the wood does work equal to the KE to stop the bullet.",
              "Use W = Fd with d = 0.16 m.",
              "F = 1600 / 0.16.",
            ],
            solutions: [
              {
                label: "KE and work-energy",
                steps: [
                  "Ek = ½ × 0.020 × 400² = ½ × 0.020 × 160 000 = 1600 J",
                  "Work done by wood = 1600 J = F × 0.16",
                  "F = 1600 / 0.16 = 10 000 N",
                ],
              },
            ],
            strategy: "Resistive force = KE ÷ penetration distance",
          },
          {
            id: "phys-energy-bq4-05",
            question:
              "A child of mass 40 kg slides down a slide. The top of the slide is 2.5 m above the bottom. The child reaches the bottom at 5.0 m/s. (g = 10 N/kg)\n\n" +
              "(a) Calculate the GPE lost. [2]\n" +
              "(b) Calculate the KE at the bottom. [2]\n" +
              "(c) Calculate the efficiency of the energy transfer (KE gained as a fraction of GPE lost), and state where the 'lost' energy has gone. [2]",
            marks: 6,
            modelAnswer:
              "(a) GPE lost = mgh = 40 × 10 × 2.5 = 1000 J.\n\n" +
              "(b) KE = ½mv² = ½ × 40 × 5.0² = ½ × 40 × 25 = 500 J.\n\n" +
              "(c) Efficiency = (500/1000) × 100% = 50%. The other 500 J is dissipated as thermal energy by friction between the child and the slide (and a little as sound).",
            markScheme: [
              "GPE = mgh = 40 × 10 × 2.5 = 1000 J (1 mark)",
              "KE = ½ × 40 × 5.0² = 500 J (1 mark for method, 1 for answer)",
              "Efficiency = (500/1000) × 100% = 50% (1 mark)",
              "Lost energy dissipated as heat by friction (and sound) (1 mark)",
            ],
            commonError: "Assuming KE at the bottom must equal the GPE lost — friction means only part is transferred to KE.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "core",
            hints: [
              "Part (a): GPE = mgh.",
              "Part (b): KE = ½mv² with v = 5.0 m/s.",
              "Part (c): efficiency = KE gained / GPE lost × 100%.",
              "Where does the missing energy go on a real slide?",
            ],
            solutions: [
              {
                label: "Energy audit and efficiency",
                steps: [
                  "GPE lost = 40 × 10 × 2.5 = 1000 J",
                  "KE = ½ × 40 × 5.0² = 500 J",
                  "Efficiency = (500/1000) × 100% = 50%",
                  "500 J dissipated as heat by friction",
                ],
              },
            ],
            strategy: "Efficiency = KE gained ÷ GPE lost; the rest is dissipated by friction",
          },
          {
            id: "phys-energy-bq4-06",
            question:
              "An electric train of mass 2.0 × 10⁵ kg climbs a hill, rising 60 m while also accelerating from 10 m/s to 30 m/s. (g = 10 N/kg, ignore resistive losses.)\n\n" +
              "(a) Calculate the GPE gained. [2]\n" +
              "(b) Calculate the increase in kinetic energy. [2]\n" +
              "(c) Calculate the total useful work the motors must do. [1]",
            marks: 5,
            modelAnswer:
              "(a) GPE gained = mgh = 2.0 × 10⁵ × 10 × 60 = 1.2 × 10⁸ J.\n\n" +
              "(b) ΔKE = ½m(v² − u²) = ½ × 2.0 × 10⁵ × (30² − 10²) = ½ × 2.0 × 10⁵ × (900 − 100) = ½ × 2.0 × 10⁵ × 800 = 8.0 × 10⁷ J.\n\n" +
              "(c) Total useful work = GPE gained + ΔKE = 1.2 × 10⁸ + 8.0 × 10⁷ = 2.0 × 10⁸ J.",
            markScheme: [
              "GPE = mgh = 2.0 × 10⁵ × 10 × 60 = 1.2 × 10⁸ J (1 mark method, 1 answer)",
              "ΔKE = ½m(v² − u²) with (900 − 100) (1 mark)",
              "= 8.0 × 10⁷ J (1 mark)",
              "Total = 1.2 × 10⁸ + 8.0 × 10⁷ = 2.0 × 10⁸ J (1 mark)",
            ],
            commonError: "Using the final KE (½mv²) rather than the CHANGE in KE ½m(v² − u²).",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "challenge",
            hints: [
              "Part (a): GPE = mgh; mind the powers of ten.",
              "Part (b): use the CHANGE in KE, ½m(v² − u²).",
              "(30² − 10²) = 900 − 100 = 800.",
              "Part (c): add the GPE and KE increases.",
            ],
            solutions: [
              {
                label: "Combined GPE and KE work",
                steps: [
                  "GPE = 2.0 × 10⁵ × 10 × 60 = 1.2 × 10⁸ J",
                  "ΔKE = ½ × 2.0 × 10⁵ × (900 − 100) = ½ × 2.0 × 10⁵ × 800 = 8.0 × 10⁷ J",
                  "Total work = 1.2 × 10⁸ + 8.0 × 10⁷ = 2.0 × 10⁸ J",
                ],
              },
            ],
            strategy: "Total useful work = GPE gained + change in KE",
          },
          {
            id: "phys-energy-bq4-07",
            question:
              "A pole-vaulter of mass 60 kg sprints at 9.0 m/s and converts kinetic energy into gravitational potential energy to clear the bar. (g = 10 N/kg, ignore other energy inputs.)\n\n" +
              "(a) Calculate the maximum height the centre of mass could be raised if all the kinetic energy became GPE. [4]\n" +
              "(b) Suggest why a real vaulter clears a bar slightly lower than this maximum. [1]",
            marks: 5,
            modelAnswer:
              "(a) KE = ½mv² = ½ × 60 × 9.0² = ½ × 60 × 81 = 2430 J.\n" +
              "Setting GPE = KE: mgh = 2430 → 60 × 10 × h = 2430 → 600h = 2430 → h = 4.05 m.\n\n" +
              "(b) In practice some energy is dissipated (e.g. to heat/sound, or not all the run-up speed is converted), so the real height is a little lower.",
            markScheme: [
              "KE = ½ × 60 × 9.0² (1 mark)",
              "= 2430 J (1 mark)",
              "mgh = 2430 → 600h = 2430 (1 mark)",
              "h = 4.05 m (1 mark)",
              "Energy dissipated / not all KE converted, so lower in practice (1 mark)",
            ],
            commonError: "Cancelling the mass too early and then re-introducing it inconsistently — note h = v²/(2g) = 81/20 = 4.05 m also works.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "challenge",
            hints: [
              "Find the kinetic energy of the run-up.",
              "Set the KE equal to the GPE: ½mv² = mgh.",
              "Either solve 600h = 2430, or use h = v²/(2g).",
              "Why would a real vaulter not reach this exact height?",
            ],
            solutions: [
              {
                label: "KE to GPE conversion",
                steps: [
                  "KE = ½ × 60 × 9.0² = 2430 J",
                  "mgh = 2430 → 60 × 10 × h = 2430",
                  "h = 2430 / 600 = 4.05 m",
                  "(Check: h = v²/(2g) = 81/20 = 4.05 m)",
                ],
              },
            ],
            strategy: "Maximum height: set ½mv² = mgh, so h = v²/(2g)",
          },
          {
            id: "phys-energy-bq4-08",
            question:
              "A wind turbine has blades that sweep an area through which the wind delivers 90 kW of kinetic power. The turbine converts 35% of this to mechanical power, and the generator is then 90% efficient.\n\n" +
              "(a) Calculate the electrical power output. [3]\n" +
              "(b) Calculate the overall efficiency of the turbine-generator system. [2]",
            marks: 5,
            modelAnswer:
              "(a) Mechanical power = 0.35 × 90 = 31.5 kW. Electrical power = 0.90 × 31.5 = 28.35 kW ≈ 28.4 kW.\n\n" +
              "(b) Overall efficiency = 0.35 × 0.90 = 0.315 = 31.5%. (Check: 28.35 / 90 = 0.315.)",
            markScheme: [
              "Mechanical power = 0.35 × 90 = 31.5 kW (1 mark)",
              "Electrical power = 0.90 × 31.5 (1 mark)",
              "= 28.35 kW / 28.4 kW (1 mark)",
              "Overall efficiency = 0.35 × 0.90 (1 mark)",
              "= 0.315 = 31.5% (1 mark)",
            ],
            commonError: "Adding the efficiencies or averaging them instead of multiplying the decimals.",
            guideRef: "Efficiency of Electricity Generation",
            difficulty: "challenge",
            hints: [
              "Apply the 35% to the 90 kW first.",
              "Then apply the 90% to that mechanical power.",
              "Overall efficiency multiplies the two stages: 0.35 × 0.90.",
              "Check that output/input gives the same overall efficiency.",
            ],
            solutions: [
              {
                label: "Stage-by-stage",
                steps: [
                  "Mechanical power = 0.35 × 90 = 31.5 kW",
                  "Electrical power = 0.90 × 31.5 = 28.35 kW",
                  "Overall efficiency = 0.35 × 0.90 = 0.315 = 31.5%",
                ],
              },
            ],
            strategy: "Multiply the stage efficiencies for the overall value",
          },
          {
            id: "phys-energy-bq4-09",
            question:
              "A 500 W immersion heater is used to warm water. It runs for 4.0 minutes. Of the energy supplied, 12 000 J is wasted to the surroundings rather than heating the water.\n\n" +
              "(a) Calculate the total electrical energy supplied. [2]\n" +
              "(b) Calculate the useful energy transferred to the water. [2]\n" +
              "(c) Calculate the efficiency of the heater. [2]",
            marks: 6,
            modelAnswer:
              "(a) E = Pt = 500 × (4.0 × 60) = 500 × 240 = 120 000 J.\n\n" +
              "(b) Useful energy = total − wasted = 120 000 − 12 000 = 108 000 J.\n\n" +
              "(c) Efficiency = (useful/total) × 100% = (108 000/120 000) × 100% = 90%.",
            markScheme: [
              "E = Pt with t = 240 s (1 mark)",
              "= 120 000 J (1 mark)",
              "Useful = 120 000 − 12 000 = 108 000 J (1 mark for method, 1 for answer)",
              "Efficiency = (108 000/120 000) × 100% (1 mark)",
              "= 90% (1 mark)",
            ],
            commonError: "Forgetting to convert 4.0 minutes to 240 s before using E = Pt.",
            guideRef: "Work Done, Power and Efficiency",
            difficulty: "core",
            hints: [
              "Convert 4.0 minutes to seconds first.",
              "Part (a): E = Pt.",
              "Part (b): useful = total − wasted.",
              "Part (c): efficiency = useful / total × 100%.",
            ],
            solutions: [
              {
                label: "Energy and efficiency",
                steps: [
                  "t = 4.0 × 60 = 240 s",
                  "E = Pt = 500 × 240 = 120 000 J",
                  "Useful = 120 000 − 12 000 = 108 000 J",
                  "Efficiency = (108 000/120 000) × 100% = 90%",
                ],
              },
            ],
            strategy: "E = Pt for total; subtract waste; then useful/total for efficiency",
          },
          {
            id: "phys-energy-bq4-10",
            question:
              "A 0.30 kg ball is dropped from a height of 2.0 m. It rebounds, and on each bounce it returns to 64% of its previous height. (g = 10 N/kg)\n\n" +
              "(a) Calculate the GPE of the ball before the first drop. [2]\n" +
              "(b) Calculate the height to which it rises after the FIRST bounce. [2]\n" +
              "(c) Calculate the energy dissipated during the first bounce. [2]",
            marks: 6,
            modelAnswer:
              "(a) GPE = mgh = 0.30 × 10 × 2.0 = 6.0 J.\n\n" +
              "(b) Height after first bounce = 0.64 × 2.0 = 1.28 m.\n\n" +
              "(c) GPE after first bounce = 0.30 × 10 × 1.28 = 3.84 J. Energy dissipated = 6.0 − 3.84 = 2.16 J.",
            markScheme: [
              "GPE = mgh = 0.30 × 10 × 2.0 = 6.0 J (1 mark method, 1 answer)",
              "Height after bounce = 0.64 × 2.0 = 1.28 m (1 mark)",
              "GPE after bounce = 0.30 × 10 × 1.28 = 3.84 J (1 mark)",
              "Energy dissipated = 6.0 − 3.84 = 2.16 J (1 mark)",
            ],
            commonError: "Taking 64% of the energy and 64% of the height as different things — since GPE ∝ h, the GPE after the bounce is also 64% of 6.0 J = 3.84 J.",
            guideRef: "Conservation of Energy and Key Equations",
            difficulty: "challenge",
            hints: [
              "Part (a): GPE = mgh at 2.0 m.",
              "Part (b): the rebound height is 64% of 2.0 m.",
              "Part (c): find the GPE at the rebound height, then subtract from the start.",
              "Energy dissipated = 6.0 − 3.84.",
            ],
            solutions: [
              {
                label: "Bounce energy audit",
                steps: [
                  "GPE before = 0.30 × 10 × 2.0 = 6.0 J",
                  "Rebound height = 0.64 × 2.0 = 1.28 m",
                  "GPE after = 0.30 × 10 × 1.28 = 3.84 J",
                  "Dissipated = 6.0 − 3.84 = 2.16 J",
                ],
              },
            ],
            strategy: "Since GPE ∝ h, the rebound GPE is 64% of the original",
          },
        ],
      },
    ],
  },
};
