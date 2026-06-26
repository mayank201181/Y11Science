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
        description: "Kinetic particle model, Brownian motion, states of matter, internal energy, and thermal expansion.",
        questions: [
          {
            id: "phys-thermal-bm1-01",
            question: "Which row correctly describes the particle separation and motion in a solid?",
            options: [
              "Widely separated; rapid random motion in all directions",
              "Close together, random arrangement; particles slide past each other",
              "Close together in a regular lattice; vibrate about fixed positions",
              "Widely separated; vibrate about fixed positions"
            ],
            answerIndex: 2,
            explanation: "In a solid the particles are closely packed in a regular lattice and vibrate about fixed positions; they cannot move past one another. Option A describes a gas; Option B describes a liquid; Option D is contradictory because widely separated particles are not held in fixed lattice positions.",
            guideRef: "The Kinetic Particle Model",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bm1-02",
            question: "Brownian motion of smoke particles viewed under a microscope is best evidence that:",
            options: [
              "smoke particles repel one another",
              "air molecules are small, fast-moving and in continuous random motion",
              "light behaves as a stream of particles",
              "warm air rises and cool air sinks"
            ],
            answerIndex: 1,
            explanation: "The random jittery path of each visible smoke grain is caused by unequal bombardment from the invisible air molecules. For this to happen the air molecules must be very small, fast-moving and in continuous random motion — the central idea of the kinetic particle model.",
            guideRef: "The Kinetic Particle Model",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bm1-03",
            question: "A liquid and a solid have similar densities, but a gas of the same substance is roughly 1000 times less dense. The kinetic model explains this best by which statement?",
            options: [
              "Gas particles are about 1000 times larger than liquid particles",
              "Gas particles are separated by about ten times their diameter, so they occupy far more volume",
              "Gas particles have much greater mass than liquid particles",
              "Gas particles stop moving and spread out evenly"
            ],
            answerIndex: 1,
            explanation: "Density = mass/volume. The particles themselves are the same size and mass in all three states, so the much lower density of a gas must come from much greater spacing. In a gas the separation is typically about ten times the particle diameter, so the same number of particles fills a vastly greater volume (roughly 10³ times), giving the ~1000-fold drop in density.",
            guideRef: "The Kinetic Particle Model",
            difficulty: "core",
            hints: [
              "Density depends on how much mass is packed into a volume.",
              "Particle size and mass do not change between states — so what does?",
              "If spacing increases ~10× in each direction, volume increases by 10³."
            ]
          },
          {
            id: "phys-thermal-bm1-04",
            question: "A fixed mass of gas is heated in a sealed rigid container. Which quantity stays the same?",
            options: ["Pressure of the gas", "Average kinetic energy of the molecules", "Volume of the gas", "Frequency of collisions with the walls"],
            answerIndex: 2,
            explanation: "The container is rigid and sealed, so the volume is fixed. Heating raises the average kinetic energy (faster molecules), which increases the frequency and force of wall collisions and therefore the pressure. Only the volume is unchanged.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "core",
            hints: [
              "What does 'rigid container' tell you about one quantity?",
              "Heating always raises the average kinetic energy of gas molecules.",
              "If volume is fixed but molecules speed up, what must happen to pressure?"
            ]
          },
          {
            id: "phys-thermal-bm1-05",
            question: "Convert a temperature of −23 °C to kelvin.",
            options: ["250 K", "296 K", "−23 K", "323 K"],
            answerIndex: 0,
            explanation: "T(K) = T(°C) + 273 = −23 + 273 = 250 K. A change of 1 °C equals a change of 1 K, but the zero points differ by 273.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bm1-06",
            question: "Which statement about internal energy is correct?",
            options: [
              "Internal energy is the same as temperature",
              "Internal energy is the total kinetic and potential energy of all the particles",
              "Internal energy is only the potential energy of the particles",
              "Internal energy does not change during melting"
            ],
            answerIndex: 1,
            explanation: "Internal energy is the sum of the kinetic energies (random motion) and potential energies (from inter-particle forces) of all particles. Temperature reflects only the average kinetic energy. During melting the temperature is constant but internal energy still rises because the particles' potential energy increases as bonds are broken — so Option D is wrong.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "core",
            hints: [
              "Distinguish total energy of all particles from the average per particle.",
              "Internal energy has two parts — kinetic and potential.",
              "Think about what happens to potential energy during melting."
            ]
          },
          {
            id: "phys-thermal-bm1-07",
            question: "A bimetallic strip is made of brass bonded to iron. Brass expands more than iron for the same temperature rise. When the strip is heated, it bends so that:",
            options: [
              "the brass is on the inside (shorter) of the curve",
              "the iron is on the inside (shorter) of the curve",
              "the strip stays straight because both metals expand",
              "the strip bends toward the brass side"
            ],
            answerIndex: 1,
            explanation: "Brass expands more, so it becomes the longer (outer) side of the curve; the iron, expanding less, forms the shorter inner side. The strip therefore curves with the iron on the inside (concave) and brass on the outside, bending toward the iron side.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "core",
            hints: [
              "The metal that expands more becomes the longer side.",
              "A longer outer side and shorter inner side make a curve — which metal is which?"
            ]
          },
          {
            id: "phys-thermal-bm1-08",
            question: "A gas at a pressure of 200 kPa occupies 600 cm³. At constant temperature it is allowed to expand to 1500 cm³. What is the new pressure?",
            options: ["80 kPa", "120 kPa", "320 kPa", "500 kPa"],
            answerIndex: 0,
            explanation: "Boyle's Law: p₁V₁ = p₂V₂. p₂ = p₁V₁/V₂ = (200 × 600)/1500 = 120 000/1500 = 80 kPa. The volume increased by a factor of 2.5, so the pressure fell to 1/2.5 of its original value.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "core",
            hints: [
              "Temperature is constant, so use p₁V₁ = p₂V₂.",
              "Rearrange to p₂ = p₁V₁ / V₂.",
              "Larger volume must give a smaller pressure — check your answer is below 200 kPa."
            ]
          },
          {
            id: "phys-thermal-bm1-09",
            question: "A steel bridge deck is 1200 m long. Steel expands by about 0.000012 of its length for each 1 °C rise. Approximately how much longer is the deck when its temperature rises by 30 °C?",
            options: ["0.043 m", "0.43 m", "4.3 m", "43 m"],
            answerIndex: 1,
            explanation: "Change in length = original length × expansion per °C × temperature rise = 1200 × 0.000012 × 30 = 1200 × 0.00036 = 0.432 m ≈ 0.43 m. This is why long bridges need expansion joints.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "challenge",
            hints: [
              "Expansion = original length × (expansion per °C) × (temperature change).",
              "First find expansion per °C × ΔT = 0.000012 × 30.",
              "Then multiply by 1200 m and check the order of magnitude."
            ],
            strategy: "substitute carefully and track the powers of ten"
          },
          {
            id: "phys-thermal-bm1-10",
            question: "A bubble of gas of volume 2.0 cm³ is released at the bottom of a lake where the pressure is 300 kPa. As it rises to the surface, where the pressure is 100 kPa, its volume changes (assume the temperature stays constant). What is its volume at the surface?",
            options: ["0.67 cm³", "2.0 cm³", "6.0 cm³", "600 cm³"],
            answerIndex: 2,
            explanation: "Boyle's Law: p₁V₁ = p₂V₂. V₂ = p₁V₁/p₂ = (300 × 2.0)/100 = 600/100 = 6.0 cm³. The pressure falls to one third, so the volume triples.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "challenge",
            hints: [
              "Identify p₁, V₁ at the bottom and p₂ at the surface; temperature is constant.",
              "Use p₁V₁ = p₂V₂ and solve for V₂.",
              "Pressure dropped to 1/3, so what factor does the volume change by?"
            ],
            strategy: "decide which way the volume should move before computing"
          }
        ]
      },
      {
        id: "phys-thermal-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Specific heat capacity and latent heat — multi-step calculations and changes of state.",
        questions: [
          {
            id: "phys-thermal-bm2-01",
            question: "Which formula gives the energy needed to raise the temperature of a substance (without a change of state)?",
            options: ["E = mL", "E = mcΔT", "E = mgh", "pV = constant"],
            answerIndex: 1,
            explanation: "E = mcΔT relates energy E to mass m, specific heat capacity c and temperature change ΔT. E = mL is for a change of state (latent heat); E = mgh is gravitational potential energy; pV = constant is Boyle's Law.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bm2-02",
            question: "How much energy is needed to raise the temperature of 0.50 kg of water from 15 °C to 35 °C? (c of water = 4200 J kg⁻¹ K⁻¹)",
            options: ["21 000 J", "42 000 J", "63 000 J", "73 500 J"],
            answerIndex: 1,
            explanation: "ΔT = 35 − 15 = 20 K. E = mcΔT = 0.50 × 4200 × 20 = 42 000 J. A common slip is to use 35 °C instead of the change of 20 K.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "Find ΔT first: subtract the initial from the final temperature.",
              "Use E = mcΔT with m = 0.50 kg.",
              "0.50 × 4200 = 2100; then multiply by ΔT."
            ]
          },
          {
            id: "phys-thermal-bm2-03",
            question: "Two blocks of equal mass receive the same amount of energy and start at the same temperature. Block X has a higher specific heat capacity than block Y. Which block ends up hotter?",
            options: [
              "Block X, because higher c stores more energy",
              "Block Y, because lower c means a larger temperature rise for the same energy",
              "Both reach the same temperature",
              "Cannot be determined without the masses"
            ],
            answerIndex: 1,
            explanation: "Rearranging E = mcΔT gives ΔT = E/(mc). With E and m the same, the block with the smaller c has the larger ΔT. Block Y (lower c) therefore reaches the higher temperature.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "Rearrange E = mcΔT to make ΔT the subject.",
              "If E and m are fixed, how does ΔT depend on c?",
              "Smaller c on the bottom of the fraction gives a bigger ΔT."
            ]
          },
          {
            id: "phys-thermal-bm2-04",
            question: "How much energy is required to completely melt 2.0 kg of ice at 0 °C? (specific latent heat of fusion of water = 3.34 × 10⁵ J/kg)",
            options: ["1.67 × 10⁵ J", "3.34 × 10⁵ J", "6.68 × 10⁵ J", "8.40 × 10⁶ J"],
            answerIndex: 2,
            explanation: "E = mL = 2.0 × 3.34 × 10⁵ = 6.68 × 10⁵ J. No mcΔT term is needed because the ice is already at its melting point and the temperature does not change during melting.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "Melting at the melting point uses E = mL, not mcΔT.",
              "Multiply the mass by the latent heat of fusion.",
              "2.0 × 3.34 × 10⁵ = ?"
            ]
          },
          {
            id: "phys-thermal-bm2-05",
            question: "A 1500 W kettle heats 0.40 kg of water from 20 °C to 100 °C. Ignoring heat losses, roughly how long does this take? (c of water = 4200 J kg⁻¹ K⁻¹)",
            options: ["45 s", "90 s", "112 s", "224 s"],
            answerIndex: 1,
            explanation: "Energy needed: E = mcΔT = 0.40 × 4200 × (100 − 20) = 0.40 × 4200 × 80 = 134 400 J. Time = E/P = 134 400/1500 = 89.6 s ≈ 90 s.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "First find the energy needed with E = mcΔT (ΔT = 80 K).",
              "Then use power = energy/time, so time = energy/power.",
              "Divide your energy by 1500 W."
            ],
            strategy: "two-step: energy then time"
          },
          {
            id: "phys-thermal-bm2-06",
            question: "Why does the temperature of pure water stay at 100 °C while it is boiling, even though the hob continues to supply energy?",
            options: [
              "The energy is reflected away by the steam",
              "The supplied energy increases the potential energy of particles as bonds are broken, not their kinetic energy",
              "Water cannot get hotter than 100 °C under any conditions",
              "The thermometer stops working at 100 °C"
            ],
            answerIndex: 1,
            explanation: "During boiling the energy supplied is used to separate the molecules against the intermolecular forces (increasing potential energy) rather than to speed them up. Temperature depends on average kinetic energy, which stays constant — so the temperature is constant while the liquid turns to vapour.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "Temperature tracks average kinetic energy only.",
              "Where does the energy go during a change of state?",
              "Think about potential energy and breaking bonds."
            ]
          },
          {
            id: "phys-thermal-bm2-07",
            question: "0.10 kg of water at 100 °C is completely turned into steam at 100 °C. (specific latent heat of vaporisation of water = 2.26 × 10⁶ J/kg) How much energy is needed?",
            options: ["2.26 × 10⁴ J", "1.13 × 10⁵ J", "2.26 × 10⁵ J", "2.26 × 10⁶ J"],
            answerIndex: 2,
            explanation: "E = mL = 0.10 × 2.26 × 10⁶ = 2.26 × 10⁵ J. Only the latent heat term is needed because there is no temperature change.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "No temperature change means use E = mL only.",
              "Multiply 0.10 kg by 2.26 × 10⁶ J/kg.",
              "Keep track of the power of ten in the answer."
            ]
          },
          {
            id: "phys-thermal-bm2-08",
            question: "An ice cube of mass 0.050 kg at 0 °C is added to a warm drink. How much energy must the drink supply to melt the ice and then warm the resulting water from 0 °C to 20 °C? (L_f = 3.34 × 10⁵ J/kg; c of water = 4200 J kg⁻¹ K⁻¹)",
            options: ["1.67 × 10⁴ J", "2.09 × 10⁴ J", "4.20 × 10³ J", "3.34 × 10⁵ J"],
            answerIndex: 1,
            explanation: "Two stages. Melting: E₁ = mL = 0.050 × 3.34 × 10⁵ = 1.67 × 10⁴ J. Warming the melt-water: E₂ = mcΔT = 0.050 × 4200 × 20 = 4.20 × 10³ J. Total = 16 700 + 4200 = 20 900 J ≈ 2.09 × 10⁴ J.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "challenge",
            hints: [
              "This is two stages: first melt the ice, then warm the water.",
              "Stage 1 uses E = mL; stage 2 uses E = mcΔT with ΔT = 20 K.",
              "Add the two energies together for the total."
            ],
            strategy: "split into change-of-state then temperature-change stages"
          },
          {
            id: "phys-thermal-bm2-09",
            question: "A 50 W heater is used to melt ice at 0 °C. After 3.0 minutes, 26.7 g of ice has melted (no temperature change). Which value of the specific latent heat of fusion does this give?",
            options: ["1.1 × 10⁴ J/kg", "3.34 × 10⁵ J/kg", "9.0 × 10³ J/kg", "1.5 × 10⁶ J/kg"],
            answerIndex: 1,
            explanation: "Energy supplied E = Pt = 50 × (3.0 × 60) = 50 × 180 = 9000 J. Mass melted m = 26.7 g = 0.0267 kg. L = E/m = 9000/0.0267 ≈ 3.37 × 10⁵ J/kg, i.e. about 3.34 × 10⁵ J/kg — the accepted value for water.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "challenge",
            hints: [
              "Find the energy supplied: E = P × t with t in seconds.",
              "Convert the mass to kilograms (26.7 g = 0.0267 kg).",
              "Rearrange E = mL to L = E/m."
            ],
            strategy: "convert units, then rearrange E = mL"
          },
          {
            id: "phys-thermal-bm2-10",
            question: "Which change requires the most energy for the same 1.0 kg of water? Use c = 4200 J kg⁻¹ K⁻¹, L_f = 3.34 × 10⁵ J/kg, L_v = 2.26 × 10⁶ J/kg.",
            options: [
              "Heating liquid water from 0 °C to 100 °C",
              "Melting 1.0 kg of ice at 0 °C",
              "Boiling 1.0 kg of water to steam at 100 °C",
              "Heating liquid water from 20 °C to 50 °C"
            ],
            answerIndex: 2,
            explanation: "Compute each: heating 0→100 °C: mcΔT = 4200 × 100 = 4.2 × 10⁵ J. Melting: mL_f = 3.34 × 10⁵ J. Boiling: mL_v = 2.26 × 10⁶ J. Heating 20→50 °C: 4200 × 30 = 1.26 × 10⁵ J. Boiling requires by far the most because the latent heat of vaporisation is the largest value.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "challenge",
            hints: [
              "Work out the energy for each option separately.",
              "Use mcΔT for the heating options and mL for the change-of-state options.",
              "Compare the four numbers — the latent heat of vaporisation is the largest."
            ],
            strategy: "evaluate every option numerically before choosing"
          }
        ]
      },
      {
        id: "phys-thermal-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Conduction, convection and radiation — mechanisms, surfaces, and everyday applications.",
        questions: [
          {
            id: "phys-thermal-bm3-01",
            question: "Which mode of thermal energy transfer can occur through a vacuum?",
            options: ["Conduction", "Convection", "Radiation", "Conduction and convection"],
            answerIndex: 2,
            explanation: "Radiation is an electromagnetic (infrared) wave and needs no medium, so it can cross a vacuum (e.g. the Sun's energy reaching Earth). Conduction and convection both require particles, so neither can occur through a vacuum.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bm3-02",
            question: "Which surface is the best absorber and best emitter of infrared radiation?",
            options: ["Shiny silver", "Shiny white", "Dull black", "Polished metal"],
            answerIndex: 2,
            explanation: "Dull (matt) black surfaces are the best absorbers and the best emitters of thermal radiation. Shiny and light-coloured surfaces are poor absorbers and poor emitters (good reflectors).",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bm3-03",
            question: "Why are metals much better thermal conductors than non-metals such as wood?",
            options: [
              "Metal particles are closer together than wood particles",
              "Metals contain free electrons that transfer kinetic energy rapidly through the material",
              "Metals have a higher specific heat capacity",
              "Metals reflect more radiation"
            ],
            answerIndex: 1,
            explanation: "In metals, delocalised (free) electrons move rapidly throughout the lattice, carrying kinetic energy quickly from hot to cool regions. Non-metals rely only on slower particle-to-particle lattice vibration, so they conduct far less effectively.",
            guideRef: "Conduction and Convection",
            difficulty: "core",
            hints: [
              "What do metals have that non-metals do not?",
              "Free electrons can move and carry energy.",
              "Vibration alone is much slower than electron transport."
            ]
          },
          {
            id: "phys-thermal-bm3-04",
            question: "A beaker of water is heated from the bottom. Which describes the convection current that forms?",
            options: [
              "Warm water sinks because it is denser; cool water rises",
              "Warm water rises because it is less dense; cool water sinks to replace it",
              "Water does not move; energy is transferred by conduction only",
              "Both warm and cool water rise together"
            ],
            answerIndex: 1,
            explanation: "When water at the bottom is heated it expands, its density decreases, and it rises. Cooler, denser water sinks to take its place, setting up a circulating convection current that carries energy through the fluid.",
            guideRef: "Conduction and Convection",
            difficulty: "core",
            hints: [
              "Heating changes the density of a fluid — which way?",
              "Less dense fluid floats on more dense fluid.",
              "Trace the loop: which part rises and which sinks?"
            ]
          },
          {
            id: "phys-thermal-bm3-05",
            question: "Loft insulation is often made of glass fibre or mineral wool containing many small pockets of trapped air. Why is trapped air a good insulator?",
            options: [
              "Air is a metal so it blocks free electrons",
              "Air is a poor conductor, and trapping it also prevents convection currents",
              "Trapped air reflects all radiation",
              "Air increases the rate of conduction through the material"
            ],
            answerIndex: 1,
            explanation: "Air is a poor conductor of heat. Normally moving air can transfer energy by convection, but when the air is trapped in small pockets it cannot circulate, so convection is prevented too. Both effects make trapped air an excellent insulator.",
            guideRef: "Conduction and Convection",
            difficulty: "core",
            hints: [
              "Is air a good or poor conductor?",
              "Why does trapping the air matter — what does it stop?",
              "Think about which two modes of transfer are reduced."
            ]
          },
          {
            id: "phys-thermal-bm3-06",
            question: "Why does the metal handle of a saucepan feel colder to the touch than the wooden handle of a spoon, even when both are at room temperature?",
            options: [
              "The metal is actually at a lower temperature than the wood",
              "Metal conducts thermal energy away from your hand faster than wood does",
              "Wood emits more radiation than metal",
              "The metal contains trapped air that cools your hand"
            ],
            answerIndex: 1,
            explanation: "Both are at the same temperature, but metal is a much better conductor. It draws heat away from your skin rapidly, so your hand cools quickly and the metal feels cold. Wood conducts poorly, so little heat is removed and it feels warmer.",
            guideRef: "Conduction and Convection",
            difficulty: "core",
            hints: [
              "Both objects are at the same temperature — so feeling is not about temperature.",
              "Which material removes heat from your hand faster?",
              "Good conductor = faster heat removal = feels colder."
            ]
          },
          {
            id: "phys-thermal-bm3-07",
            question: "Solar water-heating panels are usually painted matt black. What is the main reason?",
            options: [
              "Matt black is the cheapest paint",
              "Matt black surfaces are the best absorbers of solar (infrared) radiation",
              "Matt black surfaces reflect the most radiation",
              "Matt black reduces conduction through the panel"
            ],
            answerIndex: 1,
            explanation: "A matt black surface is the best absorber of radiation, so it absorbs the maximum amount of incoming solar energy, which is then transferred to the water. Shiny or light surfaces would reflect much of the radiation away.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bm3-08",
            question: "In a vacuum flask, what is the specific job of the silvered (mirrored) walls?",
            options: [
              "They prevent conduction across the gap",
              "They prevent convection currents",
              "They reduce energy transfer by radiation in both directions",
              "They increase the specific heat capacity of the contents"
            ],
            answerIndex: 2,
            explanation: "The vacuum stops conduction and convection. Radiation, however, can cross a vacuum. The silvered walls are poor emitters and poor absorbers (good reflectors), so they minimise radiation loss from the hot contents and radiation gain from outside — reducing radiation transfer in both directions.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "core",
            hints: [
              "The vacuum already handles two modes — which is left?",
              "Radiation can cross a vacuum, so something must reduce it.",
              "Shiny silver is a poor emitter and absorber."
            ]
          },
          {
            id: "phys-thermal-bm3-09",
            question: "A heating element placed at the top of a tank of water warms the water near it but the water at the bottom stays cold for a long time. Why?",
            options: [
              "Radiation cannot reach the bottom of the tank",
              "The warm water at the top is less dense and stays at the top, so no convection current circulates downward",
              "Water at the bottom has a higher specific heat capacity",
              "Conduction in water is extremely fast"
            ],
            answerIndex: 1,
            explanation: "Heated water is less dense and stays at the top, so no convection current is set up to carry energy downward (warm water will not sink). Water is a poor conductor, so energy reaches the bottom only very slowly. This is why immersion heaters are placed near the bottom of a tank.",
            guideRef: "Conduction and Convection",
            difficulty: "challenge",
            hints: [
              "Where does warm, less dense water tend to stay?",
              "For a convection loop you need warm fluid below cool fluid — is that the case here?",
              "Remember water is a poor conductor."
            ],
            strategy: "check whether the geometry allows a convection current to form"
          },
          {
            id: "phys-thermal-bm3-10",
            question: "Which everyday observation is explained mainly by radiation rather than conduction or convection?",
            options: [
              "A metal spoon left in hot soup becomes hot at the handle",
              "You feel warmth on your face from a glowing fire across the room",
              "Warm air rises from a radiator and circulates around a room",
              "A wooden table top stays at room temperature"
            ],
            answerIndex: 1,
            explanation: "Warmth felt across a room from a fire travels mostly as infrared radiation — it reaches you in a straight line through the air without needing the air to carry it. The spoon is conduction, the circulating warm air is convection, and the wooden table is simply a poor conductor at room temperature.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "challenge",
            hints: [
              "Which option involves energy crossing a gap quickly without moving air?",
              "Radiation travels in straight lines and needs no medium.",
              "Classify each of the other options first."
            ]
          }
        ]
      },
      {
        id: "phys-thermal-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Mixed synthesis — states of matter, gas behaviour, energy changes and heat transfer combined.",
        questions: [
          {
            id: "phys-thermal-bm4-01",
            question: "Which sequence correctly lists the states of matter in order of increasing particle separation?",
            options: ["gas, liquid, solid", "solid, liquid, gas", "liquid, solid, gas", "solid, gas, liquid"],
            answerIndex: 1,
            explanation: "Particles are closest in a solid, slightly more spaced (but still close) in a liquid, and widely separated in a gas. So increasing separation runs solid → liquid → gas.",
            guideRef: "The Kinetic Particle Model",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bm4-02",
            question: "Which statement about temperature is correct?",
            options: [
              "Temperature is the total energy of all the particles in an object",
              "Temperature is a measure of the average kinetic energy of the particles",
              "Temperature measures the potential energy stored in bonds",
              "Two objects at different temperatures always have different internal energies regardless of size"
            ],
            answerIndex: 1,
            explanation: "Temperature is a measure of the average kinetic energy of the particles. The total energy (kinetic + potential) is the internal energy, which also depends on the amount of substance — so a large cool object can have more internal energy than a small hot one, making Option D wrong.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "core",
            hints: [
              "Temperature is an average, not a total.",
              "Which type of energy does temperature track?",
              "Compare temperature with internal energy."
            ]
          },
          {
            id: "phys-thermal-bm4-03",
            question: "A fixed mass of gas has its absolute (kelvin) temperature doubled at constant volume. What happens to its pressure?",
            options: ["It halves", "It stays the same", "It doubles", "It quadruples"],
            answerIndex: 2,
            explanation: "At constant volume, the pressure of a fixed mass of gas is proportional to its absolute temperature (p/T = constant). Doubling the kelvin temperature doubles the pressure. The temperature must be in kelvin for this proportionality to hold.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "challenge",
            hints: [
              "At constant volume, pressure is proportional to absolute (kelvin) temperature.",
              "Doubling T (in kelvin) does what to p?",
              "Make sure you are thinking in kelvin, not °C."
            ],
            strategy: "use the constant-volume pressure law p ∝ T (kelvin)"
          },
          {
            id: "phys-thermal-bm4-04",
            question: "A gas occupies 250 cm³ at a pressure of 120 kPa. At constant temperature, to what pressure must it be raised to reduce its volume to 150 cm³?",
            options: ["72 kPa", "150 kPa", "200 kPa", "300 kPa"],
            answerIndex: 2,
            explanation: "Boyle's Law: p₂ = p₁V₁/V₂ = (120 × 250)/150 = 30 000/150 = 200 kPa. The volume decreased, so the pressure must rise above 120 kPa.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "core",
            hints: [
              "Constant temperature means p₁V₁ = p₂V₂.",
              "Rearrange to p₂ = p₁V₁ / V₂.",
              "Smaller volume → larger pressure, so the answer must exceed 120 kPa."
            ]
          },
          {
            id: "phys-thermal-bm4-05",
            question: "A 0.30 kg block of metal cools from 90 °C to 30 °C and releases 7020 J of energy. What is the specific heat capacity of the metal?",
            options: ["130 J kg⁻¹ K⁻¹", "234 J kg⁻¹ K⁻¹", "390 J kg⁻¹ K⁻¹", "468 J kg⁻¹ K⁻¹"],
            answerIndex: 2,
            explanation: "ΔT = 90 − 30 = 60 K. Rearranging E = mcΔT: c = E/(mΔT) = 7020/(0.30 × 60) = 7020/18 = 390 J kg⁻¹ K⁻¹ (the value for copper).",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "ΔT = 90 − 30 = 60 K.",
              "Rearrange E = mcΔT to c = E/(mΔT).",
              "Divide 7020 by (0.30 × 60)."
            ]
          },
          {
            id: "phys-thermal-bm4-06",
            question: "Why does a puddle of water gradually disappear on a dry day even when the air temperature is well below 100 °C?",
            options: [
              "The water boils at low temperature",
              "Evaporation occurs at the surface at any temperature as the fastest molecules escape",
              "The water is conducted into the ground only",
              "Radiation breaks the water into gas"
            ],
            answerIndex: 1,
            explanation: "Evaporation happens at the surface of a liquid at any temperature: some surface molecules have enough kinetic energy to escape. This continues until the puddle has fully evaporated, without ever reaching the boiling point.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bm4-07",
            question: "A kettle is left switched on after the water reaches 100 °C and 0.020 kg of water boils away. (L_v of water = 2.26 × 10⁶ J/kg) How much energy was used to do this?",
            options: ["4.52 × 10³ J", "4.52 × 10⁴ J", "1.13 × 10⁵ J", "2.26 × 10⁶ J"],
            answerIndex: 1,
            explanation: "The water is already at 100 °C, so the energy goes entirely into vaporisation: E = mL = 0.020 × 2.26 × 10⁶ = 45 200 J = 4.52 × 10⁴ J.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "The water is at boiling point already — use E = mL.",
              "Multiply 0.020 kg by 2.26 × 10⁶ J/kg.",
              "Check the power of ten in your answer."
            ]
          },
          {
            id: "phys-thermal-bm4-08",
            question: "Which combination of features would minimise heat loss from a hot drink most effectively?",
            options: [
              "A thin metal cup with a shiny outside and no lid",
              "A thick plastic cup with a dull black outside and a lid",
              "A thick insulating cup with a shiny outer surface and a close-fitting lid",
              "A thin glass cup with a dull black outside and no lid"
            ],
            answerIndex: 2,
            explanation: "Best insulation needs: a poor conductor for the walls (thick insulating material reduces conduction), a lid to stop convection and evaporation losses from the top, and a shiny outer surface to reduce radiation loss. Option C combines all three; the others each fail on at least one count.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "challenge",
            hints: [
              "Think about all three transfer modes plus evaporation.",
              "Which wall material reduces conduction? Which surface reduces radiation?",
              "What does a lid prevent?"
            ],
            strategy: "check each option against conduction, convection, radiation and evaporation"
          },
          {
            id: "phys-thermal-bm4-09",
            question: "0.50 kg of water at 80 °C is mixed with 0.50 kg of water at 20 °C in an insulated container. What is the final temperature?",
            options: ["40 °C", "50 °C", "60 °C", "It depends on the specific heat capacity"],
            answerIndex: 1,
            explanation: "Equal masses of the same liquid mean the heat lost by the hot water equals the heat gained by the cold water: 0.50 c (80 − T) = 0.50 c (T − 20). The c and mass cancel, giving 80 − T = T − 20, so 2T = 100 and T = 50 °C — the average of the two temperatures.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "Heat lost by hot water = heat gained by cold water.",
              "Equal masses of the same liquid mean m and c cancel.",
              "Solve 80 − T = T − 20."
            ],
            strategy: "set heat lost equal to heat gained and cancel common factors"
          },
          {
            id: "phys-thermal-bm4-10",
            question: "On a sunny day a closed car becomes much hotter inside than the outside air. Which best explains this 'greenhouse' effect?",
            options: [
              "Glass conducts heat into the car very quickly",
              "Short-wavelength solar radiation passes in through the glass, is absorbed and re-emitted as longer-wavelength infrared which the glass does not let out easily",
              "The car's metal body emits extra radiation inward",
              "Convection currents from outside push hot air into the car"
            ],
            answerIndex: 1,
            explanation: "Glass is transparent to the short-wavelength radiation from the hot Sun. This is absorbed by the interior surfaces, which warm up and re-emit longer-wavelength infrared. The glass is much less transparent to this long-wave infrared, so the energy is trapped inside and the temperature rises.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "challenge",
            hints: [
              "Sunlight is short-wavelength; warm objects re-emit longer-wavelength infrared.",
              "How does glass treat these two wavelengths differently?",
              "Energy gets in easily but cannot get out as easily."
            ],
            strategy: "compare the transmission of glass to short- vs long-wave radiation"
          }
        ]
      }
    ],
    qaPapers: [
      {
        id: "phys-thermal-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Kinetic model, states of matter, internal energy and thermal expansion.",
        questions: [
          {
            id: "phys-thermal-bq1-01",
            question: "Describe the arrangement, separation and motion of the particles in (a) a solid, (b) a liquid, and (c) a gas. (6 marks)",
            marks: 6,
            modelAnswer: "(a) Solid: particles are closely packed in a regular, fixed lattice arrangement. They are touching (minimum separation) and they vibrate about fixed positions but cannot move from place to place.\n\n(b) Liquid: particles are still close together (similar separation to a solid) but arranged randomly/irregularly. They can move past one another, allowing the liquid to flow.\n\n(c) Gas: particles are widely separated (on average about ten times their diameter apart) and arranged randomly. They move rapidly in all directions, with negligible forces between them except during collisions.",
            markScheme: [
              "(a) Solid: regular / fixed arrangement, closely packed (1)",
              "(a) Solid: vibrate about fixed positions / cannot move past each other (1)",
              "(b) Liquid: close together but random / irregular arrangement (1)",
              "(b) Liquid: can move / slide past one another, can flow (1)",
              "(c) Gas: widely separated / far apart, random arrangement (1)",
              "(c) Gas: move rapidly / randomly in all directions (1)"
            ],
            commonError: "Stating that liquid particles are 'far apart' — liquid particles are close together (like a solid); it is their random arrangement and ability to slide that distinguishes a liquid.",
            guideRef: "The Kinetic Particle Model",
            difficulty: "warmup",
            hints: [
              "Treat arrangement, separation and motion as three things to mention for each state.",
              "Solids and liquids have similar separation — what differs is arrangement and movement.",
              "Gases are the only state with wide separation and rapid free movement."
            ]
          },
          {
            id: "phys-thermal-bq1-02",
            question: "A smoke cell is illuminated and viewed under a microscope. Bright specks are seen to move in a random, jerky way.\n(a) Name this effect. (1 mark)\n(b) Explain what the bright specks are and why they move as they do. (3 marks)\n(c) State what this observation tells us about the air molecules. (2 marks)",
            marks: 6,
            modelAnswer: "(a) Brownian motion.\n\n(b) The bright specks are smoke particles reflecting the light. They move because they are constantly bombarded by the much smaller, invisible air molecules. At any instant the collisions on different sides are unequal, so there is a net force in a randomly changing direction, giving the jerky path.\n\n(c) It shows that the air molecules are very small (they are invisible yet can move much larger smoke particles), that they are moving (they must be in motion to cause bombardment), and that their motion is random (the smoke moves randomly, not in one steady direction).",
            markScheme: [
              "(a) Brownian motion (1)",
              "(b) Specks are smoke particles scattering/reflecting light (1)",
              "(b) Bombarded by air molecules, collisions unequal on different sides (1)",
              "(b) Net force in constantly changing/random direction (1)",
              "(c) Air molecules are very small / moving fast (1)",
              "(c) Air molecules move randomly (in all directions) (1)"
            ],
            commonError: "Saying the smoke particles themselves are the molecules — the visible specks are large smoke grains; the air molecules doing the bombarding are far smaller and invisible.",
            guideRef: "The Kinetic Particle Model",
            difficulty: "core",
            hints: [
              "The effect has a specific two-word name.",
              "Separate what you can see (smoke) from what you cannot (air molecules).",
              "For (c), list what the randomness and the size of the specks each imply."
            ]
          },
          {
            id: "phys-thermal-bq1-03",
            question: "Explain the difference between temperature and internal energy. Use the example of a small cup of boiling water and a large bucket of warm water to illustrate your answer. (5 marks)",
            marks: 5,
            modelAnswer: "Temperature is a measure of the average kinetic energy of the particles in a substance. Internal energy is the total of the kinetic and potential energies of all the particles in the substance, so it also depends on how many particles there are (the amount of substance).\n\nThe small cup of boiling water has a higher temperature, so its particles have a greater average kinetic energy. However, the large bucket of warm water contains far more particles, so the total (internal) energy can be greater than that of the small cup even though its temperature is lower. This shows temperature (average per particle) and internal energy (total of all particles) are different quantities.",
            markScheme: [
              "Temperature = measure of average kinetic energy of particles (1)",
              "Internal energy = total kinetic + potential energy of all particles (1)",
              "Internal energy depends on amount of substance / number of particles (1)",
              "Cup has higher temperature / greater average KE per particle (1)",
              "Bucket can have greater internal energy because it has many more particles (1)"
            ],
            commonError: "Treating 'hotter' as automatically meaning 'more energy' — a large cooler object can hold more internal energy than a small hot one.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "core",
            hints: [
              "One is an average per particle; the other is a total over all particles.",
              "Why does the number of particles matter for internal energy?",
              "Use the cup vs bucket comparison to make the point concrete."
            ]
          },
          {
            id: "phys-thermal-bq1-04",
            question: "Explain, using the kinetic particle model, why a solid metal bar expands when its temperature is raised. (4 marks)",
            marks: 4,
            modelAnswer: "Raising the temperature gives the particles more kinetic energy, so they vibrate with a larger amplitude about their fixed positions. Because the forces between particles are not symmetrical (it is harder to push particles together than to pull them apart), a larger vibration leads to a greater average separation between neighbouring particles. As the average spacing increases throughout the bar, the overall length and volume of the bar increases — it expands. The number and size of the particles do not change; only their average separation increases.",
            markScheme: [
              "Higher temperature gives particles more kinetic energy / they vibrate more (1)",
              "Larger amplitude of vibration (1)",
              "Average separation between particles increases (1)",
              "So the bar/material expands; particles do not change size or number (1)"
            ],
            commonError: "Saying the particles themselves get bigger — particles do not expand; it is the average distance between them that increases.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "core",
            hints: [
              "Link temperature to the energy and amplitude of vibration.",
              "Greater vibration means a greater average gap between particles.",
              "Make clear what stays the same (particle size/number)."
            ]
          },
          {
            id: "phys-thermal-bq1-05",
            question: "A railway engineer must allow for the thermal expansion of steel rails.\n(a) State why gaps are sometimes left between sections of rail. (1 mark)\n(b) A steel rail is 25.0 m long at 10 °C. Steel expands by 1.2 × 10⁻⁵ of its length for each 1 °C rise. Calculate the increase in length of the rail when its temperature rises to 40 °C. (3 marks)\n(c) Suggest one problem that could occur if no allowance for expansion is made. (1 mark)",
            marks: 5,
            modelAnswer: "(a) The gaps give the rails room to expand on hot days without pushing against each other.\n\n(b) Temperature rise ΔT = 40 − 10 = 30 °C.\nIncrease in length = original length × expansivity × ΔT = 25.0 × 1.2 × 10⁻⁵ × 30\n= 25.0 × 3.6 × 10⁻⁴ = 9.0 × 10⁻³ m = 9.0 mm.\n\n(c) Without an allowance the rails would push against each other as they expand and could buckle (bend out of shape), making the track unsafe.",
            markScheme: [
              "(a) Gaps allow room for expansion on heating (1)",
              "(b) ΔT = 30 °C / 30 K (1)",
              "(b) Substitution: 25.0 × 1.2 × 10⁻⁵ × 30 (1)",
              "(b) Increase = 9.0 × 10⁻³ m / 9.0 mm (1)",
              "(c) Rails buckle / bend / track distorts (1)"
            ],
            commonError: "Using the final temperature (40 °C) rather than the temperature change (30 °C) in the expansion calculation.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "core",
            hints: [
              "Find the temperature change first.",
              "Expansion = original length × expansivity × temperature change.",
              "Keep careful track of the power of ten and convert to mm at the end."
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "ΔT = 40 − 10 = 30 °C",
                  "Increase = 25.0 × (1.2 × 10⁻⁵) × 30",
                  "= 25.0 × 3.6 × 10⁻⁴ = 9.0 × 10⁻³ m",
                  "= 9.0 mm"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bq1-06",
            question: "A bimetallic strip is used in a fire alarm.\n(a) Explain what a bimetallic strip is and why it bends when heated. (3 marks)\n(b) Describe how a bimetallic strip can be used to switch on a fire alarm when the temperature becomes too high. (3 marks)",
            marks: 6,
            modelAnswer: "(a) A bimetallic strip is two different metals bonded firmly together along their length. The two metals expand by different amounts for the same temperature rise. When heated, the metal with the greater expansion becomes longer than the other, so the strip is forced to bend, curving toward the side of the metal that expands less.\n\n(b) The bimetallic strip is placed so that, at normal temperatures, a gap remains in an electrical circuit. When the temperature rises (e.g. in a fire), the strip bends. The bending closes the gap so the strip touches a contact, completing the circuit. The completed circuit allows current to flow, switching on the alarm (bell/buzzer).",
            markScheme: [
              "(a) Two different metals bonded/joined together (1)",
              "(a) Metals expand by different amounts for the same temperature change (1)",
              "(a) Greater-expanding metal becomes longer, so strip bends/curves (1)",
              "(b) At normal temperature there is a gap / circuit is open (1)",
              "(b) On heating the strip bends and touches a contact (1)",
              "(b) Circuit is completed, current flows and the alarm sounds (1)"
            ],
            commonError: "Forgetting to explain that the strip completes a circuit — simply saying 'the strip bends' does not explain how the alarm is actually switched on.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "core",
            hints: [
              "Two metals, different expansion — what does that cause?",
              "For (b), think of the strip as a switch in a circuit.",
              "Describe the circuit before and after the strip bends."
            ]
          },
          {
            id: "phys-thermal-bq1-07",
            question: "(Challenge) A sealed flask contains a fixed mass of gas. The kinetic particle model is used to explain gas pressure.\n(a) Explain, in terms of molecules, how a gas exerts a pressure on the walls of its container. (3 marks)\n(b) Explain why the pressure increases when the gas is heated at constant volume. (3 marks)\n(c) The gas pressure is 100 kPa at 27 °C. The temperature is raised to 327 °C at constant volume. Use the fact that pressure is proportional to absolute temperature to calculate the new pressure. (3 marks)",
            marks: 9,
            modelAnswer: "(a) The gas molecules move rapidly and randomly and collide with the walls of the container. At each collision a molecule's momentum changes, so it exerts a small force on the wall. The average effect of the enormous number of collisions per second produces a steady force per unit area — the gas pressure.\n\n(b) Heating the gas increases the average kinetic energy of the molecules, so they move faster. At constant volume they therefore collide with the walls more frequently and each collision delivers a greater force. More frequent, harder collisions mean a greater force per unit area, so the pressure increases.\n\n(c) Convert to kelvin: T₁ = 27 + 273 = 300 K; T₂ = 327 + 273 = 600 K.\nPressure is proportional to absolute temperature at constant volume: p₁/T₁ = p₂/T₂.\np₂ = p₁ × T₂/T₁ = 100 × 600/300 = 100 × 2 = 200 kPa.",
            markScheme: [
              "(a) Molecules move rapidly/randomly and collide with the walls (1)",
              "(a) Each collision exerts a force (change of momentum) on the wall (1)",
              "(a) Many collisions per second give a steady force per unit area = pressure (1)",
              "(b) Heating increases average KE / speed of molecules (1)",
              "(b) More frequent collisions with the walls (constant volume) (1)",
              "(b) Each collision harder / greater force, so pressure increases (1)",
              "(c) Converts to kelvin: 300 K and 600 K (1)",
              "(c) Uses p₁/T₁ = p₂/T₂ with kelvin temperatures (1)",
              "(c) p₂ = 200 kPa (1)"
            ],
            commonError: "Using temperatures in °C in the proportion p ∝ T. The temperatures must be in kelvin, otherwise the ratio is wrong (e.g. 327/27 gives a nonsensical factor).",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "challenge",
            hints: [
              "Pressure comes from molecular collisions with the walls.",
              "Heating at constant volume changes how often and how hard molecules hit the walls.",
              "For (c), convert °C to kelvin first, then use p₁/T₁ = p₂/T₂."
            ],
            strategy: "particle reasoning for (a)/(b); kelvin conversion and proportion for (c)",
            solutions: [
              {
                label: "Part (c): pressure law at constant volume",
                steps: [
                  "T₁ = 27 + 273 = 300 K",
                  "T₂ = 327 + 273 = 600 K",
                  "p₁/T₁ = p₂/T₂  →  p₂ = p₁ × T₂/T₁",
                  "p₂ = 100 × 600/300 = 100 × 2 = 200 kPa"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bq1-08",
            question: "(Challenge) A diver releases a bubble of air of volume 30 cm³ at a depth where the total pressure is 250 kPa. The bubble rises to just below the surface where the pressure is 100 kPa. The temperature of the water is the same at all depths.\n(a) Calculate the volume of the bubble just below the surface. (3 marks)\n(b) Explain, using the kinetic particle model, why the volume changes as the bubble rises. (3 marks)",
            marks: 6,
            modelAnswer: "(a) Temperature is constant, so Boyle's Law applies: p₁V₁ = p₂V₂.\n(250 × 30) = (100 × V₂)\nV₂ = 7500/100 = 75 cm³.\n\n(b) As the bubble rises, the surrounding water pressure on it decreases. At constant temperature the air molecules keep the same average speed, but with lower external pressure the gas expands. The molecules then spread out over a larger volume, hitting the bubble walls less frequently per unit area, so the internal pressure falls to match the lower external pressure. The volume therefore increases.",
            markScheme: [
              "(a) Uses p₁V₁ = p₂V₂ (constant temperature) (1)",
              "(a) Correct substitution: 250 × 30 = 100 × V₂ (1)",
              "(a) V₂ = 75 cm³ (1)",
              "(b) External (water) pressure on bubble decreases as it rises (1)",
              "(b) Gas expands; molecules keep same average speed (constant T) (1)",
              "(b) Larger volume → fewer wall collisions per unit area → lower pressure to match outside (1)"
            ],
            commonError: "Getting the direction wrong — lower pressure must give a larger volume; check that V₂ > V₁.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "challenge",
            hints: [
              "Temperature constant → Boyle's Law, p₁V₁ = p₂V₂.",
              "The pressure falls as the bubble rises, so the volume should rise.",
              "For (b), link the lower outside pressure to expansion at the particle level."
            ],
            strategy: "predict the direction of change, then compute and check",
            solutions: [
              {
                label: "Boyle's Law calculation",
                steps: [
                  "p₁V₁ = p₂V₂ (constant temperature)",
                  "250 × 30 = 100 × V₂",
                  "7500 = 100 × V₂",
                  "V₂ = 75 cm³"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bq1-09",
            question: "State two ways in which the pressure of a fixed mass of gas in a sealed container can be increased, and for each explain the effect in terms of molecular collisions with the walls. (4 marks)",
            marks: 4,
            modelAnswer: "Way 1 — decrease the volume (at constant temperature): the molecules have less distance to travel between the walls, so they collide with the walls more frequently. More collisions per second per unit area means a greater pressure.\n\nWay 2 — increase the temperature (at constant volume): the molecules gain kinetic energy and move faster, so they collide with the walls more often and each collision exerts a greater force. Both effects increase the force per unit area, raising the pressure.",
            markScheme: [
              "Way 1: reduce the volume (1)",
              "Way 1: molecules hit walls more frequently → higher pressure (1)",
              "Way 2: raise the temperature (1)",
              "Way 2: molecules move faster, hit walls more often / harder → higher pressure (1)"
            ],
            commonError: "Giving two ways but only describing one molecular mechanism, or repeating the same explanation for both — each way needs its own collision-based reasoning.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "core",
            hints: [
              "Think about what you can change: the volume or the temperature.",
              "For volume, focus on the frequency of collisions.",
              "For temperature, focus on both frequency and force of collisions."
            ]
          },
          {
            id: "phys-thermal-bq1-10",
            question: "Compare how gases, liquids and solids respond to the same rise in temperature in terms of thermal expansion, and explain the difference using the kinetic particle model. (4 marks)",
            marks: 4,
            modelAnswer: "For the same temperature rise, gases expand the most, liquids expand more than solids, and solids expand the least. In a gas the particles are far apart with negligible forces between them, so increasing their energy lets them spread out greatly (large expansion). In a liquid the particles are close but only weakly held, so they can move apart moderately. In a solid the strong bonds in the fixed lattice strongly resist any increase in separation, so the particles can only vibrate slightly more and the expansion is very small.",
            markScheme: [
              "Order of expansion: gas > liquid > solid (1)",
              "Gas: particles far apart / negligible forces, so spread out greatly (1)",
              "Liquid: particles close but weakly bonded, expand moderately (1)",
              "Solid: strong lattice bonds resist separation, so expand least (1)"
            ],
            commonError: "Stating the order without linking it to the strength of bonding / particle separation, which is what the marks reward.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "core",
            hints: [
              "First state the order of expansion for the three states.",
              "Link each state to how strongly its particles are held together.",
              "Stronger bonding means less expansion."
            ]
          }
        ]
      },
      {
        id: "phys-thermal-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Specific heat capacity and latent heat — calculations, experiments and changes of state.",
        questions: [
          {
            id: "phys-thermal-bq2-01",
            question: "Define specific heat capacity and state its SI unit. Write down the equation linking energy, mass, specific heat capacity and temperature change. (3 marks)",
            marks: 3,
            modelAnswer: "Specific heat capacity is the energy required to raise the temperature of 1 kg of a substance by 1 °C (or 1 K). Its unit is J kg⁻¹ K⁻¹ (joules per kilogram per kelvin). The equation is E = mcΔT, where E is energy (J), m is mass (kg), c is specific heat capacity (J kg⁻¹ K⁻¹) and ΔT is the temperature change.",
            markScheme: [
              "Energy to raise temperature of 1 kg by 1 °C / 1 K (1)",
              "Unit: J kg⁻¹ K⁻¹ / J/(kg °C) (1)",
              "Equation: E = mcΔT (1)"
            ],
            commonError: "Defining it for an unspecified mass — the definition must refer to 1 kg (per unit mass), otherwise it describes heat capacity, not specific heat capacity.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "warmup",
            hints: [
              "Per unit mass and per unit temperature change.",
              "The unit follows directly from the words 'per kg per K'.",
              "Recall the standard equation form."
            ]
          },
          {
            id: "phys-thermal-bq2-02",
            question: "An electric heater rated at 120 W is used to heat 0.80 kg of cooking oil. The temperature of the oil rises from 18 °C to 78 °C in 16 minutes. Assume no energy is lost to the surroundings.\n(a) Calculate the energy supplied by the heater. (2 marks)\n(b) Calculate the specific heat capacity of the oil. (3 marks)",
            marks: 5,
            modelAnswer: "(a) t = 16 × 60 = 960 s.\nE = P × t = 120 × 960 = 115 200 J.\n\n(b) ΔT = 78 − 18 = 60 K.\nE = mcΔT → c = E/(mΔT) = 115 200/(0.80 × 60) = 115 200/48 = 2400 J kg⁻¹ K⁻¹.",
            markScheme: [
              "(a) t = 960 s (minutes converted to seconds) (1)",
              "(a) E = 120 × 960 = 115 200 J (1)",
              "(b) ΔT = 60 K (1)",
              "(b) Rearranges to c = E/(mΔT) (1)",
              "(b) c = 2400 J kg⁻¹ K⁻¹ (1)"
            ],
            commonError: "Not converting 16 minutes to 960 seconds before using E = Pt, which makes the energy 60 times too small.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "Convert minutes to seconds before using E = Pt.",
              "Find ΔT = final − initial temperature.",
              "Rearrange E = mcΔT to make c the subject."
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "t = 16 × 60 = 960 s",
                  "E = P × t = 120 × 960 = 115 200 J",
                  "ΔT = 78 − 18 = 60 K",
                  "c = E/(m × ΔT) = 115 200/(0.80 × 60) = 115 200/48 = 2400 J kg⁻¹ K⁻¹"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bq2-03",
            question: "Explain the difference between boiling and evaporation. Give two factors that increase the rate of evaporation of a liquid. (5 marks)",
            marks: 5,
            modelAnswer: "Boiling occurs at a fixed temperature (the boiling point) and happens throughout the bulk of the liquid, with bubbles of vapour forming inside the liquid. Evaporation occurs only at the surface of the liquid and can happen at any temperature below the boiling point, as the faster surface molecules escape.\n\nTwo factors that increase the rate of evaporation: (1) increasing the temperature of the liquid, because more molecules have enough energy to escape; (2) increasing the surface area, because more molecules are at the surface and able to escape. (Other acceptable factors: a draught/wind across the surface, or drier/less humid air above the liquid.)",
            markScheme: [
              "Boiling: at fixed boiling point / throughout the liquid / bubbles form (1)",
              "Evaporation: at the surface only (1)",
              "Evaporation: at any temperature (below boiling point) (1)",
              "One factor increasing evaporation rate (temperature / surface area / draught / humidity) (1)",
              "A second valid factor (1)"
            ],
            commonError: "Listing factors without distinguishing boiling from evaporation, or claiming evaporation only happens at the boiling point.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "Compare where each process happens (surface vs throughout) and at what temperature.",
              "Think about what helps the fastest molecules leave the surface.",
              "Temperature, surface area, airflow and humidity all affect evaporation."
            ]
          },
          {
            id: "phys-thermal-bq2-04",
            question: "A drink is cooled by adding ice. 0.040 kg of ice at 0 °C is added to a drink and melts completely; the melt-water is then warmed to the final drink temperature of 5 °C.\n(a) Calculate the energy absorbed in melting the ice. (2 marks)\n(b) Calculate the additional energy absorbed in warming the melt-water from 0 °C to 5 °C. (2 marks)\n(c) Hence state the total energy taken from the drink by the added ice. (1 mark)\n(L_f of water = 3.34 × 10⁵ J/kg; c of water = 4200 J kg⁻¹ K⁻¹)",
            marks: 5,
            modelAnswer: "(a) Melting: E₁ = mL = 0.040 × 3.34 × 10⁵ = 13 360 J ≈ 1.34 × 10⁴ J.\n\n(b) Warming the melt-water: ΔT = 5 − 0 = 5 K.\nE₂ = mcΔT = 0.040 × 4200 × 5 = 840 J.\n\n(c) Total energy taken from the drink = E₁ + E₂ = 13 360 + 840 = 14 200 J (≈ 1.42 × 10⁴ J).",
            markScheme: [
              "(a) Uses E = mL: 0.040 × 3.34 × 10⁵ (1)",
              "(a) E₁ = 1.34 × 10⁴ J / 13 360 J (1)",
              "(b) E₂ = mcΔT = 0.040 × 4200 × 5 = 840 J (1)",
              "(b) Correct ΔT = 5 K used (1)",
              "(c) Total = 14 200 J / 1.42 × 10⁴ J (1)"
            ],
            commonError: "Forgetting the warming stage (b) and quoting only the melting energy, or using mcΔT for the melting stage instead of mL.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "Melting at 0 °C uses E = mL.",
              "Warming the resulting water uses E = mcΔT with ΔT = 5 K.",
              "Add the two energies for the total."
            ],
            solutions: [
              {
                label: "Two-stage method",
                steps: [
                  "Stage 1 (melt): E₁ = mL = 0.040 × 3.34 × 10⁵ = 13 360 J",
                  "Stage 2 (warm): ΔT = 5 K, E₂ = mcΔT = 0.040 × 4200 × 5 = 840 J",
                  "Total = E₁ + E₂ = 13 360 + 840 = 14 200 J"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bq2-05",
            question: "Describe an experiment to determine the specific heat capacity of a metal block. Include the measurements you would take, the equation you would use, and one precaution to improve accuracy. (6 marks)",
            marks: 6,
            modelAnswer: "Take a metal block of known mass m (measured with a balance). Drill two holes in it: one for an electric immersion heater and one for a thermometer. Connect the heater to a power supply through a joulemeter (or measure the voltage V and current I and time t). Record the starting temperature, switch on the heater for a measured time, and record the highest temperature reached to find the temperature change ΔT.\n\nThe energy supplied is E = power × time (or read directly from the joulemeter, E = VIt). Use E = mcΔT and rearrange to c = E/(mΔT) to calculate the specific heat capacity.\n\nA precaution to improve accuracy: lag (insulate) the block to reduce heat loss to the surroundings; also add a little oil/water in the thermometer hole for good thermal contact, and stir/allow time so the thermometer reads the block's true temperature.",
            markScheme: [
              "Measure mass of block with a balance (1)",
              "Use immersion heater and thermometer in the block; measure temperature change ΔT (1)",
              "Measure electrical energy supplied (joulemeter or P × t / VIt) (1)",
              "State E = mcΔT and rearrange to c = E/(mΔT) (1)",
              "Reasonable method to find E and ΔT clearly described (1)",
              "Precaution: insulate/lag block to reduce heat loss (or good thermal contact for thermometer) (1)"
            ],
            commonError: "Omitting how the energy supplied is measured, or not stating the equation used to obtain c from the measurements.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "List every quantity you must measure: mass, energy, temperature change.",
              "How will you measure the electrical energy supplied?",
              "Name a real precaution that reduces a known source of error."
            ],
            strategy: "structure as: measurements → equation → precaution"
          },
          {
            id: "phys-thermal-bq2-06",
            question: "Explain, in terms of energy and particles, why a substance stays at constant temperature while it is melting, even though energy is still being supplied. (4 marks)",
            marks: 4,
            modelAnswer: "While a substance is melting, the energy supplied is used to break the bonds holding the particles in the fixed lattice rather than to make the particles move faster. This increases the potential energy of the particles but not their average kinetic energy. Since temperature is a measure of the average kinetic energy of the particles, and the average kinetic energy does not change, the temperature stays constant until all the solid has melted. This energy is the latent heat of fusion.",
            markScheme: [
              "Energy is used to break bonds / overcome forces between particles (1)",
              "This increases potential energy of particles, not kinetic energy (1)",
              "Temperature depends on average kinetic energy (1)",
              "Average KE unchanged, so temperature constant (until melting complete) (1)"
            ],
            commonError: "Saying 'the energy is stored' without explaining that it goes into potential energy by breaking bonds, and that temperature tracks kinetic (not potential) energy.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "Where does the energy go if the particles do not speed up?",
              "Distinguish potential energy from kinetic energy.",
              "Recall exactly what temperature measures."
            ]
          },
          {
            id: "phys-thermal-bq2-07",
            question: "A person feels cold when they step out of a swimming pool, especially on a windy day.\n(a) Explain, in terms of molecules, why the water evaporating from their skin makes them feel cold. (3 marks)\n(b) Explain why the cooling effect is greater when there is a wind. (2 marks)",
            marks: 5,
            modelAnswer: "(a) The water molecules that escape from the skin during evaporation are the ones with the highest kinetic energy. As these fastest molecules leave, the average kinetic energy of the water molecules remaining on the skin decreases, so the temperature of the water (and the skin) falls. Energy also flows from the warm skin to the evaporating water (supplying the latent heat), cooling the skin further.\n\n(b) Wind blows away the water vapour that collects just above the skin. This keeps the air above the skin less saturated, so fewer molecules return to the liquid (less re-condensation) and the net rate of evaporation stays high, removing energy from the skin faster.",
            markScheme: [
              "(a) Fastest / most energetic molecules escape (1)",
              "(a) Average KE of remaining molecules falls → temperature falls (1)",
              "(a) Energy taken from skin to supply evaporation, so skin cools (1)",
              "(b) Wind removes water vapour from above the skin (1)",
              "(b) Less re-condensation / drier air keeps net evaporation rate high → faster cooling (1)"
            ],
            commonError: "For (b), saying 'the wind is cold' rather than explaining that it removes saturated vapour and speeds up net evaporation.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "Which molecules leave first, and what does that do to the average energy?",
              "Evaporation takes energy from the skin.",
              "For (b), think about the vapour just above the skin and what wind does to it."
            ]
          },
          {
            id: "phys-thermal-bq2-08",
            question: "(Challenge) A 2.0 kW electric kettle contains 0.60 kg of water at 20 °C.\n(a) Calculate the time taken to heat the water to 100 °C, assuming no heat losses. (3 marks)\n(b) The kettle is then left on for a further 90 s at the same power. Calculate the mass of water that boils away in this time. (3 marks)\n(L_v of water = 2.26 × 10⁶ J/kg; c of water = 4200 J kg⁻¹ K⁻¹)",
            marks: 6,
            modelAnswer: "(a) Energy to heat the water: E = mcΔT = 0.60 × 4200 × (100 − 20) = 0.60 × 4200 × 80 = 201 600 J.\nTime = E/P = 201 600/2000 = 100.8 s ≈ 101 s (about 1.7 minutes).\n\n(b) Energy supplied in 90 s: E = P × t = 2000 × 90 = 180 000 J.\nThis goes into boiling water at 100 °C: E = mL → m = E/L = 180 000/(2.26 × 10⁶) = 0.0796 kg ≈ 0.080 kg (about 80 g).",
            markScheme: [
              "(a) E = mcΔT = 0.60 × 4200 × 80 = 201 600 J (1)",
              "(a) time = E/P (1)",
              "(a) t = 201 600/2000 ≈ 101 s (1)",
              "(b) Energy in 90 s = 2000 × 90 = 180 000 J (1)",
              "(b) Uses m = E/L (1)",
              "(b) m = 180 000/(2.26 × 10⁶) ≈ 0.080 kg / 80 g (1)"
            ],
            commonError: "In (b), using c = 4200 (heating) instead of L_v (boiling) — once the water is at 100 °C the energy goes into the change of state, so E = mL is required.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "challenge",
            hints: [
              "Part (a): find the heating energy with E = mcΔT, then time = energy/power.",
              "Part (b): find the energy supplied in 90 s, then use E = mL.",
              "Rearrange E = mL to m = E/L."
            ],
            strategy: "identify when to use mcΔT (heating) vs mL (boiling)",
            solutions: [
              {
                label: "Part (a): heating time",
                steps: [
                  "E = mcΔT = 0.60 × 4200 × 80 = 201 600 J",
                  "t = E/P = 201 600/2000 = 100.8 s ≈ 101 s"
                ]
              },
              {
                label: "Part (b): mass boiled away",
                steps: [
                  "E = P × t = 2000 × 90 = 180 000 J",
                  "m = E/L = 180 000/(2.26 × 10⁶)",
                  "m ≈ 0.080 kg (about 80 g)"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bq2-09",
            question: "(Challenge) A copper calorimeter of mass 0.10 kg contains 0.20 kg of water, both at 18 °C. A 0.15 kg lump of hot metal at 100 °C is dropped in and the mixture settles at 24 °C. Assuming no heat is lost to the surroundings, calculate the specific heat capacity of the metal. (c of water = 4200 J kg⁻¹ K⁻¹; c of copper = 390 J kg⁻¹ K⁻¹) (5 marks)",
            marks: 5,
            modelAnswer: "Heat gained by water: Q_w = m_w c_w ΔT = 0.20 × 4200 × (24 − 18) = 0.20 × 4200 × 6 = 5040 J.\nHeat gained by copper calorimeter: Q_c = m_c c_c ΔT = 0.10 × 390 × 6 = 234 J.\nTotal heat gained = 5040 + 234 = 5274 J.\n\nHeat lost by the metal = m c_metal (100 − 24) = 0.15 × c_metal × 76.\nBy conservation of energy: 0.15 × c_metal × 76 = 5274.\n11.4 × c_metal = 5274.\nc_metal = 5274/11.4 = 462.6 ≈ 463 J kg⁻¹ K⁻¹.",
            markScheme: [
              "Heat gained by water: 0.20 × 4200 × 6 = 5040 J (1)",
              "Heat gained by calorimeter: 0.10 × 390 × 6 = 234 J (1)",
              "Total heat gained = 5274 J; sets equal to heat lost by metal (1)",
              "Heat lost by metal = 0.15 × c × 76 (1)",
              "c_metal = 5274/11.4 ≈ 463 J kg⁻¹ K⁻¹ (1)"
            ],
            commonError: "Forgetting to include the heat gained by the copper calorimeter, which makes the calculated value too low; also using ΔT = 6 K for the metal instead of 76 K.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "challenge",
            hints: [
              "Heat lost by the metal = heat gained by the water AND the calorimeter.",
              "The water and calorimeter both warm by 6 K; the metal cools by 76 K.",
              "Add the two heat-gained terms, then solve for c of the metal."
            ],
            strategy: "energy conservation including the calorimeter",
            solutions: [
              {
                label: "Energy balance method",
                steps: [
                  "Q_water = 0.20 × 4200 × 6 = 5040 J",
                  "Q_calorimeter = 0.10 × 390 × 6 = 234 J",
                  "Total gained = 5040 + 234 = 5274 J",
                  "Metal: 0.15 × c × (100 − 24) = 0.15 × c × 76 = 11.4 c",
                  "11.4 c = 5274  →  c = 462.6 ≈ 463 J kg⁻¹ K⁻¹"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bq2-10",
            question: "A student plots a heating curve for a pure solid heated at a steady rate from below its melting point until it has all turned to vapour. Sketch in words the shape of the graph of temperature against time and explain, for each part, what is happening to the substance. (6 marks)",
            marks: 6,
            modelAnswer: "The graph has five parts. First a rising section: the solid warms up, its particles gaining kinetic energy and temperature rising. Then a flat section (first plateau): the solid melts at its melting point; the temperature stays constant while the latent heat of fusion breaks the lattice bonds (potential energy increases). Then a second rising section: the liquid warms up, particles gaining kinetic energy. Then a second flat section (longer plateau): the liquid boils at its boiling point; temperature stays constant while the latent heat of vaporisation fully separates the particles. Finally a rising section: the vapour (gas) warms up. The two flat parts occur because, during a change of state, energy increases the particles' potential energy rather than their kinetic energy, so temperature does not change.",
            markScheme: [
              "Rising section: solid (then liquid, then gas) warming, KE/temperature increasing (1)",
              "First plateau identified as melting at the melting point (1)",
              "Second plateau identified as boiling at the boiling point (1)",
              "During plateaus temperature is constant (1)",
              "Energy during plateaus breaks bonds / increases potential energy (1)",
              "Correct overall sequence: warm solid, melt, warm liquid, boil, warm gas (1)"
            ],
            commonError: "Drawing only one flat section, or mislabelling which plateau is melting and which is boiling (the boiling plateau is normally longer because L_v > L_f).",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "There are three sloping parts and two flat parts.",
              "The flat parts are the two changes of state.",
              "Explain why the temperature is flat during a change of state."
            ]
          }
        ]
      },
      {
        id: "phys-thermal-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Conduction, convection and radiation — mechanisms, comparisons and insulation.",
        questions: [
          {
            id: "phys-thermal-bq3-01",
            question: "State what is meant by thermal conduction, and explain why metals are much better conductors than non-metals such as plastic. (4 marks)",
            marks: 4,
            modelAnswer: "Thermal conduction is the transfer of thermal energy through a material by particle-to-particle interaction, without the bulk movement of the material. In all materials, particles at the hot end vibrate more and pass energy to neighbours by collision (lattice vibration). Metals conduct far better because they also contain free (delocalised) electrons. These electrons move rapidly throughout the metal, carrying kinetic energy quickly from the hot region to the cool region. Non-metals like plastic have no free electrons, so they rely only on the slower lattice vibration and conduct poorly.",
            markScheme: [
              "Conduction defined: energy transfer through material by particle interaction, no bulk movement (1)",
              "Particles at hot end vibrate more / pass energy to neighbours by collision (1)",
              "Metals have free / delocalised electrons (1)",
              "Free electrons move rapidly and carry energy quickly; non-metals lack these (1)"
            ],
            commonError: "Describing only lattice vibration and not mentioning free electrons — the free electrons are the key reason metals conduct so much better.",
            guideRef: "Conduction and Convection",
            difficulty: "core",
            hints: [
              "Define conduction in terms of particles, no bulk movement.",
              "Two mechanisms exist in metals; only one exists in non-metals.",
              "Name what metals have that non-metals do not."
            ]
          },
          {
            id: "phys-thermal-bq3-02",
            question: "Describe how a convection current is set up when a beaker of water is heated from below. Refer to density in your answer. (4 marks)",
            marks: 4,
            modelAnswer: "The water at the bottom, nearest the heat source, is heated first. Its particles gain kinetic energy and move further apart, so this water expands and its density decreases. The less dense warm water rises. Cooler, denser water from above sinks to take its place. This sinking water is then heated in turn, and the process repeats, setting up a continuous circulating convection current that transfers thermal energy throughout the water.",
            markScheme: [
              "Water near the heat source is heated and expands (1)",
              "Its density decreases / it becomes less dense (1)",
              "Less dense warm water rises; cooler denser water sinks to replace it (1)",
              "Circulation continues, forming a convection current that transfers energy (1)"
            ],
            commonError: "Saying warm water 'is lighter' without referring to density, or omitting that cooler water sinks to replace the rising warm water (which completes the current).",
            guideRef: "Conduction and Convection",
            difficulty: "core",
            hints: [
              "Start with what happens to the water nearest the heat.",
              "Heating changes the density — which way, and what does that cause?",
              "Describe the full loop: rising and sinking."
            ]
          },
          {
            id: "phys-thermal-bq3-03",
            question: "Explain why thermal radiation is different from conduction and convection. State two properties of a surface that affect how much radiation it emits or absorbs. (4 marks)",
            marks: 4,
            modelAnswer: "Thermal radiation is the transfer of thermal energy by infrared electromagnetic waves. Unlike conduction and convection, it does not need a medium — it can travel through a vacuum (for example, energy from the Sun reaching Earth). Conduction and convection both require particles, so they cannot occur through a vacuum.\n\nTwo surface properties that affect emission/absorption of radiation: (1) colour — dull black surfaces emit and absorb more than light surfaces; (2) texture/finish — matt (rough) surfaces emit and absorb more than shiny (polished) surfaces, which reflect radiation.",
            markScheme: [
              "Radiation is (infrared) electromagnetic waves (1)",
              "Radiation needs no medium / can travel through a vacuum, unlike conduction and convection (1)",
              "Property 1: colour — dull black best emitter/absorber (1)",
              "Property 2: surface finish — matt/rough vs shiny/polished affects emission/absorption (1)"
            ],
            commonError: "Saying radiation 'needs air' to travel — radiation is unique precisely because it needs no medium and can cross a vacuum.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "core",
            hints: [
              "What kind of wave is thermal radiation?",
              "The key contrast with conduction/convection is the need for a medium.",
              "Surface colour and finish both matter."
            ]
          },
          {
            id: "phys-thermal-bq3-04",
            question: "A vacuum (Thermos) flask is designed to keep a hot drink hot.\n(a) Explain how the vacuum reduces heat loss. (2 marks)\n(b) Explain how the silvered walls reduce heat loss. (2 marks)\n(c) State one further design feature that reduces heat loss and explain how it works. (2 marks)",
            marks: 6,
            modelAnswer: "(a) The vacuum between the double walls contains virtually no particles. Conduction and convection both need particles to transfer energy, so with no particles present neither can occur across the gap — heat loss by conduction and convection is almost eliminated.\n\n(b) The walls are silvered (mirrored). Shiny silver surfaces are poor emitters of radiation, so little infrared is radiated from the hot contents; they are also good reflectors, so any radiation is reflected back. This minimises heat loss by radiation.\n\n(c) A close-fitting insulating stopper/lid: it is made of a poor conductor (e.g. plastic/cork) and seals the top, stopping warm air escaping by convection and reducing evaporation, both of which would otherwise carry energy away from the top.",
            markScheme: [
              "(a) Vacuum has no / very few particles (1)",
              "(a) So conduction and convection cannot occur across the gap (1)",
              "(b) Silvered walls are poor emitters of radiation / good reflectors (1)",
              "(b) So radiation loss is minimised (1)",
              "(c) Names a feature: insulating stopper/lid or plastic outer case (1)",
              "(c) Explains it (poor conductor / stops convection and evaporation from the top) (1)"
            ],
            commonError: "Claiming the vacuum 'stops radiation' — the vacuum stops conduction and convection; radiation is reduced by the silvered surfaces.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "core",
            hints: [
              "Which two modes need particles, and how does a vacuum affect them?",
              "What is special about a shiny silver surface for radiation?",
              "Think about the top of the flask for the extra feature."
            ]
          },
          {
            id: "phys-thermal-bq3-05",
            question: "Explain why, on a cold day, a tiled floor feels much colder to bare feet than a carpeted floor, even though both are at the same temperature. (3 marks)",
            marks: 3,
            modelAnswer: "Both floors are at the same temperature, so the difference is not about temperature but about how quickly each removes heat from your feet. Tile is a good conductor, so it conducts thermal energy away from your feet rapidly, cooling them quickly and feeling cold. Carpet (with trapped air) is a poor conductor (good insulator), so it removes heat from your feet only slowly, and they stay warmer — the carpet feels warm.",
            markScheme: [
              "Both at the same temperature (so feeling is not due to temperature) (1)",
              "Tile is a good conductor, removes heat from feet quickly (1)",
              "Carpet is a poor conductor / has trapped air, removes heat slowly so feels warmer (1)"
            ],
            commonError: "Assuming the tile is actually colder than the carpet — both are at the same temperature; the difference is the rate of conduction away from the skin.",
            guideRef: "Conduction and Convection",
            difficulty: "core",
            hints: [
              "Start by noting both are at the same temperature.",
              "The feeling depends on how fast heat leaves your feet.",
              "Compare the conducting ability of tile and carpet."
            ]
          },
          {
            id: "phys-thermal-bq3-06",
            question: "A house loses heat through its roof, walls and windows.\n(a) Explain how loft insulation made of mineral wool reduces heat loss through the roof. (3 marks)\n(b) Explain how shiny foil placed behind a radiator on an external wall reduces heat loss. (2 marks)",
            marks: 5,
            modelAnswer: "(a) Mineral wool is a poor conductor and it traps many small pockets of air. Air is itself a poor conductor, so conduction through the layer is small. Because the air is trapped in the fibres it cannot circulate, so convection currents cannot form either. Together these greatly reduce the rate of heat loss by conduction and convection through the roof.\n\n(b) Shiny foil is a good reflector and a poor emitter of infrared radiation. It reflects radiation from the back of the radiator back into the room rather than letting it pass into and warm the external wall, reducing heat loss by radiation through the wall.",
            markScheme: [
              "(a) Mineral wool / air is a poor conductor — reduces conduction (1)",
              "(a) Traps air in small pockets (1)",
              "(a) Trapped air cannot circulate, so no convection currents (1)",
              "(b) Shiny foil reflects radiation / is a poor emitter (1)",
              "(b) Radiation reflected back into room rather than heating the wall (1)"
            ],
            commonError: "For (a), mentioning only that the wool is a poor conductor and forgetting that trapping the air also prevents convection.",
            guideRef: "Conduction and Convection",
            difficulty: "core",
            hints: [
              "Why is trapped air such a good insulator (two reasons)?",
              "Loft insulation reduces both conduction and convection.",
              "For (b), think about what a shiny surface does to radiation."
            ]
          },
          {
            id: "phys-thermal-bq3-07",
            question: "An experiment uses a 'Leslie cube' — a metal cube filled with hot water, with its four vertical faces finished differently (dull black, dull white, shiny black, shiny silver). An infrared detector measures the radiation from each face at the same distance.\n(a) State which face emits the most radiation and which emits the least. (2 marks)\n(b) Explain why a fair comparison requires all four faces to be at the same temperature and the detector at the same distance. (2 marks)\n(c) Predict and explain what the detector reading shows about the dull black face compared with the shiny silver face. (2 marks)",
            marks: 6,
            modelAnswer: "(a) The dull black face emits the most radiation; the shiny silver face emits the least.\n\n(b) The amount of radiation emitted depends on temperature, so all faces must be at the same temperature to ensure that any difference in readings is due to the surface finish and not a temperature difference. The detector reading falls with distance, so it must be the same distance from each face so that only the surface property is being compared. This keeps it a fair test (only the surface is varied).\n\n(c) The detector reads a much higher value for the dull black face than for the shiny silver face, showing that a dull black surface is a far better emitter of infrared radiation than a shiny silver surface (which is a poor emitter / good reflector).",
            markScheme: [
              "(a) Most: dull black (1)",
              "(a) Least: shiny silver (1)",
              "(b) Same temperature so emission depends only on surface, not temperature (1)",
              "(b) Same distance because reading depends on distance — fair test (1)",
              "(c) Higher reading for dull black than shiny silver (1)",
              "(c) Dull black is a better emitter; shiny silver a poor emitter/good reflector (1)"
            ],
            commonError: "Confusing best emitter with best reflector — dull black emits (and absorbs) most; shiny silver reflects most and emits least.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "challenge",
            hints: [
              "Rank the faces by how dull/dark vs shiny/light they are.",
              "For a fair test, what must be kept the same?",
              "Relate the detector reading directly to emission."
            ],
            strategy: "identify the variable under test and control the rest"
          },
          {
            id: "phys-thermal-bq3-08",
            question: "Sea breezes occur at the coast during a hot day, blowing from the sea toward the land.\n(a) Explain, using convection, why a sea breeze blows from sea to land during the day. (4 marks)\n(b) State and briefly explain in which direction the breeze tends to blow at night. (2 marks)",
            marks: 6,
            modelAnswer: "(a) During the day the land heats up faster than the sea (land has a lower specific heat capacity). The air above the warm land is heated, expands, becomes less dense and rises. Cooler, denser air from above the sea then moves in across the surface to replace the rising air — this incoming air is the sea breeze, blowing from sea to land. This is a large-scale convection current driven by the temperature difference between land and sea.\n\n(b) At night the breeze reverses, blowing from land to sea (a land breeze). The land cools faster than the sea, so now the air above the sea is warmer, rises, and cooler air from over the land flows out to replace it.",
            markScheme: [
              "(a) Land heats faster than sea (lower specific heat capacity) (1)",
              "(a) Air above land is heated, expands and becomes less dense / rises (1)",
              "(a) Cooler denser air from over the sea moves in to replace it (1)",
              "(a) This incoming air is the sea breeze (sea → land) (1)",
              "(b) At night the breeze blows from land to sea (1)",
              "(b) Sea now warmer (cools more slowly); air over sea rises, air flows from land (1)"
            ],
            commonError: "Reversing the daytime direction, or not linking the effect to the land heating faster than the sea (the role of specific heat capacity).",
            guideRef: "Conduction and Convection",
            difficulty: "challenge",
            hints: [
              "Which heats up faster in the day, land or sea?",
              "Warm air rises; cooler air flows in to replace it — from where?",
              "At night everything reverses because the land cools faster."
            ],
            strategy: "apply the convection mechanism, then reverse it for night"
          },
          {
            id: "phys-thermal-bq3-09",
            question: "Compare conduction, convection and radiation by stating, for each, (i) what is transferred or moves, and (ii) whether it can occur in a vacuum. Present your answer clearly for all three. (6 marks)",
            marks: 6,
            modelAnswer: "Conduction: (i) thermal energy is passed from particle to particle by vibration (and by free electrons in metals); the material itself does not move. (ii) It cannot occur in a vacuum because it needs particles.\n\nConvection: (i) thermal energy is carried by the bulk movement of a fluid (liquid or gas); warmer, less dense fluid rises and cooler fluid sinks, so the fluid itself moves. (ii) It cannot occur in a vacuum because it needs a fluid (particles) to move.\n\nRadiation: (i) thermal energy is carried by infrared electromagnetic waves; no matter moves, only the wave/energy travels. (ii) It can occur in a vacuum because electromagnetic waves need no medium.",
            markScheme: [
              "Conduction (i): energy passed particle-to-particle / by free electrons; no bulk movement (1)",
              "Conduction (ii): cannot occur in a vacuum (1)",
              "Convection (i): energy carried by bulk movement of a fluid (1)",
              "Convection (ii): cannot occur in a vacuum (1)",
              "Radiation (i): energy carried by infrared electromagnetic waves; no matter moves (1)",
              "Radiation (ii): can occur in a vacuum (1)"
            ],
            commonError: "Saying convection 'moves heat through a solid' — convection needs a fluid; solids cannot convect because their particles cannot move from place to place.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "core",
            hints: [
              "For each mode, ask: what actually moves?",
              "Two modes need particles; one does not.",
              "Organise the answer mode by mode."
            ]
          },
          {
            id: "phys-thermal-bq3-10",
            question: "A camper has two flasks of identical shape: one with a dull black outer surface and one with a shiny silver outer surface. Both are filled with the same hot drink at the same temperature and left in a cool room.\n(a) Predict which flask keeps the drink hot for longer, and explain why. (3 marks)\n(b) The camper wants the flask to keep a cold drink cold in hot sunshine. Explain which outer surface would be better for this purpose. (2 marks)",
            marks: 5,
            modelAnswer: "(a) The shiny silver flask keeps the drink hot for longer. A shiny silver surface is a poor emitter of infrared radiation, so it radiates energy away from the hot drink more slowly than a dull black surface, which is a good emitter and would lose energy by radiation faster. So the silver flask loses heat more slowly and stays hot longer.\n\n(b) The shiny silver surface is again better. A shiny silver surface is a poor absorber (good reflector) of radiation, so it reflects the incoming sunlight rather than absorbing it. This keeps less energy from reaching the cold drink, so the drink stays cold for longer than it would in a dull black flask, which would absorb the sunlight strongly.",
            markScheme: [
              "(a) Shiny silver flask keeps it hot longer (1)",
              "(a) Shiny silver is a poor emitter of radiation (1)",
              "(a) So it loses heat by radiation more slowly than dull black (1)",
              "(b) Shiny silver is better; it is a poor absorber / good reflector (1)",
              "(b) Reflects sunlight so less energy reaches the cold drink (1)"
            ],
            commonError: "Switching answers between parts — the shiny silver surface is best in BOTH cases because a poor emitter is also a poor absorber.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "core",
            hints: [
              "For keeping hot, focus on which surface emits less radiation.",
              "For keeping cold, focus on which surface absorbs less radiation.",
              "A poor emitter is also a poor absorber — so the same surface wins both."
            ]
          }
        ]
      },
      {
        id: "phys-thermal-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Mixed synthesis — gas laws, energy changes, heat transfer and applications combined.",
        questions: [
          {
            id: "phys-thermal-bq4-01",
            question: "A fixed mass of gas is sealed in a cylinder by a frictionless piston.\n(a) State Boyle's Law. (1 mark)\n(b) The gas has a volume of 500 cm³ at a pressure of 100 kPa. The piston is pushed in slowly (so the temperature stays constant) until the pressure is 250 kPa. Calculate the new volume. (3 marks)\n(c) Explain why the process must be carried out slowly for Boyle's Law to apply. (1 mark)",
            marks: 5,
            modelAnswer: "(a) For a fixed mass of gas at constant temperature, the pressure is inversely proportional to the volume (pV = constant).\n\n(b) p₁V₁ = p₂V₂\n100 × 500 = 250 × V₂\nV₂ = 50 000/250 = 200 cm³.\n\n(c) Compressing slowly allows any heat generated to escape so the temperature stays constant; Boyle's Law only holds at constant temperature.",
            markScheme: [
              "(a) Fixed mass, constant temperature, p inversely proportional to V / pV = constant (1)",
              "(b) Uses p₁V₁ = p₂V₂ (1)",
              "(b) Correct substitution 100 × 500 = 250 × V₂ (1)",
              "(b) V₂ = 200 cm³ (1)",
              "(c) Slow process keeps temperature constant (heat can escape) (1)"
            ],
            commonError: "Forgetting the conditions in the law statement (fixed mass and constant temperature), or getting the direction wrong so that V₂ comes out larger than V₁.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "core",
            hints: [
              "State the law with its conditions.",
              "Use p₁V₁ = p₂V₂ and solve for V₂.",
              "Higher pressure must give a smaller volume — check this."
            ],
            solutions: [
              {
                label: "Boyle's Law calculation",
                steps: [
                  "p₁V₁ = p₂V₂",
                  "100 × 500 = 250 × V₂",
                  "50 000 = 250 × V₂",
                  "V₂ = 200 cm³"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bq4-02",
            question: "Explain, using the kinetic particle model, the following everyday observations:\n(a) A balloon left in a hot car expands and may burst. (3 marks)\n(b) A sealed, partly empty plastic water bottle taken from a warm room to a cold mountain top is found to be slightly crushed. (3 marks)",
            marks: 6,
            modelAnswer: "(a) In the hot car the air inside the balloon is heated. The gas molecules gain kinetic energy and move faster, so they hit the balloon's walls more frequently and with greater force, increasing the pressure. If the balloon is free to expand, it grows; if the increased pressure exceeds what the rubber can withstand, the balloon bursts.\n\n(b) On the cold mountain top the air inside the bottle cools. The molecules move more slowly, hitting the walls less often and with less force, so the internal pressure falls. The (higher) atmospheric pressure outside then pushes the bottle walls inward, crushing the bottle until the pressures balance.",
            markScheme: [
              "(a) Heating increases molecular KE / speed (1)",
              "(a) More frequent and harder collisions with walls → higher pressure (1)",
              "(a) Higher pressure expands the balloon / can exceed the rubber's strength and burst (1)",
              "(b) Cooling decreases molecular KE / speed (1)",
              "(b) Fewer / weaker collisions → lower internal pressure (1)",
              "(b) Greater outside (atmospheric) pressure pushes walls in / crushes bottle (1)"
            ],
            commonError: "For (b), forgetting that it is the higher outside atmospheric pressure that crushes the bottle once the inside pressure drops — not the air 'pulling' the walls in.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "core",
            hints: [
              "Link temperature to molecular speed and collision rate.",
              "More/harder collisions = more pressure; fewer/weaker = less pressure.",
              "For (b), compare the pressure inside with the pressure outside."
            ]
          },
          {
            id: "phys-thermal-bq4-03",
            question: "(Challenge) A solar water heater on a roof is a matt black panel through which water flows. On a sunny day, solar radiation delivers energy to the panel at a rate of 800 W. The water flows through at 0.0050 kg/s and is warmed as it passes through.\n(a) Assuming all the absorbed energy goes into the water, calculate the temperature rise of the water as it flows through the panel. (4 marks)\n(b) Explain why the panel is painted matt black. (2 marks)\n(c) Suggest one reason the real temperature rise would be smaller than your calculated value. (1 mark)\n(c of water = 4200 J kg⁻¹ K⁻¹)",
            marks: 7,
            modelAnswer: "(a) In one second, the energy delivered is 800 J and the mass of water passing through is 0.0050 kg.\nUsing E = mcΔT and rearranging: ΔT = E/(mc) = 800/(0.0050 × 4200) = 800/21 = 38.1 ≈ 38 °C.\n\n(b) A matt black surface is the best absorber of (infrared/solar) radiation, so the panel absorbs the maximum amount of the incoming solar energy, which is then transferred to the water.\n\n(c) In reality some absorbed energy is lost to the surroundings (by radiation, convection and conduction from the panel), so less than 800 W actually reaches the water and the temperature rise is smaller.",
            markScheme: [
              "(a) Recognises in 1 s: E = 800 J and m = 0.0050 kg (1)",
              "(a) Uses E = mcΔT rearranged to ΔT = E/(mc) (1)",
              "(a) Substitutes: 800/(0.0050 × 4200) (1)",
              "(a) ΔT ≈ 38 °C (1)",
              "(b) Matt black is the best absorber of radiation, so absorbs maximum solar energy (1)",
              "(c) Heat losses from the panel to surroundings reduce the energy reaching the water (1)"
            ],
            commonError: "Not realising that power (W = J/s) can be combined with the flow rate (kg/s) by working 'per second', so that E = 800 J pairs with m = 0.0050 kg.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "challenge",
            hints: [
              "Work 'per second': in 1 s, 800 J arrives and 0.0050 kg of water flows through.",
              "Use ΔT = E/(mc).",
              "For (c), think about where energy could be lost from a hot panel."
            ],
            strategy: "use a per-second basis to combine power with mass flow rate",
            solutions: [
              {
                label: "Per-second energy balance",
                steps: [
                  "In 1 s: energy E = 800 J; mass of water m = 0.0050 kg",
                  "ΔT = E/(mc) = 800/(0.0050 × 4200)",
                  "= 800/21 = 38.1 °C ≈ 38 °C"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bq4-04",
            question: "A 0.30 kg aluminium saucepan contains 1.2 kg of water, both initially at 20 °C. They are heated together to 100 °C.\n(a) Calculate the energy needed to heat the water. (2 marks)\n(b) Calculate the energy needed to heat the aluminium pan. (2 marks)\n(c) Calculate the total energy supplied and state what fraction goes to the pan. (2 marks)\n(c of water = 4200 J kg⁻¹ K⁻¹; c of aluminium = 900 J kg⁻¹ K⁻¹)",
            marks: 6,
            modelAnswer: "(a) ΔT = 100 − 20 = 80 K. Water: E_w = mcΔT = 1.2 × 4200 × 80 = 403 200 J.\n\n(b) Aluminium: E_Al = mcΔT = 0.30 × 900 × 80 = 21 600 J.\n\n(c) Total energy = 403 200 + 21 600 = 424 800 J. Fraction to the pan = 21 600/424 800 = 0.0508 ≈ 0.051, i.e. about 5%.",
            markScheme: [
              "(a) ΔT = 80 K and E_w = 1.2 × 4200 × 80 = 403 200 J (1)",
              "(a) Correct value with unit (1)",
              "(b) E_Al = 0.30 × 900 × 80 = 21 600 J (1)",
              "(b) Correct value with unit (1)",
              "(c) Total = 424 800 J (1)",
              "(c) Fraction to pan ≈ 0.051 / about 5% (1)"
            ],
            commonError: "Using the same specific heat capacity for both, or forgetting that the pan and water share the same ΔT of 80 K.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "Both the water and the pan rise by 80 K.",
              "Use E = mcΔT separately for each with its own c.",
              "Add for the total, then divide the pan's energy by the total."
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "ΔT = 100 − 20 = 80 K",
                  "Water: E_w = 1.2 × 4200 × 80 = 403 200 J",
                  "Aluminium: E_Al = 0.30 × 900 × 80 = 21 600 J",
                  "Total = 403 200 + 21 600 = 424 800 J",
                  "Fraction to pan = 21 600/424 800 ≈ 0.051 (≈ 5%)"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bq4-05",
            question: "Explain why water is a particularly good substance to use as a coolant in a car engine and as a way of storing energy in hot-water heating systems. Refer to a specific physical property in your answer. (4 marks)",
            marks: 4,
            modelAnswer: "Water has a very high specific heat capacity (4200 J kg⁻¹ K⁻¹). This means a large amount of energy is needed to raise the temperature of each kilogram by 1 K. As a coolant in a car engine, water can absorb a large quantity of thermal energy from the hot engine while its own temperature rises only modestly, carrying that energy away effectively without boiling. In a hot-water heating system, the same high specific heat capacity lets each kilogram of hot water store a large amount of energy, which it can then release gradually to warm the rooms as it cools. Water is also cheap, readily available and safe, which makes it practical.",
            markScheme: [
              "Water has a high specific heat capacity (value 4200 J kg⁻¹ K⁻¹ credited) (1)",
              "It can absorb a lot of energy for a small temperature rise (1)",
              "As a coolant: removes large amounts of heat from the engine effectively (1)",
              "As storage: stores/releases a large amount of energy as it cools (or: cheap/available/safe) (1)"
            ],
            commonError: "Stating that water 'gets hot easily' — the opposite is true: its high specific heat capacity means it heats up slowly, which is exactly why it is a good coolant and energy store.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "Which specific property of water is unusually large?",
              "A high specific heat capacity means a lot of energy per degree.",
              "Apply this to both absorbing heat (coolant) and storing heat."
            ]
          },
          {
            id: "phys-thermal-bq4-06",
            question: "(Challenge) An immersion heater is placed in 0.50 kg of water in an insulated beaker. The heater supplies energy at 90 W. The temperature is recorded every minute and gives a steady rise of 2.4 °C per minute while the water is liquid and below 100 °C.\n(a) Use this data to calculate the specific heat capacity of water. (4 marks)\n(b) The accepted value is 4200 J kg⁻¹ K⁻¹. Calculate the percentage difference between your value and the accepted value, and suggest why the experimental value differs. (3 marks)",
            marks: 7,
            modelAnswer: "(a) In 1 minute (60 s) the energy supplied is E = P × t = 90 × 60 = 5400 J, and the temperature rise is ΔT = 2.4 °C.\nUsing E = mcΔT and rearranging: c = E/(mΔT) = 5400/(0.50 × 2.4) = 5400/1.2 = 4500 J kg⁻¹ K⁻¹.\n\n(b) Percentage difference = (4500 − 4200)/4200 × 100 = 300/4200 × 100 = 7.1%.\nThe experimental value is higher than the accepted value. This is because some energy is lost to the surroundings (the insulation is not perfect) and some warms the beaker and heater, so the measured temperature rise per minute is smaller than it would be if all the energy went into the water. A smaller ΔT in c = E/(mΔT) gives a larger calculated c.",
            markScheme: [
              "(a) Energy per minute E = 90 × 60 = 5400 J (1)",
              "(a) Uses ΔT = 2.4 °C per minute with E = mcΔT (1)",
              "(a) Rearranges to c = E/(mΔT) (1)",
              "(a) c = 5400/(0.50 × 2.4) = 4500 J kg⁻¹ K⁻¹ (1)",
              "(b) Percentage difference = 300/4200 × 100 ≈ 7.1% (1)",
              "(b) States experimental value is higher (1)",
              "(b) Explains heat loss to surroundings/beaker reduces ΔT and raises calculated c (1)"
            ],
            commonError: "Using the per-minute energy with a temperature rise measured over a different time interval — the energy (over 60 s) and the temperature rise (over the same 60 s) must correspond to the same time period.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "challenge",
            hints: [
              "Pick a one-minute interval: find the energy in 60 s and the rise in 60 s.",
              "Rearrange E = mcΔT to find c.",
              "Percentage difference = (your value − accepted)/accepted × 100."
            ],
            strategy: "work over one consistent time interval; then evaluate accuracy",
            solutions: [
              {
                label: "Part (a): specific heat capacity",
                steps: [
                  "In 60 s: E = P × t = 90 × 60 = 5400 J; ΔT = 2.4 °C",
                  "c = E/(mΔT) = 5400/(0.50 × 2.4)",
                  "= 5400/1.2 = 4500 J kg⁻¹ K⁻¹"
                ]
              },
              {
                label: "Part (b): percentage difference",
                steps: [
                  "Difference = 4500 − 4200 = 300 J kg⁻¹ K⁻¹",
                  "Percentage = 300/4200 × 100 = 7.1%"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bq4-07",
            question: "A student is given a hot metal block and asked to investigate how its temperature falls over time as it cools in the open air.\n(a) Name the three ways the block loses thermal energy to the cooler surroundings. (3 marks)\n(b) The block cools quickly at first and then more slowly. Suggest why the rate of cooling decreases as the block's temperature falls. (2 marks)",
            marks: 5,
            modelAnswer: "(a) The block loses energy by conduction (to the cooler air and surface in contact with it), by convection (the air next to the block is warmed, becomes less dense and rises, carrying energy away while cooler air takes its place), and by radiation (the hot block emits infrared radiation to the surroundings).\n\n(b) The rate of energy loss depends on the temperature difference between the block and its surroundings. When the block is very hot this difference is large, so it loses energy quickly. As it cools, the temperature difference becomes smaller, so the rate of energy loss decreases and the temperature falls more slowly.",
            markScheme: [
              "(a) Conduction (1)",
              "(a) Convection (1)",
              "(a) Radiation (1)",
              "(b) Rate of cooling depends on temperature difference with surroundings (1)",
              "(b) Smaller temperature difference as it cools → slower energy loss (1)"
            ],
            commonError: "For (b), saying the block 'runs out of heat' — the slowing is because the temperature difference with the surroundings becomes smaller, reducing the rate of transfer.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "core",
            hints: [
              "Recall the three mechanisms of heat transfer.",
              "What does the rate of energy loss depend on?",
              "As the block cools, how does the temperature difference change?"
            ]
          },
          {
            id: "phys-thermal-bq4-08",
            question: "(Challenge) 0.030 kg of ice at −10 °C is heated until it becomes water at 20 °C. Calculate the total energy required, showing each stage. (c of ice = 2100 J kg⁻¹ K⁻¹; L_f of water = 3.34 × 10⁵ J/kg; c of water = 4200 J kg⁻¹ K⁻¹) (6 marks)",
            marks: 6,
            modelAnswer: "Stage 1 — warm the ice from −10 °C to 0 °C: ΔT = 10 K.\nE₁ = m c_ice ΔT = 0.030 × 2100 × 10 = 630 J.\n\nStage 2 — melt the ice at 0 °C:\nE₂ = m L_f = 0.030 × 3.34 × 10⁵ = 10 020 J.\n\nStage 3 — warm the melt-water from 0 °C to 20 °C: ΔT = 20 K.\nE₃ = m c_water ΔT = 0.030 × 4200 × 20 = 2520 J.\n\nTotal energy = 630 + 10 020 + 2520 = 13 170 J ≈ 1.3 × 10⁴ J.",
            markScheme: [
              "Stage 1: E₁ = 0.030 × 2100 × 10 = 630 J (1)",
              "Stage 2: uses E = mL_f (1)",
              "Stage 2: E₂ = 0.030 × 3.34 × 10⁵ = 10 020 J (1)",
              "Stage 3: E₃ = 0.030 × 4200 × 20 = 2520 J (1)",
              "Adds all three stages (1)",
              "Total = 13 170 J ≈ 1.3 × 10⁴ J (1)"
            ],
            commonError: "Missing a stage (often the warming of the ice from −10 °C to 0 °C), or using the specific heat capacity of water for the ice stage instead of c of ice.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "challenge",
            hints: [
              "There are three stages: warm the ice, melt the ice, warm the water.",
              "Use E = mcΔT for the two warming stages (different c values) and E = mL for melting.",
              "Add all three energies for the total."
            ],
            strategy: "break the process into three separate stages and sum them",
            solutions: [
              {
                label: "Three-stage method",
                steps: [
                  "Stage 1 (warm ice): E₁ = 0.030 × 2100 × 10 = 630 J",
                  "Stage 2 (melt): E₂ = 0.030 × 3.34 × 10⁵ = 10 020 J",
                  "Stage 3 (warm water): E₃ = 0.030 × 4200 × 20 = 2520 J",
                  "Total = 630 + 10 020 + 2520 = 13 170 J ≈ 1.3 × 10⁴ J"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bq4-09",
            question: "Brownian motion and the random motion of gas molecules are central to the kinetic particle model.\n(a) State what is observed in a Brownian motion experiment and what it provides evidence for. (2 marks)\n(b) A gas molecule and a much larger smoke particle are both suspended in air. Explain why the smoke particle moves far more slowly and erratically than an individual air molecule. (3 marks)",
            marks: 5,
            modelAnswer: "(a) In a Brownian motion experiment, small visible particles (such as smoke grains) are seen to move in a random, jerky path. This provides evidence that the surrounding air consists of many small, fast-moving molecules in continuous random motion.\n\n(b) The smoke particle has a much greater mass than an air molecule. The air molecules collide with it from all directions; because the smoke particle is so massive, each collision changes its velocity only slightly, so it moves slowly. Its motion is erratic because the collisions are unequal and random in direction at each instant, giving a small net force that constantly changes direction. An individual air molecule, being far less massive, moves much faster between collisions.",
            markScheme: [
              "(a) Small visible particles move in a random / jerky path (1)",
              "(a) Evidence for small, fast-moving air molecules in continuous random motion (1)",
              "(b) Smoke particle has much greater mass than an air molecule (1)",
              "(b) Each collision changes its velocity only slightly (so it moves slowly) (1)",
              "(b) Unequal/random collisions give a constantly changing net force → erratic motion (1)"
            ],
            commonError: "Not linking the slow movement of the smoke particle to its much larger mass (greater inertia), which is the key point.",
            guideRef: "The Kinetic Particle Model",
            difficulty: "core",
            hints: [
              "Recall what is actually seen and what it proves.",
              "Compare the masses of the smoke particle and an air molecule.",
              "Heavier particle → smaller change in velocity per collision."
            ]
          },
          {
            id: "phys-thermal-bq4-10",
            question: "(Challenge) A designer is comparing two house-wall constructions for keeping heat in during winter. Wall A is a single solid brick layer. Wall B is two brick layers with a sealed air gap (cavity) between them.\n(a) Explain why Wall B loses heat more slowly than Wall A. (3 marks)\n(b) If the cavity in Wall B is filled with foam containing trapped air pockets, explain how this further reduces heat loss compared with an empty sealed cavity. (3 marks)",
            marks: 6,
            modelAnswer: "(a) In Wall A, heat is conducted straight through the solid brick. In Wall B, the air gap between the two brick layers acts as an insulating layer because air is a much poorer conductor than brick, so conduction across the wall is reduced. The energy must also cross the gap, where conduction is slow. Therefore Wall B loses heat more slowly than the solid Wall A.\n\n(b) In an empty sealed cavity, the air can still circulate within the gap, setting up small convection currents that carry energy from the warm inner brick to the cooler outer brick. Filling the cavity with foam traps the air in many tiny pockets so it can no longer circulate, which prevents these convection currents. The foam (and trapped air) remains a poor conductor too, so heat loss by both conduction and convection across the cavity is reduced further than with an empty cavity.",
            markScheme: [
              "(a) Wall A conducts heat straight through solid brick (1)",
              "(a) Air gap in Wall B is a poor conductor / insulating layer (1)",
              "(a) So conduction across Wall B is reduced → slower heat loss (1)",
              "(b) In an empty cavity, air can circulate and convection currents form (1)",
              "(b) Foam traps air in small pockets so it cannot circulate → no convection (1)",
              "(b) Trapped air remains a poor conductor → conduction also stays low (1)"
            ],
            commonError: "Treating the empty cavity as perfect — air in an open cavity can still transfer heat by convection currents, which is exactly what the foam prevents.",
            guideRef: "Conduction and Convection",
            difficulty: "challenge",
            hints: [
              "Compare conduction through solid brick with conduction through air.",
              "What can the air in an empty cavity still do to transfer heat?",
              "How does foam change the behaviour of the trapped air?"
            ],
            strategy: "address conduction first, then the convection that foam suppresses"
          }
        ]
      }
    ]
  }
};
