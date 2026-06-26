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
        description: "Ten MCQs spanning states of matter, changes of state, heating curves, gases and diffusion.",
        questions: [
          {
            id: "chem-particles-bm1-01",
            question: "Which property is shared by a solid and a liquid but NOT by a gas?",
            options: [
              "A fixed shape",
              "A fixed volume",
              "High compressibility",
              "Widely separated particles",
            ],
            answerIndex: 1,
            explanation: "Both solids and liquids have a fixed (definite) volume because their particles are touching. A gas has no fixed volume. A fixed shape belongs only to solids, and high compressibility/wide separation belong only to gases.",
            guideRef: "The Three States of Matter",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm1-02",
            question: "In which state are the particles arranged in a regular, ordered pattern?",
            options: [
              "Gas only",
              "Liquid only",
              "Solid only",
              "Both liquid and gas",
            ],
            answerIndex: 2,
            explanation: "Only solids have particles in a regular, ordered lattice. Liquid particles are close but disordered, and gas particles are random and widely separated.",
            guideRef: "The Three States of Matter",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm1-03",
            question: "Which change of state is correctly named?",
            options: [
              "Liquid → solid is called melting",
              "Solid → gas is called condensation",
              "Gas → liquid is called condensation",
              "Liquid → gas at the surface is called boiling",
            ],
            answerIndex: 2,
            explanation: "Gas → liquid is condensation. Liquid → solid is freezing (melting is solid → liquid); solid → gas is sublimation; and liquid → gas at the surface only is evaporation (boiling occurs throughout the bulk at the boiling point).",
            guideRef: "Changes of State",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm1-04",
            question: "Why does a gas exert a pressure on the walls of its container?",
            options: [
              "The particles are attracted to the walls",
              "The particles collide with the walls",
              "The particles dissolve into the walls",
              "The particles vibrate without moving position",
            ],
            answerIndex: 1,
            explanation: "Gas pressure is caused by the constant bombardment of the container walls by rapidly moving gas particles. Each collision exerts a tiny force; the total force per unit area is the pressure.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "core",
            hints: [
              "Pressure is force per unit area.",
              "Gas particles are in constant rapid motion in all directions.",
              "What happens each time a moving particle reaches a wall?",
            ],
          },
          {
            id: "chem-particles-bm1-05",
            question: "During the boiling of a pure liquid the temperature stays constant. This is because the energy supplied is used to:",
            options: [
              "Increase the kinetic energy of the liquid particles",
              "Overcome the remaining intermolecular forces and separate the particles",
              "Increase the temperature of the surroundings",
              "Compress the gas that is formed",
            ],
            answerIndex: 1,
            explanation: "At the boiling point all the energy supplied goes into completely overcoming the intermolecular forces (latent heat of vaporisation), separating particles into the gas phase. None goes into raising kinetic energy, so the temperature stays constant.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "Temperature is a measure of average kinetic energy.",
              "If the temperature is constant, kinetic energy is not changing.",
              "Where must the supplied energy be going during a change of state?",
            ],
          },
          {
            id: "chem-particles-bm1-06",
            question: "A sealed gas syringe is cooled in iced water at constant pressure (the plunger can move). What happens to the volume of the gas, and why?",
            options: [
              "Volume increases; particles move faster and spread out",
              "Volume decreases; particles move slower so the plunger moves in",
              "Volume stays the same; cooling does not affect gases",
              "Volume decreases; the particles become smaller",
            ],
            answerIndex: 1,
            explanation: "Cooling lowers the kinetic energy of the particles, so they hit the plunger less often and with less force. At constant external pressure the plunger moves inward until the pressures balance, so the volume decreases. Particles do not change size.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "core",
            hints: [
              "Cooling reduces particle speed and collision force.",
              "The plunger is free to move, so the pressure inside must match the outside.",
              "Particles themselves never shrink or grow — only their motion changes.",
            ],
          },
          {
            id: "chem-particles-bm1-07",
            question: "Bromine vapour (brown) is placed in the bottom gas jar and air in the top jar. The cover slip between them is removed and the brown colour slowly spreads upward. What does this demonstrate?",
            options: [
              "Air particles are heavier than bromine particles",
              "Particles are in constant random motion (diffusion)",
              "Bromine reacts chemically with the air",
              "Convection currents carry the bromine upward",
            ],
            answerIndex: 1,
            explanation: "The brown bromine spreads into the air, and air spreads into the bromine, by diffusion — the net movement of particles from high to low concentration due to constant random motion. No reaction occurs, and diffusion (not convection) drives the spreading even though bromine vapour is denser than air.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "The colour spreads without heating or stirring.",
              "Bromine is actually denser than air, yet it still moves upward.",
              "What kind of particle movement spreads substances down a concentration gradient?",
            ],
          },
          {
            id: "chem-particles-bm1-08",
            question: "Two gases are released at the same temperature. Helium (Mr = 4) and oxygen (Mr = 32). How many times faster does helium diffuse than oxygen?",
            options: [
              "About 2 times faster",
              "About 2.8 times faster",
              "About 8 times faster",
              "The same rate",
            ],
            answerIndex: 1,
            explanation: "Rate of diffusion ∝ 1/√Mr. Ratio = √(Mr(O₂)/Mr(He)) = √(32/4) = √8 = 2.83. Helium diffuses about 2.8 times faster than oxygen.",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "Use Graham's law: rate ∝ 1/√Mr.",
              "Ratio of rates = √(Mr of heavier / Mr of lighter).",
              "√(32/4) = √8.",
              "√8 is between 2.8 and 2.9.",
            ],
            strategy: "Graham's law ratio",
          },
          {
            id: "chem-particles-bm1-09",
            question: "A pure substance and an impure sample of the same substance are each heated. Compared with the pure substance, the impure sample will:",
            options: [
              "Melt at a single, sharp temperature that is higher",
              "Melt over a range of temperatures, beginning at a lower temperature",
              "Not melt at all",
              "Melt at exactly the same sharp temperature",
            ],
            answerIndex: 1,
            explanation: "Impurities lower the melting point and broaden it into a range rather than a single sharp value. A sharp, fixed melting point is a test of purity.",
            guideRef: "Heating and Cooling Curves",
            difficulty: "challenge",
            hints: [
              "Pure substances have a sharp, fixed melting point.",
              "Impurities disrupt the regularity of the lattice.",
              "Think about whether impurities raise or lower the melting point, and whether it stays sharp.",
            ],
          },
          {
            id: "chem-particles-bm1-10",
            question: "On a cooling curve for a pure liquid being cooled to a solid, a flat plateau appears. During this plateau, which statement is correct?",
            options: [
              "Energy is absorbed and the particles speed up",
              "Energy is released as intermolecular forces reform, while temperature stays constant",
              "The temperature falls steadily as the liquid solidifies",
              "No energy change occurs at all",
            ],
            answerIndex: 1,
            explanation: "Freezing is exothermic: as forces reform between particles, energy is released to the surroundings. The temperature stays constant during the plateau because this released energy keeps the temperature steady until all the liquid has solidified.",
            guideRef: "Heating and Cooling Curves",
            difficulty: "core",
            hints: [
              "A cooling curve plateau is the freezing point.",
              "Forming forces between particles releases energy (exothermic).",
              "Why does the temperature hold steady rather than keep dropping?",
            ],
          },
        ],
      },
      {
        id: "chem-particles-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Ten MCQs on particle properties, gas laws (qualitative) and diffusion comparisons.",
        questions: [
          {
            id: "chem-particles-bm2-01",
            question: "Which row correctly describes a gas?",
            options: [
              "Fixed shape, fixed volume, particles vibrate in place",
              "No fixed shape, fixed volume, particles slide past each other",
              "No fixed shape, no fixed volume, particles widely separated and fast",
              "Fixed shape, no fixed volume, particles in a lattice",
            ],
            answerIndex: 2,
            explanation: "A gas has no fixed shape and no fixed volume; its particles are widely separated and move rapidly and randomly. The other rows describe solids or liquids.",
            guideRef: "The Three States of Matter",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm2-02",
            question: "Which list places the three states in order of increasing density (lowest first) for a typical substance?",
            options: [
              "Solid, liquid, gas",
              "Gas, liquid, solid",
              "Liquid, solid, gas",
              "Gas, solid, liquid",
            ],
            answerIndex: 1,
            explanation: "Density order is solid > liquid >> gas, so increasing density (lowest first) is gas, liquid, solid. Gases have the most empty space between particles, giving the lowest density.",
            guideRef: "The Three States of Matter",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm2-03",
            question: "Which process is endothermic (absorbs energy from the surroundings)?",
            options: [
              "Freezing",
              "Condensation",
              "Sublimation",
              "Deposition (gas → solid)",
            ],
            answerIndex: 2,
            explanation: "Sublimation (solid → gas) requires energy to break intermolecular forces, so it is endothermic. Freezing, condensation and deposition all form forces between particles and release energy (exothermic).",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "Breaking forces between particles needs energy (endothermic).",
              "Forming forces between particles releases energy (exothermic).",
              "Which option moves particles further apart?",
            ],
          },
          {
            id: "chem-particles-bm2-04",
            question: "A fixed mass of gas in a sealed rigid container is heated. Which quantity does NOT change?",
            options: [
              "The pressure of the gas",
              "The average speed of the particles",
              "The volume of the gas",
              "The frequency of collisions with the walls",
            ],
            answerIndex: 2,
            explanation: "In a sealed rigid container the volume is fixed, so it cannot change. Heating increases particle speed, collision frequency and force, and therefore the pressure.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "core",
            hints: [
              "Read carefully: the container is rigid.",
              "What does 'rigid' tell you about the volume?",
              "Heating raises particle speed, so which quantities must rise?",
            ],
          },
          {
            id: "chem-particles-bm2-05",
            question: "Evaporation can occur:",
            options: [
              "Only at the boiling point",
              "At any temperature, from the surface of the liquid",
              "Only throughout the whole bulk of the liquid",
              "Only when the liquid is heated above 100 °C",
            ],
            answerIndex: 1,
            explanation: "Evaporation happens at the surface of a liquid at any temperature below the boiling point, when the fastest surface particles escape. Boiling, by contrast, occurs throughout the bulk only at the boiling point.",
            guideRef: "Changes of State",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm2-06",
            question: "Which factor will increase the rate of evaporation of a puddle of water?",
            options: [
              "Lower temperature",
              "Increasing the surface area exposed to the air",
              "Increasing the humidity of the air above it",
              "Reducing the wind over the surface",
            ],
            answerIndex: 1,
            explanation: "A larger surface area lets more particles escape per second, increasing the rate of evaporation. Higher temperature, drier air (low humidity) and more wind also speed evaporation; the options listing lower temperature, higher humidity and less wind would all slow it.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "Evaporation happens at the surface.",
              "More surface means more particles can escape at once.",
              "Wind and dry air remove vapour and speed evaporation, so reducing them slows it.",
            ],
          },
          {
            id: "chem-particles-bm2-07",
            question: "Four gases at the same temperature diffuse along identical tubes. Which diffuses the slowest?",
            options: [
              "Ammonia, NH₃ (Mr = 17)",
              "Hydrogen chloride, HCl (Mr = 36.5)",
              "Chlorine, Cl₂ (Mr = 71)",
              "Methane, CH₄ (Mr = 16)",
            ],
            answerIndex: 2,
            explanation: "Rate ∝ 1/√Mr, so the gas with the largest Mr diffuses the slowest. Chlorine (Mr = 71) is the heaviest and therefore the slowest.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Slower diffusion goes with larger relative molecular mass.",
              "Compare the Mr values and pick the largest.",
            ],
          },
          {
            id: "chem-particles-bm2-08",
            question: "In the NH₃/HCl tube (30 cm long), the white ring of NH₄Cl forms 12 cm from the HCl end. The NH₃ travelled the rest of the tube. What is the approximate ratio of the speed of NH₃ to the speed of HCl?",
            options: [
              "0.67",
              "1.5",
              "1.47",
              "2.0",
            ],
            answerIndex: 1,
            explanation: "The two gases meet at the ring, so their distances add to 30 cm. The ring is 12 cm from the HCl end, so HCl travelled 12 cm and NH₃ travelled the remaining 18 cm (NH₃ is lighter, so it travels further). Speed ratio = distance(NH₃)/distance(HCl) = 18/12 = 1.5, close to the theoretical √(36.5/17) ≈ 1.47.",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "The ring forms where the two gases meet; distances add up to the tube length.",
              "NH₃ is lighter, so it must travel the greater distance.",
              "Speed ratio = distance(NH₃) / distance(HCl) for the same time.",
              "18/12 = 1.5, which is close to the theoretical 1.47.",
            ],
            strategy: "distance ratio in equal time",
          },
          {
            id: "chem-particles-bm2-09",
            question: "Diffusion in liquids is much slower than diffusion in gases. The best explanation is that in a liquid:",
            options: [
              "Particles do not move at all",
              "Particles are closer together and collide more frequently, hindering net movement",
              "Particles are heavier in liquids than in gases",
              "There is no concentration gradient in liquids",
            ],
            answerIndex: 1,
            explanation: "In a liquid the particles are close together, so a diffusing particle collides very frequently with its neighbours and makes slow net progress. In a gas there is much more empty space, so particles travel further between collisions and diffuse much faster.",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "Compare the spacing of particles in liquids and gases.",
              "More crowding means more collisions per second.",
              "Frequent collisions slow the net movement down the gradient.",
              "Relate frequency of collisions to how far a particle gets per second.",
            ],
          },
          {
            id: "chem-particles-bm2-10",
            question: "A heating curve has two plateaus. The first plateau is at 0 °C and the second at 100 °C, and the second is longer. Which substance is being heated, and what does the longer second plateau show?",
            options: [
              "Water; more energy is needed for boiling than for melting",
              "Water; melting needs more energy than boiling",
              "Ethanol; the plateaus are at its melting and boiling points",
              "Iron; the plateaus show its very high melting point",
            ],
            answerIndex: 0,
            explanation: "Plateaus at 0 °C and 100 °C are the melting and boiling points of water at standard pressure. The longer boiling plateau shows that more energy (latent heat of vaporisation) is needed to fully separate particles in boiling than to free them from the lattice in melting.",
            guideRef: "Heating and Cooling Curves",
            difficulty: "core",
            hints: [
              "Which common substance melts at 0 °C and boils at 100 °C?",
              "The longer plateau means more energy was absorbed there.",
              "Compare the energy needed to melt versus to boil.",
            ],
          },
        ],
      },
      {
        id: "chem-particles-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Ten MCQs revisiting kinetic theory, energy changes and applied diffusion.",
        questions: [
          {
            id: "chem-particles-bm3-01",
            question: "Which statement about compressibility is correct?",
            options: [
              "Solids are easily compressed because their particles vibrate",
              "Liquids are highly compressible because particles slide",
              "Gases are highly compressible because of large spaces between particles",
              "Gases cannot be compressed at all",
            ],
            answerIndex: 2,
            explanation: "Gases are highly compressible because there is a large amount of empty space between particles, which can be reduced. Solids and liquids have particles already touching, so they are virtually incompressible.",
            guideRef: "The Three States of Matter",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm3-02",
            question: "What is sublimation?",
            options: [
              "Liquid changing to gas at the surface",
              "Solid changing directly to gas without becoming a liquid",
              "Gas changing directly to liquid",
              "Solid changing to liquid",
            ],
            answerIndex: 1,
            explanation: "Sublimation is the direct change from solid to gas without passing through the liquid state, seen in substances such as iodine and dry ice (solid CO₂).",
            guideRef: "Changes of State",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm3-03",
            question: "When a liquid is heated steadily before it boils, what happens to its particles?",
            options: [
              "They gain kinetic energy and move faster",
              "They lose kinetic energy and slow down",
              "They become fixed in a lattice",
              "They stop moving entirely",
            ],
            answerIndex: 0,
            explanation: "Heating a liquid (below its boiling point) increases the kinetic energy of its particles, so they move faster and the temperature rises. This is the sloping liquid region of a heating curve.",
            guideRef: "Heating and Cooling Curves",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm3-04",
            question: "A gas at constant temperature is allowed to expand to twice its original volume. What happens to the pressure?",
            options: [
              "It doubles",
              "It halves",
              "It stays the same",
              "It quadruples",
            ],
            answerIndex: 1,
            explanation: "At constant temperature, pressure and volume are inversely proportional (Boyle's law). Doubling the volume spreads the same number of particles over twice the space, halving the collision frequency per unit area and so halving the pressure.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "core",
            hints: [
              "Temperature is constant, so particle speed does not change.",
              "Spreading particles over a bigger volume reduces how often they hit each unit of wall.",
              "Pressure × volume is constant at fixed temperature.",
            ],
          },
          {
            id: "chem-particles-bm3-05",
            question: "Why does blowing across a cup of hot tea cool it faster?",
            options: [
              "Blowing adds cold particles to the tea",
              "Blowing removes water vapour above the surface, increasing the rate of evaporation",
              "Blowing increases the boiling point of the tea",
              "Blowing makes the tea particles vibrate less",
            ],
            answerIndex: 1,
            explanation: "Blowing sweeps away the water vapour that builds up just above the surface. This keeps the concentration gradient steep, so more high-energy particles evaporate per second, removing energy faster and cooling the tea more quickly.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "Evaporation removes the fastest particles, cooling what is left.",
              "Vapour collecting above the surface slows further evaporation.",
              "What does moving air do to that layer of vapour?",
            ],
          },
          {
            id: "chem-particles-bm3-06",
            question: "Which observation provides direct evidence that gas particles are in constant random motion?",
            options: [
              "A gas can be compressed",
              "Smoke particles viewed under a microscope jiggle in random directions (Brownian motion)",
              "A gas has a low density",
              "A gas has no fixed shape",
            ],
            answerIndex: 1,
            explanation: "Brownian motion — the random jiggling of small visible particles such as smoke or pollen — is caused by collisions with fast-moving, randomly moving gas (or liquid) molecules. It is direct evidence of random particle motion. Compressibility and low density relate to spacing, not motion.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Look for an observation that shows movement, not just spacing.",
              "What makes tiny visible specks jiggle randomly in air or water?",
              "This effect is named after the scientist Robert Brown.",
            ],
          },
          {
            id: "chem-particles-bm3-07",
            question: "At the same temperature, which sample of gas particles has the highest average speed?",
            options: [
              "Hydrogen, H₂ (Mr = 2)",
              "Oxygen, O₂ (Mr = 32)",
              "Carbon dioxide, CO₂ (Mr = 44)",
              "Argon, Ar (Mr = 40)",
            ],
            answerIndex: 0,
            explanation: "At the same temperature all gases have the same average kinetic energy (½mv²). The lightest particles must therefore move fastest. Hydrogen (Mr = 2) is by far the lightest, so it has the highest average speed.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Same temperature means same average kinetic energy for all the gases.",
              "If kinetic energy is equal, lighter particles move faster.",
              "Which gas has the smallest Mr?",
            ],
          },
          {
            id: "chem-particles-bm3-08",
            question: "An unknown gas X diffuses 4 times faster than oxygen (Mr = 32) at the same temperature. What is the approximate Mr of gas X?",
            options: [
              "2",
              "8",
              "16",
              "128",
            ],
            answerIndex: 0,
            explanation: "Rate ∝ 1/√Mr, so (rate X / rate O₂) = √(Mr(O₂)/Mr(X)). 4 = √(32/Mr(X)) → 16 = 32/Mr(X) → Mr(X) = 32/16 = 2. Gas X has Mr ≈ 2 (it is hydrogen).",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "Use rate ∝ 1/√Mr and set up a ratio.",
              "4 = √(32 / Mr(X)).",
              "Square both sides: 16 = 32 / Mr(X).",
              "Rearrange for Mr(X).",
            ],
            strategy: "Graham's law rearrangement",
          },
          {
            id: "chem-particles-bm3-09",
            question: "Why does increasing the temperature of a gas at constant volume increase its pressure?",
            options: [
              "More gas particles are created",
              "Particles move faster, hitting the walls harder and more often",
              "The container shrinks",
              "Particles attract each other more strongly",
            ],
            answerIndex: 1,
            explanation: "Higher temperature means greater average kinetic energy, so particles move faster. They strike the walls more frequently and with greater force; with the volume fixed, this raises the pressure. The number of particles does not change.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "core",
            hints: [
              "Pressure depends on how often and how hard particles hit the walls.",
              "Heating changes the speed of the particles.",
              "The amount of gas and the volume are both fixed.",
            ],
          },
          {
            id: "chem-particles-bm3-10",
            question: "Iodine is gently warmed in a test tube and a purple vapour forms; on the cool upper glass, grey-black crystals reappear. The two changes occurring are:",
            options: [
              "Melting then freezing",
              "Sublimation then deposition (gas → solid)",
              "Boiling then condensation",
              "Evaporation then melting",
            ],
            answerIndex: 1,
            explanation: "Iodine sublimes (solid → gas) on warming, and the vapour deposits directly back to solid (gas → solid) on the cool glass, without forming a liquid. This pair is sublimation followed by deposition.",
            guideRef: "Changes of State",
            difficulty: "challenge",
            hints: [
              "Note that no liquid iodine is described at any stage.",
              "Solid to gas directly has a special name.",
              "The reverse, gas straight to solid, is deposition.",
            ],
          },
        ],
      },
      {
        id: "chem-particles-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Ten MCQs combining states, energy, gas behaviour and quantitative diffusion.",
        questions: [
          {
            id: "chem-particles-bm4-01",
            question: "Which statement about liquids is correct?",
            options: [
              "They have a fixed shape and a fixed volume",
              "They have a fixed volume but take the shape of their container",
              "They are highly compressible",
              "Their particles are widely separated",
            ],
            answerIndex: 1,
            explanation: "A liquid has a definite volume but no fixed shape — it takes the shape of its container. Its particles are close together (so it is nearly incompressible) but disordered and able to slide.",
            guideRef: "The Three States of Matter",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm4-02",
            question: "Which pair of changes of state both release energy to the surroundings?",
            options: [
              "Melting and boiling",
              "Freezing and condensation",
              "Evaporation and sublimation",
              "Melting and evaporation",
            ],
            answerIndex: 1,
            explanation: "Freezing (liquid → solid) and condensation (gas → liquid) both form forces between particles and release energy, so both are exothermic. Melting, boiling, evaporation and sublimation all absorb energy.",
            guideRef: "Changes of State",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm4-03",
            question: "On a heating curve, the gradient (steepness) of a sloping section depends on how quickly the temperature rises. During which section will the temperature generally NOT be rising?",
            options: [
              "The solid-warming section",
              "The melting plateau",
              "The liquid-warming section",
              "The gas-warming section",
            ],
            answerIndex: 1,
            explanation: "At the melting plateau the temperature is constant (does not rise) because energy is breaking lattice forces, not raising kinetic energy. The three sloping sections all show rising temperature.",
            guideRef: "Heating and Cooling Curves",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm4-04",
            question: "A diver's air bubble rises from deep water to the surface, where the pressure is lower, at roughly constant temperature. What happens to the bubble?",
            options: [
              "It shrinks, because pressure decreases",
              "It expands, because lower pressure allows the gas to occupy more volume",
              "It stays the same size",
              "It disappears completely",
            ],
            answerIndex: 1,
            explanation: "At constant temperature, decreasing the external pressure lets the gas expand (Boyle's law: P and V are inversely proportional). With less pressure squeezing it, the bubble grows as it rises.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "core",
            hints: [
              "Temperature is roughly constant, so think about pressure and volume.",
              "As the bubble rises, the water pressure on it falls.",
              "Lower pressure on a gas allows it to take up more space.",
            ],
          },
          {
            id: "chem-particles-bm4-05",
            question: "Why is the latent heat of vaporisation larger than the latent heat of fusion for the same substance?",
            options: [
              "Boiling happens at a higher temperature",
              "Boiling completely separates particles, fully overcoming intermolecular forces, whereas melting only loosens the lattice",
              "Melting releases energy while boiling absorbs it",
              "Fusion involves more particles than vaporisation",
            ],
            answerIndex: 1,
            explanation: "Melting only partially frees particles from fixed lattice positions while keeping them close together. Boiling must completely overcome the remaining intermolecular forces to separate particles into a gas, which needs much more energy — so vaporisation has the larger latent heat.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "Compare how far apart the particles end up in each change.",
              "In melting, particles stay close; in boiling, they become widely separated.",
              "More complete separation needs more energy.",
            ],
          },
          {
            id: "chem-particles-bm4-06",
            question: "A balloon is taken from a warm room into a freezer. At roughly constant pressure, what is observed and why?",
            options: [
              "The balloon expands because particles slow down",
              "The balloon shrinks because the particles move slower and exert less push, so volume decreases",
              "The balloon stays the same because gas is sealed inside",
              "The balloon bursts because pressure rises sharply",
            ],
            answerIndex: 1,
            explanation: "Cooling lowers the kinetic energy of the gas particles, so they hit the balloon wall less often and with less force. At constant external pressure the balloon shrinks until the inside and outside pressures balance.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "core",
            hints: [
              "The balloon's flexible wall keeps the pressure roughly constant.",
              "Cooling reduces particle speed and collision force.",
              "If the particles push less, the volume must change to rebalance pressure.",
            ],
          },
          {
            id: "chem-particles-bm4-07",
            question: "Two cotton wool plugs, one soaked in concentrated ammonia and one in concentrated hydrochloric acid, are placed at opposite ends of a tube. A white ring forms. Which statement is correct?",
            options: [
              "The ring forms exactly in the middle of the tube",
              "The ring forms nearer the HCl end because NH₃ diffuses faster",
              "The ring forms nearer the ammonia end because HCl diffuses faster",
              "No ring forms because the gases do not react",
            ],
            answerIndex: 1,
            explanation: "NH₃ (Mr = 17) is lighter than HCl (Mr = 36.5), so it diffuses faster and travels further before they meet. The white ring of NH₄Cl forms nearer the (slower) HCl end.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Compare the relative molecular masses of NH₃ and HCl.",
              "The lighter gas travels further in the same time.",
              "The ring forms where they meet — nearer the slower gas's end.",
            ],
          },
          {
            id: "chem-particles-bm4-08",
            question: "Gas A diffuses 1.5 times faster than gas B at the same temperature. If gas B has Mr = 36, what is the approximate Mr of gas A?",
            options: [
              "16",
              "24",
              "54",
              "81",
            ],
            answerIndex: 0,
            explanation: "Rate A / rate B = √(Mr(B)/Mr(A)). So 1.5 = √(36/Mr(A)) → 2.25 = 36/Mr(A) → Mr(A) = 36/2.25 = 16. Gas A has Mr ≈ 16.",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "Use rate ∝ 1/√Mr, so the ratio of rates = √(Mr(B)/Mr(A)).",
              "1.5 = √(36 / Mr(A)).",
              "Square both sides: 2.25 = 36 / Mr(A).",
              "Mr(A) = 36 / 2.25.",
            ],
            strategy: "Graham's law rearrangement",
          },
          {
            id: "chem-particles-bm4-09",
            question: "Which statement best explains why a smell from cooking spreads through a house even with no draughts?",
            options: [
              "The smell molecules are pushed by gravity",
              "The smell molecules diffuse, moving randomly from high to low concentration",
              "The air in the house is being heated everywhere equally",
              "The smell molecules are attracted to people",
            ],
            answerIndex: 1,
            explanation: "Smell molecules spread by diffusion: they move randomly and there is a net movement from the high concentration near the source to the lower concentration elsewhere, until the smell is evenly distributed. No draught is required.",
            guideRef: "Diffusion",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bm4-10",
            question: "A sealed flask of gas is heated so that its absolute temperature doubles (volume fixed). Using kinetic theory, the pressure will:",
            options: [
              "Stay the same",
              "Roughly double, because particles collide about twice as energetically/frequently overall",
              "Halve",
              "Fall to zero",
            ],
            answerIndex: 1,
            explanation: "At constant volume, pressure is proportional to the absolute temperature. Doubling the absolute temperature roughly doubles the pressure, because the particles strike the walls harder and more often. (IGCSE treats this qualitatively — the key idea is pressure rises with temperature at fixed volume.)",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "challenge",
            hints: [
              "At fixed volume, pressure rises with absolute temperature.",
              "Doubling the temperature increases collision force and frequency.",
              "Think proportionally: roughly double temperature, roughly double pressure.",
            ],
            strategy: "qualitative pressure–temperature proportionality",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "chem-particles-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Ten structured questions on states, changes of state and heating curves.",
        questions: [
          {
            id: "chem-particles-bq1-01",
            question: "State three differences between the particles in a solid and the particles in a gas. [3]",
            marks: 3,
            modelAnswer: "1. Arrangement: solid particles are in a regular, ordered lattice, whereas gas particles are arranged randomly. 2. Separation: solid particles are very close together (touching), whereas gas particles are widely separated with large spaces between them. 3. Motion: solid particles only vibrate about fixed positions, whereas gas particles move rapidly and randomly in all directions.",
            markScheme: [
              "Arrangement: solid regular/ordered vs gas random (1)",
              "Separation: solid close/touching vs gas widely separated (1)",
              "Motion: solid vibrate in fixed positions vs gas move rapidly/randomly (1)",
            ],
            commonError: "Students sometimes give a property of the bulk material (e.g. 'solids are hard') rather than a difference in the particles themselves.",
            guideRef: "The Three States of Matter",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bq1-02",
            question: "Name the change of state for each of the following, and state whether it absorbs or releases energy.\n(a) Liquid water turning to ice. [1]\n(b) Steam turning to liquid water. [1]\n(c) Solid carbon dioxide turning directly to gas. [1]",
            marks: 3,
            modelAnswer: "(a) Freezing (solidification); it releases energy (exothermic). (b) Condensation; it releases energy (exothermic). (c) Sublimation; it absorbs energy (endothermic).",
            markScheme: [
              "(a) Freezing / solidification, releases energy (1)",
              "(b) Condensation, releases energy (1)",
              "(c) Sublimation, absorbs energy (1)",
            ],
            commonError: "Students often label condensation as 'evaporation in reverse' without naming it, or mislabel freezing as 'melting'.",
            guideRef: "Changes of State",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bq1-03",
            question: "Explain, in terms of particles and energy, why the temperature of a pure solid does not change while it is melting. [3]",
            marks: 3,
            modelAnswer: "While a pure solid is melting, the energy supplied is used to break (overcome) the forces holding the particles in their fixed lattice positions, rather than to increase their kinetic energy. Because temperature is a measure of average kinetic energy, and the kinetic energy is not increasing, the temperature stays constant. Once all the solid has melted, further energy raises the kinetic energy and the temperature rises again.",
            markScheme: [
              "Energy used to break/overcome forces between particles (1)",
              "Kinetic energy of particles does not increase (1)",
              "Temperature is a measure of average KE, so temperature stays constant (1)",
            ],
            commonError: "Students say the energy is 'stored' without explaining it goes into breaking intermolecular forces, or wrongly claim 'the solid is too cold to heat up'.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "What is temperature a measure of at the particle level?",
              "If temperature is constant, kinetic energy is constant.",
              "Where does the supplied energy go during melting?",
            ],
          },
          {
            id: "chem-particles-bq1-04",
            question: "A pure substance is heated steadily from solid to gas. Its heating curve has five distinct regions.\n(a) List the five regions in order. [2]\n(b) Identify the two regions where the temperature stays constant and name the change of state in each. [2]\n(c) Explain why the second flat region is longer than the first. [2]",
            marks: 6,
            modelAnswer: "(a) 1. Solid warming (rising); 2. Melting (flat); 3. Liquid warming (rising); 4. Boiling (flat); 5. Gas warming (rising).\n\n(b) The two flat regions are melting (solid → liquid) and boiling (liquid → gas). The temperature is constant in both because energy is used to change state, not to raise kinetic energy.\n\n(c) The boiling plateau is longer because more energy (latent heat of vaporisation) is needed to completely overcome all the intermolecular forces and fully separate the particles into a gas than is needed during melting, which only partially frees particles from the lattice while they remain close together.",
            markScheme: [
              "(a) Solid warming, melting, liquid warming (1)",
              "(a) Boiling, gas warming (1)",
              "(b) Melting and boiling identified as the flat regions (1)",
              "(b) Correct changes of state named (solid→liquid, liquid→gas) (1)",
              "(c) Boiling fully separates particles / overcomes all intermolecular forces (1)",
              "(c) More energy needed than melting → longer plateau (1)",
            ],
            commonError: "Students list only three regions (forgetting the warming of solid/liquid/gas), or claim the longer plateau is 'because it is hotter'.",
            guideRef: "Heating and Cooling Curves",
            difficulty: "core",
            hints: [
              "A heating curve has three sloping parts and two flat parts.",
              "Flat parts are where state changes happen.",
              "Compare how completely particles are separated in melting vs boiling.",
            ],
            strategy: "ordered description; intermolecular force comparison",
          },
          {
            id: "chem-particles-bq1-05",
            question: "Explain why gases can be compressed easily but liquids cannot. [3]",
            marks: 3,
            modelAnswer: "In a gas the particles are widely separated with a large amount of empty space between them. When pressure is applied, the particles can be forced closer together, reducing this empty space, so the volume decreases easily. In a liquid the particles are already very close together, almost touching, with very little space between them, so they cannot be pushed significantly closer and the liquid cannot be compressed.",
            markScheme: [
              "Gas particles widely separated / large empty spaces (1)",
              "Applying pressure forces gas particles closer / reduces empty space (1)",
              "Liquid particles already close together / no space to reduce (1)",
            ],
            commonError: "Students say 'gas particles are smaller' — the particles are not smaller; there is just more space between them.",
            guideRef: "The Three States of Matter",
            difficulty: "core",
            hints: [
              "Compressing means reducing the volume.",
              "What is between the particles in a gas that can be reduced?",
              "Why is there nothing to reduce in a liquid?",
            ],
          },
          {
            id: "chem-particles-bq1-06",
            question: "Ice at −10 °C is heated until it becomes water vapour at 110 °C, at standard pressure.\n(a) State the temperature of the melting plateau and of the boiling plateau. [1]\n(b) Describe what happens to the arrangement and motion of the particles as the ice melts. [3]\n(c) Suggest why, in practice, the melting plateau on a real graph might appear slightly sloped rather than perfectly flat. [2]",
            marks: 6,
            modelAnswer: "(a) Melting plateau at 0 °C; boiling plateau at 100 °C.\n\n(b) As the ice melts, the particles gain enough energy to break free from their fixed positions in the regular lattice. The arrangement changes from regular/ordered to irregular/disordered, and the particles, which previously only vibrated in place, can now move and slide past one another while remaining close together.\n\n(c) The sample may be impure, so it melts over a small range of temperatures rather than at a single sharp value; or heat may not be distributed evenly, or measurements are taken at intervals, so the recorded plateau is not perfectly flat.",
            markScheme: [
              "(a) 0 °C and 100 °C (both needed) (1)",
              "(b) Particles break free from fixed lattice positions (1)",
              "(b) Arrangement becomes irregular/disordered (1)",
              "(b) Particles can now slide/move past each other (still close) (1)",
              "(c) Impurity causing a melting range / uneven heating / experimental limitation (any 2) (2)",
            ],
            commonError: "For (b), students describe particles 'moving apart' — in melting they stay close together; only the order and freedom of movement change.",
            guideRef: "Heating and Cooling Curves",
            difficulty: "core",
            hints: [
              "Recall the melting and boiling points of water.",
              "In melting, do the particles spread out, or stay close but become disordered?",
              "For (c), think about what makes a real plateau imperfect.",
            ],
          },
          {
            id: "chem-particles-bq1-07",
            question: "Define evaporation and explain, in terms of particles, why evaporation causes the remaining liquid to cool. [4]",
            marks: 4,
            modelAnswer: "Evaporation is the change of state from liquid to gas that occurs at the surface of a liquid at temperatures below the boiling point. The particles in a liquid have a range of kinetic energies. The fastest, most energetic particles at the surface have enough energy to overcome the intermolecular forces and escape as gas. Because these high-energy particles leave, the average kinetic energy of the particles that remain decreases. Since temperature is a measure of average kinetic energy, the temperature of the remaining liquid falls — the liquid cools.",
            markScheme: [
              "Evaporation: liquid → gas at the surface, below boiling point (1)",
              "Particles have a range of kinetic energies / fastest escape from surface (1)",
              "Loss of high-energy particles lowers average KE of those remaining (1)",
              "Temperature ∝ average KE, so the liquid cools (1)",
            ],
            commonError: "Students say 'the liquid loses heat to the air' without explaining that it is the escape of the highest-energy particles that lowers the average kinetic energy.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "First give a precise definition (surface, below boiling point).",
              "Do all the liquid particles have the same energy?",
              "Which particles escape, and what does losing them do to the average energy?",
            ],
            strategy: "definition then particle reasoning",
          },
          {
            id: "chem-particles-bq1-08",
            question: "A teacher demonstrates that purple potassium manganate(VII) crystals colour a beaker of still, cold water over several hours, with no stirring.\n(a) Name the process responsible. [1]\n(b) Explain the process in terms of particle movement and concentration. [3]\n(c) Suggest and explain one change that would make the colour spread faster. [2]",
            marks: 6,
            modelAnswer: "(a) Diffusion.\n\n(b) The potassium manganate(VII) particles (ions) are in constant random motion in the water. There is a high concentration of these coloured ions near the crystals and a low concentration in the rest of the water, so there is a net movement of the ions from the high-concentration region to the low-concentration region, down the concentration gradient, until the colour is spread evenly.\n\n(c) Warming the water would make the colour spread faster: the higher temperature gives the particles greater kinetic energy so they move faster, increasing the rate of diffusion. (Alternative: stirring, but the question implies relying on diffusion — increasing temperature is the cleanest answer.)",
            markScheme: [
              "(a) Diffusion (1)",
              "(b) Particles in constant random motion (1)",
              "(b) Net movement from high to low concentration / down a concentration gradient (1)",
              "(b) Continues until evenly spread / concentration uniform (1)",
              "(c) Increase temperature (1)",
              "(c) Greater kinetic energy → particles move faster → faster diffusion (1)",
            ],
            commonError: "For (a), students answer 'dissolving'. Dissolving forms the solution, but the spreading through still water is diffusion.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "The colour spreads without stirring or heating — what process is that?",
              "Compare the concentration near the crystals with the rest of the water.",
              "For (c), what increases particle speed?",
            ],
            strategy: "name, explain via gradient, then improve",
          },
          {
            id: "chem-particles-bq1-09",
            question: "CHALLENGE: A sealed gas syringe contains 60 cm³ of air at a pressure of 100 kPa and constant temperature. The plunger is pushed in until the volume is 24 cm³.\n(a) Calculate the new pressure of the gas. Show your working. [2]\n(b) Explain, using kinetic particle theory, why the pressure changes as it does. [3]\n(c) The compressed gas (now at 24 cm³) is held at fixed volume and warmed. State and explain the effect on the pressure. [2]",
            marks: 7,
            modelAnswer: "(a) At constant temperature, P₁V₁ = P₂V₂. P₂ = P₁V₁/V₂ = (100 × 60)/24 = 6000/24 = 250 kPa.\n\n(b) Compressing the gas into a smaller volume means the same number of particles now occupy less space. The particles travel a shorter distance between collisions, so they hit the walls more frequently. The force per unit area on the walls (pressure) therefore increases. (Particle speed is unchanged because the temperature is constant.)\n\n(c) The pressure increases further. Warming raises the kinetic energy of the particles so they move faster and strike the walls more often and with greater force. Because the volume is fixed, this increased collision force and frequency raises the pressure.",
            markScheme: [
              "(a) Uses P₁V₁ = P₂V₂ / P₂ = 100 × 60 / 24 (1)",
              "(a) = 250 kPa (1)",
              "(b) Same number of particles in smaller volume (1)",
              "(b) Particles hit walls more frequently / shorter path between collisions (1)",
              "(b) Greater force per unit area → higher pressure (1)",
              "(c) Pressure increases (1)",
              "(c) Higher temperature → faster particles → harder/more frequent collisions (1)",
            ],
            commonError: "For (a), students compute 100 × 24 / 60 = 40 kPa (inverting the ratio). As volume decreases, pressure must increase, so the answer must be larger than 100 kPa.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "challenge",
            hints: [
              "Use Boyle's law: P₁V₁ = P₂V₂ at constant temperature.",
              "Rearrange to P₂ = P₁V₁ / V₂.",
              "Volume decreased, so the pressure must increase — check your answer is bigger than 100 kPa.",
              "For (c), keep volume fixed and link temperature → particle speed → pressure.",
            ],
            strategy: "Boyle's law calculation; particle collision reasoning",
            solutions: [
              {
                label: "Boyle's law calculation",
                steps: [
                  "Constant temperature, so P₁V₁ = P₂V₂",
                  "P₁ = 100 kPa, V₁ = 60 cm³, V₂ = 24 cm³",
                  "P₂ = P₁V₁ / V₂ = (100 × 60) / 24",
                  "P₂ = 6000 / 24 = 250 kPa",
                ],
              },
            ],
          },
          {
            id: "chem-particles-bq1-10",
            question: "CHALLENGE: Naphthalene is a pure solid that melts at 80 °C and boils at 218 °C. A student heats solid naphthalene from room temperature (20 °C) and records the temperature every minute, obtaining a heating curve.\n(a) Describe the shape of the curve from 20 °C up to and including the melting plateau, referring to particle behaviour. [3]\n(b) The student's naphthalene is contaminated with a small amount of impurity. State two ways the heating curve would differ from that of pure naphthalene. [2]\n(c) Explain why a sharp melting point is used as a test for purity. [2]",
            marks: 7,
            modelAnswer: "(a) From 20 °C the temperature rises steadily as the solid naphthalene is heated: the particles gain kinetic energy and vibrate more strongly about their fixed lattice positions. On reaching 80 °C the curve becomes flat (a plateau): the temperature stays constant while the solid melts, because the energy supplied is used to break the forces holding the particles in the lattice rather than to increase their kinetic energy.\n\n(b) 1. The impure sample would begin to melt below 80 °C (the melting point is lowered). 2. The melting would occur over a range of temperatures, so the plateau would be sloped/less sharp rather than perfectly flat.\n\n(c) A pure substance melts at a single, sharp, fixed temperature, while impurities lower the melting point and spread it over a range. So if a sample melts sharply at the expected temperature, it is pure; a lowered and broadened melting point indicates impurity.",
            markScheme: [
              "(a) Temperature rises steadily for the solid / particles gain KE and vibrate more (1)",
              "(a) Plateau at 80 °C / temperature constant during melting (1)",
              "(a) Energy breaks lattice forces, not raising KE (1)",
              "(b) Melts below 80 °C / melting point lowered (1)",
              "(b) Melts over a range / plateau sloped not sharp (1)",
              "(c) Pure substance melts at a sharp fixed temperature; impurity lowers and broadens it (2)",
            ],
            commonError: "Students forget that impurity both lowers AND broadens the melting point; many mention only one of these effects.",
            guideRef: "Heating and Cooling Curves",
            difficulty: "challenge",
            hints: [
              "Describe the rising solid section, then the flat melting section.",
              "Always link each section to what the particles are doing.",
              "Impurities affect both where melting starts and how sharp it is.",
            ],
            strategy: "curve description; purity reasoning",
          },
        ],
      },
      {
        id: "chem-particles-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Ten structured questions emphasising diffusion, gases and quantitative reasoning.",
        questions: [
          {
            id: "chem-particles-bq2-01",
            question: "Define diffusion. [2]",
            marks: 2,
            modelAnswer: "Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration (down a concentration gradient), as a result of the random motion of the particles.",
            markScheme: [
              "Net movement from high to low concentration / down a concentration gradient (1)",
              "Due to random motion of particles (1)",
            ],
            commonError: "Students describe only 'spreading out' without mentioning movement from high to low concentration or random motion.",
            guideRef: "Diffusion",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bq2-02",
            question: "State two factors that increase the rate of diffusion of a gas, and for each briefly explain why. [4]",
            marks: 4,
            modelAnswer: "1. Higher temperature: this gives the particles greater kinetic energy, so they move faster and spread more quickly, increasing the rate of diffusion. 2. Lower relative molecular mass (lighter molecules): at a given temperature lighter molecules move faster (same kinetic energy, smaller mass), so they diffuse at a greater rate.",
            markScheme: [
              "Higher temperature (1) — greater KE / particles move faster (1)",
              "Lower Mr / lighter molecules (1) — move faster at same temperature (1)",
            ],
            commonError: "Students list factors without explanation, or give 'concentration gradient' without linking it to net rate.",
            guideRef: "Diffusion",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bq2-03",
            question: "Hydrogen (Mr = 2) and carbon dioxide (Mr = 44) are released at the same time and temperature from opposite ends of a long tube.\n(a) State which gas diffuses faster and explain why. [2]\n(b) Calculate how many times faster the faster gas diffuses. Show your working. [2]",
            marks: 4,
            modelAnswer: "(a) Hydrogen diffuses faster because it has a much lower relative molecular mass. At the same temperature all the molecules have the same average kinetic energy, so the lighter hydrogen molecules move faster and diffuse more quickly.\n\n(b) Rate ∝ 1/√Mr, so rate(H₂)/rate(CO₂) = √(Mr(CO₂)/Mr(H₂)) = √(44/2) = √22 = 4.69. Hydrogen diffuses about 4.7 times faster than carbon dioxide.",
            markScheme: [
              "(a) Hydrogen faster (1)",
              "(a) Lower Mr → moves faster at same temperature / same KE (1)",
              "(b) Ratio = √(44/2) = √22 (1)",
              "(b) ≈ 4.7 times faster (accept 4.69) (1)",
            ],
            commonError: "Students compute 44/2 = 22 and forget the square root, giving '22 times faster' instead of √22 ≈ 4.7.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Lighter molecules diffuse faster at the same temperature.",
              "Use rate ∝ 1/√Mr to form a ratio of the two rates.",
              "Ratio = √(Mr of heavier / Mr of lighter) = √(44/2).",
              "√22 is just under 4.7.",
            ],
            strategy: "Graham's law ratio",
            solutions: [
              {
                label: "Graham's law ratio",
                steps: [
                  "Rate ∝ 1/√Mr",
                  "rate(H₂)/rate(CO₂) = √Mr(CO₂) / √Mr(H₂) = √44 / √2",
                  "= √(44/2) = √22",
                  "√22 = 4.69, so H₂ diffuses ≈ 4.7 times faster",
                ],
              },
            ],
          },
          {
            id: "chem-particles-bq2-04",
            question: "In the classic experiment, cotton wool soaked in concentrated ammonia and cotton wool soaked in concentrated hydrochloric acid are placed at the ends of a horizontal glass tube. A white ring forms inside.\n(a) Write the balanced symbol equation, with state symbols, for the reaction that forms the ring. [2]\n(b) Explain why the ring forms closer to the hydrochloric acid end. [3]\n(c) State and explain where the ring would form if both gases had exactly the same relative molecular mass. [2]",
            marks: 7,
            modelAnswer: "(a) NH₃(g) + HCl(g) → NH₄Cl(s).\n\n(b) Both gases diffuse along the tube from their ends. NH₃ has Mr = 17 and HCl has Mr = 36.5; because NH₃ is lighter, its molecules move faster at the same temperature and so it diffuses faster. NH₃ therefore travels further along the tube before the two gases meet, so the white ring of ammonium chloride forms closer to the (slower) HCl end.\n\n(c) The ring would form in the middle of the tube. If the two gases had equal relative molecular masses, their molecules would move at the same average speed and diffuse at the same rate, so they would meet exactly halfway.",
            markScheme: [
              "(a) NH₃ + HCl → NH₄Cl, correctly balanced (1)",
              "(a) Correct state symbols (g), (g) → (s) (1)",
              "(b) NH₃ has lower Mr (17) than HCl (36.5) / lighter (1)",
              "(b) Lighter molecules move faster / NH₃ diffuses faster (1)",
              "(b) NH₃ travels further → ring nearer HCl end (1)",
              "(c) Ring forms in the middle (1)",
              "(c) Equal Mr → equal average speed / equal diffusion rate → meet halfway (1)",
            ],
            commonError: "For (a), students omit state symbols or write NH₄Cl as a gas/aqueous; it forms as a white solid (s).",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "The product is ammonium chloride, a white solid.",
              "Compare the Mr of NH₃ and HCl to see which diffuses faster.",
              "For (c), if speeds are equal, where do two gases starting at opposite ends meet?",
            ],
            strategy: "equation; Mr comparison; symmetry reasoning",
          },
          {
            id: "chem-particles-bq2-05",
            question: "A gas-tube diffusion experiment uses a 32.0 cm tube. Gas P is released at one end and gas Q at the other simultaneously, at the same temperature. A product band forms 20.0 cm from the gas Q end.\n(a) Calculate the distance travelled by each gas. [1]\n(b) Calculate the ratio of the diffusion rate of gas P to that of gas Q. [2]\n(c) Gas Q has Mr = 36. Use your ratio to estimate the Mr of gas P. Show your working. [3]",
            marks: 6,
            modelAnswer: "(a) The two gases meet at the band, so their distances add to 32.0 cm. The band is 20.0 cm from the gas Q end, so gas Q travelled 20.0 cm and gas P travelled 32.0 − 20.0 = 12.0 cm. P travelled the shorter distance, so P is the slower (heavier) gas.\n\n(b) For the same time, rate ∝ distance. rate(P)/rate(Q) = 12.0/20.0 = 0.60.\n\n(c) rate(P)/rate(Q) = √(Mr(Q)/Mr(P)). So 0.60 = √(36/Mr(P)). Squaring: 0.36 = 36/Mr(P) → Mr(P) = 36/0.36 = 100. Gas P has Mr ≈ 100.",
            markScheme: [
              "(a) P travels 12.0 cm, Q travels 20.0 cm (1)",
              "(b) rate(P)/rate(Q) = 12.0/20.0 = 0.60 (1 method, 1 answer)",
              "(c) 0.60 = √(36/Mr(P)) → 0.36 = 36/Mr(P) (1)",
              "(c) Mr(P) = 36/0.36 (1)",
              "(c) Mr(P) = 100 (1)",
            ],
            commonError: "Students mix up which gas travelled which distance; the gas band forms nearer the slower (heavier) gas, so the distance measured from the Q end equals the distance Q travelled.",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "Distances travelled by the two gases must add up to the tube length.",
              "For the same time, rate is proportional to distance travelled.",
              "Use rate(P)/rate(Q) = √(Mr(Q)/Mr(P)).",
              "Substitute and square both sides to solve for Mr(P).",
            ],
            strategy: "distance ratio then Graham's law",
            solutions: [
              {
                label: "Distance ratio and Graham's law",
                steps: [
                  "Tube = 32.0 cm; band 20.0 cm from Q end → Q travelled 20.0 cm, P travelled 12.0 cm",
                  "Same time, so rate(P)/rate(Q) = 12.0/20.0 = 0.60",
                  "Graham's law: rate(P)/rate(Q) = √(Mr(Q)/Mr(P))",
                  "0.60 = √(36/Mr(P)) → square: 0.36 = 36/Mr(P)",
                  "Mr(P) = 36/0.36 = 100",
                ],
              },
            ],
          },
          {
            id: "chem-particles-bq2-06",
            question: "Explain, using kinetic particle theory, each of the following observations about gases.\n(a) A balloon left in a hot car expands and may burst. [2]\n(b) A bag of crisps sealed at sea level swells when taken up a mountain. [2]",
            marks: 4,
            modelAnswer: "(a) In the hot car the gas particles inside the balloon gain kinetic energy and move faster. They hit the inside of the balloon more often and with greater force, increasing the pressure; the balloon expands (and may burst if the rubber cannot stretch enough). \n\n(b) Up the mountain the external (atmospheric) pressure is lower. The gas trapped in the sealed bag is at higher pressure than the surroundings, so it pushes the bag outwards; with less outside pressure opposing it, the gas expands and the bag swells.",
            markScheme: [
              "(a) Heating → particles gain KE / move faster → hit walls harder/more often (1)",
              "(a) Pressure increases → balloon expands/bursts (1)",
              "(b) External/atmospheric pressure is lower at altitude (1)",
              "(b) Trapped gas at higher pressure expands / bag swells (1)",
            ],
            commonError: "For (b), students say 'there is less air up the mountain so the bag empties' — actually the lower outside pressure lets the trapped gas expand, swelling the bag.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "core",
            hints: [
              "For (a), heat changes the speed of the particles.",
              "Link particle speed to collision force and pressure.",
              "For (b), compare the pressure inside the sealed bag with the lower pressure outside at altitude.",
            ],
            strategy: "apply particle model to everyday cases",
          },
          {
            id: "chem-particles-bq2-07",
            question: "Brownian motion can be observed by looking at smoke particles in a small glass cell under a microscope; the smoke specks are seen to jiggle about in random, jerky paths.\n(a) State what Brownian motion is evidence for. [1]\n(b) Explain, in terms of particles, why the smoke specks move in this way. [3]\n(c) Suggest why much larger dust particles would show less obvious jiggling. [2]",
            marks: 6,
            modelAnswer: "(a) It is evidence that the (air) particles are in constant, random motion.\n\n(b) The visible smoke specks are constantly bombarded on all sides by the fast-moving, randomly moving air molecules, which are too small to see. At any instant the collisions are unequal/uneven on different sides, so there is a net push in a changing random direction, making the speck jiggle along a jerky, random path.\n\n(c) A much larger and more massive particle receives many collisions at once, which tend to cancel out, and its greater mass means a given net force produces a much smaller acceleration. So its movement is far less noticeable.",
            markScheme: [
              "(a) Evidence that particles (air molecules) are in constant random motion (1)",
              "(b) Smoke specks bombarded by fast-moving air molecules (1)",
              "(b) Air molecules too small to see / collisions on all sides (1)",
              "(b) Unequal collisions give a net push in random, changing directions (1)",
              "(c) Larger mass → smaller acceleration / many collisions cancel out (any valid) (2)",
            ],
            commonError: "Students say the smoke particles themselves are moving randomly 'because they are hot' rather than because invisible air molecules are colliding with them.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "What can you actually see — the smoke, or the air molecules?",
              "Why would unequal collisions cause a jerky, changing path?",
              "For (c), think about mass and how many collisions hit a big particle at once.",
            ],
            strategy: "evidence, mechanism, then extension",
          },
          {
            id: "chem-particles-bq2-08",
            question: "A student investigates how temperature affects the rate of diffusion. They place a drop of food colouring in beakers of water at 10 °C, 25 °C and 50 °C and time how long the colour takes to spread evenly.\n(a) Predict the order of the times (shortest to longest) and explain your prediction. [3]\n(b) Identify two variables that must be kept the same for a fair test. [2]\n(c) Explain why diffusion in water is much slower than diffusion in air. [2]",
            marks: 7,
            modelAnswer: "(a) Shortest time at 50 °C, then 25 °C, then longest at 10 °C. The higher the temperature, the greater the kinetic energy of the water and colouring particles, so they move faster and the colour diffuses more quickly, taking less time to spread evenly.\n\n(b) Any two of: the volume of water in each beaker; the amount/volume and concentration of food colouring added; the size/shape of the beaker; not stirring any of them. \n\n(c) In water the particles are much closer together than in air, so a diffusing particle collides with neighbours far more frequently and makes slow net progress. In air there is much more empty space between particles, so they travel further between collisions and diffuse much faster.",
            markScheme: [
              "(a) Order: 50 °C shortest, then 25 °C, then 10 °C longest (1)",
              "(a) Higher temperature → greater KE / faster particles (1)",
              "(a) Faster particles → faster diffusion → shorter time (1)",
              "(b) Two valid controlled variables (1 each) (2)",
              "(c) Liquid particles closer → more frequent collisions → slower net movement (1)",
              "(c) Gas particles have more space / travel further between collisions (1)",
            ],
            commonError: "Students choose 'temperature' as a controlled variable — but temperature is the independent variable being changed, so it must NOT be kept the same.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Higher temperature speeds up particle motion.",
              "A fair test changes one variable and keeps the rest constant.",
              "Compare particle spacing in liquids and gases for part (c).",
            ],
            strategy: "prediction, fair test, comparison",
          },
          {
            id: "chem-particles-bq2-09",
            question: "CHALLENGE: A fixed mass of gas occupies 750 cm³ at a pressure of 80 kPa and a steady temperature. The temperature is kept constant.\n(a) Calculate the volume the gas would occupy if the pressure were increased to 120 kPa. Show your working. [3]\n(b) Explain in terms of particles why the volume changes in the way you calculated. [2]\n(c) State one assumption you made in the calculation. [1]",
            marks: 6,
            modelAnswer: "(a) At constant temperature, P₁V₁ = P₂V₂. V₂ = P₁V₁/P₂ = (80 × 750)/120 = 60000/120 = 500 cm³.\n\n(b) Increasing the pressure forces the particles closer together into a smaller volume. The same number of particles now occupy less space, so the volume decreases. (Particle speed is unchanged because temperature is constant.)\n\n(c) Assumption: the temperature stays constant throughout (and the mass/amount of gas is fixed, with no leaks).",
            markScheme: [
              "(a) Uses P₁V₁ = P₂V₂ / V₂ = 80 × 750 / 120 (1)",
              "(a) Correct substitution (1)",
              "(a) V₂ = 500 cm³ (1)",
              "(b) Higher pressure forces particles closer / same particles in less space → smaller volume (2)",
              "(c) Temperature constant / mass of gas constant / no leaks (1)",
            ],
            commonError: "Students multiply rather than apply the inverse relationship; since pressure increased, the volume must decrease (answer below 750 cm³).",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "challenge",
            hints: [
              "Constant temperature → use Boyle's law, P₁V₁ = P₂V₂.",
              "Rearrange for V₂ = P₁V₁ / P₂.",
              "Pressure rose, so the volume should fall below 750 cm³.",
            ],
            strategy: "Boyle's law calculation; particle reasoning",
            solutions: [
              {
                label: "Boyle's law calculation",
                steps: [
                  "Constant temperature, so P₁V₁ = P₂V₂",
                  "P₁ = 80 kPa, V₁ = 750 cm³, P₂ = 120 kPa",
                  "V₂ = P₁V₁ / P₂ = (80 × 750) / 120",
                  "V₂ = 60000 / 120 = 500 cm³",
                ],
              },
            ],
          },
          {
            id: "chem-particles-bq2-10",
            question: "CHALLENGE: A teacher states: 'At the same temperature, all gas molecules have the same average kinetic energy, but not the same average speed.'\n(a) Explain why this statement is correct, referring to the equation for kinetic energy. [3]\n(b) Hydrogen (Mr = 2) and oxygen (Mr = 32) are at the same temperature. Show, using the kinetic energy idea, that hydrogen molecules move on average 4 times faster than oxygen molecules. [3]\n(c) Relate your answer in (b) to the relative rates of diffusion of the two gases. [1]",
            marks: 7,
            modelAnswer: "(a) Kinetic energy is given by KE = ½mv². At the same temperature, all gas molecules have the same average kinetic energy. Since KE depends on both mass m and the square of speed v, molecules with a larger mass must have a smaller speed to keep ½mv² the same, and lighter molecules must move faster. So equal average KE does not mean equal average speed.\n\n(b) Setting the average kinetic energies equal: ½m(H₂)v(H₂)² = ½m(O₂)v(O₂)². So v(H₂)²/v(O₂)² = m(O₂)/m(H₂) = 32/2 = 16. Taking the square root: v(H₂)/v(O₂) = √16 = 4. Hydrogen molecules move on average 4 times faster than oxygen molecules.\n\n(c) Because hydrogen molecules move 4 times faster, hydrogen diffuses about 4 times faster than oxygen at the same temperature (consistent with rate ∝ 1/√Mr).",
            markScheme: [
              "(a) States KE = ½mv² (1)",
              "(a) Same average KE at same temperature (1)",
              "(a) Larger mass → smaller speed (and vice versa) to keep KE equal (1)",
              "(b) Sets ½m(H₂)v(H₂)² = ½m(O₂)v(O₂)² (1)",
              "(b) v(H₂)²/v(O₂)² = 32/2 = 16 (1)",
              "(b) √16 = 4, so H₂ is 4× faster (1)",
              "(c) Hydrogen diffuses ~4× faster than oxygen (1)",
            ],
            commonError: "Students forget to take the square root of the mass ratio, giving '16 times faster' instead of 4 times faster.",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "Start from KE = ½mv² and set the two average KEs equal.",
              "Rearrange to get the ratio of the squares of the speeds.",
              "v²(H₂)/v²(O₂) = m(O₂)/m(H₂) = 32/2.",
              "Take the square root of 16.",
            ],
            strategy: "derive speed ratio from equal kinetic energy",
            solutions: [
              {
                label: "Speed ratio from equal kinetic energy",
                steps: [
                  "Same temperature → same average KE: ½m(H₂)v(H₂)² = ½m(O₂)v(O₂)²",
                  "Cancel ½: m(H₂)v(H₂)² = m(O₂)v(O₂)²",
                  "v(H₂)²/v(O₂)² = m(O₂)/m(H₂) = 32/2 = 16",
                  "v(H₂)/v(O₂) = √16 = 4",
                  "So H₂ moves (and diffuses) about 4× faster than O₂",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "chem-particles-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Ten structured questions on states, energy changes, gases and applications.",
        questions: [
          {
            id: "chem-particles-bq3-01",
            question: "Describe the arrangement and motion of the particles in a solid. [2]",
            marks: 2,
            modelAnswer: "In a solid the particles are packed closely together in a regular, ordered lattice (fixed pattern). They vibrate about fixed positions but cannot move past one another.",
            markScheme: [
              "Particles in a regular/ordered arrangement, closely packed (1)",
              "Vibrate about fixed positions / cannot move past each other (1)",
            ],
            commonError: "Students say solid particles 'do not move at all' — they do vibrate about fixed positions.",
            guideRef: "The Three States of Matter",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bq3-02",
            question: "Name the change of state in each case.\n(a) A puddle of water disappears on a warm day. [1]\n(b) Mist forms on a cold mirror when you breathe on it. [1]\n(c) Mothballs (solid) slowly disappear, giving off a smell, without forming a liquid. [1]",
            marks: 3,
            modelAnswer: "(a) Evaporation (liquid → gas, at the surface, below the boiling point). (b) Condensation (gas/water vapour → liquid). (c) Sublimation (solid → gas directly).",
            markScheme: [
              "(a) Evaporation (1)",
              "(b) Condensation (1)",
              "(c) Sublimation (1)",
            ],
            commonError: "Students write 'boiling' for the drying puddle — at a temperature below 100 °C it is evaporation, not boiling.",
            guideRef: "Changes of State",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bq3-03",
            question: "Explain, in terms of particles and energy, what happens during condensation and why condensation is described as exothermic. [3]",
            marks: 3,
            modelAnswer: "During condensation, gas particles slow down and come close enough together for intermolecular forces to form between them, so the gas becomes a liquid. As these forces form, energy is released to the surroundings. Because energy is given out (rather than taken in), condensation is exothermic.",
            markScheme: [
              "Gas particles come together / intermolecular forces form (1)",
              "Energy is released as forces form (1)",
              "Energy given out to surroundings = exothermic (1)",
            ],
            commonError: "Students confuse the direction of energy flow, calling condensation endothermic; forming forces releases energy.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "What forms between particles when a gas becomes a liquid?",
              "Does forming forces between particles take in or give out energy?",
              "Exothermic means energy is released.",
            ],
          },
          {
            id: "chem-particles-bq3-04",
            question: "A sealed rigid steel can contains air. It is thrown onto a fire.\n(a) Explain, using kinetic particle theory, why the pressure inside the can rises. [3]\n(b) Suggest why the can may eventually explode. [1]",
            marks: 4,
            modelAnswer: "(a) As the can is heated, the air particles inside gain kinetic energy and move faster. They collide with the walls of the can more frequently and with greater force. Because the can is rigid (fixed volume), this increased collision frequency and force raises the pressure.\n\n(b) When the internal pressure becomes greater than the can can withstand, the metal fails and the can bursts/explodes.",
            markScheme: [
              "(a) Particles gain KE / move faster on heating (1)",
              "(a) Collide with walls more often / with greater force (1)",
              "(a) Fixed volume → pressure increases (1)",
              "(b) Pressure exceeds the strength of the can → it bursts (1)",
            ],
            commonError: "Students say 'the air expands' — in a rigid can the volume cannot change, so it is the pressure that rises.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "core",
            hints: [
              "The can is rigid, so the volume cannot change.",
              "Heating changes the speed of the particles.",
              "Link faster particles to collision force and frequency, then to pressure.",
            ],
          },
          {
            id: "chem-particles-bq3-05",
            question: "A wet cloth is hung up to dry. \n(a) Name the process by which the water leaves the cloth. [1]\n(b) Give two conditions that would make the cloth dry faster, and explain each in terms of particles. [4]",
            marks: 5,
            modelAnswer: "(a) Evaporation.\n\n(b) 1. A higher temperature: this gives the water particles more kinetic energy, so more of them have enough energy to escape from the surface, increasing the rate of evaporation. 2. More wind/moving air (or lower humidity): this removes the water vapour from just above the cloth, keeping the concentration gradient steep so more particles continue to escape. (A larger exposed surface area is also acceptable: more particles can escape at once.)",
            markScheme: [
              "(a) Evaporation (1)",
              "(b) Higher temperature (1) — particles gain KE / more escape from surface (1)",
              "(b) More wind / lower humidity / larger surface area (1) — removes vapour / more particles escape (1)",
            ],
            commonError: "Students give 'put it in water' or vague answers; conditions must increase the rate of escape of surface particles.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "Drying is evaporation from the surface.",
              "Temperature affects how much energy the particles have.",
              "What does moving air do to the vapour just above the cloth?",
            ],
            strategy: "name then justify each factor by particle behaviour",
          },
          {
            id: "chem-particles-bq3-06",
            question: "Sketch and describe a cooling curve for a pure substance cooled from a gas to a solid. Your answer should name the two plateaus and explain why the temperature is constant during each. [5]",
            marks: 5,
            modelAnswer: "The cooling curve falls steadily as the gas cools, then has a flat plateau at the boiling/condensation point, then falls again as the liquid cools, then a second flat plateau at the freezing point, then falls again as the solid cools. The first plateau is condensation (gas → liquid) and the second is freezing (liquid → solid). During each plateau the temperature is constant because as forces reform between particles, energy is released; this released energy keeps the temperature steady until the change of state is complete.",
            markScheme: [
              "Curve falls, plateau, falls, plateau, falls (correct shape) (1)",
              "First plateau named: condensation / boiling point (1)",
              "Second plateau named: freezing / freezing point (1)",
              "Temperature constant because energy released as forces reform (1)",
              "Released energy keeps temperature steady until change complete (1)",
            ],
            commonError: "Students draw the curve rising (a heating curve) or forget that cooling plateaus occur because energy is released (exothermic), not absorbed.",
            guideRef: "Heating and Cooling Curves",
            difficulty: "core",
            hints: [
              "A cooling curve falls overall, with two flat sections.",
              "Name the change of state at each flat section (gas→liquid, liquid→solid).",
              "Why does the temperature hold steady — what is happening to the forces?",
            ],
            strategy: "describe shape then explain plateaus",
          },
          {
            id: "chem-particles-bq3-07",
            question: "Two gas jars are set up: a jar of brown bromine vapour is placed below a jar of colourless air, mouth to mouth, separated by a glass plate. The plate is removed.\n(a) Describe what is observed over the next few minutes. [2]\n(b) Explain the observation in terms of particle behaviour. [2]\n(c) Bromine vapour is denser than air. Explain why the brown colour still moves upward into the air jar. [2]",
            marks: 6,
            modelAnswer: "(a) The brown colour gradually spreads upward into the top (air) jar, and the colour in the bottom jar fades, until both jars are an even pale brown.\n\n(b) The bromine and air particles are in constant random motion. There is a net movement of bromine particles from the high-concentration bottom jar to the low-concentration top jar (and air the other way), i.e. diffusion down the concentration gradient, until the concentration is uniform.\n\n(c) Diffusion is driven by the random motion of particles, not by density. The random movement and the concentration gradient cause a net upward movement of bromine particles regardless of bromine being denser than air, so the brown colour still spreads upward.",
            markScheme: [
              "(a) Brown spreads upward / both jars become evenly pale brown (1)",
              "(a) Bottom jar colour fades / colour becomes uniform (1)",
              "(b) Particles in constant random motion (1)",
              "(b) Net movement high → low concentration (diffusion) until uniform (1)",
              "(c) Diffusion is due to random motion, not density (1)",
              "(c) Concentration gradient drives net upward movement despite higher density (1)",
            ],
            commonError: "Students claim the bromine 'should stay at the bottom because it is denser' — diffusion by random motion overrides this and the gases mix completely.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "What happens to the brown colour and to each jar over time?",
              "Use 'random motion' and 'concentration gradient' to explain.",
              "Is diffusion driven by density or by random particle motion?",
            ],
            strategy: "observe, explain, then address the density misconception",
          },
          {
            id: "chem-particles-bq3-08",
            question: "Explain why solids and liquids have very similar densities, but the density of a gas is far lower than both. [3]",
            marks: 3,
            modelAnswer: "In both solids and liquids the particles are very close together (touching), so a similar number of particles is packed into a given volume, giving similar (high) densities. In a gas the particles are widely separated with large empty spaces between them, so far fewer particles occupy the same volume; this gives a much lower mass per unit volume and therefore a much lower density.",
            markScheme: [
              "Solid and liquid particles are close together / touching (1)",
              "Similar number of particles per unit volume → similar density (1)",
              "Gas particles widely separated → far fewer per unit volume → much lower density (1)",
            ],
            commonError: "Students think gas particles are 'lighter'; it is the spacing (fewer particles per volume), not the particle mass, that lowers the density.",
            guideRef: "The Three States of Matter",
            difficulty: "core",
            hints: [
              "Density is mass per unit volume.",
              "Compare how closely packed the particles are in each state.",
              "Are gas particles lighter, or just more spread out?",
            ],
          },
          {
            id: "chem-particles-bq3-09",
            question: "CHALLENGE: A fixed mass of gas occupies 480 cm³ at 100 kPa and a constant temperature. \n(a) The pressure is reduced to 60 kPa. Calculate the new volume. Show your working. [3]\n(b) Sketch, in words, how a graph of pressure (y-axis) against volume (x-axis) for this gas would look, and state the relationship it shows. [2]",
            marks: 5,
            modelAnswer: "(a) At constant temperature, P₁V₁ = P₂V₂. V₂ = P₁V₁/P₂ = (100 × 480)/60 = 48000/60 = 800 cm³.\n\n(b) The graph would be a smooth curve falling from top-left to bottom-right (a hyperbola), approaching but never reaching the axes. It shows that pressure is inversely proportional to volume (P ∝ 1/V) at constant temperature: as volume increases, pressure decreases.",
            markScheme: [
              "(a) Uses P₁V₁ = P₂V₂ / V₂ = 100 × 480 / 60 (1)",
              "(a) Correct substitution (1)",
              "(a) V₂ = 800 cm³ (1)",
              "(b) Curve falling left to right / hyperbola (1)",
              "(b) Pressure inversely proportional to volume (P ∝ 1/V) (1)",
            ],
            commonError: "Students get 288 cm³ by multiplying by 60/100; since the pressure fell, the volume must increase (above 480 cm³).",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "challenge",
            hints: [
              "Constant temperature → Boyle's law P₁V₁ = P₂V₂.",
              "Rearrange for V₂ = P₁V₁ / P₂.",
              "Pressure decreased, so the volume must increase above 480 cm³.",
            ],
            strategy: "Boyle's law calculation; graph interpretation",
            solutions: [
              {
                label: "Boyle's law calculation",
                steps: [
                  "Constant temperature, so P₁V₁ = P₂V₂",
                  "P₁ = 100 kPa, V₁ = 480 cm³, P₂ = 60 kPa",
                  "V₂ = P₁V₁ / P₂ = (100 × 480) / 60",
                  "V₂ = 48000 / 60 = 800 cm³",
                ],
              },
            ],
          },
          {
            id: "chem-particles-bq3-10",
            question: "CHALLENGE: A student investigates the purity of two white solids, A and B, by measuring their melting behaviour. Pure substance X melts sharply at 53 °C. \n(a) Solid A melts sharply at 53 °C; solid B melts gradually from 47 °C to 51 °C. State, with reasons, which solid is pure X and the likely nature of the other. [3]\n(b) Explain, in terms of particles, why an impurity broadens and lowers the melting point. [3]",
            marks: 6,
            modelAnswer: "(a) Solid A is pure X: it melts sharply at exactly 53 °C, which is the melting point of pure X, and a sharp fixed melting point indicates purity. Solid B is impure (or a mixture / impure X): it melts over a range (47–51 °C) and below the pure melting point, which indicates the presence of an impurity.\n\n(b) In a pure substance all the particles are identical, with identical forces between them, so they all break free at the same temperature, giving a sharp melting point. An impurity introduces different particles that disrupt the regular lattice and the intermolecular forces. The disrupted lattice is held together less uniformly, so different parts melt at slightly different temperatures (a range), and overall less energy is needed to start melting, lowering the melting point.",
            markScheme: [
              "(a) A is pure X — sharp melting point at the correct temperature (1)",
              "(a) B is impure / a mixture (1)",
              "(a) Reason: B melts over a range and below 53 °C (1)",
              "(b) Pure: identical particles/forces melt at one temperature (1)",
              "(b) Impurity disrupts lattice / different forces (1)",
              "(b) Melts over a range and at a lower temperature (1)",
            ],
            commonError: "Students assume the substance with the higher or sharper melting point is impure; it is the broadened, lowered melting point that signals impurity.",
            guideRef: "Heating and Cooling Curves",
            difficulty: "challenge",
            hints: [
              "Which behaviour — sharp or broadened — indicates purity?",
              "Impurities lower and broaden the melting point.",
              "For (b), think about whether all particles in an impure solid are identical.",
            ],
            strategy: "purity test reasoning; particle-level explanation",
          },
        ],
      },
      {
        id: "chem-particles-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Ten structured questions integrating diffusion, gases, energy and challenge calculations.",
        questions: [
          {
            id: "chem-particles-bq4-01",
            question: "Complete the sentences using the correct words.\n(a) The change of state from gas to liquid is called __________. [1]\n(b) During melting, the temperature stays __________ because energy is used to break forces between particles. [1]\n(c) Diffusion is the net movement of particles from a region of __________ concentration to a region of __________ concentration. [1]",
            marks: 3,
            modelAnswer: "(a) condensation. (b) constant. (c) higher (high) concentration to a region of lower (low) concentration.",
            markScheme: [
              "(a) Condensation (1)",
              "(b) Constant (1)",
              "(c) Higher → lower (both needed) (1)",
            ],
            commonError: "For (c), students reverse the direction (low to high) — diffusion goes from high to low concentration.",
            guideRef: "Changes of State",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bq4-02",
            question: "State whether each change of state absorbs or releases energy.\n(a) Melting. [1]\n(b) Freezing. [1]\n(c) Boiling. [1]\n(d) Condensation. [1]",
            marks: 4,
            modelAnswer: "(a) Melting absorbs energy (endothermic). (b) Freezing releases energy (exothermic). (c) Boiling absorbs energy (endothermic). (d) Condensation releases energy (exothermic).",
            markScheme: [
              "(a) Absorbs / endothermic (1)",
              "(b) Releases / exothermic (1)",
              "(c) Absorbs / endothermic (1)",
              "(d) Releases / exothermic (1)",
            ],
            commonError: "Students mix up boiling and condensation; remember that changes towards the gas state absorb energy, and changes towards the solid state release it.",
            guideRef: "Changes of State",
            difficulty: "warmup",
          },
          {
            id: "chem-particles-bq4-03",
            question: "Explain why a gas completely fills any container it is put into, whereas a liquid does not. [3]",
            marks: 3,
            modelAnswer: "Gas particles are widely separated, have negligible forces between them, and move rapidly and randomly in all directions. They are not held together, so they spread out and bounce off the walls until they occupy the whole container. Liquid particles, by contrast, are held close together by stronger intermolecular forces; they can move past one another but stay together, so the liquid keeps a fixed volume and only takes the shape of the bottom of the container rather than filling it.",
            markScheme: [
              "Gas particles widely separated / negligible forces / move randomly in all directions (1)",
              "Gas particles spread out to fill the whole container (1)",
              "Liquid particles held together by forces / keep fixed volume so do not fill container (1)",
            ],
            commonError: "Students explain the gas correctly but forget to contrast with the liquid's stronger forces and fixed volume.",
            guideRef: "The Three States of Matter",
            difficulty: "core",
            hints: [
              "Think about the forces between particles in a gas versus a liquid.",
              "Gas particles move freely in all directions.",
              "Why does a liquid keep a fixed volume?",
            ],
          },
          {
            id: "chem-particles-bq4-04",
            question: "A gas syringe demonstration: gas is trapped and the plunger pushed to halve the volume at constant temperature.\n(a) State what happens to the gas pressure. [1]\n(b) Explain your answer using kinetic particle theory. [3]\n(c) State what would happen to the pressure if instead the gas were heated at constant volume, and why (briefly). [2]",
            marks: 6,
            modelAnswer: "(a) The pressure doubles.\n\n(b) Halving the volume puts the same number of particles into half the space, doubling the number of particles per unit volume. The particles now hit each unit area of the walls twice as often (the average distance between collisions is shorter). Since particle speed is unchanged (constant temperature), the doubled collision frequency doubles the pressure.\n\n(c) The pressure would increase. Heating raises the particles' kinetic energy so they move faster and strike the walls harder and more often; at constant volume this raises the pressure.",
            markScheme: [
              "(a) Pressure doubles (1)",
              "(b) Same particles in half the volume / double particle density (1)",
              "(b) Collide with walls twice as often per unit area (1)",
              "(b) Speed unchanged (constant T) → pressure doubles (1)",
              "(c) Pressure increases (1)",
              "(c) Higher temperature → faster particles → harder/more frequent collisions (1)",
            ],
            commonError: "For (b), students say the particles 'speed up' when compressed — at constant temperature their speed is unchanged; it is the collision frequency that increases.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "core",
            hints: [
              "Compression at constant temperature does not change particle speed.",
              "Halving the volume doubles how many particles are in each cm³.",
              "More particles per volume means more wall collisions per second.",
            ],
            strategy: "particle density argument; separate the two changes",
          },
          {
            id: "chem-particles-bq4-05",
            question: "A few drops of liquid bromine are placed in a sealed gas jar. After a time the jar is filled with brown vapour even though the jar was not heated.\n(a) Name the change of state that produced the brown vapour. [1]\n(b) Name the process by which the vapour spread to fill the jar. [1]\n(c) Explain, in terms of particles, how both processes occur without heating. [3]",
            marks: 5,
            modelAnswer: "(a) Evaporation (liquid bromine → bromine vapour at the surface).\n\n(b) Diffusion.\n\n(c) Even without heating, the bromine particles already have a range of kinetic energies; the fastest surface particles have enough energy to overcome the intermolecular forces and escape as vapour (evaporation). Once in the gas phase, the bromine particles move rapidly and randomly and there is a net movement from the high-concentration region near the liquid to the low-concentration rest of the jar (diffusion), until the brown vapour fills the jar.",
            markScheme: [
              "(a) Evaporation (1)",
              "(b) Diffusion (1)",
              "(c) Fastest surface particles escape (evaporation) without heating (1)",
              "(c) Vapour particles move randomly / rapidly (1)",
              "(c) Net movement high → low concentration fills the jar (diffusion) (1)",
            ],
            commonError: "Students name only one process; the question needs evaporation (to form vapour) and diffusion (to spread it).",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "First, how does liquid bromine become a gas at room temperature?",
              "Then, how does that gas spread through the whole jar?",
              "Recall that particles already have a range of speeds even without heating.",
            ],
            strategy: "two named processes then unified particle explanation",
          },
          {
            id: "chem-particles-bq4-06",
            question: "Hydrogen chloride gas (Mr = 36.5) and ammonia gas (Mr = 17) are released at opposite ends of a 100 cm tube at the same time and temperature.\n(a) Calculate the ratio of the rate of diffusion of NH₃ to that of HCl. [2]\n(b) Use the ratio to calculate, approximately, how far from the ammonia end the white ring forms. Show your working. [3]",
            marks: 5,
            modelAnswer: "(a) Rate ∝ 1/√Mr, so rate(NH₃)/rate(HCl) = √(Mr(HCl)/Mr(NH₃)) = √(36.5/17) = √2.147 = 1.47.\n\n(b) In the same time, distance ∝ rate, so distance(NH₃)/distance(HCl) = 1.47. Let HCl travel d; then NH₃ travels 1.47d, and they meet when 1.47d + d = 100 cm → 2.47d = 100 → d = 40.5 cm (HCl distance). NH₃ distance = 100 − 40.5 = 59.5 cm. So the ring forms about 59–60 cm from the ammonia end.",
            markScheme: [
              "(a) rate ratio = √(36.5/17) (1)",
              "(a) = 1.47 (accept 1.46–1.48) (1)",
              "(b) Sets distances in ratio 1.47 : 1 adding to 100 cm (1)",
              "(b) 2.47d = 100 → d ≈ 40.5 cm (HCl) (1)",
              "(b) NH₃ distance ≈ 59–60 cm from ammonia end (1)",
            ],
            commonError: "Students give the HCl distance (≈40 cm) as the answer; the question asks for the distance from the ammonia end, which is the NH₃ distance (≈60 cm).",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "Use rate ∝ 1/√Mr to get the speed ratio first.",
              "In equal time, distance is proportional to rate.",
              "Let HCl travel d and NH₃ travel 1.47d; together they cover 100 cm.",
              "Solve 2.47d = 100, then find the NH₃ distance from the ammonia end.",
            ],
            strategy: "Graham's law then meeting-point algebra",
            solutions: [
              {
                label: "Graham's law and meeting point",
                steps: [
                  "rate(NH₃)/rate(HCl) = √(Mr(HCl)/Mr(NH₃)) = √(36.5/17) = √2.147 = 1.47",
                  "Equal time → distance(NH₃) = 1.47 × distance(HCl)",
                  "Let HCl distance = d; 1.47d + d = 100 → 2.47d = 100",
                  "d = 40.5 cm (HCl); NH₃ distance = 100 − 40.5 = 59.5 cm",
                  "Ring forms ≈ 59–60 cm from the ammonia end",
                ],
              },
            ],
          },
          {
            id: "chem-particles-bq4-07",
            question: "Explain why, on a hot day, you feel cooler when you step out of a swimming pool into a breeze than when you stand in still air, even at the same air temperature. [4]",
            marks: 4,
            modelAnswer: "Water on your skin evaporates: the fastest, most energetic water particles escape from the surface, taking energy with them, so the average kinetic energy of the remaining water (and of your skin) falls and you feel cooler. A breeze removes the water vapour from just above your skin, keeping the concentration gradient steep, so evaporation continues at a faster rate. Faster evaporation removes high-energy particles (and energy) more quickly, so you feel cooler in a breeze than in still air where the vapour builds up and slows further evaporation.",
            markScheme: [
              "Water evaporates / fastest particles escape from skin (1)",
              "Loss of high-energy particles lowers average KE → cooling (1)",
              "Breeze removes vapour / keeps concentration gradient steep (1)",
              "Faster evaporation → faster cooling than in still air (1)",
            ],
            commonError: "Students say 'the wind is cold' — the air is at the same temperature; the cooling is due to faster evaporation.",
            guideRef: "Changes of State",
            difficulty: "core",
            hints: [
              "What is on your skin when you leave the pool?",
              "Which particles escape during evaporation, and what does that do to the rest?",
              "What does a breeze do to the vapour just above your skin?",
            ],
            strategy: "evaporative cooling plus concentration-gradient effect",
          },
          {
            id: "chem-particles-bq4-08",
            question: "A student suggests that 'heavier gases always sink and lighter gases always rise, so diffusion cannot mix them'. \n(a) Use the NH₃/HCl tube experiment or the bromine/air experiment to argue against this statement. [3]\n(b) State the true reason why lighter gases diffuse faster than heavier gases at the same temperature. [2]",
            marks: 5,
            modelAnswer: "(a) In the bromine/air experiment, bromine vapour is denser than air, yet when the plate is removed the brown bromine still spreads upward into the air jar and the two gases mix completely and uniformly. Similarly, in the NH₃/HCl tube, both gases diffuse along the tube and meet to form a ring regardless of their densities. This shows that diffusion mixes gases by random motion and a concentration gradient, not by density, so the statement is wrong.\n\n(b) At the same temperature all gas molecules have the same average kinetic energy (½mv²). Since lighter molecules have a smaller mass m, they must have a larger average speed v, so they diffuse faster.",
            markScheme: [
              "(a) Cites bromine denser than air but still mixes upward / gases mix fully (1)",
              "(a) Or NH₃/HCl meet and form a ring regardless of density (1)",
              "(a) Conclusion: diffusion is by random motion + gradient, not density (1)",
              "(b) Same average KE at same temperature (1)",
              "(b) Smaller mass → larger speed → faster diffusion (1)",
            ],
            commonError: "Students argue the statement is partly right; in fact diffusion fully mixes gases of different densities, so it is wrong.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Recall an experiment where a denser gas still spreads into a lighter one.",
              "Diffusion is driven by random motion and concentration, not density.",
              "For (b), start from equal average kinetic energy at the same temperature.",
            ],
            strategy: "counter-example then correct mechanism",
          },
          {
            id: "chem-particles-bq4-09",
            question: "CHALLENGE: At room temperature and pressure (r.t.p.), one mole of any gas occupies 24 dm³. A flask contains 6.0 dm³ of carbon dioxide gas (Mr = 44) at r.t.p.\n(a) Calculate the number of moles of CO₂ in the flask. [1]\n(b) Calculate the mass of CO₂ in the flask. Show your working. [2]\n(c) The gas is then compressed to 2.0 dm³ at constant temperature. Calculate the factor by which the pressure increases, and explain in particle terms why the pressure rises. [3]",
            marks: 6,
            modelAnswer: "(a) Moles = volume / molar volume = 6.0 / 24 = 0.25 mol.\n\n(b) Mass = moles × Mr = 0.25 × 44 = 11 g.\n\n(c) At constant temperature, P₁V₁ = P₂V₂, so P₂/P₁ = V₁/V₂ = 6.0/2.0 = 3. The pressure increases by a factor of 3. In particle terms, compressing the same number of particles into one third of the volume triples the number of particles per unit volume, so they collide with each unit area of the walls three times as often, tripling the pressure (particle speed is unchanged at constant temperature).",
            markScheme: [
              "(a) 6.0 / 24 = 0.25 mol (1)",
              "(b) Mass = moles × Mr = 0.25 × 44 (1) = 11 g (1)",
              "(c) P₂/P₁ = V₁/V₂ = 6.0/2.0 = 3 (1)",
              "(c) Same particles in 1/3 volume → 3× collisions per unit area (1)",
              "(c) Pressure triples / speed unchanged at constant T (1)",
            ],
            commonError: "For (a)/(b), students multiply by 24 instead of dividing, or forget mass = moles × Mr. For (c), some invert the volume ratio.",
            guideRef: "The Effect of Temperature and Pressure on Gases",
            difficulty: "challenge",
            hints: [
              "Moles = volume ÷ molar volume (24 dm³/mol at r.t.p.).",
              "Mass = moles × Mr.",
              "For (c) use P₁V₁ = P₂V₂; the volume fell to one third.",
              "Link the tripled particle density to tripled collision frequency.",
            ],
            strategy: "mole calculation then Boyle's law and particle reasoning",
            solutions: [
              {
                label: "Moles, mass and compression",
                steps: [
                  "Moles = 6.0 dm³ ÷ 24 dm³/mol = 0.25 mol",
                  "Mass = moles × Mr = 0.25 × 44 = 11 g",
                  "Constant T: P₁V₁ = P₂V₂ → P₂/P₁ = V₁/V₂ = 6.0/2.0 = 3",
                  "Pressure increases by a factor of 3",
                ],
              },
            ],
          },
          {
            id: "chem-particles-bq4-10",
            question: "CHALLENGE: A student claims that because evaporation and boiling both turn a liquid into a gas, they are the same process. \n(a) Give three differences between evaporation and boiling. [3]\n(b) Liquid ethanol (boiling point 78 °C) is left in an open dish at 20 °C and slowly disappears. Explain, in terms of particles, how this happens even though the temperature is well below the boiling point. [3]\n(c) Suggest why a sealed bottle of ethanol does not empty in the same way. [2]",
            marks: 8,
            modelAnswer: "(a) 1. Evaporation occurs only at the surface of the liquid, whereas boiling occurs throughout the bulk of the liquid (bubbles form within it). 2. Evaporation occurs at any temperature below the boiling point, whereas boiling occurs only at the (fixed) boiling point. 3. Evaporation is a slower, gradual process and cools the liquid, whereas boiling is rapid and the temperature stays constant at the boiling point with a continuous energy supply.\n\n(b) At 20 °C the ethanol particles have a range of kinetic energies. The fastest particles at the surface have enough energy to overcome the intermolecular forces and escape into the air as vapour, even though the average temperature is below the boiling point. Over time more and more particles escape (and the escaped vapour diffuses away in the open air), so the liquid gradually disappears.\n\n(c) In a sealed bottle the escaped vapour cannot leave; the space above the liquid becomes saturated with ethanol vapour. As many particles return to the liquid (condense) as escape (an equilibrium), so there is no net loss and the liquid level stays roughly constant.",
            markScheme: [
              "(a) Evaporation at surface vs boiling throughout the bulk (1)",
              "(a) Evaporation at any temperature below b.p. vs boiling at the boiling point (1)",
              "(a) Evaporation slower/cools liquid vs boiling rapid/constant temperature (1)",
              "(b) Particles have a range of energies; fastest surface particles escape (1)",
              "(b) They overcome intermolecular forces despite being below b.p. (1)",
              "(b) Vapour diffuses away in open air → liquid gradually disappears (1)",
              "(c) Sealed: vapour cannot escape / space becomes saturated (1)",
              "(c) Rate of condensation = rate of evaporation → no net loss (1)",
            ],
            commonError: "For (c), students say 'the lid stops the liquid evaporating' — evaporation still occurs, but an equilibrium is reached so there is no net loss.",
            guideRef: "Changes of State",
            difficulty: "challenge",
            hints: [
              "Compare where (surface vs bulk) and when (any temperature vs fixed point) each process occurs.",
              "Even below the boiling point, do all particles have the same energy?",
              "For (c), think about what happens to vapour that cannot escape a sealed bottle.",
            ],
            strategy: "compare processes; surface evaporation; sealed-equilibrium reasoning",
          },
        ],
      },
    ],
  },
};
