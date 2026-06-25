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
        id: "bio-transport-cell-bank-mcq-1",
        title: "MCQ Paper 1 — Movement In & Out of Cells",
        description: "6 multiple-choice questions covering diffusion, osmosis, and active transport.",
        questions: [
          {
            id: "bio-transport-cell-bank-mcq1-q01",
            question: "A student drops a crystal of potassium manganate(VII) into still water. Over time the purple colour spreads evenly through the water. Which statement best explains this?",
            options: [
              "The crystal dissolves and then is carried by convection currents",
              "The ions move by active transport from the crystal to the water",
              "The ions diffuse from the high concentration at the crystal to lower concentrations throughout the water",
              "Osmosis moves water molecules away from the crystal",
            ],
            answerIndex: 2,
            explanation: "The spreading of the colour represents diffusion — ions move from the high concentration at the crystal down the concentration gradient to regions of lower concentration. Convection requires bulk fluid movement (A); active transport requires energy and a membrane (B); osmosis moves water, not solute (D).",
            guideRef: "Diffusion",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bank-mcq1-q02",
            question: "Which change would increase the rate of osmosis across a visking tubing membrane?",
            options: [
              "Decreasing the temperature from 30 °C to 15 °C",
              "Increasing the sucrose concentration inside the tubing",
              "Increasing the thickness of the membrane",
              "Replacing the sucrose solution with an isotonic solution",
            ],
            answerIndex: 1,
            explanation: "Increasing sucrose concentration inside the tubing lowers the water potential inside further, steepening the water potential gradient across the membrane — this drives faster osmosis. Lower temperature (A) slows movement; thicker membrane (C) increases diffusion distance, slowing it; isotonic solution (D) eliminates the gradient entirely.",
            guideRef: "Osmosis",
            difficulty: "core",
            hints: [
              "Osmosis rate depends on the water potential gradient across the membrane.",
              "Increasing solute concentration lowers water potential — what does this do to the gradient?",
              "Higher gradient = faster osmosis.",
            ],
          },
          {
            id: "bio-transport-cell-bank-mcq1-q03",
            question: "Which row correctly describes the effect of placing a red blood cell in distilled water?",
            options: [
              "Water leaves by osmosis; cell shrinks and becomes crenated",
              "Water enters by osmosis; cell swells and may undergo haemolysis",
              "Water enters by diffusion; cell becomes turgid",
              "No net water movement; cell remains unchanged",
            ],
            answerIndex: 1,
            explanation: "Distilled water has the highest water potential (0 kPa); the cell's contents have a lower (negative) water potential. Water enters by osmosis, causing the cell to swell and potentially burst — haemolysis. Crenation (A) occurs in hypertonic solutions; turgidity (C) is a plant cell term and diffusion doesn't describe this movement; no change (D) is isotonic conditions.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bank-mcq1-q04",
            question: "A cube has side length 2 mm. What is its surface area to volume ratio?",
            options: ["1", "2", "3", "4"],
            answerIndex: 2,
            explanation: "SA = 6 × 2² = 24 mm²; V = 2³ = 8 mm³; SA:V = 24/8 = 3. This confirms the formula SA:V = 6/l = 6/2 = 3.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "core",
            hints: [
              "SA of cube = 6l²",
              "Volume of cube = l³",
              "SA:V = SA ÷ V",
            ],
            strategy: "Calculate SA and V separately, then divide.",
          },
          {
            id: "bio-transport-cell-bank-mcq1-q05",
            question: "Gut epithelial cells have many mitochondria and numerous carrier proteins on their surface facing the gut lumen. Which statement best explains these features?",
            options: [
              "They enable the cells to absorb water by osmosis more rapidly",
              "They enable active transport of glucose against the concentration gradient, requiring ATP",
              "They enable diffusion of glucose down its concentration gradient",
              "They enable the cells to synthesise glucose from amino acids",
            ],
            answerIndex: 1,
            explanation: "Many mitochondria produce large amounts of ATP by respiration; carrier proteins are required for active transport. Together these features support glucose absorption against the concentration gradient — active transport. Osmosis (A) moves water, not glucose; diffusion (C) is passive and needs no mitochondria or carrier proteins; synthesis (D) is not related to transport.",
            guideRef: "Active Transport",
            difficulty: "core",
            hints: [
              "Mitochondria produce ATP. Which transport mechanism uses ATP?",
              "Carrier proteins pump specific molecules — this is active transport.",
              "Active transport is needed when absorption is against the gradient.",
            ],
          },
          {
            id: "bio-transport-cell-bank-mcq1-q06",
            question: "A plant cell has a water potential of −500 kPa. It is placed in a solution with a water potential of −300 kPa. What is the direction of net water movement, and what will happen to the cell?",
            options: [
              "Water moves into the cell; the cell becomes more turgid",
              "Water moves out of the cell; the cell becomes flaccid or plasmolysed",
              "No net water movement; the cell remains unchanged",
              "Water moves out of the cell; the cell undergoes haemolysis",
            ],
            answerIndex: 0,
            explanation: "The solution has water potential −300 kPa (higher WP); the cell has −500 kPa (lower WP). Water moves from higher WP (solution) to lower WP (cell) — into the cell. This increases the cell's volume and turgor, making it more turgid. Haemolysis (D) is a feature of animal cells without walls.",
            guideRef: "Osmosis",
            difficulty: "challenge",
            hints: [
              "Water always moves from higher (less negative) water potential to lower (more negative) water potential.",
              "Which is higher: −300 kPa or −500 kPa? Remember, −300 is less negative.",
              "If water enters a plant cell, turgor increases — the cell becomes more turgid.",
              "Haemolysis only applies to animal cells; plant cells have walls.",
            ],
            strategy: "Compare the numerical values of water potential on each side — remember that −300 > −500 on a number line.",
          },
        ],
      },
      {
        id: "bio-transport-cell-bank-mcq-2",
        title: "MCQ Paper 2 — Movement In & Out of Cells",
        description: "6 multiple-choice questions with greater emphasis on application, calculation, and synoptic links.",
        questions: [
          {
            id: "bio-transport-cell-bank-mcq2-q01",
            question: "The diagram shows a cell membrane with channel and carrier proteins. Which label represents the component used specifically during active transport (not facilitated diffusion)?",
            options: [
              "Phospholipid bilayer",
              "Channel protein (open pore)",
              "Carrier protein with ATP-binding site",
              "Cholesterol molecule",
            ],
            answerIndex: 2,
            explanation: "Active transport uses carrier proteins that require ATP to change shape and move molecules against the gradient. Channel proteins facilitate passive movement (facilitated diffusion). The phospholipid bilayer and cholesterol are structural, not transport, components.",
            guideRef: "Active Transport",
            difficulty: "core",
            hints: [
              "Active transport requires ATP — which protein has an ATP-binding site?",
              "Channel proteins allow passive movement only.",
            ],
          },
          {
            id: "bio-transport-cell-bank-mcq2-q02",
            question: "A potato cylinder initially weighs 3.0 g. After 30 minutes in sucrose solution it weighs 2.7 g. What is the % change in mass?",
            options: ["+10%", "−10%", "−0.3%", "+0.3%"],
            answerIndex: 1,
            explanation: "Change = 2.7 − 3.0 = −0.3 g. % change = (−0.3 / 3.0) × 100 = −10%. The negative sign indicates mass loss — water left the cell by osmosis (the sucrose solution had lower water potential than the cell).",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "core",
            hints: [
              "% change = (final − initial) / initial × 100",
              "A decrease in mass means water left the cell.",
              "Check the sign — negative = mass lost.",
            ],
            strategy: "Apply the formula; include the sign in the answer.",
          },
          {
            id: "bio-transport-cell-bank-mcq2-q03",
            question: "Increasing which factor would have the LEAST effect on the rate of diffusion across a cell membrane?",
            options: [
              "The steepness of the concentration gradient",
              "The surface area of the cell membrane",
              "The number of mitochondria in the cell",
              "The temperature of the environment",
            ],
            answerIndex: 2,
            explanation: "Mitochondria produce ATP for active transport, but diffusion is passive and requires no ATP — mitochondria count does not affect diffusion rate. Concentration gradient, surface area, and temperature all directly affect diffusion rate.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Which transport process uses mitochondria (ATP)?",
              "Diffusion is passive — does it need ATP?",
              "Focus on the word 'diffusion' in the question.",
            ],
          },
          {
            id: "bio-transport-cell-bank-mcq2-q04",
            question: "Two cubes are compared: cube X has side 1 cm, cube Y has side 4 cm. Which statement is correct?",
            options: [
              "Cube Y has a higher SA:V ratio than cube X",
              "Cube X has a SA:V ratio of 6 and cube Y has a SA:V ratio of 1.5",
              "Cube Y has a SA:V ratio of 6 and cube X has a SA:V ratio of 1.5",
              "Both cubes have the same SA:V ratio",
            ],
            answerIndex: 1,
            explanation: "Cube X (l=1): SA=6, V=1, SA:V=6. Cube Y (l=4): SA=6×16=96, V=64, SA:V=96/64=1.5. As size increases, SA:V decreases. Cube Y's SA:V (1.5) is much lower than cube X's (6), not higher.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "core",
            hints: [
              "Use SA = 6l² and V = l³ for each cube.",
              "SA:V = 6/l; as l increases, the ratio decreases.",
            ],
            strategy: "Calculate SA:V = 6/l directly for each cube.",
          },
          {
            id: "bio-transport-cell-bank-mcq2-q05",
            question: "A student measures oxygen uptake by yeast cells and ion uptake by root hair cells, both before and after adding a respiratory inhibitor. Which result is expected?",
            options: [
              "Both oxygen uptake and ion uptake stop after adding the inhibitor",
              "Only ion uptake stops; oxygen uptake continues by diffusion",
              "Only oxygen uptake stops; ion uptake continues by diffusion",
              "Neither stops, as both processes are passive",
            ],
            answerIndex: 1,
            explanation: "Oxygen uptake occurs by diffusion (passive, no ATP needed) — it continues regardless of the respiratory inhibitor. Ion uptake by root hair cells is by active transport (requires ATP from respiration), so it stops when respiration is inhibited. Option A is wrong because diffusion is unaffected; C reverses the two; D is wrong because ion uptake is active, not passive.",
            guideRef: "Active Transport",
            difficulty: "challenge",
            hints: [
              "Identify which process moves each substance: is it diffusion or active transport?",
              "Diffusion does not require ATP and will not be affected by a respiratory inhibitor.",
              "Active transport requires ATP — blocking respiration stops it.",
              "Ion uptake into roots is against the gradient — active transport.",
            ],
            strategy: "For each substance, determine the transport mechanism, then predict the effect of removing ATP.",
          },
          {
            id: "bio-transport-cell-bank-mcq2-q06",
            question: "A spherical bacterium has a radius of 1 µm. A spherical human egg cell has a radius of 50 µm. Approximately how many times greater is the SA:V ratio of the bacterium compared with the egg cell? (Use SA = 4πr² and V = 4/3 πr³, SA:V = 3/r)",
            options: ["5 times", "10 times", "50 times", "2500 times"],
            answerIndex: 2,
            explanation: "SA:V = 3/r for a sphere. Bacterium: 3/1 = 3 µm⁻¹. Egg cell: 3/50 = 0.06 µm⁻¹. Ratio = 3/0.06 = 50. The bacterium has 50 times the SA:V of the egg cell, reflecting why bacteria can sustain metabolism without circulatory systems.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "challenge",
            hints: [
              "SA:V for a sphere = 3/r",
              "Calculate 3/r for each cell, using the given radii.",
              "Divide the bacterium's SA:V by the egg cell's SA:V.",
              "The smaller the cell, the larger the SA:V ratio.",
            ],
            strategy: "Use the simplified formula SA:V = 3/r; compare the two values by division.",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-transport-cell-bank-qa-1",
        title: "Structured Question Paper 1 — Movement In & Out of Cells",
        description: "4 structured questions with mark schemes.",
        questions: [
          {
            id: "bio-transport-cell-bank-qa1-q01",
            question: "Describe and explain the movement of water into a plant root hair cell from soil water when the soil water has a higher water potential than the cell contents. Include the terms 'osmosis', 'partially permeable membrane', and 'water potential' in your answer. (4 marks)",
            marks: 4,
            modelAnswer:
              "Water moves from the soil water into the root hair cell by osmosis. This occurs because the soil water has a higher water potential than the cell contents (the cell contains dissolved solutes such as sugars and ions, which lower its water potential). The cell surface membrane acts as a partially permeable membrane, allowing water molecules to pass through but preventing large solute molecules from crossing. Water moves down the water potential gradient — from the soil (higher water potential) to the cell (lower water potential) — until the water potentials equalise or turgor pressure builds up inside the cell to oppose further entry.",
            markScheme: [
              "Water moves into the root hair cell by osmosis (1 mark)",
              "Water moves from higher water potential (soil) to lower water potential (cell) (1 mark)",
              "Cell membrane acts as a partially permeable membrane (1 mark)",
              "Solutes in the cell lower its water potential / cell contains dissolved substances (1 mark)",
            ],
            commonError: "Students sometimes say 'water is absorbed because the cell needs it' — this is teleological reasoning. The examiner wants a mechanistic explanation in terms of water potential gradients.",
            guideRef: "Osmosis",
            difficulty: "core",
            hints: [
              "Identify which side has higher water potential: pure soil water (0 kPa) or the solute-containing cell contents?",
              "Water always moves from higher to lower water potential through a partially permeable membrane.",
              "Name the membrane and say what it allows through.",
              "State what lowers the water potential of the cell contents.",
            ],
            strategy: "Establish the water potential gradient first, then state the mechanism (osmosis), then explain what makes the gradient exist.",
          },
          {
            id: "bio-transport-cell-bank-qa1-q02",
            question: "A student places three equal-sized potato chips in different solutions:\n- Chip A: distilled water\n- Chip B: 0.3 mol/dm³ sucrose (isotonic to potato)\n- Chip C: 1.0 mol/dm³ sucrose\n\n(a) Predict the % change in mass for each chip. (3 marks)\n(b) Explain the result for chip C in terms of osmosis and water potential. (3 marks)\n(c) Explain why the student should measure % change in mass rather than change in mass. (1 mark)",
            marks: 7,
            modelAnswer:
              "(a) Chip A: positive % change (gains mass), e.g. +10–15%, because distilled water has higher water potential than the potato cells.\nChip B: approximately 0% change, because the solution is isotonic — water potentials are equal on both sides.\nChip C: negative % change (loses mass), e.g. −15–20%, because the concentrated sucrose solution has a lower water potential than the potato cells.\n\n(b) The 1.0 mol/dm³ sucrose solution has a very low (highly negative) water potential because many solute particles are dissolved, reducing the proportion of free water molecules. The water potential of the potato cell contents is higher than that of the surrounding solution. Therefore, water moves from the potato cells (higher WP) to the sucrose solution (lower WP) by osmosis, through the partially permeable cell membrane. The cells lose water, the vacuoles shrink, and the chip loses mass.\n\n(c) Using % change in mass corrects for any small differences in the initial mass of the chips, making the results comparable and the experiment fair.",
            markScheme: [
              "(a) Chip A: positive % change / gains mass (1 mark)",
              "Chip B: approximately 0% / no change (1 mark)",
              "Chip C: negative % change / loses mass (1 mark)",
              "(b) Sucrose solution has low/more negative water potential due to dissolved solutes (1 mark)",
              "Water moves from cell (higher WP) to solution (lower WP) by osmosis (1 mark)",
              "Cells lose water → chip loses mass (1 mark)",
              "(c) % change corrects for/controls for variation in initial mass of chips / allows fair comparison (1 mark)",
            ],
            commonError: "Many students explain chip B correctly but fail to link the 0% change to equal water potentials on both sides — they say 'the cell doesn't need water', which is not a valid scientific explanation.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "core",
            hints: [
              "For each chip, compare water potentials of the solution and the cell contents.",
              "Water moves from higher to lower WP — predict which way it goes in each chip.",
              "For chip C, explain why 1.0 mol/dm³ has a very low water potential.",
              "% change removes bias from chips of slightly different initial sizes.",
            ],
            strategy: "For each chip: (1) compare WP, (2) state direction of water movement, (3) predict mass change.",
          },
          {
            id: "bio-transport-cell-bank-qa1-q03",
            question: "Explain how active transport differs from diffusion. Your answer should refer to: direction of movement relative to the concentration gradient, energy requirement, and the role of proteins. (5 marks)",
            marks: 5,
            modelAnswer:
              "Diffusion involves the net movement of particles from a region of higher concentration to a region of lower concentration — it moves down the concentration gradient. It is a passive process that requires no energy input (no ATP). Although channel proteins may assist some molecules across the membrane (facilitated diffusion), simple diffusion requires no proteins.\n\nActive transport involves the movement of molecules or ions against the concentration gradient — from a region of lower concentration to a region of higher concentration. It is an active process that requires energy in the form of ATP, produced by cellular respiration. Specific carrier proteins are essential; they bind to the target molecule, use ATP to change shape, and release the molecule on the other side of the membrane.\n\nIn summary: diffusion (passive, down gradient, no ATP, no obligatory protein) versus active transport (active, against gradient, ATP required, carrier proteins essential).",
            markScheme: [
              "Diffusion: down concentration gradient / high to low (1 mark)",
              "Active transport: against concentration gradient / low to high (1 mark)",
              "Diffusion: passive / no energy / no ATP required (1 mark)",
              "Active transport: requires energy / ATP from respiration (1 mark)",
              "Active transport: requires carrier proteins; diffusion does not require carrier proteins (accept: channel proteins assist facilitated diffusion) (1 mark)",
            ],
            commonError: "Students often confuse 'facilitated diffusion' (passive, channel proteins, down gradient) with active transport (active, carrier proteins, against gradient). Make sure to specify carrier proteins for active transport.",
            guideRef: "Active Transport",
            difficulty: "core",
            hints: [
              "Think of a table: rows = diffusion, active transport; columns = gradient direction, energy, protein.",
              "Active transport: low → high concentration (against the gradient).",
              "Diffusion: high → low concentration (with the gradient).",
              "Only active transport uses ATP and requires carrier proteins.",
            ],
            strategy: "Structure your answer in two halves — first describe diffusion, then contrast with active transport for each criterion.",
          },
          {
            id: "bio-transport-cell-bank-qa1-q04",
            question: "A student models osmosis using visking tubing filled with 1.0 mol/dm³ glucose solution, with a capillary tube attached. The apparatus is placed in a beaker of distilled water.\n(a) Predict what the student will observe in the capillary tube after 20 minutes. (1 mark)\n(b) Explain this observation using your knowledge of osmosis. (3 marks)\n(c) The experiment is repeated but the visking tubing is placed in 1.0 mol/dm³ glucose solution instead of distilled water. Predict and explain the result. (2 marks)",
            marks: 6,
            modelAnswer:
              "(a) The liquid level in the capillary tube will rise.\n\n(b) The distilled water has a water potential of 0 kPa (highest possible). The glucose solution inside the tubing has a lower water potential (negative, because glucose solute lowers it). Water moves by osmosis from the distilled water (higher water potential) through the visking tubing (which acts as a partially permeable membrane, allowing water but not glucose molecules to pass) into the glucose solution (lower water potential). This increases the volume of liquid inside the tubing, pushing the fluid up the capillary tube.\n\n(c) The liquid level in the capillary tube will not rise (or will show no significant change). The glucose solution in the beaker has the same concentration (1.0 mol/dm³) as the solution inside the tubing, so the water potentials are equal on both sides. There is no water potential gradient, so there is no net movement of water by osmosis.",
            markScheme: [
              "(a) Liquid level rises in the capillary tube (1 mark)",
              "(b) Distilled water has higher water potential (0 kPa) than glucose solution (1 mark)",
              "Water moves by osmosis from distilled water into glucose solution through visking tubing (partially permeable membrane) (1 mark)",
              "Increased volume inside tubing pushes liquid up capillary tube (1 mark)",
              "(c) No change in liquid level (1 mark); equal concentrations on both sides means no water potential gradient / no net osmosis (1 mark)",
            ],
            commonError: "Students sometimes say water 'wants to dilute the glucose' — this is anthropomorphic. Use water potential language: water moves from higher to lower water potential.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "core",
            hints: [
              "Distilled water has water potential = 0 kPa. What is the water potential of the glucose solution?",
              "Water always moves from higher to lower water potential through a partially permeable membrane.",
              "More water inside = more volume = liquid rises in the capillary tube.",
              "For part (c): compare water potentials on each side when both solutions have the same concentration.",
            ],
            strategy: "Always state the water potential on each side before explaining the direction of water movement.",
          },
        ],
      },
      {
        id: "bio-transport-cell-bank-qa-2",
        title: "Structured Question Paper 2 — Movement In & Out of Cells (Extended & Challenge)",
        description: "4 structured questions including challenge and synoptic questions.",
        questions: [
          {
            id: "bio-transport-cell-bank-qa2-q01",
            question: "Calculate the surface area to volume ratio for the following cells, showing all working:\n(a) A cube-shaped cell with side length 10 µm. (2 marks)\n(b) A spherical cell with radius 5 µm. (Use SA = 4πr² and V = 4/3 πr³, and give your answer to 2 significant figures.) (3 marks)\n(c) Explain why a cell cannot continue to grow indefinitely. (2 marks)",
            marks: 7,
            modelAnswer:
              "(a) SA = 6 × (10)² = 6 × 100 = 600 µm²; V = 10³ = 1000 µm³; SA:V = 600/1000 = 0.6 (µm⁻¹)\n\n(b) SA = 4π × 5² = 4π × 25 = 100π ≈ 314.2 µm²\nV = 4/3 × π × 5³ = 4/3 × π × 125 = 500π/3 ≈ 523.6 µm³\nSA:V = 314.2 / 523.6 ≈ 0.60 µm⁻¹ (to 2 s.f.)\n\n(c) As a cell grows, its volume increases faster than its surface area (volume ∝ r³; surface area ∝ r²). The SA:V ratio decreases, meaning there is less surface area per unit of cytoplasm across which substances can diffuse. The rate of supply of oxygen and nutrients by diffusion becomes too slow to meet the metabolic demands of the cell's increasing volume, so growth must stop and the cell divides.",
            markScheme: [
              "(a) SA = 600 µm² (1 mark); SA:V = 0.6 with correct working (1 mark)",
              "(b) SA = 4π × 25 = 100π (≈ 314 µm²) (1 mark); V = 500π/3 (≈ 524 µm³) (1 mark); SA:V ≈ 0.60 (1 mark)",
              "(c) Volume increases faster than surface area as cell grows / SA:V ratio falls (1 mark)",
              "Diffusion rate insufficient to supply all cytoplasm / cell divides before growing too large (1 mark)",
            ],
            commonError: "Students forget to include units or confuse SA:V with V:SA. Also, not showing working for the sphere calculation loses marks.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "challenge",
            hints: [
              "For a cube: SA = 6l², V = l³, SA:V = 6/l.",
              "For a sphere: SA = 4πr², V = (4/3)πr³. Substitute r = 5.",
              "To find SA:V, divide SA by V — the π cancels.",
              "For part (c): think about what limits how quickly nutrients reach the centre of the cell.",
            ],
            strategy: "Show all substitution steps; include units throughout; state the formula before substituting values.",
            solutions: [
              {
                label: "Method: Cube (a)",
                steps: [
                  "SA = 6 × l² = 6 × 10² = 600 µm²",
                  "V = l³ = 10³ = 1000 µm³",
                  "SA:V = 600 / 1000 = 0.6 µm⁻¹",
                ],
              },
              {
                label: "Method: Sphere (b)",
                steps: [
                  "SA = 4π × r² = 4π × 25 = 100π ≈ 314.2 µm²",
                  "V = (4/3)π × r³ = (4/3)π × 125 = 500π/3 ≈ 523.6 µm³",
                  "SA:V = 314.2 / 523.6 ≈ 0.60 µm⁻¹",
                  "Note: SA:V = 3/r = 3/5 = 0.6 (quick check using the sphere formula SA:V = 3/r)",
                ],
              },
            ],
          },
          {
            id: "bio-transport-cell-bank-qa2-q02",
            question: "The diagram (imagine it) shows a plant cell before and after being placed in a solution. Before: the cell is turgid with the vacuole filling most of the cell. After: the cell appears plasmolysed.\n(a) What type of solution (hypotonic, isotonic, hypertonic) was the cell placed in? Explain your answer. (2 marks)\n(b) Describe the changes that occurred inside the cell as it went from turgid to plasmolysed. (3 marks)\n(c) Suggest one practical significance of plasmolysis for a plant. (1 mark)\n(d) Describe how you could reverse the plasmolysis, and explain why this works. (2 marks)",
            marks: 8,
            modelAnswer:
              "(a) Hypertonic solution — the solution has a higher concentration of solutes (lower water potential) than the cell contents. Water moved out of the cell by osmosis, causing it to shrink.\n\n(b) Water left the vacuole and the cytoplasm by osmosis, moving down the water potential gradient to the more concentrated external solution. The vacuole shrank. The turgor pressure inside the cell decreased, eventually reaching zero. As water continued to leave, the cell membrane pulled away from the rigid cell wall, leaving a gap — plasmolysis.\n\n(c) Plasmolysis causes wilting in plants — the plant loses structural support because turgor pressure has fallen to zero. This can lead to death of the plant if the concentrated conditions persist (e.g. over-fertilisation, drought).\n\n(d) Place the plasmolysed cell in distilled water (or a dilute solution with higher water potential than the cell contents). Water will enter the cell by osmosis (moving from the higher WP outside to the lower WP of the shrunken cell). The vacuole re-fills, the membrane is pushed back against the wall, and turgor pressure is restored — the cell returns to the turgid state.",
            markScheme: [
              "(a) Hypertonic (1 mark); solution has lower water potential than cell / solution is more concentrated (1 mark)",
              "(b) Water leaves vacuole and cytoplasm by osmosis (1 mark); turgor pressure falls to zero (1 mark); cell membrane pulls away from cell wall (plasmolysis) (1 mark)",
              "(c) Any one valid consequence: wilting, loss of support, crop damage from over-fertilisation (1 mark)",
              "(d) Place in water / dilute solution (1 mark); water enters by osmosis because external WP now higher / vacuole refills / turgor restored (1 mark)",
            ],
            commonError: "Confusing 'flaccid' (low turgor, membrane still touching wall) with 'plasmolysed' (membrane pulled completely away from wall). Plasmolysis is an extreme, not just wilting.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "core",
            hints: [
              "If water left the cell, which side had lower water potential?",
              "Track what happens to the vacuole, turgor pressure, and membrane position step by step.",
              "Think about what plasmolysis means for a plant's ability to stand upright.",
              "To reverse: change the water potential gradient so water re-enters.",
            ],
            strategy: "Work through the sequence of changes step by step; use the terms 'water potential', 'turgor pressure', and 'cell wall' in your answers.",
          },
          {
            id: "bio-transport-cell-bank-qa2-q03",
            question: "A scientist investigates uptake of sodium ions (Na+) by gut epithelial cells. She measures Na+ concentration inside the cells and in the gut lumen over time, while varying oxygen supply.\n\n(a) The Na+ concentration inside the cells is always higher than in the gut lumen. Explain which transport process is responsible for Na+ uptake, and give reasons for your choice. (3 marks)\n(b) The scientist reduces oxygen supply to the cells. Predict and explain the effect on Na+ uptake. (3 marks)\n(c) The cells have a very large number of mitochondria and a folded inner surface (microvilli). Explain how each adaptation improves Na+ uptake. (4 marks)",
            marks: 10,
            modelAnswer:
              "(a) Na+ is moving from a region of lower concentration (gut lumen) to a region of higher concentration (inside the cells) — against the concentration gradient. This is active transport. Evidence: (i) movement is against the gradient; (ii) gut epithelial cells have many mitochondria (producing ATP) and carrier proteins; (iii) the process would be expected to stop if respiration is inhibited.\n\n(b) Reducing oxygen limits aerobic respiration. Less oxygen means less ATP is produced by the mitochondria. Active transport of Na+ requires ATP to power the carrier proteins. Without sufficient ATP, the carrier proteins cannot function properly, and Na+ uptake will decrease significantly (or stop).\n\n(c) Many mitochondria: mitochondria are the site of aerobic respiration, producing large amounts of ATP. Active transport of Na+ requires ATP — more mitochondria = more ATP available = higher rate of active transport sustained.\n\nMicrovilli: microvilli greatly increase the surface area of the cell membrane facing the gut lumen. A larger surface area means more carrier proteins can be accommodated, so more Na+ can be transported per unit time — increasing the overall rate of uptake.",
            markScheme: [
              "(a) Active transport (1 mark); movement is against/up the concentration gradient (1 mark); requires ATP / carrier proteins (1 mark)",
              "(b) Less O2 → less aerobic respiration → less ATP produced (1 mark); active transport requires ATP (1 mark); Na+ uptake decreases/stops (1 mark)",
              "(c) Mitochondria: produce ATP by respiration; more mitochondria = more ATP for active transport (2 marks)",
              "Microvilli: increase surface area; more carrier proteins can fit; higher rate of Na+ transport (2 marks)",
            ],
            commonError: "Students sometimes say 'mitochondria produce energy' — be precise: mitochondria produce ATP (adenosine triphosphate), which is the molecule used directly by carrier proteins.",
            guideRef: "Active Transport",
            difficulty: "challenge",
            hints: [
              "Compare the concentrations: Na+ higher inside the cell — which direction is that relative to the gradient?",
              "Against the gradient = active transport; with the gradient = diffusion.",
              "Respiration produces ATP. If O2 is reduced, what happens to aerobic respiration and ATP output?",
              "More surface area = more space for carrier proteins = faster transport rate.",
            ],
            strategy: "For each point: state the feature → state what it does biochemically → link directly to the transport mechanism and rate.",
          },
          {
            id: "bio-transport-cell-bank-qa2-q04",
            question: "Extended response: A student claims that 'all movement of substances in and out of cells is by diffusion'. Evaluate this claim by describing diffusion, osmosis, and active transport. Include evidence that would show the student's claim is incorrect. (6 marks)",
            marks: 6,
            modelAnswer:
              "The claim is incorrect — while diffusion is important, it is not the only mechanism.\n\nDiffusion is the net movement of particles from a region of higher concentration to a region of lower concentration, driven by random motion. It is passive and requires no energy. Examples include oxygen diffusing from the alveoli into the blood and carbon dioxide leaving cells.\n\nOsmosis is distinct from diffusion — it is specifically the net movement of water molecules from higher water potential to lower water potential through a partially permeable membrane. Although it is also passive, it is not the same as diffusion; it concerns only water and requires a partially permeable membrane.\n\nActive transport is fundamentally different from diffusion: it moves substances against the concentration gradient (from low to high concentration), requires ATP from respiration, and uses carrier proteins. Evidence against the student's claim: (i) root hair cells absorb mineral ions from soil water where ion concentration is lower than in the cell — this is against the gradient, impossible by diffusion; (ii) blocking respiration (removing ATP) stops ion uptake but does not stop diffusion, proving the two processes are different; (iii) glucose continues to be absorbed in the gut even when gut lumen concentration falls below that of the blood — again impossible by diffusion alone.",
            markScheme: [
              "Diffusion correctly described: high to low concentration, passive, no energy (1 mark)",
              "Osmosis distinguished from diffusion: water, water potential, partially permeable membrane (1 mark)",
              "Active transport: against concentration gradient, requires ATP, carrier proteins (1 mark)",
              "Evidence 1: mineral ion uptake by root hairs against gradient — impossible by diffusion (1 mark)",
              "Evidence 2: inhibiting respiration stops active transport but not diffusion (1 mark)",
              "Clear conclusion: all three are distinct mechanisms; diffusion alone cannot explain all transport (1 mark)",
            ],
            commonError: "Students give correct descriptions of the three processes but forget to directly evaluate the claim — the question asks you to say whether the student is right or wrong, and to use evidence.",
            guideRef: "Active Transport",
            difficulty: "challenge",
            hints: [
              "Start by stating clearly whether the claim is correct or incorrect.",
              "Describe each of the three mechanisms, contrasting them with diffusion.",
              "Find at least two specific pieces of evidence that prove active transport (not diffusion) is occurring.",
              "A good evaluative answer always returns to the original claim in the conclusion.",
            ],
            strategy: "Structure: state your verdict → describe diffusion → contrast osmosis → contrast active transport → cite evidence → conclude.",
          },
        ],
      },
    ],
  },
};
