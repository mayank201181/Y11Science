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
        "Sublimation is solid → gas directly (e.g. iodine, dry ice).",
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
        "At IGCSE, these relationships are qualitative (no calculations with PV = nRT required for Extended 0620).",
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

A **white ring of ammonium chloride** (NH₄Cl) forms inside the tube. Because NH₃ molecules are lighter (Mr = 17) than HCl molecules (Mr = 36.5), NH₃ diffuses faster and travels further before the two gases meet. The white ring therefore forms **closer to the HCl end**.`,
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
      ],
      thinkDeeper: "Graham's law states that the rate of diffusion is inversely proportional to the square root of the molar mass: rate ∝ 1/√Mr. Using this, the ratio of diffusion speeds of NH₃ to HCl is √36.5/√17 ≈ 1.47. So NH₃ travels about 1.5× as far before they meet — which is consistent with where the ring actually appears. Can you use this to predict where the ring would form in a 60 cm tube?",
      discovery: {
        problem: "Two gas jars are connected: one contains brown bromine gas and the other contains air. Both jars are sealed with a glass plate between them. When the plate is removed, what do you predict will happen, and why?",
        idea: "The brown colour gradually spreads upward into the air jar and fades in the bromine jar until both jars are uniformly pale brown. This happens because bromine molecules (and air molecules) are in constant random motion and diffuse down their respective concentration gradients until concentrations equalise.",
      },
      strategies: ["Mr comparison", "relative speed reasoning", "gradient direction"],
      whyItWorks: "At a given temperature, all gas molecules have the same average kinetic energy (½mv² = constant). So lighter molecules (smaller m) must have larger average speed v. Faster molecules spread through space more quickly, giving a higher rate of diffusion. This is the molecular-level basis of Graham's law.",
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
      "Sublimation is the direct change from solid to gas (e.g. iodine, dry ice).",
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
        description: "10 questions covering states of matter, particle properties, and changes of state.",
        questions: [
          {
            id: "chem-particles-bm1-01",
            question: "Which statement about the particles in a solid is correct?",
            options: [
              "They move freely throughout the solid",
              "They are in a regular arrangement and vibrate about fixed positions",
              "They are far apart with negligible forces between them",
              "They are disordered and can slide past each other",
            ],
            answerIndex: 1,
            explanation: "Solid particles are in a regular lattice and vibrate about fixed positions. They cannot move freely (that is a liquid), nor are they far apart (that is a gas), nor disordered (that is a liquid).",
            guideRef: "The Three States of Matter",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bank-mcq1-q02",
            question: "A pure substance is heated and its temperature recorded. Which description matches a plateau on the temperature–time graph?",
            options: [
              "Kinetic energy of particles is increasing rapidly",
              "A change of state is occurring and intermolecular forces are being broken",
              "The substance is cooling down",
              "The particles are accelerating to higher speeds",
            ],
            answerIndex: 1,
            explanation: "A flat plateau means temperature (and therefore kinetic energy) is not changing. Energy input is breaking intermolecular forces during the change of state rather than raising particle speed.",
            guideRef: "Heating and Cooling Curves",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bank-mcq1-q03",
            question: "A student places potassium manganate(VII) crystals at the bottom of a beaker of water. After one hour the purple colour has spread throughout the water. Which process is responsible?",
            options: [
              "Convection, because the liquid is warm",
              "Diffusion, because particles move from high to low concentration",
              "Boiling, because the crystals release gas",
              "Sublimation, because the solid converts directly to gas",
            ],
            answerIndex: 1,
            explanation: "The purple KMnO₄ ions diffuse through the water from the high-concentration region near the crystals to the low-concentration region above. This is evidence for random particle motion in liquids.",
            guideRef: "Diffusion",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bank-mcq1-q04",
            question: "A fixed amount of gas is trapped in a sealed container. The temperature is increased. Which row correctly describes the change in pressure and the explanation?",
            options: [
              "Pressure decreases; particles move away from the walls",
              "Pressure increases; particles move faster and collide with walls more often and with greater force",
              "Pressure stays the same; temperature does not affect gases in sealed containers",
              "Pressure increases; there are more particles at higher temperature",
            ],
            answerIndex: 1,
            explanation: "Increasing temperature increases kinetic energy, so particles move faster. They hit the container walls more frequently and with greater force, increasing the pressure. The number of particles does not change.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "core",
            hints: [
              "What does temperature measure at particle level?",
              "How does particle speed affect wall collisions?",
              "The number of particles is fixed in a sealed container.",
            ],
          },
          {
            id: "chem-particles-bank-mcq1-q05",
            question: "Which change of state is correctly described as exothermic (releases energy to the surroundings)?",
            options: [
              "Melting",
              "Evaporation",
              "Condensation",
              "Sublimation",
            ],
            answerIndex: 2,
            explanation: "Condensation (gas → liquid) releases energy as intermolecular forces reform. Melting, evaporation and sublimation all require energy input to break forces between particles — they are endothermic.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "Changes that break forces between particles require energy input (endothermic).",
              "Changes that form forces between particles release energy (exothermic).",
              "Which of the options involves particles coming together and forming forces?",
            ],
          },
          {
            id: "chem-particles-bank-mcq1-q06",
            question: "Four gases are released simultaneously from one end of a long tube at the same temperature. Which gas reaches the other end first?",
            options: [
              "Carbon dioxide, CO₂ (Mr = 44)",
              "Nitrogen, N₂ (Mr = 28)",
              "Methane, CH₄ (Mr = 16)",
              "Sulfur dioxide, SO₂ (Mr = 64)",
            ],
            answerIndex: 2,
            explanation: "Rate of diffusion is inversely proportional to the square root of Mr (Graham's law). CH₄ has the smallest Mr (16) and therefore the highest average speed and fastest diffusion rate — it reaches the other end first.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Calculate or compare the Mr values of each gas.",
              "Lower Mr → faster diffusion. Which has the lowest Mr?",
            ],
          },
        ],
      },
      {
        id: "chem-particles-bank-mcq-2",
        title: "States of Matter & Particles — MCQ Paper 2",
        description: "6 questions including challenge items on diffusion rates and gas behaviour.",
        questions: [
          {
            id: "chem-particles-bank-mcq2-q01",
            question: "Ice is heated at a constant rate from −20 °C to 120 °C. At which stage is energy being used to break lattice forces rather than increase kinetic energy?",
            options: [
              "When the temperature rises from −20 °C to 0 °C",
              "When the temperature is constant at 0 °C",
              "When the temperature rises from 0 °C to 100 °C",
              "When the temperature rises from 100 °C to 120 °C",
            ],
            answerIndex: 1,
            explanation: "At 0 °C the temperature is constant — this is the melting point of water. Energy supplied during this plateau breaks lattice forces (intermolecular forces in ice) rather than increasing kinetic energy.",
            guideRef: "Heating and Cooling Curves",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bank-mcq2-q02",
            question: "Which of the following is NOT evidence for the random motion of particles?",
            options: [
              "The spreading of a drop of ink in water",
              "The smell of perfume detected across a room",
              "The high density of solids compared to gases",
              "The diffusion of bromine vapour through air",
            ],
            answerIndex: 2,
            explanation: "High density of solids compared to gases is evidence for the close packing and ordering of particles in solids — it is not evidence of particle motion. The other three are all examples of diffusion/random spreading, which demonstrates random particle motion.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Which option describes a property rather than a movement?",
              "Diffusion, smell spreading, and ink dispersing are all examples of particle movement.",
            ],
          },
          {
            id: "chem-particles-bank-mcq2-q03",
            question: "A liquid evaporates from a test tube. Which observation is consistent with evaporation causing cooling?",
            options: [
              "The temperature of the liquid rises as it evaporates",
              "The temperature of the liquid falls below the surrounding air temperature",
              "The liquid expands in volume as it evaporates",
              "The liquid becomes more viscous during evaporation",
            ],
            answerIndex: 1,
            explanation: "Evaporating liquids cool because the fastest (most energetic) particles escape, reducing the average kinetic energy of those remaining. This can cause the liquid temperature to fall below the ambient temperature — a phenomenon exploited in refrigeration and sweating.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "Which particles escape during evaporation — fast or slow ones?",
              "What happens to average kinetic energy when the fastest particles leave?",
            ],
          },
          {
            id: "chem-particles-bank-mcq2-q04",
            question: "A gas is compressed to half its original volume at constant temperature. Which statement about the gas pressure is correct?",
            options: [
              "Pressure halves, because the particles slow down",
              "Pressure doubles, because the particles are forced to collide twice as often with the walls per unit area",
              "Pressure stays the same, because temperature is constant",
              "Pressure doubles, because the particles move faster at smaller volume",
            ],
            answerIndex: 1,
            explanation: "At constant temperature, halving the volume doubles the number of particles per unit volume. This doubles the collision frequency with the walls per unit area, doubling the pressure (Boyle's law). Particle speed does not change at constant temperature.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "core",
            hints: [
              "Temperature is constant, so kinetic energy and speed of particles do not change.",
              "Halving the volume doubles the particle density (particles per cm³).",
              "More particles in the same area hitting the wall → more collisions per second.",
            ],
          },
          {
            id: "chem-particles-bank-mcq2-q05",
            question: "In the ammonia–HCl tube experiment, the tube is 48 cm long. Given that ammonia (Mr = 17) diffuses approximately 1.47 times faster than HCl (Mr = 36.5), approximately how far from the ammonia end does the white ring form?",
            options: [
              "12 cm",
              "24 cm",
              "29 cm",
              "36 cm",
            ],
            answerIndex: 2,
            explanation: "Let x = distance NH₃ travels; then HCl travels (48 − x). Since NH₃ is 1.47× faster, x/(48−x) = 1.47 → x = 1.47(48−x) → x = 70.56 − 1.47x → 2.47x = 70.56 → x ≈ 28.6 cm ≈ 29 cm from the NH₃ end.",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "The two gases travel in opposite directions and meet when their distances add up to 48 cm.",
              "Set up the equation: distance of NH₃ = 1.47 × distance of HCl.",
              "Let x = NH₃ distance; (48 − x) = HCl distance.",
              "Solve: x = 1.47(48 − x).",
            ],
            strategy: "algebraic ratio",
          },
          {
            id: "chem-particles-bank-mcq2-q06",
            question: "A student records a heating curve for a sample that melts over a temperature range (not at a single fixed temperature). This most likely indicates that the sample is:",
            options: [
              "A pure element",
              "A pure compound",
              "A mixture of two substances",
              "A substance that sublimates",
            ],
            answerIndex: 2,
            explanation: "Pure substances melt at a sharp, fixed temperature (a flat plateau). Mixtures melt over a range of temperatures because different components have different melting points. A sloped melting region (rather than a flat plateau) is a test for impurity.",
            guideRef: "Heating and Cooling Curves",
            difficulty: "core",
            hints: [
              "What does a flat, sharp plateau indicate about purity?",
              "If different particles have different forces between them, do they all melt at the same temperature?",
            ],
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "chem-particles-bank-qa-1",
        title: "States of Matter & Particles — Structured Paper 1",
        description: "4 structured questions on particle theory, state properties, and heating curves.",
        questions: [
          {
            id: "chem-particles-bank-qa1-q01",
            question: "Complete the table below by filling in the missing properties of each state of matter.\n\n| Property | Solid | Liquid | Gas |\n|---|---|---|---|\n| Shape | Fixed | _______ | No fixed shape |\n| Volume | Fixed | Fixed | _______ |\n| Compressibility | Very low | Very low | _______ |\n| Particle arrangement | Regular lattice | _______ | Random |\n\n[4 marks]",
            marks: 4,
            modelAnswer: "| Property | Solid | Liquid | Gas |\n|---|---|---|---|\n| Shape | Fixed | No fixed shape | No fixed shape |\n| Volume | Fixed | Fixed | No fixed volume |\n| Compressibility | Very low | Very low | High |\n| Particle arrangement | Regular lattice | Irregular/disordered | Random |",
            markScheme: [
              "Liquid shape: no fixed shape / takes shape of container (1)",
              "Gas volume: no fixed volume / expands to fill container (1)",
              "Gas compressibility: high / easily compressed (1)",
              "Liquid arrangement: irregular / disordered / random (1)",
            ],
            commonError: "Students often give 'no fixed shape' for gas compressibility rather than 'high'.",
            guideRef: "The Three States of Matter",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bank-qa1-q02",
            question: "Ethanol has a melting point of −114 °C and a boiling point of 78 °C. A sample of ethanol is heated from −130 °C to 90 °C at a constant rate.\n(a) Sketch the shape of the heating curve, labelling the melting point plateau, boiling point plateau and the three sloping regions. [3]\n(b) The boiling plateau is much longer than the melting plateau. Using ideas about intermolecular forces, explain why. [3]\n(c) Predict whether the melting plateau would be sharper or more gradual for an impure sample of ethanol. Explain your answer. [2]",
            marks: 8,
            modelAnswer: "(a) Heating curve: rising slope from −130 °C to −114 °C (solid ethanol); flat plateau at −114 °C (melting); rising slope from −114 °C to 78 °C (liquid ethanol); flat plateau at 78 °C (boiling); rising slope above 78 °C (ethanol vapour). Labels at both plateaus.\n\n(b) During boiling, all remaining intermolecular forces between ethanol molecules must be completely overcome to separate them into individual gas molecules — this requires a large amount of energy (latent heat of vaporisation). During melting, the molecules are only partially freed from the lattice; they are still close together and intermolecular forces are only weakened, not fully broken. Less energy is needed, so the melting plateau is shorter.\n\n(c) The melting plateau would be more gradual (sloped) and occur over a range of temperatures rather than at a single temperature. An impure sample contains different types of particles with different intermolecular forces; they do not all change state at the same temperature, so the transition is spread over a range.",
            markScheme: [
              "(a) Two flat plateaus at correct temperatures (−114 °C and 78 °C) (1)",
              "(a) Three sloping regions between and outside the plateaus (1)",
              "(a) Labels: melting point, boiling point, solid, liquid, gas sections (1)",
              "(b) Boiling requires complete separation of particles / complete breaking of all intermolecular forces (1)",
              "(b) Melting only partially frees particles from lattice / forces weakened not eliminated (1)",
              "(b) Greater energy needed for vaporisation → longer plateau (1)",
              "(c) Melting plateau more gradual / occurs over a temperature range (1)",
              "(c) Impurities have different melting points / different intermolecular forces (1)",
            ],
            commonError: "For (b), students often write 'boiling needs more heat because it is hotter' — this is not the explanation. The key is the extent to which intermolecular forces are broken.",
            guideRef: "Heating and Cooling Curves",
            difficulty: "core",
            hints: [
              "For (a), mark the two plateaus first, then connect with slopes.",
              "For (b), ask: in melting vs boiling, how completely are intermolecular forces broken?",
              "For (c), a pure substance melts at one exact temperature because all particles are identical.",
            ],
            strategy: "structured multi-part; intermolecular force reasoning",
          },
          {
            id: "chem-particles-bank-qa1-q03",
            question: "A student designs an experiment to compare the rate of diffusion of two gases, sulfur dioxide (SO₂, Mr = 64) and hydrogen sulfide (H₂S, Mr = 34). Both gases have unpleasant smells and are harmful.\n(a) Predict, with an explanation, which gas would diffuse faster at the same temperature. [2]\n(b) The student says: 'I will open a sample of each gas at opposite ends of a long room and time how long it takes for the smell to reach the middle of the room.' Identify one scientific limitation of this method. [1]\n(c) Suggest a safer laboratory method to compare the rates of diffusion of these two gases. [2]",
            marks: 5,
            modelAnswer: "(a) H₂S diffuses faster. It has a lower relative molecular mass (34) than SO₂ (64). At the same temperature, molecules have the same average kinetic energy (½mv² = constant), so lighter H₂S molecules have a higher average speed and therefore diffuse at a greater rate.\n\n(b) Convection currents in the air / draughts would carry the gases and make the comparison unreliable — diffusion alone would not be responsible for the gas movement.\n\n(c) Use indicator paper (e.g. moistened lead ethanoate paper for H₂S) fixed at regular intervals along a sealed horizontal glass tube. Release each gas from one end of the tube and measure the distance the gas travels in a fixed time (or time to reach a set distance). The tube must be sealed and horizontal to prevent convection, and work should be carried out in a fume cupboard.",
            markScheme: [
              "(a) H₂S diffuses faster (1)",
              "(a) Lower Mr → lighter molecules → higher average speed at same temperature (1)",
              "(b) Convection currents / draughts / not just diffusion causing movement / human detection unreliable (any 1 valid limitation) (1)",
              "(c) Use horizontal sealed tube to prevent convection (1)",
              "(c) Use a detector/indicator at intervals along the tube / time to reach a fixed distance (1)",
            ],
            commonError: "For (b), students often say 'smell is subjective' — while true, the better scientific limitation is convection affecting the result.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "For (a), compare Mr values and use the kinetic energy argument.",
              "For (b), think about what else could move gases around a room other than diffusion.",
              "For (c), a controlled tube experiment removes air movement; you need a way to detect the gas position.",
            ],
            strategy: "experimental design; controlled variable identification",
          },
          {
            id: "chem-particles-bank-qa1-q04",
            question: "CHALLENGE: A student compresses a fixed mass of gas at constant temperature from a volume of 500 cm³ to 200 cm³.\n(a) Using kinetic particle theory, explain why the pressure increases when the gas is compressed. [3]\n(b) Calculate the ratio of the new pressure to the original pressure. Show your working. [2]\n(c) The student then heats the compressed gas (at constant volume) from 25 °C to 75 °C. Describe and explain qualitatively the effect on the gas pressure. [2]",
            marks: 7,
            modelAnswer: "(a) When the gas is compressed into a smaller volume, the same number of particles now occupy a smaller space. The particles hit the walls of the container more frequently (the distance they travel between collisions is shorter). The force per unit area on the walls (pressure) therefore increases. (Temperature is constant, so particle speed and force per collision are unchanged.)\n\n(b) By Boyle's law (P₁V₁ = P₂V₂ at constant T): P₂/P₁ = V₁/V₂ = 500/200 = 2.5. The new pressure is 2.5 times the original pressure.\n\n(c) The pressure increases further. Heating the gas increases the kinetic energy of the particles; they move faster and hit the walls with greater force and more frequently. Since the volume is fixed, this increased collision force and frequency raises the pressure.",
            markScheme: [
              "(a) Same number of particles in smaller volume (1)",
              "(a) Particles hit walls more frequently / shorter distance between collisions (1)",
              "(a) Greater force per unit area / pressure increases (1)",
              "(b) P₂/P₁ = V₁/V₂ = 500/200 = 2.5 (1 for method, 1 for answer)",
              "(c) Pressure increases (1)",
              "(c) Higher temperature → greater kinetic energy → faster particles → harder, more frequent collisions with walls (1)",
            ],
            commonError: "For (b), students often invert the ratio and get 0.4 — remember that as volume decreases, pressure increases (inverse relationship).",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "challenge",
            hints: [
              "For (a): if volume halves, how does the number of particles per cm³ change?",
              "For (b): use P₁V₁ = P₂V₂ (Boyle's law). Rearrange for P₂/P₁.",
              "For (b): 500 cm³ → 200 cm³. What is 500/200?",
              "For (c): temperature increases at constant V. Use the wall-collision argument for pressure.",
            ],
            strategy: "Boyle's law; particle collision model; quantitative ratio",
            solutions: [
              {
                label: "Method 1: Boyle's law ratio",
                steps: [
                  "P₁V₁ = P₂V₂ at constant temperature",
                  "P₂/P₁ = V₁/V₂ = 500/200 = 2.5",
                  "New pressure = 2.5 × original pressure",
                ],
              },
              {
                label: "Method 2: particle density argument",
                steps: [
                  "Original volume 500 cm³ → compressed to 200 cm³",
                  "Volume ratio = 200/500 = 0.4 (volume decreased to 40% of original)",
                  "Same particles now in 40% of the space → 2.5× as many particles per cm³",
                  "2.5× more frequent wall collisions → pressure is 2.5× original",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "chem-particles-bank-qa-2",
        title: "States of Matter & Particles — Structured Paper 2",
        description: "4 structured questions emphasising diffusion, evaporation, and challenge application.",
        questions: [
          {
            id: "chem-particles-bank-qa2-q01",
            question: "Describe the arrangement, separation and motion of particles in a gas, and use these ideas to explain why a gas fills its container. [4]",
            marks: 4,
            modelAnswer: "In a gas, particles are widely separated with large empty spaces between them. They are arranged randomly with no regular pattern. Particles move rapidly in all directions with random, constant motion. Because there are negligible forces between gas particles, they are not held in any fixed positions and move in straight lines until they collide with another particle or the container walls. They bounce off the walls and spread throughout the entire available space, so the gas fills its container.",
            markScheme: [
              "Particles widely separated / large spaces between them (1)",
              "Random arrangement (1)",
              "Rapid, random motion in all directions (1)",
              "Negligible forces between particles / free to move anywhere / fills container (1)",
            ],
            commonError: "Students describe the motion as 'slow' or 'vibration' — gas particles move rapidly and translate (move position), not just vibrate.",
            guideRef: "The Three States of Matter",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bank-qa2-q02",
            question: "A perfume bottle is opened in one corner of a room. A person at the opposite corner eventually detects the smell.\n(a) Name the process by which the perfume molecules reach the person. [1]\n(b) The room is at 20 °C. The experiment is repeated in a room at 35 °C. Describe and explain the effect on the time taken for the smell to be detected. [3]\n(c) Perfume X contains molecules of Mr = 250. Perfume Y contains molecules of Mr = 100. If both are released in identical rooms at the same temperature, predict which will be detected first. Justify your answer quantitatively using relative rates. [3]",
            marks: 7,
            modelAnswer: "(a) Diffusion.\n\n(b) The smell is detected more quickly at 35 °C. Higher temperature gives perfume molecules greater kinetic energy, so they move faster. Faster-moving molecules diffuse at a greater rate, reaching the person in less time.\n\n(c) Perfume Y (Mr = 100) will be detected first. Rate of diffusion is proportional to 1/√Mr (Graham's law). Rate(Y)/Rate(X) = √(Mr(X)/Mr(Y)) = √(250/100) = √2.5 ≈ 1.58. Perfume Y molecules diffuse approximately 1.6× faster than Perfume X molecules at the same temperature.",
            markScheme: [
              "(a) Diffusion (1)",
              "(b) Detected more quickly / in less time (1)",
              "(b) Higher temperature → greater kinetic energy → particles move faster (1)",
              "(b) Faster particles diffuse at greater rate (1)",
              "(c) Perfume Y detected first (1)",
              "(c) Rate ∝ 1/√Mr; Rate(Y)/Rate(X) = √(250/100) (1)",
              "(c) = √2.5 ≈ 1.58 / Y is about 1.6× faster (1)",
            ],
            commonError: "For (c), students sometimes calculate √(100/250) instead of √(250/100) and get Y is slower — remember: smaller Mr = larger rate, so the ratio must be > 1 for Y.",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "For (b): temperature → kinetic energy → speed → diffusion rate. Link all four.",
              "For (c): Graham's law: rate ∝ 1/√Mr. To compare rates, form a ratio.",
              "Rate(Y)/Rate(X) = √(Mr_X / Mr_Y). Check your fraction is the right way round — smaller Mr should give larger rate.",
              "√(250/100) = √2.5. Calculate this.",
            ],
            strategy: "Graham's law ratio; kinetic energy argument",
            solutions: [
              {
                label: "Graham's law calculation",
                steps: [
                  "Graham's law: rate ∝ 1/√Mr",
                  "Rate(Y)/Rate(X) = √(Mr(X)) / √(Mr(Y)) = √250 / √100",
                  "= 15.81 / 10.00 = 1.58",
                  "Perfume Y diffuses ~1.6× faster → detected first",
                ],
              },
            ],
          },
          {
            id: "chem-particles-bank-qa2-q03",
            question: "A nurse applies an alcohol-based antiseptic to a patient's skin. The patient notices the skin feels cold as the alcohol evaporates.\n(a) Using kinetic particle theory, explain why evaporation causes the skin to feel cold. [4]\n(b) The nurse blows gently on the wet skin. Suggest and explain why this makes the skin feel colder. [2]\n(c) Explain why boiling alcohol at 78 °C does NOT feel the same as evaporation from the skin at body temperature (37 °C), even though both involve liquid → gas transitions. [2]",
            marks: 8,
            modelAnswer: "(a) In the liquid alcohol, particles have a range of kinetic energies. The fastest-moving particles at the surface have enough kinetic energy to overcome the intermolecular forces holding them in the liquid and escape into the gas phase. The slower particles remain. As the highest-energy particles are lost, the average kinetic energy of the remaining particles falls. Since temperature is proportional to average kinetic energy, the temperature of the remaining liquid decreases. This cold liquid draws heat from the skin, making it feel cold.\n\n(b) Blowing removes alcohol vapour from just above the skin surface, reducing the concentration of vapour immediately above the liquid. This steepens the concentration gradient, increasing the rate of evaporation. Faster evaporation removes more high-energy particles per second, cooling the skin more rapidly.\n\n(c) Boiling occurs throughout the bulk liquid at a fixed temperature when a sustained energy supply (heat source) maintains that temperature. Evaporation from skin occurs only at the surface at 37 °C — well below the boiling point — and is driven by the fastest particles escaping; no sustained external heat source is involved, and the bulk liquid cools rather than staying at constant temperature.",
            markScheme: [
              "(a) Particles have a range of kinetic energies (1)",
              "(a) Fastest/most energetic particles escape from the surface (1)",
              "(a) Average kinetic energy of remaining liquid falls (1)",
              "(a) Temperature of liquid falls / draws heat from skin (1)",
              "(b) Vapour removed / concentration gradient steepened (1)",
              "(b) Rate of evaporation increases / more rapid cooling (1)",
              "(c) Boiling is throughout the bulk at fixed temperature with energy supply; evaporation is at the surface below boiling point (1)",
              "(c) Evaporation cools the liquid; boiling occurs at constant temperature (1)",
            ],
            commonError: "For (a), students say 'evaporation takes heat from the skin' without explaining why the liquid cools (the departure of high-energy particles).",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "For (a): particles in a liquid don't all move at the same speed — there's a distribution of speeds.",
              "Which particles are able to escape from a liquid surface?",
              "If the fastest particles leave, what happens to the average speed/energy of those remaining?",
              "For (b): think about what blowing does to the vapour concentration just above the surface.",
            ],
            strategy: "kinetic energy distribution; concentration gradient argument",
          },
          {
            id: "chem-particles-bank-qa2-q04",
            question: "CHALLENGE: Dry ice (solid CO₂) sublimates at −78 °C at atmospheric pressure. A 44 g block of dry ice (Mr(CO₂) = 44, so this is 1 mol) is placed in a sealed 10 dm³ container at 20 °C and allowed to fully sublimate.\n(a) Name the change of state occurring and describe it in terms of particles. [2]\n(b) Using the concept of diffusion and random particle motion, explain how the CO₂ molecules eventually spread throughout the container. [2]\n(c) The container is then placed in a freezer at −100 °C. Predict and explain what you would observe. [2]\n(d) A student claims that the CO₂ in the sealed container at 20 °C has a higher pressure than the atmosphere outside. Using kinetic particle theory, justify whether this claim is reasonable. [3]",
            marks: 9,
            modelAnswer: "(a) Sublimation: direct change of state from solid to gas without passing through the liquid state. Particles in the solid lattice gain sufficient energy to completely break free from all intermolecular forces and escape as rapidly-moving, widely-separated gas molecules.\n\n(b) The CO₂ molecules move rapidly and randomly in all directions. After sublimating, they diffuse from the high-concentration region near the dry ice into the lower-concentration region of the rest of the container, down the concentration gradient. This continues until CO₂ is evenly distributed throughout the 10 dm³.\n\n(c) CO₂ gas would solidify again (re-sublime in reverse / deposit). At −100 °C (below the sublimation point of −78 °C), the CO₂ molecules lose kinetic energy and intermolecular forces become sufficient to hold them in a solid lattice. The gas converts directly to solid (deposition/reverse sublimation). A white frost/solid deposit of dry ice would appear on the container walls.\n\n(d) The claim is reasonable. After sublimation, 1 mol of CO₂ occupies 10 dm³ at 20 °C (293 K). Using PV = nRT qualitatively: at 0 °C and 1 atm, 1 mol of an ideal gas occupies 22.4 dm³. Our gas occupies only 10 dm³ at a higher temperature (293 K vs 273 K). The temperature correction slightly increases the pressure, but the dominant effect is the smaller volume — 22.4/10 × correction ≈ 2.4× atmospheric pressure. So yes, the pressure inside is approximately 2–3 times atmospheric pressure, meaning the claim is reasonable.",
            markScheme: [
              "(a) Sublimation / solid to gas directly / no liquid phase (1)",
              "(a) Particles break free from lattice / gain energy to overcome all intermolecular forces (1)",
              "(b) Molecules move randomly / diffuse from high to low concentration (1)",
              "(b) Spread throughout container until uniform / down concentration gradient (1)",
              "(c) CO₂ solidifies / deposits as solid / reverse of sublimation (1)",
              "(c) Below sublimation point, particles lose energy / intermolecular forces strong enough to reform solid (1)",
              "(d) Correct reasoning: 1 mol in 10 dm³ vs normal 22.4 dm³ at STP → higher pressure (1)",
              "(d) Qualitative or quantitative comparison showing pressure > 1 atm (1)",
              "(d) Claim is reasonable / pressure approximately 2× atmospheric (1)",
            ],
            commonError: "For (c), students often say the CO₂ condenses to a liquid — but CO₂ at atmospheric pressure cannot exist as a liquid; it goes directly from gas to solid (deposition).",
            guideRef: "Changes of State",
            difficulty: "challenge",
            hints: [
              "For (a): look up sublimation — it goes solid → gas, skipping liquid.",
              "For (b): use 'diffusion', 'concentration gradient', and 'random motion' in your answer.",
              "For (c): what happens when you cool a gas below its normal sublimation temperature? Can CO₂ form a liquid at atmospheric pressure?",
              "For (d): at STP, 1 mol of any gas ≈ 22.4 dm³. Here 1 mol is in 10 dm³. What does that tell you about pressure?",
            ],
            strategy: "sublimation direction; molar volume comparison; qualitative PV reasoning",
          },
        ],
      },
    ],
  },
};
