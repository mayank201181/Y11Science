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
      {
        id: "bio-transport-animals-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Heart structure, the double circulation and the cardiac cycle.",
        questions: [
          {
            id: "bio-transport-animals-bm1-01",
            question: "Which vessel carries deoxygenated blood away from the heart?",
            options: ["Aorta", "Pulmonary vein", "Pulmonary artery", "Vena cava"],
            answerIndex: 2,
            explanation: "The pulmonary artery carries deoxygenated blood from the right ventricle to the lungs. It is the one artery that carries deoxygenated blood. The vena cava is a vein (carries blood towards the heart).",
            guideRef: "Structure of the Heart",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm1-02",
            question: "Into which chamber does the vena cava empty blood?",
            options: ["Left atrium", "Right atrium", "Left ventricle", "Right ventricle"],
            answerIndex: 1,
            explanation: "The vena cava returns deoxygenated blood from the body into the right atrium, the first chamber of the heart on the systemic return.",
            guideRef: "Structure of the Heart",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm1-03",
            question: "What is the main advantage of a double circulatory system compared with a single circulatory system?",
            options: [
              "Blood is filtered twice per circuit, removing more waste.",
              "Blood is re-pressurised by the heart before being sent to the body, maintaining high pressure.",
              "Oxygenated and deoxygenated blood are deliberately mixed for efficiency.",
              "Only one ventricle is needed, saving energy.",
            ],
            answerIndex: 1,
            explanation: "After flowing through the lungs (which lowers pressure), blood returns to the heart and is re-pressurised by the left ventricle before going to the body. This keeps systemic pressure high, allowing rapid delivery of O₂ to support an active lifestyle.",
            guideRef: "The Double Circulatory System",
            difficulty: "core",
            hints: [
              "What happens to blood pressure as blood passes through a capillary bed?",
              "How many times does blood pass through the heart per complete circuit in a mammal?",
              "Re-pressurising blood between the two loops keeps pressure high in which circuit?",
            ],
          },
          {
            id: "bio-transport-animals-bm1-04",
            question: "Which sequence correctly traces blood from the lungs to the body?",
            options: [
              "Pulmonary vein → left atrium → left ventricle → aorta",
              "Pulmonary artery → right atrium → right ventricle → aorta",
              "Pulmonary vein → right atrium → right ventricle → pulmonary artery",
              "Vena cava → left atrium → left ventricle → aorta",
            ],
            answerIndex: 0,
            explanation: "Oxygenated blood from the lungs returns via the pulmonary vein to the left atrium, passes to the left ventricle, and is pumped out through the aorta to the body.",
            guideRef: "Structure of the Heart",
            difficulty: "core",
            hints: [
              "Blood from the lungs is oxygenated — which side of the heart handles oxygenated blood?",
              "Atrium receives, ventricle pumps out.",
              "The main artery to the body is the aorta.",
            ],
          },
          {
            id: "bio-transport-animals-bm1-05",
            question: "During atrial systole, what is the state of the valves?",
            options: [
              "AV valves open, semilunar valves closed",
              "AV valves closed, semilunar valves open",
              "Both AV and semilunar valves open",
              "Both AV and semilunar valves closed",
            ],
            answerIndex: 0,
            explanation: "When the atria contract, atrial pressure exceeds ventricular pressure, so the AV valves are open and blood flows into the ventricles. The semilunar valves remain closed because ventricular pressure is still below arterial pressure.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "core",
            hints: [
              "Atria contract to push blood into the ventricles — which valves must be open for that?",
              "Have the ventricles contracted yet? If not, can they open the semilunar valves?",
              "Valves open when the pressure behind them is greater.",
            ],
          },
          {
            id: "bio-transport-animals-bm1-06",
            question: "What causes the 'lub' (first) heart sound?",
            options: [
              "Semilunar valves closing",
              "Atrioventricular valves closing",
              "Atria contracting",
              "The SAN firing",
            ],
            answerIndex: 1,
            explanation: "The 'lub' is produced by the AV valves snapping shut at the start of ventricular systole. The 'dub' is the semilunar valves closing at the end of ventricular systole.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm1-07",
            question: "The left ventricle wall is much thicker than the right ventricle wall because it must:",
            options: [
              "hold a larger volume of blood per beat",
              "generate higher pressure to pump blood around the systemic circuit",
              "pump blood the short distance to the lungs",
              "store oxygen for the heart muscle",
            ],
            answerIndex: 1,
            explanation: "Both ventricles pump the same volume per beat, but the left ventricle pumps against the high resistance of the long systemic circuit, requiring greater pressure and therefore a thicker, more muscular wall.",
            guideRef: "Structure of the Heart",
            difficulty: "core",
            hints: [
              "Both ventricles pump roughly equal volumes per beat — so volume is not the reason.",
              "Compare the length and resistance of the pulmonary vs systemic circuit.",
              "Thicker muscle = more force = higher pressure.",
            ],
          },
          {
            id: "bio-transport-animals-bm1-08",
            question: "Which structure acts as the heart's natural pacemaker?",
            options: [
              "Atrioventricular node (AVN)",
              "Bundle of His",
              "Sino-atrial node (SAN)",
              "Purkinje fibres",
            ],
            answerIndex: 2,
            explanation: "The sino-atrial node (SAN), in the wall of the right atrium, generates the electrical impulses that initiate each heartbeat, setting the heart rate.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm1-09",
            question: "A ventricular septal defect is a hole in the septum between the two ventricles. What is the most likely consequence?",
            options: [
              "Blood cannot reach the lungs at all.",
              "Oxygenated and deoxygenated blood mix, lowering the O₂ saturation of blood reaching the body.",
              "The AV valves can no longer close.",
              "The heart rate becomes permanently fixed.",
            ],
            answerIndex: 1,
            explanation: "The septum normally keeps the two sides separate. A hole allows oxygenated blood (left) to mix with deoxygenated blood (right), so blood pumped to the body via the aorta has a lower average O₂ saturation, reducing O₂ delivery to tissues.",
            guideRef: "Structure of the Heart",
            difficulty: "challenge",
            hints: [
              "What does the septum normally prevent?",
              "If left and right blood mix, what happens to the oxygen content of blood leaving via the aorta?",
              "Lower O₂ saturation → less O₂ delivered to respiring tissues.",
            ],
          },
          {
            id: "bio-transport-animals-bm1-10",
            question: "At rest a heart beats 75 times per minute. Approximately how long is one cardiac cycle, and during which phase are the semilunar valves open?",
            options: [
              "0.8 s; semilunar valves open during ventricular systole",
              "1.3 s; semilunar valves open during diastole",
              "0.8 s; semilunar valves open during atrial systole",
              "0.4 s; semilunar valves open during diastole",
            ],
            answerIndex: 0,
            explanation: "60 s ÷ 75 beats = 0.8 s per cycle. The semilunar valves open during ventricular systole, when ventricular pressure exceeds arterial pressure and blood is ejected into the aorta and pulmonary artery.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "challenge",
            hints: [
              "Cycle length = 60 ÷ heart rate.",
              "Semilunar valves open only when blood is being ejected into the arteries.",
              "Ejection happens when the ventricles contract.",
            ],
            strategy: "Convert beats-per-minute to seconds-per-beat with 60 ÷ rate, then recall which valves are open during ejection.",
          },
        ],
      },
      {
        id: "bio-transport-animals-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Blood vessels, exchange and the structure–function of arteries, veins and capillaries.",
        questions: [
          {
            id: "bio-transport-animals-bm2-01",
            question: "Which type of blood vessel has walls that are only one cell thick?",
            options: ["Artery", "Vein", "Capillary", "Arteriole"],
            answerIndex: 2,
            explanation: "Capillary walls are a single layer of endothelial cells, minimising the diffusion distance for exchange of gases and nutrients with the tissues.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm2-02",
            question: "Which feature is found in veins but NOT in arteries?",
            options: ["Thick muscular walls", "A narrow lumen", "Pocket valves", "Elastic recoil"],
            answerIndex: 2,
            explanation: "Veins contain pocket (semilunar) valves that prevent backflow of low-pressure blood. Arteries have thick muscular/elastic walls and a narrow lumen but no valves.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm2-03",
            question: "Why do arteries have thick, elastic walls?",
            options: [
              "To allow gas exchange with the tissues",
              "To withstand and smooth out high-pressure surges from ventricular contraction",
              "To slow blood down for efficient exchange",
              "To prevent backflow without needing valves alone",
            ],
            answerIndex: 1,
            explanation: "Blood leaves the ventricles at high pressure in surges. Thick muscular walls resist bursting, and elastic recoil during diastole smooths the flow and maintains pressure between beats (felt as the pulse).",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "core",
            hints: [
              "What pressure is blood at when it leaves the ventricle?",
              "What lets an artery 'spring back' after each surge?",
              "Elastic recoil keeps pressure up between heartbeats.",
            ],
          },
          {
            id: "bio-transport-animals-bm2-04",
            question: "Veins have a wide lumen mainly to:",
            options: [
              "increase blood pressure",
              "reduce resistance and aid the return of blood to the heart",
              "allow valves to open more easily",
              "increase the surface area for exchange",
            ],
            answerIndex: 1,
            explanation: "A wide lumen reduces resistance to the flow of low-pressure blood, helping large volumes return efficiently to the heart.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "core",
            hints: [
              "Is blood in veins at high or low pressure?",
              "A wider tube offers more or less resistance to flow?",
              "Veins must return blood to the heart against low pressure.",
            ],
          },
          {
            id: "bio-transport-animals-bm2-05",
            question: "Which adaptation of a capillary increases the time available for exchange of substances?",
            options: [
              "Elastic recoil of the wall",
              "Presence of valves",
              "A very narrow lumen that slows red blood cells to single file",
              "A thick muscular wall",
            ],
            answerIndex: 2,
            explanation: "The narrow lumen forces red blood cells through in single file and slows the blood, increasing contact time and maximising the exchange of O₂, CO₂ and nutrients across the thin wall.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "core",
            hints: [
              "What happens to blood speed in a very narrow vessel?",
              "Slower blood spends more or less time at the exchange surface?",
              "Single-file red cells are close to the wall.",
            ],
          },
          {
            id: "bio-transport-animals-bm2-06",
            question: "Venous return is aided by the contraction of:",
            options: [
              "the heart's semilunar valves",
              "surrounding skeletal muscles squeezing the veins",
              "the elastic artery walls",
              "the capillary endothelium",
            ],
            answerIndex: 1,
            explanation: "Skeletal muscles around veins contract during movement, squeezing the veins. Combined with pocket valves that prevent backflow, this pushes blood towards the heart.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "core",
            hints: [
              "Blood in veins is at low pressure and needs help moving.",
              "What surrounds many deep veins and contracts during movement?",
              "Valves ensure the squeezed blood only moves one way.",
            ],
          },
          {
            id: "bio-transport-animals-bm2-07",
            question: "Which row correctly matches each vessel to its blood pressure and wall thickness?",
            options: [
              "Artery: low pressure, thin wall; Vein: high pressure, thick wall",
              "Artery: high pressure, thick wall; Vein: low pressure, thin wall",
              "Capillary: high pressure, thick wall; Artery: low pressure, thin wall",
              "Vein: high pressure, thin wall; Capillary: low pressure, thick wall",
            ],
            answerIndex: 1,
            explanation: "Arteries carry high-pressure blood and have thick walls; veins carry low-pressure blood and have thin walls. Capillaries have the thinnest (one-cell) walls.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm2-08",
            question: "A blood vessel is observed to pulse with each heartbeat and has a thick wall with a narrow lumen. It is most likely:",
            options: ["a vein", "a capillary", "an artery", "a lymph vessel"],
            answerIndex: 2,
            explanation: "A pulse is felt only in arteries, where elastic walls stretch and recoil with each surge of high-pressure blood. The thick wall and narrow lumen confirm it is an artery.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "core",
            hints: [
              "Where can you feel a pulse — over a vein or an artery?",
              "Thick wall + narrow lumen is characteristic of which vessel?",
              "Pulse is caused by elastic recoil after a pressure surge.",
            ],
          },
          {
            id: "bio-transport-animals-bm2-09",
            question: "Why does blood pressure fall steadily as blood passes from the arteries through the capillaries to the veins?",
            options: [
              "Blood gains oxygen, which lowers its pressure.",
              "The total cross-sectional area of capillaries is large and resistance dissipates pressure.",
              "Valves in capillaries reduce the pressure.",
              "The heart stops pumping during diastole.",
            ],
            answerIndex: 1,
            explanation: "The vast capillary network has an enormous total cross-sectional area and high resistance from friction with vessel walls, so pressure is dissipated. By the time blood reaches the veins it is at low pressure.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "challenge",
            hints: [
              "Think about the huge number of capillaries and their tiny diameters.",
              "Friction with vessel walls uses up the driving pressure.",
              "Oxygen content does not determine pressure.",
            ],
          },
          {
            id: "bio-transport-animals-bm2-10",
            question: "Substances such as glucose and oxygen leave the capillaries to reach body cells by:",
            options: [
              "active transport across the artery wall",
              "diffusion across the one-cell-thick capillary wall into tissue fluid",
              "osmosis through the vein valves",
              "filtration through the semilunar valves",
            ],
            answerIndex: 1,
            explanation: "Dissolved substances diffuse down their concentration gradients across the thin, permeable capillary wall into the tissue fluid that bathes the cells; the short diffusion distance makes this rapid.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "challenge",
            hints: [
              "Which vessel is the exchange surface?",
              "Down a concentration gradient, no energy needed — what process is that?",
              "Substances first enter the tissue fluid before reaching cells.",
            ],
          },
        ],
      },
      {
        id: "bio-transport-animals-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Blood components, haemoglobin, defence and clotting.",
        questions: [
          {
            id: "bio-transport-animals-bm3-01",
            question: "Which component of blood is a straw-coloured liquid that transports dissolved substances?",
            options: ["Red blood cells", "Plasma", "Platelets", "Lymphocytes"],
            answerIndex: 1,
            explanation: "Plasma is the pale-yellow liquid (mostly water) that transports glucose, amino acids, hormones, urea, CO₂ as hydrogencarbonate ions, and heat.",
            guideRef: "Blood Components and Functions",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm3-02",
            question: "Which feature of a red blood cell increases the space available for haemoglobin?",
            options: ["Its biconcave shape", "The absence of a nucleus", "Its thick cell wall", "Its many mitochondria"],
            answerIndex: 1,
            explanation: "Mature red blood cells have no nucleus, leaving more room for haemoglobin and so increasing oxygen-carrying capacity. The biconcave shape separately increases surface area for diffusion.",
            guideRef: "Blood Components and Functions",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm3-03",
            question: "Where in the body is oxyhaemoglobin formed?",
            options: [
              "In respiring muscle tissue",
              "In the lungs, where oxygen concentration is high",
              "In the liver",
              "In the plasma",
            ],
            answerIndex: 1,
            explanation: "In the lungs the oxygen partial pressure is high, so haemoglobin combines with O₂ to form oxyhaemoglobin. In respiring tissues (low O₂) oxyhaemoglobin breaks down and releases O₂.",
            guideRef: "Blood Components and Functions",
            difficulty: "core",
            hints: [
              "Haemoglobin picks up O₂ where O₂ is plentiful.",
              "Which organ has the highest O₂ concentration?",
              "It releases O₂ where O₂ is scarce (respiring tissue).",
            ],
          },
          {
            id: "bio-transport-animals-bm3-04",
            question: "How is most carbon dioxide transported in the blood?",
            options: [
              "Bound to haemoglobin as carbaminohaemoglobin only",
              "Dissolved in plasma as hydrogencarbonate ions",
              "Inside platelets",
              "As bubbles of gas in the plasma",
            ],
            answerIndex: 1,
            explanation: "Most CO₂ is carried in the plasma as hydrogencarbonate (HCO₃⁻) ions. A smaller amount is carried by haemoglobin and a little dissolves directly in plasma.",
            guideRef: "Blood Components and Functions",
            difficulty: "core",
            hints: [
              "CO₂ is mostly carried in the liquid part of blood.",
              "It is converted into an ion before transport.",
              "The ion is hydrogencarbonate, HCO₃⁻.",
            ],
          },
          {
            id: "bio-transport-animals-bm3-05",
            question: "Phagocytes defend the body by:",
            options: [
              "producing antibodies specific to one antigen",
              "engulfing and digesting pathogens by phagocytosis",
              "forming fibrin threads",
              "carrying oxygen to white blood cells",
            ],
            answerIndex: 1,
            explanation: "Phagocytes carry out non-specific immunity: they engulf pathogens by surrounding them with the cell membrane and digest them using enzymes from lysosomes.",
            guideRef: "Blood Components and Functions",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm3-06",
            question: "Which statement about lymphocytes is correct?",
            options: [
              "They have no nucleus.",
              "They engulf pathogens non-specifically.",
              "They produce antibodies that bind specifically to antigens.",
              "They carry oxygen as oxyhaemoglobin.",
            ],
            answerIndex: 2,
            explanation: "Lymphocytes are white blood cells (with a nucleus) that produce antibodies — proteins that bind specifically to particular antigens, marking pathogens for destruction. This is specific (adaptive) immunity.",
            guideRef: "Blood Components and Functions",
            difficulty: "core",
            hints: [
              "Lymphocytes provide specific immunity.",
              "What molecules do they make that target specific antigens?",
              "Engulfing pathogens is the phagocyte's job, not the lymphocyte's.",
            ],
          },
          {
            id: "bio-transport-animals-bm3-07",
            question: "Place the clotting events in the correct order: 1 fibrin mesh traps red cells; 2 platelets clump at the wound; 3 fibrinogen converted to fibrin.",
            options: ["1 → 2 → 3", "2 → 3 → 1", "3 → 1 → 2", "2 → 1 → 3"],
            answerIndex: 1,
            explanation: "Platelets clump at the wound and release clotting factors, which convert soluble fibrinogen into insoluble fibrin threads; the fibrin mesh then traps red blood cells, forming a clot that dries into a scab.",
            guideRef: "Blood Components and Functions",
            difficulty: "core",
            hints: [
              "What arrives at the wound first?",
              "Fibrinogen must become fibrin before a mesh can form.",
              "The mesh trapping cells is the final step.",
            ],
          },
          {
            id: "bio-transport-animals-bm3-08",
            question: "Carbon monoxide from cigarette smoke reduces the oxygen-carrying capacity of blood because it:",
            options: [
              "destroys platelets",
              "binds tightly to haemoglobin, preventing it carrying oxygen",
              "thickens the plasma",
              "blocks the coronary arteries directly",
            ],
            answerIndex: 1,
            explanation: "Carbon monoxide binds to haemoglobin much more strongly than oxygen, forming carboxyhaemoglobin. This reduces the number of haemoglobin sites available to carry O₂, lowering oxygen delivery to tissues.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "core",
            hints: [
              "CO competes with O₂ for the same molecule.",
              "Which protein normally carries O₂?",
              "If CO occupies haemoglobin, less O₂ can be carried.",
            ],
          },
          {
            id: "bio-transport-animals-bm3-09",
            question: "A person at high altitude (low O₂) gradually produces more red blood cells. Which feature of haemoglobin does this best support?",
            options: [
              "Haemoglobin permanently combines with oxygen.",
              "More haemoglobin increases the total oxygen the blood can carry despite scarce oxygen.",
              "Red blood cells produce their own oxygen.",
              "Haemoglobin only works at sea level.",
            ],
            answerIndex: 1,
            explanation: "At altitude there is less O₂ per breath. Making more red blood cells means more haemoglobin, increasing the blood's total oxygen-carrying capacity to compensate for the lower availability of O₂.",
            guideRef: "Blood Components and Functions",
            difficulty: "challenge",
            hints: [
              "Each red blood cell is packed with haemoglobin that binds O₂.",
              "If air has less O₂, how could the body still deliver enough O₂?",
              "More carriers compensate for a lower supply per breath.",
            ],
          },
          {
            id: "bio-transport-animals-bm3-10",
            question: "A blood sample contains many cells with a lobed nucleus and an unusually high number of them. This most likely indicates:",
            options: [
              "low oxygen-carrying capacity",
              "an infection, because white blood cell numbers rise to fight pathogens",
              "a clotting disorder caused by too few platelets",
              "dehydration of the plasma",
            ],
            answerIndex: 1,
            explanation: "Cells with a nucleus are white blood cells. A raised white blood cell count typically indicates the body is fighting an infection, as phagocytes and lymphocytes multiply to combat pathogens.",
            guideRef: "Blood Components and Functions",
            difficulty: "challenge",
            hints: [
              "Which blood cells have a nucleus?",
              "What is the main role of white blood cells?",
              "A rise in their number suggests the immune system is active.",
            ],
          },
        ],
      },
      {
        id: "bio-transport-animals-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Coronary heart disease, exercise physiology and applied data.",
        questions: [
          {
            id: "bio-transport-animals-bm4-01",
            question: "Which arteries supply the heart muscle itself with oxygenated blood?",
            options: ["Pulmonary arteries", "Coronary arteries", "Renal arteries", "Carotid arteries"],
            answerIndex: 1,
            explanation: "The coronary arteries branch from the base of the aorta and supply the myocardium (heart muscle) with oxygen and glucose.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm4-02",
            question: "Coronary heart disease is caused by:",
            options: [
              "a hole in the septum",
              "narrowing of the coronary arteries by fatty plaques",
              "failure of the SAN to fire",
              "too many red blood cells",
            ],
            answerIndex: 1,
            explanation: "CHD results from atherosclerosis: fatty plaques (mainly cholesterol) build up inside the coronary artery walls, narrowing the lumen and reducing blood flow to the heart muscle.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm4-03",
            question: "Which of the following is a risk factor for coronary heart disease?",
            options: [
              "A diet high in dietary fibre",
              "Regular aerobic exercise",
              "A diet high in saturated fat",
              "A low resting heart rate",
            ],
            answerIndex: 2,
            explanation: "A diet high in saturated fat raises blood LDL cholesterol, promoting plaque formation. Fibre, exercise and a low resting heart rate are associated with reduced risk.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bm4-04",
            question: "During exercise, heart rate increases because:",
            options: [
              "O₂ levels rise and stimulate the SAN",
              "rising CO₂ is detected and the SAN is stimulated to fire faster",
              "the AV valves open more often",
              "plasma volume increases",
            ],
            answerIndex: 1,
            explanation: "Faster respiration during exercise raises blood CO₂. Chemoreceptors detect this and the nervous system stimulates the SAN to fire more frequently, raising heart rate to deliver more O₂ and remove CO₂.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "core",
            hints: [
              "Which gas rises in the blood when muscles respire more?",
              "What detects the change in blood gases?",
              "The SAN sets the heart rate.",
            ],
          },
          {
            id: "bio-transport-animals-bm4-05",
            question: "Why does a fit person usually have a lower resting heart rate than an unfit person?",
            options: [
              "Their blood carries less oxygen.",
              "Their heart has a larger stroke volume, so fewer beats are needed for the same cardiac output.",
              "Their coronary arteries are narrower.",
              "Their SAN has stopped working.",
            ],
            answerIndex: 1,
            explanation: "Training strengthens the heart and increases stroke volume (volume pumped per beat). Since cardiac output = heart rate × stroke volume, a larger stroke volume means a lower heart rate maintains the same output at rest.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "core",
            hints: [
              "Recall cardiac output = heart rate × stroke volume.",
              "Training makes the heart stronger — what happens to stroke volume?",
              "If stroke volume rises and output is constant, rate must fall.",
            ],
          },
          {
            id: "bio-transport-animals-bm4-06",
            question: "Which lifestyle change would most directly reduce the risk of coronary heart disease?",
            options: [
              "Increasing intake of saturated fat",
              "Stopping smoking",
              "Reducing physical activity",
              "Increasing salt intake",
            ],
            answerIndex: 1,
            explanation: "Stopping smoking removes nicotine (raises blood pressure), carbon monoxide (lowers O₂ capacity) and chemicals that damage artery walls — all of which promote CHD.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "core",
            hints: [
              "Which option removes several harmful effects at once?",
              "Think about what cigarette smoke does to arteries and to oxygen transport.",
              "The other options all increase risk.",
            ],
          },
          {
            id: "bio-transport-animals-bm4-07",
            question: "A patient with narrowed coronary arteries experiences chest pain (angina) during exercise but not at rest. The best explanation is that:",
            options: [
              "the lungs cannot absorb enough O₂ during exercise",
              "during exercise the heart muscle's O₂ demand rises but the narrowed arteries cannot supply enough",
              "exercise causes the septum to leak",
              "the semilunar valves fail during exercise",
            ],
            answerIndex: 1,
            explanation: "At rest the reduced flow through narrowed coronary arteries may be adequate. During exercise the myocardium needs more O₂, but the narrowed arteries cannot deliver it, causing ischaemia and pain (angina).",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "core",
            hints: [
              "What do coronary arteries supply?",
              "Does the heart work harder at rest or during exercise?",
              "Supply limited + demand raised = shortfall = pain.",
            ],
          },
          {
            id: "bio-transport-animals-bm4-08",
            question: "Resting heart rate is 70 bpm and stroke volume is 70 cm³. What is the cardiac output?",
            options: ["140 cm³ per minute", "4900 cm³ per minute", "490 cm³ per minute", "1000 cm³ per minute"],
            answerIndex: 1,
            explanation: "Cardiac output = heart rate × stroke volume = 70 × 70 = 4900 cm³ per minute (4.9 dm³/min), a typical resting value for an adult.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "core",
            hints: [
              "Cardiac output = heart rate × stroke volume.",
              "Multiply 70 by 70.",
              "Keep the units as cm³ per minute.",
            ],
            strategy: "Substitute into cardiac output = heart rate × stroke volume; check the units of the answer match volume per minute.",
          },
          {
            id: "bio-transport-animals-bm4-09",
            question: "An athlete's stroke volume rises from 70 cm³ to 120 cm³ during exercise while heart rate rises from 60 to 150 bpm. By what factor does cardiac output increase (to the nearest whole number)?",
            options: ["About 2×", "About 3×", "About 4×", "About 6×"],
            answerIndex: 2,
            explanation: "Resting output = 60 × 70 = 4200 cm³/min. Exercise output = 150 × 120 = 18 000 cm³/min. 18 000 ÷ 4200 = 4.3, i.e. about a 4-fold increase.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "challenge",
            hints: [
              "Work out cardiac output at rest and during exercise separately.",
              "Cardiac output = heart rate × stroke volume each time.",
              "Divide the exercise output by the resting output.",
            ],
            strategy: "Compute both cardiac outputs, then take the ratio exercise ÷ rest and round to the nearest whole number.",
          },
          {
            id: "bio-transport-animals-bm4-10",
            question: "On a graph of heart rate against time, after exercise stops the line falls gradually back to the resting value. This recovery period represents the time taken for:",
            options: [
              "the SAN to be replaced",
              "blood CO₂ levels to fall and O₂ demand to return to resting, reducing SAN stimulation",
              "the coronary arteries to widen permanently",
              "stroke volume to drop to zero",
            ],
            answerIndex: 1,
            explanation: "After exercise the muscles respire less, so CO₂ falls and O₂ demand drops. The reduced CO₂ means the SAN is stimulated less, so heart rate gradually returns to resting. Fitter people recover faster.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "challenge",
            hints: [
              "What rose in the blood to drive heart rate up during exercise?",
              "After exercise, that factor falls — what happens to SAN stimulation?",
              "Recovery time reflects how fast normal blood gas levels are restored.",
            ],
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-transport-animals-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Circulation, heart structure and the cardiac cycle.",
        questions: [
          {
            id: "bio-transport-animals-bq1-01",
            question: "State what is meant by a double circulatory system. [2]",
            marks: 2,
            modelAnswer:
              "A double circulatory system is one in which the blood passes through the heart twice for each complete circuit of the body. It consists of two separate loops driven by the same heart: the pulmonary circulation (heart to lungs and back) and the systemic circulation (heart to the body and back).",
            markScheme: [
              "Blood passes through the heart twice per complete circuit",
              "Two loops: pulmonary (heart–lungs) and systemic (heart–body)",
            ],
            commonError:
              "Students sometimes say blood goes round the body twice; it is that blood passes through the heart twice per circuit.",
            guideRef: "The Double Circulatory System",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bq1-02",
            question: "Name the four chambers of the heart and state which blood vessel delivers blood into each atrium. [4]",
            marks: 4,
            modelAnswer:
              "The four chambers are the right atrium, right ventricle, left atrium and left ventricle. The right atrium receives deoxygenated blood from the vena cava. The left atrium receives oxygenated blood from the pulmonary vein. (The ventricles pump blood out rather than receive it from veins.)",
            markScheme: [
              "Right atrium and right ventricle",
              "Left atrium and left ventricle",
              "Vena cava delivers blood into the right atrium",
              "Pulmonary vein delivers blood into the left atrium",
            ],
            commonError:
              "Confusing the vessels: the pulmonary artery and aorta leave the ventricles; veins (vena cava, pulmonary vein) enter the atria.",
            guideRef: "Structure of the Heart",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bq1-03",
            question: "Explain why the wall of the left ventricle is thicker than the wall of the right ventricle. [3]",
            marks: 3,
            modelAnswer:
              "The left ventricle pumps blood around the whole body (the systemic circuit), which is long and has high resistance, whereas the right ventricle only pumps blood the short distance to the lungs (pulmonary circuit). The left ventricle therefore needs to generate a much higher pressure. A thicker, more muscular wall produces a greater force of contraction, creating the higher pressure required to drive blood around the systemic circuit.",
            markScheme: [
              "Left ventricle pumps blood to the whole body / systemic circuit (right only to lungs / short distance)",
              "Systemic circuit has greater resistance / requires higher pressure",
              "Thicker / more muscular wall generates greater force / higher pressure",
            ],
            commonError:
              "Saying the left ventricle pumps 'more blood' — both ventricles pump the same volume per beat; the difference is the pressure required.",
            guideRef: "Structure of the Heart",
            difficulty: "core",
            hints: [
              "Where does each ventricle send blood?",
              "Compare the resistance of the two circuits.",
              "Link thicker muscle to greater force and higher pressure.",
            ],
          },
          {
            id: "bio-transport-animals-bq1-04",
            question: "Trace the path of a red blood cell from the vena cava to the aorta, naming each chamber, valve and vessel it passes through. [5]",
            marks: 5,
            modelAnswer:
              "From the vena cava the red blood cell enters the right atrium, then passes through the tricuspid (right AV) valve into the right ventricle. It is pumped through the pulmonary semilunar valve into the pulmonary artery and on to the lungs. After picking up oxygen, it returns via the pulmonary vein to the left atrium, passes through the bicuspid (mitral/left AV) valve into the left ventricle, and is then pumped through the aortic semilunar valve into the aorta to the body.",
            markScheme: [
              "Vena cava → right atrium → right ventricle (via tricuspid/AV valve)",
              "Right ventricle → pulmonary artery (via semilunar valve) → lungs",
              "Lungs → pulmonary vein → left atrium",
              "Left atrium → left ventricle via bicuspid/mitral valve",
              "Left ventricle → aorta via (aortic) semilunar valve",
            ],
            commonError:
              "Omitting the valves, or swapping the tricuspid (right) and bicuspid (left) valves.",
            guideRef: "Structure of the Heart",
            difficulty: "core",
            hints: [
              "Start on the right (deoxygenated) side and follow blood to the lungs.",
              "Name the valve between each atrium and ventricle, and at the base of each artery.",
              "After the lungs, blood returns to the left side and leaves via the aorta.",
            ],
          },
          {
            id: "bio-transport-animals-bq1-05",
            question: "Describe the three main phases of the cardiac cycle. [3]",
            marks: 3,
            modelAnswer:
              "In diastole both the atria and ventricles relax and blood flows passively from the veins into the atria and partly into the ventricles. In atrial systole the atria contract, pushing the remaining blood through the open AV valves into the ventricles. In ventricular systole the ventricles contract, raising pressure so the AV valves close and the semilunar valves open, ejecting blood into the aorta and pulmonary artery.",
            markScheme: [
              "Diastole: atria and ventricles relax, blood flows in from veins",
              "Atrial systole: atria contract, blood pushed into ventricles",
              "Ventricular systole: ventricles contract, blood ejected into arteries",
            ],
            commonError:
              "Reversing the order of atrial and ventricular contraction — atria always contract before the ventricles.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "core",
            hints: [
              "There are three phases in a fixed order.",
              "Which chambers contract first?",
              "State what each set of chambers is doing in each phase.",
            ],
          },
          {
            id: "bio-transport-animals-bq1-06",
            question: "Explain how the atrioventricular valves and semilunar valves prevent the backflow of blood. [4]",
            marks: 4,
            modelAnswer:
              "Valves open and close passively in response to pressure differences. During ventricular systole the ventricular pressure rises above atrial pressure, forcing the AV valves shut so blood cannot flow back into the atria. When the ventricles relax (diastole), the pressure in the aorta and pulmonary artery is higher than in the ventricles, so the semilunar valves are pushed shut, preventing blood flowing back from the arteries into the ventricles. In both cases the valve closes whenever the pressure on the downstream side becomes greater.",
            markScheme: [
              "Valves operate passively due to pressure differences",
              "AV valves close when ventricular pressure exceeds atrial pressure — no backflow into atria",
              "Semilunar valves close when arterial pressure exceeds ventricular pressure — no backflow into ventricles",
              "A valve closes when pressure on the downstream side is greater",
            ],
            commonError:
              "Stating valves are opened and closed by muscles; they are passive and respond only to pressure differences.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "core",
            hints: [
              "What makes a valve open or shut — muscle or pressure?",
              "Consider each valve during the phase when backflow would occur.",
              "Higher pressure downstream pushes the valve shut.",
            ],
          },
          {
            id: "bio-transport-animals-bq1-07",
            question: "Describe the role of the sino-atrial node (SAN) in controlling the heartbeat. [3]",
            marks: 3,
            modelAnswer:
              "The SAN is the heart's pacemaker, located in the wall of the right atrium. It generates electrical impulses at regular intervals that spread across both atria, causing them to contract (atrial systole). The impulse then reaches the atrioventricular node, which delays it briefly before it travels down the conducting fibres to make the ventricles contract. The rate at which the SAN fires sets the heart rate.",
            markScheme: [
              "SAN is the pacemaker in the right atrium wall",
              "Produces electrical impulses that spread over the atria causing them to contract",
              "Rate of SAN firing determines heart rate / impulse passes to AVN then ventricles",
            ],
            commonError:
              "Confusing the SAN with the AVN; the SAN initiates the impulse, the AVN relays it to the ventricles.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "core",
            hints: [
              "Where is the SAN located?",
              "What does it produce and what does that cause?",
              "How does it relate to the overall heart rate?",
            ],
          },
          {
            id: "bio-transport-animals-bq1-08",
            question: "Explain the advantage to a mammal of keeping oxygenated and deoxygenated blood separate in the heart. [3]",
            marks: 3,
            modelAnswer:
              "The septum keeps the oxygenated blood on the left side separate from the deoxygenated blood on the right side. This means the blood pumped to the body in the aorta is fully oxygenated, so it carries the maximum amount of oxygen to respiring tissues. Efficient oxygen delivery supports a high, sustained metabolic rate, which a warm-blooded (endothermic) mammal needs to maintain its body temperature and activity levels.",
            markScheme: [
              "Septum keeps oxygenated (left) and deoxygenated (right) blood separate / no mixing",
              "Blood to body is fully oxygenated — maximum O₂ delivered to tissues",
              "Supports high / sustained metabolic rate (e.g. for endothermy / activity)",
            ],
            commonError:
              "Failing to link separation to a high metabolic rate; the exam wants the consequence of efficient O₂ delivery.",
            guideRef: "The Double Circulatory System",
            difficulty: "core",
            hints: [
              "Which structure prevents mixing?",
              "What is the O₂ content of blood leaving for the body if there is no mixing?",
              "Why does a mammal need efficient O₂ delivery?",
            ],
          },
          {
            id: "bio-transport-animals-bq1-09",
            question: "A fish has a single circulatory system; a mammal has a double circulatory system. Using ideas about blood pressure, explain why the double system allows a more active lifestyle. [5]",
            marks: 5,
            modelAnswer:
              "In a fish, blood is pumped from the heart through the gill capillaries and then directly on to the body. Passing through the gill capillary bed greatly reduces the blood pressure, so blood reaches the body organs slowly and at low pressure, limiting the rate of oxygen delivery. In a mammal, blood returns to the heart after passing through the lung capillaries. The left ventricle then re-pressurises it before it is sent to the body, so the systemic circuit operates at high pressure. Higher pressure means blood, and therefore oxygen and glucose, is delivered to respiring tissues more rapidly. This supports a higher, sustained rate of aerobic respiration and so a more active lifestyle.",
            markScheme: [
              "In the fish blood passes through gill capillaries which lowers its pressure",
              "Low-pressure blood reaches the body slowly / limited O₂ delivery rate",
              "In the mammal blood returns to the heart and is re-pressurised by the left ventricle",
              "Systemic circuit therefore operates at high pressure",
              "Faster delivery of O₂ / glucose supports higher metabolic rate / more activity",
            ],
            commonError:
              "Describing the route without linking the drop in pressure across a capillary bed to slower delivery — the marks are for the pressure argument.",
            guideRef: "The Double Circulatory System",
            difficulty: "challenge",
            hints: [
              "What happens to blood pressure when blood passes through a capillary bed?",
              "In the mammal, what re-pressurises the blood before it reaches the body?",
              "Link high pressure to a faster rate of oxygen delivery and more activity.",
            ],
          },
          {
            id: "bio-transport-animals-bq1-10",
            question: "A doctor hears an abnormal 'whooshing' sound between the normal 'lub' and 'dub' heart sounds. Suggest what this could indicate about a heart valve, and explain your reasoning. [4]",
            marks: 4,
            modelAnswer:
              "The normal sounds are made by valves snapping shut: 'lub' is the AV valves closing at the start of ventricular systole and 'dub' is the semilunar valves closing at the end. An extra sound suggests that a valve is not sealing properly — for example a leaky (incompetent) AV valve that allows some blood to flow back into the atrium during ventricular systole. The turbulent backflow of blood through the imperfectly closed valve produces the whooshing sound (a murmur). This would reduce the efficiency of pumping because some blood is forced backwards instead of out to the arteries.",
            markScheme: [
              "Normal sounds caused by valves closing (lub = AV, dub = semilunar)",
              "Extra sound suggests a valve is not closing/sealing properly (leaky/incompetent valve)",
              "Backflow of blood through the faulty valve causes turbulence / the murmur",
              "Reduced pumping efficiency because some blood flows backwards",
            ],
            commonError:
              "Saying the heart has 'stopped working'; a murmur indicates a faulty valve allowing backflow, not heart failure.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "challenge",
            hints: [
              "Recall what produces the normal heart sounds.",
              "An extra sound suggests something is wrong with a valve seal.",
              "Backflow through a leaky valve creates turbulence and reduces efficiency.",
            ],
          },
        ],
      },
      {
        id: "bio-transport-animals-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Blood vessels, exchange and tissue fluid.",
        questions: [
          {
            id: "bio-transport-animals-bq2-01",
            question: "State one structural difference between an artery and a vein, other than wall thickness. [1]",
            marks: 1,
            modelAnswer:
              "Veins contain pocket valves (to prevent backflow) whereas arteries do not. (Alternatively: veins have a wider lumen than arteries of comparable size.)",
            markScheme: [
              "Veins have valves and arteries do not / veins have a wider lumen than arteries",
            ],
            commonError:
              "Repeating wall thickness, which the question excludes.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bq2-02",
            question: "Name the three types of blood vessel and state, for each, the direction of blood flow relative to the heart. [3]",
            marks: 3,
            modelAnswer:
              "Arteries carry blood away from the heart. Veins carry blood towards the heart. Capillaries carry blood from arteries (arterioles) to veins (venules) through the tissues, where exchange occurs.",
            markScheme: [
              "Arteries carry blood away from the heart",
              "Veins carry blood towards the heart",
              "Capillaries link arteries to veins / carry blood through tissues for exchange",
            ],
            commonError:
              "Mixing up arteries and veins; remember 'Arteries Away'.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bq2-03",
            question: "Explain how the structure of an artery is adapted to withstand and maintain high blood pressure. [4]",
            marks: 4,
            modelAnswer:
              "An artery has a thick wall containing muscle and elastic fibres. The thickness and muscle resist the high pressure of blood leaving the heart so the artery does not burst. The elastic fibres stretch as the surge of blood passes during ventricular systole, then recoil during diastole. This recoil pushes blood onward and maintains the blood pressure between heartbeats, smoothing out the pulsatile flow. A relatively narrow lumen also helps maintain the high pressure.",
            markScheme: [
              "Thick wall with muscle — resists/withstands high pressure (does not burst)",
              "Elastic fibres stretch during the pressure surge (systole)",
              "Elastic recoil during diastole maintains pressure / pushes blood on",
              "Narrow lumen helps maintain high pressure / smooths flow",
            ],
            commonError:
              "Describing only thickness; full marks need the role of elastic recoil in maintaining pressure between beats.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "core",
            hints: [
              "Name the materials in an artery wall.",
              "What do elastic fibres do during and between heartbeats?",
              "Link recoil to maintaining pressure between beats.",
            ],
          },
          {
            id: "bio-transport-animals-bq2-04",
            question: "Explain three ways in which a capillary is adapted for efficient exchange of substances with the tissues. [3]",
            marks: 3,
            modelAnswer:
              "The capillary wall is only one cell (endothelial cell) thick, giving a very short diffusion distance for gases and dissolved substances. Capillaries form a dense network with a very large total surface area, increasing the rate of exchange. The lumen is very narrow, so red blood cells pass in single file and blood flows slowly, giving more time for exchange and bringing the cells close to the wall.",
            markScheme: [
              "Wall one cell thick — short diffusion distance",
              "Large total surface area (dense network)",
              "Narrow lumen — slows blood / single file / more time for exchange",
            ],
            commonError:
              "Listing features without saying how each helps exchange; each point needs the structure and its benefit.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "core",
            hints: [
              "Think about diffusion distance, surface area and the speed of blood.",
              "For each feature, state the benefit for exchange.",
              "Use Fick's law ideas: distance, area, gradient.",
            ],
          },
          {
            id: "bio-transport-animals-bq2-05",
            question: "Explain why veins need valves but arteries do not. [3]",
            marks: 3,
            modelAnswer:
              "Blood in veins is at low pressure because it has already passed through the capillaries, so there is little force keeping it moving forwards and it could flow backwards. Pocket valves close if blood starts to flow backwards, ensuring it can only move towards the heart. In arteries the blood is at high pressure from ventricular contraction, which keeps it flowing forwards, so valves are not needed.",
            markScheme: [
              "Blood in veins is at low pressure (after capillaries) and could flow backwards",
              "Valves prevent backflow / ensure one-way flow towards the heart",
              "Arteries: high pressure maintains forward flow so valves not needed",
            ],
            commonError:
              "Not explaining the low-pressure reason; simply stating 'veins have valves' gains little.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "core",
            hints: [
              "What is the pressure of blood in a vein compared with an artery?",
              "Why might low-pressure blood flow backwards?",
              "What keeps arterial blood moving forward instead?",
            ],
          },
          {
            id: "bio-transport-animals-bq2-06",
            question: "Describe how blood in the veins of the legs is helped to return to the heart against gravity. [3]",
            marks: 3,
            modelAnswer:
              "When the skeletal muscles around the deep veins contract during movement, they squeeze the veins and push the blood along. The pocket valves in the veins ensure that this squeezed blood can only move towards the heart and cannot flow back down. Breathing movements also create pressure changes that help draw blood back towards the heart.",
            markScheme: [
              "Contraction of surrounding skeletal muscles squeezes the veins",
              "Valves prevent backflow / ensure flow towards the heart",
              "Pressure changes from breathing help return (any valid extra mechanism)",
            ],
            commonError:
              "Forgetting the valves; the muscle pump only works one-way because valves stop backflow.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "core",
            hints: [
              "What presses on the veins during movement?",
              "What stops the squeezed blood going backwards?",
              "Why is this important in the legs in particular?",
            ],
          },
          {
            id: "bio-transport-animals-bq2-07",
            question: "Compare the speed and pressure of blood in arteries, capillaries and veins, and explain the pattern. [4]",
            marks: 4,
            modelAnswer:
              "Blood in arteries is at the highest pressure and flows fast, because it has just been pumped from the heart through a relatively narrow vessel. As blood enters the huge total cross-sectional area of the capillary network, both its speed and pressure drop sharply; the slow flow allows time for exchange. In the veins the pressure is lowest because pressure has been lost crossing the capillaries, but the speed rises a little again as the vessels merge into fewer, wider veins with a smaller total cross-sectional area returning blood to the heart.",
            markScheme: [
              "Arteries: highest pressure and fast flow (just pumped from heart)",
              "Capillaries: pressure and speed lowest/slow due to large total cross-sectional area",
              "Slow flow in capillaries allows time for exchange",
              "Veins: lowest pressure but speed rises again as vessels merge / wider",
            ],
            commonError:
              "Assuming speed simply keeps falling; speed actually rises again in the veins even though pressure stays low.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "challenge",
            hints: [
              "Where is pressure highest, and why?",
              "Why does flow slow right down in the capillaries?",
              "Consider what happens to total cross-sectional area along the system.",
            ],
          },
          {
            id: "bio-transport-animals-bq2-08",
            question: "Tissue fluid forms when liquid is forced out of capillaries. Explain how substances are exchanged between blood, tissue fluid and cells, and how most of the fluid returns to the blood. [5]",
            marks: 5,
            modelAnswer:
              "At the arterial end of a capillary the high blood pressure forces water and small dissolved molecules (such as glucose, amino acids and oxygen) out through the thin, permeable wall, forming tissue fluid that bathes the cells; large molecules and blood cells stay in the capillary. Cells take up oxygen and nutrients from the tissue fluid by diffusion and release carbon dioxide and other waste into it. Towards the venous end of the capillary the blood pressure is lower, so most of the tissue fluid, now carrying waste, returns to the blood by osmosis and diffusion. Any excess fluid that does not return drains into the lymphatic vessels and is eventually returned to the blood.",
            markScheme: [
              "High pressure at arterial end forces water + small solutes out, forming tissue fluid (cells/proteins remain in capillary)",
              "Cells take up O₂/glucose from tissue fluid by diffusion",
              "Cells release CO₂/waste into tissue fluid",
              "Lower pressure at venous end — most fluid returns to blood (osmosis/diffusion)",
              "Excess fluid drains into the lymphatic system and returns to blood",
            ],
            commonError:
              "Saying all the fluid returns to the capillary; some drains via the lymphatic system.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "challenge",
            hints: [
              "What forces fluid out at the arterial end?",
              "How do cells obtain O₂ and lose CO₂?",
              "Where does the excess fluid that does not return to the capillary go?",
            ],
          },
          {
            id: "bio-transport-animals-bq2-09",
            question: "A student measures a pulse in the wrist but cannot feel one over a surface vein. Explain this observation. [3]",
            marks: 3,
            modelAnswer:
              "A pulse is the rhythmic stretching and recoil of an artery wall caused by surges of high-pressure blood pumped from the heart during ventricular systole. The wrist artery carries this high-pressure pulsatile blood, so a pulse is felt. Blood in veins is at low, steady pressure because it has already passed through the capillaries, which removed the pressure surges, so the vein wall does not stretch and recoil and no pulse is felt.",
            markScheme: [
              "Pulse = stretch/recoil of artery wall due to high-pressure surges from the heart",
              "Wrist vessel is an artery carrying pulsatile high-pressure blood",
              "Vein blood is low/steady pressure (surges lost in capillaries) so no pulse",
            ],
            commonError:
              "Thinking veins have no flow; they carry blood, but at steady low pressure without a pulse.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "core",
            hints: [
              "What causes a pulse?",
              "Which vessel carries pulsatile high-pressure blood?",
              "Why has the pulse been lost by the time blood reaches the veins?",
            ],
          },
          {
            id: "bio-transport-animals-bq2-10",
            question: "The lumen of a healthy artery is 4.0 mm in diameter. A plaque reduces the radius by half. Calculate the percentage of the original cross-sectional area that remains open, and comment on the effect on blood flow. [4]",
            marks: 4,
            modelAnswer:
              "Original radius = 4.0 ÷ 2 = 2.0 mm, so original area = π × 2.0² = 12.57 mm². The new radius is half: 1.0 mm, so new area = π × 1.0² = 3.14 mm². Fraction remaining = 3.14 ÷ 12.57 = 0.25, i.e. 25% of the original cross-sectional area remains open. Because the area falls to one quarter, the resistance to flow rises greatly and blood flow through the artery is sharply reduced, so much less oxygen reaches the tissue beyond the plaque.",
            markScheme: [
              "Original area = π r² with r = 2.0 mm → 12.57 mm² (allow 12.6)",
              "New radius = 1.0 mm → new area = 3.14 mm²",
              "Percentage remaining = 25%",
              "Comment: greatly reduced blood flow / less O₂ delivered beyond the plaque",
            ],
            commonError:
              "Halving the area instead of the radius; halving the radius reduces area to a quarter (area ∝ radius²).",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "challenge",
            hints: [
              "Cross-sectional area of a circle = π r².",
              "Use the radius, which is half the diameter.",
              "Halving the radius changes the area by a factor of (½)² = ¼.",
            ],
            solutions: [
              {
                label: "Method: area of a circle (A = π r²)",
                steps: [
                  "Diameter 4.0 mm → original radius r₁ = 4.0 ÷ 2 = 2.0 mm.",
                  "Original area A₁ = π r₁² = π × (2.0)² = π × 4.0 = 12.57 mm² (3 s.f.).",
                  "Radius halved: r₂ = 1.0 mm.",
                  "New area A₂ = π × (1.0)² = π × 1.0 = 3.14 mm².",
                  "Percentage open = (A₂ ÷ A₁) × 100 = (3.14 ÷ 12.57) × 100 = 25.0%.",
                  "Since area ∝ r², halving r quarters the area: 75% of the cross-section is blocked, so flow falls dramatically.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "bio-transport-animals-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Blood components, oxygen transport and defence.",
        questions: [
          {
            id: "bio-transport-animals-bq3-01",
            question: "Name the four main components of blood. [2]",
            marks: 2,
            modelAnswer:
              "Plasma, red blood cells, white blood cells and platelets.",
            markScheme: [
              "Plasma and red blood cells",
              "White blood cells and platelets",
            ],
            commonError:
              "Listing 'haemoglobin' as a component; haemoglobin is a protein inside red blood cells, not a separate component.",
            guideRef: "Blood Components and Functions",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bq3-02",
            question: "State three substances transported by blood plasma. [3]",
            marks: 3,
            modelAnswer:
              "Plasma transports dissolved nutrients such as glucose and amino acids, hormones, carbon dioxide (as hydrogencarbonate ions), urea, plasma proteins and heat. Any three of these are acceptable.",
            markScheme: [
              "Glucose / amino acids / nutrients",
              "Carbon dioxide (as hydrogencarbonate ions) / urea",
              "Hormones / heat / plasma proteins / antibodies",
            ],
            commonError:
              "Naming oxygen as a major plasma transport — most O₂ is carried by red blood cells, not plasma.",
            guideRef: "Blood Components and Functions",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bq3-03",
            question: "Explain how two structural features of a red blood cell adapt it for transporting oxygen. [4]",
            marks: 4,
            modelAnswer:
              "A red blood cell has no nucleus, which leaves more room inside the cell for haemoglobin, increasing the amount of oxygen it can carry. It also has a biconcave disc shape, which increases its surface area to volume ratio so that oxygen can diffuse in and out more rapidly, and the thin centre keeps diffusion distances short. Together these features maximise the rate and capacity of oxygen transport.",
            markScheme: [
              "No nucleus — more space for haemoglobin — more O₂ carried",
              "Biconcave shape — large surface area to volume ratio — faster O₂ diffusion",
              "(Thin centre / short diffusion distance accepted for the shape benefit)",
            ],
            commonError:
              "Stating features without their benefit; each feature must be linked to oxygen transport.",
            guideRef: "Blood Components and Functions",
            difficulty: "core",
            hints: [
              "Think about what fills the cell and what is missing.",
              "Why is a biconcave shape useful for diffusion?",
              "Link each feature to oxygen capacity or rate of diffusion.",
            ],
          },
          {
            id: "bio-transport-animals-bq3-04",
            question: "Describe how haemoglobin transports oxygen from the lungs to respiring tissues. [4]",
            marks: 4,
            modelAnswer:
              "In the lungs the oxygen concentration (partial pressure) is high, so haemoglobin in the red blood cells combines reversibly with oxygen to form oxyhaemoglobin. The blood carries the oxyhaemoglobin to the tissues. In respiring tissues the oxygen concentration is low (and carbon dioxide is high), so the oxyhaemoglobin breaks down, releasing oxygen, which diffuses out of the red blood cell and into the cells for aerobic respiration. The binding is reversible, allowing haemoglobin to pick up and release oxygen repeatedly.",
            markScheme: [
              "In lungs (high O₂) haemoglobin + O₂ → oxyhaemoglobin",
              "Oxyhaemoglobin transported in red blood cells to tissues",
              "In tissues (low O₂) oxyhaemoglobin releases O₂",
              "Released O₂ diffuses into cells for respiration / binding is reversible",
            ],
            commonError:
              "Saying haemoglobin 'dissolves' oxygen; it chemically and reversibly combines with O₂ to form oxyhaemoglobin.",
            guideRef: "Blood Components and Functions",
            difficulty: "core",
            hints: [
              "Where does haemoglobin pick up O₂ and where does it release it?",
              "Name the compound formed when O₂ binds.",
              "Why is reversibility important?",
            ],
          },
          {
            id: "bio-transport-animals-bq3-05",
            question: "Distinguish between the roles of phagocytes and lymphocytes in defence against disease. [4]",
            marks: 4,
            modelAnswer:
              "Phagocytes carry out non-specific defence: they engulf and digest any pathogens by phagocytosis, surrounding the pathogen with the cell membrane and breaking it down using enzymes. Lymphocytes carry out specific defence: they recognise particular antigens on a pathogen and produce antibodies that bind specifically to those antigens, neutralising the pathogen or marking it for destruction. Some lymphocytes become memory cells, giving a faster response to the same pathogen in future.",
            markScheme: [
              "Phagocytes engulf/digest pathogens by phagocytosis — non-specific",
              "Lymphocytes produce antibodies — specific to particular antigens",
              "Antibodies bind to antigens, neutralising/marking pathogens",
              "Lymphocytes can form memory cells for faster future response",
            ],
            commonError:
              "Saying lymphocytes engulf pathogens; engulfing is the phagocyte's role, lymphocytes make antibodies.",
            guideRef: "Blood Components and Functions",
            difficulty: "core",
            hints: [
              "One cell type engulfs; the other makes antibodies.",
              "Which is non-specific and which is specific?",
              "Mention memory cells for the lymphocyte.",
            ],
          },
          {
            id: "bio-transport-animals-bq3-06",
            question: "Describe the role of platelets in the formation of a blood clot. [4]",
            marks: 4,
            modelAnswer:
              "When a blood vessel is damaged, platelets clump together at the wound and become activated, releasing chemicals (clotting factors). These trigger a cascade of reactions that convert the soluble plasma protein fibrinogen into insoluble fibrin threads. The fibrin forms a mesh across the wound that traps red blood cells, forming a clot. The clot dries to form a scab, which prevents further blood loss and stops pathogens from entering.",
            markScheme: [
              "Platelets clump/aggregate at the wound and release clotting factors",
              "Fibrinogen (soluble) converted to fibrin (insoluble) threads",
              "Fibrin mesh traps red blood cells forming a clot",
              "Clot dries to a scab — prevents blood loss / pathogen entry",
            ],
            commonError:
              "Mixing up fibrinogen and fibrin; fibrinogen is the soluble precursor, fibrin is the insoluble thread.",
            guideRef: "Blood Components and Functions",
            difficulty: "core",
            hints: [
              "What do platelets do first at a wound?",
              "Which protein is converted, and into what?",
              "How does the mesh form a clot and then a scab?",
            ],
          },
          {
            id: "bio-transport-animals-bq3-07",
            question: "Explain why a clot forming inside an unbroken blood vessel can be dangerous. [3]",
            marks: 3,
            modelAnswer:
              "A clot (thrombus) inside an intact vessel can block the lumen, stopping blood flow beyond it. If this happens in a coronary artery, the heart muscle downstream is starved of oxygen and may die, causing a heart attack. A clot may also break loose, travel in the blood and lodge in a narrower vessel elsewhere (for example in the brain, causing a stroke), blocking the blood supply to that organ.",
            markScheme: [
              "Clot blocks the vessel lumen, stopping blood flow beyond it",
              "Tissue downstream is deprived of oxygen and may die (e.g. heart attack)",
              "Clot may dislodge and block a vessel elsewhere (e.g. stroke)",
            ],
            commonError:
              "Only saying it 'stops blood' without naming a consequence such as a heart attack or stroke.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "core",
            hints: [
              "What does a clot do to flow inside an intact vessel?",
              "What happens to tissue deprived of oxygen?",
              "What if the clot moves elsewhere?",
            ],
          },
          {
            id: "bio-transport-animals-bq3-08",
            question: "Carbon monoxide in cigarette smoke combines with haemoglobin. Explain how this reduces the amount of oxygen reaching the body's tissues. [3]",
            marks: 3,
            modelAnswer:
              "Carbon monoxide binds to haemoglobin much more strongly (and almost irreversibly) than oxygen, forming carboxyhaemoglobin. This occupies the binding sites that would otherwise carry oxygen, so each red blood cell carries less oxygen. As a result the oxygen-carrying capacity of the blood is reduced and less oxygen is delivered to respiring tissues.",
            markScheme: [
              "CO binds to haemoglobin more strongly than O₂ (forms carboxyhaemoglobin)",
              "Occupies sites that would carry O₂ — reduces O₂-carrying capacity",
              "Less oxygen delivered to (respiring) tissues",
            ],
            commonError:
              "Saying CO 'destroys' red blood cells; it binds to haemoglobin, reducing how much O₂ each can carry.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "core",
            hints: [
              "What does CO bind to, and how strongly compared with O₂?",
              "What happens to the binding sites normally used by O₂?",
              "Consequence for oxygen delivery to tissues.",
            ],
          },
          {
            id: "bio-transport-animals-bq3-09",
            question: "Suggest why a person with a low red blood cell count (anaemia) may feel tired and breathless during mild exercise. [4]",
            marks: 4,
            modelAnswer:
              "With fewer red blood cells there is less haemoglobin, so the blood's oxygen-carrying capacity is reduced and less oxygen is delivered to the tissues. During exercise the muscles need more oxygen for aerobic respiration, but the blood cannot supply enough. The muscles must respire anaerobically, producing less energy and lactic acid, causing tiredness. The body responds by breathing faster and the heart beating faster to try to supply more oxygen, which is felt as breathlessness.",
            markScheme: [
              "Fewer red cells → less haemoglobin → reduced O₂-carrying capacity / less O₂ to tissues",
              "Exercising muscles need more O₂ for aerobic respiration but cannot get enough",
              "More anaerobic respiration → less energy / lactic acid → tiredness",
              "Faster breathing and heart rate to compensate → breathlessness",
            ],
            commonError:
              "Stopping at 'less oxygen'; the answer should link reduced O₂ to anaerobic respiration and the compensatory breathing/heart rate.",
            guideRef: "Blood Components and Functions",
            difficulty: "challenge",
            hints: [
              "How does fewer red cells affect oxygen transport?",
              "What type of respiration must muscles use if O₂ is short?",
              "Why would breathing and heart rate increase?",
            ],
          },
          {
            id: "bio-transport-animals-bq3-10",
            question: "A blood sample has a haemoglobin concentration of 150 g per dm³, and 1 g of haemoglobin can carry 1.34 cm³ of oxygen when fully saturated. Calculate the maximum volume of oxygen carried by 1 dm³ of fully saturated blood, and explain why the actual volume delivered to tissues is less. [4]",
            marks: 4,
            modelAnswer:
              "Maximum oxygen carried = haemoglobin concentration × oxygen per gram = 150 g/dm³ × 1.34 cm³/g = 201 cm³ of oxygen per dm³ of blood when fully saturated. The actual volume delivered to the tissues is less than this because the blood does not unload all of its oxygen: haemoglobin only releases the oxygen needed where the oxygen concentration is low, so some oxygen remains bound (the venous blood is still partly saturated) and returns to the lungs.",
            markScheme: [
              "150 × 1.34 = 201 cm³ O₂ per dm³ (allow 200–201)",
              "States this is the maximum when fully saturated",
              "Not all O₂ is unloaded at the tissues / venous blood still partly saturated",
              "Haemoglobin only releases O₂ where O₂ concentration is low",
            ],
            commonError:
              "Assuming all the carried oxygen is delivered; haemoglobin retains some oxygen, so delivery is less than the maximum carried.",
            guideRef: "Blood Components and Functions",
            difficulty: "challenge",
            hints: [
              "Multiply the haemoglobin concentration by the O₂ carried per gram.",
              "Keep the units consistent (per dm³).",
              "Think about whether blood gives up all its oxygen at the tissues.",
            ],
            solutions: [
              {
                label: "Method: oxygen capacity per dm³",
                steps: [
                  "Oxygen capacity = haemoglobin concentration × O₂ carried per gram.",
                  "= 150 g/dm³ × 1.34 cm³ O₂ per g = 201 cm³ O₂ per dm³ of blood (when 100% saturated).",
                  "This is the maximum carried, not the amount delivered.",
                  "Haemoglobin does not fully unload: in the tissues O₂ partial pressure is low but not zero, so venous blood is still partly saturated (typically ~75%).",
                  "Volume actually given up = (arterial saturation − venous saturation) × 201 cm³, which is well below 201 cm³.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "bio-transport-animals-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Coronary heart disease, risk factors and exercise physiology.",
        questions: [
          {
            id: "bio-transport-animals-bq4-01",
            question: "State what is meant by coronary heart disease. [2]",
            marks: 2,
            modelAnswer:
              "Coronary heart disease is the narrowing of the coronary arteries (which supply the heart muscle) by the build-up of fatty plaques. This reduces the blood flow, and therefore the oxygen supply, to the heart muscle.",
            markScheme: [
              "Narrowing of the coronary arteries by fatty plaques",
              "Reduces blood/oxygen supply to the heart muscle",
            ],
            commonError:
              "Confusing coronary arteries with the pulmonary artery; CHD affects the vessels supplying the heart muscle itself.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bq4-02",
            question: "List three risk factors for coronary heart disease. [3]",
            marks: 3,
            modelAnswer:
              "Three risk factors are: a diet high in saturated fat (and cholesterol); smoking; and lack of regular exercise. Other acceptable factors include stress, obesity, high blood pressure and a genetic predisposition.",
            markScheme: [
              "Diet high in saturated fat / cholesterol",
              "Smoking",
              "Lack of exercise / obesity / stress / genetic factors (any one)",
            ],
            commonError:
              "Listing factors that lower risk (e.g. exercise) as risk factors.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bq4-03",
            question: "Explain how smoking increases the risk of coronary heart disease. [4]",
            marks: 4,
            modelAnswer:
              "Cigarette smoke contains nicotine, which raises heart rate and blood pressure, putting more strain on the arteries and heart. Carbon monoxide binds to haemoglobin, reducing the oxygen-carrying capacity of the blood so the heart muscle receives less oxygen. Chemicals in smoke also damage the lining of the artery walls, encouraging the build-up of fatty plaques (atherosclerosis), which narrow the coronary arteries. Together these effects reduce oxygen supply to the heart muscle and increase the risk of a heart attack.",
            markScheme: [
              "Nicotine raises blood pressure / heart rate — more strain",
              "Carbon monoxide binds haemoglobin — less O₂ carried to heart muscle",
              "Chemicals damage artery walls — encourage plaque/atherosclerosis",
              "Narrowed coronary arteries reduce O₂ supply / risk of heart attack",
            ],
            commonError:
              "Mentioning only one component of smoke; full marks need the separate effects of nicotine, carbon monoxide and the damaging chemicals.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "core",
            hints: [
              "Name different harmful components of smoke.",
              "Link nicotine, carbon monoxide and other chemicals to separate effects.",
              "Connect these to reduced oxygen supply to the heart muscle.",
            ],
          },
          {
            id: "bio-transport-animals-bq4-04",
            question: "Explain the sequence of events that causes heart rate to increase during exercise. [4]",
            marks: 4,
            modelAnswer:
              "During exercise the muscles respire faster, using more oxygen and producing more carbon dioxide. The increased carbon dioxide concentration in the blood is detected by chemoreceptors. The nervous system then sends impulses to the sino-atrial node (SAN), stimulating it to fire more frequently. As a result the heart rate increases, pumping blood faster to deliver more oxygen to the muscles and remove carbon dioxide more quickly.",
            markScheme: [
              "Muscles respire faster, producing more CO₂ (and using more O₂)",
              "Rising CO₂ detected by chemoreceptors",
              "Nervous system stimulates the SAN to fire faster",
              "Heart rate increases to deliver more O₂ / remove CO₂",
            ],
            commonError:
              "Saying oxygen rise causes the increase; it is the rise in carbon dioxide that is detected.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "core",
            hints: [
              "Which gas increases in the blood during exercise?",
              "What detects it, and what does it signal?",
              "End with the effect on heart rate and its purpose.",
            ],
          },
          {
            id: "bio-transport-animals-bq4-05",
            question: "Suggest three changes a person could make to reduce their risk of coronary heart disease, and explain how each helps. [3]",
            marks: 3,
            modelAnswer:
              "They could reduce saturated fat in their diet, which lowers blood cholesterol and slows the formation of fatty plaques. They could stop smoking, removing the carbon monoxide that lowers oxygen transport and the chemicals that damage artery walls. They could take regular aerobic exercise, which strengthens the heart, lowers resting blood pressure and helps maintain a healthy body mass.",
            markScheme: [
              "Reduce saturated fat — lowers cholesterol / less plaque formation",
              "Stop smoking — removes CO / chemicals that damage arteries",
              "Regular exercise — strengthens heart / lowers blood pressure / controls weight",
            ],
            commonError:
              "Listing changes without explaining the benefit of each; the marks are for the explanation.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "core",
            hints: [
              "Think diet, smoking and exercise.",
              "For each, state the mechanism by which risk falls.",
              "Link back to cholesterol, oxygen transport or blood pressure.",
            ],
          },
          {
            id: "bio-transport-animals-bq4-06",
            question: "Explain why a person with coronary heart disease may experience chest pain (angina) during exercise but not when resting. [4]",
            marks: 4,
            modelAnswer:
              "The coronary arteries are narrowed by plaques, so the rate at which blood (and therefore oxygen) can be delivered to the heart muscle is limited. At rest the heart muscle's oxygen demand is low, so the reduced flow is still enough and there is no pain. During exercise the heart beats faster and harder, so the heart muscle needs much more oxygen. The narrowed arteries cannot increase the supply enough to meet this raised demand, so the heart muscle is starved of oxygen (ischaemia), which causes the pain known as angina.",
            markScheme: [
              "Coronary arteries narrowed by plaques — limited blood/O₂ supply to heart muscle",
              "At rest O₂ demand is low so reduced flow is sufficient — no pain",
              "During exercise heart works harder — O₂ demand rises",
              "Supply cannot meet demand — ischaemia of heart muscle — angina/pain",
            ],
            commonError:
              "Not contrasting rest with exercise; the key is that demand rises during exercise while supply is fixed.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "core",
            hints: [
              "What limits oxygen supply to the heart muscle?",
              "Compare the heart's oxygen demand at rest and during exercise.",
              "What happens when demand exceeds the possible supply?",
            ],
          },
          {
            id: "bio-transport-animals-bq4-07",
            question: "Define cardiac output and state the equation linking it to heart rate and stroke volume. [2]",
            marks: 2,
            modelAnswer:
              "Cardiac output is the volume of blood pumped by the (left) ventricle in one minute. It is given by: cardiac output = heart rate × stroke volume.",
            markScheme: [
              "Cardiac output = volume of blood pumped by the ventricle per minute",
              "Cardiac output = heart rate × stroke volume",
            ],
            commonError:
              "Defining it as volume per beat; that is stroke volume, not cardiac output.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bq4-08",
            question: "A person has a resting heart rate of 65 bpm and a stroke volume of 72 cm³. During exercise their heart rate rises to 160 bpm and stroke volume to 110 cm³. Calculate their cardiac output at rest and during exercise, and the increase in cardiac output. [4]",
            marks: 4,
            modelAnswer:
              "Cardiac output = heart rate × stroke volume. At rest: 65 × 72 = 4680 cm³ per minute. During exercise: 160 × 110 = 17 600 cm³ per minute. Increase in cardiac output = 17 600 − 4680 = 12 920 cm³ per minute (about 12.9 dm³ per minute).",
            markScheme: [
              "Resting cardiac output = 65 × 72 = 4680 cm³/min",
              "Exercise cardiac output = 160 × 110 = 17 600 cm³/min",
              "Increase = 17 600 − 4680",
              "Increase = 12 920 cm³/min (≈ 12.9 dm³/min)",
            ],
            commonError:
              "Forgetting to multiply both values, or subtracting heart rates instead of cardiac outputs.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "core",
            hints: [
              "Use cardiac output = heart rate × stroke volume for each condition.",
              "Work out rest and exercise separately.",
              "Subtract the resting value from the exercise value for the increase.",
            ],
            solutions: [
              {
                label: "Method: cardiac output = heart rate × stroke volume",
                steps: [
                  "Resting: CO = HR × SV = 65 × 72 = 4680 cm³ min⁻¹.",
                  "Exercise: CO = 160 × 110 = 17 600 cm³ min⁻¹.",
                  "Increase = 17 600 − 4680 = 12 920 cm³ min⁻¹.",
                  "= 12.92 dm³ min⁻¹ ≈ 12.9 dm³ min⁻¹.",
                ],
              },
            ],
          },
          {
            id: "bio-transport-animals-bq4-09",
            question: "Two people of the same age complete the same exercise. Person A (trained) has a resting heart rate of 52 bpm and recovers in 3 minutes; Person B (untrained) has a resting heart rate of 78 bpm and recovers in 8 minutes. Explain these differences. [5]",
            marks: 5,
            modelAnswer:
              "Person A has trained regularly, which has strengthened the heart muscle and increased the size of the left ventricle, so the stroke volume (volume pumped per beat) is larger. Because cardiac output = heart rate × stroke volume, a larger stroke volume means a lower heart rate is enough to maintain the resting cardiac output, giving Person A a lower resting heart rate of 52 bpm. After exercise, heart rate falls as blood carbon dioxide levels drop and oxygen demand returns to resting, reducing stimulation of the SAN. Person A's cardiovascular system is more efficient, restoring normal blood gas levels and repaying the oxygen debt faster, so the SAN reduces its firing rate sooner and recovery takes only 3 minutes compared with 8 minutes for the untrained Person B.",
            markScheme: [
              "Training increases stroke volume (stronger/larger heart / left ventricle)",
              "Cardiac output = HR × SV, so higher SV allows lower resting heart rate",
              "Recovery = time for CO₂ to fall / O₂ demand to return to resting / SAN firing to slow",
              "Trained person restores blood gas levels / repays oxygen debt faster",
              "Therefore lower resting rate and faster recovery in the trained person",
            ],
            commonError:
              "Saying the trained heart 'beats stronger' without explaining stroke volume and cardiac output.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "challenge",
            hints: [
              "Use cardiac output = heart rate × stroke volume.",
              "What does training do to stroke volume?",
              "What does recovery time depend on, and why is a fitter system faster?",
            ],
            strategy: "Anchor the answer on cardiac output = heart rate × stroke volume: if stroke volume rises and resting output is unchanged, the rate must fall. Then treat recovery as the time to restore normal blood CO₂/O₂.",
          },
          {
            id: "bio-transport-animals-bq4-10",
            question: "A scientist records a person's heart rate before, during and after exercise. The heart rate is 70 bpm at rest, rises to a steady 150 bpm during exercise, then falls back to 70 bpm over several minutes. Sketch in words the shape of the heart-rate-against-time graph and explain each part. [5]",
            marks: 5,
            modelAnswer:
              "Before exercise the line is flat and low at the resting heart rate of about 70 bpm, because oxygen demand and carbon dioxide levels are steady. When exercise begins the line rises steeply as muscles respire faster, raising carbon dioxide, which is detected by chemoreceptors that stimulate the SAN to increase heart rate. During steady exercise the line levels off (plateaus) at about 150 bpm, where the raised heart rate matches the increased oxygen demand. When exercise stops the line falls gradually back towards 70 bpm over several minutes (the recovery period) as carbon dioxide levels fall and the oxygen debt is repaid, so the SAN is stimulated less and heart rate returns to resting. The gradual rather than instant fall reflects the time needed to restore normal blood gas levels.",
            markScheme: [
              "Flat/low line at resting rate (~70 bpm) before exercise",
              "Steep rise when exercise starts — CO₂ rises, detected, SAN stimulated",
              "Plateau (~150 bpm) during steady exercise — matches raised O₂ demand",
              "Gradual fall after exercise (recovery) as CO₂ falls / O₂ debt repaid",
              "Fall is gradual because restoring normal blood gas levels takes time",
            ],
            commonError:
              "Drawing/describing an instant drop back to resting; recovery is gradual as the oxygen debt is repaid.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "challenge",
            hints: [
              "Describe the line in four stages: rest, rise, plateau, recovery.",
              "Explain the rise using CO₂, chemoreceptors and the SAN.",
              "Explain why the fall after exercise is gradual, not instant.",
            ],
          },
        ],
      },
    ],
  },
};
