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
        description: "Diffusion and its factors, with osmosis and active transport fundamentals.",
        questions: [
          {
            id: "bio-transport-cell-bm1-01",
            question: "Which of these processes is best described as passive — requiring no energy from the cell?",
            options: [
              "Active transport of ions into a root hair cell",
              "Diffusion of carbon dioxide out of a respiring cell",
              "Pumping of glucose against its concentration gradient",
              "Uptake of nitrate ions by a carrier protein using ATP",
            ],
            answerIndex: 1,
            explanation: "Diffusion is passive: it is driven by the random motion of particles and the concentration gradient, with no energy input from the cell. The other three all describe active transport, which requires ATP and carrier proteins.",
            guideRef: "Diffusion",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bm1-02",
            question: "Particles move during diffusion until equilibrium is reached. What is meant by equilibrium?",
            options: [
              "All the particles have stopped moving",
              "The concentration is equal on both sides and there is no net movement",
              "All particles have moved to the side that started with the lower concentration",
              "The membrane has become impermeable to the particles",
            ],
            answerIndex: 1,
            explanation: "At equilibrium the concentration is the same in both regions, so there is no NET movement. Particles still move randomly in both directions — they do not stop moving (A is wrong) — but the crossings balance out.",
            guideRef: "Diffusion",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bm1-03",
            question: "A cell membrane separates a region of high oxygen concentration from a region of low oxygen concentration. Which change would slow the rate of diffusion of oxygen across it?",
            options: [
              "Increasing the temperature",
              "Increasing the surface area of the membrane",
              "Increasing the thickness of the membrane",
              "Increasing the difference in oxygen concentration across it",
            ],
            answerIndex: 2,
            explanation: "A thicker membrane means a longer diffusion distance, which slows the net movement of particles. Higher temperature, larger surface area, and a steeper concentration gradient all INCREASE the rate of diffusion.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "List the four factors that affect diffusion rate and the direction of each effect.",
              "Three of these options would speed diffusion up.",
              "Diffusion distance (thickness) has the opposite effect to the others — longer distance is slower.",
            ],
          },
          {
            id: "bio-transport-cell-bm1-04",
            question: "Why does raising the temperature increase the rate of diffusion?",
            options: [
              "Particles gain kinetic energy and move faster and more randomly",
              "The concentration gradient becomes steeper at higher temperatures",
              "Carrier proteins work faster when warmed",
              "The membrane develops more pores at higher temperatures",
            ],
            answerIndex: 0,
            explanation: "Higher temperature gives particles more kinetic energy, so they move faster and collide more — increasing the rate at which they spread down the gradient. Diffusion does not use carrier proteins (C), and temperature does not change the gradient itself (B) or create pores (D).",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Think about what temperature does to the energy of individual particles.",
              "Faster, more random particle movement means faster spreading.",
              "Diffusion is passive — it does not involve proteins.",
            ],
          },
          {
            id: "bio-transport-cell-bm1-05",
            question: "Which biological example is an instance of diffusion?",
            options: [
              "Mineral ions absorbed from dilute soil water into root hair cells",
              "Glucose absorbed from the gut against its concentration gradient",
              "Carbon dioxide passing from a respiring muscle cell into the blood plasma",
              "Water moving into a plant cell through its partially permeable membrane",
            ],
            answerIndex: 2,
            explanation: "Carbon dioxide is at a higher concentration inside a respiring cell than in the blood, so it diffuses out down its gradient — this is diffusion. A and B are active transport (against the gradient); D is osmosis (movement of water).",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Diffusion moves particles (not water) down a concentration gradient with no energy.",
              "Rule out anything that moves against the gradient — that is active transport.",
              "Movement of water across a membrane is osmosis, not diffusion.",
            ],
          },
          {
            id: "bio-transport-cell-bm1-06",
            question: "Osmosis is best defined as the net movement of water molecules:",
            options: [
              "From a lower to a higher water potential through any membrane",
              "From a higher to a lower water potential through a partially permeable membrane",
              "From a higher to a lower solute concentration through a partially permeable membrane",
              "Against a water potential gradient, using energy from respiration",
            ],
            answerIndex: 1,
            explanation: "Osmosis is the net movement of water molecules from a region of higher water potential to a region of lower water potential, through a partially permeable membrane. Option C swaps water potential for solute concentration incorrectly; osmosis is passive, so D is wrong.",
            guideRef: "Osmosis",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bm1-07",
            question: "A partially permeable membrane separates pure water from a concentrated sugar solution. In which direction does water move, and why?",
            options: [
              "Toward the pure water, because it has the lower water potential",
              "Toward the sugar solution, because it has the lower water potential",
              "Toward the sugar solution, because sugar attracts water molecules through the membrane",
              "There is no net movement, because sugar cannot cross the membrane",
            ],
            answerIndex: 1,
            explanation: "Pure water has the highest water potential (0 kPa); the sugar solution has a lower (more negative) water potential. Water moves from high WP to low WP — into the sugar solution. The driving idea is the water potential gradient, not sugar 'attracting' water (C is a common misconception).",
            guideRef: "Osmosis",
            difficulty: "core",
            hints: [
              "Pure water has the highest possible water potential, defined as 0 kPa.",
              "Adding solute lowers (makes more negative) the water potential.",
              "Water always moves from higher to lower water potential.",
            ],
          },
          {
            id: "bio-transport-cell-bm1-08",
            question: "Active transport differs from diffusion because active transport:",
            options: [
              "Moves substances down the concentration gradient without energy",
              "Moves substances against the concentration gradient using ATP and carrier proteins",
              "Only moves water molecules across a partially permeable membrane",
              "Occurs faster at lower temperatures",
            ],
            answerIndex: 1,
            explanation: "Active transport moves substances against their concentration gradient (low to high), requiring energy from respiration (ATP) and carrier proteins. Option A describes diffusion; C describes osmosis; D is incorrect because lower temperature reduces respiration and ATP supply.",
            guideRef: "Active Transport",
            difficulty: "core",
            hints: [
              "Compare the direction of movement relative to the gradient.",
              "Only one of these processes needs energy and carrier proteins.",
              "Active transport goes against the gradient (low to high).",
            ],
          },
          {
            id: "bio-transport-cell-bm1-09",
            question: "A scientist measures the rate of nitrate ion uptake by root cells with and without oxygen supplied. Without oxygen, uptake almost stops. What is the best explanation?",
            options: [
              "Without oxygen, diffusion of nitrate ions can no longer occur",
              "Without oxygen, less ATP is produced by respiration, so active transport slows",
              "Without oxygen, the nitrate ions become too large to cross the membrane",
              "Without oxygen, the concentration gradient of nitrate reverses",
            ],
            answerIndex: 1,
            explanation: "Nitrate uptake into root cells is by active transport, which needs ATP from aerobic respiration. Removing oxygen reduces ATP supply, so the carrier proteins cannot pump ions and uptake slows. The dependence on oxygen is evidence the process is active transport, not diffusion.",
            guideRef: "Active Transport",
            difficulty: "challenge",
            hints: [
              "Which transport process moves ions into root cells against the gradient?",
              "Active transport needs ATP — where does ATP come from?",
              "Oxygen is needed for aerobic respiration, which makes most ATP.",
              "If ATP falls, the carrier proteins cannot work.",
            ],
            strategy: "When a process is sensitive to oxygen or respiratory inhibitors, it is energy-dependent — a signature of active transport.",
          },
          {
            id: "bio-transport-cell-bm1-10",
            question: "Two flasks of bromine vapour are opened, one at 10 °C and one at 40 °C. The brown vapour spreads to fill each flask. Which prediction is correct and why?",
            options: [
              "It spreads faster at 10 °C because cold particles are denser",
              "It spreads faster at 40 °C because particles have more kinetic energy",
              "It spreads at the same rate because diffusion does not depend on temperature",
              "It spreads faster at 40 °C because the concentration gradient is steeper",
            ],
            answerIndex: 1,
            explanation: "At 40 °C the bromine particles have greater kinetic energy, moving faster and more randomly, so diffusion is faster. Temperature does affect diffusion (so C is wrong), and the starting gradient is the same in both flasks (so D is wrong).",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "Does temperature affect the rate of diffusion?",
              "Higher temperature means more kinetic energy per particle.",
              "The initial concentration gradient is the same in both flasks.",
              "Faster particle movement means faster spreading to fill the flask.",
            ],
            strategy: "Hold all factors constant except the one being tested (here, temperature) to identify its effect.",
          },
        ],
      },
      {
        id: "bio-transport-cell-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Osmosis in plant and animal cells, turgor, plasmolysis and water potential reasoning.",
        questions: [
          {
            id: "bio-transport-cell-bm2-01",
            question: "What term describes a plant cell that has taken in water until its vacuole pushes firmly against the cell wall?",
            options: ["Flaccid", "Plasmolysed", "Turgid", "Crenated"],
            answerIndex: 2,
            explanation: "A cell full of water with the vacuole pressing the cytoplasm against the wall is turgid. Flaccid and plasmolysed describe cells that have lost water; crenation is an animal-cell term.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bm2-02",
            question: "Why does an animal cell burst in pure water, while a plant cell in the same conditions does not?",
            options: [
              "Animal cells have a larger surface area to volume ratio",
              "Plant cells have a rigid cell wall that resists swelling",
              "Animal cells absorb water by active transport",
              "Plant cells have no water potential gradient with pure water",
            ],
            answerIndex: 1,
            explanation: "Both cells take in water by osmosis, but the plant cell's rigid cellulose cell wall resists the swelling and exerts an inward pressure that stops the cell bursting. An animal cell has no wall, so it swells and may undergo haemolysis.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bm2-03",
            question: "Red blood cells are placed in three solutions: distilled water, 0.9% saline, and concentrated saline. Which row correctly matches solution to outcome?",
            options: [
              "Distilled water → crenation; 0.9% saline → no change; concentrated saline → haemolysis",
              "Distilled water → haemolysis; 0.9% saline → no change; concentrated saline → crenation",
              "Distilled water → no change; 0.9% saline → haemolysis; concentrated saline → crenation",
              "Distilled water → crenation; 0.9% saline → haemolysis; concentrated saline → no change",
            ],
            answerIndex: 1,
            explanation: "In distilled water (highest WP) water enters and cells burst — haemolysis. In 0.9% saline (isotonic with plasma) there is no net movement. In concentrated saline water leaves and cells shrink and wrinkle — crenation.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "core",
            hints: [
              "Distilled water has the highest water potential — which way does water move?",
              "0.9% saline matches the water potential of blood plasma (isotonic).",
              "Concentrated saline has a lower water potential than the cell.",
            ],
          },
          {
            id: "bio-transport-cell-bm2-04",
            question: "A wilting houseplant becomes firm and upright again a few hours after being watered. Which explanation is correct?",
            options: [
              "Active transport pumps water into the cells, restoring shape",
              "Water enters the cells by osmosis, making them turgid again",
              "The cell walls expand to take up more water",
              "Mineral ions diffuse into the leaves and stiffen them",
            ],
            answerIndex: 1,
            explanation: "Watering raises the water potential of the soil/cell surroundings. Water enters the cells by osmosis, refilling the vacuoles so the cells become turgid again and the plant regains its rigidity. Osmosis is passive — no active transport of water occurs.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "core",
            hints: [
              "Wilting is loss of turgor; recovery is regaining turgor.",
              "What process moves water into plant cells?",
              "Turgid cells give non-woody plants their support.",
            ],
          },
          {
            id: "bio-transport-cell-bm2-05",
            question: "Strips of fresh beetroot are placed in a strong salt solution. After 20 minutes they are limp and have lost mass. What has happened at the cellular level?",
            options: [
              "Water entered the cells by osmosis, making them turgid",
              "Water left the cells by osmosis, making them flaccid or plasmolysed",
              "Salt entered the cells by diffusion, increasing their mass",
              "Active transport pumped water out of the cells",
            ],
            answerIndex: 1,
            explanation: "The salt solution has a lower water potential than the cell contents, so water leaves the cells by osmosis. The cells lose turgor and become flaccid (membrane may pull away from the wall — plasmolysis), so the strips become limp and lose mass.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "core",
            hints: [
              "Compare the water potential of strong salt solution with the cell contents.",
              "Loss of mass means water has left the cells.",
              "Water leaving plant cells causes loss of turgor.",
            ],
          },
          {
            id: "bio-transport-cell-bm2-06",
            question: "Which statement about turgor pressure is correct?",
            options: [
              "It is the inward pull of the cell wall on the cytoplasm",
              "It is the outward pressure of the cell contents pushing on the cell wall",
              "It occurs only in animal cells without a cell wall",
              "It increases as a plant cell loses water and becomes flaccid",
            ],
            answerIndex: 1,
            explanation: "Turgor pressure is the outward pressure exerted by the swollen vacuole and cytoplasm pushing against the cell wall. It is a plant-cell feature (so C is wrong) and increases as the cell gains water, not loses it (so D is wrong).",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bm2-07",
            question: "A plant cell with water potential −800 kPa is placed in a sucrose solution of water potential −400 kPa. What happens?",
            options: [
              "Water leaves the cell; it becomes flaccid",
              "Water enters the cell; it becomes more turgid",
              "No net movement; the cell is at equilibrium",
              "The cell bursts as water rushes in",
            ],
            answerIndex: 1,
            explanation: "The solution (−400 kPa) has a higher water potential than the cell (−800 kPa). Water moves from high WP to low WP — into the cell — increasing its turgor. A plant cell cannot burst because the cell wall resists the swelling.",
            guideRef: "Osmosis",
            difficulty: "challenge",
            hints: [
              "Which value is higher (less negative): −400 or −800 kPa?",
              "Water moves from higher to lower water potential.",
              "Higher WP is the solution here, so water moves into the cell.",
              "Plant cell walls prevent bursting.",
            ],
            strategy: "On a number line, −400 lies above −800, so the solution has the higher water potential.",
          },
          {
            id: "bio-transport-cell-bm2-08",
            question: "Two adjacent plant cells, X and Y, have water potentials of −600 kPa and −900 kPa respectively. In which direction does water move between them?",
            options: [
              "From Y to X",
              "From X to Y",
              "No movement, because they are both negative",
              "In both directions equally",
            ],
            answerIndex: 1,
            explanation: "Cell X (−600 kPa) has the higher water potential; cell Y (−900 kPa) has the lower. Water moves from higher to lower WP, so from X to Y. Both being negative does not prevent movement — it is the difference that matters.",
            guideRef: "Osmosis",
            difficulty: "challenge",
            hints: [
              "Identify which cell has the higher (less negative) water potential.",
              "−600 kPa is higher than −900 kPa.",
              "Water flows from higher WP to lower WP.",
              "So water moves from X toward Y.",
            ],
            strategy: "Rank the water potentials first, then water always flows 'downhill' from high to low WP.",
          },
          {
            id: "bio-transport-cell-bm2-09",
            question: "Why is plasmolysis usually reversible if a plasmolysed plant cell is returned to pure water soon after?",
            options: [
              "The cell wall regrows to its original size",
              "Water re-enters by osmosis, pushing the membrane back against the wall",
              "Active transport rebuilds the vacuole using ATP",
              "The membrane permanently fuses to the cell wall",
            ],
            answerIndex: 1,
            explanation: "In plasmolysis the membrane pulls away from the wall but the cell is not killed. In pure water (higher WP) water re-enters by osmosis, refilling the vacuole and pushing the membrane back against the wall — restoring turgor. The wall does not regrow (A) and no ATP is needed for water uptake (C).",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "core",
            hints: [
              "Plasmolysis is loss of water from the cell, with the membrane pulled inward.",
              "Pure water has a higher water potential than the cell contents.",
              "Water re-entering by osmosis restores turgor.",
            ],
          },
          {
            id: "bio-transport-cell-bm2-10",
            question: "An intravenous drip uses 0.9% saline rather than pure water. What would be the danger of using pure water instead?",
            options: [
              "Red blood cells would shrink and become crenated",
              "Red blood cells would take in water by osmosis and burst",
              "Red blood cells would lose ions by active transport",
              "There would be no effect, because cells regulate their own water content",
            ],
            answerIndex: 1,
            explanation: "Pure water has a much higher water potential than the cytoplasm of red blood cells. Water would enter by osmosis, the cells would swell and burst (haemolysis). 0.9% saline is isotonic with blood plasma, so there is no net water movement and the cells stay intact.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "challenge",
            hints: [
              "Compare the water potential of pure water with that of cell contents.",
              "Water enters cells in a hypotonic (more dilute) surrounding.",
              "Animal cells have no wall to resist swelling.",
              "What is the term for a red blood cell bursting?",
            ],
            strategy: "Isotonic solutions are used medically because they prevent net osmosis into or out of cells.",
          },
        ],
      },
      {
        id: "bio-transport-cell-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Active transport, the cell membrane, and surface-area-to-volume ratio.",
        questions: [
          {
            id: "bio-transport-cell-bm3-01",
            question: "Which of these is a source of the energy needed for active transport?",
            options: ["Osmosis", "Respiration (ATP)", "Diffusion", "Evaporation"],
            answerIndex: 1,
            explanation: "Active transport is powered by ATP produced during cellular respiration. Osmosis and diffusion are passive and provide no energy; evaporation is unrelated.",
            guideRef: "Active Transport",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bm3-02",
            question: "What is the main role of carrier proteins in active transport?",
            options: [
              "To form pores that let water diffuse freely",
              "To bind specific molecules and move them across the membrane using energy",
              "To break down glucose to release ATP",
              "To make the membrane fully permeable to all substances",
            ],
            answerIndex: 1,
            explanation: "Carrier proteins bind specific molecules or ions and change shape (using ATP) to move them across the membrane against the gradient. They do not break down glucose (C) or make the membrane freely permeable (D).",
            guideRef: "Active Transport",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bm3-03",
            question: "A cube of side 1 cm and a cube of side 2 cm are compared. How does the surface-area-to-volume ratio of the 2 cm cube compare with the 1 cm cube?",
            options: [
              "It is twice as large",
              "It is the same",
              "It is half as large",
              "It is four times as large",
            ],
            answerIndex: 2,
            explanation: "SA:V = 6/l. For l = 1 cm, SA:V = 6; for l = 2 cm, SA:V = 3. The 2 cm cube has half the SA:V of the 1 cm cube — doubling the side halves the ratio.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "core",
            hints: [
              "Use SA:V = 6/l for a cube.",
              "Work out 6/1 and 6/2.",
              "Compare the two ratios.",
            ],
            strategy: "The formula SA:V = 6/l shows the ratio is inversely proportional to side length.",
          },
          {
            id: "bio-transport-cell-bm3-04",
            question: "Why must large, active organisms have specialised exchange surfaces such as lungs or gills?",
            options: [
              "Because their cells respire less than those of small organisms",
              "Because their surface-area-to-volume ratio is too low for diffusion alone to supply all cells",
              "Because diffusion does not occur in large organisms",
              "Because they have no cell membranes",
            ],
            answerIndex: 1,
            explanation: "As organisms get larger, volume grows faster than surface area, so SA:V falls. The outer surface is then too small to supply the large volume by diffusion alone, so specialised exchange surfaces (alveoli, gills, villi) provide extra surface area.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "core",
            hints: [
              "Think about how SA:V changes as size increases.",
              "A small surface cannot supply a large volume fast enough by diffusion.",
              "Exchange surfaces add surface area to compensate.",
            ],
          },
          {
            id: "bio-transport-cell-bm3-05",
            question: "Which feature of the small intestine epithelium increases the surface area for absorption?",
            options: [
              "A thick layer of muscle",
              "Microvilli on the cell surface",
              "A waxy, waterproof cuticle",
              "A small number of large cells",
            ],
            answerIndex: 1,
            explanation: "Microvilli are tiny folds of the cell membrane that greatly increase the surface area available for absorbing nutrients, including by active transport of glucose. A thick muscle layer or waxy cuticle would not aid absorption.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bm3-06",
            question: "The cell membrane controls what enters and leaves a cell. Which description of the membrane is correct?",
            options: [
              "It is fully permeable, allowing all substances through equally",
              "It is partially permeable, controlling movement by diffusion, osmosis and active transport",
              "It is impermeable to water but freely permeable to large proteins",
              "It allows only active transport and blocks all diffusion",
            ],
            answerIndex: 1,
            explanation: "The cell membrane is partially (selectively) permeable. It allows small molecules such as water, oxygen and carbon dioxide to pass, while controlling other movements via diffusion, osmosis and active transport (through carrier proteins). It is not fully permeable, and it is permeable to water.",
            guideRef: "Active Transport",
            difficulty: "core",
            hints: [
              "Recall what 'partially permeable' means.",
              "The membrane lets some substances through but not others.",
              "It is involved in diffusion, osmosis and active transport.",
            ],
          },
          {
            id: "bio-transport-cell-bm3-07",
            question: "A small cube of agar jelly containing indicator is placed in acid. The acid diffuses inward and changes the colour. A smaller cube changes colour throughout more quickly than a larger cube. Why?",
            options: [
              "The smaller cube has a lower surface-area-to-volume ratio",
              "The smaller cube has a higher surface-area-to-volume ratio, so the acid reaches its centre in less time",
              "The larger cube has thinner walls for acid to cross",
              "Acid only diffuses into cubes below a fixed size",
            ],
            answerIndex: 1,
            explanation: "The smaller cube has a higher SA:V ratio and a shorter distance from surface to centre, so the acid diffuses fully through it faster. The larger cube has a longer diffusion distance to its centre, so it takes longer to change colour throughout.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "challenge",
            hints: [
              "Which cube has the larger SA:V — the small one or the large one?",
              "Small objects have higher SA:V and shorter diffusion distances.",
              "Diffusion to the centre is faster when the distance is short.",
              "This models why small cells exchange materials efficiently.",
            ],
            strategy: "This is the classic agar-cube model of why high SA:V favours fast diffusion.",
          },
          {
            id: "bio-transport-cell-bm3-08",
            question: "Cells that carry out a great deal of active transport, such as gut epithelial cells, typically contain many mitochondria. What is the reason?",
            options: [
              "Mitochondria store the absorbed glucose",
              "Mitochondria release ATP by respiration, which active transport needs",
              "Mitochondria act as the carrier proteins",
              "Mitochondria increase the surface area of the membrane",
            ],
            answerIndex: 1,
            explanation: "Active transport requires ATP, which mitochondria produce by aerobic respiration. Cells doing lots of active transport therefore have many mitochondria to meet the high energy demand. Mitochondria are not carrier proteins and do not store glucose.",
            guideRef: "Active Transport",
            difficulty: "core",
            hints: [
              "What does active transport need a lot of?",
              "Where in the cell is most ATP made?",
              "More demand for ATP means more mitochondria.",
            ],
          },
          {
            id: "bio-transport-cell-bm3-09",
            question: "Calculate the surface-area-to-volume ratio of a cube of side 5 cm.",
            options: ["0.6", "1.2", "5", "30"],
            answerIndex: 1,
            explanation: "SA = 6 × 5² = 150 cm²; V = 5³ = 125 cm³; SA:V = 150/125 = 1.2. This also equals 6/l = 6/5 = 1.2.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "challenge",
            hints: [
              "Surface area of a cube = 6l².",
              "Volume of a cube = l³.",
              "Work out 6 × 25 and 125, then divide.",
              "Check against the shortcut 6/l.",
            ],
            strategy: "Compute SA and V separately, then divide; verify with the 6/l shortcut.",
          },
          {
            id: "bio-transport-cell-bm3-10",
            question: "Glucose in the gut lumen sometimes falls to a lower concentration than inside the epithelial cells, yet absorption continues. Which mechanism allows this, and what does it require?",
            options: [
              "Diffusion, requiring only a concentration gradient",
              "Osmosis, requiring a partially permeable membrane",
              "Active transport, requiring ATP and carrier proteins",
              "Evaporation, requiring heat energy",
            ],
            answerIndex: 2,
            explanation: "When glucose is at a lower concentration in the lumen than in the cell, it must be absorbed against its gradient — active transport. This needs ATP (from respiration) and carrier proteins. Diffusion would move glucose the wrong way; osmosis moves water, not glucose.",
            guideRef: "Active Transport",
            difficulty: "challenge",
            hints: [
              "Which way is glucose moving relative to its concentration gradient?",
              "Movement against the gradient cannot be diffusion.",
              "Active transport needs energy and carrier proteins.",
              "This is why the gut epithelium has many mitochondria.",
            ],
            strategy: "Identify the direction relative to the gradient first; against the gradient always means active transport.",
          },
        ],
      },
      {
        id: "bio-transport-cell-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Mixed and applied: experiments, percentage change in mass, and synoptic comparisons.",
        questions: [
          {
            id: "bio-transport-cell-bm4-01",
            question: "In an osmosis experiment, why is the change in mass of a potato cylinder usually expressed as a percentage rather than an absolute value in grams?",
            options: [
              "Because percentages are easier to plot on a graph",
              "To allow fair comparison between cylinders that had slightly different starting masses",
              "Because mass cannot be measured accurately",
              "To convert the result into a concentration",
            ],
            answerIndex: 1,
            explanation: "Percentage change = (change in mass ÷ initial mass) × 100 controls for differences in starting size, so cylinders of slightly different masses can be compared fairly. It is not about ease of plotting or measurement accuracy.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bm4-02",
            question: "A potato cylinder has an initial mass of 5.0 g and a final mass of 4.0 g. What is the percentage change in mass?",
            options: ["+20%", "−20%", "+25%", "−25%"],
            answerIndex: 1,
            explanation: "Change in mass = 4.0 − 5.0 = −1.0 g. Percentage change = (−1.0 ÷ 5.0) × 100 = −20%. The negative sign shows the cylinder lost mass (water left the cells by osmosis).",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "core",
            hints: [
              "Percentage change = (change ÷ initial) × 100.",
              "Change = final − initial = 4.0 − 5.0.",
              "Divide by the INITIAL mass (5.0 g), not the final.",
            ],
            strategy: "Always divide by the initial value, and keep the sign to show loss or gain.",
          },
          {
            id: "bio-transport-cell-bm4-03",
            question: "On a graph of percentage change in mass (y-axis) against sucrose concentration (x-axis), what does the point where the line crosses the x-axis (zero change) represent?",
            options: [
              "The concentration at which the potato cells burst",
              "The concentration whose water potential equals that of the potato cells (isotonic point)",
              "The concentration at which active transport begins",
              "The maximum rate of osmosis",
            ],
            answerIndex: 1,
            explanation: "Zero percentage change means no net water movement, so the solution's water potential equals that of the cells — the isotonic point. This gives an estimate of the cells' water potential. Cells do not burst in this experiment, and active transport is not involved.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "core",
            hints: [
              "Zero change means water is neither entering nor leaving overall.",
              "No net movement occurs when water potentials are equal.",
              "This equal point is described as isotonic.",
            ],
          },
          {
            id: "bio-transport-cell-bm4-04",
            question: "In a visking tubing experiment, the tubing filled with concentrated sucrose is placed in distilled water and the liquid level in an attached capillary tube rises. Which statement explains this?",
            options: [
              "Sucrose diffuses out of the tubing into the water",
              "Water enters the tubing by osmosis because the water potential outside is higher",
              "Water leaves the tubing because the sucrose lowers the pressure inside",
              "Active transport pumps water into the tubing",
            ],
            answerIndex: 1,
            explanation: "Distilled water (WP = 0 kPa) has a higher water potential than the sucrose inside (more negative WP). Water enters the tubing by osmosis through the partially permeable membrane, increasing the volume and pushing the level up the capillary. Sucrose is too large to leave; osmosis is passive.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "core",
            hints: [
              "Compare the water potential inside and outside the tubing.",
              "Distilled water has the higher water potential.",
              "Water moves from high WP to low WP across the membrane.",
            ],
          },
          {
            id: "bio-transport-cell-bm4-05",
            question: "Which of the following correctly lists processes that require energy (ATP) from respiration?",
            options: [
              "Diffusion and osmosis",
              "Active transport only",
              "Osmosis and active transport",
              "Diffusion, osmosis and active transport",
            ],
            answerIndex: 1,
            explanation: "Only active transport requires ATP. Diffusion and osmosis are both passive processes driven by gradients (concentration gradient and water potential gradient respectively) and do not require energy from the cell.",
            guideRef: "Active Transport",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bm4-06",
            question: "A student wants to investigate how temperature affects the rate of osmosis. Which variable should be the independent variable, and which should be controlled?",
            options: [
              "Independent: temperature; controlled: sucrose concentration and time",
              "Independent: sucrose concentration; controlled: temperature and time",
              "Independent: time; controlled: temperature and mass change",
              "Independent: mass change; controlled: temperature and concentration",
            ],
            answerIndex: 0,
            explanation: "To investigate the effect of temperature, temperature is the independent variable (the one deliberately changed). Sucrose concentration, time, and cylinder size must be kept constant so any change in mass is due only to temperature.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "core",
            hints: [
              "The independent variable is the one you deliberately change.",
              "Here the factor being investigated is temperature.",
              "Everything else must be controlled for a fair test.",
            ],
          },
          {
            id: "bio-transport-cell-bm4-07",
            question: "Two potato cylinders start at 6.0 g. Cylinder A in dilute sucrose ends at 6.6 g; cylinder B in concentrated sucrose ends at 5.1 g. What are the percentage changes in mass?",
            options: [
              "A: +10%, B: −15%",
              "A: +6%, B: −9%",
              "A: +11%, B: −18%",
              "A: +10%, B: −10%",
            ],
            answerIndex: 0,
            explanation: "Cylinder A: change = +0.6 g; (0.6 ÷ 6.0) × 100 = +10%. Cylinder B: change = −0.9 g; (−0.9 ÷ 6.0) × 100 = −15%. So A gained 10% (water entered) and B lost 15% (water left).",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "challenge",
            hints: [
              "Find the change in mass for each cylinder first.",
              "A: 6.6 − 6.0 = +0.6 g; B: 5.1 − 6.0 = −0.9 g.",
              "Divide each change by the initial 6.0 g and multiply by 100.",
              "Keep the signs to show gain or loss.",
            ],
            strategy: "Compute change, then percentage = (change ÷ initial) × 100 for each cylinder separately.",
          },
          {
            id: "bio-transport-cell-bm4-08",
            question: "Which combination correctly compares diffusion, osmosis and active transport?",
            options: [
              "All three move particles down a gradient without energy",
              "Diffusion and osmosis are passive; active transport needs ATP and moves substances against the gradient",
              "Osmosis needs ATP; diffusion and active transport are passive",
              "Diffusion needs carrier proteins; osmosis and active transport do not",
            ],
            answerIndex: 1,
            explanation: "Diffusion (of particles) and osmosis (of water) are passive and move substances down their gradients with no energy. Active transport moves substances against the gradient and needs ATP plus carrier proteins. Only active transport requires energy.",
            guideRef: "Active Transport",
            difficulty: "core",
            hints: [
              "Sort the three processes into passive and active.",
              "Two of them are passive, one is active.",
              "Active transport is the only one needing ATP and carrier proteins.",
            ],
          },
          {
            id: "bio-transport-cell-bm4-09",
            question: "A bag of visking tubing containing sugar and starch solution is placed in distilled water. After an hour, the water around the bag tests positive for sugar but negative for starch. What does this show about the membrane?",
            options: [
              "It is fully permeable to all molecules",
              "It is partially permeable: small sugar molecules pass through but large starch molecules do not",
              "It actively transports sugar but not starch",
              "It is impermeable to all molecules",
            ],
            answerIndex: 1,
            explanation: "Sugar appearing in the surrounding water but not starch shows the membrane is partially permeable — small sugar molecules diffuse through the pores while large starch molecules are too big to pass. This models the selective nature of the cell membrane. No energy/ATP is involved, so it is not active transport.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "challenge",
            hints: [
              "Which molecule got through and which did not?",
              "Sugar molecules are small; starch molecules are large.",
              "A membrane that lets small but not large molecules through is partially permeable.",
              "This is diffusion through pores, not active transport.",
            ],
            strategy: "Use the size difference between the molecules to interpret what 'partially permeable' means experimentally.",
          },
          {
            id: "bio-transport-cell-bm4-10",
            question: "Root hair cells are long and thin with a large surface area, contain many mitochondria, and absorb ions from very dilute soil water. Which single statement best links all these features?",
            options: [
              "They are adapted for rapid osmosis of water out of the cell",
              "They are adapted for active transport of ions: large surface area and abundant ATP from mitochondria",
              "They are adapted to store starch for the plant",
              "They are adapted to diffuse ions down a steep gradient into the soil",
            ],
            answerIndex: 1,
            explanation: "Soil water is more dilute in ions than the root cell, so ions are absorbed against the gradient by active transport. A large surface area increases the rate of uptake, and abundant mitochondria supply the ATP needed. The features together support active transport, not simple diffusion or starch storage.",
            guideRef: "Active Transport",
            difficulty: "challenge",
            hints: [
              "Ions are absorbed from dilute soil water into a more concentrated cell — which process?",
              "Active transport against the gradient needs energy.",
              "Many mitochondria provide ATP; large surface area speeds uptake.",
              "Link each feature to the demands of active transport.",
            ],
            strategy: "When several adaptations appear together, ask which single process they all serve — here, active transport.",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-transport-cell-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Diffusion and osmosis: definitions, factors, and water potential reasoning.",
        questions: [
          {
            id: "bio-transport-cell-bq1-01",
            question: "Define diffusion and state whether it is an active or passive process. (2 marks)",
            marks: 2,
            modelAnswer:
              "Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration (down the concentration gradient), as a result of their random motion. It is a passive process — it requires no energy from the cell.",
            markScheme: [
              "Net movement of particles from higher to lower concentration / down the concentration gradient (1 mark)",
              "Passive / requires no energy (1 mark)",
            ],
            commonError: "Omitting the word 'net' or saying particles move 'from low to high' (which is the reverse).",
            guideRef: "Diffusion",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bq1-02",
            question: "State four factors that affect the rate of diffusion, and for each give the direction of its effect. (4 marks)",
            marks: 4,
            modelAnswer:
              "1. Concentration gradient — a steeper gradient gives a faster rate of diffusion.\n2. Temperature — a higher temperature gives particles more kinetic energy, so diffusion is faster.\n3. Surface area — a larger surface area allows faster diffusion.\n4. Diffusion distance (thickness) — a shorter distance gives a faster rate of diffusion.",
            markScheme: [
              "Steeper concentration gradient → faster (1 mark)",
              "Higher temperature → faster (1 mark)",
              "Larger surface area → faster (1 mark)",
              "Shorter diffusion distance / thinner barrier → faster (1 mark)",
            ],
            commonError: "Naming a factor without stating the direction of its effect — both are needed for the mark.",
            guideRef: "Diffusion",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bq1-03",
            question: "A leaf cell carrying out photosynthesis uses up carbon dioxide. Explain, in terms of diffusion, how carbon dioxide moves from the air spaces in the leaf into the cell. (3 marks)",
            marks: 3,
            modelAnswer:
              "Photosynthesis uses up carbon dioxide inside the cell, so the concentration of carbon dioxide in the cell becomes lower than in the air spaces. This creates a concentration gradient, with higher concentration in the air spaces and lower concentration in the cell. Carbon dioxide therefore diffuses from the air spaces (high concentration) into the cell (low concentration), down the concentration gradient. No energy is required because diffusion is passive.",
            markScheme: [
              "Photosynthesis lowers CO2 concentration inside the cell / sets up a concentration gradient (1 mark)",
              "CO2 concentration higher in air spaces than in cell (1 mark)",
              "CO2 diffuses down the gradient from air spaces into the cell / passively (1 mark)",
            ],
            commonError: "Forgetting to link photosynthesis to the creation of the concentration gradient.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "What does photosynthesis do to the CO2 level inside the cell?",
              "This sets up a difference in concentration — a gradient.",
              "State which side is higher and which is lower.",
              "Diffusion moves CO2 down this gradient.",
            ],
            strategy: "Establish how the gradient arises first, then describe the direction of diffusion down it.",
          },
          {
            id: "bio-transport-cell-bq1-04",
            question: "Define osmosis. In your answer, refer to water potential and the type of membrane involved. (3 marks)",
            marks: 3,
            modelAnswer:
              "Osmosis is the net movement of water molecules from a region of higher water potential to a region of lower water potential, through a partially permeable membrane. It is a passive process requiring no energy. Pure water has the highest water potential; dissolving solutes lowers (makes more negative) the water potential of a solution.",
            markScheme: [
              "Net movement of water molecules (1 mark)",
              "From higher water potential to lower water potential / down the water potential gradient (1 mark)",
              "Through a partially permeable membrane (1 mark)",
            ],
            commonError: "Writing 'from high to low concentration' instead of 'high to low water potential' — water moves toward the more concentrated (lower WP) solution.",
            guideRef: "Osmosis",
            difficulty: "core",
            hints: [
              "Osmosis is specifically about water molecules.",
              "State the direction using water potential, not solute concentration.",
              "Name the membrane that water crosses.",
            ],
          },
          {
            id: "bio-transport-cell-bq1-05",
            question: "Explain why a partially permeable membrane is essential for osmosis to occur. (3 marks)",
            marks: 3,
            modelAnswer:
              "A partially permeable membrane has tiny pores that allow small water molecules to pass through but are too small for larger solute molecules (such as sucrose) to cross. Because only water can move freely across it, a difference in water potential on the two sides causes a net movement of water — osmosis. If the membrane let solutes through as well, the solutes would simply diffuse until evenly spread, and there would be no sustained net water movement driven by the water potential difference.",
            markScheme: [
              "Membrane allows water (small molecules) through but not larger solute molecules (1 mark)",
              "This keeps a difference in water potential / solute concentration across the membrane (1 mark)",
              "So water can move by osmosis down the water potential gradient (1 mark)",
            ],
            commonError: "Saying the membrane 'blocks everything except water' too loosely — be precise that small molecules pass and large solutes do not.",
            guideRef: "Osmosis",
            difficulty: "core",
            hints: [
              "What size of molecule can pass through the pores, and what cannot?",
              "Why does keeping solutes on one side matter?",
              "Link the maintained water potential difference to net water movement.",
            ],
          },
          {
            id: "bio-transport-cell-bq1-06",
            question: "A visking tubing bag containing concentrated sucrose solution is placed in a beaker of distilled water and attached to a capillary tube. Predict and explain what happens to the level of liquid in the capillary tube over 30 minutes. (4 marks)",
            marks: 4,
            modelAnswer:
              "The level of liquid in the capillary tube rises. The distilled water has a higher water potential (0 kPa) than the concentrated sucrose solution inside the bag, which has a lower (more negative) water potential. The visking tubing is a partially permeable membrane, so water moves into the bag by osmosis, from the higher water potential outside to the lower water potential inside. This increases the volume of liquid in the bag, which is forced up the narrow capillary tube, so the level rises.",
            markScheme: [
              "Level rises (1 mark)",
              "Distilled water has higher water potential than the sucrose solution inside (1 mark)",
              "Water enters the bag by osmosis through the partially permeable membrane (1 mark)",
              "Volume in the bag increases, pushing liquid up the capillary (1 mark)",
            ],
            commonError: "Saying sucrose moves out into the water — sucrose molecules are too large to cross the partially permeable membrane.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "core",
            hints: [
              "Compare the water potential inside and outside the bag.",
              "Distilled water has the higher water potential.",
              "Water enters by osmosis through the tubing.",
              "Extra volume in the bag pushes liquid up the tube.",
            ],
            strategy: "State the prediction first, then justify it with water potential and osmosis.",
          },
          {
            id: "bio-transport-cell-bq1-07",
            question: "Cell P has a water potential of −350 kPa and is next to cell Q with a water potential of −700 kPa. State the direction of net water movement and explain your answer. (3 marks)",
            marks: 3,
            modelAnswer:
              "Water moves from cell P to cell Q. Cell P has the higher water potential (−350 kPa is less negative than −700 kPa), and cell Q has the lower water potential. Water moves by osmosis from a region of higher water potential to a region of lower water potential, so it moves from P (higher WP) to Q (lower WP).",
            markScheme: [
              "Water moves from P to Q (1 mark)",
              "P has the higher (less negative) water potential / Q has the lower water potential (1 mark)",
              "Water moves from higher to lower water potential by osmosis (1 mark)",
            ],
            commonError: "Treating −700 kPa as 'higher' because 700 is a bigger number — on a number line −350 is higher than −700.",
            guideRef: "Osmosis",
            difficulty: "core",
            hints: [
              "Place −350 and −700 on a number line — which is higher?",
              "−350 kPa is less negative, so it is the higher water potential.",
              "Water flows from higher to lower water potential.",
            ],
          },
          {
            id: "bio-transport-cell-bq1-08",
            question: "Compare diffusion and osmosis. Give one similarity and two differences. (4 marks)",
            marks: 4,
            modelAnswer:
              "Similarity: both are passive processes that require no energy from the cell and both involve net movement down a gradient.\n\nDifferences: (1) Diffusion is the movement of any particles (e.g. gases, ions, solutes), whereas osmosis is specifically the movement of water molecules. (2) Diffusion can occur with or without a membrane and moves particles down a concentration gradient, whereas osmosis requires a partially permeable membrane and moves water down a water potential gradient.",
            markScheme: [
              "Similarity: both passive / no energy required / both move down a gradient (1 mark)",
              "Difference: diffusion = any particle; osmosis = water only (1 mark)",
              "Difference: osmosis needs a partially permeable membrane; diffusion does not necessarily (1 mark)",
              "Difference: diffusion down concentration gradient; osmosis down water potential gradient (1 mark — any valid extra difference)",
            ],
            commonError: "Listing only differences and forgetting the required similarity, or saying osmosis 'is not passive'.",
            guideRef: "Osmosis",
            difficulty: "core",
            hints: [
              "Both processes are passive — that is your similarity.",
              "Think about WHAT moves in each: particles vs water.",
              "Think about whether a membrane is required.",
              "Consider the type of gradient driving each.",
            ],
          },
          {
            id: "bio-transport-cell-bq1-09",
            question: "Explain, in terms of the random movement of particles, why diffusion results in a net movement from high to low concentration even though individual particles move in all directions. (4 marks)",
            marks: 4,
            modelAnswer:
              "All the particles are moving randomly in all directions because of their kinetic energy. On the side with the higher concentration there are more particles, so at any moment more particles happen to be moving across toward the lower-concentration side than the other way. This means the number crossing from high to low is greater than the number crossing from low to high, giving a net movement from high to low concentration. As the concentrations become equal, the numbers crossing each way become equal too, so at equilibrium there is no further net movement, although random movement continues.",
            markScheme: [
              "Particles move randomly in all directions (due to kinetic energy) (1 mark)",
              "More particles on the high-concentration side (1 mark)",
              "So more cross from high to low than from low to high → net movement high to low (1 mark)",
              "At equilibrium crossings are equal / random movement still continues (1 mark)",
            ],
            commonError: "Implying particles 'know' to move toward the low side — the net flow is purely a statistical/probability effect of random motion.",
            guideRef: "Diffusion",
            difficulty: "challenge",
            hints: [
              "Start with the fact that all particles move randomly.",
              "Where are there more particles to begin with?",
              "Why does that make more cross one way than the other?",
              "Explain what happens to the net movement at equilibrium.",
            ],
            strategy: "Frame net movement as a probability outcome of random motion, not as directed movement.",
          },
          {
            id: "bio-transport-cell-bq1-10",
            question: "A student claims that 'water always moves from a dilute solution to a concentrated solution.' Explain why this statement is broadly correct but should be expressed more precisely using the idea of water potential. (4 marks)",
            marks: 4,
            modelAnswer:
              "The statement is broadly correct because a dilute solution has fewer solute molecules, so it has a higher water potential, while a concentrated solution has more solute and a lower water potential. Water moves by osmosis from the dilute solution (higher water potential) to the concentrated solution (lower water potential). However, the precise driving factor is the difference in water potential, not the concentration of solute itself. Stating it as 'from higher water potential to lower water potential' is more accurate, because in living cells pressure (such as turgor pressure in plant cells) can also affect water potential, so a more dilute solution does not always have to gain water.",
            markScheme: [
              "Dilute solution has higher water potential; concentrated solution has lower water potential (1 mark)",
              "Water moves from dilute (high WP) to concentrated (low WP) by osmosis (1 mark)",
              "The precise driving factor is the water potential gradient, not solute concentration alone (1 mark)",
              "Other factors (e.g. pressure / turgor) can also affect water potential, so 'water potential' is the accurate term (1 mark)",
            ],
            commonError: "Insisting concentration alone determines water movement and ignoring that pressure also contributes to water potential.",
            guideRef: "Osmosis",
            difficulty: "challenge",
            hints: [
              "Link 'dilute' to high water potential and 'concentrated' to low water potential.",
              "Restate the rule precisely using water potential.",
              "Explain why water potential is more accurate than solute concentration alone.",
              "Mention that pressure (e.g. turgor) also affects water potential.",
            ],
            strategy: "Validate the everyday statement, then sharpen it with the correct technical term and an exception.",
          },
        ],
      },
      {
        id: "bio-transport-cell-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Osmosis in plant and animal cells: turgor, plasmolysis, haemolysis and crenation.",
        questions: [
          {
            id: "bio-transport-cell-bq2-01",
            question: "Define the term 'turgid' as applied to a plant cell. (2 marks)",
            marks: 2,
            modelAnswer:
              "A turgid plant cell is one that has taken in water by osmosis so that the vacuole is full and pushes the cytoplasm and cell membrane firmly against the cell wall. The cell is firm and exerts an outward (turgor) pressure on the wall.",
            markScheme: [
              "Cell has taken in water (by osmosis) / vacuole is full (1 mark)",
              "Contents push against the cell wall / cell is firm / exerts turgor pressure (1 mark)",
            ],
            commonError: "Confusing turgid (full of water) with plasmolysed (water lost).",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bq2-02",
            question: "Describe what happens to a red blood cell when it is placed in pure water, and name the process by which the cell may be destroyed. (3 marks)",
            marks: 3,
            modelAnswer:
              "Pure water has a higher water potential than the cytoplasm of the red blood cell, so water moves into the cell by osmosis. The cell has no cell wall, so as water enters it swells. If enough water enters, the cell membrane stretches and the cell bursts. This bursting of a red blood cell is called haemolysis.",
            markScheme: [
              "Water enters the cell by osmosis (because water has higher water potential) (1 mark)",
              "Cell swells / has no cell wall to resist (1 mark)",
              "Cell bursts — named as haemolysis (1 mark)",
            ],
            commonError: "Using the plant term 'turgid' for an animal cell, or forgetting the term haemolysis.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "core",
            hints: [
              "Compare the water potential of pure water and the cell contents.",
              "Which way does water move, and what does the cell lack?",
              "What is the specific term for a red blood cell bursting?",
            ],
          },
          {
            id: "bio-transport-cell-bq2-03",
            question: "Explain why a plant cell placed in a concentrated sugar solution becomes plasmolysed, while a plant cell in pure water does not burst. (4 marks)",
            marks: 4,
            modelAnswer:
              "In a concentrated sugar solution the water potential outside the cell is lower than inside, so water leaves the cell by osmosis. The vacuole shrinks and the cell membrane pulls away from the cell wall — this is plasmolysis. In pure water the water potential outside is higher, so water enters by osmosis and the cell swells; however, the rigid cellulose cell wall resists the swelling and exerts an inward pressure, so the cell becomes turgid but does not burst. The presence of the cell wall is the key reason plant cells do not burst.",
            markScheme: [
              "In sugar solution: water leaves cell by osmosis (lower WP outside) (1 mark)",
              "Membrane pulls away from wall = plasmolysis (1 mark)",
              "In pure water: water enters by osmosis, cell swells (1 mark)",
              "Rigid cell wall resists swelling / exerts inward pressure so cell does not burst (1 mark)",
            ],
            commonError: "Failing to credit the cell wall as the reason plant cells survive in pure water.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "core",
            hints: [
              "Compare water potential inside and outside in each solution.",
              "State which way water moves in each case.",
              "Name what happens to the membrane in the sugar solution.",
              "Explain the role of the cell wall in pure water.",
            ],
          },
          {
            id: "bio-transport-cell-bq2-04",
            question: "A celery stick left in salty water for several hours becomes limp. Using the terms osmosis, water potential and flaccid, explain why. (4 marks)",
            marks: 4,
            modelAnswer:
              "The salty water has a lower water potential than the contents of the celery cells. Water therefore moves out of the cells by osmosis, from the higher water potential inside to the lower water potential outside. As the cells lose water, the vacuoles shrink and the cells lose turgor, becoming flaccid. Because the cells are no longer pressing firmly against their walls, they no longer support the tissue, so the celery becomes limp.",
            markScheme: [
              "Salty water has lower water potential than cell contents (1 mark)",
              "Water leaves cells by osmosis (from higher to lower WP) (1 mark)",
              "Cells lose turgor / become flaccid (1 mark)",
              "Loss of turgor means less support → celery limp (1 mark)",
            ],
            commonError: "Saying salt 'sucks' or 'pulls' water out instead of explaining the water potential gradient.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "core",
            hints: [
              "Which has the lower water potential — salty water or cell contents?",
              "Which way does water move by osmosis?",
              "What state are cells in when they lose turgor?",
              "Link loss of turgor to the celery going limp.",
            ],
          },
          {
            id: "bio-transport-cell-bq2-05",
            question: "Explain why turgor pressure is important for the support of a non-woody plant such as a young seedling. (3 marks)",
            marks: 3,
            modelAnswer:
              "When the cells of a non-woody plant are turgid, water fills the vacuoles and pushes the cell contents against the cell walls, creating turgor pressure. This pressure makes the cells firm and rigid, and many turgid cells together make the tissues firm enough to hold the stem and leaves upright. If the cells lose water and become flaccid, turgor pressure falls and the plant wilts, because it has no woody tissue to support it.",
            markScheme: [
              "Turgid cells push contents against the cell wall / turgor pressure makes cells firm (1 mark)",
              "Many firm cells together support the stem/leaves / keep the plant upright (1 mark)",
              "Loss of turgor → flaccid cells → wilting (since no woody support) (1 mark)",
            ],
            commonError: "Describing turgor for a single cell only, without linking many turgid cells to whole-plant support.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "core",
            hints: [
              "What does turgor pressure do to each cell?",
              "How does this affect the tissue as a whole?",
              "What happens if turgor is lost?",
            ],
          },
          {
            id: "bio-transport-cell-bq2-06",
            question: "An animal cell is described as undergoing 'crenation'. Explain what crenation is and the conditions that cause it. (3 marks)",
            marks: 3,
            modelAnswer:
              "Crenation is the shrinking and wrinkling of an animal cell that occurs when it loses water. It happens when the cell is placed in a solution with a lower water potential than the cell (a hypertonic/more concentrated solution). Water moves out of the cell by osmosis, so the cell loses volume, shrinks and its surface becomes wrinkled.",
            markScheme: [
              "Crenation = animal cell shrinks / wrinkles (1 mark)",
              "Occurs in a solution of lower water potential / more concentrated (hypertonic) than the cell (1 mark)",
              "Water leaves the cell by osmosis (1 mark)",
            ],
            commonError: "Confusing crenation (animal cells) with plasmolysis (plant cells).",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bq2-07",
            question: "A scientist places identical plant tissue samples in solutions of increasing salt concentration. Describe and explain what she would expect to see happen to the cells across the range of concentrations. (5 marks)",
            marks: 5,
            modelAnswer:
              "In the most dilute solutions, the water potential outside is higher than inside the cells, so water enters by osmosis and the cells become turgid. As the salt concentration increases, the water potential of the solution falls. At one particular concentration the water potential of the solution equals that of the cells (isotonic), so there is no net movement of water and the cells stay roughly the same. In solutions more concentrated than this, the water potential outside is lower than inside, so water leaves the cells by osmosis. The cells lose turgor and become flaccid, and in the most concentrated solutions the membrane pulls away from the cell wall — the cells become plasmolysed.",
            markScheme: [
              "Dilute solutions: water enters by osmosis → cells turgid (1 mark)",
              "Reason: water potential of solution higher than cells (1 mark)",
              "At one concentration: no net movement (isotonic / WP equal) (1 mark)",
              "Concentrated solutions: water leaves by osmosis → cells flaccid (1 mark)",
              "Most concentrated: membrane pulls from wall = plasmolysis (1 mark)",
            ],
            commonError: "Describing only the extremes and missing the isotonic point where there is no net change.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "challenge",
            hints: [
              "Start with the dilute end: which way does water move?",
              "Think about the special concentration where nothing changes.",
              "Then describe the concentrated end.",
              "Name the cell states: turgid, flaccid, plasmolysed.",
            ],
            strategy: "Work across the range in order — dilute, isotonic, concentrated — naming the cell state at each.",
          },
          {
            id: "bio-transport-cell-bq2-08",
            question: "Explain why intravenous fluids given to patients are isotonic with blood (about 0.9% sodium chloride) rather than pure water or a very concentrated salt solution. (4 marks)",
            marks: 4,
            modelAnswer:
              "Isotonic fluid has the same water potential as the cytoplasm of blood cells, so there is no net movement of water into or out of the cells by osmosis, and the cells keep their normal shape and function. If pure water were used, it would have a higher water potential than the cells, so water would enter the red blood cells by osmosis and they could swell and burst (haemolysis). If a very concentrated salt solution were used, it would have a lower water potential than the cells, so water would leave the cells by osmosis and they would shrink and become crenated. Both extremes damage the cells, so an isotonic solution is used.",
            markScheme: [
              "Isotonic = same water potential as cells → no net osmosis / cells unchanged (1 mark)",
              "Pure water: higher WP → water enters → cells swell/burst (haemolysis) (1 mark)",
              "Concentrated solution: lower WP → water leaves → cells shrink (crenation) (1 mark)",
              "Both extremes damage cells, so isotonic is safest (1 mark)",
            ],
            commonError: "Only explaining one of the two harmful extremes; the question asks why neither pure water nor concentrated salt is suitable.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "challenge",
            hints: [
              "What does 'isotonic' mean in terms of water potential?",
              "What would pure water do to the cells?",
              "What would concentrated salt do to the cells?",
              "Conclude why the isotonic option is chosen.",
            ],
            strategy: "Address all three cases (isotonic, hypotonic, hypertonic) to fully justify the medical choice.",
          },
          {
            id: "bio-transport-cell-bq2-09",
            question: "A plant cell loses water and becomes plasmolysed in a concentrated solution. Explain whether this change is reversible and how it could be reversed. (3 marks)",
            marks: 3,
            modelAnswer:
              "Plasmolysis is usually reversible, provided the cell has not been left too long or otherwise damaged. To reverse it, the cell is placed in pure water or a dilute solution that has a higher water potential than the cell contents. Water then re-enters the cell by osmosis, the vacuole refills, and the cell membrane is pushed back against the cell wall, so the cell becomes turgid again.",
            markScheme: [
              "Reversible (if cell not damaged/dead) (1 mark)",
              "Place cell in pure water / dilute solution of higher water potential (1 mark)",
              "Water re-enters by osmosis → membrane pushed back to wall / cell becomes turgid (1 mark)",
            ],
            commonError: "Claiming plasmolysis is always permanent, or that the cell wall must regrow.",
            guideRef: "Osmosis in Plant and Animal Cells",
            difficulty: "core",
            hints: [
              "Is the cell killed by plasmolysis, or just dehydrated?",
              "What surrounding solution would make water re-enter?",
              "Describe what happens to the membrane as water returns.",
            ],
          },
          {
            id: "bio-transport-cell-bq2-10",
            question: "Two students disagree. One says 'water moves into the cell because the cell has a lower concentration of water.' The other says 'water moves into the cell because the cell has a lower water potential.' Explain which statement is more scientifically correct and why. (4 marks)",
            marks: 4,
            modelAnswer:
              "The second statement, using water potential, is more scientifically correct. Water moves by osmosis from a region of higher water potential to a region of lower water potential, so describing the cell as having a lower water potential correctly explains why water enters it. The first statement, using 'concentration of water', is loosely correct in many cases because a solution with more solute does have relatively less free water, but it can be misleading: in living plant cells, pressure (turgor) also contributes to water potential, so water movement is not determined by water concentration alone. Using water potential accounts for both solute and pressure effects, so it is the precise and preferred term.",
            markScheme: [
              "The water-potential statement is more correct (1 mark)",
              "Water moves from higher to lower water potential by osmosis (1 mark)",
              "'Concentration of water' is only loosely correct / can be misleading (1 mark)",
              "Water potential accounts for both solute concentration and pressure (e.g. turgor) (1 mark)",
            ],
            commonError: "Picking the 'concentration of water' statement, or failing to explain why water potential is more complete.",
            guideRef: "Osmosis",
            difficulty: "challenge",
            hints: [
              "Recall the precise definition of osmosis using water potential.",
              "Decide which statement matches that definition.",
              "Explain the limitation of the 'concentration of water' wording.",
              "Mention that pressure also affects water potential.",
            ],
            strategy: "Judge each statement against the formal definition of osmosis, then justify with the extra factor (pressure).",
          },
        ],
      },
      {
        id: "bio-transport-cell-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Active transport, the cell membrane, and surface-area-to-volume ratio.",
        questions: [
          {
            id: "bio-transport-cell-bq3-01",
            question: "Define active transport. (2 marks)",
            marks: 2,
            modelAnswer:
              "Active transport is the movement of particles (molecules or ions) across a cell membrane from a region of lower concentration to a region of higher concentration — that is, against the concentration gradient — using energy from respiration (ATP) and carrier proteins.",
            markScheme: [
              "Movement against the concentration gradient / from low to high concentration (1 mark)",
              "Requires energy from respiration / ATP (and carrier proteins) (1 mark)",
            ],
            commonError: "Omitting that it goes against the gradient, or forgetting the energy requirement.",
            guideRef: "Active Transport",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bq3-02",
            question: "Name the two cell components essential for active transport, and state the role of each. (2 marks)",
            marks: 2,
            modelAnswer:
              "Carrier proteins in the cell membrane bind specific molecules or ions and move them across the membrane against the gradient. Mitochondria carry out aerobic respiration to produce the ATP that provides the energy for the carrier proteins to work.",
            markScheme: [
              "Carrier proteins — move/pump the molecules across the membrane (1 mark)",
              "Mitochondria — produce ATP/energy by respiration (1 mark)",
            ],
            commonError: "Naming the components but not stating their roles.",
            guideRef: "Active Transport",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bq3-03",
            question: "Root hair cells absorb mineral ions such as nitrate from the soil. Explain why this uptake is by active transport rather than diffusion. (3 marks)",
            marks: 3,
            modelAnswer:
              "The concentration of mineral ions in the soil water is often lower than the concentration inside the root hair cells. Diffusion can only move ions from a higher to a lower concentration, so it could not move ions into the cell against this gradient. Instead, the ions are absorbed by active transport, which moves them from the lower concentration in the soil to the higher concentration in the cell, using energy from respiration (ATP) and carrier proteins.",
            markScheme: [
              "Ion concentration in soil is lower than in the root cell (1 mark)",
              "Diffusion cannot move ions against this gradient / would move them the wrong way (1 mark)",
              "Active transport moves ions against the gradient using ATP / carrier proteins (1 mark)",
            ],
            commonError: "Stating it is active transport without explaining the unfavourable concentration gradient.",
            guideRef: "Active Transport",
            difficulty: "core",
            hints: [
              "Compare the ion concentration in the soil and in the cell.",
              "What is the limitation of diffusion regarding gradient direction?",
              "Which process can move ions against the gradient, and what does it need?",
            ],
          },
          {
            id: "bio-transport-cell-bq3-04",
            question: "Explain how a respiratory inhibitor (such as cyanide) would affect the rate of active transport in a cell, and why diffusion would be unaffected. (4 marks)",
            marks: 4,
            modelAnswer:
              "A respiratory inhibitor stops or slows cellular respiration, so less ATP is produced. Active transport depends on ATP to power the carrier proteins, so with little ATP available, the rate of active transport falls greatly or stops. Diffusion, however, is a passive process that does not use ATP — it is driven only by the concentration gradient and the random movement of particles. Therefore diffusion would continue unaffected by the respiratory inhibitor.",
            markScheme: [
              "Inhibitor reduces respiration → less ATP produced (1 mark)",
              "Active transport needs ATP for carrier proteins (1 mark)",
              "So rate of active transport falls / stops (1 mark)",
              "Diffusion is passive / needs no ATP, so it is unaffected (1 mark)",
            ],
            commonError: "Claiming diffusion would also stop — diffusion does not depend on ATP.",
            guideRef: "Active Transport",
            difficulty: "core",
            hints: [
              "What does a respiratory inhibitor do to ATP supply?",
              "Why does active transport need ATP?",
              "What happens to active transport when ATP runs low?",
              "Why is diffusion not affected by ATP levels?",
            ],
            strategy: "Treat ATP dependence as the deciding feature: energy-needing processes stop, passive ones continue.",
          },
          {
            id: "bio-transport-cell-bq3-05",
            question: "The cell membrane is described as 'partially permeable'. Explain what this means and how it relates to the cell controlling movement in and out. (3 marks)",
            marks: 3,
            modelAnswer:
              "Partially permeable means the cell membrane allows some substances to pass through it but not others — small molecules such as water, oxygen and carbon dioxide can cross, while larger molecules are restricted. This selectivity allows the cell to control what enters and leaves: substances may move in or out by diffusion or osmosis through the membrane, while specific molecules are moved by carrier proteins in active transport. As a result the membrane regulates the cell's internal composition.",
            markScheme: [
              "Lets some substances through but not others / selective (1 mark)",
              "Small molecules (e.g. water, gases) cross; large molecules restricted (1 mark)",
              "Allows the cell to control movement in/out (by diffusion, osmosis, active transport) (1 mark)",
            ],
            commonError: "Saying the membrane blocks 'everything' or lets 'everything' through — it is selective.",
            guideRef: "Active Transport",
            difficulty: "core",
            hints: [
              "What does 'partially permeable' literally allow?",
              "Give examples of molecules that can and cannot cross easily.",
              "Link this selectivity to the cell controlling its contents.",
            ],
          },
          {
            id: "bio-transport-cell-bq3-06",
            question: "Calculate the surface-area-to-volume ratio of a cube of side 3 cm, showing your working. (3 marks)",
            marks: 3,
            modelAnswer:
              "Surface area = 6 × (3 cm)² = 6 × 9 = 54 cm².\nVolume = (3 cm)³ = 27 cm³.\nSA:V ratio = 54 ÷ 27 = 2 (or 2 : 1).",
            markScheme: [
              "Surface area = 6 × 3² = 54 cm² (1 mark)",
              "Volume = 3³ = 27 cm³ (1 mark)",
              "SA:V = 54 ÷ 27 = 2 (1 mark)",
            ],
            commonError: "Using 3² for surface area without multiplying by 6, or forgetting to cube for volume.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "core",
            hints: [
              "Surface area of a cube = 6l².",
              "Volume of a cube = l³.",
              "Divide surface area by volume.",
            ],
            strategy: "Compute SA and V separately, then divide; you can check with the shortcut 6/l = 6/3 = 2.",
            solutions: [
              {
                label: "Step-by-step calculation",
                steps: [
                  "Surface area = 6 × l² = 6 × 3² = 6 × 9 = 54 cm².",
                  "Volume = l³ = 3³ = 27 cm³.",
                  "SA:V = 54 ÷ 27 = 2, i.e. a ratio of 2 : 1.",
                  "Check with shortcut: SA:V = 6/l = 6/3 = 2.",
                ],
              },
            ],
          },
          {
            id: "bio-transport-cell-bq3-07",
            question: "Explain why single-celled organisms can rely on diffusion across their surface to obtain oxygen, but large multicellular animals cannot. Use the idea of surface-area-to-volume ratio in your answer. (4 marks)",
            marks: 4,
            modelAnswer:
              "A single-celled organism is very small and has a high surface-area-to-volume ratio, so it has a large surface area compared with its volume and a very short distance from its surface to any part inside. Diffusion across the surface is therefore fast enough to supply all its oxygen needs. A large multicellular animal has a much lower surface-area-to-volume ratio because volume increases faster than surface area as size increases. Its surface is too small relative to its volume, and the distance to its inner cells is too great, so diffusion alone cannot supply oxygen fast enough. It therefore needs specialised exchange surfaces (such as lungs or gills) and a transport system to carry oxygen to its cells.",
            markScheme: [
              "Single cell: high SA:V / large surface relative to volume / short diffusion distance (1 mark)",
              "So diffusion across surface supplies its needs (1 mark)",
              "Large animal: low SA:V because volume grows faster than surface area (1 mark)",
              "Diffusion alone insufficient → needs specialised exchange surfaces / transport system (1 mark)",
            ],
            commonError: "Stating the SA:V values without linking them to the rate of diffusion and the demand of the organism.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "challenge",
            hints: [
              "Compare the SA:V of a tiny cell with a large animal.",
              "Why does a high SA:V make diffusion sufficient?",
              "Explain why SA:V falls as size increases.",
              "What do large animals need to compensate?",
            ],
            strategy: "Contrast the two cases on SA:V and diffusion distance, then state the consequence for each.",
          },
          {
            id: "bio-transport-cell-bq3-08",
            question: "A cube-shaped model cell has its side length doubled from 2 cm to 4 cm. Calculate the SA:V ratio at each size and use the results to explain why cells divide before growing too large. (5 marks)",
            marks: 5,
            modelAnswer:
              "For the 2 cm cube: surface area = 6 × 2² = 24 cm²; volume = 2³ = 8 cm³; SA:V = 24 ÷ 8 = 3.\nFor the 4 cm cube: surface area = 6 × 4² = 96 cm²; volume = 4³ = 64 cm³; SA:V = 96 ÷ 64 = 1.5.\nDoubling the side length has halved the SA:V ratio (from 3 to 1.5). This means that as a cell grows larger, its surface area becomes too small relative to its volume to supply the inside of the cell with enough nutrients and oxygen, and to remove waste, by diffusion. So cells divide before reaching a size where their SA:V is too low for diffusion to meet their needs.",
            markScheme: [
              "2 cm cube: SA = 24 cm², V = 8 cm³, SA:V = 3 (1 mark)",
              "4 cm cube: SA = 96 cm², V = 64 cm³, SA:V = 1.5 (1 mark)",
              "Doubling side length halves the SA:V ratio (1 mark)",
              "Lower SA:V → surface too small to supply the larger volume by diffusion (1 mark)",
              "So cells divide before SA:V becomes too low for their needs (1 mark)",
            ],
            commonError: "Calculation slips: using l² for volume, or forgetting the factor of 6 in surface area.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "challenge",
            hints: [
              "Work out SA and V for each cube separately.",
              "SA = 6l²; V = l³.",
              "Compare the two ratios — what has happened to SA:V?",
              "Link low SA:V to the limit on diffusion.",
            ],
            strategy: "Do both calculations fully, state the trend, then explain its biological consequence.",
            solutions: [
              {
                label: "Both cubes worked out",
                steps: [
                  "2 cm cube: SA = 6 × 2² = 24 cm²; V = 2³ = 8 cm³; SA:V = 24 ÷ 8 = 3.",
                  "4 cm cube: SA = 6 × 4² = 96 cm²; V = 4³ = 64 cm³; SA:V = 96 ÷ 64 = 1.5.",
                  "Ratio fell from 3 to 1.5, i.e. halved when the side doubled.",
                  "Conclusion: larger size → lower SA:V → diffusion cannot keep up, so cells divide.",
                ],
              },
            ],
          },
          {
            id: "bio-transport-cell-bq3-09",
            question: "Cells lining the small intestine that absorb glucose by active transport have many mitochondria and a folded surface (microvilli). Explain how each of these two features helps the cell to absorb glucose efficiently. (4 marks)",
            marks: 4,
            modelAnswer:
              "The many mitochondria carry out aerobic respiration to produce a large supply of ATP. Active transport of glucose against its concentration gradient requires ATP to power the carrier proteins, so plenty of mitochondria ensure enough energy is available for rapid absorption. The microvilli are tiny folds that greatly increase the surface area of the cell membrane facing the gut. A larger surface area means more carrier proteins can be present and more glucose can be absorbed at once, so the rate of absorption is increased.",
            markScheme: [
              "Many mitochondria → produce lots of ATP by respiration (1 mark)",
              "ATP is needed for active transport of glucose against the gradient (1 mark)",
              "Microvilli increase the surface area of the membrane (1 mark)",
              "Larger surface area → more carrier proteins / more absorption per unit time (1 mark)",
            ],
            commonError: "Explaining only one feature, or saying microvilli 'absorb glucose' without linking to surface area.",
            guideRef: "Active Transport",
            difficulty: "core",
            hints: [
              "What do mitochondria provide, and why is it needed here?",
              "Link ATP to the carrier proteins of active transport.",
              "What do microvilli do to surface area?",
              "Why does more surface area mean faster absorption?",
            ],
          },
          {
            id: "bio-transport-cell-bq3-10",
            question: "An organism has a body that is long and flattened rather than a compact ball. Suggest and explain how this body shape could help the exchange of substances by diffusion. (4 marks)",
            marks: 4,
            modelAnswer:
              "A long, flattened shape gives the organism a larger surface area compared with its volume than a compact, ball-shaped body of the same volume would have — that is, a higher surface-area-to-volume ratio. A flattened body also means that no inner cell is very far from the surface, so the diffusion distance to the centre is short. Together, the larger surface area and shorter diffusion distance mean that oxygen and nutrients can diffuse in, and waste can diffuse out, fast enough to supply all the cells. This is why some small flat organisms (for example flatworms) can rely on diffusion without specialised exchange or transport systems.",
            markScheme: [
              "Flattened/long shape gives larger surface area relative to volume / higher SA:V (1 mark)",
              "Shorter diffusion distance to inner cells (1 mark)",
              "So substances diffuse in/out fast enough to supply all cells (1 mark)",
              "Example/conclusion: such organisms can rely on diffusion without transport systems (1 mark)",
            ],
            commonError: "Mentioning surface area but not the equally important short diffusion distance.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "challenge",
            hints: [
              "Compare a flat shape with a compact ball of the same volume.",
              "Think about both surface area AND diffusion distance.",
              "Why does a short distance to the centre help?",
              "Conclude what this allows the organism to avoid needing.",
            ],
            strategy: "Bring in both factors — surface area and diffusion distance — because flat shapes improve both.",
          },
        ],
      },
      {
        id: "bio-transport-cell-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Applied and experimental: osmosis practicals, percentage change in mass, and synoptic problems.",
        questions: [
          {
            id: "bio-transport-cell-bq4-01",
            question: "Write the formula used to calculate the percentage change in mass of a potato cylinder, and explain why percentage change is used rather than the change in grams. (3 marks)",
            marks: 3,
            modelAnswer:
              "Percentage change in mass = (final mass − initial mass) ÷ initial mass × 100. Percentage change is used so that cylinders that started with slightly different masses can be compared fairly, because the change is expressed relative to the cylinder's own starting mass rather than as an absolute amount.",
            markScheme: [
              "Formula: (final mass − initial mass) ÷ initial mass × 100 (1 mark)",
              "Allows fair comparison between cylinders (1 mark)",
              "Because it accounts for differences in starting/initial mass (1 mark)",
            ],
            commonError: "Dividing by the final mass instead of the initial mass.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-cell-bq4-02",
            question: "A potato cylinder has an initial mass of 8.0 g and a final mass of 9.2 g after soaking in dilute sucrose. Calculate the percentage change in mass and state what it tells you about the movement of water. (3 marks)",
            marks: 3,
            modelAnswer:
              "Change in mass = 9.2 − 8.0 = +1.2 g.\nPercentage change = (1.2 ÷ 8.0) × 100 = +15%.\nThe positive value (mass gain) shows that water moved into the cells of the potato by osmosis, because the dilute sucrose solution had a higher water potential than the potato cells.",
            markScheme: [
              "Change in mass = +1.2 g (1 mark)",
              "Percentage change = (1.2 ÷ 8.0) × 100 = +15% (1 mark)",
              "Mass gain → water entered cells by osmosis (solution had higher WP) (1 mark)",
            ],
            commonError: "Forgetting the positive sign, or dividing by 9.2 g instead of the initial 8.0 g.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "core",
            hints: [
              "Find the change in mass first: 9.2 − 8.0.",
              "Divide the change by the initial mass (8.0 g).",
              "Multiply by 100 and keep the sign.",
              "A gain in mass means water entered the cells.",
            ],
            strategy: "Compute the change, divide by the initial value, then interpret the sign biologically.",
            solutions: [
              {
                label: "Worked calculation",
                steps: [
                  "Change in mass = final − initial = 9.2 g − 8.0 g = +1.2 g.",
                  "Percentage change = (1.2 ÷ 8.0) × 100.",
                  "= 0.15 × 100 = +15%.",
                  "Positive sign → mass gained → water entered cells by osmosis.",
                ],
              },
            ],
          },
          {
            id: "bio-transport-cell-bq4-03",
            question: "The table shows the percentage change in mass of potato cylinders in different sucrose concentrations:\n\n0.0 mol/dm³ → +14%\n0.2 mol/dm³ → +6%\n0.3 mol/dm³ → 0%\n0.4 mol/dm³ → −7%\n0.6 mol/dm³ → −16%\n\nUsing the data, state the sucrose concentration at which the water potential of the solution equals that of the potato cells, and explain your reasoning. (3 marks)",
            marks: 3,
            modelAnswer:
              "The water potential of the solution equals that of the potato cells at 0.3 mol/dm³ sucrose. At this concentration the percentage change in mass is 0%, meaning there is no net movement of water into or out of the cells. No net movement of water by osmosis happens when the water potential of the solution is equal to the water potential of the cells (isotonic conditions), so this concentration gives an estimate of the cells' water potential.",
            markScheme: [
              "0.3 mol/dm³ (1 mark)",
              "Because the percentage change in mass is 0 / no net mass change (1 mark)",
              "No net water movement occurs when water potentials are equal (isotonic) (1 mark)",
            ],
            commonError: "Reading off a concentration with a small change rather than the zero-change point.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "core",
            hints: [
              "Look for the row where the percentage change is zero.",
              "Zero change means no net water movement.",
              "No net movement means the water potentials are equal.",
            ],
          },
          {
            id: "bio-transport-cell-bq4-04",
            question: "Describe how you would carry out an experiment using potato cylinders to find the concentration of sucrose solution that is isotonic with potato tissue. Include the key variables you would control. (6 marks)",
            marks: 6,
            modelAnswer:
              "Cut several potato cylinders of equal size using a cork borer, and trim them to the same length. Blot them dry and measure the initial mass of each. Prepare a range of sucrose solutions of different known concentrations (for example 0.0, 0.2, 0.4, 0.6, 0.8 and 1.0 mol/dm³) and place one cylinder in each. Leave them for the same fixed time (for example 30 minutes) at the same temperature. Remove the cylinders, blot them dry in the same way, and measure the final mass of each. Calculate the percentage change in mass for each cylinder using (final − initial) ÷ initial × 100. Plot percentage change in mass against sucrose concentration and read off the concentration where the line crosses zero change — this is the isotonic concentration. Controlled variables include: temperature, time in solution, volume of solution, and the size/surface area of the cylinders, so that the only variable changing is the sucrose concentration.",
            markScheme: [
              "Cut equal-sized potato cylinders / measure initial mass (1 mark)",
              "Place in a range of sucrose concentrations (1 mark)",
              "Leave for a set time, then blot and measure final mass (1 mark)",
              "Calculate percentage change in mass for each (1 mark)",
              "Plot graph and find concentration at zero change / isotonic point (1 mark)",
              "Control variables: temperature, time, volume, cylinder size (any two) (1 mark)",
            ],
            commonError: "Forgetting to blot the cylinders dry before weighing (surface water adds mass) or not measuring an initial mass.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "challenge",
            hints: [
              "Start with how you prepare and measure the cylinders.",
              "What range of solutions do you need?",
              "How do you process and weigh the cylinders afterwards?",
              "How do you find the isotonic point from your results?",
            ],
            strategy: "Structure the method as a sequence: prepare, measure initial, treat, measure final, calculate, plot, conclude — then list controls.",
          },
          {
            id: "bio-transport-cell-bq4-05",
            question: "In a visking tubing experiment, a bag containing a mixture of starch and glucose is placed in distilled water. After 30 minutes, the surrounding water is tested with iodine solution (which detects starch) and with Benedict's solution (which detects reducing sugar). The iodine stays orange-brown but the Benedict's test gives a brick-red result. Explain these results. (4 marks)",
            marks: 4,
            modelAnswer:
              "The Benedict's test going brick-red shows that glucose (a reducing sugar) has passed out of the bag into the surrounding water. The iodine staying orange-brown shows that starch has not passed out of the bag. This is because the visking tubing is a partially permeable membrane: glucose molecules are small enough to diffuse through its pores into the water, but starch molecules are too large to pass through. So glucose diffuses out down its concentration gradient while starch is retained inside the bag.",
            markScheme: [
              "Benedict's brick-red → glucose has left the bag (into the water) (1 mark)",
              "Iodine stays orange-brown → starch has NOT left the bag (1 mark)",
              "Visking tubing is partially permeable: small glucose passes, large starch does not (1 mark)",
              "Glucose diffuses out down its concentration gradient (1 mark)",
            ],
            commonError: "Mixing up the indicators, or saying starch passed through because the small molecules did.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "core",
            hints: [
              "What does a brick-red Benedict's result tell you is present?",
              "What does iodine staying orange-brown tell you is absent?",
              "Compare the sizes of glucose and starch molecules.",
              "Relate this to the membrane being partially permeable.",
            ],
          },
          {
            id: "bio-transport-cell-bq4-06",
            question: "A student investigating diffusion places agar cubes containing dilute alkali and indicator into acid. The acid diffuses in and changes the indicator colour. Cubes used are 1 cm, 2 cm and 3 cm on a side. Predict which cube changes colour throughout fastest and explain using surface-area-to-volume ratio and diffusion distance. (4 marks)",
            marks: 4,
            modelAnswer:
              "The 1 cm cube changes colour throughout fastest. It has the highest surface-area-to-volume ratio (SA:V = 6/1 = 6, compared with 3 for the 2 cm cube and 2 for the 3 cm cube), so it has a large surface area for acid to enter relative to its volume. It also has the shortest distance from its surface to its centre, so the acid has the least far to diffuse to reach the middle. Together, these mean the acid penetrates the whole of the smallest cube in the least time, so it changes colour throughout first.",
            markScheme: [
              "1 cm cube is fastest (1 mark)",
              "It has the highest SA:V ratio (e.g. 6 vs 3 vs 2) (1 mark)",
              "Shortest diffusion distance from surface to centre (1 mark)",
              "So acid penetrates the whole cube fastest → changes colour throughout first (1 mark)",
            ],
            commonError: "Citing surface area alone and ignoring the shorter diffusion distance for the small cube.",
            guideRef: "Surface Area to Volume Ratio",
            difficulty: "core",
            hints: [
              "Work out SA:V for each cube (6/l).",
              "Which cube has the largest SA:V?",
              "Which cube has the shortest distance to its centre?",
              "Combine both effects to choose the fastest.",
            ],
            strategy: "Quote the SA:V values to support the prediction, and add the diffusion-distance argument.",
          },
          {
            id: "bio-transport-cell-bq4-07",
            question: "Five identical potato cylinders, each of initial mass 4.0 g, were placed in different sucrose solutions. Their final masses were: A 4.4 g, B 4.0 g, C 3.6 g. Calculate the percentage change in mass for cylinders A, B and C, and state which solution was most concentrated. (4 marks)",
            marks: 4,
            modelAnswer:
              "Cylinder A: change = 4.4 − 4.0 = +0.4 g; percentage change = (0.4 ÷ 4.0) × 100 = +10%.\nCylinder B: change = 4.0 − 4.0 = 0 g; percentage change = 0%.\nCylinder C: change = 3.6 − 4.0 = −0.4 g; percentage change = (−0.4 ÷ 4.0) × 100 = −10%.\nCylinder C lost the most mass, so the most water left its cells by osmosis. This means its surrounding solution had the lowest water potential, so cylinder C was in the most concentrated sucrose solution.",
            markScheme: [
              "A: +10% (1 mark)",
              "B: 0% (1 mark)",
              "C: −10% (1 mark)",
              "C was in the most concentrated solution (greatest mass loss / lowest water potential) (1 mark)",
            ],
            commonError: "Forgetting the signs, or assuming the highest final mass corresponds to the most concentrated solution.",
            guideRef: "Osmosis Experiments: Potato and Visking Tubing",
            difficulty: "core",
            hints: [
              "Find the change in mass for each cylinder.",
              "Divide each change by the initial mass of 4.0 g, then ×100.",
              "Keep the signs to show gain or loss.",
              "Most water lost = most concentrated solution.",
            ],
            strategy: "Calculate all three percentages, then use the most negative value to identify the most concentrated solution.",
            solutions: [
              {
                label: "Each cylinder worked out",
                steps: [
                  "A: change = +0.4 g; (0.4 ÷ 4.0) × 100 = +10%.",
                  "B: change = 0 g; percentage change = 0%.",
                  "C: change = −0.4 g; (−0.4 ÷ 4.0) × 100 = −10%.",
                  "C lost the most mass, so it was in the solution with the lowest water potential — the most concentrated.",
                ],
              },
            ],
          },
          {
            id: "bio-transport-cell-bq4-08",
            question: "A drop of ink is added to a beaker of hot water and a beaker of cold water at the same time. Describe and explain the difference you would expect to see, and identify the variable being investigated. (4 marks)",
            marks: 4,
            modelAnswer:
              "The ink would spread out and colour the hot water evenly more quickly than the cold water. This is because at the higher temperature the water particles and ink particles have more kinetic energy, so they move faster and more randomly. Faster particle movement means the ink diffuses from its high concentration to the lower-concentration regions of water more quickly, so the colour becomes uniform sooner. The variable being investigated is temperature, and its effect on the rate of diffusion.",
            markScheme: [
              "Ink spreads/colours the hot water faster than the cold water (1 mark)",
              "At higher temperature particles have more kinetic energy / move faster (1 mark)",
              "Faster diffusion down the concentration gradient (1 mark)",
              "Variable investigated = temperature (effect on diffusion rate) (1 mark)",
            ],
            commonError: "Saying the ink dissolves faster without explaining diffusion in terms of particle movement.",
            guideRef: "Diffusion",
            difficulty: "core",
            hints: [
              "Which beaker becomes uniformly coloured first?",
              "What does higher temperature do to particle energy?",
              "Link faster particle movement to faster diffusion.",
              "Name the variable being tested.",
            ],
          },
          {
            id: "bio-transport-cell-bq4-09",
            question: "Explain, with reasons, why active transport and a large surface area are both needed for efficient absorption of glucose in the small intestine, especially as digestion nears completion. (5 marks)",
            marks: 5,
            modelAnswer:
              "As digestion nears completion, much of the glucose in the gut has already been absorbed, so its concentration in the gut lumen can fall below the concentration inside the epithelial cells. At this point diffusion cannot move glucose into the cells, because diffusion only moves substances from high to low concentration. Active transport is therefore needed to move glucose from the lower concentration in the lumen into the higher concentration in the cell, against the gradient, using ATP from respiration and carrier proteins. This allows almost all the glucose to be absorbed rather than being lost. A large surface area, provided by villi and microvilli, increases the number of carrier proteins and the area available, so the rate of absorption is high and the glucose is taken up quickly while food is in the intestine.",
            markScheme: [
              "Near end of digestion, glucose in lumen falls below that in the cell (1 mark)",
              "Diffusion cannot move glucose against this gradient (1 mark)",
              "Active transport moves glucose against the gradient using ATP / carrier proteins (1 mark)",
              "This allows nearly all glucose to be absorbed (not lost) (1 mark)",
              "Large surface area (villi/microvilli) increases rate / amount absorbed (1 mark)",
            ],
            commonError: "Explaining only active transport or only surface area; the question requires both, linked to the falling gradient.",
            guideRef: "Active Transport",
            difficulty: "challenge",
            hints: [
              "What happens to glucose concentration in the lumen late in digestion?",
              "Why can diffusion no longer absorb it?",
              "How does active transport overcome this, and what does it need?",
              "Why does a large surface area also matter for the rate?",
            ],
            strategy: "Connect the changing concentration gradient to the switch from diffusion to active transport, then add the surface-area benefit.",
          },
          {
            id: "bio-transport-cell-bq4-10",
            question: "A student says: 'Both osmosis and active transport move things across membranes, so they are basically the same.' Evaluate this statement, giving at least three points of difference. (5 marks)",
            marks: 5,
            modelAnswer:
              "The statement is incorrect: although osmosis and active transport both move substances across a cell membrane, they differ in several important ways. First, osmosis moves only water molecules, whereas active transport moves dissolved molecules or ions such as glucose and mineral ions. Second, osmosis is passive and needs no energy from the cell, moving water down a water potential gradient, whereas active transport requires energy in the form of ATP from respiration. Third, osmosis moves water from a higher to a lower water potential (down the gradient), whereas active transport moves substances against their concentration gradient, from a lower to a higher concentration. In addition, active transport requires carrier proteins, while osmosis does not. So the two processes are clearly different despite both involving membranes.",
            markScheme: [
              "Statement judged incorrect / they are different (1 mark)",
              "Osmosis moves water; active transport moves ions/molecules (1 mark)",
              "Osmosis is passive (no energy); active transport needs ATP/energy (1 mark)",
              "Osmosis is down the gradient; active transport is against the gradient (1 mark)",
              "Active transport needs carrier proteins (any valid extra difference) (1 mark)",
            ],
            commonError: "Listing differences without an overall evaluation, or confusing which process is passive.",
            guideRef: "Active Transport",
            difficulty: "challenge",
            hints: [
              "Decide first whether the statement is right or wrong.",
              "Compare WHAT each process moves.",
              "Compare the energy requirement of each.",
              "Compare the direction relative to the gradient, and the need for carrier proteins.",
            ],
            strategy: "Give a clear verdict, then support it with contrasted differences (substance moved, energy, gradient direction, proteins).",
          },
        ],
      },
    ],
  },
};
