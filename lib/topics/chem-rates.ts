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
        description: "Collision theory and the factors that affect rate of reaction.",
        questions: [
          {
            id: "chem-rates-bm1-01",
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
            id: "chem-rates-bm1-02",
            question: "For a collision between two reactant particles to lead to a reaction, the particles must collide with:",
            options: [
              "any energy, and any orientation",
              "energy greater than or equal to the activation energy, and the correct orientation",
              "energy less than the activation energy, and the correct orientation",
              "the average kinetic energy of the mixture, and any orientation"
            ],
            answerIndex: 1,
            explanation: "A successful collision needs energy ≥ Ea AND correct orientation. Both conditions are essential — energy alone is not enough, and energy below Ea cannot react.",
            guideRef: "Collision Theory: Why Reactions Happen",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bm1-03",
            question: "Increasing the pressure on a reaction between two gases increases the rate. The best explanation is that higher pressure:",
            options: [
              "lowers the activation energy of the reaction",
              "increases the average energy of the gas particles",
              "pushes the particles closer together, increasing collision frequency",
              "increases the proportion of particles with energy greater than Ea"
            ],
            answerIndex: 2,
            explanation: "Higher pressure squeezes the same number of gas particles into a smaller volume — effectively raising concentration. This increases collision frequency. It does not change particle energy or Ea (which is what temperature/catalysts do).",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bm1-04",
            question: "A reaction is carried out at 25 °C and then repeated at 35 °C. Which statement best explains why the rate is higher at 35 °C?",
            options: [
              "All collisions now have enough energy to react.",
              "The activation energy of the reaction has decreased.",
              "A greater proportion of collisions have energy ≥ Ea, and collisions are slightly more frequent.",
              "The total number of particles in the mixture has increased."
            ],
            answerIndex: 2,
            explanation: "At higher temperature particles move faster (slightly more frequent collisions) AND a much greater proportion of collisions exceed Ea — the energy effect is the dominant one. Ea is fixed; not all collisions become successful; the number of particles is unchanged.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "core",
            hints: [
              "Temperature changes two things — collision frequency and collision energy.",
              "Which of those two effects is larger for a 10 °C rise?",
              "Does temperature change the activation energy itself?"
            ]
          },
          {
            id: "chem-rates-bm1-05",
            question: "Which statement about a catalyst is correct?",
            options: [
              "It is used up gradually and must be replaced after each reaction.",
              "It increases the average kinetic energy of the reactant particles.",
              "It provides an alternative pathway with a lower activation energy and is not consumed.",
              "It raises the activation energy so that more collisions are successful."
            ],
            answerIndex: 2,
            explanation: "A catalyst offers an alternative route with a lower Ea, so a greater fraction of collisions succeed. It is regenerated and not used up. It does not heat the mixture, and lowering (not raising) Ea is what helps.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "core",
            hints: [
              "Does a catalyst get consumed overall?",
              "Does a catalyst raise or lower the activation energy?",
              "A catalyst changes the path, not the energy of the particles."
            ]
          },
          {
            id: "chem-rates-bm1-06",
            question: "Marble chips react with dilute hydrochloric acid. Which combination of changes would give the FASTEST initial rate?",
            options: [
              "Large chips, 1 mol/dm³ acid, 20 °C",
              "Powdered marble, 2 mol/dm³ acid, 40 °C",
              "Powdered marble, 1 mol/dm³ acid, 20 °C",
              "Large chips, 2 mol/dm³ acid, 40 °C"
            ],
            answerIndex: 1,
            explanation: "Each rate factor adds up: powder maximises surface area, 2 mol/dm³ maximises concentration, and 40 °C maximises temperature. Option B combines all three favourable conditions, giving the fastest initial rate.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "core",
            hints: [
              "List the factors that increase rate: surface area, concentration, temperature.",
              "Which option has the favourable choice for ALL three factors?",
              "Powder beats lumps; higher concentration beats lower; warmer beats cooler."
            ]
          },
          {
            id: "chem-rates-bm1-07",
            question: "Which row correctly describes how a catalyst affects collision frequency and the proportion of successful collisions?",
            options: [
              "Collision frequency: increased; Proportion successful: increased",
              "Collision frequency: unchanged; Proportion successful: increased",
              "Collision frequency: increased; Proportion successful: unchanged",
              "Collision frequency: unchanged; Proportion successful: unchanged"
            ],
            answerIndex: 1,
            explanation: "A catalyst lowers Ea, so a greater proportion of collisions are successful, but it does not change how often particles collide. Concentration/pressure change frequency; catalysts change the success proportion.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "core",
            hints: [
              "Does a catalyst make particles collide more often?",
              "A catalyst lowers Ea — what does that do to the success rate of collisions?",
              "Separate the two ideas: how often vs. how successful."
            ]
          },
          {
            id: "chem-rates-bm1-08",
            question: "A cube of zinc of side 1 cm is replaced by the same mass of zinc as eight cubes of side 0.5 cm. By what factor does the total surface area increase (mass and density unchanged)?",
            options: [
              "It stays the same",
              "It doubles",
              "It increases by a factor of 4",
              "It increases by a factor of 8"
            ],
            answerIndex: 1,
            explanation: "One 1 cm cube has surface area 6 × (1)² = 6 cm². Eight 0.5 cm cubes have total area 8 × 6 × (0.5)² = 8 × 6 × 0.25 = 12 cm². So 12/6 = 2 — the surface area doubles, which is why finer division speeds up reactions of solids.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "challenge",
            hints: [
              "Surface area of a cube = 6 × (side)².",
              "Original area = 6 × 1² = 6 cm².",
              "Eight small cubes: 8 × 6 × (0.5)² = 8 × 6 × 0.25 = 12 cm².",
              "Compare 12 cm² with 6 cm²."
            ],
            strategy: "Halving the size of cubes increases surface-area-to-volume ratio; compute total area before and after and take the ratio."
          },
          {
            id: "chem-rates-bm1-09",
            question: "The graph of volume of gas against time for a reaction is steep at first and then becomes horizontal. Which statement about the moment the line becomes horizontal is correct?",
            options: [
              "The rate is at its maximum.",
              "The activation energy has been reached.",
              "The rate has fallen to zero because the limiting reactant is used up.",
              "The temperature of the mixture has reached a maximum."
            ],
            answerIndex: 2,
            explanation: "A horizontal line means no more gas is being produced — the gradient (and therefore the rate) is zero. This happens when the limiting reactant has been completely consumed. The rate was greatest at the start, not the plateau.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "core",
            hints: [
              "The gradient of the curve equals the rate.",
              "What is the gradient of a horizontal line?",
              "Why would gas production stop completely?"
            ]
          },
          {
            id: "chem-rates-bm1-10",
            question: "Two reactions, X and Y, have activation energies of 30 kJ/mol and 60 kJ/mol respectively. At the same temperature, which reaction is expected to be faster, and why?",
            options: [
              "Y, because a higher Ea means more energy is released",
              "X, because a lower Ea means a greater proportion of collisions are successful",
              "They are equally fast because temperature is the same",
              "Y, because a higher Ea means particles collide more often"
            ],
            answerIndex: 1,
            explanation: "At a given temperature, the lower the activation energy, the larger the fraction of collisions with energy ≥ Ea, so more collisions succeed per second. Reaction X (Ea = 30 kJ/mol) is therefore faster. Ea is unrelated to energy released or collision frequency.",
            guideRef: "Collision Theory: Why Reactions Happen",
            difficulty: "challenge",
            hints: [
              "Ea is the energy barrier collisions must overcome.",
              "At a fixed temperature, which barrier lets through a larger fraction of collisions — low or high?",
              "A lower barrier means more successful collisions per second.",
              "Ea is not the energy released (that is ΔH)."
            ],
            strategy: "Lower Ea → larger fraction of particles above the threshold → faster rate, all else equal."
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
            question: "Which experimental method would be MOST suitable for following the rate of the reaction CaCO3(s) + 2HCl(aq) → CaCl2(aq) + H2O(l) + CO2(g)?",
            options: [
              "Measuring the colour change with a colorimeter",
              "Measuring the volume of gas collected in a gas syringe over time",
              "Measuring the change in temperature only",
              "Measuring the pH at the end of the reaction only"
            ],
            answerIndex: 1,
            explanation: "This reaction produces CO2 gas, so collecting the gas volume over time (or following loss of mass) gives continuous rate data. There is no coloured species for colorimetry; a single end measurement gives no rate information.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bm2-02",
            question: "In the 'disappearing cross' experiment (sodium thiosulfate + HCl), the rate of reaction is taken as proportional to:",
            options: [
              "the time for the cross to disappear",
              "1 ÷ (time for the cross to disappear)",
              "the volume of gas produced",
              "the final mass of sulfur formed"
            ],
            answerIndex: 1,
            explanation: "A faster reaction obscures the cross in a shorter time, so rate ∝ 1/time. The mass of sulfur formed is the same each time; no gas is collected for this method.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bm2-03",
            question: "On a graph of volume of gas against time, the rate of reaction at a particular moment is found from:",
            options: [
              "the area under the curve up to that point",
              "the value on the y-axis at that point",
              "the gradient (slope) of the curve at that point",
              "the total time taken for the reaction"
            ],
            answerIndex: 2,
            explanation: "Rate = change in volume ÷ change in time = the gradient of the curve. A steeper gradient means a faster rate. The y-value gives the total volume so far, not the rate.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bm2-04",
            question: "Two experiments react the same mass of magnesium with excess acid. Experiment Q uses a higher acid concentration than experiment P, everything else equal. How do the curves of volume of H2 against time compare?",
            options: [
              "Q is steeper and reaches a higher final volume than P.",
              "Q is steeper but both reach the same final volume.",
              "P is steeper but both reach the same final volume.",
              "The curves are identical."
            ],
            answerIndex: 1,
            explanation: "Higher concentration in Q gives more frequent collisions → steeper initial gradient (faster rate). The amount of magnesium (the limiting reactant) is the same in both, so the same volume of H2 is produced — same final plateau.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "core",
            hints: [
              "Concentration affects the rate (gradient), not the amount of product.",
              "What is the limiting reactant in both experiments?",
              "Same moles of Mg → same moles of H2."
            ]
          },
          {
            id: "chem-rates-bm2-05",
            question: "A reaction produces 48 cm³ of gas in the first 20 s and a total of 60 cm³ by the time it stops at 80 s. What is the mean rate of reaction over the FIRST 20 s?",
            options: [
              "0.75 cm³/s",
              "2.4 cm³/s",
              "3.0 cm³/s",
              "0.80 cm³/s"
            ],
            answerIndex: 1,
            explanation: "Mean rate over the first 20 s = volume produced ÷ time = 48 cm³ ÷ 20 s = 2.4 cm³/s. The 60 cm³ total and 80 s are distractors for the overall (slower) mean rate.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "core",
            hints: [
              "Mean rate = change in volume ÷ change in time.",
              "Use only the first interval: 48 cm³ in 20 s.",
              "48 ÷ 20 = ?"
            ],
            strategy: "Read the volume and time for the interval asked about — do not mix in the totals from later in the reaction."
          },
          {
            id: "chem-rates-bm2-06",
            question: "Which change to the disappearing-cross experiment would make the comparison of rates LESS reliable?",
            options: [
              "Using the same observer and the same cross each time",
              "Keeping the total volume of solution constant",
              "Letting a different student judge when the cross disappears each time",
              "Keeping the temperature constant with a water bath"
            ],
            answerIndex: 2,
            explanation: "The endpoint (cross disappearing) is judged subjectively, so a different observer each time introduces inconsistency. Keeping the observer, volume and temperature constant all improve reliability.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "core",
            hints: [
              "Which variable here is a judgement made by a person?",
              "A subjective endpoint depends on who is watching.",
              "Reliability improves when conditions and the observer are kept the same."
            ]
          },
          {
            id: "chem-rates-bm2-07",
            question: "A loss-of-mass experiment uses CaCO3 and HCl on a top-pan balance with cotton wool in the flask neck. Why does the mass of the flask and contents decrease during the reaction?",
            options: [
              "Water evaporates from the acid.",
              "Carbon dioxide gas is produced and escapes from the flask.",
              "The cotton wool absorbs some of the acid.",
              "Calcium chloride is lighter than calcium carbonate."
            ],
            answerIndex: 1,
            explanation: "CO2 gas is produced and leaves the open flask, so the recorded mass falls. The cotton wool lets gas escape but stops acid spray; mass change is due to gas loss, not evaporation or product density.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "core",
            hints: [
              "Which product is a gas?",
              "What happens to a gas in an open flask?",
              "The cotton wool stops spray, not gas."
            ]
          },
          {
            id: "chem-rates-bm2-08",
            question: "A volume-of-gas curve has tangents drawn at 10 s and 60 s. The gradient at 10 s is 1.8 cm³/s and at 60 s is 0.4 cm³/s. Which statement is correct?",
            options: [
              "The reaction is faster at 60 s than at 10 s.",
              "The reaction is faster at 10 s because the reactant concentration is higher then.",
              "The rate is constant throughout the reaction.",
              "More gas is being produced per second at 60 s."
            ],
            answerIndex: 1,
            explanation: "The gradient at 10 s (1.8 cm³/s) is steeper than at 60 s (0.4 cm³/s), so the reaction is faster early on. This is because reactant concentration is highest at the start and falls as reactants are used up.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "core",
            hints: [
              "A steeper gradient means a faster rate.",
              "Compare 1.8 cm³/s with 0.4 cm³/s.",
              "Why is the rate highest at the start of a reaction?"
            ]
          },
          {
            id: "chem-rates-bm2-09",
            question: "In a disappearing-cross experiment the times for the cross to vanish were 60 s at low concentration and 20 s at three times that concentration. The ratio of rates (high : low concentration) is closest to:",
            options: [
              "1 : 3",
              "3 : 1",
              "1 : 1",
              "9 : 1"
            ],
            answerIndex: 1,
            explanation: "Rate ∝ 1/time. Low-concentration rate ∝ 1/60; high-concentration rate ∝ 1/20. Ratio = (1/20) ÷ (1/60) = 60/20 = 3. So the rate is 3 times faster — 3 : 1.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "challenge",
            hints: [
              "Rate ∝ 1/time, so invert the times.",
              "Ratio of rates = t(slow) ÷ t(fast) = 60 ÷ 20.",
              "60 ÷ 20 = 3, so 3 : 1.",
              "The shorter time corresponds to the faster rate."
            ],
            strategy: "To compare rates from times, take the ratio of the times the other way round: rate ratio = t1/t2."
          },
          {
            id: "chem-rates-bm2-10",
            question: "0.24 g of magnesium (Ar = 24) reacts completely with excess HCl: Mg + 2HCl → MgCl2 + H2. What volume of hydrogen is produced at room temperature and pressure (molar gas volume = 24 dm³/mol)?",
            options: [
              "120 cm³",
              "240 cm³",
              "480 cm³",
              "24 cm³"
            ],
            answerIndex: 1,
            explanation: "Moles of Mg = 0.24 ÷ 24 = 0.010 mol. From the equation, 1 mol Mg → 1 mol H2, so 0.010 mol H2. Volume = 0.010 × 24 dm³ = 0.24 dm³ = 240 cm³.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "challenge",
            hints: [
              "Moles of Mg = mass ÷ Ar = 0.24 ÷ 24.",
              "Mole ratio Mg : H2 is 1 : 1.",
              "Volume = moles × 24 dm³/mol.",
              "Convert dm³ to cm³ by multiplying by 1000."
            ],
            strategy: "Steps: mass → moles of solid → moles of gas (use the equation ratio) → volume = moles × molar gas volume; then convert units."
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
            question: "The symbol ⇌ in a chemical equation shows that the reaction is:",
            options: [
              "very fast",
              "reversible",
              "exothermic",
              "catalysed"
            ],
            answerIndex: 1,
            explanation: "The ⇌ symbol denotes a reversible reaction — one that can proceed in both the forward and reverse directions. It says nothing about speed, energy change, or catalysts.",
            guideRef: "Reversible Reactions & Dynamic Equilibrium",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bm3-02",
            question: "Which condition is essential for a dynamic equilibrium to be established?",
            options: [
              "The reaction must be exothermic.",
              "A catalyst must be present.",
              "The system must be closed.",
              "The concentrations of reactants and products must be equal."
            ],
            answerIndex: 2,
            explanation: "Equilibrium can only be reached in a closed system, where no substances enter or leave. It does not require a particular energy change, a catalyst, or equal concentrations (only constant ones).",
            guideRef: "Reversible Reactions & Dynamic Equilibrium",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bm3-03",
            question: "At dynamic equilibrium:",
            options: [
              "both forward and reverse reactions have stopped",
              "the forward and reverse reactions occur at equal rates",
              "only the forward reaction continues",
              "the concentrations of reactants and products are always equal"
            ],
            answerIndex: 1,
            explanation: "At dynamic equilibrium the forward and reverse rates are equal, so concentrations stay constant — but both reactions are still occurring (it is dynamic) and the concentrations are not necessarily equal.",
            guideRef: "Reversible Reactions & Dynamic Equilibrium",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bm3-04",
            question: "For the equilibrium H2(g) + I2(g) ⇌ 2HI(g), increasing the total pressure will:",
            options: [
              "shift the equilibrium to the right",
              "shift the equilibrium to the left",
              "have no effect on the position of equilibrium",
              "stop the reaction completely"
            ],
            answerIndex: 2,
            explanation: "There are 2 moles of gas on the left (1 + 1) and 2 moles on the right (2 HI). With equal moles of gas on both sides, a change in pressure does not shift the position of equilibrium.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "core",
            hints: [
              "Count the moles of gas on each side.",
              "Left: 1 + 1 = 2. Right: 2.",
              "Pressure only shifts equilibrium when the mole totals differ."
            ]
          },
          {
            id: "chem-rates-bm3-05",
            question: "For an equilibrium whose forward reaction is endothermic, increasing the temperature will:",
            options: [
              "shift the equilibrium toward the reactants",
              "shift the equilibrium toward the products",
              "have no effect on the position",
              "always increase the rate but lower the yield"
            ],
            answerIndex: 1,
            explanation: "Raising the temperature favours the endothermic direction (it absorbs the added heat). If the forward reaction is endothermic, the equilibrium shifts toward the products, increasing their yield.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "core",
            hints: [
              "Higher temperature favours the endothermic direction.",
              "Here the forward reaction is the endothermic one.",
              "So which way does the equilibrium move?"
            ]
          },
          {
            id: "chem-rates-bm3-06",
            question: "For the equilibrium 2NO2(g) ⇌ N2O4(g), increasing the pressure shifts the equilibrium toward N2O4. The reason is that the system shifts toward the side with:",
            options: [
              "more moles of gas, to increase pressure",
              "fewer moles of gas, to reduce pressure",
              "the heavier molecules",
              "the coloured species"
            ],
            answerIndex: 1,
            explanation: "Left side has 2 moles of gas (2 NO2), right has 1 mole (N2O4). Increasing pressure shifts equilibrium to the side with fewer gas moles (right), partially relieving the pressure increase — Le Chatelier's principle.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "core",
            hints: [
              "Count gas moles: left = 2, right = 1.",
              "Higher pressure favours fewer gas moles.",
              "Moving to fewer moles reduces the pressure."
            ]
          },
          {
            id: "chem-rates-bm3-07",
            question: "Adding a catalyst to a system at equilibrium will:",
            options: [
              "shift the equilibrium to the right",
              "shift the equilibrium to the left",
              "increase the yield of product",
              "have no effect on the position of equilibrium"
            ],
            answerIndex: 3,
            explanation: "A catalyst speeds up the forward and reverse reactions equally, so equilibrium is reached faster but its position — and therefore the yield — is unchanged.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "core",
            hints: [
              "A catalyst affects both directions equally.",
              "If both rates increase by the same factor, does the balance point move?",
              "Catalysts change how fast equilibrium is reached, not where it lies."
            ]
          },
          {
            id: "chem-rates-bm3-08",
            question: "For the equilibrium CH3COOH + C2H5OH ⇌ CH3COOC2H5 + H2O (an esterification in a closed flask), adding more ethanol (C2H5OH) will:",
            options: [
              "shift the equilibrium to the left, making less ester",
              "shift the equilibrium to the right, making more ester",
              "have no effect because no gases are involved",
              "stop the reaction reaching equilibrium"
            ],
            answerIndex: 1,
            explanation: "Adding a reactant increases its concentration; the system shifts away from it (to the right) to use it up, making more ester and water. Le Chatelier's principle applies to concentration in solution, not only to gases.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "challenge",
            hints: [
              "Adding a substance shifts equilibrium away from that substance.",
              "Ethanol is on the left — shifting away means shifting right.",
              "Le Chatelier applies to concentration in solution too, not just gas pressure.",
              "Shifting right makes more products (ester + water)."
            ],
            strategy: "Concentration changes: increase a species → shift away from it; remove a species → shift toward it."
          },
          {
            id: "chem-rates-bm3-09",
            question: "Anhydrous cobalt(II) chloride (blue) reacts reversibly with water: CoCl2(s, blue) + 6H2O ⇌ CoCl2·6H2O(s, pink). On a humid day the solid turns pink; warming it gently turns it blue again. Which deduction is correct?",
            options: [
              "The forward (hydration) reaction is endothermic.",
              "Warming favours the reverse reaction, which must be endothermic.",
              "Adding water shifts the equilibrium to the left.",
              "The colour change shows the reaction is irreversible."
            ],
            answerIndex: 1,
            explanation: "Warming turns it blue (reverse direction), so heat favours the reverse reaction — meaning the reverse reaction is endothermic. Adding water (right-hand species) shifts equilibrium to the right (pink). The colour change is reversible, which is the basis of this classic test.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "challenge",
            hints: [
              "Higher temperature favours the endothermic direction.",
              "Warming produces blue — that is the reverse direction.",
              "So the reverse direction must be endothermic.",
              "Adding water adds a right-hand reactant, shifting equilibrium right (pink)."
            ],
            strategy: "Use the observed effect of heating to identify the endothermic direction, then apply Le Chatelier to the concentration change separately."
          },
          {
            id: "chem-rates-bm3-10",
            question: "A reaction X(g) ⇌ Y(g) + Z(g) is exothermic in the forward direction. Which set of changes would BOTH increase the equilibrium yield of products?",
            options: [
              "Increase temperature and increase pressure",
              "Decrease temperature and decrease pressure",
              "Increase temperature and decrease pressure",
              "Decrease temperature and increase pressure"
            ],
            answerIndex: 1,
            explanation: "Forward reaction is exothermic, so lowering temperature shifts equilibrium right (more products). There is 1 mole of gas on the left and 2 on the right, so lowering pressure shifts equilibrium toward more gas moles (right). Decrease temperature AND decrease pressure both increase yield.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "challenge",
            hints: [
              "Exothermic forward reaction: which temperature change favours products?",
              "Count gas moles: left = 1, right = 1 + 1 = 2.",
              "Lower pressure favours the side with more gas moles.",
              "Combine both conclusions to pick the option."
            ],
            strategy: "Handle temperature (via ΔH) and pressure (via mole counts) separately, then choose the option satisfying both."
          }
        ]
      },
      {
        id: "chem-rates-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "The Haber process and synoptic industrial equilibrium questions.",
        questions: [
          {
            id: "chem-rates-bm4-01",
            question: "The balanced equation for the Haber process is:",
            options: [
              "N2(g) + H2(g) ⇌ NH3(g)",
              "N2(g) + 3H2(g) ⇌ 2NH3(g)",
              "2N2(g) + 3H2(g) ⇌ 2NH3(g)",
              "N2(g) + 2H2(g) ⇌ 2NH3(g)"
            ],
            answerIndex: 1,
            explanation: "The balanced equation is N2 + 3H2 ⇌ 2NH3: 2 N and 6 H on each side. Option A is unbalanced; C has 4 N on the left; D has the wrong hydrogen coefficient.",
            guideRef: "The Haber Process",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bm4-02",
            question: "The approximate conditions used in the Haber process are:",
            options: [
              "25 °C, 1 atm, platinum catalyst",
              "450 °C, 200 atm, iron catalyst",
              "1000 °C, 200 atm, nickel catalyst",
              "200 °C, 450 atm, iron catalyst"
            ],
            answerIndex: 1,
            explanation: "Standard Haber conditions are about 450 °C, about 200 atm, with an iron catalyst. The other options give incorrect temperatures, pressures, or catalysts.",
            guideRef: "The Haber Process",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bm4-03",
            question: "In the Haber process, the nitrogen is obtained from:",
            options: [
              "the fractional distillation of liquid air",
              "the electrolysis of water",
              "natural gas by steam reforming",
              "the decomposition of ammonium nitrate"
            ],
            answerIndex: 0,
            explanation: "Nitrogen comes from the fractional distillation of liquid air (air is about 78% N2). Hydrogen, by contrast, is obtained from natural gas (methane) by steam reforming.",
            guideRef: "The Haber Process",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bm4-04",
            question: "The forward reaction of the Haber process is exothermic (ΔH = −92 kJ/mol). Increasing the temperature will:",
            options: [
              "increase the equilibrium yield of ammonia",
              "decrease the equilibrium yield of ammonia",
              "have no effect on the equilibrium yield",
              "stop ammonia forming altogether"
            ],
            answerIndex: 1,
            explanation: "For an exothermic forward reaction, raising the temperature shifts the equilibrium in the endothermic (reverse) direction, decreasing the yield of ammonia — although it does speed up the rate.",
            guideRef: "The Haber Process",
            difficulty: "core",
            hints: [
              "Is the forward reaction exo- or endothermic?",
              "Higher temperature favours the endothermic direction.",
              "Which way does that shift the equilibrium for the yield of NH3?"
            ]
          },
          {
            id: "chem-rates-bm4-05",
            question: "Why is a pressure of about 200 atm used in the Haber process, rather than a much higher pressure?",
            options: [
              "Higher pressure would decrease the yield of ammonia.",
              "Higher pressure has no effect on this equilibrium.",
              "Higher pressure increases yield but is too costly and dangerous to be worthwhile.",
              "Higher pressure would decompose the iron catalyst."
            ],
            answerIndex: 2,
            explanation: "Higher pressure would shift equilibrium toward the 2 moles of gas (more NH3), raising yield — but very high pressure needs expensive, reinforced plant and is hazardous. 200 atm is a compromise between yield and cost/safety.",
            guideRef: "The Haber Process",
            difficulty: "core",
            hints: [
              "What does higher pressure do to the yield (count gas moles)?",
              "If higher pressure helps yield, why not use it?",
              "Think about the cost and safety of high-pressure equipment."
            ]
          },
          {
            id: "chem-rates-bm4-06",
            question: "Why is a temperature of about 450 °C used, rather than a much lower temperature that would give a higher yield?",
            options: [
              "A lower temperature would give a faster but uneconomical rate.",
              "A lower temperature gives a higher yield but the rate would be far too slow.",
              "A lower temperature would shift the equilibrium toward reactants.",
              "A lower temperature would poison the iron catalyst."
            ],
            answerIndex: 1,
            explanation: "Lower temperature favours the exothermic forward reaction, giving higher yield, but the rate becomes uneconomically slow because few molecules have energy ≥ Ea. 450 °C is a compromise between yield and rate.",
            guideRef: "The Haber Process",
            difficulty: "core",
            hints: [
              "Lower temperature: better yield or worse yield for this exothermic reaction?",
              "What is the problem with the rate at low temperature?",
              "Why is 450 °C described as a compromise?"
            ]
          },
          {
            id: "chem-rates-bm4-07",
            question: "The role of the iron catalyst in the Haber process is to:",
            options: [
              "increase the equilibrium yield of ammonia",
              "shift the equilibrium to the right",
              "increase the rate so equilibrium is reached faster, without changing the yield",
              "lower the temperature at which the equation balances"
            ],
            answerIndex: 2,
            explanation: "The iron catalyst speeds up both forward and reverse reactions equally, so equilibrium is reached more quickly without changing its position or the yield. It does not shift the equilibrium.",
            guideRef: "The Haber Process",
            difficulty: "core",
            hints: [
              "Does a catalyst change the position of equilibrium?",
              "What does a catalyst change — yield or the time to reach equilibrium?",
              "A catalyst lowers Ea but does not move the balance point."
            ]
          },
          {
            id: "chem-rates-bm4-08",
            question: "In the Haber process the gas mixture leaving the reactor is cooled. The purpose of cooling is to:",
            options: [
              "increase the rate of the reverse reaction",
              "liquefy the ammonia so it can be removed, leaving unreacted N2 and H2 to be recycled",
              "shift the equilibrium to the left",
              "decompose any ammonia formed back into N2 and H2"
            ],
            answerIndex: 1,
            explanation: "Cooling condenses ammonia (which has a higher boiling point than N2 and H2) to a liquid that is tapped off. The unreacted nitrogen and hydrogen remain gaseous and are recycled to the reactor, improving overall conversion.",
            guideRef: "The Haber Process",
            difficulty: "core",
            hints: [
              "Which of NH3, N2 and H2 liquefies most easily on cooling?",
              "Once ammonia is removed as a liquid, what happens to the leftover N2 and H2?",
              "Why does recycling improve the overall efficiency?"
            ]
          },
          {
            id: "chem-rates-bm4-09",
            question: "The single-pass yield of ammonia at 450 °C and 200 atm is only about 15–25%. Despite this, the Haber process is efficient overall mainly because:",
            options: [
              "the catalyst increases the yield over time",
              "unreacted nitrogen and hydrogen are continuously recycled",
              "the reaction eventually goes to completion at equilibrium",
              "ammonia decomposes and reforms repeatedly"
            ],
            answerIndex: 1,
            explanation: "Even though only 15–25% converts each pass, the unreacted N2 and H2 are separated from the liquefied ammonia and fed back through the reactor. Repeated recycling means most of the raw material is eventually converted.",
            guideRef: "The Haber Process",
            difficulty: "challenge",
            hints: [
              "A low single-pass yield does not mean raw materials are wasted.",
              "What happens to the gases that did not react on one pass?",
              "Recycling does not change the equilibrium — it reuses the leftover gases.",
              "The catalyst does not raise the yield."
            ],
            strategy: "Distinguish single-pass yield (set by equilibrium) from overall conversion (improved by recycling)."
          },
          {
            id: "chem-rates-bm4-10",
            question: "In the Haber process, 28 tonnes of nitrogen react with excess hydrogen. Using N2 + 3H2 ⇌ 2NH3 and assuming complete conversion (relative masses: N2 = 28, NH3 = 17), what is the maximum mass of ammonia that could be made?",
            options: [
              "17 tonnes",
              "28 tonnes",
              "34 tonnes",
              "56 tonnes"
            ],
            answerIndex: 2,
            explanation: "28 tonnes of N2 is 28 ÷ 28 = 1 'tonne-mole'. From the equation, 1 mol N2 → 2 mol NH3, giving 2 tonne-moles of NH3. Mass = 2 × 17 = 34 tonnes. (This is the theoretical maximum; the real yield is far lower per pass.)",
            guideRef: "The Haber Process",
            difficulty: "challenge",
            hints: [
              "Find the amount of N2 in 'tonne-moles': 28 ÷ 28 = 1.",
              "Mole ratio N2 : NH3 is 1 : 2.",
              "So 2 tonne-moles of NH3 are made.",
              "Mass of NH3 = 2 × 17 tonnes."
            ],
            strategy: "Reacting-mass steps: mass → moles (÷ Mr) → use equation ratio → moles of product → mass (× Mr). Tonnes work like grams if you keep units consistent."
          }
        ]
      }
    ],
    qaPapers: [
      {
        id: "chem-rates-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Collision theory and the factors affecting rate of reaction.",
        questions: [
          {
            id: "chem-rates-bq1-01",
            question: "Define the term activation energy and state the two requirements for a successful collision.",
            marks: 3,
            modelAnswer: "Activation energy is the minimum energy that colliding particles must have for a reaction to occur. For a collision to be successful: (1) the colliding particles must have energy greater than or equal to the activation energy, and (2) they must collide with the correct orientation.",
            markScheme: [
              "Activation energy = minimum energy (for colliding particles) needed for a reaction to occur (1)",
              "Energy ≥ activation energy (1)",
              "Correct orientation / correct geometry of collision (1)"
            ],
            commonError: "Defining activation energy as 'the energy of the reaction' or confusing it with the energy released (ΔH).",
            guideRef: "Collision Theory: Why Reactions Happen",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bq1-02",
            question: "A reaction between a solid and an acid is carried out using lumps of the solid, and then repeated using the same mass of the solid as a fine powder.\n\n(a) State which experiment is faster. [1]\n(b) Explain your answer in terms of collisions. [2]",
            marks: 3,
            modelAnswer: "(a) The experiment using the powder is faster.\n\n(b) Powder has a greater surface area than lumps for the same mass. This exposes more solid particles to the acid, so collisions between the reactant particles are more frequent, giving more successful collisions per second and a faster rate.",
            markScheme: [
              "Powder is faster (1)",
              "Powder has greater surface area (for the same mass) (1)",
              "More frequent collisions / more particles exposed → more successful collisions per second (1)"
            ],
            commonError: "Saying the powder 'has more particles' — the mass (and so the number of particles) is the same; it is the surface area exposed that increases.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bq1-03",
            question: "Explain, in terms of collision theory, why increasing the concentration of a solution increases the rate of a reaction.",
            marks: 3,
            modelAnswer: "Increasing the concentration means there are more solute particles in the same volume. The particles are closer together, so they collide more frequently. A greater number of successful collisions occur per second, so the rate of reaction increases.",
            markScheme: [
              "More particles per unit volume / particles closer together (1)",
              "Collisions are more frequent (1)",
              "More successful collisions per second → faster rate (1)"
            ],
            commonError: "Stating that the particles 'have more energy' — concentration changes the frequency of collisions, not their energy.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "core",
            hints: [
              "What happens to the number of particles in a fixed volume when concentration rises?",
              "How does that affect how often particles collide?",
              "Link 'more frequent collisions' to 'more successful collisions per second'."
            ]
          },
          {
            id: "chem-rates-bq1-04",
            question: "Hydrogen peroxide decomposes slowly: 2H2O2(aq) → 2H2O(l) + O2(g). Adding manganese(IV) oxide speeds it up greatly.\n\n(a) Name the role of manganese(IV) oxide. [1]\n(b) Explain, using activation energy, how it speeds up the reaction. [2]\n(c) At the end of the reaction the manganese(IV) oxide is filtered off, dried and weighed. Predict the result and explain what it shows. [2]",
            marks: 5,
            modelAnswer: "(a) Manganese(IV) oxide acts as a catalyst.\n\n(b) It provides an alternative reaction pathway with a lower activation energy. A greater proportion of collisions now have energy greater than or equal to this lower activation energy, so more collisions are successful per second and the rate increases.\n\n(c) The mass of manganese(IV) oxide is unchanged. This shows it is not used up (consumed) in the reaction — it is chemically unchanged overall, which is a property of a catalyst.",
            markScheme: [
              "Catalyst (1)",
              "Provides an alternative pathway with a lower activation energy (1)",
              "Greater proportion of collisions have energy ≥ (lower) Ea / more successful collisions (1)",
              "Mass unchanged (1)",
              "Shows the catalyst is not consumed / chemically unchanged overall (1)"
            ],
            commonError: "Saying a catalyst 'gives energy to the particles' or 'is used up and replaced' — a catalyst lowers the energy barrier and is regenerated unchanged.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "core",
            hints: [
              "Part (a): one word.",
              "Part (b): does the catalyst raise or lower the activation energy?",
              "Part (c): is a catalyst used up in the reaction?"
            ],
            strategy: "Catalyst chain of reasoning: alternative pathway → lower Ea → greater proportion of successful collisions → faster rate; and it is not consumed."
          },
          {
            id: "chem-rates-bq1-05",
            question: "Explain why a small rise in temperature (for example 10 °C) can cause a much larger increase in rate than would be expected from the increase in collision frequency alone.",
            marks: 4,
            modelAnswer: "When the temperature rises, the particles gain kinetic energy and move faster, so they collide slightly more frequently — but this is only a small effect. More importantly, the energy of the particles increases so that a much greater proportion of collisions now have energy greater than or equal to the activation energy. Because this proportion increases sharply with temperature, the number of successful collisions per second rises far more than the small increase in collision frequency, so the rate increases greatly.",
            markScheme: [
              "Particles gain kinetic energy / move faster (1)",
              "Collision frequency increases only slightly (1)",
              "A much greater proportion of collisions have energy ≥ Ea (1)",
              "This energy effect is larger than the frequency effect → big rate increase (1)"
            ],
            commonError: "Attributing the whole effect to particles 'colliding more often' — the dominant reason is the greater proportion of collisions exceeding Ea.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "core",
            hints: [
              "Temperature has two effects — name both.",
              "Which effect is small and which is large?",
              "Focus on the fraction of collisions with energy ≥ Ea.",
              "Explain why this fraction matters more than collision frequency."
            ]
          },
          {
            id: "chem-rates-bq1-06",
            question: "Sketch and describe an energy profile (reaction pathway) diagram for an exothermic reaction. On your diagram, show the reactants, the products, the activation energy, and the effect of adding a catalyst. Explain how the catalyst changes the diagram.",
            marks: 5,
            modelAnswer: "The diagram has 'progress of reaction' on the x-axis and 'energy' on the y-axis. The reactants are drawn at a higher energy level than the products (because the reaction is exothermic). A curve rises from the reactants to a peak (the transition state) and then falls to the products. The height from the reactants up to the peak is the activation energy. A catalyst is shown as a second, lower peak: the catalysed pathway has a lower activation energy. The reactant and product energy levels stay the same — only the height of the peak (the energy barrier) is reduced. The energy released (ΔH, the difference between reactants and products) is unchanged by the catalyst.",
            markScheme: [
              "Axes labelled: energy (y) against progress of reaction (x) (1)",
              "Reactants drawn higher than products (exothermic) (1)",
              "Activation energy shown as height from reactants to the peak (1)",
              "Catalysed pathway drawn with a lower peak / lower Ea (1)",
              "Reactant and product levels (and ΔH) unchanged by the catalyst (1)"
            ],
            commonError: "Drawing the catalyst as lowering the reactant or product energy levels. The catalyst only lowers the peak (the activation energy); the energy of reactants and products is fixed.",
            guideRef: "Collision Theory: Why Reactions Happen",
            difficulty: "core",
            hints: [
              "Exothermic means products are lower in energy than reactants.",
              "Activation energy is the height from reactants up to the top of the hump.",
              "The catalyst lowers only the hump, not the start or end levels.",
              "ΔH (energy released) is unchanged by the catalyst."
            ]
          },
          {
            id: "chem-rates-bq1-07",
            question: "Compare the effect on rate of (i) doubling the concentration of a reactant and (ii) adding a catalyst. In your answer, refer to collision frequency and the proportion of successful collisions.",
            marks: 4,
            modelAnswer: "(i) Doubling the concentration increases the number of reactant particles per unit volume, so collisions become more frequent. The proportion of collisions that are successful is unchanged (the energy of the particles and the activation energy are unchanged), but because collisions are more frequent there are more successful collisions per second, so the rate increases.\n\n(ii) Adding a catalyst does not change the collision frequency. Instead it provides an alternative pathway with a lower activation energy, so a greater proportion of collisions are successful. This also increases the number of successful collisions per second and so the rate.",
            markScheme: [
              "Concentration: increases collision frequency (1)",
              "Concentration: proportion of successful collisions unchanged (1)",
              "Catalyst: collision frequency unchanged (1)",
              "Catalyst: lowers Ea → greater proportion of successful collisions (1)"
            ],
            commonError: "Treating concentration and catalysts as working the same way. Concentration affects how often particles collide; a catalyst affects what fraction of collisions succeed.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "core",
            hints: [
              "Concentration affects one of the two factors; the catalyst affects the other.",
              "Which factor does concentration change — frequency or success proportion?",
              "Which factor does a catalyst change?"
            ],
            strategy: "Always classify a rate factor as acting on collision frequency, on the proportion of successful collisions, or on both."
          },
          {
            id: "chem-rates-bq1-08",
            question: "A reaction has an activation energy of 50 kJ/mol. A catalyst is found that provides an alternative pathway with an activation energy of 30 kJ/mol.\n\n(a) State what is meant by an 'alternative pathway'. [1]\n(b) By how many kJ/mol does the catalyst lower the activation energy? [1]\n(c) Explain, in terms of the energy distribution of the particles, why lowering the activation energy increases the rate. [3]",
            marks: 5,
            modelAnswer: "(a) An alternative pathway is a different reaction route (mechanism) by which the reactants can become products, in this case one with a lower energy barrier.\n\n(b) The catalyst lowers the activation energy by 50 − 30 = 20 kJ/mol.\n\n(c) At a given temperature, particles have a range of energies. Only those colliding with energy greater than or equal to the activation energy can react. Lowering the activation energy from 50 to 30 kJ/mol means a greater proportion of the particles now have enough energy to react. Therefore more collisions are successful per second and the rate increases.",
            markScheme: [
              "Alternative pathway = a different reaction route/mechanism (with a lower energy barrier) (1)",
              "50 − 30 = 20 kJ/mol (1)",
              "Particles have a range/distribution of energies (1)",
              "A greater proportion now have energy ≥ the (lower) Ea (1)",
              "More successful collisions per second → faster rate (1)"
            ],
            commonError: "Saying the catalyst 'gives the particles more energy'. The particle energies are unchanged; it is the barrier that is lowered, so more particles already clear it.",
            guideRef: "Collision Theory: Why Reactions Happen",
            difficulty: "challenge",
            hints: [
              "Part (b): simple subtraction of the two Ea values.",
              "Part (c): think of the spread of particle energies at one temperature.",
              "Lowering the barrier means more particles are already above it.",
              "Link this to more successful collisions per second."
            ],
            solutions: [
              {
                label: "Calculating the reduction in activation energy",
                steps: [
                  "Reduction = Ea(uncatalysed) − Ea(catalysed)",
                  "= 50 kJ/mol − 30 kJ/mol",
                  "= 20 kJ/mol"
                ]
              }
            ]
          },
          {
            id: "chem-rates-bq1-09",
            question: "Catalytic converters in cars contain a catalyst (such as platinum) that speeds up the reaction 2CO + 2NO → 2CO2 + N2.\n\n(a) Explain why the catalyst is coated as a very thin layer over a honeycomb structure with a large surface area. [2]\n(b) Explain why the catalyst is described as not being used up, even though the car may run for years. [2]\n(c) Suggest why a catalytic converter works poorly immediately after a cold start. [2]",
            marks: 6,
            modelAnswer: "(a) A large surface area exposes more catalyst to the gases, so more gas molecules can be adsorbed and react on the surface at any moment. This maximises the rate while using only a small (expensive) mass of catalyst.\n\n(b) The catalyst provides an alternative pathway and is regenerated at the end of each catalytic cycle. It takes part in the reaction but is chemically unchanged overall, so it is not consumed and continues to work for a long time.\n\n(c) Immediately after a cold start the catalyst and the gases are at a low temperature. The rate of reaction is slow because few molecules have energy greater than or equal to the activation energy, so the converter only works effectively once it has warmed up.",
            markScheme: [
              "Large surface area exposes more catalyst / more sites for molecules to react (1)",
              "Increases rate using only a small mass of (expensive) catalyst (1)",
              "Catalyst is regenerated / chemically unchanged overall (1)",
              "Not consumed, so continues to work (1)",
              "When cold, few molecules have energy ≥ Ea (1)",
              "So the rate is slow until it warms up (1)"
            ],
            commonError: "Thinking the catalyst is gradually 'used up' over the years; it is not consumed, though it can be deactivated by poisons.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "challenge",
            hints: [
              "Part (a): why does a large surface area help, and why use only a thin layer?",
              "Part (b): what happens to a catalyst by the end of the reaction?",
              "Part (c): link low temperature to the proportion of molecules with energy ≥ Ea."
            ],
            strategy: "Apply surface area, the not-consumed property, and temperature/Ea reasoning to a real-world context."
          },
          {
            id: "chem-rates-bq1-10",
            question: "A student writes: 'Increasing the temperature, increasing the concentration and adding a catalyst all increase the rate in exactly the same way — they all make the particles collide more often.' Evaluate this statement, correcting any errors.",
            marks: 6,
            modelAnswer: "The statement is only partly correct. Increasing the concentration does work mainly by increasing collision frequency: more particles per unit volume means more frequent collisions. However, the other two factors do not work in the same way.\n\nIncreasing the temperature does slightly increase collision frequency, but its main effect is to increase the proportion of collisions that have energy greater than or equal to the activation energy. This energy effect is far more important than the small increase in frequency.\n\nAdding a catalyst does not increase the collision frequency at all. It provides an alternative pathway with a lower activation energy, so a greater proportion of the existing collisions are successful.\n\nTherefore it is wrong to say all three work in exactly the same way: concentration acts mainly on collision frequency, temperature acts mainly on the proportion of successful collisions, and a catalyst acts only on the proportion of successful collisions (by lowering Ea).",
            markScheme: [
              "Statement is only partly correct / not all three work the same way (1)",
              "Concentration: mainly increases collision frequency (1)",
              "Temperature: small frequency increase but mainly increases proportion with energy ≥ Ea (1)",
              "Temperature energy effect is the dominant one (1)",
              "Catalyst: does NOT increase collision frequency (1)",
              "Catalyst: lowers Ea → greater proportion of successful collisions (1)"
            ],
            commonError: "Agreeing with the statement, or correcting only one factor. A full evaluation must distinguish all three mechanisms.",
            guideRef: "Factors Affecting Rate of Reaction",
            difficulty: "challenge",
            hints: [
              "Decide first whether the statement is fully right, partly right, or wrong.",
              "Take each factor in turn — does it change frequency, success proportion, or both?",
              "Concentration: frequency. Temperature: mostly success proportion. Catalyst: success proportion only.",
              "Make the correction explicit for each factor."
            ],
            strategy: "Evaluation answers: judge the claim, then justify by treating each factor separately and naming the mechanism it acts on."
          }
        ]
      },
      {
        id: "chem-rates-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Measuring rate, interpreting rate graphs, and rate calculations.",
        questions: [
          {
            id: "chem-rates-bq2-01",
            question: "Define the rate of a reaction and state two different quantities that could be measured to follow a reaction that produces a gas.",
            marks: 3,
            modelAnswer: "Rate of reaction is the change in the amount (concentration, volume, or mass) of a reactant or product per unit time. For a reaction producing a gas, you could measure: (1) the volume of gas collected (e.g. in a gas syringe) over time, and (2) the loss in mass of the reaction mixture over time (as the gas escapes).",
            markScheme: [
              "Rate = change in amount of reactant or product per unit time (1)",
              "Volume of gas collected over time (1)",
              "Loss of mass (of the reaction mixture) over time (1)"
            ],
            commonError: "Giving 'time taken' as the rate. Rate is a change in quantity divided by time, not the time itself.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bq2-02",
            question: "A curve of volume of gas against time rises steeply at first, then becomes less steep, and finally flattens to a horizontal line.\n\n(a) State what the gradient of the curve represents. [1]\n(b) Explain why the curve becomes less steep over time. [2]\n(c) State what the horizontal part of the curve tells you. [1]",
            marks: 4,
            modelAnswer: "(a) The gradient represents the rate of reaction at that moment.\n\n(b) As the reaction proceeds, the reactants are used up, so their concentration falls. With fewer reactant particles per unit volume, collisions are less frequent, so there are fewer successful collisions per second and the rate (gradient) decreases.\n\n(c) The horizontal line shows the reaction has finished: no more gas is being produced because the limiting reactant has been completely used up.",
            markScheme: [
              "Gradient = rate of reaction (at that moment) (1)",
              "Reactants used up / concentration falls (1)",
              "Fewer/less frequent collisions → slower rate (1)",
              "Horizontal = reaction complete / limiting reactant used up (1)"
            ],
            commonError: "Saying the horizontal part means the rate is constant and fast — it actually means the rate has fallen to zero.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bq2-03",
            question: "A student collects the following data for a reaction producing a gas:\n\nTime (s): 0, 20, 40, 60, 80, 100\nVolume of gas (cm³): 0, 32, 52, 64, 70, 70\n\n(a) Calculate the mean rate of reaction over the first 20 s. Give units. [2]\n(b) Calculate the mean rate over the whole reaction (until it stops). [2]\n(c) Explain why the answer to (a) is greater than the answer to (b). [2]",
            marks: 6,
            modelAnswer: "(a) Mean rate over first 20 s = change in volume ÷ time = 32 cm³ ÷ 20 s = 1.6 cm³/s.\n\n(b) The reaction stops at 80 s (volume constant at 70 cm³ thereafter). Mean rate over the whole reaction = 70 cm³ ÷ 80 s = 0.875 cm³/s (≈ 0.88 cm³/s).\n\n(c) The reaction is fastest at the start when the reactant concentration is highest, so a large volume of gas is produced quickly in the first 20 s. As the reaction proceeds the rate falls. The overall mean rate is an average over the whole reaction, including the slow later stages, so it is lower than the rate in the first 20 s.",
            markScheme: [
              "First 20 s: 32 ÷ 20 = 1.6 (1); units cm³/s (1)",
              "Reaction ends at 80 s, total volume 70 cm³ (1)",
              "Whole reaction: 70 ÷ 80 = 0.875 ≈ 0.88 cm³/s (1)",
              "Rate is highest at the start (highest concentration) (1)",
              "Overall mean includes slower later stages, so is lower (1)"
            ],
            commonError: "Dividing 70 by 100 s for part (b). The reaction has already stopped by 80 s, so the time taken is 80 s, not 100 s.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "core",
            hints: [
              "Mean rate = change in volume ÷ time interval.",
              "Part (b): when does the volume stop increasing? Use that time, not 100 s.",
              "Part (c): is the reaction faster at the start or the end?"
            ],
            strategy: "For mean rate, identify the correct time interval (when the gas stops being produced) before dividing.",
            solutions: [
              {
                label: "Both mean rates",
                steps: [
                  "First 20 s: rate = (32 − 0) cm³ ÷ (20 − 0) s = 32 ÷ 20 = 1.6 cm³/s",
                  "Identify end of reaction: volume is 70 cm³ at 80 s and stays 70 → reaction ends at 80 s",
                  "Whole reaction: rate = 70 cm³ ÷ 80 s = 0.875 cm³/s ≈ 0.88 cm³/s"
                ]
              }
            ]
          },
          {
            id: "chem-rates-bq2-04",
            question: "A student investigates how concentration affects the rate of reaction between sodium thiosulfate solution and dilute hydrochloric acid using the 'disappearing cross' method.\n\n(a) Describe how the student should carry out the experiment to obtain valid results. [3]\n(b) State how the rate is calculated from the measured time. [1]\n(c) Identify two variables that must be controlled. [2]",
            marks: 6,
            modelAnswer: "(a) Draw a cross on paper and place a conical flask containing a measured volume of sodium thiosulfate solution on top of it. Add a measured volume of dilute hydrochloric acid, start a stopwatch immediately, and look down through the solution at the cross. Stop the stopwatch when the cross can no longer be seen. Repeat the experiment using different concentrations of sodium thiosulfate (diluting with water to keep the total volume the same), recording the time each time.\n\n(b) Rate is proportional to 1 ÷ time (rate ∝ 1/t): a shorter time means a faster rate.\n\n(c) Any two of: temperature; total volume of solution; volume/concentration of hydrochloric acid; the same cross and the same observer; depth of solution viewed through.",
            markScheme: [
              "Cross under flask; add acid to thiosulfate and start timer (1)",
              "Time how long until the cross can no longer be seen (1)",
              "Repeat with different thiosulfate concentrations, same total volume (1)",
              "Rate ∝ 1/time (1)",
              "Two controlled variables (1 each, e.g. temperature, total volume, acid amount, same observer/cross) (2)"
            ],
            commonError: "Forgetting to keep the total volume constant when changing concentration, so concentration is not the only variable changed.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "core",
            hints: [
              "Part (a): how do you create a fair, repeatable endpoint?",
              "Part (a): how do you change concentration while keeping total volume fixed?",
              "Part (b): a faster reaction gives a shorter time — express rate using 1/t.",
              "Part (c): what must stay the same so only concentration changes?"
            ],
            strategy: "Method questions: describe what is mixed, what is timed, the endpoint, the repeats, and the controlled variables."
          },
          {
            id: "chem-rates-bq2-05",
            question: "A student reacts excess marble chips with 50.0 cm³ of hydrochloric acid and measures the mass of CO2 lost. The reaction is CaCO3(s) + 2HCl(aq) → CaCl2(aq) + H2O(l) + CO2(g). A total of 0.22 g of CO2 is lost when the reaction is complete (Mr of CO2 = 44).\n\n(a) Calculate the number of moles of CO2 produced. [1]\n(b) Calculate the number of moles of HCl that reacted. [2]\n(c) Calculate the concentration of the hydrochloric acid in mol/dm³. [2]",
            marks: 5,
            modelAnswer: "(a) Moles of CO2 = mass ÷ Mr = 0.22 ÷ 44 = 0.0050 mol.\n\n(b) From the equation, 2 mol HCl produce 1 mol CO2. So moles of HCl = 2 × 0.0050 = 0.010 mol.\n\n(c) Concentration = moles ÷ volume in dm³ = 0.010 ÷ (50.0 ÷ 1000) = 0.010 ÷ 0.0500 = 0.20 mol/dm³.",
            markScheme: [
              "Moles CO2 = 0.22 ÷ 44 = 0.0050 mol (1)",
              "Ratio HCl : CO2 = 2 : 1 used (1)",
              "Moles HCl = 2 × 0.0050 = 0.010 mol (1)",
              "Volume = 50.0 ÷ 1000 = 0.0500 dm³ (1)",
              "Concentration = 0.010 ÷ 0.0500 = 0.20 mol/dm³ (1)"
            ],
            commonError: "Forgetting the 2 : 1 ratio between HCl and CO2, or dividing by 50 instead of 0.050 dm³ when finding concentration.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "core",
            hints: [
              "Part (a): moles = mass ÷ Mr.",
              "Part (b): use the 2 : 1 ratio of HCl to CO2 from the equation.",
              "Part (c): convert 50.0 cm³ to dm³ (÷ 1000) before dividing.",
              "Concentration = moles ÷ volume in dm³."
            ],
            strategy: "Reacting-quantity steps: mass → moles → use equation ratio → moles of second species → concentration = moles ÷ volume(dm³).",
            solutions: [
              {
                label: "Full working",
                steps: [
                  "Moles CO2 = 0.22 g ÷ 44 g/mol = 0.0050 mol",
                  "Equation ratio HCl : CO2 = 2 : 1, so moles HCl = 2 × 0.0050 = 0.010 mol",
                  "Volume of acid = 50.0 cm³ = 50.0 ÷ 1000 = 0.0500 dm³",
                  "Concentration = 0.010 mol ÷ 0.0500 dm³ = 0.20 mol/dm³"
                ]
              }
            ]
          },
          {
            id: "chem-rates-bq2-06",
            question: "Two experiments react the same mass of zinc with hydrochloric acid. Experiment 1 uses 1.0 mol/dm³ acid; Experiment 2 uses 2.0 mol/dm³ acid. In both, the zinc is the limiting reactant.\n\n(a) On the same axes, describe how the two volume-of-hydrogen-against-time curves compare. [3]\n(b) Explain, in terms of particles, why the curves differ in the way you described. [2]",
            marks: 5,
            modelAnswer: "(a) The curve for Experiment 2 (higher concentration) is steeper at the start and reaches its final volume sooner. Both curves level off (plateau) at the same final volume of hydrogen, because the same amount of zinc — the limiting reactant — is used in each.\n\n(b) In Experiment 2 there are more acid particles per unit volume, so collisions between the acid and zinc particles are more frequent. This gives more successful collisions per second and so a faster rate (steeper curve). The total amount of hydrogen is fixed by the amount of zinc, so the plateau is the same.",
            markScheme: [
              "Experiment 2 curve is steeper / faster initially (1)",
              "Experiment 2 reaches the plateau sooner (1)",
              "Both reach the same final volume (same amount of zinc) (1)",
              "Higher concentration → more particles per unit volume → more frequent collisions (1)",
              "More successful collisions per second → faster rate (1)"
            ],
            commonError: "Drawing the higher-concentration curve reaching a higher final volume. The amount of product depends on the limiting reactant (zinc), which is the same in both.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "core",
            hints: [
              "Which experiment has the faster rate (steeper curve)?",
              "What controls the final volume — concentration or the limiting reactant?",
              "Since the zinc is the same, the plateau must be the same.",
              "Explain the steeper curve using collision frequency."
            ],
            strategy: "Separate the two features of a rate graph: gradient (set by rate factors) and plateau (set by the limiting reactant)."
          },
          {
            id: "chem-rates-bq2-07",
            question: "Explain the difference between the 'volume of gas' method and the 'disappearing cross' method for following a reaction. In your answer, state one advantage of the gas-collection method.",
            marks: 4,
            modelAnswer: "In the volume-of-gas method, the volume of gas produced is measured continuously (for example with a gas syringe) at regular time intervals, allowing a full graph of volume against time to be plotted. In the disappearing-cross method, only a single time is recorded — the time for the precipitate to obscure a cross — giving rate ∝ 1/time, so just one rate value per experiment. An advantage of the gas-collection method is that it gives continuous, objective data so the rate at any point can be found from the gradient; the cross method has a subjective endpoint and gives only one value.",
            markScheme: [
              "Gas method: continuous measurement of volume over time / full graph (1)",
              "Cross method: single time recorded, rate ∝ 1/time (1)",
              "Gas method gives objective data / rate at any point from the gradient (1)",
              "Cross method endpoint is subjective / gives only one value (1)"
            ],
            commonError: "Stating that the cross method 'measures volume' — it measures a time only, from which a single relative rate is calculated.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "core",
            hints: [
              "How many data points does each method give per experiment?",
              "Which method lets you draw a full rate curve?",
              "Is the cross endpoint judged by eye (subjective) or measured objectively?"
            ]
          },
          {
            id: "chem-rates-bq2-08",
            question: "In a disappearing-cross experiment, a student records the time for the cross to disappear at five temperatures:\n\nTemperature (°C): 20, 30, 40, 50, 60\nTime (s): 64, 41, 26, 17, 11\n\n(a) Calculate the rate (as 1/time) at 20 °C and at 60 °C. Give your answers to 2 significant figures. [2]\n(b) Using your two values, calculate how many times faster the reaction is at 60 °C than at 20 °C. [2]\n(c) Comment on whether the data approximately fit the 'rule of thumb' that a 10 °C rise doubles the rate. [2]",
            marks: 6,
            modelAnswer: "(a) Rate at 20 °C = 1/64 = 0.016 s⁻¹ (2 s.f.). Rate at 60 °C = 1/11 = 0.091 s⁻¹ (2 s.f.).\n\n(b) Number of times faster = rate at 60 °C ÷ rate at 20 °C = (1/11) ÷ (1/64) = 64 ÷ 11 = 5.8 (2 s.f.). So the reaction is about 5.8 times faster at 60 °C.\n\n(c) A rise from 20 °C to 60 °C is four 10 °C steps. The 'doubling' rule would predict 2⁴ = 16 times faster. The actual increase is only about 5.8 times, so the data do not closely fit the rule — the rule is only a rough approximation and the rate increase here is smaller than the rule predicts.",
            markScheme: [
              "Rate at 20 °C = 1/64 = 0.016 s⁻¹ (1)",
              "Rate at 60 °C = 1/11 = 0.091 s⁻¹ (1)",
              "Ratio = 64 ÷ 11 = 5.8 (1)",
              "Four 10 °C steps → rule predicts 2⁴ = 16 (1 for recognising prediction)",
              "Actual ≈ 5.8 ≠ 16, so data do not fit the rule well / rule is only approximate (1)"
            ],
            commonError: "Computing the rate ratio as 11/64 (inverted) instead of 64/11. Remember rate ∝ 1/time, so the faster reaction has the shorter time.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "challenge",
            hints: [
              "Rate = 1 ÷ time; work out 1/64 and 1/11.",
              "To compare rates, divide the larger rate by the smaller, i.e. 64 ÷ 11.",
              "How many 10 °C steps separate 20 °C and 60 °C?",
              "The doubling rule predicts 2 raised to the number of steps."
            ],
            strategy: "Convert times to rates with 1/t, compare by ratio (t_slow / t_fast), then test the prediction 2^(number of 10 °C steps).",
            solutions: [
              {
                label: "Rates and ratio",
                steps: [
                  "Rate(20 °C) = 1 ÷ 64 = 0.0156 ≈ 0.016 s⁻¹",
                  "Rate(60 °C) = 1 ÷ 11 = 0.0909 ≈ 0.091 s⁻¹",
                  "Ratio = (1/11) ÷ (1/64) = 64 ÷ 11 = 5.8",
                  "Prediction from doubling rule: 4 steps of 10 °C → 2^4 = 16; actual 5.8 < 16, so only approximate"
                ]
              }
            ]
          },
          {
            id: "chem-rates-bq2-09",
            question: "A reaction between zinc and excess sulfuric acid is followed by collecting the hydrogen gas. 0.13 g of zinc (Ar = 65) is used: Zn + H2SO4 → ZnSO4 + H2.\n\n(a) Calculate the moles of zinc used. [1]\n(b) Calculate the maximum volume of hydrogen produced at room temperature and pressure (molar gas volume = 24 dm³/mol). Give your answer in cm³. [3]\n(c) The actual volume collected is 44 cm³. Suggest one reason why this is less than your calculated value. [1]",
            marks: 5,
            modelAnswer: "(a) Moles of zinc = mass ÷ Ar = 0.13 ÷ 65 = 0.0020 mol.\n\n(b) From the equation, 1 mol Zn → 1 mol H2, so moles of H2 = 0.0020 mol. Volume = moles × molar gas volume = 0.0020 × 24 = 0.048 dm³ = 48 cm³.\n\n(c) Some hydrogen may have escaped before the bung was inserted / before collection began (or gas dissolved slightly / apparatus leaked), so less than the theoretical maximum was collected.",
            markScheme: [
              "Moles Zn = 0.13 ÷ 65 = 0.0020 mol (1)",
              "Mole ratio Zn : H2 = 1 : 1, so 0.0020 mol H2 (1)",
              "Volume = 0.0020 × 24 = 0.048 dm³ (1)",
              "Convert to 48 cm³ (1)",
              "Sensible reason for loss (gas escaped before collection / leak / dissolved) (1)"
            ],
            commonError: "Leaving the volume as 0.048 (dm³) when the question asks for cm³, or forgetting the 1 : 1 ratio.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "challenge",
            hints: [
              "Part (a): moles = mass ÷ Ar.",
              "Part (b): Zn : H2 ratio is 1 : 1; volume = moles × 24 dm³/mol.",
              "Convert dm³ to cm³ by multiplying by 1000.",
              "Part (c): what could cause some gas not to be collected?"
            ],
            strategy: "mass → moles → equation ratio → moles of gas → volume = moles × 24 dm³/mol → convert to cm³.",
            solutions: [
              {
                label: "Theoretical hydrogen volume",
                steps: [
                  "Moles Zn = 0.13 g ÷ 65 g/mol = 0.0020 mol",
                  "Zn : H2 = 1 : 1, so moles H2 = 0.0020 mol",
                  "Volume = 0.0020 mol × 24 dm³/mol = 0.048 dm³",
                  "0.048 dm³ × 1000 = 48 cm³"
                ]
              }
            ]
          },
          {
            id: "chem-rates-bq2-10",
            question: "A student investigating rate draws a tangent to a volume-of-gas curve at t = 30 s. The tangent passes through the points (10 s, 18 cm³) and (50 s, 66 cm³).\n\n(a) Calculate the rate of reaction at t = 30 s from this tangent. Give units. [3]\n(b) Explain why a tangent must be used to find the rate at this point, rather than simply dividing the total volume by the total time. [2]",
            marks: 5,
            modelAnswer: "(a) Rate = gradient of the tangent = change in volume ÷ change in time = (66 − 18) ÷ (50 − 10) = 48 ÷ 40 = 1.2 cm³/s.\n\n(b) The rate is constantly changing during the reaction (it is fastest at the start and slows down), so the curve is not a straight line. Dividing the total volume by the total time would only give the mean (average) rate over the whole reaction, not the rate at one particular moment. The gradient of the tangent gives the instantaneous rate at t = 30 s.",
            markScheme: [
              "Change in volume = 66 − 18 = 48 cm³ (1)",
              "Change in time = 50 − 10 = 40 s (1)",
              "Rate = 48 ÷ 40 = 1.2 cm³/s (with units) (1)",
              "Rate changes throughout the reaction / curve is not straight (1)",
              "Tangent gives instantaneous rate; total ÷ total gives only the mean rate (1)"
            ],
            commonError: "Reading the tangent points off incorrectly or forgetting the units. Also confusing instantaneous rate (gradient of tangent) with mean rate.",
            guideRef: "Measuring Rate & Interpreting Rate Graphs",
            difficulty: "challenge",
            hints: [
              "Gradient = (change in y) ÷ (change in x) using the two tangent points.",
              "(66 − 18) ÷ (50 − 10).",
              "Part (b): is the rate the same at every moment of the reaction?",
              "Distinguish instantaneous rate from mean rate."
            ],
            strategy: "Instantaneous rate = gradient of the tangent at that point; mean rate = total change ÷ total time.",
            solutions: [
              {
                label: "Gradient of the tangent",
                steps: [
                  "Pick the two tangent points: (10, 18) and (50, 66)",
                  "Change in volume = 66 − 18 = 48 cm³",
                  "Change in time = 50 − 10 = 40 s",
                  "Rate = 48 ÷ 40 = 1.2 cm³/s"
                ]
              }
            ]
          }
        ]
      },
      {
        id: "chem-rates-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Reversible reactions, dynamic equilibrium, and Le Chatelier's principle.",
        questions: [
          {
            id: "chem-rates-bq3-01",
            question: "(a) State what is meant by a reversible reaction. [1]\n(b) State what the symbol ⇌ represents. [1]\n(c) Heating hydrated copper(II) sulfate is a reversible reaction: CuSO4·5H2O(s) ⇌ CuSO4(s) + 5H2O(l). State the colour change seen when the hydrated form is heated. [1]",
            marks: 3,
            modelAnswer: "(a) A reversible reaction is one that can proceed in both the forward and reverse directions.\n\n(b) The symbol ⇌ shows that the reaction is reversible.\n\n(c) On heating, the blue hydrated copper(II) sulfate turns white (as it loses water to form anhydrous copper(II) sulfate).",
            markScheme: [
              "Reversible reaction can go both forwards and backwards (1)",
              "⇌ means the reaction is reversible (1)",
              "Blue → white (1)"
            ],
            commonError: "Reversing the colour change. Hydrated (with water) is blue; anhydrous (heated, water removed) is white.",
            guideRef: "Reversible Reactions & Dynamic Equilibrium",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bq3-02",
            question: "(a) State what is meant by dynamic equilibrium. [2]\n(b) State why equilibrium can only be reached in a closed system. [1]",
            marks: 3,
            modelAnswer: "(a) Dynamic equilibrium is the state reached when the rate of the forward reaction equals the rate of the reverse reaction, so the concentrations of all the reactants and products remain constant. Both reactions are still occurring.\n\n(b) In a closed system no substances can enter or leave, so the products cannot escape and the reverse reaction can take place; this allows the forward and reverse rates to become equal. In an open system products would escape and equilibrium could not be established.",
            markScheme: [
              "Forward rate = reverse rate (1)",
              "Concentrations remain constant / both reactions still occur (1)",
              "Closed system: no matter enters or leaves, so products are not lost and the reverse reaction can occur (1)"
            ],
            commonError: "Saying concentrations are 'equal' at equilibrium. They are constant, but not necessarily equal.",
            guideRef: "Reversible Reactions & Dynamic Equilibrium",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bq3-03",
            question: "Consider the equilibrium: N2O4(g) ⇌ 2NO2(g)   ΔH = +57 kJ/mol. N2O4 is colourless and NO2 is brown.\n\n(a) Predict and explain the colour change when the temperature is increased. [3]\n(b) Predict and explain the effect of increasing the pressure on the position of equilibrium. [2]",
            marks: 5,
            modelAnswer: "(a) The mixture becomes darker brown. The forward reaction is endothermic (ΔH = +57 kJ/mol). Le Chatelier predicts that increasing the temperature shifts the equilibrium in the endothermic (forward) direction, producing more brown NO2, so the colour darkens.\n\n(b) Increasing the pressure shifts the equilibrium to the left (toward N2O4). There is 1 mole of gas on the left and 2 moles on the right, so the system shifts toward the side with fewer gas moles to reduce the pressure. This produces more colourless N2O4 (the mixture would become paler).",
            markScheme: [
              "Colour becomes darker / more brown (1)",
              "Forward reaction is endothermic / heating favours the endothermic direction (1)",
              "Equilibrium shifts right → more NO2 (1)",
              "Higher pressure shifts equilibrium left (1)",
              "Toward fewer gas moles (1 mole vs 2) to reduce pressure (1)"
            ],
            commonError: "Forgetting to link the colour to the species: more NO2 = darker brown; more N2O4 = paler/colourless.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "core",
            hints: [
              "Part (a): is the forward reaction endo- or exothermic? Which direction does heating favour?",
              "More NO2 means more brown colour.",
              "Part (b): count gas moles on each side.",
              "Higher pressure favours fewer gas moles."
            ],
            strategy: "Tie each Le Chatelier prediction to an observable change (here, colour) by tracking which species increases."
          },
          {
            id: "chem-rates-bq3-04",
            question: "For the equilibrium: 2SO2(g) + O2(g) ⇌ 2SO3(g)   ΔH = −196 kJ/mol\n\nPredict and explain the effect of each of the following on the position of equilibrium and the yield of SO3:\n(a) increasing the pressure [2]\n(b) increasing the temperature [2]\n(c) adding a catalyst [2]",
            marks: 6,
            modelAnswer: "(a) Increasing the pressure shifts the equilibrium to the right, increasing the yield of SO3. There are 3 moles of gas on the left (2 SO2 + 1 O2) and 2 moles on the right, so the system shifts toward the side with fewer gas moles to reduce the pressure.\n\n(b) Increasing the temperature shifts the equilibrium to the left, decreasing the yield of SO3. The forward reaction is exothermic (ΔH = −196 kJ/mol), so increasing temperature favours the endothermic (reverse) direction to absorb the extra heat.\n\n(c) Adding a catalyst has no effect on the position of equilibrium or the yield of SO3. It speeds up the forward and reverse reactions equally, so equilibrium is reached faster but its position is unchanged.",
            markScheme: [
              "(a) Shifts right / yield increases (1); fewer gas moles on right (3 → 2) (1)",
              "(b) Shifts left / yield decreases (1); forward reaction exothermic, heating favours endothermic direction (1)",
              "(c) No change to position / yield (1); catalyst speeds both directions equally, equilibrium reached faster (1)"
            ],
            commonError: "Saying the catalyst increases the yield. It only changes the time to reach equilibrium, not the position.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "core",
            hints: [
              "Part (a): count gas moles on each side (3 vs 2).",
              "Part (b): use the sign of ΔH to find which direction heating favours.",
              "Part (c): does a catalyst move the position of equilibrium?"
            ],
            strategy: "For each change: pressure → compare gas moles; temperature → use ΔH; catalyst → no shift in position."
          },
          {
            id: "chem-rates-bq3-05",
            question: "Explain why a catalyst speeds up the attainment of equilibrium but does not change the position of equilibrium or the yield of product.",
            marks: 3,
            modelAnswer: "A catalyst provides an alternative pathway with a lower activation energy. This lower activation energy applies to both the forward and the reverse reactions, so the catalyst speeds up both reactions equally. Because both rates increase by the same factor, equilibrium is reached more quickly, but the relative amounts of reactants and products at equilibrium (the position) are unchanged, so the yield is the same.",
            markScheme: [
              "Catalyst lowers Ea / provides an alternative pathway (1)",
              "Speeds up forward and reverse reactions equally (1)",
              "Equilibrium reached faster but position / yield unchanged (1)"
            ],
            commonError: "Assuming a catalyst favours the forward reaction. It lowers Ea for both directions by the same amount.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "core",
            hints: [
              "How does a catalyst affect the activation energy of the reverse reaction as well as the forward?",
              "If both directions speed up equally, does the balance point move?",
              "Separate 'how fast equilibrium is reached' from 'where the equilibrium lies'."
            ]
          },
          {
            id: "chem-rates-bq3-06",
            question: "The following equilibrium is set up in a closed flask: Fe³⁺(aq) + SCN⁻(aq) ⇌ FeSCN²⁺(aq). The FeSCN²⁺ ion is deep red; the other ions are pale.\n\n(a) Predict and explain what happens to the colour when more Fe³⁺ ions are added. [2]\n(b) Predict and explain what happens to the colour when some SCN⁻ ions are removed (for example by adding a reagent that reacts with them). [2]",
            marks: 4,
            modelAnswer: "(a) The colour becomes a deeper red. Adding more Fe³⁺ increases its concentration; Le Chatelier predicts the equilibrium shifts away from the added substance, i.e. to the right, producing more deep-red FeSCN²⁺.\n\n(b) The colour becomes paler. Removing SCN⁻ decreases its concentration; Le Chatelier predicts the equilibrium shifts toward the removed substance, i.e. to the left, breaking down some FeSCN²⁺ and reducing the red colour.",
            markScheme: [
              "(a) Colour deepens / more red (1); adding Fe³⁺ shifts equilibrium right (away from added species), more FeSCN²⁺ (1)",
              "(b) Colour becomes paler (1); removing SCN⁻ shifts equilibrium left (toward removed species), less FeSCN²⁺ (1)"
            ],
            commonError: "Getting the direction of shift backwards: adding a species shifts AWAY from it; removing a species shifts TOWARD it.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "core",
            hints: [
              "Adding a reactant shifts equilibrium away from it (to the right here).",
              "Removing a reactant shifts equilibrium toward it (to the left here).",
              "More FeSCN²⁺ = deeper red; less FeSCN²⁺ = paler."
            ],
            strategy: "Concentration changes in solution follow the same Le Chatelier rule as gases: add → shift away; remove → shift toward."
          },
          {
            id: "chem-rates-bq3-07",
            question: "For the equilibrium: CO(g) + 2H2(g) ⇌ CH3OH(g)   ΔH = −91 kJ/mol (the industrial synthesis of methanol)\n\n(a) State the conditions of temperature and pressure that would give the maximum equilibrium yield of methanol, and explain your reasoning. [4]\n(b) Explain why, in practice, a moderately high temperature is used even though it lowers the yield. [2]",
            marks: 6,
            modelAnswer: "(a) Low temperature and high pressure give the maximum yield.\n\nLow temperature: the forward reaction is exothermic (ΔH = −91 kJ/mol), so Le Chatelier predicts that lowering the temperature shifts the equilibrium in the exothermic (forward) direction, increasing the yield of methanol.\n\nHigh pressure: there are 3 moles of gas on the left (1 CO + 2 H2) and 1 mole on the right (CH3OH). Le Chatelier predicts that increasing the pressure shifts the equilibrium toward the side with fewer gas moles (the right), increasing the yield.\n\n(b) At a very low temperature the rate of reaction is too slow to be economical — few molecules have energy greater than or equal to the activation energy. A moderately high temperature is a compromise that gives an acceptable rate while still producing a reasonable yield.",
            markScheme: [
              "Low temperature stated (1)",
              "Forward reaction exothermic → lowering temperature shifts equilibrium right / increases yield (1)",
              "High pressure stated (1)",
              "Fewer gas moles on right (3 → 1) → higher pressure shifts right / increases yield (1)",
              "Low temperature gives a slow rate / few molecules have energy ≥ Ea (1)",
              "Moderately high temperature is a compromise between rate and yield (1)"
            ],
            commonError: "Recommending a high temperature 'for a better yield'. For an exothermic reaction, high temperature lowers the yield; it is used only to obtain an acceptable rate.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "challenge",
            hints: [
              "Identify the sign of ΔH to decide the best temperature for yield.",
              "Count gas moles on each side (3 vs 1) to decide the best pressure.",
              "Best yield and economic rate pull in opposite directions for temperature.",
              "Explain the temperature choice as a compromise."
            ],
            strategy: "Apply the equilibrium-yield rules (ΔH for temperature, mole counts for pressure), then add the rate-vs-yield compromise for the real process."
          },
          {
            id: "chem-rates-bq3-08",
            question: "A student claims: 'Increasing the pressure always increases the yield of products in a gaseous equilibrium.' Using two named or described examples, evaluate this claim.",
            marks: 5,
            modelAnswer: "The claim is not always true; it depends on the number of moles of gas on each side. Increasing pressure shifts the equilibrium toward the side with fewer moles of gas.\n\nExample 1, where the claim holds: N2(g) + 3H2(g) ⇌ 2NH3(g). There are 4 moles of gas on the left and 2 on the right, so increasing the pressure shifts the equilibrium to the right and increases the yield of products.\n\nExample 2, where the claim fails: H2(g) + I2(g) ⇌ 2HI(g). There are 2 moles of gas on each side, so increasing the pressure has no effect on the position of equilibrium and does not increase the yield. (Indeed, for a reaction with more moles of gas on the right, higher pressure would decrease the product yield.)\n\nTherefore the claim is an over-generalisation: pressure increases the yield of products only when there are fewer moles of gas on the product side.",
            markScheme: [
              "Claim is not always true / depends on moles of gas on each side (1)",
              "Higher pressure shifts equilibrium toward the side with fewer gas moles (1)",
              "Valid example where it increases yield (e.g. Haber: 4 → 2 moles) (1)",
              "Valid example where it has no effect or decreases yield (e.g. equal moles, 2 = 2) (1)",
              "Conclusion: only increases yield when products have fewer gas moles (1)"
            ],
            commonError: "Accepting the claim or giving only an example that supports it. A proper evaluation needs a counter-example.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "challenge",
            hints: [
              "Pressure only shifts equilibrium when the mole totals differ.",
              "Give one example with fewer moles on the right (claim holds).",
              "Give one example with equal moles, or more moles on the right (claim fails).",
              "State the condition under which the claim is true."
            ],
            strategy: "To evaluate a generalisation, give a supporting case and a counter-case, then state the precise condition for it to hold."
          },
          {
            id: "chem-rates-bq3-09",
            question: "The equilibrium 2NO2(g) ⇌ N2O4(g) is exothermic in the forward direction. A sealed gas syringe contains an equilibrium mixture of the brown NO2 and colourless N2O4.\n\n(a) The plunger is pushed in quickly, halving the volume. Explain what is observed immediately, and then what is observed as the system re-establishes equilibrium. [4]\n(b) The syringe is then placed in iced water. Predict and explain the colour change. [2]",
            marks: 6,
            modelAnswer: "(a) Immediately, the colour darkens because the same amount of brown NO2 is now squeezed into half the volume, so its concentration (and the colour intensity) increases. Then, as the system re-establishes equilibrium, the increase in pressure causes the equilibrium to shift toward the side with fewer gas moles. There are 2 moles of gas on the left (2 NO2) and 1 on the right (N2O4), so the equilibrium shifts to the right, converting some NO2 into colourless N2O4. The colour therefore becomes paler than it was immediately after compression (though it may still be darker than the original).\n\n(b) In iced water the temperature falls. The forward reaction is exothermic, so Le Chatelier predicts the equilibrium shifts in the exothermic (forward) direction, producing more colourless N2O4. The mixture becomes paler.",
            markScheme: [
              "Immediately darker: same NO2 in a smaller volume → higher concentration (1)",
              "Higher pressure shifts equilibrium toward fewer gas moles (1)",
              "2 moles (NO2) → 1 mole (N2O4): shift right, some NO2 → N2O4 (1)",
              "Colour then fades / becomes paler than just after compression (1)",
              "(b) Cooling shifts equilibrium in the exothermic (forward) direction (1)",
              "More N2O4 formed → mixture becomes paler (1)"
            ],
            commonError: "Confusing the immediate physical effect of compression (concentration up → darker) with the subsequent Le Chatelier shift (toward fewer moles → paler). Both should be discussed.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "challenge",
            hints: [
              "First think about concentration: same gas, smaller volume — what happens to the colour straight away?",
              "Then apply Le Chatelier to the pressure increase — count gas moles.",
              "Fewer gas moles is on the N2O4 (colourless) side.",
              "Part (b): cooling favours the exothermic direction — which species increases?"
            ],
            strategy: "Distinguish the instantaneous physical change (concentration) from the equilibrium shift that follows; treat temperature using ΔH."
          },
          {
            id: "chem-rates-bq3-10",
            question: "Bromine water exists in equilibrium: Br2(aq) + H2O(l) ⇌ HOBr(aq) + H⁺(aq) + Br⁻(aq). Bromine water is orange; the products are colourless.\n\n(a) Predict and explain what happens to the colour when a little sodium hydroxide solution is added (NaOH removes H⁺ ions). [3]\n(b) Predict and explain what happens when a little hydrochloric acid is added (which increases H⁺ concentration). [2]",
            marks: 5,
            modelAnswer: "(a) The orange colour fades (becomes paler / colourless). Adding sodium hydroxide removes H⁺ ions, decreasing their concentration. Le Chatelier predicts the equilibrium shifts toward the side that replaces the removed H⁺, i.e. to the right, using up orange Br2 and forming more colourless products, so the colour fades.\n\n(b) The orange colour deepens (or is restored). Adding hydrochloric acid increases the concentration of H⁺ (a product). Le Chatelier predicts the equilibrium shifts away from the added H⁺, i.e. to the left, re-forming orange Br2, so the colour becomes more orange.",
            markScheme: [
              "(a) Colour fades / becomes paler (1); removing H⁺ shifts equilibrium right to replace it (1); uses up Br2 / forms more colourless products (1)",
              "(b) Colour deepens / more orange (1); adding H⁺ shifts equilibrium left, re-forming Br2 (1)"
            ],
            commonError: "Treating H⁺ as a reactant. Here H⁺ is a product (right-hand side), so removing it shifts right and adding it shifts left.",
            guideRef: "Le Chatelier's Principle",
            difficulty: "challenge",
            hints: [
              "Identify which side H⁺ is on — it is a product.",
              "Removing a product shifts the equilibrium toward that side (to the right).",
              "Adding a product shifts the equilibrium away from it (to the left).",
              "Track the orange Br2: used up → paler; re-formed → more orange."
            ],
            strategy: "Locate the species being changed (reactant or product side), then apply add → shift away, remove → shift toward."
          }
        ]
      },
      {
        id: "chem-rates-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "The Haber process and synoptic industrial equilibrium questions.",
        questions: [
          {
            id: "chem-rates-bq4-01",
            question: "The Haber process manufactures ammonia: N2(g) + 3H2(g) ⇌ 2NH3(g)   ΔH = −92 kJ/mol.\n\n(a) State the typical temperature and pressure used. [2]\n(b) Name the catalyst used. [1]\n(c) State the source of the nitrogen and the source of the hydrogen. [2]",
            marks: 5,
            modelAnswer: "(a) Temperature: about 450 °C. Pressure: about 200 atm.\n\n(b) The catalyst is iron.\n\n(c) Nitrogen is obtained from the fractional distillation of liquid air. Hydrogen is obtained from natural gas (methane) by steam reforming.",
            markScheme: [
              "~450 °C (1)",
              "~200 atm (1)",
              "Iron (1)",
              "Nitrogen from fractional distillation of liquid air (1)",
              "Hydrogen from natural gas / methane (steam reforming) (1)"
            ],
            commonError: "Quoting platinum or nickel as the catalyst. The Haber process uses an iron catalyst.",
            guideRef: "The Haber Process",
            difficulty: "warmup"
          },
          {
            id: "chem-rates-bq4-02",
            question: "For the Haber process, N2(g) + 3H2(g) ⇌ 2NH3(g)   ΔH = −92 kJ/mol:\n\n(a) Predict and explain the effect of increasing the pressure on the equilibrium yield of ammonia. [3]\n(b) Predict and explain the effect of increasing the temperature on the equilibrium yield of ammonia. [3]",
            marks: 6,
            modelAnswer: "(a) Increasing the pressure increases the yield of ammonia. There are 4 moles of gas on the left (1 N2 + 3 H2) and 2 moles on the right (2 NH3). Le Chatelier predicts that increasing the pressure shifts the equilibrium toward the side with fewer moles of gas — the right — so more ammonia is formed.\n\n(b) Increasing the temperature decreases the yield of ammonia. The forward reaction is exothermic (ΔH = −92 kJ/mol). Le Chatelier predicts that increasing the temperature shifts the equilibrium in the endothermic (reverse) direction, to absorb the extra heat, so less ammonia is formed.",
            markScheme: [
              "(a) Yield increases (1); 4 moles gas on left vs 2 on right (1); higher pressure shifts toward fewer gas moles (right) (1)",
              "(b) Yield decreases (1); forward reaction exothermic (1); higher temperature shifts toward endothermic (reverse) direction (1)"
            ],
            commonError: "Saying higher temperature increases the yield because 'reactions go faster when hot'. A faster rate is not the same as a higher yield; for this exothermic reaction the yield falls.",
            guideRef: "The Haber Process",
            difficulty: "core",
            hints: [
              "Part (a): count the moles of gas on each side.",
              "Higher pressure favours the side with fewer gas moles.",
              "Part (b): the forward reaction is exothermic — which direction does heating favour?",
              "Distinguish yield from rate."
            ]
          },
          {
            id: "chem-rates-bq4-03",
            question: "Explain why the conditions actually chosen for the Haber process (about 450 °C and about 200 atm) are described as a compromise. Refer to both temperature and pressure in your answer.",
            marks: 6,
            modelAnswer: "Temperature: a lower temperature would give a higher yield of ammonia because the forward reaction is exothermic (Le Chatelier favours the forward direction at lower temperature). However, at a low temperature the reaction rate is very slow, because few molecules have energy greater than or equal to the activation energy, so it would take too long to produce ammonia. A temperature of about 450 °C is a compromise: an acceptable yield with an economically acceptable rate.\n\nPressure: a higher pressure would give a higher yield (the equilibrium shifts toward the 2 moles of gas on the right). However, very high pressures require expensive, strongly reinforced equipment and are dangerous (risk of explosion). A pressure of about 200 atm is a compromise between a good yield and manageable cost and safety.",
            markScheme: [
              "Lower temperature gives higher yield (exothermic forward reaction) (1)",
              "Low temperature gives a slow rate (few molecules with energy ≥ Ea) (1)",
              "450 °C is a compromise between rate and yield (1)",
              "Higher pressure gives higher yield (toward fewer gas moles) (1)",
              "Very high pressure is expensive / dangerous (1)",
              "200 atm is a compromise between yield and cost/safety (1)"
            ],
            commonError: "Discussing only one factor or only the yield side of the argument. A full answer needs both temperature and pressure, and both the benefit and the drawback of each.",
            guideRef: "The Haber Process",
            difficulty: "core",
            hints: [
              "For temperature: what does a low temperature do to (i) yield and (ii) rate?",
              "For pressure: what does a high pressure do to (i) yield and (ii) cost/safety?",
              "A compromise balances a benefit against a drawback.",
              "Cover both temperature and pressure for full marks."
            ],
            strategy: "Compromise answers: state the ideal for yield, state why it is impractical (rate, or cost/safety), then give the chosen value as the balance."
          },
          {
            id: "chem-rates-bq4-04",
            question: "Explain the role of the iron catalyst in the Haber process and why the unreacted nitrogen and hydrogen are recycled.",
            marks: 4,
            modelAnswer: "The iron catalyst provides an alternative pathway with a lower activation energy, speeding up both the forward and reverse reactions equally. This allows equilibrium to be reached more quickly at 450 °C without changing the position of equilibrium or the yield. The single-pass yield of ammonia is low (about 15–25%), so the unreacted nitrogen and hydrogen are separated from the ammonia (which is liquefied by cooling) and recycled back into the reactor. This ensures the raw materials are not wasted and the overall conversion is high.",
            markScheme: [
              "Catalyst lowers Ea / speeds up forward and reverse reactions equally (1)",
              "Equilibrium reached faster without changing yield/position (1)",
              "Single-pass yield is low (≈15–25%) (1)",
              "Unreacted N2 and H2 recycled so raw materials are not wasted / overall conversion high (1)"
            ],
            commonError: "Saying the catalyst or the recycling increases the equilibrium yield. Neither changes the position of equilibrium; recycling just reuses the leftover gases.",
            guideRef: "The Haber Process",
            difficulty: "core",
            hints: [
              "What does the catalyst do to the activation energy and to the time to reach equilibrium?",
              "Does the catalyst change the yield?",
              "Why is the single-pass yield a problem, and how does recycling help?"
            ]
          },
          {
            id: "chem-rates-bq4-05",
            question: "Ammonia from the Haber process is used to make nitric acid and fertilisers.\n\n(a) Explain why the ammonia is removed by cooling and liquefying it, while the unreacted gases stay as gases. [2]\n(b) Explain how the continuous removal of ammonia, combined with recycling, helps to increase the overall yield obtained from the raw materials. [3]",
            marks: 5,
            modelAnswer: "(a) Ammonia has a higher boiling point than nitrogen and hydrogen, so on cooling the mixture, ammonia condenses to a liquid and can be tapped off, while nitrogen and hydrogen remain as gases (their boiling points are much lower).\n\n(b) Removing ammonia (a product) lowers its concentration in the reactor. By Le Chatelier's principle the equilibrium shifts to the right to replace it, so more nitrogen and hydrogen are converted to ammonia. The unreacted nitrogen and hydrogen are recycled back into the reactor, so they are given repeated chances to react. Together, these mean that although each single pass converts only 15–25%, almost all of the raw materials are eventually converted to ammonia.",
            markScheme: [
              "Ammonia has a higher boiling point than N2 and H2 (1)",
              "On cooling, NH3 liquefies and is removed; N2 and H2 stay gaseous (1)",
              "Removing NH3 (product) shifts equilibrium right to make more NH3 (1)",
              "Unreacted N2 and H2 recycled / given more chances to react (1)",
              "Overall most of the raw materials are converted despite low single-pass yield (1)"
            ],
            commonError: "Saying recycling 'changes the conditions' of equilibrium. Recycling reuses leftover gases; removing ammonia shifts the equilibrium by lowering a product's concentration.",
            guideRef: "The Haber Process",
            difficulty: "challenge",
            hints: [
              "Part (a): compare the boiling points of NH3, N2 and H2.",
              "Part (b): removing a product is a concentration change — apply Le Chatelier.",
              "Removing NH3 shifts the equilibrium which way?",
              "Combine the equilibrium shift with the effect of recycling."
            ],
            strategy: "Link the physical separation (boiling points) to the equilibrium consequence (removing a product shifts right), then add recycling for overall conversion."
          },
          {
            id: "chem-rates-bq4-06",
            question: "SYNOPTIC: The Contact process makes sulfur trioxide for sulfuric acid: 2SO2(g) + O2(g) ⇌ 2SO3(g)   ΔH = −196 kJ/mol. The conditions used are about 450 °C, a pressure of only 1–2 atm, and a vanadium(V) oxide catalyst.\n\n(a) Explain, using Le Chatelier's principle, why 450 °C is used rather than a much lower temperature. [3]\n(b) The equilibrium yield of SO3 is already about 98% at 1–2 atm. Use this fact to explain why a much higher pressure is not used, even though higher pressure would increase the yield. [3]",
            marks: 6,
            modelAnswer: "(a) The forward reaction is exothermic (ΔH = −196 kJ/mol), so Le Chatelier predicts that a lower temperature would shift the equilibrium to the right, giving a higher yield of SO3. However, at a low temperature the rate of reaction is too slow — few molecules have energy greater than or equal to the activation energy — so the process would be uneconomically slow. A temperature of about 450 °C is a compromise that gives an acceptable rate while still achieving a high yield.\n\n(b) There are 3 moles of gas on the left and 2 on the right, so higher pressure would shift the equilibrium to the right and increase the yield. However, the yield is already about 98% at only 1–2 atm, so increasing the pressure could only improve it by a very small amount. The extra cost and safety risk of building and running high-pressure equipment would not be justified by such a marginal gain, so a low pressure is used.",
            markScheme: [
              "Forward reaction exothermic → lower temperature gives higher yield (1)",
              "Low temperature gives a slow rate / few molecules with energy ≥ Ea (1)",
              "450 °C is a compromise between rate and yield (1)",
              "Higher pressure would shift equilibrium right (3 → 2 moles) increasing yield (1)",
              "Yield already ≈98% at 1–2 atm, so gain would be marginal (1)",
              "High-pressure plant is costly/dangerous; not justified for a small gain (1)"
            ],
            commonError: "Treating the Contact process pressure decision the same as the Haber process. Because the Contact yield is already near 98% at low pressure, high pressure is not worthwhile; in the Haber process the low yield justifies 200 atm.",
            guideRef: "The Haber Process",
            difficulty: "challenge",
            hints: [
              "Part (a): same rate-vs-yield compromise as the Haber process; use ΔH for the temperature.",
              "Part (b): count gas moles to confirm higher pressure would raise yield.",
              "If the yield is already 98%, how much more could pressure add?",
              "Weigh the marginal yield gain against the cost and risk of high pressure."
            ],
            strategy: "Transfer the Haber reasoning to a new process, but use the given yield figure (98%) to justify why high pressure is not worthwhile here."
          },
          {
            id: "chem-rates-bq4-07",
            question: "SYNOPTIC: Compare the choice of operating pressure in the Haber process (about 200 atm) with that in the Contact process (about 1–2 atm). Explain why such different pressures are chosen, referring to the equilibrium yield in each case.",
            marks: 6,
            modelAnswer: "In both processes, increasing the pressure shifts the equilibrium toward the side with fewer moles of gas, increasing the yield. In the Haber process (N2 + 3H2 ⇌ 2NH3, 4 moles → 2 moles) the equilibrium yield of ammonia is low — only about 15–25% even at 200 atm — so a high pressure is needed to push the yield up to an economic level; the benefit of high pressure outweighs its cost. In the Contact process (2SO2 + O2 ⇌ 2SO3, 3 moles → 2 moles) the yield of SO3 is already about 98% at only 1–2 atm, so there is very little extra yield to gain from high pressure. The high cost and safety risk of high-pressure equipment is therefore not justified for the Contact process, so a low pressure is used. The difference in chosen pressure reflects the very different starting yields: high pressure is worthwhile only when it brings a worthwhile increase in yield.",
            markScheme: [
              "Both: higher pressure shifts equilibrium toward fewer gas moles, raising yield (1)",
              "Haber: 4 → 2 moles of gas (1)",
              "Haber yield low (≈15–25%) so high pressure needed / worthwhile (1)",
              "Contact: 3 → 2 moles of gas (1)",
              "Contact yield already ≈98% at low pressure (1)",
              "High pressure not justified for Contact (cost/safety vs marginal gain); conclusion linking pressure choice to starting yield (1)"
            ],
            commonError: "Comparing only the mole ratios. The key reason is the very different equilibrium yields at low pressure (low for Haber, high for Contact), which determine whether high pressure is worth its cost.",
            guideRef: "The Haber Process",
            difficulty: "challenge",
            hints: [
              "State the common principle first (pressure → fewer gas moles → higher yield).",
              "Give the mole change for each process.",
              "State the equilibrium yield for each at the chosen pressure.",
              "Explain that high pressure is only worthwhile when the yield gain justifies the cost."
            ],
            strategy: "Comparison questions: state the shared principle, then contrast the two cases with specific figures, ending with the deciding factor (here, the yield available at low pressure)."
          },
          {
            id: "chem-rates-bq4-08",
            question: "The vanadium(V) oxide catalyst in the Contact process can be 'poisoned' by impurities such as arsenic compounds in the gas feed.\n\n(a) Explain what 'poisoning' a catalyst means and how it affects the process. [3]\n(b) Suggest two ways the impact of catalyst poisoning could be reduced. [2]",
            marks: 5,
            modelAnswer: "(a) Poisoning means that an impurity binds to the surface of the catalyst (or blocks its active sites), reducing the catalyst's activity. With less effective catalyst, the alternative low-activation-energy pathway is less available, so the rate of reaction falls and equilibrium is reached more slowly. This lowers the throughput of the plant and increases costs.\n\n(b) Any two of: purify the gas feed before it enters the reactor to remove the impurities (e.g. remove arsenic compounds); periodically regenerate or replace the catalyst; use guard beds/filters to trap poisons before the catalyst.",
            markScheme: [
              "Poison binds to / blocks the catalyst surface or active sites (1)",
              "Reduces catalyst activity → slower rate / equilibrium reached more slowly (1)",
              "Lowers throughput / increases cost (1)",
              "First mitigation: purify the feed gas / remove impurities (1)",
              "Second mitigation: regenerate or replace catalyst / use a guard bed (1)"
            ],
            commonError: "Saying poisoning 'changes the equilibrium yield'. A poisoned catalyst only slows the rate; it does not change the position of equilibrium.",
            guideRef: "The Haber Process",
            difficulty: "core",
            hints: [
              "What does a poison do to the active surface of the catalyst?",
              "If the catalyst is less active, what happens to the rate?",
              "Does poisoning change the yield or just the rate?",
              "Part (b): think about cleaning the feed and maintaining the catalyst."
            ]
          },
          {
            id: "chem-rates-bq4-09",
            question: "SYNOPTIC CALCULATION: In a Haber process reactor, 1.0 mol of N2 and 3.0 mol of H2 are mixed. At equilibrium, 0.40 mol of N2 has reacted.\n\n(a) Write the amounts (in mol) of N2, H2 and NH3 present at equilibrium. [3]\n(b) Calculate the percentage of nitrogen that has been converted. [1]\n(c) Explain why, in industry, this single-pass conversion is acceptable even though it is well below 100%. [2]",
            marks: 6,
            modelAnswer: "(a) N2 reacted = 0.40 mol, so N2 remaining = 1.0 − 0.40 = 0.60 mol. From the equation N2 + 3H2 ⇌ 2NH3: H2 reacted = 3 × 0.40 = 1.20 mol, so H2 remaining = 3.0 − 1.20 = 1.80 mol. NH3 formed = 2 × 0.40 = 0.80 mol.\n\n(b) Percentage of nitrogen converted = (0.40 ÷ 1.0) × 100 = 40%.\n\n(c) Although only 40% is converted in a single pass, the unreacted nitrogen and hydrogen are separated from the ammonia and recycled back into the reactor. Over many passes, almost all of the raw materials are eventually converted, so the overall conversion is high and the process is economical.",
            markScheme: [
              "N2 remaining = 1.0 − 0.40 = 0.60 mol (1)",
              "H2 remaining = 3.0 − (3 × 0.40) = 1.80 mol (1)",
              "NH3 formed = 2 × 0.40 = 0.80 mol (1)",
              "Conversion = (0.40 ÷ 1.0) × 100 = 40% (1)",
              "Unreacted gases recycled (1)",
              "Over many passes nearly all is converted → economical (1)"
            ],
            commonError: "Forgetting the stoichiometric ratios when finding H2 reacted (3 × N2 reacted) and NH3 formed (2 × N2 reacted).",
            guideRef: "The Haber Process",
            difficulty: "challenge",
            hints: [
              "Use the 1 : 3 : 2 ratio of N2 : H2 : NH3.",
              "H2 reacted = 3 × (N2 reacted); NH3 formed = 2 × (N2 reacted).",
              "Subtract the amounts reacted from the starting amounts.",
              "Part (b): conversion = (N2 reacted ÷ N2 start) × 100."
            ],
            strategy: "Set up an amounts table using the equation ratios; reacted N2 fixes the reacted H2 and the NH3 formed.",
            solutions: [
              {
                label: "Equilibrium amounts and conversion",
                steps: [
                  "N2 reacted = 0.40 mol → N2 left = 1.0 − 0.40 = 0.60 mol",
                  "H2 reacted = 3 × 0.40 = 1.20 mol → H2 left = 3.0 − 1.20 = 1.80 mol",
                  "NH3 formed = 2 × 0.40 = 0.80 mol",
                  "Conversion of N2 = (0.40 ÷ 1.0) × 100 = 40%"
                ]
              }
            ]
          },
          {
            id: "chem-rates-bq4-10",
            question: "SYNOPTIC EVALUATION: An engineer suggests running the Haber process at 250 °C and 600 atm to maximise the yield of ammonia. Evaluate this suggestion, discussing yield, rate, cost and safety, and state what conditions are actually used and why.",
            marks: 6,
            modelAnswer: "Lowering the temperature to 250 °C would increase the equilibrium yield of ammonia, because the forward reaction is exothermic and Le Chatelier favours the forward direction at lower temperature. Raising the pressure to 600 atm would also increase the yield, because the equilibrium shifts toward the 2 moles of gas (NH3) at higher pressure. So in terms of yield alone, the engineer is correct.\n\nHowever, at 250 °C the rate of reaction would be much slower, because fewer molecules have energy greater than or equal to the activation energy; even with the iron catalyst, it would take too long to produce ammonia economically. At 600 atm the equipment would need to be far stronger and more expensive, and the risk of leaks or explosion would be much greater. The extra yield would not justify these costs and dangers.\n\nIn practice, the Haber process uses about 450 °C and about 200 atm with an iron catalyst. These are a compromise: 450 °C gives an acceptable yield at an economically acceptable rate, and 200 atm gives a good yield at a manageable cost and safety risk. Therefore the engineer's suggestion improves the yield on paper but is not practical, and the actual milder conditions are preferred.",
            markScheme: [
              "250 °C raises yield (exothermic forward reaction) (1)",
              "600 atm raises yield (shift toward fewer gas moles / 2 mol NH3) (1)",
              "250 °C gives too slow a rate (few molecules with energy ≥ Ea) (1)",
              "600 atm is too costly / dangerous (1)",
              "Actual conditions ~450 °C and ~200 atm with iron catalyst (1)",
              "Conclusion: these are a compromise between yield, rate, cost and safety (1)"
            ],
            commonError: "Evaluating only the yield benefit and concluding the engineer is right. A full evaluation must weigh rate, cost and safety against the yield and reach a justified conclusion.",
            guideRef: "The Haber Process",
            difficulty: "challenge",
            hints: [
              "First decide whether the suggestion would actually raise the yield (use ΔH and mole counts).",
              "Then identify the problems: what does 250 °C do to the rate?",
              "What does 600 atm do to cost and safety?",
              "End by stating the actual conditions and why they are a compromise."
            ],
            strategy: "Evaluation: concede the point that is correct (yield), then bring in the counter-considerations (rate, cost, safety), and finish with the real-world conditions and a reasoned conclusion."
          }
        ]
      }
    ]
  }
};
