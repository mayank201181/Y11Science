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
        id: "chem-rates-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Collision theory, activation energy, and the factors affecting rate.",
        questions: [
          {
            id: "chem-rates-bm1-01",
            question: "Which two conditions must both be met for a collision between reactant particles to be successful?",
            options: [
              "High temperature and high pressure",
              "Energy greater than or equal to the activation energy and the correct orientation",
              "Correct orientation and the presence of a catalyst",
              "A large surface area and a high concentration"
            ],
            answerIndex: 1,
            explanation: "A successful (effective) collision requires the colliding particles to have energy ≥ Ea AND to approach with the correct orientation. The other options describe conditions that raise the rate but are not the defining requirements of a single successful collision.",
            guideRef: "Collision Theory: Why Reactions Happen",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bm1-02",
            question: "Which change would decrease the rate of reaction between magnesium ribbon and dilute hydrochloric acid?",
            options: [
              "Warming the acid",
              "Using a more concentrated acid",
              "Using the same mass of magnesium as a single coiled ribbon instead of small pieces",
              "Adding a suitable catalyst"
            ],
            answerIndex: 2,
            explanation: "A single coiled ribbon has a smaller surface area than the same mass cut into small pieces, so fewer Mg atoms are exposed to acid particles — collision frequency falls and the rate decreases. Warming, increasing concentration and adding a catalyst all increase the rate.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bm1-03",
            question: "Increasing the concentration of a reactant in solution increases the rate of reaction because:",
            options: [
              "the particles gain more kinetic energy",
              "the activation energy of the reaction is lowered",
              "there are more particles per unit volume, so collisions are more frequent",
              "a greater proportion of collisions exceed the activation energy"
            ],
            answerIndex: 2,
            explanation: "Higher concentration packs more particles into the same volume, raising the collision frequency. It does not change the particles' energy or the activation energy, so the proportion exceeding Ea is unchanged — only how often they collide.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bm1-04",
            question: "A reaction between a gas mixture is carried out at higher pressure but the same temperature. Why does the rate increase?",
            options: [
              "The gas particles are squeezed into a smaller volume, so collisions are more frequent.",
              "The gas particles gain energy, so more collisions exceed Ea.",
              "The activation energy is reduced at higher pressure.",
              "The gas particles change into a liquid, which reacts faster."
            ],
            answerIndex: 0,
            explanation: "Raising the pressure of a gas compresses it into a smaller volume, which is effectively an increase in concentration: more particles per unit volume means more frequent collisions. Pressure does not change particle energy or Ea.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "core",
            hints: [
              "Pressure for a gas behaves like concentration for a solution.",
              "Does compressing a gas change how fast the particles move, or just how close together they are?",
              "More particles in the same space → more collisions per second."
            ]
          },
          {
            id: "chem-rates-bm1-05",
            question: "Which statement best explains why raising the temperature has a larger effect on rate than simply increasing the collision frequency would suggest?",
            options: [
              "Higher temperature lowers the activation energy of the reaction.",
              "Higher temperature greatly increases the proportion of collisions with energy ≥ Ea.",
              "Higher temperature increases the concentration of the reactants.",
              "Higher temperature increases the surface area of solid reactants."
            ],
            answerIndex: 1,
            explanation: "Temperature speeds particles up (slightly raising collision frequency) but, far more importantly, it shifts the energy distribution so a much greater fraction of collisions have energy ≥ Ea. This is the dominant effect. Temperature does not change Ea, concentration or surface area.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "core",
            hints: [
              "Temperature has two effects — frequency and energy.",
              "Which of the two effects is the bigger one?",
              "Think about the fraction of particles able to get over the activation-energy barrier."
            ]
          },
          {
            id: "chem-rates-bm1-06",
            question: "A catalyst speeds up a reaction. Which row correctly describes its effect on the activation energy and on whether it is used up?",
            options: [
              "Lowers Ea; used up in the reaction",
              "Raises Ea; not used up",
              "Lowers Ea; not used up",
              "Has no effect on Ea; not used up"
            ],
            answerIndex: 2,
            explanation: "A catalyst provides an alternative pathway with a lower activation energy, so a greater proportion of collisions are successful. It takes part in the reaction but is regenerated, so it is not used up overall.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "core",
            hints: [
              "What does a catalyst do to the energy barrier?",
              "Is a catalyst consumed, or is its mass unchanged at the end?",
              "Combine the two ideas to pick the row."
            ]
          },
          {
            id: "chem-rates-bm1-07",
            question: "Powdered zinc reacts faster with acid than the same mass of zinc granules. The best explanation is that the powder has a greater:",
            options: [
              "density, so the particles are heavier",
              "surface area to volume ratio, exposing more atoms to collisions",
              "activation energy, so more collisions succeed",
              "temperature, so the particles move faster"
            ],
            answerIndex: 1,
            explanation: "Dividing a solid into a powder greatly increases its surface area to volume ratio, exposing many more atoms at the surface where collisions with acid particles occur. Density is unchanged; surface area does not change Ea or temperature.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "core",
            hints: [
              "Only particles at the surface of a solid can collide with the acid.",
              "Which form exposes more particles — powder or granules?",
              "Name the quantity that compares exposed surface to the amount of solid."
            ]
          },
          {
            id: "chem-rates-bm1-08",
            question: "For many reactions a rise of 10 °C roughly doubles the rate. A reaction has a rate of 0.5 g/min at 20 °C. Using this rule of thumb, what is the approximate rate at 40 °C?",
            options: [
              "1.0 g/min",
              "1.5 g/min",
              "2.0 g/min",
              "4.0 g/min"
            ],
            answerIndex: 2,
            explanation: "A rise from 20 °C to 40 °C is two 10 °C steps, so the rate roughly doubles twice: 0.5 → 1.0 → 2.0 g/min (a factor of 2² = 4). 2.0 g/min is correct. Option D (4.0) would need a third doubling; A and B undercount the steps.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "core",
            hints: [
              "How many 10 °C steps are there between 20 °C and 40 °C?",
              "Each step roughly doubles the rate — apply it once per step.",
              "0.5 → ? → ? : double it for each step."
            ],
            strategy: "Count the number of 10 °C intervals, then multiply the starting rate by 2 for each interval."
          },
          {
            id: "chem-rates-bm1-09",
            question: "Which statement about a catalyst is INCORRECT?",
            options: [
              "It provides an alternative reaction pathway.",
              "It increases the proportion of successful collisions.",
              "It increases the frequency of collisions between reactant particles.",
              "It is chemically unchanged at the end of the reaction."
            ],
            answerIndex: 2,
            explanation: "A catalyst lowers Ea so a greater proportion of existing collisions succeed — it does NOT increase how often particles collide. The other three statements are all correct descriptions of a catalyst.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "challenge",
            hints: [
              "Three statements are true and one is false — find the false one.",
              "Does a catalyst change how OFTEN particles meet, or what fraction of meetings succeed?",
              "Compare a catalyst's mechanism with that of concentration or pressure."
            ]
          },
          {
            id: "chem-rates-bm1-10",
            question: "Hydrogen and iodine vapour are mixed at room temperature and barely react, even though the particles collide billions of times each second. The best explanation is that:",
            options: [
              "the particles are not colliding often enough",
              "almost all collisions have less energy than the activation energy",
              "the reaction has already reached equilibrium",
              "iodine vapour is too dense for the molecules to move"
            ],
            answerIndex: 1,
            explanation: "Collisions are extremely frequent, so frequency is not the problem. At room temperature only a tiny fraction of those collisions have energy ≥ Ea, so almost all simply bounce off. Heating shifts the energy distribution and the reaction speeds up.",
            guideRef: "Collision Theory: Why Reactions Happen",
            difficulty: "challenge",
            hints: [
              "The question stresses that collisions are very frequent — so frequency cannot be the issue.",
              "What else must a collision have, besides happening at all?",
              "Think about the activation-energy barrier and the fraction of particles that can clear it."
            ]
          }
        ]
      },
      {
        id: "chem-rates-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Measuring rate, interpreting rate graphs, and experimental methods.",
        questions: [
          {
            id: "chem-rates-bm2-01",
            question: "Which experimental method is most suitable for following the rate of the reaction CaCO3(s) + 2HCl(aq) → CaCl2(aq) + H2O(l) + CO2(g)?",
            options: [
              "Measuring the volume of gas collected in a gas syringe over time",
              "Measuring the colour change of the solution",
              "Measuring the pH at the very start only",
              "Weighing the marble chips before the reaction only"
            ],
            answerIndex: 0,
            explanation: "The reaction releases CO2 gas, so the volume of gas collected (or the loss in mass) can be measured continuously over time. A single start-only measurement gives no rate; the solution does not show a useful colour change.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bm2-02",
            question: "On a graph of volume of gas against time, what does the gradient (slope) of the curve represent?",
            options: [
              "The total amount of gas produced",
              "The rate of reaction at that moment",
              "The concentration of the acid",
              "The activation energy"
            ],
            answerIndex: 1,
            explanation: "The gradient of a volume-vs-time graph is the change in volume per unit time — that is the rate at that instant. A steeper gradient means a faster rate. The final (plateau) volume, not the gradient, shows the total gas produced.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bm2-03",
            question: "In the sodium thiosulfate and acid 'disappearing cross' experiment, what is actually measured to compare rates?",
            options: [
              "The volume of gas produced",
              "The mass lost during the reaction",
              "The time taken for a cross drawn under the flask to become invisible",
              "The temperature rise of the mixture"
            ],
            answerIndex: 2,
            explanation: "A pale yellow sulfur precipitate gradually clouds the mixture; the time for the cross to disappear is recorded. A shorter time means a faster reaction, and rate is taken as proportional to 1/time. No gas is collected and mass change is negligible.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bm2-04",
            question: "A volume-vs-time curve rises steeply at first, then becomes less steep, and finally becomes horizontal. What does the horizontal section show?",
            options: [
              "The rate is at its maximum.",
              "The reaction has finished because a reactant has been used up.",
              "The gas has started to dissolve back into the solution.",
              "The temperature has fallen to room temperature."
            ],
            answerIndex: 1,
            explanation: "A horizontal line means no more gas is being produced — the rate is zero — because the limiting reactant has been completely consumed and the reaction is complete.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "core",
            hints: [
              "A flat line means the volume is no longer changing.",
              "If the volume is not changing, what is the rate?",
              "Why would the reaction stop producing gas?"
            ]
          },
          {
            id: "chem-rates-bm2-05",
            question: "Two experiments react the same mass of marble chips with hydrochloric acid. Experiment Y uses a higher acid concentration; everything else is identical and the acid is in excess in both. Which describes Experiment Y's curve compared with Experiment X?",
            options: [
              "Steeper at the start and a higher final volume",
              "Steeper at the start but the same final volume",
              "Less steep at the start and the same final volume",
              "Identical to Experiment X"
            ],
            answerIndex: 1,
            explanation: "Higher concentration raises the rate, so Y's curve is steeper initially. Because the same mass of marble (the limiting reactant) is used and acid is in excess in both, the same amount of CO2 forms, so both reach the same final volume.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "core",
            hints: [
              "Concentration changes the rate (gradient).",
              "What fixes the final volume — the marble (limiting) or the excess acid?",
              "Same limiting reactant → same final volume."
            ]
          },
          {
            id: "chem-rates-bm2-06",
            question: "A student follows a reaction that produces CO2 by standing the flask on a balance and recording the mass. Why does the recorded mass decrease during the reaction?",
            options: [
              "The reactants are being destroyed and matter is lost.",
              "CO2 gas escapes from the open flask into the air.",
              "Water evaporates faster than the reaction proceeds.",
              "The balance drifts as the flask warms up."
            ],
            answerIndex: 1,
            explanation: "Mass is conserved overall, but the CO2 gas produced leaves the open flask and is no longer on the balance, so the measured mass falls. The loss in mass over time is used to follow the rate.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "core",
            hints: [
              "Matter is never destroyed — so what is leaving the flask?",
              "One of the products is a gas.",
              "An open flask lets that gas escape into the room."
            ]
          },
          {
            id: "chem-rates-bm2-07",
            question: "In a gas-collection experiment, 48 cm³ of gas is produced in the first 20 s. What is the mean rate of reaction over this interval?",
            options: [
              "0.42 cm³/s",
              "2.4 cm³/s",
              "9.6 cm³/s",
              "960 cm³/s"
            ],
            answerIndex: 1,
            explanation: "Mean rate = change in volume ÷ time = 48 cm³ ÷ 20 s = 2.4 cm³/s. Option A inverts the division; the others mis-scale the numbers.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "core",
            hints: [
              "Mean rate = amount of product ÷ time taken.",
              "Divide the volume by the time, keeping the units.",
              "48 ÷ 20 = ?"
            ],
            strategy: "Rate = quantity ÷ time. Put the amount produced on top and the time on the bottom; carry the units through."
          },
          {
            id: "chem-rates-bm2-08",
            question: "Two 'disappearing cross' experiments give times of 60 s and 15 s. How does the rate of the 15 s experiment compare with the 60 s experiment?",
            options: [
              "It is 4 times slower.",
              "It is 4 times faster.",
              "It is 45 times faster.",
              "It is the same."
            ],
            answerIndex: 1,
            explanation: "Rate ∝ 1/time. Ratio of rates = (1/15) ÷ (1/60) = 60/15 = 4, so the 15 s experiment is 4 times faster. The shorter time always corresponds to the faster rate.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "challenge",
            hints: [
              "For the cross method, rate is proportional to 1/time.",
              "To compare two rates, divide one (1/t) by the other.",
              "(1/15) ÷ (1/60) is the same as 60 ÷ 15."
            ],
            strategy: "Rate ∝ 1/time: to compare two runs, invert both times and divide — equivalently divide the longer time by the shorter."
          },
          {
            id: "chem-rates-bm2-09",
            question: "A reaction produces 0.24 g of hydrogen gas. Between 30 s and 90 s the mass lost rises from 0.10 g to 0.19 g. What is the mean rate over this interval, and is it faster or slower than the very first 30 s?",
            options: [
              "0.0015 g/s; faster than the first 30 s",
              "0.0015 g/s; slower than the first 30 s",
              "0.0030 g/s; slower than the first 30 s",
              "0.0090 g/s; faster than the first 30 s"
            ],
            answerIndex: 1,
            explanation: "Change in mass = 0.19 − 0.10 = 0.09 g over 90 − 30 = 60 s, so rate = 0.09 ÷ 60 = 0.0015 g/s. The first 30 s produced 0.10 g, a rate of 0.10 ÷ 30 ≈ 0.0033 g/s, which is faster — reactions are fastest at the start when concentration is highest.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "challenge",
            hints: [
              "Find the change in mass for the interval, then divide by the time interval.",
              "Mass change = 0.19 − 0.10; time = 90 − 30.",
              "Compare your answer with 0.10 g ÷ 30 s for the first interval."
            ],
            strategy: "For any interval, mean rate = (change in quantity over the interval) ÷ (length of the interval) — not the total divided by total time."
          },
          {
            id: "chem-rates-bm2-10",
            question: "Two volume-vs-time curves are drawn for the same reaction. Curve P is steeper at the start AND levels off at a higher final volume than curve Q. Which single change could account for BOTH differences?",
            options: [
              "Q used a catalyst that P did not.",
              "P used a larger amount (more moles) of the limiting reactant at a higher concentration.",
              "P was carried out at a lower temperature than Q.",
              "Only the surface area was changed between P and Q."
            ],
            answerIndex: 1,
            explanation: "A higher final volume means more product, so more of the limiting reactant was used. A steeper start as well means the rate was also higher (e.g. higher concentration). Using more reactant at a higher concentration changes BOTH the amount and the rate. Surface area, catalyst or temperature alone change only the rate, not the final volume.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "challenge",
            hints: [
              "Two things differ: the steepness (rate) and the plateau (amount).",
              "Which factors change only the rate, and which change the amount of product?",
              "You need one change that affects both — think amount of reactant AND its concentration."
            ],
            strategy: "Separate 'gradient' clues (rate factors) from 'plateau' clues (amount of limiting reactant). If both differ, the amount of reactant must have changed, not just a rate factor."
          }
        ]
      },
      {
        id: "chem-rates-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Reversible reactions, dynamic equilibrium, and Le Chatelier's principle.",
        questions: [
          {
            id: "chem-rates-bm3-01",
            question: "What does the symbol ⇌ in a chemical equation tell you?",
            options: [
              "The reaction is very fast.",
              "The reaction is reversible and can go in both directions.",
              "The reaction releases a gas.",
              "The reaction needs a catalyst."
            ],
            answerIndex: 1,
            explanation: "The half-arrows ⇌ show a reversible reaction: under suitable conditions it can proceed both forwards and backwards. It says nothing about speed, gas release or catalysts.",
            guideRef: "Reversible Reactions & Dynamic Equilibrium",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bm3-02",
            question: "Hydrated copper(II) sulfate is heated and turns from blue to white; adding water to the white solid turns it blue again. This shows that the reaction CuSO4·5H2O(s) ⇌ CuSO4(s) + 5H2O(l) is:",
            options: [
              "irreversible",
              "reversible",
              "always exothermic in both directions",
              "only possible with a catalyst"
            ],
            answerIndex: 1,
            explanation: "Heating drives the forward (dehydration) reaction and adding water drives it back, so the colour change can be reversed — the reaction is reversible. The blue↔white colour change is a classic test for water.",
            guideRef: "Reversible Reactions & Dynamic Equilibrium",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bm3-03",
            question: "Which condition must be true for dynamic equilibrium to be established?",
            options: [
              "The system must be open to the air.",
              "The forward and reverse reactions must have stopped.",
              "The system must be closed and the forward and reverse rates equal.",
              "The concentrations of reactants and products must be equal."
            ],
            answerIndex: 2,
            explanation: "Dynamic equilibrium needs a closed system (nothing enters or leaves) with the forward rate equal to the reverse rate. Both reactions continue (not stopped) and concentrations stay constant but are usually not equal.",
            guideRef: "Reversible Reactions & Dynamic Equilibrium",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bm3-04",
            question: "At dynamic equilibrium the concentrations of all species stay constant. The best explanation is that:",
            options: [
              "the reaction has stopped completely",
              "the forward and reverse reactions occur at the same rate",
              "there are no longer any reactant particles left",
              "the temperature has become constant"
            ],
            answerIndex: 1,
            explanation: "Concentrations are constant because reactants are being remade by the reverse reaction exactly as fast as they are used by the forward reaction. Both reactions are still happening — the balance is dynamic, not stopped.",
            guideRef: "Reversible Reactions & Dynamic Equilibrium",
            difficulty: "core",
            hints: [
              "'Dynamic' means still moving — the reactions have not stopped.",
              "If concentrations are not changing, the two opposing rates must be related how?",
              "Forward rate compared with reverse rate at equilibrium?"
            ]
          },
          {
            id: "chem-rates-bm3-05",
            question: "For the equilibrium 2NO2(g) ⇌ N2O4(g), increasing the pressure on the system at constant temperature will:",
            options: [
              "shift the equilibrium to the left",
              "shift the equilibrium to the right",
              "have no effect on the position of equilibrium",
              "stop the reaction entirely"
            ],
            answerIndex: 1,
            explanation: "There are 2 moles of gas on the left and 1 on the right. Le Chatelier predicts that increasing pressure shifts the equilibrium toward the side with fewer gas moles (the right), forming more N2O4.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "core",
            hints: [
              "Count the moles of gas on each side.",
              "Higher pressure favours the side with fewer gas moles.",
              "Which side has fewer moles — left (2) or right (1)?"
            ]
          },
          {
            id: "chem-rates-bm3-06",
            question: "For the equilibrium CO(g) + 2H2(g) ⇌ CH3OH(g), ΔH is negative (exothermic forward reaction). Increasing the temperature will:",
            options: [
              "shift equilibrium to the right and increase the yield of methanol",
              "shift equilibrium to the left and decrease the yield of methanol",
              "have no effect on the position of equilibrium",
              "shift equilibrium to the right because heat always speeds products"
            ],
            answerIndex: 1,
            explanation: "The forward reaction is exothermic, so the reverse reaction is endothermic. Raising the temperature shifts the equilibrium in the endothermic (reverse) direction to absorb the added heat, decreasing the yield of methanol.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "core",
            hints: [
              "If the forward reaction is exothermic, which direction is endothermic?",
              "Raising temperature favours the endothermic direction.",
              "Does shifting toward the reactants raise or lower the methanol yield?"
            ]
          },
          {
            id: "chem-rates-bm3-07",
            question: "A catalyst is added to a reversible reaction at equilibrium. What is the effect?",
            options: [
              "The position of equilibrium shifts to the right.",
              "The yield of product increases.",
              "Equilibrium is reached more quickly, but its position is unchanged.",
              "The forward reaction speeds up but the reverse reaction slows down."
            ],
            answerIndex: 2,
            explanation: "A catalyst speeds up the forward and reverse reactions equally, so equilibrium is reached faster but the position (and therefore the yield) does not change.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "core",
            hints: [
              "A catalyst affects both directions — by how much each?",
              "If both rates rise equally, does the balance point move?",
              "Catalysts change how FAST equilibrium is reached, not WHERE it sits."
            ]
          },
          {
            id: "chem-rates-bm3-08",
            question: "For the equilibrium H2(g) + I2(g) ⇌ 2HI(g), increasing the total pressure has no effect on the position of equilibrium. Why?",
            options: [
              "Because the reaction is exothermic.",
              "Because there are equal numbers of gas moles on both sides (2 and 2).",
              "Because a catalyst is present.",
              "Because iodine is a solid."
            ],
            answerIndex: 1,
            explanation: "Both sides have 2 moles of gas (1 + 1 on the left, 2 on the right). When the moles of gas are equal, a pressure change does not favour either side, so the position of equilibrium does not move.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "challenge",
            hints: [
              "Count gas moles on each side: left = 1 + 1, right = 2.",
              "Pressure only shifts equilibrium when the mole totals differ.",
              "What happens when both sides are equal?"
            ]
          },
          {
            id: "chem-rates-bm3-09",
            question: "The equilibrium Fe³⁺(aq) + SCN⁻(aq) ⇌ FeSCN²⁺(aq) gives a deep red colour from FeSCN²⁺. Adding extra SCN⁻ ions makes the colour deeper. This is because the equilibrium shifts:",
            options: [
              "to the left, using up FeSCN²⁺",
              "to the right, to oppose the added SCN⁻ and form more FeSCN²⁺",
              "to the right, because adding any reactant always lowers the yield",
              "in neither direction; colour change is just dilution"
            ],
            answerIndex: 1,
            explanation: "Adding SCN⁻ increases its concentration. Le Chatelier predicts the system shifts away from the added substance — to the right — using up SCN⁻ and producing more red FeSCN²⁺, so the colour deepens.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "challenge",
            hints: [
              "Adding a substance shifts the equilibrium away from that substance.",
              "Which side is SCN⁻ on, and which way is 'away' from it?",
              "More FeSCN²⁺ means a deeper red — does that match a shift right or left?"
            ],
            strategy: "Concentration changes: add a species → shift away from it; remove a species → shift toward it."
          },
          {
            id: "chem-rates-bm3-10",
            question: "An equilibrium has the forward reaction endothermic and 3 moles of gas on the left, 2 moles on the right. Which set of changes would BOTH increase the yield of products?",
            options: [
              "Lower temperature and lower pressure",
              "Higher temperature and higher pressure",
              "Higher temperature and lower pressure",
              "Lower temperature and higher pressure"
            ],
            answerIndex: 1,
            explanation: "Forward reaction endothermic → higher temperature shifts it right (more product). Fewer gas moles on the right (2 vs 3) → higher pressure shifts it right too. So higher temperature AND higher pressure both raise the yield.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "challenge",
            hints: [
              "Endothermic forward reaction: which temperature direction favours products?",
              "Fewer gas moles on the right: which pressure favours products?",
              "Combine the two conclusions to pick the pair."
            ],
            strategy: "Handle temperature and pressure separately: use ΔH for temperature and the gas-mole counts for pressure, then combine."
          }
        ]
      },
      {
        id: "chem-rates-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "The Haber process, industrial equilibria, and mixed rate concepts.",
        questions: [
          {
            id: "chem-rates-bm4-01",
            question: "Which is the correct balanced equation for the Haber process?",
            options: [
              "N2(g) + H2(g) ⇌ NH3(g)",
              "N2(g) + 3H2(g) ⇌ 2NH3(g)",
              "2N2(g) + 3H2(g) ⇌ 2NH3(g)",
              "N2(g) + 2H2(g) ⇌ NH2(g)"
            ],
            answerIndex: 1,
            explanation: "Balanced: one N2 reacts with three H2 to form two NH3, giving 2 N and 6 H on each side. The other options are not balanced.",
            guideRef: "The Haber Process",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bm4-02",
            question: "Which catalyst is used in the Haber process?",
            options: [
              "Vanadium(V) oxide",
              "Platinum",
              "Iron",
              "Nickel"
            ],
            answerIndex: 2,
            explanation: "The Haber process uses an iron catalyst. Vanadium(V) oxide is used in the Contact process; platinum and nickel are catalysts for other reactions.",
            guideRef: "The Haber Process",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bm4-03",
            question: "What are the raw materials that provide the nitrogen and hydrogen for the Haber process?",
            options: [
              "Nitrogen from the air; hydrogen from natural gas (methane)",
              "Nitrogen from nitric acid; hydrogen from water only",
              "Nitrogen from ammonia; hydrogen from coal",
              "Nitrogen from liquid air; hydrogen from sulfuric acid"
            ],
            answerIndex: 0,
            explanation: "Nitrogen is obtained from the air (by fractional distillation of liquid air) and hydrogen mainly from natural gas (methane) via steam reforming.",
            guideRef: "The Haber Process",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bm4-04",
            question: "The Haber reaction N2(g) + 3H2(g) ⇌ 2NH3(g) is exothermic. Why is a high pressure of about 200 atm used?",
            options: [
              "There are more gas moles on the right, so high pressure raises the yield.",
              "There are fewer gas moles on the right (2 vs 4), so high pressure shifts equilibrium right and raises the yield.",
              "High pressure lowers the activation energy.",
              "High pressure makes the reaction endothermic."
            ],
            answerIndex: 1,
            explanation: "The left has 4 moles of gas (1 + 3) and the right only 2. High pressure shifts the equilibrium toward fewer gas moles (the right), increasing the yield of ammonia.",
            guideRef: "The Haber Process",
            difficulty: "core",
            hints: [
              "Count gas moles: left = 1 + 3, right = 2.",
              "High pressure favours the side with fewer gas moles.",
              "Which side is that, and what is on it?"
            ]
          },
          {
            id: "chem-rates-bm4-05",
            question: "A temperature of about 450 °C is used in the Haber process. Since the forward reaction is exothermic, a lower temperature would give a higher yield. Why is 450 °C chosen instead?",
            options: [
              "A lower temperature would give a lower yield.",
              "At a lower temperature the rate would be too slow to be economical.",
              "A higher temperature is needed to balance the equation.",
              "450 °C maximises the equilibrium yield of ammonia."
            ],
            answerIndex: 1,
            explanation: "Lower temperature does give a higher yield (Le Chatelier, exothermic forward reaction), but the rate would be far too slow. 450 °C is a compromise giving an acceptable yield at an economically useful rate.",
            guideRef: "The Haber Process",
            difficulty: "core",
            hints: [
              "Is the student right that a lower temperature raises the yield?",
              "If yield improves at low temperature, what gets worse?",
              "Industry must balance yield against rate (and cost)."
            ]
          },
          {
            id: "chem-rates-bm4-06",
            question: "In the Haber process the ammonia is removed by cooling it to a liquid, and the unreacted N2 and H2 are recycled. The main reason for recycling is to:",
            options: [
              "shift the equilibrium further to the right",
              "avoid wasting unreacted gases and improve overall conversion",
              "increase the temperature of the reactor",
              "act as a catalyst for the reaction"
            ],
            answerIndex: 1,
            explanation: "Only about 15–25% of the gases react per pass. Recycling the unreacted N2 and H2 means they are not wasted and the overall conversion to ammonia is high. Recycling does not change the equilibrium conditions themselves.",
            guideRef: "The Haber Process",
            difficulty: "core",
            hints: [
              "What fraction of the gases reacts on a single pass?",
              "What happens to the gases that did not react?",
              "Is this about the equilibrium position, or about not wasting material?"
            ]
          },
          {
            id: "chem-rates-bm4-07",
            question: "The Contact process step 2SO2(g) + O2(g) ⇌ 2SO3(g) is exothermic and uses only about 1–2 atm pressure, even though the right side has fewer gas moles. Why is high pressure NOT used?",
            options: [
              "Pressure has no effect because the moles are equal.",
              "The yield is already very high (~98%) at low pressure, so high pressure is not worth the cost.",
              "High pressure would shift equilibrium to the left.",
              "SO3 is a solid, so pressure is irrelevant."
            ],
            answerIndex: 1,
            explanation: "Higher pressure would shift the equilibrium right (3 moles → 2 moles) and raise yield slightly, but the yield is already about 98% at 1–2 atm. The extra cost and danger of high-pressure plant is not justified by the marginal gain.",
            guideRef: "The Haber Process",
            difficulty: "core",
            hints: [
              "Le Chatelier still predicts higher pressure shifts right (3 → 2 moles).",
              "But what is the yield already at low pressure?",
              "Is a tiny improvement worth expensive high-pressure equipment?"
            ]
          },
          {
            id: "chem-rates-bm4-08",
            question: "Increasing the pressure in the Haber process speeds up the rate of reaction AND increases the equilibrium yield. Which statement explains BOTH effects?",
            options: [
              "Higher pressure lowers the activation energy and is endothermic.",
              "Higher pressure increases collision frequency (faster rate) and shifts equilibrium toward fewer gas moles (higher yield).",
              "Higher pressure increases the temperature, which raises both.",
              "Higher pressure removes the catalyst, speeding the reaction."
            ],
            answerIndex: 1,
            explanation: "Compressing the gases increases the number of particles per unit volume, so collisions are more frequent (faster rate). At the same time, Le Chatelier shifts the equilibrium toward the side with fewer gas moles (the products), raising the yield. One change produces both effects.",
            guideRef: "The Haber Process",
            difficulty: "challenge",
            hints: [
              "Pressure affects rate via collision frequency.",
              "Pressure affects equilibrium position via the gas-mole count.",
              "Combine the rate reason and the yield reason into one statement."
            ],
            strategy: "When a single change affects both rate and yield, give the collision-theory reason for the rate and the Le Chatelier reason for the yield."
          },
          {
            id: "chem-rates-bm4-09",
            question: "Enzymes are described as biological catalysts. Which statement about enzymes is correct?",
            options: [
              "They are used up as the reaction proceeds.",
              "They raise the activation energy of biochemical reactions.",
              "They lower the activation energy and are not used up, working best around body temperature.",
              "They work fastest at very high temperatures because rate always rises with temperature."
            ],
            answerIndex: 2,
            explanation: "Enzymes are biological catalysts: they provide an alternative pathway with a lower activation energy and are not consumed. Unlike most catalysts they have an optimum temperature (around body temperature) and are denatured if it gets too high.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "challenge",
            hints: [
              "Enzymes are catalysts — what do catalysts do to Ea and are they used up?",
              "Do enzymes keep speeding up as temperature rises without limit?",
              "Think about what happens to a protein at high temperature."
            ]
          },
          {
            id: "chem-rates-bm4-10",
            question: "In one pass of a Haber reactor, 1000 mol of N2 and 3000 mol of H2 enter, and the gas leaving contains 400 mol of NH3. What is the approximate percentage of nitrogen that has been converted to ammonia?",
            options: [
              "10%",
              "20%",
              "40%",
              "80%"
            ],
            answerIndex: 1,
            explanation: "From N2 + 3H2 ⇌ 2NH3, 2 mol NH3 form per 1 mol N2 reacted. So 400 mol NH3 came from 400 ÷ 2 = 200 mol N2. Of the 1000 mol N2 fed in, 200 mol reacted: 200/1000 × 100 = 20%. This low single-pass conversion is why unreacted gas is recycled.",
            guideRef: "The Haber Process",
            difficulty: "challenge",
            hints: [
              "Use the equation: how many moles of N2 give 1 mole of NH3?",
              "400 mol NH3 needs 400 ÷ 2 = 200 mol N2 reacted.",
              "Percentage = (N2 reacted ÷ N2 fed in) × 100."
            ],
            strategy: "Use the balanced equation to convert moles of product back to moles of the chosen reactant that reacted, then express as a percentage of the amount fed in."
          }
        ]
      }
    ],
    qaPapers: [
      {
        id: "chem-rates-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Collision theory, factors affecting rate, and their explanations.",
        questions: [
          {
            id: "chem-rates-bq1-01",
            question: "Magnesium ribbon reacts with dilute hydrochloric acid to produce hydrogen gas: Mg(s) + 2HCl(aq) → MgCl2(aq) + H2(g).\n\n(a) State two ways, other than changing the temperature, in which the rate of this reaction could be increased. [2]\n(b) For ONE of your methods, explain in terms of particles why the rate increases. [2]",
            marks: 4,
            modelAnswer: "(a) Any two of: increase the concentration of the acid; cut the magnesium into smaller pieces / use magnesium powder (increase surface area); add a suitable catalyst.\n\n(b) (Example for concentration:) Increasing the concentration of the acid means there are more acid particles in the same volume. This increases the frequency of collisions between the acid particles and the magnesium, so there are more successful collisions per second and the rate increases.",
            markScheme: [
              "One correct method: increase concentration / increase surface area (smaller pieces or powder) / add a catalyst (1)",
              "A second, different correct method (1)",
              "More particles per unit volume / more exposed surface → more frequent collisions (1)",
              "More successful collisions per second → faster rate (1)"
            ],
            commonError: "Listing 'stir the mixture' or 'add more acid' (more volume at the same concentration) — neither reliably increases the rate per the collision-theory marks expected here.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bq1-02",
            question: "(a) State what is meant by the activation energy of a reaction. [1]\n(b) Explain why most collisions between reactant particles do not lead to a reaction. [2]",
            marks: 3,
            modelAnswer: "(a) The activation energy is the minimum energy that colliding particles must have for a reaction to occur.\n\n(b) Most collisions are unsuccessful because the colliding particles have less energy than the activation energy, and/or the particles collide with the wrong orientation. Only collisions with energy ≥ Ea and the correct orientation lead to a reaction.",
            markScheme: [
              "Minimum energy (for colliding particles) needed for a reaction to occur (1)",
              "Many collisions have energy less than the activation energy (1)",
              "And/or the orientation is wrong (1) (max 2 for part b)"
            ],
            commonError: "Defining activation energy as 'the energy given out by the reaction' — that is the energy change (ΔH), not the activation energy.",
            guideRef: "Collision Theory: Why Reactions Happen",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bq1-03",
            question: "Hydrogen peroxide decomposes slowly: 2H2O2(aq) → 2H2O(l) + O2(g). Adding manganese(IV) oxide (MnO2) powder makes the reaction much faster.\n\n(a) What is the role of MnO2 in this reaction? [1]\n(b) Explain, in terms of activation energy, how MnO2 increases the rate. [2]\n(c) At the end the MnO2 is filtered, dried and weighed. Its mass is unchanged. Explain what this tells you. [2]",
            marks: 5,
            modelAnswer: "(a) MnO2 acts as a catalyst.\n\n(b) MnO2 provides an alternative reaction pathway with a lower activation energy. This means a greater proportion of the colliding particles now have energy ≥ the (lower) activation energy, so more collisions are successful per second and the rate increases.\n\n(c) The unchanged mass shows the MnO2 is not used up in the reaction — it is chemically unchanged at the end. This is a defining property of a catalyst: it is regenerated and can be reused.",
            markScheme: [
              "MnO2 is a catalyst (1)",
              "Provides an alternative pathway with lower activation energy (1)",
              "Greater proportion of collisions have energy ≥ (lower) Ea / more successful collisions (1)",
              "MnO2 is not used up / chemically unchanged / regenerated (1)",
              "This is a property of a catalyst / it can be reused (1)"
            ],
            commonError: "Saying the catalyst 'gives energy to the particles' — a catalyst lowers the energy barrier; it does not transfer energy to the reactants.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "core",
            hints: [
              "Part (a): one word describing a substance that speeds a reaction without being used up.",
              "Part (b): does the catalyst raise or lower the activation energy? What does that do to the fraction of successful collisions?",
              "Part (c): the mass is unchanged — what does that tell you about whether it was consumed?"
            ],
            strategy: "For catalyst answers, always chain: alternative pathway → lower Ea → greater proportion of successful collisions → faster rate."
          },
          {
            id: "chem-rates-bq1-04",
            question: "A student investigates how temperature affects the rate of the reaction between sodium thiosulfate solution and dilute hydrochloric acid using the 'disappearing cross' method.\n\n(a) Describe how the student should carry out the experiment to obtain valid results, including the measurement taken and two variables that must be controlled. [4]\n(b) Explain, using collision theory, why the reaction is faster at a higher temperature. [3]",
            marks: 7,
            modelAnswer: "(a) Draw a cross on paper and place the flask of sodium thiosulfate solution on top of it. Add the dilute hydrochloric acid, start a stopwatch and look down through the mixture at the cross. Record the time taken for the cross to become invisible (a faster reaction gives a shorter time, and rate ∝ 1/time). Repeat at several temperatures. Control variables such as: the volume and concentration of sodium thiosulfate; the volume and concentration of acid; the same observer judging when the cross disappears; the same depth of liquid.\n\n(b) At higher temperature the particles have more kinetic energy and move faster. This increases the collision frequency slightly, but more importantly a greater proportion of collisions now have energy ≥ the activation energy. Therefore there are more successful collisions per second and the rate increases.",
            markScheme: [
              "Place flask over a drawn cross / look down at the cross (1)",
              "Measure the time taken for the cross to disappear (1)",
              "Two controlled variables, e.g. concentration/volume of thiosulfate and of acid / same observer / same depth (1)",
              "Repeat at different temperatures (1)",
              "Higher temperature → particles have more kinetic energy / move faster (1)",
              "Greater proportion of collisions have energy ≥ Ea (1)",
              "More successful collisions per second → faster rate (1)"
            ],
            commonError: "Only mentioning that 'particles collide more often' for temperature — the key marking point is the greater proportion of collisions exceeding the activation energy.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "core",
            hints: [
              "Part (a): what single quantity is timed, and what must stay the same between runs to make it a fair test?",
              "Part (b): temperature has two effects — name both, and say which matters more.",
              "Link 'more energy' to the proportion of particles able to clear the activation-energy barrier."
            ],
            strategy: "For method questions, state: what you measure, how you change the independent variable, and what you keep constant (control variables) for a fair test."
          },
          {
            id: "chem-rates-bq1-05",
            question: "The table shows the volume of hydrogen collected when excess magnesium reacts with 50 cm³ of dilute hydrochloric acid.\n\nTime (s): 0, 10, 20, 30, 40, 50, 60\nVolume of H2 (cm³): 0, 26, 42, 50, 54, 56, 56\n\n(a) Calculate the mean rate of reaction over the first 20 s. Give units. [2]\n(b) State and explain in which 10 s interval the reaction is fastest. [2]\n(c) Explain, in terms of particles, why the rate decreases as the reaction proceeds. [2]\n(d) Explain why the volume stops increasing after 50 s. [1]",
            marks: 7,
            modelAnswer: "(a) Mean rate = change in volume ÷ time = 42 cm³ ÷ 20 s = 2.1 cm³/s.\n\n(b) The reaction is fastest in the first interval, 0–10 s. The volume produced in this interval (26 cm³) is greater than in any later 10 s interval, so the gradient is steepest here.\n\n(c) As the reaction proceeds the hydrochloric acid is used up, so the concentration of acid falls. There are fewer acid particles per unit volume, so collisions with the magnesium are less frequent and there are fewer successful collisions per second — the rate decreases.\n\n(d) After 50 s one reactant (the acid) has been completely used up, so no more hydrogen can be produced and the volume stays constant.",
            markScheme: [
              "Volume in first 20 s = 42 cm³ used (1)",
              "Mean rate = 42 ÷ 20 = 2.1 cm³/s (with units) (1)",
              "Fastest in 0–10 s interval (1)",
              "Largest volume change (26 cm³) / steepest gradient in that interval (1)",
              "Acid is used up → concentration falls → fewer/less frequent collisions (1)",
              "(d) A reactant (acid) is completely used up so no more H2 forms (1)"
            ],
            commonError: "In (c), writing only 'there is less acid' without linking the falling concentration to a lower collision frequency.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "core",
            hints: [
              "Part (a): read the volume at 20 s, then divide by the time.",
              "Part (b): compare the volume produced in each 10 s block — biggest change = fastest.",
              "Part (c): what happens to the acid concentration over time, and what does that do to collisions?"
            ],
            strategy: "Mean rate = change in quantity ÷ time interval; always quote units (here cm³/s).",
            solutions: [
              {
                label: "Mean rate over the first 20 s",
                steps: [
                  "Read the volume at t = 20 s: 42 cm³ (volume at t = 0 is 0).",
                  "Change in volume = 42 − 0 = 42 cm³.",
                  "Time interval = 20 − 0 = 20 s.",
                  "Mean rate = 42 cm³ ÷ 20 s = 2.1 cm³/s."
                ]
              }
            ]
          },
          {
            id: "chem-rates-bq1-06",
            question: "Two beakers each contain 50 cm³ of sodium thiosulfate solution and use the disappearing-cross method with dilute acid. Beaker A is at 25 °C and the cross disappears in 72 s. Beaker B is at 45 °C and the cross disappears in 18 s.\n\n(a) Calculate the rate (as 1/time) for each beaker, in s⁻¹, to 3 significant figures. [2]\n(b) How many times faster is beaker B than beaker A? Show your working. [2]\n(c) The 'rate doubles for every 10 °C' rule is sometimes used. Does the data support it for this 20 °C rise? Justify with a calculation. [3]",
            marks: 7,
            modelAnswer: "(a) Beaker A: rate = 1/72 = 0.0139 s⁻¹ (3 s.f.). Beaker B: rate = 1/18 = 0.0556 s⁻¹ (3 s.f.).\n\n(b) Number of times faster = rate B ÷ rate A = (1/18) ÷ (1/72) = 72/18 = 4. Beaker B is 4 times faster than beaker A.\n\n(c) A 20 °C rise is two 10 °C steps, so the rule predicts the rate should increase by a factor of 2 × 2 = 4. The measured factor is also 4, so the data does support the rule for this reaction over this temperature range.",
            markScheme: [
              "Rate A = 1/72 = 0.0139 s⁻¹ (1)",
              "Rate B = 1/18 = 0.0556 s⁻¹ (1)",
              "Ratio = (1/18) ÷ (1/72) = 72/18 = 4 / B is 4 times faster (1)",
              "20 °C = two 10 °C steps → predicted factor 2 × 2 = 4 (1)",
              "Measured factor (4) matches predicted (4) → data supports the rule (1)"
            ],
            commonError: "Dividing the times the wrong way round (18/72 = 0.25) and concluding B is slower — remember rate ∝ 1/time, so the shorter time is faster.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "challenge",
            hints: [
              "Part (a): rate = 1 ÷ time; round each to 3 significant figures.",
              "Part (b): divide the larger rate by the smaller, or equivalently divide the longer time by the shorter.",
              "Part (c): how many 10 °C steps in a 20 °C rise, and what factor does the rule predict for that many steps?"
            ],
            strategy: "Rate ∝ 1/time. To compare runs, divide the longer time by the shorter to get the speed-up factor.",
            solutions: [
              {
                label: "Rates and comparison",
                steps: [
                  "Rate A = 1 ÷ 72 s = 0.01389 ≈ 0.0139 s⁻¹.",
                  "Rate B = 1 ÷ 18 s = 0.05556 ≈ 0.0556 s⁻¹.",
                  "Times faster = rate B ÷ rate A = 0.05556 ÷ 0.01389 = 4.00.",
                  "(Check: equivalently 72 ÷ 18 = 4.)"
                ]
              },
              {
                label: "Testing the 10 °C rule",
                steps: [
                  "Temperature rise = 45 − 25 = 20 °C = two 10 °C steps.",
                  "Predicted factor = 2 (first step) × 2 (second step) = 4.",
                  "Measured factor = 4, which equals the prediction → the data supports the rule here."
                ]
              }
            ]
          },
          {
            id: "chem-rates-bq1-07",
            question: "This question is about energy and catalysts.\n\n(a) Define what is meant by a catalyst. [1]\n(b) Sketch (describe) an energy-level (reaction-profile) diagram for an exothermic reaction, showing the activation energy with and without a catalyst. Label the reactants, products, and both activation energies. [3]\n(c) Explain why a catalyst does NOT change the overall energy change (ΔH) of the reaction. [2]",
            marks: 6,
            modelAnswer: "(a) A catalyst is a substance that increases the rate of a reaction by providing an alternative pathway with a lower activation energy, and is not used up in the reaction.\n\n(b) The diagram has 'progress of reaction' on the x-axis and 'energy' on the y-axis. The reactants are at a higher energy level than the products (exothermic). From the reactants the curve rises to a peak (the activation energy without a catalyst) and then falls to the products. A second curve with a lower peak represents the catalysed pathway (lower activation energy). Both curves start at the same reactant level and end at the same product level; the vertical drop from reactants to products is ΔH.\n\n(c) The catalyst only lowers the activation-energy barrier (the height of the peak). It does not change the energies of the reactants or the products themselves. Because ΔH is the difference between the product and reactant energies, and these are unchanged, ΔH is the same with or without the catalyst.",
            markScheme: [
              "Catalyst increases rate / provides alternative pathway with lower Ea / not used up (1)",
              "Axes and reactants above products (exothermic) (1)",
              "Activation energy shown as the peak above the reactants; lower peak for catalysed route (1)",
              "Both routes start and end at the same energy levels (1) (max 3 for part b)",
              "Catalyst lowers only the peak, not the reactant/product energies (1)",
              "ΔH is the reactant–product energy difference, which is unchanged (1)"
            ],
            commonError: "Drawing the catalyst lowering the product (or reactant) energy level — a catalyst lowers only the activation-energy peak (the transition state), so ΔH is unchanged.",
            guideRef: "Collision Theory: Why Reactions Happen",
            difficulty: "challenge",
            hints: [
              "Part (a): include both 'lowers activation energy' and 'not used up'.",
              "Part (b): the catalyst changes the height of the peak, not the start or end levels.",
              "Part (c): ΔH depends only on the difference between reactant and product energies."
            ],
            strategy: "On reaction profiles, the activation energy is the peak height above the reactants; ΔH is the reactant-to-product step. A catalyst changes the first but not the second."
          },
          {
            id: "chem-rates-bq1-08",
            question: "A factory wants to speed up a reaction between two gases. A chemist suggests three changes: (i) increasing the pressure, (ii) increasing the temperature, (iii) adding a catalyst.\n\nFor EACH change, state whether it increases the rate by increasing the collision frequency, by increasing the proportion of successful collisions, or both, and briefly justify your choice. [6]",
            marks: 6,
            modelAnswer: "(i) Increasing the pressure increases the rate by increasing the collision frequency. Compressing the gases puts more particles into the same volume, so they collide more often. (The proportion of successful collisions is unchanged.)\n\n(ii) Increasing the temperature increases the rate by both effects, but mainly by increasing the proportion of successful collisions. Faster particles collide a little more often (higher frequency), and a much greater proportion of collisions now have energy ≥ the activation energy.\n\n(iii) Adding a catalyst increases the rate by increasing the proportion of successful collisions. It lowers the activation energy, so a greater fraction of the existing collisions are successful. (It does not change the collision frequency.)",
            markScheme: [
              "(i) Pressure → collision frequency (1); more particles in the same volume collide more often (1)",
              "(ii) Temperature → mainly proportion of successful collisions / both (1); greater proportion of collisions have energy ≥ Ea (1)",
              "(iii) Catalyst → proportion of successful collisions (1); lowers activation energy so more collisions succeed (1)"
            ],
            commonError: "Saying a catalyst increases the collision frequency — it does not; it raises the proportion of successful collisions by lowering the activation energy.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "core",
            hints: [
              "Pressure and concentration act on how OFTEN particles meet.",
              "Temperature acts mainly on the ENERGY of collisions (and a little on frequency).",
              "A catalyst acts on the PROPORTION that succeed, by lowering Ea."
            ],
            strategy: "Classify every rate factor as 'frequency', 'energy/proportion', or 'both' — this is the cleanest way to explain rate changes via collision theory."
          },
          {
            id: "chem-rates-bq1-09",
            question: "Excess calcium carbonate is added to 40 cm³ of 1.0 mol/dm³ hydrochloric acid and the loss in mass is followed. The reaction is CaCO3(s) + 2HCl(aq) → CaCl2(aq) + H2O(l) + CO2(g).\n\n(a) Calculate the number of moles of HCl used. [2]\n(b) Calculate the maximum mass of CO2 that can be produced. (Ar: C = 12, O = 16) [3]\n(c) The experiment is repeated with the same acid but the calcium carbonate is ground to a powder. State and explain the effect on (i) the rate and (ii) the maximum mass of CO2. [3]",
            marks: 8,
            modelAnswer: "(a) Moles of HCl = concentration × volume in dm³ = 1.0 mol/dm³ × (40 ÷ 1000) dm³ = 1.0 × 0.040 = 0.040 mol.\n\n(b) From the equation, 2 mol HCl produce 1 mol CO2, so moles of CO2 = 0.040 ÷ 2 = 0.020 mol. Mr(CO2) = 12 + (2 × 16) = 44. Mass of CO2 = moles × Mr = 0.020 × 44 = 0.88 g.\n\n(c)(i) The rate increases. Powder has a greater surface area, so more CaCO3 particles are exposed and collisions with the acid are more frequent, giving more successful collisions per second.\n\n(ii) The maximum mass of CO2 is unchanged (still 0.88 g). The acid is the limiting reactant and the same amount (0.040 mol HCl) is used, so the same amount of CO2 is produced — only the rate is different.",
            markScheme: [
              "Moles HCl = 1.0 × 40/1000 (1)",
              "= 0.040 mol (1)",
              "Moles CO2 = 0.040 ÷ 2 = 0.020 mol (1)",
              "Mr(CO2) = 44 (1)",
              "Mass CO2 = 0.020 × 44 = 0.88 g (1)",
              "(c)(i) Rate increases — greater surface area → more frequent collisions (1)",
              "(c)(ii) Maximum mass unchanged — same moles of limiting reactant (acid) (1)"
            ],
            commonError: "Using a 1:1 ratio of HCl to CO2 (giving 0.040 mol CO2 and 1.76 g). The equation needs 2 mol HCl per 1 mol CO2, so the moles of CO2 are halved.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "challenge",
            hints: [
              "Part (a): moles = concentration × volume in dm³ (divide cm³ by 1000).",
              "Part (b): use the 2 : 1 ratio of HCl to CO2 from the equation, then multiply moles by Mr(CO2) = 44.",
              "Part (c): surface area changes the rate; the amount of limiting reactant (and so the max CO2) is unchanged."
            ],
            strategy: "Moles = c × V (in dm³); use the balanced ratio to convert to product moles; mass = moles × Mr. Surface area never changes the amount of product.",
            solutions: [
              {
                label: "Moles of acid and mass of CO2",
                steps: [
                  "Volume of acid in dm³ = 40 ÷ 1000 = 0.040 dm³.",
                  "Moles of HCl = c × V = 1.0 × 0.040 = 0.040 mol.",
                  "Ratio HCl : CO2 = 2 : 1, so moles of CO2 = 0.040 ÷ 2 = 0.020 mol.",
                  "Mr(CO2) = 12 + 2 × 16 = 44.",
                  "Mass of CO2 = moles × Mr = 0.020 × 44 = 0.88 g."
                ]
              }
            ]
          },
          {
            id: "chem-rates-bq1-10",
            question: "A student writes: 'Stirring a reaction mixture and adding a catalyst both speed up a reaction, so they must work in the same way.'\n\n(a) Explain how adding a catalyst speeds up a reaction. [2]\n(b) Suggest how vigorously stirring a mixture of a solid and a solution can affect the rate, and explain why this is a different mechanism from a catalyst. [2]\n(c) Evaluate the student's statement. [1]",
            marks: 5,
            modelAnswer: "(a) A catalyst provides an alternative reaction pathway with a lower activation energy, so a greater proportion of collisions have energy ≥ Ea and are successful. The rate increases and the catalyst is not used up.\n\n(b) Stirring helps bring fresh solution into contact with the solid surface and prevents a build-up of product around the solid, so reactant particles meet more readily and effectively maintain a higher collision frequency at the surface. This works by improving contact/collision frequency, not by lowering the activation energy, so it is a different mechanism from a catalyst.\n\n(c) The student is wrong: although both can increase the rate, they work by different mechanisms — a catalyst lowers the activation energy, whereas stirring improves contact and collision frequency without changing Ea.",
            markScheme: [
              "Catalyst provides alternative pathway with lower Ea (1)",
              "Greater proportion of successful collisions / not used up (1)",
              "Stirring improves contact / maintains collision frequency at the surface (1)",
              "Stirring does not lower the activation energy (1)",
              "Conclusion: statement is wrong — different mechanisms (1) (max 5)"
            ],
            commonError: "Assuming any change that increases rate must lower the activation energy. Only temperature changes (the proportion above Ea) and catalysts (lower Ea itself) involve the energy barrier; concentration, pressure, surface area and stirring act on collision frequency.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "challenge",
            hints: [
              "Part (a): give the standard catalyst mechanism — alternative pathway, lower Ea.",
              "Part (b): stirring is about getting particles into contact, not about the energy barrier.",
              "Part (c): same result does not mean same mechanism."
            ],
            strategy: "When comparing two methods, separate the EFFECT (faster) from the MECHANISM (frequency vs energy barrier) — many exam marks reward identifying the mechanism, not just the outcome."
          }
        ]
      },
      {
        id: "chem-rates-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Reversible reactions, dynamic equilibrium, and Le Chatelier's principle.",
        questions: [
          {
            id: "chem-rates-bq2-01",
            question: "Hydrated copper(II) sulfate can be dehydrated and rehydrated:\n\nCuSO4·5H2O(s) ⇌ CuSO4(s) + 5H2O(l)\nblue                white\n\n(a) State what the symbol ⇌ tells you about this reaction. [1]\n(b) Describe what you would see when blue hydrated copper(II) sulfate is heated. [1]\n(c) Describe and explain what happens when a few drops of water are added to the white solid. [2]",
            marks: 4,
            modelAnswer: "(a) The ⇌ symbol shows the reaction is reversible — it can go in both the forward (dehydration) and reverse (rehydration) directions.\n\n(b) The blue solid turns white (and water vapour is driven off / condenses on the cooler parts of the tube).\n\n(c) The white solid turns blue again. Adding water reverses the reaction (rehydration), reforming hydrated copper(II) sulfate; the reaction is exothermic so the solid also gets warm. The blue colour returning is used as a chemical test for the presence of water.",
            markScheme: [
              "Reaction is reversible / can go both ways (1)",
              "Blue solid turns white (1)",
              "White solid turns blue (1)",
              "Reverse (rehydration) reaction occurs / test for water / gets warm (1)"
            ],
            commonError: "Calling the change a 'reaction with oxygen' or a permanent colour change — it is a reversible loss and gain of water of crystallisation.",
            guideRef: "Reversible Reactions & Dynamic Equilibrium",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bq2-02",
            question: "(a) State what is meant by dynamic equilibrium. [2]\n(b) Explain why a reversible reaction can only reach equilibrium in a closed system. [2]",
            marks: 4,
            modelAnswer: "(a) Dynamic equilibrium is reached in a closed system when the rate of the forward reaction equals the rate of the reverse reaction, so the concentrations of all reactants and products remain constant (although both reactions are still occurring).\n\n(b) In an open system, products (especially gases) can escape and reactants can be lost to the surroundings. If a product escapes, it cannot take part in the reverse reaction, so the forward and reverse rates can never become equal and equilibrium is never established. A closed system keeps all species present so both reactions can balance.",
            markScheme: [
              "Forward rate = reverse rate (1)",
              "Concentrations remain constant / both reactions still occurring (1)",
              "In an open system products (e.g. gases) escape (1)",
              "Escaped products cannot drive the reverse reaction so rates cannot balance / equilibrium not reached (1)"
            ],
            commonError: "Stating that at equilibrium 'the reactions stop' or 'the concentrations are equal'. Neither is true: the reactions continue and concentrations are constant but generally unequal.",
            guideRef: "Reversible Reactions & Dynamic Equilibrium",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bq2-03",
            question: "Consider the equilibrium: 2SO2(g) + O2(g) ⇌ 2SO3(g)   ΔH = −196 kJ/mol.\n\nPredict and explain the effect of each of the following on the position of equilibrium:\n(a) increasing the pressure [2]\n(b) increasing the temperature [2]\n(c) adding more O2 [2]",
            marks: 6,
            modelAnswer: "(a) Increasing the pressure shifts the equilibrium to the right. There are 3 moles of gas on the left (2 SO2 + 1 O2) and 2 moles on the right (2 SO3). Le Chatelier predicts the system shifts toward the side with fewer gas moles (the right) to reduce the pressure, so more SO3 forms.\n\n(b) Increasing the temperature shifts the equilibrium to the left. The forward reaction is exothermic (ΔH = −196 kJ/mol), so the reverse reaction is endothermic. Le Chatelier predicts the system shifts in the endothermic direction (left) to absorb the extra heat, so less SO3 forms.\n\n(c) Adding more O2 shifts the equilibrium to the right. The increase in O2 concentration is opposed by the system shifting away from O2 (to the right), using up the added O2 and producing more SO3.",
            markScheme: [
              "(a) Shifts right (1); fewer gas moles on right (2 vs 3) / reduces pressure (1)",
              "(b) Shifts left (1); forward reaction exothermic, so shift is in endothermic direction (1)",
              "(c) Shifts right (1); system shifts away from the added O2 to use it up (1)"
            ],
            commonError: "Saying higher temperature 'shifts right because heat speeds up the forward reaction'. Temperature changes the equilibrium position toward the endothermic direction; for an exothermic forward reaction that is to the left.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "core",
            hints: [
              "Part (a): count gas moles on each side first.",
              "Part (b): use the sign of ΔH to decide which direction is endothermic.",
              "Part (c): adding a species shifts the equilibrium away from it."
            ],
            strategy: "Tackle each factor with its own rule: pressure → gas-mole count; temperature → sign of ΔH; concentration → shift away from what is added (toward what is removed)."
          },
          {
            id: "chem-rates-bq2-04",
            question: "For the equilibrium N2O4(g) ⇌ 2NO2(g)   ΔH = +57 kJ/mol (forward reaction endothermic). N2O4 is colourless and NO2 is brown.\n\n(a) Predict and explain the colour change when the sealed tube is placed in hot water. [3]\n(b) Predict and explain the colour change when the sealed tube is compressed (pressure increased). [3]",
            marks: 6,
            modelAnswer: "(a) In hot water the mixture turns a darker brown. The forward reaction is endothermic, so raising the temperature shifts the equilibrium in the endothermic (forward) direction, producing more brown NO2. More NO2 means a deeper brown colour.\n\n(b) On compression the mixture becomes paler (less brown). There is 1 mole of gas on the left (N2O4) and 2 moles on the right (NO2). Increasing the pressure shifts the equilibrium toward the side with fewer gas moles (the left), forming more colourless N2O4 and less brown NO2, so the colour fades.",
            markScheme: [
              "(a) Darker brown / more NO2 (1); endothermic forward reaction (1); higher T shifts toward endothermic/forward direction (1)",
              "(b) Paler / less brown (1); fewer gas moles on left (1 vs 2) (1); higher pressure shifts toward fewer gas moles (left) (1)"
            ],
            commonError: "Forgetting to link the observation (colour) to the species: NO2 is brown and N2O4 is colourless, so 'more NO2' must be stated to justify 'darker brown'.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "core",
            hints: [
              "Part (a): the forward reaction is endothermic — which way does heating shift it?",
              "Match the shift to the coloured species (NO2 is brown).",
              "Part (b): count gas moles (left = 1, right = 2) and apply the pressure rule."
            ],
            strategy: "For colour-change equilibria, always connect the direction of shift to which coloured species increases or decreases."
          },
          {
            id: "chem-rates-bq2-05",
            question: "A reversible reaction A(g) + B(g) ⇌ C(g) reaches dynamic equilibrium in a sealed container.\n\n(a) On the same axes, sketch (describe) how the rate of the forward reaction and the rate of the reverse reaction change from the moment of mixing until equilibrium is reached. [3]\n(b) Explain why the forward rate falls while the reverse rate rises before equilibrium is established. [2]\n(c) State what is true about the two rates and about the concentrations once equilibrium is reached. [2]",
            marks: 7,
            modelAnswer: "(a) At the start the forward rate is high (A and B are at their highest concentration) and the reverse rate is zero (no C yet). As time passes the forward rate falls and the reverse rate rises. The two curves meet and then both stay constant — this point is equilibrium. (Forward rate curve starts high and decreases to a steady value; reverse rate curve starts at zero and increases to the same steady value.)\n\n(b) As the reaction proceeds, A and B are used up so their concentration falls, which lowers the forward rate. At the same time C is being formed, so its concentration rises, which raises the reverse rate. The forward rate therefore decreases and the reverse rate increases until they become equal.\n\n(c) Once equilibrium is reached, the forward rate equals the reverse rate, and the concentrations of A, B and C remain constant (but not necessarily equal).",
            markScheme: [
              "Forward rate starts high and decreases (1)",
              "Reverse rate starts at zero and increases (1)",
              "Curves meet and become constant at equilibrium (1)",
              "Forward rate falls because [A] and [B] decrease (1)",
              "Reverse rate rises because [C] increases (1)",
              "At equilibrium forward rate = reverse rate (1)",
              "Concentrations remain constant (1) (max 7)"
            ],
            commonError: "Drawing the reverse rate starting at the same value as the forward rate. At t = 0 there is no product, so the reverse rate begins at zero.",
            guideRef: "Reversible Reactions & Dynamic Equilibrium",
            difficulty: "core",
            hints: [
              "At the instant of mixing, how much product C is present, and so what is the reverse rate?",
              "As reactants are used up, what happens to the forward rate?",
              "Equilibrium is where the two rate curves meet and stay level."
            ],
            strategy: "Track each rate against the concentration that drives it: forward rate follows [reactants]; reverse rate follows [products]."
          },
          {
            id: "chem-rates-bq2-06",
            question: "A student claims: 'Adding a catalyst to a reversible reaction will increase the yield of product because it speeds up the forward reaction.'\n\n(a) Explain what is wrong with the student's reasoning. [3]\n(b) State the one useful thing a catalyst does achieve for an industrial equilibrium process. [1]",
            marks: 4,
            modelAnswer: "(a) A catalyst speeds up the forward AND the reverse reactions by the same factor, not just the forward reaction. Because both rates are increased equally, the position of equilibrium is not changed, so the yield of product is the same as without the catalyst. The student is wrong to assume only the forward reaction is sped up.\n\n(b) A catalyst allows equilibrium to be reached more quickly (a useful saving of time in a continuous industrial process), without altering the equilibrium yield.",
            markScheme: [
              "A catalyst speeds up forward and reverse reactions (1)",
              "It speeds them up equally / by the same factor (1)",
              "So the position of equilibrium / yield is unchanged (1)",
              "Useful effect: equilibrium reached more quickly / faster to reach a given yield (1)"
            ],
            commonError: "Believing a catalyst shifts equilibrium toward the products. It changes only how fast equilibrium is reached, never where it lies.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "core",
            hints: [
              "Does a catalyst affect only the forward reaction, or both?",
              "If both rates increase equally, does the balance point move?",
              "What practical benefit remains if the yield is unchanged?"
            ],
            strategy: "Remember the catalyst rule for equilibria: same effect on both directions → position unchanged, only the time to reach it falls."
          },
          {
            id: "chem-rates-bq2-07",
            question: "The equilibrium 2NO(g) + O2(g) ⇌ 2NO2(g) has ΔH = −114 kJ/mol.\n\n(a) State and explain the conditions of temperature and pressure that would give the maximum equilibrium yield of NO2. [4]\n(b) Explain why, in practice, simply choosing the 'maximum-yield' temperature may not give the best rate of production of NO2. [2]",
            marks: 6,
            modelAnswer: "(a) Maximum yield is given by low temperature and high pressure.\n\nLow temperature: the forward reaction is exothermic (ΔH = −114 kJ/mol), so Le Chatelier predicts that lowering the temperature shifts the equilibrium in the exothermic (forward) direction, increasing the yield of NO2.\n\nHigh pressure: there are 3 moles of gas on the left (2 NO + 1 O2) and 2 moles on the right (2 NO2). Increasing the pressure shifts the equilibrium toward the side with fewer gas moles (the right), increasing the yield of NO2.\n\n(b) At a very low temperature the rate of reaction is very slow, because few particles have energy ≥ the activation energy. Although the equilibrium yield is high, it would take a very long time to reach equilibrium, so the actual rate of production is low. A compromise (higher) temperature is used to give an acceptable rate, accepting a somewhat lower yield.",
            markScheme: [
              "Low temperature (1); forward reaction exothermic → low T shifts toward products (1)",
              "High pressure (1); fewer gas moles on right (2 vs 3) → high P shifts toward products (1)",
              "Low temperature gives a slow rate / few particles have E ≥ Ea (1)",
              "Compromise temperature used for an acceptable rate (rate vs yield) (1)"
            ],
            commonError: "Confusing yield with rate — the conditions for maximum yield (low T) are not the conditions for the fastest rate (high T). Industrial conditions are a compromise.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "core",
            hints: [
              "Part (a): use ΔH for temperature and gas-mole counts for pressure.",
              "Part (b): what does a very low temperature do to the rate?",
              "Distinguish 'how much' (yield) from 'how fast' (rate)."
            ],
            strategy: "Always separate yield (equilibrium position) from rate (speed). Maximum-yield conditions and fastest-rate conditions often conflict, forcing a compromise."
          },
          {
            id: "chem-rates-bq2-08",
            question: "The equilibrium CO(g) + 2H2(g) ⇌ CH3OH(g) is used industrially to make methanol. The forward reaction is exothermic.\n\n(a) Deduce the effect on the equilibrium yield of methanol of (i) increasing the pressure and (ii) increasing the temperature. Justify each answer. [4]\n(b) The process is run at a moderately high temperature even though this lowers the yield. Explain this choice. [2]\n(c) Suggest one way, other than changing temperature or pressure, that the yield of methanol obtained from the process could be increased. [1]",
            marks: 7,
            modelAnswer: "(a)(i) Increasing the pressure increases the yield of methanol. There are 3 moles of gas on the left (1 CO + 2 H2) and 1 mole on the right (CH3OH). Higher pressure shifts the equilibrium toward fewer gas moles (the right), increasing the yield.\n\n(ii) Increasing the temperature decreases the yield of methanol. The forward reaction is exothermic, so higher temperature shifts the equilibrium in the endothermic (reverse) direction, reducing the yield.\n\n(b) A higher temperature is used because it increases the rate of reaction (more particles have energy ≥ Ea), so equilibrium is reached far more quickly. The lower yield per pass is accepted because a usable amount of methanol is produced in a reasonable time — a compromise between rate and yield.\n\n(c) Continuously remove (condense out) the methanol as it forms / recycle the unreacted CO and H2. Removing the product shifts the equilibrium to the right, increasing the overall yield obtained.",
            markScheme: [
              "(a)(i) Yield increases (1); fewer gas moles on right (1 vs 3) → high P shifts right (1)",
              "(a)(ii) Yield decreases (1); exothermic forward reaction → high T shifts toward reactants (1) (max 4)",
              "(b) Higher T gives a faster rate / equilibrium reached sooner (1); compromise between rate and yield (1)",
              "(c) Remove/condense methanol as it forms / recycle unreacted gases (1)"
            ],
            commonError: "Forgetting that removing the product (or recycling reactants) is a legitimate way to drive a reversible reaction toward products without altering temperature or pressure.",
            guideRef: "The Haber Process",
            difficulty: "challenge",
            hints: [
              "Part (a)(i): count gas moles (left = 1 + 2, right = 1).",
              "Part (a)(ii): exothermic forward reaction — which way does heating shift it?",
              "Part (c): think about what removing the product does to the position of equilibrium."
            ],
            strategy: "To raise the yield obtained from an equilibrium: shift the position (pressure, temperature) OR remove product / recycle reactants to keep driving the forward reaction."
          },
          {
            id: "chem-rates-bq2-09",
            question: "Explain, using Le Chatelier's principle, each of the following observations.\n\n(a) When the pressure on the equilibrium H2(g) + Cl2(g) ⇌ 2HCl(g) is increased, the position of equilibrium does not change. [2]\n(b) When a little of the (coloured) product is removed from a closed equilibrium mixture, the system responds by making more of that product. [2]\n(c) For an endothermic forward reaction, cooling the mixture decreases the yield of product. [2]",
            marks: 6,
            modelAnswer: "(a) There are 2 moles of gas on the left (1 H2 + 1 Cl2) and 2 moles on the right (2 HCl). Because the number of gas moles is the same on both sides, increasing the pressure does not favour either side, so the position of equilibrium is unchanged.\n\n(b) Removing some product lowers its concentration. Le Chatelier predicts the system opposes this change by shifting toward the product side (the forward reaction speeds up relative to the reverse), making more product to partly replace what was removed.\n\n(c) For an endothermic forward reaction, the reverse reaction is exothermic. Cooling (lowering the temperature) shifts the equilibrium in the exothermic direction — that is the reverse direction — so the forward reaction is disfavoured and the yield of product decreases.",
            markScheme: [
              "(a) Equal moles of gas on both sides (2 and 2) (1); so pressure change does not favour either side (1)",
              "(b) Removing product lowers its concentration (1); system shifts toward product to replace it (1)",
              "(c) Endothermic forward → reverse is exothermic (1); cooling shifts toward exothermic (reverse) direction, lowering yield (1)"
            ],
            commonError: "In (c), assuming cooling always increases yield. It only increases yield when the forward reaction is exothermic; for an endothermic forward reaction, cooling decreases the yield.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "challenge",
            hints: [
              "Part (a): count gas moles on each side before deciding.",
              "Part (b): removing a species shifts the system toward that species.",
              "Part (c): identify the direction that is exothermic, then see where cooling pushes the system."
            ],
            strategy: "Always identify the relevant property first (gas-mole balance for pressure, ΔH sign for temperature, which side a species is on for concentration), then apply 'oppose the change'."
          },
          {
            id: "chem-rates-bq2-10",
            question: "A sealed flask contains an equilibrium mixture of brown NO2 and colourless N2O4: N2O4(g) ⇌ 2NO2(g), forward reaction endothermic.\n\n(a) The flask is cooled in iced water and the brown colour fades. Explain this observation fully in terms of Le Chatelier's principle. [3]\n(b) A second identical flask is connected to the first by a tap. When the tap is opened, the total volume available to the gases doubles (so the pressure roughly halves) at constant temperature. Predict and explain the effect on the colour. [3]",
            marks: 6,
            modelAnswer: "(a) Cooling lowers the temperature. The forward reaction (forming NO2) is endothermic, so the reverse reaction (forming N2O4) is exothermic. Le Chatelier predicts that lowering the temperature shifts the equilibrium in the exothermic direction — the reverse direction — forming more colourless N2O4 and less brown NO2. With less NO2 present, the brown colour fades.\n\n(b) Doubling the volume halves the pressure. Le Chatelier predicts the equilibrium shifts toward the side with more gas moles to oppose the drop in pressure. There is 1 mole of gas on the left (N2O4) and 2 moles on the right (NO2), so the equilibrium shifts to the right, forming more brown NO2. The colour therefore becomes a deeper brown (after the initial dilution, the position shift increases the amount of NO2).",
            markScheme: [
              "(a) Forward reaction endothermic, so reverse is exothermic (1); cooling shifts toward exothermic (reverse) direction (1); more N2O4 / less NO2 → colour fades (1)",
              "(b) Lower pressure shifts toward more gas moles (1); right side has more gas moles (2 vs 1) (1); shift right forms more NO2 → deeper brown (1)"
            ],
            commonError: "For part (b), stopping at 'the gas is diluted so the colour fades' and missing the equilibrium shift. Lowering the pressure shifts the position toward the side with more gas moles (more NO2), which increases the amount of NO2.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "challenge",
            hints: [
              "Part (a): which direction is exothermic, and where does cooling push the system?",
              "Part (b): halving the pressure favours the side with more gas moles — which side is that?",
              "Relate the final amount of NO2 to the depth of the brown colour."
            ],
            strategy: "Separate a dilution effect (fewer particles per volume) from an equilibrium shift (change in position). The marks here are for the position shift toward more gas moles."
          }
        ]
      },
      {
        id: "chem-rates-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "The Haber process, industrial conditions, and compromise.",
        questions: [
          {
            id: "chem-rates-bq3-01",
            question: "Ammonia is made industrially by the Haber process: N2(g) + 3H2(g) ⇌ 2NH3(g)   ΔH = −92 kJ/mol.\n\n(a) State the source of the nitrogen and the source of the hydrogen used. [2]\n(b) State the approximate temperature, pressure and catalyst used. [3]",
            marks: 5,
            modelAnswer: "(a) Nitrogen is obtained from the air (by the fractional distillation of liquid air). Hydrogen is obtained mainly from natural gas (methane), by reacting it with steam (steam reforming).\n\n(b) Temperature: approximately 450 °C. Pressure: approximately 200 atm. Catalyst: iron.",
            markScheme: [
              "Nitrogen from the air / fractional distillation of liquid air (1)",
              "Hydrogen from natural gas / methane (steam reforming) (1)",
              "~450 °C (1)",
              "~200 atm (1)",
              "Iron catalyst (1)"
            ],
            commonError: "Naming vanadium(V) oxide (the Contact-process catalyst) instead of iron.",
            guideRef: "The Haber Process",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bq3-02",
            question: "In the Haber process, N2(g) + 3H2(g) ⇌ 2NH3(g), the forward reaction is exothermic.\n\n(a) Use Le Chatelier's principle to explain why a high pressure increases the yield of ammonia. [2]\n(b) Use Le Chatelier's principle to explain why a low temperature would increase the yield of ammonia. [2]",
            marks: 4,
            modelAnswer: "(a) There are 4 moles of gas on the left (1 N2 + 3 H2) and 2 moles on the right (2 NH3). Le Chatelier predicts that increasing the pressure shifts the equilibrium toward the side with fewer gas moles (the right), so more ammonia is formed and the yield increases.\n\n(b) The forward reaction is exothermic. Le Chatelier predicts that lowering the temperature shifts the equilibrium in the exothermic (forward) direction to release heat, so more ammonia is formed and the yield increases.",
            markScheme: [
              "Fewer gas moles on the right (2 vs 4) (1)",
              "High pressure shifts equilibrium right → more NH3 (1)",
              "Forward reaction exothermic (1)",
              "Low temperature shifts equilibrium in exothermic/forward direction → more NH3 (1)"
            ],
            commonError: "Counting the wrong number of gas moles — remember the left has 1 + 3 = 4 moles, not 2.",
            guideRef: "The Haber Process",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bq3-03",
            question: "The Haber process is run at about 450 °C and 200 atm, even though Le Chatelier's principle suggests a lower temperature and a higher pressure would give a greater yield of ammonia.\n\n(a) Explain why a temperature lower than 450 °C is NOT used. [2]\n(b) Explain why a pressure higher than 200 atm is NOT used. [2]\n(c) Explain why the iron catalyst is used, and state its effect on the yield. [2]",
            marks: 6,
            modelAnswer: "(a) Although a lower temperature would give a higher yield (the forward reaction is exothermic), the rate of reaction at a lower temperature would be too slow, because fewer particles have energy ≥ the activation energy. 450 °C is a compromise giving an acceptable yield at an economic rate.\n\n(b) A higher pressure would give a slightly higher yield, but very high pressures require extremely strong, expensive equipment and are dangerous (risk of explosion). 200 atm is a compromise between a good yield and manageable cost and safety.\n\n(c) The iron catalyst speeds up the reaction (it lowers the activation energy, providing an alternative pathway), so equilibrium is reached more quickly. It has no effect on the yield — it does not change the position of equilibrium, only the time taken to reach it.",
            markScheme: [
              "Lower temperature would give a slower rate / fewer particles with E ≥ Ea (1)",
              "450 °C is a compromise between yield and rate (1)",
              "Higher pressure is expensive / dangerous / needs stronger equipment (1)",
              "200 atm is a compromise between yield and cost/safety (1)",
              "Iron catalyst speeds up the reaction / equilibrium reached faster (1)",
              "Catalyst has no effect on yield / does not change equilibrium position (1)"
            ],
            commonError: "Stating that the catalyst increases the yield. The catalyst only speeds up the attainment of equilibrium; the yield is unchanged.",
            guideRef: "The Haber Process",
            difficulty: "core",
            hints: [
              "Part (a): a lower temperature helps the yield but harms which other factor?",
              "Part (b): why might 1000 atm be impractical even if it gave a better yield?",
              "Part (c): a catalyst changes the speed of reaching equilibrium, not the position."
            ],
            strategy: "For each industrial condition, give the Le Chatelier ideal AND the practical limit (rate, cost or safety) that forces a compromise."
          },
          {
            id: "chem-rates-bq3-04",
            question: "The graph of ammonia yield against pressure (at a fixed temperature) for the Haber process rises steeply at low pressure but flattens at very high pressure.\n\n(a) Explain, using Le Chatelier's principle, why the yield rises as pressure increases. [2]\n(b) Suggest why the operating pressure of ~200 atm is chosen rather than the much higher pressure that would give the greatest yield. [2]\n(c) The yield of ammonia is only about 15–25% per pass through the reactor. Explain how the process is designed so that the overall conversion of nitrogen and hydrogen is much higher than this. [2]",
            marks: 6,
            modelAnswer: "(a) Increasing the pressure shifts the equilibrium toward the side with fewer gas moles. There are 4 moles of gas on the left and 2 on the right, so the equilibrium shifts to the right, increasing the yield of ammonia.\n\n(b) Pushing to a much higher pressure gives only a small extra yield (the curve flattens) but greatly increases the cost of building and running the plant and the safety risks. 200 atm is chosen as an economic compromise — a good yield without excessive cost or danger.\n\n(c) The ammonia is removed by cooling the mixture so that it condenses to a liquid (its boiling point is higher than that of N2 and H2). The unreacted nitrogen and hydrogen are then recycled back into the reactor. Repeatedly passing the gases through means almost all the N2 and H2 is eventually converted, giving a high overall conversion.",
            markScheme: [
              "Higher pressure shifts equilibrium toward fewer gas moles (right) (1)",
              "4 moles gas → 2 moles gas, so yield of NH3 increases (1)",
              "Higher pressure gives little extra yield but high cost / danger (1)",
              "200 atm is a compromise (1) (max 2 for part b)",
              "Ammonia removed by cooling/condensing it to a liquid (1)",
              "Unreacted N2 and H2 are recycled, raising overall conversion (1)"
            ],
            commonError: "Confusing single-pass yield with overall conversion — recycling means the overall conversion is far higher than the 15–25% obtained on one pass.",
            guideRef: "The Haber Process",
            difficulty: "core",
            hints: [
              "Part (a): which side has fewer gas moles, and what does pressure do?",
              "Part (b): if the curve is nearly flat, is a large pressure increase worth the cost?",
              "Part (c): how is ammonia separated, and what happens to the leftover gases?"
            ],
            strategy: "Distinguish single-pass yield (set by equilibrium) from overall conversion (raised by recycling). Removing product and recycling reactants drive the process efficiency."
          },
          {
            id: "chem-rates-bq3-05",
            question: "A chemical company is choosing operating conditions for the Haber process. The table gives the equilibrium percentage yield of ammonia at different conditions.\n\nAt 200 atm: 350 °C → 38%; 450 °C → 19%; 550 °C → 10%.\nAt 450 °C: 100 atm → 11%; 200 atm → 19%; 400 atm → 32%.\n\n(a) Using the data, describe how the yield changes (i) as temperature rises at constant pressure and (ii) as pressure rises at constant temperature. [2]\n(b) Explain, using Le Chatelier's principle, both trends you described. [3]\n(c) Given that 350 °C gives a higher yield than 450 °C, suggest why the company still operates at about 450 °C. [2]",
            marks: 7,
            modelAnswer: "(a)(i) As the temperature rises at constant pressure, the yield of ammonia decreases (38% → 19% → 10% as temperature goes 350 → 450 → 550 °C).\n\n(ii) As the pressure rises at constant temperature, the yield of ammonia increases (11% → 19% → 32% as pressure goes 100 → 200 → 400 atm).\n\n(b) Temperature: the forward reaction is exothermic, so raising the temperature shifts the equilibrium in the endothermic (reverse) direction, decreasing the yield. Pressure: there are more gas moles on the left (4) than on the right (2), so raising the pressure shifts the equilibrium toward fewer gas moles (the right), increasing the yield.\n\n(c) At 350 °C the yield is higher, but the rate of reaction is slower. At 450 °C the reaction is fast enough to produce ammonia at an economic rate; the company accepts the lower yield (made up for by recycling) in return for a much faster rate. 450 °C is the compromise between yield and rate.",
            markScheme: [
              "(a)(i) Yield decreases as temperature rises (1)",
              "(a)(ii) Yield increases as pressure rises (1)",
              "Temperature: exothermic forward reaction → higher T shifts left, lower yield (1)",
              "Pressure: more gas moles on left (4 vs 2) → higher P shifts right, higher yield (1)",
              "(b) correct linkage of both to Le Chatelier (1) (max 3)",
              "Lower temperature gives a slower rate (1)",
              "450 °C is a compromise between rate and yield / recycling makes up the yield (1)"
            ],
            commonError: "Reading the table trends correctly but then giving the wrong Le Chatelier reason (e.g. saying higher temperature increases yield). Always check the sign of ΔH and the gas-mole counts.",
            guideRef: "The Haber Process",
            difficulty: "challenge",
            hints: [
              "Part (a): hold one variable fixed and read down the relevant figures.",
              "Part (b): ΔH sign explains the temperature trend; gas-mole counts explain the pressure trend.",
              "Part (c): the data show 350 °C is better for yield — what is it worse for?"
            ],
            strategy: "When given a data table, first state the trend from the numbers, then explain it with the correct principle. Keep the temperature and pressure arguments separate."
          },
          {
            id: "chem-rates-bq3-06",
            question: "The Haber reaction is N2(g) + 3H2(g) ⇌ 2NH3(g). In a reactor, 28 g of nitrogen reacts completely with hydrogen. (Ar: N = 14, H = 1.)\n\n(a) Calculate the number of moles of N2 in 28 g. [2]\n(b) Calculate the mass of hydrogen needed to react exactly with this nitrogen. [3]\n(c) Calculate the maximum mass of ammonia that could be formed. [2]",
            marks: 7,
            modelAnswer: "(a) Mr(N2) = 2 × 14 = 28. Moles of N2 = mass ÷ Mr = 28 ÷ 28 = 1.0 mol.\n\n(b) From the equation, 1 mol N2 reacts with 3 mol H2, so moles of H2 = 3 × 1.0 = 3.0 mol. Mr(H2) = 2 × 1 = 2. Mass of H2 = moles × Mr = 3.0 × 2 = 6.0 g.\n\n(c) From the equation, 1 mol N2 gives 2 mol NH3, so moles of NH3 = 2 × 1.0 = 2.0 mol. Mr(NH3) = 14 + (3 × 1) = 17. Mass of NH3 = 2.0 × 17 = 34 g.",
            markScheme: [
              "Mr(N2) = 28 (1)",
              "Moles N2 = 28 ÷ 28 = 1.0 mol (1)",
              "Moles H2 = 3 × 1.0 = 3.0 mol (1)",
              "Mr(H2) = 2 (1)",
              "Mass H2 = 3.0 × 2 = 6.0 g (1)",
              "Moles NH3 = 2 × 1.0 = 2.0 mol / Mr(NH3) = 17 (1)",
              "Mass NH3 = 2.0 × 17 = 34 g (1) (max 7)"
            ],
            commonError: "Using Ar(N) = 14 instead of Mr(N2) = 28 for the diatomic molecule, which doubles the moles and throws off every later step.",
            guideRef: "The Haber Process",
            difficulty: "challenge",
            hints: [
              "Part (a): nitrogen gas is N2, so Mr = 2 × 14 = 28.",
              "Part (b): use the 1 : 3 mole ratio of N2 : H2, then mass = moles × Mr.",
              "Part (c): use the 1 : 2 mole ratio of N2 : NH3, then mass = moles × Mr(NH3) = 17."
            ],
            strategy: "Work in moles: convert mass → moles, apply the balanced mole ratio, then convert moles → mass. Use molecular masses (N2 = 28, H2 = 2, NH3 = 17), not atomic masses.",
            solutions: [
              {
                label: "Mass calculation via moles",
                steps: [
                  "Mr(N2) = 2 × 14 = 28; moles N2 = 28 g ÷ 28 = 1.0 mol.",
                  "Ratio N2 : H2 = 1 : 3, so moles H2 = 3.0 mol; mass H2 = 3.0 × 2 = 6.0 g.",
                  "Ratio N2 : NH3 = 1 : 2, so moles NH3 = 2.0 mol; Mr(NH3) = 14 + 3 = 17.",
                  "Mass NH3 = 2.0 × 17 = 34 g.",
                  "Check (conservation of mass): 28 g N2 + 6 g H2 = 34 g NH3. ✓"
                ]
              }
            ]
          },
          {
            id: "chem-rates-bq3-07",
            question: "Ammonia from the Haber process is used to make nitric acid and fertilisers.\n\n(a) Explain why ammonia gas is removed from the reaction mixture by cooling rather than by some other method. [2]\n(b) Explain how removing the ammonia as it forms helps to increase the overall amount of ammonia produced, using Le Chatelier's principle. [2]\n(c) The unreacted nitrogen and hydrogen are recycled. Give one economic and one environmental reason why recycling is beneficial. [2]",
            marks: 6,
            modelAnswer: "(a) Ammonia has a much higher boiling point than nitrogen and hydrogen, so on cooling the mixture the ammonia condenses to a liquid while the N2 and H2 remain as gases. This allows the ammonia to be separated easily without separating the unreacted gases from each other.\n\n(b) Removing ammonia as it forms lowers its concentration in the reaction mixture. Le Chatelier predicts the equilibrium shifts to the right (toward the products) to replace the removed ammonia, so more N2 and H2 are converted and more ammonia is produced overall.\n\n(c) Economic reason: recycling means the unreacted (and expensive) nitrogen and hydrogen are not wasted, reducing raw-material costs. Environmental reason: less raw material is needed and less gas is released or wasted, reducing the environmental impact / conserving resources.",
            markScheme: [
              "Ammonia has a higher boiling point than N2 and H2 (1)",
              "On cooling NH3 condenses to a liquid while N2/H2 stay gaseous → easy separation (1)",
              "Removing NH3 lowers its concentration (1)",
              "Equilibrium shifts right to replace it → more NH3 produced (1)",
              "Economic: reactants not wasted / lower costs (1)",
              "Environmental: less raw material used / less waste (1) (max 6)"
            ],
            commonError: "Forgetting that condensing the ammonia is itself a way of removing a product, which (by Le Chatelier) shifts the equilibrium to make more ammonia.",
            guideRef: "The Haber Process",
            difficulty: "core",
            hints: [
              "Part (a): compare the boiling points of NH3, N2 and H2.",
              "Part (b): removing a product shifts the equilibrium which way?",
              "Part (c): think about saving money and saving resources."
            ],
            strategy: "Link the practical step (cooling/condensing) to the equilibrium consequence (removing product shifts the position toward products)."
          },
          {
            id: "chem-rates-bq3-08",
            question: "Compare the conditions used in the Haber process (N2 + 3H2 ⇌ 2NH3, ~450 °C, ~200 atm) with those in the Contact process (2SO2 + O2 ⇌ 2SO3, ~450 °C, ~1–2 atm). Both forward reactions are exothermic.\n\n(a) Both processes use a temperature of about 450 °C. Explain why a similar temperature is chosen in each case. [2]\n(b) Explain, in terms of moles of gas and equilibrium yield, why the Haber process uses ~200 atm but the Contact process uses only ~1–2 atm. [4]",
            marks: 6,
            modelAnswer: "(a) In both processes the forward reaction is exothermic, so a lower temperature would give a higher yield but a slower rate. About 450 °C is a compromise in each case: it is high enough to give an economic rate of reaction (and to let the catalyst work effectively) while not lowering the yield too far.\n\n(b) In the Haber process there are 4 moles of gas on the left and 2 on the right, but even so the equilibrium yield of ammonia is low (about 15–25%) at moderate pressure. A high pressure (~200 atm) is therefore needed to shift the equilibrium to the right and obtain an economic yield. In the Contact process there are 3 moles of gas on the left and 2 on the right, and the equilibrium yield of SO3 is already very high (about 98%) at low pressure. Increasing the pressure would give only a tiny extra yield, which would not justify the large cost and danger of high-pressure equipment, so only ~1–2 atm is used.",
            markScheme: [
              "Both forward reactions exothermic → low T favours yield but slow rate (1)",
              "~450 °C is a compromise between rate and yield in both (1)",
              "Haber: yield is low at moderate pressure, so high pressure needed to raise yield (1)",
              "Haber: fewer gas moles on the right (2 vs 4) → high P shifts right (1)",
              "Contact: yield already ~98% at low pressure (1)",
              "Contact: extra yield from high pressure not worth the cost → ~1–2 atm used (1) (max 4 for part b)"
            ],
            commonError: "Claiming the Contact process uses low pressure because the moles of gas are equal — they are not (3 → 2). The real reason is that the yield is already very high at low pressure, so high pressure is not worth the cost.",
            guideRef: "The Haber Process",
            difficulty: "challenge",
            hints: [
              "Part (a): both forward reactions are exothermic, so the temperature argument is the same.",
              "Part (b): both have fewer gas moles on the product side, so Le Chatelier favours high pressure in both — so why differ?",
              "Compare the actual equilibrium yields at low pressure: ~15–25% vs ~98%."
            ],
            strategy: "When comparing two industrial processes, find what is the SAME (here, exothermic → temperature compromise) and what DIFFERS (here, the equilibrium yield already attainable at low pressure)."
          },
          {
            id: "chem-rates-bq3-09",
            question: "In a single pass of a Haber reactor, 500 mol of N2 enters and 80 mol of N2 leaves unreacted, together with the ammonia formed.\n\n(a) Calculate the number of moles of N2 that reacted. [1]\n(b) Calculate the number of moles of ammonia formed. [2]\n(c) Calculate the percentage of nitrogen converted to ammonia in this single pass. [2]\n(d) Explain why this single-pass percentage is acceptable in practice. [1]",
            marks: 6,
            modelAnswer: "(a) Moles of N2 reacted = 500 − 80 = 420 mol.\n\n(b) From N2 + 3H2 ⇌ 2NH3, 1 mol N2 gives 2 mol NH3. Moles of NH3 = 2 × 420 = 840 mol.\n\n(c) Percentage converted = (moles N2 reacted ÷ moles N2 entering) × 100 = (420 ÷ 500) × 100 = 84%.\n\n(d) Even though no pass converts everything, the unreacted nitrogen (and hydrogen) is recycled back into the reactor, so over many passes almost all of it is eventually converted — a high single-pass figure is not essential.",
            markScheme: [
              "Moles N2 reacted = 500 − 80 = 420 mol (1)",
              "Use 1 : 2 ratio N2 : NH3 (1)",
              "Moles NH3 = 2 × 420 = 840 mol (1)",
              "% converted = (420 ÷ 500) × 100 (1)",
              "= 84% (1)",
              "Unreacted gas is recycled, so overall conversion is high (1) (max 6)"
            ],
            commonError: "Using moles of ammonia (840) as the 'amount reacted' when calculating the percentage of nitrogen converted — the percentage must be based on moles of N2 (420 out of 500).",
            guideRef: "The Haber Process",
            difficulty: "core",
            hints: [
              "Part (a): subtract the nitrogen leaving from the nitrogen entering.",
              "Part (b): 1 mol N2 makes 2 mol NH3.",
              "Part (c): percentage = (N2 reacted ÷ N2 entering) × 100."
            ],
            strategy: "Track the chosen element through the reactor: in minus out gives the amount reacted; divide by the amount in for the percentage conversion.",
            solutions: [
              {
                label: "Conversion calculation",
                steps: [
                  "N2 reacted = N2 in − N2 out = 500 − 80 = 420 mol.",
                  "Ratio N2 : NH3 = 1 : 2, so NH3 formed = 2 × 420 = 840 mol.",
                  "% conversion of N2 = (420 ÷ 500) × 100 = 84%."
                ]
              }
            ]
          },
          {
            id: "chem-rates-bq3-10",
            question: "A student suggests four ways to increase the equilibrium yield of ammonia in the Haber process: (i) increase the pressure, (ii) increase the temperature, (iii) add an iron catalyst, (iv) remove ammonia as it forms.\n\nFor each suggestion, state whether it would increase, decrease, or have no effect on the equilibrium yield, and give a brief reason. [8]",
            marks: 8,
            modelAnswer: "(i) Increase the pressure: INCREASES the yield. There are fewer gas moles on the product side (2 vs 4), so higher pressure shifts the equilibrium toward ammonia.\n\n(ii) Increase the temperature: DECREASES the yield. The forward reaction is exothermic, so a higher temperature shifts the equilibrium in the endothermic (reverse) direction, away from ammonia.\n\n(iii) Add an iron catalyst: NO EFFECT on the yield. A catalyst speeds up the forward and reverse reactions equally, so equilibrium is reached faster but its position (the yield) is unchanged.\n\n(iv) Remove ammonia as it forms: INCREASES the yield (the overall amount obtained). Removing the product lowers its concentration, so the equilibrium shifts to the right to replace it, converting more reactants to ammonia.",
            markScheme: [
              "(i) Increases (1); fewer gas moles on product side / high P shifts right (1)",
              "(ii) Decreases (1); exothermic forward reaction → high T shifts toward reactants (1)",
              "(iii) No effect (1); catalyst speeds both directions equally / position unchanged (1)",
              "(iv) Increases (1); removing product shifts equilibrium right to replace it (1)"
            ],
            commonError: "Marking the catalyst as 'increases yield'. A catalyst never changes the equilibrium position; it only changes how quickly equilibrium is reached.",
            guideRef: "The Haber Process",
            difficulty: "core",
            hints: [
              "Use the gas-mole count for pressure and the ΔH sign for temperature.",
              "Recall the special rule for catalysts at equilibrium.",
              "Removing a product is treated like a concentration change."
            ],
            strategy: "Apply the four equilibrium rules in turn: pressure (gas moles), temperature (ΔH sign), catalyst (no shift), concentration/removal (shift away from added, toward removed)."
          }
        ]
      },
      {
        id: "chem-rates-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Synoptic rate and equilibrium problems, graphs, and data analysis.",
        questions: [
          {
            id: "chem-rates-bq4-01",
            question: "A student investigates the reaction of marble chips with hydrochloric acid by measuring the volume of carbon dioxide collected.\n\n(a) Name a suitable piece of apparatus for measuring the volume of gas. [1]\n(b) Give one variable the student should keep constant to make the investigation a fair test. [1]\n(c) State what the gradient of the volume-vs-time graph represents and what the final flat part of the graph tells you. [2]",
            marks: 4,
            modelAnswer: "(a) A gas syringe (or an inverted measuring cylinder over water).\n\n(b) Any one of: the volume of acid; the concentration of acid; the mass of marble chips; the size/surface area of the chips; the temperature.\n\n(c) The gradient of the volume-vs-time graph represents the rate of reaction at that moment (steeper = faster). The final flat (horizontal) part shows that the reaction has finished — no more gas is being produced because the limiting reactant has been used up.",
            markScheme: [
              "Gas syringe / inverted measuring cylinder over water (1)",
              "One valid control variable (1)",
              "Gradient = rate of reaction at that time (1)",
              "Flat part = reaction finished / limiting reactant used up (1)"
            ],
            commonError: "Naming a 'beaker' or 'thermometer' for measuring gas volume — these do not measure the volume of a gas.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bq4-02",
            question: "(a) State two factors, other than concentration, that affect the rate of a chemical reaction. [2]\n(b) For each factor you named, state whether it changes the rate mainly by changing the collision frequency or by changing the proportion of successful collisions. [2]",
            marks: 4,
            modelAnswer: "(a) Any two of: temperature; surface area (particle size) of a solid; pressure (for gases); use of a catalyst.\n\n(b) For example: temperature changes the rate mainly by changing the proportion of successful collisions (a greater fraction reach energy ≥ Ea). Surface area / pressure changes the rate by changing the collision frequency (more contact / more particles per volume). A catalyst changes the proportion of successful collisions (by lowering Ea). (Two correct pairings required.)",
            markScheme: [
              "Two valid factors named (1 each, max 2)",
              "Temperature or catalyst → proportion of successful collisions (1)",
              "Surface area or pressure → collision frequency (1) (max 2 for part b)"
            ],
            commonError: "Pairing surface area or pressure with 'energy of collisions' — these act on collision frequency, not on the proportion exceeding Ea.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bq4-03",
            question: "The table shows the total volume of gas collected in a reaction.\n\nTime (s): 0, 20, 40, 60, 80, 100, 120\nVolume (cm³): 0, 32, 52, 64, 70, 72, 72\n\n(a) Calculate the mean rate of reaction over the whole reaction (until it stopped). Give units. [2]\n(b) Calculate the mean rate over the first 20 s, and explain why it is greater than the overall mean rate. [3]\n(c) Sketch (describe) how a second experiment at a higher temperature would compare, assuming the same amounts of reactants. [2]",
            marks: 7,
            modelAnswer: "(a) The reaction stops at 100 s (volume constant at 72 cm³ from 100 s onward). Mean rate = total volume ÷ time taken = 72 cm³ ÷ 100 s = 0.72 cm³/s.\n\n(b) Mean rate over first 20 s = 32 cm³ ÷ 20 s = 1.6 cm³/s. This is greater than the overall mean rate (0.72 cm³/s) because the reaction is fastest at the start, when the reactant concentrations are highest and collisions are most frequent. As the reactants are used up the rate falls, lowering the average over the whole reaction.\n\n(c) At a higher temperature the curve would be steeper at the start (faster rate) and would reach the plateau sooner, but it would level off at the same final volume of 72 cm³ because the same amounts of reactants are used.",
            markScheme: [
              "Reaction finishes at 100 s, volume 72 cm³ (1)",
              "Mean rate = 72 ÷ 100 = 0.72 cm³/s (1)",
              "Rate over first 20 s = 32 ÷ 20 = 1.6 cm³/s (1)",
              "Greater because reaction fastest at start / highest concentration (1)",
              "Rate decreases as reactants used up (1) (max 3 for part b)",
              "Higher T: steeper curve / reaches plateau sooner (1)",
              "Same final volume (72 cm³) (1) (max 2 for part c)"
            ],
            commonError: "Dividing the total volume by 120 s instead of 100 s. The reaction had already finished by 100 s, so the time taken is 100 s, not the full recording time.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "core",
            hints: [
              "Part (a): find when the volume stops changing — that is when the reaction finished.",
              "Part (b): use the first row pair (32 cm³ in 20 s), then compare with the overall mean.",
              "Part (c): higher temperature changes the rate, not the amount of product."
            ],
            strategy: "Overall mean rate = total product ÷ time until the reaction finishes (not the full recording time). Initial rate is always higher than the overall mean.",
            solutions: [
              {
                label: "Mean rates",
                steps: [
                  "Volume is constant (72 cm³) from 100 s, so the reaction finished at 100 s.",
                  "Overall mean rate = 72 cm³ ÷ 100 s = 0.72 cm³/s.",
                  "First-20 s mean rate = 32 cm³ ÷ 20 s = 1.6 cm³/s.",
                  "1.6 > 0.72, confirming the reaction is faster at the start."
                ]
              }
            ]
          },
          {
            id: "chem-rates-bq4-04",
            question: "Two experiments react excess zinc with hydrochloric acid and collect hydrogen.\n\nExperiment 1: 25 cm³ of 2.0 mol/dm³ HCl.\nExperiment 2: 50 cm³ of 1.0 mol/dm³ HCl.\n\n(a) Calculate the number of moles of HCl in each experiment. [2]\n(b) Predict whether the two experiments produce the same final volume of hydrogen, and explain your answer. [2]\n(c) Predict which experiment has the faster initial rate, and explain why. [2]",
            marks: 6,
            modelAnswer: "(a) Experiment 1: moles HCl = 2.0 × (25 ÷ 1000) = 2.0 × 0.025 = 0.050 mol. Experiment 2: moles HCl = 1.0 × (50 ÷ 1000) = 1.0 × 0.050 = 0.050 mol.\n\n(b) Yes — both produce the same final volume of hydrogen. Each contains the same number of moles of HCl (0.050 mol), and HCl is the limiting reactant (zinc is in excess), so the same amount of hydrogen is produced in each.\n\n(c) Experiment 1 has the faster initial rate. It uses the more concentrated acid (2.0 mol/dm³ vs 1.0 mol/dm³), so there are more acid particles per unit volume, giving more frequent collisions with the zinc and a faster initial rate.",
            markScheme: [
              "Exp 1: moles HCl = 2.0 × 0.025 = 0.050 mol (1)",
              "Exp 2: moles HCl = 1.0 × 0.050 = 0.050 mol (1)",
              "Same final volume of H2 (1); same moles of limiting reactant (HCl), zinc in excess (1)",
              "Experiment 1 faster initial rate (1); higher concentration → more frequent collisions (1)"
            ],
            commonError: "Assuming the more concentrated acid must also give more hydrogen. The two acids contain the same moles of HCl, so the final volume is the same — only the rate differs.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "core",
            hints: [
              "Part (a): moles = concentration × volume in dm³ for each.",
              "Part (b): compare the moles of the limiting reactant (HCl).",
              "Part (c): which acid is more concentrated, and what does concentration do to rate?"
            ],
            strategy: "Concentration sets the rate; the moles of limiting reactant set the final amount of product. Equal moles → equal final volume even at different concentrations.",
            solutions: [
              {
                label: "Moles of HCl in each experiment",
                steps: [
                  "Exp 1: V = 25 ÷ 1000 = 0.025 dm³; moles = 2.0 × 0.025 = 0.050 mol.",
                  "Exp 2: V = 50 ÷ 1000 = 0.050 dm³; moles = 1.0 × 0.050 = 0.050 mol.",
                  "Equal moles (0.050 mol each) → same final volume of H2.",
                  "Exp 1 has the higher concentration → faster initial rate."
                ]
              }
            ]
          },
          {
            id: "chem-rates-bq4-05",
            question: "This question links rate and equilibrium ideas.\n\n(a) Explain the difference between the rate of a reaction and the yield of a reaction. [2]\n(b) For the exothermic equilibrium N2(g) + 3H2(g) ⇌ 2NH3(g), explain why increasing the temperature increases the rate but decreases the yield of ammonia. [4]",
            marks: 6,
            modelAnswer: "(a) The rate of a reaction is how fast reactants are converted to products (how quickly the reaction proceeds). The yield is how much product is actually obtained (often expressed as a percentage of the maximum possible). A reaction can be fast but give a low yield, or slow but give a high yield.\n\n(b) Increasing the temperature increases the rate because the particles have more kinetic energy, so a greater proportion of collisions have energy ≥ the activation energy and collisions are also more frequent — more successful collisions per second. However, the yield decreases because the forward reaction is exothermic: by Le Chatelier's principle, raising the temperature shifts the position of equilibrium in the endothermic (reverse) direction, so less ammonia is present at equilibrium.",
            markScheme: [
              "Rate = how fast the reaction goes (1)",
              "Yield = how much product is obtained / % of maximum (1)",
              "Higher T → more collisions with energy ≥ Ea / more frequent → faster rate (1)",
              "Forward reaction is exothermic (1)",
              "Le Chatelier: higher T shifts equilibrium toward endothermic (reverse) direction (1)",
              "So less ammonia at equilibrium / lower yield (1) (max 4 for part b)"
            ],
            commonError: "Treating rate and yield as the same thing. Raising the temperature speeds the reaction up (rate) but, for an exothermic reaction, gives less product at equilibrium (yield).",
            guideRef: "Le Chatelier's Principle",
            difficulty: "core",
            hints: [
              "Part (a): one is about 'how fast', the other about 'how much'.",
              "Part (b): use collision theory for the rate and Le Chatelier for the yield.",
              "The same temperature change can push rate and yield in opposite directions."
            ],
            strategy: "Keep rate (collision theory: frequency and energy) and yield (Le Chatelier: position of equilibrium) as two separate ideas — a single change can affect them in opposite directions."
          },
          {
            id: "chem-rates-bq4-06",
            question: "A reaction between two solutions is studied. The student measures the time for a fixed amount of product (a precipitate) to form at different concentrations of one reactant. The results are:\n\nConcentration (mol/dm³): 0.10, 0.20, 0.40\nTime for precipitate (s): 200, 100, 50\n\n(a) Calculate the rate (as 1/time) for each concentration, in s⁻¹. [2]\n(b) Describe the relationship between the rate and the concentration shown by the data. [2]\n(c) Explain the relationship using collision theory. [2]",
            marks: 6,
            modelAnswer: "(a) Rates: at 0.10 mol/dm³, 1/200 = 0.0050 s⁻¹; at 0.20 mol/dm³, 1/100 = 0.010 s⁻¹; at 0.40 mol/dm³, 1/50 = 0.020 s⁻¹.\n\n(b) The rate is directly proportional to the concentration: when the concentration doubles (0.10 → 0.20 → 0.40), the rate also doubles (0.0050 → 0.010 → 0.020). So rate ∝ concentration.\n\n(c) Increasing the concentration increases the number of reactant particles per unit volume. This makes collisions between the reacting particles more frequent, so there are more successful collisions per second and the rate increases in proportion to the concentration.",
            markScheme: [
              "Rates: 0.0050, 0.010, 0.020 s⁻¹ (all three) (1)",
              "Correct method (1/time) (1)",
              "Rate is directly proportional to concentration / doubles when concentration doubles (1)",
              "Data quoted to support (e.g. 0.0050 → 0.010 → 0.020) (1)",
              "More particles per unit volume → more frequent collisions (1)",
              "More successful collisions per second → faster rate (1) (max 6)"
            ],
            commonError: "Stating only that 'higher concentration is faster' without recognising the directly proportional (doubling) relationship that the numbers show.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "core",
            hints: [
              "Part (a): rate = 1 ÷ time for each row.",
              "Part (b): look at what happens to the rate each time the concentration doubles.",
              "Part (c): connect 'more particles per volume' to collision frequency."
            ],
            strategy: "Convert times to rates (1/time), then look for a pattern (e.g. doubling). State the relationship in words AND back it with the numbers.",
            solutions: [
              {
                label: "Rates and the proportionality",
                steps: [
                  "Rate = 1 ÷ time.",
                  "0.10 mol/dm³: 1 ÷ 200 = 0.0050 s⁻¹.",
                  "0.20 mol/dm³: 1 ÷ 100 = 0.010 s⁻¹ (double).",
                  "0.40 mol/dm³: 1 ÷ 50 = 0.020 s⁻¹ (double again).",
                  "Concentration doubles → rate doubles, so rate ∝ concentration."
                ]
              }
            ]
          },
          {
            id: "chem-rates-bq4-07",
            question: "An exothermic equilibrium reaction X(g) + Y(g) ⇌ Z(g) is run in a sealed reactor.\n\n(a) State three changes that would increase the rate at which equilibrium is reached. [3]\n(b) Of the three changes you gave, state which (if any) would also increase the equilibrium yield of Z, and justify your answer for each. [3]",
            marks: 6,
            modelAnswer: "(a) Any three of: increase the temperature; increase the pressure (or concentration of X or Y); increase the surface area (if a solid catalyst is involved); add a catalyst.\n\n(b) Increase the temperature: speeds up reaching equilibrium, but DECREASES the yield because the forward reaction is exothermic (higher T shifts equilibrium to the reactants). Increase the pressure: speeds up reaching equilibrium AND increases the yield, because there are 2 moles of gas on the left and 1 on the right, so higher pressure shifts the equilibrium toward Z. Add a catalyst: speeds up reaching equilibrium but has NO effect on the yield, because it speeds both directions equally and does not change the equilibrium position.",
            markScheme: [
              "Three valid rate-increasing changes (1 each, max 3): temperature / pressure (or concentration) / catalyst",
              "Temperature: faster but lowers yield (exothermic → high T shifts to reactants) (1)",
              "Pressure: faster AND raises yield (fewer gas moles on product side, 2 → 1) (1)",
              "Catalyst: faster but no change in yield (1) (max 3 for part b)"
            ],
            commonError: "Assuming that anything which speeds up the reaction must also increase the yield. Only changes that shift the equilibrium position (here, pressure) affect the yield; a catalyst and (for an exothermic reaction) raising the temperature do not increase it.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "challenge",
            hints: [
              "Part (a): list the factors that increase rate (temperature, pressure/concentration, catalyst).",
              "Part (b): check each one against Le Chatelier — does it move the equilibrium position?",
              "Pressure here favours the product (fewer gas moles); temperature does not (exothermic); catalyst never does."
            ],
            strategy: "Separate 'reaches equilibrium faster' (rate) from 'gives more product at equilibrium' (yield). A change can do one, both, or neither."
          },
          {
            id: "chem-rates-bq4-08",
            question: "A student reacts 0.24 g of magnesium with 50 cm³ of 1.0 mol/dm³ hydrochloric acid: Mg(s) + 2HCl(aq) → MgCl2(aq) + H2(g). (Ar: Mg = 24.)\n\n(a) Calculate the moles of magnesium and the moles of HCl. [3]\n(b) Determine which reactant is in excess, showing your reasoning. [2]\n(c) Calculate the maximum volume of hydrogen produced at room conditions, where 1 mol of gas occupies 24 dm³. [2]",
            marks: 7,
            modelAnswer: "(a) Moles of Mg = mass ÷ Ar = 0.24 ÷ 24 = 0.010 mol. Moles of HCl = concentration × volume in dm³ = 1.0 × (50 ÷ 1000) = 1.0 × 0.050 = 0.050 mol.\n\n(b) From the equation, 1 mol Mg reacts with 2 mol HCl. To react all 0.010 mol Mg would need 2 × 0.010 = 0.020 mol HCl. Only 0.020 mol HCl is required but 0.050 mol is available, so HCl is in excess and magnesium is the limiting reactant.\n\n(c) From the equation, 1 mol Mg gives 1 mol H2, so moles of H2 = 0.010 mol. Volume = moles × 24 dm³ = 0.010 × 24 = 0.24 dm³ = 240 cm³.",
            markScheme: [
              "Moles Mg = 0.24 ÷ 24 = 0.010 mol (1)",
              "Moles HCl = 1.0 × 50/1000 = 0.050 mol (1)",
              "Correct working shown (1) (max 3 for part a)",
              "HCl needed for all Mg = 2 × 0.010 = 0.020 mol (1)",
              "0.050 > 0.020, so HCl in excess / Mg limiting (1)",
              "Moles H2 = 0.010 mol; volume = 0.010 × 24 = 0.24 dm³ (240 cm³) (1)",
              "Correct units (dm³ or cm³) (1) (max 7)"
            ],
            commonError: "Forgetting the 1 : 2 ratio of Mg : HCl when checking which reactant is in excess, leading to the wrong limiting reactant.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "challenge",
            hints: [
              "Part (a): moles Mg = mass ÷ Ar; moles HCl = c × V (in dm³).",
              "Part (b): work out how much HCl all the Mg would need (use the 1 : 2 ratio), then compare with how much you have.",
              "Part (c): 1 mol Mg → 1 mol H2; multiply moles of H2 by 24 dm³."
            ],
            strategy: "Find moles of each reactant, use the equation ratio to find the limiting reactant, then base the product amount on the limiting reactant. Gas volume = moles × molar gas volume (24 dm³).",
            solutions: [
              {
                label: "Limiting reactant and gas volume",
                steps: [
                  "Moles Mg = 0.24 ÷ 24 = 0.010 mol.",
                  "Moles HCl = 1.0 × (50 ÷ 1000) = 0.050 mol.",
                  "Mg : HCl = 1 : 2, so 0.010 mol Mg needs 0.020 mol HCl; 0.050 mol available → HCl in excess, Mg limiting.",
                  "Mg : H2 = 1 : 1, so moles H2 = 0.010 mol.",
                  "Volume H2 = 0.010 × 24 dm³ = 0.24 dm³ = 240 cm³."
                ]
              }
            ]
          },
          {
            id: "chem-rates-bq4-09",
            question: "A reaction profile (energy-level) diagram is drawn for an exothermic reaction. The reactants are at 250 kJ/mol, the peak of the uncatalysed pathway is at 410 kJ/mol, and the products are at 150 kJ/mol.\n\n(a) Calculate the activation energy of the uncatalysed reaction. [2]\n(b) Calculate the overall energy change (ΔH) of the reaction, and state whether it is exothermic or endothermic. [2]\n(c) A catalyst lowers the activation energy by 90 kJ/mol. State the new height of the peak and the new activation energy, and state what happens to ΔH. [3]",
            marks: 7,
            modelAnswer: "(a) Activation energy = energy of the peak − energy of the reactants = 410 − 250 = 160 kJ/mol.\n\n(b) ΔH = energy of products − energy of reactants = 150 − 250 = −100 kJ/mol. The negative sign shows the reaction is exothermic.\n\n(c) The catalyst lowers the peak by 90 kJ/mol, so the new peak height = 410 − 90 = 320 kJ/mol. The new activation energy = 320 − 250 = 70 kJ/mol (equivalently, the original 160 − 90 = 70 kJ/mol). ΔH is unchanged at −100 kJ/mol, because the catalyst lowers only the peak (activation energy), not the energies of the reactants or products.",
            markScheme: [
              "Ea = 410 − 250 = 160 kJ/mol (1); correct method (1)",
              "ΔH = 150 − 250 = −100 kJ/mol (1); exothermic (1) (max 2 each)",
              "New peak = 410 − 90 = 320 kJ/mol (1)",
              "New Ea = 320 − 250 = 70 kJ/mol (or 160 − 90 = 70) (1)",
              "ΔH unchanged at −100 kJ/mol (1) (max 3 for part c)"
            ],
            commonError: "Calculating the activation energy as peak − products (410 − 150 = 260) instead of peak − reactants. The activation energy is always measured from the reactants up to the peak.",
            guideRef: "Collision Theory: Why Reactions Happen",
            difficulty: "challenge",
            hints: [
              "Part (a): Ea = peak energy − reactant energy.",
              "Part (b): ΔH = product energy − reactant energy; a negative value is exothermic.",
              "Part (c): the catalyst lowers only the peak; the reactant and product energies (and so ΔH) are unchanged."
            ],
            strategy: "On energy-level diagrams: Ea = peak − reactants; ΔH = products − reactants. A catalyst changes the peak (Ea) but never ΔH.",
            solutions: [
              {
                label: "Reading energies off the profile",
                steps: [
                  "Ea (uncatalysed) = 410 − 250 = 160 kJ/mol.",
                  "ΔH = 150 − 250 = −100 kJ/mol → exothermic.",
                  "Catalysed peak = 410 − 90 = 320 kJ/mol.",
                  "New Ea = 320 − 250 = 70 kJ/mol (= 160 − 90).",
                  "ΔH stays −100 kJ/mol; only the activation energy falls."
                ]
              }
            ]
          },
          {
            id: "chem-rates-bq4-10",
            question: "SYNOPTIC: The Contact process includes the equilibrium 2SO2(g) + O2(g) ⇌ 2SO3(g), ΔH = −196 kJ/mol, run at about 450 °C, 1–2 atm, with a vanadium(V) oxide catalyst.\n\n(a) Explain, using rate and equilibrium ideas, why 450 °C is chosen rather than a much lower temperature. [3]\n(b) Explain why a much higher pressure is not used, even though it would increase the yield. [3]\n(c) The vanadium(V) oxide catalyst can be 'poisoned' by impurities in the gas stream, which lowers its activity. Explain how poisoning would affect the operation of the plant and suggest one way to reduce the problem. [3]",
            marks: 9,
            modelAnswer: "(a) The forward reaction is exothermic, so a lower temperature would shift the equilibrium toward the products and give a higher yield of SO3 (Le Chatelier). However, at a much lower temperature the rate of reaction would be very slow, because few particles have energy ≥ the activation energy, and the catalyst also needs a high enough temperature to work effectively. 450 °C is a compromise that gives a fast enough rate while keeping the yield high.\n\n(b) There are 3 moles of gas on the left and 2 on the right, so a higher pressure would shift the equilibrium toward SO3 and increase the yield. However, the yield is already very high (about 98%) at 1–2 atm, so a higher pressure would give only a tiny extra yield. The large cost and danger of high-pressure equipment is not justified by such a small gain, so a low pressure is used.\n\n(c) If the catalyst is poisoned its activity falls, so the rate of reaction decreases and equilibrium is reached more slowly. This lowers the rate of SO3 production (throughput), making the plant less efficient and increasing costs. To reduce the problem, the gases can be purified before they enter the reactor to remove the impurities (catalyst poisons), or the catalyst can be regenerated or replaced periodically.",
            markScheme: [
              "Lower T gives higher yield (exothermic, Le Chatelier) (1)",
              "Lower T gives a slower rate / few particles with E ≥ Ea (1)",
              "450 °C is a compromise between rate and yield (1)",
              "Higher pressure shifts equilibrium right (3 → 2 gas moles), raising yield (1)",
              "Yield already ~98% at low pressure / extra gain small (1)",
              "High-pressure equipment too costly/dangerous to justify → low pressure used (1)",
              "Poisoning lowers catalyst activity → slower rate / lower throughput / higher cost (1)",
              "Purify the gas feed / regenerate or replace the catalyst (1) (max 9)"
            ],
            commonError: "In (b), saying high pressure 'has no effect' because the yield is already 98%. Higher pressure would still increase the yield slightly; the point is that the small gain does not justify the cost, not that there is no effect.",
            guideRef: "The Haber Process",
            difficulty: "challenge",
            hints: [
              "Part (a): identical logic to the Haber temperature compromise — yield vs rate, plus the catalyst needs warmth.",
              "Part (b): the yield is already very high at low pressure; weigh the small gain against the cost.",
              "Part (c): a less active catalyst means equilibrium is reached more slowly — what does that do to output?"
            ],
            strategy: "Apply the rate-vs-yield compromise to a new process, and remember a catalyst (and poisoning) affects only the rate of reaching equilibrium, not its position."
          }
        ]
      }
    ]
  },
};
