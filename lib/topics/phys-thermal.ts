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
p₂ = 6.0 × 10⁴ / 0.10 = **6.0 × 10⁵ Pa**

**Pressure and temperature (constant volume — Edexcel):** For a fixed mass of gas in a rigid container, the pressure is directly proportional to the *kelvin* (absolute) temperature. Doubling the kelvin temperature doubles the pressure:

> **p₁ / T₁ = p₂ / T₂**, with T always in **kelvin**

You **must** convert to kelvin first (K = °C + 273); the relationship does not work in °C because Celsius has an arbitrary zero. This follows from the kinetic model: raising the temperature raises the average kinetic energy and hence the average speed of the molecules, so they strike the walls both more often and harder, and the pressure rises in proportion to the absolute temperature.

**Absolute zero (−273 °C, 0 K)** is the temperature at which the particles have the minimum possible kinetic energy — molecular motion is at a minimum and the gas would exert zero pressure. It is the lowest temperature theoretically possible and is the zero of the kelvin scale.

**Worked example (pressure–temperature):** A sealed rigid can of gas is at a pressure of 1.0 × 10⁵ Pa at 27 °C. It is heated to 327 °C. Find the new pressure.

Convert: T₁ = 27 + 273 = 300 K; T₂ = 327 + 273 = 600 K
p₁ / T₁ = p₂ / T₂
p₂ = p₁ × T₂ / T₁ = (1.0 × 10⁵) × 600 / 300 = **2.0 × 10⁵ Pa**`,
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
        "Apply Boyle's Law as p₁V₁ = p₂V₂; check units are consistent.",
        "At constant volume, pressure is proportional to kelvin temperature: p₁/T₁ = p₂/T₂.",
        "Always convert temperatures to kelvin (K = °C + 273) for pressure–temperature calculations.",
        "Absolute zero = −273 °C = 0 K: minimum particle kinetic energy, zero gas pressure."
      ],
      whyItWorks: "For an ideal gas at constant temperature, the average kinetic energy of each molecule is fixed. Halving the volume halves the mean free path between wall collisions, so each molecule hits the walls twice as often. With twice the collision rate, pressure doubles — hence p is inversely proportional to V.",
      strategies: ["identify what is constant", "set up ratio equation", "unit check before substituting"]
    },

    {
      heading: "Temperature, Thermometers and Thermometric Properties",
      body: `To measure temperature we need a physical property that changes **steadily and reproducibly** with temperature. Such a property is called a **thermometric property**. Common examples are:

- the **volume of a liquid** (mercury or coloured alcohol in a glass thermometer);
- the **resistance of a wire** or a **thermistor** (used in digital and electronic thermometers);
- the **e.m.f. of a thermocouple** (two different metals joined — produces a voltage that depends on the temperature of the junction; ideal for very high temperatures such as furnaces);
- the **pressure or volume of a fixed mass of gas** (gas thermometer).

**Calibration using fixed points.** A thermometer is given a scale by marking two reproducible temperatures called **fixed points**:
- the **lower fixed point** (ice point) — the temperature of pure melting ice, defined as **0 °C**;
- the **upper fixed point** (steam point) — the temperature of steam above water boiling at standard atmospheric pressure, defined as **100 °C**.

The interval between them is divided into 100 equal degrees to give the Celsius scale. To find an unknown temperature, you compare the thermometric property at that temperature with its values at the two fixed points.

**Choosing a thermometer.** Liquid-in-glass thermometers differ in their:
- **Range** — the span from lowest to highest temperature they can read (alcohol works to about −115 °C; mercury reads up to about 350 °C);
- **Sensitivity** — how large a change in the property (e.g. how far the liquid moves) occurs per degree. A narrower bore or a larger bulb gives greater sensitivity;
- **Linearity** — how evenly the property changes with temperature, so equal degrees correspond to equal spacings on the scale;
- **Responsiveness** — how quickly it reaches the temperature being measured.

