import type { Topic } from "../types";

export const bioTransportAnimals: Topic = {
  id: "bio-transport-animals",
  title: "Transport in Animals",
  subject: "biology",
  icon: "❤️",
  blurb: "Heart structure, blood vessels, blood components and the double circulatory system.",
  intro:
    "Every cell in your body needs a constant delivery of oxygen and glucose and a removal of carbon dioxide and waste — but diffusion alone is far too slow over large distances. Animals evolved a circulatory system: a pump (the heart), a network of vessels, and a specialised transport fluid (blood). In this topic you will trace every drop of blood through the double circulation, dissect the heart valve by valve, compare the three vessel types structure-to-function, and examine the four components of blood — then apply all of this to coronary heart disease and the physiology of exercise.",

  // ─────────────────────────────────────────────────────────────────────────
  // GUIDE
  // ─────────────────────────────────────────────────────────────────────────
  guide: [
    // ── SECTION 1 ──────────────────────────────────────────────────────────
    {
      heading: "The Double Circulatory System",
      body: `In a **single** circulatory system (like a fish), blood passes through the heart once per complete circuit: heart → gills → body → heart. After the gills, blood pressure has already dropped, so flow to the organs is sluggish.

In a **double** circulatory system (mammals and birds), there are two separate loops driven by the same heart acting as a double pump:

- **Pulmonary circulation**: right side of heart → lungs → left side of heart. Blood picks up O₂ and loses CO₂.
- **Systemic circulation**: left side of heart → body organs → right side of heart. Blood delivers O₂ and nutrients, collects CO₂ and waste.

Because the blood returns to the heart between the two circuits, the left ventricle can repressurize it before sending it to the body, maintaining a high pressure throughout the systemic circuit.`,
      discovery: {
        problem:
          "A fish pumps blood through its gills, then on to its body muscles. A human pumps blood through its lungs, then back to the heart before sending it to the body muscles. Why might the human design allow a more active lifestyle?",
        idea:
          "Flowing through a dense capillary bed (gills or lungs) drops blood pressure significantly. In a single circulation the body receives low-pressure blood. Returning blood to the heart first lets the powerful left ventricle re-pressurise it, so organs receive blood at high pressure — enabling faster delivery of O₂ and greater metabolic activity.",
      },
      whyItWorks:
        "Pressure = force per unit area. Capillary beds are high-resistance networks that dissipate pressure. By interposing the heart between the pulmonary and systemic beds, mammals restore the driving force (pressure gradient) needed to perfuse organs at adequate flow rates. The thicker muscular left ventricle generates the extra force required.",
      keyPoints: [
        "Double circulation = pulmonary loop + systemic loop, both driven by the same heart.",
        "Blood is re-pressurised by the left ventricle after returning from the lungs.",
        "This gives mammals higher blood pressure in the systemic circuit than fish achieve.",
        "Separation of oxygenated and deoxygenated blood prevents mixing, maximising efficiency.",
        "Advantage: higher, sustained metabolic rates — supports an active endothermic lifestyle.",
      ],
      diagrams: [
        {
          caption: "The double circulatory system — pulmonary and systemic loops",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Double circulatory system showing pulmonary and systemic circuits">
  <!-- Heart -->
  <rect x="130" y="80" width="60" height="50" rx="8" fill="#fb7185" stroke="#fbbf24" stroke-width="2"/>
  <text x="160" y="100" text-anchor="middle" font-size="9" fill="#1e1b4b" font-weight="bold">RIGHT</text>
  <text x="160" y="112" text-anchor="middle" font-size="9" fill="#1e1b4b">HEART</text>
  <text x="160" y="124" text-anchor="middle" font-size="9" fill="#1e1b4b">LEFT</text>
  <!-- Lungs box -->
  <rect x="115" y="10" width="90" height="30" rx="6" fill="#38bdf8" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="160" y="29" text-anchor="middle" font-size="10" fill="#1e1b4b" font-weight="bold">LUNGS</text>
  <!-- Body box -->
  <rect x="115" y="160" width="90" height="30" rx="6" fill="#34d399" stroke="#34d399" stroke-width="1.5"/>
  <text x="160" y="179" text-anchor="middle" font-size="10" fill="#1e1b4b" font-weight="bold">BODY</text>
  <!-- Right side to lungs (deoxygenated, blue) -->
  <line x1="145" y1="80" x2="145" y2="40" stroke="#93c5fd" stroke-width="3" marker-end="url(#arrowB)"/>
  <!-- Lungs to left side (oxygenated, red) -->
  <line x1="175" y1="40" x2="175" y2="80" stroke="#fb7185" stroke-width="3" marker-end="url(#arrowR)"/>
  <!-- Left side to body (oxygenated, red) -->
  <line x1="175" y1="130" x2="175" y2="160" stroke="#fb7185" stroke-width="3" marker-end="url(#arrowR)"/>
  <!-- Body to right side (deoxygenated, blue) -->
  <line x1="145" y1="160" x2="145" y2="130" stroke="#93c5fd" stroke-width="3" marker-end="url(#arrowB)"/>
  <!-- Labels -->
  <text x="88" y="60" font-size="8" fill="#93c5fd">pulmonary</text>
  <text x="88" y="70" font-size="8" fill="#93c5fd">artery</text>
  <text x="195" y="60" font-size="8" fill="#fb7185">pulmonary</text>
  <text x="195" y="70" font-size="8" fill="#fb7185">vein</text>
  <text x="185" y="148" font-size="8" fill="#fb7185">aorta</text>
  <text x="88" y="148" font-size="8" fill="#93c5fd">vena cava</text>
  <!-- Arrow defs -->
  <defs>
    <marker id="arrowB" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#93c5fd"/>
    </marker>
    <marker id="arrowR" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#fb7185"/>
    </marker>
  </defs>
  <!-- Legend -->
  <rect x="10" y="10" width="10" height="6" fill="#fb7185"/>
  <text x="24" y="17" font-size="7" fill="#b7bce0">oxygenated</text>
  <rect x="10" y="20" width="10" height="6" fill="#93c5fd"/>
  <text x="24" y="27" font-size="7" fill="#b7bce0">deoxygenated</text>
</svg>`,
        },
      ],
    },

    // ── SECTION 2 ──────────────────────────────────────────────────────────
    {
      heading: "Structure of the Heart",
      body: `The heart is a four-chambered muscular pump. The **right side** receives deoxygenated blood and pumps it to the lungs; the **left side** receives oxygenated blood and pumps it to the body.

**Chambers:**
- **Right atrium** — receives deoxygenated blood from the body via the **vena cava** (superior + inferior).
- **Right ventricle** — pumps deoxygenated blood to the lungs via the **pulmonary artery**.
- **Left atrium** — receives oxygenated blood from the lungs via the **pulmonary vein**.
- **Left ventricle** — pumps oxygenated blood to the body via the **aorta**.

**The septum** is the muscular wall dividing the right and left sides, preventing mixing of oxygenated and deoxygenated blood.

**Valves prevent backflow:**
- **Atrioventricular (AV) valves** (between atria and ventricles): right = tricuspid, left = bicuspid/mitral. They open when atria contract and close when ventricles contract.
- **Semilunar valves** (at the base of pulmonary artery and aorta): open when ventricles contract; close when ventricles relax to prevent backflow from the arteries.

**Wall thickness:** The left ventricle has a **much thicker muscular wall** than the right ventricle. It must generate higher pressure to pump blood around the entire systemic circuit (a much greater resistance and distance than the short pulmonary circuit).

**Coronary arteries** are small arteries that branch from the aorta and supply the heart muscle itself with oxygenated blood and glucose.`,
      discovery: {
        problem:
          "When you dissect a heart, the left ventricle wall is roughly three times thicker than the right ventricle wall. Both pump the same volume per beat. Why would evolution produce such different wall thicknesses for chambers doing 'the same job'?",
        idea:
          "Pressure = force / area. The two ventricles pump the same volume (stroke volume), but to different destinations. The pulmonary circuit is short and low-resistance; the systemic circuit is long and high-resistance. The left ventricle needs far more muscular force to overcome systemic resistance, so natural selection favoured a thicker wall. Thicker wall = more muscle fibres in parallel = greater force without a larger chamber.",
      },
      whyItWorks:
        "Cardiac muscle (myocardium) obeys Starling's law: the more it is stretched (filled), the stronger it contracts. Greater wall thickness means more contractile units (sarcomeres in series in each fibre, and more fibres), allowing the left ventricle to generate systolic pressures around 120 mmHg compared to the right ventricle's ~25 mmHg.",
      thinkDeeper:
        "If the septum had a hole (ventricular septal defect — a common congenital heart condition), oxygenated and deoxygenated blood would mix. How would this affect oxygen delivery to body tissues? Consider that the mixing reduces the average oxygen saturation of blood reaching the aorta.",
      strategies: [
        "Draw a diagram: sketch the heart from memory, label atria, ventricles, valves, and vessels before reading — then correct it.",
        "Left = systemic = thicker wall: associate 'L' with 'Long journey' and 'Large force'.",
        "Trace the blood: follow a single red blood cell from the vena cava all the way around both loops.",
      ],
      keyPoints: [
        "Four chambers: right atrium, right ventricle, left atrium, left ventricle.",
        "Vena cava (in) → right atrium → right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium → left ventricle → aorta (out).",
        "Septum separates the two sides, preventing mixing of oxygenated and deoxygenated blood.",
        "AV valves prevent backflow into atria when ventricles contract; semilunar valves prevent backflow from arteries when ventricles relax.",
        "Left ventricle wall is thicker than right because it pumps against higher resistance in the systemic circuit.",
        "Coronary arteries supply the heart muscle itself with oxygenated blood.",
      ],
      diagrams: [
        {
          caption: "Cross-section of the heart showing chambers, valves and major vessels",
          svg: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of the heart labelled with chambers valves and vessels">
  <!-- Outer heart shape -->
  <ellipse cx="160" cy="130" rx="100" ry="85" fill="#7f1d1d" stroke="#fb7185" stroke-width="2"/>
  <!-- Septum -->
  <line x1="160" y1="60" x2="160" y2="200" stroke="#fbbf24" stroke-width="3"/>
  <!-- Right atrium -->
  <ellipse cx="115" cy="95" rx="38" ry="28" fill="#1e3a5f" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="115" y="92" text-anchor="middle" font-size="8" fill="#93c5fd" font-weight="bold">Right</text>
  <text x="115" y="103" text-anchor="middle" font-size="8" fill="#93c5fd">Atrium</text>
  <!-- Left atrium -->
  <ellipse cx="205" cy="95" rx="38" ry="28" fill="#4c1d1d" stroke="#fb7185" stroke-width="1.5"/>
  <text x="205" y="92" text-anchor="middle" font-size="8" fill="#fb7185" font-weight="bold">Left</text>
  <text x="205" y="103" text-anchor="middle" font-size="8" fill="#fb7185">Atrium</text>
  <!-- Right ventricle (thinner wall) -->
  <ellipse cx="115" cy="163" rx="38" ry="30" fill="#1e3a5f" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="115" y="160" text-anchor="middle" font-size="8" fill="#93c5fd" font-weight="bold">Right</text>
  <text x="115" y="171" text-anchor="middle" font-size="8" fill="#93c5fd">Ventricle</text>
  <!-- Left ventricle (thick wall indicated by border) -->
  <ellipse cx="205" cy="163" rx="38" ry="30" fill="#4c1d1d" stroke="#fb7185" stroke-width="4"/>
  <text x="205" y="160" text-anchor="middle" font-size="8" fill="#fb7185" font-weight="bold">Left</text>
  <text x="205" y="171" text-anchor="middle" font-size="8" fill="#fb7185">Ventricle</text>
  <!-- Tricuspid valve indicator -->
  <line x1="100" y1="125" x2="130" y2="125" stroke="#a78bfa" stroke-width="2" stroke-dasharray="3,2"/>
  <!-- Bicuspid valve indicator -->
  <line x1="190" y1="125" x2="220" y2="125" stroke="#a78bfa" stroke-width="2" stroke-dasharray="3,2"/>
  <!-- Vena cava -->
  <rect x="48" y="78" width="28" height="12" rx="3" fill="#93c5fd"/>
  <text x="62" y="71" text-anchor="middle" font-size="7" fill="#93c5fd">vena cava</text>
  <!-- Pulmonary artery -->
  <rect x="78" y="44" width="50" height="12" rx="3" fill="#93c5fd"/>
  <text x="103" y="40" text-anchor="middle" font-size="7" fill="#93c5fd">pulmonary artery</text>
  <!-- Pulmonary vein -->
  <rect x="192" y="44" width="50" height="12" rx="3" fill="#fb7185"/>
  <text x="217" y="40" text-anchor="middle" font-size="7" fill="#fb7185">pulmonary vein</text>
  <!-- Aorta -->
  <rect x="244" y="78" width="28" height="12" rx="3" fill="#fb7185"/>
  <text x="258" y="71" text-anchor="middle" font-size="7" fill="#fb7185">aorta</text>
  <!-- Septum label -->
  <text x="160" y="210" text-anchor="middle" font-size="8" fill="#fbbf24">septum</text>
  <!-- Valve labels -->
  <text x="115" y="122" text-anchor="middle" font-size="7" fill="#a78bfa">tricuspid</text>
  <text x="205" y="122" text-anchor="middle" font-size="7" fill="#a78bfa">bicuspid</text>
  <!-- Thick wall label -->
  <text x="248" y="165" font-size="7" fill="#fbbf24">thick wall</text>
</svg>`,
        },
      ],
    },

    // ── SECTION 3 ──────────────────────────────────────────────────────────
    {
      heading: "The Cardiac Cycle and Valve Function",
      body: `The **cardiac cycle** is one complete heartbeat — about 0.8 s at rest (75 bpm).

**Phases:**

1. **Diastole (relaxation):** Both atria and ventricles relax. Blood flows passively from the vena cava and pulmonary veins into the atria (and partly into the ventricles). AV valves are open; semilunar valves are closed.

2. **Atrial systole (atrial contraction):** Atria contract, pushing remaining blood through open AV valves into the ventricles. Ventricles are now fully filled.

3. **Ventricular systole (ventricular contraction):** Ventricles contract strongly. Pressure rises, forcing AV valves shut (preventing backflow into atria) and forcing semilunar valves open. Blood is ejected into the pulmonary artery (right) and aorta (left). When ventricles relax, arterial pressure closes the semilunar valves.

**The 'lub-dub' heart sounds:**
- **Lub** = AV valves snapping shut at the start of ventricular systole.
- **Dub** = semilunar valves snapping shut at the end of ventricular systole.

**Valves work passively — driven purely by pressure differences.** When the pressure in a chamber exceeds the pressure on the other side of a valve, it is forced open; when the pressure is lower, it is pushed shut. No muscular control is needed.

**Heart rate** is controlled by the sino-atrial node (SAN) — the pacemaker — in the right atrium wall. It sends electrical impulses that spread across both atria (causing atrial systole), reach the atrio-ventricular node (AVN), then travel down conducting fibres (bundle of His / Purkinje fibres) to trigger ventricular systole.`,
      keyPoints: [
        "Cardiac cycle: diastole → atrial systole → ventricular systole, cycling continuously.",
        "AV valves close when ventricular pressure exceeds atrial pressure — preventing backflow into atria.",
        "Semilunar valves close when arterial pressure exceeds ventricular pressure — preventing backflow from arteries.",
        "The SAN (pacemaker) initiates each heartbeat by producing electrical impulses.",
        "'Lub' = AV valves closing; 'Dub' = semilunar valves closing.",
      ],
    },

    // ── SECTION 4 ──────────────────────────────────────────────────────────
    {
      heading: "Blood Vessels: Structure and Function",
      body: `Three types of blood vessel carry blood around the body. Each has a structure precisely matched to its function.

**Arteries** — carry blood AWAY from the heart (mostly oxygenated, except pulmonary artery).
- Thick, muscular, elastic walls to withstand and smooth out the high-pressure surges from ventricular contraction.
- Narrow lumen relative to wall thickness.
- No valves — blood pressure keeps flow in one direction.
- Elastic recoil maintains blood pressure between heartbeats (you feel this as a pulse).

**Veins** — carry blood TOWARDS the heart (mostly deoxygenated, except pulmonary vein).
- Thin walls — blood is at low pressure after passing through capillaries.
- Wide lumen — reduces resistance and aids flow.
- **Valves** (pocket/semilunar valves) prevent backflow; skeletal muscle contractions around veins squeeze blood towards the heart.

**Capillaries** — microscopic vessels forming the exchange surface in organs.
- Walls are just ONE cell thick (single layer of endothelium) — minimises diffusion distance.
- Very large total surface area across all capillary networks.
- Narrow lumen forces red blood cells to pass in single file, slowing them and maximising exchange time.
- Permeable to water, glucose, amino acids, O₂, CO₂ — allowing exchange with tissue fluid.`,
      discovery: {
        problem:
          "Imagine two vessels: vessel X has a wall 1 mm thick with a narrow lumen; vessel Y has a wall 0.02 mm thick (one cell) with a lumen barely wider than a red blood cell. Before reading further, predict which carries blood under high pressure from the heart, and which is the site of exchange with tissues. What clues did you use?",
        idea:
          "Vessel X is an artery: thick walls resist the high pressure generated by ventricular contraction. Vessel Y is a capillary: the single-cell wall minimises the diffusion distance for gases and nutrients. The lumen width is the key clue — capillaries must be narrow enough to create a large surface-area-to-volume ratio and slow red blood cells for efficient exchange.",
      },
      whyItWorks:
        "Fick's law states that the rate of diffusion is proportional to surface area and concentration gradient, and inversely proportional to diffusion distance. Capillaries maximise surface area (huge network) and minimise distance (one-cell wall ~0.5 µm). Slowing blood cells extends contact time, sustaining the concentration gradient at the exchange surface.",
      strategies: [
        "Mnemonic: 'Arteries Away, Veins Visit' — arteries carry blood away from the heart.",
        "Structure-to-function: for any vessel, ask 'what pressure is the blood at here?' to predict wall thickness and lumen size.",
        "Valves only in veins (and the heart) — veins need valves because pressure is too low to prevent backflow otherwise.",
      ],
      keyPoints: [
        "Arteries: thick muscular/elastic walls, narrow lumen, no valves — high pressure, away from heart.",
        "Veins: thin walls, wide lumen, valves present — low pressure, towards heart.",
        "Capillaries: one-cell-thick wall, tiny lumen — site of exchange between blood and tissues.",
        "Elastic arteries stretch during systole and recoil during diastole, maintaining steady pressure.",
        "Venous return aided by valves and surrounding skeletal muscle contractions.",
      ],
      diagrams: [
        {
          caption: "Cross-sections of artery, vein and capillary showing structural differences",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-sections of artery vein and capillary comparing structure">
  <!-- ARTERY -->
  <circle cx="60" cy="100" r="46" fill="none" stroke="#fb7185" stroke-width="14"/>
  <circle cx="60" cy="100" r="20" fill="#fb7185" fill-opacity="0.25" stroke="#fb7185" stroke-width="1"/>
  <text x="60" y="172" text-anchor="middle" font-size="10" fill="#fb7185" font-weight="bold">Artery</text>
  <text x="60" y="183" text-anchor="middle" font-size="8" fill="#b7bce0">thick wall</text>
  <text x="60" y="194" text-anchor="middle" font-size="8" fill="#b7bce0">narrow lumen</text>
  <!-- VEIN -->
  <circle cx="160" cy="100" r="50" fill="none" stroke="#93c5fd" stroke-width="6"/>
  <circle cx="160" cy="100" r="40" fill="#93c5fd" fill-opacity="0.15" stroke="#93c5fd" stroke-width="1"/>
  <!-- vein valves -->
  <path d="M148,80 L160,94 L172,80" fill="none" stroke="#a78bfa" stroke-width="2"/>
  <path d="M148,120 L160,106 L172,120" fill="none" stroke="#a78bfa" stroke-width="2"/>
  <text x="160" y="172" text-anchor="middle" font-size="10" fill="#93c5fd" font-weight="bold">Vein</text>
  <text x="160" y="183" text-anchor="middle" font-size="8" fill="#b7bce0">thin wall, valves</text>
  <text x="160" y="194" text-anchor="middle" font-size="8" fill="#b7bce0">wide lumen</text>
  <!-- CAPILLARY -->
  <circle cx="260" cy="100" r="16" fill="none" stroke="#34d399" stroke-width="2"/>
  <circle cx="260" cy="100" r="10" fill="#34d399" fill-opacity="0.2" stroke="#34d399" stroke-width="1"/>
  <text x="260" y="172" text-anchor="middle" font-size="10" fill="#34d399" font-weight="bold">Capillary</text>
  <text x="260" y="183" text-anchor="middle" font-size="8" fill="#b7bce0">1-cell wall</text>
  <text x="260" y="194" text-anchor="middle" font-size="8" fill="#b7bce0">tiny lumen</text>
  <!-- Heading -->
  <text x="160" y="18" text-anchor="middle" font-size="11" fill="#eef0ff" font-weight="bold">Blood Vessel Cross-sections</text>
  <!-- Wall thickness labels -->
  <line x1="60" y1="54" x2="60" y2="80" stroke="#fb7185" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="60" y="49" text-anchor="middle" font-size="7" fill="#fb7185">thick</text>
  <text x="60" y="58" text-anchor="middle" font-size="7" fill="#fb7185">wall</text>
</svg>`,
        },
      ],
    },

    // ── SECTION 5 ──────────────────────────────────────────────────────────
    {
      heading: "Blood Components and Functions",
      body: `Blood is a **tissue** composed of cells suspended in a liquid called **plasma**.

**Plasma (~55% of blood volume):**
- Pale yellow liquid, mostly water.
- Transports: dissolved nutrients (glucose, amino acids), hormones, CO₂ (as hydrogencarbonate ions), urea (waste), heat, plasma proteins, antibodies (immunoglobulins), fibrinogen (for clotting).

**Red blood cells (erythrocytes):**
- No nucleus (more space for haemoglobin) — biconcave disc shape (increases surface area for gas exchange).
- Packed with **haemoglobin** — a red iron-containing protein that reversibly binds O₂:
  - In the lungs (high O₂): haemoglobin + O₂ → **oxyhaemoglobin** (bright red)
  - In tissues (low O₂): oxyhaemoglobin → haemoglobin + O₂ (released to cells)
- CO₂ is mainly transported as hydrogencarbonate ions in plasma; some is carried by haemoglobin.

**White blood cells (leucocytes):**
- Have a nucleus. Much fewer in number than red blood cells.
- **Phagocytes** (e.g. neutrophils, monocytes): engulf and digest pathogens by phagocytosis (non-specific immunity).
- **Lymphocytes**: produce **antibodies** — proteins that bind specifically to antigens on pathogens, marking them for destruction (specific/adaptive immunity). Some lymphocytes become memory cells.

**Platelets (thrombocytes):**
- Tiny cell fragments (no nucleus).
- Clump together at a wound and release chemicals that trigger the clotting cascade: fibrinogen → fibrin threads → mesh trapping red blood cells → clot (scab) forms to prevent further blood loss and entry of pathogens.`,
      thinkDeeper:
        "Haemoglobin carries O₂ cooperatively — the first O₂ binding makes subsequent bindings easier (sigmoidal dissociation curve). At the low O₂ partial pressure of actively respiring muscles, oxyhaemoglobin unloads O₂ rapidly. How might this cooperativity be advantageous compared to a simple linear binding relationship?",
      keyPoints: [
        "Plasma transports dissolved nutrients, hormones, CO₂ (as HCO₃⁻), urea, and heat.",
        "Red blood cells: no nucleus, biconcave, packed with haemoglobin — carry O₂ as oxyhaemoglobin.",
        "Phagocytes engulf pathogens (non-specific); lymphocytes produce antibodies (specific).",
        "Platelets initiate clotting: fibrinogen → fibrin mesh → scab.",
        "CO₂ is mainly transported dissolved in plasma as hydrogencarbonate ions (HCO₃⁻).",
      ],
    },

    // ── SECTION 6 ──────────────────────────────────────────────────────────
    {
      heading: "Coronary Heart Disease and Exercise",
      body: `**Coronary heart disease (CHD)** occurs when the coronary arteries (which supply the heart muscle) become narrowed by the build-up of **atherosclerotic plaques** (deposits of fatty material, mainly cholesterol and dead cells) inside the arterial wall. This reduces blood flow to the heart muscle (myocardium), reducing oxygen and glucose supply.

**Risk factors for CHD:**
- **Diet high in saturated fat and cholesterol** — raises blood LDL cholesterol levels, promoting plaque formation.
- **Smoking** — nicotine raises blood pressure; carbon monoxide binds haemoglobin, reducing O₂ carrying capacity; chemicals damage arterial walls, encouraging plaque formation.
- **Lack of physical exercise** — associated with higher body mass, raised blood pressure, and less efficient cardiovascular function.
- **Stress** — raises blood pressure and heart rate chronically; stress hormones promote plaque instability.
- **Genetic factors / family history** — inherited tendency towards high cholesterol or hypertension.

**Prevention of CHD:**
- Diet: reduce saturated fats, increase unsaturated fats, fruit, vegetables, dietary fibre.
- Stop smoking.
- Regular aerobic exercise (30 min, 5 days/week) strengthens the heart, lowers resting blood pressure.
- Medication (e.g. statins to lower cholesterol, antihypertensives).

**Effect of physical activity on heart rate:**
During exercise, muscles respire faster, producing more CO₂ and consuming more O₂. Receptors detect CO₂ increase; the nervous system signals the SAN to increase heart rate. Heart rate rises to deliver more O₂ and remove CO₂ faster.

After exercise stops, heart rate returns to resting level as CO₂ levels fall. Fit individuals have a lower resting heart rate (stronger heart pumps more blood per beat — higher stroke volume) and recover more quickly after exercise.`,
      strategies: [
        "Link the risk factor to the mechanism: smoking → CO reduces O₂ capacity AND damages walls → plaques form.",
        "Data questions: check axes carefully — heart rate vs time usually shows a lag after exercise starts and a gradual recovery.",
        "For 'explain why heart rate increases during exercise' always mention CO₂, receptors, and the SAN.",
      ],
      keyPoints: [
        "CHD is caused by narrowing of coronary arteries by fatty plaques (atherosclerosis), reducing O₂ supply to heart muscle.",
        "Risk factors: high saturated fat diet, smoking, lack of exercise, stress, genetic predisposition.",
        "Exercise prevention: strengthens cardiac muscle, lowers resting heart rate, reduces blood pressure.",
        "During exercise: CO₂ rise detected → SAN stimulated → heart rate increases.",
        "Fitter individuals have lower resting heart rate and faster recovery after exercise.",
      ],
      diagrams: [
        {
          caption: "Heart rate response to exercise and recovery — typical graph pattern",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph showing heart rate increasing with exercise then recovering during rest">
  <!-- Axes -->
  <line x1="40" y1="160" x2="300" y2="160" stroke="#b7bce0" stroke-width="2"/>
  <line x1="40" y1="20" x2="40" y2="160" stroke="#b7bce0" stroke-width="2"/>
  <!-- Y axis label -->
  <text x="14" y="95" font-size="9" fill="#b7bce0" transform="rotate(-90,14,95)">Heart rate (bpm)</text>
  <!-- X axis label -->
  <text x="165" y="178" text-anchor="middle" font-size="9" fill="#b7bce0">Time</text>
  <!-- Y ticks -->
  <text x="35" y="164" text-anchor="end" font-size="8" fill="#b7bce0">60</text>
  <text x="35" y="120" text-anchor="end" font-size="8" fill="#b7bce0">100</text>
  <text x="35" y="76" text-anchor="end" font-size="8" fill="#b7bce0">140</text>
  <text x="35" y="32" text-anchor="end" font-size="8" fill="#b7bce0">180</text>
  <line x1="38" y1="120" x2="42" y2="120" stroke="#b7bce0" stroke-width="1"/>
  <line x1="38" y1="76" x2="42" y2="76" stroke="#b7bce0" stroke-width="1"/>
  <line x1="38" y1="32" x2="42" y2="32" stroke="#b7bce0" stroke-width="1"/>
  <!-- X regions -->
  <line x1="130" y1="155" x2="130" y2="165" stroke="#b7bce0" stroke-width="1"/>
  <line x1="210" y1="155" x2="210" y2="165" stroke="#b7bce0" stroke-width="1"/>
  <text x="85" y="175" text-anchor="middle" font-size="8" fill="#34d399">Rest</text>
  <text x="170" y="175" text-anchor="middle" font-size="8" fill="#fbbf24">Exercise</text>
  <text x="255" y="175" text-anchor="middle" font-size="8" fill="#38bdf8">Recovery</text>
  <!-- Heart rate curve: resting ~70bpm flat, rise during exercise, plateau ~160, recovery -->
  <!-- resting: y=148 (70bpm) from x=40 to x=130 -->
  <polyline points="40,148 130,148" fill="none" stroke="#fb7185" stroke-width="2.5"/>
  <!-- rise: x=130 to x=170, y=148 to y=60 -->
  <path d="M130,148 C145,148 155,65 170,60" fill="none" stroke="#fb7185" stroke-width="2.5"/>
  <!-- plateau exercise: x=170 to x=210, y=60 -->
  <polyline points="170,60 210,60" fill="none" stroke="#fb7185" stroke-width="2.5"/>
  <!-- recovery: x=210 to x=290, y=60 back to y=148 -->
  <path d="M210,60 C230,60 270,145 290,148" fill="none" stroke="#fb7185" stroke-width="2.5"/>
  <!-- annotations -->
  <text x="168" y="50" font-size="8" fill="#fbbf24">~160 bpm</text>
  <text x="43" y="142" font-size="8" fill="#34d399">~70 bpm</text>
  <text x="292" y="142" font-size="8" fill="#38bdf8">recovery</text>
</svg>`,
        },
      ],
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // LEARN SMART
  // ─────────────────────────────────────────────────────────────────────────
  learn: {
    keyFacts: [
      "Mammals have a double circulatory system: pulmonary (heart ↔ lungs) and systemic (heart ↔ body).",
      "The left ventricle has a thicker wall than the right because it pumps against greater resistance in the systemic circuit.",
      "The atrioventricular (AV) valves prevent backflow from ventricles into atria during ventricular systole.",
      "Semilunar valves prevent backflow from pulmonary artery and aorta into the ventricles during diastole.",
      "Red blood cells have no nucleus; they carry O₂ bound to haemoglobin as oxyhaemoglobin.",
      "Phagocytes engulf pathogens; lymphocytes produce antibodies specific to antigens.",
      "CHD risk factors include high saturated fat diet, smoking, lack of exercise, stress, and genetic factors.",
      "During exercise, rising CO₂ levels stimulate the SAN, increasing heart rate.",
      "Capillary walls are one cell thick, minimising diffusion distance for exchange of gases and nutrients.",
      "Veins have valves and a wide lumen; arteries have thick elastic walls and a narrow lumen.",
    ],
    flashcards: [
      { front: "What is the advantage of a double circulatory system over a single one?", back: "Blood is re-pressurised by the left ventricle between the pulmonary and systemic circuits, maintaining high pressure in the systemic circuit and enabling faster delivery of O₂ to organs." },
      { front: "Why does the left ventricle have a thicker wall than the right ventricle?", back: "It must generate higher pressure to pump blood through the systemic circuit (entire body), which has greater resistance and distance than the pulmonary circuit." },
      { front: "What is the function of the AV valves?", back: "They prevent backflow of blood from the ventricles into the atria when the ventricles contract (during ventricular systole)." },
      { front: "What is the function of the semilunar valves?", back: "They prevent backflow of blood from the aorta/pulmonary artery into the ventricles when the ventricles relax (during diastole)." },
      { front: "Name the four components of blood and give one function of each.", back: "Plasma — transports dissolved substances; red blood cells — carry O₂; white blood cells — defend against infection; platelets — initiate blood clotting." },
      { front: "How does haemoglobin carry oxygen, and what affects its release?", back: "Haemoglobin combines with O₂ in the lungs (high pO₂) to form oxyhaemoglobin. In respiring tissues (low pO₂), O₂ is released. CO₂ presence also promotes O₂ release (Bohr effect)." },
      { front: "How do phagocytes destroy pathogens?", back: "Phagocytes engulf pathogens by phagocytosis — the cell membrane surrounds the pathogen, forming a phagosome, which fuses with lysosomes containing digestive enzymes." },
      { front: "What is atherosclerosis and how does it cause CHD?", back: "Atherosclerosis is the build-up of fatty plaques inside arterial walls. In coronary arteries, plaques narrow the lumen, reducing blood flow to heart muscle, causing ischaemia or heart attack." },
      { front: "Why do veins have valves but arteries do not?", back: "Blood in veins is at low pressure and may pool. Pocket valves prevent backflow. Arteries carry blood at high pressure which naturally maintains forward flow — valves are not needed." },
      { front: "How does exercise affect heart rate, and what is the mechanism?", back: "Exercise increases CO₂ production. Chemoreceptors detect rising CO₂. The nervous system stimulates the SAN to fire faster, increasing heart rate to deliver more O₂ and remove CO₂." },
      { front: "What is the route of blood through the heart from body to lungs and back?", back: "Vena cava → right atrium → (tricuspid valve) → right ventricle → (semilunar valve) → pulmonary artery → lungs → pulmonary vein → left atrium → (bicuspid valve) → left ventricle → (semilunar valve) → aorta." },
      { front: "Give two structural features of red blood cells and explain how each aids function.", back: "1. Biconcave shape — increases surface area for O₂ diffusion. 2. No nucleus — maximises space for haemoglobin, increasing O₂ carrying capacity." },
    ],
    keyTerms: [
      { term: "Double circulatory system", definition: "A circulatory system with two separate circuits — pulmonary (heart-lungs) and systemic (heart-body) — both driven by the same heart." },
      { term: "Atrium", definition: "Upper chamber of the heart that receives blood returning to the heart (right atrium from body; left atrium from lungs)." },
      { term: "Ventricle", definition: "Lower, thick-walled chamber of the heart that pumps blood away from the heart (right to lungs; left to body)." },
      { term: "Atrioventricular (AV) valve", definition: "Valve between an atrium and ventricle (tricuspid on right, bicuspid/mitral on left) that prevents backflow into the atrium during ventricular contraction." },
      { term: "Semilunar valve", definition: "Valve at the base of the pulmonary artery and aorta that prevents backflow of blood into the ventricles when they relax." },
      { term: "Oxyhaemoglobin", definition: "The bright red compound formed when haemoglobin combines reversibly with oxygen; formed in the lungs and broken down in respiring tissues." },
      { term: "Phagocytosis", definition: "The process by which phagocytes engulf and destroy pathogens by surrounding them with the cell membrane and digesting them with enzymes." },
      { term: "Lymphocyte", definition: "A type of white blood cell that produces antibodies specific to antigens on pathogens, providing specific (adaptive) immune responses." },
      { term: "Atherosclerosis", definition: "The build-up of fatty plaques (atheromas) inside arterial walls, narrowing the lumen and reducing blood flow." },
      { term: "Coronary arteries", definition: "Arteries that branch from the aorta and supply the heart muscle (myocardium) with oxygenated blood and glucose." },
      { term: "Stroke volume", definition: "The volume of blood pumped by the left ventricle in one contraction (typically 70 mL at rest in an adult)." },
      { term: "Sino-atrial node (SAN)", definition: "The heart's natural pacemaker, located in the right atrium wall, which initiates each heartbeat by generating electrical impulses." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // QUICK QUIZ
  // ─────────────────────────────────────────────────────────────────────────
  quiz: {
    mcq: [
      {
        id: "bio-transport-animals-mcq-q01",
        question: "Which vessel carries oxygenated blood from the lungs to the heart?",
        options: ["Pulmonary artery", "Pulmonary vein", "Vena cava", "Aorta"],
        answerIndex: 1,
        explanation: "The pulmonary vein carries oxygenated blood from the lungs back to the left atrium. The pulmonary artery carries deoxygenated blood from the right ventricle to the lungs.",
        guideRef: "Structure of the Heart",
        difficulty: "warmup",
      },
      {
        id: "bio-transport-animals-mcq-q02",
        question: "Why does the left ventricle have a thicker muscular wall than the right ventricle?",
        options: [
          "It receives more blood per beat than the right ventricle.",
          "It must pump blood at higher pressure through the systemic circuit.",
          "It contains both oxygenated and deoxygenated blood.",
          "The septum adds extra thickness on the left side.",
        ],
        answerIndex: 1,
        explanation: "The left ventricle pumps blood around the entire body (systemic circuit), which has much greater resistance than the short pulmonary circuit. Greater pressure requires more muscular force — hence a thicker wall.",
        guideRef: "Structure of the Heart",
        difficulty: "core",
        hints: [
          "Think about where each ventricle sends blood.",
          "Which circuit is longer — pulmonary or systemic?",
          "More resistance → more force needed → thicker wall.",
        ],
      },
      {
        id: "bio-transport-animals-mcq-q03",
        question: "Which blood component produces antibodies?",
        options: ["Phagocytes", "Platelets", "Lymphocytes", "Red blood cells"],
        answerIndex: 2,
        explanation: "Lymphocytes are white blood cells that produce antibodies — proteins that bind specifically to antigens on pathogens. Phagocytes engulf pathogens; platelets are involved in clotting; red blood cells carry oxygen.",
        guideRef: "Blood Components and Functions",
        difficulty: "warmup",
      },
      {
        id: "bio-transport-animals-mcq-q04",
        question: "A student exercises for 10 minutes. Which sequence correctly describes the changes that lead to an increased heart rate?",
        options: [
          "O₂ decreases → SAN fires slower → heart rate falls",
          "CO₂ increases → chemoreceptors stimulated → SAN fires faster → heart rate rises",
          "CO₂ decreases → SAN fires faster → heart rate rises",
          "O₂ increases → adrenaline released → heart rate falls",
        ],
        answerIndex: 1,
        explanation: "During exercise, cellular respiration increases, producing more CO₂. Rising blood CO₂ is detected by chemoreceptors. The nervous system stimulates the SAN to fire more frequently, increasing heart rate.",
        guideRef: "Coronary Heart Disease and Exercise",
        difficulty: "core",
        hints: [
          "What waste gas does respiration produce more of during exercise?",
          "What detects CO₂ changes in the blood?",
          "The SAN controls heart rate — what does stimulating it do?",
        ],
      },
      {
        id: "bio-transport-animals-mcq-q05",
        question: "Which structural feature of capillaries allows rapid exchange of substances with tissues?",
        options: [
          "Thick elastic walls that create pressure to push substances out",
          "Valves that slow blood flow at exchange surfaces",
          "Walls that are only one cell thick, minimising diffusion distance",
          "A very wide lumen that holds a large volume of blood",
        ],
        answerIndex: 2,
        explanation: "Capillary walls are a single endothelial cell thick (~0.5 µm), minimising the diffusion distance for O₂, CO₂, glucose, etc. Thick walls would increase diffusion distance; capillaries have no valves; wide lumen would slow exchange.",
        guideRef: "Blood Vessels: Structure and Function",
        difficulty: "core",
        hints: [
          "What does Fick's law say about diffusion distance?",
          "How thin is a capillary wall compared to an artery wall?",
        ],
      },
      {
        id: "bio-transport-animals-mcq-q06",
        question: "A patient is found to have atherosclerotic plaques in their coronary arteries. Which of the following best explains why this causes chest pain during exercise?",
        options: [
          "Plaques block the pulmonary artery, reducing O₂ absorption in the lungs.",
          "Plaques raise blood pressure, causing artery walls to stretch and hurt.",
          "Narrow coronary arteries cannot increase blood flow enough to meet the heart muscle's raised O₂ demand during exercise.",
          "Plaques cause blood to thicken, increasing the viscosity of plasma.",
        ],
        answerIndex: 2,
        explanation: "Atherosclerotic plaques narrow the coronary artery lumen. At rest, reduced flow may be sufficient. During exercise, the heart muscle demands more O₂ but the narrowed arteries cannot deliver enough — causing ischaemia and chest pain (angina). Plaques are in coronary arteries, not pulmonary arteries.",
        guideRef: "Coronary Heart Disease and Exercise",
        difficulty: "challenge",
        hints: [
          "Coronary arteries supply the heart muscle itself — what happens when they are narrowed?",
          "Does the heart work harder at rest or during exercise?",
          "If demand rises but supply is limited, what is the result?",
          "This pain is called angina — ischaemia of the myocardium.",
        ],
      },
    ],
    qa: [
      {
        id: "bio-transport-animals-qa-q01",
        question: "Describe the sequence of events in one complete cardiac cycle, including the role of valves in preventing backflow. [6]",
        marks: 6,
        modelAnswer:
          "During diastole, both atria and ventricles relax. Blood flows passively from the vena cava and pulmonary veins into the atria, and AV valves open as atrial pressure exceeds ventricular pressure. During atrial systole, the atria contract, pushing blood through the open AV valves into the ventricles. During ventricular systole, the ventricles contract; ventricular pressure rises above atrial pressure, forcing the AV valves shut — preventing backflow into the atria. The rising pressure also forces open the semilunar valves, and blood is ejected into the aorta and pulmonary artery. When the ventricles relax, pressure falls below that in the arteries, so the semilunar valves snap shut — preventing backflow from the arteries into the ventricles.",
        markScheme: [
          "Diastole: atria and ventricles relax / blood flows into atria from vena cava and pulmonary veins",
          "AV valves open when atrial pressure exceeds ventricular pressure",
          "Atrial systole: atria contract, blood pushed into ventricles through open AV valves",
          "Ventricular systole: ventricles contract, pressure rises",
          "AV valves close when ventricular pressure exceeds atrial pressure — prevents backflow into atria",
          "Semilunar valves open; blood ejected into aorta / pulmonary artery",
          "Semilunar valves close when arterial pressure exceeds ventricular pressure — prevents backflow from arteries",
        ],
        commonError:
          "Students often say valves are 'controlled by muscles' — they are passive, operated solely by pressure differences on each side.",
        guideRef: "The Cardiac Cycle and Valve Function",
        difficulty: "core",
        hints: [
          "Structure your answer in three phases: diastole, atrial systole, ventricular systole.",
          "For each valve, state when it opens AND when it closes, and what pressure difference causes each.",
          "Backflow prevention = valve closes when pressure on the 'wrong' side becomes greater.",
        ],
      },
      {
        id: "bio-transport-animals-qa-q02",
        question:
          "Compare the structure of an artery and a vein, explaining how each structural difference relates to function. [5]",
        marks: 5,
        modelAnswer:
          "Arteries have thick, muscular and elastic walls, whereas veins have thin walls. This is because arteries carry blood at high pressure (from ventricular contraction), and thick walls resist bursting and the elastic recoil smooths out pressure surges. Veins carry blood at low pressure, so thin walls suffice. Arteries have a narrow lumen relative to wall thickness; veins have a wide lumen, reducing resistance to flow and aiding the return of large volumes of blood to the heart. Arteries have no valves as high blood pressure maintains forward flow; veins have pocket valves that prevent backflow of slow-moving, low-pressure blood, ensuring it flows towards the heart. Contraction of surrounding skeletal muscle also helps squeeze blood along veins.",
        markScheme: [
          "Arteries: thick muscular/elastic walls — withstand/smooth high pressure from heart",
          "Veins: thin walls — blood is at low pressure after capillaries",
          "Arteries: narrow lumen / Veins: wide lumen — wide lumen reduces resistance, aids return flow",
          "Veins: have pocket/semilunar valves — prevent backflow of low-pressure blood",
          "Arteries: no valves — high pressure maintains forward flow (any one correct explanation for absence)",
        ],
        commonError:
          "A common error is stating that veins carry deoxygenated blood — this is mostly true but the pulmonary vein is an important exception. Focus answers on structure-function links rather than O₂ content.",
        guideRef: "Blood Vessels: Structure and Function",
        difficulty: "core",
        hints: [
          "Compare wall thickness, lumen size, and presence of valves for each vessel.",
          "For each difference, link to the pressure of blood in that vessel.",
          "Remember to mention elastic recoil in arteries.",
        ],
      },
      {
        id: "bio-transport-animals-qa-q03",
        question:
          "A study measured the resting heart rate and recovery time after standard exercise in trained athletes and untrained individuals. Athletes had a resting heart rate of 50 bpm; untrained individuals had 72 bpm. Athletes recovered to resting heart rate 4 minutes after exercise; untrained individuals took 9 minutes. Using your knowledge of the cardiovascular system, explain these differences. [4]",
        marks: 4,
        modelAnswer:
          "Regular aerobic training causes cardiac hypertrophy — the heart muscle becomes stronger and the left ventricle increases in size. This increases stroke volume (volume pumped per beat). Since cardiac output (heart rate × stroke volume) must meet the body's O₂ demand, a higher stroke volume means a lower heart rate is sufficient at rest — explaining the athletes' lower resting heart rate of 50 bpm. After exercise, CO₂ levels fall as the body's O₂ demand decreases; the SAN is no longer stimulated as strongly and heart rate returns to resting level. Athletes have a more efficient cardiovascular system that clears CO₂ and restores O₂ levels faster, and the SAN quickly reduces its firing rate — so athletes recover in 4 minutes compared to 9 minutes in untrained individuals.",
        markScheme: [
          "Training increases stroke volume (volume per beat) due to stronger/larger heart / cardiac hypertrophy",
          "Lower resting heart rate in athletes because higher stroke volume maintains adequate cardiac output at lower rate",
          "Recovery time = time for CO₂ to fall / O₂ demand to return to resting level / SAN to reduce firing rate",
          "Athletes recover faster because their cardiovascular system is more efficient at restoring normal blood gas levels",
        ],
        commonError:
          "Students often say athletes' hearts 'beat stronger' without explaining stroke volume or cardiac output. The examiner wants a mechanistic explanation: stroke volume up → rate can be lower for same output.",
        guideRef: "Coronary Heart Disease and Exercise",
        difficulty: "challenge",
        hints: [
          "Cardiac output = heart rate × stroke volume. If output is the same, what must be true if rate falls?",
          "What triggers heart rate to increase during exercise? What reduces that trigger after exercise?",
          "Why would a trained heart clear CO₂ faster — think about more efficient pumping.",
          "Link stroke volume specifically to cardiac hypertrophy from training.",
        ],
        strategy: "Apply a formula: cardiac output = heart rate x stroke volume. Use algebra-style reasoning: if output is constant and stroke volume rises, heart rate must fall.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // QUESTION BANK
  // ─────────────────────────────────────────────────────────────────────────
  questionBank: {
    mcqPapers: [
      // ── MCQ PAPER 1 ── double circulation, heart structure, septum, coronary arteries
      {
        id: "bio-transport-animals-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Double circulation, heart chambers, septum, valves and coronary arteries.",
        questions: [
          {
            id: "bio-transport-animals-bm1-01",
            question: "Which sequence correctly describes the systemic circuit?",
            options: [
              "Right ventricle → lungs → left atrium",
              "Left ventricle → body → right atrium",
              "Left atrium → lungs → right ventricle",
              "Right atrium → body → left ventricle",
            ],
            answerIndex: 1,
            explanation: "The systemic circuit carries oxygenated blood from the left ventricle out to the body via the aorta, then returns deoxygenated blood to the right atrium via the vena cava. The pulmonary circuit is the right-ventricle-to-lungs loop.",
            guideRef: "The Double Circulatory System",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm1-02",
            question: "Which vessel delivers deoxygenated blood from the body into the heart?",
            options: ["Aorta", "Pulmonary vein", "Vena cava", "Pulmonary artery"],
            answerIndex: 2,
            explanation: "The vena cava returns deoxygenated blood from the body to the right atrium. The pulmonary artery carries deoxygenated blood away from the heart to the lungs, not into the heart.",
            guideRef: "Structure of the Heart",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm1-03",
            question: "What is the main function of the septum?",
            options: [
              "To pump blood into the aorta",
              "To prevent backflow between atria and ventricles",
              "To keep oxygenated and deoxygenated blood separate",
              "To generate the electrical impulse for each heartbeat",
            ],
            answerIndex: 2,
            explanation: "The septum is the muscular wall dividing the left and right sides of the heart. It keeps oxygenated blood (left) separate from deoxygenated blood (right), maximising the oxygen content of blood pumped to the body.",
            guideRef: "Structure of the Heart",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm1-04",
            question: "The left ventricle wall is much thicker than the right ventricle wall because it must:",
            options: [
              "hold a much larger volume of blood per beat",
              "generate higher pressure to pump blood around the whole body",
              "protect the heart from the high pressure in the lungs",
              "store oxygen for the cardiac muscle",
            ],
            answerIndex: 1,
            explanation: "Both ventricles eject roughly the same stroke volume, but the left ventricle pumps blood through the long, high-resistance systemic circuit. The thicker muscular wall generates the higher pressure needed; the right ventricle only pumps to the nearby low-resistance lungs.",
            guideRef: "Structure of the Heart",
            difficulty: "core",
            hints: [
              "Both ventricles pump the same volume — so volume is not the answer.",
              "Compare the length and resistance of the systemic circuit vs the pulmonary circuit.",
              "Higher resistance needs higher pressure, which needs more muscle.",
            ],
          },
          {
            id: "bio-transport-animals-bm1-05",
            question: "Which valve prevents blood flowing back into the left atrium when the left ventricle contracts?",
            options: ["Tricuspid valve", "Bicuspid (mitral) valve", "Pulmonary semilunar valve", "Aortic semilunar valve"],
            answerIndex: 1,
            explanation: "The bicuspid (mitral) valve is the atrioventricular valve on the left side. When the left ventricle contracts, rising pressure pushes it shut, preventing backflow into the left atrium. The tricuspid is the right-side AV valve.",
            guideRef: "Structure of the Heart",
            difficulty: "core",
            hints: [
              "Which side is the atrium on — left or right?",
              "Atrioventricular valves sit between atrium and ventricle.",
              "The left AV valve has two flaps, so it is the bi-cuspid valve.",
            ],
          },
          {
            id: "bio-transport-animals-bm1-06",
            question: "What is the role of the coronary arteries?",
            options: [
              "Carry deoxygenated blood from the heart to the lungs",
              "Supply the heart muscle itself with oxygenated blood and glucose",
              "Return blood from the head to the right atrium",
              "Drain tissue fluid back into the bloodstream",
            ],
            answerIndex: 1,
            explanation: "Coronary arteries branch from the base of the aorta and supply the myocardium (heart muscle) with oxygenated blood and glucose for respiration. Blockage of these vessels causes coronary heart disease.",
            guideRef: "Structure of the Heart",
            difficulty: "core",
            hints: [
              "The heart is itself a muscle that respires — what does it need?",
              "These arteries branch off the aorta very close to where it leaves the heart.",
              "Their blockage causes a heart attack.",
            ],
          },
          {
            id: "bio-transport-animals-bm1-07",
            question: "In a fish (single circulation), why is blood flow to the body relatively sluggish?",
            options: [
              "Fish have no heart to pump the blood",
              "Blood loses pressure passing through the gill capillaries before reaching the body",
              "Fish blood contains no haemoglobin",
              "The body tissues actively slow the blood down",
            ],
            answerIndex: 1,
            explanation: "In single circulation, blood passes through the high-resistance gill capillaries (where pressure drops) and then continues straight on to the body without returning to the heart to be re-pressurised. This is why double circulation supports more active lifestyles.",
            guideRef: "The Double Circulatory System",
            difficulty: "core",
            hints: [
              "Capillary beds are high-resistance networks that lower pressure.",
              "In a fish, does blood return to the heart between gills and body?",
              "No re-pressurising step means lower pressure reaches the organs.",
            ],
          },
          {
            id: "bio-transport-animals-bm1-08",
            question: "A baby is born with a small hole in the septum between the two ventricles. Which consequence is most likely?",
            options: [
              "Blood cannot reach the lungs at all",
              "Some deoxygenated and oxygenated blood mix, lowering the oxygen saturation of blood pumped to the body",
              "The heart can no longer produce its own heartbeat",
              "The coronary arteries become permanently blocked",
            ],
            answerIndex: 1,
            explanation: "A ventricular septal defect lets blood pass between the two ventricles, mixing oxygenated and deoxygenated blood. This lowers the average oxygen saturation of blood entering the aorta, so tissues receive less oxygen and the heart works harder to compensate.",
            guideRef: "Structure of the Heart",
            difficulty: "challenge",
            hints: [
              "What is the normal job of the septum?",
              "If there is a gap, what can happen to the two types of blood?",
              "Think about what reaches the aorta and how much oxygen it carries.",
            ],
          },
          {
            id: "bio-transport-animals-bm1-09",
            question: "Following a single red blood cell, which is the correct order of structures it passes through starting at the right atrium?",
            options: [
              "Right atrium → tricuspid valve → right ventricle → pulmonary artery → lungs",
              "Right atrium → bicuspid valve → right ventricle → aorta → lungs",
              "Right atrium → right ventricle → pulmonary vein → lungs → left atrium",
              "Right atrium → semilunar valve → left ventricle → pulmonary artery → lungs",
            ],
            answerIndex: 0,
            explanation: "From the right atrium, blood passes the tricuspid (AV) valve into the right ventricle, then through the pulmonary semilunar valve into the pulmonary artery to the lungs. The bicuspid valve and aorta are on the left side; the pulmonary vein returns blood from the lungs.",
            guideRef: "Structure of the Heart",
            difficulty: "challenge",
            hints: [
              "The right side handles deoxygenated blood heading to the lungs.",
              "Which AV valve is on the right — tricuspid or bicuspid?",
              "Deoxygenated blood leaves the heart by the pulmonary artery, not the aorta.",
            ],
          },
          {
            id: "bio-transport-animals-bm1-10",
            question: "Why is a double circulation described as more efficient than a single circulation for an endothermic (warm-blooded) animal?",
            options: [
              "It uses less blood overall",
              "It keeps blood pressure high in the systemic circuit, allowing rapid delivery of oxygen to support a high metabolic rate",
              "It removes the need for a heart",
              "It allows oxygenated and deoxygenated blood to mix, warming the body",
            ],
            answerIndex: 1,
            explanation: "Returning blood to the heart between the pulmonary and systemic circuits lets the left ventricle re-pressurise it, keeping systemic pressure high. Rapid, high-pressure delivery of oxygen and glucose sustains the fast metabolic rate needed to generate body heat.",
            guideRef: "The Double Circulatory System",
            difficulty: "challenge",
            hints: [
              "Endotherms need a high metabolic rate to stay warm.",
              "High metabolic rate needs fast delivery of oxygen and glucose.",
              "What does re-pressurising the blood achieve for delivery speed?",
            ],
          },
        ],
      },
      // ── MCQ PAPER 2 ── cardiac cycle, valves, heart rate, SAN
      {
        id: "bio-transport-animals-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "The cardiac cycle, valve action, heart sounds, the SAN and heart rate control.",
        questions: [
          {
            id: "bio-transport-animals-bm2-01",
            question: "What causes the heart valves to open and close?",
            options: [
              "Nerve impulses from the brain",
              "Differences in blood pressure on either side of the valve",
              "Contraction of muscles within the valves themselves",
              "The pull of tendons attached to the septum",
            ],
            answerIndex: 1,
            explanation: "Heart valves are passive. They open when pressure behind them is greater and close when pressure on the far side becomes greater. They contain no muscle and are not directly controlled by nerves.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm2-02",
            question: "Which structure acts as the heart's pacemaker?",
            options: ["Atrioventricular node", "Bundle of His", "Sino-atrial node (SAN)", "Semilunar valve"],
            answerIndex: 2,
            explanation: "The sino-atrial node (SAN), in the wall of the right atrium, generates the electrical impulses that initiate each heartbeat, setting the heart rate.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm2-03",
            question: "During diastole, the state of the heart is best described as:",
            options: [
              "Atria and ventricles both relaxed, blood flowing into the heart",
              "Atria contracted, ventricles contracted",
              "Ventricles contracted, semilunar valves open",
              "Atria relaxed, ventricles contracted",
            ],
            answerIndex: 0,
            explanation: "During diastole both the atria and ventricles are relaxed. Blood flows passively from the vena cava and pulmonary veins into the atria and on into the ventricles, with the AV valves open and semilunar valves closed.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm2-04",
            question: "The 'lub' (first) heart sound is produced by:",
            options: [
              "The semilunar valves closing",
              "The atrioventricular valves closing at the start of ventricular systole",
              "Blood rushing into the atria",
              "The SAN firing an electrical impulse",
            ],
            answerIndex: 1,
            explanation: "The 'lub' is the sound of the AV valves snapping shut as the ventricles begin to contract. The 'dub' is the later closing of the semilunar valves when the ventricles relax.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "core",
            hints: [
              "Two sounds, two sets of valves closing.",
              "Which valves shut first — at the start of ventricular contraction?",
              "AV valves close first ('lub'); semilunar valves close later ('dub').",
            ],
          },
          {
            id: "bio-transport-animals-bm2-05",
            question: "At what point in the cardiac cycle do the semilunar valves open?",
            options: [
              "When atrial pressure exceeds ventricular pressure",
              "When ventricular pressure rises above the pressure in the arteries",
              "When the ventricles relax during diastole",
              "When the atria begin to fill with blood",
            ],
            answerIndex: 1,
            explanation: "The semilunar valves open during ventricular systole, once ventricular pressure exceeds the pressure in the aorta and pulmonary artery, allowing blood to be ejected. They close again when ventricular pressure falls below arterial pressure.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "core",
            hints: [
              "Semilunar valves sit between the ventricles and the arteries.",
              "A valve opens when pressure behind it is greater.",
              "Blood is ejected when the ventricle out-pressures the artery.",
            ],
          },
          {
            id: "bio-transport-animals-bm2-06",
            question: "A resting heart beats 75 times per minute. Approximately how long is one cardiac cycle?",
            options: ["0.4 s", "0.8 s", "1.3 s", "75 s"],
            answerIndex: 1,
            explanation: "One cycle = 60 s ÷ 75 beats = 0.8 s. The reciprocal of heart rate (in beats per second) gives the duration of one beat.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "core",
            strategy: "Convert beats per minute to seconds per beat: time per beat = 60 ÷ heart rate. 60 ÷ 75 = 0.8 s.",
            hints: [
              "There are 60 seconds in a minute.",
              "Time for one beat = 60 ÷ (beats per minute).",
              "60 ÷ 75 = 0.8.",
            ],
          },
          {
            id: "bio-transport-animals-bm2-07",
            question: "Which sequence correctly orders the phases of the cardiac cycle?",
            options: [
              "Ventricular systole → atrial systole → diastole",
              "Diastole → atrial systole → ventricular systole",
              "Atrial systole → diastole → ventricular systole",
              "Diastole → ventricular systole → atrial systole",
            ],
            answerIndex: 1,
            explanation: "The cycle runs diastole (filling) → atrial systole (atria contract, topping up the ventricles) → ventricular systole (ventricles contract, ejecting blood), then repeats.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "core",
            hints: [
              "Filling must come before pumping.",
              "Atria contract before ventricles.",
              "Diastole → atrial systole → ventricular systole.",
            ],
          },
          {
            id: "bio-transport-animals-bm2-08",
            question: "The electrical impulse from the SAN is briefly delayed at the atrioventricular node (AVN) before passing to the ventricles. What is the advantage of this delay?",
            options: [
              "It allows the atria to finish contracting and empty into the ventricles before the ventricles contract",
              "It prevents the semilunar valves from opening too early",
              "It cools the heart muscle between beats",
              "It allows the coronary arteries to refill",
            ],
            answerIndex: 0,
            explanation: "The delay at the AVN ensures the atria have completed their contraction, fully filling the ventricles, before ventricular systole begins. This makes pumping more efficient — the ventricles eject a fully loaded volume.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "challenge",
            hints: [
              "Think about the order: atria contract, then ventricles.",
              "What must happen to the ventricles before they should contract?",
              "A pause lets the ventricles fill completely first.",
            ],
          },
          {
            id: "bio-transport-animals-bm2-09",
            question: "An artificial pacemaker is fitted to a patient whose SAN fails to fire regularly. Which function does the device replace?",
            options: [
              "Pumping blood mechanically through the chambers",
              "Generating the regular electrical impulses that set the heart rate",
              "Opening and closing the heart valves",
              "Oxygenating blood as it passes the device",
            ],
            answerIndex: 1,
            explanation: "An artificial pacemaker supplies the regular electrical impulses normally produced by the SAN, restoring a steady heart rate. It does not pump blood, move valves or oxygenate blood.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "challenge",
            hints: [
              "What is the natural job of the SAN?",
              "If the SAN fails, what is missing — the pump or the signal?",
              "The device sends electrical impulses.",
            ],
          },
          {
            id: "bio-transport-animals-bm2-10",
            question: "If a person's AV valves became leaky and did not seal properly during ventricular systole, what would be the most direct consequence?",
            options: [
              "Blood would leak back into the atria, reducing the volume ejected into the arteries",
              "Blood would be unable to enter the ventricles at all",
              "The coronary arteries would receive too much blood",
              "The semilunar valves would stop closing",
            ],
            answerIndex: 0,
            explanation: "Leaky AV valves allow some blood to flow backwards into the atria during ventricular contraction instead of all being ejected forwards. This reduces the effective stroke volume and cardiac output, so the heart works harder to supply the body.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "challenge",
            hints: [
              "AV valves should shut tight during ventricular systole.",
              "If they leak, where does some blood go instead of forward?",
              "Backflow into the atria means less blood reaches the arteries.",
            ],
          },
        ],
      },
      // ── MCQ PAPER 3 ── blood vessels, tissue fluid, exchange
      {
        id: "bio-transport-animals-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Artery, vein and capillary structure–function, tissue fluid and exchange of materials.",
        questions: [
          {
            id: "bio-transport-animals-bm3-01",
            question: "Which feature is found in veins but NOT in arteries?",
            options: ["Thick muscular walls", "A narrow lumen", "Pocket valves", "Elastic recoil"],
            answerIndex: 2,
            explanation: "Veins contain pocket (semilunar) valves to prevent backflow of low-pressure blood. Arteries have thick muscular/elastic walls, a narrow lumen and elastic recoil, but no valves.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm3-02",
            question: "Capillary walls are one cell thick. What is the main advantage of this?",
            options: [
              "It strengthens the wall against high pressure",
              "It minimises the diffusion distance for exchange of substances",
              "It allows valves to fit inside the lumen",
              "It speeds blood up to deliver oxygen faster",
            ],
            answerIndex: 1,
            explanation: "A wall that is a single endothelial cell thick gives a very short diffusion distance, so oxygen, glucose, carbon dioxide and other substances can be exchanged rapidly between blood and tissues.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm3-03",
            question: "Why do arteries have thick, elastic walls?",
            options: [
              "To allow valves to open and close",
              "To withstand and smooth out the high-pressure surges of blood leaving the heart",
              "To allow substances to diffuse out quickly",
              "To slow blood down for exchange",
            ],
            answerIndex: 1,
            explanation: "Arteries carry blood at high pressure straight from the ventricles. Thick, elastic walls resist bursting and recoil between beats, smoothing the pressure surges and maintaining flow (felt as a pulse).",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm3-04",
            question: "Which row correctly matches each vessel to its blood pressure?",
            options: [
              "Artery: low | Capillary: medium | Vein: high",
              "Artery: high | Capillary: medium | Vein: low",
              "Artery: medium | Capillary: high | Vein: low",
              "Artery: high | Capillary: low | Vein: high",
            ],
            answerIndex: 1,
            explanation: "Pressure is highest in arteries (close to the pumping ventricle), falls as blood passes through the high-resistance capillary beds, and is lowest in veins returning blood to the heart.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "core",
            hints: [
              "Pressure is highest nearest the heart's pump.",
              "Capillary beds drop the pressure a lot.",
              "Veins carry the lowest-pressure blood back to the heart.",
            ],
          },
          {
            id: "bio-transport-animals-bm3-05",
            question: "Tissue fluid is formed when:",
            options: [
              "Red blood cells leave the capillaries and enter the tissues",
              "Plasma is forced out of the capillaries through their thin walls at the arterial end",
              "Veins absorb fluid from the air spaces of the lungs",
              "Platelets release fibrin into the tissues",
            ],
            answerIndex: 1,
            explanation: "At the arterial end of a capillary, the high blood pressure forces water and small dissolved substances (but not large plasma proteins or red blood cells) out through the thin wall, forming tissue fluid that bathes the cells.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "core",
            hints: [
              "Tissue fluid comes from the liquid part of blood — the plasma.",
              "What pushes it out at the start of the capillary?",
              "Large proteins and cells are too big to leave.",
            ],
          },
          {
            id: "bio-transport-animals-bm3-06",
            question: "Which substances move from the blood in a capillary INTO a respiring muscle cell?",
            options: [
              "Carbon dioxide and urea",
              "Oxygen and glucose",
              "Plasma proteins and red blood cells",
              "Fibrinogen and antibodies",
            ],
            answerIndex: 1,
            explanation: "Respiring muscle cells use oxygen and glucose, so these diffuse from the blood into the cells down their concentration gradients. Carbon dioxide and urea are wastes that move the other way, out of the cells into the blood.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "core",
            hints: [
              "Respiration uses up two key substances inside the cell.",
              "Diffusion goes from high to low concentration.",
              "Wastes like CO2 move out, not in.",
            ],
          },
          {
            id: "bio-transport-animals-bm3-07",
            question: "The narrow lumen of a capillary forces red blood cells to travel in single file. How does this aid function?",
            options: [
              "It increases blood pressure to push blood faster",
              "It slows the cells and presses them close to the wall, increasing time and surface contact for exchange",
              "It prevents the cells from carrying oxygen",
              "It allows valves to control flow direction",
            ],
            answerIndex: 1,
            explanation: "Single-file flow slows the red blood cells and brings them very close to the capillary wall. This increases the contact time and reduces diffusion distance, maximising the efficiency of gas and nutrient exchange.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "core",
            hints: [
              "A narrow tube slows things down.",
              "Slower cells spend longer at the exchange surface.",
              "Closer to the wall means a shorter diffusion path.",
            ],
          },
          {
            id: "bio-transport-animals-bm3-08",
            question: "Skeletal muscles around the veins help return blood to the heart. This works because:",
            options: [
              "Muscle contraction squeezes the veins, and valves ensure the blood is pushed only towards the heart",
              "Muscles pump oxygen directly into the veins",
              "Muscles heat the blood, making it rise",
              "Muscle contraction closes the arteries to divert blood into veins",
            ],
            answerIndex: 0,
            explanation: "When surrounding skeletal muscles contract they compress the thin-walled veins, squeezing blood along. The pocket valves only open towards the heart, so backflow is prevented and blood is moved forward — important because venous pressure is low.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "challenge",
            hints: [
              "Venous blood is at low pressure — it needs help moving.",
              "What happens to a soft-walled tube when muscle squeezes it?",
              "Valves make sure the squeezed blood goes one way only.",
            ],
          },
          {
            id: "bio-transport-animals-bm3-09",
            question: "Most tissue fluid drains back into the bloodstream. At the venous (vein) end of a capillary, water tends to move back IN. The best explanation is that:",
            options: [
              "Blood pressure is higher at the venous end than the arterial end",
              "Plasma proteins remain in the capillary, so the blood has a lower water potential, drawing water back in by osmosis",
              "Red blood cells push the fluid back into the capillary",
              "The valves at the venous end suck fluid in",
            ],
            answerIndex: 1,
            explanation: "Large plasma proteins cannot leave the capillary, so blood at the venous end has a lower (more negative) water potential than the surrounding tissue fluid. With blood pressure now low, water moves back into the capillary by osmosis.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "challenge",
            hints: [
              "What is left behind in the capillary because it is too big to leave?",
              "Proteins lower the water potential of the blood.",
              "Water moves by osmosis from higher to lower water potential.",
            ],
          },
          {
            id: "bio-transport-animals-bm3-10",
            question: "A vessel is found to have a wall four cells thick made of muscle and elastic fibres, a narrow lumen, and no valves. Which vessel is it, and where is it most likely carrying blood?",
            options: [
              "A vein, returning blood to the heart",
              "A capillary, exchanging gases in a tissue",
              "An artery, carrying high-pressure blood away from the heart",
              "A lymph vessel, draining tissue fluid",
            ],
            answerIndex: 2,
            explanation: "Thick muscular and elastic walls, a narrow lumen and the absence of valves are all features of an artery, which carries blood at high pressure away from the heart. Veins are thin-walled with valves; capillaries are one cell thick.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "challenge",
            hints: [
              "Use each clue: thick wall, narrow lumen, no valves.",
              "Which vessel must resist high pressure?",
              "No valves and thick muscle point to an artery away from the heart.",
            ],
          },
        ],
      },
      // ── MCQ PAPER 4 ── blood components, haemoglobin, clotting, CHD, exercise
      {
        id: "bio-transport-animals-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Blood components, haemoglobin and oxygen transport, clotting, coronary heart disease and exercise.",
        questions: [
          {
            id: "bio-transport-animals-bm4-01",
            question: "Which blood component transports oxygen?",
            options: ["Plasma", "Platelets", "Red blood cells", "Lymphocytes"],
            answerIndex: 2,
            explanation: "Red blood cells are packed with haemoglobin, which binds oxygen to form oxyhaemoglobin. Plasma transports dissolved substances, platelets aid clotting, and lymphocytes make antibodies.",
            guideRef: "Blood Components and Functions",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm4-02",
            question: "Which white blood cells produce antibodies?",
            options: ["Phagocytes", "Lymphocytes", "Platelets", "Erythrocytes"],
            answerIndex: 1,
            explanation: "Lymphocytes produce antibodies — proteins that bind specifically to antigens on pathogens. Phagocytes engulf pathogens by phagocytosis but do not make antibodies.",
            guideRef: "Blood Components and Functions",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm4-03",
            question: "Where in the body does haemoglobin combine with oxygen to form oxyhaemoglobin?",
            options: ["In respiring muscle tissue", "In the lungs, where oxygen concentration is high", "In the liver", "In the bone marrow"],
            answerIndex: 1,
            explanation: "In the lungs the oxygen concentration is high, so haemoglobin combines with oxygen to form oxyhaemoglobin. In respiring tissues where oxygen concentration is low, oxyhaemoglobin releases its oxygen.",
            guideRef: "Blood Components and Functions",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm4-04",
            question: "Two features of a red blood cell are 'no nucleus' and 'biconcave shape'. How does the biconcave shape help its function?",
            options: [
              "It makes the cell waterproof",
              "It increases the surface area for diffusion of oxygen in and out",
              "It allows the cell to produce antibodies",
              "It lets the cell store glucose",
            ],
            answerIndex: 1,
            explanation: "The biconcave (dimpled disc) shape increases the surface-area-to-volume ratio, speeding the diffusion of oxygen into and out of the cell. The lack of a nucleus frees up extra space for haemoglobin.",
            guideRef: "Blood Components and Functions",
            difficulty: "core",
            hints: [
              "Think about what shape does to surface area.",
              "More surface area means faster diffusion.",
              "The 'no nucleus' feature is about space for haemoglobin, not surface area.",
            ],
          },
          {
            id: "bio-transport-animals-bm4-05",
            question: "Place the events of blood clotting in the correct order: (1) fibrin mesh traps red blood cells (2) platelets clump at the wound (3) soluble fibrinogen is converted to insoluble fibrin.",
            options: ["1 → 2 → 3", "2 → 3 → 1", "3 → 1 → 2", "2 → 1 → 3"],
            answerIndex: 1,
            explanation: "Platelets first clump at the wound and release chemicals that trigger the conversion of soluble fibrinogen into insoluble fibrin threads, which form a mesh trapping red blood cells to make a clot.",
            guideRef: "Blood Components and Functions",
            difficulty: "core",
            hints: [
              "Platelets act first at the site of damage.",
              "Fibrinogen must be converted to fibrin before a mesh exists.",
              "The mesh of fibrin then traps the cells to form the clot.",
            ],
          },
          {
            id: "bio-transport-animals-bm4-06",
            question: "Which statement about plasma is correct?",
            options: [
              "It is the main carrier of oxygen",
              "It transports dissolved glucose, urea, hormones, carbon dioxide (as hydrogencarbonate ions) and heat",
              "It contains no dissolved substances",
              "It is a solid component of blood",
            ],
            answerIndex: 1,
            explanation: "Plasma is the pale-yellow liquid (mostly water) that transports dissolved glucose, amino acids, hormones, urea, plasma proteins, antibodies, carbon dioxide as hydrogencarbonate ions, and heat. Oxygen is mainly carried by red blood cells, not plasma.",
            guideRef: "Blood Components and Functions",
            difficulty: "core",
            hints: [
              "Plasma is the liquid part — what dissolves in it?",
              "Oxygen has a dedicated carrier; it is not mainly in plasma.",
              "Remember CO2 travels mostly as hydrogencarbonate ions in plasma.",
            ],
          },
          {
            id: "bio-transport-animals-bm4-07",
            question: "Which combination lists THREE recognised risk factors for coronary heart disease?",
            options: [
              "Diet high in saturated fat, smoking, lack of exercise",
              "Eating fruit, drinking water, sleeping well",
              "Low blood pressure, low cholesterol, regular exercise",
              "High vitamin C intake, low salt diet, stretching",
            ],
            answerIndex: 0,
            explanation: "Established CHD risk factors include a diet high in saturated fat and cholesterol, smoking, lack of physical exercise, stress and genetic predisposition. The other options describe protective or neutral factors.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "core",
            hints: [
              "Risk factors increase the chance of disease.",
              "Think about lifestyle choices that promote fatty plaques.",
              "Healthy habits are protective, not risk factors.",
            ],
          },
          {
            id: "bio-transport-animals-bm4-08",
            question: "Carbon monoxide from cigarette smoke increases the risk of coronary heart disease partly because it:",
            options: [
              "binds irreversibly to haemoglobin, reducing the blood's oxygen-carrying capacity",
              "dissolves the walls of the coronary arteries",
              "increases the number of red blood cells dangerously",
              "converts plasma into tissue fluid",
            ],
            answerIndex: 0,
            explanation: "Carbon monoxide binds strongly to haemoglobin (more strongly than oxygen), forming carboxyhaemoglobin and reducing the oxygen the blood can carry. The heart muscle then receives less oxygen, and the heart must work harder, raising CHD risk.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "challenge",
            hints: [
              "What does carbon monoxide attach to in the blood?",
              "If those binding sites are taken, what can the blood no longer carry as well?",
              "Less oxygen delivery strains the heart muscle.",
            ],
          },
          {
            id: "bio-transport-animals-bm4-09",
            question: "During exercise, oxyhaemoglobin releases more oxygen to active muscles. The best reason is that active muscles:",
            options: [
              "have a higher oxygen concentration than the blood",
              "have a low oxygen concentration and high carbon dioxide concentration, favouring the release of oxygen",
              "contain no capillaries",
              "produce more haemoglobin",
            ],
            answerIndex: 1,
            explanation: "Respiring muscles use up oxygen (low oxygen concentration) and produce carbon dioxide. Both conditions promote the dissociation of oxyhaemoglobin, so more oxygen is unloaded exactly where it is needed.",
            guideRef: "Blood Components and Functions",
            difficulty: "challenge",
            hints: [
              "Where is oxygen concentration lowest — in the lungs or in active muscle?",
              "Oxyhaemoglobin releases oxygen where oxygen is scarce.",
              "Rising carbon dioxide also encourages oxygen release.",
            ],
          },
          {
            id: "bio-transport-animals-bm4-10",
            question: "A patient with severe narrowing of a coronary artery is treated by inserting a stent (a small mesh tube) into the artery. How does this reduce symptoms?",
            options: [
              "It dissolves the cholesterol in the blood",
              "It widens and holds the artery open, restoring blood flow to the heart muscle",
              "It replaces the SAN as a pacemaker",
              "It increases the number of red blood cells",
            ],
            answerIndex: 1,
            explanation: "A stent physically widens the narrowed coronary artery and keeps it open, restoring oxygenated blood flow to the heart muscle. This relieves angina and reduces the risk of a heart attack, though it does not remove the underlying cause.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "challenge",
            hints: [
              "What is physically wrong with the artery in CHD?",
              "A stent is a tube that props something open.",
              "Restoring flow means the heart muscle gets oxygen again.",
            ],
          },
        ],
      },
    ],
    qaPapers: [
      // ── QA PAPER 1 ── circulation and heart structure
      {
        id: "bio-transport-animals-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Double circulation, heart structure, septum, wall thickness and coronary supply.",
        questions: [
          {
            id: "bio-transport-animals-bq1-01",
            question: "Name the four chambers of the heart and state whether each handles oxygenated or deoxygenated blood. [4]",
            marks: 4,
            modelAnswer:
              "The right atrium and right ventricle both handle deoxygenated blood returning from the body and being pumped to the lungs. The left atrium and left ventricle both handle oxygenated blood returning from the lungs and being pumped to the body.",
            markScheme: [
              "Right atrium — deoxygenated blood (1)",
              "Right ventricle — deoxygenated blood (1)",
              "Left atrium — oxygenated blood (1)",
              "Left ventricle — oxygenated blood (1)",
            ],
            commonError:
              "Students sometimes swap left and right because heart diagrams are usually drawn as if facing the patient, so the heart's left appears on the right of the page.",
            guideRef: "Structure of the Heart",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bq1-02",
            question: "State two advantages of a double circulatory system compared with a single circulatory system. [2]",
            marks: 2,
            modelAnswer:
              "Blood returns to the heart between the two circuits and is re-pressurised by the left ventricle, so it is delivered to the body at higher pressure / more quickly. Oxygenated and deoxygenated blood are kept separate, so blood reaching the body carries the maximum amount of oxygen.",
            markScheme: [
              "Blood is re-pressurised / kept at high pressure for the systemic circuit / delivered faster (1)",
              "Oxygenated and deoxygenated blood kept separate / no mixing / maximum oxygen delivered (1)",
            ],
            commonError:
              "Saying the heart 'beats faster' is not an advantage of the design itself — focus on pressure and on the separation of oxygenated and deoxygenated blood.",
            guideRef: "The Double Circulatory System",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bq1-03",
            question: "Explain why the wall of the left ventricle is much thicker than the wall of the right ventricle. [3]",
            marks: 3,
            modelAnswer:
              "The left ventricle pumps blood all the way around the body (the systemic circuit), which is long and has high resistance. It must therefore generate a high pressure, which requires a thick, muscular wall to produce a strong contraction. The right ventricle only pumps blood the short distance to the nearby lungs (the low-resistance pulmonary circuit), so a lower pressure and a thinner wall are sufficient.",
            markScheme: [
              "Left ventricle pumps to the whole body / systemic circuit / long distance / high resistance (1)",
              "Needs to generate higher pressure / stronger contraction (1)",
              "Right ventricle only pumps to the lungs / short distance / lower pressure needed (1)",
            ],
            commonError:
              "A frequent error is to say the left ventricle holds more blood. Both ventricles pump roughly the same volume — the difference is the pressure each must generate.",
            guideRef: "Structure of the Heart",
            difficulty: "core",
            hints: [
              "Where does each ventricle send its blood?",
              "Longer, higher-resistance circuit needs more pressure.",
              "More pressure needs more muscle, not more volume.",
            ],
          },
          {
            id: "bio-transport-animals-bq1-04",
            question: "Describe the function of the coronary arteries and explain what happens if one becomes blocked. [4]",
            marks: 4,
            modelAnswer:
              "The coronary arteries branch from the aorta and supply the heart muscle (myocardium) itself with oxygenated blood and glucose for respiration. If a coronary artery becomes blocked (for example by a blood clot on a fatty plaque), the region of heart muscle it supplies is starved of oxygen and glucose. The muscle cells cannot respire aerobically, so they stop contracting and can die — this is a heart attack (myocardial infarction).",
            markScheme: [
              "Coronary arteries supply the heart muscle / myocardium (1)",
              "with oxygenated blood and glucose for respiration (1)",
              "Blockage starves that area of muscle of oxygen/glucose (1)",
              "Muscle cells stop respiring/contracting and may die / heart attack (1)",
            ],
            commonError:
              "Students sometimes confuse the coronary arteries with the pulmonary arteries. The coronary arteries supply the heart wall, not the lungs.",
            guideRef: "Structure of the Heart",
            difficulty: "core",
            hints: [
              "The heart is a muscle that needs its own blood supply.",
              "What two things does respiring muscle need delivered?",
              "If the supply stops, what happens to the muscle cells?",
            ],
          },
          {
            id: "bio-transport-animals-bq1-05",
            question: "Trace the path of a red blood cell from the moment it enters the right atrium until it leaves the heart in the aorta, naming the chambers, valves and vessels it passes through in order. [6]",
            marks: 6,
            modelAnswer:
              "From the right atrium the blood passes through the tricuspid (right atrioventricular) valve into the right ventricle. The right ventricle contracts and pushes it through the pulmonary semilunar valve into the pulmonary artery, which carries it to the lungs where it is oxygenated. It returns via the pulmonary vein to the left atrium, then passes through the bicuspid (mitral) valve into the left ventricle. The left ventricle contracts and forces the blood through the aortic semilunar valve into the aorta, out to the body.",
            markScheme: [
              "Right atrium → tricuspid / right AV valve → right ventricle (1)",
              "Through pulmonary semilunar valve into pulmonary artery (1)",
              "To the lungs (oxygenated) (1)",
              "Pulmonary vein → left atrium (1)",
              "Through bicuspid / mitral valve → left ventricle (1)",
              "Through aortic semilunar valve → aorta (1)",
            ],
            commonError:
              "Common slips are naming the pulmonary 'vein' as the vessel leaving for the lungs (it should be the pulmonary artery) and forgetting to name the semilunar valves.",
            guideRef: "Structure of the Heart",
            difficulty: "challenge",
            hints: [
              "Start on the right (deoxygenated) side and work across to the left.",
              "Name each AV valve and each semilunar valve in turn.",
              "Deoxygenated blood leaves by the pulmonary artery; oxygenated blood leaves by the aorta.",
            ],
          },
          {
            id: "bio-transport-animals-bq1-06",
            question: "A baby is born with a hole in the septum between the two ventricles. Explain how this defect could reduce the oxygen supplied to the baby's body tissues. [4]",
            marks: 4,
            modelAnswer:
              "Normally the septum keeps oxygenated blood in the left ventricle completely separate from deoxygenated blood in the right ventricle. With a hole in the septum, blood can pass between the two ventricles, so oxygenated and deoxygenated blood mix. The blood pumped out through the aorta therefore has a lower oxygen content / saturation than normal. As a result, less oxygen is delivered to the body tissues, and the heart may have to pump faster or harder to compensate.",
            markScheme: [
              "Septum normally separates oxygenated and deoxygenated blood / prevents mixing (1)",
              "Hole allows blood to mix between the ventricles (1)",
              "Blood leaving in the aorta has lower oxygen content/saturation (1)",
              "Less oxygen delivered to tissues / heart works harder to compensate (1)",
            ],
            commonError:
              "Students sometimes claim the blood 'cannot reach the lungs' — it still can; the issue is mixing that lowers the oxygen content of blood pumped to the body.",
            guideRef: "Structure of the Heart",
            difficulty: "challenge",
            hints: [
              "What is the normal job of the septum?",
              "If there is a hole, what happens to the two types of blood?",
              "How does mixing affect the oxygen content of blood going to the body?",
            ],
          },
          {
            id: "bio-transport-animals-bq1-07",
            question: "Define stroke volume and explain why an athlete who has trained for years may have a larger stroke volume than an untrained person. [3]",
            marks: 3,
            modelAnswer:
              "Stroke volume is the volume of blood pumped out of a ventricle in one contraction (one beat). Regular endurance training causes the heart muscle (especially the left ventricle) to grow stronger and slightly larger (cardiac hypertrophy). A stronger, larger ventricle can fill more fully and contract more powerfully, ejecting a greater volume of blood per beat, so the stroke volume is larger.",
            markScheme: [
              "Stroke volume = volume of blood pumped per beat / per ventricular contraction (1)",
              "Training strengthens / enlarges the heart muscle / left ventricle (cardiac hypertrophy) (1)",
              "A stronger/larger ventricle ejects more blood per beat (1)",
            ],
            commonError:
              "Stroke volume is per beat, not per minute. Per-minute volume is cardiac output (stroke volume × heart rate).",
            guideRef: "Structure of the Heart",
            difficulty: "core",
            hints: [
              "Stroke volume relates to a single beat, not a minute.",
              "What does repeated training do to the heart muscle?",
              "A bigger, stronger ventricle moves more blood each beat.",
            ],
          },
          {
            id: "bio-transport-animals-bq1-08",
            question: "Suggest why fish, with a single circulation, are generally less able to sustain high levels of activity than mammals with a double circulation. [3]",
            marks: 3,
            modelAnswer:
              "In a fish, blood passes through the gill capillaries and loses much of its pressure before flowing on to the body, so it reaches the body organs slowly and at low pressure. The blood is not returned to the heart to be re-pressurised between the gills and the body. This means oxygen and glucose are delivered to the muscles more slowly, limiting the rate of respiration and therefore the level of sustained activity. Mammals re-pressurise the blood, so oxygen is delivered faster, supporting higher activity.",
            markScheme: [
              "Blood loses pressure passing through the gill capillaries (1)",
              "Blood is not re-pressurised before reaching the body / flows slowly at low pressure to organs (1)",
              "Slower delivery of oxygen/glucose limits respiration / activity level (1)",
            ],
            commonError:
              "Avoid simply stating 'fish are cold-blooded'. The mark scheme rewards reasoning about pressure and the rate of oxygen delivery.",
            guideRef: "The Double Circulatory System",
            difficulty: "challenge",
            hints: [
              "What happens to blood pressure in the gill capillaries?",
              "Is the blood returned to the heart before reaching the body?",
              "Link slow oxygen delivery to a limit on activity.",
            ],
          },
          {
            id: "bio-transport-animals-bq1-09",
            question: "State which side of the heart receives blood from the lungs and explain why this blood is rich in oxygen. [2]",
            marks: 2,
            modelAnswer:
              "The left side of the heart (the left atrium) receives blood from the lungs. This blood is rich in oxygen because, as it passed through the capillaries of the lungs, oxygen diffused from the alveoli into the blood and combined with haemoglobin in the red blood cells.",
            markScheme: [
              "Left side / left atrium receives blood from the lungs (1)",
              "Oxygen diffused into the blood / combined with haemoglobin in the lungs (1)",
            ],
            commonError:
              "Remember the pulmonary vein (not the pulmonary artery) carries this oxygenated blood from the lungs to the left atrium.",
            guideRef: "Structure of the Heart",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bq1-10",
            question: "The left ventricle of an adult ejects a stroke volume of 70 cm³ each beat at a resting heart rate of 70 beats per minute. Calculate the cardiac output in dm³ per minute. [3]",
            marks: 3,
            modelAnswer:
              "Cardiac output = stroke volume × heart rate = 70 cm³ × 70 beats per minute = 4900 cm³ per minute. Converting to dm³: 4900 ÷ 1000 = 4.9 dm³ per minute.",
            markScheme: [
              "Uses cardiac output = stroke volume × heart rate (1)",
              "70 × 70 = 4900 cm³ per minute (1)",
              "Converts to 4.9 dm³ per minute (correct units) (1)",
            ],
            commonError:
              "Forgetting to convert cm³ to dm³ (divide by 1000), or quoting the answer with no units.",
            guideRef: "Structure of the Heart",
            difficulty: "core",
            hints: [
              "Cardiac output = stroke volume × heart rate.",
              "Multiply 70 by 70 first.",
              "1 dm³ = 1000 cm³, so divide by 1000.",
            ],
            solutions: [
              {
                label: "Step-by-step calculation",
                steps: [
                  "Write the formula: cardiac output = stroke volume × heart rate.",
                  "Substitute: 70 cm³ × 70 beats/min = 4900 cm³/min.",
                  "Convert volume: 4900 cm³ ÷ 1000 = 4.9 dm³.",
                  "State the answer with units: cardiac output = 4.9 dm³ per minute.",
                ],
              },
            ],
          },
        ],
      },
      // ── QA PAPER 2 ── cardiac cycle, valves, heart rate
      {
        id: "bio-transport-animals-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "The cardiac cycle, valve action, heart sounds, the SAN and control of heart rate.",
        questions: [
          {
            id: "bio-transport-animals-bq2-01",
            question: "State what is meant by the term 'cardiac cycle'. [1]",
            marks: 1,
            modelAnswer:
              "The cardiac cycle is one complete sequence of events of a single heartbeat — including contraction (systole) and relaxation (diastole) of the atria and ventricles.",
            markScheme: [
              "One complete heartbeat / one full sequence of contraction and relaxation of the heart (1)",
            ],
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bq2-02",
            question: "Name the heart's pacemaker and state where it is located. [2]",
            marks: 2,
            modelAnswer:
              "The pacemaker is the sino-atrial node (SAN). It is located in the wall of the right atrium.",
            markScheme: [
              "Sino-atrial node / SAN (1)",
              "In the wall of the right atrium (1)",
            ],
            commonError:
              "Do not confuse the SAN (the pacemaker) with the AVN (atrioventricular node), which relays the impulse to the ventricles.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bq2-03",
            question: "Explain why the heart valves are described as 'passive' structures. [2]",
            marks: 2,
            modelAnswer:
              "The valves are passive because they contain no muscle of their own and are not directly opened or closed by nerves. They open and close only because of differences in blood pressure on either side: higher pressure behind a valve forces it open, while higher pressure in front pushes it shut.",
            markScheme: [
              "Valves contain no muscle / are not actively controlled by nerves (1)",
              "They open and close only due to pressure differences across them (1)",
            ],
            commonError:
              "A very common error is to say valves are 'controlled by muscles' — they are operated entirely by pressure differences.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "core",
            hints: [
              "Do the valves have any muscle of their own?",
              "What actually makes a valve open or shut?",
              "Think about which side has the higher pressure.",
            ],
          },
          {
            id: "bio-transport-animals-bq2-04",
            question: "Describe what happens during ventricular systole, including the behaviour of both sets of valves. [4]",
            marks: 4,
            modelAnswer:
              "During ventricular systole the ventricles contract, raising the pressure of the blood inside them. As ventricular pressure rises above atrial pressure, the atrioventricular (AV) valves are forced shut, preventing backflow of blood into the atria. As ventricular pressure rises above the pressure in the arteries, the semilunar valves are forced open, and blood is ejected into the aorta and pulmonary artery.",
            markScheme: [
              "Ventricles contract / ventricular pressure rises (1)",
              "AV valves close (when ventricular pressure exceeds atrial pressure) (1)",
              "preventing backflow into the atria (1)",
              "Semilunar valves open and blood is ejected into aorta / pulmonary artery (1)",
            ],
            commonError:
              "Students sometimes say the semilunar valves close during ventricular systole — they OPEN to let blood out, and close only when the ventricles relax.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "core",
            hints: [
              "Start with: what do the ventricles do, and what happens to pressure?",
              "Which valves close to stop backflow into the atria?",
              "Which valves must open so blood can leave the heart?",
            ],
          },
          {
            id: "bio-transport-animals-bq2-05",
            question: "Explain the cause of the two heart sounds, often described as 'lub-dub'. [2]",
            marks: 2,
            modelAnswer:
              "The first sound ('lub') is caused by the atrioventricular (AV) valves snapping shut at the start of ventricular systole. The second sound ('dub') is caused by the semilunar valves snapping shut when the ventricles relax at the end of ventricular systole.",
            markScheme: [
              "'Lub' = AV valves closing (at start of ventricular systole) (1)",
              "'Dub' = semilunar valves closing (when ventricles relax) (1)",
            ],
            commonError:
              "The sounds come from valves closing, not from blood being pumped or from the muscle contracting.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "core",
            hints: [
              "Two sounds correspond to two valve-closing events.",
              "Which valves close first, at the start of ventricular contraction?",
              "The semilunar valves close later, giving the second sound.",
            ],
          },
          {
            id: "bio-transport-animals-bq2-06",
            question: "An athlete has a resting heart rate of 48 beats per minute. Calculate the average duration of one cardiac cycle, giving your answer in seconds to 2 significant figures. [2]",
            marks: 2,
            modelAnswer:
              "Duration of one cycle = 60 seconds ÷ heart rate = 60 ÷ 48 = 1.25 seconds, which is 1.3 seconds to 2 significant figures.",
            markScheme: [
              "Uses time per beat = 60 ÷ heart rate / 60 ÷ 48 (1)",
              "= 1.25 s, i.e. 1.3 s to 2 s.f. (1)",
            ],
            commonError:
              "Dividing the heart rate by 60 instead of dividing 60 by the heart rate gives the wrong answer. Always check the units make sense (seconds per beat, not beats per second).",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "core",
            hints: [
              "There are 60 seconds in one minute.",
              "Time for one beat = 60 ÷ beats per minute.",
              "60 ÷ 48 = 1.25, round to 1.3 s.",
            ],
            solutions: [
              {
                label: "Step-by-step calculation",
                steps: [
                  "There are 60 s in a minute and 48 beats in that minute.",
                  "Time per beat = 60 ÷ 48 = 1.25 s.",
                  "Round to 2 significant figures: 1.3 s.",
                ],
              },
            ],
          },
          {
            id: "bio-transport-animals-bq2-07",
            question: "Describe how an electrical impulse spreads through the heart to coordinate a single heartbeat, naming the structures involved. [4]",
            marks: 4,
            modelAnswer:
              "The sino-atrial node (SAN) in the right atrium wall generates an electrical impulse. This impulse spreads across both atria, causing them to contract (atrial systole). The impulse reaches the atrioventricular node (AVN), where it is briefly delayed. From the AVN it passes down the conducting fibres (bundle of His and Purkinje fibres) into the walls of the ventricles, causing them to contract from the bottom upwards (ventricular systole).",
            markScheme: [
              "SAN generates impulse / starts the heartbeat (1)",
              "Impulse spreads across the atria, causing atrial contraction (1)",
              "Reaches the AVN (where it is delayed) (1)",
              "Passes down conducting fibres / bundle of His / Purkinje fibres to make ventricles contract (1)",
            ],
            commonError:
              "Students often omit the AVN or the conducting fibres, or fail to mention that the atria contract before the ventricles.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "challenge",
            hints: [
              "Where does the impulse begin?",
              "It spreads over the atria first, then must reach the ventricles.",
              "Name the relay node (AVN) and the fibres that carry it to the ventricles.",
            ],
          },
          {
            id: "bio-transport-animals-bq2-08",
            question: "Explain the advantage of the short delay in the impulse at the atrioventricular node (AVN). [2]",
            marks: 2,
            modelAnswer:
              "The delay at the AVN allows time for the atria to finish contracting and to push all their blood into the ventricles before the ventricles begin to contract. This ensures the ventricles are filled as fully as possible, so each ventricular contraction ejects the maximum volume of blood, making the heart's pumping more efficient.",
            markScheme: [
              "Delay allows the atria to finish contracting / empty fully into the ventricles first (1)",
              "Ventricles fill completely before contracting / pumping is more efficient (1)",
            ],
            commonError:
              "Some students think the delay slows the heart rate. Its purpose is to coordinate timing, ensuring the ventricles fill before they contract.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "challenge",
            hints: [
              "What must the atria finish doing before the ventricles contract?",
              "Think about how full the ventricles need to be.",
              "Full ventricles mean more blood ejected per beat.",
            ],
          },
          {
            id: "bio-transport-animals-bq2-09",
            question: "Some patients are fitted with an artificial pacemaker. Explain what an artificial pacemaker does and why it might be needed. [3]",
            marks: 3,
            modelAnswer:
              "An artificial pacemaker is an electronic device that produces regular electrical impulses to stimulate the heart to contract at a steady rate. It is needed when the heart's natural pacemaker, the SAN, is faulty and fails to produce regular impulses, so the heart beats too slowly or irregularly. By providing the electrical signals the SAN would normally generate, the device restores a normal, regular heart rate and ensures the heart pumps blood effectively.",
            markScheme: [
              "Device produces regular electrical impulses to stimulate the heart (1)",
              "Needed when the SAN is faulty / heartbeat is irregular or too slow (1)",
              "Restores a regular heart rate / normal heartbeat so blood is pumped effectively (1)",
            ],
            commonError:
              "A pacemaker supplies electrical signals; it does not physically pump the blood itself.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "core",
            hints: [
              "What does the natural SAN provide?",
              "What goes wrong that makes the device necessary?",
              "Describe what the device restores.",
            ],
          },
          {
            id: "bio-transport-animals-bq2-10",
            question: "Explain why blood flows through the heart in one direction only, with reference to pressure and valves. [3]",
            marks: 3,
            modelAnswer:
              "As the chambers contract and relax, the pressure in each chamber rises and falls. Blood always flows from a region of higher pressure to a region of lower pressure. The valves ensure this flow is one-way: the AV valves open to let blood pass from atria to ventricles but close to stop it returning, and the semilunar valves open to let blood leave for the arteries but close to stop it flowing back into the ventricles. Together, the changing pressures and the one-way valves keep blood moving forward only.",
            markScheme: [
              "Blood flows from high to low pressure (created by contraction/relaxation of chambers) (1)",
              "AV valves prevent backflow from ventricles to atria (1)",
              "Semilunar valves prevent backflow from arteries to ventricles (one-way flow overall) (1)",
            ],
            commonError:
              "An answer that only mentions valves but not pressure (or vice versa) usually misses a mark — the examiner wants both ideas linked.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "challenge",
            hints: [
              "What direction does blood always move in terms of pressure?",
              "How do the two sets of valves stop blood going backwards?",
              "Link the pressure changes to the opening and closing of valves.",
            ],
          },
        ],
      },
      // ── QA PAPER 3 ── blood vessels, tissue fluid, exchange
      {
        id: "bio-transport-animals-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Blood vessel structure–function, tissue fluid formation and exchange of materials.",
        questions: [
          {
            id: "bio-transport-animals-bq3-01",
            question: "State the function of each of the three types of blood vessel: artery, vein and capillary. [3]",
            marks: 3,
            modelAnswer:
              "Arteries carry blood away from the heart, usually at high pressure. Veins carry blood back towards the heart, at low pressure. Capillaries are the site of exchange of substances (such as oxygen, glucose and carbon dioxide) between the blood and the body's tissues.",
            markScheme: [
              "Artery — carries blood away from the heart (1)",
              "Vein — carries blood towards / back to the heart (1)",
              "Capillary — site of exchange of substances between blood and tissues (1)",
            ],
            commonError:
              "Defining vessels by oxygen content (e.g. 'arteries carry oxygenated blood') is unreliable — the pulmonary artery and pulmonary vein are exceptions. Define by direction relative to the heart.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bq3-02",
            question: "Give two structural features of a capillary and explain how each helps it carry out exchange. [4]",
            marks: 4,
            modelAnswer:
              "First, the capillary wall is only one cell thick, which gives a very short diffusion distance, so substances such as oxygen and glucose can diffuse rapidly between the blood and the tissues. Second, the lumen is very narrow (about the width of a red blood cell), so red blood cells pass in single file; this slows them down and presses them close to the wall, increasing the time and surface contact available for exchange.",
            markScheme: [
              "Wall is one cell thick (1) — short diffusion distance / faster diffusion (1)",
              "Very narrow lumen / single-file red cells (1) — slows blood / increases contact time for exchange (1)",
            ],
            commonError:
              "Stating the feature without explaining how it helps exchange loses the explanation mark. Always pair each feature with its function.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "core",
            hints: [
              "How thick is a capillary wall, and why does that matter for diffusion?",
              "How wide is the lumen compared with a red blood cell?",
              "Pair each feature with a clear benefit for exchange.",
            ],
          },
          {
            id: "bio-transport-animals-bq3-03",
            question: "Explain why veins need valves but arteries do not. [3]",
            marks: 3,
            modelAnswer:
              "Blood in the veins is at low pressure, because it has already passed through the capillaries, so there is little force pushing it forward and it could flow backwards or pool. Pocket valves in the veins close if blood starts to flow backwards, ensuring it travels only towards the heart. In arteries the blood is at high pressure straight from the ventricles, which keeps it flowing forwards, so valves are not needed.",
            markScheme: [
              "Blood in veins is at low pressure (after passing through capillaries) (1)",
              "Valves prevent backflow / keep blood flowing towards the heart (1)",
              "Arteries carry high-pressure blood that maintains forward flow, so valves not needed (1)",
            ],
            commonError:
              "Students sometimes say arteries 'have valves at the heart' and generalise this. The arteries themselves (away from the semilunar valves) have no valves along their length.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "core",
            hints: [
              "Compare the pressure of blood in veins and arteries.",
              "What problem does low-pressure blood face?",
              "Explain how valves solve that problem and why arteries do not need them.",
            ],
          },
          {
            id: "bio-transport-animals-bq3-04",
            question: "Describe how tissue fluid is formed at the arterial end of a capillary. [3]",
            marks: 3,
            modelAnswer:
              "At the arterial end of a capillary the blood is still at relatively high pressure. This pressure forces water and small dissolved molecules (such as glucose, oxygen, amino acids and ions) out through the thin, permeable capillary wall into the spaces between the cells. Large molecules such as plasma proteins, and the blood cells, are too big to pass through and remain in the capillary. The fluid that leaves is called tissue fluid, and it bathes the surrounding cells.",
            markScheme: [
              "High blood pressure at the arterial end of the capillary (1)",
              "Forces water and small dissolved substances out through the thin/permeable wall (1)",
              "Large plasma proteins and blood cells remain behind / too big to leave (1)",
            ],
            commonError:
              "Forgetting that plasma proteins and cells stay behind — this is the key reason tissue fluid differs from plasma and why water returns later by osmosis.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "core",
            hints: [
              "What is the pressure like at the start of a capillary?",
              "What is pushed out, and what stays behind?",
              "Name the fluid that surrounds the cells.",
            ],
          },
          {
            id: "bio-transport-animals-bq3-05",
            question: "Compare the structure of an artery and a vein under three headings: wall thickness, lumen size, and presence of valves. [3]",
            marks: 3,
            modelAnswer:
              "Wall thickness: arteries have thick, muscular and elastic walls, while veins have thin walls. Lumen size: arteries have a relatively narrow lumen, while veins have a wide lumen. Valves: arteries have no valves along their length, while veins contain pocket valves to prevent backflow.",
            markScheme: [
              "Wall thickness: artery thick / muscular and elastic vs vein thin (1)",
              "Lumen: artery narrow vs vein wide (1)",
              "Valves: artery none vs vein has (pocket) valves (1)",
            ],
            commonError:
              "Make sure each comparison clearly states BOTH vessels for the heading; describing only one vessel can lose the mark for a comparison.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bq3-06",
            question: "Explain why some tissue fluid moves back into the capillary at the venous end. [3]",
            marks: 3,
            modelAnswer:
              "At the venous end of a capillary, the blood pressure has dropped because blood has passed through the narrow capillary. The plasma proteins that could not leave remain in the capillary, so the blood has a lower (more negative) water potential than the surrounding tissue fluid. Because blood pressure is now low and the water potential of the blood is lower than that of the tissue fluid, water moves back into the capillary by osmosis, returning much of the tissue fluid to the blood.",
            markScheme: [
              "Blood pressure is low at the venous end (1)",
              "Plasma proteins remaining in the blood lower its water potential (1)",
              "Water returns to the capillary by osmosis (down a water potential gradient) (1)",
            ],
            commonError:
              "Saying water is 'sucked back by the heart' is wrong — the return is driven by osmosis due to the proteins left in the capillary, combined with the lower blood pressure.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "challenge",
            hints: [
              "What has happened to blood pressure by the venous end?",
              "What did the plasma proteins do that affects water potential?",
              "By what process does water move back in?",
            ],
          },
          {
            id: "bio-transport-animals-bq3-07",
            question: "A person stands still for a very long time and their feet and ankles begin to swell. Using your knowledge of veins and tissue fluid, suggest an explanation. [4]",
            marks: 4,
            modelAnswer:
              "When standing still, the skeletal muscles around the leg veins are not contracting, so they do not squeeze the veins to help push blood upward against gravity. Blood therefore pools in the low-pressure veins of the legs. This raises the pressure in the capillaries of the feet and ankles, so more tissue fluid is forced out than usual, and less is reabsorbed. The excess tissue fluid collects in the tissues, causing the swelling (oedema). Moving the legs would help the muscles squeeze the veins and return the blood.",
            markScheme: [
              "Standing still: leg muscles not contracting / not squeezing the veins (1)",
              "Blood pools in the veins / venous return is reduced (1)",
              "Increased capillary pressure forces out more tissue fluid / less reabsorbed (1)",
              "Excess tissue fluid collects in the tissues causing swelling (oedema) (1)",
            ],
            commonError:
              "Students often stop at 'blood pools' without linking it to extra tissue fluid being forced out and accumulating, which is what actually causes the swelling.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "challenge",
            hints: [
              "What normally helps push venous blood back up the legs?",
              "If that help is missing while standing, what happens to blood in the leg veins?",
              "Link raised capillary pressure to extra tissue fluid being left in the tissues.",
            ],
          },
          {
            id: "bio-transport-animals-bq3-08",
            question: "Explain how the elastic walls of large arteries help to maintain a steady blood flow despite the heart beating in pulses. [3]",
            marks: 3,
            modelAnswer:
              "When the ventricles contract (systole), blood is forced into the arteries at high pressure and the elastic artery walls stretch to accommodate it. When the ventricles relax (diastole), the stretched elastic walls recoil, squeezing the blood and maintaining the pressure. This recoil keeps blood moving forward between heartbeats, smoothing the pulsing flow from the heart into a more continuous flow downstream.",
            markScheme: [
              "Artery walls stretch when blood is forced in during ventricular systole (1)",
              "Walls recoil during diastole / when ventricles relax (1)",
              "Recoil maintains pressure / keeps blood flowing, smoothing the pulse into steadier flow (1)",
            ],
            commonError:
              "Some answers only mention stretching and forget the recoil — it is the elastic recoil between beats that keeps the blood moving.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "core",
            hints: [
              "What do the elastic walls do when blood surges in?",
              "What do they do when the heart relaxes?",
              "Connect the recoil to keeping blood moving between beats.",
            ],
          },
          {
            id: "bio-transport-animals-bq3-09",
            question: "State which substances pass from a respiring body cell into the blood, and which pass from the blood into the cell. [2]",
            marks: 2,
            modelAnswer:
              "Carbon dioxide and other wastes such as urea (and heat) pass from the respiring cell into the blood. Oxygen and glucose (and other nutrients) pass from the blood into the cell.",
            markScheme: [
              "Into the blood: carbon dioxide / urea / waste (1)",
              "Into the cell: oxygen and glucose / nutrients (1)",
            ],
            commonError:
              "Mixing up the directions — remember a respiring cell USES oxygen and glucose (so these enter the cell) and PRODUCES carbon dioxide (which leaves).",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bq3-10",
            question: "The total surface area of all the capillaries in the human body is enormous, and blood moves through them slowly. Explain how these two facts together make capillaries efficient at exchange. [3]",
            marks: 3,
            modelAnswer:
              "The very large total surface area of the capillary network means there is a huge area across which substances can diffuse between the blood and the tissues at any moment. Because blood moves slowly through the capillaries, each portion of blood spends a long time in contact with the exchange surface, giving more time for substances such as oxygen and glucose to diffuse out and carbon dioxide to diffuse in. Together, a large surface area and a long contact time maximise the amount of exchange that can take place, so exchange is very efficient.",
            markScheme: [
              "Large total surface area provides more area for diffusion / exchange (1)",
              "Slow flow gives more time / contact time for diffusion to occur (1)",
              "Together they maximise the rate/amount of exchange of substances (1)",
            ],
            commonError:
              "Linking only one of the two facts to efficiency. The question requires both surface area AND contact time to be explained.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "challenge",
            hints: [
              "What does a large surface area do for diffusion?",
              "What does slow blood flow give more of?",
              "Combine the two ideas to explain efficient exchange.",
            ],
          },
        ],
      },
      // ── QA PAPER 4 ── blood components, haemoglobin, clotting, CHD, exercise
      {
        id: "bio-transport-animals-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Blood components and roles, haemoglobin, clotting, coronary heart disease and exercise.",
        questions: [
          {
            id: "bio-transport-animals-bq4-01",
            question: "Name the four main components of blood and give one function of each. [4]",
            marks: 4,
            modelAnswer:
              "Red blood cells transport oxygen (as oxyhaemoglobin). White blood cells defend the body against pathogens (e.g. phagocytes engulf them; lymphocytes make antibodies). Platelets help blood to clot at a wound. Plasma transports dissolved substances such as glucose, carbon dioxide, urea and hormones, and distributes heat.",
            markScheme: [
              "Red blood cells — transport oxygen (1)",
              "White blood cells — defence against pathogens / phagocytosis / make antibodies (1)",
              "Platelets — involved in blood clotting (1)",
              "Plasma — transports dissolved substances / heat (1)",
            ],
            commonError:
              "Plasma is a component of blood, not just 'water'. Remember to name plasma as the fourth component, not the watery part of cells.",
            guideRef: "Blood Components and Functions",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bq4-02",
            question: "Describe two ways in which the structure of a red blood cell is adapted to its function of carrying oxygen. [2]",
            marks: 2,
            modelAnswer:
              "A red blood cell has no nucleus, which leaves more room inside the cell for haemoglobin, increasing its oxygen-carrying capacity. It also has a biconcave disc shape, which increases its surface area for the diffusion of oxygen into and out of the cell.",
            markScheme: [
              "No nucleus — more space for haemoglobin / more oxygen carried (1)",
              "Biconcave shape — larger surface area for diffusion of oxygen (1)",
            ],
            commonError:
              "Listing a feature without saying how it helps. Each adaptation must be linked to oxygen carrying or diffusion.",
            guideRef: "Blood Components and Functions",
            difficulty: "core",
            hints: [
              "What is missing from a red blood cell that other cells have?",
              "Why does losing that structure help?",
              "How does the cell's shape help diffusion?",
            ],
          },
          {
            id: "bio-transport-animals-bq4-03",
            question: "Explain how haemoglobin transports oxygen from the lungs to respiring tissues. [4]",
            marks: 4,
            modelAnswer:
              "In the lungs, where the oxygen concentration is high, oxygen diffuses into the red blood cells and combines with haemoglobin to form oxyhaemoglobin. The blood carries the oxyhaemoglobin around the body. In respiring tissues, where the oxygen concentration is low (because cells are using oxygen for respiration), the oxyhaemoglobin breaks down, releasing oxygen, which diffuses out into the cells. This reversible binding allows haemoglobin to pick up oxygen where it is plentiful and release it where it is needed.",
            markScheme: [
              "In the lungs (high oxygen) haemoglobin combines with oxygen to form oxyhaemoglobin (1)",
              "Oxyhaemoglobin is transported in the red blood cells / blood to the tissues (1)",
              "In respiring tissues (low oxygen) oxyhaemoglobin breaks down / releases oxygen (1)",
              "Oxygen diffuses into the cells / the binding is reversible (1)",
            ],
            commonError:
              "Forgetting that the binding is reversible, or not linking loading and unloading to high and low oxygen concentrations respectively.",
            guideRef: "Blood Components and Functions",
            difficulty: "core",
            hints: [
              "Where is oxygen concentration high — and what forms there?",
              "What is carried around in the red blood cells?",
              "Where does oxyhaemoglobin release its oxygen, and why?",
            ],
          },
          {
            id: "bio-transport-animals-bq4-04",
            question: "Describe how white blood cells protect the body against pathogens, referring to both phagocytes and lymphocytes. [4]",
            marks: 4,
            modelAnswer:
              "Phagocytes destroy pathogens by phagocytosis: the phagocyte engulfs the pathogen, surrounding it with its cell membrane, then digests it using enzymes. This is a non-specific defence against many pathogens. Lymphocytes provide a specific defence: they produce antibodies — proteins that bind to specific antigens on the surface of a particular pathogen, marking the pathogen for destruction or clumping pathogens together. Some lymphocytes remain as memory cells, giving faster protection if the same pathogen returns.",
            markScheme: [
              "Phagocytes engulf / ingest pathogens (phagocytosis) (1)",
              "and digest them with enzymes (1)",
              "Lymphocytes produce antibodies (1)",
              "Antibodies bind to specific antigens on the pathogen / mark them for destruction (1)",
            ],
            commonError:
              "Confusing the two roles — phagocytes engulf pathogens, lymphocytes make antibodies. Antibodies are not produced by phagocytes.",
            guideRef: "Blood Components and Functions",
            difficulty: "core",
            hints: [
              "What does a phagocyte physically do to a pathogen?",
              "What do lymphocytes produce?",
              "Link antibodies to specific antigens.",
            ],
          },
          {
            id: "bio-transport-animals-bq4-05",
            question: "Describe the process of blood clotting at a cut, and explain why clotting is important. [4]",
            marks: 4,
            modelAnswer:
              "When a blood vessel is cut, platelets gather and clump at the wound and release chemicals (clotting factors). These trigger a series of reactions in which the soluble plasma protein fibrinogen is converted into insoluble fibrin. The fibrin forms a mesh of threads across the wound that traps red blood cells, forming a clot. The clot dries to form a scab. Clotting is important because it stops further loss of blood and prevents the entry of pathogens / microorganisms into the body through the wound.",
            markScheme: [
              "Platelets clump at the wound / release clotting chemicals (1)",
              "Fibrinogen (soluble) is converted to fibrin (insoluble) (1)",
              "Fibrin forms a mesh that traps red blood cells, forming a clot/scab (1)",
              "Importance: prevents blood loss and entry of pathogens (1)",
            ],
            commonError:
              "Mixing up fibrinogen and fibrin: fibrinogen is the soluble form that is converted INTO the insoluble fibrin threads.",
            guideRef: "Blood Components and Functions",
            difficulty: "core",
            hints: [
              "Which blood component acts first at the wound?",
              "Which soluble protein is converted into which insoluble one?",
              "Give two reasons clotting matters.",
            ],
          },
          {
            id: "bio-transport-animals-bq4-06",
            question: "Explain what coronary heart disease is and how it develops. [4]",
            marks: 4,
            modelAnswer:
              "Coronary heart disease occurs when the coronary arteries, which supply the heart muscle, become narrowed. Over time, fatty material (mainly cholesterol) is deposited in the artery walls, forming plaques (atherosclerosis). These plaques narrow the lumen of the coronary arteries, reducing the flow of oxygenated blood to the heart muscle. If the heart muscle does not receive enough oxygen it cannot respire properly, causing chest pain (angina); if a coronary artery becomes completely blocked, part of the heart muscle dies, causing a heart attack.",
            markScheme: [
              "Coronary arteries (supplying heart muscle) become narrowed (1)",
              "Build-up of fatty deposits / cholesterol / plaques in the artery walls (atherosclerosis) (1)",
              "Reduced flow of oxygenated blood to the heart muscle (1)",
              "Heart muscle gets too little oxygen → angina / heart attack if blocked (1)",
            ],
            commonError:
              "Confusing coronary arteries (supply the heart wall) with the main arteries leaving the heart, or with the pulmonary arteries to the lungs.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "core",
            hints: [
              "Which arteries are affected, and what do they normally supply?",
              "What builds up inside the artery walls?",
              "What is the effect on the heart muscle's oxygen supply?",
            ],
          },
          {
            id: "bio-transport-animals-bq4-07",
            question: "Explain how smoking increases the risk of coronary heart disease, referring to at least two components of cigarette smoke. [4]",
            marks: 4,
            modelAnswer:
              "Carbon monoxide in cigarette smoke binds to haemoglobin in red blood cells, reducing the amount of oxygen the blood can carry, so the heart muscle receives less oxygen and the heart must work harder. Nicotine raises the heart rate and causes blood vessels to narrow, increasing blood pressure, which puts extra strain on the heart and arteries. Other chemicals in the smoke damage the lining of the artery walls, encouraging the build-up of fatty plaques (atherosclerosis), which narrow the coronary arteries. Together these effects raise the risk of coronary heart disease.",
            markScheme: [
              "Carbon monoxide binds to haemoglobin, reducing oxygen-carrying capacity (1)",
              "Nicotine increases heart rate / raises blood pressure (narrows vessels) (1)",
              "Chemicals damage artery walls / encourage plaque (atherosclerosis) (1)",
              "Overall effect: heart works harder / less oxygen / increased CHD risk (1)",
            ],
            commonError:
              "Just stating 'smoking is bad for the heart' without naming carbon monoxide or nicotine and their specific effects.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "challenge",
            hints: [
              "What does carbon monoxide do to haemoglobin?",
              "What effect does nicotine have on heart rate and blood pressure?",
              "How do smoke chemicals affect the artery walls?",
            ],
          },
          {
            id: "bio-transport-animals-bq4-08",
            question: "Explain why a person's heart rate increases during exercise, naming the structures and substances involved. [4]",
            marks: 4,
            modelAnswer:
              "During exercise the muscles respire faster, using more oxygen and producing more carbon dioxide. The rise in blood carbon dioxide concentration is detected by chemoreceptors. The nervous system then sends impulses that stimulate the sino-atrial node (SAN) to fire more frequently. This increases the heart rate, so blood is pumped around the body faster, delivering more oxygen and glucose to the muscles and removing the extra carbon dioxide more quickly.",
            markScheme: [
              "Muscles respire faster / produce more carbon dioxide (use more oxygen) (1)",
              "Rising CO2 detected by (chemo)receptors (1)",
              "SAN stimulated to fire faster / nervous signals to the SAN (1)",
              "Heart rate increases to deliver more oxygen/glucose and remove CO2 faster (1)",
            ],
            commonError:
              "Forgetting to mention what is detected (carbon dioxide) or which structure controls heart rate (the SAN). Both are required for full marks.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "core",
            hints: [
              "What waste gas rises when muscles respire faster?",
              "What detects this change in the blood?",
              "Which structure is stimulated to speed up the heart?",
            ],
          },
          {
            id: "bio-transport-animals-bq4-09",
            question: "A trained athlete has a resting heart rate of 50 beats per minute and a stroke volume of 100 cm³. An untrained person has a resting heart rate of 75 beats per minute and a stroke volume of 70 cm³. Calculate each person's resting cardiac output and comment on what your answers show. [4]",
            marks: 4,
            modelAnswer:
              "Cardiac output = stroke volume × heart rate. For the athlete: 100 cm³ × 50 = 5000 cm³ per minute (5.0 dm³ per minute). For the untrained person: 70 cm³ × 75 = 5250 cm³ per minute (5.25 dm³ per minute). The two resting cardiac outputs are very similar (both around 5 dm³ per minute), which makes sense because at rest the body needs roughly the same amount of oxygen. The athlete achieves this with a much lower heart rate because each beat pumps a larger stroke volume (a stronger, larger heart), so the heart does not need to beat as often.",
            markScheme: [
              "Uses cardiac output = stroke volume × heart rate (1)",
              "Athlete: 100 × 50 = 5000 cm³/min (5.0 dm³/min) (1)",
              "Untrained: 70 × 75 = 5250 cm³/min (5.25 dm³/min) (1)",
              "Comment: outputs similar at rest; athlete's larger stroke volume allows a lower heart rate (1)",
            ],
            commonError:
              "Calculating the values but failing to comment, or wrongly concluding the athlete pumps far less blood. At rest the cardiac outputs are similar; the athlete simply uses a lower rate with a bigger stroke volume.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "challenge",
            hints: [
              "Cardiac output = stroke volume × heart rate.",
              "Work out each value separately, keeping units consistent.",
              "Compare the two answers — are they similar? Why might that be at rest?",
            ],
            solutions: [
              {
                label: "Step-by-step calculation",
                steps: [
                  "Write the formula: cardiac output = stroke volume × heart rate.",
                  "Athlete: 100 cm³ × 50 beats/min = 5000 cm³/min = 5.0 dm³/min.",
                  "Untrained: 70 cm³ × 75 beats/min = 5250 cm³/min = 5.25 dm³/min.",
                  "Compare: both ≈ 5 dm³/min, so resting output is similar; the athlete reaches it with a lower rate because stroke volume is larger.",
                ],
              },
            ],
          },
          {
            id: "bio-transport-animals-bq4-10",
            question: "Doctors advise a patient at risk of coronary heart disease to change their lifestyle. Suggest three lifestyle changes the patient could make and explain how each would reduce the risk. [6]",
            marks: 6,
            modelAnswer:
              "First, the patient could reduce the amount of saturated fat and cholesterol in their diet; this lowers blood cholesterol, reducing the build-up of fatty plaques in the coronary arteries. Second, they could stop smoking; this avoids carbon monoxide reducing oxygen transport and avoids chemicals that raise blood pressure and damage artery walls, lowering the rate of plaque formation. Third, they could take regular aerobic exercise; this strengthens the heart muscle, helps control body mass and lowers resting blood pressure, all of which reduce strain on the heart and the risk of CHD. (Other valid points include reducing stress and limiting alcohol/salt intake.)",
            markScheme: [
              "Reduce saturated fat/cholesterol in diet (1) — lowers blood cholesterol / reduces plaque build-up (1)",
              "Stop smoking (1) — avoids CO reducing oxygen transport / avoids artery wall damage and raised blood pressure (1)",
              "Take regular exercise (1) — strengthens heart / lowers blood pressure / controls body mass (1)",
            ],
            commonError:
              "Listing changes without explaining how each reduces risk. Each lifestyle change needs a linked biological reason for the second mark.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "core",
            hints: [
              "Think about diet, smoking and exercise as three separate changes.",
              "For each one, state the change AND why it helps.",
              "Link diet to cholesterol, smoking to oxygen/artery damage, exercise to a stronger heart and lower blood pressure.",
            ],
          },
        ],
      },
    ],
  },
};
