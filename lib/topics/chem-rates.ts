import type { Topic } from "../types";

export const chemRates: Topic = {
  id: "chem-rates",
  title: "Rate of Reaction & Equilibrium",
  subject: "chemistry",
  icon: "⏱️",
  blurb: "Collision theory, factors that change rate, measuring reactions, and Le Chatelier equilibrium including the Haber process.",
  intro: "Every chemical reaction depends on particles colliding — but not every collision leads to a reaction. Understanding *why* some conditions speed things up and others slow them down unlocks the logic behind industrial chemistry, from making ammonia to designing catalytic converters. In this topic you will master collision theory, learn to read rate graphs, and discover how reversible reactions settle into a dynamic balance — and how we can nudge that balance to our advantage.",

  guide: [
    {
      heading: "Collision Theory: Why Reactions Happen",
      body: `For a reaction to occur, reacting particles must collide **with sufficient energy** and with the **correct orientation**.

The minimum energy needed for a successful collision is called the **activation energy (Ea)**. Collisions with energy below Ea simply bounce off; only a fraction of all collisions are actually effective.

- **Successful collision**: energy ≥ Ea AND correct geometry (e.g. the reactive end of a molecule must strike).
- **Unsuccessful collision**: energy < Ea OR wrong orientation.

Rate of reaction is therefore determined by:
1. The **frequency** of collisions (how often particles meet).
2. The **proportion** of those collisions that have energy ≥ Ea.

This two-factor view is the key to understanding every factor that changes the rate.`,
      diagrams: [
        {
          caption: "Energy profile diagram showing activation energy with and without a catalyst",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Energy profile diagram showing activation energy with and without a catalyst">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Axes -->
  <line x1="30" y1="170" x2="300" y2="170" stroke="#b7bce0" stroke-width="1.5"/>
  <line x1="30" y1="20" x2="30" y2="170" stroke="#b7bce0" stroke-width="1.5"/>
  <!-- Axis labels -->
  <text x="155" y="192" text-anchor="middle" fill="#b7bce0" font-size="11" font-family="sans-serif">Progress of reaction</text>
  <text x="12" y="100" text-anchor="middle" fill="#b7bce0" font-size="11" font-family="sans-serif" transform="rotate(-90 12 100)">Energy</text>
  <!-- Without catalyst curve (higher) -->
  <path d="M 40,140 C 80,140 90,30 140,28 C 190,26 195,110 260,115" stroke="#fb7185" stroke-width="2" fill="none"/>
  <!-- With catalyst curve (lower peak) -->
  <path d="M 40,140 C 80,140 100,65 140,62 C 180,59 200,110 260,115" stroke="#34d399" stroke-width="2" fill="none" stroke-dasharray="5,3"/>
  <!-- Ea arrow without catalyst -->
  <line x1="148" y1="28" x2="148" y2="140" stroke="#fb7185" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="155" y="88" fill="#fb7185" font-size="9" font-family="sans-serif">Ea (no cat.)</text>
  <!-- Ea arrow with catalyst -->
  <line x1="128" y1="62" x2="128" y2="140" stroke="#34d399" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="132" y="108" fill="#34d399" font-size="9" font-family="sans-serif">Ea (cat.)</text>
  <!-- Reactants and products labels -->
  <text x="42" y="136" fill="#b7bce0" font-size="10" font-family="sans-serif">Reactants</text>
  <text x="222" y="111" fill="#b7bce0" font-size="10" font-family="sans-serif">Products</text>
  <!-- Legend -->
  <line x1="170" y1="20" x2="190" y2="20" stroke="#fb7185" stroke-width="2"/>
  <text x="193" y="23" fill="#fb7185" font-size="9" font-family="sans-serif">no catalyst</text>
  <line x1="170" y1="34" x2="190" y2="34" stroke="#34d399" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="193" y="37" fill="#34d399" font-size="9" font-family="sans-serif">with catalyst</text>
</svg>`
        }
      ],
      keyPoints: [
        "Particles must collide with energy ≥ activation energy (Ea) AND correct orientation to react.",
        "Activation energy is the minimum energy needed for a successful collision.",
        "Rate depends on collision frequency AND the proportion of collisions with energy ≥ Ea.",
        "Most collisions are unsuccessful — energy too low or orientation wrong.",
        "A catalyst lowers Ea, providing an alternative reaction pathway."
      ],
      discovery: {
        problem: "Consider two flasks of hydrogen gas and iodine vapour at room temperature. They sit for weeks without reacting noticeably. When heated to 300 °C, they react quickly. Yet the particles are colliding constantly at room temperature — trillions of times per second. Why doesn't every collision cause a reaction?",
        idea: "Most collisions lack sufficient energy. At room temperature, only a tiny fraction of molecules have kinetic energy ≥ Ea. Heating shifts the energy distribution so a much larger fraction exceeds Ea — far more effective collisions per second, hence a much faster rate."
      },
      whyItWorks: "The Maxwell-Boltzmann energy distribution shows that particle energies span a wide range. The area under the curve to the right of Ea represents the fraction of particles able to react. Raising temperature shifts and broadens this curve, dramatically increasing that fraction — which is why a 10 °C rise often roughly doubles the rate."
    },

    {
      heading: "Factors Affecting Rate of Reaction",
      body: `Five key factors change the rate. For each, you must explain the effect in terms of collision frequency and/or collision energy.

**1. Concentration (solutions)**
Increasing concentration means more solute particles in the same volume. Collision frequency increases, so more successful collisions per second → faster rate.

**2. Pressure (gases)**
Increasing pressure compresses the gas into a smaller volume — effectively increasing concentration. Same logic: higher collision frequency → faster rate.

**3. Temperature**
Increasing temperature gives particles more kinetic energy. Two effects:
- Particles move faster → collision frequency increases slightly.
- More importantly: a much higher *proportion* of collisions now have energy ≥ Ea → more successful collisions per second.
A rise of ~10 °C roughly doubles the rate for many reactions.

**4. Surface area (particle size)**
For solid reactants, only particles at the surface can collide with the other reactant. Smaller particles (e.g. powder vs. lump) have a **greater surface area to volume ratio**, exposing more particles to collisions → higher collision frequency → faster rate.

**5. Catalysts**
A catalyst provides an **alternative reaction pathway with a lower activation energy**. More collisions now have sufficient energy, so the proportion of effective collisions increases. The catalyst is **not consumed** in the reaction — it is chemically unchanged overall.

Note: a catalyst does *not* increase the collision frequency; it lowers the energy threshold.`,
      diagrams: [
        {
          caption: "Particle diagrams comparing low and high concentration solutions showing collision frequency",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Particle diagrams comparing low and high concentration solutions">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Low concentration box -->
  <rect x="10" y="30" width="130" height="130" rx="6" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="75" y="22" text-anchor="middle" fill="#38bdf8" font-size="11" font-family="sans-serif">Low concentration</text>
  <!-- Sparse particles -->
  <circle cx="35" cy="60" r="8" fill="#38bdf8" fill-opacity="0.7"/>
  <circle cx="80" cy="90" r="8" fill="#fb7185" fill-opacity="0.7"/>
  <circle cx="50" cy="130" r="8" fill="#38bdf8" fill-opacity="0.7"/>
  <circle cx="110" cy="65" r="8" fill="#fb7185" fill-opacity="0.7"/>
  <circle cx="95" cy="140" r="8" fill="#38bdf8" fill-opacity="0.7"/>
  <circle cx="30" cy="100" r="8" fill="#fb7185" fill-opacity="0.7"/>
  <!-- High concentration box -->
  <rect x="180" y="30" width="130" height="130" rx="6" fill="none" stroke="#34d399" stroke-width="1.5"/>
  <text x="245" y="22" text-anchor="middle" fill="#34d399" font-size="11" font-family="sans-serif">High concentration</text>
  <!-- Dense particles -->
  <circle cx="200" cy="55" r="7" fill="#38bdf8" fill-opacity="0.8"/>
  <circle cx="225" cy="55" r="7" fill="#fb7185" fill-opacity="0.8"/>
  <circle cx="250" cy="55" r="7" fill="#38bdf8" fill-opacity="0.8"/>
  <circle cx="275" cy="55" r="7" fill="#fb7185" fill-opacity="0.8"/>
  <circle cx="200" cy="80" r="7" fill="#fb7185" fill-opacity="0.8"/>
  <circle cx="225" cy="80" r="7" fill="#38bdf8" fill-opacity="0.8"/>
  <circle cx="250" cy="80" r="7" fill="#fb7185" fill-opacity="0.8"/>
  <circle cx="275" cy="80" r="7" fill="#38bdf8" fill-opacity="0.8"/>
  <circle cx="200" cy="105" r="7" fill="#38bdf8" fill-opacity="0.8"/>
  <circle cx="225" cy="105" r="7" fill="#fb7185" fill-opacity="0.8"/>
  <circle cx="250" cy="105" r="7" fill="#38bdf8" fill-opacity="0.8"/>
  <circle cx="275" cy="105" r="7" fill="#fb7185" fill-opacity="0.8"/>
  <circle cx="200" cy="130" r="7" fill="#fb7185" fill-opacity="0.8"/>
  <circle cx="225" cy="130" r="7" fill="#38bdf8" fill-opacity="0.8"/>
  <circle cx="250" cy="130" r="7" fill="#fb7185" fill-opacity="0.8"/>
  <circle cx="275" cy="130" r="7" fill="#38bdf8" fill-opacity="0.8"/>
  <!-- Arrow -->
  <text x="155" y="100" text-anchor="middle" fill="#fbbf24" font-size="18" font-family="sans-serif">-&gt;</text>
  <text x="155" y="115" text-anchor="middle" fill="#fbbf24" font-size="9" font-family="sans-serif">more</text>
  <text x="155" y="126" text-anchor="middle" fill="#fbbf24" font-size="9" font-family="sans-serif">collisions</text>
  <!-- Legend -->
  <circle cx="20" cy="180" r="5" fill="#38bdf8" fill-opacity="0.8"/>
  <text x="28" y="184" fill="#b7bce0" font-size="9" font-family="sans-serif">Reactant A</text>
  <circle cx="95" cy="180" r="5" fill="#fb7185" fill-opacity="0.8"/>
  <text x="103" y="184" fill="#b7bce0" font-size="9" font-family="sans-serif">Reactant B</text>
</svg>`
        }
      ],
      keyPoints: [
        "Higher concentration/pressure → more particles per unit volume → more frequent collisions → faster rate.",
        "Higher temperature → particles have more kinetic energy → greater proportion exceed Ea → faster rate.",
        "Smaller particle size → greater surface area → more particles exposed → more frequent collisions.",
        "A catalyst provides an alternative pathway with lower Ea; it is not consumed in the reaction.",
        "Catalysts increase the proportion of successful collisions, NOT the collision frequency."
      ],
      strategies: ["Identify which variable changes, then explain using collision frequency OR collision energy OR both."],
      thinkDeeper: "Why does temperature have such a large effect compared with, say, doubling the concentration? Doubling concentration doubles the collision frequency — a factor of 2. But raising temperature by 10 °C shifts the Maxwell-Boltzmann distribution so the fraction of molecules exceeding Ea can increase by much more than a factor of 2, especially when Ea is high. This exponential sensitivity is captured mathematically by the Arrhenius equation, which you will meet in A Level chemistry.",
      whyItWorks: "For concentration and pressure: rate ∝ (number of particles per unit volume)², so doubling concentration can more than double the rate for bimolecular steps. For temperature: the Boltzmann factor e^(−Ea/RT) governs the fraction of molecules with E ≥ Ea. A small rise in T increases RT, making the exponent less negative, and the fraction rises exponentially."
    },

    {
      heading: "Measuring Rate & Interpreting Rate Graphs",
      body: `Rate of reaction can be defined as: **change in quantity of reactant or product per unit time**.

Common experimental methods:
- **Volume of gas collected** (e.g. CaCO3 + HCl → CO2 captured in a gas syringe). Plot volume vs. time.
- **Loss of mass** (e.g. CaCO3 + HCl on a balance; CO2 escapes). Plot mass vs. time.
- **Time for a precipitate** (e.g. sodium thiosulfate + HCl → S precipitate obscures a cross drawn below the flask). Record time for cross to disappear; rate ∝ 1/time.
- **Colour change / colorimetry** for reactions involving coloured species.

**Reading a volume-vs-time graph:**
- The **gradient (slope)** at any point = rate at that moment.
- Steepest gradient = fastest rate (at the start of the reaction).
- As reactants are consumed, the curve flattens → rate decreases.
- The curve becomes **horizontal** when the reaction is complete (limiting reactant used up).
- The **final volume** (plateau) depends on the quantity of reactant, NOT the rate.

**Comparing two conditions on the same graph:**
- A steeper, faster-levelling curve but the **same final volume** → higher rate, same quantity of reactant.
- A steeper curve that also reaches a **higher final volume** → more reactant was used (quantity changed, not just rate).`,
      diagrams: [
        {
          caption: "Volume of gas vs. time graph comparing two conditions (e.g. higher vs. lower concentration)",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Volume of gas vs. time graph comparing higher and lower concentration reactions">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Axes -->
  <line x1="40" y1="170" x2="300" y2="170" stroke="#b7bce0" stroke-width="1.5"/>
  <line x1="40" y1="20" x2="40" y2="170" stroke="#b7bce0" stroke-width="1.5"/>
  <!-- Axis arrows -->
  <polygon points="300,166 300,174 308,170" fill="#b7bce0"/>
  <polygon points="36,20 44,20 40,12" fill="#b7bce0"/>
  <!-- Axis labels -->
  <text x="172" y="192" text-anchor="middle" fill="#b7bce0" font-size="11" font-family="sans-serif">Time / s</text>
  <text x="14" y="100" text-anchor="middle" fill="#b7bce0" font-size="11" font-family="sans-serif" transform="rotate(-90 14 100)">Volume of gas / cm3</text>
  <!-- Gridline for plateau -->
  <line x1="40" y1="60" x2="300" y2="60" stroke="#b7bce0" stroke-width="0.5" stroke-dasharray="4,4"/>
  <text x="36" y="63" text-anchor="end" fill="#b7bce0" font-size="9" font-family="sans-serif">V max</text>
  <!-- Higher concentration curve (faster, steeper) -->
  <path d="M 40,170 C 65,120 100,65 150,61 C 200,57 240,59 295,60" stroke="#38bdf8" stroke-width="2.5" fill="none"/>
  <!-- Lower concentration / temperature curve (slower) -->
  <path d="M 40,170 C 80,145 140,90 200,63 C 240,52 270,58 295,60" stroke="#fbbf24" stroke-width="2.5" fill="none" stroke-dasharray="7,4"/>
  <!-- Gradient tangent for steep curve -->
  <line x1="40" y1="170" x2="80" y2="105" stroke="#38bdf8" stroke-width="1" stroke-dasharray="3,2" opacity="0.6"/>
  <text x="85" y="100" fill="#38bdf8" font-size="9" font-family="sans-serif">steeper gradient</text>
  <text x="85" y="112" fill="#38bdf8" font-size="9" font-family="sans-serif">= faster rate</text>
  <!-- Labels for each curve -->
  <text x="160" y="40" fill="#38bdf8" font-size="10" font-family="sans-serif">Higher concentration</text>
  <text x="208" y="88" fill="#fbbf24" font-size="10" font-family="sans-serif">Lower concentration</text>
  <!-- Same final volume note -->
  <text x="170" y="155" text-anchor="middle" fill="#34d399" font-size="9" font-family="sans-serif">Same final volume</text>
  <text x="170" y="165" text-anchor="middle" fill="#34d399" font-size="9" font-family="sans-serif">(same amount of reactant)</text>
</svg>`
        }
      ],
      keyPoints: [
        "Rate = change in quantity of product (or reactant) ÷ time taken.",
        "Gradient of a volume-vs-time graph = rate at that moment; steeper = faster.",
        "The final plateau volume depends on the amount of reactant, NOT the rate.",
        "Rate decreases over time as reactant concentration falls.",
        "Rate ∝ 1/time is used when the 'disappearing cross' method is employed."
      ],
      discovery: {
        problem: "Two experiments use marble chips (CaCO3) with hydrochloric acid. Experiment A uses 2 g of large chips with 50 cm³ of 1 mol/dm³ HCl. Experiment B uses 2 g of powdered CaCO3 with 50 cm³ of 1 mol/dm³ HCl. Sketch what the volume-of-CO2-vs-time graphs would look like for both experiments on the same axes. What is the same and what is different?",
        idea: "Both experiments produce the same final volume of CO2 (same mass of CaCO3, same HCl — same limiting reagent), so both curves reach the same plateau. However, Experiment B (powder) has a much greater surface area, so its curve is steeper at the start and reaches the plateau much sooner."
      },
      strategies: [
        "When comparing rate graphs: check (1) initial gradient — tells you relative rate; (2) final plateau — tells you how much product formed (amount of reactant).",
        "If only the rate changed (not the quantity), both curves must reach the same final value."
      ]
    },

    {
      heading: "Reversible Reactions & Dynamic Equilibrium",
      body: `Some reactions can proceed in **both directions**. We write these with the reversible reaction symbol: **⇌**

Example: heating ammonium chloride
NH4Cl(s) ⇌ NH3(g) + HCl(g)

When heated, it decomposes; on cooling, the gases recombine.

**Dynamic equilibrium** is established in a **closed system** (no substances can enter or leave) when:
- The rate of the **forward reaction** equals the rate of the **reverse reaction**.
- The concentrations of all reactants and products remain **constant** (but not necessarily equal).
- Both reactions are still occurring — it is dynamic, not static.

Key points about equilibrium:
- It can only be reached in a **closed system**.
- The position of equilibrium describes the relative amounts of reactants and products: *to the right* means more products; *to the left* means more reactants.
- Changing conditions can **shift** the position of equilibrium.`,
      keyPoints: [
        "A reversible reaction can proceed in both the forward and reverse directions; use the ⇌ symbol.",
        "Dynamic equilibrium: forward rate = reverse rate; concentrations are constant but not zero.",
        "Equilibrium can only be established in a closed system.",
        "At equilibrium both reactions are still happening — it is not static.",
        "The position of equilibrium describes the relative amounts of reactants and products."
      ],
      whyItWorks: "As a reversible reaction proceeds forward, the concentration of reactants decreases (slowing the forward rate) while the concentration of products increases (speeding the reverse rate). Eventually the two rates become equal — equilibrium. This is a self-correcting, dynamic balance, not a frozen state."
    },

    {
      heading: "Le Chatelier's Principle",
      body: `**Le Chatelier's Principle**: if a system at equilibrium is subjected to a change, the equilibrium will shift in the direction that **opposes** that change.

This lets us predict how the position of equilibrium moves when we change temperature, pressure, or concentration.

**Temperature**
- Increase temperature → equilibrium shifts in the **endothermic** direction (absorbs the extra heat).
- Decrease temperature → equilibrium shifts in the **exothermic** direction (releases heat to compensate).

**Pressure (gases only)**
- Increase pressure → equilibrium shifts toward the side with **fewer moles of gas** (reduces pressure).
- Decrease pressure → equilibrium shifts toward the side with **more moles of gas**.
- If both sides have the same number of moles of gas, pressure has no effect on position.

**Concentration**
- Increase concentration of a substance → equilibrium shifts **away** from that substance (to use it up).
- Decrease concentration of a substance → equilibrium shifts **toward** that substance (to replace it).

**Catalysts**
- A catalyst speeds up BOTH forward and reverse reactions equally.
- It does NOT change the position of equilibrium — only how quickly equilibrium is reached.`,
      keyPoints: [
        "Le Chatelier: the system shifts to oppose the imposed change.",
        "Higher temperature favours the endothermic direction.",
        "Higher pressure favours the side with fewer moles of gas.",
        "Adding a reactant shifts equilibrium to the right (toward products).",
        "A catalyst speeds equilibrium attainment but does not shift the position."
      ],
      strategies: [
        "Count moles of gas on each side before predicting the effect of pressure.",
        "Identify whether the forward reaction is exo- or endothermic before predicting the effect of temperature."
      ],
      thinkDeeper: "Le Chatelier's principle is a qualitative rule — a shortcut. The underlying reason is thermodynamic: a system minimises its Gibbs free energy. When an external change disturbs the minimum, the reaction proceeds in the direction that restores it. At A Level you will quantify this with the equilibrium constant K and see how K changes with temperature (but not with concentration or pressure)."
    },

    {
      heading: "The Haber Process",
      body: `The Haber process manufactures ammonia (NH3) from nitrogen and hydrogen:

**N2(g) + 3H2(g) ⇌ 2NH3(g)     ΔH = −92 kJ/mol (exothermic)**

Sources of raw materials:
- **Nitrogen**: fractional distillation of liquid air.
- **Hydrogen**: from natural gas (methane) by steam reforming.

**Industrial conditions**:
- Temperature: approximately **450 °C**
- Pressure: approximately **200 atm** (200 atmospheres)
- Catalyst: **iron** (with promoters such as K2O and Al2O3)

**Why these conditions? The compromise:**

*Temperature*: The forward reaction is exothermic. Low temperature favours product formation (Le Chatelier), giving higher yield of NH3. However, low temperature means a very slow rate — uneconomical. 450 °C is a **compromise**: acceptable yield (around 15–25%) at an acceptable rate.

*Pressure*: Left side has 4 moles of gas (1 + 3); right side has 2 moles. High pressure favours the right (fewer gas moles) → higher yield. Very high pressure is extremely expensive and hazardous to maintain. 200 atm is a **compromise**: good yield, manageable engineering cost.

*Catalyst*: Iron catalyst speeds up both reactions equally, reaching equilibrium faster without changing the yield. Economically vital — without it, the rate at 450 °C would still be too slow.

Unreacted N2 and H2 are recycled back into the reactor, so overall conversion is efficient despite the low single-pass yield.`,
      keyPoints: [
        "N2(g) + 3H2(g) ⇌ 2NH3(g); ΔH = −92 kJ/mol (exothermic).",
        "Conditions: ~450 °C, ~200 atm, iron catalyst.",
        "Higher pressure increases yield (4 → 2 moles of gas), but is costly and dangerous.",
        "Lower temperature increases yield (exothermic forward reaction) but slows the rate; 450 °C is the compromise.",
        "Iron catalyst speeds equilibrium attainment without changing equilibrium position; unreacted gases are recycled."
      ],
      strategies: [
        "Balance the equation first; count gas moles on each side.",
        "For every condition ask: what does Le Chatelier predict? What does rate require? The industrial condition is always the compromise between these two tensions."
      ],
      discovery: {
        problem: "If Le Chatelier's principle tells us that low temperature and high pressure give the best yield of NH3, why doesn't the Haber process run at, say, 100 °C and 1000 atm?",
        idea: "At 100 °C the reaction rate is negligibly slow — molecules rarely have energy ≥ Ea. You would wait centuries to collect any ammonia. At 1000 atm the engineering cost is prohibitive and the risk of explosion catastrophic. Industrial chemistry is always a compromise between equilibrium yield, reaction rate, safety, and economics."
      },
      whyItWorks: "The iron catalyst provides an alternative surface-mediated pathway. N2 (which has an extremely strong triple bond, Ea without catalyst ≈ very high) adsorbs onto the iron surface, weakening the N≡N bond and dramatically lowering Ea. This is why nitrogen fixation is so difficult without a catalyst — nature uses the enzyme nitrogenase under very mild conditions, but at enormous metabolic cost."
    }
  ],

  learn: {
    keyFacts: [
      "Particles must collide with energy ≥ activation energy AND correct orientation for a reaction to occur.",
      "Rate increases with: higher concentration, higher pressure (gases), higher temperature, smaller particle size, presence of a catalyst.",
      "A catalyst provides an alternative reaction pathway with lower activation energy; it is not consumed.",
      "Rate of reaction = change in amount of product (or reactant) ÷ time.",
      "On a volume-vs-time graph, the gradient equals the rate; steeper = faster.",
      "The final volume on a rate graph depends on the quantity of limiting reactant, not the rate.",
      "A reversible reaction is shown by ⇌; at dynamic equilibrium, forward rate = reverse rate and concentrations are constant.",
      "Le Chatelier's principle: the system shifts to oppose any imposed change.",
      "In the Haber process: N2 + 3H2 ⇌ 2NH3; conditions ~450 °C, ~200 atm, iron catalyst.",
      "Higher pressure in the Haber process favours ammonia (4 moles gas → 2 moles gas).",
      "The 450 °C temperature is a compromise between yield (Le Chatelier favours lower T) and rate.",
      "Unreacted N2 and H2 are recycled in the Haber process to maximise efficiency."
    ],
    flashcards: [
      { front: "What is activation energy?", back: "The minimum energy required for a collision between reactant particles to result in a reaction." },
      { front: "How does increasing concentration affect rate?", back: "More particles per unit volume → more frequent collisions → faster rate." },
      { front: "How does a catalyst increase rate?", back: "It provides an alternative reaction pathway with a lower activation energy, so a greater proportion of collisions are successful. It is not consumed." },
      { front: "What does the gradient of a volume-vs-time graph represent?", back: "The rate of reaction at that moment. Steeper gradient = faster rate." },
      { front: "What is dynamic equilibrium?", back: "The state in a closed system where the rate of the forward reaction equals the rate of the reverse reaction, and concentrations of all species remain constant." },
      { front: "State Le Chatelier's principle.", back: "If a system at equilibrium is subjected to a change, the equilibrium will shift in the direction that opposes that change." },
      { front: "What is the effect of increasing temperature on an exothermic equilibrium reaction?", back: "The equilibrium shifts in the endothermic (reverse) direction, decreasing the yield of products." },
      { front: "What is the effect of increasing pressure on a reaction where there are more gas moles on the left than the right?", back: "Equilibrium shifts to the right (toward fewer gas moles), increasing the yield of products." },
      { front: "Give the balanced equation for the Haber process.", back: "N2(g) + 3H2(g) ⇌ 2NH3(g)   ΔH = −92 kJ/mol" },
      { front: "Why is 450 °C used in the Haber process rather than a lower temperature?", back: "Lower temperature gives higher yield (Le Chatelier — exothermic forward reaction) but the rate would be too slow to be economical. 450 °C is a compromise between yield and rate." },
      { front: "Why does the 'disappearing cross' method give rate ∝ 1/time?", back: "The time measured is inversely proportional to the rate — a faster reaction produces the precipitate sooner, giving a smaller t, hence rate ∝ 1/t." },
      { front: "Why must equilibrium be established in a closed system?", back: "In an open system, products escape and cannot drive the reverse reaction, so equilibrium is never established." }
    ],
    keyTerms: [
      { term: "Activation energy (Ea)", definition: "The minimum energy that colliding particles must possess for a reaction to occur." },
      { term: "Collision theory", definition: "The theory that reactions occur when particles collide with sufficient energy (≥ Ea) and the correct orientation." },
      { term: "Catalyst", definition: "A substance that increases the rate of reaction by providing an alternative pathway with lower activation energy; it is not used up in the reaction." },
      { term: "Rate of reaction", definition: "The change in the amount (concentration, volume, or mass) of a reactant or product per unit time." },
      { term: "Reversible reaction", definition: "A reaction that can proceed in both the forward and reverse directions; represented by the symbol ⇌." },
      { term: "Dynamic equilibrium", definition: "The state reached in a closed system when the rate of the forward reaction equals the rate of the reverse reaction and the concentrations of all species are constant." },
      { term: "Le Chatelier's principle", definition: "If a system at dynamic equilibrium is subjected to a change, the position of equilibrium shifts in the direction that opposes that change." },
      { term: "Position of equilibrium", definition: "A description of the relative amounts of reactants and products at equilibrium; shifting 'to the right' means more products are formed." },
      { term: "Haber process", definition: "The industrial manufacture of ammonia by the reversible reaction N2 + 3H2 ⇌ 2NH3, using conditions of ~450 °C, ~200 atm and an iron catalyst." },
      { term: "Surface area", definition: "The total area of solid reactant exposed to the other reactant; greater surface area increases collision frequency and rate." },
      { term: "Closed system", definition: "A system in which no matter (reactants or products) can enter or leave, allowing equilibrium to be established." },
      { term: "Endothermic reaction", definition: "A reaction that absorbs energy from the surroundings; the enthalpy change ΔH is positive." }
    ]
  },

  quiz: {
    mcq: [
      {
        id: "chem-rates-mcq-q01",
        question: "Which statement correctly describes a successful collision between reactant particles?",
        options: [
          "Particles collide with any amount of energy regardless of orientation.",
          "Particles collide with energy greater than or equal to the activation energy and with the correct orientation.",
          "Particles collide with energy greater than or equal to the activation energy, but orientation does not matter.",
          "Particles collide only when heated above 100 °C."
        ],
        answerIndex: 1,
        explanation: "Both conditions must be met: the collision energy must be ≥ Ea AND the particles must approach with the correct geometry. Option A ignores both conditions; C ignores orientation; D is a misconception.",
        guideRef: "Collision Theory: Why Reactions Happen",
        difficulty: "warmup"
      },
      {
        id: "chem-rates-mcq-q02",
        question: "A catalyst increases the rate of reaction by:",
        options: [
          "Increasing the collision frequency between reactant particles.",
          "Increasing the temperature of the reaction mixture.",
          "Providing an alternative reaction pathway with a lower activation energy.",
          "Increasing the concentration of the reactants."
        ],
        answerIndex: 2,
        explanation: "A catalyst's key action is to offer an alternative mechanism with lower Ea, so a greater fraction of collisions are successful. It does not change temperature, concentration, or collision frequency significantly.",
        guideRef: "Factors Affecting Rate of Reaction",
        difficulty: "warmup"
      },
      {
        id: "chem-rates-mcq-q03",
        question: "In a volume-of-gas-versus-time experiment, two identical masses of marble chips are reacted: one as large lumps, one as a fine powder, with the same volume and concentration of hydrochloric acid. Which graph description is correct?",
        options: [
          "The powder curve is steeper and reaches a higher final volume.",
          "The powder curve is steeper but both curves reach the same final volume.",
          "The lumps curve is steeper and both curves reach the same final volume.",
          "Both curves are identical because the mass of marble is the same."
        ],
        answerIndex: 1,
        explanation: "Powder has greater surface area → higher collision frequency → steeper initial gradient → faster reaction. However, both experiments use the same mass of marble and excess acid, so the total amount of CO2 produced (final volume) is identical. A is wrong because the quantity of reactant hasn't changed.",
        guideRef: "Measuring Rate & Interpreting Rate Graphs",
        difficulty: "core",
        hints: [
          "Surface area affects rate, not the total amount of product.",
          "What determines the final volume of gas produced?",
          "The final volume depends on which reactant is the limiting reagent — is it different between the two experiments?"
        ]
      },
      {
        id: "chem-rates-mcq-q04",
        question: "At dynamic equilibrium in a closed system:",
        options: [
          "The forward and reverse reactions have both stopped.",
          "The concentrations of reactants and products are equal.",
          "The rate of the forward reaction equals the rate of the reverse reaction.",
          "Only the forward reaction is occurring."
        ],
        answerIndex: 2,
        explanation: "At dynamic equilibrium both reactions continue at equal rates. Concentrations are constant but not necessarily equal. The system is dynamic — it has not stopped. A, B, and D are all classic misconceptions.",
        guideRef: "Reversible Reactions & Dynamic Equilibrium",
        difficulty: "core",
        hints: [
          "The word 'dynamic' implies ongoing movement.",
          "Equal rates — not equal concentrations.",
          "Think about what 'constant concentration' means for the individual reaction rates."
        ]
      },
      {
        id: "chem-rates-mcq-q05",
        question: "For the equilibrium: N2(g) + 3H2(g) ⇌ 2NH3(g)   ΔH = −92 kJ/mol. Increasing the temperature will:",
        options: [
          "Shift the equilibrium to the right, increasing the yield of NH3.",
          "Shift the equilibrium to the left, decreasing the yield of NH3.",
          "Have no effect on the position of equilibrium.",
          "Shift equilibrium to the right because higher temperature always increases yield."
        ],
        answerIndex: 1,
        explanation: "The forward reaction is exothermic (ΔH negative). Le Chatelier predicts the equilibrium shifts in the endothermic direction (reverse) to oppose the temperature increase. This means less NH3 at equilibrium — a lower yield. D is a common misconception.",
        guideRef: "Le Chatelier's Principle",
        difficulty: "core",
        hints: [
          "Is the forward reaction exo- or endothermic?",
          "Le Chatelier: the system shifts to oppose the change — which direction absorbs heat?",
          "If the reverse reaction is endothermic, shifting left absorbs heat."
        ]
      },
      {
        id: "chem-rates-mcq-q06",
        question: "In the Haber process, unreacted nitrogen and hydrogen are recycled. This is done because:",
        options: [
          "Recycling changes the position of equilibrium to produce more ammonia.",
          "The single-pass yield is low (~15–25%), so recycling maximises overall conversion.",
          "Recycling increases the activation energy of the reaction.",
          "Recycling increases the temperature in the reactor."
        ],
        answerIndex: 1,
        explanation: "The equilibrium yield at 450 °C and 200 atm is only around 15–25%. Rather than waste unreacted gases, they are separated from ammonia (which is liquefied) and fed back. This does not shift the equilibrium — it simply ensures raw material is not wasted.",
        guideRef: "The Haber Process",
        difficulty: "core",
        hints: [
          "What is the approximate yield of ammonia per pass through the reactor?",
          "How does returning reactants to the reactor improve overall economics without changing equilibrium conditions?"
        ]
      }
    ],
    qa: [
      {
        id: "chem-rates-qa-q01",
        question: "A student reacts zinc with dilute sulfuric acid and collects the hydrogen gas produced. She repeats the experiment at a higher temperature, keeping all other variables the same.\n\n(a) Describe how the rate of reaction changes.\n(b) Explain, in terms of particles, why this change occurs.\n(c) Sketch the volume-of-hydrogen-versus-time curves for both experiments on the same axes, labelling which curve is at the higher temperature.",
        marks: 6,
        modelAnswer: "(a) The rate of reaction increases at higher temperature.\n\n(b) At higher temperature, the zinc and acid particles have greater kinetic energy. A greater proportion of collisions have energy greater than or equal to the activation energy, so there are more successful collisions per second. (Also: particles move faster, slightly increasing collision frequency.)\n\n(c) The higher-temperature curve is steeper at the start and reaches the plateau (same final volume) sooner. Both curves level off at the same final volume because the same quantity of zinc/acid is used.",
        markScheme: [
          "Rate increases at higher temperature (1)",
          "Particles have more/greater kinetic energy at higher temperature (1)",
          "Greater proportion of collisions have energy ≥ activation energy / more frequent successful collisions (1)",
          "Curve for higher temperature is steeper / reaches plateau faster (1)",
          "Both curves reach the same final volume (1)",
          "Correct labels on the sketch identifying higher and lower temperature curves (1)"
        ],
        commonError: "Students often state 'particles collide more frequently' as the only explanation, omitting the crucial point that a greater *proportion* of collisions exceed Ea. The energy effect is more important than the frequency effect for temperature.",
        guideRef: "Factors Affecting Rate of Reaction",
        difficulty: "core",
        hints: [
          "Part (b): think about two effects — how does temperature affect collision frequency AND how does it affect collision energy?",
          "Which effect (frequency or energy) is more significant for temperature?",
          "Part (c): does using the same mass of zinc mean the final amount of H2 changes? What changes?",
          "Draw the higher-temperature curve as steeper but ending at the same plateau."
        ],
        strategy: "Collision theory explanation: always address both frequency and energy; exam mark schemes typically award a mark for each."
      },
      {
        id: "chem-rates-qa-q02",
        question: "Consider the equilibrium: 2SO2(g) + O2(g) ⇌ 2SO3(g)   ΔH = −196 kJ/mol\n\n(a) State the conditions of temperature and pressure that would give the highest equilibrium yield of SO3. Explain your reasoning using Le Chatelier's principle.\n(b) In practice, this reaction is carried out at ~450 °C rather than a very low temperature. Explain why.",
        marks: 6,
        modelAnswer: "(a) Low temperature and high pressure give the highest yield.\n\nLow temperature: the forward reaction is exothermic (ΔH = −196 kJ/mol). Le Chatelier predicts the equilibrium shifts in the exothermic direction when temperature is lowered, so more SO3 is produced.\n\nHigh pressure: there are 3 moles of gas on the left (2 SO2 + 1 O2) and 2 moles on the right. Le Chatelier predicts the equilibrium shifts toward fewer gas moles (to the right) when pressure is increased, increasing yield of SO3.\n\n(b) Very low temperatures give a very slow rate of reaction — particles lack sufficient energy to reach the activation energy. The rate would be uneconomically slow. 450 °C is a compromise that gives an acceptable rate while still achieving a reasonable yield.",
        markScheme: [
          "Low temperature stated (1)",
          "Forward reaction is exothermic / lower temperature shifts equilibrium in exothermic direction / toward right (1)",
          "High pressure stated (1)",
          "Fewer moles of gas on right (2 vs 3) / pressure shifts equilibrium toward fewer gas moles / to the right (1)",
          "Low temperature gives slow rate / particles lack energy ≥ Ea (1)",
          "450 °C is a compromise between rate and yield (1)"
        ],
        commonError: "Confusing 'yield' (the equilibrium position) with 'rate'. Students sometimes say high temperature is needed for 'a better yield' — it is not; high temperature gives a faster rate but a LOWER yield for an exothermic reaction.",
        guideRef: "Le Chatelier's Principle",
        difficulty: "core",
        hints: [
          "Count moles of gas on each side of the equation first.",
          "Is the forward reaction exo- or endothermic? Le Chatelier tells you which temperature direction favours products.",
          "Why can't you just use the conditions that give maximum yield? What else matters in industry?",
          "Think rate vs. yield — they pull in opposite directions for temperature."
        ],
        strategy: "For any equilibrium question: (1) identify ΔH sign for temperature; (2) count gas moles for pressure; (3) always address the rate-vs-yield compromise for industrial conditions."
      },
      {
        id: "chem-rates-qa-q03",
        question: "A student uses the 'disappearing cross' method to investigate the rate of the reaction between sodium thiosulfate solution and dilute hydrochloric acid. A sulfur precipitate slowly obscures a cross drawn below the flask.\n\n(a) Explain how the student can calculate the rate of reaction from this experiment.\n(b) The student repeats the experiment five times, each time using a higher concentration of sodium thiosulfate. Describe and explain the trend in results expected.\n(c) Why is this method less reliable than collecting a gas, and what assumption does it make?",
        marks: 7,
        modelAnswer: "(a) The student measures the time (t) from mixing to when the cross is no longer visible. Rate is proportional to 1/t (rate ∝ 1/time). A shorter time means a faster rate.\n\n(b) As concentration of sodium thiosulfate increases, the time for the cross to disappear decreases (faster rate). This is because more sodium thiosulfate particles per unit volume means more frequent collisions with HCl particles, so more successful collisions per second, and the sulfur precipitate forms faster.\n\n(c) This method assumes the cross disappears at the same fixed amount of precipitate each time (the endpoint is subjective and depends on the observer's judgement). Collecting gas in a syringe gives a continuous, objective measurement of the volume at any time, allowing a full rate curve to be drawn rather than just one rate value.",
        markScheme: [
          "Rate ∝ 1/time / rate = 1/t (1)",
          "Shorter time = faster rate (1)",
          "As concentration increases, time decreases / rate increases (1)",
          "More particles per unit volume → more frequent collisions → more successful collisions per second (1)",
          "Subjective endpoint — observer decides when cross disappears (1)",
          "Only gives a single rate value (not a continuous curve) (1)",
          "Gas collection gives objective, continuous data (1)"
        ],
        commonError: "Students sometimes say 'the reaction produces more sulfur' at higher concentration — the amount of precipitate is the same; what changes is how quickly it forms.",
        guideRef: "Measuring Rate & Interpreting Rate Graphs",
        difficulty: "core",
        hints: [
          "Part (a): you measure one time value per experiment. How do you convert a time into a rate?",
          "Part (b): use collision theory — what does higher concentration do to the number of particles in the flask?",
          "Part (c): think about what 'when the cross disappears' actually means — is it always the same amount of precipitate?"
        ],
        strategy: "When evaluating experimental methods, address: (1) what is actually measured; (2) is the endpoint objective or subjective; (3) how much information does the method give (one data point vs. a full curve)."
      }
    ]
  },

  questionBank: {
    mcqPapers: [
      {
        id: "chem-rates-bank-mcq-1",
        title: "Rate of Reaction MCQ Paper 1",
        description: "Collision theory, factors affecting rate, and measuring reactions.",
        questions: [
          {
            id: "chem-rates-bank-mcq1-q01",
            question: "Which of the following changes would increase the rate of a reaction between a solid and a solution?",
            options: [
              "Increasing the particle size of the solid",
              "Decreasing the concentration of the solution",
              "Decreasing the temperature",
              "Grinding the solid into a powder"
            ],
            answerIndex: 3,
            explanation: "Grinding the solid into a powder increases surface area, exposing more particles to the solution and increasing collision frequency. Options A, B, and C all decrease the rate.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bank-mcq1-q02",
            question: "In an experiment measuring the rate of reaction by loss of mass, the mass of the reaction vessel decreases over time. The graph of mass versus time eventually levels off. What does the flat region of the graph indicate?",
            options: [
              "The reaction rate has reached its maximum.",
              "The limiting reactant has been completely consumed.",
              "All the gas produced has escaped.",
              "The temperature has dropped to room temperature."
            ],
            answerIndex: 1,
            explanation: "The flat region (plateau) means no more gas is being produced — the limiting reactant is fully used up. The rate at this point is zero, not maximum. Option C would mean continual loss; D is unrelated to the plateau.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bank-mcq1-q03",
            question: "The activation energy of a reaction is best described as:",
            options: [
              "The average kinetic energy of all particles in the reaction mixture.",
              "The energy released when products form.",
              "The minimum energy that colliding particles must have for a reaction to occur.",
              "The total energy stored in the chemical bonds of the reactants."
            ],
            answerIndex: 2,
            explanation: "Activation energy is the threshold energy for a successful collision. A is a description of temperature (average KE). B describes enthalpy change. D is bond energy, not Ea.",
            guideRef: "Collision Theory: Why Reactions Happen",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bank-mcq1-q04",
            question: "A student measures the volume of CO2 collected when CaCO3 reacts with HCl. She uses a smaller piece of CaCO3 (same mass) for a second experiment. Which correctly describes the second graph compared to the first?",
            options: [
              "Steeper initial gradient; higher final volume.",
              "Less steep initial gradient; same final volume.",
              "Steeper initial gradient; same final volume.",
              "Steeper initial gradient; lower final volume because less surface is exposed initially."
            ],
            answerIndex: 2,
            explanation: "Smaller piece = greater surface area = faster rate (steeper gradient). The mass of CaCO3 is the same, so the same total amount of CO2 is produced (same final volume). A and D have the final volume wrong; B has the gradient wrong.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "core",
            hints: [
              "Surface area affects rate (gradient) not the total amount of product.",
              "What determines total CO2 produced — the surface area or the mass of CaCO3?"
            ]
          },
          {
            id: "chem-rates-bank-mcq1-q05",
            question: "Which statement about a catalyst is correct?",
            options: [
              "A catalyst increases the activation energy of the forward reaction.",
              "A catalyst is consumed during the reaction and must be replenished.",
              "A catalyst increases the proportion of successful collisions by lowering the activation energy.",
              "A catalyst increases the collision frequency by raising the temperature."
            ],
            answerIndex: 2,
            explanation: "The catalyst lowers Ea, so more collisions have sufficient energy to react — a greater proportion are successful. A catalyst is not consumed (C is the catalyst definition). Catalysts do not raise temperature.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "core",
            hints: [
              "Does a catalyst change Ea up or down?",
              "What happens to the proportion of successful collisions when Ea is lowered?"
            ]
          },
          {
            id: "chem-rates-bank-mcq1-q06",
            question: "A student uses the disappearing cross method to compare rates at different temperatures. She finds that at 40 °C the cross disappears in 30 s, and at 60 °C it disappears in 8 s. What is the approximate ratio of the rate at 60 °C to the rate at 40 °C?",
            options: [
              "3.75 : 1",
              "1 : 3.75",
              "2 : 1",
              "22 : 1"
            ],
            answerIndex: 0,
            explanation: "Rate ∝ 1/time. Rate at 40 °C ∝ 1/30; rate at 60 °C ∝ 1/8. Ratio = (1/8)/(1/30) = 30/8 = 3.75. So rate at 60 °C is approximately 3.75 times faster. B is inverted; C and D are incorrect calculations.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "challenge",
            hints: [
              "Rate ∝ 1/time for the disappearing cross method.",
              "To find the ratio, divide one rate by the other: (1/t1) / (1/t2) = t2/t1.",
              "Which temperature gives the shorter time? That is the faster rate.",
              "Ratio = 30/8 — simplify this fraction."
            ],
            strategy: "Rate ∝ 1/time: to compare rates, invert the times and divide."
          }
        ]
      },
      {
        id: "chem-rates-bank-mcq-2",
        title: "Rate of Reaction MCQ Paper 2",
        description: "Reversible reactions, equilibrium, Le Chatelier's principle, and the Haber process.",
        questions: [
          {
            id: "chem-rates-bank-mcq2-q01",
            question: "Which of the following is a correct statement about dynamic equilibrium?",
            options: [
              "The concentrations of reactants and products are equal.",
              "The forward and reverse reactions have ceased.",
              "The system must be open to allow exchange of matter with the surroundings.",
              "The rate of the forward reaction equals the rate of the reverse reaction."
            ],
            answerIndex: 3,
            explanation: "At dynamic equilibrium the two rates are equal. Concentrations are constant but not necessarily equal (A wrong). Both reactions are still occurring (B wrong). Equilibrium requires a *closed* system (C wrong).",
            guideRef: "Reversible Reactions & Dynamic Equilibrium",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bank-mcq2-q02",
            question: "For the reaction: A(g) + B(g) ⇌ 2C(g). Increasing the pressure will:",
            options: [
              "Shift equilibrium to the right because there are more moles of gas on the left.",
              "Shift equilibrium to the left because there are more moles of gas on the left.",
              "Have no effect because there are equal moles of gas on each side.",
              "Shift equilibrium to the right because C has fewer moles."
            ],
            answerIndex: 2,
            explanation: "Left side: 1 + 1 = 2 moles of gas. Right side: 2 moles of gas. Equal moles on both sides, so pressure change has no effect on the position of equilibrium. A, B, and D are all incorrect.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "core",
            hints: [
              "Count total moles of gas on each side of the equation.",
              "Le Chatelier and pressure: only matters when moles of gas are unequal.",
              "2 mol on left, 2 mol on right — what does Le Chatelier predict?"
            ]
          },
          {
            id: "chem-rates-bank-mcq2-q03",
            question: "For the reaction: PCl5(g) ⇌ PCl3(g) + Cl2(g)   ΔH = +88 kJ/mol. Which conditions would give the greatest yield of PCl3 at equilibrium?",
            options: [
              "High temperature, high pressure",
              "High temperature, low pressure",
              "Low temperature, high pressure",
              "Low temperature, low pressure"
            ],
            answerIndex: 1,
            explanation: "Forward reaction is endothermic (+88 kJ/mol) → high temperature shifts equilibrium right (Le Chatelier). There are 2 moles of gas on the right and 1 on the left → low pressure shifts equilibrium right. So: high temperature + low pressure gives highest yield of PCl3.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "core",
            hints: [
              "Is the forward reaction endo- or exothermic? Which temperature direction favours it?",
              "Count gas moles: left = 1, right = 1 + 1 = 2. Which pressure favours the side with more moles?",
              "For both factors, identify which direction you want to shift equilibrium, then apply Le Chatelier."
            ]
          },
          {
            id: "chem-rates-bank-mcq2-q04",
            question: "In the Haber process, the iron catalyst is used because it:",
            options: [
              "Increases the yield of ammonia at equilibrium.",
              "Allows equilibrium to be reached more quickly without changing the equilibrium position.",
              "Lowers the temperature needed to balance the equation.",
              "Prevents the reverse reaction from occurring."
            ],
            answerIndex: 1,
            explanation: "The iron catalyst speeds up both the forward and reverse reactions equally, so equilibrium is reached faster but the position (yield) is unchanged. A and D are wrong — catalysts do not shift equilibrium. C is a misconception.",
            guideRef: "The Haber Process",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bank-mcq2-q05",
            question: "In the Haber process: N2(g) + 3H2(g) ⇌ 2NH3(g)   ΔH = −92 kJ/mol. A student claims that running the process at 150 °C instead of 450 °C would be better because it gives a higher equilibrium yield. Why is the student's reasoning incomplete?",
            options: [
              "150 °C would actually give a lower yield because the reaction is exothermic.",
              "150 °C gives a higher yield but the reaction rate would be far too slow to be economical.",
              "150 °C would decompose the iron catalyst.",
              "150 °C would cause ammonia to condense in the reactor pipes."
            ],
            answerIndex: 1,
            explanation: "The student is correct that lower temperature shifts the exothermic equilibrium to the right (higher yield), but the reaction rate at 150 °C is negligibly slow — molecules rarely have energy ≥ Ea. An economically viable process requires an acceptable rate, hence the compromise at 450 °C. A is wrong (lower T does increase yield for an exothermic reaction). C and D are not the main issue.",
            guideRef: "The Haber Process",
            difficulty: "core",
            hints: [
              "Is the student right about the yield? Check with Le Chatelier.",
              "If yield is higher at lower temperature, what other factor prevents using very low temperatures?",
              "Think: rate vs. yield. In industry, both matter."
            ]
          },
          {
            id: "chem-rates-bank-mcq2-q06",
            question: "The reaction N2(g) + 3H2(g) ⇌ 2NH3(g) is at equilibrium. Some NH3 is suddenly removed from the closed system. According to Le Chatelier's principle, what happens?",
            options: [
              "The equilibrium shifts to the left to produce more N2 and H2.",
              "The equilibrium shifts to the right to replace the removed NH3.",
              "The equilibrium position does not change because catalysts are not involved.",
              "The rate of the forward reaction decreases to match the lower NH3 concentration."
            ],
            answerIndex: 1,
            explanation: "Removing a product decreases its concentration. Le Chatelier predicts the system opposes this by shifting to the right — producing more NH3 to partially restore the concentration. A is the wrong direction; C is irrelevant; D is the opposite of what happens.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "challenge",
            hints: [
              "Le Chatelier: the system opposes the change. Removing NH3 reduces its concentration — the system will try to replace it.",
              "Which direction of reaction produces NH3?",
              "Shifting right means forward reaction speeds up — does this make sense given that we just removed a product?",
              "This is actually how continuous ammonia removal in industry improves yield."
            ],
            strategy: "Le Chatelier and concentration: removing a species → system shifts toward that species; adding a species → system shifts away from it."
          }
        ]
      }
    ],
    qaPapers: [
      {
        id: "chem-rates-bank-qa-1",
        title: "Rate of Reaction Structured Questions Paper 1",
        description: "Collision theory, factors affecting rate, and experimental measurement.",
        questions: [
          {
            id: "chem-rates-bank-qa1-q01",
            question: "Hydrogen peroxide solution decomposes slowly at room temperature: 2H2O2(aq) → 2H2O(l) + O2(g). When powdered manganese(IV) oxide (MnO2) is added, the reaction occurs much faster.\n\n(a) What is the role of MnO2 in this reaction? [1]\n(b) Explain, using the concept of activation energy, why MnO2 increases the rate. [2]\n(c) After the reaction is complete, the MnO2 is filtered off. Its mass is found to be unchanged. What does this tell you about MnO2? [1]\n(d) If the same experiment is repeated with the same mass of MnO2 as large pieces rather than powder, predict and explain what would happen to the rate. [2]",
            marks: 6,
            modelAnswer: "(a) MnO2 acts as a catalyst.\n\n(b) MnO2 provides an alternative reaction pathway with a lower activation energy. A greater proportion of H2O2 molecules now have energy greater than or equal to this lower Ea, so more successful collisions occur per second.\n\n(c) It confirms that MnO2 is a catalyst — it is not consumed in the reaction. Its mass is unchanged because it is regenerated at the end of the catalytic cycle.\n\n(d) The rate would decrease (slower). Using large pieces instead of powder reduces the surface area of MnO2 available for the reaction to take place on. Fewer H2O2 molecules can contact the catalyst surface at any one moment, reducing the frequency of successful interactions.",
            markScheme: [
              "MnO2 is a catalyst (1)",
              "Provides alternative pathway with lower Ea (1)",
              "Greater proportion of molecules have energy ≥ lower Ea / more successful collisions per second (1)",
              "MnO2 is a catalyst / not consumed in the reaction / regenerated (1)",
              "Rate decreases / slower with large pieces (1)",
              "Surface area of catalyst is reduced / fewer contact points for H2O2 molecules (1)"
            ],
            commonError: "Students often say the catalyst 'gives energy to the reactants' — it does not. It provides a pathway; it does not transfer energy.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "core",
            hints: [
              "Part (a): one word will do.",
              "Part (b): what does MnO2 do to the energy profile — does it raise or lower Ea?",
              "Part (c): the mass is unchanged — what word describes a substance that can be reused like this?",
              "Part (d): the catalyst is a solid — surface area matters for solids."
            ],
            strategy: "For catalyst questions: always link 'alternative pathway' → 'lower Ea' → 'greater proportion of successful collisions'."
          },
          {
            id: "chem-rates-bank-qa1-q02",
            question: "A student investigates the reaction between marble chips (CaCO3) and excess hydrochloric acid by measuring the loss in mass over time. The experiment produces carbon dioxide gas that escapes.\n\nCaCO3(s) + 2HCl(aq) → CaCl2(aq) + H2O(l) + CO2(g)\n\nThe student records the following data:\n\nTime (s): 0, 30, 60, 90, 120, 150, 180\nMass lost (g): 0, 0.45, 0.78, 0.98, 1.08, 1.12, 1.12\n\n(a) Calculate the mean rate of reaction between 0 and 60 s. Give units. [2]\n(b) At which time interval is the rate fastest? Explain how you can tell from the data. [2]\n(c) Explain why the rate decreases over time. [2]\n(d) The experiment is repeated using the same mass of powdered CaCO3 and the same volume of the same acid. Describe and explain the difference in results. [3]",
            marks: 9,
            modelAnswer: "(a) Mean rate = change in mass / time = 0.78 g / 60 s = 0.013 g/s.\n\n(b) The rate is fastest between 0 and 30 s. The mass loss in this interval (0.45 g) is greater than in any subsequent 30 s interval, showing the gradient is steepest here.\n\n(c) As the reaction proceeds, the concentration of HCl decreases because HCl is consumed. This means there are fewer HCl particles per unit volume, so collisions between HCl and CaCO3 particles are less frequent. The rate of successful collisions decreases.\n\n(d) Using powder increases the surface area of the CaCO3. More CaCO3 surface is exposed to HCl particles, increasing the frequency of collisions between reactant particles. The reaction reaches completion (the same final mass loss of 1.12 g) more quickly — the graph is steeper initially but levels off at the same final mass loss.",
            markScheme: [
              "Rate = 0.78 / 60 = 0.013 g/s (correct value) (1)",
              "Units: g/s or g s⁻¹ (1)",
              "Fastest rate between 0 and 30 s (1)",
              "Greatest mass loss (0.45 g) in first interval / steepest gradient initially (1)",
              "Concentration of HCl decreases over time as HCl is consumed (1)",
              "Fewer HCl particles per unit volume / less frequent collisions (1)",
              "Powder has greater surface area / more CaCO3 exposed (1)",
              "More frequent collisions / faster rate (1)",
              "Same final mass loss (1.12 g) / same quantity of reactant used (1)"
            ],
            commonError: "In part (c), students often say 'there is less acid' without explaining what this means at the particle level — the mark requires a collision frequency explanation.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "core",
            hints: [
              "Part (a): mean rate = total change / total time — read off the mass at t = 60 s.",
              "Part (b): compare mass lost in each 30-second interval — the biggest change = fastest rate.",
              "Part (c): as the reaction proceeds, what happens to [HCl]? Link this to particle collision frequency.",
              "Part (d): what changes when you use powder? Does the final mass loss change?"
            ],
            strategy: "For rate calculations from a table: identify the change in quantity and the time interval, then divide. Always include units.",
            solutions: [
              {
                label: "Method: using the gradient interpretation",
                steps: [
                  "Mean rate = Δ(mass lost) / Δt",
                  "Δ(mass lost) from 0 to 60 s = 0.78 − 0 = 0.78 g",
                  "Δt = 60 − 0 = 60 s",
                  "Mean rate = 0.78 / 60 = 0.013 g s⁻¹"
                ]
              }
            ]
          },
          {
            id: "chem-rates-bank-qa1-q03",
            question: "This question is about collision theory and energy profiles.\n\n(a) Define activation energy. [1]\n(b) Explain why increasing temperature increases the rate of reaction in terms of activation energy and the distribution of particle energies. [3]\n(c) A catalyst is used for the same reaction. Draw an energy profile diagram (labelled sketch is acceptable) showing the energy of reactants, products, and the activation energy both with and without the catalyst. [3]\n(d) A student claims: 'Adding a catalyst always makes a reaction go faster than increasing the temperature.' Evaluate this claim. [2]",
            marks: 9,
            modelAnswer: "(a) Activation energy is the minimum energy that colliding particles must have for a reaction to occur.\n\n(b) At higher temperature, particles have greater kinetic energy. The distribution of energies shifts so that a much greater proportion of particles have energy greater than or equal to the activation energy (Ea). Therefore, more collisions are successful per second, and the rate increases. (Collision frequency also increases slightly because particles move faster, but the energy effect is more significant.)\n\n(c) A correctly labelled energy profile should show: x-axis = progress of reaction; y-axis = energy; reactants at one energy level; products at a lower level (for an exothermic reaction); a peak representing Ea without catalyst; a lower peak representing Ea with catalyst; both curves starting at the same reactant energy and ending at the same product energy.\n\n(d) The claim is an oversimplification and is not always true. A catalyst lowers Ea and can dramatically increase rate at a given temperature. However, a very large increase in temperature could increase the rate more than a particular catalyst. The actual effect depends on the magnitude of Ea, how much the catalyst lowers it, and how much the temperature is raised. In industry, both strategies are often used together.",
            markScheme: [
              "Activation energy: minimum energy for a collision to result in a reaction (1)",
              "Higher temperature → particles have greater kinetic energy (1)",
              "Greater proportion of particles have energy ≥ Ea (1)",
              "More successful collisions per second / rate increases (1)",
              "Diagram: reactants and products at correct relative levels, peak shown for Ea (1)",
              "Lower peak for catalysed pathway, starting and ending at same levels (1)",
              "Both curves correctly labelled (1)",
              "Claim is incomplete / not always true (1)",
              "Effect depends on magnitude of Ea reduction vs. temperature increase / valid qualification (1)"
            ],
            commonError: "On energy profile diagrams, students often draw the catalyst lowering the reactant or product energy levels rather than lowering only the peak (transition state). The reactant and product energies are fixed properties of the substances — only the pathway changes.",
            guideRef: "Collision Theory: Why Reactions Happen",
            difficulty: "challenge",
            hints: [
              "Part (a): one sentence — what is the energy threshold called?",
              "Part (b): think about the Maxwell-Boltzmann idea — the curve shifts right at higher temperature. What does the area to the right of Ea represent?",
              "Part (c): the catalyst lowers the PEAK (the transition state), not the reactant or product levels.",
              "Part (d): is there a single universal answer? Think about what the relative magnitudes of 'temperature increase' and 'Ea lowering' would be for different reactions."
            ],
            strategy: "Evaluation questions require you to say whether the claim is true, partially true, or false — then give a specific reason. Avoid vague statements like 'it depends' without saying what it depends on."
          },
          {
            id: "chem-rates-bank-qa1-q04",
            question: "CHALLENGE: A student sets up two experiments to measure the rate of the reaction between sodium thiosulfate and dilute HCl at different temperatures. She calculates rate = 1/t for each experiment.\n\nExperiment 1: 20 °C → t = 120 s → rate = 8.33 × 10⁻³ s⁻¹\nExperiment 2: 30 °C → t = 56 s → rate = 1.79 × 10⁻² s⁻¹\n\n(a) Calculate the percentage increase in rate from 20 °C to 30 °C. [2]\n(b) The student says 'a 10 °C rise doubles the rate'. Does this data support her claim? Justify your answer with a calculation. [2]\n(c) The student repeats experiment 1 but uses twice the concentration of sodium thiosulfate. She finds t = 58 s. Calculate the rate and compare it to the effect of the 10 °C rise. What does this suggest about the relative importance of concentration and temperature? [3]\n(d) Explain, using collision theory, why temperature has a greater effect on rate than simply doubling the collision frequency would predict. [3]",
            marks: 10,
            modelAnswer: "(a) Percentage increase = [(new − old)/old] × 100 = [(1.79 × 10⁻² − 8.33 × 10⁻³) / 8.33 × 10⁻³] × 100 = [9.57 × 10⁻³ / 8.33 × 10⁻³] × 100 ≈ 115%.\n\n(b) Rate at 30 °C / Rate at 20 °C = 1.79 × 10⁻² / 8.33 × 10⁻³ ≈ 2.15. The rate more than doubles (ratio ≈ 2.15), so the data roughly supports the claim, though it is slightly more than double.\n\n(c) Rate at doubled concentration = 1/58 = 1.72 × 10⁻² s⁻¹. This is very similar to the rate achieved by raising temperature by 10 °C (1.79 × 10⁻²). This suggests that doubling concentration has a similar effect to raising temperature by 10 °C for this reaction — both roughly double the rate.\n\n(d) Doubling concentration roughly doubles collision frequency, which would double the rate if all collisions were successful. However, temperature has a much larger effect because it increases both collision frequency AND — more significantly — the proportion of collisions with energy ≥ Ea. The fraction of particles exceeding Ea increases exponentially with temperature (Arrhenius relationship), not linearly. Even a small temperature rise can dramatically increase the fraction of effective collisions, causing the rate to more than double.",
            markScheme: [
              "% increase = [(1.79e-2 − 8.33e-3) / 8.33e-3] × 100 = 115% (allow 114–116%) (1)",
              "Correct method shown (1)",
              "Ratio = 1.79e-2 / 8.33e-3 ≈ 2.15 (1)",
              "Data roughly supports claim (ratio ≈ 2, slightly more than double) (1)",
              "Rate at 2× concentration = 1/58 = 1.72 × 10⁻² s⁻¹ (1)",
              "Comparison: similar to temperature effect / both roughly double the rate (1)",
              "Doubling collision frequency would only double the rate (1)",
              "Temperature also increases proportion of collisions with E ≥ Ea (1)",
              "This fraction increases exponentially / more dramatically than collision frequency (1)"
            ],
            commonError: "Students sometimes calculate percentage change as (new/old) × 100 rather than [(new−old)/old] × 100. The former gives 215%, not 115%.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "challenge",
            hints: [
              "Part (a): % increase = [(new value − original value) / original value] × 100.",
              "Part (b): compute the ratio of rates. Does it equal 2, or is it higher/lower?",
              "Part (c): rate = 1/time for the disappearing cross. Compare this new rate to both previous rates.",
              "Part (d): distinguish between two effects of temperature — what happens to (i) collision frequency and (ii) the fraction of collisions above Ea? Which effect is larger?"
            ],
            strategy: "Multi-step quantitative questions: work through each sub-part in order, using your calculated values in subsequent parts. Show all working clearly.",
            solutions: [
              {
                label: "Method: percentage change formula",
                steps: [
                  "% increase = [(new − old) / old] × 100",
                  "new rate = 1.79 × 10⁻² s⁻¹; old rate = 8.33 × 10⁻³ s⁻¹",
                  "Difference = 1.79 × 10⁻² − 8.33 × 10⁻³ = 9.57 × 10⁻³",
                  "% increase = (9.57 × 10⁻³ / 8.33 × 10⁻³) × 100 ≈ 115%"
                ]
              },
              {
                label: "Method: ratio approach for part (b)",
                steps: [
                  "Ratio of rates = rate at 30°C / rate at 20°C",
                  "= (1/56) / (1/120) = 120/56 ≈ 2.14",
                  "This is greater than 2, so the rate more than doubles — broadly supports the 'doubles' claim."
                ]
              }
            ]
          }
        ]
      },
      {
        id: "chem-rates-bank-qa-2",
        title: "Equilibrium & Haber Process Structured Questions Paper 2",
        description: "Reversible reactions, dynamic equilibrium, Le Chatelier's principle, and the Haber process.",
        questions: [
          {
            id: "chem-rates-bank-qa2-q01",
            question: "The reaction between nitrogen monoxide and oxygen is reversible:\n\n2NO(g) + O2(g) ⇌ 2NO2(g)   ΔH = −114 kJ/mol\n\n(a) What does the symbol ⇌ mean? [1]\n(b) State two conditions required for dynamic equilibrium to be established. [2]\n(c) Predict and explain the effect of the following changes on the position of equilibrium:\n    (i) Increasing the pressure [2]\n    (ii) Increasing the temperature [2]\n    (iii) Removing NO2 from the system [2]",
            marks: 9,
            modelAnswer: "(a) The symbol ⇌ means the reaction is reversible — it can proceed in both the forward and reverse directions.\n\n(b) Two conditions: (1) the system must be closed (no substances enter or leave); (2) the rate of the forward reaction must equal the rate of the reverse reaction.\n\n(c)(i) Increasing pressure: equilibrium shifts to the right. Left side has 3 moles of gas (2 NO + 1 O2); right side has 2 moles (2 NO2). Le Chatelier predicts the system shifts toward fewer gas moles to reduce the pressure.\n\n(ii) Increasing temperature: equilibrium shifts to the left. The forward reaction is exothermic (ΔH = −114 kJ/mol), so the reverse reaction is endothermic. Le Chatelier predicts the system shifts in the endothermic direction (left) to absorb the extra heat, reducing the yield of NO2.\n\n(iii) Removing NO2: equilibrium shifts to the right. Removing a product decreases its concentration. Le Chatelier predicts the system shifts to replace the removed NO2, increasing the forward reaction.",
            markScheme: [
              "⇌ means the reaction is reversible / can proceed in both directions (1)",
              "Closed system (no matter enters or leaves) (1)",
              "Rate of forward reaction = rate of reverse reaction / concentrations constant (1)",
              "(i) Shifts to the right (1); fewer gas moles on right (2 vs 3) / reduces pressure (1)",
              "(ii) Shifts to the left (1); forward reaction is exothermic / shifting left is endothermic / absorbs heat (1)",
              "(iii) Shifts to the right (1); to replace the removed NO2 / increase concentration of NO2 (1)"
            ],
            commonError: "For part (c)(ii), students commonly say 'higher temperature always shifts equilibrium to the right' — this is wrong. The direction depends on whether the forward reaction is endo- or exothermic.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "core",
            hints: [
              "Part (b): think about what 'dynamic' means and what 'closed system' means separately.",
              "Part (c)(i): count moles of gas on each side first.",
              "Part (c)(ii): what is the sign of ΔH? Which direction (forward or reverse) is exothermic?",
              "Part (c)(iii): Le Chatelier — if you remove a product, the system tries to make more of it."
            ],
            strategy: "For every Le Chatelier question: (1) identify the change; (2) state which direction the system shifts; (3) explain using Le Chatelier's principle with the specific reason for that factor."
          },
          {
            id: "chem-rates-bank-qa2-q02",
            question: "Ammonia is manufactured by the Haber process:\n\nN2(g) + 3H2(g) ⇌ 2NH3(g)   ΔH = −92 kJ/mol\n\n(a) State the typical temperature, pressure, and catalyst used in the Haber process. [3]\n(b) Explain why a pressure of 200 atm rather than 500 atm is chosen. [2]\n(c) Explain why a temperature of 450 °C rather than 200 °C is chosen. [2]\n(d) State the sources of nitrogen and hydrogen used in the Haber process. [2]",
            marks: 9,
            modelAnswer: "(a) Temperature: approximately 450 °C. Pressure: approximately 200 atm. Catalyst: iron.\n\n(b) Higher pressure (e.g. 500 atm) would give a greater yield of NH3 because Le Chatelier shifts equilibrium toward fewer gas moles (right). However, extremely high pressure requires very expensive, specially reinforced equipment and carries significant safety risks (explosion hazard). 200 atm is a compromise that gives acceptable yield at manageable cost and risk.\n\n(c) Le Chatelier predicts that lower temperature favours the exothermic forward reaction, giving higher yield. However, at 200 °C the reaction rate is very slow — few molecules have energy ≥ the activation energy. It would take too long to reach a useful amount of ammonia. 450 °C is a compromise: acceptable yield (∼15–25%) with an economically viable rate.\n\n(d) Nitrogen: from the fractional distillation of liquid air. Hydrogen: from natural gas (methane) by steam reforming.",
            markScheme: [
              "~450 °C (1)",
              "~200 atm (1)",
              "Iron catalyst (1)",
              "500 atm gives higher yield but is too expensive / dangerous / hazardous (1)",
              "200 atm is a compromise between yield and cost/safety (1)",
              "200 °C gives slow rate / particles lack energy to reach Ea (1)",
              "450 °C is compromise between rate and yield (1)",
              "Nitrogen: fractional distillation of liquid air (1)",
              "Hydrogen: from natural gas / methane / steam reforming (1)"
            ],
            commonError: "Students often say the catalyst 'increases the yield' — it does not. The catalyst only speeds up attainment of equilibrium; it does not shift the position.",
            guideRef: "The Haber Process",
            difficulty: "core",
            hints: [
              "Part (b): what would 500 atm achieve (Le Chatelier) and what would be the practical problem?",
              "Part (c): what would 200 °C achieve (Le Chatelier) and what would be the practical problem?",
              "Part (d): where does the N2 come from in the atmosphere? What is a common source of H2 from fossil fuels?"
            ],
            strategy: "For industrial process questions, always address both the Le Chatelier prediction AND the practical constraint (rate, cost, safety) that prevents using the 'ideal' conditions."
          },
          {
            id: "chem-rates-bank-qa2-q03",
            question: "RATE GRAPH CHALLENGE: A student investigates the reaction between calcium carbonate and hydrochloric acid. She collects the CO2 gas produced and records volume at regular intervals.\n\nShe performs three experiments:\n- Experiment 1: 5 g large chips, 100 cm³ of 1 mol/dm³ HCl\n- Experiment 2: 5 g powder, 100 cm³ of 1 mol/dm³ HCl\n- Experiment 3: 5 g large chips, 100 cm³ of 2 mol/dm³ HCl\n\n(a) On a sketch of volume vs. time, show all three curves. Label which curve is steepest and which produces the most gas. Explain your reasoning. [5]\n(b) In Experiment 3, the acid is in large excess. Identify the limiting reactant and explain how this affects the final volume of CO2. [2]\n(c) Explain why all three experiments eventually stop producing gas. [1]\n(d) A fourth experiment uses 5 g large chips, 50 cm³ of 1 mol/dm³ HCl (half the volume of Experiment 1). Predict how the final volume of CO2 compares to Experiment 1, and explain your answer. [3]",
            marks: 11,
            modelAnswer: "(a) Experiment 2 (powder) is steepest — greatest surface area, highest collision frequency, fastest rate. Experiment 3 (higher concentration) is next steepest — more HCl particles per unit volume, more frequent collisions than Experiment 1. Experiment 1 is least steep.\n\nFinal volumes: All three experiments produce the same final volume of CO2. In each experiment, 5 g of CaCO3 (0.05 mol) is used, and the HCl is either exactly stoichiometric (Exps 1 and 2: 0.1 mol HCl, requiring exactly 0.1 mol for 0.05 mol CaCO3) or in excess (Exp 3: 0.2 mol HCl). In all cases CaCO3 is fully consumed and the same moles of CO2 are produced.\n\n(b) In Experiment 3, CaCO3 is the limiting reactant because the acid is in large excess. The reaction stops when all 5 g of CaCO3 is consumed. The final volume of CO2 is determined by the 5 g of CaCO3, not by the acid.\n\n(c) The reaction stops when the limiting reactant is completely used up.\n\n(d) In Experiment 4, the acid (50 cm³ of 1 mol/dm³) contains half the moles of HCl compared to Experiment 1 (100 cm³ of 1 mol/dm³). This means HCl becomes the limiting reactant (insufficient to react with all 5 g of CaCO3). The final volume of CO2 in Experiment 4 will be approximately half that of Experiment 1. (Alternatively: the CaCO3 is now in excess — only half of it can react.)",
            markScheme: [
              "Experiment 2 is steepest / highest initial gradient (1)",
              "Correct reasoning: powder has greatest surface area / more frequent collisions (1)",
              "All three experiments reach the same final volume of CO2 (1)",
              "Correct reasoning: same mass of CaCO3 (0.05 mol) is the limiting reactant in all three / HCl is stoichiometric or in excess in each case (1)",
              "Experiment 3 reaches the plateau faster than Experiment 1 / Experiment 2 reaches plateau fastest (1)",
              "CaCO3 is limiting in Experiment 3 (acid in excess) (1)",
              "All 5 g CaCO3 consumed → final volume determined by CaCO3 (1)",
              "Reaction stops when limiting reactant is used up (1)",
              "Experiment 4 has half the moles of HCl as Experiment 1 (1)",
              "HCl is now limiting / CaCO3 is in excess (1)",
              "Final volume is approximately half that of Experiment 1 (1)"
            ],
            commonError: "Students often assume Experiment 3 produces more CO2 because the HCl concentration is doubled. In fact, CaCO3 is the limiting reactant in all three experiments (or exactly stoichiometric in Exp 1 and 2: 0.05 mol CaCO3 needs exactly 0.10 mol HCl, which is what Exp 1 and 2 provide). All three produce the same final volume of CO2 — only the rate differs.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "challenge",
            hints: [
              "Part (a): for each experiment, identify which variable changes and how that affects rate (gradient). Then separately think about the total amount of CO2 — what limits it?",
              "Part (a): moles of HCl in Exp 1 and 2 = 0.1 dm³ × 1 mol/dm³ = 0.1 mol; moles CaCO3 = 5/100 = 0.05 mol. The equation CaCO3 + 2HCl → ... needs 0.10 mol HCl for 0.05 mol CaCO3 — exactly stoichiometric in Exp 1 and 2. In Exp 3, 0.2 mol HCl reacts with 0.05 mol CaCO3 (acid in excess, CaCO3 limiting). All three produce the same amount of CO2.",
              "Part (d): moles of HCl in Exp 4 = 0.05 dm³ × 1 mol/dm³ = 0.05 mol. Compare to Exp 1.",
              "When the amount of limiting reactant halves, the amount of product halves too."
            ],
            strategy: "Multi-experiment graph questions: for each curve, analyse (1) gradient — rate factor; (2) plateau — limiting reactant and moles. Treat them separately.",
            solutions: [
              {
                label: "Moles calculation to compare experiments",
                steps: [
                  "Exp 1: moles HCl = 0.100 dm³ × 1.00 mol/dm³ = 0.100 mol",
                  "Exp 2: same as Exp 1 → same moles HCl → same final volume",
                  "Exp 3: moles HCl = 0.100 dm³ × 2.00 mol/dm³ = 0.200 mol (acid in excess, CaCO3 limiting → same final CO2 as Exp 1)",
                  "Exp 4: moles HCl = 0.050 dm³ × 1.00 mol/dm³ = 0.050 mol (half of Exp 1 → half the CO2)"
                ]
              }
            ]
          },
          {
            id: "chem-rates-bank-qa2-q04",
            question: "SYNOPTIC CHALLENGE: The Contact process makes sulfuric acid. One key step is:\n\n2SO2(g) + O2(g) ⇌ 2SO3(g)   ΔH = −196 kJ/mol\n\nConditions used industrially: ~450 °C, ~1–2 atm, vanadium(V) oxide (V2O5) catalyst.\n\n(a) Using Le Chatelier's principle, explain why a temperature of 450 °C is used rather than a much lower temperature, even though the yield would be higher at lower temperature. [3]\n(b) Explain why a pressure of only 1–2 atm is used rather than a much higher pressure, even though higher pressure would increase yield. [2]\n(c) Compare the conditions of the Contact process with the Haber process. Suggest why the Haber process uses ~200 atm but the Contact process uses only ~1–2 atm. (Hint: consider the moles of gas and the equilibrium yield even at low pressure.) [4]\n(d) The V2O5 catalyst is poisoned by certain impurities in the gas feed. Suggest how the presence of catalyst poison would affect the overall economics of the process, and what could be done to reduce its impact. [2]",
            marks: 11,
            modelAnswer: "(a) The forward reaction is exothermic (ΔH = −196 kJ/mol). Le Chatelier predicts that lower temperature would shift equilibrium to the right (exothermic direction), giving a higher yield of SO3. However, at very low temperatures, the rate of reaction is extremely slow — molecules rarely have energy ≥ Ea. The process would be uneconomically slow. 450 °C is a compromise: a sufficient reaction rate with an acceptable yield (~98% conversion in practice with recycling).\n\n(b) The left side has 3 moles of gas (2 SO2 + 1 O2) and the right side has 2 moles (2 SO3). Le Chatelier predicts higher pressure would shift equilibrium to the right, increasing yield. However, the yield of SO3 at even 1–2 atm is already very high (∼98%). The cost of building and maintaining high-pressure equipment would not be justified by the marginal gain in yield. 1–2 atm is economically optimal.\n\n(c) Haber process: 4 moles of gas on left (N2 + 3H2), 2 moles on right (2 NH3). Even at 200 atm, the equilibrium yield of NH3 is only ~15–25%. Without high pressure, the yield would be even lower and uneconomical. Contact process: 3 moles on left, 2 moles on right — a smaller ratio difference. Crucially, the equilibrium yield is already ~98% at low pressure. There is little benefit to increasing pressure further. The engineering cost of 200 atm is not worth a marginal improvement when yield is already near-complete.\n\n(d) Catalyst poison reduces the activity of V2O5, slowing the rate of equilibrium attainment. The process would take longer to reach the same conversion, reducing throughput and increasing costs. To reduce its impact: purify the gas feed before it enters the reactor (remove impurities such as arsenic compounds), or replace/regenerate the catalyst periodically.",
            markScheme: [
              "Lower temperature gives higher yield (Le Chatelier — exothermic forward reaction) (1)",
              "Low temperature gives very slow rate / few molecules have E ≥ Ea (1)",
              "450 °C is a compromise between rate and yield (1)",
              "Higher pressure shifts equilibrium right (3 → 2 moles of gas) (1)",
              "Yield already ~98% at low pressure / benefit of higher pressure is marginal (1)",
              "Haber: 4 mol gas → 2 mol gas, low yield even at high P; Contact: 3→2, high yield at low P (1 for valid comparison)",
              "Haber requires high P because yield is very low otherwise; Contact does not (1)",
              "High P in Haber justified; not justified in Contact due to already high yield / cost argument (1)",
              "Catalyst poison slows rate / reduces catalyst activity → slower equilibrium attainment → lower throughput / higher cost (1)",
              "Purify feed gas / replace or regenerate catalyst (1)"
            ],
            commonError: "In part (c), students often make a vague comparison without quantifying the yield difference or the mole ratio difference between the two processes — specific numbers or reasoning earn marks.",
            guideRef: "The Haber Process",
            difficulty: "challenge",
            hints: [
              "Part (a): identical reasoning to the Haber compromise — rate vs. yield tension, with ΔH telling you which temperature direction favours products.",
              "Part (b): moles of gas: left = 2+1 = 3; right = 2. Le Chatelier says higher P shifts right, but what is the yield already at 1–2 atm? Is it worth the cost?",
              "Part (c): compare the yield at the chosen pressures for each process. Why does NH3 need 200 atm but SO3 doesn't?",
              "Part (d): think about what 'slowing the rate' means for a continuous industrial process — what happens to throughput and profitability?"
            ],
            strategy: "Synoptic questions: apply the same principles (Le Chatelier, rate-yield compromise) but show you can adapt them to a new context. Use specific numbers and make direct comparisons."
          }
        ]
      }
    ]
  }
};