A **thermistor** has a resistance that falls sharply as temperature rises, making it very sensitive over a useful range and easy to connect to electronic circuits and data loggers.`,
      diagrams: [
        {
          caption: "A liquid-in-glass thermometer calibrated between the two fixed points",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Liquid-in-glass thermometer showing the ice point at zero degrees and steam point at one hundred degrees Celsius">
  <rect width="320" height="200" fill="#0f172a"/>
  <text x="160" y="16" text-anchor="middle" fill="#eef0ff" font-size="12" font-family="sans-serif" font-weight="bold">Calibrating a thermometer</text>
  <!-- thermometer stem -->
  <rect x="150" y="28" width="20" height="130" rx="6" fill="#1e293b" stroke="#b7bce0" stroke-width="1.5"/>
  <!-- bulb -->
  <circle cx="160" cy="168" r="16" fill="#fb7185" stroke="#b7bce0" stroke-width="1.5"/>
  <!-- liquid column -->
  <rect x="156" y="90" width="8" height="78" fill="#fb7185"/>
  <!-- steam point mark -->
  <line x1="130" y1="40" x2="150" y2="40" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="124" y="44" text-anchor="end" fill="#38bdf8" font-size="10" font-family="sans-serif">100 C</text>
  <text x="175" y="44" fill="#b7bce0" font-size="8" font-family="sans-serif">steam point (upper)</text>
  <!-- ice point mark -->
  <line x1="130" y1="146" x2="150" y2="146" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="124" y="150" text-anchor="end" fill="#38bdf8" font-size="10" font-family="sans-serif">0 C</text>
  <text x="175" y="150" fill="#b7bce0" font-size="8" font-family="sans-serif">ice point (lower)</text>
  <!-- equal divisions -->
  <line x1="138" y1="67" x2="150" y2="67" stroke="#b7bce0" stroke-width="0.8"/>
  <line x1="138" y1="93" x2="150" y2="93" stroke="#b7bce0" stroke-width="0.8"/>
  <line x1="138" y1="120" x2="150" y2="120" stroke="#b7bce0" stroke-width="0.8"/>
  <text x="250" y="100" text-anchor="middle" fill="#fbbf24" font-size="9" font-family="sans-serif">100 equal</text>
  <text x="250" y="113" text-anchor="middle" fill="#fbbf24" font-size="9" font-family="sans-serif">divisions</text>
</svg>`
        }
      ],
      keyPoints: [
        "A thermometric property is a physical property that varies steadily with temperature.",
        "Examples: volume of a liquid, resistance of a thermistor, e.m.f. of a thermocouple, gas pressure.",
        "Lower fixed point (ice point) = 0 °C; upper fixed point (steam point) = 100 °C.",
        "Calibration marks the two fixed points and divides the interval into equal degrees.",
        "Thermometers are compared by range, sensitivity, linearity and responsiveness.",
        "Thermocouples suit very high temperatures; thermistors suit sensitive electronic measurement."
      ],
      discovery: {
        problem: "You are given an unmarked capillary tube of alcohol that rises with temperature, but no scale. Using only melting ice and boiling water, how could you turn it into a working Celsius thermometer?",
        idea: "Mark the liquid level in pure melting ice as 0 °C (lower fixed point) and the level in steam above boiling water as 100 °C (upper fixed point). Divide the distance between the two marks into 100 equal parts. Any other temperature is then read off by comparing the liquid level against this calibrated scale."
      },
      whyItWorks: "A property is only useful for a thermometer if it changes in a single-valued, repeatable way with temperature. If the change were not reproducible, the same reading could correspond to different temperatures; if it were not reasonably linear, the scale divisions would be uneven and harder to read accurately.",
      strategies: ["identify the thermometric property", "use two fixed points to set a scale", "match thermometer choice to the measurement need"]
    },

    {
      heading: "Specific Heat Capacity and Latent Heat",
      body: `**Specific heat capacity (c)** is the energy needed to raise the temperature of 1 kg of a substance by 1 °C (or 1 K). It has units J/(kg °C) or J/(kg K).

> **E = mcΔT**

where E = energy transferred (J), m = mass (kg), c = specific heat capacity (J kg⁻¹ K⁻¹), ΔT = temperature change (K or °C).

Water has a very high specific heat capacity (4200 J kg⁻¹ K⁻¹), which is why it is used as a coolant in car engines and why coastal climates are mild.

**Measuring the specific heat capacity of a metal block (experiment).** Take a metal block of known mass m with two holes drilled in it — one for an electric **immersion heater**, one for a thermometer. Insulate the block (e.g. wrap in cloth) to reduce energy loss. Record the start temperature, switch on the heater for a measured time t, and read the highest temperature reached (ΔT). The electrical energy supplied is E = power × time = P × t (or E = VIt from the voltmeter and ammeter readings). Then:

> **c = E / (mΔT) = Pt / (mΔT)**

The result is slightly too high because some thermal energy is lost to the surroundings, meaning the real ΔT for the energy supplied would be larger; good insulation reduces this error.

**Changes of state** occur at constant temperature because the energy supplied changes the potential energy of the particles (breaks or forms intermolecular bonds) rather than their kinetic energy:

- **Melting**: solid → liquid at the melting point. Energy breaks the regular lattice bonds.
- **Boiling**: liquid → gas at the boiling point. Energy overcomes all intermolecular attractions to separate particles fully.
- **Evaporation** differs from boiling: it occurs at **any temperature** at the surface of a liquid when some molecules have enough kinetic energy to escape. The fastest molecules escape first, lowering the average kinetic energy of those remaining — the liquid **cools**.

**Factors that increase the rate of evaporation:**
- a **higher temperature** (more molecules have enough energy to escape);
- a **larger surface area** (more molecules are at the surface);
- a **draught / moving air** over the surface (carries escaping molecules away so fewer return);
- a **lower humidity** (drier air can take up more vapour);
- a more **volatile liquid** (weaker intermolecular forces, lower boiling point).

**Specific latent heat (L)** is the energy required to change the state of 1 kg of a substance without changing its temperature.

> **E = mL**

- Specific latent heat of **fusion** (L_f): solid ↔ liquid (melting/freezing)
- Specific latent heat of **vaporisation** (L_v): liquid ↔ gas (boiling/condensing)

For water, L_f ≈ 3.34 × 10⁵ J/kg and L_v ≈ 2.26 × 10⁶ J/kg — vaporisation needs far more energy because every bond between molecules must be broken to separate them completely.

**Measuring latent heat (experiment).** To find the specific latent heat of vaporisation, supply known electrical energy with an immersion heater to boiling water and measure the mass m of water boiled away (e.g. on a balance) in time t; then L_v = Pt / m. For the latent heat of fusion, use a heater to melt ice and measure the mass melted, comparing with a control to allow for melting caused by the room.

**Worked example (fusion):** How much energy is needed to melt 0.50 kg of ice at 0 °C? (L_f of water = 3.34 × 10⁵ J/kg)

E = mL = 0.50 × 3.34 × 10⁵ = **1.67 × 10⁵ J**

**Worked example (combined):** How much energy turns 0.20 kg of ice at 0 °C into water at 20 °C? (L_f = 3.34 × 10⁵ J/kg, c_water = 4200 J kg⁻¹ K⁻¹)

Step 1 — melt the ice: E₁ = mL = 0.20 × 3.34 × 10⁵ = 6.68 × 10⁴ J
Step 2 — warm the water: E₂ = mcΔT = 0.20 × 4200 × 20 = 1.68 × 10⁴ J
Total E = E₁ + E₂ = **8.36 × 10⁴ J**

**Heating and cooling curves.** If you heat a solid steadily and plot temperature against time, the graph has **sloping** parts (where temperature rises and E = mcΔT applies) separated by **flat plateaus** (where temperature stays constant during melting and boiling). On a plateau the energy supplied is doing latent-heat work (E = mL) — breaking bonds, not raising temperature. A cooling curve is the mirror image: plateaus appear where the substance condenses and freezes, releasing latent heat.`,
      diagrams: [
        {
          caption: "Heating curve: plateaus at the melting and boiling points show latent heat",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Heating curve of temperature against time, with flat plateaus at the melting point and the boiling point where latent heat is absorbed">
  <rect width="320" height="200" fill="#0f172a"/>
  <text x="160" y="14" text-anchor="middle" fill="#eef0ff" font-size="12" font-family="sans-serif" font-weight="bold">Heating curve of a pure substance</text>
  <!-- Axes -->
  <line x1="42" y1="24" x2="42" y2="170" stroke="#b7bce0" stroke-width="1.5"/>
  <line x1="42" y1="170" x2="306" y2="170" stroke="#b7bce0" stroke-width="1.5"/>
  <text x="20" y="100" fill="#b7bce0" font-size="10" font-family="sans-serif" transform="rotate(-90 20 100)">Temperature</text>
  <text x="174" y="192" text-anchor="middle" fill="#b7bce0" font-size="10" font-family="sans-serif">Time (energy supplied at constant rate)</text>
  <!-- Curve: solid warming, melt plateau, liquid warming, boil plateau, gas warming -->
  <polyline points="42,150 80,120 140,120 190,72 250,72 300,40" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
  <!-- plateau dashed guide lines -->
  <line x1="42" y1="120" x2="80" y2="120" stroke="#34d399" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="42" y1="72" x2="190" y2="72" stroke="#fb7185" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="38" y="123" text-anchor="end" fill="#34d399" font-size="8" font-family="sans-serif">m.p.</text>
  <text x="38" y="75" text-anchor="end" fill="#fb7185" font-size="8" font-family="sans-serif">b.p.</text>
  <!-- region labels -->
  <text x="60" y="165" text-anchor="middle" fill="#b7bce0" font-size="7" font-family="sans-serif">solid</text>
  <text x="110" y="113" text-anchor="middle" fill="#34d399" font-size="7" font-family="sans-serif">melting</text>
  <text x="165" y="100" text-anchor="middle" fill="#b7bce0" font-size="7" font-family="sans-serif">liquid</text>
  <text x="220" y="65" text-anchor="middle" fill="#fb7185" font-size="7" font-family="sans-serif">boiling</text>
  <text x="285" y="33" text-anchor="middle" fill="#b7bce0" font-size="7" font-family="sans-serif">gas</text>
  <!-- plateau annotation -->
  <text x="110" y="135" text-anchor="middle" fill="#34d399" font-size="7" font-family="sans-serif">E = mL (latent heat)</text>
  <text x="160" y="62" text-anchor="middle" fill="#fb7185" font-size="7" font-family="sans-serif">flat: E = mL</text>
</svg>`
        }
      ],
      keyPoints: [
        "E = mcΔT; specific heat capacity c has units J kg⁻¹ K⁻¹.",
        "Measure c with an insulated block, immersion heater and thermometer: c = Pt / (mΔT).",
        "During a change of state, temperature is constant — energy changes potential energy, not kinetic energy.",
        "Heating/cooling curves are flat (plateau) during melting and boiling — that flat part is latent heat.",
        "Melting: solid → liquid; boiling: liquid → gas (at the boiling point only).",
        "Evaporation occurs at any temperature at the liquid surface; it causes cooling.",
        "Evaporation is faster with higher temperature, larger surface area, draught and low humidity.",
        "E = mL for latent heat; L_v of water (2.26 × 10⁶ J/kg) is far larger than L_f (3.34 × 10⁵ J/kg)."
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
      "At constant volume, gas pressure is proportional to kelvin temperature: p₁/T₁ = p₂/T₂.",
      "Absolute zero is −273 °C = 0 K: the lowest possible temperature, where particle KE and gas pressure are minimal.",
      "A thermometric property (e.g. liquid volume, thermistor resistance, thermocouple e.m.f.) varies steadily with temperature.",
      "Thermometers are calibrated using two fixed points: ice point (0 °C) and steam point (100 °C).",
      "Specific heat capacity c is energy per kg per degree: E = mcΔT; measure it with c = Pt / (mΔT).",
      "Water has a high specific heat capacity: c = 4200 J kg⁻¹ K⁻¹.",
      "During melting and boiling, temperature stays constant — energy goes to increasing potential energy (flat plateaus on a heating curve).",
      "Specific latent heat: E = mL; L_f of water is 3.34 × 10⁵ J/kg and L_v is 2.26 × 10⁶ J/kg.",
      "Evaporation occurs at any temperature at the liquid surface and causes cooling; it is faster with higher temperature, larger surface area, draught and low humidity.",
      "Metals conduct heat well because free electrons carry energy rapidly through the lattice.",
      "Convection only occurs in fluids (liquids and gases), driven by density differences.",
      "Dull black surfaces are the best emitters and absorbers of infrared radiation."
    ],
    flashcards: [
      { front: "What is Brownian motion?", back: "The random, jittery movement of visible particles (e.g. smoke) caused by unequal bombardment by invisible, rapidly-moving surrounding molecules." },
      { front: "State Boyle's Law in words.", back: "For a fixed mass of gas at constant temperature, the pressure is inversely proportional to the volume (pV = constant)." },
      { front: "How does the pressure of a fixed mass of gas at constant volume depend on temperature?", back: "Pressure is directly proportional to the kelvin (absolute) temperature: p₁/T₁ = p₂/T₂. Temperatures must be in kelvin (K = °C + 273)." },
      { front: "What is absolute zero?", back: "−273 °C, or 0 K — the lowest possible temperature, at which particles have their minimum kinetic energy and a gas would exert zero pressure. It is the zero of the kelvin scale." },
      { front: "What is a thermometric property? Give examples.", back: "A physical property that varies steadily and reproducibly with temperature, used to measure it. Examples: volume of a liquid, resistance of a thermistor, e.m.f. of a thermocouple, pressure of a gas." },
      { front: "What are the two fixed points used to calibrate a thermometer?", back: "The ice point (pure melting ice) = 0 °C and the steam point (steam above water boiling at standard pressure) = 100 °C." },
      { front: "How would you measure the specific heat capacity of a metal block?", back: "Heat the insulated block with an immersion heater for a measured time, recording electrical energy E = Pt and the temperature rise ΔT. Then c = Pt / (mΔT)." },
      { front: "What does a flat plateau on a heating curve represent?", back: "A change of state (melting or boiling). Temperature is constant because the energy supplied is latent heat (E = mL), breaking bonds rather than raising kinetic energy." },
      { front: "List factors that increase the rate of evaporation.", back: "Higher temperature, larger surface area, a draught (moving air), lower humidity, and a more volatile liquid." },
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
      { term: "Absolute zero", definition: "The lowest possible temperature, −273 °C or 0 K, at which particles have the minimum possible kinetic energy and a gas would exert zero pressure; the zero of the kelvin scale." },
      { term: "Kelvin (absolute) temperature", definition: "Temperature measured from absolute zero. T(K) = T(°C) + 273. Gas pressure (at constant volume) and gas volume (at constant pressure) are proportional to the kelvin temperature." },
      { term: "Thermometric property", definition: "A physical property (such as the volume of a liquid, the resistance of a thermistor, or the e.m.f. of a thermocouple) that varies steadily and reproducibly with temperature, allowing temperature to be measured." },
      { term: "Fixed points", definition: "Reproducible reference temperatures used to calibrate a thermometer: the ice point (melting ice, 0 °C) and the steam point (steam from boiling water at standard pressure, 100 °C)." },
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
        description: "Kinetic particle model, states of matter, Brownian motion, and thermal expansion of solids, liquids and gases.",
        questions: [
          {
            id: "phys-thermal-bm1-01",
            question: "Which row correctly describes the particles in a solid?",
            options: [
              "Closely packed in a regular pattern, vibrating about fixed positions",
              "Widely separated, moving rapidly in all directions",
              "Close together but randomly arranged, sliding past one another",
              "Far apart, vibrating about fixed positions"
            ],
            answerIndex: 0,
            explanation: "In a solid, particles are closely packed in a regular lattice and vibrate about fixed positions; they cannot move past one another. The 'widely separated, rapid' option is a gas, the 'close but random, sliding' option is a liquid, and 'far apart but fixed' is impossible (widely separated particles are not held in fixed positions).",
            guideRef: "The Kinetic Particle Model",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bm1-02",
            question: "Brownian motion of smoke grains seen through a microscope is best described as:",
            options: [
              "slow, smooth drifting in one direction",
              "regular vibration about fixed points",
              "random, jerky movement that constantly changes direction",
              "no movement at all until the cell is heated"
            ],
            answerIndex: 2,
            explanation: "Smoke grains are bombarded unequally on different sides by fast, invisible air molecules. The net force changes direction constantly, giving the characteristic random, jerky path — direct evidence for the kinetic particle model.",
            guideRef: "The Kinetic Particle Model",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bm1-03",
            question: "For the same rise in temperature, which list places the three states in order of how much they expand, from greatest expansion to least?",
            options: [
              "gas, liquid, solid",
              "solid, liquid, gas",
              "liquid, gas, solid",
              "gas, solid, liquid"
            ],
            answerIndex: 0,
            explanation: "Gases expand most for a given temperature rise (particles are far apart with negligible forces), liquids expand more than solids (weaker bonding than a solid lattice), and solids expand least because strong lattice bonds resist any increase in separation.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bm1-04",
            question: "A bimetallic strip is made of brass bonded to iron. Brass expands more than iron for the same temperature rise. When the strip is heated, it bends so that:",
            options: [
              "the brass is on the inside of the curve",
              "the brass is on the outside of the curve",
              "it stays straight because both metals expand",
              "it twists into a spiral immediately"
            ],
            answerIndex: 1,
            explanation: "The metal that expands more (brass) becomes longer, so it forms the outer, longer side of the curve. The strip therefore bends with brass on the outside and iron on the inside. This differential expansion is used in thermostats and fire alarms.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "core",
            hints: [
              "The longer side of a bent strip is on the outside of the curve.",
              "Which metal becomes longer — the one that expands more or less?",
              "Brass expands more, so where does the extra length push it?"
            ]
          },
          {
            id: "phys-thermal-bm1-05",
            question: "Why is a small gap left between sections of a steel railway track?",
            options: [
              "To let rainwater drain away from the rails",
              "To reduce the mass of steel needed",
              "To allow the rails to conduct electricity",
              "To allow the rails to expand on hot days without buckling"
            ],
            answerIndex: 3,
            explanation: "On a hot day the steel rails expand and become longer. If there were no expansion gaps, the rails would push against each other and buckle (bend out of shape). The gaps give the steel room to expand safely.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bm1-06",
            question: "At the particle level, why does a solid metal bar get longer when its temperature is raised?",
            options: [
              "The atoms themselves grow larger",
              "Extra atoms are created inside the bar",
              "The atoms vibrate with greater amplitude, increasing their average separation",
              "The atoms gain mass and so take up more space"
            ],
            answerIndex: 2,
            explanation: "Heating gives the atoms more kinetic energy, so they vibrate with a larger amplitude about their lattice positions. Because the inter-particle forces are asymmetric, a larger vibration corresponds to a slightly greater average separation, so the bar lengthens. Atoms do not grow, gain mass, or multiply.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "core",
            hints: [
              "Temperature is linked to the kinetic energy of the particles.",
              "More vibration means a larger amplitude — what does that do to the spacing?",
              "The number and size of atoms do not change when you heat a fixed mass."
            ]
          },
          {
            id: "phys-thermal-bm1-07",
            question: "Which statement comparing internal energy and temperature is correct?",
            options: [
              "Temperature is the total energy of all particles; internal energy is the energy of one particle",
              "Temperature and internal energy are two names for the same quantity",
              "Internal energy depends only on temperature, never on the forces between particles",
              "Internal energy is the total kinetic and potential energy of all particles; temperature relates to the average kinetic energy"
            ],
            answerIndex: 3,
            explanation: "Temperature is a measure of the average kinetic energy of the particles, while internal energy is the total of all the kinetic and potential energies of every particle. They are not the same: a large tank of warm water has more internal energy than a small cup of boiling water, even though the cup is at a higher temperature.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "core",
            hints: [
              "One quantity is an average per particle; the other is a total for all particles.",
              "Internal energy includes potential energy from the forces between particles.",
              "Can a cooler object have more internal energy than a hotter one if it is much larger?"
            ]
          },
          {
            id: "phys-thermal-bm1-08",
            question: "A flask of water is heated and almost fills to the brim. Just before boiling, the water level is seen to rise a little and then fall slightly at the very start of heating. The brief initial fall in level is because:",
            options: [
              "the water evaporates before it can rise",
              "the glass flask expands first, before the water inside warms up",
              "the water contracts when heated",
              "air bubbles leave the water"
            ],
            answerIndex: 1,
            explanation: "When heating begins, the glass flask receives the heat first and expands, increasing the volume of the container, so the water level appears to dip. Once the water itself warms up, it expands much more than the glass (liquids expand more than solids), and the level rises. This is a classic demonstration that solids and liquids expand by different amounts.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "challenge",
            hints: [
              "Which warms up first — the glass container or the water inside it?",
              "If the container's volume increases, what happens to the level of the liquid in it?",
              "Compare how much a solid expands with how much a liquid expands."
            ]
          },
          {
            id: "phys-thermal-bm1-09",
            question: "Overhead power cables are deliberately strung with some slack between pylons. The main reason is that on a cold day the cables will:",
            options: [
              "expand and could touch the ground",
              "conduct electricity more poorly",
              "vibrate and produce sound",
              "contract and become shorter, so they could snap if pulled tight"
            ],
            answerIndex: 3,
            explanation: "Cables contract (shorten) in cold weather. If they were strung tight in summer, winter contraction would put them under huge tension and they could snap. Leaving slack in summer means there is room to shorten in winter without breaking.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "challenge",
            hints: [
              "Cooling causes contraction, the opposite of expansion.",
              "A contracting cable tries to become shorter — what does that do to a tightly fixed cable?",
              "Think about which season the slack is most needed for."
            ]
          },
          {
            id: "phys-thermal-bm1-10",
            question: "A sealed metal can of air is heated. Which statement about the air inside is correct, assuming the can does not change shape?",
            options: [
              "The mass of air increases",
              "The average kinetic energy of the molecules increases and the pressure rises",
              "The molecules move more slowly and spread out",
              "The pressure stays constant because the can is sealed"
            ],
            answerIndex: 1,
            explanation: "Heating a fixed mass of gas at constant volume increases the average kinetic energy (speed) of the molecules. They strike the walls more often and harder, so the pressure rises. The mass is unchanged (the can is sealed) and the molecules speed up, not slow down.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "core",
            hints: [
              "The can is sealed, so the amount and volume of gas are fixed.",
              "What does temperature tell you about molecular speed?",
              "More forceful, more frequent collisions mean what for pressure?"
            ]
          }
        ]
      },
      {
        id: "phys-thermal-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Gas pressure, Boyle's law and the gas laws qualitatively, with pressure–volume and pressure–temperature reasoning.",
        questions: [
          {
            id: "phys-thermal-bm2-01",
            question: "What causes the pressure that a gas exerts on the walls of its container?",
            options: [
              "Gas molecules colliding with the walls and transferring momentum",
              "The weight of the gas pressing down",
              "The molecules sticking to the walls",
              "Heat flowing out through the walls"
            ],
            answerIndex: 0,
            explanation: "Gas pressure is the result of countless molecules colliding with the container walls. Each collision transfers a small amount of momentum to the wall; the average effect of billions of collisions per second is a steady force per unit area — the pressure.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bm2-02",
            question: "A fixed mass of gas at constant temperature has its volume doubled. According to Boyle's law, the new pressure is:",
            options: [
              "half the original pressure",
              "twice the original pressure",
              "four times the original pressure",
              "unchanged"
            ],
            answerIndex: 0,
            explanation: "Boyle's law states pV = constant at constant temperature. If the volume doubles, the pressure must halve to keep the product pV the same. Pressure and volume are inversely proportional.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bm2-03",
            question: "A gas occupies 3.0 m³ at a pressure of 200 kPa. At constant temperature, the pressure is increased to 500 kPa. What is the new volume?",
            options: ["0.83 m³", "1.2 m³", "1.5 m³", "7.5 m³"],
            answerIndex: 1,
            explanation: "Using p₁V₁ = p₂V₂: (200)(3.0) = (500)(V₂), so 600 = 500 V₂, giving V₂ = 600/500 = 1.2 m³. The pressure rose by a factor of 2.5, so the volume falls to 1/2.5 of its value.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "core",
            hints: [
              "Temperature is constant, so Boyle's law p₁V₁ = p₂V₂ applies.",
              "Substitute: 200 × 3.0 = 500 × V₂.",
              "Higher pressure means smaller volume — check your answer is less than 3.0 m³."
            ]
          },
          {
            id: "phys-thermal-bm2-04",
            question: "A bubble of gas of volume 1.0 cm³ is released at the bottom of a lake where the pressure is 300 kPa. As it rises to just below the surface, the pressure falls to 100 kPa. Assuming the temperature stays the same, the volume of the bubble at the surface is:",
            options: ["0.33 cm³", "1.0 cm³", "3.0 cm³", "9.0 cm³"],
            answerIndex: 2,
            explanation: "Boyle's law: p₁V₁ = p₂V₂, so (300)(1.0) = (100)(V₂), giving V₂ = 300/100 = 3.0 cm³. As the bubble rises the pressure on it falls, so it expands — the volume increases to three times its original size.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "core",
            hints: [
              "Temperature constant means Boyle's law applies: p₁V₁ = p₂V₂.",
              "The pressure decreases as the bubble rises — should the volume increase or decrease?",
              "Substitute 300 × 1.0 = 100 × V₂ and solve for V₂."
            ]
          },
          {
            id: "phys-thermal-bm2-05",
            question: "The pressure of a fixed mass of gas at constant volume is plotted against its temperature in degrees Celsius. The graph is a straight line that does NOT pass through the origin. Why not?",
            options: [
              "Because pressure is not related to temperature",
              "Because the gas leaks during the experiment",
              "Because the volume is changing",
              "Because the Celsius scale does not start at the point where molecular motion ceases"
            ],
            answerIndex: 3,
            explanation: "Pressure is proportional to the absolute (kelvin) temperature, where 0 K is the point of zero molecular motion (and theoretically zero pressure). The Celsius scale has its zero at the freezing point of water, not at this point, so on a pressure–Celsius graph the line is straight but is offset and would reach zero pressure only at about −273 °C.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "challenge",
            hints: [
              "At what temperature would the molecules stop moving and exert no pressure?",
              "Where does 0 °C sit compared with that point?",
              "Pressure is proportional to temperature on which temperature scale?"
            ]
          },
          {
            id: "phys-thermal-bm2-06",
            question: "A sealed syringe of gas is squashed quickly so its volume halves. Immediately afterwards the temperature is the same as before. Using particle ideas, the pressure has roughly doubled because:",
            options: [
              "the molecules now move twice as fast",
              "the molecules become twice as heavy",
              "the molecules stop colliding with each other",
              "each molecule travels a shorter distance between wall collisions, so the collision rate roughly doubles"
            ],
            answerIndex: 3,
            explanation: "At the same temperature the molecules have the same average speed. Halving the volume halves the average distance to a wall, so each molecule hits the walls about twice as often. Twice the collision rate means roughly twice the force per unit area — the pressure doubles. This is the particle basis of Boyle's law.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "core",
            hints: [
              "Temperature unchanged means molecular speed is unchanged.",
              "What changes about the distance a molecule travels before hitting a wall?",
              "Link the collision frequency to the pressure."
            ]
          },
          {
            id: "phys-thermal-bm2-07",
            question: "A car tyre is pumped to a high pressure on a cold morning. After a long, fast drive the air inside is much hotter. Assuming the tyre volume barely changes, the pressure inside the tyre will have:",
            options: [
              "decreased, because hot air is lighter",
              "increased, because hotter molecules collide more often and harder",
              "stayed the same, because the volume did not change",
              "decreased, because the molecules move further apart"
            ],
            answerIndex: 1,
            explanation: "At (almost) constant volume, raising the temperature increases the average speed of the molecules. They strike the tyre walls more frequently and with greater force, so the pressure increases. This is why tyre pressures are quoted 'when cold'.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "core",
            hints: [
              "The volume is essentially fixed, so think about pressure and temperature.",
              "Hotter gas means faster molecules — what does that do to collisions with the wall?",
              "More frequent, harder collisions mean what for pressure?"
            ]
          },
          {
            id: "phys-thermal-bm2-08",
            question: "A gas at 100 kPa fills a container of 600 cm³. Part of it is pushed into a connected rigid cylinder so the gas now fills a total of 200 cm³ at the same temperature. The new pressure is:",
            options: ["33 kPa", "200 kPa", "300 kPa", "600 kPa"],
            answerIndex: 2,
            explanation: "Boyle's law: p₁V₁ = p₂V₂, so (100)(600) = p₂(200), giving p₂ = 60 000/200 = 300 kPa. The volume was reduced to one third, so the pressure tripled.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "core",
            hints: [
              "Use p₁V₁ = p₂V₂ at constant temperature.",
              "Substitute 100 × 600 = p₂ × 200.",
              "Volume fell to 1/3, so pressure should rise by a factor of 3."
            ]
          },
          {
            id: "phys-thermal-bm2-09",
            question: "Which experimental precaution is essential when verifying Boyle's law for a fixed mass of gas?",
            options: [
              "Heat the gas steadily throughout",
              "Allow gas to escape slowly",
              "Increase the mass of gas as pressure rises",
              "Keep the temperature of the gas constant"
            ],
            answerIndex: 3,
            explanation: "Boyle's law (pV = constant) holds only for a fixed mass of gas at constant temperature. The gas must be compressed slowly so any heating during compression has time to dissipate and the temperature stays constant. The mass must not change and no gas may escape.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bm2-10",
            question: "A fixed mass of gas is taken from a pressure of 400 kPa and volume of 250 cm³ to a new pressure of 250 kPa at constant temperature. The new volume, and the value of pV throughout, are:",
            options: [
              "400 cm³, with pV = 1.0 × 10⁵ kPa·cm³",
              "156 cm³, with pV = 1.0 × 10⁵ kPa·cm³",
              "400 cm³, with pV changing during the process",
              "100 cm³, with pV = 1.0 × 10⁵ kPa·cm³"
            ],
            answerIndex: 0,
            explanation: "pV is constant at constant temperature: p₁V₁ = 400 × 250 = 1.0 × 10⁵ kPa·cm³. Then V₂ = pV/p₂ = 1.0 × 10⁵ / 250 = 400 cm³. The product pV stays equal to 1.0 × 10⁵ kPa·cm³ throughout because temperature is constant.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "challenge",
            hints: [
              "First work out the constant pV = p₁V₁.",
              "Then divide that constant by the new pressure to get V₂.",
              "At constant temperature, does pV change or stay fixed?"
            ]
          }
        ]
      },
      {
        id: "phys-thermal-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Specific heat capacity, specific latent heat, changes of state, heating/cooling curves and evaporation.",
        questions: [
          {
            id: "phys-thermal-bm3-01",
            question: "The specific heat capacity of a substance is defined as:",
            options: [
              "the energy needed to raise the temperature of 1 kg of the substance by 1 °C",
              "the energy needed to change the state of 1 kg of the substance",
              "the total energy stored by all the particles in the substance",
              "the temperature reached when 1 J of energy is supplied"
            ],
            answerIndex: 0,
            explanation: "Specific heat capacity c is the energy needed to raise the temperature of 1 kg of a substance by 1 °C (or 1 K), with units J/(kg·°C). The 'change the state' option defines specific latent heat; the 'total energy stored' option describes internal energy.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bm3-02",
            question: "How much energy is needed to raise the temperature of 0.40 kg of water from 25 °C to 85 °C? (specific heat capacity of water = 4200 J/(kg·°C))",
            options: ["1.0 × 10⁴ J", "1.0 × 10⁵ J", "1.4 × 10⁵ J", "2.5 × 10⁵ J"],
            answerIndex: 1,
            explanation: "E = mcΔT, with ΔT = 85 − 25 = 60 °C. E = 0.40 × 4200 × 60 = 100 800 J ≈ 1.0 × 10⁵ J.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "Use E = mcΔT.",
              "ΔT is the change in temperature: 85 − 25.",
              "Multiply 0.40 × 4200 × 60."
            ]
          },
          {
            id: "phys-thermal-bm3-03",
            question: "Energy is supplied at a steady rate to a pure solid until it has all melted. During the melting, the temperature of the substance:",
            options: [
              "rises steadily",
              "falls steadily",
              "stays constant",
              "first rises, then falls"
            ],
            answerIndex: 2,
            explanation: "During melting the temperature stays constant at the melting point. The supplied energy increases the potential energy of the particles (breaking the lattice bonds) rather than their kinetic energy, so there is no temperature change until melting is complete.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bm3-04",
            question: "The specific latent heat of fusion of ice is 3.34 × 10⁵ J/kg. How much energy is needed to melt 2.0 kg of ice at 0 °C into water at 0 °C?",
            options: ["1.67 × 10⁵ J", "3.34 × 10⁵ J", "6.68 × 10⁵ J", "8.40 × 10⁵ J"],
            answerIndex: 2,
            explanation: "E = mL = 2.0 × 3.34 × 10⁵ = 6.68 × 10⁵ J. No temperature change occurs (both start and end at 0 °C), so only latent heat is involved, not E = mcΔT.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "Both the ice and the water are at 0 °C, so no temperature change — use E = mL.",
              "Substitute m = 2.0 kg and L = 3.34 × 10⁵ J/kg.",
              "Multiply 2.0 × 3.34 × 10⁵."
            ]
          },
          {
            id: "phys-thermal-bm3-05",
            question: "Evaporation causes a liquid to cool. The best explanation is that:",
            options: [
              "the slowest molecules escape, raising the average energy of those left behind",
              "all the molecules escape at once",
              "the fastest molecules escape, lowering the average kinetic energy of those left behind",
              "the liquid absorbs cold from the surrounding air"
            ],
            answerIndex: 2,
            explanation: "Only the fastest, most energetic molecules at the surface have enough energy to escape. When they leave, the average kinetic energy of the remaining molecules falls, and since temperature measures average kinetic energy, the liquid cools.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "Which molecules can escape — the fast ones or the slow ones?",
              "What happens to the average energy of those left behind when the fastest leave?",
              "Temperature is a measure of which kind of energy?"
            ]
          },
          {
            id: "phys-thermal-bm3-06",
            question: "Which change would NOT increase the rate of evaporation of water from an open dish?",
            options: [
              "Raising the temperature of the water",
              "Increasing the surface area of the water",
              "Blowing dry air across the surface",
              "Covering the dish with a tight lid"
            ],
            answerIndex: 3,
            explanation: "Evaporation is increased by higher temperature, larger surface area, and a draught of dry air (which removes the saturated vapour above the surface). Covering the dish traps the vapour, raising its concentration above the liquid and slowing net evaporation, so it does NOT increase the rate.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "List the factors that speed up evaporation: temperature, surface area, draught, dryness of air.",
              "Which option does the opposite of removing vapour from the surface?",
              "A lid traps vapour — does that help or hinder evaporation?"
            ]
          },
          {
            id: "phys-thermal-bm3-07",
            question: "Compared with the energy needed to raise water from 20 °C to 100 °C, the energy needed to then boil all of it away is:",
            options: [
              "much smaller",
              "about the same",
              "much larger",
              "exactly half"
            ],
            answerIndex: 2,
            explanation: "Heating 1 kg of water from 20 °C to 100 °C needs about 4200 × 80 ≈ 3.4 × 10⁵ J, but boiling 1 kg away needs the specific latent heat of vaporisation, about 2.26 × 10⁶ J — roughly seven times more. Fully separating water molecules takes far more energy than just warming them.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "challenge",
            hints: [
              "Estimate the heating energy: mcΔT with c = 4200 and ΔT = 80.",
              "Compare with the latent heat of vaporisation of water (~2.26 × 10⁶ J/kg).",
              "Which number is larger, and by roughly how many times?"
            ]
          },
          {
            id: "phys-thermal-bm3-08",
            question: "A 0.50 kg block of metal is heated by a 100 W heater for 39 s and its temperature rises by 20 °C. Ignoring heat losses, the specific heat capacity of the metal is:",
            options: ["195 J/(kg·°C)", "390 J/(kg·°C)", "780 J/(kg·°C)", "3900 J/(kg·°C)"],
            answerIndex: 1,
            explanation: "Energy supplied E = Pt = 100 × 39 = 3900 J. Then c = E/(mΔT) = 3900/(0.50 × 20) = 3900/10 = 390 J/(kg·°C).",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "challenge",
            hints: [
              "First find the energy supplied: E = power × time.",
              "Then rearrange E = mcΔT to make c the subject: c = E/(mΔT).",
              "Substitute E = 3900, m = 0.50, ΔT = 20."
            ]
          },
          {
            id: "phys-thermal-bm3-09",
            question: "On a heating curve (temperature against time) for a pure substance heated at a constant rate, a horizontal (flat) section represents:",
            options: [
              "a change of state at constant temperature",
              "the substance cooling down",
              "the heater being switched off",
              "the substance contracting"
            ],
            answerIndex: 0,
            explanation: "A flat section means temperature is constant while energy is still being supplied — this is a change of state (melting or boiling). The energy is increasing the particles' potential energy, not their kinetic energy, so the temperature does not rise.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bm3-10",
            question: "0.10 kg of water at 100 °C is completely turned to steam at 100 °C. (specific latent heat of vaporisation of water = 2.26 × 10⁶ J/kg) The energy required is closest to:",
            options: ["2.26 × 10⁴ J", "2.26 × 10⁵ J", "2.26 × 10⁶ J", "4.2 × 10⁴ J"],
            answerIndex: 1,
            explanation: "There is no temperature change, so E = mL = 0.10 × 2.26 × 10⁶ = 2.26 × 10⁵ J.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "Same temperature throughout (100 °C), so use E = mL, not mcΔT.",
              "Substitute m = 0.10 kg, L = 2.26 × 10⁶ J/kg.",
              "0.10 × 2.26 × 10⁶ gives what power of ten?"
            ]
          }
        ]
      },
      {
        id: "phys-thermal-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Conduction, convection and radiation: mechanisms, good and bad conductors, surface effects, and everyday applications.",
        questions: [
          {
            id: "phys-thermal-bm4-01",
            question: "Which mode of thermal energy transfer can take place through a vacuum?",
            options: ["Conduction", "Convection", "Radiation", "All three equally"],
            answerIndex: 2,
            explanation: "Radiation is infrared electromagnetic waves and needs no medium, so it can cross a vacuum (e.g. from the Sun to Earth). Conduction and convection both rely on particles and cannot occur in a vacuum.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bm4-02",
            question: "Metals are much better thermal conductors than non-metals mainly because metals have:",
            options: [
              "free (delocalised) electrons that carry energy quickly through the lattice",
              "heavier atoms",
              "a higher specific heat capacity",
              "a more disordered particle arrangement"
            ],
            answerIndex: 0,
            explanation: "Metals contain free (delocalised) electrons that move rapidly throughout the lattice. They gain kinetic energy at the hot end and transfer it quickly to cooler regions by collisions, in addition to lattice vibration. Non-metals lack free electrons and rely only on the slower vibration mechanism.",
            guideRef: "Conduction and Convection",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bm4-03",
            question: "Why is trapped air, such as that in a woollen jumper or in loft insulation, a good thermal insulator?",
            options: [
              "Air is a good conductor but a poor radiator",
              "Air molecules are far apart and poor conductors, and trapping the air stops convection currents forming",
              "Air reflects all infrared radiation",
              "Air has a very high specific heat capacity"
            ],
            answerIndex: 1,
            explanation: "Air is a poor conductor because its molecules are widely spaced. Crucially, the fibres trap the air in tiny pockets so it cannot move freely — this prevents convection currents. With both conduction and convection suppressed, trapped air is an excellent insulator.",
            guideRef: "Conduction and Convection",
            difficulty: "core",
            hints: [
              "Is air a good or poor conductor?",
              "What would happen if the air could move freely? (Think convection.)",
              "Why does trapping the air matter?"
            ]
          },
          {
            id: "phys-thermal-bm4-04",
            question: "A convection current forms in a beaker of water heated from below because the warm water:",
            options: [
              "becomes less dense and rises, while cooler denser water sinks to replace it",
              "becomes denser and sinks",
              "stops moving once heated",
              "loses mass as it is heated"
            ],
            answerIndex: 0,
            explanation: "Heated water expands and becomes less dense, so it rises. Cooler, denser water sinks to take its place, setting up a circulating convection current that carries thermal energy through the fluid. Mass is conserved; it is the density that changes.",
            guideRef: "Conduction and Convection",
            difficulty: "core",
            hints: [
              "What happens to the density of water when it is heated and expands?",
              "Does less dense fluid rise or sink?",
              "Trace the circulation: warm up, cool, and back down."
            ]
          },
          {
            id: "phys-thermal-bm4-05",
            question: "Which surface is the best emitter of thermal radiation?",
            options: [
              "Shiny silver",
              "Shiny white",
              "Dull (matt) black",
              "Polished aluminium"
            ],
            answerIndex: 2,
            explanation: "Dull (matt) black surfaces are the best emitters (and best absorbers) of infrared radiation. Shiny, light-coloured and polished surfaces are poor emitters because they reflect rather than emit or absorb radiation.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bm4-06",
            question: "A vacuum flask keeps a drink hot. Which feature of the flask reduces heat loss by radiation specifically?",
            options: [
              "The vacuum between the walls",
              "The insulating plastic stopper",
              "The double-walled glass",
              "The silvered (mirrored) inner surfaces of the walls"
            ],
            answerIndex: 3,
            explanation: "Radiation can cross the vacuum, so it is the silvered surfaces that deal with it: shiny silver is a poor emitter and poor absorber, so it reflects infrared radiation back and reduces radiation loss. The vacuum prevents conduction and convection; the stopper reduces convection/evaporation from the top.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "core",
            hints: [
              "Radiation can pass through a vacuum, so the vacuum cannot be the answer.",
              "Which surface property affects radiation — colour and shininess.",
              "Match each flask feature to the mode of transfer it blocks."
            ]
          },
          {
            id: "phys-thermal-bm4-07",
            question: "Loft insulation, cavity-wall foam and double glazing are all used to reduce heat loss from a house. The common physical principle behind all three is that they:",
            options: [
              "are good electrical insulators",
              "reflect all radiation back into the house",
              "increase the thermal capacity of the walls",
              "trap pockets of air to reduce conduction and convection"
            ],
            answerIndex: 3,
            explanation: "All three trap air (in loft fibres, in foam cells, or in the gap between glass panes). Trapped air is a poor conductor and cannot form convection currents, so conduction and convection through the walls and windows are both reduced.",
            guideRef: "Conduction and Convection",
            difficulty: "challenge",
            hints: [
              "What do glass-fibre loft rolls, foam and a sealed window gap all contain?",
              "Why is still (trapped) air better than moving air?",
              "Which two transfer modes does trapped air reduce?"
            ]
          },
          {
            id: "phys-thermal-bm4-08",
            question: "A room heater is placed near the floor rather than near the ceiling so that it warms the whole room effectively. The best reason is that:",
            options: [
              "warm air rises by convection, so heating low down circulates warmth through the whole room",
              "radiation only travels upwards",
              "conduction is faster near the floor",
              "cold air cannot reach the ceiling"
            ],
            answerIndex: 0,
            explanation: "Warm air is less dense and rises. A heater placed low heats air that then rises, while cooler air sinks to be heated in turn — setting up a convection current that circulates warmth throughout the room. A heater near the ceiling would leave the warm air trapped at the top.",
            guideRef: "Conduction and Convection",
            difficulty: "core",
            hints: [
              "Does warm air rise or sink?",
              "If you heat air at the top of a room, where does the warmth stay?",
              "How does a convection current spread heat around the room?"
            ]
          },
          {
            id: "phys-thermal-bm4-09",
            question: "Two metal cans of hot water are identical except one is painted dull black and the other shiny silver. After 20 minutes, which is cooler, and by which dominant mechanism is the difference produced?",
            options: [
              "The silver can; conduction",
              "The black can; radiation",
              "The black can; convection",
              "Both the same; no difference is possible"
            ],
            answerIndex: 1,
            explanation: "The dull black can is the better emitter of infrared radiation, so it radiates energy away faster and ends up cooler. The two cans are identical in every other respect, so the difference is due to radiation from the surface.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "core",
            hints: [
              "The only difference between the cans is the surface — so which mode depends on surface colour?",
              "Which surface emits radiation faster, dull black or shiny silver?",
              "The faster emitter cools more."
            ]
          },
          {
            id: "phys-thermal-bm4-10",
            question: "A teacher holds a piece of paper wrapped tightly around a wooden rod and a copper rod (half wood, half copper) in a flame. The paper over the copper does not scorch, but the paper over the wood scorches. The best explanation is that:",
            options: [
              "copper reflects the flame",
              "wood is a better conductor than copper",
              "the flame only touches the wood",
              "copper conducts heat away from the paper quickly, keeping the paper below its scorching temperature, while wood does not"
            ],
            answerIndex: 3,
            explanation: "Copper is an excellent conductor: it rapidly conducts thermal energy away from the paper into the bulk of the metal, so the paper's temperature stays below the point at which it scorches. Wood is a poor conductor, so heat builds up in the paper over the wood and it reaches its scorching temperature.",
            guideRef: "Conduction and Convection",
            difficulty: "challenge",
            hints: [
              "Compare how well copper and wood conduct heat.",
              "If heat is carried away quickly, can the paper get hot enough to scorch?",
              "Which rod lets heat build up in the paper?"
            ]
          }
        ]
      }
    ],
    qaPapers: [
      {
        id: "phys-thermal-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Kinetic particle model, states of matter, thermal expansion and its applications.",
        questions: [
          {
            id: "phys-thermal-bq1-01",
            question: "Using the kinetic particle model, describe the arrangement, separation and motion of the particles in (a) a solid, (b) a liquid, and (c) a gas. (6 marks)",
            marks: 6,
            modelAnswer: "(a) Solid: particles are closely packed in a regular, fixed pattern (lattice). They are touching / at minimum separation. They can only vibrate about fixed positions and cannot move from place to place.\n\n(b) Liquid: particles are still close together (similar separation to a solid) but arranged randomly / irregularly. They can move past / slide over one another, allowing the liquid to flow.\n\n(c) Gas: particles are widely separated (on average about ten times their diameter apart). They move rapidly and randomly in all directions, with negligible forces between them except during collisions.",
            markScheme: [
              "Solid: regularly arranged / lattice and closely packed (1)",
              "Solid: vibrate about fixed positions / cannot move past each other (1)",
              "Liquid: close together but random / irregular arrangement (1)",
              "Liquid: can slide past one another / flow (1)",
              "Gas: widely separated / far apart (1)",
              "Gas: move rapidly and randomly in all directions (1)"
            ],
            commonError: "Confusing liquids and gases by saying liquid particles are 'far apart' — liquid particles are close together (only the arrangement is random), it is gas particles that are widely separated.",
            guideRef: "The Kinetic Particle Model",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bq1-02",
            question: "Smoke is introduced into a small glass cell and lit from the side. Through a microscope, tiny bright specks are seen jiggling about in random paths.\n(a) Name the effect being observed. (1 mark)\n(b) Explain what the bright specks are and why they move in random paths. (3 marks)\n(c) State what this observation tells us about the air molecules in the cell. (1 mark)",
            marks: 5,
            modelAnswer: "(a) Brownian motion.\n\n(b) The bright specks are smoke particles (reflecting the light). They move because they are constantly bombarded by the much smaller, invisible, fast-moving air molecules. At any instant the collisions on different sides are unequal by chance, giving a net force in a random direction that constantly changes — so the specks follow a random, jerky path.\n\n(c) The air molecules are themselves in continuous, rapid, random motion.",
            markScheme: [
              "(a) Brownian motion (1)",
              "(b) Specks are smoke particles, bombarded by air molecules (1)",
              "(b) Collisions are unequal on different sides / net force in random direction (1)",
              "(b) Direction of force changes randomly / continuously (1)",
              "(c) Air molecules are in continuous random (rapid) motion (1)"
            ],
            commonError: "Saying the smoke particles 'are the air molecules' — the visible specks are large smoke grains; the air molecules doing the bombarding are far too small to see.",
            guideRef: "The Kinetic Particle Model",
            difficulty: "core",
            hints: [
              "The observed effect has a specific name from the kinetic theory.",
              "Distinguish the visible specks from the invisible molecules hitting them.",
              "Why is the motion random rather than in one steady direction?"
            ]
          },
          {
            id: "phys-thermal-bq1-03",
            question: "A glass thermometer contains a thin column of liquid in a sealed glass tube.\n(a) Explain, using the particle model, how the thermometer works when it is placed in a hot drink. (3 marks)\n(b) Explain why the bore (tube) of the thermometer is made very narrow. (2 marks)",
            marks: 5,
            modelAnswer: "(a) When the bulb is placed in the hot drink, thermal energy is transferred to the liquid. The liquid's particles gain kinetic energy and vibrate/move with greater amplitude, increasing their average separation. The liquid therefore expands and rises up the tube. The height of the liquid indicates the temperature.\n\n(b) A narrow bore means that a small increase in the volume of liquid produces a large rise in the length of the liquid column. This makes the thermometer more sensitive and easier to read accurately.",
            markScheme: [
              "(a) Liquid gains thermal energy / particles gain kinetic energy (1)",
              "(a) Average separation of particles increases / liquid expands (1)",
              "(a) Liquid rises up the tube; height shows temperature (1)",
              "(b) Narrow bore: small volume change gives large length change (1)",
              "(b) Increases sensitivity / makes reading easier / more accurate (1)",
            ],
            commonError: "Saying the liquid 'particles get bigger' — the particles do not expand; their average separation increases, so the liquid as a whole expands.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "core",
            hints: [
              "Link the temperature rise to what the liquid particles do.",
              "Thermal expansion is about separation, not particle size.",
              "Why would a wider tube make small temperature changes harder to see?"
            ]
          },
          {
            id: "phys-thermal-bq1-04",
            question: "A steel bridge is 200 m long. Engineers fit an expansion joint at one end to allow the bridge to lengthen in summer.\n(a) Explain, in terms of particles, why the steel bridge gets longer when its temperature rises. (3 marks)\n(b) State and explain one problem that could occur if no expansion joint were fitted. (2 marks)\n(c) Solids, liquids and gases all expand on heating. State which expands most for the same temperature rise, and briefly explain why in terms of the forces between particles. (2 marks)",
            marks: 7,
            modelAnswer: "(a) When the steel is heated, its particles gain kinetic energy and vibrate with a greater amplitude about their fixed lattice positions. Because of the asymmetry of the forces between particles, the greater vibration increases the average separation between neighbouring particles. With every gap slightly larger, the whole bridge becomes longer.\n\n(b) Without an expansion joint the bridge cannot lengthen freely. In hot weather the expanding steel would be under large compressive forces and could buckle (bend or warp out of shape), damaging the structure.\n\n(c) A gas expands most. The forces between gas particles are negligible, so there is almost nothing to resist the particles moving further apart, whereas in solids and liquids strong/moderate forces resist the increase in separation.",
            markScheme: [
              "(a) Particles gain kinetic energy / vibrate more (1)",
              "(a) Greater amplitude of vibration increases average separation (1)",
              "(a) Every separation slightly larger, so overall length increases (1)",
              "(b) Bridge cannot expand freely / large forces produced (1)",
              "(b) It would buckle / warp / be damaged (1)",
              "(c) Gas expands most (1)",
              "(c) Forces between gas particles are negligible, so little resists separation increasing (1)"
            ],
            commonError: "Stating that the bridge 'gains length because steel gets heavier' — mass is unchanged; expansion is due to greater average particle separation.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "core",
            hints: [
              "Start at the particle level: what does heating do to vibration?",
              "Connect greater vibration to greater average separation, then to length.",
              "For (c), compare the strength of forces between particles in solids, liquids and gases."
            ]
          },
          {
            id: "phys-thermal-bq1-05",
            question: "Distinguish carefully between the temperature and the internal energy of a substance.\n(a) Define each quantity in terms of the particles. (2 marks)\n(b) A swimming pool of cool water and a cup of boiling water are compared. Explain how the pool can have a greater internal energy than the cup even though the cup is at a higher temperature. (3 marks)",
            marks: 5,
            modelAnswer: "(a) Temperature is a measure of the average kinetic energy of the particles in the substance. Internal energy is the total of the kinetic energies and potential energies of all the particles in the substance.\n\n(b) Although each particle in the boiling cup has a higher average kinetic energy (higher temperature), the cup contains relatively few particles. The cool pool is at a lower temperature, so each particle has less kinetic energy on average, but the pool contains an enormous number of particles. The total energy of all those particles (the internal energy) can be far greater in the pool than in the cup, because internal energy depends on the number of particles as well as the energy of each.",
            markScheme: [
              "(a) Temperature = average kinetic energy of particles (1)",
              "(a) Internal energy = total kinetic + potential energy of all particles (1)",
              "(b) Cup has higher energy per particle but few particles (1)",
              "(b) Pool has lower energy per particle but very many particles (1)",
              "(b) Total (internal) energy depends on number of particles, so pool's total can exceed the cup's (1)"
            ],
            commonError: "Treating temperature and internal energy as the same thing — temperature is an average per particle, internal energy is a total for all particles.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "challenge",
            hints: [
              "Define one quantity as an average and the other as a total.",
              "Internal energy depends on how many particles there are, not just how energetic each one is.",
              "Compare the number of particles in a pool with the number in a cup."
            ]
          },
          {
            id: "phys-thermal-bq1-06",
            question: "(Challenge) A bimetallic strip is made by bonding a strip of brass to a strip of invar (a metal that expands very little). The strip is used in a fire alarm.\n(a) Explain why the strip bends when heated, and state which way it bends. (3 marks)\n(b) Describe how this strip can be used to complete an electrical circuit and sound an alarm bell when the temperature rises too high. (3 marks)\n(c) Suggest how the temperature at which the alarm triggers could be changed without replacing the strip. (1 mark)",
            marks: 7,
            modelAnswer: "(a) When heated, both metals expand, but brass expands much more than invar for the same temperature rise. The brass side therefore becomes longer than the invar side. The strip bends towards the invar side (the brass forms the outer, longer side of the curve).\n\n(b) The bimetallic strip is placed near a fixed contact, with a small gap. As the temperature rises, the strip bends until it touches the contact, completing the electrical circuit. Current then flows through the circuit and the alarm bell rings.\n\n(c) Adjust the size of the gap between the strip and the contact (e.g. move the contact closer or further away), so the strip has to bend by more or less before touching — changing the trigger temperature.",
            markScheme: [
              "(a) Brass expands more than invar for same temperature rise (1)",
              "(a) Brass side becomes longer / unequal expansion causes bending (1)",
              "(a) Strip bends towards the invar (less-expanding) side / brass on outside (1)",
              "(b) On heating the strip bends until it touches a fixed contact (1)",
              "(b) This completes / closes the circuit (1)",
              "(b) Current flows and the bell rings (1)",
              "(c) Change the gap between strip and contact / adjust the contact position (1)"
            ],
            commonError: "Getting the bending direction wrong: the strip always bends towards the metal that expands less, because the metal that expands more forms the longer, outer edge of the curve.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "challenge",
            hints: [
              "Which metal becomes longer, and where does the longer side sit on a curve?",
              "A circuit needs a closed path — how does bending help close it?",
              "To change the trigger temperature, change how far the strip must bend."
            ],
            strategy: "link differential expansion to a switching mechanism"
          },
          {
            id: "phys-thermal-bq1-07",
            question: "A flask is fitted with a tube and a drop of coloured liquid sits in the tube, trapping a fixed amount of air below it. When the flask is warmed gently with the hands, the liquid drop moves outwards along the tube.\n(a) Explain, using the particle model, why the drop moves outwards. (3 marks)\n(b) State and explain what would happen to the drop if the flask were then cooled below its starting temperature. (2 marks)",
            marks: 5,
            modelAnswer: "(a) Warming the flask transfers energy to the trapped air. The air molecules gain kinetic energy and move faster, colliding with the walls and the liquid drop more often and harder. At (nearly) constant pressure the trapped gas expands, pushing the liquid drop outwards along the tube.\n\n(b) If the flask is cooled below the starting temperature, the air molecules lose kinetic energy and move more slowly. The gas contracts (occupies less volume), so the liquid drop moves inwards, ending up further in than where it started.",
            markScheme: [
              "(a) Air molecules gain kinetic energy / move faster (1)",
              "(a) Collide more often and harder / gas tends to expand (1)",
              "(a) Expanding gas pushes the drop outwards (1)",
              "(b) Cooling: molecules slow down, gas contracts (1)",
              "(b) Drop moves inwards / further in than the start (1)"
            ],
            commonError: "Forgetting that cooling reverses the effect and moves the drop inwards beyond its original position — many only describe heating.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "core",
            hints: [
              "What does warming do to the speed of the trapped air molecules?",
              "An expanding gas needs more room — what does it push on?",
              "Cooling does the reverse of warming."
            ]
          },
          {
            id: "phys-thermal-bq1-08",
            question: "Explain why a gas expands far more than a solid or a liquid when each is heated through the same temperature rise. Refer to the separation of the particles and the forces between them. (4 marks)",
            marks: 4,
            modelAnswer: "In a solid and a liquid the particles are already very close together and there are strong (solid) or moderate (liquid) forces between them. These forces strongly resist any increase in separation, so heating produces only a small increase in average separation and hence a small expansion. In a gas the particles are already far apart and the forces between them are negligible, so there is almost nothing to oppose the particles moving further apart. Heating increases their speed, and at constant pressure the gas expands greatly to a much larger volume. Therefore a gas expands much more than a solid or liquid for the same temperature rise.",
            markScheme: [
              "Solid/liquid particles are close together with strong/moderate forces (1)",
              "These forces resist increase in separation, so expansion is small (1)",
              "Gas particles far apart with negligible forces between them (1)",
              "Little resists separation increasing, so gas expands much more (1)"
            ],
            commonError: "Explaining only the gas and not contrasting it with the strong forces in solids/liquids — the question asks for a comparison.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "core",
            hints: [
              "Compare how close the particles are in each state.",
              "Compare the strength of the forces between particles in each state.",
              "Stronger forces resist the increase in separation that causes expansion."
            ]
          },
          {
            id: "phys-thermal-bq1-09",
            question: "State two everyday situations where the thermal expansion of a material must be allowed for in the design of a structure or device, and in each case briefly explain the consequence if it were ignored. (4 marks)",
            marks: 4,
            modelAnswer: "Example 1 — Railway tracks / bridges: small gaps (expansion joints) are left between sections. If ignored, the rails/bridge would expand on a hot day, be unable to lengthen, and buckle out of shape.\n\nExample 2 — Overhead power/telephone cables: they are hung with slack. If ignored (strung tight), they would contract in cold weather, come under great tension and could snap.\n\n(Other acceptable examples: gaps in concrete road sections; rollers under one end of a steel bridge; loose fitting of metal pipework.)",
            markScheme: [
              "First valid situation named (e.g. railway track / bridge expansion joint) (1)",
              "Correct consequence if ignored (e.g. rails buckle in heat) (1)",
              "Second valid situation named (e.g. slack overhead cables) (1)",
              "Correct consequence if ignored (e.g. cables snap when they contract in the cold) (1)"
            ],
            commonError: "Giving two examples that are really the same idea (e.g. two kinds of metal track) — choose genuinely different situations.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bq1-10",
            question: "A demonstration uses a metal ball that just passes through a metal ring at room temperature.\n(a) Predict and explain what happens when only the ball is heated strongly. (2 marks)\n(b) Predict and explain what happens if, instead, only the ring is heated strongly (the ball at room temperature). (2 marks)",
            marks: 4,
            modelAnswer: "(a) When the ball is heated, it expands and its diameter increases. It then no longer fits through the ring — it becomes too big to pass through.\n\n(b) When the ring is heated, the metal of the ring expands. The hole in the ring gets larger (the whole object scales up, so the gap widens too). The room-temperature ball then passes through even more easily.",
            markScheme: [
              "(a) Ball expands / diameter increases (1)",
              "(a) Ball no longer fits through the ring (1)",
              "(b) Ring expands and the hole gets larger (1)",
              "(b) Ball passes through more easily / still fits (1)"
            ],
            commonError: "Thinking the hole in the ring gets smaller when heated — when a ring expands, the hole expands too, because every dimension of the object increases.",
            guideRef: "Temperature, Internal Energy and Thermal Expansion",
            difficulty: "core",
            hints: [
              "Heating makes metal expand in every direction.",
              "For the ring, does the hole grow or shrink as the metal expands?",
              "Think of the ring as a photo being enlarged — the hole enlarges too."
            ]
          }
        ]
      },
      {
        id: "phys-thermal-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Gas pressure and Boyle's law, with multi-step pressure–volume calculations and particle explanations.",
        questions: [
          {
            id: "phys-thermal-bq2-01",
            question: "Explain, in terms of the motion and collisions of molecules, what is meant by the pressure of a gas on the walls of its container. (3 marks)",
            marks: 3,
            modelAnswer: "The gas is made of molecules moving rapidly and randomly in all directions. The molecules continually collide with the walls of the container. At each collision a molecule bounces off and changes its momentum, exerting a small force on the wall. The combined effect of the very large number of collisions per second over the area of the wall produces a steady average force per unit area, which is the pressure of the gas.",
            markScheme: [
              "Molecules move rapidly / randomly and collide with the walls (1)",
              "Each collision exerts a (small) force on the wall / transfers momentum (1)",
              "Many collisions per second over an area give force per unit area = pressure (1)"
            ],
            commonError: "Saying pressure is caused by the 'weight' of the gas — gas pressure on the container walls is due to molecular collisions, not weight.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bq2-02",
            question: "A fixed mass of gas is sealed in a cylinder by a piston. The gas has a pressure of 120 kPa and a volume of 500 cm³. The piston is pushed in slowly, at constant temperature, until the volume is 300 cm³.\n(a) Calculate the new pressure of the gas. (3 marks)\n(b) Explain why the compression must be carried out slowly for Boyle's law to apply. (2 marks)",
            marks: 5,
            modelAnswer: "(a) Boyle's law: p₁V₁ = p₂V₂\n120 × 500 = p₂ × 300\n60 000 = 300 p₂\np₂ = 60 000 / 300 = 200 kPa\n\n(b) Compressing a gas tends to warm it. If the compression is done slowly, any heat produced has time to escape to the surroundings, so the temperature stays constant. Boyle's law only holds at constant temperature, so a slow compression is needed to keep T fixed.",
            markScheme: [
              "(a) Uses p₁V₁ = p₂V₂ (1)",
              "(a) Correct substitution: 120 × 500 = p₂ × 300 (1)",
              "(a) p₂ = 200 kPa (1)",
              "(b) Compressing the gas would otherwise raise its temperature (1)",
              "(b) Slow compression lets heat escape so temperature stays constant (1)"
            ],
            commonError: "Dividing the wrong way (e.g. 300/60 000) — always isolate p₂ as p₂ = p₁V₁ / V₂.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "core",
            hints: [
              "Write p₁V₁ = p₂V₂ and put the known values in.",
              "Make p₂ the subject: p₂ = p₁V₁ / V₂.",
              "For (b), think about why fast compression would heat the gas."
            ],
            solutions: [
              {
                label: "Boyle's law direct",
                steps: [
                  "p₁V₁ = p₂V₂ at constant temperature",
                  "p₁V₁ = 120 kPa × 500 cm³ = 60 000 kPa·cm³",
                  "p₂ = (p₁V₁) / V₂ = 60 000 / 300",
                  "p₂ = 200 kPa"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bq2-03",
            question: "An air bubble of volume 2.0 cm³ forms at the bottom of a deep tank where the total pressure is 250 kPa. It rises to just below the surface where the pressure is 100 kPa. The temperature is constant.\n(a) Calculate the volume of the bubble just below the surface. (3 marks)\n(b) Explain, using particle ideas, why the bubble changes size as it rises. (3 marks)",
            marks: 6,
            modelAnswer: "(a) Boyle's law: p₁V₁ = p₂V₂\n250 × 2.0 = 100 × V₂\n500 = 100 V₂\nV₂ = 500 / 100 = 5.0 cm³\n\n(b) As the bubble rises, the water pressure on it decreases. At constant temperature the molecules of gas in the bubble keep the same average speed, but with less external pressure squeezing them, the gas expands until its own pressure again balances the surrounding water pressure. The molecules spread out into a larger volume, so the bubble grows.",
            markScheme: [
              "(a) Uses p₁V₁ = p₂V₂ (1)",
              "(a) Correct substitution: 250 × 2.0 = 100 × V₂ (1)",
              "(a) V₂ = 5.0 cm³ (1)",
              "(b) Pressure on the bubble decreases as it rises (1)",
              "(b) Temperature constant, so molecular speed unchanged (1)",
              "(b) Gas expands until its pressure balances the lower surrounding pressure (1)"
            ],
            commonError: "Thinking the bubble shrinks as it rises — lower surrounding pressure lets the gas expand, so the bubble gets bigger near the surface.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "core",
            hints: [
              "Boyle's law applies because temperature is constant.",
              "As the bubble rises, does the surrounding pressure rise or fall?",
              "Lower external pressure lets the gas expand — solve 250 × 2.0 = 100 × V₂."
            ],
            solutions: [
              {
                label: "Boyle's law calculation",
                steps: [
                  "p₁V₁ = p₂V₂ (constant temperature)",
                  "250 kPa × 2.0 cm³ = 100 kPa × V₂",
                  "500 = 100 × V₂",
                  "V₂ = 5.0 cm³"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bq2-04",
            question: "(Challenge) A cylinder of gas has a volume of 800 cm³ at a pressure of 1.0 × 10⁵ Pa. Gas is pumped in until the pressure rises to 4.0 × 10⁵ Pa, the volume and temperature being unchanged.\n(a) Explain, in terms of molecular collisions, why pumping in more gas at the same volume and temperature increases the pressure. (3 marks)\n(b) The gas (now at 4.0 × 10⁵ Pa, 800 cm³) is then released into a balloon until its pressure falls to 1.0 × 10⁵ Pa at the same temperature. Calculate the volume the gas now occupies. (3 marks)",
            marks: 6,
            modelAnswer: "(a) Pumping in more gas increases the number of molecules in the same volume. With more molecules moving at the same average speed (same temperature), there are more collisions with the walls each second. More collisions per unit area per second means a greater force per unit area, so the pressure increases.\n\n(b) Boyle's law applies to the fixed mass of gas now in the cylinder/balloon at constant temperature:\np₁V₁ = p₂V₂\n(4.0 × 10⁵) × 800 = (1.0 × 10⁵) × V₂\nV₂ = (4.0 × 10⁵ × 800) / (1.0 × 10⁵)\nV₂ = 3.2 × 10⁸ / 1.0 × 10⁵ = 3200 cm³",
            markScheme: [
              "(a) Pumping in more gas increases the number of molecules in the same volume (1)",
              "(a) More molecules (same speed) collide with the walls more often per second (1)",
              "(a) More collisions per unit area per second → higher pressure (1)",
              "(b) Uses p₁V₁ = p₂V₂ with p₁ = 4.0 × 10⁵, V₁ = 800, p₂ = 1.0 × 10⁵ (1)",
              "(b) Correct substitution / rearrangement for V₂ (1)",
              "(b) V₂ = 3200 cm³ (1)"
            ],
            commonError: "In (a), saying the molecules move faster — pumping in gas at the same temperature adds more molecules, it does not change their average speed.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "challenge",
            hints: [
              "For (a): what changes when you pump in more gas — the speed or the number of molecules?",
              "For (b): use p₁V₁ = p₂V₂ for the gas after pumping (4.0 × 10⁵ Pa, 800 cm³).",
              "Pressure falls to 1/4, so the volume should rise by a factor of 4."
            ],
            strategy: "separate the 'add gas' step from the 'expand at fixed mass' step",
            solutions: [
              {
                label: "Boyle's law for the expansion step",
                steps: [
                  "Fixed mass of gas at constant temperature: p₁V₁ = p₂V₂",
                  "p₁ = 4.0 × 10⁵ Pa, V₁ = 800 cm³, p₂ = 1.0 × 10⁵ Pa",
                  "V₂ = (p₁V₁) / p₂ = (4.0 × 10⁵ × 800) / (1.0 × 10⁵)",
                  "V₂ = 4.0 × 800 = 3200 cm³"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bq2-05",
            question: "A sealed, rigid steel container holds a fixed mass of gas. It is taken from a cold room into bright sunshine, and the temperature of the gas rises.\n(a) Explain, using the particle model, why the pressure of the gas increases even though the volume cannot change. (3 marks)\n(b) State why Boyle's law (pV = constant) cannot be used in this situation. (1 mark)",
            marks: 4,
            modelAnswer: "(a) Raising the temperature increases the average kinetic energy of the gas molecules, so they move faster. In the rigid container the volume is fixed, so the faster molecules collide with the walls more frequently and each collision exerts a greater force. The increased rate and force of collisions per unit area increases the pressure.\n\n(b) Boyle's law applies only when the temperature is constant. Here the temperature is changing, so Boyle's law (pV = constant) does not apply.",
            markScheme: [
              "(a) Higher temperature: molecules gain kinetic energy / move faster (1)",
              "(a) Collide with the walls more often / volume fixed (1)",
              "(a) Greater force and frequency of collisions per area → higher pressure (1)",
              "(b) Boyle's law requires constant temperature, which is not the case here (1)"
            ],
            commonError: "Trying to apply pV = constant when the temperature changes — Boyle's law is only valid at constant temperature.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "core",
            hints: [
              "What does a temperature rise do to molecular speed?",
              "The volume is fixed, so focus on collision frequency and force.",
              "Recall the condition under which Boyle's law is valid."
            ]
          },
          {
            id: "phys-thermal-bq2-06",
            question: "In an experiment to investigate Boyle's law, a student traps a fixed mass of air in a glass tube above oil and increases the pressure on it with a pump, recording the volume of trapped air at each pressure.\n(a) State the two quantities that must be kept constant in this experiment. (2 marks)\n(b) The student plots pressure (y-axis) against 1/volume (x-axis). State the shape of the graph expected and what it confirms. (2 marks)\n(c) One pair of readings is p = 160 kPa, V = 25 cm³. Predict the volume when the pressure is 200 kPa. (2 marks)",
            marks: 6,
            modelAnswer: "(a) The temperature of the trapped gas and the mass (amount) of trapped gas must be kept constant.\n\n(b) A straight line passing through the origin is expected. This shows that pressure is directly proportional to 1/volume, i.e. p ∝ 1/V, confirming Boyle's law (pV = constant).\n\n(c) p₁V₁ = p₂V₂: 160 × 25 = 200 × V₂, so 4000 = 200 V₂, giving V₂ = 4000/200 = 20 cm³.",
            markScheme: [
              "(a) Temperature constant (1)",
              "(a) Mass / amount of gas constant (1)",
              "(b) Straight line through the origin (1)",
              "(b) Shows p ∝ 1/V / confirms Boyle's law (1)",
              "(c) Uses p₁V₁ = p₂V₂ correctly: 160 × 25 = 200 × V₂ (1)",
              "(c) V₂ = 20 cm³ (1)"
            ],
            commonError: "Expecting a curve for the p against 1/V graph — plotting p against 1/V gives a straight line; it is p against V that gives a curve.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "core",
            hints: [
              "Boyle's law needs two things held fixed — what are they?",
              "If p ∝ 1/V, what shape is a graph of p against 1/V?",
              "For (c), use p₁V₁ = p₂V₂."
            ],
            solutions: [
              {
                label: "Boyle's law prediction",
                steps: [
                  "p₁V₁ = p₂V₂ at constant temperature",
                  "160 kPa × 25 cm³ = 200 kPa × V₂",
                  "4000 = 200 × V₂",
                  "V₂ = 20 cm³"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bq2-07",
            question: "(Challenge) A diver's lungs contain 6.0 dm³ of air at the surface, where the pressure is 100 kPa. She dives to a depth where the total pressure is 250 kPa.\n(a) Assuming temperature is constant and no air is added, calculate the volume the same air would occupy at this depth. (3 marks)\n(b) Explain why a scuba diver must never hold her breath and swim rapidly to the surface from depth. (3 marks)",
            marks: 6,
            modelAnswer: "(a) Boyle's law: p₁V₁ = p₂V₂\n100 × 6.0 = 250 × V₂\n600 = 250 V₂\nV₂ = 600 / 250 = 2.4 dm³\n\n(b) As a diver rises, the surrounding pressure decreases. By Boyle's law, the air in her lungs would expand as the pressure falls. If she holds her breath, the trapped air cannot escape, so it expands and can over-inflate and damage (rupture) her lungs. Breathing out steadily lets the expanding air escape, keeping the lung volume safe.",
            markScheme: [
              "(a) Uses p₁V₁ = p₂V₂ (1)",
              "(a) Correct substitution: 100 × 6.0 = 250 × V₂ (1)",
              "(a) V₂ = 2.4 dm³ (1)",
              "(b) Pressure decreases as she rises (1)",
              "(b) Trapped air would expand (Boyle's law) (1)",
              "(b) Expanding air could over-inflate / rupture / damage the lungs (1)"
            ],
            commonError: "Getting the proportionality backwards — at greater depth the higher pressure compresses the air to a smaller volume (2.4 dm³, not larger).",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "challenge",
            hints: [
              "Greater depth means greater pressure, so the air volume gets smaller — use p₁V₁ = p₂V₂.",
              "For (b), think about what happens to that air when the diver rises and pressure falls.",
              "Boyle's law says volume increases as pressure decreases."
            ],
            strategy: "apply Boyle's law, then reason about the reverse process for safety",
            solutions: [
              {
                label: "Boyle's law calculation",
                steps: [
                  "p₁V₁ = p₂V₂ at constant temperature",
                  "100 kPa × 6.0 dm³ = 250 kPa × V₂",
                  "600 = 250 × V₂",
                  "V₂ = 600 / 250 = 2.4 dm³"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bq2-08",
            question: "Describe, in terms of particles, the difference between how the pressure of a fixed mass of gas changes (a) when the volume is halved at constant temperature, and (b) when the temperature is raised at constant volume. (4 marks)",
            marks: 4,
            modelAnswer: "(a) At constant temperature the molecules keep the same average speed. Halving the volume means each molecule has, on average, a shorter distance to travel before hitting a wall, so the molecules collide with the walls about twice as often per second. The increased collision rate roughly doubles the pressure (Boyle's law).\n\n(b) At constant volume, raising the temperature increases the average kinetic energy, so the molecules move faster. They both hit the walls more often and strike them harder. Both effects increase the force per unit area, so the pressure increases.",
            markScheme: [
              "(a) Constant T: same average speed; smaller volume means walls hit more often (1)",
              "(a) More frequent collisions → higher pressure (Boyle's law) (1)",
              "(b) Higher T: molecules move faster / greater average kinetic energy (1)",
              "(b) Collide more often AND harder → pressure increases (1)"
            ],
            commonError: "Saying the molecules speed up when the volume is reduced at constant temperature — at constant temperature the speed is unchanged; only the collision frequency increases.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "core",
            hints: [
              "In case (a) the temperature is fixed, so what stays the same about the molecules?",
              "In case (b) the temperature rises, so what changes about the molecules?",
              "Distinguish 'hitting more often' from 'hitting harder'."
            ]
          },
          {
            id: "phys-thermal-bq2-09",
            question: "A gas syringe contains 60 cm³ of gas at atmospheric pressure, 100 kPa. The nozzle is sealed and the plunger is pulled out so the volume becomes 90 cm³, with no change in temperature.\n(a) Calculate the new pressure of the gas. (3 marks)\n(b) State whether the gas pressure is now greater or less than atmospheric pressure, and explain the consequence for the plunger if it is released. (2 marks)",
            marks: 5,
            modelAnswer: "(a) Boyle's law: p₁V₁ = p₂V₂\n100 × 60 = p₂ × 90\n6000 = 90 p₂\np₂ = 6000 / 90 = 66.7 kPa (about 67 kPa)\n\n(b) The new pressure (≈67 kPa) is less than atmospheric pressure (100 kPa). If the plunger is released, the greater atmospheric pressure outside pushes the plunger back in, compressing the gas until the pressures balance again.",
            markScheme: [
              "(a) Uses p₁V₁ = p₂V₂ (1)",
              "(a) Correct substitution: 100 × 60 = p₂ × 90 (1)",
              "(a) p₂ ≈ 66.7 kPa / 67 kPa (1)",
              "(b) New pressure is less than atmospheric (1)",
              "(b) Atmospheric pressure pushes plunger back in / gas is compressed (1)"
            ],
            commonError: "Expecting the pressure to rise when the volume increases — increasing the volume at constant temperature reduces the pressure.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "core",
            hints: [
              "Volume increases, so by Boyle's law the pressure should fall.",
              "p₂ = p₁V₁ / V₂ = 100 × 60 / 90.",
              "Compare the result with 100 kPa to decide which way the plunger moves."
            ],
            solutions: [
              {
                label: "Boyle's law direct",
                steps: [
                  "p₁V₁ = p₂V₂ at constant temperature",
                  "100 kPa × 60 cm³ = p₂ × 90 cm³",
                  "p₂ = 6000 / 90",
                  "p₂ = 66.7 kPa (≈ 67 kPa)"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bq2-10",
            question: "A weather balloon is filled with 20 m³ of helium at ground level, where the pressure is 100 kPa. It rises to a high altitude where the pressure has fallen to 25 kPa. Treat the temperature as constant.\n(a) Calculate the new volume of the helium. (3 marks)\n(b) Explain why, in reality, the temperature high in the atmosphere is much lower than at ground level, and state qualitatively how this would affect your answer to part (a). (2 marks)",
            marks: 5,
            modelAnswer: "(a) Boyle's law: p₁V₁ = p₂V₂\n100 × 20 = 25 × V₂\n2000 = 25 V₂\nV₂ = 2000 / 25 = 80 m³\n\n(b) The air high in the atmosphere is much colder. A lower temperature reduces the average kinetic energy of the helium molecules, which on its own would tend to reduce the volume. So the real volume would be somewhat less than the 80 m³ predicted from pressure alone (the cooling partly offsets the expansion caused by the drop in pressure).",
            markScheme: [
              "(a) Uses p₁V₁ = p₂V₂ (1)",
              "(a) Correct substitution: 100 × 20 = 25 × V₂ (1)",
              "(a) V₂ = 80 m³ (1)",
              "(b) Lower temperature reduces molecular kinetic energy / tends to reduce volume (1)",
              "(b) Real volume would be less than 80 m³ / cooling offsets some expansion (1)"
            ],
            commonError: "Assuming the pressure drop is the only factor — at altitude the much lower temperature also affects the gas, reducing the volume compared with the constant-temperature prediction.",
            guideRef: "Gas Pressure and Boyle's Law",
            difficulty: "challenge",
            hints: [
              "Pressure falls to a quarter, so the constant-temperature volume rises by a factor of 4.",
              "p₂ = 25 kPa, so V₂ = 100 × 20 / 25.",
              "For (b), recall that lower temperature means slower molecules and a tendency to smaller volume."
            ],
            solutions: [
              {
                label: "Boyle's law calculation",
                steps: [
                  "p₁V₁ = p₂V₂ at constant temperature",
                  "100 kPa × 20 m³ = 25 kPa × V₂",
                  "2000 = 25 × V₂",
                  "V₂ = 2000 / 25 = 80 m³"
                ]
              }
            ]
          }
        ]
      },
      {
        id: "phys-thermal-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Specific heat capacity, specific latent heat, changes of state and evaporation, with multi-step calculations.",
        questions: [
          {
            id: "phys-thermal-bq3-01",
            question: "A 2.0 kg block of copper is heated from 18 °C to 68 °C. The specific heat capacity of copper is 390 J/(kg·°C).\n(a) Calculate the energy transferred to the copper. (3 marks)\n(b) State what is meant by 'specific heat capacity'. (1 mark)",
            marks: 4,
            modelAnswer: "(a) ΔT = 68 − 18 = 50 °C\nE = mcΔT = 2.0 × 390 × 50\nE = 39 000 J (= 39 kJ)\n\n(b) The specific heat capacity is the energy required to raise the temperature of 1 kg of a substance by 1 °C (or 1 K).",
            markScheme: [
              "(a) ΔT = 50 °C (1)",
              "(a) Correct substitution into E = mcΔT: 2.0 × 390 × 50 (1)",
              "(a) E = 39 000 J / 39 kJ (1)",
              "(b) Energy to raise temperature of 1 kg by 1 °C / 1 K (1)"
            ],
            commonError: "Using the final temperature (68 °C) instead of the temperature change (50 °C) in E = mcΔT.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "First find ΔT = final − initial temperature.",
              "Use E = mcΔT with m = 2.0 kg and c = 390.",
              "Multiply the three values together."
            ],
            solutions: [
              {
                label: "Direct substitution",
                steps: [
                  "ΔT = 68 − 18 = 50 °C",
                  "E = mcΔT = 2.0 × 390 × 50",
                  "E = 39 000 J = 39 kJ"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bq3-02",
            question: "An electric heater rated at 50 W is used to heat 0.30 kg of a liquid in an insulated cup. After 4.0 minutes the temperature of the liquid has risen by 20 °C.\n(a) Calculate the energy supplied by the heater. (2 marks)\n(b) Assuming all this energy goes into the liquid, calculate the specific heat capacity of the liquid. (3 marks)",
            marks: 5,
            modelAnswer: "(a) time = 4.0 × 60 = 240 s\nE = P × t = 50 × 240 = 12 000 J\n\n(b) E = mcΔT, so c = E / (mΔT)\nc = 12 000 / (0.30 × 20) = 12 000 / 6.0 = 2000 J/(kg·°C)",
            markScheme: [
              "(a) Converts time: 4.0 min = 240 s (1)",
              "(a) E = 50 × 240 = 12 000 J (1)",
              "(b) Rearranges to c = E / (mΔT) (1)",
              "(b) Correct substitution: 12 000 / (0.30 × 20) (1)",
              "(b) c = 2000 J/(kg·°C) (1)"
            ],
            commonError: "Forgetting to convert minutes to seconds before using E = Pt (4 minutes = 240 s, not 4 s).",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "Convert 4.0 minutes to seconds first.",
              "Energy from the heater: E = power × time.",
              "Rearrange E = mcΔT to make c the subject."
            ],
            solutions: [
              {
                label: "Two-step method",
                steps: [
                  "t = 4.0 min = 240 s",
                  "E = P × t = 50 × 240 = 12 000 J",
                  "c = E / (m × ΔT) = 12 000 / (0.30 × 20)",
                  "c = 12 000 / 6.0 = 2000 J/(kg·°C)"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bq3-03",
            question: "A sketch graph shows the temperature of a pure substance against time as it is heated steadily from a cold solid to a hot gas.\n(a) Describe the shape of the graph, naming what happens during each section. (3 marks)\n(b) Explain, in terms of particle energy, why the temperature stays constant during the two flat sections. (3 marks)",
            marks: 6,
            modelAnswer: "(a) The graph starts rising as the solid is heated (temperature increases). It then has a flat section while the solid melts into a liquid (melting point). It rises again as the liquid is heated. There is a second, longer flat section while the liquid boils into a gas (boiling point). Finally it rises again as the gas is heated.\n\n(b) During melting and boiling, the energy supplied is used to overcome the forces between particles (separating them / breaking bonds). This increases the potential energy of the particles, not their kinetic energy. Because temperature depends only on the average kinetic energy of the particles, the temperature stays constant while the state changes.",
            markScheme: [
              "(a) Rising sections: solid, then liquid, then gas being heated (1)",
              "(a) First plateau = melting (solid to liquid) (1)",
              "(a) Second plateau = boiling (liquid to gas) (1)",
              "(b) Energy used to overcome forces between particles / increase potential energy (1)",
              "(b) Kinetic energy of particles does not change (1)",
              "(b) Temperature depends on average kinetic energy, so it stays constant (1)"
            ],
            commonError: "Saying 'the energy is lost' during the flat sections — the energy is not lost; it goes into the potential energy of the particles as bonds are broken.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "There are three rising sections and two flat sections — match them to states and state changes.",
              "Where does the supplied energy go during a state change?",
              "What kind of particle energy determines the temperature?"
            ]
          },
          {
            id: "phys-thermal-bq3-04",
            question: "An ice cube of mass 0.040 kg at 0 °C is added to a drink and melts completely, the resulting water remaining at 0 °C. The specific latent heat of fusion of ice is 3.34 × 10⁵ J/kg.\n(a) Calculate the energy absorbed by the ice as it melts. (3 marks)\n(b) State why the temperature of the ice does not change while it melts, even though it is absorbing energy. (2 marks)",
            marks: 5,
            modelAnswer: "(a) E = mL = 0.040 × 3.34 × 10⁵\nE = 1.336 × 10⁴ J ≈ 1.3 × 10⁴ J (13 360 J)\n\n(b) The absorbed energy is used to break the bonds of the solid lattice, separating the particles into the liquid arrangement. This increases the particles' potential energy, not their kinetic energy. Since temperature depends on average kinetic energy, the temperature stays at 0 °C until all the ice has melted.",
            markScheme: [
              "(a) Uses E = mL (1)",
              "(a) Correct substitution: 0.040 × 3.34 × 10⁵ (1)",
              "(a) E = 1.3 × 10⁴ J / 13 360 J (1)",
              "(b) Energy breaks bonds / separates particles — increases potential energy (1)",
              "(b) Kinetic energy / temperature unchanged during the change of state (1)"
            ],
            commonError: "Using E = mcΔT here — there is no temperature change, so the latent heat formula E = mL must be used.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "There is no temperature change, so which formula applies — mcΔT or mL?",
              "Substitute m = 0.040 kg and L = 3.34 × 10⁵ J/kg.",
              "For (b), think about where the energy goes if not into raising temperature."
            ],
            solutions: [
              {
                label: "Latent heat calculation",
                steps: [
                  "No temperature change, so use E = mL (latent heat of fusion)",
                  "E = m × L = 0.040 kg × 3.34 × 10⁵ J/kg",
                  "E = 1.336 × 10⁴ J",
                  "E ≈ 1.3 × 10⁴ J (13 360 J)"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bq3-05",
            question: "(Challenge) An immersion heater supplies energy at 80 W to 0.50 kg of ice at 0 °C in an insulated container. The ice melts to water at 0 °C, then the water is heated to 40 °C.\n(specific latent heat of fusion of ice = 3.34 × 10⁵ J/kg; specific heat capacity of water = 4200 J/(kg·°C))\n(a) Calculate the energy needed to melt all the ice. (2 marks)\n(b) Calculate the energy needed to then heat the water from 0 °C to 40 °C. (2 marks)\n(c) Calculate the total time taken, assuming no heat is lost. (3 marks)",
            marks: 7,
            modelAnswer: "(a) Melting: E₁ = mL = 0.50 × 3.34 × 10⁵ = 1.67 × 10⁵ J\n\n(b) Heating water: E₂ = mcΔT = 0.50 × 4200 × 40 = 84 000 J = 8.4 × 10⁴ J\n\n(c) Total energy = E₁ + E₂ = 1.67 × 10⁵ + 0.84 × 10⁵ = 2.51 × 10⁵ J\ntime = E / P = 2.51 × 10⁵ / 80 = 3137.5 s ≈ 3140 s (about 52 minutes)",
            markScheme: [
              "(a) E₁ = mL = 0.50 × 3.34 × 10⁵ = 1.67 × 10⁵ J (1 for method, 1 for answer)",
              "(b) E₂ = mcΔT = 0.50 × 4200 × 40 = 84 000 J (1 for method, 1 for answer)",
              "(c) Total energy = 2.51 × 10⁵ J (1)",
              "(c) Uses time = E / P (1)",
              "(c) time ≈ 3140 s / ~52 min (1)"
            ],
            commonError: "Adding the two stages incorrectly, or using mcΔT for the melting stage — melting needs E = mL (no temperature change), heating needs E = mcΔT.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "challenge",
            hints: [
              "Stage 1 is melting at constant temperature: use E = mL.",
              "Stage 2 is heating the water: use E = mcΔT.",
              "Add both energies, then use time = total energy / power."
            ],
            strategy: "split into stages, choose the right formula for each, then combine",
            solutions: [
              {
                label: "Two-stage energy then time",
                steps: [
                  "Stage 1 (melt): E₁ = mL = 0.50 × 3.34 × 10⁵ = 1.67 × 10⁵ J",
                  "Stage 2 (heat): E₂ = mcΔT = 0.50 × 4200 × 40 = 8.4 × 10⁴ J",
                  "Total E = 1.67 × 10⁵ + 0.84 × 10⁵ = 2.51 × 10⁵ J",
                  "time = E / P = 2.51 × 10⁵ / 80 ≈ 3140 s (≈ 52 min)"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bq3-06",
            question: "Explain the difference between boiling and evaporation. In your answer refer to where each occurs, the temperature at which each occurs, and the effect each has on the temperature of the liquid. (4 marks)",
            marks: 4,
            modelAnswer: "Boiling occurs throughout the whole bulk of the liquid (bubbles of vapour form inside it), and only at one fixed temperature — the boiling point. Evaporation occurs only at the surface of the liquid, and at any temperature below the boiling point. During boiling the temperature of the liquid stays constant at the boiling point. During evaporation the liquid cools, because the most energetic molecules escape and the average kinetic energy of those remaining falls.",
            markScheme: [
              "Boiling: throughout the liquid / forms bubbles; evaporation: at the surface only (1)",
              "Boiling: at a fixed boiling point; evaporation: at any temperature (1)",
              "Boiling: temperature stays constant at the boiling point (1)",
              "Evaporation: liquid cools / fastest molecules escape lowering average KE (1)"
            ],
            commonError: "Saying evaporation only happens at the boiling point — evaporation happens at any temperature, from the surface.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bq3-07",
            question: "Wet washing dries faster on a warm, windy day than on a cold, still day.\n(a) State three factors that increase the rate of evaporation of water from the washing. (3 marks)\n(b) Explain, in terms of molecules, why a draught (wind) increases the rate of evaporation. (2 marks)",
            marks: 5,
            modelAnswer: "(a) Any three of: higher temperature; larger surface area exposed (spreading the washing out); a draught / wind moving across the surface; lower humidity (drier surrounding air).\n\n(b) Evaporation releases water molecules into the air just above the surface. Without a draught, this layer becomes saturated and many molecules return to the liquid, slowing the net evaporation. A draught carries the escaped water vapour away, keeping the air above the surface dry. This reduces the number of molecules returning to the liquid, so the net rate of evaporation increases.",
            markScheme: [
              "(a) Higher temperature (1)",
              "(a) Larger surface area (1)",
              "(a) Draught / wind OR lower humidity / drier air (1)",
              "(b) Draught removes water vapour from just above the surface (1)",
              "(b) Fewer molecules return to the liquid, so net evaporation rate increases (1)"
            ],
            commonError: "Explaining the draught as 'bringing in cold air' rather than 'removing the saturated vapour' — the key idea is carrying away escaped molecules.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "List the conditions of a warm, windy, spread-out, dry situation.",
              "What builds up in the air just above an evaporating surface?",
              "How does wind change that layer of vapour?"
            ]
          },
          {
            id: "phys-thermal-bq3-08",
            question: "After a hot bath, a person stepping out of the water in a draught feels very cold, even though the room is warm.\n(a) Explain, in terms of molecules and energy, why the person feels cold. (3 marks)\n(b) Explain why drying quickly with a towel makes the person feel warmer. (2 marks)",
            marks: 5,
            modelAnswer: "(a) The skin is covered in a film of water. The most energetic water molecules evaporate from this film. As they leave, the average kinetic energy of the remaining water (and of the skin) falls, so the skin cools. The energy needed for evaporation (latent heat) is taken from the skin, making the person feel cold; a draught speeds this up by removing the vapour.\n\n(b) Drying with a towel removes the water film from the skin. With little water left, there is much less evaporation, so the skin loses far less energy as latent heat and stops cooling — the person feels warmer.",
            markScheme: [
              "(a) Fastest / most energetic water molecules evaporate from the skin (1)",
              "(a) Average kinetic energy of remaining water/skin falls / energy taken from skin (1)",
              "(a) Skin temperature falls / latent heat drawn from the skin → feels cold (1)",
              "(b) Towel removes the water film (1)",
              "(b) Less evaporation, so less energy lost from skin → feels warmer (1)"
            ],
            commonError: "Attributing the cold feeling to the air temperature rather than to evaporative cooling — the room is warm; it is evaporation removing energy from the skin that causes the chill.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "core",
            hints: [
              "What is on the skin, and what happens to its most energetic molecules?",
              "Where does the energy for evaporation come from?",
              "If you remove the water with a towel, what happens to the evaporation?"
            ]
          },
          {
            id: "phys-thermal-bq3-09",
            question: "(Challenge) A 0.20 kg sample of water at 90 °C is left to cool. It is found that 0.010 kg of the water evaporates while the rest cools down. Estimate the final temperature of the remaining water, assuming all the energy for evaporation comes from the cooling water and no heat is lost to the surroundings.\n(specific heat capacity of water = 4200 J/(kg·°C); specific latent heat of vaporisation of water = 2.26 × 10⁶ J/kg) (5 marks)",
            marks: 5,
            modelAnswer: "Energy needed to evaporate 0.010 kg of water:\nE_evap = mL = 0.010 × 2.26 × 10⁶ = 22 600 J\n\nThis energy comes from cooling the remaining water. After evaporation, the remaining mass of water = 0.20 − 0.010 = 0.19 kg.\nE_cool = m_remaining × c × ΔT\n22 600 = 0.19 × 4200 × ΔT\n22 600 = 798 × ΔT\nΔT = 22 600 / 798 = 28.3 °C\n\nFinal temperature = 90 − 28.3 = 61.7 °C ≈ 62 °C",
            markScheme: [
              "Energy to evaporate: E = mL = 0.010 × 2.26 × 10⁶ = 22 600 J (1)",
              "Recognises this energy is supplied by the cooling water (1)",
              "Uses remaining mass 0.19 kg (accept 0.20 kg) with E = mcΔT (1)",
              "ΔT = 22 600 / (0.19 × 4200) ≈ 28 °C (1)",
              "Final temperature ≈ 62 °C (accept ~61–62 °C; ~63 °C if 0.20 kg used) (1)"
            ],
            commonError: "Using L (latent heat) where c (specific heat) is needed, or vice versa: evaporation uses E = mL; the cooling of the bulk water uses E = mcΔT.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "challenge",
            hints: [
              "First find the energy needed to evaporate 0.010 kg using E = mL.",
              "That same energy is removed from the remaining water as it cools: E = mcΔT.",
              "Solve for ΔT, then subtract from 90 °C."
            ],
            strategy: "energy balance: latent heat out = sensible heat lost by remaining water",
            solutions: [
              {
                label: "Energy balance",
                steps: [
                  "E_evap = mL = 0.010 × 2.26 × 10⁶ = 22 600 J",
                  "Remaining water mass = 0.20 − 0.010 = 0.19 kg",
                  "E_evap = m_remaining × c × ΔT → 22 600 = 0.19 × 4200 × ΔT",
                  "ΔT = 22 600 / 798 = 28.3 °C",
                  "Final temperature = 90 − 28.3 ≈ 62 °C"
                ]
              }
            ]
          },
          {
            id: "phys-thermal-bq3-10",
            question: "Water has an unusually high specific heat capacity (4200 J/(kg·°C)).\n(a) Explain what this value of specific heat capacity means. (2 marks)\n(b) Give one practical use that depends on water having a high specific heat capacity, and explain how the high value helps. (2 marks)",
            marks: 4,
            modelAnswer: "(a) It means that 4200 J of energy is needed to raise the temperature of 1 kg of water by 1 °C. Water therefore needs a lot of energy to change its temperature and also releases a lot of energy when it cools.\n\n(b) Water is used as a coolant (e.g. in car engines or central heating). Because of its high specific heat capacity, it can absorb a large amount of thermal energy with only a small rise in temperature, carrying heat away efficiently. (Accept: hot-water bottles store and release a lot of energy; coastal climates are milder because the sea warms and cools slowly.)",
            markScheme: [
              "(a) 4200 J needed to raise 1 kg of water by 1 °C (1)",
              "(a) Water needs much energy to change temperature / releases much on cooling (1)",
              "(b) Valid use stated (coolant / hot-water bottle / coastal climate) (1)",
              "(b) Explanation linking high c to absorbing/releasing much energy per degree (1)"
            ],
            commonError: "Stating only the use without explaining how the high specific heat capacity makes it work.",
            guideRef: "Specific Heat Capacity and Latent Heat",
            difficulty: "warmup"
          }
        ]
      },
      {
        id: "phys-thermal-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Conduction, convection and radiation: mechanisms, surface effects and everyday applications such as the vacuum flask and home insulation.",
        questions: [
          {
            id: "phys-thermal-bq4-01",
            question: "Define thermal conduction, convection and radiation, stating for each whether it can occur in a vacuum. (6 marks)",
            marks: 6,
            modelAnswer: "Conduction is the transfer of thermal energy through a material by particle-to-particle interaction (vibrations and, in metals, free electrons) without bulk movement of the material. It cannot occur in a vacuum (no particles).\n\nConvection is the transfer of thermal energy through a fluid (liquid or gas) by the bulk movement of the fluid, driven by density differences. It cannot occur in a vacuum (no fluid to move).\n\nRadiation is the transfer of thermal energy by infrared electromagnetic waves. It can occur in a vacuum, as electromagnetic waves need no medium.",
            markScheme: [
              "Conduction: transfer through a material by particle interaction, no bulk movement (1)",
              "Conduction: cannot occur in a vacuum (1)",
              "Convection: transfer in a fluid by bulk movement / density differences (1)",
              "Convection: cannot occur in a vacuum (1)",
              "Radiation: transfer by infrared electromagnetic waves (1)",
              "Radiation: can occur in a vacuum (1)"
            ],
            commonError: "Saying radiation needs a medium — it is the only one of the three that can travel through a vacuum.",
            guideRef: "Conduction and Convection",
            difficulty: "warmup"
          },
          {
            id: "phys-thermal-bq4-02",
            question: "A metal spoon and a wooden spoon are both left standing in a pan of hot soup.\n(a) Explain, in terms of particles, why the metal spoon becomes hot to hold much sooner than the wooden spoon. (4 marks)\n(b) State which spoon you would prefer to stir hot soup with, and why. (1 mark)",
            marks: 5,
            modelAnswer: "(a) In both spoons, particles at the hot end gain kinetic energy and vibrate more vigorously, passing energy to neighbouring particles by collisions (lattice vibration). In the metal spoon there are also free (delocalised) electrons; these gain kinetic energy at the hot end and move rapidly through the metal, transferring energy quickly to the cooler handle. The wooden spoon has no free electrons and relies only on the slow vibration mechanism, so it conducts energy to the handle much more slowly and stays cool to hold.\n\n(b) The wooden spoon, because it is a poor conductor and its handle stays cool, so it will not burn your hand.",
            markScheme: [
              "(a) Particles at hot end vibrate more / pass energy by collisions (1)",
              "(a) Metal has free (delocalised) electrons (1)",
              "(a) Free electrons move through metal carrying energy quickly to the handle (1)",
              "(a) Wood lacks free electrons, conducts only by slow vibration (1)",
              "(b) Wooden spoon — poor conductor, handle stays cool / will not burn the hand (1)"
            ],
            commonError: "Describing only vibration and omitting free electrons — the free electrons are the key reason metals conduct so much faster than wood.",
            guideRef: "Conduction and Convection",
            difficulty: "core",
            hints: [
              "Both spoons conduct by particle vibration — what extra mechanism does the metal have?",
              "What carries energy quickly through a metal apart from vibration?",
              "Which spoon's handle stays cool, and why does that make it safer?"
            ]
          },
          {
            id: "phys-thermal-bq4-03",
            question: "An electric heater is placed at the bottom of a tank of water. A few crystals of coloured dye are dropped in just above the heater.\n(a) Describe what is seen to happen to the coloured dye when the heater is switched on. (2 marks)\n(b) Explain, in terms of density, why the water moves in this way. (3 marks)",
            marks: 5,
            modelAnswer: "(a) The coloured water rises from above the heater up to the top of the tank, then spreads out and sinks down the sides, before being drawn back towards the heater — showing a circulating loop (a convection current).\n\n(b) Water heated by the heater expands, so its density decreases. Being less dense than the surrounding cooler water, the warm water rises. At the top it cools, becomes denser again and sinks. Cooler, denser water flows in along the bottom to replace the water that rose, setting up a continuous convection current.",
            markScheme: [
              "(a) Coloured water rises above the heater (1)",
              "(a) Spreads at the top and sinks at the sides / circulates (convection current) (1)",
              "(b) Heated water expands so its density decreases (1)",
              "(b) Less dense warm water rises; cooler denser water sinks (1)",
              "(b) Continuous circulation / convection current set up (1)"
            ],
            commonError: "Saying warm water rises because it 'becomes lighter' without mentioning density — it is the lower density (not lower mass) that makes warm water rise.",
            guideRef: "Conduction and Convection",
            difficulty: "core",
            hints: [
              "The dye lets you trace the movement of the water — what path does it follow?",
              "What happens to the density of water when it is heated?",
              "Less dense fluid rises; denser fluid sinks."
            ]
          },
          {
            id: "phys-thermal-bq4-04",
            question: "(Challenge) A vacuum (Thermos) flask is designed to keep liquids hot or cold for many hours. It has double walls with a vacuum between them, silvered inner surfaces, an insulating stopper, and is supported on insulating pads.\n(a) Explain how the vacuum reduces heat transfer by conduction and convection. (3 marks)\n(b) Explain how the silvered surfaces reduce heat transfer by radiation. (3 marks)\n(c) State the purpose of the insulating stopper and the insulating supports. (2 marks)",
            marks: 8,
            modelAnswer: "(a) The vacuum between the walls contains virtually no particles. Conduction requires particles to pass energy from one to the next, and convection requires a fluid to circulate; with no particles in the vacuum, neither conduction nor convection can occur across the gap. So heat transfer by these two routes is almost completely stopped.\n\n(b) Radiation can cross the vacuum, so it is dealt with by the surfaces. The silvered (shiny) inner surfaces are poor emitters of infrared radiation, so little is radiated outward from the hot contents. They are also poor absorbers / good reflectors, so any radiation from outside is largely reflected back. Radiation transfer in both directions is therefore minimised.\n\n(c) The insulating stopper reduces heat loss by conduction and convection (and evaporation) through the open top of the flask. The insulating supports/pads reduce conduction of heat through the points where the inner vessel touches the outer casing.",
            markScheme: [
              "(a) Vacuum has no / very few particles (1)",
              "(a) Conduction needs particles, so it is prevented (1)",
              "(a) Convection needs a fluid to move, so it is prevented (1)",
              "(b) Silvered surfaces are poor emitters of radiation (1)",
              "(b) Silvered surfaces are poor absorbers / good reflectors of radiation (1)",
              "(b) Radiation in both directions is reduced (1)",
              "(c) Stopper reduces conduction/convection (and evaporation) through the top (1)",
              "(c) Insulating supports reduce conduction through the contact points (1)"
            ],
            commonError: "Claiming the vacuum 'stops radiation' — the vacuum stops conduction and convection; radiation still crosses it and is dealt with by the silvered surfaces.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "challenge",
            hints: [
              "What two mechanisms need particles, and what does removing the particles do?",
              "Radiation crosses a vacuum — which feature deals with it, and how?",
              "What gaps in the design (top and supports) still allow some conduction, and how are they reduced?"
            ],
            strategy: "match each feature of the flask to the mode of transfer it blocks"
          },
          {
            id: "phys-thermal-bq4-05",
            question: "Two identical metal cans are filled with the same volume of boiling water. One can has a dull black outer surface, the other a shiny silver outer surface. Their temperatures are recorded as they cool.\n(a) Predict which can cools faster and explain why. (3 marks)\n(b) Sketch in words how a graph of temperature against time would differ for the two cans. (2 marks)",
            marks: 5,
            modelAnswer: "(a) The dull black can cools faster. A dull black surface is a better emitter of infrared radiation than a shiny silver surface, so the black can radiates thermal energy away more quickly. The cans are otherwise identical, so the difference in cooling is due to the surface and its effect on radiation.\n\n(b) Both curves start at the same high temperature and fall, levelling off towards room temperature. The black can's curve falls more steeply at first (faster cooling) and reaches room temperature sooner; the silver can's curve falls more gently and stays above the black can's curve throughout.",
            markScheme: [
              "(a) Dull black can cools faster (1)",
              "(a) Dull black is a better emitter of radiation (1)",
              "(a) Black radiates energy away more quickly than shiny silver (1)",
              "(b) Both curves fall from the same start towards room temperature (1)",
              "(b) Black curve falls faster / lies below the silver curve (1)"
            ],
            commonError: "Confusing emission with absorption: here the cans are hot and losing heat, so the relevant property is that dull black is the better emitter.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "core",
            hints: [
              "The only difference is the surface colour/texture — which mode does that affect?",
              "Which surface emits radiation faster, dull black or shiny silver?",
              "The faster emitter loses heat more quickly and cools sooner."
            ]
          },
          {
            id: "phys-thermal-bq4-06",
            question: "Solar water heating panels mounted on a roof use the Sun's radiation to warm water flowing through pipes.\n(a) State the best colour and texture for the absorbing surface of the panel, and explain why. (2 marks)\n(b) Suggest two further design features that would increase the energy absorbed or retained by the panel, with a brief reason for each. (2 marks)",
            marks: 4,
            modelAnswer: "(a) The surface should be dull (matt) black, because dull black surfaces are the best absorbers of infrared (and solar) radiation, so they absorb the most energy from the Sun.\n\n(b) Any two of: a glass cover over the panel — lets solar radiation in but traps re-emitted infrared and reduces convection losses (greenhouse effect); insulation behind the panel — reduces conduction of heat away from the back; angling the panel to face the Sun — maximises the radiation falling on it; pipes painted black and arranged for good contact — maximises absorption and transfer to the water.",
            markScheme: [
              "(a) Dull / matt black surface (1)",
              "(a) Dull black is the best absorber of radiation (1)",
              "(b) One valid feature with reason (e.g. glass cover traps infrared / cuts convection) (1)",
              "(b) Second valid feature with reason (e.g. insulation behind reduces conduction loss) (1)"
            ],
            commonError: "Suggesting a shiny surface to 'reflect heat in' — for absorbing the Sun's energy you want a dull black surface, the best absorber.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "core",
            hints: [
              "Which surface absorbs radiation best?",
              "How could you stop the absorbed heat escaping by convection or conduction?",
              "Think about a glass cover and insulation behind the panel."
            ]
          },
          {
            id: "phys-thermal-bq4-07",
            question: "Describe and explain three different ways the design of a house can reduce heat loss in winter, naming the mode(s) of heat transfer each one reduces. (6 marks)",
            marks: 6,
            modelAnswer: "Loft insulation (glass fibre/mineral wool): traps air in the fibres in the loft. The trapped air is a poor conductor and cannot form convection currents, so it reduces heat loss by conduction and convection through the roof.\n\nCavity wall insulation (foam in the gap between two walls): traps air in the foam, again reducing conduction and convection through the walls.\n\nDouble glazing (two panes of glass with a gap, often containing low-pressure gas): the trapped gas/air is a poor conductor and limits convection, reducing conduction and convection through the windows.\n\n(Other acceptable: reflective foil behind radiators or in the loft to reduce radiation loss; draught excluders to reduce convection through gaps; thick curtains to trap air at the windows.)",
            markScheme: [
              "First method named with correct mode(s), e.g. loft insulation reduces conduction/convection (1 + 1)",
              "Second method named with correct mode(s), e.g. cavity wall insulation reduces conduction/convection (1 + 1)",
              "Third method named with correct mode(s), e.g. double glazing reduces conduction/convection (1 + 1)"
            ],
            commonError: "Listing three methods that all work by the same trapped-air idea without naming the modes of transfer, or claiming insulation reduces radiation when it mainly reduces conduction and convection.",
            guideRef: "Conduction and Convection",
            difficulty: "core",
            hints: [
              "Many methods rely on trapping air — name three different places it is done.",
              "For each, state which transfer modes are reduced.",
              "Reflective foil tackles a different mode — radiation."
            ],
            strategy: "name a feature, link it to trapped air or reflection, then to the transfer mode"
          },
          {
            id: "phys-thermal-bq4-08",
            question: "A room has a central heating radiator on one wall.\n(a) Explain how thermal energy from the radiator reaches all parts of the room, and state which mode of transfer is mainly responsible. (4 marks)\n(b) Explain why the radiator is usually placed low down on the wall rather than near the ceiling. (2 marks)",
            marks: 6,
            modelAnswer: "(a) Air in contact with the hot radiator is warmed (by conduction from the metal surface). This warm air expands, becomes less dense and rises. Cooler, denser air sinks and flows in to take its place and is warmed in turn. This sets up a convection current that circulates warm air around the whole room. Convection is mainly responsible for warming the room. (The radiator also emits some infrared radiation, which warms nearby objects directly.)\n\n(b) Placing the radiator low down means the air it warms can rise and circulate, carrying heat upward and around the whole room by convection. If it were near the ceiling, the warm air would simply stay at the top and the lower part of the room would remain cold.",
            markScheme: [
              "(a) Air next to radiator is warmed and becomes less dense (1)",
              "(a) Warm air rises, cooler air sinks to replace it (1)",
              "(a) Convection current circulates warm air around the room (1)",
              "(a) Convection is the main mode (radiation also plays a small part) (1)",
              "(b) Warm air rises, so heating low down lets it circulate through the whole room (1)",
              "(b) A radiator near the ceiling would leave warm air trapped at the top (1)",
            ],
            commonError: "Saying the room is warmed mainly by conduction through the air — air is a poor conductor, so convection is the dominant process across the room.",
            guideRef: "Conduction and Convection",
            difficulty: "core",
            hints: [
              "How does the air near the radiator move once it is warmed?",
              "Which mode carries heat across the whole room — conduction, convection or radiation?",
              "Where does warm air end up, and how does that decide the best radiator position?"
            ]
          },
          {
            id: "phys-thermal-bq4-09",
            question: "Sea breezes occur at the coast on a sunny day. The land heats up faster than the sea, and during the day a cool breeze blows from the sea towards the land.\n(a) Explain, in terms of convection, why a breeze blows from the sea to the land during the day. (4 marks)\n(b) State and briefly explain in which direction the breeze tends to blow at night. (2 marks)",
            marks: 6,
            modelAnswer: "(a) During the day the land warms up faster than the sea (land has a lower specific heat capacity). The air above the warm land is heated, expands, becomes less dense and rises. This leaves a region of lower pressure above the land. Cooler, denser air from above the sea then flows in along the surface towards the land to replace the rising air, and we feel this as a cool sea breeze. The rising warm air and incoming cool air form a convection current.\n\n(b) At night the breeze tends to blow from the land to the sea. The land cools faster than the sea, so now the sea is warmer; the air above the sea rises and cooler air flows out from the land to replace it, giving a land breeze.",
            markScheme: [
              "(a) Land heats faster than sea; air above land is warmed (1)",
              "(a) Warm air over land becomes less dense and rises (1)",
              "(a) Cooler denser air over the sea flows in to replace it (1)",
              "(a) This incoming air is the sea breeze / convection current (1)",
              "(b) At night the breeze blows from land to sea (1)",
              "(b) Sea is now warmer, air above sea rises, air flows out from cooler land (1)"
            ],
            commonError: "Reversing the direction of flow — the air at the surface always flows towards where the air is rising (towards the warmer surface), so by day it flows from sea to land.",
            guideRef: "Conduction and Convection",
            difficulty: "challenge",
            hints: [
              "Which surface warms faster by day, the land or the sea?",
              "Above the warmer surface the air rises — where must surface air flow to replace it?",
              "At night the situation reverses: the sea is now the warmer surface."
            ],
            strategy: "find where air rises, then surface air flows towards that point"
          },
          {
            id: "phys-thermal-bq4-10",
            question: "(Challenge) A camper has a metal mug and a plastic mug, a roll of shiny aluminium foil, and some woollen cloth. It is a cold evening and she wants to keep her hot drink warm for as long as possible.\n(a) State which mug she should use and why, referring to conduction. (2 marks)\n(b) Explain how wrapping the mug in woollen cloth reduces heat loss, naming the mode(s) of transfer. (2 marks)\n(c) Explain how an outer layer of shiny aluminium foil could further reduce heat loss, naming the mode it affects. (2 marks)",
            marks: 6,
            modelAnswer: "(a) She should use the plastic mug. Plastic is a poor conductor (it has no free electrons), so it conducts heat away from the drink to her hand and the surroundings much more slowly than the metal mug, which is a good conductor and would lose heat quickly by conduction.\n\n(b) Woollen cloth traps many small pockets of air within its fibres. Trapped air is a poor conductor, and because it cannot move freely it cannot form convection currents. So the wool reduces heat loss by both conduction and convection.\n\n(c) A shiny aluminium foil outer layer is a poor emitter (good reflector) of infrared radiation. It reduces the radiation emitted from the warm mug to the surroundings, cutting heat loss by radiation.",
            markScheme: [
              "(a) Use the plastic mug (1)",
              "(a) Plastic is a poor conductor / metal would conduct heat away quickly (1)",
              "(b) Wool traps air; trapped air is a poor conductor and prevents convection (1)",
              "(b) Reduces conduction and convection (1)",
              "(c) Shiny foil is a poor emitter / good reflector of radiation (1)",
              "(c) Reduces heat loss by radiation (1)"
            ],
            commonError: "Suggesting the metal mug because metal 'feels warm' — metal is a good conductor and loses the drink's heat quickly; a poor conductor (plastic) keeps the drink warmer.",
            guideRef: "Thermal Radiation and Applications",
            difficulty: "challenge",
            hints: [
              "Which material conducts heat away more slowly, metal or plastic?",
              "What does wool trap, and which two modes does that reduce?",
              "Shiny foil affects which mode — conduction, convection or radiation?"
            ],
            strategy: "tackle each transfer mode with the right material: poor conductor, trapped air, shiny reflector"
          }
        ]
      }
    ]
  },
};
