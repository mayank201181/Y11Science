import type { Topic } from "../types";

export const chemParticles: Topic = {
  id: "chem-particles",
  title: "States of Matter & Particles",
  subject: "chemistry",
  icon: "❄️",
  blurb: "Kinetic particle theory, changes of state, heating curves and diffusion.",
  intro: "Everything around us is made of particles in constant motion — the key insight of kinetic particle theory. By understanding how particles are arranged, separated and moving in solids, liquids and gases, we can explain melting, boiling, evaporation, sublimation and diffusion, and read the story hidden inside a heating or cooling curve.",

  guide: [
    {
      heading: "The Three States of Matter",
      body: `All matter exists in one of three states: **solid**, **liquid** or **gas**. Their bulk properties — shape, volume, compressibility — follow directly from the arrangement and motion of their particles.

**Solid** particles are packed in a regular, ordered lattice. They vibrate about fixed positions but cannot move past one another. Result: a definite shape, a definite volume, and virtually no compressibility.

**Liquid** particles are close together but disordered. They can slide past one another and move randomly within the bulk. Result: no fixed shape (takes the shape of the container), a definite volume, and very low compressibility.

**Gas** particles are widely separated, moving rapidly and randomly in all directions with negligible forces between them. Result: no fixed shape, no fixed volume (fills the container), and high compressibility because there is a lot of empty space between particles.

- The density order solid > liquid >> gas arises because gases have far more space between particles.
- Compressibility of gases: you can squeeze a gas into a smaller volume because there is mostly empty space between particles.
- Liquids and solids are almost incompressible because particles are already touching.`,
      diagrams: [
        {
          caption: "Particle arrangement in the three states of matter",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Particle arrangements in solid, liquid and gas">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- SOLID -->
  <text x="53" y="18" text-anchor="middle" font-size="11" fill="#38bdf8" font-family="sans-serif">SOLID</text>
  <rect x="8" y="24" width="90" height="90" rx="4" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
  <circle cx="26" cy="42" r="8" fill="#38bdf8" opacity="0.85"/>
  <circle cx="53" cy="42" r="8" fill="#38bdf8" opacity="0.85"/>
  <circle cx="80" cy="42" r="8" fill="#38bdf8" opacity="0.85"/>
  <circle cx="26" cy="69" r="8" fill="#38bdf8" opacity="0.85"/>
  <circle cx="53" cy="69" r="8" fill="#38bdf8" opacity="0.85"/>
  <circle cx="80" cy="69" r="8" fill="#38bdf8" opacity="0.85"/>
  <circle cx="26" cy="96" r="8" fill="#38bdf8" opacity="0.85"/>
  <circle cx="53" cy="96" r="8" fill="#38bdf8" opacity="0.85"/>
  <circle cx="80" cy="96" r="8" fill="#38bdf8" opacity="0.85"/>
  <text x="53" y="128" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif">Regular lattice</text>
  <text x="53" y="140" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif">vibrate in place</text>
  <!-- LIQUID -->
  <text x="160" y="18" text-anchor="middle" font-size="11" fill="#34d399" font-family="sans-serif">LIQUID</text>
  <rect x="115" y="24" width="90" height="90" rx="4" fill="none" stroke="#34d399" stroke-width="1.5"/>
  <circle cx="130" cy="46" r="8" fill="#34d399" opacity="0.85"/>
  <circle cx="157" cy="36" r="8" fill="#34d399" opacity="0.85"/>
  <circle cx="182" cy="50" r="8" fill="#34d399" opacity="0.85"/>
  <circle cx="135" cy="72" r="8" fill="#34d399" opacity="0.85"/>
  <circle cx="162" cy="68" r="8" fill="#34d399" opacity="0.85"/>
  <circle cx="185" cy="78" r="8" fill="#34d399" opacity="0.85"/>
  <circle cx="128" cy="97" r="8" fill="#34d399" opacity="0.85"/>
  <circle cx="155" cy="95" r="8" fill="#34d399" opacity="0.85"/>
  <circle cx="181" cy="100" r="8" fill="#34d399" opacity="0.85"/>
  <text x="160" y="128" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif">Close, disordered</text>
  <text x="160" y="140" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif">slide past each other</text>
  <!-- GAS -->
  <text x="267" y="18" text-anchor="middle" font-size="11" fill="#fbbf24" font-family="sans-serif">GAS</text>
  <rect x="222" y="24" width="90" height="90" rx="4" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <circle cx="238" cy="40" r="7" fill="#fbbf24" opacity="0.85"/>
  <circle cx="295" cy="55" r="7" fill="#fbbf24" opacity="0.85"/>
  <circle cx="248" cy="88" r="7" fill="#fbbf24" opacity="0.85"/>
  <circle cx="300" cy="100" r="7" fill="#fbbf24" opacity="0.85"/>
  <circle cx="262" cy="60" r="7" fill="#fbbf24" opacity="0.85"/>
  <text x="267" y="128" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif">Widely separated</text>
  <text x="267" y="140" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif">fast random motion</text>
  <!-- Legend -->
  <text x="160" y="165" text-anchor="middle" font-size="10" fill="#eef0ff" font-family="sans-serif">Density: solid > liquid >> gas</text>
  <text x="160" y="180" text-anchor="middle" font-size="10" fill="#eef0ff" font-family="sans-serif">Compressibility: gas >> liquid ≈ solid</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Solids have a fixed shape and volume; particles vibrate in a regular lattice.",
        "Liquids have a fixed volume but no fixed shape; particles slide past each other.",
        "Gases have no fixed shape or volume; particles move rapidly and are widely separated.",
        "Gases are compressible because there is a large amount of empty space between particles.",
        "Density order: solid > liquid >> gas (gas particles are much more spread out).",
      ],
      discovery: {
        problem: "A bicycle tyre can be pumped harder and harder without the tyre bursting immediately. Why can you add more and more air into the same volume, but you cannot do the same with water?",
        idea: "Gas particles are already far apart with large empty spaces between them, so they can be forced closer together (compressed). Water molecules are already touching their neighbours, so there is almost no space to reduce — the liquid is essentially incompressible.",
      },
      whyItWorks: "The kinetic particle model treats particles as hard spheres with negligible volume compared to the space between them (especially in gases). Forces between gas particles are negligible at normal conditions, so the only thing resisting compression is the kinetic energy of the particles themselves — and you can overcome that by applying pressure.",
    },
    {
      heading: "Changes of State",
      body: `A **change of state** occurs when a substance changes from one state to another. The main changes are:

- **Melting**: solid → liquid (requires energy input; occurs at the melting point).
- **Freezing** (solidification): liquid → solid (releases energy; occurs at the freezing point, which equals the melting point for a pure substance).
- **Boiling**: liquid → gas throughout the bulk liquid (requires energy input at a specific temperature and pressure — the boiling point).
- **Evaporation**: liquid → gas at the surface only, at *any* temperature below the boiling point.
- **Condensation**: gas → liquid (releases energy; the reverse of boiling/evaporation).
- **Sublimation**: solid → gas directly, without passing through the liquid state (e.g. iodine, dry ice / solid CO₂).
- **Deposition** (sometimes called desublimation): gas → solid directly, without passing through the liquid state — the reverse of sublimation (e.g. iodine vapour re-forming shiny crystals on a cool surface; frost forming directly from water vapour).

**Endothermic and exothermic changes of state**
The six changes split neatly by their energy direction:
- *Energy absorbed (endothermic)*: melting, boiling, evaporation and sublimation — forces between particles are broken or weakened, so energy must be put **in**.
- *Energy released (exothermic)*: freezing, condensation and deposition — forces between particles re-form, so energy is given **out** to the surroundings.

**Energy and changes of state**
During a change of state, energy is used to **break or weaken the forces between particles** (intermolecular forces), *not* to raise the temperature. This is why temperature stays constant during melting and boiling even though energy is being supplied. The energy supplied during melting is called the **latent heat of fusion**; during boiling it is the **latent heat of vaporisation**.

**Particle view**
- Melting: vibrating solid particles gain enough energy to break free from lattice positions and slide past each other.
- Boiling: surface and bulk liquid particles gain enough energy to overcome intermolecular forces completely and escape as gas.
- Evaporation: only the fastest-moving surface particles have enough energy to escape; the slower ones stay behind, so the *average* kinetic energy of the remaining liquid falls → the liquid cools.`,
      keyPoints: [
        "During a change of state, temperature remains constant because energy goes into breaking forces between particles, not raising KE.",
        "Melting point and freezing point of a pure substance are the same temperature.",
        "Boiling occurs throughout the liquid at a fixed temperature; evaporation occurs only at the surface at any temperature.",
        "Evaporation causes cooling because the higher-energy particles escape, leaving behind lower-energy (cooler) particles.",
        "Sublimation is solid → gas directly (e.g. iodine, dry ice); deposition is the reverse, gas → solid directly.",
        "Melting, boiling, evaporation and sublimation are endothermic (absorb energy); freezing, condensation and deposition are exothermic (release energy).",
      ],
      thinkDeeper: "Sweating cools the body because the water on skin surface evaporates. The fastest water molecules escape, taking away energy — this is exactly kinetic particle theory in action. Can you explain why blowing on wet skin makes you feel colder?",
      whyItWorks: "Forces between particles (intermolecular forces) store potential energy. Breaking those forces requires energy input — which is why latent heat is absorbed on melting and boiling. Forming those forces releases that same energy — which is why condensation and freezing are exothermic.",
    },
    {
      heading: "Heating and Cooling Curves",
      body: `A **heating curve** shows temperature against time when a pure substance is heated at a constant rate. A **cooling curve** is the reverse.

**Key features of a heating curve**
1. **Rising slope (solid)**: Temperature increases as solid particles gain kinetic energy and vibrate more.
2. **Flat plateau at melting point**: Temperature is constant. Energy goes into breaking lattice forces (melting), not raising temperature. The substance exists as both solid and liquid here.
3. **Rising slope (liquid)**: Temperature increases as liquid particles gain kinetic energy.
4. **Flat plateau at boiling point**: Temperature is constant. Energy goes into breaking intermolecular forces completely (boiling), not raising temperature. The substance exists as both liquid and gas here.
5. **Rising slope (gas)**: Temperature increases as gas particles gain kinetic energy.

**Why is the boiling plateau longer than the melting plateau?**
More energy is needed to fully separate particles from liquid to gas (overcoming all intermolecular forces) than to partially free them from the solid lattice to the liquid state.

**Cooling curves** are the mirror image: plateaus appear at the same temperatures (boiling point and melting point) as energy is *released* when forces reform.

A **pure substance** gives sharp, flat plateaus. An **impure substance** or mixture shows a sloped, blurred transition — this is used to test purity.`,
      diagrams: [
        {
          caption: "Heating curve for a pure substance — temperature vs time",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Heating curve showing melting and boiling plateaus for a pure substance">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Axes -->
  <line x1="40" y1="170" x2="300" y2="170" stroke="#b7bce0" stroke-width="1.5"/>
  <line x1="40" y1="20" x2="40" y2="170" stroke="#b7bce0" stroke-width="1.5"/>
  <text x="170" y="190" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="sans-serif">Time (constant heating)</text>
  <text x="12" y="95" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="sans-serif" transform="rotate(-90,12,95)">Temperature</text>
  <!-- Curve segments -->
  <!-- Solid rising -->
  <line x1="40" y1="155" x2="80" y2="125" stroke="#38bdf8" stroke-width="2.5"/>
  <!-- Melting plateau -->
  <line x1="80" y1="125" x2="130" y2="125" stroke="#a78bfa" stroke-width="2.5"/>
  <!-- Liquid rising -->
  <line x1="130" y1="125" x2="185" y2="75" stroke="#34d399" stroke-width="2.5"/>
  <!-- Boiling plateau -->
  <line x1="185" y1="75" x2="255" y2="75" stroke="#fb7185" stroke-width="2.5"/>
  <!-- Gas rising -->
  <line x1="255" y1="75" x2="295" y2="45" stroke="#fbbf24" stroke-width="2.5"/>
  <!-- Labels -->
  <text x="60" y="155" font-size="9" fill="#38bdf8" font-family="sans-serif">Solid</text>
  <text x="90" y="118" font-size="9" fill="#a78bfa" font-family="sans-serif">Melting point (both S+L)</text>
  <text x="140" y="105" font-size="9" fill="#34d399" font-family="sans-serif">Liquid</text>
  <text x="190" y="68" font-size="9" fill="#fb7185" font-family="sans-serif">Boiling point (both L+G)</text>
  <text x="258" y="55" font-size="9" fill="#fbbf24" font-family="sans-serif">Gas</text>
  <!-- MP dashed line -->
  <line x1="40" y1="125" x2="80" y2="125" stroke="#a78bfa" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="36" y="129" text-anchor="end" font-size="8" fill="#a78bfa" font-family="sans-serif">MP</text>
  <!-- BP dashed line -->
  <line x1="40" y1="75" x2="185" y2="75" stroke="#fb7185" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="36" y="79" text-anchor="end" font-size="8" fill="#fb7185" font-family="sans-serif">BP</text>
  <!-- Note -->
  <text x="160" y="185" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">Flat plateaus = constant T during change of state</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Flat (horizontal) plateaus on a heating curve occur at the melting point and boiling point.",
        "During a plateau, temperature does not change because energy breaks intermolecular forces rather than raising kinetic energy.",
        "The boiling plateau is longer than the melting plateau because more energy is needed to fully separate particles.",
        "Pure substances have sharp, flat plateaus; impure substances show sloped transitions.",
        "Cooling curves are the mirror image, with plateaus at the same temperatures.",
      ],
      discovery: {
        problem: "You heat a beaker of pure ice and record temperature every 30 seconds. Sketch the shape of the temperature-time graph you expect. Where do flat sections appear, and why?",
        idea: "Flat sections appear at 0 °C (melting) and 100 °C (boiling) for water at standard pressure. At these plateaus, energy input breaks/weakens intermolecular forces, so kinetic energy (and therefore temperature) does not rise until all particles have changed state.",
      },
    },
    {
      heading: "The Effect of Temperature and Pressure on Gases",
      body: `The kinetic particle model predicts how gases respond to changes in temperature and pressure.

**Temperature and gas pressure (at constant volume)**
Increasing temperature → particles move faster (higher kinetic energy) → they hit the walls of the container more often and with greater force → **pressure increases**.

Decreasing temperature → slower particles → fewer, softer collisions → **pressure decreases**.

**Temperature and gas volume (at constant pressure)**
If pressure is kept constant and temperature rises, the gas must expand (volume increases) to maintain the same pressure — particles are hitting harder, so the container must get bigger to keep the hit-frequency and force per unit area constant.

**Pressure and gas volume (at constant temperature)**
Increasing pressure on a fixed amount of gas compresses it → **volume decreases** (Boyle's law qualitatively: pressure and volume are inversely proportional at constant temperature).

Decreasing pressure → gas expands → **volume increases**.

**Summary table**

| Change | Effect on pressure | Effect on volume |
|---|---|---|
| Temperature ↑ (constant V) | Pressure ↑ | — |
| Temperature ↑ (constant P) | — | Volume ↑ |
| Pressure ↑ (constant T) | — | Volume ↓ |

All these effects are explained by the frequency and force of particle collisions with container walls.`,
      keyPoints: [
        "Increasing temperature increases gas pressure (at constant volume) because particles move faster and collide harder and more often.",
        "Increasing temperature increases gas volume (at constant pressure) because the gas must expand to maintain pressure.",
        "Increasing pressure decreases gas volume (at constant temperature) — particles are forced closer together.",
        "All gas behaviour is explained by the frequency and force of particle collisions with the container walls.",
        "At IGCSE, these relationships are qualitative (no calculations with PV = nRT required at IGCSE).",
      ],
      strategies: ["particle collision model", "cause-and-effect reasoning"],
      whyItWorks: "Gas pressure arises because particles constantly bombard the container walls. Any factor that increases collision frequency or collision force (temperature) or reduces the area/volume over which those forces act (compression) will increase the measured pressure.",
    },
    {
      heading: "Diffusion",
      body: `**Diffusion** is the net movement of particles from a region of **higher concentration** to a region of **lower concentration**, down a concentration gradient, as a result of their random motion. It continues until the concentration is uniform throughout.

Diffusion is evidence that particles are in **constant, random motion** — even in liquids and gases that look still.

**Classic demonstrations**
- **Bromine gas** in air: a brown gas placed at the bottom of a gas jar and connected to a gas jar of air — the brown colour spreads upward as bromine molecules diffuse into the air.
- **Potassium manganate(VII)** (potassium permanganate) crystals in water: a purple colour slowly spreads through the water as KMnO₄ ions diffuse.

**Factors affecting the rate of diffusion**

1. **Relative molecular mass (Mr)**: lighter molecules diffuse faster. By Graham's law, rate ∝ 1/√Mr. At the same temperature, lighter molecules move faster on average, so they spread more quickly.
2. **Temperature**: higher temperature → greater kinetic energy → faster particle motion → faster diffusion.
3. **Concentration gradient**: steeper gradient → faster net movement (not specifically a rate-of-spread factor in IGCSE, but conceptually important).

**The ammonia–hydrochloric acid gas-tube experiment**
A long glass tube has a pad of cotton wool soaked in concentrated aqueous ammonia (NH₃) at one end and a pad soaked in concentrated hydrochloric acid (HCl) at the other. Both substances release vapour that diffuses along the tube. When NH₃(g) and HCl(g) meet they react:

NH₃(g) + HCl(g) → NH₄Cl(s)

A **white ring of ammonium chloride** (NH₄Cl) forms inside the tube. Because NH₃ molecules are lighter (Mr = 17) than HCl molecules (Mr = 36.5), NH₃ diffuses faster and travels further before the two gases meet. The white ring therefore forms **closer to the HCl end**.

**Brownian motion**
Under a microscope, tiny visible specks suspended in a fluid — smoke particles in air, or pollen grains in water — are seen to move in a continuous, random, jerky path. This is **Brownian motion**. The visible specks are far too big to be molecules; instead they are being constantly bombarded on all sides by the much smaller, fast-moving, *invisible* molecules of the surrounding gas or liquid. Because the bombardment is uneven and random from moment to moment, the speck is knocked first one way and then another.

Brownian motion is powerful evidence for kinetic particle theory because it shows that the surrounding molecules must be (i) very small, (ii) moving fast, and (iii) in constant random motion — exactly what the model assumes. It complements diffusion as direct evidence that particles move on their own.`,
      diagrams: [
        {
          caption: "Ammonia-HCl tube experiment — white ring forms nearer the HCl end",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Glass tube experiment showing ammonia diffusing faster than HCl, white ring of ammonium chloride forming closer to HCl end">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Tube outline -->
  <rect x="20" y="80" width="280" height="40" rx="8" fill="none" stroke="#b7bce0" stroke-width="2"/>
  <!-- NH3 cotton wool pad (left) -->
  <rect x="20" y="80" width="22" height="40" rx="4" fill="#34d399" opacity="0.7"/>
  <text x="31" y="75" text-anchor="middle" font-size="9" fill="#34d399" font-family="sans-serif">NH3</text>
  <text x="31" y="135" text-anchor="middle" font-size="8" fill="#34d399" font-family="sans-serif">Mr=17</text>
  <!-- HCl cotton wool pad (right) -->
  <rect x="278" y="80" width="22" height="40" rx="4" fill="#fb7185" opacity="0.7"/>
  <text x="289" y="75" text-anchor="middle" font-size="9" fill="#fb7185" font-family="sans-serif">HCl</text>
  <text x="289" y="135" text-anchor="middle" font-size="8" fill="#fb7185" font-family="sans-serif">Mr=36.5</text>
  <!-- NH3 diffusion arrow (longer, going right) -->
  <line x1="42" y1="100" x2="185" y2="100" stroke="#34d399" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arrowG)"/>
  <!-- HCl diffusion arrow (shorter, going left) -->
  <line x1="278" y1="100" x2="195" y2="100" stroke="#fb7185" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arrowR)"/>
  <!-- Arrowheads -->
  <defs>
    <marker id="arrowG" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#34d399"/>
    </marker>
    <marker id="arrowR" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto">
      <path d="M8,0 L8,6 L0,3 z" fill="#fb7185"/>
    </marker>
  </defs>
  <!-- White ring -->
  <rect x="186" y="82" width="10" height="36" rx="3" fill="#eef0ff" opacity="0.9"/>
  <text x="191" y="72" text-anchor="middle" font-size="8" fill="#eef0ff" font-family="sans-serif">NH4Cl</text>
  <text x="191" y="62" text-anchor="middle" font-size="8" fill="#eef0ff" font-family="sans-serif">white ring</text>
  <!-- Distance labels -->
  <line x1="42" y1="148" x2="186" y2="148" stroke="#34d399" stroke-width="1"/>
  <text x="114" y="160" text-anchor="middle" font-size="8" fill="#34d399" font-family="sans-serif">NH3 travels further</text>
  <line x1="196" y1="148" x2="278" y2="148" stroke="#fb7185" stroke-width="1"/>
  <text x="237" y="160" text-anchor="middle" font-size="8" fill="#fb7185" font-family="sans-serif">HCl travels less</text>
  <!-- Caption -->
  <text x="160" y="185" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif">NH3 (Mr 17) diffuses faster than HCl (Mr 36.5)</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Diffusion is net movement of particles from high to low concentration due to random motion.",
        "Lighter molecules (lower Mr) diffuse faster at the same temperature.",
        "Higher temperature increases the rate of diffusion.",
        "In the NH₃/HCl tube, the white ring of NH₄Cl forms nearer the HCl end because NH₃ (Mr 17) diffuses faster than HCl (Mr 36.5).",
        "Diffusion in liquids is much slower than in gases because particles are closer and have more collisions.",
        "Brownian motion (random jiggling of smoke/pollen specks) is evidence that the surrounding molecules are small, fast and in constant random motion.",
      ],
      thinkDeeper: "Graham's law states that the rate of diffusion is inversely proportional to the square root of the molar mass: rate ∝ 1/√Mr. Using this, the ratio of diffusion speeds of NH₃ to HCl is √36.5/√17 ≈ 1.47. So NH₃ travels about 1.5× as far before they meet — which is consistent with where the ring actually appears. Can you use this to predict where the ring would form in a 60 cm tube?",
      discovery: {
        problem: "Two gas jars are connected: one contains brown bromine gas and the other contains air. Both jars are sealed with a glass plate between them. When the plate is removed, what do you predict will happen, and why?",
        idea: "The brown colour gradually spreads upward into the air jar and fades in the bromine jar until both jars are uniformly pale brown. This happens because bromine molecules (and air molecules) are in constant random motion and diffuse down their respective concentration gradients until concentrations equalise.",
      },
      strategies: ["Mr comparison", "relative speed reasoning", "gradient direction"],
      whyItWorks: "At a given temperature, all gas molecules have the same average kinetic energy (½mv² = constant). So lighter molecules (smaller m) must have larger average speed v. Faster molecules spread through space more quickly, giving a higher rate of diffusion. This is the molecular-level basis of Graham's law.",
    },
    {
      heading: "Dissolving and Solutions",
      body: `When a soluble solid is added to a liquid, it can **dissolve** to form a **solution**. The vocabulary matters in the exam:

- **Solute**: the substance that dissolves (e.g. the salt or sugar).
- **Solvent**: the liquid it dissolves in (e.g. water).
- **Solution**: the uniform mixture formed (solute + solvent).
- **Soluble**: a substance that *will* dissolve in a particular solvent. **Insoluble**: one that will not.
- **Aqueous solution**: a solution in which the solvent is water (state symbol *(aq)*).

**What happens to the particles?**
The solute particles separate from one another and spread out, mixing evenly among the solvent particles by random motion. The solution that forms looks the same throughout — you cannot see the solute, but it has *not* disappeared. **Mass is conserved**: the mass of the solution equals the mass of solute plus the mass of solvent. A solution is transparent (you can see through it), although it may be coloured.

**Saturation**
There is a limit to how much solute a given amount of solvent can dissolve at a particular temperature. A **saturated solution** is one that contains as much dissolved solute as it can hold at that temperature — any extra solute simply stays undissolved. Raising the temperature usually lets the solvent dissolve *more* solute, which is why a hot drink dissolves sugar more readily than a cold one.

**Why dissolving is not a change of state**
Dissolving is a *physical change*: no new substance is made, and the solute can usually be recovered by evaporating off the solvent. It is mixing at the particle level, driven by the same random motion that causes diffusion.`,
      keyPoints: [
        "Solute dissolves in a solvent to form a solution; a water solvent gives an aqueous (aq) solution.",
        "Dissolving spreads solute particles evenly among solvent particles by random motion — the solute is not destroyed.",
        "Mass is conserved: mass of solution = mass of solute + mass of solvent.",
        "A saturated solution holds the maximum solute it can at a given temperature; higher temperature usually dissolves more.",
        "Dissolving is a physical change — the solute can be recovered by evaporating the solvent.",
      ],
      discovery: {
        problem: "10 g of salt is stirred into 100 g of water until it all disappears and the liquid looks clear. A student says 'the salt has been destroyed, so the solution must weigh less than 110 g.' Are they right?",
        idea: "No. The salt particles have only spread out and mixed evenly among the water particles — they are still there, just too small and too dispersed to see. Mass is conserved, so the solution weighs 110 g. Evaporating the water would leave the 10 g of salt behind.",
      },
      strategies: ["conservation of mass", "particle mixing reasoning"],
      whyItWorks: "Dissolving works because random particle motion lets solute and solvent particles intermingle, while attractions between solute and solvent particles make the mixed arrangement stable. Because no bonds within the solute are permanently changed into a new substance, the process is physical and reversible by evaporation.",
    },
  ],

  learn: {
    keyFacts: [
      "Solid particles are in a regular lattice, vibrate in fixed positions, giving a definite shape and volume.",
      "Liquid particles are close but disordered, can slide past each other — definite volume but no fixed shape.",
      "Gas particles are widely separated, moving rapidly in all directions — no fixed shape or volume, high compressibility.",
      "During a change of state, temperature stays constant because energy breaks intermolecular forces rather than raising kinetic energy.",
      "The boiling plateau on a heating curve is longer than the melting plateau because more energy is needed to fully separate particles.",
      "Evaporation cools the liquid because the fastest particles escape, lowering the average kinetic energy of those remaining.",
      "Sublimation is the direct change from solid to gas (e.g. iodine, dry ice); deposition is the reverse, gas to solid directly.",
      "Melting, boiling, evaporation and sublimation absorb energy (endothermic); freezing, condensation and deposition release energy (exothermic).",
      "Brownian motion — the random jerky movement of visible smoke or pollen specks — is caused by collisions with fast-moving invisible molecules, evidence for kinetic theory.",
      "Dissolving spreads solute particles evenly among solvent particles by random motion; mass is conserved (solution = solute + solvent) and the solute can be recovered by evaporation.",
      "A saturated solution holds the maximum solute it can at a given temperature; higher temperature usually dissolves more.",
      "Diffusion is the net movement of particles from high to low concentration due to random particle motion.",
      "In the NH₃/HCl tube experiment, the white ring of NH₄Cl forms nearer the HCl end because NH₃ (Mr 17) diffuses faster than HCl (Mr 36.5).",
      "Rate of diffusion increases with temperature and decreases with increasing relative molecular mass.",
    ],
    flashcards: [
      { front: "What property do solids have that liquids and gases do not?", back: "A definite (fixed) shape — solid particles are held in a regular lattice and can only vibrate, not move past one another." },
      { front: "Why are gases compressible but liquids are not?", back: "Gas particles are widely separated with large empty spaces between them; liquid particles are already close together, leaving almost no space to reduce." },
      { front: "What happens to temperature during melting?", back: "Temperature stays constant at the melting point. Energy input breaks lattice forces between particles rather than increasing kinetic energy." },
      { front: "What is the difference between boiling and evaporation?", back: "Boiling occurs throughout the liquid at a fixed temperature (boiling point); evaporation occurs only at the surface at any temperature below the boiling point." },
      { front: "Why does evaporation cause cooling?", back: "The highest-energy particles escape from the surface, so the average kinetic energy (and therefore temperature) of the remaining liquid falls." },
      { front: "What is sublimation?", back: "The direct change of state from solid to gas without passing through the liquid state (e.g. iodine, dry ice)." },
      { front: "What is deposition?", back: "The direct change of state from gas to solid without passing through the liquid state — the reverse of sublimation (e.g. frost forming from water vapour)." },
      { front: "Which changes of state are endothermic and which are exothermic?", back: "Endothermic (absorb energy): melting, boiling, evaporation, sublimation. Exothermic (release energy): freezing, condensation, deposition." },
      { front: "What causes Brownian motion?", back: "Visible particles (smoke/pollen) are knocked about by collisions with the much smaller, fast-moving, invisible molecules of the surrounding fluid, which hit them randomly from all sides." },
      { front: "Define solute, solvent and solution.", back: "Solute = the substance that dissolves; solvent = the liquid it dissolves in; solution = the uniform mixture of solute dissolved in solvent." },
      { front: "When salt dissolves in water, what happens to its mass?", back: "Mass is conserved — the salt particles spread out among the water particles but are not destroyed, so mass of solution = mass of solute + mass of solvent." },
      { front: "What is a saturated solution?", back: "A solution that contains as much dissolved solute as it can hold at that temperature; any extra solute stays undissolved. Heating usually lets more dissolve." },
      { front: "On a heating curve, why is the boiling plateau longer than the melting plateau?", back: "More energy (latent heat of vaporisation) is needed to fully separate particles from liquid to gas than to partially free them from the solid lattice during melting (latent heat of fusion)." },
      { front: "What is diffusion?", back: "The net movement of particles from a region of higher concentration to a region of lower concentration, as a result of their random motion, down a concentration gradient." },
      { front: "Why does NH₃ travel further than HCl in the gas-tube experiment?", back: "NH₃ has a lower relative molecular mass (Mr = 17) than HCl (Mr = 36.5), so NH₃ molecules move faster at the same temperature and diffuse at a greater rate." },
      { front: "What is the effect of increasing temperature on the rate of diffusion?", back: "Rate of diffusion increases because higher temperature gives particles greater kinetic energy, so they move faster and spread more quickly." },
      { front: "What white solid forms in the NH₃ + HCl tube experiment?", back: "Ammonium chloride, NH₄Cl — formed by the reaction NH₃(g) + HCl(g) → NH₄Cl(s)." },
      { front: "State two pieces of evidence for particle motion in liquids and gases.", back: "1. Diffusion (e.g. bromine spreading through air, KMnO₄ in water). 2. Brownian motion (random jiggling of pollen grains in water, caused by molecular impacts)." },
    ],
    keyTerms: [
      { term: "Kinetic particle theory", definition: "The model that describes matter as composed of particles in constant, random motion; the speed and energy of motion determines the state." },
      { term: "Diffusion", definition: "The net movement of particles from a region of higher concentration to a region of lower concentration due to random particle motion." },
      { term: "Melting point", definition: "The temperature at which a pure solid changes to a liquid; the same temperature as the freezing point." },
      { term: "Boiling point", definition: "The temperature at which a pure liquid changes to a gas throughout the bulk liquid at a given pressure." },
      { term: "Evaporation", definition: "The change of state from liquid to gas at the surface of a liquid, at temperatures below the boiling point." },
      { term: "Sublimation", definition: "The direct change of state from solid to gas without passing through the liquid state." },
      { term: "Deposition", definition: "The direct change of state from gas to solid without passing through the liquid state; the reverse of sublimation." },
      { term: "Brownian motion", definition: "The random, jerky movement of small visible particles (e.g. smoke or pollen) suspended in a fluid, caused by collisions with fast-moving invisible fluid molecules; evidence for kinetic particle theory." },
      { term: "Solute", definition: "The substance (often a solid) that dissolves in a solvent to form a solution." },
      { term: "Solvent", definition: "The liquid in which a solute dissolves (e.g. water in an aqueous solution)." },
      { term: "Solution", definition: "The uniform mixture formed when a solute dissolves in a solvent; transparent and the same throughout." },
      { term: "Saturated solution", definition: "A solution that contains the maximum amount of dissolved solute it can hold at a given temperature." },
      { term: "Latent heat", definition: "The energy absorbed or released during a change of state at constant temperature; used to break or form intermolecular forces." },
      { term: "Concentration gradient", definition: "The difference in concentration of a substance between two regions; particles diffuse from high to low concentration." },
      { term: "Relative molecular mass (Mr)", definition: "The mass of one molecule of a substance relative to 1/12 the mass of a carbon-12 atom; determines how fast molecules move at a given temperature." },
      { term: "Ammonium chloride", definition: "NH₄Cl; the white solid formed when ammonia gas and hydrogen chloride gas react: NH₃(g) + HCl(g) → NH₄Cl(s)." },
      { term: "Compressibility", definition: "The ability of a substance to be reduced in volume by applied pressure; gases are highly compressible, liquids and solids are not." },
      { term: "Intermolecular forces", definition: "Forces of attraction between molecules; broken during melting and boiling (requiring energy), and reformed during freezing and condensation (releasing energy)." },
    ],
  },

  quiz: {
    mcq: [
      {
        id: "chem-particles-mcq-q01",
        question: "Which row correctly describes the properties of a liquid?",
        options: [
          "Fixed shape, fixed volume, not compressible",
          "No fixed shape, fixed volume, not compressible",
          "No fixed shape, no fixed volume, compressible",
          "Fixed shape, no fixed volume, compressible",
        ],
        answerIndex: 1,
        explanation: "A liquid takes the shape of its container (no fixed shape) but has a definite volume because particles are close together. It is not compressible because particles are already in contact. Option A is solid; option C is gas.",
        guideRef: "The Three States of Matter",
        difficulty: "warmup",
      },
      {
        id: "chem-particles-mcq-q02",
        question: "During the melting of a pure solid, the temperature remains constant because the energy supplied is used to:",
        options: [
          "Increase the speed of the solid particles",
          "Break the forces between the particles",
          "Move the particles further apart in the gas phase",
          "Increase the pressure inside the solid",
        ],
        answerIndex: 1,
        explanation: "During melting, energy breaks (overcomes) the intermolecular forces holding particles in the solid lattice. The kinetic energy — and therefore temperature — does not increase until all the solid has melted.",
        guideRef: "Changes of State",
        difficulty: "core",
        hints: [
          "Temperature depends on average kinetic energy of particles.",
          "If temperature is not rising, kinetic energy is not increasing.",
          "Where is the energy going if not into kinetic energy?",
          "Think about what holds solid particles in fixed positions.",
        ],
      },
      {
        id: "chem-particles-mcq-q03",
        question: "A heating curve for a pure substance shows two flat sections. The LONGER flat section corresponds to:",
        options: [
          "Melting, because the solid lattice is very strong",
          "Boiling, because more energy is needed to fully separate particles",
          "Melting, because the temperature is lower",
          "Boiling, because the temperature is higher",
        ],
        answerIndex: 1,
        explanation: "The boiling plateau is longer because the latent heat of vaporisation is greater than the latent heat of fusion. More energy is required to completely overcome all intermolecular forces (liquid → gas) than to partially free particles from the lattice (solid → liquid).",
        guideRef: "Heating and Cooling Curves",
        difficulty: "core",
        hints: [
          "Compare the energy changes: melting vs boiling.",
          "In melting, particles are freed from fixed positions but still close together.",
          "In boiling, particles must be fully separated — all remaining intermolecular forces must be overcome.",
        ],
      },
      {
        id: "chem-particles-mcq-q04",
        question: "In the ammonia–hydrochloric acid tube experiment, the white ring of ammonium chloride forms closer to the hydrochloric acid end. This is because:",
        options: [
          "HCl is more reactive than NH₃",
          "NH₃ molecules have a smaller relative molecular mass and diffuse faster",
          "HCl molecules have a smaller relative molecular mass and diffuse faster",
          "NH₃ is denser than HCl gas",
        ],
        answerIndex: 1,
        explanation: "NH₃ has Mr = 17 and HCl has Mr = 36.5. Lighter molecules move faster at the same temperature (same average KE), so NH₃ diffuses faster and travels further along the tube before meeting HCl — the ring forms nearer the HCl end. Option C is incorrect: HCl is heavier, not lighter.",
        guideRef: "Diffusion",
        difficulty: "core",
        hints: [
          "Compare the relative molecular masses: NH₃ = 17, HCl = 36.5.",
          "At the same temperature, which molecules move faster?",
          "The gas that travels further is the one that meets the other closer to the opposite end.",
        ],
      },
      {
        id: "chem-particles-mcq-q05",
        question: "A sealed gas syringe is placed in a hot water bath. Which of the following correctly describes what happens and why?",
        options: [
          "The gas compresses; particles slow down and take up less space",
          "The gas expands; particles move faster and push the piston out",
          "The gas pressure decreases; particles hit the walls less often",
          "Nothing changes; temperature does not affect gas particles",
        ],
        answerIndex: 1,
        explanation: "Heating increases the kinetic energy of gas particles so they move faster. They hit the moveable piston with greater force and frequency, pushing it outward — the gas expands (at constant pressure, volume increases with temperature).",
        guideRef: "The Effect of Temperature and Pressure on Gases",
        difficulty: "warmup",
      },
      {
        id: "chem-particles-mcq-q06",
        question: "Why does evaporation cause the temperature of the remaining liquid to fall?",
        options: [
          "Evaporation requires heat from the surroundings, cooling the environment",
          "The fastest-moving particles escape, so the average kinetic energy of the remaining liquid decreases",
          "The liquid particles slow down when they reach the surface",
          "Condensation of water vapour above the liquid removes heat from the liquid",
        ],
        answerIndex: 1,
        explanation: "Only the most energetic (fastest-moving) particles at the surface have enough kinetic energy to overcome intermolecular forces and escape. Losing these high-energy particles lowers the average kinetic energy of those remaining — temperature is proportional to average kinetic energy, so the liquid cools.",
        guideRef: "Changes of State",
        difficulty: "core",
        hints: [
          "What does temperature measure at the particle level?",
          "Which particles are able to escape from a liquid surface?",
          "What happens to the average kinetic energy when the highest-energy particles are removed?",
        ],
      },
    ],
    qa: [
      {
        id: "chem-particles-qa-q01",
        question: "Describe and explain what happens to the particles when a solid is heated until it becomes a gas. Your answer should refer to the energy changes and the forces between particles at each stage.",
        marks: 6,
        modelAnswer: "When the solid is heated, particles vibrate with increasing kinetic energy. At the melting point, energy is absorbed to break the forces holding particles in fixed lattice positions; temperature remains constant during melting (latent heat of fusion absorbed). The particles can now slide past each other in the liquid state. Further heating raises the liquid particles' kinetic energy. At the boiling point, energy is absorbed to completely overcome all remaining intermolecular forces; temperature remains constant (latent heat of vaporisation absorbed). Particles escape into the gas phase and move rapidly and randomly in all directions with negligible forces between them.",
        markScheme: [
          "Solid particles vibrate / gain kinetic energy on heating (1)",
          "Temperature constant during melting / energy breaks forces between particles / latent heat absorbed (1)",
          "Liquid particles can slide past each other / disordered arrangement (1)",
          "Liquid particles gain kinetic energy on further heating (1)",
          "Temperature constant during boiling / energy completely overcomes intermolecular forces / latent heat of vaporisation absorbed (1)",
          "Gas particles move rapidly and randomly / widely separated / negligible intermolecular forces (1)",
        ],
        commonError: "Many students say temperature rises steadily throughout — they forget that plateaus occur because energy goes into breaking forces, not raising kinetic energy.",
        guideRef: "Changes of State",
        difficulty: "core",
        hints: [
          "Structure your answer in three stages: solid → melting → liquid → boiling → gas.",
          "At each plateau on the heating curve, ask yourself: where is the energy going?",
          "Use the phrase 'break/overcome intermolecular forces' rather than just 'melt'.",
          "Mention latent heat for each change of state.",
        ],
        strategy: "structured three-stage approach",
      },
      {
        id: "chem-particles-qa-q02",
        question: "A cotton-wool pad soaked in ammonia solution is placed at one end of a 60 cm horizontal glass tube, and a cotton-wool pad soaked in concentrated hydrochloric acid is placed at the other end. A white ring of ammonium chloride forms inside the tube after a few minutes.\n(a) Write a word equation for the reaction that produces ammonium chloride. [1]\n(b) Explain why the white ring forms closer to the hydrochloric acid end of the tube. [3]\n(c) Predict how the position of the white ring would change if the experiment were repeated at a higher temperature. Explain your prediction. [2]",
        marks: 6,
        modelAnswer: "(a) Ammonia + hydrogen chloride → ammonium chloride\n\n(b) Both NH₃ and HCl gases diffuse along the tube from their respective ends. NH₃ has a relative molecular mass of 17, whereas HCl has a relative molecular mass of 36.5. Because NH₃ molecules are lighter, they move faster at the same temperature and therefore diffuse at a greater rate. NH₃ travels further along the tube before meeting HCl, so the ring forms closer to the HCl end.\n\n(c) At higher temperature, both gases diffuse faster. However, the position of the ring would not change significantly — NH₃ still has a lower Mr than HCl and is still faster by the same factor (√36.5/√17 ≈ 1.47). The ring would form more quickly but at approximately the same position (about 60% of the way from the NH₃ end). If anything, the ring appears at the same relative position but sooner.",
        markScheme: [
          "(a) Ammonia + hydrogen chloride → ammonium chloride (1)",
          "(b) NH₃ has lower Mr (17) than HCl (36.5) / NH₃ molecules are lighter (1)",
          "(b) Lighter molecules move faster at same temperature / NH₃ diffuses faster (1)",
          "(b) NH₃ travels further / ring is closer to HCl end (1)",
          "(c) Both gases diffuse faster at higher temperature (1)",
          "(c) Ring appears at the same relative position (Mr ratio unchanged) / ring forms more quickly (1)",
        ],
        commonError: "Students often state 'NH₃ diffuses faster because it is a gas' — this is not the reason. The reason is the difference in relative molecular mass.",
        guideRef: "Diffusion",
        difficulty: "core",
        hints: [
          "Look up the relative molecular masses: N=14, H=1, Cl=35.5.",
          "At the same temperature, which molecule moves faster — the heavier or lighter one?",
          "The faster molecule travels further — which end does it end up closer to?",
          "For part (c), consider whether the Mr ratio changes with temperature.",
        ],
        strategy: "Mr comparison; cause-and-effect reasoning",
        solutions: [
          {
            label: "Method 1: reasoning from Mr",
            steps: [
              "Mr(NH₃) = 14 + 3×1 = 17; Mr(HCl) = 1 + 35.5 = 36.5",
              "At same temperature, KE is the same: ½m·v² = constant",
              "So lighter molecules have higher speed v",
              "NH₃ is lighter → moves faster → diffuses faster → travels further",
              "Ring forms closer to the HCl end",
            ],
          },
          {
            label: "Method 2: Graham's law ratio",
            steps: [
              "Rate(NH₃)/Rate(HCl) = √(Mr(HCl)/Mr(NH₃)) = √(36.5/17) = √2.15 ≈ 1.47",
              "NH₃ diffuses ~1.47× faster than HCl",
              "In a 60 cm tube: NH₃ travels ~60/(1+1/1.47) ≈ 36 cm; HCl travels ~24 cm",
              "Ring forms approximately 36 cm from the NH₃ end (24 cm from HCl end)",
            ],
          },
        ],
      },
      {
        id: "chem-particles-qa-q03",
        question: "A student compresses a gas-filled syringe by pushing in the plunger. The volume of gas decreases.\n(a) Using kinetic particle theory, explain why a gas can be compressed but a liquid cannot. [3]\n(b) The student then warms the syringe (plunger free to move) in warm water. Describe and explain the effect on the volume of the gas. [2]",
        marks: 5,
        modelAnswer: "(a) In a gas, particles are widely separated with a large amount of empty space between them. When pressure is applied, the particles are forced closer together and the empty space decreases, so the volume can be reduced. In a liquid, the particles are already very close together — almost touching — with very little space between them, so applying pressure cannot force them closer and the volume cannot be reduced significantly.\n\n(b) The volume of gas increases. Warming the gas increases the kinetic energy of the particles; they move faster and hit the plunger (and walls) with greater force and frequency. The plunger is pushed out until the pressure equalises, so the volume increases.",
        markScheme: [
          "(a) Gas particles are widely separated / large empty spaces between gas particles (1)",
          "(a) Compressing forces particles closer / reduces empty space (1)",
          "(a) Liquid particles already close together / almost no space to reduce (1)",
          "(b) Volume increases (1)",
          "(b) Higher temperature → greater kinetic energy → particles hit walls/plunger harder/more often → plunger pushed out (1)",
        ],
        commonError: "Students say 'the particles get bigger when heated' — incorrect. The particles themselves do not change size; they move faster.",
        guideRef: "The Effect of Temperature and Pressure on Gases",
        difficulty: "core",
        hints: [
          "Compare the spacing of particles in gas vs liquid.",
          "What is 'compressibility' actually reducing?",
          "For (b), link temperature → kinetic energy → collision force → volume.",
        ],
        strategy: "particle collision model; compare states",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "chem-particles-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "States, particle arrangement, changes of state and basic diffusion.",
        questions: [
          {
            id: "chem-particles-bm1-01",
            question: "Which state of matter has a fixed volume but no fixed shape?",
            options: ["Solid", "Liquid", "Gas", "None of these"],
            answerIndex: 1,
            explanation: "A liquid has a definite volume because its particles are close together, but it has no fixed shape because the particles can slide past one another and take the shape of the container.",
            guideRef: "The Three States of Matter",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm1-02",
            question: "In which state are the particles arranged in a regular, ordered lattice?",
            options: ["Gas", "Liquid", "Solid", "Vapour"],
            answerIndex: 2,
            explanation: "Only in a solid are particles held in a regular, ordered lattice, vibrating about fixed positions. Liquid and gas particles are arranged randomly.",
            guideRef: "The Three States of Matter",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm1-03",
            question: "What name is given to the change of state from liquid to solid?",
            options: ["Condensation", "Freezing", "Sublimation", "Evaporation"],
            answerIndex: 1,
            explanation: "Freezing (solidification) is liquid → solid. It occurs at the freezing point, which for a pure substance equals the melting point. Condensation is gas → liquid.",
            guideRef: "Changes of State",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm1-04",
            question: "Gases are easily compressed, but solids and liquids are not. The best explanation is that in a gas the particles are:",
            options: [
              "moving more slowly than in a solid",
              "widely separated with large spaces between them",
              "joined by strong forces of attraction",
              "larger than the particles in a solid",
            ],
            answerIndex: 1,
            explanation: "Gas particles are widely separated with a large amount of empty space between them, so they can be pushed closer together. In solids and liquids the particles are already touching, leaving almost no space to reduce.",
            guideRef: "The Three States of Matter",
            difficulty: "core",
            hints: [
              "Compressing means reducing the volume the substance occupies.",
              "What is actually being squeezed out — the particles or the spaces between them?",
              "Compare the spacing of particles in a gas with that in a liquid or solid.",
            ],
          },
          {
            id: "chem-particles-bm1-05",
            question: "Which row correctly describes the energy change for the named change of state?",
            options: [
              "Melting — energy released",
              "Boiling — energy absorbed",
              "Condensation — energy absorbed",
              "Freezing — energy absorbed",
            ],
            answerIndex: 1,
            explanation: "Boiling (liquid → gas) absorbs energy to break intermolecular forces — it is endothermic. Melting also absorbs energy. Condensation and freezing both release energy as forces reform (exothermic).",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "Breaking forces between particles needs energy in (endothermic).",
              "Forming forces between particles gives energy out (exothermic).",
              "Which option involves particles being separated further apart?",
            ],
          },
          {
            id: "chem-particles-bm1-06",
            question: "Solid iodine is gently warmed and a purple gas appears directly above the crystals, with no liquid seen. This change of state is called:",
            options: ["Evaporation", "Boiling", "Sublimation", "Condensation"],
            answerIndex: 2,
            explanation: "Sublimation is the direct change from solid to gas without passing through the liquid state. Iodine and solid carbon dioxide (dry ice) are common examples.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "Note that no liquid is formed at any point.",
              "The substance goes straight from solid to gas.",
              "Recall the example of dry ice (solid CO₂).",
            ],
          },
          {
            id: "chem-particles-bm1-07",
            question: "Which process is direct evidence that particles in a liquid are in constant, random motion?",
            options: [
              "Water boiling at 100 °C",
              "A purple colour spreading through still water from a dye crystal",
              "Ice having a fixed shape",
              "A liquid being almost incompressible",
            ],
            answerIndex: 1,
            explanation: "A dye diffusing through still water shows that the water and dye particles are moving randomly and mixing, even with no stirring. Boiling, fixed shape and incompressibility do not by themselves demonstrate continuous random motion.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Look for an observation involving spreading or mixing without stirring.",
              "Diffusion is the key piece of evidence for random particle motion.",
              "Which option shows particles moving from one place to another on their own?",
            ],
          },
          {
            id: "chem-particles-bm1-08",
            question: "A sealed syringe of air is pushed in so the gas occupies a smaller volume at constant temperature. What happens to the gas particles?",
            options: [
              "They move faster",
              "They become smaller",
              "They are pushed closer together",
              "They gain more energy",
            ],
            answerIndex: 2,
            explanation: "Compressing a gas at constant temperature forces the particles closer together (reduces the spaces between them). Their size, speed and energy do not change — only their separation decreases.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "core",
            hints: [
              "Temperature is constant, so particle speed and energy stay the same.",
              "Particles themselves never change size.",
              "What changes when a gas takes up less space?",
            ],
          },
          {
            id: "chem-particles-bm1-09",
            question: "Two gases are released at the same time from one end of a long tube at the same temperature: hydrogen, H₂ (Mr = 2) and oxygen, O₂ (Mr = 32). Which statement is correct?",
            options: [
              "O₂ diffuses faster because it is heavier",
              "Both diffuse at exactly the same rate",
              "H₂ diffuses faster because it has the lower relative molecular mass",
              "Neither gas diffuses because the tube is sealed",
            ],
            answerIndex: 2,
            explanation: "At the same temperature all molecules have the same average kinetic energy, so lighter molecules move faster. H₂ (Mr = 2) is much lighter than O₂ (Mr = 32), so H₂ diffuses faster. By Graham's law, rate ∝ 1/√Mr, so H₂ is √16 = 4× faster.",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "At the same temperature, average kinetic energy is the same for both gases.",
              "If ½mv² is the same, lighter particles must move faster.",
              "Compare the Mr values: 2 versus 32.",
              "Rate ∝ 1/√Mr — work out √(32/2).",
            ],
            strategy: "Mr comparison and Graham's law",
          },
          {
            id: "chem-particles-bm1-10",
            question: "A pure substance is heated steadily. On its heating curve there are two horizontal (flat) sections. These flat sections occur because:",
            options: [
              "the heater is switched off during them",
              "energy is being used to break forces between particles during a change of state",
              "the particles stop moving completely",
              "the substance is losing mass to the surroundings",
            ],
            answerIndex: 1,
            explanation: "During a flat section (plateau) the temperature is constant because the energy supplied is used to break/weaken intermolecular forces during melting or boiling, rather than to raise the kinetic energy of the particles.",
            guideRef: "Heating and Cooling Curves",
            difficulty: "challenge",
            hints: [
              "Temperature is a measure of average kinetic energy.",
              "If temperature is not rising, kinetic energy is not rising.",
              "The plateaus line up with the melting point and boiling point.",
              "Where is the energy going if not into speeding up the particles?",
            ],
          },
        ],
      },
      {
        id: "chem-particles-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Kinetic theory, heating curves, evaporation and gas pressure.",
        questions: [
          {
            id: "chem-particles-bm2-01",
            question: "Which statement about particle motion is correct?",
            options: [
              "Solid particles do not move at all",
              "Solid particles vibrate about fixed positions",
              "Liquid particles are completely stationary",
              "Gas particles move only when heated",
            ],
            answerIndex: 1,
            explanation: "Solid particles are not stationary — they vibrate about fixed positions in the lattice. Liquid and gas particles also move (sliding and rapid random motion respectively), at all temperatures above absolute zero.",
            guideRef: "The Three States of Matter",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm2-02",
            question: "Which change of state involves a liquid turning into a gas only at the surface and at any temperature?",
            options: ["Boiling", "Evaporation", "Sublimation", "Condensation"],
            answerIndex: 1,
            explanation: "Evaporation occurs only at the surface of a liquid and can happen at any temperature below the boiling point. Boiling occurs throughout the bulk liquid at a fixed temperature.",
            guideRef: "Changes of State",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm2-03",
            question: "On the heating curve of a pure substance, the rising slope between the two plateaus represents:",
            options: [
              "the solid being warmed",
              "the liquid being warmed",
              "the gas being warmed",
              "the substance melting",
            ],
            answerIndex: 1,
            explanation: "The first plateau is melting and the second is boiling, so the rising slope between them is the liquid being warmed — its particles gain kinetic energy and the temperature rises.",
            guideRef: "Heating and Cooling Curves",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm2-04",
            question: "A fixed mass of gas is heated in a sealed, rigid container (constant volume). The pressure rises because the particles:",
            options: [
              "increase in number",
              "increase in size",
              "collide with the walls more often and with greater force",
              "stick to the container walls",
            ],
            answerIndex: 2,
            explanation: "Heating increases the kinetic energy of the particles so they move faster. They hit the walls more frequently and with greater force, increasing the pressure. The number and size of particles do not change.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "core",
            hints: [
              "The container is sealed, so the number of particles is fixed.",
              "Heating increases particle speed.",
              "Pressure depends on how often and how hard particles hit the walls.",
            ],
          },
          {
            id: "chem-particles-bm2-05",
            question: "A wet cloth placed in front of a fan dries faster and feels cold. Using kinetic theory, the cloth feels cold because:",
            options: [
              "the fan blows cold air onto the cloth",
              "the highest-energy water particles escape, lowering the average kinetic energy of those left",
              "evaporation adds energy to the remaining water",
              "the water particles get bigger as they evaporate",
            ],
            answerIndex: 1,
            explanation: "Evaporation removes the fastest (highest-energy) particles from the surface, so the average kinetic energy — and therefore temperature — of the remaining liquid falls. The moving air also removes vapour, speeding up evaporation.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "Which particles are able to escape from the surface?",
              "What happens to the average energy when the fastest particles leave?",
              "Temperature is proportional to average kinetic energy.",
            ],
          },
          {
            id: "chem-particles-bm2-06",
            question: "Which observation provides evidence for Brownian motion?",
            options: [
              "Ice melting in a warm room",
              "Smoke particles viewed under a microscope jiggling in random, jerky paths",
              "A metal bar expanding when heated",
              "Sugar dissolving when stirred into tea",
            ],
            answerIndex: 1,
            explanation: "Brownian motion is the random, jerky movement of small visible particles (e.g. smoke or pollen) caused by collisions with fast-moving, invisible air or water molecules. It is direct evidence that the surrounding particles are in constant random motion.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Brownian motion involves visible particles being knocked about.",
              "The random jiggling is caused by collisions with invisible molecules.",
              "Look for the option describing random, jerky movement.",
            ],
          },
          {
            id: "chem-particles-bm2-07",
            question: "A gas at constant temperature has its volume doubled. According to the particle model, the pressure will:",
            options: [
              "double",
              "halve",
              "stay the same",
              "increase fourfold",
            ],
            answerIndex: 1,
            explanation: "At constant temperature, doubling the volume halves the number of particles per unit volume, so collisions with the walls per unit area are half as frequent — the pressure halves (Boyle's law: pressure and volume are inversely proportional).",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "core",
            hints: [
              "Temperature is constant, so particle speed does not change.",
              "Doubling the volume spreads the same particles over twice the space.",
              "Fewer particles per cm³ means fewer wall collisions per second.",
            ],
          },
          {
            id: "chem-particles-bm2-08",
            question: "Why does diffusion happen much more slowly in a liquid than in a gas at the same temperature?",
            options: [
              "Liquid particles have no kinetic energy",
              "Liquid particles are closer together, so they collide more often and take longer to spread",
              "Liquids contain no concentration gradient",
              "Gas particles are heavier than liquid particles",
            ],
            answerIndex: 1,
            explanation: "In a liquid the particles are much closer together, so a diffusing particle collides with neighbours far more often and follows a more obstructed path. This makes the net spreading much slower than in a gas, where particles are widely spaced.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Compare how closely packed particles are in liquids versus gases.",
              "More frequent collisions slow down the net movement.",
              "Think about how far a particle travels between collisions in each state.",
            ],
          },
          {
            id: "chem-particles-bm2-09",
            question: "A heating curve for substance X shows a sloped, blurred transition instead of a sharp flat plateau at its melting point. This is the best evidence that substance X is:",
            options: [
              "a pure element",
              "a pure compound",
              "an impure substance or a mixture",
              "a gas at room temperature",
            ],
            answerIndex: 2,
            explanation: "A pure substance melts sharply at one fixed temperature, giving a flat plateau. A sloped/blurred transition over a range of temperatures indicates impurity or a mixture — different components melt at different temperatures. This is the basis of a melting-point purity test.",
            guideRef: "Heating and Cooling Curves",
            difficulty: "challenge",
            hints: [
              "Pure substances change state at a single, sharp temperature.",
              "A range of melting temperatures suggests more than one component.",
              "Melting point is used as a test of purity.",
              "Which option fits a transition spread over a range of temperatures?",
            ],
          },
          {
            id: "chem-particles-bm2-10",
            question: "Two cotton-wool pads release vapours of ammonia, NH₃ (Mr = 17), and a hypothetical acid gas of Mr = 68 from opposite ends of a tube. Compared with the standard NH₃/HCl experiment (HCl Mr = 36.5), the white ring would form:",
            options: [
              "closer to the centre of the tube",
              "even closer to the acid-gas end than before",
              "closer to the ammonia end than before",
              "exactly in the middle",
            ],
            answerIndex: 1,
            explanation: "The acid gas (Mr = 68) is heavier than HCl (Mr = 36.5), so it diffuses even more slowly relative to NH₃. NH₃ therefore travels an even greater proportion of the tube before meeting it, so the ring forms even closer to the acid-gas end than in the standard experiment.",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "The ring forms where the two gases meet.",
              "A heavier acid gas diffuses more slowly.",
              "If the acid gas is slower, NH₃ travels relatively further.",
              "Compare the ratios √(Mr_acid/Mr_NH₃) for 36.5 and 68.",
            ],
            strategy: "relative diffusion rate reasoning",
          },
        ],
      },
      {
        id: "chem-particles-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Properties of states, latent heat ideas, dissolving and pressure.",
        questions: [
          {
            id: "chem-particles-bm3-01",
            question: "Which state of matter has neither a fixed shape nor a fixed volume?",
            options: ["Solid", "Liquid", "Gas", "Crystal"],
            answerIndex: 2,
            explanation: "A gas has no fixed shape and no fixed volume — it expands to fill the entire container because its particles are widely separated and move freely in all directions.",
            guideRef: "The Three States of Matter",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm3-02",
            question: "What is the name of the change of state from gas to liquid?",
            options: ["Boiling", "Condensation", "Melting", "Sublimation"],
            answerIndex: 1,
            explanation: "Condensation is the change from gas to liquid. It releases energy as intermolecular forces reform — it is the reverse of boiling/evaporation.",
            guideRef: "Changes of State",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm3-03",
            question: "When a soluble solid dissolves in water, the solute particles:",
            options: [
              "disappear and are destroyed",
              "spread out and become evenly distributed among the water particles",
              "stay in a clump at the bottom",
              "turn into a gas",
            ],
            answerIndex: 1,
            explanation: "When a solid dissolves, its particles separate and spread out, mixing evenly among the water particles by random motion (diffusion). The particles are not destroyed — total mass is conserved.",
            guideRef: "Diffusion",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm3-04",
            question: "During boiling of a pure liquid the temperature stays constant. This is because the energy supplied is used to:",
            options: [
              "increase the temperature of the gas formed",
              "completely overcome the forces of attraction between the liquid particles",
              "increase the average speed of the liquid particles",
              "compress the liquid",
            ],
            answerIndex: 1,
            explanation: "At the boiling point the supplied energy (latent heat of vaporisation) is used to completely overcome the intermolecular forces holding the liquid particles together, separating them into gas. Kinetic energy — and so temperature — does not rise until all the liquid has boiled.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "Temperature constant means kinetic energy constant.",
              "What must happen to the forces between particles to make a gas?",
              "This stored energy is called latent heat.",
            ],
          },
          {
            id: "chem-particles-bm3-05",
            question: "The pressure of a gas on the walls of its container is caused by:",
            options: [
              "the weight of the gas particles pressing down",
              "particles colliding with the walls",
              "the gas particles attracting the walls",
              "the temperature of the walls",
            ],
            answerIndex: 1,
            explanation: "Gas pressure is the result of the many collisions of gas particles with the container walls. Each collision exerts a tiny force; the total force per unit area is the pressure. Gas particle weight is negligible compared with this effect.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "core",
            hints: [
              "Think about what happens each time a particle hits a wall.",
              "Pressure is force per unit area.",
              "Many tiny collisions add up to a steady pressure.",
            ],
          },
          {
            id: "chem-particles-bm3-06",
            question: "When water freezes, energy is:",
            options: [
              "absorbed, because forces between particles are broken",
              "released, because forces between particles are formed",
              "absorbed, because the particles speed up",
              "neither absorbed nor released",
            ],
            answerIndex: 1,
            explanation: "Freezing (liquid → solid) is exothermic: as particles settle into the lattice, intermolecular forces form and energy is released to the surroundings. This is the reverse of melting, which absorbs energy.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "Freezing is the opposite of melting.",
              "Forming forces between particles releases energy.",
              "Decide whether the change is endothermic or exothermic.",
            ],
          },
          {
            id: "chem-particles-bm3-07",
            question: "A balloon is taken from a warm room into a cold freezer. It shrinks. The best particle explanation is that the gas particles:",
            options: [
              "leak out through the rubber",
              "move more slowly, hitting the walls less often and with less force, so the balloon contracts",
              "become smaller in size",
              "stick together to form a liquid",
            ],
            answerIndex: 1,
            explanation: "Cooling reduces the particles' kinetic energy, so they move more slowly and collide with the balloon wall less often and with less force. The external pressure then pushes the flexible balloon inward until pressures balance, so its volume decreases.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "core",
            hints: [
              "The balloon is flexible, so external pressure can squash it.",
              "Cooling slows the particles down.",
              "Fewer, gentler collisions push out on the wall less strongly.",
            ],
          },
          {
            id: "chem-particles-bm3-08",
            question: "Which statement best explains why a smell from cooking spreads to all rooms in a house even with no draught?",
            options: [
              "The smell particles are blown by wind",
              "The smell particles diffuse by random motion from high to low concentration",
              "The smell particles fall under gravity",
              "The smell particles are attracted to people",
            ],
            answerIndex: 1,
            explanation: "Smell molecules spread by diffusion: their random motion carries them, on average, from the high concentration near the source to regions of lower concentration, until they are evenly distributed throughout the available space.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "There is no draught, so wind is not the cause.",
              "Particles move randomly and spread out by themselves.",
              "Net movement is from high to low concentration.",
            ],
          },
          {
            id: "chem-particles-bm3-09",
            question: "The latent heat of vaporisation of water is much larger than its latent heat of fusion. On a heating curve at constant power, this is shown by:",
            options: [
              "a steeper slope for the gas region",
              "the boiling plateau being longer than the melting plateau",
              "the melting plateau being at a higher temperature",
              "no plateaus appearing at all",
            ],
            answerIndex: 1,
            explanation: "At constant heating power, the length of a plateau is proportional to the energy absorbed. More energy is needed to vaporise than to melt, so the boiling plateau lasts longer than the melting plateau.",
            guideRef: "Heating and Cooling Curves",
            difficulty: "challenge",
            hints: [
              "At constant power, time is proportional to energy supplied.",
              "Which change of state absorbs more energy — melting or boiling?",
              "A longer plateau means more energy was absorbed at that step.",
              "Link the larger latent heat to the longer flat section.",
            ],
          },
          {
            id: "chem-particles-bm3-10",
            question: "At the same temperature, gas P diffuses 1.5 times as fast as gas Q. If gas Q has Mr = 36, what is the approximate Mr of gas P?",
            options: ["16", "24", "54", "81"],
            answerIndex: 0,
            explanation: "By Graham's law, rate ∝ 1/√Mr, so rate(P)/rate(Q) = √(Mr_Q/Mr_P). Thus 1.5 = √(36/Mr_P), so 2.25 = 36/Mr_P, giving Mr_P = 36/2.25 = 16.",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "Use Graham's law: rate ∝ 1/√Mr.",
              "rate(P)/rate(Q) = √(Mr_Q / Mr_P).",
              "Square both sides: 1.5² = 36/Mr_P.",
              "Rearrange to find Mr_P = 36/2.25.",
            ],
            strategy: "Graham's law rearrangement",
          },
        ],
      },
      {
        id: "chem-particles-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Mixed synthesis: cooling curves, sublimation, diffusion and gas laws.",
        questions: [
          {
            id: "chem-particles-bm4-01",
            question: "Which change of state is endothermic (absorbs energy)?",
            options: ["Freezing", "Condensation", "Melting", "Deposition"],
            answerIndex: 2,
            explanation: "Melting (solid → liquid) absorbs energy to break lattice forces — it is endothermic. Freezing, condensation and deposition all release energy as forces reform (exothermic).",
            guideRef: "Changes of State",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm4-02",
            question: "Which property is greatest for gases and smallest for solids?",
            options: ["Density", "Compressibility", "Strength of forces between particles", "Order of arrangement"],
            answerIndex: 1,
            explanation: "Compressibility is highest for gases (lots of empty space) and lowest for solids (particles already touching in a lattice). Density, force strength and order are all greatest in solids.",
            guideRef: "The Three States of Matter",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm4-03",
            question: "On a cooling curve, a flat plateau represents a stage where:",
            options: [
              "the substance is heating up",
              "energy is released as a change of state occurs at constant temperature",
              "the particles stop moving",
              "the substance is gaining mass",
            ],
            answerIndex: 1,
            explanation: "A cooling curve is the mirror image of a heating curve. A plateau marks a change of state (e.g. condensing or freezing) where energy is released as forces reform, so the temperature stays constant for a time.",
            guideRef: "Heating and Cooling Curves",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm4-04",
            question: "A student states: 'When a gas is heated at constant pressure it expands.' Using the particle model, which is the correct reasoning?",
            options: [
              "Particles get bigger, so the gas takes up more room",
              "Particles move faster and the gas must occupy a larger volume to keep the pressure the same",
              "More particles are created when the gas is heated",
              "The particles attract each other more strongly",
            ],
            answerIndex: 1,
            explanation: "Heating makes particles move faster, so they would hit the walls harder and more often. To keep the pressure constant, the gas must expand (larger volume) so that the collision frequency per unit area is restored to its original value.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "core",
            hints: [
              "Pressure is held constant here, not volume.",
              "Heating speeds the particles up.",
              "If the volume grew, collisions per unit area would fall back down.",
            ],
          },
          {
            id: "chem-particles-bm4-05",
            question: "In the ammonia/hydrogen chloride tube experiment, why does a white ring form, and where?",
            options: [
              "NH₃ and HCl react to form NH₄Cl; nearer the HCl end because NH₃ diffuses faster",
              "NH₃ and HCl react to form NH₄Cl; nearer the NH₃ end because HCl diffuses faster",
              "The ring forms exactly in the middle because both gases are the same",
              "The ring forms at the NH₃ end because NH₃ is heavier",
            ],
            answerIndex: 0,
            explanation: "NH₃(g) + HCl(g) → NH₄Cl(s), a white solid. NH₃ (Mr 17) is lighter than HCl (Mr 36.5), so it diffuses faster and travels further before they meet — the ring forms nearer the HCl end.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Recall the product: ammonium chloride.",
              "Compare Mr of NH₃ (17) and HCl (36.5).",
              "The lighter gas travels further before meeting the other.",
            ],
          },
          {
            id: "chem-particles-bm4-06",
            question: "Solid carbon dioxide (dry ice) is left on a bench and a white mist forms above it, but no puddle of liquid is ever seen. This is because dry ice:",
            options: [
              "melts and the liquid evaporates instantly",
              "sublimes directly from solid to gas",
              "dissolves in the air",
              "freezes the surrounding air",
            ],
            answerIndex: 1,
            explanation: "At atmospheric pressure CO₂ cannot exist as a liquid; the solid sublimes directly to gas. The cold gas cools nearby air, condensing water vapour into the visible white mist — but no liquid CO₂ forms.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "No liquid is ever formed.",
              "Recall that CO₂ goes straight from solid to gas at normal pressure.",
              "This direct change is called sublimation.",
            ],
          },
          {
            id: "chem-particles-bm4-07",
            question: "Which of the following would increase the rate of diffusion of a gas?",
            options: [
              "Lowering the temperature",
              "Increasing the relative molecular mass of the gas",
              "Increasing the temperature",
              "Sealing the container completely",
            ],
            answerIndex: 2,
            explanation: "Higher temperature gives particles greater kinetic energy, so they move faster and diffuse more quickly. Lowering temperature or increasing Mr would slow diffusion; sealing the container does not increase the rate of spreading.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Faster-moving particles diffuse more quickly.",
              "Temperature controls particle speed.",
              "Heavier (higher Mr) particles move more slowly.",
            ],
          },
          {
            id: "chem-particles-bm4-08",
            question: "Which statement comparing evaporation and boiling is correct?",
            options: [
              "Both occur only at the boiling point",
              "Evaporation occurs at the surface at any temperature; boiling occurs throughout the liquid at a fixed temperature",
              "Boiling occurs at the surface only; evaporation occurs throughout the liquid",
              "Both occur only at the surface of the liquid",
            ],
            answerIndex: 1,
            explanation: "Evaporation happens only at the liquid surface and can occur at any temperature below the boiling point. Boiling occurs throughout the bulk liquid (bubbles form inside it) at a fixed temperature — the boiling point.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "Think about where bubbles form during boiling.",
              "Evaporation needs no special temperature.",
              "One process is surface-only, the other is throughout the bulk.",
            ],
          },
          {
            id: "chem-particles-bm4-09",
            question: "A gas in a 600 cm³ rigid container exerts a pressure of 100 kPa. The gas is transferred, at the same temperature, into a 240 cm³ rigid container. The new pressure is approximately:",
            options: ["40 kPa", "100 kPa", "250 kPa", "360 kPa"],
            answerIndex: 2,
            explanation: "At constant temperature P₁V₁ = P₂V₂, so P₂ = P₁ × V₁/V₂ = 100 × 600/240 = 100 × 2.5 = 250 kPa. Squeezing the gas into a smaller volume increases the collision frequency per unit area, raising the pressure.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "challenge",
            hints: [
              "Temperature is constant, so use P₁V₁ = P₂V₂.",
              "Rearrange: P₂ = P₁ × V₁/V₂.",
              "Smaller volume means larger pressure, so the answer must exceed 100 kPa.",
              "Compute 100 × 600/240.",
            ],
            strategy: "Boyle's law calculation",
          },
          {
            id: "chem-particles-bm4-10",
            question: "Helium (Mr = 4) and methane (Mr = 16) are released together from the same point at the same temperature. After a fixed time, how do the average distances they have diffused compare?",
            options: [
              "Methane has travelled twice as far as helium",
              "They have travelled equal distances",
              "Helium has travelled twice as far as methane",
              "Helium has travelled four times as far as methane",
            ],
            answerIndex: 2,
            explanation: "Rate ∝ 1/√Mr, so rate(He)/rate(CH₄) = √(16/4) = √4 = 2. Helium diffuses twice as fast, so in a fixed time it travels about twice as far as methane.",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "Use Graham's law: rate ∝ 1/√Mr.",
              "Form the ratio √(Mr_CH₄ / Mr_He) = √(16/4).",
              "√4 = 2, so helium is twice as fast.",
              "Equal time at twice the rate means twice the distance.",
            ],
            strategy: "Graham's law ratio",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "chem-particles-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "States of matter, changes of state and particle arrangement.",
        questions: [
          {
            id: "chem-particles-bq1-01",
            question: "State the three states of matter and, for each, give one property of its shape and one property of its volume. [3]",
            marks: 3,
            modelAnswer: "Solid: fixed shape and fixed volume. Liquid: no fixed shape (takes the shape of the container) but fixed volume. Gas: no fixed shape and no fixed volume (fills the container).",
            markScheme: [
              "Solid: fixed shape and fixed volume (1)",
              "Liquid: no fixed shape but fixed volume (1)",
              "Gas: no fixed shape and no fixed volume / fills container (1)",
            ],
            commonError: "Confusing liquid and gas volume — a liquid has a fixed volume, only a gas has no fixed volume.",
            guideRef: "The Three States of Matter",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bq1-02",
            question: "Name the change of state for each of the following: (a) solid to liquid; (b) liquid to gas at a fixed temperature throughout the liquid; (c) gas to liquid; (d) solid directly to gas. [4]",
            marks: 4,
            modelAnswer: "(a) Melting. (b) Boiling. (c) Condensation. (d) Sublimation.",
            markScheme: [
              "(a) Melting (1)",
              "(b) Boiling (1)",
              "(c) Condensation (1)",
              "(d) Sublimation (1)",
            ],
            commonError: "Writing 'evaporation' for (b) — evaporation is at the surface at any temperature, not boiling throughout the bulk at a fixed temperature.",
            guideRef: "Changes of State",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bq1-03",
            question: "Using the kinetic particle model, explain why a solid has a fixed shape but a liquid does not, even though the particles in both are close together. [4]",
            marks: 4,
            modelAnswer: "In a solid, the particles are held in fixed positions in a regular lattice by strong forces of attraction; they can only vibrate about these positions and cannot move past one another, so the solid keeps a fixed shape. In a liquid, the particles are still close together but the arrangement is irregular and the particles have enough energy to slide past one another and move around within the bulk, so the liquid has no fixed shape and takes the shape of its container.",
            markScheme: [
              "Solid particles held in fixed positions / regular lattice (1)",
              "Solid particles only vibrate / cannot move past each other → fixed shape (1)",
              "Liquid particles arranged irregularly but still close together (1)",
              "Liquid particles can slide past one another / move around → no fixed shape (1)",
            ],
            commonError: "Saying liquid particles are 'far apart' — they are still close together; the difference is that they can move past one another.",
            guideRef: "The Three States of Matter",
            difficulty: "core",
            hints: [
              "Both states have particles close together — focus on movement, not spacing.",
              "What holds solid particles in place?",
              "What can liquid particles do that solid particles cannot?",
              "Link the particle behaviour to the bulk property (shape).",
            ],
            strategy: "compare arrangement and movement, then link to property",
          },
          {
            id: "chem-particles-bq1-04",
            question: "When ice is heated, its temperature rises, then stays at 0 °C for a time, then rises again. Explain, in terms of particles and energy, why the temperature stays constant at 0 °C. [3]",
            marks: 3,
            modelAnswer: "At 0 °C the ice is melting. The energy supplied is used to break/weaken the forces of attraction holding the water particles in the fixed lattice, allowing them to move past one another. Because this energy is going into overcoming intermolecular forces rather than increasing the kinetic energy of the particles, the temperature does not change until all the ice has melted.",
            markScheme: [
              "0 °C is the melting point / ice is melting (1)",
              "Energy used to break/weaken forces between particles (1)",
              "Energy not increasing kinetic energy, so temperature constant until all melted (1)",
            ],
            commonError: "Saying the particles 'stop moving' or 'the heater stops' — neither is true; the energy is being used to break forces between particles.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "What change of state happens at 0 °C for water?",
              "Temperature measures average kinetic energy.",
              "If temperature is constant, where is the supplied energy going?",
            ],
            strategy: "link constant temperature to energy breaking forces",
          },
          {
            id: "chem-particles-bq1-05",
            question: "A teacher demonstrates that a gas can be compressed by pushing the plunger of a sealed gas syringe, but that water in a syringe cannot. Using the particle model, explain this difference. [3]",
            marks: 3,
            modelAnswer: "In the gas, the particles are widely separated with large empty spaces between them. Pushing the plunger forces the particles closer together, reducing the empty space, so the volume decreases — the gas is compressed. In water (a liquid), the particles are already very close together and touching, with almost no space between them, so they cannot be pushed any closer and the volume cannot be reduced.",
            markScheme: [
              "Gas particles widely separated / large spaces between them (1)",
              "Compressing forces gas particles closer / reduces empty space (1)",
              "Liquid particles already close together/touching, so cannot be compressed (1)",
            ],
            commonError: "Saying gas particles 'get smaller' when compressed — the particles do not change size; the spaces between them are reduced.",
            guideRef: "The Three States of Matter",
            difficulty: "core",
            hints: [
              "Focus on the spacing between particles in each state.",
              "What is actually reduced when you compress a gas?",
              "Why is there almost no room to reduce in a liquid?",
            ],
            strategy: "compare particle spacing in gas and liquid",
          },
          {
            id: "chem-particles-bq1-06",
            question: "Naphthalene is a pure solid. A student heats it and records its temperature every 30 seconds, plotting a heating curve.\n(a) Describe the shape of the heating curve, naming what is happening at the sloping and flat sections. [4]\n(b) Explain how the heating curve would differ if the naphthalene were impure. [2]",
            marks: 6,
            modelAnswer: "(a) First a rising slope: the solid naphthalene warms as its particles gain kinetic energy. Then a flat plateau at the melting point: the solid melts and the temperature stays constant while forces between particles are broken. Then a rising slope again: the liquid naphthalene warms as its particles gain kinetic energy. (If heated far enough, a second plateau would occur at the boiling point.)\n\n(b) An impure sample would melt over a range of temperatures rather than at one sharp temperature, so the plateau would be sloped/less flat and would occur at a lower temperature than for the pure solid.",
            markScheme: [
              "(a) Rising slope = solid warming / particles gaining kinetic energy (1)",
              "(a) Flat plateau = melting at constant temperature (1)",
              "(a) During plateau, forces between particles being broken / temperature constant (1)",
              "(a) Rising slope after = liquid warming (1)",
              "(b) Impure substance melts over a range of temperatures / plateau not sharp (1)",
              "(b) Melting occurs at a lower temperature than for the pure substance (1)",
            ],
            commonError: "For (b), students forget that impurity both lowers the melting point and spreads it over a range.",
            guideRef: "Heating and Cooling Curves",
            difficulty: "core",
            hints: [
              "Describe the curve in order: slope, plateau, slope.",
              "At the plateau the temperature is constant — say why.",
              "For (b), recall how melting point is used as a purity test.",
              "Impurity affects both the sharpness and the value of the melting point.",
            ],
            strategy: "read the heating curve stage by stage",
          },
          {
            id: "chem-particles-bq1-07",
            question: "Explain why the boiling plateau on the heating curve of a pure substance is longer than the melting plateau, assuming a constant rate of heating. [3]",
            marks: 3,
            modelAnswer: "At a constant rate of heating, the length of a plateau is proportional to the amount of energy absorbed during that change of state. Boiling requires the intermolecular forces between particles to be completely overcome so the particles can separate fully into a gas, which needs a large amount of energy (latent heat of vaporisation). Melting only partly frees the particles from the lattice — they remain close together — so it needs less energy (latent heat of fusion). Because more energy is absorbed during boiling, that plateau lasts longer.",
            markScheme: [
              "Plateau length proportional to energy absorbed (at constant heating rate) (1)",
              "Boiling fully separates particles / completely overcomes intermolecular forces — more energy needed (1)",
              "Melting only partly frees particles / they stay close — less energy needed → shorter plateau (1)",
            ],
            commonError: "Saying boiling 'needs more energy because it is at a higher temperature' — the reason is the extent to which forces are broken, not the temperature value.",
            guideRef: "Heating and Cooling Curves",
            difficulty: "core",
            hints: [
              "At constant power, time on the plateau measures energy absorbed.",
              "Compare how completely particles are separated in melting versus boiling.",
              "Which change needs to overcome all the intermolecular forces?",
            ],
            strategy: "relate plateau length to energy absorbed",
          },
          {
            id: "chem-particles-bq1-08",
            question: "Define sublimation and give one example of a substance that sublimes. State what you would observe and explain, in terms of particles, why no liquid is seen. [3]",
            marks: 3,
            modelAnswer: "Sublimation is the change of state directly from solid to gas without passing through the liquid state. An example is solid iodine (or dry ice, solid carbon dioxide). On warming solid iodine you would see a purple gas form above the crystals with no liquid appearing. No liquid forms because the particles in the solid gain enough energy to break free completely from all the forces holding them in the lattice and escape directly as widely-spaced, fast-moving gas particles, skipping the liquid arrangement entirely.",
            markScheme: [
              "Sublimation = solid to gas directly without forming a liquid (1)",
              "Example: iodine / dry ice (solid CO₂) (1)",
              "Particles break free completely from lattice and escape as gas, so no liquid stage is seen (1)",
            ],
            commonError: "Defining sublimation as 'solid to liquid to gas very quickly' — it must skip the liquid state entirely.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "The key feature is that no liquid forms.",
              "Recall a coloured example you can observe easily.",
              "Explain in terms of particles escaping the lattice straight into the gas.",
            ],
            strategy: "definition plus example plus particle explanation",
          },
          {
            id: "chem-particles-bq1-09",
            question: "CHALLENGE: Substance Z has a melting point of 80 °C and a boiling point of 218 °C. A 50 g sample is cooled from 250 °C to room temperature at a constant rate, and a cooling curve is plotted.\n(a) Describe the shape of the cooling curve, stating the temperatures of any flat sections and what is happening at each. [4]\n(b) Explain, in terms of particles and energy, why the temperature stays constant during each flat section even though heat is still being lost to the surroundings. [3]\n(c) State and explain which flat section would be longer. [2]",
            marks: 9,
            modelAnswer: "(a) Starting at 250 °C the gas cools (falling slope). At 218 °C there is a flat section (plateau) where the gas condenses to liquid. The liquid then cools (falling slope). At 80 °C there is a second flat section where the liquid freezes to solid. Finally the solid cools towards room temperature (falling slope).\n\n(b) During each plateau a change of state is occurring (condensing, then freezing). As the particles come closer together, intermolecular forces reform and energy is released. This released energy balances the heat lost to the surroundings, so the temperature stays constant until the change of state is complete.\n\n(c) The plateau at 218 °C (condensation) would be longer. More energy is released when a gas condenses to a liquid (the particles must lose all the energy gained on vaporising) than when a liquid freezes, because vaporisation/condensation involves completely separating or rejoining particles. At constant cooling rate, releasing more energy takes more time, so the condensation plateau is longer.",
            markScheme: [
              "(a) Falling slope (gas), plateau at 218 °C (condensing), falling slope (liquid), plateau at 80 °C (freezing), falling slope (solid) (1)",
              "(a) Correct temperatures stated: 218 °C condensing and 80 °C freezing (1)",
              "(a) Identify condensation at 218 °C (1)",
              "(a) Identify freezing at 80 °C (1)",
              "(b) During plateau a change of state occurs / forces between particles reform (1)",
              "(b) Energy is released as forces form (1)",
              "(b) Released energy balances heat lost, so temperature constant (1)",
              "(c) Condensation plateau (at 218 °C) is longer (1)",
              "(c) More energy released in condensation than freezing (latent heat of vaporisation > fusion) (1)",
            ],
            commonError: "Confusing the direction of energy flow — on a cooling curve energy is released (forces forming), not absorbed.",
            guideRef: "Heating and Cooling Curves",
            difficulty: "challenge",
            hints: [
              "A cooling curve is the mirror image of a heating curve.",
              "Plateaus appear at the boiling point (condensing) and melting point (freezing).",
              "On cooling, energy is released as forces between particles reform.",
              "Compare the latent heats to decide which plateau is longer.",
            ],
            strategy: "mirror the heating curve and reverse the energy flow",
          },
          {
            id: "chem-particles-bq1-10",
            question: "CHALLENGE: A sealed flask contains 0.50 dm³ of air at 20 °C. The flask is rigid (its volume cannot change).\n(a) Using kinetic particle theory, explain what happens to the pressure if the flask is heated to 80 °C. [3]\n(b) The flask is instead cooled. Explain what happens to the pressure and why, in terms of particle collisions. [3]\n(c) Explain why this experiment would give a different result if the flask were a flexible balloon rather than a rigid container. [2]",
            marks: 8,
            modelAnswer: "(a) Heating to 80 °C increases the kinetic energy of the air particles, so they move faster. In the fixed volume they collide with the walls more frequently and with greater force. Since pressure is the force per unit area from these collisions, the pressure increases.\n\n(b) Cooling reduces the kinetic energy of the particles, so they move more slowly. They collide with the walls less frequently and with less force, so the pressure decreases.\n\n(c) In a flexible balloon the volume is not fixed: instead of the pressure changing, the balloon would expand on heating (or shrink on cooling) so that the internal pressure stays roughly equal to the constant external (atmospheric) pressure. So volume, not pressure, would change.",
            markScheme: [
              "(a) Heating → particles gain kinetic energy / move faster (1)",
              "(a) More frequent / harder collisions with walls (1)",
              "(a) Pressure increases (1)",
              "(b) Cooling → particles move more slowly (1)",
              "(b) Fewer / gentler collisions with the walls (1)",
              "(b) Pressure decreases (1)",
              "(c) Flexible container can change volume (1)",
              "(c) Volume changes instead of pressure / pressure stays ~constant at atmospheric (1)",
            ],
            commonError: "Saying the number of particles changes — in a sealed flask the number is fixed; it is the speed and collision behaviour that change.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "challenge",
            hints: [
              "The flask is rigid, so volume is constant — focus on pressure.",
              "Link temperature to particle speed to collision frequency and force.",
              "For (c), ask what can change if the container can stretch.",
              "A flexible container keeps internal pressure near atmospheric by changing volume.",
            ],
            strategy: "fix the variable (volume) then reason about pressure",
          },
        ],
      },
      {
        id: "chem-particles-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Diffusion, Brownian motion and relative molecular mass.",
        questions: [
          {
            id: "chem-particles-bq2-01",
            question: "Define diffusion. State one piece of experimental evidence for diffusion in gases. [2]",
            marks: 2,
            modelAnswer: "Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration, as a result of their random motion. Evidence in gases: brown bromine vapour spreads upward into a gas jar of colourless air until the colour is uniform (or the smell of perfume spreading across a room).",
            markScheme: [
              "Net movement of particles from high to low concentration due to random motion (1)",
              "Valid gas evidence: bromine spreading into air / perfume smell spreading across a room (1)",
            ],
            commonError: "Defining diffusion as movement from low to high concentration — it is high to low (down the gradient).",
            guideRef: "Diffusion",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bq2-02",
            question: "State two factors that affect the rate of diffusion of a gas, and for each state how increasing it changes the rate. [2]",
            marks: 2,
            modelAnswer: "Temperature: increasing the temperature increases the rate of diffusion (particles have more kinetic energy and move faster). Relative molecular mass (Mr): increasing the Mr decreases the rate of diffusion (heavier molecules move more slowly at the same temperature).",
            markScheme: [
              "Temperature: higher temperature → faster diffusion (1)",
              "Relative molecular mass: higher Mr → slower diffusion (1)",
            ],
            commonError: "Saying higher Mr increases the rate — it decreases the rate, because heavier molecules move more slowly.",
            guideRef: "Diffusion",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bq2-03",
            question: "A few crystals of purple potassium manganate(VII) are placed at the bottom of a beaker of cold, still water. Over several hours the whole beaker turns purple.\n(a) Name the process responsible. [1]\n(b) Explain, in terms of particles, why the colour spreads without stirring. [3]",
            marks: 4,
            modelAnswer: "(a) Diffusion.\n\n(b) Both the water particles and the dissolved potassium manganate(VII) particles are in constant, random motion. The purple particles, in random motion, spread out from where they are highly concentrated (near the crystals) towards regions where they are at low concentration. The net movement is therefore down the concentration gradient, from high to low concentration, until the purple particles are evenly distributed and the whole beaker is uniformly coloured. No stirring is needed because the random motion of the particles does the mixing.",
            markScheme: [
              "(a) Diffusion (1)",
              "(b) Particles are in constant random motion (1)",
              "(b) Net movement from high to low concentration / down the gradient (1)",
              "(b) Continues until evenly distributed / uniform colour (1)",
            ],
            commonError: "Saying the colour spreads because the water is warm or because of convection — at the same temperature in still water the spreading is due to diffusion (random particle motion).",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Name the process first.",
              "What kind of motion do all particles have?",
              "In which direction is the net movement of the purple particles?",
              "When does the spreading stop?",
            ],
            strategy: "name process, then explain via random motion and gradient",
          },
          {
            id: "chem-particles-bq2-04",
            question: "Explain what is meant by Brownian motion and how it provides evidence for the kinetic particle theory. [3]",
            marks: 3,
            modelAnswer: "Brownian motion is the random, jerky, continuous movement of small visible particles (such as smoke or pollen grains) suspended in a fluid, observed under a microscope. It occurs because the visible particles are constantly being struck on all sides by the much smaller, fast-moving, invisible particles of the surrounding gas or liquid. The uneven, random buffeting causes the visible particles to move in random paths. This provides evidence for kinetic particle theory because it shows that the surrounding (invisible) particles must be in constant, rapid, random motion.",
            markScheme: [
              "Random/jerky movement of small visible particles suspended in a fluid (1)",
              "Caused by collisions with fast-moving invisible fluid particles (1)",
              "Shows the surrounding particles are in constant random motion / supports kinetic theory (1)",
            ],
            commonError: "Saying the visible smoke particles themselves are the moving molecules — Brownian motion is the visible particles being knocked about by the much smaller invisible molecules.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Describe what is seen under the microscope.",
              "What is hitting the visible particles to make them jiggle?",
              "Link the random buffeting to constant random motion of molecules.",
            ],
            strategy: "describe observation then infer molecular motion",
          },
          {
            id: "chem-particles-bq2-05",
            question: "A cotton-wool pad soaked in concentrated aqueous ammonia and a pad soaked in concentrated hydrochloric acid are placed at opposite ends of a dry glass tube. A white ring forms inside the tube.\n(a) Write a balanced symbol equation, including state symbols, for the reaction. [2]\n(b) Explain why the ring forms nearer the hydrochloric acid end. [3]",
            marks: 5,
            modelAnswer: "(a) NH₃(g) + HCl(g) → NH₄Cl(s).\n\n(b) Both gases diffuse along the tube from their respective ends. NH₃ has a relative molecular mass of 17, which is lower than that of HCl (36.5). At the same temperature, the lighter NH₃ molecules move faster (they have the same average kinetic energy but lower mass), so they diffuse at a greater rate. The NH₃ therefore travels further along the tube before the two gases meet and react, so the white ring of ammonium chloride forms nearer the HCl end.",
            markScheme: [
              "(a) NH₃ + HCl → NH₄Cl (1)",
              "(a) Correct state symbols (g), (g) → (s) (1)",
              "(b) NH₃ has lower Mr (17) than HCl (36.5) / NH₃ lighter (1)",
              "(b) Lighter molecules move faster at the same temperature → NH₃ diffuses faster (1)",
              "(b) NH₃ travels further before they meet → ring nearer HCl end (1)",
            ],
            commonError: "Saying NH₃ diffuses faster 'because it is a gas' or 'more reactive' — the reason is its lower relative molecular mass.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Recall the product and that it is a solid.",
              "Compare the Mr values: NH₃ = 17, HCl = 36.5.",
              "At the same temperature, which molecules move faster?",
              "The faster gas travels further before they meet.",
            ],
            strategy: "equation then Mr-based diffusion reasoning",
            solutions: [
              {
                label: "Mr reasoning",
                steps: [
                  "Mr(NH₃) = 14 + 3 × 1 = 17",
                  "Mr(HCl) = 1 + 35.5 = 36.5",
                  "At the same temperature, average KE (½mv²) is equal for both gases",
                  "Lower mass (NH₃) ⇒ higher speed v ⇒ faster diffusion",
                  "NH₃ travels further before meeting HCl, so ring forms nearer the HCl end",
                ],
              },
            ],
          },
          {
            id: "chem-particles-bq2-06",
            question: "Explain why diffusion in liquids is much slower than diffusion in gases at the same temperature. [3]",
            marks: 3,
            modelAnswer: "In a gas the particles are widely separated, so a diffusing particle can travel a relatively long way between collisions and spreads quickly. In a liquid the particles are much closer together, so a diffusing particle collides with its neighbours far more frequently and is constantly knocked off course. This means it follows a much more obstructed path and its net movement through the liquid is much slower than through a gas, even though the particles in both have the same average kinetic energy at the same temperature.",
            markScheme: [
              "Gas particles widely separated / travel far between collisions (1)",
              "Liquid particles close together / collide much more often (1)",
              "More frequent collisions / obstructed path → slower net movement in liquid (1)",
            ],
            commonError: "Saying liquid particles have less energy than gas particles at the same temperature — at the same temperature the average kinetic energy is the same; the difference is the spacing and collision frequency.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Same temperature means the same average kinetic energy.",
              "Compare how closely packed the particles are.",
              "How does collision frequency differ between liquids and gases?",
            ],
            strategy: "compare spacing and collision frequency",
          },
          {
            id: "chem-particles-bq2-07",
            question: "CHALLENGE: Two gases, methane (CH₄, Mr = 16) and sulfur dioxide (SO₂, Mr = 64), are released at the same instant from opposite ends of a 100 cm tube at the same temperature.\n(a) Calculate the ratio of the rate of diffusion of methane to that of sulfur dioxide. [2]\n(b) Hence calculate how far from the methane end the two gases first meet. [2]\n(c) State and explain one assumption you have made. [1]",
            marks: 5,
            modelAnswer: "(a) By Graham's law, rate ∝ 1/√Mr. Rate(CH₄)/Rate(SO₂) = √(Mr(SO₂)/Mr(CH₄)) = √(64/16) = √4 = 2. So methane diffuses twice as fast as sulfur dioxide.\n\n(b) In the same time, methane travels twice as far as sulfur dioxide. Let the distance travelled by SO₂ be d; then CH₄ travels 2d, and 2d + d = 100 cm, so 3d = 100, d = 33.3 cm. Methane travels 2d = 66.7 cm. The gases meet about 67 cm from the methane end.\n\n(c) Assumption: the temperature is the same and uniform along the tube (so both gases keep the same average kinetic energy), and there are no draughts/convection currents — only diffusion moves the gases.",
            markScheme: [
              "(a) Rate ratio = √(64/16) = √4 = 2 (1 for method, 1 for answer)",
              "(b) Set 2d + d = 100 → d = 33.3 cm; CH₄ travels 66.7 cm ≈ 67 cm from methane end (1 for method, 1 for answer)",
              "(c) Valid assumption: uniform/constant temperature / no draughts / only diffusion acting (1)",
            ],
            commonError: "Inverting the Graham's law ratio (using √(16/64)) and concluding SO₂ is faster — the lighter gas (CH₄) must be faster.",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "Use rate ∝ 1/√Mr; form the ratio with the heavier Mr on top.",
              "√(64/16) = √4.",
              "If CH₄ is twice as fast, it travels twice as far in the same time.",
              "Solve 2d + d = 100 for the SO₂ distance, then double it.",
            ],
            strategy: "Graham's law ratio then meeting-point algebra",
            solutions: [
              {
                label: "Graham's law and meeting point",
                steps: [
                  "Rate(CH₄)/Rate(SO₂) = √(Mr_SO₂ / Mr_CH₄) = √(64/16) = √4 = 2",
                  "In equal time, distance ∝ rate, so CH₄ travels 2× the SO₂ distance",
                  "Let SO₂ distance = d; CH₄ distance = 2d",
                  "2d + d = 100 cm ⇒ 3d = 100 ⇒ d = 33.3 cm",
                  "CH₄ distance = 2d = 66.7 cm ≈ 67 cm from the methane end",
                ],
              },
            ],
          },
          {
            id: "chem-particles-bq2-08",
            question: "CHALLENGE: In a diffusion experiment, gas X diffuses 1.4 times as fast as oxygen (O₂, Mr = 32) at the same temperature.\n(a) Use Graham's law to estimate the relative molecular mass of gas X. [3]\n(b) Suggest the identity of gas X, giving your reasoning. [2]",
            marks: 5,
            modelAnswer: "(a) Graham's law: rate ∝ 1/√Mr, so rate(X)/rate(O₂) = √(Mr(O₂)/Mr(X)). Therefore 1.4 = √(32/Mr(X)). Squaring: 1.96 = 32/Mr(X), so Mr(X) = 32/1.96 = 16.3 ≈ 16.\n\n(b) An Mr of about 16 suggests gas X is methane, CH₄ (Mr = 12 + 4 × 1 = 16). Methane is a common gas with this relative molecular mass, and it would diffuse faster than oxygen because it is lighter.",
            markScheme: [
              "(a) rate(X)/rate(O₂) = √(Mr(O₂)/Mr(X)); 1.4 = √(32/Mr(X)) (1)",
              "(a) Square: 1.96 = 32/Mr(X) (1)",
              "(a) Mr(X) = 32/1.96 ≈ 16 (1)",
              "(b) Methane / CH₄ (1)",
              "(b) Reasoning: CH₄ has Mr = 16 and is lighter than O₂ so diffuses faster (1)",
            ],
            commonError: "Forgetting to square the rate ratio, or putting Mr(X) on the top of the fraction instead of Mr(O₂).",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "Write Graham's law as rate ∝ 1/√Mr.",
              "rate(X)/rate(O₂) = √(Mr_O₂ / Mr_X) — the unknown Mr is on the bottom.",
              "Square both sides to remove the square root.",
              "Solve for Mr(X), then think of a gas with that Mr.",
            ],
            strategy: "rearrange Graham's law to find an unknown Mr",
            solutions: [
              {
                label: "Solving Graham's law for Mr",
                steps: [
                  "rate(X)/rate(O₂) = √(Mr_O₂ / Mr_X)",
                  "1.4 = √(32 / Mr_X)",
                  "Square both sides: 1.96 = 32 / Mr_X",
                  "Mr_X = 32 / 1.96 = 16.3 ≈ 16",
                  "Mr ≈ 16 ⇒ gas X is methane, CH₄",
                ],
              },
            ],
          },
          {
            id: "chem-particles-bq2-09",
            question: "A student writes: 'Lighter gases diffuse faster because they are smaller, so they fit through gaps more easily.' Explain why this reasoning is incorrect and give the correct explanation in terms of particle motion. [3]",
            marks: 3,
            modelAnswer: "The reasoning is incorrect because diffusion rate depends on the speed of the molecules, not on whether they 'fit through gaps'. The correct explanation is that, at a given temperature, all gas molecules have the same average kinetic energy (½mv²). For a given kinetic energy, a molecule with a smaller mass (lower Mr) must have a higher average speed. Faster-moving molecules spread out more quickly, so lighter gases diffuse faster. It is the lower mass leading to higher speed — not the physical size — that matters.",
            markScheme: [
              "Correctly identifies that rate depends on molecular speed, not 'fitting through gaps'/size (1)",
              "At same temperature, average kinetic energy ½mv² is the same for all gases (1)",
              "Lower mass → higher speed → faster diffusion (1)",
            ],
            commonError: "Accepting the 'smaller particles fit through gaps' idea — the real reason is that lower mass gives higher speed at the same kinetic energy.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Diffusion rate is controlled by how fast molecules move.",
              "At one temperature, what quantity is the same for all gas molecules?",
              "If ½mv² is fixed, how does mass affect speed?",
            ],
            strategy: "refute the misconception, then give the kinetic-energy reason",
          },
          {
            id: "chem-particles-bq2-10",
            question: "Bromine is a dense, brown liquid that produces a brown vapour. A gas jar of brown bromine vapour is placed beneath an inverted gas jar of colourless air, separated by a glass plate.\n(a) Predict and describe what is observed after the glass plate is removed. [2]\n(b) Explain the observation in terms of the kinetic particle theory. [3]\n(c) The experiment is repeated at a higher temperature. State and explain the effect on the time taken for the colour to become uniform. [2]",
            marks: 7,
            modelAnswer: "(a) The brown colour gradually spreads upward into the top jar (which contained colourless air), while the colour in the lower jar becomes paler, until both jars are an even, pale brown colour throughout.\n\n(b) The bromine and air particles are in constant, random motion. The brown bromine molecules, which start at high concentration in the lower jar, move randomly and so spread (diffuse) into the upper jar where their concentration is low, while air molecules spread downward. The net movement of bromine is down its concentration gradient, from high to low concentration, until the bromine molecules are evenly distributed and the colour is uniform.\n\n(c) The colour becomes uniform more quickly at the higher temperature. The particles have greater kinetic energy and move faster, so they diffuse and mix more rapidly, reducing the time taken.",
            markScheme: [
              "(a) Brown colour spreads up into the top jar / lower jar gets paler (1)",
              "(a) Both jars end uniformly pale brown (1)",
              "(b) Particles in constant random motion (1)",
              "(b) Bromine moves from high to low concentration / down the gradient (diffusion) (1)",
              "(b) Continues until evenly distributed / uniform colour (1)",
              "(c) Colour uniform more quickly / faster (1)",
              "(c) Higher temperature → particles move faster → faster diffusion (1)",
            ],
            commonError: "Saying only the bromine moves — both the bromine and the air particles diffuse (the brown colour spreading up is simply the easiest to see).",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "Describe how each jar's colour changes and the final result.",
              "Both sets of particles are in random motion.",
              "State the direction of net movement of the bromine.",
              "For (c), link higher temperature to faster particle motion.",
            ],
            strategy: "observation, then particle explanation, then temperature effect",
          },
        ],
      },
      {
        id: "chem-particles-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Evaporation, gas pressure and temperature/pressure effects.",
        questions: [
          {
            id: "chem-particles-bq3-01",
            question: "State the difference between boiling and evaporation in terms of where in the liquid the change occurs and the temperature at which it occurs. [2]",
            marks: 2,
            modelAnswer: "Boiling occurs throughout the whole (bulk) liquid and only at a fixed temperature, the boiling point. Evaporation occurs only at the surface of the liquid and can happen at any temperature below the boiling point.",
            markScheme: [
              "Boiling: throughout the bulk liquid / at a fixed temperature (boiling point) (1)",
              "Evaporation: at the surface only / at any temperature below the boiling point (1)",
            ],
            commonError: "Stating that evaporation only happens 'when it is hot' — evaporation occurs at any temperature, just faster when warmer.",
            guideRef: "Changes of State",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bq3-02",
            question: "Explain, in terms of particle collisions, what causes the pressure of a gas on the walls of its container. [2]",
            marks: 2,
            modelAnswer: "The gas particles are in constant, rapid, random motion and continually collide with the walls of the container. Each collision exerts a small force on the wall, and the combined effect of the very large number of collisions per second, spread over the wall area, is the gas pressure (force per unit area).",
            markScheme: [
              "Particles collide with the container walls (1)",
              "Many collisions exert a force over the wall area → pressure (force per unit area) (1)",
            ],
            commonError: "Saying pressure is caused by the weight of the gas — it is caused by particle collisions with the walls.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bq3-03",
            question: "Explain, in terms of kinetic particle theory, why a puddle of water slowly disappears on a warm day even though the temperature never reaches 100 °C. [3]",
            marks: 3,
            modelAnswer: "The water particles in the puddle are in constant motion with a range of speeds and kinetic energies. At the surface, the fastest-moving particles have enough energy to overcome the forces of attraction holding them in the liquid and escape into the air as water vapour. This is evaporation, which happens at any temperature below the boiling point. Over time, more and more particles escape from the surface, so the puddle gradually disappears even though the water never boils.",
            markScheme: [
              "Particles have a range of speeds/energies (1)",
              "Fastest particles at the surface escape / overcome forces of attraction (evaporation) (1)",
              "Evaporation occurs below the boiling point / over time all particles escape (1)",
            ],
            commonError: "Calling the process boiling — the water is evaporating from the surface, not boiling.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "The water never reaches its boiling point — so what process is this?",
              "Do all particles move at the same speed?",
              "Which particles can escape from the surface?",
            ],
            strategy: "identify evaporation, then explain via fastest surface particles",
          },
          {
            id: "chem-particles-bq3-04",
            question: "When a volatile liquid such as ethanol is placed on the back of the hand, the skin feels cold. Explain this cooling effect in terms of the kinetic energy of the particles. [4]",
            marks: 4,
            modelAnswer: "The liquid particles have a range of kinetic energies. The most energetic (fastest) particles at the surface have enough energy to overcome the intermolecular forces and escape from the liquid by evaporation. Because it is the highest-energy particles that leave, the average kinetic energy of the particles remaining in the liquid decreases. Temperature is a measure of average kinetic energy, so the temperature of the remaining liquid falls. This cooler liquid then draws heat (thermal energy) from the skin, so the skin feels cold.",
            markScheme: [
              "Liquid particles have a range of kinetic energies (1)",
              "Most energetic/fastest surface particles escape (evaporate) (1)",
              "Average kinetic energy of remaining liquid falls → temperature falls (1)",
              "Cooler liquid takes heat from the skin → skin feels cold (1)",
            ],
            commonError: "Saying 'evaporation takes heat from the skin' without explaining that the liquid cools because the highest-energy particles leave.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "Particles in a liquid do not all have the same speed.",
              "Which particles escape during evaporation?",
              "What happens to the average energy when the fastest particles leave?",
              "Link the falling liquid temperature to heat being drawn from the skin.",
            ],
            strategy: "trace energy: fastest leave → average falls → temperature falls → cools skin",
          },
          {
            id: "chem-particles-bq3-05",
            question: "A gas syringe contains a fixed mass of gas. The plunger is free to move, so the pressure of the gas stays equal to atmospheric pressure. The syringe is placed in a beaker of hot water.\n(a) State and explain what happens to the volume of the gas. [3]\n(b) State what would happen instead if the plunger were locked in place (volume fixed). [2]",
            marks: 5,
            modelAnswer: "(a) The volume of the gas increases. Heating increases the kinetic energy of the gas particles, so they move faster and hit the plunger more often and with greater force. Because the plunger is free to move and the pressure must stay equal to atmospheric, the gas pushes the plunger outward, increasing the volume until the collision frequency per unit area (and so the pressure) returns to the atmospheric value.\n\n(b) If the plunger were locked so the volume is fixed, the volume could not change, so instead the pressure of the gas would increase (the faster particles hit the fixed walls more often and harder).",
            markScheme: [
              "(a) Volume increases (1)",
              "(a) Heating → particles move faster → hit plunger more often/harder (1)",
              "(a) Plunger pushed out until pressure returns to atmospheric (1)",
              "(b) Volume fixed, so pressure increases instead (1)",
              "(b) Faster particles → more frequent/harder wall collisions → higher pressure (1)",
            ],
            commonError: "Saying the gas particles get bigger when heated — the particles do not change size; they move faster.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "core",
            hints: [
              "Decide first which quantity is held constant (pressure or volume).",
              "Heating speeds the particles up.",
              "If pressure must stay constant, what must change?",
              "For (b), if volume cannot change, what changes instead?",
            ],
            strategy: "identify the constant quantity, then reason about the rest",
          },
          {
            id: "chem-particles-bq3-06",
            question: "Explain, using the particle model, why increasing the pressure on a fixed mass of gas at constant temperature decreases its volume. [3]",
            marks: 3,
            modelAnswer: "Increasing the external pressure pushes the gas particles closer together, reducing the empty space between them, so the gas occupies a smaller volume. As the volume decreases, the same number of particles are packed into a smaller space, so they collide with the walls more frequently per unit area. The gas pressure rises until it balances the increased external pressure. Throughout, the temperature is constant, so the particle speed does not change — only the spacing and collision frequency change.",
            markScheme: [
              "Higher external pressure pushes particles closer / reduces empty space → smaller volume (1)",
              "Same number of particles in smaller volume → more frequent wall collisions per unit area (1)",
              "Temperature constant so particle speed unchanged / pressure rises until balanced (1)",
            ],
            commonError: "Saying the particles move faster when compressed — at constant temperature the speed is unchanged; it is the spacing and collision frequency that change.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "core",
            hints: [
              "Temperature is constant, so particle speed stays the same.",
              "Compressing reduces the space between particles.",
              "How does packing particles into a smaller volume affect collision frequency?",
            ],
            strategy: "constant temperature ⇒ speed fixed; reason via spacing and collisions",
          },
          {
            id: "chem-particles-bq3-07",
            question: "A car tyre is inflated to the correct pressure on a cold morning. After being driven on a motorway for an hour, the pressure of the air inside has increased.\n(a) Explain, in terms of particles, why the pressure increases. [3]\n(b) Assume the tyre is rigid so the volume is effectively constant. Suggest why the pressure would have increased even more if the tyre had been overinflated (more air added) to begin with. [2]",
            marks: 5,
            modelAnswer: "(a) Driving warms the air in the tyre (through friction and flexing). The higher temperature increases the kinetic energy of the air particles, so they move faster. In the (almost) fixed volume of the tyre, they collide with the inner walls more frequently and with greater force, so the pressure increases.\n\n(b) If more air had been added, there would be a greater number of particles in the same fixed volume. More particles means more collisions with the walls per second, so the pressure starts higher; the same temperature rise then acts on this larger number of particles, producing an even greater pressure.",
            markScheme: [
              "(a) Temperature of the air rises (due to driving/friction) (1)",
              "(a) Particles gain kinetic energy / move faster (1)",
              "(a) More frequent/harder collisions with walls in fixed volume → pressure rises (1)",
              "(b) More air = more particles in the same volume (1)",
              "(b) More collisions with the walls → higher pressure (1)",
            ],
            commonError: "Forgetting to say the air warms up — the pressure rise on driving is caused by the temperature increase.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "core",
            hints: [
              "What happens to the temperature of the tyre air when you drive?",
              "Link temperature to particle speed and collisions.",
              "For (b), what changes when you add more air at the same volume?",
              "More particles means more collisions per second.",
            ],
            strategy: "temperature effect, then particle-number effect",
          },
          {
            id: "chem-particles-bq3-08",
            question: "Explain why blowing across the surface of a hot drink helps it cool down faster, using ideas about evaporation and concentration. [3]",
            marks: 3,
            modelAnswer: "Blowing across the surface removes the warm, water-vapour-rich air from just above the drink. This lowers the concentration of water vapour immediately above the surface, which increases the rate of evaporation (more particles can escape because fewer are returning). Each escaping particle is one of the highest-energy particles, so removing them lowers the average kinetic energy of the liquid and cools it. Faster evaporation therefore cools the drink more quickly.",
            markScheme: [
              "Blowing removes water vapour / lowers vapour concentration above the surface (1)",
              "This increases the rate of evaporation (1)",
              "Escaping high-energy particles lower the average kinetic energy → faster cooling (1)",
            ],
            commonError: "Saying the cool air directly cools the drink — the main effect is increasing the rate of evaporation by removing vapour above the surface.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "What builds up just above the surface of the drink?",
              "How does removing that vapour affect the rate of evaporation?",
              "Which particles leave during evaporation, and what does that do to the liquid's temperature?",
            ],
            strategy: "link blowing to vapour removal, then to faster evaporation and cooling",
          },
          {
            id: "chem-particles-bq3-09",
            question: "CHALLENGE: A fixed mass of gas occupies 250 cm³ at a pressure of 120 kPa. The temperature is kept constant.\n(a) Calculate the volume the gas would occupy if the pressure were increased to 200 kPa. [2]\n(b) Explain, using the particle model, why the volume changes in the way your calculation predicts. [2]\n(c) State one reason why a real gas might not obey this relationship exactly at very high pressures. [1]",
            marks: 5,
            modelAnswer: "(a) At constant temperature, P₁V₁ = P₂V₂. So V₂ = P₁V₁/P₂ = (120 × 250)/200 = 30000/200 = 150 cm³.\n\n(b) Increasing the pressure pushes the gas particles closer together, so the gas occupies a smaller volume. There is a large amount of empty space between gas particles, so they can be forced closer, and a higher applied pressure squeezes the gas into the smaller 150 cm³.\n\n(c) At very high pressures the particles are forced very close together, so the volume of the particles themselves (and/or the forces between them) is no longer negligible compared with the volume of the gas, and the simple inverse relationship breaks down.",
            markScheme: [
              "(a) Use P₁V₁ = P₂V₂; V₂ = (120 × 250)/200 (1)",
              "(a) V₂ = 150 cm³ (1)",
              "(b) Higher pressure forces particles closer / reduces empty space → smaller volume (1)",
              "(b) Large empty spaces between gas particles allow compression (1)",
              "(c) At very high pressure, particle volume / forces between particles no longer negligible (1)",
            ],
            commonError: "Multiplying instead of dividing — as pressure increases the volume must decrease, so the answer must be smaller than 250 cm³.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "challenge",
            hints: [
              "Temperature is constant, so use P₁V₁ = P₂V₂.",
              "Rearrange to V₂ = P₁V₁/P₂.",
              "Pressure increases, so the volume should decrease — check your answer is below 250 cm³.",
              "For (c), think about what assumption (negligible particle volume) might fail.",
            ],
            strategy: "Boyle's law calculation with a sanity check on direction",
            solutions: [
              {
                label: "Boyle's law calculation",
                steps: [
                  "Constant temperature ⇒ P₁V₁ = P₂V₂",
                  "P₁ = 120 kPa, V₁ = 250 cm³, P₂ = 200 kPa",
                  "V₂ = P₁V₁ / P₂ = (120 × 250) / 200",
                  "= 30000 / 200 = 150 cm³",
                  "Pressure rose, volume fell (250 → 150 cm³) — consistent with the inverse relationship",
                ],
              },
            ],
          },
          {
            id: "chem-particles-bq3-10",
            question: "CHALLENGE: A sealed flexible balloon of gas is taken from sea level up a high mountain, where the surrounding atmospheric pressure is lower but the temperature is unchanged.\n(a) Predict and explain what happens to the size of the balloon. [3]\n(b) The mountaineer's sealed, rigid metal gas cylinder is taken on the same journey. Explain why its internal gas pressure does not change in the same way the balloon's volume does. [2]\n(c) On the descent the balloon is also cooled. Explain how cooling alone (ignoring the pressure change) would affect the balloon's size. [2]",
            marks: 7,
            modelAnswer: "(a) The balloon expands (gets bigger). The gas particles inside push outward by colliding with the inside of the balloon. As the external atmospheric pressure falls, there is less pressure pushing the balloon inward, so the gas inside expands until the internal pressure again balances the lower external pressure. Since temperature is unchanged, the gas occupies a larger volume at the lower pressure (an inverse pressure-volume relationship).\n\n(b) The metal cylinder is rigid, so its volume cannot change. The amount of gas and its temperature are unchanged, so the number, speed and collision frequency of the particles inside are unchanged; therefore the internal pressure stays the same regardless of the lower external pressure. Only the flexible balloon, whose volume can change, responds by expanding.\n\n(c) Cooling alone reduces the kinetic energy of the particles, so they move more slowly and collide with the balloon walls less often and with less force. The external pressure then pushes the balloon inward, so it shrinks (its volume decreases).",
            markScheme: [
              "(a) Balloon expands / gets bigger (1)",
              "(a) Lower external atmospheric pressure pushes in less (1)",
              "(a) Gas expands until internal pressure balances the lower external pressure (1)",
              "(b) Rigid cylinder volume cannot change (1)",
              "(b) Number/speed/collisions of particles unchanged → internal pressure unchanged (1)",
              "(c) Cooling → particles slower → fewer/gentler collisions → balloon shrinks (1)",
              "(c) Volume decreases (1)",
            ],
            commonError: "Saying the rigid cylinder's pressure changes with the outside air — its internal pressure depends on the gas inside (fixed amount, volume and temperature), not the external pressure.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "challenge",
            hints: [
              "The balloon is flexible; what balances the internal and external pressures?",
              "Lower outside pressure means less push inward.",
              "For (b), a rigid container cannot change volume — so what stays constant?",
              "For (c), cooling slows the particles and weakens their wall collisions.",
            ],
            strategy: "compare flexible vs rigid containers; separate pressure and temperature effects",
          },
        ],
      },
      {
        id: "chem-particles-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Synthesis across states, changes of state, heating curves and diffusion.",
        questions: [
          {
            id: "chem-particles-bq4-01",
            question: "Describe the arrangement and movement of the particles in a liquid. [2]",
            marks: 2,
            modelAnswer: "In a liquid the particles are close together but arranged irregularly (no regular pattern). They are in constant random motion and can slide/move past one another within the bulk of the liquid.",
            markScheme: [
              "Particles close together but irregularly arranged/disordered (1)",
              "Particles move randomly / can slide past one another (1)",
            ],
            commonError: "Describing liquid particles as 'far apart' — they are close together, just disordered and able to move past each other.",
            guideRef: "The Three States of Matter",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bq4-02",
            question: "State whether energy is absorbed or released in each of the following changes of state: (a) condensation; (b) melting; (c) freezing. [3]",
            marks: 3,
            modelAnswer: "(a) Condensation: energy is released. (b) Melting: energy is absorbed. (c) Freezing: energy is released.",
            markScheme: [
              "(a) Condensation: energy released (1)",
              "(b) Melting: energy absorbed (1)",
              "(c) Freezing: energy released (1)",
            ],
            commonError: "Thinking melting releases energy — melting absorbs energy to break the forces holding particles in the lattice.",
            guideRef: "Changes of State",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bq4-03",
            question: "Sketch and label the heating curve obtained when a pure solid is heated steadily until it becomes a gas. Identify, on your description, the two plateaus and state what is happening to the particles during each. [4]",
            marks: 4,
            modelAnswer: "The curve rises (solid warming), then is flat at the melting point (first plateau), then rises (liquid warming), then is flat at the boiling point (second plateau), then rises (gas warming). During the first plateau (melting), the particles are breaking free from their fixed positions in the lattice as the forces between them are weakened/broken; temperature is constant. During the second plateau (boiling), the remaining forces between particles are completely overcome so the particles separate fully into a gas; temperature is constant.",
            markScheme: [
              "Correct overall shape: rise – plateau – rise – plateau – rise (1)",
              "First plateau = melting point; second plateau = boiling point (1)",
              "During melting: particles break free from lattice / forces weakened, temperature constant (1)",
              "During boiling: forces completely overcome / particles fully separate, temperature constant (1)",
            ],
            commonError: "Drawing only one plateau or putting the plateaus on a sloping line — both plateaus must be horizontal (constant temperature).",
            guideRef: "Heating and Cooling Curves",
            difficulty: "core",
            hints: [
              "There are five sections: three slopes and two flat plateaus.",
              "Plateaus line up with the melting point and the boiling point.",
              "Say what happens to the forces between particles at each plateau.",
            ],
            strategy: "build the curve section by section",
          },
          {
            id: "chem-particles-bq4-04",
            question: "A student claims: 'A solid always has a higher density than the same substance as a gas because solid particles are heavier.' Identify the error in this statement and give the correct explanation for the difference in density. [3]",
            marks: 3,
            modelAnswer: "The error is the idea that the particles are 'heavier' in the solid — the particles are the same particles with the same mass in both states. The correct reason is that in the solid the particles are packed very closely together, so a given volume contains many particles and therefore a large mass (high density). In the gas the particles are very widely separated with large empty spaces, so the same volume contains far fewer particles and much less mass (low density). It is the spacing of the particles, not their mass, that differs.",
            markScheme: [
              "Identifies error: particles are the same / have the same mass in both states (1)",
              "Solid: particles packed closely → many particles/large mass per unit volume → high density (1)",
              "Gas: particles widely separated → few particles per unit volume → low density (1)",
            ],
            commonError: "Agreeing that the particles change mass — the particles are identical; only their spacing (and so the number per unit volume) changes.",
            guideRef: "The Three States of Matter",
            difficulty: "core",
            hints: [
              "Do the particles themselves change when a substance changes state?",
              "Density is mass per unit volume.",
              "How many particles are in a given volume of solid versus gas?",
            ],
            strategy: "correct the misconception, then explain via spacing and density",
          },
          {
            id: "chem-particles-bq4-05",
            question: "Solid carbon dioxide (dry ice) is used to keep ice cream frozen during transport. It is observed to disappear over time, leaving no liquid behind, and a white mist forms in the air around it.\n(a) Name the change of state taking place in the dry ice. [1]\n(b) Explain, in terms of particles, why no liquid is observed. [2]\n(c) Suggest why a white mist forms in the air around the dry ice. [2]",
            marks: 5,
            modelAnswer: "(a) Sublimation.\n\n(b) The particles in the solid CO₂ gain enough energy to break free completely from the forces holding them in the lattice and escape directly as gas particles, without ever forming the close, disordered arrangement of a liquid — so no liquid is seen. (At atmospheric pressure CO₂ cannot exist as a liquid.)\n\n(c) The very cold CO₂ gas cools the surrounding air. This lowers the air temperature below the point at which the water vapour in the air condenses, so tiny droplets of liquid water form in the air — seen as a white mist.",
            markScheme: [
              "(a) Sublimation (1)",
              "(b) Particles break free directly from solid to gas / no liquid arrangement formed (1)",
              "(b) CO₂ goes straight from solid to gas (cannot be liquid at atmospheric pressure) (1)",
              "(c) Cold CO₂ gas cools the surrounding air (1)",
              "(c) Water vapour in the air condenses into tiny droplets → white mist (1)",
            ],
            commonError: "Thinking the white mist is the carbon dioxide gas itself — CO₂ gas is colourless; the mist is condensed water droplets from the air.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "Recall the change of state that skips the liquid stage.",
              "Explain why the particles never form a liquid.",
              "For (c), what does the cold gas do to the water vapour in the air?",
              "Cooling water vapour makes it condense into visible droplets.",
            ],
            strategy: "name the change, explain no liquid, then explain the mist separately",
          },
          {
            id: "chem-particles-bq4-06",
            question: "Explain why the smell of a gas released at one end of a still, draught-free room takes some time to be noticed at the other end, even though gas particles move at hundreds of metres per second. [3]",
            marks: 3,
            modelAnswer: "Although individual gas particles move very fast, they do not travel in straight lines across the room. They are constantly colliding with the many air particles in their path and are knocked in random directions after every collision. Because of these frequent collisions, a particle follows a long, zig-zag path and its net progress across the room is slow. So, even at high individual speeds, diffusion of the smell across the room takes a noticeable time.",
            markScheme: [
              "Particles collide frequently with air particles (1)",
              "After each collision they change direction / move randomly (zig-zag path) (1)",
              "Net movement across the room is therefore slow despite high speeds (1)",
            ],
            commonError: "Assuming particles travel in straight lines — the many collisions with air particles make the net diffusion slow.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "High speed does not mean a straight path.",
              "What does a gas particle keep bumping into in the air?",
              "How does changing direction after every collision affect net progress?",
            ],
            strategy: "distinguish particle speed from net diffusion progress",
          },
          {
            id: "chem-particles-bq4-07",
            question: "A student investigates how temperature affects the rate of diffusion. They place a drop of food colouring into beakers of water at 10 °C, 25 °C and 60 °C and time how long it takes for the colour to spread evenly.\n(a) State and explain the expected trend in the results. [3]\n(b) Identify two variables that should be kept the same for a fair test. [2]",
            marks: 5,
            modelAnswer: "(a) The colour should spread evenly fastest in the 60 °C water and slowest in the 10 °C water. As temperature increases, the water (and colouring) particles gain more kinetic energy and move faster, so they diffuse and mix more quickly, reducing the time for the colour to spread evenly.\n\n(b) Any two of: the volume of water in each beaker; the amount/number of drops of food colouring; the type/concentration of food colouring; the size/shape of the beaker; not stirring any of them. (Each must be a genuine control variable.)",
            markScheme: [
              "(a) Diffusion fastest at the highest temperature (60 °C), slowest at 10 °C / time decreases as temperature rises (1)",
              "(a) Higher temperature → more kinetic energy → particles move faster (1)",
              "(a) Faster particles diffuse/mix more quickly (1)",
              "(b) One valid control variable (e.g. volume of water) (1)",
              "(b) A second valid control variable (e.g. amount of food colouring) (1)",
            ],
            commonError: "Listing temperature as a control variable — temperature is the independent variable being changed, so it must not be controlled.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Which beaker should show the fastest spreading, and why?",
              "Link temperature to particle speed to diffusion rate.",
              "A control variable is something kept the same in all three beakers.",
              "Do not list the variable you are deliberately changing.",
            ],
            strategy: "predict the trend with reasoning, then identify controls",
          },
          {
            id: "chem-particles-bq4-08",
            question: "Explain, in terms of particles and the forces between them, why energy must be supplied to melt a solid and to boil a liquid, and why this energy does not raise the temperature during the change of state. [4]",
            marks: 4,
            modelAnswer: "In a solid the particles are held in fixed positions by forces of attraction; to melt the solid, energy must be supplied to weaken/break these forces so the particles can move past one another. To boil the liquid, even more energy must be supplied to completely overcome the remaining forces of attraction so the particles can separate fully into a gas. During each change of state, the energy supplied is used to overcome these forces between particles rather than to increase the kinetic energy of the particles. Because temperature depends on the average kinetic energy, and that is not increasing, the temperature stays constant until the change of state is complete.",
            markScheme: [
              "Melting: energy supplied to weaken/break forces holding particles in the lattice (1)",
              "Boiling: energy supplied to completely overcome forces so particles separate into a gas (1)",
              "Energy goes into overcoming forces between particles, not into kinetic energy (1)",
              "Temperature depends on average kinetic energy, so it stays constant during the change (1)",
            ],
            commonError: "Saying the energy 'makes the particles hotter' during melting/boiling — during the change of state the energy breaks forces and the temperature stays constant.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "What must happen to the forces between particles to melt, then to boil?",
              "Boiling separates particles more completely than melting.",
              "Where does the supplied energy go during a change of state?",
              "Temperature tracks average kinetic energy — is that changing?",
            ],
            strategy: "energy breaks forces (not raising KE) ⇒ constant temperature",
          },
          {
            id: "chem-particles-bq4-09",
            question: "CHALLENGE: A heating curve is recorded for a 100 g sample of a pure substance heated at a constant power of 50 W. The solid warms for 40 s, then the temperature is constant for 120 s (melting), then the liquid warms.\n(a) Calculate the energy supplied during the melting plateau. [2]\n(b) The same experiment is repeated with a 200 g sample of the same pure substance at the same constant power. State and explain what happens to the length of the melting plateau. [2]\n(c) Explain why the melting plateau is perfectly flat for this pure substance, but would be sloped for an impure sample. [2]",
            marks: 6,
            modelAnswer: "(a) Energy = power × time = 50 W × 120 s = 6000 J (6.0 kJ). (Energy = P × t with P in watts and t in seconds gives joules.)\n\n(b) The melting plateau would be longer (about twice as long, ~240 s). There is twice as much substance, so twice as many particle-to-particle forces must be broken, requiring twice as much energy to melt it all. At the same constant power, supplying twice the energy takes twice the time, so the plateau lasts longer.\n\n(c) For a pure substance all the particles are identical with the same forces between them, so they all melt at exactly the same temperature, giving a flat plateau. In an impure sample there are different types of particle with different strengths of force between them, so they melt at different temperatures over a range, giving a sloped (not flat) transition.",
            markScheme: [
              "(a) Energy = power × time = 50 × 120 (1)",
              "(a) = 6000 J / 6.0 kJ (1)",
              "(b) Plateau longer (≈ twice as long / ~240 s) (1)",
              "(b) Twice the substance → twice the energy to break forces → longer time at constant power (1)",
              "(c) Pure: identical particles melt at one temperature → flat plateau (1)",
              "(c) Impure: different particles/forces melt over a range → sloped transition (1)",
            ],
            commonError: "For (a), using the wrong time (e.g. the 40 s warming time) — the melting energy uses the 120 s plateau duration.",
            guideRef: "Heating and Cooling Curves",
            difficulty: "challenge",
            hints: [
              "Energy supplied = power × time; keep power in watts and time in seconds.",
              "Use the plateau duration (120 s), not the warming time.",
              "For (b), doubling the mass doubles the number of forces to break.",
              "For (c), think about whether all particles are identical.",
            ],
            strategy: "E = Pt on the plateau; scale with mass; link purity to plateau shape",
            solutions: [
              {
                label: "Energy from power and time",
                steps: [
                  "Energy = power × time",
                  "Power = 50 W, plateau time = 120 s",
                  "Energy = 50 × 120 = 6000 J = 6.0 kJ",
                  "Doubling the mass doubles the energy needed (12 kJ), so at 50 W the plateau lasts ~240 s",
                ],
              },
            ],
          },
          {
            id: "chem-particles-bq4-10",
            question: "CHALLENGE: A long horizontal tube has a cotton-wool pad soaked in concentrated ammonia (NH₃, Mr = 17) at the X end and a pad soaked in a different concentrated acid that releases hydrogen bromide gas (HBr, Mr = 81) at the Y end. The tube is 98 cm long and a white ring of ammonium bromide forms inside it.\n(a) Calculate the ratio of the diffusion rate of NH₃ to that of HBr. [2]\n(b) Calculate the distance from the X (ammonia) end at which the white ring forms. [2]\n(c) Compared with the standard NH₃/HCl experiment, state and explain whether the ring forms closer to or further from the acid end. [2]",
            marks: 6,
            modelAnswer: "(a) By Graham's law, rate ∝ 1/√Mr. Rate(NH₃)/Rate(HBr) = √(Mr(HBr)/Mr(NH₃)) = √(81/17) = √4.76 = 2.18 (to 3 s.f.). NH₃ diffuses about 2.18 times as fast as HBr.\n\n(b) In the same time, distance ∝ rate, so NH₃ travels 2.18 times as far as HBr. Let HBr distance = d, NH₃ distance = 2.18d. Then 2.18d + d = 98 cm, so 3.18d = 98, d = 30.8 cm. NH₃ travels 2.18 × 30.8 = 67.2 cm. The ring forms about 67 cm from the X (ammonia) end.\n\n(c) The ring forms closer to the acid (Y) end than in the standard NH₃/HCl experiment. HBr (Mr = 81) is heavier than HCl (Mr = 36.5), so HBr diffuses more slowly relative to NH₃. NH₃ therefore travels an even greater fraction of the tube before meeting it, so the ring forms even nearer the acid end.",
            markScheme: [
              "(a) Rate ratio = √(81/17) = √4.76 ≈ 2.18 (1 method, 1 answer)",
              "(b) 2.18d + d = 98 → d = 30.8 cm; NH₃ distance ≈ 67 cm from X end (1 method, 1 answer)",
              "(c) Ring forms closer to the acid (Y) end (1)",
              "(c) HBr heavier than HCl → diffuses more slowly → NH₃ travels relatively further (1)",
            ],
            commonError: "Inverting the Graham's law ratio (using √(17/81)) and concluding HBr is faster — the lighter NH₃ must be faster, so the ratio must be greater than 1.",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "Use rate ∝ 1/√Mr with the heavier Mr on top of the fraction.",
              "√(81/17) = √4.76.",
              "Distance is proportional to rate; set NH₃ distance + HBr distance = 98 cm.",
              "For (c), compare HBr (81) with HCl (36.5) to judge the shift.",
            ],
            strategy: "Graham's law ratio, meeting-point algebra, then comparison",
            solutions: [
              {
                label: "Graham's law and meeting point",
                steps: [
                  "Rate(NH₃)/Rate(HBr) = √(Mr_HBr / Mr_NH₃) = √(81/17) = √4.76 = 2.18",
                  "Distance ∝ rate, so NH₃ distance = 2.18 × HBr distance",
                  "Let HBr distance = d: 2.18d + d = 98 ⇒ 3.18d = 98 ⇒ d = 30.8 cm",
                  "NH₃ distance = 2.18 × 30.8 = 67.2 cm ≈ 67 cm from the X (ammonia) end",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
