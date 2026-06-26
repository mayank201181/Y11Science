import type { Topic } from "../types";

export const physThermal: Topic = {
  id: "phys-thermal",
  title: "Thermal Physics",
  subject: "physics",
  icon: "🌡️",
  blurb: "Kinetic particle model, thermal expansion, gas laws, specific heat, latent heat, and heat transfer by conduction, convection and radiation.",
  intro: "Everything you feel as 'hot' or 'cold' comes down to the random motion of particles. In this topic you will build the kinetic particle model from the ground up, use it to explain pressure, thermal expansion, and changes of state, and master three distinct mechanisms by which thermal energy moves from place to place — conduction, convection, and radiation.",

  guide: [
    {
      heading: "The Kinetic Particle Model",
      body: `Matter is made of tiny particles (atoms or molecules) in constant, random motion. The **kinetic particle model** describes the three states of matter in terms of how those particles are arranged, how far apart they are, and how they move.

**Solid**: particles are closely packed in a regular lattice. They vibrate about fixed positions but cannot move past one another. The forces between them are strong and the separation is at its minimum.

**Liquid**: particles are still close together (similar density to solid) but the arrangement is random and irregular. Particles can slide past one another, giving liquids their ability to flow. Forces are weaker than in a solid.

**Gas**: particles are widely separated — typically ten times the diameter of the particles themselves. They move rapidly and randomly in all directions with negligible forces between them (except during brief collisions). Gases fill any container and are highly compressible.

**Brownian motion** is the random, jittery movement of visible particles (e.g. smoke grains, pollen in water) caused by unequal bombardment by the invisible, fast-moving surrounding molecules. It is direct evidence that fluids consist of moving particles.`,
      diagrams: [
        {
          caption: "Particle arrangement in solids, liquids, and gases",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Particle arrangement in the three states of matter">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Solid box -->
  <rect x="8" y="30" width="90" height="90" rx="4" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="53" y="22" text-anchor="middle" fill="#38bdf8" font-size="11" font-family="sans-serif">SOLID</text>
  <!-- Solid particles in lattice -->
  <circle cx="24" cy="46" r="8" fill="#38bdf8" opacity="0.85"/>
  <circle cx="48" cy="46" r="8" fill="#38bdf8" opacity="0.85"/>
  <circle cx="72" cy="46" r="8" fill="#38bdf8" opacity="0.85"/>
  <circle cx="24" cy="70" r="8" fill="#38bdf8" opacity="0.85"/>
  <circle cx="48" cy="70" r="8" fill="#38bdf8" opacity="0.85"/>
  <circle cx="72" cy="70" r="8" fill="#38bdf8" opacity="0.85"/>
  <circle cx="24" cy="94" r="8" fill="#38bdf8" opacity="0.85"/>
  <circle cx="48" cy="94" r="8" fill="#38bdf8" opacity="0.85"/>
  <circle cx="72" cy="94" r="8" fill="#38bdf8" opacity="0.85"/>
  <text x="53" y="135" text-anchor="middle" fill="#b7bce0" font-size="9" font-family="sans-serif">Regular lattice</text>
  <text x="53" y="148" text-anchor="middle" fill="#b7bce0" font-size="9" font-family="sans-serif">vibrate only</text>
  <!-- Liquid box -->
  <rect x="113" y="30" width="90" height="90" rx="4" fill="none" stroke="#34d399" stroke-width="1.5"/>
  <text x="158" y="22" text-anchor="middle" fill="#34d399" font-size="11" font-family="sans-serif">LIQUID</text>
  <!-- Liquid particles random close -->
  <circle cx="128" cy="44" r="8" fill="#34d399" opacity="0.85"/>
  <circle cx="152" cy="50" r="8" fill="#34d399" opacity="0.85"/>
  <circle cx="174" cy="42" r="8" fill="#34d399" opacity="0.85"/>
  <circle cx="133" cy="68" r="8" fill="#34d399" opacity="0.85"/>
  <circle cx="158" cy="72" r="8" fill="#34d399" opacity="0.85"/>
  <circle cx="178" cy="65" r="8" fill="#34d399" opacity="0.85"/>
  <circle cx="125" cy="92" r="8" fill="#34d399" opacity="0.85"/>
  <circle cx="149" cy="96" r="8" fill="#34d399" opacity="0.85"/>
  <circle cx="172" cy="90" r="8" fill="#34d399" opacity="0.85"/>
  <text x="158" y="135" text-anchor="middle" fill="#b7bce0" font-size="9" font-family="sans-serif">Random, close</text>
  <text x="158" y="148" text-anchor="middle" fill="#b7bce0" font-size="9" font-family="sans-serif">slide past each other</text>
  <!-- Gas box -->
  <rect x="218" y="30" width="90" height="90" rx="4" fill="none" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="263" y="22" text-anchor="middle" fill="#a78bfa" font-size="11" font-family="sans-serif">GAS</text>
  <!-- Gas particles sparse with arrows -->
  <circle cx="232" cy="42" r="5" fill="#a78bfa" opacity="0.85"/>
  <line x1="237" y1="38" x2="248" y2="32" stroke="#a78bfa" stroke-width="1" marker-end="url(#arr)"/>
  <circle cx="268" cy="55" r="5" fill="#a78bfa" opacity="0.85"/>
  <line x1="263" y1="52" x2="252" y2="44" stroke="#a78bfa" stroke-width="1"/>
  <circle cx="292" cy="40" r="5" fill="#a78bfa" opacity="0.85"/>
  <line x1="292" y1="45" x2="290" y2="58" stroke="#a78bfa" stroke-width="1"/>
  <circle cx="240" cy="85" r="5" fill="#a78bfa" opacity="0.85"/>
  <line x1="244" y1="81" x2="256" y2="74" stroke="#a78bfa" stroke-width="1"/>
  <circle cx="280" cy="80" r="5" fill="#a78bfa" opacity="0.85"/>
  <line x1="285" y1="78" x2="296" y2="70" stroke="#a78bfa" stroke-width="1"/>
  <circle cx="258" cy="108" r="5" fill="#a78bfa" opacity="0.85"/>
  <text x="263" y="135" text-anchor="middle" fill="#b7bce0" font-size="9" font-family="sans-serif">Widely spaced</text>
  <text x="263" y="148" text-anchor="middle" fill="#b7bce0" font-size="9" font-family="sans-serif">rapid random motion</text>
  <!-- Legend -->
  <text x="160" y="190" text-anchor="middle" fill="#b7bce0" font-size="9" font-family="sans-serif">Particle sizes and separations are schematic only</text>
</svg>`
        }
      ],
      keyPoints: [
        "Solids: closely packed, regular lattice, vibrate about fixed positions.",
        "Liquids: closely packed but random; particles can slide past each other.",
        "Gases: widely separated, rapid random motion in all directions.",
        "Brownian motion — random jittery motion of visible particles — is direct evidence for the kinetic model.",
        "The average kinetic energy of particles determines the temperature of a substance."
      ],
      discovery: {
        problem: "A smoke cell is illuminated under a microscope. You see tiny bright specks darting about randomly. The specks are much larger than air molecules. Why do they move at all, and why is the motion random rather than in one direction?",
        idea: "The smoke particles are bombarded from all sides by fast-moving, invisible air molecules. Because the molecules are so small and numerous, at any instant more collisions happen on one side than the other by chance — the net force direction changes constantly, producing the characteristic jittery Brownian motion."
      },
      whyItWorks: "For Brownian motion to be truly random, the bombarding particles must themselves be moving randomly in all directions. If they had a preferred direction (e.g. a wind), the smoke grains would drift systematically. The observed randomness therefore confirms that thermal motion is disordered — a cornerstone of the kinetic theory.",
      strategies: ["visualise particle scale", "link observation to mechanism"]
    },

    {
      heading: "Temperature, Internal Energy and Thermal Expansion",
      body: `**Temperature** is a measure of the average kinetic energy of the particles in a substance. Higher temperature means particles move faster on average. Temperature is measured in °C or kelvin (K); T(K) = T(°C) + 273.

**Internal energy** is the total energy stored by all the particles in a substance. It is the sum of their kinetic energies (random motion) and potential energies (arising from the forces between particles). Heating a substance increases internal energy either by raising temperature (faster particles) or by separating particles against intermolecular forces (as during melting or boiling — temperature stays constant while potential energy increases).

**Thermal expansion** occurs because raising the temperature increases the average speed of vibration of particles, which increases the average separation between them. As a result, the substance occupies more volume.

- Gases expand most on heating (particles are already far apart and the increased pressure forces them further apart).
- Liquids expand more than solids (less strong bonding allows greater increase in separation).
- Solids expand least (strong lattice bonds resist separation).

**Everyday uses and consequences:**
- Gaps in railway tracks and concrete roads allow for thermal expansion.
- Bimetallic strips (two metals bonded, different expansion rates) bend on heating — used in thermostats and fire alarms.
- Liquid-in-glass thermometers rely on liquid expansion along a calibrated tube.
- Overhead electrical cables are strung with slack for summer expansion.`,
      keyPoints: [
        "Temperature measures average kinetic energy of particles; it is NOT the same as internal energy.",
        "Internal energy = sum of kinetic energies + potential energies of all particles.",
        "Thermal expansion happens because higher temperature means greater average particle separation.",
        "Gases expand more than liquids, which expand more than solids, for the same temperature rise.",
        "Bimetallic strips exploit differential expansion of two metals bonded together."
      ],
      discovery: {
        problem: "Two identical glass bottles are filled with air at room temperature. One is then placed in hot water. After a minute, a balloon is stretched over the neck of the hot bottle. Predict what happens to the balloon, and explain why using the kinetic model.",
        idea: "The balloon inflates slightly. Heating the air inside increases the average speed of the gas molecules. They collide with the bottle walls and balloon with greater force and frequency, increasing pressure. The increased pressure pushes the balloon outward until a new equilibrium is reached at a larger volume."
      },
      whyItWorks: "At constant pressure, a gas at higher temperature has faster-moving molecules. To maintain the same collision rate per unit area (constant pressure), the molecules must spread out — i.e. the volume increases. This is the molecular basis of Charles's Law (V proportional to T at constant p), itself a consequence of the kinetic theory.",
      thinkDeeper: "In a solid, particles vibrate asymmetrically in their potential energy wells: it costs more energy to push two particles together than to pull them apart. This asymmetry means the average position shifts outward as energy increases — that is the microscopic origin of thermal expansion in solids.",
      strategies: ["link macroscopic observation to particle-level explanation", "identify what is constant vs what changes"]
    },

    {
      heading: "Gas Pressure and Boyle's Law",
      body: `**Gas pressure** arises from the force exerted by gas molecules colliding with the walls of their container. Every collision transfers momentum to the wall; the average of billions of such collisions per second gives a steady pressure.

**Effect of temperature (constant volume):** Raising temperature increases the average speed of molecules, so collisions are more frequent and harder — pressure increases.

**Effect of volume (constant temperature):** Compressing the gas into a smaller volume means the molecules hit the walls more often per second (less distance to travel between collisions) — pressure increases.

**Boyle's Law** (constant temperature): For a fixed mass of gas at constant temperature, pressure and volume are inversely proportional:

> **pV = constant**, or equivalently **p₁V₁ = p₂V₂**

where p is in Pa and V is in m³ (or any consistent unit pair such as kPa and cm³).

**Worked example:** A gas at 2.0 × 10⁵ Pa occupies 0.30 m³. The gas is compressed at constant temperature until its volume is 0.10 m³. Find the new pressure.

p₁V₁ = p₂V₂
(2.0 × 10⁵)(0.30) = p₂ × 0.10
p₂ = 6.0 × 10⁴ / 0.10 = **6.0 × 10⁵ Pa**`,
      diagrams: [
        {
          caption: "Boyle's Law: p–V graph shows inverse relationship at constant temperature",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Boyle's Law pressure-volume graph showing hyperbolic curve">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Axes -->
  <line x1="50" y1="20" x2="50" y2="170" stroke="#b7bce0" stroke-width="1.5"/>
  <line x1="50" y1="170" x2="300" y2="170" stroke="#b7bce0" stroke-width="1.5"/>
  <!-- Axis labels -->
  <text x="26" y="100" fill="#b7bce0" font-size="11" font-family="sans-serif" transform="rotate(-90 26 100)">Pressure p / Pa</text>
  <text x="175" y="193" text-anchor="middle" fill="#b7bce0" font-size="11" font-family="sans-serif">Volume V / m3</text>
  <!-- Hyperbola pV = constant: points (V, p) proportional to (1/V) -->
  <!-- Using scaled coords: x = 50 + V*220, y = 170 - p*130, with V in [0.1,1.0] p=1/V -->
  <polyline points="72,22 80,30 90,40 103,54 120,70 140,88 165,108 192,128 220,146 250,162 280,172" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
  <!-- Labels on curve -->
  <text x="78" y="18" fill="#fbbf24" font-size="9" font-family="sans-serif">High p, low V</text>
  <text x="220" y="158" fill="#fbbf24" font-size="9" font-family="sans-serif">Low p, high V</text>
  <!-- pV label -->
  <text x="160" y="50" fill="#fbbf24" font-size="10" font-family="sans-serif">pV = constant</text>
  <!-- tick marks -->
  <line x1="47" y1="170" x2="53" y2="170" stroke="#b7bce0" stroke-width="1"/>
  <text x="50" y="183" text-anchor="middle" fill="#b7bce0" font-size="8" font-family="sans-serif">0</text>
  <!-- Title -->
  <text x="160" y="12" text-anchor="middle" fill="#eef0ff" font-size="12" font-family="sans-serif" font-weight="bold">Boyle's Law (constant T)</text>
</svg>`
        }
      ],
      keyPoints: [
        "Gas pressure is caused by molecules colliding with container walls.",
        "Pressure increases if temperature rises (at constant volume) — faster, more frequent collisions.",
        "Pressure increases if volume decreases (at constant temperature) — more collisions per unit time.",
        "Boyle's Law: pV = constant at constant temperature for a fixed mass of gas.",
        "Apply Boyle's Law as p₁V₁ = p₂V₂; check units are consistent."
      ],
      whyItWorks: "For an ideal gas at constant temperature, the average kinetic energy of each molecule is fixed. Halving the volume halves the mean free path between wall collisions, so each molecule hits the walls twice as often. With twice the collision rate, pressure doubles — hence p is inversely proportional to V.",
      strategies: ["identify what is constant", "set up ratio equation", "unit check before substituting"]
    },

    {
      heading: "Specific Heat Capacity and Latent Heat",
      body: `**Specific heat capacity (c)** is the energy needed to raise the temperature of 1 kg of a substance by 1 °C (or 1 K). It has units J/(kg °C) or J/(kg K).

> **E = mcΔT**

where E = energy transferred (J), m = mass (kg), c = specific heat capacity (J kg⁻¹ K⁻¹), ΔT = temperature change (K or °C).

Water has a very high specific heat capacity (4200 J kg⁻¹ K⁻¹), which is why it is used as a coolant in car engines and why coastal climates are mild.

**Changes of state** occur at constant temperature because the energy supplied changes the potential energy of the particles (breaks or forms intermolecular bonds) rather than their kinetic energy:

- **Melting**: solid → liquid at the melting point. Energy breaks the regular lattice bonds.
- **Boiling**: liquid → gas at the boiling point. Energy overcomes all intermolecular attractions to separate particles fully.
- **Evaporation** differs from boiling: it occurs at **any temperature** at the surface of a liquid when some molecules have enough kinetic energy to escape. The fastest molecules escape first, lowering the average kinetic energy of those remaining — the liquid **cools**.

**Specific latent heat (L)** is the energy required to change the state of 1 kg of a substance without changing its temperature.

> **E = mL**

- Specific latent heat of **fusion** (L_f): solid ↔ liquid
- Specific latent heat of **vaporisation** (L_v): liquid ↔ gas

**Worked example:** How much energy is needed to melt 0.50 kg of ice? (L_f of water = 3.34 × 10⁵ J/kg)

E = mL = 0.50 × 3.34 × 10⁵ = **1.67 × 10⁵ J**`,
      keyPoints: [
        "E = mcΔT; specific heat capacity c has units J kg⁻¹ K⁻¹.",
        "During a change of state, temperature is constant — energy changes potential energy, not kinetic energy.",
        "Melting: solid → liquid; boiling: liquid → gas (at the boiling point only).",
        "Evaporation occurs at any temperature at the liquid surface; it causes cooling.",
        "E = mL for latent heat; distinguish fusion (melting) from vaporisation (boiling)."
      ],
      discovery: {
        problem: "You heat 1 kg of water and 1 kg of sand side by side under identical lamps. After 10 minutes the sand is scalding but the water is barely warm. Both received the same energy. How can that be?",
        idea: "Sand has a much lower specific heat capacity than water (~800 vs 4200 J kg⁻¹ K⁻¹). For the same energy input, the smaller c of sand means a much larger temperature rise (ΔT = E / mc). The formula E = mcΔT reveals that c is the energy cost per kilogram per degree — different materials have fundamentally different costs."
      },
      whyItWorks: "At the particle level, a material's specific heat capacity depends on how many ways the particles can absorb energy (translational, rotational, vibrational modes) and on the strength of the bonds between them. Water molecules form hydrogen bonds and have several vibrational modes, giving them a high capacity to store energy with little temperature rise.",
      thinkDeeper: "Evaporative cooling is exploited in sweating (humans), panting (dogs), and the wet-bulb thermometer. The effect is strongest in dry air (low humidity) because when the air is already saturated with water vapour, evaporation slows. Latent heat of vaporisation of water is about 2.26 MJ/kg — far greater than its latent heat of fusion (~0.33 MJ/kg) — reflecting how much more energy is needed to fully separate water molecules than to merely disorder the lattice.",
      strategies: ["identify which formula to use", "check temperature change vs temperature level", "dimensional analysis"]
    },

    {
      heading: "Conduction and Convection",
      body: `**Thermal conduction** is the transfer of thermal energy through a material by particle-to-particle interaction, without the bulk movement of the material.

In **non-metals**, conduction is by lattice vibration: energetic particles vibrate more vigorously and pass energy to their neighbours by collision.

In **metals**, conduction is faster because of **free (delocalised) electrons**. These electrons are not bound to individual atoms; they move rapidly throughout the metal and carry kinetic energy from hot regions to cool regions quickly. This is why metals are much better thermal conductors than non-metals.

Good conductors: metals (copper, aluminium, iron).
Poor conductors (insulators): wood, wool, air, expanded polystyrene, glass fibre.

**Trapped air** is an excellent insulator because air has a very low specific heat capacity and the molecules are too far apart to transfer energy efficiently; crucially, if the air is trapped, convection is also prevented.

**Thermal convection** is the transfer of thermal energy through a fluid (liquid or gas) by the bulk movement of the fluid itself.

Mechanism:
1. A region of fluid is heated, particles gain kinetic energy and move further apart — the fluid **expands** and its **density decreases**.
2. The less dense, warmer fluid **rises**; cooler, denser fluid sinks to replace it.
3. A **convection current** is set up, continuously circulating and carrying thermal energy through the fluid.

Convection cannot occur in solids because the particles cannot move from place to place.`,
      diagrams: [
        {
          caption: "Convection current in a heated liquid — warmer fluid rises, cooler fluid sinks",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of a convection current in a beaker of liquid heated from below, showing circulation arrows">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Beaker outline -->
  <rect x="60" y="30" width="200" height="140" rx="4" fill="none" stroke="#b7bce0" stroke-width="2"/>
  <!-- Liquid fill -->
  <rect x="61" y="31" width="198" height="138" rx="3" fill="#1e3a5f" opacity="0.6"/>
  <!-- Heat source below -->
  <rect x="60" y="172" width="200" height="16" rx="3" fill="#fb7185" opacity="0.7"/>
  <text x="160" y="183" text-anchor="middle" fill="#eef0ff" font-size="10" font-family="sans-serif">HEAT SOURCE</text>
  <!-- Hot region at bottom -->
  <rect x="61" y="140" width="198" height="29" rx="0" fill="#fb7185" opacity="0.2"/>
  <text x="160" y="157" text-anchor="middle" fill="#fb7185" font-size="9" font-family="sans-serif">Hot, less dense</text>
  <!-- Cool region at top -->
  <rect x="61" y="31" width="198" height="30" rx="0" fill="#38bdf8" opacity="0.15"/>
  <text x="160" y="48" text-anchor="middle" fill="#38bdf8" font-size="9" font-family="sans-serif">Cool, more dense</text>
  <!-- Convection arrows: left side going UP (hot rises) -->
  <polyline points="100,160 100,70" fill="none" stroke="#fb7185" stroke-width="2" marker-end="url(#up)"/>
  <!-- Arrow head up left -->
  <polygon points="100,55 94,72 106,72" fill="#fb7185"/>
  <text x="72" y="110" fill="#fb7185" font-size="9" font-family="sans-serif" transform="rotate(-90 72 110)">rises</text>
  <!-- Arrows at top going RIGHT -->
  <polyline points="100,62 220,62" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <polygon points="226,62 210,56 210,68" fill="#38bdf8"/>
  <!-- Arrows right side going DOWN (cool sinks) -->
  <polyline points="220,62 220,155" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <polygon points="220,160 214,144 226,144" fill="#38bdf8"/>
  <text x="236" y="110" fill="#38bdf8" font-size="9" font-family="sans-serif" transform="rotate(90 236 110)">sinks</text>
  <!-- Arrows at bottom going LEFT -->
  <polyline points="220,155 100,155" fill="none" stroke="#fbbf24" stroke-width="2"/>
  <polygon points="94,155 110,149 110,161" fill="#fbbf24"/>
  <!-- Label -->
  <text x="160" y="15" text-anchor="middle" fill="#eef0ff" font-size="12" font-family="sans-serif" font-weight="bold">Convection Current</text>
  <!-- Density labels -->
  <text x="252" y="155" fill="#fb7185" font-size="8" font-family="sans-serif">low density</text>
  <text x="252" y="68" fill="#38bdf8" font-size="8" font-family="sans-serif">high density</text>
</svg>`
        }
      ],
      keyPoints: [
        "Conduction transfers energy by particle vibration and (in metals) by free electron movement.",
        "Metals are good conductors because free electrons carry energy rapidly throughout the lattice.",
        "Convection transfers energy by bulk movement of a fluid driven by density differences.",
        "Warm fluid is less dense and rises; cool fluid is denser and sinks — forming a convection current.",
        "Convection cannot occur in solids; trapped air prevents convection (making it a good insulator)."
      ],
      strategies: ["trace energy pathway step by step", "identify what moves: particles or bulk fluid"]
    },

    {
      heading: "Thermal Radiation and Applications",
      body: `**Thermal radiation** (infrared radiation) is the transfer of thermal energy by electromagnetic waves. It requires **no medium** — it can travel through a vacuum (e.g. from the Sun to Earth).

All objects emit thermal radiation. The rate of emission depends on:
- **Temperature**: hotter objects emit more radiation and at shorter peak wavelengths.
- **Surface properties**: dull (matt) black surfaces are the best emitters and the best absorbers of radiation. Shiny (polished) white/silver surfaces are the poorest emitters and poorest absorbers (best reflectors).

**Practical applications:**
- **Vacuum (Thermos) flask**: minimises all three modes of heat transfer. The vacuum prevents conduction and convection. The silvered inner walls minimise radiation both in and out.
- **Solar panels/collectors**: matt black surfaces to maximise absorption of solar radiation.
- **Radiators**: painted white in homes — misleading name; most heat transfer from a household radiator is actually by convection from the hot surface, not radiation.
- **House insulation**: loft insulation (glass fibre or mineral wool with trapped air) reduces conduction and convection; reflective foil barriers reduce radiation.
- **Greenhouse effect**: glass/CO₂ is transparent to short-wave solar radiation but absorbs long-wave infrared re-emitted by Earth, trapping energy.`,
      diagrams: [
        {
          caption: "The three mechanisms of thermal energy transfer: conduction, convection, radiation",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three modes of heat transfer: conduction through a metal rod, convection in a fluid, and radiation from a hot body">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- CONDUCTION panel -->
  <text x="52" y="18" text-anchor="middle" fill="#38bdf8" font-size="10" font-family="sans-serif" font-weight="bold">CONDUCTION</text>
  <!-- metal rod -->
  <rect x="8" y="22" width="88" height="20" rx="3" fill="#334155"/>
  <!-- hot end -->
  <rect x="8" y="22" width="22" height="20" rx="3" fill="#fb7185" opacity="0.9"/>
  <text x="19" y="35" text-anchor="middle" fill="#eef0ff" font-size="8" font-family="sans-serif">HOT</text>
  <!-- cold end -->
  <rect x="74" y="22" width="22" height="20" rx="3" fill="#38bdf8" opacity="0.7"/>
  <text x="85" y="35" text-anchor="middle" fill="#eef0ff" font-size="8" font-family="sans-serif">COLD</text>
  <!-- energy flow arrow -->
  <line x1="32" y1="32" x2="72" y2="32" stroke="#fbbf24" stroke-width="2"/>
  <polygon points="74,32 64,27 64,37" fill="#fbbf24"/>
  <!-- free electrons label -->
  <circle cx="40" cy="32" r="3" fill="#fbbf24" opacity="0.9"/>
  <circle cx="52" cy="32" r="3" fill="#fbbf24" opacity="0.9"/>
  <circle cx="63" cy="32" r="3" fill="#fbbf24" opacity="0.9"/>
  <text x="52" y="56" text-anchor="middle" fill="#b7bce0" font-size="8" font-family="sans-serif">Free electrons</text>
  <text x="52" y="67" text-anchor="middle" fill="#b7bce0" font-size="8" font-family="sans-serif">carry energy</text>
  <text x="52" y="78" text-anchor="middle" fill="#b7bce0" font-size="8" font-family="sans-serif">No medium needed: No</text>
  <text x="52" y="89" text-anchor="middle" fill="#38bdf8" font-size="8" font-family="sans-serif">Needs medium: Yes</text>

  <!-- CONVECTION panel -->
  <text x="162" y="18" text-anchor="middle" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="bold">CONVECTION</text>
  <!-- small beaker -->
  <rect x="120" y="22" width="84" height="80" rx="3" fill="none" stroke="#34d399" stroke-width="1.5"/>
  <rect x="121" y="80" width="82" height="21" rx="0" fill="#fb7185" opacity="0.2"/>
  <!-- arrows -->
  <polyline points="145,90 145,35" fill="none" stroke="#fb7185" stroke-width="1.5"/>
  <polygon points="145,30 139,44 151,44" fill="#fb7185"/>
  <polyline points="145,33 175,33" fill="none" stroke="#b7bce0" stroke-width="1.5"/>
  <polygon points="178,33 166,28 166,38" fill="#b7bce0"/>
  <polyline points="175,33 175,90" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
  <polygon points="175,94 169,80 181,80" fill="#38bdf8"/>
  <text x="162" y="115" text-anchor="middle" fill="#b7bce0" font-size="8" font-family="sans-serif">Bulk fluid movement</text>
  <text x="162" y="126" text-anchor="middle" fill="#34d399" font-size="8" font-family="sans-serif">Needs medium: Yes</text>
  <text x="162" y="137" text-anchor="middle" fill="#b7bce0" font-size="8" font-family="sans-serif">Fluids only</text>

  <!-- RADIATION panel -->
  <text x="275" y="18" text-anchor="middle" fill="#a78bfa" font-size="10" font-family="sans-serif" font-weight="bold">RADIATION</text>
  <!-- hot body -->
  <circle cx="252" cy="55" r="18" fill="#fb7185" opacity="0.85"/>
  <text x="252" y="59" text-anchor="middle" fill="#eef0ff" font-size="8" font-family="sans-serif">HOT</text>
  <!-- IR waves radiating out -->
  <line x1="270" y1="45" x2="295" y2="30" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="272" y1="55" x2="302" y2="55" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="270" y1="65" x2="295" y2="80" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="252" y1="73" x2="252" y2="100" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="234" y1="65" x2="209" y2="80" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="310" y="34" fill="#a78bfa" font-size="7" font-family="sans-serif">IR</text>
  <text x="305" y="58" fill="#a78bfa" font-size="7" font-family="sans-serif">IR</text>
  <text x="297" y="83" fill="#a78bfa" font-size="7" font-family="sans-serif">IR</text>
  <text x="275" y="115" text-anchor="middle" fill="#b7bce0" font-size="8" font-family="sans-serif">Infrared EM waves</text>
  <text x="275" y="126" text-anchor="middle" fill="#a78bfa" font-size="8" font-family="sans-serif">No medium needed</text>
  <text x="275" y="137" text-anchor="middle" fill="#b7bce0" font-size="8" font-family="sans-serif">travels through vacuum</text>

  <!-- Bottom comparison table -->
  <line x1="8" y1="155" x2="312" y2="155" stroke="#b7bce0" stroke-width="0.5" opacity="0.5"/>
  <text x="8" y="168" fill="#b7bce0" font-size="8" font-family="sans-serif">Dull black: best emitter/absorber</text>
  <text x="8" y="180" fill="#b7bce0" font-size="8" font-family="sans-serif">Shiny silver: worst emitter/absorber (best reflector)</text>
  <text x="8" y="192" fill="#fbbf24" font-size="8" font-family="sans-serif">Vacuum flask: vacuum stops conduction+convection; silver walls cut radiation</text>
</svg>`
        }
      ],
      keyPoints: [
        "Thermal radiation is infrared electromagnetic radiation; it travels through a vacuum.",
        "Dull black surfaces are the best emitters and best absorbers of thermal radiation.",
        "Shiny silver/white surfaces are poor emitters and poor absorbers (they reflect radiation).",
        "A vacuum flask reduces all three modes: vacuum stops conduction and convection; silvered walls reduce radiation.",
        "The rate of radiation emission increases rapidly with temperature."
      ],
      thinkDeeper: "A perfect emitter/absorber of radiation is called a 'black body'. Real objects approach this ideal for dull black surfaces. Stefan's Law (beyond IGCSE) states that power radiated is proportional to T⁴ — small temperature increases cause very large increases in radiation output, which is why the Sun radiates enormous power despite being 'only' ~5800 K.",
      strategies: ["classify which mode is operating", "link surface colour/texture to emissivity", "use vacuum flask as a checklist for all three modes"]
    }
  ],

  learn: {
    keyFacts: [
      "The three states of matter differ in particle arrangement, separation, and type of motion.",
      "Brownian motion is direct experimental evidence for the kinetic particle model.",
      "Temperature measures average kinetic energy of particles; internal energy is the total KE + PE of all particles.",
      "Boyle's Law: pV = constant for a fixed mass of gas at constant temperature (p₁V₁ = p₂V₂).",
      "Specific heat capacity c is energy per kg per degree: E = mcΔT.",
      "Water has a high specific heat capacity: c = 4200 J kg⁻¹ K⁻¹.",
      "During melting and boiling, temperature stays constant — energy goes to increasing potential energy.",
      "Specific latent heat: E = mL; latent heat of fusion for water is 3.34 × 10⁵ J/kg.",
      "Evaporation occurs at any temperature at the liquid surface and causes cooling.",
      "Metals conduct heat well because free electrons carry energy rapidly through the lattice.",
      "Convection only occurs in fluids (liquids and gases), driven by density differences.",
      "Dull black surfaces are the best emitters and absorbers of infrared radiation."
    ],
    flashcards: [
      { front: "What is Brownian motion?", back: "The random, jittery movement of visible particles (e.g. smoke) caused by unequal bombardment by invisible, rapidly-moving surrounding molecules." },
      { front: "State Boyle's Law in words.", back: "For a fixed mass of gas at constant temperature, the pressure is inversely proportional to the volume (pV = constant)." },
      { front: "What is specific heat capacity?", back: "The energy required to raise the temperature of 1 kg of a substance by 1 K (or 1 °C). Units: J kg⁻¹ K⁻¹. Formula: E = mcΔT." },
      { front: "Why does a liquid cool when it evaporates?", back: "The highest-energy molecules escape from the surface. This lowers the average kinetic energy of the remaining molecules, so the temperature of the liquid falls." },
      { front: "What is specific latent heat?", back: "The energy required to change the state of 1 kg of a substance without changing its temperature. E = mL." },
      { front: "Why are metals better thermal conductors than non-metals?", back: "Metals have free (delocalised) electrons that carry kinetic energy rapidly from hot to cool regions. Non-metals can only conduct by slower particle-to-particle lattice vibration." },
      { front: "How does a convection current form?", back: "Heating a fluid decreases its density. The less dense fluid rises; cooler, denser fluid sinks to replace it, creating a circulating current that transfers thermal energy." },
      { front: "Which surfaces are best at absorbing thermal radiation?", back: "Dull (matt) black surfaces absorb the most. Shiny white/silver surfaces absorb the least (they reflect most radiation)." },
      { front: "How does a vacuum flask reduce heat transfer?", back: "The vacuum between the double walls prevents conduction and convection. Silvered inner walls reflect radiation, minimising emission and absorption." },
      { front: "What is internal energy?", back: "The sum of the kinetic energies and potential energies of all the particles in a substance." },
      { front: "What is the difference between melting and evaporation?", back: "Melting occurs at a fixed temperature (melting point) throughout the bulk of a solid. Evaporation occurs at any temperature only at the surface of a liquid." },
      { front: "State the formula for Boyle's Law calculations.", back: "p₁V₁ = p₂V₂, where p is pressure (Pa) and V is volume (m³ or any consistent unit)." }
    ],
    keyTerms: [
      { term: "Kinetic particle model", definition: "A model describing matter as made of particles in constant random motion, explaining properties of solids, liquids, and gases in terms of particle arrangement, separation, and speed." },
      { term: "Brownian motion", definition: "The random motion of visible particles suspended in a fluid, caused by unequal bombardment by the invisible, fast-moving molecules of the fluid." },
      { term: "Internal energy", definition: "The total kinetic and potential energy of all the particles in a substance." },
      { term: "Specific heat capacity (c)", definition: "The energy required to raise the temperature of 1 kg of a substance by 1 K, measured in J kg⁻¹ K⁻¹." },
      { term: "Specific latent heat (L)", definition: "The energy required to change the state of 1 kg of a substance at constant temperature, measured in J/kg." },
      { term: "Latent heat of fusion", definition: "The energy required to change 1 kg of a solid to a liquid (or vice versa) at its melting point without changing temperature." },
      { term: "Latent heat of vaporisation", definition: "The energy required to change 1 kg of a liquid to a gas (or vice versa) at its boiling point without changing temperature." },
      { term: "Boyle's Law", definition: "For a fixed mass of gas at constant temperature, the pressure is inversely proportional to the volume: pV = constant." },
      { term: "Thermal conduction", definition: "Transfer of thermal energy through a material by particle-to-particle interaction (vibration) and, in metals, by free electron movement, without bulk movement of the material." },
      { term: "Thermal convection", definition: "Transfer of thermal energy through a fluid by the bulk movement of that fluid, driven by density differences caused by temperature differences." },
      { term: "Thermal radiation", definition: "Transfer of thermal energy by infrared electromagnetic waves, which requires no medium and can travel through a vacuum." },
      { term: "Evaporation", definition: "The escape of molecules from the surface of a liquid at any temperature, when those molecules have sufficient kinetic energy to overcome intermolecular forces; causes the liquid to cool." }
    ]
  },

  quiz: {
    mcq: [
      {
        id: "phys-thermal-mcq-q01",
        question: "Which of the following best describes the arrangement and motion of particles in a gas?",
        options: [
          "Closely packed in a regular pattern, vibrating about fixed positions",
          "Randomly arranged and close together, able to slide past each other",
          "Widely separated, moving rapidly and randomly in all directions",
          "Widely separated, vibrating about fixed positions"
        ],
        answerIndex: 2,
        explanation: "Gas particles are widely separated (much more so than in liquids or solids) and move rapidly and randomly in all directions. Option A describes a solid; Option B describes a liquid; Option D is incorrect because gas particles are not bound to fixed positions.",
        guideRef: "The Kinetic Particle Model",
        difficulty: "warmup"
      },
      {
        id: "phys-thermal-mcq-q02",
        question: "A gas is compressed at constant temperature from a volume of 4.0 L to 1.0 L. Its initial pressure is 100 kPa. What is the final pressure?",
        options: ["25 kPa", "100 kPa", "400 kPa", "1600 kPa"],
        answerIndex: 2,
        explanation: "By Boyle's Law, p₁V₁ = p₂V₂. So p₂ = p₁V₁/V₂ = (100)(4.0)/(1.0) = 400 kPa. The volume decreased by a factor of 4, so pressure increased by a factor of 4.",
        guideRef: "Gas Pressure and Boyle's Law",
        difficulty: "core",
        hints: [
          "Identify what stays constant — temperature means Boyle's Law applies.",
          "Write out p₁V₁ = p₂V₂ and substitute the known values.",
          "Check: smaller volume should give larger pressure."
        ]
      },
      {
        id: "phys-thermal-mcq-q03",
        question: "Energy is supplied to a substance and its temperature does not change. Which process is most likely occurring?",
        options: [
          "The substance is being heated as a solid",
          "The substance is changing state",
          "The substance is cooling by evaporation",
          "The substance is being cooled"
        ],
        answerIndex: 1,
        explanation: "When a substance changes state (e.g. melting or boiling), the energy supplied increases the potential energy of the particles rather than their kinetic energy, so temperature remains constant. This is characteristic of a change of state.",
        guideRef: "Specific Heat Capacity and Latent Heat",
        difficulty: "warmup"
      },
      {
        id: "phys-thermal-mcq-q04",
        question: "Why is a copper saucepan a better conductor of heat than a glass one?",
        options: [
          "Copper particles vibrate faster than glass particles",
          "Copper has free electrons that carry thermal energy rapidly through the metal",
          "Copper has a higher specific heat capacity than glass",
          "Copper is a denser material so heat travels more easily"
        ],
        answerIndex: 1,
        explanation: "Copper, like all metals, has delocalised (free) electrons that are not bound to specific atoms. These electrons move quickly throughout the lattice and carry kinetic energy efficiently from hot to cool regions. Non-metals like glass lack free electrons and rely only on slower particle-to-particle vibration.",
        guideRef: "Conduction and Convection",
        difficulty: "core",
        hints: [
          "Think about what property metals have that non-metals do not.",
          "What can carry energy through a metal apart from vibration?"
        ]
      },
      {
        id: "phys-thermal-mcq-q05",
        question: "A dull black surface and a shiny silver surface are both heated to the same temperature. Which statement correctly compares their emission of thermal radiation?",
        options: [
          "Both surfaces emit the same amount of radiation",
          "The shiny silver surface emits more radiation",
          "The dull black surface emits more radiation",
          "Neither surface emits radiation unless above 100 °C"
        ],
        answerIndex: 2,
        explanation: "Dull black surfaces are the best emitters of thermal radiation. Shiny silver surfaces are poor emitters (they reflect rather than absorb or emit). All objects above absolute zero emit some radiation, so Option D is also wrong.",
        guideRef: "Thermal Radiation and Applications",
        difficulty: "warmup"
      },
      {
        id: "phys-thermal-mcq-q06",
        question: "The temperature of a gas in a sealed rigid container is increased. Which row correctly describes the changes in pressure and average kinetic energy of the gas molecules?",
        options: [
          "Pressure increases; average kinetic energy increases",
          "Pressure decreases; average kinetic energy increases",
          "Pressure increases; average kinetic energy stays the same",
          "Pressure stays the same; average kinetic energy increases"
        ],
        answerIndex: 0,
        explanation: "Higher temperature means faster-moving molecules (greater average KE). In a rigid container (constant volume), the faster molecules collide with the walls more frequently and with greater force, so pressure increases. Both pressure and average KE increase.",
        guideRef: "Gas Pressure and Boyle's Law",
        difficulty: "core",
        hints: [
          "Recall what temperature measures in terms of particle energy.",
          "In a rigid container, volume is fixed — what changes when molecules are faster?"
        ]
      }
    ],
    qa: [
      {
        id: "phys-thermal-qa-q01",
        question: "Explain how thermal energy is transferred through a metal rod when one end is heated, using the kinetic particle model. (4 marks)",
        marks: 4,
        modelAnswer: "When one end of the metal rod is heated, the particles at that end gain kinetic energy and vibrate more vigorously. Energy is transferred to neighbouring particles by collisions through lattice vibration. In addition, free (delocalised) electrons in the metal gain kinetic energy. These electrons move rapidly throughout the lattice, colliding with particles further along the rod and transferring energy to cooler regions. This is why metals conduct heat much faster than non-metals.",
        markScheme: [
          "Particles at the hot end gain kinetic energy / vibrate more vigorously",
          "Energy transferred to neighbours by collisions / lattice vibration",
          "Free (delocalised) electrons gain kinetic energy",
          "Free electrons move through metal and transfer energy to cooler regions / collide with particles"
        ],
        commonError: "Many students describe only lattice vibration and forget the crucial role of free electrons in metals — the primary reason metals conduct so much better than non-metals.",
        guideRef: "Conduction and Convection",
        difficulty: "core",
        hints: [
          "There are two mechanisms in metals — identify both.",
          "What do metal atoms have that non-metal atoms do not?",
          "Follow the energy step by step from the hot end to the cool end."
        ]
      },
      {
        id: "phys-thermal-qa-q02",
        question: "A student heats 0.25 kg of water in a kettle. The water starts at 20 °C and reaches 100 °C. Calculate the energy transferred to the water. (Specific heat capacity of water = 4200 J kg⁻¹ K⁻¹) (3 marks)",
        marks: 3,
        modelAnswer: "ΔT = 100 − 20 = 80 °C (= 80 K)\nE = mcΔT\nE = 0.25 × 4200 × 80\nE = 84 000 J (= 84 kJ)",
        markScheme: [
          "ΔT = 80 °C / 80 K (correct temperature change)",
          "Correct substitution into E = mcΔT",
          "E = 84 000 J / 84 kJ (correct answer with unit)"
        ],
        commonError: "Using the final temperature (100 °C) instead of the temperature change (ΔT = 80 °C) — always subtract initial from final temperature.",
        guideRef: "Specific Heat Capacity and Latent Heat",
        difficulty: "core",
        hints: [
          "Write down the formula E = mcΔT first.",
          "ΔT means change in temperature — subtract initial from final.",
          "Substitute: m = 0.25 kg, c = 4200, ΔT = 80."
        ],
        solutions: [
          {
            label: "Method 1: Direct substitution",
            steps: [
              "Identify: m = 0.25 kg, c = 4200 J kg⁻¹ K⁻¹, T_i = 20 °C, T_f = 100 °C",
              "Calculate ΔT = 100 − 20 = 80 K",
              "E = mcΔT = 0.25 × 4200 × 80",
              "E = 84 000 J"
            ]
          }
        ]
      },
      {
        id: "phys-thermal-qa-q03",
        question: "A vacuum flask keeps hot liquids hot and cold liquids cold. Explain how the design of a vacuum flask reduces heat transfer by conduction, convection, and radiation. (6 marks)",
        marks: 6,
        modelAnswer: "Conduction: The vacuum between the double glass walls contains virtually no particles, so energy cannot be conducted across it (conduction requires particle-to-particle contact). The glass walls themselves are poor conductors, limiting conduction through them. Convection: With no particles in the vacuum, there is no fluid to form convection currents — convection is eliminated entirely. Radiation: The inner surfaces of the walls are silvered (mirrored). Silvered surfaces are poor emitters of radiation, so less infrared radiation is emitted from the hot liquid's side into the vacuum. Silvered surfaces are also poor absorbers (good reflectors), so less radiation is absorbed from outside. This minimises heat transfer by radiation in both directions.",
        markScheme: [
          "Conduction: vacuum has no / very few particles, so conduction cannot occur (1 mark)",
          "Conduction: glass is a poor conductor (1 mark, credit either point)",
          "Convection: no particles / no fluid in vacuum, so no convection current can form (1 mark)",
          "Radiation: silvered walls are poor emitters of radiation (1 mark)",
          "Radiation: silvered walls are poor absorbers / reflect radiation (1 mark)",
          "Both directions of radiation transfer reduced (1 mark)"
        ],
        commonError: "Students often state that the vacuum 'stops radiation' — it does not. The vacuum eliminates conduction and convection; the silvered walls reduce radiation.",
        guideRef: "Thermal Radiation and Applications",
        difficulty: "core",
        hints: [
          "Address each of the three mechanisms separately.",
          "What does the vacuum specifically prevent? What does silver specifically reduce?",
          "Remember radiation can travel through a vacuum — so what handles radiation in the flask design?"
        ],
        strategy: "structure answer by mechanism"
      }
    ]
  },

  questionBank: {
    mcqPapers: [
      {
        id: "phys-thermal-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Covers kinetic model, Brownian motion, thermal expansion, and gas laws.",
        questions: [
          {
            id: "phys-thermal-bank-mcq1-q01",
            question: "Brownian motion, observed when smoke particles are viewed under a microscope, provides evidence for which of the following?",
            options: [
              "Light travels as waves",
              "Air molecules are in continuous random motion",
              "Smoke particles are composed of carbon atoms",
              "Air has a lower density than smoke"
            ],
            answerIndex: 1,
            explanation: "The random jittery motion of the smoke particles is caused by unequal bombardment from the surrounding air molecules, which are too small to see. This demonstrates that air molecules are in continuous random motion — the central claim of the kinetic particle model.",
            guideRef: "The Kinetic Particle Model",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bank-mcq1-q02",
            question: "Which statement about the particles in a liquid is correct?",
            options: [
              "Particles are arranged in a regular lattice and vibrate only",
              "Particles are widely spaced and move randomly in all directions",
              "Particles are close together and can flow past one another",
              "Particles have no kinetic energy"
            ],
            answerIndex: 2,
            explanation: "Liquid particles are still close together (similar density to a solid) but their arrangement is random and they can slide past each other — giving liquids the ability to flow. Option A is a solid; Option B is a gas; Option D is wrong as all particles above absolute zero have kinetic energy.",
            guideRef: "The Kinetic Particle Model",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bank-mcq1-q03",
            question: "Why does increasing the temperature of a gas in a fixed volume increase its pressure?",
            options: [
              "The gas molecules become larger",
              "The gas molecules collide with the walls more frequently and with greater force",
              "The density of the gas increases",
              "The gas molecules lose kinetic energy"
            ],
            answerIndex: 1,
            explanation: "At higher temperature, gas molecules have greater average kinetic energy and move faster. In a fixed volume they collide with the container walls more often and each collision delivers more force. The result is higher pressure. The molecules do not change size; density stays constant at fixed volume; and kinetic energy increases (not decreases) with temperature.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "core",
            hints: [
              "Recall what temperature means at the particle level.",
              "Think about how often molecules hit the wall and how hard."
            ]
          },
          {
            id: "phys-thermal-bank-mcq1-q04",
            question: "A bimetallic strip bends when heated because the two metals have different rates of thermal expansion. Which of the following best explains why materials expand when heated?",
            options: [
              "Particles become larger when heated",
              "The mass of the material increases",
              "Particles vibrate more vigorously, increasing average separation",
              "New particles are created by heating"
            ],
            answerIndex: 2,
            explanation: "When a solid is heated, particles gain kinetic energy and vibrate with greater amplitude. Due to the asymmetry of inter-particle forces, greater vibration amplitude corresponds to a greater average separation between particles — the material expands. Particles do not change size, mass is conserved, and no new particles are created.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "core",
            hints: [
              "What happens to particle vibration when temperature increases?",
              "Does greater vibration amplitude mean particles are further apart on average?"
            ]
          },
          {
            id: "phys-thermal-bank-mcq1-q05",
            question: "A gas has a pressure of 150 kPa and a volume of 2.0 m³. At constant temperature, what volume does it occupy when the pressure is increased to 300 kPa?",
            options: ["0.5 m³", "1.0 m³", "3.0 m³", "4.0 m³"],
            answerIndex: 1,
            explanation: "Using Boyle's Law: p₁V₁ = p₂V₂. (150)(2.0) = (300)(V₂). V₂ = 300/300 = 1.0 m³. The pressure doubled so the volume halved.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "core",
            hints: [
              "Boyle's Law applies because temperature is constant.",
              "p₁V₁ = p₂V₂: solve for V₂.",
              "Pressure doubled — what does that tell you about the new volume?"
            ]
          },
          {
            id: "phys-thermal-bank-mcq1-q06",
            question: "Which of the following is NOT a consequence of thermal expansion in everyday life?",
            options: [
              "Gaps left in railway tracks",
              "Bimetallic strips used in thermostats",
              "Liquid-in-glass thermometers measuring temperature",
              "Convection currents forming in the atmosphere"
            ],
            answerIndex: 3,
            explanation: "Gaps in railway tracks, bimetallic strips, and liquid thermometers all rely on thermal expansion. Convection currents do involve density changes caused by thermal expansion, but they are primarily a consequence of density differences leading to fluid flow — not directly a 'consequence of thermal expansion' in the same engineering/design sense. Options A, B, C are all direct applications of expansion.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "core",
            hints: [
              "Which options are explicit designs to accommodate or exploit expansion?",
              "What drives convection currents? Is it expansion itself or density change?"
            ]
          }
        ]
      },
      {
        id: "phys-thermal-bank-mcq-2",
        title: "Thermal Physics MCQ Paper 2",
        description: "Covers specific heat, latent heat, evaporation, conduction, convection, and radiation.",
        questions: [
          {
            id: "phys-thermal-bank-mcq2-q01",
            question: "The specific heat capacity of aluminium is 900 J kg⁻¹ K⁻¹. How much energy is needed to raise the temperature of a 2.0 kg aluminium block from 25 °C to 75 °C?",
            options: ["45 000 J", "90 000 J", "135 000 J", "180 000 J"],
            answerIndex: 1,
            explanation: "E = mcΔT = 2.0 × 900 × (75 − 25) = 2.0 × 900 × 50 = 90 000 J.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "ΔT = 75 − 25 = 50 K.",
              "E = mcΔT = 2.0 × 900 × 50."
            ]
          },
          {
            id: "phys-thermal-bank-mcq2-q02",
            question: "Which of the following correctly describes the difference between boiling and evaporation?",
            options: [
              "Boiling occurs at any temperature; evaporation only occurs at the boiling point",
              "Evaporation occurs at the surface at any temperature; boiling occurs throughout the liquid at the boiling point",
              "Both processes occur only at the boiling point",
              "Evaporation increases the temperature of the liquid; boiling decreases it"
            ],
            answerIndex: 1,
            explanation: "Evaporation is a surface process that occurs at any temperature — molecules with above-average energy escape from the surface. Boiling is a bulk process where bubbles of vapour form throughout the liquid at a fixed boiling point. Evaporation causes cooling (average KE of remaining molecules decreases), not warming.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bank-mcq2-q03",
            question: "Thermal radiation can travel through a vacuum. Which of the following best explains this?",
            options: [
              "Radiation is a particle, not a wave",
              "Radiation is an electromagnetic wave and does not require a medium",
              "Vacuums contain a special type of particle that carries radiation",
              "Radiation is carried by fast-moving air molecules"
            ],
            answerIndex: 1,
            explanation: "Thermal radiation is infrared electromagnetic radiation. All electromagnetic waves (including light and infrared) can travel through a vacuum because they are oscillating electric and magnetic fields — they do not require a medium. Conduction and convection, which rely on particles, cannot travel through a vacuum.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bank-mcq2-q04",
            question: "Two containers of water are identical except that one is painted dull black and the other is left shiny silver. Both are filled with hot water at the same temperature. After 30 minutes, which container will have cooled the most, and why?",
            options: [
              "The silver container, because silver conducts heat away faster",
              "The black container, because dull black surfaces emit more radiation",
              "Both cool at the same rate, because temperature determines radiation output",
              "The silver container, because it reflects heat from the surroundings"
            ],
            answerIndex: 1,
            explanation: "Dull black surfaces are the best emitters of thermal radiation. The black container will radiate energy away at a greater rate than the silver one, so it cools faster. Silver surfaces are poor emitters (good reflectors) so they lose less energy by radiation. Both containers lose some heat by conduction through the walls, but the key difference here is radiation.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "core",
            hints: [
              "Which surface property affects radiation emission?",
              "Dull black vs shiny silver — which emits more?"
            ]
          },
          {
            id: "phys-thermal-bank-mcq2-q05",
            question: "A student wraps a hot pie in aluminium foil. Which mode of heat transfer does the foil primarily reduce?",
            options: ["Conduction only", "Convection only", "Radiation only", "Convection and radiation"],
            answerIndex: 2,
            explanation: "Aluminium foil has a shiny surface that is a poor emitter (and poor absorber) of infrared radiation, so it primarily reduces heat loss by radiation. Foil does not significantly reduce conduction (aluminium is actually a good conductor) or convection (air can still circulate). The key benefit is the reflective surface minimising radiation loss.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "core",
            hints: [
              "What is the key property of shiny aluminium foil?",
              "Is foil a good or poor emitter of radiation?"
            ]
          },
          {
            id: "phys-thermal-bank-mcq2-q06",
            question: "A substance has a specific latent heat of vaporisation of 2.0 × 10⁶ J/kg. How much energy must be removed to condense 0.40 kg of this vapour at its boiling point?",
            options: ["5.0 × 10⁵ J", "8.0 × 10⁵ J", "2.0 × 10⁶ J", "5.0 × 10⁶ J"],
            answerIndex: 1,
            explanation: "E = mL = 0.40 × 2.0 × 10⁶ = 8.0 × 10⁵ J. The same energy is required for condensation as for vaporisation — the process is reversible. Note the question asks how much is removed, so energy flows out of the substance.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "Use E = mL.",
              "E = 0.40 × 2.0 × 10⁶ = ?"
            ]
          }
        ]
      }
    ],
    qaPapers: [
      {
        id: "phys-thermal-bank-qa-1",
        title: "Thermal Physics Structured Paper 1",
        description: "Kinetic model, gas laws, and specific heat capacity with Boyle's Law and SHC calculations.",
        questions: [
          {
            id: "phys-thermal-bank-qa1-q01",
            question: "A student observes smoke particles through a microscope. The particles appear to move in a random, jerky path.\n(a) State the name of this type of motion. (1 mark)\n(b) Explain, using the kinetic particle model, why the smoke particles move in this way. (3 marks)\n(c) How would increasing the temperature of the air affect the motion of the smoke particles? Explain your answer. (2 marks)",
            marks: 6,
            modelAnswer: "(a) Brownian motion.\n\n(b) The smoke particles are bombarded by fast-moving, invisible air molecules. Because air molecules are very small and numerous, at any instant the number and force of collisions on each side of the smoke particle is unequal by chance. This gives the smoke particle a net force in a random direction, which changes constantly — producing the observed jerky, random motion.\n\n(c) At higher temperature, the air molecules have greater average kinetic energy and move faster. They bombard the smoke particles with greater force and frequency, so the smoke particles move more vigorously (larger, more rapid displacements).",
            markScheme: [
              "(a) Brownian motion",
              "(b) Smoke particles bombarded by air molecules (1)",
              "(b) Collisions unequal on different sides / net force in random direction (1)",
              "(b) Direction of net force changes randomly / continuously (1)",
              "(c) Higher T means air molecules move faster / have greater KE (1)",
              "(c) Smoke particles move more vigorously / larger random displacements (1)"
            ],
            commonError: "Students say 'the air pushes the smoke' without explaining the random, unequal nature of the bombardment — this misses the key point of Brownian motion.",
            guideRef: "The Kinetic Particle Model",
            difficulty: "core",
            hints: [
              "Name the type of motion first — it has a specific name.",
              "What causes the jerkiness? Think about what is hitting the smoke particles from different sides.",
              "For part (c), link temperature to particle speed."
            ]
          },
          {
            id: "phys-thermal-bank-qa1-q02",
            question: "A sealed syringe contains 80 cm³ of air at a pressure of 100 kPa. The temperature is kept constant throughout.\n(a) The plunger is pushed in until the volume is 20 cm³. Calculate the new pressure of the gas. (3 marks)\n(b) Explain, using particle theory, why the pressure increases when the volume decreases at constant temperature. (3 marks)",
            marks: 6,
            modelAnswer: "(a) Using Boyle's Law: p₁V₁ = p₂V₂\n100 × 80 = p₂ × 20\np₂ = 8000/20 = 400 kPa\n\n(b) When the volume decreases at constant temperature, the gas molecules have the same average speed (temperature unchanged). However, the molecules have less distance to travel before reaching the walls, so they collide with the walls more frequently. More collisions per second means a greater force per unit area on the walls — i.e. a greater pressure.",
            markScheme: [
              "(a) States or uses p₁V₁ = p₂V₂ (1)",
              "(a) Correct substitution: 100 × 80 = p₂ × 20 (1)",
              "(a) p₂ = 400 kPa (1)",
              "(b) Molecules have same average speed / same average KE (constant T) (1)",
              "(b) Smaller volume means molecules travel less distance between wall collisions / hit walls more often (1)",
              "(b) More frequent collisions with walls → greater pressure (1)"
            ],
            commonError: "For part (b), stating 'the molecules are squashed together so they push harder' — this confuses bulk pressure with individual collisions and misses the frequency argument.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "core",
            hints: [
              "For (a): write p₁V₁ = p₂V₂ and substitute.",
              "For (b): temperature constant means average speed is constant. What changes if the box is smaller?",
              "Think about how often each molecule hits a wall."
            ],
            solutions: [
              {
                label: "Method 1: Ratio method",
                steps: [
                  "Volume ratio: V₁/V₂ = 80/20 = 4",
                  "By Boyle's Law, pressure ratio = inverse of volume ratio = 4",
                  "New pressure = 100 × 4 = 400 kPa"
                ]
              },
              {
                label: "Method 2: p₁V₁ = p₂V₂ direct",
                steps: [
                  "p₁V₁ = 100 × 80 = 8000 kPa·cm³",
                  "p₂ = 8000 / V₂ = 8000 / 20 = 400 kPa"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bank-qa1-q03",
            question: "A student investigates the specific heat capacity of a metal block of mass 1.5 kg. She heats it with a 60 W heater for 5.0 minutes and records a temperature rise of 24 °C.\n(a) Calculate the energy supplied by the heater. (2 marks)\n(b) Use your answer to calculate the specific heat capacity of the metal. (2 marks)\n(c) The actual specific heat capacity of the metal is 390 J kg⁻¹ K⁻¹. Suggest one reason why the student's value may differ from this. (1 mark)",
            marks: 5,
            modelAnswer: "(a) Power = 60 W, time = 5.0 × 60 = 300 s\nEnergy = power × time = 60 × 300 = 18 000 J\n\n(b) E = mcΔT → c = E/(mΔT) = 18 000 / (1.5 × 24) = 18 000 / 36 = 500 J kg⁻¹ K⁻¹\n\n(c) Some energy is lost to the surroundings (e.g. heats the air rather than just the block), so the temperature rise is less than it would be if all energy went into the block. This makes the calculated c larger than the true value.",
            markScheme: [
              "(a) Time = 300 s (conversion from minutes) (1)",
              "(a) E = 60 × 300 = 18 000 J (1)",
              "(b) Rearranges E = mcΔT correctly to c = E/(mΔT) (1)",
              "(b) c = 18 000/(1.5 × 24) = 500 J kg⁻¹ K⁻¹ (1)",
              "(c) Heat loss to surroundings / heat absorbed by heater element / insulation not perfect (1)"
            ],
            commonError: "Failing to convert minutes to seconds before calculating energy — always check time units when using E = Pt.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "Convert time to seconds: 5 min = 300 s.",
              "Energy from heater: E = P × t.",
              "Then rearrange E = mcΔT to find c."
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "t = 5.0 min = 5.0 × 60 = 300 s",
                  "E = P × t = 60 × 300 = 18 000 J",
                  "c = E / (m × ΔT) = 18 000 / (1.5 × 24) = 500 J kg⁻¹ K⁻¹"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bank-qa1-q04",
            question: "(Challenge) A 0.50 kg copper block at 200 °C is dropped into 0.20 kg of water at 20 °C in an insulated container. Assuming no heat is lost to the surroundings, calculate the final temperature of the mixture. (Specific heat capacity of copper = 390 J kg⁻¹ K⁻¹; specific heat capacity of water = 4200 J kg⁻¹ K⁻¹) (5 marks)",
            marks: 5,
            modelAnswer: "Let the final temperature be T °C.\n\nHeat lost by copper = m_Cu × c_Cu × ΔT_Cu = 0.50 × 390 × (200 − T)\nHeat gained by water = m_w × c_w × ΔT_w = 0.20 × 4200 × (T − 20)\n\nSetting heat lost = heat gained:\n0.50 × 390 × (200 − T) = 0.20 × 4200 × (T − 20)\n195(200 − T) = 840(T − 20)\n39 000 − 195T = 840T − 16 800\n39 000 + 16 800 = 840T + 195T\n55 800 = 1035T\nT = 55 800 / 1035 = 53.9 °C ≈ 54 °C",
            markScheme: [
              "States: heat lost by copper = heat gained by water (conservation of energy) (1)",
              "Correct expression for heat lost by copper: 0.50 × 390 × (200 − T) (1)",
              "Correct expression for heat gained by water: 0.20 × 4200 × (T − 20) (1)",
              "Sets them equal and solves algebraically (1)",
              "T = 53.9 °C / 54 °C (1)"
            ],
            commonError: "Students often set up the equation but use the wrong sign convention — e.g. subtracting T − 200 instead of 200 − T for copper. Always write (higher T − lower T) for each term so both sides are positive.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "challenge",
            hints: [
              "Thermal equilibrium: heat lost by copper = heat gained by water.",
              "Write E_lost = m_Cu × c_Cu × (200 − T) and E_gained = m_w × c_w × (T − 20).",
              "Set E_lost = E_gained and expand both sides.",
              "Collect T terms on one side and solve."
            ],
            strategy: "conservation of energy, algebraic equation setup",
            solutions: [
              {
                label: "Energy balance method",
                steps: [
                  "Let final temperature = T °C",
                  "Energy lost by copper: Q_Cu = 0.50 × 390 × (200 − T) = 195(200 − T)",
                  "Energy gained by water: Q_w = 0.20 × 4200 × (T − 20) = 840(T − 20)",
                  "Q_Cu = Q_w: 195(200 − T) = 840(T − 20)",
                  "39 000 − 195T = 840T − 16 800",
                  "55 800 = 1035T",
                  "T = 53.9 °C ≈ 54 °C"
                ]
              }
            ]
          }
        ]
      },
      {
        id: "phys-thermal-bank-qa-2",
        title: "Thermal Physics Structured Paper 2",
        description: "Latent heat, evaporation, conduction, convection, and radiation with applications.",
        questions: [
          {
            id: "phys-thermal-bank-qa2-q01",
            question: "A graph of temperature against time is drawn as a substance is heated steadily from a solid. The graph shows two flat (horizontal) sections.\n(a) What does each horizontal section represent? (2 marks)\n(b) Explain, in terms of particles, why the temperature does not change during these sections despite energy being continuously supplied. (3 marks)",
            marks: 5,
            modelAnswer: "(a) The first horizontal section represents melting (the substance changing from solid to liquid at its melting point). The second horizontal section represents boiling (the substance changing from liquid to gas at its boiling point).\n\n(b) During melting and boiling, the energy supplied is used to overcome the forces between particles (breaking intermolecular bonds), increasing the potential energy of the particles rather than their kinetic energy. Since temperature is determined by the average kinetic energy of the particles (not potential energy), the temperature remains constant while the state changes.",
            markScheme: [
              "(a) First plateau: melting / solid to liquid (1)",
              "(a) Second plateau: boiling / liquid to gas (1)",
              "(b) Energy increases potential energy of particles, not kinetic energy (1)",
              "(b) Bonds between particles are being broken / particles being separated (1)",
              "(b) Temperature depends on average KE, which does not change (1)"
            ],
            commonError: "Students say 'energy is used to heat the surroundings' — this is wrong; the flat section is specifically where energy goes to the substance itself to break bonds, not to the environment.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "Two flat sections = two different state changes.",
              "Where does the energy go if not into kinetic energy?",
              "What determines temperature at the particle level?"
            ]
          },
          {
            id: "phys-thermal-bank-qa2-q02",
            question: "A nurse dabs ethanol on a patient's arm before giving an injection. The patient feels the skin become cold where the ethanol was applied.\n(a) Explain why the skin feels cold when ethanol evaporates. (3 marks)\n(b) The evaporation is faster when the nurse blows gently on the arm. Explain why. (2 marks)",
            marks: 5,
            modelAnswer: "(a) The ethanol molecules that escape from the liquid surface are those with the highest kinetic energy. When these fast-moving molecules leave, the average kinetic energy of the remaining ethanol molecules decreases. Since temperature is a measure of average kinetic energy, the temperature of the ethanol (and the skin beneath it) falls. Energy flows from the skin to the cooler ethanol, making the skin feel cold.\n\n(b) Blowing moves away the ethanol vapour that has built up just above the surface. This reduces the concentration of ethanol molecules in the air above the liquid, which reduces the rate at which molecules return to the liquid (re-condensation). The net rate of evaporation therefore increases.",
            markScheme: [
              "(a) Molecules that escape are the most energetic / fastest ones (1)",
              "(a) Average KE of remaining molecules decreases / liquid temperature falls (1)",
              "(a) Energy transferred from skin to cooler ethanol / skin loses energy (1)",
              "(b) Blowing removes ethanol vapour from above the surface (1)",
              "(b) Reduces re-condensation / less vapour returning to liquid, so net evaporation rate increases (1)"
            ],
            commonError: "For (b), students say 'blowing brings cold air' rather than explaining the removal of saturated vapour — the key is the vapour concentration above the surface.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "Which molecules escape first? What does that do to the average?",
              "For (b): think about what is above the liquid surface. How does blowing change it?"
            ]
          },
          {
            id: "phys-thermal-bank-qa2-q03",
            question: "Describe and explain how thermal energy is transferred from a central heating radiator to all parts of a room. In your answer, refer to conduction, convection, and radiation and state which process dominates. (6 marks)",
            marks: 6,
            modelAnswer: "Convection (dominant): The air in contact with the hot radiator surface is heated by conduction from the metal. This air expands, becoming less dense, and rises. Cooler, denser air from other parts of the room sinks to replace it. This sets up a convection current that circulates warm air throughout the room, transferring thermal energy by bulk fluid movement. Convection is the dominant mechanism for a room radiator.\n\nConduction: thermal energy is conducted through the metal walls of the radiator from the hot water inside to the outer surface, because metals have free electrons that carry energy rapidly. Energy is also conducted a small distance from the radiator surface into the immediately adjacent air.\n\nRadiation: the radiator emits infrared radiation from its surface. This radiation travels through the air and is absorbed by objects and walls in the room, warming them directly without requiring a medium.",
            markScheme: [
              "Convection: air near radiator heated by conduction/contact, becomes less dense (1)",
              "Convection: warm air rises, cool air sinks to replace it — convection current (1)",
              "Convection: stated as dominant mechanism (1)",
              "Conduction: through metal walls via free electrons (1)",
              "Radiation: infrared radiation emitted from surface; travels through air (1)",
              "Radiation: absorbed by objects/walls in room (1)"
            ],
            commonError: "Describing conduction through the air as the main way the whole room warms — air is a poor conductor and conduction through air is negligible over room distances. Convection dominates.",
            guideRef: "Conduction and Convection",
            difficulty: "core",
            hints: [
              "Address all three mechanisms separately.",
              "Which process moves energy across the whole room? Which is limited to short distances?",
              "State clearly which mechanism dominates."
            ],
            strategy: "structure by mechanism; evaluate which dominates"
          },
          {
            id: "phys-thermal-bank-qa2-q04",
            question: "(Challenge) A student designs an experiment to compare the specific heat capacities of two liquids, A and B. She uses identical heaters and identical insulated containers. She measures the temperature rise of equal masses (0.50 kg) of each liquid after 3 minutes of heating at 50 W.\n\nLiquid A: temperature rise = 18 °C\nLiquid B: temperature rise = 30 °C\n\n(a) Calculate the specific heat capacity of each liquid. (4 marks)\n(b) The student notices the container containing liquid B is warm to touch, but the container for liquid A is cooler. Explain this observation in terms of specific heat capacity. (2 marks)\n(c) Suggest two improvements to the experimental design to obtain more accurate results. (2 marks)",
            marks: 8,
            modelAnswer: "(a) Energy supplied: E = Pt = 50 × (3 × 60) = 50 × 180 = 9000 J\n\nFor liquid A: c_A = E/(mΔT) = 9000/(0.50 × 18) = 9000/9 = 1000 J kg⁻¹ K⁻¹\nFor liquid B: c_B = E/(mΔT) = 9000/(0.50 × 30) = 9000/15 = 600 J kg⁻¹ K⁻¹\n\n(b) Liquid B has a lower specific heat capacity. With the same energy input, it reaches a higher temperature. More energy is also transferred to the container from the hotter liquid B, making it warmer to touch. Liquid A requires more energy per degree of temperature rise, so it reaches a lower temperature and the container stays cooler.\n\n(c) Any two of: insulate the containers with lagging to reduce heat loss to surroundings; use a lid to reduce evaporation and convection losses; stir the liquid to ensure uniform temperature distribution; repeat the experiment and take an average; use a more precise thermometer (digital rather than liquid-in-glass).",
            markScheme: [
              "(a) E = 9000 J (correct calculation, 1 mark)",
              "(a) c_A = 1000 J kg⁻¹ K⁻¹ (1 mark)",
              "(a) c_B = 600 J kg⁻¹ K⁻¹ (1 mark)",
              "(a) Units correct / shown (1 mark)",
              "(b) Liquid B has lower c, so same energy gives larger temperature rise (1)",
              "(b) Hotter liquid B transfers more energy to container (1)",
              "(c) Any two valid improvements, e.g.: insulate containers; use lid; stir liquid; repeat for average; digital thermometer (1 each, max 2)"
            ],
            commonError: "For (a), forgetting to convert minutes to seconds: 3 min = 180 s, not 3 s. This error gives a wildly incorrect energy value.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "challenge",
            hints: [
              "First find total energy from heater: E = P × t (convert time to seconds).",
              "Then use c = E / (m × ΔT) for each liquid separately.",
              "For (b), think about which liquid got hotter and why that makes the container warmer.",
              "For (c), consider sources of error: heat losses, uneven temperature, reading errors."
            ],
            strategy: "systematic calculation then conceptual explanation",
            solutions: [
              {
                label: "Full worked solution",
                steps: [
                  "E = P × t = 50 × (3 × 60) = 50 × 180 = 9000 J",
                  "c_A = E/(m × ΔT_A) = 9000/(0.50 × 18) = 9000/9.0 = 1000 J kg⁻¹ K⁻¹",
                  "c_B = E/(m × ΔT_B) = 9000/(0.50 × 30) = 9000/15 = 600 J kg⁻¹ K⁻¹",
                  "B has lower c → reaches higher T → container of B is warmer"
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
