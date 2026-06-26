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
  // QUESTION BANK (4 × MCQ papers + 4 × QA papers, 10 questions each)
  // ─────────────────────────────────────────────────────────────────────────
  questionBank: {
    mcqPapers: [
      // ── MCQ PAPER 1 ──────────────────────────────────────────────────────
      {
        id: "bio-transport-animals-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Ten multiple-choice questions covering the double circulatory system, heart chambers, major vessels, and valve function.",
        questions: [
          {
            id: "bio-transport-animals-bm1-01",
            question: "In the double circulatory system, which chamber of the heart receives oxygenated blood directly from the lungs?",
            options: ["Right atrium", "Right ventricle", "Left atrium", "Left ventricle"],
            answerIndex: 2,
            explanation: "The pulmonary veins carry oxygenated blood from the lungs directly into the left atrium. The right side of the heart deals with deoxygenated blood.",
            guideRef: "The Double Circulatory System",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bank-mcq1-q02",
            question: "What is the role of the septum in the heart?",
            options: [
              "It acts as a valve between the atrium and ventricle.",
              "It separates the left and right sides, preventing mixing of oxygenated and deoxygenated blood.",
              "It is the pacemaker region that initiates the heartbeat.",
              "It connects the aorta to the left ventricle.",
            ],
            answerIndex: 1,
            explanation: "The septum is the muscular wall dividing the right and left halves of the heart. It prevents oxygenated blood (left) mixing with deoxygenated blood (right), maximising oxygen delivery to tissues.",
            guideRef: "Structure of the Heart",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bank-mcq1-q03",
            question: "During ventricular systole, what prevents blood flowing back into the atria?",
            options: [
              "The semilunar valves closing.",
              "The atrioventricular valves closing due to raised ventricular pressure.",
              "The SAN stopping electrical signals.",
              "The atria contracting simultaneously with the ventricles.",
            ],
            answerIndex: 1,
            explanation: "When the ventricles contract, ventricular pressure rises above atrial pressure, pushing the AV (atrioventricular) valves shut. This prevents backflow into the atria. The semilunar valves open (not close) during ventricular systole.",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "core",
            hints: [
              "Which valves sit between atria and ventricles?",
              "Valves open/close based on pressure differences — which side has higher pressure during ventricular contraction?",
              "AV valves close = blood pushed back is prevented from entering atria.",
            ],
          },
          {
            id: "bio-transport-animals-bank-mcq1-q04",
            question: "The aorta is described as an elastic artery. Which property of its wall is most important for maintaining blood pressure between heartbeats?",
            options: [
              "Its thick smooth muscle layer that contracts rhythmically.",
              "Its valves that prevent backflow during diastole.",
              "Its elastic fibres that recoil after stretching during systole, maintaining pressure during diastole.",
              "Its single-cell endothelium that allows exchange with surrounding tissue.",
            ],
            answerIndex: 2,
            explanation: "During systole, the aorta wall stretches. During diastole, elastic fibres recoil, maintaining pressure and driving blood forward. The aorta has no valves (semilunar valve is at its base but not within its wall); it does not contract rhythmically.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "core",
            hints: [
              "What happens to the aorta wall when the ventricle contracts and pushes a surge of blood in?",
              "What happens to an elastic band when you stretch and release it?",
              "This recoil explains why blood pressure does not drop to zero between beats.",
            ],
          },
          {
            id: "bio-transport-animals-bank-mcq1-q05",
            question: "Which row correctly matches a heart sound with its cause?",
            options: [
              "'Lub' — semilunar valves closing at the start of diastole",
              "'Dub' — AV valves closing at the start of ventricular systole",
              "'Lub' — AV valves closing at the start of ventricular systole",
              "'Dub' — AV valves opening at the start of atrial systole",
            ],
            answerIndex: 2,
            explanation: "'Lub' is the lower-pitched sound of the AV valves snapping shut at the start of ventricular systole. 'Dub' is the sound of the semilunar valves closing at the end of ventricular systole (start of diastole).",
            guideRef: "The Cardiac Cycle and Valve Function",
            difficulty: "core",
            hints: [
              "There are two heartbeat sounds per cycle.",
              "The first sound (lub) occurs when ventricular systole begins — which valves close then?",
              "The second sound (dub) occurs when ventricular systole ends — which valves close then?",
            ],
          },
          {
            id: "bio-transport-animals-bank-mcq1-q06",
            question: "A genetic condition causes the walls of the coronary arteries to be abnormally narrow from birth. Predict the most likely consequence if left untreated, and explain why.",
            options: [
              "The lungs will receive insufficient blood because the pulmonary artery is blocked.",
              "The heart muscle will receive insufficient O₂, increasing the risk of myocardial infarction (heart attack), especially during exercise.",
              "Blood pressure in the aorta will fall because the aorta is downstream of coronary arteries.",
              "White blood cell production will fall because the bone marrow is underperfused.",
            ],
            answerIndex: 1,
            explanation: "Coronary arteries supply the myocardium (heart muscle) with O₂ and glucose. Narrow coronary arteries restrict blood flow to the heart muscle. During increased demand (exercise), the heart cannot receive enough O₂ — cells begin anaerobic respiration or die (myocardial infarction). This is coronary heart disease from a structural rather than dietary cause.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "challenge",
            hints: [
              "Coronary arteries supply which organ specifically?",
              "If the heart muscle is deprived of O₂, what happens to its cells?",
              "This scenario is similar to CHD from plaque build-up but has a genetic cause.",
              "Ischaemia = inadequate blood supply to an organ.",
            ],
          },
        ],
      },
      {
        id: "bio-transport-animals-bank-mcq-2",
        title: "MCQ Paper 2 — Blood, Vessels, and Disease",
        description: "Six multiple-choice questions covering blood components, vessel identification, CHD risk factors, and exercise physiology.",
        questions: [
          {
            id: "bio-transport-animals-bank-mcq2-q01",
            question: "Which feature of red blood cells is an adaptation for carrying oxygen?",
            options: [
              "They contain a large nucleus that regulates haemoglobin synthesis.",
              "They are biconcave discs with no nucleus, maximising haemoglobin content and surface area.",
              "They produce antibodies that bind to oxygen molecules.",
              "They have a thick membrane that traps oxygen inside the cell.",
            ],
            answerIndex: 1,
            explanation: "Red blood cells are biconcave discs — this increases surface area for O₂ diffusion. Having no nucleus means more cytoplasm can be packed with haemoglobin. They do not produce antibodies (that is lymphocytes' role).",
            guideRef: "Blood Components and Functions",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bank-mcq2-q02",
            question: "A student observes a blood vessel under a microscope. It has a very thin wall (one cell thick) and a lumen barely larger than a red blood cell. What is this vessel, and what is its main function?",
            options: [
              "An artery — to carry blood at high pressure away from the heart.",
              "A vein — to return blood to the heart with the help of valves.",
              "A capillary — to allow exchange of gases and nutrients between blood and tissues.",
              "A lymph vessel — to return tissue fluid to the bloodstream.",
            ],
            answerIndex: 2,
            explanation: "A one-cell-thick wall and a tiny lumen (forcing red blood cells through one at a time) are the hallmarks of a capillary. This thin wall minimises diffusion distance, enabling rapid exchange of O₂, CO₂, glucose, and waste between blood and surrounding tissues.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-animals-bank-mcq2-q03",
            question: "Which of the following best describes the role of platelets in the body's response to injury?",
            options: [
              "They produce antibodies to neutralise bacteria entering through the wound.",
              "They engulf bacteria by phagocytosis at the wound surface.",
              "They clump together and release chemicals that trigger the formation of fibrin, leading to a blood clot.",
              "They carry extra O₂ to the wound site to speed up tissue repair.",
            ],
            answerIndex: 2,
            explanation: "Platelets (thrombocytes) are cell fragments that aggregate at wound sites and release clotting factors. These convert fibrinogen (plasma protein) to fibrin threads, forming a mesh that traps red blood cells and creates a clot. Antibodies are produced by lymphocytes; phagocytosis is done by phagocytes.",
            guideRef: "Blood Components and Functions",
            difficulty: "core",
            hints: [
              "Platelets are involved in clotting — not immune responses.",
              "What protein in plasma is converted into fibrin threads?",
              "Fibrin forms the structural mesh of a blood clot.",
            ],
          },
          {
            id: "bio-transport-animals-bank-mcq2-q04",
            question: "A doctor advises a patient to reduce saturated fat intake to lower their risk of coronary heart disease. What is the link between dietary saturated fat and CHD?",
            options: [
              "Saturated fat blocks the coronary veins, preventing blood from leaving the heart.",
              "High saturated fat intake raises LDL cholesterol levels, promoting atherosclerotic plaque formation in coronary arteries.",
              "Saturated fat reduces haemoglobin production, decreasing O₂ delivery to the heart.",
              "Saturated fat increases heart rate, causing excessive wear on coronary artery walls.",
            ],
            answerIndex: 1,
            explanation: "A diet high in saturated fats raises blood LDL (low-density lipoprotein) cholesterol. High LDL promotes the deposition of cholesterol-rich plaques inside arterial walls (atherosclerosis). In coronary arteries, plaques narrow the lumen, reducing O₂ supply to heart muscle.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "core",
            hints: [
              "What type of cholesterol is associated with plaque formation?",
              "Where do plaques deposit — inside or outside the arterial wall?",
              "Atherosclerosis in coronary arteries = coronary heart disease.",
            ],
          },
          {
            id: "bio-transport-animals-bank-mcq2-q05",
            question: "Carbon monoxide in cigarette smoke contributes to coronary heart disease. Which mechanism best explains this?",
            options: [
              "CO dissolves in plasma and thickens the blood, increasing clotting risk.",
              "CO binds irreversibly to haemoglobin, reducing O₂-carrying capacity and increasing workload on the heart; it also damages arterial endothelium, promoting plaque formation.",
              "CO stimulates lymphocytes to attack coronary artery cells.",
              "CO increases cardiac output, stretching the coronary arteries and weakening them.",
            ],
            answerIndex: 1,
            explanation: "CO has a much higher affinity for haemoglobin than O₂, forming carboxyhaemoglobin. This reduces O₂ transport, forcing the heart to work harder. CO also damages the endothelial lining of arteries, making them susceptible to plaque build-up. Both mechanisms contribute to CHD.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "challenge",
            hints: [
              "CO binds to haemoglobin — how does this affect O₂ transport?",
              "If O₂ delivery drops, what must the heart do to compensate?",
              "CO also chemically damages the inner lining of arteries — what does this promote?",
              "Two separate mechanisms both contribute to CHD from smoking.",
            ],
          },
          {
            id: "bio-transport-animals-bank-mcq2-q06",
            question: "Which statement about plasma is correct?",
            options: [
              "Plasma is the same as serum — it contains all blood components except cells.",
              "Plasma transports dissolved substances including glucose, amino acids, hormones, CO₂ (as HCO₃⁻), and urea.",
              "Plasma contains haemoglobin dissolved in the liquid portion of blood.",
              "Plasma is produced in the bone marrow alongside red blood cells.",
            ],
            answerIndex: 1,
            explanation: "Plasma is the liquid component of blood (about 90% water) that transports dissolved nutrients (glucose, amino acids), hormones, CO₂ mainly as hydrogencarbonate ions (HCO₃⁻), urea, and other substances. Haemoglobin is inside red blood cells, not dissolved in plasma.",
            guideRef: "Blood Components and Functions",
            difficulty: "core",
            hints: [
              "Plasma is the straw-coloured liquid — what is dissolved in it?",
              "CO₂ is mostly not transported as dissolved CO₂ — what is it converted to?",
              "Haemoglobin is inside red blood cells, not freely dissolved in plasma.",
            ],
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-transport-animals-bank-qa-1",
        title: "Structured Paper 1 — Heart, Vessels and Blood",
        description: "Four structured questions covering heart structure, vessel identification, blood components, and cardiac cycle.",
        questions: [
          {
            id: "bio-transport-animals-bank-qa1-q01",
            question:
              "The diagram below shows a cross-section of a blood vessel with a thick muscular and elastic wall and a narrow lumen.\n\n(a) Identify this type of blood vessel. [1]\n(b) Explain two structural features of this vessel that adapt it to its function of carrying blood away from the heart at high pressure. [4]\n(c) Name the vessel that carries blood from the left ventricle to the rest of the body. [1]",
            marks: 6,
            modelAnswer:
              "(a) Artery.\n\n(b) Feature 1: Thick muscular and elastic wall. This allows the artery to withstand and resist the high pressure of blood ejected by ventricular contraction without rupturing. The elastic fibres stretch during systole and recoil during diastole, smoothing out pressure surges and maintaining a continuous blood flow.\n\nFeature 2: Narrow lumen relative to wall thickness. This maintains high blood pressure — a narrower channel keeps flow fast and pressure high, appropriate for delivering blood efficiently to organs.\n\n(c) The aorta.",
            markScheme: [
              "(a) Artery [1]",
              "(b) Thick muscular/elastic wall — withstands/resists high blood pressure [1]",
              "Elastic recoil maintains pressure between heartbeats / smooths pressure surges [1]",
              "Narrow lumen (relative to wall thickness) — maintains high pressure / fast flow [1]",
              "Any second valid feature with correct function link [1]",
              "(c) Aorta [1]",
            ],
            commonError:
              "Students describe the wall as 'strong' without explaining the functional consequence — the mark is for linking thick/elastic wall to withstanding pressure or recoil smoothing flow.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "core",
            hints: [
              "Identify the vessel from the description of its wall and lumen.",
              "For each structural feature, state the feature AND explain what it does (structure → function).",
              "The aorta is the largest artery leaving the left ventricle.",
            ],
          },
          {
            id: "bio-transport-animals-bank-qa1-q02",
            question:
              "Describe the functions of the following blood components:\n(a) Haemoglobin in red blood cells [3]\n(b) Phagocytes [2]\n(c) Fibrinogen in plasma [2]",
            marks: 7,
            modelAnswer:
              "(a) Haemoglobin is the red iron-containing protein that reversibly binds oxygen. In the lungs, where O₂ partial pressure is high, haemoglobin binds O₂ to form oxyhaemoglobin (bright red). In respiring tissues, where O₂ partial pressure is low, oxyhaemoglobin releases O₂ which diffuses into cells for aerobic respiration. CO₂ in tissues also promotes O₂ release (Bohr effect).\n\n(b) Phagocytes are a type of white blood cell that engulf and destroy pathogens by phagocytosis. The phagocyte's membrane surrounds the pathogen, enclosing it in a vacuole, which then fuses with lysosomes containing digestive enzymes that break down the pathogen.\n\n(c) Fibrinogen is a soluble plasma protein involved in blood clotting. At a wound site, fibrinogen is converted by the enzyme thrombin to insoluble fibrin, which forms long threads. These threads create a mesh that traps red blood cells, forming a clot that seals the wound and prevents further blood loss and entry of pathogens.",
            markScheme: [
              "(a) Haemoglobin reversibly binds O₂ [1]",
              "Forms oxyhaemoglobin in lungs (high pO₂) / releases O₂ in tissues (low pO₂) [1]",
              "O₂ released for aerobic respiration in cells [1]",
              "(b) Phagocytes engulf / ingest pathogens by phagocytosis [1]",
              "Pathogens digested by enzymes (lysosomes) / destroyed [1]",
              "(c) Fibrinogen converted to fibrin at wound [1]",
              "Fibrin forms mesh / clot trapping red blood cells / seals wound [1]",
            ],
            commonError:
              "For haemoglobin, students often write 'carries oxygen' without stating that the binding is reversible and specifying where O₂ is picked up and where it is released.",
            guideRef: "Blood Components and Functions",
            difficulty: "core",
            hints: [
              "For haemoglobin: where does it pick up O₂ and where does it release it?",
              "For phagocytes: describe the process step by step — engulf, vacuole, lysosomes.",
              "For fibrinogen: what is it converted to, and what does that product do?",
            ],
          },
          {
            id: "bio-transport-animals-bank-qa1-q03",
            question:
              "Explain why the left ventricle of the heart has a thicker muscular wall than the right ventricle, even though both pump the same volume of blood per beat. [3]",
            marks: 3,
            modelAnswer:
              "The left ventricle pumps blood into the aorta and around the systemic circuit (the entire body), which is a much longer pathway with greater resistance than the pulmonary circuit. To overcome this resistance and maintain adequate blood pressure throughout the systemic circuit, the left ventricle must generate much greater force per contraction. A thicker wall means more cardiac muscle fibres, enabling a greater force without increasing the volume pumped. The right ventricle only pumps blood to the nearby lungs (pulmonary circuit), which is short and low-resistance, requiring less muscular force and therefore a thinner wall.",
            markScheme: [
              "Left ventricle pumps blood to the whole body / systemic circuit [1]",
              "Systemic circuit is longer / has greater resistance than pulmonary circuit [1]",
              "Thicker wall = more muscle = greater force generated / higher pressure maintained [1]",
            ],
            commonError:
              "Students often say the left ventricle pumps 'more blood' — both ventricles pump the same stroke volume. The difference is pressure/force, not volume.",
            guideRef: "Structure of the Heart",
            difficulty: "core",
            hints: [
              "Where does each ventricle send its blood? How far away is each destination?",
              "More resistance requires more force — how does wall thickness affect force?",
              "Both ventricles pump the same volume (stroke volume) — this question is about pressure, not volume.",
            ],
          },
          {
            id: "bio-transport-animals-bank-qa1-q04",
            question:
              "A student measured the heart rate of two individuals — an elite marathon runner and an untrained person — before, during, and after the same standardised exercise test. The runner's resting heart rate was 48 bpm; the untrained person's was 74 bpm. Both reached 160 bpm during peak exercise. After stopping exercise, the runner returned to resting heart rate in 3 minutes; the untrained person took 11 minutes.\n\n(a) Explain why the runner has a lower resting heart rate than the untrained person. [3]\n(b) Suggest why both reached the same peak heart rate of 160 bpm during exercise. [2]\n(c) Explain why the runner recovered more quickly after exercise. [2]",
            marks: 7,
            modelAnswer:
              "(a) Endurance training causes the heart to undergo cardiac hypertrophy — the myocardium (heart muscle) becomes stronger and the left ventricle enlarges. This increases stroke volume (the volume of blood ejected per beat). Cardiac output = heart rate × stroke volume. Since the body's resting O₂ demand is the same for both individuals, and the runner has a higher stroke volume, the runner can meet this demand with a lower heart rate — hence 48 bpm compared to 74 bpm.\n\n(b) Both individuals reached the same peak heart rate because their maximum heart rate is determined partly by genetics and age, and the exercise intensity was the same standardised test. The maximum rate at which the SAN can fire is physiologically limited. Although the runner has a higher stroke volume, the peak heart rate is limited by the same physiological ceiling.\n\n(c) Heart rate is elevated during exercise because CO₂ produced by respiring muscles stimulates the SAN via chemoreceptors and the nervous system. After exercise stops, muscles produce less CO₂ rapidly; the runner's more efficient cardiovascular system delivers O₂ and removes CO₂ faster, so blood CO₂ falls to resting levels more quickly, and the SAN reduces its firing rate sooner — returning heart rate to 48 bpm in just 3 minutes.",
            markScheme: [
              "(a) Training increases stroke volume (heart is stronger/larger/hypertrophy) [1]",
              "Cardiac output = heart rate x stroke volume [1]",
              "Higher stroke volume means lower heart rate needed to maintain same cardiac output / O₂ delivery [1]",
              "(b) Maximum heart rate is physiologically limited / same for both [1]",
              "Same exercise intensity demands same peak cardiac output [1]",
              "(c) CO₂ is the trigger for increased heart rate; after exercise CO₂ falls [1]",
              "Runner's cardiovascular system more efficient — CO₂ falls faster / O₂ restored faster — SAN reduces rate sooner [1]",
            ],
            commonError:
              "For part (a), many students say the runner 'needs less oxygen' — this is wrong. Resting O₂ demand is similar. The correct reasoning is: same demand, higher stroke volume, therefore lower rate.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "challenge",
            hints: [
              "(a) Use the formula: cardiac output = heart rate x stroke volume. If output stays the same and stroke volume rises, what happens to heart rate?",
              "(b) Maximum heart rate has a genetic ceiling — training cannot raise it much. Focus on what limits the SAN.",
              "(c) What is the chemical signal that elevated heart rate in the first place? When does that signal go away?",
              "(c) Efficient cardiovascular system = faster removal of CO₂ = faster fall in the stimulus for high heart rate.",
            ],
            strategy: "Apply a formula: cardiac output = heart rate x stroke volume. Rearranging: if cardiac output is fixed and stroke volume rises, heart rate must fall proportionally.",
            solutions: [
              {
                label: "Method 1: Formula approach",
                steps: [
                  "State: cardiac output (CO) = heart rate (HR) x stroke volume (SV).",
                  "At rest, CO is approximately the same for both individuals (~5 L/min).",
                  "Runner has higher SV due to training-induced hypertrophy.",
                  "Therefore HR = CO / SV. If SV is larger and CO is fixed, HR must be smaller.",
                  "Conclusion: lower resting HR is the mathematical consequence of a higher stroke volume.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "bio-transport-animals-bank-qa-2",
        title: "Structured Paper 2 — Vessel Challenge, CHD and Synoptic Questions",
        description: "Four structured questions including vessel identification, CHD risk factors, a data-interpretation question, and a synoptic challenge.",
        questions: [
          {
            id: "bio-transport-animals-bank-qa2-q01",
            question:
              "Three blood vessels — P, Q, and R — are described below. Identify each vessel and justify your answer.\n\n- Vessel P: very thick wall, narrow lumen, no valves, blood at high pressure, carries blood away from the heart.\n- Vessel Q: thin wall, wide lumen, pocket valves present, blood at low pressure, carries blood towards the heart.\n- Vessel R: wall only one cell thick, lumen barely larger than one red blood cell, large total surface area across the body.",
            marks: 6,
            modelAnswer:
              "Vessel P is an artery. Justification: thick muscular/elastic wall withstands high pressure generated by ventricular contraction; no valves because high pressure maintains forward flow; narrow lumen sustains high pressure; blood flows away from the heart.\n\nVessel Q is a vein. Justification: thin wall because blood is at low pressure after passing through capillaries; wide lumen reduces resistance to flow; pocket valves prevent backflow of slow-moving blood; blood flows towards the heart.\n\nVessel R is a capillary. Justification: one-cell-thick wall minimises diffusion distance for exchange of O₂, CO₂, glucose, and waste between blood and tissues; narrow lumen forces red blood cells through one at a time, slowing them for maximum exchange time; large total surface area maximises rate of exchange across the entire capillary network.",
            markScheme: [
              "P = Artery [1]; wall thickness withstands high pressure / elastic recoil / narrow lumen [1]",
              "Q = Vein [1]; thin wall (low pressure) / wide lumen / pocket valves prevent backflow [1]",
              "R = Capillary [1]; one-cell wall minimises diffusion distance for exchange / large surface area [1]",
            ],
            commonError:
              "Students often correctly name the vessels but fail to justify using the given descriptions — they must link each clue to function to earn marks.",
            guideRef: "Blood Vessels: Structure and Function",
            difficulty: "core",
            hints: [
              "Match each clue to a vessel type: thick wall + high pressure = artery; valves + low pressure = vein; one cell thick = capillary.",
              "For each identification, justify it using at least one specific structural feature from the description.",
              "The narrow lumen of capillaries forces single-file red blood cell flow — why is that useful?",
            ],
          },
          {
            id: "bio-transport-animals-bank-qa2-q02",
            question:
              "Coronary heart disease (CHD) is a leading cause of death worldwide.\n\n(a) What causes coronary heart disease at the cellular/tissue level? [2]\n(b) State three risk factors for CHD and for each, explain the mechanism by which it increases risk. [6]\n(c) Suggest two lifestyle changes that could reduce the risk of CHD, and explain the biological reason for each. [4]",
            marks: 12,
            modelAnswer:
              "(a) CHD is caused by the build-up of atherosclerotic plaques — deposits of fatty material (mainly cholesterol) — inside the walls of the coronary arteries. These plaques narrow the lumen, reducing blood flow to the heart muscle (myocardium). The reduced O₂ and glucose supply can cause chest pain (angina) or, if a plaque ruptures and a blood clot forms, a complete blockage causing a heart attack (myocardial infarction).\n\n(b) Risk factor 1 — Diet high in saturated fat: raises blood LDL cholesterol levels, promoting deposition of cholesterol-rich plaques inside arterial walls (atherosclerosis). Risk factor 2 — Smoking: carbon monoxide in smoke binds haemoglobin (forming carboxyhaemoglobin), reducing O₂-carrying capacity and forcing the heart to work harder; chemicals in smoke also damage the arterial endothelium, promoting plaque formation. Nicotine raises blood pressure, increasing the stress on arterial walls. Risk factor 3 — Lack of physical exercise: associated with higher body weight, higher blood pressure, and less efficient cardiovascular function, all of which raise plaque build-up risk and strain on the heart.\n\n(c) Change 1 — Regular aerobic exercise: strengthens the heart muscle, lowers resting heart rate and blood pressure, improves lipid profile (raises HDL, lowers LDL), reducing plaque formation. Change 2 — Reduce saturated fat / increase unsaturated fats and fibre: lowers LDL cholesterol in the blood, reducing the amount of cholesterol available for plaque deposition in arterial walls.",
            markScheme: [
              "(a) Build-up of fatty plaques / atherosclerosis in coronary arteries [1]",
              "Narrows lumen, reducing blood flow / O₂ supply to heart muscle [1]",
              "(b) Up to 2 marks per risk factor: state factor [1] + mechanism [1] (max 6 marks for 3 factors)",
              "Diet: high LDL → promotes plaque formation",
              "Smoking: CO reduces O₂ capacity / damages endothelium / nicotine raises BP",
              "Lack of exercise: higher BP / weight / less efficient cardiovascular system",
              "Stress: raises BP / promotes plaque instability (accept other valid mechanisms)",
              "Genetics: inherited high cholesterol / hypertension",
              "(c) Up to 2 marks per change: state change [1] + biological reason [1] (max 4 marks)",
              "Exercise: strengthens heart / lowers BP / improves lipid profile",
              "Diet change: lowers LDL cholesterol / reduces plaque deposition",
            ],
            commonError:
              "For smoking, students often only mention nicotine — remember to include CO's effect on haemoglobin AND the endothelial damage from other chemicals. For diet, 'eating less fat' is not enough — specify saturated fat and explain the LDL mechanism.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "core",
            hints: [
              "(a) Start with the physical cause: what accumulates inside the coronary artery wall?",
              "(b) For each risk factor, always explain the mechanism — how does it actually increase plaque risk?",
              "(c) Link your lifestyle change directly to a biological pathway that reduces plaque or lowers cardiac workload.",
            ],
          },
          {
            id: "bio-transport-animals-bank-qa2-q03",
            question:
              "The table below shows heart rate data for a 15-year-old student during a treadmill exercise test.\n\n| Time (min) | Heart rate (bpm) |\n|---|---|\n| 0 (rest) | 72 |\n| 2 | 88 |\n| 4 | 115 |\n| 6 | 148 |\n| 8 (exercise stops) | 160 |\n| 10 | 130 |\n| 12 | 98 |\n| 15 | 75 |\n\n(a) Calculate the percentage increase in heart rate from rest to peak exercise. Show your working. [2]\n(b) Explain why heart rate increased during exercise. [3]\n(c) Explain why heart rate did not immediately return to 72 bpm when exercise stopped at 8 minutes. [2]\n(d) The student's friend, who trains regularly, has a resting heart rate of 55 bpm. Suggest, with reasoning, how the friend's peak heart rate and recovery time might compare to the student's. [3]",
            marks: 10,
            modelAnswer:
              "(a) Increase = 160 − 72 = 88 bpm. Percentage increase = (88/72) × 100 = 122% (to 3 s.f.).\n\n(b) During exercise, muscles contract more frequently and respire aerobically at a greater rate, producing more CO₂. The rising CO₂ concentration (and falling O₂) in the blood is detected by chemoreceptors. These send signals via the nervous system to the sino-atrial node (SAN) in the right atrium, causing it to fire more frequently. This increases the rate of atrial and ventricular contraction — raising heart rate. The increased heart rate delivers more oxygenated blood to muscles and removes CO₂ faster.\n\n(c) When exercise stops, muscles continue to respire at an elevated rate briefly (repaying oxygen debt from any anaerobic respiration and restoring ATP/phosphocreatine stores). CO₂ remains elevated in the blood for a short time after exercise stops, continuing to stimulate the SAN. Heart rate therefore remains elevated until blood CO₂ falls back to resting levels, which takes several minutes.\n\n(d) The friend's resting heart rate is lower (55 bpm vs 72 bpm) due to training-induced cardiac hypertrophy and higher stroke volume. Their peak heart rate during the same exercise is likely to be similar to the student's (perhaps marginally lower), because maximum heart rate is largely genetically determined and the exercise intensity is the same. However, the trained friend will likely recover more quickly — within perhaps 5–6 minutes — because their more efficient cardiovascular system clears CO₂ faster, the SAN reduces firing sooner, and their stronger heart can rapidly meet the lower resting demand with fewer beats per minute.",
            markScheme: [
              "(a) Correct working: 160 − 72 = 88 bpm [1]; 88/72 × 100 = 122% (accept 121–123%) [1]",
              "(b) Muscles respire faster / produce more CO₂ [1]",
              "Chemoreceptors detect rise in CO₂ / SAN stimulated [1]",
              "Heart rate / rate of SAN firing increases to deliver more O₂ / remove CO₂ [1]",
              "(c) CO₂ remains elevated after exercise stops / muscles still consuming O₂ [1]",
              "SAN continues to be stimulated until CO₂ returns to resting level [1]",
              "(d) Peak heart rate similar (or slightly lower) — max HR is genetically limited [1]",
              "Recovery faster — trained cardiovascular system clears CO₂ more efficiently [1]",
              "Lower resting HR from higher stroke volume [1]",
            ],
            commonError:
              "In (c), students often say heart rate stays high because muscles are 'still contracting' — the examiner needs the CO₂ / chemoreceptor mechanism, not just a vague reference to continued activity.",
            guideRef: "Coronary Heart Disease and Exercise",
            difficulty: "challenge",
            hints: [
              "(a) % increase = (change / original) x 100. Identify the resting and peak values from the table.",
              "(b) Three-step mechanism: CO₂ rises → chemoreceptors detect → SAN fires faster.",
              "(c) What chemical signal is still present immediately after exercise stops?",
              "(d) Use the formula cardiac output = HR x SV to reason about peak HR; use CO₂ clearance to reason about recovery.",
            ],
            strategy: "Data question: read the table carefully, identify which row is 'rest' and which is 'peak', then use the percentage change formula. Always show working.",
            solutions: [
              {
                label: "Percentage increase calculation",
                steps: [
                  "Resting heart rate (t=0) = 72 bpm.",
                  "Peak heart rate (t=8) = 160 bpm.",
                  "Absolute increase = 160 - 72 = 88 bpm.",
                  "Percentage increase = (88 / 72) x 100 = 122.2%.",
                  "Round to 3 significant figures: 122%.",
                ],
              },
            ],
          },
          {
            id: "bio-transport-animals-bank-qa2-q04",
            question:
              "A patient receives a blood transfusion during surgery. The blood transfused contains red blood cells, white blood cells, platelets, and plasma.\n\n(a) The patient loses significant oxygen-carrying capacity before the transfusion. Explain which component of the transfused blood will restore this capacity, and describe how it functions at the molecular level. [4]\n(b) After surgery, the patient develops a bacterial infection at the wound site. Describe how two different types of white blood cell contribute to defending against this infection. [4]\n(c) The wound begins to heal and a scab forms. Outline the sequence of events from injury to scab formation. [3]",
            marks: 11,
            modelAnswer:
              "(a) Red blood cells will restore oxygen-carrying capacity. Red blood cells contain the protein haemoglobin, which is composed of four polypeptide chains each with an iron-containing haem group. In the lungs (where O₂ partial pressure is high), each haem group binds one O₂ molecule, forming oxyhaemoglobin. In respiring tissues (where O₂ partial pressure is low and CO₂ is high), the bonds weaken and O₂ is released, diffusing into cells for aerobic respiration. The binding is cooperative and reversible — no permanent chemical change occurs.\n\n(b) Phagocytes: engulf bacteria at the wound site by phagocytosis. The phagocyte extends its cell membrane around the bacterium, enclosing it in a vacuole (phagosome). Lysosomes containing hydrolytic enzymes fuse with the phagosome and digest the bacterium. This is non-specific — phagocytes attack any foreign material.\n\nLymphocytes: provide specific immunity. They recognise specific antigens on the bacteria's surface. Lymphocytes are activated and divide (clonal selection), differentiating into plasma cells that produce large quantities of specific antibodies. Antibodies bind to bacterial antigens, neutralising them and/or marking them for phagocytosis (opsonisation). Some lymphocytes become memory cells for faster future responses.\n\n(c) Injury breaks blood vessels. Platelets arrive at the wound, become activated, and clump together (platelet aggregation), releasing clotting factors. These trigger a cascade converting the plasma protein fibrinogen into insoluble fibrin threads. Fibrin threads form a mesh that traps red blood cells, forming a blood clot. The clot dries to form a scab, sealing the wound and preventing further blood loss and pathogen entry.",
            markScheme: [
              "(a) Red blood cells restore O₂ capacity [1]",
              "Contain haemoglobin which reversibly binds O₂ [1]",
              "Forms oxyhaemoglobin in lungs (high pO₂) [1]",
              "Releases O₂ in tissues (low pO₂) for aerobic respiration [1]",
              "(b) Phagocytes: engulf bacteria by phagocytosis / digest with enzymes [2]",
              "Lymphocytes: produce specific antibodies that bind to bacterial antigens [2]",
              "(c) Platelets clump / aggregate at wound site [1]",
              "Fibrinogen converted to fibrin (threads) by clotting cascade [1]",
              "Fibrin mesh traps red blood cells → clot → scab seals wound [1]",
            ],
            commonError:
              "In (b), students often describe only one type of white blood cell or confuse phagocytes and lymphocytes. A common error is stating that lymphocytes 'eat' bacteria — they produce antibodies; it is phagocytes that engulf.",
            guideRef: "Blood Components and Functions",
            difficulty: "challenge",
            hints: [
              "(a) O₂ is carried in red blood cells by a specific protein — name it and describe where it picks up and releases O₂.",
              "(b) Two different WBC types: one engulfs (non-specific), one produces proteins that bind antigens (specific).",
              "(c) Order the events: injury → platelets → clotting factors → fibrinogen → fibrin → mesh → clot → scab.",
            ],
          },
        ],
      },
    ],
  },
};
