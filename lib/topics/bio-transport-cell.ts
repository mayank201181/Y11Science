import type { Topic } from "../types";

export const bioTransportCell: Topic = {
  id: "bio-transport-cell",
  title: "Movement In & Out of Cells",
  subject: "biology",
  icon: "💧",
  blurb: "Diffusion, osmosis and active transport across membranes.",
  intro:
    "Every cell must constantly exchange materials with its surroundings — taking in oxygen and nutrients, expelling waste, and managing water balance. Three processes govern this traffic: diffusion (the passive spread of particles down a concentration gradient), osmosis (the net movement of water across a partially permeable membrane), and active transport (energy-driven movement against the gradient). Understanding these mechanisms — and how surface area, distance, and temperature influence them — is central to the whole of biology, from leaf gas exchange to kidney filtration.",

  guide: [
    {
      heading: "Diffusion",
      body:
        "**Diffusion** is the net movement of particles from a region of higher concentration to a region of lower concentration, as a result of their random motion. This movement continues until the concentration is equal on both sides — a state called equilibrium. No energy is required; diffusion is a **passive** process driven entirely by the kinetic energy of particles.\n\n" +
        "The *concentration gradient* is the difference in concentration between two regions. The steeper the gradient, the faster diffusion occurs. Four key factors govern the rate:\n\n" +
        "- **Concentration gradient** — steeper gradient → faster diffusion\n" +
        "- **Temperature** — higher temperature gives particles more kinetic energy → faster, more random movement → faster diffusion\n" +
        "- **Surface area** — larger surface area provides more space for simultaneous diffusion events\n" +
        "- **Diffusion distance (thickness)** — shorter distance → faster net movement\n\n" +
        "In biology, diffusion is responsible for oxygen moving from air spaces in leaves into mesophyll cells, carbon dioxide leaving cells, and urea moving out of cells into blood plasma.",
      diagrams: [
        {
          caption: "Diffusion: particles spread from high to low concentration",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing diffusion of particles from a region of high concentration on the left to low concentration on the right, with a dashed dividing line and arrows indicating net movement">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Left region (high conc) -->
  <rect x="10" y="10" width="140" height="180" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <!-- Right region (low conc) -->
  <rect x="170" y="10" width="140" height="180" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <!-- Dividing membrane (dashed) -->
  <line x1="155" y1="10" x2="155" y2="190" stroke="#fbbf24" stroke-width="2" stroke-dasharray="6,4"/>
  <!-- Particles high conc side -->
  <circle cx="40" cy="45" r="7" fill="#38bdf8"/>
  <circle cx="70" cy="35" r="7" fill="#38bdf8"/>
  <circle cx="100" cy="55" r="7" fill="#38bdf8"/>
  <circle cx="55" cy="80" r="7" fill="#38bdf8"/>
  <circle cx="90" cy="90" r="7" fill="#38bdf8"/>
  <circle cx="35" cy="115" r="7" fill="#38bdf8"/>
  <circle cx="120" cy="75" r="7" fill="#38bdf8"/>
  <circle cx="75" cy="130" r="7" fill="#38bdf8"/>
  <circle cx="110" cy="145" r="7" fill="#38bdf8"/>
  <circle cx="45" cy="155" r="7" fill="#38bdf8"/>
  <!-- Particles low conc side -->
  <circle cx="215" cy="50" r="7" fill="#38bdf8"/>
  <circle cx="270" cy="130" r="7" fill="#38bdf8"/>
  <circle cx="240" cy="160" r="7" fill="#38bdf8"/>
  <!-- Net movement arrows -->
  <line x1="155" y1="65" x2="185" y2="65" stroke="#34d399" stroke-width="2.5" marker-end="url(#arr)"/>
  <line x1="155" y1="100" x2="185" y2="100" stroke="#34d399" stroke-width="2.5" marker-end="url(#arr)"/>
  <line x1="155" y1="135" x2="185" y2="135" stroke="#34d399" stroke-width="2.5" marker-end="url(#arr)"/>
  <defs>
    <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#34d399"/>
    </marker>
  </defs>
  <!-- Labels -->
  <text x="80" y="185" text-anchor="middle" font-size="11" fill="#b7bce0" font-family="sans-serif">HIGH concentration</text>
  <text x="240" y="185" text-anchor="middle" font-size="11" fill="#b7bce0" font-family="sans-serif">LOW concentration</text>
  <text x="155" y="8" text-anchor="middle" font-size="10" fill="#fbbf24" font-family="sans-serif">membrane</text>
  <text x="185" y="88" font-size="10" fill="#34d399" font-family="sans-serif">net movement</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Diffusion is the net movement of particles from high to low concentration — down the concentration gradient.",
        "Diffusion is passive — it requires no energy input from the cell.",
        "Rate increases with: steeper concentration gradient, higher temperature, larger surface area, shorter diffusion distance.",
        "Diffusion occurs in gases and liquids; examples include O₂ into cells, CO₂ out of cells, and urea into blood plasma.",
        "Equilibrium is reached when concentrations equalise; net movement stops (random movement continues).",
      ],
      discovery: {
        problem:
          "A drop of blue food dye is placed in a beaker of still water at 20 °C. A second drop is placed in a beaker at 60 °C. Predict which beaker will become uniformly coloured first, and explain why in terms of particle movement.",
        idea:
          "The hotter beaker equalises faster. At 60 °C water molecules (and dye particles) have greater kinetic energy, so they move faster and in more random directions. This increases the rate at which dye particles spread from their initial high-concentration region to regions of lower concentration — i.e., diffusion is faster. Temperature is a direct factor affecting diffusion rate.",
      },
      whyItWorks:
        "Particles in a fluid are in constant random motion (Brownian motion). At any instant, more particles cross from the high-concentration side to the low-concentration side simply because there are more of them there — probability drives the net flow. At equilibrium the crossings balance, but random movement never stops. Raising temperature increases mean kinetic energy (E_k = 3/2 kT), so particles collide and travel further per unit time, accelerating the rate of equalisation.",
      strategies: ["Think about probability: more particles on one side → more likely to cross toward the other side.", "List the four factors, then state the direction of each effect on rate."],
    },

    {
      heading: "Osmosis",
      body:
        "**Osmosis** is the net movement of water molecules from a region of higher water potential to a region of lower water potential, through a **partially permeable membrane**.\n\n" +
        "A partially permeable membrane has pores small enough to let water molecules through but not larger solute molecules (e.g. sucrose, starch). The concept of **water potential** (symbol: Ψ, units: kPa) describes the tendency of water to move. Pure water has the highest water potential (0 kPa). Dissolving solutes lowers water potential (makes it more negative).\n\n" +
        "Key rules:\n" +
        "- Water moves from *high* water potential (more dilute / less solute) to *low* water potential (more concentrated / more solute).\n" +
        "- A solution with a higher solute concentration has a *lower* water potential.\n" +
        "- The driving force is the water potential *gradient* across the membrane.\n\n" +
        "**Classic experiment:** Visking (dialysis) tubing filled with concentrated sucrose solution, sealed, and placed in distilled water. Water enters the tubing by osmosis (water potential outside is higher), causing the tubing to swell and the fluid level in a glass tube attached to it to rise.",
      diagrams: [
        {
          caption: "Osmosis through a partially permeable membrane",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing osmosis: water molecules (small circles) and solute molecules (large hexagons) on each side of a partially permeable membrane. Net arrow shows water moving from dilute left side to concentrated right side.">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Left (dilute, high water potential) -->
  <rect x="10" y="20" width="130" height="165" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <!-- Right (concentrated, low water potential) -->
  <rect x="180" y="20" width="130" height="165" rx="6" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <!-- Membrane -->
  <rect x="148" y="20" width="24" height="165" rx="3" fill="#334155" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="160" y="14" text-anchor="middle" font-size="9" fill="#fbbf24" font-family="sans-serif">PPM</text>
  <!-- Membrane pores -->
  <rect x="154" y="50" width="12" height="5" rx="2" fill="#0f172a"/>
  <rect x="154" y="80" width="12" height="5" rx="2" fill="#0f172a"/>
  <rect x="154" y="110" width="12" height="5" rx="2" fill="#0f172a"/>
  <rect x="154" y="140" width="12" height="5" rx="2" fill="#0f172a"/>
  <!-- Water molecules left (many) -->
  <circle cx="40" cy="50" r="5" fill="#38bdf8"/>
  <circle cx="70" cy="40" r="5" fill="#38bdf8"/>
  <circle cx="100" cy="60" r="5" fill="#38bdf8"/>
  <circle cx="55" cy="80" r="5" fill="#38bdf8"/>
  <circle cx="90" cy="90" r="5" fill="#38bdf8"/>
  <circle cx="35" cy="110" r="5" fill="#38bdf8"/>
  <circle cx="115" cy="75" r="5" fill="#38bdf8"/>
  <circle cx="75" cy="125" r="5" fill="#38bdf8"/>
  <circle cx="110" cy="145" r="5" fill="#38bdf8"/>
  <circle cx="45" cy="155" r="5" fill="#38bdf8"/>
  <circle cx="80" cy="165" r="5" fill="#38bdf8"/>
  <!-- Water molecules right (few) -->
  <circle cx="210" cy="45" r="5" fill="#38bdf8"/>
  <circle cx="280" cy="155" r="5" fill="#38bdf8"/>
  <circle cx="245" cy="170" r="5" fill="#38bdf8"/>
  <!-- Solute molecules left (none) -->
  <!-- Solute molecules right (many) -->
  <polygon points="215,90 225,75 240,75 248,90 240,105 225,105" fill="#a78bfa" opacity="0.85"/>
  <polygon points="250,55 260,40 275,40 283,55 275,70 260,70" fill="#a78bfa" opacity="0.85"/>
  <polygon points="200,120 210,105 225,105 233,120 225,135 210,135" fill="#a78bfa" opacity="0.85"/>
  <polygon points="265,120 275,105 290,105 298,120 290,135 275,135" fill="#a78bfa" opacity="0.85"/>
  <!-- Net movement arrow -->
  <line x1="148" y1="100" x2="178" y2="100" stroke="#34d399" stroke-width="3" marker-end="url(#arr2)"/>
  <defs>
    <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#34d399"/>
    </marker>
  </defs>
  <!-- Labels -->
  <text x="75" y="192" text-anchor="middle" font-size="10" fill="#38bdf8" font-family="sans-serif">Dilute (high WP)</text>
  <text x="245" y="192" text-anchor="middle" font-size="10" fill="#a78bfa" font-family="sans-serif">Concentrated (low WP)</text>
  <text x="30" y="34" font-size="8" fill="#b7bce0" font-family="sans-serif">= water</text>
  <text x="182" y="34" font-size="8" fill="#b7bce0" font-family="sans-serif">= solute</text>
  <text x="145" y="98" font-size="8" fill="#34d399" font-family="sans-serif">osmosis</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Osmosis is the net movement of water molecules from higher water potential to lower water potential through a partially permeable membrane.",
        "Partially permeable membranes allow water through but not large solute molecules.",
        "Dissolving solutes lowers (makes more negative) the water potential of a solution.",
        "Pure water has the highest possible water potential (defined as 0 kPa).",
        "Osmosis is passive — no energy input is required from the cell.",
      ],
      discovery: {
        problem:
          "You have two beakers: A contains distilled water, B contains concentrated salt solution. You place a visking tubing bag filled with concentrated sucrose in each. In which beaker does water enter the bag, and in which does water leave the bag? Try to work it out before reading on.",
        idea:
          "In beaker A (distilled water), the water potential outside is 0 kPa; inside the bag it is negative (sucrose lowers it). Water moves from outside (higher WP) into the bag (lower WP). In beaker B, the salt solution also has a low WP — if the salt concentration is equal to the sucrose, there is no net movement; if the salt is MORE concentrated, water could actually leave the bag. The direction always follows: from higher WP to lower WP.",
      },
      whyItWorks:
        "Water molecules are small enough to pass through the membrane pores; solute molecules are too large. On the dilute side, more water molecules are 'free' (not clustered around solute ions), so the probability of a water molecule hitting a pore and crossing is higher. On the concentrated side, solute-water interactions reduce the effective concentration of free water molecules. The net statistical effect is a flow of water toward the more concentrated solution — until water potential equilibrates on both sides.",
      thinkDeeper:
        "Water potential (Ψ) has two components: solute potential (Ψs, always negative) and pressure potential (Ψp). In a plant cell Ψ = Ψs + Ψp. As water enters a plant cell by osmosis its Ψp rises (the wall pushes back), eventually bringing Ψ to equilibrium with the surroundings even though the solute content hasn't changed. This is why turgor pressure in plant cells can halt osmosis.",
    },

    {
      heading: "Osmosis in Plant and Animal Cells",
      body:
        "The effects of osmosis differ between plant and animal cells because plant cells have a rigid **cell wall**.\n\n" +
        "**Plant cells in different solutions:**\n\n" +
        "- **Hypotonic solution (more dilute than cell):** Water enters by osmosis. The vacuole swells, pushing the cytoplasm against the cell wall. The cell becomes **turgid**. The wall exerts an inward pressure (**turgor pressure / wall pressure**) that resists further entry. Turgid cells give plants their structural rigidity.\n" +
        "- **Isotonic solution:** No net movement of water. The cell remains unchanged.\n" +
        "- **Hypertonic solution (more concentrated than cell):** Water leaves the cell by osmosis. The vacuole shrinks. Eventually the cell membrane pulls away from the cell wall — this is **plasmolysis**. The cell is said to be **plasmolysed** (or **flaccid** if less extreme). Plasmolysis is reversible if the cell is placed back in a dilute solution.\n\n" +
        "**Animal cells in different solutions:**\n\n" +
        "- **Hypotonic solution:** Water enters. The cell swells and may burst — **haemolysis** (for red blood cells).\n" +
        "- **Isotonic solution (e.g. 0.9% NaCl for human cells):** No net movement. Cells retain normal shape.\n" +
        "- **Hypertonic solution:** Water leaves. The cell shrinks and becomes wrinkled — **crenation**.\n\n" +
        "This is why intravenous drips use isotonic saline (0.9% NaCl), and why plant wilting is reversed by watering.",
      diagrams: [
        {
          caption: "Plant cell osmosis: turgid (left) vs. plasmolysed (right)",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two plant cells side by side. Left cell is turgid with large central vacuole and cell membrane pressed against wall. Right cell is plasmolysed with cell membrane pulled away from wall and shrunken vacuole.">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- TURGID CELL (left) -->
  <!-- Cell wall -->
  <rect x="18" y="25" width="120" height="150" rx="10" fill="none" stroke="#fbbf24" stroke-width="4"/>
  <!-- Cell membrane (pressed against wall) -->
  <rect x="22" y="29" width="112" height="142" rx="8" fill="none" stroke="#34d399" stroke-width="2"/>
  <!-- Vacuole (large) -->
  <ellipse cx="78" cy="100" rx="45" ry="57" fill="#1d4ed8" opacity="0.55" stroke="#38bdf8" stroke-width="1.5"/>
  <!-- Cytoplasm label -->
  <text x="78" y="180" text-anchor="middle" font-size="9" fill="#34d399" font-family="sans-serif">cell membrane</text>
  <text x="78" y="20" text-anchor="middle" font-size="9" fill="#fbbf24" font-family="sans-serif">cell wall</text>
  <text x="78" y="104" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif">vacuole</text>
  <text x="78" y="192" text-anchor="middle" font-size="10" fill="#38bdf8" font-family="sans-serif">TURGID</text>
  <!-- Turgor pressure arrows -->
  <line x1="78" y1="29" x2="78" y2="16" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arr3)"/>
  <line x1="22" y1="100" x2="9" y2="100" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arr4)"/>
  <defs>
    <marker id="arr3" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#fbbf24"/></marker>
    <marker id="arr4" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#fbbf24"/></marker>
  </defs>
  <!-- PLASMOLYSED CELL (right) -->
  <!-- Cell wall -->
  <rect x="180" y="25" width="120" height="150" rx="10" fill="none" stroke="#fbbf24" stroke-width="4"/>
  <!-- Cell membrane (pulled away = gap visible) -->
  <ellipse cx="240" cy="100" rx="40" ry="52" fill="none" stroke="#34d399" stroke-width="2"/>
  <!-- Shrunken vacuole -->
  <ellipse cx="240" cy="100" rx="28" ry="37" fill="#1d4ed8" opacity="0.45" stroke="#38bdf8" stroke-width="1.5"/>
  <!-- Gap label -->
  <text x="297" y="55" text-anchor="end" font-size="8" fill="#fb7185" font-family="sans-serif">gap</text>
  <line x1="267" y1="52" x2="277" y2="50" stroke="#fb7185" stroke-width="1"/>
  <text x="240" y="20" text-anchor="middle" font-size="9" fill="#fbbf24" font-family="sans-serif">cell wall</text>
  <text x="240" y="104" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif">vacuole</text>
  <text x="240" y="192" text-anchor="middle" font-size="10" fill="#fb7185" font-family="sans-serif">PLASMOLYSED</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Turgid plant cells have water-filled vacuoles pressing the membrane against the rigid wall — this gives plants structural support.",
        "Plasmolysis occurs when a plant cell loses water to a concentrated solution; the membrane pulls away from the wall.",
        "Animal cells have no cell wall, so in hypotonic solutions they may burst (haemolysis); in hypertonic solutions they shrink (crenation).",
        "Normal (isotonic) saline for human cells is approximately 0.9% NaCl, matching the osmolarity of blood plasma.",
        "Turgor pressure is the outward pressure exerted by the swollen vacuole on the cell wall; it is key to non-woody plant support.",
      ],
      strategies: ["Label the solution concentration and cell contents, then apply the rule: water moves from high WP to low WP.", "Remember: plant cells have a wall — they can resist swelling, but animals cannot."],
      thinkDeeper: "Students often say water moves from 'low concentration to high concentration' — be precise: it is water potential (not solute concentration) that determines direction. Water moves from higher water potential to lower water potential.",
    },

    {
      heading: "Active Transport",
      body:
        "**Active transport** is the movement of molecules or ions across a cell membrane *against* their concentration gradient (from low to high concentration). Unlike diffusion, active transport:\n\n" +
        "- Requires **energy from respiration** (in the form of ATP).\n" +
        "- Uses **carrier proteins** embedded in the membrane that act as 'pumps'.\n" +
        "- Can be stopped by respiratory inhibitors (e.g. cyanide, lack of oxygen).\n\n" +
        "**Examples:**\n\n" +
        "- **Root hair cells absorbing mineral ions:** Soil water often has a lower concentration of ions (e.g. nitrate, potassium) than the cytoplasm. Ions must be absorbed against the gradient using active transport, so the plant can accumulate the minerals it needs for protein synthesis and other functions.\n" +
        "- **Glucose absorption in the small intestine:** After digestion, glucose concentration in the gut lumen may fall below the concentration in epithelial cells. Active transport allows continued absorption against the gradient, ensuring efficient recovery of all available glucose.\n\n" +
        "**Comparison summary:**\n\n" +
        "- Diffusion: passive, down gradient, no energy, no carrier protein required (though channel proteins can help).\n" +
        "- Osmosis: passive, down water potential gradient, no energy.\n" +
        "- Active transport: active, *against* gradient, energy (ATP) required, carrier proteins essential.",
      keyPoints: [
        "Active transport moves substances against their concentration gradient, from low to high concentration.",
        "It requires energy from cellular respiration (ATP) and specific carrier proteins in the membrane.",
        "Root hair cells use active transport to absorb mineral ions (e.g. nitrate, potassium) from the soil.",
        "Gut epithelial cells use active transport to absorb glucose from the intestinal lumen into the blood.",
        "Active transport is stopped when respiration is inhibited (e.g. by cyanide or anaerobic conditions).",
      ],
      discovery: {
        problem:
          "A student places root tips in a solution containing a respiratory inhibitor and measures ion uptake into the root cells. She finds that ion uptake nearly stops, even though the ion concentration in the soil is much lower than in the cells. Why does inhibiting respiration stop ion uptake? (Clue: which transport mechanism moves ions into roots?)",
        idea:
          "Root hair cells absorb mineral ions by active transport — against their concentration gradient. Active transport requires ATP, which is produced by cellular respiration. Blocking respiration cuts off the ATP supply, so the carrier proteins cannot function and ion uptake halts. This is key evidence that ion uptake is *not* by diffusion (which would continue regardless of ATP).",
      },
      whyItWorks:
        "Carrier proteins have specific binding sites that bind to the target molecule on the low-concentration side. ATP phosphorylates (energises) the protein, causing a conformational change that moves the molecule through the membrane and releases it on the high-concentration side. The carrier protein then resets using another ATP molecule. This cycle is analogous to a revolving door powered by electricity.",
      thinkDeeper:
        "Cells that carry out a lot of active transport contain more mitochondria (for ATP production) and more carrier proteins. Epithelial cells lining the small intestine have microvilli (increasing surface area) AND dense mitochondria — compare this with root hair cells. Both adaptations are logical extensions of the demand for active transport.",
      strategies: ["If a question asks 'how do you know it is active transport rather than diffusion?', look for: movement against gradient, energy dependence, carrier protein involvement, sensitivity to respiratory inhibitors."],
    },

    {
      heading: "Surface Area to Volume Ratio",
      body:
        "As an organism (or cell) increases in size, its **volume** grows faster than its **surface area**. This is critical because:\n\n" +
        "- Surface area determines how quickly materials can enter or leave.\n" +
        "- Volume determines how much metabolic demand the organism has.\n" +
        "- A falling SA:V ratio means diffusion alone is insufficient to supply nutrients or remove waste quickly enough.\n\n" +
        "**For a cube of side length *l*:**\n\n" +
        "- Surface area = 6l²\n" +
        "- Volume = l³\n" +
        "- SA:V ratio = 6l² / l³ = 6/l\n\n" +
        "So as *l* doubles, SA:V halves. A small bacterium (1 µm) has an enormous SA:V; a large animal has a tiny SA:V and must have specialised exchange surfaces (lungs, gills, villi) and transport systems (circulatory system).\n\n" +
        "**Biological solutions to low SA:V:**\n\n" +
        "- Alveoli in lungs (many small spheres → high total SA)\n" +
        "- Villi and microvilli in small intestine\n" +
        "- Gills with gill lamellae in fish\n" +
        "- Root hair cells in plants",
      keyPoints: [
        "SA:V ratio = surface area divided by volume; it decreases as size increases.",
        "Small cells and organisms have high SA:V, allowing efficient diffusion; large organisms need specialised exchange surfaces.",
        "Doubling the side of a cube halves its SA:V ratio (SA:V = 6/l for a cube).",
        "Specialised exchange surfaces (alveoli, villi, gills) maximise SA and minimise diffusion distance.",
        "Active transport can supplement diffusion at exchange surfaces when concentration gradients are unfavourable.",
      ],
      discovery: {
        problem:
          "Calculate the SA:V ratio for a cube of side 2 cm and a cube of side 4 cm. Then explain what happens to a cell's ability to supply itself by diffusion as it grows larger.",
        idea:
          "2 cm cube: SA = 6 × 4 = 24 cm²; V = 8 cm³; SA:V = 24/8 = 3. 4 cm cube: SA = 6 × 16 = 96 cm²; V = 64 cm³; SA:V = 96/64 = 1.5. The larger cube has half the SA:V. As the cell grows, the surface area available per unit of cytoplasm shrinks, so diffusion cannot supply the interior fast enough. This is why cells divide before reaching a critical size, and why large organisms evolved specialised exchange organs.",
      },
      whyItWorks:
        "SA scales as l² while V scales as l³. The ratio 6l²/l³ = 6/l clearly shows an inverse relationship with size. Doubling l multiplies SA by 4 and V by 8, so the ratio is halved each time. This geometric constraint is universal — it applies to cells, organs, and whole organisms — and has driven major evolutionary innovations in gas exchange and circulation.",
      strategies: ["Always show working: calculate SA, calculate V, then divide.", "For non-cube shapes, use the appropriate formula (sphere: SA = 4πr², V = 4/3 πr³)."],
    },

    {
      heading: "Osmosis Experiments: Potato and Visking Tubing",
      body:
        "Two classic IGCSE practical investigations demonstrate osmosis directly.\n\n" +
        "**Potato experiment (investigating water potential of tissue):**\n\n" +
        "Cut potato cylinders of equal size. Place each in a different sucrose solution (e.g. 0.0 M, 0.2 M, 0.4 M, 0.6 M, 0.8 M, 1.0 M). Leave for 30 minutes. Measure change in mass (or length) of each cylinder.\n\n" +
        "- Cylinders in dilute solutions *gain* mass (water enters by osmosis — solution has higher WP than cells).\n" +
        "- Cylinders in concentrated solutions *lose* mass (water leaves — solution has lower WP).\n" +
        "- The concentration at which there is *no change in mass* = isotonic point → this equals the water potential of the potato cells.\n\n" +
        "Plot % change in mass (y-axis) against sucrose concentration (x-axis). The x-intercept gives the isotonic concentration.\n\n" +
        "**Visking tubing experiment:**\n\n" +
        "Visking (dialysis) tubing is a partially permeable membrane. Fill a length with concentrated sucrose solution, seal one end, attach a capillary tube to the other, and place in a beaker of distilled water. Observe the fluid level in the capillary tube rise over time as water enters by osmosis. This directly models osmosis across a membrane. If the tubing is placed in an equally concentrated solution, no change is observed — confirming that the gradient drives movement.",
      keyPoints: [
        "The potato cylinder experiment measures mass change to determine osmotic movement of water.",
        "At the isotonic concentration there is no change in mass — the cell WP equals the solution WP.",
        "% change in mass = (final mass − initial mass) / initial mass × 100 — use percentage to control for cylinder size variation.",
        "Visking tubing acts as a model partially permeable membrane; the capillary tube shows water entry directly.",
        "A controlled experiment changes one variable (solution concentration) and keeps all others constant (temperature, time, size of potato).",
      ],
      strategies: ["Calculate % change in mass rather than absolute change, to control for slightly different initial sizes.", "Draw a graph: % change vs. concentration; extrapolate to find the x-intercept (isotonic point)."],
    },
  ],

  learn: {
    keyFacts: [
      "Diffusion is the net movement of particles from high to low concentration — it is passive and requires no energy.",
      "Rate of diffusion increases with steeper concentration gradient, higher temperature, larger surface area, and shorter diffusion distance.",
      "Osmosis is the net movement of water molecules from higher water potential to lower water potential through a partially permeable membrane.",
      "Pure water has the highest water potential (0 kPa); dissolving solutes makes water potential more negative.",
      "A turgid plant cell has a fully inflated vacuole pressing against the wall, providing support; a plasmolysed cell has its membrane pulled away from the wall.",
      "Animal cells in hypotonic solutions swell and may burst (haemolysis); in hypertonic solutions they crenate (shrink).",
      "Active transport moves substances against the concentration gradient using ATP (from respiration) and carrier proteins.",
      "Root hair cells absorb mineral ions by active transport; gut epithelial cells absorb glucose by active transport.",
      "SA:V ratio = 6/l for a cube of side l; smaller organisms have larger SA:V, enabling efficient diffusion.",
      "Large organisms compensate for low SA:V with specialised exchange surfaces: alveoli, villi, gill lamellae.",
    ],
    flashcards: [
      { front: "Define diffusion", back: "The net movement of particles from a region of higher concentration to a region of lower concentration, as a result of random motion. Passive — no energy required." },
      { front: "Four factors that increase the rate of diffusion", back: "1. Steeper concentration gradient  2. Higher temperature  3. Larger surface area  4. Shorter diffusion distance" },
      { front: "Define osmosis", back: "The net movement of water molecules from a region of higher water potential to a region of lower water potential through a partially permeable membrane." },
      { front: "What is a partially permeable membrane?", back: "A membrane with pores that allow small molecules (e.g. water) to pass through but not larger molecules (e.g. sucrose, proteins)." },
      { front: "What is water potential?", back: "A measure of the tendency of water to move. Pure water = 0 kPa (highest). Adding solutes makes water potential more negative (lower)." },
      { front: "Turgid vs. flaccid vs. plasmolysed", back: "Turgid: fully inflated, membrane against wall, turgor pressure high. Flaccid: water lost, turgor pressure low. Plasmolysed: membrane pulled away from wall." },
      { front: "What happens to an animal cell in a hypotonic solution?", back: "Water enters by osmosis. The cell swells and may burst — haemolysis (for red blood cells)." },
      { front: "What happens to an animal cell in a hypertonic solution?", back: "Water leaves by osmosis. The cell shrinks and becomes wrinkled — crenation." },
      { front: "Define active transport", back: "The movement of molecules or ions across a membrane against the concentration gradient, requiring energy from respiration (ATP) and carrier proteins." },
      { front: "Two biological examples of active transport", back: "1. Mineral ion (e.g. nitrate) uptake by root hair cells from soil water. 2. Glucose absorption by gut epithelial cells from the intestinal lumen." },
      { front: "SA:V ratio formula for a cube of side l", back: "SA = 6l²; V = l³; SA:V = 6/l. As l increases, SA:V decreases." },
      { front: "Why do large organisms need specialised exchange surfaces?", back: "Their SA:V ratio is too low for diffusion alone to supply all cells quickly enough. Alveoli, villi, and gills maximise surface area and minimise diffusion distance." },
    ],
    keyTerms: [
      { term: "Diffusion", definition: "Net movement of particles from high to low concentration due to random motion; passive, requires no energy." },
      { term: "Concentration gradient", definition: "The difference in concentration of a substance between two regions; steeper gradient = faster diffusion." },
      { term: "Osmosis", definition: "Net movement of water molecules from higher to lower water potential through a partially permeable membrane; passive." },
      { term: "Water potential (Ψ)", definition: "A measure of the tendency of water to move; pure water = 0 kPa; adding solutes lowers (makes more negative) water potential." },
      { term: "Partially permeable membrane", definition: "A membrane that allows water and small molecules through but not large solute molecules." },
      { term: "Turgid", definition: "Describes a plant cell that has absorbed water by osmosis until the vacuole is fully inflated and presses against the rigid cell wall." },
      { term: "Turgor pressure", definition: "The outward pressure exerted by the contents of a turgid plant cell on the cell wall; provides mechanical support in non-woody plants." },
      { term: "Plasmolysis", definition: "Shrinkage of a plant cell's contents when the cell loses water by osmosis to a concentrated solution; the membrane pulls away from the wall." },
      { term: "Haemolysis", definition: "Bursting of red blood cells (or other animal cells) due to water entering by osmosis in a hypotonic solution." },
      { term: "Crenation", definition: "Shrinking and wrinkling of animal cells when water leaves by osmosis into a hypertonic solution." },
      { term: "Active transport", definition: "Movement of substances against the concentration gradient across a membrane, requiring ATP from respiration and carrier proteins." },
      { term: "SA:V ratio", definition: "Surface area divided by volume; decreases as organism size increases; limits diffusion efficiency in large organisms." },
      { term: "Isotonic", definition: "Describes two solutions with equal water potentials — no net movement of water by osmosis between them." },
    ],
  },

  quiz: {
    mcq: [
      {
        id: "bio-transport-cell-mcq-q01",
        question: "Which statement correctly describes diffusion?",
        options: [
          "Net movement of particles from low to high concentration",
          "Net movement of particles from high to low concentration, requiring ATP",
          "Net movement of particles from high to low concentration, requiring no energy",
          "Net movement of water molecules through a partially permeable membrane",
        ],
        answerIndex: 2,
        explanation: "Diffusion is the net movement of particles from high to low concentration driven by random motion — it is passive and requires no energy. Option A reverses the direction; B incorrectly adds ATP; D describes osmosis.",
        guideRef: "Diffusion",
        difficulty: "warmup",
      },
      {
        id: "bio-transport-cell-mcq-q02",
        question: "A plant cell is placed in a solution more concentrated than its cell contents. What is the most likely outcome?",
        options: [
          "The cell becomes turgid as water enters by osmosis",
          "The cell bursts due to excess water",
          "The cell becomes plasmolysed as water leaves by osmosis",
          "No change, because plant cells have a cell wall",
        ],
        answerIndex: 2,
        explanation: "A more concentrated solution has a lower water potential than the cell. Water moves from the cell (higher WP) to the solution (lower WP) by osmosis, causing the vacuole to shrink and the membrane to pull away from the wall — plasmolysis. Turgidity (A) occurs in dilute solutions; bursting (B) happens to animal cells; the cell wall (D) doesn't prevent water loss.",
        guideRef: "Osmosis in Plant and Animal Cells",
        difficulty: "warmup",
      },
      {
        id: "bio-transport-cell-mcq-q03",
        question: "Which factor does NOT directly affect the rate of diffusion?",
        options: [
          "Temperature of the solution",
          "Concentration gradient of the substance",
          "Presence of carrier proteins",
          "Surface area of the exchange surface",
        ],
        answerIndex: 2,
        explanation: "Carrier proteins are used in active transport and facilitated diffusion, but simple diffusion does not require them. Temperature, concentration gradient, and surface area all directly affect diffusion rate. (Note: facilitated diffusion does use channel proteins, but the question refers to simple diffusion factors as listed in the syllabus.)",
        guideRef: "Diffusion",
        difficulty: "core",
        hints: [
          "Think about which three factors were listed as affecting diffusion rate in the guide.",
          "Carrier proteins are specifically associated with a different transport mechanism.",
          "Active transport uses carrier proteins; diffusion does not require them.",
        ],
      },
      {
        id: "bio-transport-cell-mcq-q04",
        question: "Root hair cells absorb nitrate ions from soil water even when the ion concentration in the soil is lower than in the cell. Which process is responsible?",
        options: [
          "Diffusion, because ions move randomly",
          "Osmosis, because the ions dissolve in water",
          "Active transport, using ATP from respiration",
          "Active transport, releasing ATP into the soil",
        ],
        answerIndex: 2,
        explanation: "Movement against the concentration gradient (from low to high concentration) requires active transport. This uses ATP produced by cellular respiration and carrier proteins. Option D is wrong because ATP is used inside the cell, not released into the soil.",
        guideRef: "Active Transport",
        difficulty: "core",
        hints: [
          "If ions are moving from lower to higher concentration, is this with or against the gradient?",
          "Against the gradient = active transport is needed.",
          "Active transport requires energy — where does the energy come from in cells?",
        ],
      },
      {
        id: "bio-transport-cell-mcq-q05",
        question: "A 1 cm cube and a 3 cm cube are compared. What is the SA:V ratio of the 3 cm cube?",
        options: ["6", "3", "2", "1"],
        answerIndex: 2,
        explanation: "SA = 6 × 3² = 54 cm²; V = 3³ = 27 cm³; SA:V = 54/27 = 2. For the 1 cm cube: SA:V = 6. As size increases, SA:V decreases — the 3 cm cube has one-third the SA:V of the 1 cm cube.",
        guideRef: "Surface Area to Volume Ratio",
        difficulty: "core",
        hints: [
          "SA of a cube of side l = 6l²",
          "V of a cube of side l = l³",
          "Divide SA by V to get the ratio.",
        ],
        strategy: "Calculate SA and V separately, then divide.",
      },
      {
        id: "bio-transport-cell-mcq-q06",
        question: "A student adds a respiratory inhibitor to a suspension of animal cells and measures glucose uptake into the cells. Glucose concentration outside the cells is much lower than inside. Which observation is most likely?",
        options: [
          "Glucose uptake continues unchanged, because diffusion does not require ATP",
          "Glucose uptake stops, because active transport requires ATP",
          "Glucose moves out of the cells by osmosis",
          "Glucose uptake increases, because the inhibitor blocks competing reactions",
        ],
        answerIndex: 1,
        explanation: "Glucose is being absorbed against its concentration gradient (from low outside to high inside), so this is active transport. Blocking respiration removes the ATP supply, halting active transport. Diffusion (A) would move glucose out, not in, under these conditions. Osmosis (C) moves water, not glucose. Option D is not a valid mechanism.",
        guideRef: "Active Transport",
        difficulty: "challenge",
        hints: [
          "Glucose is moving against its concentration gradient — which process does this?",
          "Active transport requires ATP. What does a respiratory inhibitor do to ATP production?",
          "Without ATP, carrier proteins cannot function — what happens to uptake?",
          "Check the direction: glucose is higher inside, so diffusion would move it out, not in.",
        ],
        strategy: "Identify the direction of movement relative to the gradient, then determine which transport mechanism applies.",
      },
    ],
    qa: [
      {
        id: "bio-transport-cell-qa-q01",
        question: "Explain why a piece of celery becomes crisp when placed in water, and limp when placed in a concentrated salt solution. Use the terms 'osmosis', 'turgid', and 'plasmolysis' in your answer. (4 marks)",
        marks: 4,
        modelAnswer:
          "When celery is placed in water, water moves into the cells by osmosis, because the water potential of the pure water (0 kPa) is higher than the water potential of the cell contents. Water enters the vacuoles, making the cells turgid — the vacuoles push against the rigid cell walls, creating turgor pressure that makes the celery firm and crisp.\n\nWhen placed in concentrated salt solution, the water potential of the solution is lower than that of the cell contents, so water leaves the cells by osmosis. The vacuoles shrink and the cell membrane may pull away from the cell wall (plasmolysis). Loss of turgor makes the celery limp.",
        markScheme: [
          "In water: water moves into cells by osmosis (1 mark)",
          "Because water potential of water is higher than water potential of cell contents / water moves from higher to lower WP (1 mark)",
          "Cells become turgid / turgor pressure acts against cell wall (1 mark)",
          "In salt solution: water leaves cells by osmosis / cells lose water / cells become plasmolysed / flaccid → celery limp (1 mark)",
        ],
        commonError: "Students often say 'water is attracted to salt' rather than explaining water potential gradients — examiners want the term 'water potential' and the direction (high to low WP).",
        guideRef: "Osmosis in Plant and Animal Cells",
        difficulty: "core",
        hints: [
          "Identify the relative water potentials in each scenario — pure water vs. cell contents vs. salt solution.",
          "Water always moves from higher WP to lower WP by osmosis.",
          "Think about what happens to turgor pressure when water enters or leaves.",
          "Use all three required terms: osmosis, turgid, plasmolysis.",
        ],
        strategy: "Start by establishing water potential on each side of the membrane, then state direction of water movement, then state the cellular consequence.",
      },
      {
        id: "bio-transport-cell-qa-q02",
        question: "A student investigates osmosis using potato cylinders. She cuts 5 cylinders of equal mass (each 4.0 g) and places them in sucrose solutions of concentrations 0.0, 0.2, 0.4, 0.6, and 0.8 mol/dm³ for 30 minutes. After blotting dry, the masses are: 4.5, 4.2, 4.0, 3.7, 3.4 g respectively.\n(a) Calculate the % change in mass for the cylinder in 0.0 mol/dm³ sucrose. (2 marks)\n(b) At what sucrose concentration is the water potential of the potato equal to that of the solution? Explain your reasoning. (2 marks)\n(c) State one variable the student must keep constant, and explain why. (2 marks)",
        marks: 6,
        modelAnswer:
          "(a) % change = (4.5 − 4.0) / 4.0 × 100 = +12.5%\n\n(b) The water potential of the potato equals the solution at 0.4 mol/dm³ sucrose, because at this concentration there is no change in mass (final mass = initial mass = 4.0 g). No net movement of water by osmosis occurs when the water potentials are equal (isotonic conditions).\n\n(c) Temperature must be kept constant (e.g. all beakers at 20 °C), because temperature affects the rate of osmosis — higher temperature increases kinetic energy of water molecules, which could change the extent of water movement in the fixed 30-minute period.",
        markScheme: [
          "(a) Correct working: (4.5 − 4.0) / 4.0 × 100 (1 mark); answer +12.5% with correct sign (1 mark)",
          "(b) 0.4 mol/dm³ (1 mark); because mass does not change at this concentration / no net water movement / isotonic (1 mark)",
          "(c) Any one of: temperature, time, surface area / size of cylinders, species of potato; with valid explanation linking to effect on rate or extent of osmosis (2 marks — 1 for variable + 1 for reason)",
        ],
        commonError: "Forgetting to express mass change as a percentage (so cylinders of different sizes can be compared), or giving % change as a positive number for mass loss.",
        guideRef: "Osmosis Experiments: Potato and Visking Tubing",
        difficulty: "core",
        hints: [
          "% change in mass = (change in mass ÷ initial mass) × 100",
          "The isotonic point is where % change = 0, i.e. no net water movement.",
          "For the controlled variable, think about what else could change the rate of osmosis.",
          "Always include a unit or sign for % change (+ or −).",
        ],
        strategy: "Use the formula, identify the zero-crossing on the data table, then apply understanding of osmosis to choose a sensible controlled variable.",
        solutions: [
          {
            label: "Method 1: Direct calculation",
            steps: [
              "Change in mass = 4.5 g − 4.0 g = +0.5 g",
              "% change = (0.5 / 4.0) × 100 = +12.5%",
              "Positive sign indicates mass gain (water entered by osmosis).",
            ],
          },
        ],
      },
      {
        id: "bio-transport-cell-qa-q03",
        question: "Compare diffusion and active transport. Include in your answer: direction of movement relative to the concentration gradient, energy requirement, and one specific biological example of each. (6 marks)",
        marks: 6,
        modelAnswer:
          "Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration — it occurs down the concentration gradient. It is a passive process, requiring no energy (no ATP). An example is oxygen diffusing from the alveoli (high O₂ concentration) into the blood (lower O₂ concentration) in the lungs.\n\nActive transport is the movement of substances from a region of lower concentration to a region of higher concentration — it occurs against the concentration gradient. It requires energy in the form of ATP, produced by cellular respiration, and uses specific carrier proteins in the membrane. An example is the absorption of mineral ions (e.g. nitrate) by root hair cells from the soil water, where the ion concentration in the soil may be lower than in the cell.",
        markScheme: [
          "Diffusion: down concentration gradient / high to low concentration (1 mark)",
          "Diffusion: passive / no energy / no ATP required (1 mark)",
          "Correct biological example of diffusion with context (e.g. O2 into cells, CO2 out of cells) (1 mark)",
          "Active transport: against concentration gradient / low to high concentration (1 mark)",
          "Active transport: requires energy / ATP from respiration; uses carrier proteins (1 mark)",
          "Correct biological example of active transport with context (root hair ion uptake or gut glucose absorption) (1 mark)",
        ],
        commonError: "Students often confuse the direction — active transport goes from LOW to HIGH concentration (against the gradient). Diffusion always goes from HIGH to LOW.",
        guideRef: "Active Transport",
        difficulty: "core",
        hints: [
          "Draft a table: rows = diffusion and active transport; columns = direction, energy, example.",
          "For direction: diffusion goes with the gradient (high→low); active transport goes against it (low→high).",
          "For energy: only active transport requires ATP; diffusion is passive.",
          "Choose a specific named example for each — vague answers lose marks.",
        ],
        strategy: "Use a comparison table structure mentally; ensure each comparison point is directly contrasted.",
      },
    ],
  },


  questionBank: {
    mcqPapers: [
      {
        id: "bio-transport-cell-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "10 multiple-choice questions: diffusion, osmosis, osmosis in cells, active transport, SA:V ratio.",
        questions: [
          {
            id: "bio-transport-cell-bm1-01",
            question: "A student drops a crystal of potassium manganate(VII) into still water. Over time the purple colour spreads evenly. Which statement best explains this?",
            options: [
              "The crystal is carried by convection currents throughout the water",
              "The ions move by active transport from the crystal to the water",
              "The ions diffuse from the high concentration at the crystal to regions of lower concentration",
              "Osmosis moves water molecules away from the crystal",
            ],
            answerIndex: 2,
            explanation: "Diffusion: ions spread down the concentration gradient from high (at the crystal) to low concentration regions. Convection (A) requires bulk movement; active transport (B) needs energy and a membrane; osmosis (D) moves water not solute.",
            guideRef: "Diffusion",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bm1-02",
            question: "Which change would INCREASE the rate of diffusion of oxygen into a cell?",
            options: [
              "Decreasing the temperature from 37 °C to 20 °C",
              "Increasing the thickness of the cell membrane",
              "Increasing the concentration of oxygen outside the cell",
              "Decreasing the surface area of the cell membrane",
            ],
            answerIndex: 2,
            explanation: "A higher oxygen concentration outside steepens the concentration gradient, driving faster diffusion. Lower temperature (A) slows particle movement; a thicker membrane (B) increases diffusion distance; less surface area (D) reduces the exchange area — both slow diffusion.",
            guideRef: "Diffusion",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bm1-03",
            question: "Which statement correctly describes osmosis?",
            options: [
              "Net movement of any particles from high to low concentration through any membrane",
              "Net movement of water molecules from higher water potential to lower water potential through a partially permeable membrane",
              "Net movement of water molecules from lower water potential to higher water potential, requiring ATP",
              "Net movement of solute molecules through a partially permeable membrane down their concentration gradient",
            ],
            answerIndex: 1,
            explanation: "Osmosis specifically concerns water molecules, moving from higher to lower water potential, through a partially permeable membrane — passive, no ATP. Option A confuses osmosis with general diffusion; C reverses the direction and incorrectly adds ATP; D describes solute movement, not osmosis.",
            guideRef: "Osmosis",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bm1-04",
            question: "A red blood cell is placed in a solution more dilute than blood plasma. Which outcome is most likely?",
            options: [
              "The cell shrinks and becomes crenated",
              "The cell remains unchanged",
              "The cell becomes turgid and develops turgor pressure",
              "The cell swells and may undergo haemolysis",
            ],
            answerIndex: 3,
            explanation: "A more dilute solution has higher water potential than the cell contents. Water enters by osmosis, causing the cell to swell. Animal cells have no cell wall to resist this, so the cell may burst — haemolysis. Crenation (A) occurs in hypertonic solution; turgor (C) is a plant-cell term.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bm1-05",
            question: "A plant cell has water potential −400 kPa and is placed in a solution with water potential −200 kPa. What is the direction of net water movement?",
            options: [
              "Out of the cell, because −400 kPa is more negative than −200 kPa",
              "Into the cell, because the solution (−200 kPa) has higher water potential than the cell (−400 kPa)",
              "No net movement, because both values are negative",
              "Into the cell, because −400 kPa is a larger number than −200 kPa",
            ],
            answerIndex: 1,
            explanation: "Water moves from higher water potential to lower: −200 kPa > −400 kPa on the number line, so the solution has higher WP. Water moves from the solution into the cell. Option A confuses 'more negative' with 'higher'; C is wrong because it ignores the gradient magnitude; D misreads the number-line direction.",
            guideRef: "Osmosis",
            difficulty: "core",
            hints: [
              "On a number line, −200 is greater (higher) than −400.",
              "Water always moves from the higher water potential side to the lower.",
              "More negative = lower water potential.",
            ],
          },
          {
            id: "bio-transport-cell-bm1-06",
            question: "Root hair cells absorb nitrate ions from soil water even when soil nitrate concentration is lower than inside the cell. Which process does this and what does it require?",
            options: [
              "Diffusion; requires a concentration gradient from soil to cell",
              "Osmosis; requires a partially permeable membrane",
              "Active transport; requires ATP from respiration and carrier proteins",
              "Active transport; releases ATP into the surrounding soil",
            ],
            answerIndex: 2,
            explanation: "Movement against the concentration gradient (low → high) is active transport. It uses ATP produced inside the cell by respiration, and carrier proteins in the membrane. ATP is not released into the soil (D). Diffusion (A) and osmosis (B) are passive and cannot move ions against a gradient.",
            guideRef: "Active Transport",
            difficulty: "core",
            hints: [
              "Low concentration in soil → high concentration in cell: is this with or against the gradient?",
              "Against the gradient requires active transport.",
              "Active transport uses ATP produced by respiration inside the cell.",
            ],
          },
          {
            id: "bio-transport-cell-bm1-07",
            question: "A cube of side 4 cm has a surface area to volume ratio of:",
            options: ["4", "3", "2", "1.5"],
            answerIndex: 3,
            explanation: "SA = 6 × 4² = 96 cm²; V = 4³ = 64 cm³; SA:V = 96/64 = 1.5. Alternatively, SA:V = 6/l = 6/4 = 1.5.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "core",
            hints: [
              "SA of a cube = 6l²",
              "V of a cube = l³",
              "SA:V = 6/l for any cube.",
            ],
            strategy: "Use SA:V = 6/l directly: 6÷4 = 1.5.",
          },
          {
            id: "bio-transport-cell-bm1-08",
            question: "Which feature do alveoli, villi, and gill lamellae all share that makes them efficient exchange surfaces?",
            options: [
              "They all contain many mitochondria for active transport",
              "They all have a large surface area relative to volume and a short diffusion distance",
              "They all use active transport to move substances against concentration gradients",
              "They all contain partially permeable membranes that prevent all solute movement",
            ],
            answerIndex: 1,
            explanation: "All three are adaptations to maximise exchange by diffusion: large surface area provides more sites for simultaneous diffusion; thin walls minimise diffusion distance. Mitochondria (A) are present but not the defining shared feature; active transport (C) supplements but does not characterise all three; partially permeable membranes (D) do not prevent all solute movement.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "core",
            hints: [
              "What limits the rate of diffusion? Surface area and diffusion distance.",
              "All three structures are described as maximising exchange by diffusion.",
            ],
          },
          {
            id: "bio-transport-cell-bm1-09",
            question: "A potato cylinder placed in 0.6 mol/dm³ sucrose solution loses 8% of its mass. What is the most likely explanation?",
            options: [
              "The sucrose solution has a higher water potential than the potato cells, so water enters by osmosis",
              "The sucrose solution has a lower water potential than the potato cells, so water leaves by osmosis",
              "Sucrose molecules enter the potato cells by diffusion, increasing cell mass",
              "Active transport pumps water out of the potato cells into the sucrose solution",
            ],
            answerIndex: 1,
            explanation: "Mass loss means water left the cylinder. A concentrated sucrose solution has lower water potential than the potato cell contents. Water moves by osmosis from the cell (higher WP) to the solution (lower WP). Sucrose molecules (C) are too large to diffuse into cells; active transport (D) is not responsible for water movement.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "core",
            hints: [
              "Mass decreases → water left the cell.",
              "Which side has the lower water potential: concentrated sucrose or the cell?",
              "Water moves from higher WP to lower WP by osmosis.",
            ],
          },
          {
            id: "bio-transport-cell-bm1-10",
            question: "A student adds cyanide (a respiratory inhibitor) to a suspension of cells and measures uptake of two substances: oxygen (O₂) and potassium ions (K⁺). K⁺ concentration outside is lower than inside the cells. Which prediction is correct?",
            options: [
              "Both O₂ and K⁺ uptake stop, because both require ATP",
              "O₂ uptake continues; K⁺ uptake stops, because K⁺ uptake is active transport requiring ATP",
              "K⁺ uptake continues; O₂ uptake stops, because O₂ is too large to diffuse",
              "Neither stops, because both processes are passive",
            ],
            answerIndex: 1,
            explanation: "O₂ enters by diffusion (passive, no ATP) — cyanide does not affect it. K⁺ moves from low to high concentration (against the gradient) by active transport, which requires ATP. Blocking respiration removes ATP, so K⁺ uptake stops. O₂ is a small molecule that diffuses rapidly; it is not too large (C).",
            guideRef: "Active Transport",
            difficulty: "challenge",
            hints: [
              "Identify the transport mechanism for each substance.",
              "O₂ moves with its gradient into the cell — passive diffusion.",
              "K⁺ moves against its gradient (low outside → high inside) — active transport.",
              "Active transport needs ATP; diffusion does not.",
            ],
            strategy: "For each substance: (1) state direction relative to gradient, (2) name the mechanism, (3) predict effect of removing ATP.",
          },
        ],
      },
      {
        id: "bio-transport-cell-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "10 multiple-choice questions with emphasis on application, water potential values, and experimental interpretation.",
        questions: [
          {
            id: "bio-transport-cell-bm2-01",
            question: "Which row correctly pairs a transport process with its energy requirement and direction?",
            options: [
              "Diffusion — requires ATP — against concentration gradient",
              "Osmosis — requires ATP — from low to high water potential",
              "Active transport — requires ATP — against concentration gradient",
              "Active transport — no ATP — against concentration gradient",
            ],
            answerIndex: 2,
            explanation: "Active transport is the only process that moves substances against the concentration gradient and requires ATP. Diffusion and osmosis are both passive (no ATP) and move with their respective gradients.",
            guideRef: "Active Transport",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bm2-02",
            question: "A plant cell is described as 'flaccid'. What does this indicate about the cell?",
            options: [
              "The cell membrane has pulled away from the cell wall",
              "The vacuole is fully inflated and presses against the cell wall",
              "Turgor pressure is low but the membrane has not yet pulled away from the wall",
              "The cell has burst due to excess water intake",
            ],
            answerIndex: 2,
            explanation: "Flaccid describes a plant cell with low turgor pressure — the vacuole has lost water and is no longer pressing the membrane firmly against the wall, but the membrane has not yet separated from the wall. Plasmolysis (A) is when the membrane pulls away; turgid (B) is the opposite state; bursting (D) occurs in animal cells.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bm2-03",
            question: "A potato cylinder initially has mass 5.0 g. After 30 minutes in 0.4 mol/dm³ sucrose solution, its mass is 5.0 g. What can be concluded?",
            options: [
              "The sucrose solution is hypotonic to the potato cells",
              "The sucrose solution is hypertonic to the potato cells",
              "The water potential of the sucrose solution equals the water potential of the potato cells",
              "Active transport has moved water into the cells to balance any losses",
            ],
            answerIndex: 2,
            explanation: "No change in mass means no net water movement by osmosis. This occurs when the water potentials on both sides are equal — isotonic conditions. Hypotonic (A) would cause mass gain; hypertonic (B) would cause mass loss; active transport (D) does not move water.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bm2-04",
            question: "Increasing which factor would DECREASE the SA:V ratio of a cell?",
            options: [
              "Increasing the temperature of the surrounding solution",
              "Increasing the size (volume) of the cell",
              "Increasing the concentration gradient across the membrane",
              "Increasing the number of mitochondria in the cell",
            ],
            answerIndex: 1,
            explanation: "SA:V = 6/l for a cube; as size (l) increases, SA:V decreases. Volume grows as l³ while surface area grows as l², so the ratio falls. Temperature, concentration gradient, and mitochondria count do not affect SA:V geometry.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "core",
            hints: [
              "SA:V = 6/l; what happens as l increases?",
              "SA scales as l², V as l³ — which grows faster?",
            ],
          },
          {
            id: "bio-transport-cell-bm2-05",
            question: "Visking tubing filled with concentrated glucose solution is placed in distilled water. After 20 minutes, the liquid level in the attached capillary tube rises. Which explanation is correct?",
            options: [
              "Glucose diffuses out of the tubing into the water, reducing the volume inside",
              "Water moves by osmosis from the distilled water (higher WP) into the glucose solution (lower WP) through the visking tubing",
              "Active transport pumps water from outside into the tubing using ATP",
              "Glucose molecules pass through the visking tubing, drawing water with them",
            ],
            answerIndex: 1,
            explanation: "Visking tubing is partially permeable — it allows water through but not large glucose molecules. Distilled water has WP = 0 kPa (higher); glucose solution has lower WP (negative). Water moves by osmosis into the tubing, increasing volume and raising the level in the capillary tube. Glucose cannot diffuse out (A, D); no ATP is involved (C).",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "core",
            hints: [
              "Distilled water: WP = 0 kPa. Glucose solution: WP < 0 kPa. Which is higher?",
              "Water moves from higher WP to lower WP through the partially permeable visking tubing.",
              "More water inside → volume increases → liquid rises in capillary tube.",
            ],
          },
          {
            id: "bio-transport-cell-bm2-06",
            question: "Why do cells that carry out high rates of active transport typically contain many mitochondria?",
            options: [
              "Mitochondria produce carrier proteins used in active transport",
              "Mitochondria increase the surface area available for transport",
              "Mitochondria produce ATP by respiration, which provides the energy for active transport",
              "Mitochondria store glucose to fuel osmosis",
            ],
            answerIndex: 2,
            explanation: "Active transport requires ATP. Mitochondria are the site of aerobic respiration and produce large amounts of ATP. More mitochondria = more ATP = higher sustainable rate of active transport. Carrier proteins are made by ribosomes, not mitochondria (A); mitochondria do not increase membrane surface area (B); osmosis is passive and needs no fuel (D).",
            guideRef: "Active Transport",
            difficulty: "core",
            hints: [
              "Active transport needs ATP. Where is ATP produced?",
              "Mitochondria are the site of aerobic respiration.",
            ],
          },
          {
            id: "bio-transport-cell-bm2-07",
            question: "A cube has side 1 cm and a second cube has side 3 cm. How does the SA:V ratio of the 3 cm cube compare with the 1 cm cube?",
            options: [
              "Three times larger",
              "Nine times larger",
              "One-third as large",
              "One-ninth as large",
            ],
            answerIndex: 2,
            explanation: "SA:V = 6/l. For l = 1: SA:V = 6. For l = 3: SA:V = 2. Ratio = 2/6 = 1/3. The 3 cm cube has one-third the SA:V of the 1 cm cube. As size triples, SA:V decreases by a factor of 3.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "core",
            hints: [
              "SA:V = 6/l for a cube.",
              "Calculate each ratio, then divide.",
            ],
            strategy: "SA:V = 6/l; dividing gives 6/3 ÷ 6/1 = (1/3).",
          },
          {
            id: "bio-transport-cell-bm2-08",
            question: "Cells lining the small intestine absorb glucose even when the glucose concentration in the lumen is lower than inside the cell. Which piece of evidence most strongly supports that this is active transport rather than diffusion?",
            options: [
              "Glucose absorption stops when the cells are cooled to 0 °C",
              "Glucose absorption stops when a metabolic poison (respiratory inhibitor) is added, but resumes when it is removed",
              "Glucose absorption is faster when the lumen concentration is higher",
              "Glucose molecules are larger than water molecules",
            ],
            answerIndex: 1,
            explanation: "Stopping specifically with a respiratory inhibitor (which blocks ATP production) proves ATP is required — only active transport needs ATP. Cooling (A) slows all processes including diffusion, so it is not specific evidence; faster absorption at higher concentrations (C) is consistent with both diffusion and active transport; molecule size (D) does not identify the mechanism.",
            guideRef: "Active Transport",
            difficulty: "challenge",
            hints: [
              "What do respiratory inhibitors do? They block ATP production.",
              "Which transport mechanism specifically requires ATP?",
              "Cooling affects all molecular movement — it is not specific to active transport.",
              "Look for evidence that is unique to active transport.",
            ],
            strategy: "Identify which answer uniquely implicates ATP dependence — that is the hallmark of active transport.",
          },
          {
            id: "bio-transport-cell-bm2-09",
            question: "Two solutions are separated by a partially permeable membrane. Solution X has water potential −100 kPa and solution Y has water potential −350 kPa. After equilibrium is reached (assuming the membrane is rigid and volume cannot change), which statement is true?",
            options: [
              "Water potential of X falls and Y rises until they are equal",
              "Net water movement continues indefinitely from X to Y",
              "Equilibrium is impossible because both solutions have negative water potential",
              "Water moves from Y to X until the concentrations are equal",
            ],
            answerIndex: 0,
            explanation: "Water moves from X (higher WP, −100 kPa) to Y (lower WP, −350 kPa). As water enters Y it becomes more dilute (WP rises toward 0); X loses water so becomes more concentrated (WP falls). This continues until both sides have equal water potential — equilibrium. Net movement then stops. Both solutions having negative WP is normal and does not prevent equilibrium (C).",
            guideRef: "Osmosis",
            difficulty: "challenge",
            hints: [
              "Water moves from −100 kPa (higher) to −350 kPa (lower WP).",
              "As water enters Y, Y's concentration decreases — what happens to its WP?",
              "As water leaves X, X becomes more concentrated — what happens to its WP?",
              "Equilibrium = equal water potentials on both sides.",
            ],
            strategy: "Track how WP changes on each side as water moves, until both sides equalise.",
          },
          {
            id: "bio-transport-cell-bm2-10",
            question: "A scientist compares two organisms: a single-celled amoeba (diameter 0.1 mm) and a whale. Which statement about their gas exchange strategies is correct?",
            options: [
              "Both rely entirely on diffusion across their outer surface for gas exchange",
              "The amoeba relies on diffusion because its high SA:V ratio makes it efficient; the whale needs a specialised respiratory system because its low SA:V makes diffusion insufficient",
              "The whale relies on diffusion because it has a larger surface area than the amoeba",
              "SA:V ratio does not affect gas exchange strategy in multicellular organisms",
            ],
            answerIndex: 1,
            explanation: "Small organisms like amoeba have very high SA:V, so diffusion across the outer surface is adequate. Large organisms like whales have very low SA:V — their volume (metabolic demand) is huge relative to their surface, so diffusion alone cannot supply all cells. They require specialised exchange organs (lungs) and circulatory systems. Whales have a larger absolute surface area (C) but much lower SA:V.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "challenge",
            hints: [
              "Compare the SA:V ratios — which organism has the higher ratio?",
              "High SA:V means diffusion can supply the whole organism; low SA:V means it cannot.",
              "The whale's large absolute surface area is irrelevant — it is the ratio that matters.",
            ],
            strategy: "Focus on SA:V ratio, not absolute surface area.",
          },
        ],
      },
      {
        id: "bio-transport-cell-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "10 multiple-choice questions covering experimental design, calculations, and synoptic applications.",
        questions: [
          {
            id: "bio-transport-cell-bm3-01",
            question: "Which of the following is an example of diffusion in the human body?",
            options: [
              "Glucose absorption in the small intestine when lumen concentration is below blood concentration",
              "Carbon dioxide moving from respiring cells (high CO₂) into the blood (lower CO₂)",
              "Mineral ion uptake by root hair cells from dilute soil water",
              "Glucose reabsorption in the kidney tubule against a concentration gradient",
            ],
            answerIndex: 1,
            explanation: "CO₂ produced by respiration creates a higher concentration inside cells than in the blood. CO₂ diffuses passively down this gradient. Options A, C, and D all describe movement against the concentration gradient and therefore involve active transport.",
            guideRef: "Diffusion",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bm3-02",
            question: "Pure water is defined as having a water potential of:",
            options: [
              "+100 kPa",
              "0 kPa",
              "−100 kPa",
              "It depends on temperature",
            ],
            answerIndex: 1,
            explanation: "By convention, pure water at standard conditions has the highest possible water potential, defined as 0 kPa. Adding solutes lowers (makes more negative) water potential. Temperature affects the rate of osmosis but not the defined standard value.",
            guideRef: "Osmosis",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bm3-03",
            question: "A potato cylinder gains 6% in mass when placed in a sucrose solution. Which conclusion is correct?",
            options: [
              "The sucrose solution has a lower water potential than the potato cells",
              "The sucrose solution has a higher water potential than the potato cells, so water entered by osmosis",
              "Sucrose entered the potato cells by active transport, increasing mass",
              "The potato cells lost water by diffusion, increasing the dry mass",
            ],
            answerIndex: 1,
            explanation: "Mass gain means water entered the potato. Water enters by osmosis when the surrounding solution has higher water potential (more dilute) than the cell contents. Option A reverses the relationship; sucrose molecules (C) cannot be absorbed into cells by active transport in this way; diffusion of water (D) is called osmosis and loss of water decreases, not increases, mass.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bm3-04",
            question: "An experiment tests the effect of temperature on diffusion rate. A student places beetroot discs in water at 10, 20, 30, 40, and 50 °C and measures the absorbance of the water (indicating pigment release) after 30 minutes. Which variable is the independent variable?",
            options: [
              "The absorbance of the water",
              "The time (30 minutes)",
              "The temperature",
              "The size of the beetroot discs",
            ],
            answerIndex: 2,
            explanation: "The independent variable is what the experimenter deliberately changes — here, the temperature. Absorbance is the dependent variable (what is measured); time is a controlled variable; disc size should be controlled (kept constant). The word 'effect of temperature' identifies it as the variable being manipulated.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "The independent variable is the one deliberately changed by the experimenter.",
              "The dependent variable is what is measured as a result.",
            ],
          },
          {
            id: "bio-transport-cell-bm3-05",
            question: "A student measures the mass of five potato cylinders (each initially 3.0 g) after 30 minutes in different sucrose concentrations. The results are: 0.0 M → 3.4 g; 0.2 M → 3.2 g; 0.4 M → 3.0 g; 0.6 M → 2.8 g; 0.8 M → 2.6 g. What is the water potential of the potato cells?",
            options: [
              "Equal to 0.0 mol/dm³ sucrose solution",
              "Equal to 0.2 mol/dm³ sucrose solution",
              "Equal to 0.4 mol/dm³ sucrose solution",
              "Equal to 0.6 mol/dm³ sucrose solution",
            ],
            answerIndex: 2,
            explanation: "At 0.4 M sucrose there is no change in mass (3.0 g → 3.0 g), indicating equal water potentials on both sides — isotonic conditions. This concentration matches the water potential of the potato tissue.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "core",
            hints: [
              "The isotonic point is where mass does not change.",
              "At this concentration, water potentials are equal on both sides.",
            ],
            strategy: "Find the concentration where % change = 0 (no mass change).",
          },
          {
            id: "bio-transport-cell-bm3-06",
            question: "Which statement about the cell membrane and osmosis is correct?",
            options: [
              "The cell membrane is fully permeable, allowing both water and sucrose to pass freely",
              "The cell membrane is impermeable to all molecules",
              "The cell membrane is partially permeable — it allows water molecules through but not large solute molecules",
              "The cell membrane only allows solute molecules through, not water",
            ],
            answerIndex: 2,
            explanation: "The cell membrane is partially permeable: it allows small molecules like water through its pores (and via channel proteins) but prevents large solute molecules (e.g. sucrose, proteins) from crossing freely. This differential permeability is essential for osmosis to occur.",
            guideRef: "Osmosis",
            difficulty: "core",
            hints: [
              "Osmosis requires a partially permeable membrane.",
              "What can and cannot pass through the membrane?",
            ],
          },
          {
            id: "bio-transport-cell-bm3-07",
            question: "An animal cell is placed in a solution with the same water potential as the cell contents. Which term describes this solution?",
            options: ["Hypertonic", "Hypotonic", "Isotonic", "Concentrated"],
            answerIndex: 2,
            explanation: "Isotonic means equal water potential (and thus equal osmotic concentration) on both sides. No net movement of water occurs. Hypertonic (A) is more concentrated than the cell; hypotonic (B) is less concentrated; 'concentrated' (D) is vague and not precise enough.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "core",
            hints: [
              "Iso- means equal.",
              "Isotonic = same water potential = no net osmosis.",
            ],
          },
          {
            id: "bio-transport-cell-bm3-08",
            question: "A spherical cell has radius 2 µm. Using SA:V = 3/r for a sphere, what is the SA:V ratio?",
            options: ["6 µm⁻¹", "3 µm⁻¹", "1.5 µm⁻¹", "0.67 µm⁻¹"],
            answerIndex: 2,
            explanation: "SA:V = 3/r = 3/2 = 1.5 µm⁻¹. This confirms that smaller cells have larger SA:V ratios, enabling more efficient diffusion relative to their volume.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "core",
            hints: [
              "SA:V for a sphere = 3/r",
              "Substitute r = 2.",
            ],
            strategy: "Use the simplified formula SA:V = 3/r directly.",
          },
          {
            id: "bio-transport-cell-bm3-09",
            question: "A student claims that placing a plant cell in distilled water will make it burst. Evaluate this claim.",
            options: [
              "Correct — plant cells burst just like animal cells in distilled water",
              "Incorrect — plant cells become turgid, but the cell wall prevents bursting by exerting inward pressure",
              "Incorrect — distilled water has lower water potential than the cell, so water leaves the cell",
              "Correct — plasmolysis causes the membrane to burst",
            ],
            answerIndex: 1,
            explanation: "Distilled water has higher WP (0 kPa) than the cell contents, so water enters by osmosis — the cell becomes turgid. However, the rigid cell wall resists further expansion, exerting an inward pressure (wall pressure) that prevents bursting. Animal cells lack a wall and can burst (haemolysis); plant cells do not burst under normal conditions. Plasmolysis (D) is the opposite — it occurs when the cell loses water.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "challenge",
            hints: [
              "Distilled water has WP = 0 kPa — higher than the cell contents.",
              "Water enters by osmosis — the cell swells.",
              "What prevents the plant cell from bursting? The cell wall.",
              "Turgor pressure builds until the wall pressure balances the osmotic gradient.",
            ],
            strategy: "Evaluate each part: direction of water movement (in) → cell wall effect (prevents burst) → conclusion (turgid, not burst).",
          },
          {
            id: "bio-transport-cell-bm3-10",
            question: "Which combination of evidence would most conclusively prove that a substance is absorbed by active transport rather than diffusion?",
            options: [
              "Absorption occurs at the same rate regardless of concentration gradient, and stops when a respiratory inhibitor is added",
              "Absorption rate increases with temperature, and occurs down the concentration gradient",
              "Absorption occurs against the concentration gradient, stops when ATP supply is blocked, and involves specific carrier proteins",
              "Absorption is blocked by a partially permeable membrane",
            ],
            answerIndex: 2,
            explanation: "Three criteria conclusively identify active transport: (1) movement against the concentration gradient — diffusion cannot do this; (2) dependence on ATP — confirmed by respiratory inhibitor stopping it; (3) involvement of specific carrier proteins — distinguishing it from simple diffusion. Option A is partially correct but incomplete; B describes diffusion; D is not relevant to the mechanism.",
            guideRef: "Active Transport",
            difficulty: "challenge",
            hints: [
              "Active transport: against gradient, needs ATP, uses carrier proteins.",
              "Diffusion: with gradient, no ATP, no carrier required.",
              "Look for all three criteria together for the strongest evidence.",
            ],
            strategy: "Active transport has three hallmarks — look for the answer that lists all three.",
          },
        ],
      },
      {
        id: "bio-transport-cell-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "10 multiple-choice questions: challenge-level application, synoptic links, and multi-step reasoning.",
        questions: [
          {
            id: "bio-transport-cell-bm4-01",
            question: "Urea is produced in liver cells at a concentration of 0.5 mmol/dm³ and diffuses into blood plasma at a concentration of 0.3 mmol/dm³. Which factor would most increase the rate of urea removal from liver cells?",
            options: [
              "Increasing blood flow past the liver to maintain a steep concentration gradient",
              "Increasing the urea concentration in the blood",
              "Adding a respiratory inhibitor to the liver cells",
              "Decreasing the temperature of the blood",
            ],
            answerIndex: 0,
            explanation: "Faster blood flow constantly carries urea away from the liver, maintaining a steep concentration gradient (high in liver, low in blood). This increases diffusion rate. Increasing blood urea concentration (B) would reduce the gradient. A respiratory inhibitor (C) blocks ATP production but diffusion is passive — however reducing cellular function would produce less urea. Decreasing temperature (D) slows diffusion.",
            guideRef: "Diffusion",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bm4-02",
            question: "Isotonic saline used in intravenous drips for humans contains approximately 0.9% NaCl. Why is this concentration used rather than distilled water?",
            options: [
              "0.9% NaCl has a lower water potential than blood cells, encouraging water to enter cells",
              "0.9% NaCl has the same water potential as blood plasma, preventing net osmosis into or out of blood cells",
              "0.9% NaCl is used because NaCl is an essential nutrient needed by all cells",
              "Distilled water would cause the blood to become too viscous",
            ],
            answerIndex: 1,
            explanation: "Isotonic saline (0.9% NaCl) matches the water potential of blood plasma and red blood cells. There is no net water movement by osmosis, so cells maintain their normal shape and function. Distilled water would have higher WP, causing water to enter cells — haemolysis. A lower WP solution (A) would cause crenation.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bm4-03",
            question: "The graph of % change in mass (y-axis) vs. sucrose concentration (x-axis) for potato chips produces a straight line with a negative gradient. What does the x-intercept represent?",
            options: [
              "The maximum rate of osmosis",
              "The sucrose concentration at which no net water movement occurs — equal to the water potential of the potato",
              "The sucrose concentration that causes maximum plasmolysis",
              "The point at which active transport takes over from osmosis",
            ],
            answerIndex: 1,
            explanation: "The x-intercept is where % change = 0, meaning no change in mass and therefore no net water movement by osmosis. At this concentration, the water potential of the sucrose solution equals the water potential of the potato cells (isotonic point). It does not represent maximum osmosis (A), maximum plasmolysis (C), or a change in mechanism (D).",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "core",
            hints: [
              "x-intercept: % change = 0 → no mass change → no net osmosis.",
              "No net osmosis occurs when water potentials on both sides are equal.",
            ],
          },
          {
            id: "bio-transport-cell-bm4-04",
            question: "A student cuts cylindrical cores from a potato and places them in solutions of increasing sucrose concentration. She notices that at concentrations above 0.5 mol/dm³ the cylinders feel very soft and limp. Which term best describes the state of the cells at 0.8 mol/dm³ sucrose?",
            options: ["Turgid", "Isotonic", "Plasmolysed", "Haemolysed"],
            answerIndex: 2,
            explanation: "At high sucrose concentration (lower water potential), water leaves the plant cells by osmosis. The vacuole shrinks, turgor pressure falls, and eventually the cell membrane pulls away from the cell wall — plasmolysis. Turgid (A) is opposite (fully inflated); isotonic (B) is no net movement; haemolysis (D) occurs in animal cells.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "core",
            hints: [
              "Concentrated sucrose → lower water potential outside than inside the cell.",
              "Water leaves the cell by osmosis → vacuole shrinks.",
              "Extreme water loss: membrane pulls from wall = plasmolysis.",
            ],
          },
          {
            id: "bio-transport-cell-bm4-05",
            question: "The microvilli on the surface of small intestine epithelial cells increase the absorption rate of nutrients. Which aspect of diffusion/active transport do they directly improve?",
            options: [
              "They reduce the diffusion distance across the membrane",
              "They increase the surface area, allowing more carrier proteins and diffusion sites",
              "They increase the concentration gradient by producing more carrier proteins inside the cell",
              "They provide additional mitochondria for ATP production",
            ],
            answerIndex: 1,
            explanation: "Microvilli are finger-like projections that greatly increase the surface area of the membrane. A larger surface area provides more space for carrier proteins (active transport) and more simultaneous diffusion events, increasing overall absorption rate. They do not reduce membrane thickness (A); carrier proteins are made by ribosomes, not the microvilli themselves (C); mitochondria are in the cytoplasm, not in microvilli (D).",
            guideRef: "Active Transport",
            difficulty: "core",
            hints: [
              "Surface area is a key factor in both diffusion rate and how many carrier proteins can be fitted.",
              "Microvilli are folds that increase area without increasing overall cell size.",
            ],
          },
          {
            id: "bio-transport-cell-bm4-06",
            question: "A cell has SA:V ratio of 3 cm⁻¹. If the cell's linear dimensions double, what is the new SA:V ratio?",
            options: ["6 cm⁻¹", "3 cm⁻¹", "1.5 cm⁻¹", "0.75 cm⁻¹"],
            answerIndex: 2,
            explanation: "SA:V = 6/l for a cube. Doubling l halves SA:V. Original: SA:V = 3 cm⁻¹ (so l = 2 cm). After doubling, l = 4 cm: SA:V = 6/4 = 1.5 cm⁻¹. Alternatively: SA scales as l² (×4) and V scales as l³ (×8), so SA:V changes by factor 4/8 = 1/2: 3 × 0.5 = 1.5.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "challenge",
            hints: [
              "SA ∝ l², V ∝ l³; SA:V ∝ 1/l.",
              "Double l → SA:V is halved.",
              "Half of 3 = 1.5.",
            ],
            strategy: "When linear dimensions double, SA:V is always halved.",
          },
          {
            id: "bio-transport-cell-bm4-07",
            question: "A student heats a beetroot slice in water at 80 °C and sees a deep red colour develop, but sees no colour at 20 °C. She concludes that 'diffusion is faster at high temperature'. A second student says the result is due to membrane damage, not diffusion rate. Who is more likely to be correct?",
            options: [
              "The first student, because temperature always increases diffusion rate",
              "The second student, because at 80 °C the membrane proteins are denatured, releasing pigment that then diffuses — the primary effect is membrane damage, not diffusion rate",
              "Neither — water temperature has no effect on pigment movement",
              "Both are equally correct, because membrane damage and diffusion rate change at the same time",
            ],
            answerIndex: 1,
            explanation: "At 80 °C, membrane proteins (including those maintaining membrane integrity) are denatured, making the membrane leaky and releasing pigment. The colour difference is mainly due to membrane damage, not merely a faster rate of diffusion through an intact membrane. At 20 °C the membrane is intact and pigment cannot escape even though diffusion is still occurring. The second student's interpretation is more mechanistically precise.",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "At 80 °C, proteins denature — this damages the membrane.",
              "A leaky membrane lets pigment escape that would otherwise be trapped.",
              "The question is whether the colour difference is due to diffusion rate or membrane permeability.",
              "At 20 °C, diffusion is still happening — but pigment can't get through the intact membrane.",
            ],
            strategy: "Distinguish between diffusion rate (always occurring) and membrane permeability (changes with damage).",
          },
          {
            id: "bio-transport-cell-bm4-08",
            question: "In which situation would a plant cell have the highest turgor pressure?",
            options: [
              "In a solution with water potential equal to the cell's water potential",
              "In a concentrated sucrose solution with water potential lower than the cell",
              "In distilled water (water potential = 0 kPa) when the cell contents have water potential of −500 kPa",
              "In a solution that has been treated with a respiratory inhibitor",
            ],
            answerIndex: 2,
            explanation: "Turgor pressure is highest when the largest amount of water has entered the cell. The steepest osmotic gradient (highest WP outside, lowest inside) drives the most water in. Distilled water (WP = 0) vs. cell (WP = −500 kPa) gives the steepest gradient. In isotonic conditions (A) no water enters; in hypertonic solution (B) water leaves; a respiratory inhibitor (D) does not affect osmosis.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "challenge",
            hints: [
              "Higher turgor = more water has entered by osmosis.",
              "Water enters when outside WP > inside WP — the bigger the difference, the more enters.",
              "Compare the WP gradients in each option.",
            ],
            strategy: "Maximise water entry: largest positive difference (outside WP − inside WP).",
          },
          {
            id: "bio-transport-cell-bm4-09",
            question: "A plant wilts during a hot dry day but recovers after watering. Which sequence of events correctly explains the recovery?",
            options: [
              "Watering → active transport pumps water into root cells → turgor restored",
              "Watering → higher water potential in soil → water enters root cells by osmosis → turgor pressure restored → wilting reversed",
              "Watering → water enters leaf cells by diffusion → active transport into stem cells → wilting reversed",
              "Watering → lower water potential in soil → water leaves root cells by osmosis → wilting worsens",
            ],
            answerIndex: 1,
            explanation: "Watering increases soil water potential. The root cell contents have lower water potential (due to solutes), so water enters root cells by osmosis. The vacuoles refill, turgor pressure is restored throughout the plant, and wilting is reversed. Active transport (A, C) does not move water; diffusion (C) is not the mechanism for water entry into roots; higher soil WP causes water to enter, not leave (D).",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "challenge",
            hints: [
              "Water enters by osmosis when soil WP is higher than cell WP.",
              "More water in vacuoles = higher turgor pressure = plant stiffens.",
              "Active transport moves ions, not water.",
            ],
          },
          {
            id: "bio-transport-cell-bm4-10",
            question: "An experiment measures the rate of diffusion of glucose across a model membrane at various temperatures. The results show rate doubles approximately every 10 °C from 10 °C to 40 °C, then rate decreases above 50 °C. What is the most likely explanation for the decrease above 50 °C?",
            options: [
              "Glucose molecules become too large to diffuse at high temperatures",
              "The concentration gradient is eliminated at high temperatures",
              "Membrane proteins (including channel proteins) are denatured at high temperatures, reducing permeability",
              "Diffusion always decreases above 40 °C in biological systems",
            ],
            answerIndex: 2,
            explanation: "Above ~40–50 °C, membrane proteins begin to denature (unfold), disrupting the membrane structure and blocking channel proteins. This reduces membrane permeability, decreasing diffusion rate even though particle kinetic energy continues to increase. Glucose molecules do not change size (A); the gradient is maintained throughout (B); diffusion is not inherently limited to 40 °C — it is the membrane proteins that are the limiting factor (D).",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "Why might diffusion slow at very high temperatures despite particles having more kinetic energy?",
              "Proteins denature above ~40–50 °C.",
              "Channel proteins in the membrane are proteins — what happens when they denature?",
            ],
            strategy: "Look for biological limiting factors beyond particle kinetics — membrane protein integrity.",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-transport-cell-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "10 structured questions covering diffusion, osmosis, osmosis in plant and animal cells, and active transport.",
        questions: [
          {
            id: "bio-transport-cell-bq1-01",
            question: "Define diffusion and state three factors that increase its rate. (4 marks)",
            marks: 4,
            modelAnswer:
              "Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration, as a result of their random motion. It is a passive process requiring no energy.\n\nThree factors that increase the rate of diffusion:\n1. Steeper concentration gradient — a greater difference in concentration between two regions drives faster net movement.\n2. Higher temperature — increases the kinetic energy of particles, so they move faster and diffuse more rapidly.\n3. Larger surface area — provides more area across which diffusion can occur simultaneously.\n(Also accepted: shorter diffusion distance / thinner membrane.)",
            markScheme: [
              "Diffusion: net movement of particles from higher to lower concentration (1 mark)",
              "Due to random motion / passive / no energy required (1 mark)",
              "Any three from: steeper concentration gradient; higher temperature; larger surface area; shorter diffusion distance — one mark each (3 marks)",
            ],
            commonError: "Students lose marks by saying 'movement' without the qualifier 'net'. Also, confusing diffusion with osmosis by mentioning membranes.",
            guideRef: "Diffusion",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bq1-02",
            question: "Explain what is meant by the term 'water potential' and state what happens to the water potential of a solution when solutes are dissolved in it. (3 marks)",
            marks: 3,
            modelAnswer:
              "Water potential (symbol Ψ, units kPa) is a measure of the tendency of water molecules to move from one place to another. Pure water has the highest water potential, defined as 0 kPa. It is a measure of the free energy of water molecules available to do work (i.e. to move across a membrane).\n\nWhen solutes are dissolved in water, the water potential decreases (becomes more negative). The solute particles interact with water molecules, reducing the proportion of freely moving water molecules and hence reducing the tendency of water to move. The greater the solute concentration, the more negative the water potential.",
            markScheme: [
              "Water potential: measure of tendency / ability of water to move (1 mark)",
              "Pure water = 0 kPa / highest water potential (1 mark)",
              "Dissolving solutes lowers / makes more negative the water potential (1 mark)",
            ],
            commonError: "Students often state 'water potential measures concentration' — it measures the tendency of water to move, not directly the solute concentration.",
            guideRef: "Osmosis",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bq1-03",
            question: "A student places a piece of fresh carrot into a concentrated salt solution and leaves it for one hour. Describe and explain what happens to the carrot tissue. Use the terms 'osmosis', 'water potential', and 'plasmolysis'. (4 marks)",
            marks: 4,
            modelAnswer:
              "The concentrated salt solution has a low (highly negative) water potential because the salt ions dissolve and lower the water potential below that of the carrot cells.\n\nThe carrot cells contain dissolved substances (sugars, salts) so their water potential is also negative, but higher (less negative) than the concentrated salt solution.\n\nWater moves by osmosis from the carrot cells (higher water potential) through the partially permeable cell membrane into the salt solution (lower water potential). The cells lose water; the vacuoles shrink; turgor pressure falls. If enough water is lost, the cell membrane pulls away from the cell wall — plasmolysis occurs. The carrot tissue becomes soft and limp.",
            markScheme: [
              "Salt solution has lower water potential than carrot cells (1 mark)",
              "Water moves by osmosis from cells (higher WP) to solution (lower WP) (1 mark)",
              "Cells lose water / vacuoles shrink / turgor pressure falls (1 mark)",
              "Plasmolysis — membrane pulls away from cell wall (1 mark)",
            ],
            commonError: "Writing that 'salt draws water out' — this is not a mechanistic explanation. Always use water potential gradient.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "core",
            hints: [
              "Compare water potentials: which is higher, the carrot cell or the salt solution?",
              "Water moves from higher WP to lower WP by osmosis.",
              "State what happens to the vacuole and turgor pressure.",
              "Use the term 'plasmolysis' when the membrane pulls from the wall.",
            ],
          },
          {
            id: "bio-transport-cell-bq1-04",
            question: "Compare what happens to a plant cell and an animal cell when each is placed in a very dilute (hypotonic) solution. (4 marks)",
            marks: 4,
            modelAnswer:
              "Both plant and animal cells are in a solution with higher water potential than their cell contents, so water enters both types of cell by osmosis.\n\nIn the plant cell: water enters the vacuole, which swells and pushes the cell membrane against the rigid cell wall. The wall exerts an opposing inward pressure (wall pressure / turgor pressure). The cell becomes turgid. The cell wall prevents the cell from bursting.\n\nIn the animal cell: water enters and the cell swells. Because animal cells have no cell wall, there is nothing to resist the increasing volume. If enough water enters, the cell membrane ruptures and the cell bursts — a process called haemolysis in red blood cells.",
            markScheme: [
              "Water enters both cells by osmosis (higher WP outside) (1 mark)",
              "Plant cell: becomes turgid; cell wall prevents bursting / turgor pressure builds (1 mark)",
              "Animal cell: swells (1 mark)",
              "Animal cell may burst / undergo haemolysis — no cell wall to resist swelling (1 mark)",
            ],
            commonError: "Saying plant cells 'cannot be affected by osmosis' because of the cell wall — they are affected, they just do not burst.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "core",
            hints: [
              "Both cells: water enters by osmosis — why? Compare water potentials.",
              "Plant cell: what does the cell wall do when the cell swells?",
              "Animal cell: what is absent that would prevent bursting?",
            ],
            strategy: "Deal with plant and animal cells separately; contrast the role of the cell wall.",
          },
          {
            id: "bio-transport-cell-bq1-05",
            question: "Describe what active transport is and explain how it differs from diffusion. Include reference to energy requirement, direction of movement, and proteins involved. (5 marks)",
            marks: 5,
            modelAnswer:
              "Active transport is the movement of molecules or ions across a cell membrane against the concentration gradient (from a region of lower concentration to a region of higher concentration).\n\nDifferences from diffusion:\n1. Direction: diffusion moves substances down the concentration gradient (high → low); active transport moves substances against the gradient (low → high).\n2. Energy: diffusion is passive and requires no energy; active transport requires energy in the form of ATP, produced by cellular respiration.\n3. Proteins: simple diffusion requires no proteins (though facilitated diffusion uses channel proteins); active transport requires specific carrier proteins that use ATP to change shape and transport the substance across the membrane.",
            markScheme: [
              "Active transport: movement against concentration gradient / from low to high concentration (1 mark)",
              "Diffusion: down the gradient / from high to low; passive / no energy (1 mark)",
              "Active transport requires energy / ATP from respiration (1 mark)",
              "Active transport uses carrier proteins (1 mark)",
              "Diffusion requires no carrier proteins / no ATP (1 mark)",
            ],
            commonError: "Confusing carrier proteins (active transport) with channel proteins (facilitated diffusion). The key distinction: carrier proteins use ATP and change shape; channel proteins are passive pores.",
            guideRef: "Active Transport",
            difficulty: "core",
            hints: [
              "Write a comparison table: direction, energy, protein.",
              "Active transport: against gradient (low → high), needs ATP, carrier proteins.",
              "Diffusion: with gradient (high → low), no ATP, no obligatory protein.",
            ],
          },
          {
            id: "bio-transport-cell-bq1-06",
            question: "A student investigates osmosis using potato cylinders. She cuts 6 cylinders of equal mass (each 4.0 g) and places them in sucrose solutions of different concentrations for 30 minutes. The table shows her results:\n\nConcentration (mol/dm³): 0.0, 0.2, 0.4, 0.6, 0.8, 1.0\nFinal mass (g): 4.6, 4.3, 4.0, 3.7, 3.4, 3.1\n\n(a) Calculate the % change in mass for the cylinder in 0.0 mol/dm³ sucrose. Show your working. (2 marks)\n(b) Identify the water potential of the potato cells and explain your reasoning. (2 marks)\n(c) Predict the % change in mass for a cylinder placed in 1.2 mol/dm³ sucrose, assuming the linear trend continues. (1 mark)",
            marks: 5,
            modelAnswer:
              "(a) Change in mass = 4.6 − 4.0 = +0.6 g\n% change = (0.6 / 4.0) × 100 = +15%\n\n(b) The water potential of the potato cells equals the water potential of the 0.4 mol/dm³ sucrose solution, because at this concentration there is no change in mass (final mass = initial mass = 4.0 g). No net osmosis occurs when water potentials are equal (isotonic conditions).\n\n(c) The pattern shows a decrease of 0.3 g per 0.2 mol/dm³ increase in concentration (% change decreases by 7.5% per step). At 1.0 mol/dm³ final mass = 3.1 g, % change = (3.1−4.0)/4.0 × 100 = −22.5%. At 1.2 mol/dm³: predicted final mass ≈ 2.8 g, % change ≈ −30%.",
            markScheme: [
              "(a) Correct calculation of change: +0.6 g (1 mark); % change = +15% with working shown (1 mark)",
              "(b) Water potential equals 0.4 mol/dm³ sucrose (1 mark); because no change in mass at this concentration / isotonic point (1 mark)",
              "(c) Approximately −30% (accept −28% to −32%) based on the linear extrapolation (1 mark)",
            ],
            commonError: "Forgetting to include the sign (+ or −) in % change calculations, or giving only the change in mass rather than percentage change.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "core",
            hints: [
              "% change = (final − initial) / initial × 100; include the sign.",
              "Isotonic point = 0% change in mass.",
              "For the extrapolation, look at the pattern per 0.2 mol/dm³ step.",
            ],
            strategy: "Calculate % change systematically; identify the zero-crossing; extrapolate using the regular pattern.",
            solutions: [
              {
                label: "Part (a) working",
                steps: [
                  "Change = 4.6 − 4.0 = +0.6 g",
                  "% change = (+0.6 / 4.0) × 100 = +15%",
                ],
              },
              {
                label: "Part (c) extrapolation",
                steps: [
                  "Each step of +0.2 mol/dm³ changes % mass by −7.5%",
                  "At 1.0 M: % change = −22.5%",
                  "At 1.2 M: % change = −22.5 − 7.5 = −30%",
                ],
              },
            ],
          },
          {
            id: "bio-transport-cell-bq1-07",
            question: "Explain why root hair cells are well adapted for absorbing mineral ions from the soil. Your answer should include reference to at least two structural features of root hair cells and the transport process involved. (4 marks)",
            marks: 4,
            modelAnswer:
              "Root hair cells absorb mineral ions (e.g. nitrate, potassium) from the soil water by active transport, because the ion concentration in the soil is often lower than inside the cell (against the concentration gradient).\n\nAdaptations:\n1. The long, thin root hair projection greatly increases the surface area of the cell in contact with the soil water. This provides more membrane surface for carrier proteins to transport ions.\n2. Root hair cells contain many mitochondria, which produce large amounts of ATP by aerobic respiration. Active transport requires ATP to power the carrier proteins that pump ions against the gradient.\n\nThese two features together maximise the rate of ion uptake by active transport.",
            markScheme: [
              "Active transport is the mechanism for ion uptake — against the concentration gradient (1 mark)",
              "Root hair projection increases surface area — more carrier proteins / more membrane contact with soil (1 mark)",
              "Many mitochondria produce ATP — required for active transport (1 mark)",
              "Link between adaptation and function: more ATP/area → faster ion uptake rate (1 mark)",
            ],
            commonError: "Saying root hairs absorb ions 'by diffusion' — ions are absorbed against a gradient, which requires active transport.",
            guideRef: "Active Transport",
            difficulty: "core",
            hints: [
              "Is ion uptake with or against the concentration gradient?",
              "Which structural feature increases surface area?",
              "Which organelle produces ATP for active transport?",
              "Link each feature directly to the transport process.",
            ],
          },
          {
            id: "bio-transport-cell-bq1-08",
            question: "A student places visking tubing (partially permeable membrane) filled with 1.0 mol/dm³ sucrose solution into a beaker of distilled water, with a capillary tube attached. The liquid rises 12 cm in the capillary tube after 60 minutes.\n(a) Explain why the liquid rises. (3 marks)\n(b) Predict what would happen if the experiment were repeated with the visking tubing placed in 1.0 mol/dm³ sucrose solution instead of distilled water. Explain your answer. (2 marks)",
            marks: 5,
            modelAnswer:
              "(a) The distilled water has a water potential of 0 kPa — the highest possible. The 1.0 mol/dm³ sucrose solution inside the visking tubing has a lower water potential (negative value) because dissolved sucrose lowers it. Water moves by osmosis from the distilled water (higher WP) into the sucrose solution (lower WP) through the visking tubing, which acts as a partially permeable membrane — it allows water molecules through but not the large sucrose molecules. The volume of liquid inside the tubing increases, forcing liquid up the capillary tube.\n\n(b) No change in liquid level (or minimal change). The 1.0 mol/dm³ sucrose solution in the beaker has the same concentration as the solution inside the tubing, so both have equal water potential. There is no water potential gradient across the membrane, so there is no net movement of water by osmosis.",
            markScheme: [
              "(a) Distilled water has higher water potential (0 kPa) than sucrose solution (1 mark)",
              "Water moves by osmosis from distilled water into sucrose solution through visking tubing (partially permeable membrane) (1 mark)",
              "Increased volume inside tubing pushes liquid up capillary tube (1 mark)",
              "(b) No change (1 mark); equal concentrations/water potentials on both sides — no net osmosis (1 mark)",
            ],
            commonError: "Describing water as being 'attracted to sucrose' — use water potential language and explain the gradient.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "core",
            hints: [
              "Compare WP: distilled water (0 kPa) vs. sucrose solution (negative kPa).",
              "Higher WP → lower WP: water moves into the tubing.",
              "For part (b): same concentration on both sides = same WP = no gradient.",
            ],
          },
          {
            id: "bio-transport-cell-bq1-09",
            question: "A scientist treats a culture of plant cells with a respiratory inhibitor and then places them in a dilute solution of potassium nitrate (KNO₃). She measures the uptake of K⁺ and NO₃⁻ ions over 2 hours and finds almost no uptake, even though the external ion concentration is much lower than inside the cells.\n(a) Explain why ion uptake nearly stops when the respiratory inhibitor is added. (3 marks)\n(b) The scientist then removes the inhibitor and adds fresh solution. What would she expect to observe? Explain your answer. (2 marks)",
            marks: 5,
            modelAnswer:
              "(a) The ions (K⁺ and NO₃⁻) are being absorbed against the concentration gradient (from lower concentration in the solution to higher concentration inside the cells). This requires active transport. Active transport uses ATP, produced by aerobic respiration in the mitochondria. The respiratory inhibitor blocks aerobic respiration, so ATP production falls dramatically. Without ATP, the carrier proteins cannot function and ion uptake halts.\n\n(b) Removing the inhibitor would allow aerobic respiration to resume, restoring ATP production. The carrier proteins would become functional again, and active transport of K⁺ and NO₃⁻ would resume. The scientist would observe an increase in ion uptake — approaching the normal (uninhibited) rate.",
            markScheme: [
              "(a) Ions are absorbed against the concentration gradient — requires active transport (1 mark)",
              "Active transport requires ATP from respiration (1 mark)",
              "Respiratory inhibitor blocks respiration → no ATP → carrier proteins non-functional → no uptake (1 mark)",
              "(b) Respiration resumes → ATP produced → active transport resumes (1 mark)",
              "Ion uptake increases back towards normal rate (1 mark)",
            ],
            commonError: "Not identifying that ions are moving against the gradient — students sometimes say diffusion is the mechanism, which would not be stopped by a respiratory inhibitor.",
            guideRef: "Active Transport",
            difficulty: "challenge",
            hints: [
              "Are ions moving with or against the concentration gradient?",
              "Against gradient = active transport, which needs ATP.",
              "Respiratory inhibitor → no aerobic respiration → no ATP → active transport stops.",
              "Removing the inhibitor reverses all of the above steps.",
            ],
            strategy: "Trace the causal chain: transport mechanism → energy source → effect of inhibitor → reversal.",
          },
          {
            id: "bio-transport-cell-bq1-10",
            question: "Explain the importance of the surface area to volume ratio for single-celled organisms and for large multicellular organisms. In your answer, refer to a specific example of an exchange surface found in a large organism. (5 marks)",
            marks: 5,
            modelAnswer:
              "In single-celled organisms (e.g. amoeba, bacteria), the SA:V ratio is very high because the cells are tiny. This means that the surface area available for exchange (for diffusion of oxygen, carbon dioxide, nutrients, and waste) is large relative to the metabolic demands of the cell. All substances can be supplied and removed adequately by diffusion across the outer membrane alone. No specialised exchange organs are needed.\n\nIn large multicellular organisms (e.g. humans, mammals), the SA:V ratio is much lower — volume (and therefore metabolic demand) has grown faster than the available exchange surface. Diffusion across the outer body surface is completely inadequate to supply all the cells in the interior of the organism with oxygen and nutrients quickly enough, or to remove waste gases and products.\n\nLarge organisms have evolved specialised exchange surfaces to overcome this. For example, the human lung contains millions of alveoli — tiny air sacs with very thin walls (one cell thick), a rich blood supply, and a moist surface. This creates a huge total surface area, a short diffusion distance, and a maintained concentration gradient, enabling rapid gas exchange by diffusion.",
            markScheme: [
              "Small organisms: high SA:V ratio — diffusion alone is adequate for all exchange (1 mark)",
              "Large organisms: low SA:V — diffusion alone is insufficient to supply the interior (1 mark)",
              "Reason: volume grows faster than surface area as size increases (1 mark)",
              "Named example: alveoli (or villi, or gills) with correct description — e.g. large total SA, thin walls, maintained gradient (1 mark)",
              "Conclusion / link to need for specialised systems (1 mark)",
            ],
            commonError: "Stating that large organisms have 'more surface area' without mentioning the ratio — it is the SA:V ratio that matters, not the absolute surface area.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "challenge",
            hints: [
              "Define SA:V and explain how it changes with size.",
              "Small organisms: high SA:V → diffusion adequate.",
              "Large organisms: low SA:V → need specialised exchange surfaces.",
              "Name an example and describe its features that aid exchange.",
            ],
            strategy: "Structure: define SA:V → small organisms (high ratio, adequate diffusion) → large organisms (low ratio, problem) → solution (named exchange surface with features).",
          },
        ],
      },
      {
        id: "bio-transport-cell-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "10 structured questions with application, experimental design, and extended-response questions.",
        questions: [
          {
            id: "bio-transport-cell-bq2-01",
            question: "The diagram shows a cell membrane with three types of proteins labelled A, B, and C. A = phospholipid bilayer region; B = open channel protein; C = carrier protein with an ATP-binding site.\n(a) Which labelled component is involved specifically in active transport? (1 mark)\n(b) Explain how this component facilitates active transport. (3 marks)\n(c) What would happen to active transport if the cell's oxygen supply was cut off? Explain your reasoning. (2 marks)",
            marks: 6,
            modelAnswer:
              "(a) Component C (carrier protein with ATP-binding site).\n\n(b) The carrier protein binds specifically to the target molecule (e.g. glucose or an ion) on the low-concentration side of the membrane. ATP binds to the ATP-binding site and is hydrolysed, releasing energy. This energy causes the carrier protein to change shape (undergo a conformational change), moving the target molecule through the membrane and releasing it on the high-concentration side. The protein then resets, ready for another cycle.\n\n(c) Active transport would stop. Oxygen is required for aerobic respiration in the mitochondria, which produces ATP. Without oxygen, aerobic respiration cannot occur (or is severely reduced), so ATP production falls. Without ATP, the carrier proteins cannot function — they cannot change shape to transport molecules. Active transport ceases.",
            markScheme: [
              "(a) Component C (1 mark)",
              "(b) Carrier protein binds target molecule on low-concentration side (1 mark)",
              "ATP is hydrolysed → energy → carrier changes shape (conformational change) (1 mark)",
              "Molecule released on high-concentration side / against the gradient (1 mark)",
              "(c) No oxygen → no aerobic respiration → no ATP (1 mark)",
              "No ATP → carrier proteins non-functional → active transport stops (1 mark)",
            ],
            commonError: "Describing channel proteins (B) rather than carrier proteins (C) for active transport. Channel proteins are passive pores; carrier proteins are active pumps.",
            guideRef: "Active Transport",
            difficulty: "core",
            hints: [
              "Which protein has an ATP-binding site? That is the one for active transport.",
              "Trace the chain: ATP → conformational change → molecule transported.",
              "Cutting off O₂ affects aerobic respiration → ATP production → transport.",
            ],
          },
          {
            id: "bio-transport-cell-bq2-02",
            question: "A student designs an experiment to investigate the effect of sucrose concentration on water uptake by potato tissue. She plans to use five different sucrose concentrations and measure mass change.\n(a) Identify the independent and dependent variables. (2 marks)\n(b) State three variables that must be controlled. For each, explain why it must be kept constant. (3 marks)\n(c) Explain why the student should calculate percentage change in mass rather than change in mass. (1 mark)",
            marks: 6,
            modelAnswer:
              "(a) Independent variable: sucrose concentration (mol/dm³) — the variable deliberately changed by the student.\nDependent variable: percentage change in mass of the potato cylinder — the variable measured.\n\n(b) Three controlled variables:\n1. Temperature — affects the rate of osmosis (kinetic energy of water molecules); must be constant so differences in mass change are due only to sucrose concentration.\n2. Time in solution — longer time allows more water movement; must be the same for all cylinders for fair comparison.\n3. Size / mass of potato cylinders — larger cylinders have more surface area for exchange; initial mass must be equal (or % change used to account for any variation).\n(Also accepted: same variety of potato; same surface area; same pH of solution.)\n\n(c) Percentage change corrects for any small differences in initial mass of the cylinders, allowing valid comparison. If initial masses differ, absolute change in mass is not directly comparable.",
            markScheme: [
              "(a) Independent: sucrose concentration (1 mark); Dependent: % change in mass (1 mark)",
              "(b) Any three: temperature + reason; time + reason; cylinder size/mass + reason (3 marks, 1 per controlled variable with reason)",
              "(c) % change corrects for variation in initial mass / makes results comparable / fair comparison (1 mark)",
            ],
            commonError: "Giving the same variable twice as both independent and dependent, or omitting the reason for controlling each variable.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "core",
            hints: [
              "Independent variable = what you change; dependent variable = what you measure.",
              "For each controlled variable, ask: 'could this also affect the % mass change?'",
              "% change removes the effect of slightly different starting sizes.",
            ],
          },
          {
            id: "bio-transport-cell-bq2-03",
            question: "Explain why intravenous (IV) drips for patients must use isotonic saline (approximately 0.9% NaCl) rather than distilled water or a concentrated salt solution. (5 marks)",
            marks: 5,
            modelAnswer:
              "The water potential of human blood plasma and red blood cells is approximately equal to that of a 0.9% NaCl solution. Using isotonic saline ensures that there is no net movement of water by osmosis between the IV fluid and the blood cells.\n\nIf distilled water were used (water potential = 0 kPa, higher than blood cells): water would enter red blood cells by osmosis. The cells would swell and burst — haemolysis. This destroys red blood cells, reducing the blood's oxygen-carrying capacity, which could be life-threatening.\n\nIf a concentrated salt solution were used (water potential lower than blood cells): water would leave the red blood cells by osmosis. The cells would shrink and become wrinkled — crenation. Crenated cells cannot function normally and the blood's properties are disrupted.\n\nIsotonic saline is therefore essential to maintain the normal shape, volume, and function of blood cells during IV infusion.",
            markScheme: [
              "Isotonic saline has the same water potential as blood cells / 0.9% NaCl is isotonic to blood (1 mark)",
              "No net osmosis occurs with isotonic saline (1 mark)",
              "Distilled water: water enters cells by osmosis → swelling → haemolysis (1 mark)",
              "Concentrated salt: water leaves cells by osmosis → crenation / cell shrinks (1 mark)",
              "Consequence: haemolysis or crenation impairs red blood cell function (1 mark)",
            ],
            commonError: "Not explaining the consequence of using the wrong solution — just saying 'water moves' is not enough; must state haemolysis or crenation and its effect.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "core",
            hints: [
              "Isotonic = equal water potential = no net osmosis.",
              "Distilled water: WP = 0 (too high) → water enters cells → haemolysis.",
              "Concentrated: lower WP → water leaves cells → crenation.",
              "Both haemolysis and crenation damage blood cells.",
            ],
          },
          {
            id: "bio-transport-cell-bq2-04",
            question: "Calculate the SA:V ratio for:\n(a) A cube of side 5 µm. Show all working. (2 marks)\n(b) A sphere of radius 5 µm. Use SA = 4πr² and V = (4/3)πr³. Give your answer to 2 significant figures. (3 marks)\n(c) Based on your answers, which shape is more efficient for exchange by diffusion? Explain why. (2 marks)",
            marks: 7,
            modelAnswer:
              "(a) SA = 6 × 5² = 6 × 25 = 150 µm²\nV = 5³ = 125 µm³\nSA:V = 150/125 = 1.2 µm⁻¹\n\n(b) SA = 4π × 5² = 4π × 25 = 100π ≈ 314.2 µm²\nV = (4/3) × π × 5³ = (4/3)π × 125 = 500π/3 ≈ 523.6 µm³\nSA:V = 314.2 / 523.6 ≈ 0.60 µm⁻¹ (to 2 s.f.)\n(Note: SA:V for sphere = 3/r = 3/5 = 0.60)\n\n(c) The cube has a higher SA:V ratio (1.2 vs. 0.60 µm⁻¹), so it is more efficient for exchange by diffusion. A higher SA:V means there is more surface area per unit of volume across which substances can diffuse, enabling faster supply of nutrients and removal of waste relative to the metabolic needs of the cell.",
            markScheme: [
              "(a) SA = 150 µm² and V = 125 µm³ (1 mark); SA:V = 1.2 µm⁻¹ (1 mark)",
              "(b) SA = 100π ≈ 314 µm² (1 mark); V = 500π/3 ≈ 524 µm³ (1 mark); SA:V ≈ 0.60 µm⁻¹ (1 mark)",
              "(c) Cube has higher SA:V (1 mark); higher ratio = more surface area per unit volume = faster diffusion relative to metabolic demand (1 mark)",
            ],
            commonError: "Not showing working for the sphere calculation, or failing to convert 3/r into the same units as the cube answer.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "challenge",
            hints: [
              "Cube: SA = 6l², V = l³, then divide.",
              "Sphere: substitute r = 5 into both formulae, then divide.",
              "Higher SA:V = more efficient for diffusion.",
            ],
            strategy: "Show all substitutions; compare the two ratios numerically; link higher ratio to better diffusion efficiency.",
            solutions: [
              {
                label: "Cube (a)",
                steps: [
                  "SA = 6 × 5² = 150 µm²",
                  "V = 5³ = 125 µm³",
                  "SA:V = 150 ÷ 125 = 1.2 µm⁻¹",
                ],
              },
              {
                label: "Sphere (b)",
                steps: [
                  "SA = 4π × 25 = 100π ≈ 314.2 µm²",
                  "V = (4/3)π × 125 = 500π/3 ≈ 523.6 µm³",
                  "SA:V = 314.2 / 523.6 ≈ 0.60 µm⁻¹",
                  "Quick check: 3/r = 3/5 = 0.60 ✓",
                ],
              },
            ],
          },
          {
            id: "bio-transport-cell-bq2-05",
            question: "A student measures diffusion of blue dye into agar blocks of different sizes. The agar contains a pH indicator that changes colour when the dye reaches it. She cuts three cubes: 1 cm, 2 cm, and 3 cm side length, places them all in the same dye solution for 20 minutes, then bisects each cube and measures the depth of colour change.\n(a) Predict which cube will show the deepest colour change as a proportion of its half-width. Explain your answer. (2 marks)\n(b) Calculate the SA:V ratio of each cube. (2 marks)\n(c) What conclusion can be drawn about the relationship between cell size and efficiency of diffusion? (2 marks)",
            marks: 6,
            modelAnswer:
              "(a) The 1 cm cube will show the deepest colour change as a proportion of its half-width. Its high SA:V ratio means diffusion over 20 minutes covers a greater fraction of the cube's interior. In the 3 cm cube the dye must diffuse further to reach the centre, and the interior is less well supplied per unit volume.\n\n(b) SA:V = 6/l:\n1 cm cube: SA:V = 6/1 = 6 cm⁻¹\n2 cm cube: SA:V = 6/2 = 3 cm⁻¹\n3 cm cube: SA:V = 6/3 = 2 cm⁻¹\n\n(c) Smaller cells (with higher SA:V) allow diffusion to reach a greater proportion of the cell volume in a given time. As cell size increases, the SA:V falls, making diffusion increasingly inefficient at supplying the interior. This is why cells cannot grow indefinitely and must divide, and why large organisms have evolved specialised exchange surfaces.",
            markScheme: [
              "(a) 1 cm cube shows greatest proportional colour change (1 mark); because highest SA:V / dye diffuses to greater fraction of interior (1 mark)",
              "(b) 6, 3, and 2 cm⁻¹ respectively, using SA:V = 6/l (2 marks — 1 if only one or two correct)",
              "(c) Smaller cells have higher SA:V → more efficient diffusion supply (1 mark); as size increases SA:V decreases → diffusion insufficient → need for specialised surfaces or cell division (1 mark)",
            ],
            commonError: "Predicting that the largest cube shows the most colour change (it has the largest absolute depth of colour, but not the largest proportional depth).",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "challenge",
            hints: [
              "SA:V = 6/l — calculate for each cube.",
              "Higher SA:V = diffusion covers a greater fraction of the volume in the same time.",
              "The question asks about proportional penetration, not absolute depth.",
            ],
            strategy: "Calculate SA:V first; then reason about proportional penetration (smaller cube = more efficient).",
            solutions: [
              {
                label: "SA:V calculations",
                steps: [
                  "1 cm cube: SA = 6 cm², V = 1 cm³, SA:V = 6 cm⁻¹",
                  "2 cm cube: SA = 24 cm², V = 8 cm³, SA:V = 3 cm⁻¹",
                  "3 cm cube: SA = 54 cm², V = 27 cm³, SA:V = 2 cm⁻¹",
                ],
              },
            ],
          },
          {
            id: "bio-transport-cell-bq2-06",
            question: "Describe and explain the changes that occur when a turgid plant cell is transferred from distilled water to a concentrated sucrose solution. Use the terms water potential, osmosis, turgor pressure, and plasmolysis. (6 marks)",
            marks: 6,
            modelAnswer:
              "Initially in distilled water: the cell is turgid — its vacuole is fully inflated with water, the cell membrane presses against the cell wall, and turgor pressure is high. The water potential of the cell is negative (but higher than the most dilute condition due to turgor effects), while the distilled water has water potential of 0 kPa.\n\nWhen transferred to concentrated sucrose solution: the sucrose solution has a lower water potential (more negative) than the cell contents. Water now moves by osmosis from the cell (higher water potential) through the partially permeable cell membrane into the sucrose solution (lower water potential).\n\nAs water leaves: the vacuole shrinks. Turgor pressure decreases as the vacuole exerts less outward force on the cell wall. The cell becomes flaccid.\n\nIf water loss continues: turgor pressure falls to zero. Further water loss causes the cell membrane to pull away from the rigid cell wall — plasmolysis. The cell is now plasmolysed. If returned to dilute solution, water would re-enter and the cell would recover (de-plasmolysis).",
            markScheme: [
              "Sucrose solution has lower water potential than the cell (1 mark)",
              "Water moves by osmosis from cell (higher WP) to sucrose solution (lower WP) (1 mark)",
              "Vacuole shrinks as water is lost (1 mark)",
              "Turgor pressure decreases / falls to zero (1 mark)",
              "Cell membrane pulls away from cell wall — plasmolysis (1 mark)",
              "Correct use of at least 3 of the 4 specified terms in context (1 mark)",
            ],
            commonError: "Saying the cell wall shrinks — the cell wall is rigid and does not shrink; it is the membrane and vacuole that shrink.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "core",
            hints: [
              "Compare WP: dilute water vs. concentrated sucrose. Which direction does water move?",
              "Track changes step by step: vacuole → turgor pressure → membrane position.",
              "Use all four required terms in the correct context.",
            ],
            strategy: "Narrate the sequence: initial state → comparison of WP → osmosis direction → cell changes → final state (plasmolysis).",
          },
          {
            id: "bio-transport-cell-bq2-07",
            question: "Scientists studying ion uptake in seaweed cells found that:\n- The K⁺ concentration inside the cells is 50 times higher than in seawater.\n- Ion uptake is proportional to the rate of photosynthesis.\n- Adding an inhibitor of ATP synthesis halves the rate of ion uptake.\n\n(a) Which transport process is responsible for K⁺ uptake? Give two pieces of evidence from the data. (3 marks)\n(b) Explain the link between photosynthesis and ion uptake. (2 marks)\n(c) Why does the inhibitor only halve rather than stop ion uptake completely? Suggest a reason. (2 marks)",
            marks: 7,
            modelAnswer:
              "(a) Active transport. Evidence: (i) K⁺ is 50 times more concentrated inside than outside — it is being absorbed against a very steep concentration gradient, which is impossible by diffusion. (ii) ATP synthesis inhibitor reduces ion uptake — active transport requires ATP; if ATP production is reduced, active transport rate falls.\n\n(b) Seaweed is photosynthetic; photosynthesis produces ATP (and glucose, which can be respired to produce more ATP). More photosynthesis = more ATP available = more ATP for active transport of K⁺ = higher ion uptake rate. The two processes are linked through ATP as the energy currency.\n\n(c) The inhibitor only halves uptake, not stops it, which suggests there is another ATP source. Possible reason: the inhibitor specifically blocks one pathway (e.g. the light reactions of photosynthesis), but the cells can still produce ATP by an alternative route (e.g. anaerobic respiration, or the inhibitor is not at saturation concentration). Another possibility: only part of the ion uptake is by active transport; some may be by a passive mechanism.",
            markScheme: [
              "(a) Active transport (1 mark); K⁺ 50× more concentrated inside — against gradient (1 mark); ATP inhibitor reduces uptake — process requires ATP (1 mark)",
              "(b) Photosynthesis produces ATP; more photosynthesis → more ATP → more active transport → more uptake (2 marks)",
              "(c) ATP supply not completely eliminated / alternative ATP source still operating / partial inhibition / some uptake may be passive (2 marks — 1 for idea, 1 for developed explanation)",
            ],
            commonError: "Not identifying two separate pieces of evidence in part (a) — the mark scheme requires two distinct data points.",
            guideRef: "Active Transport",
            difficulty: "challenge",
            hints: [
              "50× higher inside: can diffusion do this? No — it is against the gradient.",
              "ATP inhibitor reduces uptake: which mechanism needs ATP?",
              "Link photosynthesis to ATP production to active transport rate.",
              "For (c): if the inhibitor only halves uptake, something else is still producing ATP.",
            ],
          },
          {
            id: "bio-transport-cell-bq2-08",
            question: "A student investigates osmosis in onion epidermal cells by placing them in different sucrose concentrations and counting the proportion of cells that appear plasmolysed under a microscope.\n\nResults:\nSucrose conc (mol/dm³): 0.2, 0.3, 0.4, 0.5, 0.6\n% cells plasmolysed: 0, 5, 40, 90, 100\n\n(a) Estimate the sucrose concentration at which 50% of cells are plasmolysed (the 'incipient plasmolysis' point). (1 mark)\n(b) What does this concentration represent in terms of water potential? (2 marks)\n(c) Suggest why different cells plasmolyse at different concentrations. (2 marks)\n(d) Describe a precaution the student should take when preparing the slides to ensure a fair test. (1 mark)",
            marks: 6,
            modelAnswer:
              "(a) Approximately 0.42–0.45 mol/dm³ sucrose (interpolating between 40% and 90%).\n\n(b) This concentration represents the incipient plasmolysis point — the sucrose concentration at which the water potential of the sucrose solution equals the water potential of the onion cells. At this concentration, the cell contents and solution are in osmotic equilibrium; the membrane just begins to pull from the wall in 50% of cells, indicating the average water potential of the cell sap.\n\n(c) Individual cells in the tissue have slightly different solute concentrations in their vacuoles (and therefore slightly different water potentials), due to natural biological variation. A cell with slightly higher solute content (lower WP) will only plasmolyse at a higher sucrose concentration, while one with lower solute content will plasmolyse at a lower concentration. The 50% point averages across this natural variation.\n\n(d) The student should ensure cells are all taken from the same layer/region of onion epidermis and prepared in the same way (e.g. same time in solution before viewing), to minimise variation due to differences in cell type or preparation.",
            markScheme: [
              "(a) Approximately 0.42–0.45 mol/dm³ (accept values between 0.40 and 0.47) (1 mark)",
              "(b) Incipient plasmolysis: WP of sucrose = WP of onion cells at this concentration (1 mark); represents the average water potential of the onion cell sap (1 mark)",
              "(c) Natural variation in solute concentration / water potential between individual cells (1 mark); cells with lower WP need higher sucrose concentration to plasmolyse (1 mark)",
              "(d) Any valid precaution: same preparation time; same region of onion; same volume of solution; same temperature (1 mark)",
            ],
            commonError: "In (b), simply saying 'equal concentrations on both sides' — should say 'equal water potentials', not just concentrations.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "challenge",
            hints: [
              "Interpolate between 0.4 M (40%) and 0.5 M (90%) to estimate the 50% point.",
              "At the incipient plasmolysis point, the solution is isotonic to the cell contents.",
              "Why might cells in the same tissue have different WP? Biological variation.",
            ],
          },
          {
            id: "bio-transport-cell-bq2-09",
            question: "Evaluate the following student statement: 'Active transport is just fast diffusion — it moves the same substances in the same direction, just more quickly.' Is this statement correct? Justify your answer using scientific evidence. (5 marks)",
            marks: 5,
            modelAnswer:
              "The statement is incorrect. Active transport and diffusion are fundamentally different processes, not simply different speeds of the same mechanism.\n\nKey differences:\n1. Direction: diffusion moves substances down the concentration gradient (from high to low concentration). Active transport moves substances against the concentration gradient (from low to high concentration). They often move substances in opposite directions.\n\n2. Energy: diffusion is passive — it requires no energy and occurs spontaneously. Active transport requires energy in the form of ATP produced by cellular respiration. This is why blocking respiration (with inhibitors or anaerobic conditions) stops active transport but not diffusion.\n\n3. Proteins: diffusion requires no proteins (though facilitated diffusion uses channel proteins). Active transport requires specific carrier proteins that use ATP to change shape.\n\nEvidence: (i) Root hair cells accumulate K⁺ ions to concentrations far higher than in the soil — impossible by diffusion. (ii) Blocking ATP production stops ion uptake in root hairs, but does not stop O₂ diffusion into cells — proving the two mechanisms are independent. Therefore, active transport is not 'fast diffusion' — it is an entirely different, energy-dependent process that can work against a gradient.",
            markScheme: [
              "Statement is incorrect (1 mark)",
              "Direction: diffusion down gradient vs. active transport against gradient (1 mark)",
              "Energy: diffusion is passive; active transport requires ATP (1 mark)",
              "Evidence: root hair cells accumulate ions against gradient / inhibiting respiration stops active transport not diffusion (1 mark)",
              "Clear conclusion: they are fundamentally different mechanisms, not the same at different speeds (1 mark)",
            ],
            commonError: "Only stating the differences without providing specific evidence — the question asks to 'evaluate' and 'justify', so evidence is required.",
            guideRef: "Active Transport",
            difficulty: "challenge",
            hints: [
              "Start by stating whether the claim is correct or incorrect.",
              "Compare direction, energy requirement, and protein involvement.",
              "Cite specific evidence: root hair cells, respiratory inhibitors.",
              "Conclude clearly.",
            ],
            strategy: "Structure: verdict → differences (3 criteria) → evidence → conclusion.",
          },
          {
            id: "bio-transport-cell-bq2-10",
            question: "Extended response: A plant is growing in soil that has been heavily fertilised with potassium nitrate. Describe and explain the transport processes that might occur in the root hair cells under two different conditions: (i) when potassium nitrate concentration in the soil is lower than inside the root cells, and (ii) when it becomes equal to the concentration inside the root cells after heavy fertilisation. For each condition, state whether diffusion, osmosis, or active transport is involved, and explain why. (6 marks)",
            marks: 6,
            modelAnswer:
              "(i) When soil KNO₃ concentration is LOWER than inside root cells:\nIons must move from a region of lower concentration (soil water) to higher concentration (inside the root cell) — against the concentration gradient. This requires active transport. Carrier proteins in the root hair cell membrane, powered by ATP from cellular respiration, pump K⁺ and NO₃⁻ ions into the cell against the gradient. Simultaneously, the dissolved salts in the root cell lower the water potential of the root cell; since soil water has higher water potential, water enters the root cell by osmosis through the partially permeable cell membrane.\n\n(ii) When soil KNO₃ concentration is EQUAL to inside the root cells (after heavy fertilisation):\nThere is no longer a concentration gradient for K⁺ and NO₃⁻ between the soil and the cell. Active transport is no longer needed for ions — the gradient has been eliminated. However, at this point the soil water now has a more negative water potential (due to dissolved salts), which may be lower than the cell's water potential. This means water could leave the root cells by osmosis into the soil, potentially causing the plant to wilt — a process analogous to plasmolysis. The plant may actually lose water to the heavily fertilised soil, explaining why over-fertilisation harms crops.",
            markScheme: [
              "(i) Ions: against gradient — active transport needed; ATP and carrier proteins involved (2 marks)",
              "(i) Water: enters by osmosis because root cell WP is lower than soil water WP (1 mark)",
              "(ii) Ions: no gradient — active transport not required; may diffuse (if any gradient develops) (1 mark)",
              "(ii) Water: heavily fertilised soil has lower WP → water leaves cells by osmosis → wilting / plasmolysis (1 mark)",
              "Overall: coherent explanation linking concentration gradient direction to transport mechanism in each scenario (1 mark)",
            ],
            commonError: "Not recognising that heavy fertilisation can lower the water potential of soil water below that of root cells, causing osmotic water loss.",
            guideRef: "Active Transport",
            difficulty: "challenge",
            hints: [
              "For each scenario, first compare concentrations on both sides of the membrane.",
              "Lower concentration in soil → against gradient → active transport.",
              "Equal concentrations → no gradient → no active transport needed.",
              "What happens to water potential when KNO₃ dissolves in soil water?",
            ],
            strategy: "For each condition: (1) compare concentrations, (2) identify gradient direction or absence, (3) name the transport mechanism, (4) explain why.",
          },
        ],
      },
      {
        id: "bio-transport-cell-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "10 structured questions including multi-step calculations, experimental analysis, and synoptic extension.",
        questions: [
          {
            id: "bio-transport-cell-bq3-01",
            question: "State the definition of osmosis and identify three ways in which it differs from diffusion. (4 marks)",
            marks: 4,
            modelAnswer:
              "Osmosis is the net movement of water molecules from a region of higher water potential to a region of lower water potential through a partially permeable membrane.\n\nThree differences from diffusion:\n1. Substance: osmosis involves only water molecules; diffusion can involve any dissolved substance (solutes and gases).\n2. Membrane requirement: osmosis requires a partially permeable membrane; simple diffusion does not require any membrane.\n3. Driving force: osmosis is driven by a water potential gradient; diffusion is driven by a concentration gradient of the diffusing substance.",
            markScheme: [
              "Osmosis: net movement of water molecules from higher to lower water potential through a partially permeable membrane (1 mark)",
              "Difference 1: osmosis involves only water / diffusion involves any particles (1 mark)",
              "Difference 2: osmosis requires a partially permeable membrane / diffusion does not need a membrane (1 mark)",
              "Difference 3: osmosis driven by water potential gradient / diffusion driven by concentration gradient of the diffusing substance (1 mark)",
            ],
            commonError: "Saying osmosis requires energy — it is passive, like diffusion. Also, confusing the driving forces: osmosis uses water potential, diffusion uses concentration gradient.",
            guideRef: "Osmosis",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bq3-02",
            question: "A student places equal-sized cylinders of raw potato (mass 3.5 g each) into three solutions for 45 minutes:\n- Solution A: distilled water\n- Solution B: 0.5 mol/dm³ sucrose\n- Solution C: 1.5 mol/dm³ sucrose\n\nAfter blotting, the masses are: A = 4.0 g, B = 3.5 g, C = 2.8 g.\n\n(a) Calculate the percentage change in mass for cylinders A and C. (2 marks)\n(b) Explain the result for cylinder B. (2 marks)\n(c) The student repeats the experiment at 40 °C instead of 20 °C. Predict how the result for cylinder A might change and explain why. (2 marks)",
            marks: 6,
            modelAnswer:
              "(a) Cylinder A: % change = (4.0 − 3.5) / 3.5 × 100 = +14.3%\nCylinder C: % change = (2.8 − 3.5) / 3.5 × 100 = −20.0%\n\n(b) Cylinder B shows no change in mass (3.5 g → 3.5 g). The 0.5 mol/dm³ sucrose solution is isotonic with the potato cells — both have equal water potential. There is no net movement of water by osmosis across the cell membrane, so no change in mass occurs.\n\n(c) At 40 °C, the rate of osmosis would be faster because water molecules have more kinetic energy and move more rapidly. In the same 45-minute period, more water would enter cylinder A (distilled water has higher WP than the potato cells), so the percentage gain in mass would be greater than +14.3%.",
            markScheme: [
              "(a) Cylinder A: +14.3% (accept +14% to +14.3%) with working (1 mark); Cylinder C: −20.0% with working (1 mark)",
              "(b) Solution B is isotonic / water potentials are equal (1 mark); no net movement of water by osmosis (1 mark)",
              "(c) Greater % gain in mass (1 mark); higher temperature → greater kinetic energy of water molecules → faster osmosis / more water enters in same time (1 mark)",
            ],
            commonError: "In (a), forgetting to include the sign or not showing working. In (c), saying 'more water enters because the cell needs it' — use kinetic energy reasoning.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "core",
            hints: [
              "% change = (final − initial) / initial × 100; include sign.",
              "B: no change in mass → what does this tell you about water potentials?",
              "Higher temperature → more kinetic energy → faster molecular movement → faster osmosis.",
            ],
            solutions: [
              {
                label: "Percentage change calculations",
                steps: [
                  "Cylinder A: change = 4.0 − 3.5 = +0.5 g; % = (0.5/3.5) × 100 = +14.3%",
                  "Cylinder C: change = 2.8 − 3.5 = −0.7 g; % = (−0.7/3.5) × 100 = −20.0%",
                ],
              },
            ],
          },
          {
            id: "bio-transport-cell-bq3-03",
            question: "Explain how the structure of the small intestine wall is adapted for efficient absorption of glucose by active transport. Refer to at least three structural features. (5 marks)",
            marks: 5,
            modelAnswer:
              "The small intestine is highly adapted for glucose absorption by active transport:\n\n1. Villi: finger-like projections of the intestinal wall greatly increase the surface area available for absorption. A larger surface area means more carrier proteins can be present, increasing the overall rate of active transport of glucose.\n\n2. Microvilli (brush border): the epithelial cells lining the villi have thousands of microvilli — microscopic projections on their surface. This further increases the surface area, providing even more membrane for carrier proteins.\n\n3. Rich mitochondria supply: epithelial cells contain many mitochondria, which produce ATP by aerobic respiration. Active transport of glucose requires ATP — more mitochondria = more ATP = higher rate of active transport.\n\n4. Good blood supply (capillaries in villi): each villus contains a network of capillaries. Blood flow removes glucose rapidly from the epithelial cells, maintaining a low glucose concentration there and preserving the gradient for continued absorption. (Also accepted: thin epithelial layer = short diffusion distance.)",
            markScheme: [
              "Villi: increase surface area → more carrier proteins → higher absorption rate (1 mark)",
              "Microvilli: further increase surface area (1 mark)",
              "Many mitochondria: produce ATP for active transport (1 mark)",
              "Capillaries/blood supply: removes glucose, maintains concentration gradient (1 mark)",
              "Link between structure and active transport function clearly made (1 mark)",
            ],
            commonError: "Describing villi and microvilli as separate features without explaining how each increases the rate of active transport.",
            guideRef: "Active Transport",
            difficulty: "core",
            hints: [
              "What do villi and microvilli do for surface area?",
              "What do mitochondria provide for active transport?",
              "Why does blood flow help maintain efficient absorption?",
            ],
          },
          {
            id: "bio-transport-cell-bq3-04",
            question: "A scientist measures the rate of diffusion of a dye through a gel membrane at different temperatures. She obtains these results:\nTemp (°C): 10, 20, 30, 40, 50, 60\nRate (arbitrary units): 1.0, 1.9, 3.8, 7.5, 6.0, 2.5\n\n(a) Describe the trend in diffusion rate from 10 °C to 40 °C. (1 mark)\n(b) Explain the trend from 10 °C to 40 °C using particle theory. (2 marks)\n(c) Suggest a reason why diffusion rate decreases above 40 °C, despite higher temperatures. (2 marks)\n(d) Calculate the percentage decrease in rate from 40 °C to 60 °C. (2 marks)",
            marks: 7,
            modelAnswer:
              "(a) Diffusion rate approximately doubles with each 10 °C rise in temperature from 10 °C to 40 °C (rate increases from 1.0 to 7.5 arbitrary units).\n\n(b) As temperature increases, particles gain more kinetic energy and move faster. The dye molecules collide more frequently and travel more rapidly through the gel. This increases the rate at which they spread from the high-concentration region to the low-concentration region — faster diffusion.\n\n(c) Above 40 °C, the proteins that form the gel membrane structure begin to denature (their three-dimensional shape breaks down). Denatured proteins alter the gel's properties, reducing the size of pores or blocking pathways through which the dye was diffusing. Although the dye molecules still have high kinetic energy, the membrane becomes less permeable, so diffusion rate falls.\n\n(d) Decrease = 7.5 − 2.5 = 5.0 arbitrary units\n% decrease = (5.0 / 7.5) × 100 = 66.7%",
            markScheme: [
              "(a) Rate approximately doubles per 10 °C rise / rate increases from 1.0 to 7.5 (1 mark)",
              "(b) Higher temperature → greater kinetic energy → particles move faster → faster diffusion (2 marks)",
              "(c) Membrane proteins denature above 40 °C → membrane structure disrupted → reduced permeability → slower diffusion (2 marks, 1 for denaturation, 1 for link to reduced diffusion)",
              "(d) Decrease = 5.0; % decrease = (5.0/7.5) × 100 = 66.7% (2 marks — 1 for method, 1 for correct answer)",
            ],
            commonError: "In (c), saying 'diffusion stops because it is too hot' without explaining the mechanism (protein denaturation).",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "Describe the numerical trend clearly — does it double each step?",
              "Kinetic energy increases with temperature — what does this do to particle speed?",
              "Above 40 °C: proteins in the membrane. What happens to proteins at high temperatures?",
              "% decrease = (decrease / original) × 100.",
            ],
            solutions: [
              {
                label: "Percentage decrease (d)",
                steps: [
                  "Decrease = 7.5 − 2.5 = 5.0",
                  "% decrease = (5.0 / 7.5) × 100 = 66.7%",
                ],
              },
            ],
          },
          {
            id: "bio-transport-cell-bq3-05",
            question: "Explain the meaning of 'turgid', 'flaccid', and 'plasmolysed' as applied to plant cells. For each, describe the water potential conditions that produce that state and the structural appearance of the cell. (6 marks)",
            marks: 6,
            modelAnswer:
              "Turgid: The surrounding solution has a higher water potential than the cell contents. Water has entered the cell by osmosis. The vacuole is fully inflated with water and pushes the cell membrane firmly against the rigid cell wall. Turgor pressure is at its maximum. The cell appears rounded and firm, with no gap between the membrane and the wall.\n\nFlaccid: The cell is in equilibrium with a solution that has approximately the same water potential, or has lost some water to a slightly more concentrated solution. Turgor pressure is low — the vacuole has lost some water and no longer pushes firmly against the wall, but the membrane has not yet separated from it. The cell appears slightly shrunken but the membrane remains in contact with the wall.\n\nPlasmolysed: The surrounding solution has a lower water potential (higher solute concentration) than the cell contents. Water has left the cell by osmosis. So much water is lost that the vacuole shrinks severely and the cell membrane pulls away from the rigid cell wall, leaving a gap filled with external solution. The cell appears visibly shrunken with the membrane detached from the wall. Plasmolysis is reversible if the cell is returned to a hypotonic solution.",
            markScheme: [
              "Turgid: higher WP outside → water enters → vacuole inflated → membrane presses wall → turgor high (2 marks)",
              "Flaccid: approximately equal WP / slight WP outside < cell → vacuole partly deflated → turgor low, membrane still touching wall (2 marks)",
              "Plasmolysed: lower WP outside → water leaves → vacuole severely shrunken → membrane pulls from wall → gap visible (2 marks)",
            ],
            commonError: "Confusing flaccid with plasmolysed — flaccid still has the membrane touching the wall; plasmolysis is when the membrane has pulled away.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "core",
            hints: [
              "For each state: (1) which direction does water move? (2) what does the vacuole look like? (3) where is the membrane relative to the wall?",
              "Turgid: water in; flaccid: some water out; plasmolysed: lots of water out.",
              "Only in plasmolysis does the membrane separate from the wall.",
            ],
          },
          {
            id: "bio-transport-cell-bq3-06",
            question: "A student adds a concentrated sugar solution to a pot of soil around a wilting house plant and observes that the plant wilts further rather than recovering.\n(a) Explain why adding concentrated sugar solution to the soil makes the plant wilt further. (3 marks)\n(b) The student then waters the plant heavily with distilled water. Explain why this causes the plant to recover. (3 marks)",
            marks: 6,
            modelAnswer:
              "(a) Adding concentrated sugar solution dissolves in the soil water, lowering its water potential (making it more negative). The soil water now has a lower water potential than the root cell contents. Water moves by osmosis from the root cells (higher water potential) into the soil water (lower water potential), through the partially permeable root cell membrane. The root cells lose water, vacuoles shrink, turgor pressure falls further — the plant wilts more.\n\n(b) Watering with distilled water dilutes the soil solution, raising its water potential (closer to 0 kPa). Eventually the soil water has a higher water potential than the root cell contents (which are more concentrated due to the earlier water loss). Water now moves by osmosis from the soil water (higher WP) back into the root cells (lower WP). The vacuoles re-fill with water, turgor pressure is restored, and the plant recovers its structural rigidity.",
            markScheme: [
              "(a) Concentrated sugar lowers water potential of soil water (1 mark)",
              "Soil WP now lower than root cell WP → water leaves root cells by osmosis (1 mark)",
              "Loss of turgor / vacuoles shrink → plant wilts further (1 mark)",
              "(b) Distilled water raises soil water potential (1 mark)",
              "Soil WP now higher than root cell WP → water enters root cells by osmosis (1 mark)",
              "Vacuoles refill / turgor pressure restored → plant recovers (1 mark)",
            ],
            commonError: "Saying 'plants absorb water by active transport' — water absorption is by osmosis, a passive process. Only ions are absorbed by active transport.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "core",
            hints: [
              "What does dissolved sugar do to the water potential of the soil?",
              "Compare WP on both sides of the root cell membrane to determine direction of water movement.",
              "Higher turgor pressure = firmer plant; lower turgor pressure = wilting.",
            ],
          },
          {
            id: "bio-transport-cell-bq3-07",
            question: "Explain why a single-celled organism such as Amoeba does not need a circulatory system, whereas a large mammal such as a horse does. Refer to SA:V ratio in your answer. (4 marks)",
            marks: 4,
            modelAnswer:
              "Amoeba is a single cell with very small dimensions, giving it a very high SA:V ratio. The surface area available for exchange (for diffusion of oxygen, glucose, CO₂, and waste) is large relative to the volume of cytoplasm that must be supplied. All regions of the cell are close to the outer membrane, so diffusion alone can supply nutrients and remove waste fast enough to meet metabolic demands. No circulatory system is needed.\n\nA horse is a large, complex multicellular organism. As size increases, volume grows much faster than surface area (V ∝ l³, SA ∝ l²), so the SA:V ratio is very small. Diffusion across the outer body surface is completely inadequate to supply the millions of cells deep within the body — the diffusion distance is too great and the supply would be too slow. A circulatory system (blood, heart, blood vessels) is essential to transport substances rapidly to and from all cells throughout the body.",
            markScheme: [
              "Amoeba: small size → high SA:V → diffusion adequate to supply whole cell (1 mark)",
              "Horse: large size → low SA:V → diffusion insufficient to supply interior cells (1 mark)",
              "Volume grows faster than surface area as size increases (l³ vs. l²) (1 mark)",
              "Circulatory system needed to transport substances rapidly over large distances (1 mark)",
            ],
            commonError: "Not mentioning SA:V ratio despite the question requiring it.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "core",
            hints: [
              "SA:V = surface area divided by volume; high in small cells, low in large organisms.",
              "Diffusion is only fast enough over short distances.",
              "For large organisms: too many cells too far from the surface for diffusion alone.",
            ],
          },
          {
            id: "bio-transport-cell-bq3-08",
            question: "A student claims: 'Osmosis and diffusion are both passive processes, so they must work in the same way and be affected by the same factors.' Evaluate this claim. (5 marks)",
            marks: 5,
            modelAnswer:
              "The claim is partially correct but oversimplified. Both osmosis and diffusion are indeed passive processes requiring no energy input. However, they differ significantly in their mechanisms and the factors that affect them.\n\nSimilarities: both are driven by concentration/potential gradients; both require no ATP; both involve random molecular movement; both result in net movement from higher to lower potential.\n\nDifferences:\n1. Substance: diffusion applies to any particle; osmosis applies only to water molecules.\n2. Membrane: osmosis requires a partially permeable membrane; simple diffusion does not.\n3. Driving force: diffusion is driven by a concentration gradient of the diffusing substance; osmosis is driven by a water potential gradient.\n4. Factors: while both are affected by temperature and surface area, osmosis is additionally affected by the solute concentration difference across the membrane (which determines the water potential gradient). Diffusion distance is relevant to both, but 'thickness of the membrane' is specifically important for osmosis (membrane permeability).\n\nConclusion: while both are passive, they operate by distinct mechanisms and are not identical processes.",
            markScheme: [
              "Correct that both are passive / no energy required (1 mark)",
              "Difference: osmosis involves only water; diffusion involves any particle (1 mark)",
              "Difference: osmosis requires partially permeable membrane; diffusion does not (1 mark)",
              "Difference: osmosis driven by water potential gradient; diffusion driven by concentration gradient (1 mark)",
              "Balanced evaluation: similarities acknowledged AND differences clearly stated with conclusion (1 mark)",
            ],
            commonError: "Only listing differences and not acknowledging the valid part of the claim — an evaluation must address both correct and incorrect elements.",
            guideRef: "Osmosis",
            difficulty: "challenge",
            hints: [
              "What do diffusion and osmosis have in common? Both passive, both driven by gradients.",
              "What is different? Substance, membrane requirement, driving force.",
              "A good evaluation acknowledges both correct and incorrect parts of the claim.",
            ],
          },
          {
            id: "bio-transport-cell-bq3-09",
            question: "Kidney tubule cells reabsorb glucose from the filtrate back into the blood even when blood glucose concentration is higher than in the filtrate.\n(a) Which transport process is responsible? Give a reason for your choice. (2 marks)\n(b) The cells lining the kidney tubule have microvilli and many mitochondria. Explain how these features support glucose reabsorption. (3 marks)\n(c) In uncontrolled diabetes, blood glucose is very high. Suggest why glucose is found in the urine of diabetic patients. (2 marks)",
            marks: 7,
            modelAnswer:
              "(a) Active transport — glucose is being moved from the filtrate (lower concentration) into the blood (higher concentration), i.e. against the concentration gradient. This cannot occur by diffusion (which moves with the gradient) and requires ATP.\n\n(b) Microvilli increase the surface area of the cells facing the filtrate. More surface area means more carrier proteins can be inserted into the membrane, allowing more glucose to be transported simultaneously — increasing the rate of active transport.\n\nMitochondria carry out aerobic respiration, producing large amounts of ATP. Active transport of glucose requires ATP to power the carrier proteins. More mitochondria = more ATP produced = higher rate of glucose reabsorption.\n\n(c) In diabetes, blood glucose is very high. Glucose is filtered from the blood into the kidney filtrate at very high concentrations. The carrier proteins in the kidney tubule cells become saturated — all carrier proteins are working at maximum capacity and cannot reabsorb all the glucose present. The excess glucose that cannot be reabsorbed remains in the filtrate and is excreted in the urine.",
            markScheme: [
              "(a) Active transport (1 mark); movement against concentration gradient (from low filtrate to high blood) (1 mark)",
              "(b) Microvilli: increase surface area → more carrier proteins → higher rate of transport (1–2 marks)",
              "Mitochondria: produce ATP by respiration → ATP needed for active transport (1 mark)",
              "(c) Blood glucose very high → filtrate glucose very high → carrier proteins saturated → cannot reabsorb all glucose → glucose in urine (2 marks)",
            ],
            commonError: "In (c), saying 'kidneys cannot work properly' without explaining carrier protein saturation — the mechanism of saturation is required for full marks.",
            guideRef: "Active Transport",
            difficulty: "challenge",
            hints: [
              "Glucose moving from lower to higher concentration = active transport.",
              "Microvilli → surface area → more carrier proteins.",
              "Mitochondria → ATP → powers carrier proteins.",
              "In diabetes: too much glucose in filtrate → carrier proteins cannot keep up → glucose in urine.",
            ],
          },
          {
            id: "bio-transport-cell-bq3-10",
            question: "Design an experiment to investigate whether the uptake of glucose by intestinal epithelial cells is by active transport or by diffusion. Include: hypothesis, independent and dependent variables, experimental and control groups, how to distinguish the two mechanisms, and expected results for each mechanism. (6 marks)",
            marks: 6,
            modelAnswer:
              "Hypothesis: Glucose uptake by intestinal epithelial cells is by active transport, not diffusion.\n\nIndependent variable: Whether a respiratory inhibitor (e.g. cyanide or dinitrophenol, DNP) is present or absent.\nDependent variable: Rate of glucose uptake by intestinal epithelial cells (measured by change in glucose concentration in the solution bathing the cells, using a glucose biosensor).\n\nExperimental setup:\n- Experimental group: intestinal epithelial cells incubated with glucose solution + respiratory inhibitor (blocks ATP production).\n- Control group: identical cells incubated with same glucose concentration but no inhibitor.\n- Additional test: measure glucose uptake when glucose concentration outside is LOWER than inside the cell (against the gradient) — diffusion cannot do this.\n\nDistinguishing the mechanisms:\n- If uptake is by diffusion: adding a respiratory inhibitor will NOT stop uptake; uptake will only occur if glucose concentration is higher outside than inside (with the gradient).\n- If uptake is by active transport: adding a respiratory inhibitor WILL stop or greatly reduce uptake; uptake can occur even against the concentration gradient.\n\nExpected results (if active transport): inhibitor group shows near-zero glucose uptake; control group shows continued uptake, even against the gradient. This would confirm active transport.",
            markScheme: [
              "Hypothesis: glucose uptake is by active transport (1 mark)",
              "IV: presence/absence of respiratory inhibitor; DV: rate of glucose uptake (1 mark)",
              "Experimental vs. control group clearly described (1 mark)",
              "Test against-gradient uptake: sets up the distinguishing condition (1 mark)",
              "Predicted result if active transport: inhibitor stops uptake; control continues (1 mark)",
              "Predicted result if diffusion: inhibitor has no effect; uptake only with gradient (1 mark)",
            ],
            commonError: "Not testing against-gradient uptake — this is the key distinguishing feature of active transport that cannot be explained by diffusion.",
            guideRef: "Active Transport",
            difficulty: "challenge",
            hints: [
              "What is the definitive feature of active transport? Against-gradient movement + ATP dependence.",
              "Control = no inhibitor; experimental = with inhibitor.",
              "Measure glucose uptake in both groups and compare.",
              "Also test uptake when outside concentration is lower than inside.",
            ],
          },
        ],
      },
      {
        id: "bio-transport-cell-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "10 structured questions: synoptic extension, multi-step problems, and challenge extended responses.",
        questions: [
          {
            id: "bio-transport-cell-bq4-01",
            question: "Explain why the concentration gradient across a leaf's stomata must be maintained for efficient photosynthesis. Refer to diffusion in your answer. (3 marks)",
            marks: 3,
            modelAnswer:
              "Photosynthesis requires CO₂ as a raw material. CO₂ enters leaf cells from the air outside by diffusion — moving from the higher concentration in the external air (approximately 0.04%) to the lower concentration in the mesophyll cells, where CO₂ is continually used up by photosynthesis.\n\nFor diffusion to be rapid enough to supply photosynthesis, the concentration gradient must be maintained as steep as possible. If CO₂ built up inside the leaf (e.g. because stomata closed), the gradient would be reduced and diffusion would slow, limiting photosynthesis. Stomata must remain open and the inside CO₂ concentration must stay low (by active use in photosynthesis) to maintain the gradient and ensure rapid CO₂ supply.",
            markScheme: [
              "CO₂ enters leaves by diffusion from high concentration (air) to low concentration (mesophyll) (1 mark)",
              "Steep gradient needed for rapid diffusion — maintained by CO₂ consumption in photosynthesis (1 mark)",
              "If gradient reduced (stomata close or CO₂ builds up) → diffusion slows → photosynthesis limited (1 mark)",
            ],
            commonError: "Stating CO₂ is 'pumped in' by active transport — CO₂ enters by diffusion only.",
            guideRef: "Diffusion",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bq4-02",
            question: "A student measures the rate of osmosis in potato cylinders at temperatures of 5, 15, 25, 35, and 45 °C and records these percentage mass changes after 30 minutes:\n5 °C: +3.0%; 15 °C: +6.0%; 25 °C: +12.0%; 35 °C: +20.0%; 45 °C: +10.0%\n\n(a) Describe the trend from 5 °C to 35 °C. (1 mark)\n(b) Suggest why the % mass change decreases at 45 °C compared to 35 °C. (2 marks)\n(c) At 25 °C the cylinder is placed in distilled water. Calculate: how many grams of water enter the cylinder if the initial mass is 5.0 g. (2 marks)",
            marks: 5,
            modelAnswer:
              "(a) From 5 °C to 35 °C, the percentage mass change increases approximately doubling with each 10 °C rise (3 → 6 → 12 → 20%), indicating that the rate of osmosis increases as temperature increases.\n\n(b) At 45 °C, membrane proteins begin to denature (their tertiary structure is disrupted). This reduces the permeability of the cell membrane — the partially permeable membrane becomes either more permeable (disrupted) or less functional, and the rate of osmosis falls. The water potential gradient also changes as solutes may leak from damaged cells.\n\n(c) % mass change = +12.0% at 25 °C\nMass change = (12.0 / 100) × 5.0 = 0.60 g\nSo 0.60 g of water enters the cylinder.",
            markScheme: [
              "(a) Rate (% mass change) increases with temperature from 5–35 °C / approximately doubles per 10 °C (1 mark)",
              "(b) Membrane proteins denature at 45 °C (1 mark); membrane permeability disrupted → rate of osmosis falls (1 mark)",
              "(c) 12% of 5.0 g = 0.60 g water enters (2 marks — 1 for method, 1 for answer with units)",
            ],
            commonError: "In (b), simply saying 'it gets too hot' — must state protein denaturation. In (c), calculating % of final mass rather than initial mass.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "core",
            hints: [
              "Describe the trend numerically — does it double each step?",
              "At 45 °C: think about what happens to membrane proteins.",
              "Mass change = (% change / 100) × initial mass.",
            ],
            solutions: [
              {
                label: "Part (c) calculation",
                steps: [
                  "% mass change = +12.0%",
                  "Mass change = (12.0/100) × 5.0 g = 0.60 g",
                  "0.60 g of water enters the cylinder.",
                ],
              },
            ],
          },
          {
            id: "bio-transport-cell-bq4-03",
            question: "Describe an experiment you could carry out using visking tubing to demonstrate osmosis. Include: materials, method, expected result, and a control experiment. (5 marks)",
            marks: 5,
            modelAnswer:
              "Materials: visking tubing, concentrated sucrose solution (e.g. 1.0 mol/dm³), distilled water, capillary tube, retort stand, ruler, beaker.\n\nMethod: Soak the visking tubing in water to make it pliable. Fill a length of tubing with 1.0 mol/dm³ sucrose solution. Seal one end securely. Attach a capillary tube at the other end using a rubber bung. Clamp the apparatus vertically. Place the tubing in a beaker of distilled water. Mark the initial liquid level in the capillary tube. Record the level every 5 minutes for 30 minutes.\n\nExpected result: The liquid level in the capillary tube rises over time. Water moves by osmosis from the distilled water (higher water potential, 0 kPa) into the sucrose solution inside the tubing (lower water potential), through the visking tubing acting as a partially permeable membrane. The volume inside increases, pushing liquid up the capillary tube.\n\nControl: Repeat the experiment but place the tubing in 1.0 mol/dm³ sucrose solution instead of distilled water. The liquid level should remain unchanged, confirming that the net movement is due to the water potential gradient (not some other factor). No net osmosis when water potentials are equal on both sides.",
            markScheme: [
              "Suitable materials: visking tubing, sucrose solution, distilled water, capillary tube (1 mark)",
              "Clear method: fill tubing with sucrose, seal, attach capillary, place in distilled water, record level (1 mark)",
              "Expected result: liquid rises in capillary tube (1 mark)",
              "Explanation: water enters by osmosis from higher WP (distilled water) to lower WP (sucrose) (1 mark)",
              "Control: tubing in equal sucrose concentration — no change in level (1 mark)",
            ],
            commonError: "Not including a control experiment — a control is essential to confirm that the observed result is specifically due to the water potential gradient.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "core",
            hints: [
              "What materials are needed? Visking tubing, capillary tube, sucrose, distilled water.",
              "What do you measure? The change in liquid level in the capillary tube.",
              "What is the control? Same tubing but in a solution with equal concentration/WP.",
            ],
          },
          {
            id: "bio-transport-cell-bq4-04",
            question: "A marine fish living in seawater (which has a lower water potential than the fish's cells) must constantly drink seawater and actively excrete salt ions. A freshwater fish (living in water with higher water potential than its cells) must constantly produce large volumes of dilute urine.\n(a) Explain why the marine fish risks losing water by osmosis. (2 marks)\n(b) Explain why the freshwater fish risks gaining too much water by osmosis. (2 marks)\n(c) Why does the freshwater fish need active transport to maintain its salt balance? (2 marks)",
            marks: 6,
            modelAnswer:
              "(a) Seawater has a lower water potential (higher salt concentration) than the fish's body fluids. The fish's cells have higher water potential. Water therefore moves by osmosis from the fish's cells (higher WP) through cell membranes into the seawater (lower WP). Without compensation, the fish would become dehydrated.\n\n(b) Fresh water has a higher water potential (0 kPa or close to it) than the fish's cells (which contain dissolved salts and proteins). Water moves by osmosis from the fresh water (higher WP) into the fish's cells (lower WP). Without compensation, the cells would swell and potentially burst.\n\n(c) The freshwater fish constantly loses ions by diffusion down their concentration gradient (ions are more concentrated inside the fish than in the water). To maintain normal salt concentrations, ions must be reabsorbed against the concentration gradient — from the dilute water into the body fluids. This requires active transport, using ATP and carrier proteins in the gill cells, to pump ions back in.",
            markScheme: [
              "(a) Seawater has lower WP than fish cells → water moves out of cells by osmosis (2 marks)",
              "(b) Fresh water has higher WP than fish cells → water enters cells by osmosis (2 marks)",
              "(c) Ions more concentrated inside fish than in fresh water → gradient favours ion loss by diffusion → must reabsorb against gradient → requires active transport / ATP (2 marks)",
            ],
            commonError: "Confusing direction of osmosis — always move from higher to lower water potential, regardless of the organism's 'needs'.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "challenge",
            hints: [
              "Compare WP for each scenario: seawater vs. fish cells; fresh water vs. fish cells.",
              "Water moves from higher WP to lower WP by osmosis.",
              "Ion loss in fresh water: gradient direction → diffusion out → need active transport to compensate.",
            ],
          },
          {
            id: "bio-transport-cell-bq4-05",
            question: "A scientist studies cells from two organs: A (a gland that secretes digestive enzymes) and B (a kidney tubule cell). She finds that organ A cells have far more rough endoplasmic reticulum and Golgi apparatus, while organ B cells have far more mitochondria and carrier proteins on the cell membrane facing the tubule.\n(a) Suggest why organ A cells have more rough ER and Golgi. (2 marks)\n(b) Explain why organ B cells need more mitochondria and carrier proteins. (3 marks)\n(c) Both cell types have many mitochondria compared to red blood cells. Explain why red blood cells need very few mitochondria. (2 marks)",
            marks: 7,
            modelAnswer:
              "(a) Rough ER is the site of synthesis of proteins (by ribosomes on its surface) — including secretory proteins such as digestive enzymes. The Golgi apparatus processes, packages, and transports proteins for secretion by exocytosis. Organ A cells (a digestive gland) produce large amounts of protein enzymes for secretion, so they need extensive rough ER for synthesis and Golgi for packaging.\n\n(b) Kidney tubule cells reabsorb useful substances (e.g. glucose, ions) from the filtrate back into the blood — often against the concentration gradient. This requires active transport. More mitochondria produce more ATP by aerobic respiration to power the carrier proteins. More carrier proteins embedded in the cell membrane facing the tubule allow more simultaneous active transport events, increasing reabsorption rate.\n\n(c) Red blood cells do not perform active transport or secrete proteins — their main function is carrying oxygen (using haemoglobin, which is made during development and not continuously replaced). They also have no nucleus. They obtain energy primarily by anaerobic respiration (glycolysis), which requires no mitochondria. Mitochondria are therefore not needed in red blood cells.",
            markScheme: [
              "(a) Rough ER: ribosomes synthesise proteins (enzymes) (1 mark); Golgi: packages for secretion (1 mark)",
              "(b) Mitochondria: produce ATP for active transport (1 mark); carrier proteins: pump substances against gradient from tubule to blood (1 mark); more mitochondria + carriers = higher rate of reabsorption (1 mark)",
              "(c) Red blood cells: no active transport / no protein secretion / obtain energy by anaerobic glycolysis (1 mark); therefore do not need mitochondria (1 mark)",
            ],
            commonError: "In (c), saying red blood cells 'do not need energy' — they do use energy (for maintaining ion gradients by membrane pumps at low level), but gain it anaerobically without mitochondria.",
            guideRef: "Active Transport",
            difficulty: "challenge",
            hints: [
              "Rough ER: protein synthesis. Golgi: packaging. Link to the gland's function.",
              "Kidney tubule: active transport needs ATP and carrier proteins.",
              "Red blood cells: what is their main function? Do they need mitochondria for that?",
            ],
          },
          {
            id: "bio-transport-cell-bq4-06",
            question: "A student places onion epidermal cells in a 0.3 mol/dm³ sucrose solution and observes them under a microscope. She notes that the cells look slightly shrunken and the membrane appears to be just touching the wall.\n(a) What term describes this state? (1 mark)\n(b) The student increases the sucrose concentration to 0.8 mol/dm³. Describe and explain what she would observe. (3 marks)\n(c) The student adds distilled water to the 0.8 mol/dm³ cells and observes them again. Describe and explain what happens. (2 marks)",
            marks: 6,
            modelAnswer:
              "(a) Incipient plasmolysis / flaccid (the membrane just touching the wall with very low turgor — this is the boundary state).\n\n(b) In 0.8 mol/dm³ sucrose, the water potential of the external solution is much lower (more negative) than the cell contents. Water moves out of the cells by osmosis. The vacuoles shrink significantly. The cell membrane pulls away from the rigid cell wall, leaving a visible gap between the membrane and the wall — plasmolysis. The cell contents appear rounded within the cell wall boundary, and the cells look clearly shrunken.\n\n(c) Distilled water has water potential = 0 kPa, which is higher than the water potential of the plasmolysed cell contents. Water moves back into the cells by osmosis (from higher WP in distilled water to lower WP in the cells). The vacuoles re-inflate. The cell membrane is pushed back against the cell wall. Turgor pressure is restored. The cells undergo de-plasmolysis and return to approximately their original state.",
            markScheme: [
              "(a) Incipient plasmolysis / flaccid (1 mark)",
              "(b) 0.8 M: lower WP outside → water leaves by osmosis → vacuole shrinks → membrane pulls from wall (plasmolysis) (3 marks)",
              "(c) Distilled water: higher WP → water enters by osmosis → vacuole refills → membrane returns to wall / de-plasmolysis (2 marks)",
            ],
            commonError: "In (c), not explaining that water re-enters by osmosis because the WP gradient now points inward — just saying 'the cell absorbs water' is insufficient.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "challenge",
            hints: [
              "Compare WP in each step: 0.3 M, 0.8 M, and distilled water vs. cell contents.",
              "Water follows the WP gradient: in when outside > inside, out when outside < inside.",
              "Track what happens to the vacuole and membrane in each step.",
            ],
          },
          {
            id: "bio-transport-cell-bq4-07",
            question: "The table shows the rate of glucose absorption by intestinal cells at different external glucose concentrations, with and without a metabolic poison:\n\nGlucose conc (mmol/L): 0.5, 1.0, 2.0, 4.0, 8.0\nRate without poison (µmol/min): 2.0, 3.5, 6.0, 8.5, 9.0\nRate with poison (µmol/min): 0.2, 0.4, 0.8, 1.6, 3.2\n\n(a) Describe the difference in absorption rate between the two conditions at 8.0 mmol/L. (1 mark)\n(b) At high glucose concentrations (8.0 mmol/L), the rate without poison levels off (9.0 µmol/min). Suggest why. (2 marks)\n(c) Explain what the data with the poison tells us about how glucose is absorbed. (3 marks)",
            marks: 6,
            modelAnswer:
              "(a) At 8.0 mmol/L, absorption without poison (9.0 µmol/min) is approximately 2.8 times greater than with the poison (3.2 µmol/min).\n\n(b) The rate without poison levels off at 8.0 mmol/L because the carrier proteins are saturated — all carrier protein binding sites are occupied and working at maximum capacity. No matter how much more glucose is added, the rate cannot increase beyond this maximum (Vmax). This is a characteristic of enzyme/carrier protein saturation.\n\n(c) With the poison, absorption still occurs but at a much lower rate (roughly proportional to concentration, unlike the plateau seen without the poison). This indicates: (i) the majority of glucose absorption is by active transport — the poison blocks ATP production, removing the main mechanism; (ii) a small amount of glucose absorption continues with the poison, likely by facilitated diffusion (passive, ATP-independent) down the concentration gradient; (iii) the active transport component is the dominant mechanism, and it is ATP-dependent.",
            markScheme: [
              "(a) Rate without poison is ~2.8× higher than with poison at 8.0 mmol/L (accept any accurate comparison) (1 mark)",
              "(b) Carrier proteins are saturated at high concentration / all binding sites occupied / maximum rate (Vmax) reached (2 marks)",
              "(c) Poison reduces absorption → most absorption is active transport (ATP-dependent) (1 mark); some absorption continues with poison → may be facilitated diffusion (1 mark); active transport is the dominant mechanism (1 mark)",
            ],
            commonError: "In (b), saying 'all the glucose has been absorbed' — at 8.0 mmol/L there is still plenty of glucose; it is the carrier proteins that are saturated.",
            guideRef: "Active Transport",
            difficulty: "challenge",
            hints: [
              "Compare the two rates at 8.0 mmol/L numerically.",
              "Levelling off: what limits a carrier protein's rate?",
              "With poison: some absorption still occurs — what mechanism could this be?",
            ],
          },
          {
            id: "bio-transport-cell-bq4-08",
            question: "A biologist investigates how different solute concentrations affect osmosis in red blood cells. She prepares solutions of 0%, 0.3%, 0.6%, 0.9%, 1.2%, and 1.5% NaCl and places red blood cells in each for 10 minutes. She then examines cells under a microscope.\n\n(a) Predict the appearance of red blood cells in 0% NaCl and in 1.5% NaCl. (2 marks)\n(b) Explain the appearance in 0% NaCl in terms of water potential and osmosis. (3 marks)\n(c) At what NaCl concentration would red blood cells maintain their normal shape? Explain your answer. (2 marks)",
            marks: 7,
            modelAnswer:
              "(a) 0% NaCl (distilled water): red blood cells would be swollen and spherical; many may have burst (undergone haemolysis) — appearing as 'ghost cells' or debris.\n1.5% NaCl: red blood cells would be shrunken and crenated (wrinkled/spiky appearance) due to water loss by osmosis.\n\n(b) Distilled water (0% NaCl) has a water potential of 0 kPa — the highest possible. The red blood cells' interior contains dissolved haemoglobin, ions, and other solutes, giving their contents a lower (negative) water potential. Water moves by osmosis from the distilled water (higher WP) through the partially permeable cell membrane into the cells (lower WP). The cells swell as water enters. Animal cells have no cell wall to resist this expansion. If the pressure becomes too great, the cell membrane ruptures — haemolysis.\n\n(c) At approximately 0.9% NaCl. This concentration is isotonic with human blood plasma and red blood cells — the water potential of the 0.9% NaCl solution equals the water potential of the cell contents. No net osmosis occurs, so cells neither swell nor shrink and maintain their normal biconcave disc shape.",
            markScheme: [
              "(a) 0%: swollen / lysed / haemolysis / ghost cells (1 mark); 1.5%: crenated / shrunken / wrinkled (1 mark)",
              "(b) 0% NaCl: WP = 0 kPa (highest); cell contents have lower WP (1 mark)",
              "Water enters by osmosis from distilled water into cells (1 mark)",
              "No cell wall → cells swell → membrane ruptures → haemolysis (1 mark)",
              "(c) 0.9% NaCl (1 mark); isotonic — same WP as cell contents → no net osmosis → normal shape (1 mark)",
            ],
            commonError: "Not specifying the direction of water movement in (b) — must state from higher WP (distilled water) to lower WP (cell contents).",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "challenge",
            hints: [
              "0% NaCl = distilled water = highest WP → water enters cells.",
              "1.5% NaCl > cell concentration → lower WP → water leaves cells → crenation.",
              "Normal NaCl for blood cells = isotonic ≈ 0.9%.",
            ],
          },
          {
            id: "bio-transport-cell-bq4-09",
            question: "During exercise, muscles produce large amounts of CO₂ and lactic acid. Explain how CO₂ leaves the muscle cells and enters the blood, and how the rate of this exchange changes during intense exercise. Refer to diffusion factors in your answer. (5 marks)",
            marks: 5,
            modelAnswer:
              "CO₂ is produced by aerobic respiration in muscle cells during exercise. It builds up to a high concentration inside the cells. Blood flowing through the capillaries surrounding the muscle cells has a lower CO₂ concentration. This creates a concentration gradient — CO₂ diffuses from the muscle cells (higher concentration) into the blood (lower concentration) through the cell membranes.\n\nDuring intense exercise, the rate of diffusion of CO₂ increases because:\n1. Steeper concentration gradient: intense exercise produces CO₂ more rapidly, increasing its concentration inside the cells and steepening the gradient.\n2. Increased blood flow: exercise increases heart rate, so blood flows faster past the muscle cells. This carries CO₂ away rapidly, maintaining the gradient between cells and blood.\n3. Raised temperature: exercise raises muscle temperature, increasing the kinetic energy of CO₂ molecules and speeding diffusion.\n\nThese three factors together mean CO₂ is removed more efficiently during exercise, helping to maintain cellular function.",
            markScheme: [
              "CO₂ diffuses from high concentration in muscle cells to lower concentration in blood — down the concentration gradient (1 mark)",
              "Exercise: greater CO₂ production → steeper concentration gradient (1 mark)",
              "Increased blood flow: removes CO₂ faster → maintains gradient (1 mark)",
              "Higher temperature: increases kinetic energy → faster diffusion (1 mark)",
              "Link between all factors and increased rate of CO₂ removal during exercise (1 mark)",
            ],
            commonError: "Stating CO₂ is pumped out by active transport — CO₂ exits by diffusion only. Also, not linking the three diffusion factors to the specific exercise context.",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "CO₂: high in cells, low in blood → diffusion direction?",
              "Three factors that increase diffusion rate: gradient, temperature, surface area. Which apply to exercise?",
              "Increased blood flow keeps the gradient steep by removing CO₂.",
            ],
          },
          {
            id: "bio-transport-cell-bq4-10",
            question: "Extended response: Evaluate the following statement: 'The cell membrane is just a passive barrier that simply lets small molecules through.' Discuss how the actual structure and properties of the cell membrane make it more sophisticated than this description implies. Refer to diffusion, osmosis, and active transport in your answer. (6 marks)",
            marks: 6,
            modelAnswer:
              "The statement is an oversimplification and is largely incorrect. The cell membrane is a dynamic, selectively permeable structure with multiple transport roles, not just a passive barrier.\n\nFirst, the membrane is selectively permeable: it allows some substances through (e.g. water, O₂, CO₂ — small, non-polar molecules) but prevents others from passing (e.g. large molecules like glucose, proteins, and ions). This selectivity is due to the phospholipid bilayer structure — non-polar molecules dissolve through the lipid layer; ions and large molecules cannot.\n\nFor osmosis: the membrane acts as a partially permeable membrane — it allows water molecules through its pores and via channel proteins (aquaporins) but not large solute molecules. This drives osmosis (net water movement from high to low water potential), which is critical for cell volume regulation.\n\nFor facilitated diffusion: the membrane contains channel proteins that allow specific ions and polar molecules (e.g. glucose) to cross down their concentration gradient without energy. This is still passive but is highly selective — only the right molecule fits the channel protein.\n\nFor active transport: the membrane contains carrier proteins (pumps) with ATP-binding sites. These actively move substances against concentration gradients, using energy from ATP. Examples: Na⁺/K⁺ pump, glucose transport in gut epithelium and kidney. This is the opposite of a passive barrier.\n\nConclusion: the membrane is far more than a passive barrier. It is a selective, dynamic structure that mediates passive diffusion and osmosis, regulates active transport, and can alter its permeability based on cell needs.",
            markScheme: [
              "Statement is oversimplified/incorrect (1 mark)",
              "Selectively permeable: allows some molecules through, not others; based on phospholipid bilayer (1 mark)",
              "Osmosis: partially permeable — allows water not solutes; drives water regulation (1 mark)",
              "Facilitated diffusion: channel proteins — specific, passive, down gradient (1 mark)",
              "Active transport: carrier proteins + ATP — moves against gradient; opposite of passive (1 mark)",
              "Conclusion: dynamic, selective, multi-functional — not a simple passive barrier (1 mark)",
            ],
            commonError: "Only listing one or two transport mechanisms without evaluating the original statement — the question requires evaluation (is it correct/incorrect, why?).",
            guideRef: "Active Transport",
            difficulty: "challenge",
            hints: [
              "Start with your verdict: is the statement correct?",
              "Describe the membrane's roles in diffusion, osmosis, and active transport.",
              "Show that active transport is the opposite of a passive barrier.",
              "Conclude by addressing the original statement directly.",
            ],
          },
        ],
      },
    ],
  },
};
