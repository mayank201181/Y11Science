import type { Topic } from "../types";

export const chemEnvironment: Topic = {
  id: "chem-environment",
  title: "Chemistry of the Environment",
  subject: "chemistry",
  icon: "🌫️",
  blurb: "Test for water purity, air composition, pollutants, greenhouse gases, and eutrophication.",
  intro: "From the quality of drinking water to the composition of the atmosphere and the gases driving climate change, environmental chemistry shapes the world we live in. This topic equips you to test for water, explain why clean dry air is mostly nitrogen, identify the sources and effects of key pollutants, and critically evaluate strategies to protect our environment — essential knowledge for Cambridge IGCSE 0620 Extended.",

  guide: [
    {
      heading: "Testing for Water and Its Purity",
      body: `Water is a compound, not an element, and two classical chemical tests confirm its presence.

**Test 1 — Anhydrous copper(II) sulfate:** The white powder turns blue when water is added. The water molecules are incorporated into the crystal lattice forming the blue hydrated salt: CuSO₄(s) + 5H₂O(l) → CuSO₄·5H₂O(s). The colour change is reversible — gentle heating drives the water back out.

**Test 2 — Cobalt(II) chloride paper:** Dry cobalt(II) chloride paper is blue. On contact with water it turns pink (hydrated form). It is used as a fast indicator, e.g. to check for moisture in a gas stream.

**Testing for purity:** A pure substance has sharp, reproducible physical properties. For water:
- Melting point: exactly 0 °C
- Boiling point: exactly 100 °C at standard atmospheric pressure

Any dissolved substance (salt, sugar, etc.) **depresses** the melting point and **elevates** the boiling point. So a sample boiling above 100 °C or melting below 0 °C is impure. This is a non-chemical purity test — no reagents needed, just accurate thermometry.`,
      diagrams: [
        {
          caption: "Colour changes in the two tests for water",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing colour changes in tests for water: anhydrous copper sulfate white to blue, cobalt chloride paper blue to pink">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- CuSO4 section -->
  <rect x="10" y="30" width="70" height="60" rx="6" fill="#f1f5f9" stroke="#38bdf8" stroke-width="2"/>
  <text x="45" y="68" text-anchor="middle" font-size="11" fill="#0f172a" font-weight="bold">White</text>
  <text x="45" y="82" text-anchor="middle" font-size="9" fill="#334155">CuSO4(anhydrous)</text>
  <text x="90" y="65" text-anchor="middle" font-size="18" fill="#fbbf24">+H2O</text>
  <polygon points="108,60 120,65 108,70" fill="#38bdf8"/>
  <rect x="124" y="30" width="70" height="60" rx="6" fill="#3b82f6" stroke="#38bdf8" stroke-width="2"/>
  <text x="159" y="68" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">Blue</text>
  <text x="159" y="82" text-anchor="middle" font-size="9" fill="#bfdbfe">CuSO4.5H2O</text>
  <text x="45" y="15" text-anchor="middle" font-size="10" fill="#b7bce0">Test 1: CuSO4 powder</text>
  <!-- CoCl2 section -->
  <rect x="10" y="120" width="70" height="60" rx="6" fill="#1e40af" stroke="#38bdf8" stroke-width="2"/>
  <text x="45" y="155" text-anchor="middle" font-size="11" fill="#bfdbfe" font-weight="bold">Blue</text>
  <text x="45" y="169" text-anchor="middle" font-size="9" fill="#93c5fd">CoCl2 paper (dry)</text>
  <text x="90" y="155" text-anchor="middle" font-size="18" fill="#fbbf24">+H2O</text>
  <polygon points="108,150 120,155 108,160" fill="#38bdf8"/>
  <rect x="124" y="120" width="70" height="60" rx="6" fill="#ec4899" stroke="#fb7185" stroke-width="2"/>
  <text x="159" y="155" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">Pink</text>
  <text x="159" y="169" text-anchor="middle" font-size="9" fill="#fbcfe8">CoCl2 paper (wet)</text>
  <text x="45" y="110" text-anchor="middle" font-size="10" fill="#b7bce0">Test 2: CoCl2 paper</text>
  <!-- purity note -->
  <rect x="210" y="20" width="100" height="160" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="260" y="38" text-anchor="middle" font-size="10" fill="#a78bfa" font-weight="bold">PURITY TEST</text>
  <text x="260" y="56" text-anchor="middle" font-size="9" fill="#eef0ff">Pure water:</text>
  <text x="260" y="72" text-anchor="middle" font-size="9" fill="#34d399">b.p. = 100 C</text>
  <text x="260" y="88" text-anchor="middle" font-size="9" fill="#34d399">m.p. = 0 C</text>
  <text x="260" y="108" text-anchor="middle" font-size="9" fill="#fb7185">Impure water:</text>
  <text x="260" y="124" text-anchor="middle" font-size="9" fill="#fb7185">b.p. above 100 C</text>
  <text x="260" y="140" text-anchor="middle" font-size="9" fill="#fb7185">m.p. below 0 C</text>
  <text x="260" y="162" text-anchor="middle" font-size="8" fill="#b7bce0">(dissolved solutes</text>
  <text x="260" y="174" text-anchor="middle" font-size="8" fill="#b7bce0">alter both values)</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Anhydrous CuSO₄ (white) turns blue with water; the change is reversible on heating.",
        "Cobalt(II) chloride paper turns from blue (dry) to pink (wet).",
        "Pure water has a melting point of exactly 0 °C and boiling point of exactly 100 °C at 1 atm.",
        "Dissolved impurities lower the melting point and raise the boiling point.",
        "Melting/boiling point tests are physical purity tests requiring no chemical reagents.",
      ],
      discovery: {
        problem: "A student tests a water sample with cobalt(II) chloride paper and anhydrous CuSO₄. Both tests are positive. Does this prove the water is pure? What further test is needed, and what result would confirm purity?",
        idea: "No — the chemical tests only confirm water is PRESENT. They say nothing about dissolved impurities. To test purity, measure the boiling point: exactly 100 °C at standard pressure confirms a pure sample. Any elevation indicates dissolved solutes.",
      },
      whyItWorks: "The CuSO₄ test works because the water molecules bond as ligands to Cu²⁺ ions, changing the coordination geometry and the wavelengths of visible light absorbed, hence the colour change from white to blue. Boiling-point elevation is a colligative property: dissolved particles reduce the vapour pressure of water, so a higher temperature is needed to reach atmospheric pressure.",
    },

    {
      heading: "Treatment of the Domestic Water Supply",
      body: `Rainwater collected in reservoirs is not safe to drink directly — it may contain suspended solids, bacteria, and dissolved chemicals. Water treatment plants apply two key stages before supply:

**1. Filtration:** Water is passed through beds of fine sand and gravel. Particles and microorganisms too large to pass are removed. This does **not** kill bacteria.

**2. Chlorination:** A carefully controlled amount of chlorine (or a chlorine-releasing compound such as chloramine) is dissolved in the water. Chlorine kills harmful bacteria and other pathogens by oxidising key biochemicals. The dose must be sufficient to be effective but low enough to avoid taste problems and the formation of harmful by-products.

Note: distillation can produce very pure water but is too energy-intensive for large-scale domestic supply. Filtration + chlorination is the practical solution.`,
      keyPoints: [
        "Filtration through sand/gravel beds removes suspended solids and some microorganisms.",
        "Chlorination kills harmful bacteria; chlorine is a powerful oxidising agent.",
        "Distillation produces very pure water but is not used at large scale due to high energy cost.",
        "Both steps together make water safe (potable) for drinking.",
        "Chlorine levels are carefully controlled to be effective without creating harmful by-products.",
      ],
      strategies: ["Compare methods by energy cost and scale", "Identify the purpose of each stage"],
    },

    {
      heading: "Composition of Clean Dry Air",
      body: `The atmosphere is a mixture of gases. Clean dry air (with water vapour removed) has a remarkably consistent composition:

| Gas | Approximate % by volume |
|---|---|
| Nitrogen (N₂) | ~78% |
| Oxygen (O₂) | ~21% |
| Argon and other noble gases | ~1% |
| Carbon dioxide (CO₂) | ~0.04% |

Key points about these components:
- **Nitrogen** is the dominant gas; relatively unreactive at room temperature.
- **Oxygen** supports combustion and respiration.
- **Argon** is the most abundant noble gas; completely inert.
- **Carbon dioxide** is present in a small but crucial amount — it is a greenhouse gas and the substrate for photosynthesis.

Note the distinction between 'clean dry air' and actual atmospheric air, which also contains variable amounts of water vapour (1–4%), and in polluted areas contains additional trace gases.`,
      diagrams: [
        {
          caption: "Pie chart of clean dry air composition by volume",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pie chart showing composition of clean dry air: nitrogen 78%, oxygen 21%, argon 1%, carbon dioxide 0.04%">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Pie chart centred at 110,100 radius 80 -->
  <!-- N2: 78% = 280.8 degrees. Start at top (270 deg), sweep 280.8 deg clockwise -->
  <!-- Path for N2 (78%): from 270 deg to 190.8 deg (270+280.8=550.8 mod360=190.8) -->
  <!-- Using large arc flag: 280.8>180 so large-arc=1 -->
  <!-- Start point (top): 110+80*cos(270)=110, 100+80*sin(270)=20 -->
  <!-- End point at 190.8 deg from positive x: cos(190.8)= -0.9823, sin(190.8)= -0.1874 wait, need to be careful -->
  <!-- Let me use a simpler approach: compute in SVG units -->
  <!-- Angles measured from 12 o'clock clockwise (matching percentage) -->
  <!-- N2 78%: 0 to 280.8 deg from north -->
  <!-- north = (110, 20); end at 280.8 deg clockwise from north -->
  <!-- 280.8 deg from north = 280.8-90=190.8 deg in standard math angles -->
  <!-- end x = 110 + 80*cos(190.8*pi/180) = 110 + 80*(-0.982) = 110-78.6 = 31.4 -->
  <!-- end y = 100 + 80*sin(190.8*pi/180) = 100 + 80*(-0.187) = 100-15.0 = 85.0 -->
  <path d="M110,100 L110,20 A80,80 0 1,1 31.5,85.1 Z" fill="#38bdf8" stroke="#0f172a" stroke-width="1.5"/>
  <!-- O2 21%: 280.8 to 356.4 deg from north = 75.6 deg sweep -->
  <!-- start: 280.8 deg from north = (31.5, 85.1) -->
  <!-- end: 356.4 deg from north = 266.4 deg math angle -->
  <!-- end x = 110+80*cos(266.4*pi/180) = 110+80*(-0.0628)= 110-5.0=105.0 -->
  <!-- end y = 100+80*sin(266.4*pi/180) = 100+80*(-0.998)=100-79.9=20.1 -->
  <path d="M110,100 L31.5,85.1 A80,80 0 0,1 105.0,20.1 Z" fill="#34d399" stroke="#0f172a" stroke-width="1.5"/>
  <!-- Ar 1%: 356.4 to 360 deg (3.6 deg sweep) -->
  <!-- start: 105.0,20.1 end: 110,20 -->
  <path d="M110,100 L105.0,20.1 A80,80 0 0,1 110,20 Z" fill="#a78bfa" stroke="#0f172a" stroke-width="1.5"/>
  <!-- CO2 0.04% - too small to show as slice; indicate with label arrow only -->
  <!-- Legend -->
  <rect x="205" y="30" width="14" height="14" fill="#38bdf8" rx="2"/>
  <text x="224" y="42" font-size="11" fill="#eef0ff">N2 ~78%</text>
  <rect x="205" y="52" width="14" height="14" fill="#34d399" rx="2"/>
  <text x="224" y="64" font-size="11" fill="#eef0ff">O2 ~21%</text>
  <rect x="205" y="74" width="14" height="14" fill="#a78bfa" rx="2"/>
  <text x="224" y="86" font-size="11" fill="#eef0ff">Ar ~1%</text>
  <rect x="205" y="96" width="14" height="14" fill="#fbbf24" rx="2"/>
  <text x="224" y="108" font-size="11" fill="#eef0ff">CO2 0.04%</text>
  <!-- CO2 arrow pointing to edge of pie -->
  <line x1="205" y1="103" x2="155" y2="28" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,2"/>
  <circle cx="155" cy="28" r="3" fill="#fbbf24"/>
  <text x="110" y="185" text-anchor="middle" font-size="9" fill="#b7bce0">CO2 slice too small to show to scale</text>
  <text x="110" y="107" text-anchor="middle" font-size="9" fill="#0f172a" font-weight="bold">Air</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Clean dry air is approximately 78% N₂, 21% O₂, 1% Ar, and 0.04% CO₂.",
        "Nitrogen is the most abundant gas and is relatively unreactive at room temperature.",
        "Argon is the most abundant noble gas; it is completely inert.",
        "Carbon dioxide is a trace gas but drives the greenhouse effect and photosynthesis.",
        "Real air also contains variable amounts of water vapour (not present in 'clean dry' air).",
      ],
      thinkDeeper: "Why is nitrogen so unreactive? The N≡N triple bond has a bond energy of ~945 kJ/mol — one of the strongest covalent bonds. Breaking it to allow chemical reactions requires extreme conditions (e.g. the Haber process at 450 °C, 200 atm). Yet nitrogen-fixing bacteria manage this at room temperature using the enzyme nitrogenase — a remarkable feat of biochemistry.",
    },

    {
      heading: "Air Pollutants: Sources and Adverse Effects",
      body: `Human activities release gases that alter the natural composition of air, causing harm to living things and the environment. The four main pollutants in IGCSE are:

**Carbon monoxide (CO)**
- *Source:* Incomplete combustion of carbon-containing fuels (e.g. in car engines with insufficient oxygen, faulty gas boilers).
- *Effect:* Highly toxic. CO binds irreversibly to haemoglobin forming carboxyhaemoglobin, preventing oxygen transport. Even low concentrations can be fatal.

**Sulfur dioxide (SO₂)**
- *Source:* Combustion of fossil fuels (especially coal and oil) that contain sulfur impurities. S + O₂ → SO₂.
- *Effect:* Causes acid rain (see below); irritates the respiratory system and damages lungs.

**Oxides of nitrogen (NOₓ — mainly NO and NO₂)**
- *Source 1:* Car engines — high temperatures cause atmospheric N₂ and O₂ to react: N₂ + O₂ → 2NO, which further oxidises to NO₂.
- *Source 2:* Lightning strikes provide the activation energy for the same reaction naturally.
- *Effect:* Causes acid rain; contributes to photochemical smog (reacts with sunlight and unburnt hydrocarbons to form ground-level ozone and peroxyacyl nitrates — irritants harmful to lungs and crops).

**Particulates**
- *Source:* Incomplete combustion (soot/carbon particles from diesel engines, burning wood), volcanic eruptions, dust.
- *Effect:* Inhaled fine particles (PM2.5) lodge deep in lungs, causing respiratory disease and heart disease; block sunlight, reducing visibility; carry toxic compounds.

**Catalytic converters** in car exhausts use platinum and rhodium catalysts to convert CO and NOₓ into harmless CO₂ and N₂:
2CO + 2NO → 2CO₂ + N₂`,
      diagrams: [
        {
          caption: "Pollutant sources and their primary adverse effects",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Table diagram linking pollutants to their sources and effects: CO from incomplete combustion causes toxicity, SO2 from fossil fuels causes acid rain, NOx from car engines causes acid rain and smog, particulates from combustion cause respiratory disease">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Header -->
  <rect x="5" y="5" width="310" height="22" rx="4" fill="#1e3a5f"/>
  <text x="70" y="20" font-size="10" fill="#38bdf8" font-weight="bold">Pollutant</text>
  <text x="155" y="20" font-size="10" fill="#38bdf8" font-weight="bold">Main Source</text>
  <text x="240" y="20" font-size="10" fill="#38bdf8" font-weight="bold">Key Effect</text>
  <!-- CO row -->
  <rect x="5" y="30" width="310" height="34" rx="2" fill="#0f2a3d"/>
  <text x="20" y="47" font-size="10" fill="#fbbf24" font-weight="bold">CO</text>
  <text x="20" y="59" font-size="8" fill="#b7bce0">carbon monoxide</text>
  <text x="120" y="48" font-size="9" fill="#eef0ff">Incomplete</text>
  <text x="120" y="60" font-size="9" fill="#eef0ff">combustion</text>
  <text x="230" y="48" font-size="9" fill="#fb7185">Toxic (blocks O2</text>
  <text x="230" y="60" font-size="9" fill="#fb7185">transport)</text>
  <!-- SO2 row -->
  <rect x="5" y="67" width="310" height="34" rx="2" fill="#0d1f2d"/>
  <text x="20" y="84" font-size="10" fill="#fbbf24" font-weight="bold">SO2</text>
  <text x="20" y="96" font-size="8" fill="#b7bce0">sulfur dioxide</text>
  <text x="120" y="84" font-size="9" fill="#eef0ff">Fossil fuel</text>
  <text x="120" y="96" font-size="9" fill="#eef0ff">combustion</text>
  <text x="230" y="84" font-size="9" fill="#fb7185">Acid rain;</text>
  <text x="230" y="96" font-size="9" fill="#fb7185">lung damage</text>
  <!-- NOx row -->
  <rect x="5" y="104" width="310" height="34" rx="2" fill="#0f2a3d"/>
  <text x="20" y="121" font-size="10" fill="#fbbf24" font-weight="bold">NOx</text>
  <text x="20" y="133" font-size="8" fill="#b7bce0">oxides of nitrogen</text>
  <text x="120" y="121" font-size="9" fill="#eef0ff">Car engines /</text>
  <text x="120" y="133" font-size="9" fill="#eef0ff">lightning</text>
  <text x="230" y="121" font-size="9" fill="#fb7185">Acid rain +</text>
  <text x="230" y="133" font-size="9" fill="#fb7185">photochem. smog</text>
  <!-- Particulates row -->
  <rect x="5" y="141" width="310" height="34" rx="2" fill="#0d1f2d"/>
  <text x="20" y="158" font-size="10" fill="#fbbf24" font-weight="bold">PM</text>
  <text x="20" y="170" font-size="8" fill="#b7bce0">particulates</text>
  <text x="120" y="158" font-size="9" fill="#eef0ff">Incomplete</text>
  <text x="120" y="170" font-size="9" fill="#eef0ff">combustion / dust</text>
  <text x="230" y="158" font-size="9" fill="#fb7185">Lung/heart</text>
  <text x="230" y="170" font-size="9" fill="#fb7185">disease</text>
  <!-- divider lines -->
  <line x1="110" y1="5" x2="110" y2="195" stroke="#334155" stroke-width="1"/>
  <line x1="220" y1="5" x2="220" y2="195" stroke="#334155" stroke-width="1"/>
  <!-- catalytic converter note -->
  <text x="160" y="195" text-anchor="middle" font-size="8" fill="#34d399">Catalytic converter: 2CO + 2NO -> 2CO2 + N2</text>
</svg>`,
        },
      ],
      keyPoints: [
        "CO forms from incomplete combustion; it is toxic because it binds to haemoglobin.",
        "SO₂ comes from sulfur impurities in fossil fuels and causes acid rain and respiratory damage.",
        "NOₓ forms in car engines (high T causes N₂ + O₂ reaction); causes acid rain and photochemical smog.",
        "Particulates (soot, dust) cause respiratory and cardiovascular disease.",
        "Catalytic converters convert CO and NOₓ to CO₂ and N₂ using Pt/Rh catalysts.",
      ],
      discovery: {
        problem: "A city bans all petrol and diesel vehicles but still burns coal in power stations. Which air pollutants would decrease significantly, and which would remain a problem? Predict the effect on acid rain levels.",
        idea: "NOₓ and CO from car engines would drop markedly (fewer high-temperature combustion events). Particulates would fall too. But SO₂ would remain high because coal combustion releases sulfur. Acid rain from SO₂ + H₂O + O₂ → H₂SO₄ would persist, so total acid rain impact might be only partially reduced.",
      },
      whyItWorks: "In car engines, peak combustion temperatures exceed 2000 °C. At these temperatures the activation energy for N₂ + O₂ → 2NO is overcome. At normal atmospheric temperatures this reaction is vanishingly slow — N₂ is kinetically inert even though the reaction is slightly exothermic. High temperature is the key, not thermodynamic feasibility.",
      strategies: ["Separate source from effect", "Match pollutant to combustion type"],
      thinkDeeper: "Catalytic converters require the engine to reach operating temperature (~300 °C) before they work. During cold starts, the converter is inactive and pollutant emissions spike. Hybrid cars that use electric power at low speeds avoid this cold-start problem — another environmental argument for electrification.",
    },

    {
      heading: "Acid Rain: Formation and Effects",
      body: `Acid rain is rain (or any precipitation) with a pH significantly below 5.6 (the natural slight acidity of rain from dissolved CO₂).

**Formation — sulfuric acid pathway:**
1. S + O₂ → SO₂ (combustion of sulfur in fossil fuels)
2. 2SO₂ + O₂ → 2SO₃ (oxidation in the atmosphere)
3. SO₃ + H₂O → H₂SO₄ (dissolved in rain → sulfuric acid)

**Formation — nitric acid pathway:**
1. N₂ + O₂ → 2NO (in car engines or lightning)
2. 2NO + O₂ → 2NO₂
3. 4NO₂ + O₂ + 2H₂O → 4HNO₃ (nitric acid in rain)

**Effects of acid rain:**
- **Aquatic ecosystems:** lowers lake/river pH, killing fish and invertebrates (aluminium ions leached from soils at low pH are particularly toxic to fish).
- **Forests:** acid soil leaches essential minerals (Mg²⁺, Ca²⁺), weakening trees; SO₂ also damages leaf surfaces directly.
- **Buildings and statues:** limestone and marble (CaCO₃) are dissolved — CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂. Metals corrode faster.
- **Human health:** SO₂ and NO₂ irritate airways, worsen asthma.

**Reducing acid rain:**
- Use low-sulfur fuels; fit flue-gas desulfurisation (FGD) to power stations.
- Use catalytic converters to reduce NOₓ from vehicles.
- Add lime/limestone to affected lakes (neutralisation).`,
      keyPoints: [
        "Acid rain has pH below 5.6; it forms when SO₂ or NOₓ dissolve and oxidise in rain.",
        "SO₂ → SO₃ → H₂SO₄; NOₓ → HNO₃ — both yield strong acids in precipitation.",
        "Acid rain kills aquatic life, damages forests, corrodes limestone buildings, and harms health.",
        "CaCO₃ (limestone) reacts with H₂SO₄, dissolving stone structures.",
        "Remedies include FGD at power stations, catalytic converters, and liming affected lakes.",
      ],
    },

    {
      heading: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
      body: `**The natural greenhouse effect** is essential for life: without it, Earth's average surface temperature would be about -18 °C instead of the current +15 °C.

**How it works:**
1. Short-wavelength solar radiation (visible/UV) passes through the atmosphere and warms Earth's surface.
2. Earth radiates energy back as longer-wavelength infrared (IR) radiation.
3. Greenhouse gases (GHGs) absorb this outgoing IR and re-radiate it in all directions — including back to Earth's surface.
4. This trapping of energy raises surface temperatures above what they would otherwise be.

**Greenhouse gases (IGCSE scope):**
- **Carbon dioxide (CO₂):** released by combustion of fossil fuels, deforestation (less CO₂ absorbed), cement production.
- **Methane (CH₄):** released by decomposition of organic matter in landfill and wetlands, cattle digestion (enteric fermentation), rice paddies, leaks from natural gas infrastructure.

**Enhanced greenhouse effect and climate change:**
Increasing concentrations of GHGs since industrialisation trap more IR, raising average global temperatures. Predicted effects: melting ice caps, rising sea levels, more extreme weather events, altered precipitation patterns, ecosystem disruption.

**Strategies to reduce emissions:**
- Shift to renewable energy (solar, wind, hydroelectric) — no combustion, no CO₂.
- Improve energy efficiency (better insulation, LED lighting, efficient engines).
- Carbon capture and storage (CCS) — capturing CO₂ from power stations before it enters the atmosphere.
- Reforestation — trees act as carbon sinks (absorb CO₂ by photosynthesis).
- Reduce methane from agriculture (dietary changes for livestock, capture from landfill).
- International agreements (e.g. Paris Agreement) to limit emissions.`,
      diagrams: [
        {
          caption: "The greenhouse effect: solar radiation in, infrared trapped by greenhouse gases",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of the greenhouse effect: sunlight enters atmosphere, Earth surface emits infrared, greenhouse gas molecules absorb and re-radiate infrared back to surface">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Space background -->
  <rect x="0" y="0" width="320" height="90" fill="#0a0f1e"/>
  <!-- Stars -->
  <circle cx="20" cy="15" r="1" fill="#eef0ff"/>
  <circle cx="80" cy="8" r="1" fill="#eef0ff"/>
  <circle cx="150" cy="20" r="1" fill="#eef0ff"/>
  <circle cx="230" cy="10" r="1" fill="#eef0ff"/>
  <circle cx="300" cy="18" r="1" fill="#eef0ff"/>
  <!-- Atmosphere layer -->
  <rect x="0" y="90" width="320" height="40" rx="0" fill="#1e3a5f" opacity="0.7"/>
  <text x="160" y="107" text-anchor="middle" font-size="9" fill="#93c5fd">A T M O S P H E R E</text>
  <!-- GHG molecules -->
  <ellipse cx="80" cy="110" rx="12" ry="8" fill="#34d399" opacity="0.7"/>
  <text x="80" y="114" text-anchor="middle" font-size="7" fill="#0f172a" font-weight="bold">CO2</text>
  <ellipse cx="160" cy="105" rx="11" ry="7" fill="#34d399" opacity="0.7"/>
  <text x="160" y="109" text-anchor="middle" font-size="7" fill="#0f172a" font-weight="bold">CH4</text>
  <ellipse cx="240" cy="112" rx="12" ry="8" fill="#34d399" opacity="0.7"/>
  <text x="240" y="116" text-anchor="middle" font-size="7" fill="#0f172a" font-weight="bold">CO2</text>
  <!-- Earth surface -->
  <rect x="0" y="130" width="320" height="70" fill="#15803d"/>
  <text x="160" y="170" text-anchor="middle" font-size="10" fill="#bbf7d0">Earth's Surface</text>
  <!-- Sun -->
  <circle cx="290" cy="30" r="20" fill="#fbbf24"/>
  <text x="290" y="35" text-anchor="middle" font-size="8" fill="#0f172a" font-weight="bold">SUN</text>
  <!-- Solar radiation arrows (yellow, short wavelength) -->
  <line x1="265" y1="45" x2="200" y2="120" stroke="#fbbf24" stroke-width="2"/>
  <polygon points="200,120 196,108 208,112" fill="#fbbf24"/>
  <text x="215" y="85" font-size="7" fill="#fbbf24">Visible/UV</text>
  <!-- IR from surface arrows (red, long wavelength) going up -->
  <line x1="120" y1="130" x2="90" y2="90" stroke="#fb7185" stroke-width="2" stroke-dasharray="4,2"/>
  <polygon points="90,90 88,102 96,98" fill="#fb7185"/>
  <text x="55" y="85" font-size="7" fill="#fb7185">IR out</text>
  <!-- IR re-radiated back down -->
  <line x1="88" y1="118" x2="100" y2="130" stroke="#fb7185" stroke-width="2" stroke-dasharray="4,2"/>
  <polygon points="100,130 96,118 104,122" fill="#fb7185"/>
  <text x="15" y="130" font-size="7" fill="#fb7185">IR back</text>
  <text x="15" y="140" font-size="7" fill="#fb7185">to surface</text>
  <!-- Labels -->
  <text x="160" y="195" text-anchor="middle" font-size="8" fill="#b7bce0">GHGs absorb outgoing IR and re-radiate — warming the surface</text>
</svg>`,
        },
      ],
      keyPoints: [
        "The greenhouse effect traps outgoing infrared radiation, keeping Earth's surface warm.",
        "CO₂ (from combustion/deforestation) and CH₄ (from landfill/cattle) are the key GHGs at IGCSE.",
        "Enhanced greenhouse effect is increasing global average temperatures (climate change).",
        "Effects include melting ice, rising seas, extreme weather, and ecosystem disruption.",
        "Strategies include renewables, energy efficiency, CCS, reforestation, and reduced agricultural methane.",
      ],
      discovery: {
        problem: "Venus has an atmosphere of ~96% CO₂ and a surface temperature of ~465 °C — hotter than Mercury despite being farther from the Sun. What does this tell you about the greenhouse effect? Use this to predict what would happen to Earth if CO₂ levels tripled.",
        idea: "Venus is a real-world extreme greenhouse — its dense CO₂ atmosphere traps nearly all outgoing IR. This confirms that CO₂ concentration is the key variable driving surface temperature, independent of distance from the Sun. Tripling Earth's CO₂ would substantially increase IR trapping, raising global temperatures — the degree depends on feedback loops (water vapour, ice-albedo), but the direction is certain.",
      },
      whyItWorks: "Greenhouse gases are molecules with bonds that vibrate at frequencies matching infrared wavelengths (e.g. O=C=O in CO₂, C-H in CH₄). When an IR photon is absorbed, the molecule vibrates and then re-emits radiation in a random direction — including back toward Earth. Monatomic gases like Ar and diatomic gases like N₂ and O₂ lack these IR-active vibrational modes and cannot absorb IR, so they are NOT greenhouse gases.",
      strategies: ["Cause-and-effect chain", "Compare to extreme case (Venus analogy)"],
    },

    {
      heading: "Fertilisers and Eutrophication",
      body: `Plants require nitrogen, phosphorus, and potassium (NPK) for healthy growth. Nitrogen is the nutrient most often deficient in agricultural soils, which is why nitrogen-based fertilisers are used extensively.

**Common nitrogen fertilisers:** ammonium nitrate (NH₄NO₃), ammonium sulfate ((NH₄)₂SO₄), urea (CO(NH₂)₂).

**Eutrophication — the problem of excess fertiliser:**
When fertilisers are applied in excess or washed from fields by rain (leaching/run-off), they enter rivers and lakes. The sequence of events:

1. **Excess nitrate/phosphate** enters the waterway.
2. **Algae and water plants** grow explosively (algal bloom), covering the water surface.
3. **Algae block sunlight**, preventing photosynthesis in submerged plants, which die.
4. **Aerobic bacteria** decompose the dead plant matter, consuming dissolved oxygen.
5. **Oxygen levels crash** (deoxygenation). Fish and other aquatic animals die from lack of oxygen.
6. Further anaerobic decomposition produces methane and hydrogen sulfide — the water becomes foul-smelling and biologically dead.

**Prevention:**
- Apply fertilisers at the right time and in the correct amounts.
- Use slow-release fertiliser formulations.
- Create buffer strips of vegetation between fields and waterways to absorb run-off.`,
      keyPoints: [
        "NPK fertilisers provide nitrogen, phosphorus, and potassium; nitrogen is the nutrient most often lacking in soils.",
        "Leaching of excess nitrates/phosphates into waterways causes eutrophication.",
        "Algal blooms block sunlight, killing submerged plants.",
        "Aerobic bacteria decompose dead matter, consuming dissolved oxygen and suffocating aquatic life.",
        "Prevention includes careful fertiliser management and buffer vegetation strips.",
      ],
      whyItWorks: "Nitrogen is the limiting nutrient in most freshwater ecosystems — a small addition causes large growth responses in algae. Phosphorus is often limiting in lakes. Once the bloom dies, it represents an enormous organic input to the decomposer community. Decomposition is an aerobic process (aerobic respiration: organic matter + O₂ → CO₂ + H₂O), so oxygen demand spikes and dissolved O₂ rapidly approaches zero.",
      strategies: ["Sequence cause-and-effect chain", "Identify the limiting step"],
    },
  ],

  learn: {
    keyFacts: [
      "Anhydrous copper(II) sulfate (white) turns blue in the presence of water.",
      "Cobalt(II) chloride paper turns from blue (dry) to pink (wet) in the presence of water.",
      "Pure water has a melting point of 0 °C and a boiling point of 100 °C at standard pressure.",
      "Clean dry air is approximately 78% N₂, 21% O₂, 1% Ar, and 0.04% CO₂ by volume.",
      "Carbon monoxide (CO) from incomplete combustion binds to haemoglobin, causing toxicity.",
      "Sulfur dioxide (SO₂) from fossil fuel combustion causes acid rain and respiratory damage.",
      "Oxides of nitrogen (NOₓ) form in car engines at high temperatures and cause acid rain and photochemical smog.",
      "Catalytic converters convert CO and NOₓ to CO₂ and N₂: 2CO + 2NO → 2CO₂ + N₂.",
      "CO₂ and CH₄ are the main greenhouse gases covered at IGCSE; they absorb outgoing infrared radiation.",
      "Eutrophication results from excess nitrogen/phosphorus in waterways, leading to algal blooms, oxygen depletion, and death of aquatic life.",
      "Acid rain forms when SO₂ or NOₓ dissolve in rainwater to form H₂SO₄ or HNO₃.",
      "Dissolved impurities raise the boiling point and lower the melting point of water.",
    ],
    flashcards: [
      { front: "What colour change does anhydrous CuSO₄ undergo in the presence of water?", back: "White → blue (forms blue hydrated CuSO₄·5H₂O)" },
      { front: "What colour change does cobalt(II) chloride paper show in the presence of water?", back: "Blue → pink" },
      { front: "How do you test whether a water sample is pure?", back: "Measure the melting point (should be exactly 0 °C) and/or boiling point (should be exactly 100 °C at 1 atm). Any deviation indicates impurities." },
      { front: "What are the approximate percentages of gases in clean dry air?", back: "N₂ ~78%, O₂ ~21%, Ar ~1%, CO₂ ~0.04%" },
      { front: "Why is carbon monoxide toxic?", back: "It binds irreversibly to haemoglobin forming carboxyhaemoglobin, blocking oxygen transport in the blood." },
      { front: "What are the two main sources of sulfur dioxide in the atmosphere?", back: "Combustion of sulfur-containing fossil fuels (coal, oil) in power stations and industrial processes." },
      { front: "How does acid rain form from NOₓ?", back: "N₂ + O₂ → 2NO (in engines/lightning) → 2NO₂ → 4HNO₃ dissolved in rain; or simplified: NOₓ dissolves and oxidises to nitric acid in the atmosphere." },
      { front: "What does a catalytic converter do?", back: "It converts toxic CO and NOₓ to harmless CO₂ and N₂ using platinum/rhodium catalysts: 2CO + 2NO → 2CO₂ + N₂." },
      { front: "Name the two greenhouse gases you must know for IGCSE.", back: "Carbon dioxide (CO₂) and methane (CH₄)." },
      { front: "Why is N₂ not a greenhouse gas but CO₂ is?", back: "N₂ is diatomic and lacks IR-active vibrational modes; CO₂ has bending/stretching vibrations that absorb infrared radiation." },
      { front: "Describe the sequence of events in eutrophication.", back: "Excess nitrates/phosphates → algal bloom → blocked sunlight → submerged plants die → aerobic decomposition by bacteria → oxygen depletion → fish/invertebrates die." },
      { front: "What effect does acid rain have on limestone buildings?", back: "CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂; the limestone dissolves and the structure is damaged." },
    ],
    keyTerms: [
      { term: "Anhydrous", definition: "Without water; describes a substance from which water has been removed (e.g. anhydrous CuSO₄ is white)." },
      { term: "Potable water", definition: "Water that is safe for human consumption; produced by filtration and chlorination of reservoir water." },
      { term: "Chlorination", definition: "Addition of chlorine to water supplies to kill harmful bacteria and pathogens." },
      { term: "Acid rain", definition: "Precipitation with pH below 5.6 caused by dissolution of SO₂ or NOₓ in rain, forming sulfuric or nitric acid." },
      { term: "Greenhouse gas", definition: "A gas that absorbs and re-radiates infrared radiation, contributing to warming of Earth's surface; CO₂ and CH₄ are key examples." },
      { term: "Greenhouse effect", definition: "The trapping of outgoing infrared radiation by greenhouse gases in the atmosphere, raising surface temperature." },
      { term: "Photochemical smog", definition: "A mixture of pollutants (ground-level ozone, peroxyacyl nitrates) formed when NOₓ and unburnt hydrocarbons react in sunlight." },
      { term: "Catalytic converter", definition: "A device in vehicle exhaust systems containing Pt/Rh catalysts that converts CO and NOₓ into CO₂ and N₂." },
      { term: "Eutrophication", definition: "The process by which excess nutrients (nitrates/phosphates) cause rapid algal growth in water, leading to oxygen depletion and death of aquatic organisms." },
      { term: "Particulates (PM2.5)", definition: "Fine solid or liquid particles suspended in air from combustion; particles smaller than 2.5 µm penetrate deep into the lungs and cause respiratory and cardiovascular disease." },
      { term: "Leaching", definition: "The process by which water dissolves and carries substances (e.g. nitrate ions from fertilisers) through soil into groundwater or waterways." },
      { term: "Flue-gas desulfurisation (FGD)", definition: "A technology used at power stations to remove SO₂ from exhaust gases (e.g. by reacting with calcium oxide) before they are released, reducing acid rain." },
    ],
  },

  quiz: {
    mcq: [
      {
        id: "chem-environment-mcq-q01",
        question: "Anhydrous copper(II) sulfate is used as a test for water. What is the colour change observed when water is added?",
        options: ["Blue to white", "White to blue", "Blue to pink", "White to pink"],
        answerIndex: 1,
        explanation: "Anhydrous CuSO₄ is white. Water molecules are incorporated into the crystal lattice forming the hydrated salt CuSO₄·5H₂O, which is blue. 'Blue to white' describes the reverse (dehydration); 'blue to pink' describes cobalt(II) chloride paper.",
        guideRef: "Testing for Water and Its Purity",
        difficulty: "warmup",
      },
      {
        id: "chem-environment-mcq-q02",
        question: "A water sample boils at 101.3 °C at standard pressure. What can be concluded?",
        options: [
          "The sample is pure water",
          "The sample contains dissolved impurities",
          "The sample is below sea level",
          "The sample contains suspended particles only",
        ],
        answerIndex: 1,
        explanation: "Pure water boils at exactly 100 °C at standard pressure. Boiling point elevation is caused by dissolved solutes (a colligative property). Suspended particles do not raise the boiling point. The location relative to sea level would lower, not raise, the boiling point.",
        guideRef: "Testing for Water and Its Purity",
        difficulty: "core",
        hints: [
          "Recall the boiling point of pure water at standard pressure.",
          "Think about whether dissolved or suspended particles affect boiling point.",
        ],
      },
      {
        id: "chem-environment-mcq-q03",
        question: "Which gas makes up approximately 78% of clean dry air?",
        options: ["Oxygen", "Argon", "Nitrogen", "Carbon dioxide"],
        answerIndex: 2,
        explanation: "Nitrogen (N₂) is the dominant gas at ~78% by volume. Oxygen is ~21%, argon ~1%, and CO₂ ~0.04%.",
        guideRef: "Composition of Clean Dry Air",
        difficulty: "warmup",
      },
      {
        id: "chem-environment-mcq-q04",
        question: "Carbon monoxide is a toxic pollutant because it:",
        options: [
          "Reacts with rainwater to form carbonic acid",
          "Binds to haemoglobin, preventing oxygen transport",
          "Causes photochemical smog with sunlight",
          "Dissolves ozone in the upper atmosphere",
        ],
        answerIndex: 1,
        explanation: "CO has a very high affinity for haemoglobin, forming carboxyhaemoglobin irreversibly, so the red blood cells can no longer carry oxygen. CO₂ (not CO) forms carbonic acid in rain; NOₓ + hydrocarbons cause smog; CO is not involved in ozone depletion at IGCSE.",
        guideRef: "Air Pollutants: Sources and Adverse Effects",
        difficulty: "core",
        hints: [
          "CO is produced by incomplete combustion — where does oxygen transport happen in the body?",
          "Think about what carries oxygen in blood.",
        ],
      },
      {
        id: "chem-environment-mcq-q05",
        question: "Which of the following correctly describes the reaction occurring in a catalytic converter?",
        options: [
          "N₂ + O₂ → 2NO",
          "2CO + 2NO → 2CO₂ + N₂",
          "SO₂ + H₂O → H₂SO₃",
          "C + O₂ → CO₂",
        ],
        answerIndex: 1,
        explanation: "In a catalytic converter, CO and NO react on the platinum/rhodium surface: 2CO + 2NO → 2CO₂ + N₂. This converts two pollutants (CO and NOₓ) into harmless CO₂ and N₂. Option A is the source reaction forming NO in engines. Options C and D are unrelated.",
        guideRef: "Air Pollutants: Sources and Adverse Effects",
        difficulty: "core",
        hints: [
          "The converter reduces pollutants to harmless gases — what are the products of complete combustion and the main component of air?",
        ],
      },
      {
        id: "chem-environment-mcq-q06",
        question: "During eutrophication, the immediate cause of fish death is:",
        options: [
          "Direct toxicity of nitrate ions",
          "Increased water temperature",
          "Depletion of dissolved oxygen",
          "Increased acidity of the water",
        ],
        answerIndex: 2,
        explanation: "The sequence is: algal bloom → blocks light → submerged plants die → aerobic bacteria decompose dead matter → dissolved oxygen is consumed → fish and invertebrates suffocate. Nitrate ions are not directly toxic to fish at typical concentrations; temperature and acidity are not the primary mechanism in eutrophication.",
        guideRef: "Fertilisers and Eutrophication",
        difficulty: "core",
        hints: [
          "Trace the chain: fertiliser → algae → what happens when algae die?",
          "Aerobic decomposition consumes which gas dissolved in water?",
        ],
      },
    ],
    qa: [
      {
        id: "chem-environment-qa-q01",
        question: "A student suspects that a liquid is water but wants to confirm its presence and test whether it is pure. Describe TWO tests to confirm it is water, and ONE test to determine whether it is pure water. Include observations.",
        marks: 5,
        modelAnswer: "Test 1: Add a spatula of anhydrous copper(II) sulfate (white powder). If water is present, the powder turns blue as it forms hydrated CuSO₄·5H₂O. Test 2: Place a piece of cobalt(II) chloride paper in the liquid. If water is present, the paper changes from blue to pink. Purity test: Measure the boiling point of the liquid using a thermometer. If it boils at exactly 100 °C at standard atmospheric pressure, it is pure water. A boiling point above 100 °C indicates dissolved impurities are present.",
        markScheme: [
          "Test 1: anhydrous CuSO₄ / white to blue [1]",
          "Test 2: cobalt(II) chloride paper / blue to pink [1]",
          "Purity test: measure boiling point [1]",
          "Expected result for pure sample: boiling point = 100 °C (at standard pressure) [1]",
          "Interpretation: above 100 °C indicates impurities / dissolved solutes [1]",
        ],
        commonError: "Many students confuse the two water tests — saying CuSO₄ turns pink (it turns blue) or saying cobalt chloride turns blue when wet (it starts blue and turns pink). Also, students often say 'filter the water' as a purity test, which only removes suspended solids, not dissolved impurities.",
        guideRef: "Testing for Water and Its Purity",
        difficulty: "core",
        hints: [
          "Two tests: one uses a powder, one uses paper — recall the colour changes for each.",
          "Purity and presence are different things; a chemical test only tells you water is there.",
          "What physical property of pure water can be measured precisely to confirm purity?",
        ],
      },
      {
        id: "chem-environment-qa-q02",
        question: "Explain, using balanced equations where appropriate, how sulfur dioxide released from a coal-fired power station contributes to acid rain, and describe TWO damaging effects of acid rain.",
        marks: 6,
        modelAnswer: "Sulfur in coal burns to form sulfur dioxide: S + O₂ → SO₂. In the atmosphere, SO₂ is oxidised to SO₃: 2SO₂ + O₂ → 2SO₃. SO₃ dissolves in rain water to form sulfuric acid: SO₃ + H₂O → H₂SO₄. This acid rain has a pH below 5.6. Effect 1: Acid rain lowers the pH of lakes and rivers, killing fish and invertebrates because enzymes are denatured at low pH; aluminium ions (leached from soil) are also toxic to aquatic organisms. Effect 2: Acid rain dissolves limestone and marble buildings/statues because CaCO₃ reacts with H₂SO₄: CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂, eroding the structure.",
        markScheme: [
          "S + O₂ → SO₂ (balanced) [1]",
          "SO₂ oxidised to SO₃ in atmosphere (2SO₂ + O₂ → 2SO₃) OR SO₂ dissolves directly; forms H₂SO₄/H₂SO₃ in rain [1]",
          "Acid rain has pH below 5.6 / rain becomes acidic [1]",
          "Effect 1: harms aquatic ecosystems / kills fish (accept: low pH damages fish / aluminium ions toxic) [1]",
          "Effect 2: corrodes/dissolves limestone/marble buildings (accept: CaCO₃ + H₂SO₄ equation) [1]",
          "Any third distinct effect (e.g. forest damage by leaching minerals from soil) [1]",
        ],
        commonError: "Students often state SO₂ directly dissolves in water to form sulfuric acid. In reality, SO₂ forms the weaker H₂SO₃ (sulfurous acid) directly; atmospheric oxidation to SO₃ is needed for H₂SO₄. At IGCSE, either pathway is acceptable, but confusing the two oxides or acids loses marks.",
        guideRef: "Acid Rain: Formation and Effects",
        difficulty: "core",
        hints: [
          "Start with the combustion of sulfur — what gas is produced?",
          "What happens to this gas in the atmosphere? Write an equation for its oxidation.",
          "What acid forms when this oxide dissolves in rain? What pH does this create?",
          "Now think: what reacts with acid? Limestone buildings contain CaCO₃.",
        ],
        solutions: [
          {
            label: "Step-by-step equation approach",
            steps: [
              "Step 1: S + O₂ → SO₂ (sulfur burns in coal)",
              "Step 2: 2SO₂ + O₂ → 2SO₃ (oxidation in the atmosphere)",
              "Step 3: SO₃ + H₂O → H₂SO₄ (sulfuric acid in rain)",
              "Effect A: H₂SO₄(aq) + CaCO₃(s) → CaSO₄(s) + H₂O(l) + CO₂(g) — stone dissolves",
              "Effect B: low pH kills aquatic organisms / denatured enzymes in fish",
            ],
          },
        ],
      },
      {
        id: "chem-environment-qa-q03",
        question: "Explain the greenhouse effect and discuss how increasing concentrations of methane from agricultural sources contribute to climate change. Include in your answer a named strategy to reduce methane emissions and one predicted consequence of rising global temperatures. [6 marks]",
        marks: 6,
        modelAnswer: "The greenhouse effect: solar radiation (visible/UV) passes through the atmosphere and is absorbed by Earth's surface, warming it. Earth re-radiates energy as infrared (IR) radiation. Greenhouse gases such as methane (CH₄) and CO₂ absorb this outgoing IR and re-radiate it in all directions, including back towards Earth's surface. This raises the surface temperature above what it would be without these gases — this is the natural greenhouse effect. Agricultural sources of methane include enteric fermentation in cattle (digestive process producing CH₄), rice paddies (anaerobic decomposition of organic matter), and landfill sites. As the global cattle population and rice production increase, atmospheric CH₄ concentration rises. CH₄ is a more potent greenhouse gas than CO₂ per molecule, so even small increases significantly enhance the greenhouse effect, leading to climate change. Strategy: changing livestock diets (e.g. adding seaweed supplements to feed) has been shown to reduce CH₄ output from cattle by up to 80%. Alternatively, capturing landfill methane for use as fuel. Consequence: melting of polar ice caps and glaciers raises sea levels, threatening low-lying coastal areas and islands with flooding.",
        markScheme: [
          "Solar radiation (visible/UV) passes through atmosphere and warms surface [1]",
          "Surface re-emits infrared / longer wavelength radiation [1]",
          "Greenhouse gas (CH₄/CO₂) absorbs and re-radiates IR back to surface [1]",
          "Agricultural source of CH₄ named (cattle / rice paddies / landfill) [1]",
          "Named strategy to reduce CH₄ (dietary changes for livestock / landfill gas capture / reduced cattle farming) [1]",
          "Named consequence of rising temperatures (sea level rise / melting ice / extreme weather / ecosystem disruption) [1]",
        ],
        commonError: "A very common error is to say greenhouse gases 'trap heat like a blanket' without explaining the mechanism — this loses the marks about IR absorption. Another error is confusing the greenhouse effect (which is natural and necessary) with its enhancement (which is the problem). Claiming that ozone depletion causes global warming is also incorrect at IGCSE.",
        guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
        difficulty: "challenge",
        hints: [
          "The greenhouse effect has two parts: what comes IN from the Sun (short wavelength) and what tries to go OUT from Earth (infrared).",
          "What is special about greenhouse gas molecules that lets them absorb IR?",
          "Name a specific agricultural source of CH₄ and a specific strategy to reduce it.",
          "Climate change consequence: think about what melting ice does to ocean levels.",
        ],
        strategy: "Cause-and-effect chain; mechanism before implication",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      // ── MCQ PAPER 1 ── water tests, purity, treatment, air composition
      {
        id: "chem-environment-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Tests for water, purity, domestic water treatment, and air composition.",
        questions: [
          {
            id: "chem-environment-bm1-01",
            question: "What is observed when dry cobalt(II) chloride paper is exposed to water?",
            options: [
              "It turns from pink to blue",
              "It turns from blue to pink",
              "It turns from white to blue",
              "It turns from blue to white",
            ],
            answerIndex: 1,
            explanation: "Cobalt(II) chloride paper is blue when dry and turns pink when water is present (it forms the hydrated salt). White-to-blue describes anhydrous copper(II) sulfate, not cobalt chloride paper.",
            guideRef: "Testing for Water and Its Purity",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm1-02",
            question: "Which substance turns from white to blue when water is added to it?",
            options: [
              "Anhydrous copper(II) sulfate",
              "Cobalt(II) chloride paper",
              "Hydrated copper(II) sulfate",
              "Sodium chloride",
            ],
            answerIndex: 0,
            explanation: "Anhydrous (white) copper(II) sulfate turns blue as water is incorporated into the lattice: CuSO₄ + 5H₂O → CuSO₄·5H₂O. Cobalt(II) chloride paper changes blue→pink. Hydrated CuSO₄ is already blue, and sodium chloride does not change colour.",
            guideRef: "Testing for Water and Its Purity",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm1-03",
            question: "A liquid turns anhydrous copper(II) sulfate blue AND boils at 102 °C at standard pressure. What can be concluded?",
            options: [
              "It is pure water",
              "It contains water but is not pure",
              "It contains no water",
              "It is pure ethanol",
            ],
            answerIndex: 1,
            explanation: "The colour change confirms water is present, but pure water boils at exactly 100 °C at standard pressure. A boiling point of 102 °C shows dissolved impurities have raised the boiling point, so the sample is impure (e.g. salt water).",
            guideRef: "Testing for Water and Its Purity",
            difficulty: "challenge",
            hints: [
              "The colour change tells you one thing; the boiling point tells you another.",
              "What is the exact boiling point of pure water at standard pressure?",
              "Dissolved solutes raise the boiling point above 100 °C.",
            ],
          },
          {
            id: "chem-environment-bm1-04",
            question: "Which property would prove that a water sample is PURE?",
            options: [
              "It turns cobalt chloride paper pink",
              "It is colourless and transparent",
              "It melts at exactly 0 °C and boils at exactly 100 °C at standard pressure",
              "It conducts no electricity",
            ],
            answerIndex: 2,
            explanation: "Pure water has fixed, sharp physical constants: melting point 0 °C and boiling point 100 °C at standard pressure. Turning cobalt chloride paper pink only proves water is present, not pure. Being colourless or a non-conductor does not prove purity (salt solutions can be colourless).",
            guideRef: "Testing for Water and Its Purity",
            difficulty: "core",
            hints: [
              "Confirming water is present is not the same as confirming it is pure.",
              "Impurities change melting and boiling points.",
              "A pure substance has fixed, reproducible physical properties.",
            ],
          },
          {
            id: "chem-environment-bm1-05",
            question: "What is the purpose of the chlorination stage in treating domestic water?",
            options: [
              "To remove suspended solids",
              "To kill harmful bacteria and other pathogens",
              "To soften the water by removing calcium ions",
              "To add fluoride for dental health",
            ],
            answerIndex: 1,
            explanation: "Chlorine is a powerful oxidising agent added to kill harmful microorganisms (sterilisation). Suspended solids are removed earlier by filtration through sand and gravel. Chlorination does not soften water or add fluoride.",
            guideRef: "Treatment of the Domestic Water Supply",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm1-06",
            question: "Filtration through sand and gravel beds during water treatment:",
            options: [
              "Kills all bacteria in the water",
              "Removes dissolved salts from the water",
              "Removes suspended solids and some microorganisms but does not kill bacteria",
              "Adds oxygen to the water",
            ],
            answerIndex: 2,
            explanation: "Filtration physically removes particles and larger microorganisms too big to pass through the beds, but it does not kill bacteria — that is the job of chlorination. It also cannot remove dissolved salts (filtration only separates undissolved solids).",
            guideRef: "Treatment of the Domestic Water Supply",
            difficulty: "core",
            hints: [
              "Filtration is a physical separation of solids.",
              "Can filtration remove particles that are dissolved?",
              "Which separate stage actually destroys pathogens?",
            ],
          },
          {
            id: "chem-environment-bm1-07",
            question: "Which gas makes up approximately 21% of clean dry air by volume?",
            options: ["Nitrogen", "Carbon dioxide", "Argon", "Oxygen"],
            answerIndex: 3,
            explanation: "Oxygen is about 21% of clean dry air. Nitrogen is the most abundant at ~78%, argon (and other noble gases) about 1%, and carbon dioxide only ~0.04%.",
            guideRef: "Composition of Clean Dry Air",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm1-08",
            question: "Approximately what percentage of clean dry air is argon and the other noble gases?",
            options: ["About 21%", "About 1%", "About 0.04%", "About 10%"],
            answerIndex: 1,
            explanation: "Argon, together with the other noble gases, makes up about 1% of clean dry air. Oxygen is ~21%, while carbon dioxide is only ~0.04%.",
            guideRef: "Composition of Clean Dry Air",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm1-09",
            question: "Clean dry air contains about 0.04% carbon dioxide, yet CO₂ is described as crucial. Which statement best explains why?",
            options: [
              "It is the most abundant gas in the atmosphere",
              "It is the gas that supports combustion",
              "It is a greenhouse gas and the raw material for photosynthesis",
              "It is completely unreactive, like the noble gases",
            ],
            answerIndex: 2,
            explanation: "Despite its low concentration, CO₂ absorbs infrared radiation (greenhouse gas) and is the carbon source plants use in photosynthesis. Nitrogen is the most abundant gas; oxygen supports combustion; CO₂ is not inert.",
            guideRef: "Composition of Clean Dry Air",
            difficulty: "core",
            hints: [
              "Think about two roles CO₂ plays in the environment.",
              "One role involves trapping heat; the other involves plants.",
              "Concentration is low, but its effects are large.",
            ],
          },
          {
            id: "chem-environment-bm1-10",
            question: "A sample of clean dry air is passed slowly over heated copper until no further change occurs. Copper reacts with oxygen only. Approximately what fraction of the original volume remains as gas?",
            options: ["About 21%", "About 50%", "About 79%", "About 99%"],
            answerIndex: 2,
            explanation: "Heated copper removes the oxygen (2Cu + O₂ → 2CuO), about 21% of the air. The remaining gas is mostly nitrogen plus argon and CO₂, which together make up about 79% of the original volume, so roughly 79% remains.",
            guideRef: "Composition of Clean Dry Air",
            difficulty: "challenge",
            hints: [
              "Copper only removes one gas — which one?",
              "What percentage of air is oxygen?",
              "Everything except oxygen stays behind: 100% − 21%.",
            ],
            strategy: "Remove the reacting component, then subtract its percentage from 100%.",
          },
        ],
      },
      // ── MCQ PAPER 2 ── air pollutants, sources and effects, catalytic converters
      {
        id: "chem-environment-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Air pollutants — carbon monoxide, sulfur dioxide, oxides of nitrogen, particulates — and their control.",
        questions: [
          {
            id: "chem-environment-bm2-01",
            question: "Carbon monoxide is formed during:",
            options: [
              "Complete combustion of carbon fuels",
              "Incomplete combustion of carbon-containing fuels",
              "The reaction of nitrogen with oxygen",
              "The burning of sulfur impurities",
            ],
            answerIndex: 1,
            explanation: "Carbon monoxide (CO) forms when there is insufficient oxygen for complete combustion: 2C + O₂ → 2CO. Complete combustion gives CO₂. Nitrogen + oxygen gives oxides of nitrogen; sulfur impurities give SO₂.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm2-02",
            question: "Why is carbon monoxide toxic to humans?",
            options: [
              "It dissolves in water to form an acid in the lungs",
              "It binds to haemoglobin, reducing the blood's ability to carry oxygen",
              "It reacts violently with stomach acid",
              "It blocks the windpipe physically",
            ],
            answerIndex: 1,
            explanation: "CO binds strongly (irreversibly) to haemoglobin forming carboxyhaemoglobin, so red blood cells can no longer carry oxygen around the body. It is colourless and odourless, making it especially dangerous.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "core",
            hints: [
              "Where is oxygen carried in the body?",
              "Which molecule in red blood cells normally binds oxygen?",
              "CO competes with oxygen for that molecule.",
            ],
          },
          {
            id: "chem-environment-bm2-03",
            question: "Sulfur dioxide in the atmosphere mainly comes from:",
            options: [
              "High-temperature reaction of nitrogen and oxygen in engines",
              "Incomplete combustion of carbon",
              "Combustion of fossil fuels that contain sulfur impurities",
              "Decomposition of organic matter in landfill",
            ],
            answerIndex: 2,
            explanation: "Many fossil fuels (especially coal and oil) contain sulfur impurities. When burned, the sulfur reacts: S + O₂ → SO₂. Nitrogen + oxygen gives NOₓ; landfill decomposition gives methane.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm2-04",
            question: "Which equation represents the formation of an oxide of nitrogen inside a hot car engine?",
            options: [
              "N₂ + O₂ → 2NO",
              "S + O₂ → SO₂",
              "2C + O₂ → 2CO",
              "C + O₂ → CO₂",
            ],
            answerIndex: 0,
            explanation: "At the very high temperatures inside engines, atmospheric nitrogen and oxygen combine: N₂ + O₂ → 2NO. The other equations show SO₂ formation, incomplete combustion (CO), and complete combustion (CO₂) respectively.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "core",
            hints: [
              "Which two gases are abundant in the air drawn into an engine?",
              "High temperature lets these two unreactive gases combine.",
              "The product is an oxide of nitrogen, NO.",
            ],
          },
          {
            id: "chem-environment-bm2-05",
            question: "Particulates (PM) released from diesel engines are harmful mainly because they:",
            options: [
              "React with water to form acid rain",
              "Bind to haemoglobin in the blood",
              "Penetrate deep into the lungs, causing respiratory and heart disease",
              "Deplete the ozone layer",
            ],
            answerIndex: 2,
            explanation: "Fine particulates (e.g. PM2.5, mostly soot/carbon) lodge deep in the lungs, causing respiratory and cardiovascular disease, and can carry toxic compounds. They are not acids, do not bind haemoglobin (that is CO), and are not linked to ozone depletion at IGCSE.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm2-06",
            question: "Which equation correctly represents the reaction taking place in a catalytic converter?",
            options: [
              "2CO + O₂ → 2CO₂",
              "2CO + 2NO → 2CO₂ + N₂",
              "N₂ + O₂ → 2NO",
              "CO + NO → CO₂ + N",
            ],
            answerIndex: 1,
            explanation: "A catalytic converter converts two pollutants at once: 2CO + 2NO → 2CO₂ + N₂. This is balanced (2 C, 2 N, 4 O on each side). Option D is not balanced (single N atom is impossible here), and option C is the engine reaction that produces NO.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "core",
            hints: [
              "A converter removes two pollutants together — which two?",
              "The products should be harmless: CO₂ and N₂.",
              "Check the equation balances for C, N and O.",
            ],
          },
          {
            id: "chem-environment-bm2-07",
            question: "Which metals are commonly used as the catalyst in a catalytic converter?",
            options: [
              "Iron and zinc",
              "Copper and aluminium",
              "Platinum and rhodium",
              "Sodium and calcium",
            ],
            answerIndex: 2,
            explanation: "Catalytic converters use precious-metal catalysts, typically platinum and rhodium (and palladium), which provide a surface that speeds up the conversion of CO and NOₓ to CO₂ and N₂.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm2-08",
            question: "A power station fits flue-gas desulfurisation (FGD). Which pollutant is this designed to remove?",
            options: [
              "Carbon monoxide",
              "Sulfur dioxide",
              "Oxides of nitrogen",
              "Carbon dioxide",
            ],
            answerIndex: 1,
            explanation: "Flue-gas desulfurisation removes sulfur dioxide (SO₂) from waste gases, often by reacting it with calcium oxide or calcium carbonate. This reduces acid rain. It does not target CO, NOₓ or CO₂.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "core",
            hints: [
              "The word 'desulfurisation' is a strong clue.",
              "It removes a sulfur-containing gas.",
              "That gas is a major cause of acid rain.",
            ],
          },
          {
            id: "chem-environment-bm2-09",
            question: "In flue-gas desulfurisation, calcium oxide reacts with sulfur dioxide. Which is the correct equation?",
            options: [
              "CaO + SO₂ → CaSO₃",
              "CaO + 2SO₂ → CaSO₄",
              "CaCO₃ + SO₂ → CaSO₃ + CO",
              "Ca + SO₂ → CaS + O₂",
            ],
            answerIndex: 0,
            explanation: "Basic calcium oxide neutralises acidic sulfur dioxide: CaO + SO₂ → CaSO₃ (calcium sulfite). The atoms balance (1 Ca, 1 S, 3 O each side). The other options are not balanced or give incorrect products.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "challenge",
            hints: [
              "Calcium oxide is a base; SO₂ is acidic.",
              "A base + acidic oxide gives a salt.",
              "Balance Ca, S and O: one CaO and one SO₂ combine.",
            ],
            strategy: "Treat the acidic oxide + basic oxide reaction like an acid–base combination, then balance atoms.",
          },
          {
            id: "chem-environment-bm2-10",
            question: "A city replaces all petrol/diesel cars with electric vehicles but keeps its coal-fired power stations. Which pollutant is LEAST likely to fall significantly?",
            options: [
              "Carbon monoxide from exhausts",
              "Oxides of nitrogen from engines",
              "Sulfur dioxide from coal combustion",
              "Particulates from diesel engines",
            ],
            answerIndex: 2,
            explanation: "CO, NOₓ and particulates come largely from vehicle engines, so removing those vehicles cuts them sharply. SO₂ comes from sulfur in coal, which is still burned in the power stations, so SO₂ would remain high.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "challenge",
            hints: [
              "Separate which pollutants come from cars and which from coal.",
              "Removing cars removes the car-related pollutants.",
              "Which pollutant is tied to burning sulfur-containing coal?",
            ],
            strategy: "Match each pollutant to its source, then see which source is unchanged.",
          },
        ],
      },
      // ── MCQ PAPER 3 ── acid rain, greenhouse effect, climate change
      {
        id: "chem-environment-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Acid rain formation and effects, the greenhouse effect, and climate change.",
        questions: [
          {
            id: "chem-environment-bm3-01",
            question: "Which two gases are the main causes of acid rain?",
            options: [
              "Carbon dioxide and methane",
              "Sulfur dioxide and oxides of nitrogen",
              "Carbon monoxide and argon",
              "Oxygen and nitrogen",
            ],
            answerIndex: 1,
            explanation: "Sulfur dioxide (→ sulfuric acid) and oxides of nitrogen (→ nitric acid) dissolve and oxidise in rain to make it strongly acidic. CO₂ and CH₄ are greenhouse gases; CO is toxic but is not the main acid-rain culprit.",
            guideRef: "Acid Rain: Formation and Effects",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm3-02",
            question: "Which acid is formed when sulfur trioxide dissolves in rainwater?",
            options: ["Sulfurous acid, H₂SO₃", "Sulfuric acid, H₂SO₄", "Nitric acid, HNO₃", "Carbonic acid, H₂CO₃"],
            answerIndex: 1,
            explanation: "SO₃ + H₂O → H₂SO₄, sulfuric acid. (SO₂ dissolving directly gives the weaker sulfurous acid, H₂SO₃.) Nitric acid comes from oxides of nitrogen; carbonic acid comes from CO₂.",
            guideRef: "Acid Rain: Formation and Effects",
            difficulty: "core",
            hints: [
              "Count the oxygen: SO₃ has three oxygens.",
              "Adding water gives an acid with formula H₂SO₄.",
              "That is sulfuric (not sulfurous) acid.",
            ],
          },
          {
            id: "chem-environment-bm3-03",
            question: "Acid rain damages limestone buildings. Which products form when sulfuric acid reacts with calcium carbonate?",
            options: [
              "Calcium sulfate, water and carbon dioxide",
              "Calcium oxide and sulfur dioxide",
              "Calcium hydroxide and carbon monoxide",
              "Calcium sulfide and oxygen",
            ],
            answerIndex: 0,
            explanation: "CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂. The acid reacts with the carbonate to give a salt (calcium sulfate), water and carbon dioxide, dissolving the stone.",
            guideRef: "Acid Rain: Formation and Effects",
            difficulty: "core",
            hints: [
              "Acid + carbonate → salt + water + carbon dioxide.",
              "The salt is named from the acid: sulfuric acid gives a sulfate.",
              "So the products are calcium sulfate, water and CO₂.",
            ],
          },
          {
            id: "chem-environment-bm3-04",
            question: "Which method would reduce acid rain caused by SO₂ from power stations?",
            options: [
              "Fitting catalytic converters to chimneys",
              "Using flue-gas desulfurisation or low-sulfur fuels",
              "Adding more nitrogen to the fuel",
              "Increasing the combustion temperature",
            ],
            answerIndex: 1,
            explanation: "SO₂ acid rain is reduced by removing sulfur before or after combustion — using low-sulfur fuels or flue-gas desulfurisation. Catalytic converters target vehicle CO/NOₓ; raising combustion temperature would increase NOₓ.",
            guideRef: "Acid Rain: Formation and Effects",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm3-05",
            question: "In the greenhouse effect, which type of radiation is absorbed by greenhouse gases?",
            options: [
              "Ultraviolet radiation from the Sun",
              "Visible light reflected from clouds",
              "Infrared radiation emitted by the Earth's surface",
              "Radio waves from space",
            ],
            answerIndex: 2,
            explanation: "Short-wavelength solar radiation warms the surface, which re-emits energy as longer-wavelength infrared (IR). Greenhouse gases absorb this outgoing IR and re-radiate it, including back to the surface, warming the planet.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "core",
            hints: [
              "Sunlight comes in as short wavelength; what leaves the warm Earth?",
              "The Earth re-emits energy as heat radiation.",
              "Greenhouse gases trap the outgoing infrared.",
            ],
          },
          {
            id: "chem-environment-bm3-06",
            question: "Which pair of gases are the main greenhouse gases studied at IGCSE?",
            options: [
              "Carbon dioxide and methane",
              "Nitrogen and oxygen",
              "Sulfur dioxide and carbon monoxide",
              "Argon and helium",
            ],
            answerIndex: 0,
            explanation: "Carbon dioxide (CO₂) and methane (CH₄) are the two greenhouse gases required at IGCSE. N₂, O₂, Ar and He cannot absorb infrared effectively; SO₂ and CO are pollutants but not the key greenhouse gases studied.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm3-07",
            question: "Which activity increases atmospheric CO₂ by BOTH releasing it and reducing how much is removed?",
            options: [
              "Burning natural gas in homes",
              "Deforestation (cutting and burning forests)",
              "Driving electric cars",
              "Capturing methane from landfill",
            ],
            answerIndex: 1,
            explanation: "Deforestation releases CO₂ when trees are burned AND removes the trees that would have absorbed CO₂ by photosynthesis — a double effect. Burning gas only adds CO₂; electric cars and landfill methane capture reduce emissions.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "core",
            hints: [
              "Think of an activity with two separate effects on CO₂.",
              "Trees both store carbon and remove CO₂ from the air.",
              "What happens to both effects when forests are cleared and burned?",
            ],
          },
          {
            id: "chem-environment-bm3-08",
            question: "A major agricultural source of methane is:",
            options: [
              "Photosynthesis in crops",
              "Digestion (enteric fermentation) in cattle and flooded rice paddies",
              "Burning of coal in power stations",
              "Chlorination of water supplies",
            ],
            answerIndex: 1,
            explanation: "Methane is released by anaerobic decomposition — in the digestive systems of cattle and in flooded rice paddies (and landfill). Photosynthesis removes CO₂; coal burning releases CO₂/SO₂; chlorination is a water-treatment step.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm3-09",
            question: "Why are nitrogen (N₂) and oxygen (O₂) NOT greenhouse gases even though they make up most of the air?",
            options: [
              "They are too light to stay in the atmosphere",
              "Their molecules do not absorb infrared radiation effectively",
              "They are completely unreactive noble gases",
              "They are present only in trace amounts",
            ],
            answerIndex: 1,
            explanation: "N₂ and O₂ are symmetrical diatomic molecules whose vibrations do not absorb infrared radiation, so they cannot trap outgoing IR. CO₂ and CH₄ have IR-active vibrations and so are greenhouse gases. (N₂ and O₂ are abundant, not trace, and are not noble gases.)",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "challenge",
            hints: [
              "Being a greenhouse gas is about absorbing infrared.",
              "Symmetrical diatomic molecules do not absorb IR well.",
              "It is not about abundance — N₂ and O₂ are very abundant.",
            ],
            strategy: "Link greenhouse behaviour to a molecular property (IR absorption), not to abundance.",
          },
          {
            id: "chem-environment-bm3-10",
            question: "Which set of strategies would BEST reduce the enhanced greenhouse effect?",
            options: [
              "More coal power stations and more deforestation",
              "Renewable energy, reforestation and carbon capture and storage",
              "Burning more fossil fuels but adding catalytic converters",
              "Increasing cattle farming and rice production",
            ],
            answerIndex: 1,
            explanation: "Renewable energy avoids combustion CO₂, reforestation absorbs CO₂, and carbon capture and storage traps CO₂ before release. The other options increase CO₂ or CH₄. Catalytic converters reduce CO/NOₓ but not CO₂.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "challenge",
            hints: [
              "You want to release less CO₂ and remove more from the air.",
              "Which option avoids combustion and also absorbs CO₂?",
              "Catalytic converters do not reduce CO₂ output.",
            ],
            strategy: "Pick the option that both reduces emissions and increases CO₂ removal.",
          },
        ],
      },
      // ── MCQ PAPER 4 ── rusting, eutrophication, carbon cycle, mixed synthesis
      {
        id: "chem-environment-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Rusting and its prevention, eutrophication, the carbon cycle, and mixed synthesis.",
        questions: [
          {
            id: "chem-environment-bm4-01",
            question: "Which TWO substances are both needed for iron to rust?",
            options: [
              "Carbon dioxide and water",
              "Oxygen and water",
              "Nitrogen and oxygen",
              "Oxygen and salt only",
            ],
            answerIndex: 1,
            explanation: "Rusting of iron requires both oxygen (from the air) and water. Removing either one prevents rusting. Salt is not required, but dissolved salt speeds rusting up.",
            guideRef: "Treatment of the Domestic Water Supply",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm4-02",
            question: "In an experiment, an iron nail is placed in a sealed tube with water that has been boiled (to remove dissolved air) and covered with oil. After several days the nail does NOT rust. This shows that:",
            options: [
              "Water alone causes rusting",
              "Oxygen alone causes rusting",
              "Oxygen (dissolved air) is needed for rusting, as well as water",
              "Oil reacts with the iron to protect it",
            ],
            answerIndex: 2,
            explanation: "Boiling removes dissolved oxygen and the oil layer stops air re-dissolving. With water present but oxygen absent, the nail does not rust — showing oxygen is required in addition to water. The oil is a physical barrier, not a reactant.",
            guideRef: "Treatment of the Domestic Water Supply",
            difficulty: "core",
            hints: [
              "What does boiling the water remove?",
              "What does the oil layer prevent from entering?",
              "Water is present but the nail still does not rust — so what must be missing?",
            ],
          },
          {
            id: "chem-environment-bm4-03",
            question: "Galvanising protects iron from rusting by:",
            options: [
              "Coating it with a layer of zinc",
              "Coating it with a layer of carbon",
              "Painting it with a waterproof oil",
              "Adding chromium to make stainless steel",
            ],
            answerIndex: 0,
            explanation: "Galvanising coats iron with zinc. The zinc acts as a barrier and, because it is more reactive than iron, also provides sacrificial protection (it corrodes in preference to the iron). Painting and alloying are different methods.",
            guideRef: "Treatment of the Domestic Water Supply",
            difficulty: "core",
            hints: [
              "Galvanising involves a specific metal coating.",
              "The metal is more reactive than iron.",
              "It begins with the letter Z.",
            ],
          },
          {
            id: "chem-environment-bm4-04",
            question: "Blocks of zinc are bolted to the steel hull of a ship. This is an example of:",
            options: [
              "Barrier protection by painting",
              "Sacrificial protection",
              "Electroplating with a less reactive metal",
              "Galvanising the whole ship",
            ],
            answerIndex: 1,
            explanation: "Zinc is more reactive than iron, so it corrodes (is oxidised) in preference to the steel — sacrificial protection. The zinc blocks are replaced periodically. There is no paint barrier and the metal is more (not less) reactive.",
            guideRef: "Treatment of the Domestic Water Supply",
            difficulty: "core",
            hints: [
              "The zinc is deliberately allowed to corrode first.",
              "It is more reactive than iron, so it is oxidised instead.",
              "This 'sacrifices' the zinc to save the iron.",
            ],
          },
          {
            id: "chem-environment-bm4-05",
            question: "Which method protects iron by forming a simple physical BARRIER only (with no sacrificial action)?",
            options: [
              "Attaching magnesium blocks",
              "Galvanising with zinc",
              "Painting with gloss paint",
              "Connecting to a more reactive metal",
            ],
            answerIndex: 2,
            explanation: "Painting (or greasing/plastic coating) keeps out oxygen and water as a barrier, but offers no protection if the layer is scratched. Magnesium and zinc give sacrificial protection because they are more reactive than iron.",
            guideRef: "Treatment of the Domestic Water Supply",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm4-06",
            question: "Eutrophication of a river often begins when:",
            options: [
              "Chlorine is added to the water",
              "Excess nitrate and phosphate from fertilisers run off into the water",
              "Sulfur dioxide dissolves in the water",
              "The water is filtered through sand",
            ],
            answerIndex: 1,
            explanation: "Excess nitrate/phosphate from fertilisers (run-off or leaching) enriches the water, triggering algal blooms. SO₂ causes acid rain; chlorination and sand filtration are water-treatment steps, not causes of eutrophication.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm4-07",
            question: "During eutrophication, what is the IMMEDIATE cause of fish dying?",
            options: [
              "Nitrate ions are directly poisonous to fish",
              "Dissolved oxygen is used up by bacteria decomposing dead algae",
              "The water becomes too acidic",
              "The water temperature rises sharply",
            ],
            answerIndex: 1,
            explanation: "Algal blooms block light, plants die, and aerobic bacteria decompose the dead matter, consuming dissolved oxygen. Fish then suffocate from lack of oxygen. Nitrate is not directly toxic at these levels; acidity and temperature are not the mechanism.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "core",
            hints: [
              "Trace the chain from algal bloom to fish death.",
              "Bacteria decomposing dead algae use up something dissolved in the water.",
              "Fish need that dissolved gas to respire.",
            ],
          },
          {
            id: "chem-environment-bm4-08",
            question: "In the carbon cycle, which process REMOVES carbon dioxide from the atmosphere?",
            options: [
              "Combustion of fossil fuels",
              "Respiration by animals",
              "Photosynthesis by plants",
              "Decomposition of dead organisms",
            ],
            answerIndex: 2,
            explanation: "Photosynthesis takes in CO₂: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Combustion, respiration and decomposition all RELEASE CO₂ back into the atmosphere.",
            guideRef: "Composition of Clean Dry Air",
            difficulty: "core",
            hints: [
              "Which process uses CO₂ as a raw material?",
              "Plants take in CO₂ to build glucose.",
              "Combustion, respiration and decomposition all release CO₂.",
            ],
          },
          {
            id: "chem-environment-bm4-09",
            question: "Which combination correctly matches a pollutant to its main effect?",
            options: [
              "Carbon monoxide → acid rain",
              "Sulfur dioxide → carboxyhaemoglobin in blood",
              "Oxides of nitrogen → acid rain and photochemical smog",
              "Carbon dioxide → blocks oxygen transport in blood",
            ],
            answerIndex: 2,
            explanation: "Oxides of nitrogen cause both acid rain (forming nitric acid) and photochemical smog. CO causes carboxyhaemoglobin (not acid rain); SO₂ causes acid rain (not haemoglobin binding); CO₂ is a greenhouse gas, not a blood poison.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "challenge",
            hints: [
              "Work through each pairing and reject the mismatches.",
              "CO binds haemoglobin; SO₂ and NOₓ cause acid rain.",
              "Which single pollutant causes both acid rain and smog?",
            ],
            strategy: "Eliminate each wrong source–effect pairing until one correct match remains.",
          },
          {
            id: "chem-environment-bm4-10",
            question: "Complete combustion of a hydrocarbon fuel produces carbon dioxide and water, but incomplete combustion produces extra products. Which set lists products possible ONLY from incomplete combustion?",
            options: [
              "Carbon dioxide and water",
              "Carbon monoxide and carbon (soot) particulates",
              "Sulfur dioxide and nitric acid",
              "Oxygen and nitrogen",
            ],
            answerIndex: 1,
            explanation: "Incomplete combustion, with too little oxygen, produces carbon monoxide and unburnt carbon (soot/particulates) in addition to (or instead of) CO₂ and water. SO₂/NOₓ come from impurities or air at high temperature, not from incomplete combustion of a pure hydrocarbon.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "challenge",
            hints: [
              "Incomplete combustion happens with too little oxygen.",
              "Carbon is not fully oxidised — what carbon products form?",
              "Think CO and soot, not sulfur or nitrogen products.",
            ],
            strategy: "Focus on what happens to carbon when oxygen is limited.",
          },
        ],
      },
    ],
    qaPapers: [
      // ── QA PAPER 1 ── water tests, purity, treatment, air composition
      {
        id: "chem-environment-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Tests for water, purity, domestic water treatment, and the composition of clean dry air.",
        questions: [
          {
            id: "chem-environment-bq1-01",
            question: "State the colour change seen in each test for water: (a) anhydrous copper(II) sulfate, and (b) cobalt(II) chloride paper.",
            marks: 2,
            modelAnswer: "(a) Anhydrous copper(II) sulfate turns from white to blue. (b) Cobalt(II) chloride paper turns from blue to pink.",
            markScheme: [
              "(a) white to blue [1]",
              "(b) blue to pink [1]",
            ],
            commonError: "Mixing up the two tests, e.g. saying copper(II) sulfate turns pink or that cobalt chloride paper turns blue when wet.",
            guideRef: "Testing for Water and Its Purity",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bq1-02",
            question: "A student confirms that a liquid contains water using anhydrous copper(II) sulfate. Explain why this does NOT prove that the liquid is pure water, and describe a test that would.",
            marks: 4,
            modelAnswer: "The copper(II) sulfate test only shows that water is present; it gives the same blue colour whether the water is pure or contains dissolved substances. To test purity, measure the boiling point at standard pressure: pure water boils at exactly 100 °C. A boiling point above 100 °C (or a melting point below 0 °C) shows dissolved impurities are present.",
            markScheme: [
              "Test only shows water is present / not whether it is pure [1]",
              "Measure boiling point (or melting point) [1]",
              "Pure water boils at exactly 100 °C / melts at 0 °C (at standard pressure) [1]",
              "Boiling point above 100 °C / melting point below 0 °C indicates impurity [1]",
            ],
            commonError: "Suggesting 'filter the water' as a purity test — filtration only removes suspended solids, not dissolved impurities.",
            guideRef: "Testing for Water and Its Purity",
            difficulty: "core",
            hints: [
              "Distinguish 'is water present?' from 'is it pure?'",
              "Which fixed physical properties does pure water have?",
              "How do dissolved solutes change those values?",
            ],
          },
          {
            id: "chem-environment-bq1-03",
            question: "Describe the two main stages used to make reservoir water safe to drink, and state the purpose of each stage.",
            marks: 4,
            modelAnswer: "Stage 1 — Filtration: the water is passed through beds of sand and gravel to remove suspended solids and larger microorganisms. Stage 2 — Chlorination: a controlled amount of chlorine is added to kill harmful bacteria and other pathogens (chlorine is an oxidising agent). Together these stages make the water potable (safe to drink).",
            markScheme: [
              "Filtration / passing through sand and gravel [1]",
              "Filtration removes suspended solids / undissolved particles [1]",
              "Chlorination / adding chlorine [1]",
              "Chlorination kills bacteria / pathogens / sterilises [1]",
            ],
            commonError: "Saying filtration 'kills bacteria' — it only removes particles. Killing pathogens is done by chlorination.",
            guideRef: "Treatment of the Domestic Water Supply",
            difficulty: "core",
            hints: [
              "There are two stages — one physical, one chemical.",
              "What removes the solid bits?",
              "What destroys the microorganisms?",
            ],
          },
          {
            id: "chem-environment-bq1-04",
            question: "Distillation produces extremely pure water. Suggest why distillation is NOT used to treat large domestic water supplies.",
            marks: 2,
            modelAnswer: "Distillation requires boiling large volumes of water, which uses a very large amount of energy and is therefore far too expensive and slow for the scale of a domestic supply. Filtration plus chlorination is much cheaper and fast enough to be practical.",
            markScheme: [
              "Distillation uses a lot of energy / is expensive [1]",
              "Impractical for the large scale / volume required [1]",
            ],
            commonError: "Claiming distillation does not remove bacteria — it does; the real issue is the energy cost and scale.",
            guideRef: "Treatment of the Domestic Water Supply",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bq1-05",
            question: "State the approximate percentage by volume of (a) nitrogen, (b) oxygen, and (c) argon and other noble gases in clean dry air. Name the gas present at about 0.04%.",
            marks: 4,
            modelAnswer: "(a) Nitrogen ≈ 78%. (b) Oxygen ≈ 21%. (c) Argon and the other noble gases ≈ 1%. The gas present at about 0.04% is carbon dioxide.",
            markScheme: [
              "Nitrogen about 78% [1]",
              "Oxygen about 21% [1]",
              "Argon/noble gases about 1% [1]",
              "0.04% gas is carbon dioxide [1]",
            ],
            commonError: "Quoting CO₂ as 0.4% or 4% instead of about 0.04%, or swapping the N₂ and O₂ figures.",
            guideRef: "Composition of Clean Dry Air",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bq1-06",
            question: "Explain the difference between 'clean dry air' and the air we actually breathe, and explain why nitrogen is so unreactive.",
            marks: 4,
            modelAnswer: "Clean dry air has had its water vapour removed, so it contains a fixed mixture of about 78% N₂, 21% O₂, 1% noble gases and 0.04% CO₂. The air we breathe also contains a variable amount of water vapour, and in polluted areas additional gases such as CO, SO₂ and NOₓ. Nitrogen is unreactive because the two nitrogen atoms are joined by a very strong triple bond (N≡N), which needs a large amount of energy to break, so reactions of nitrogen are very slow except at very high temperatures.",
            markScheme: [
              "Clean dry air has water vapour removed / breathed air contains water vapour [1]",
              "Real air may contain pollutant gases (CO/SO₂/NOₓ) / variable composition [1]",
              "Nitrogen has a strong triple bond (N≡N) [1]",
              "Large energy needed to break the bond, so N₂ reacts only at high temperature [1]",
            ],
            commonError: "Saying nitrogen is unreactive 'because it is a noble gas' — nitrogen is not a noble gas; its inertness is due to the strong triple bond.",
            guideRef: "Composition of Clean Dry Air",
            difficulty: "challenge",
            hints: [
              "What is removed to make air 'dry'? What is added in real, polluted air?",
              "Nitrogen exists as N₂ molecules — what holds the atoms together?",
              "A triple bond is hard to break, so reactions are slow.",
            ],
          },
          {
            id: "chem-environment-bq1-07",
            question: "Anhydrous copper(II) sulfate reacts with water to form the hydrated salt. Write a balanced equation including state symbols, and state what would be seen if the hydrated salt is then heated strongly.",
            marks: 4,
            modelAnswer: "CuSO₄(s) + 5H₂O(l) → CuSO₄·5H₂O(s). When the blue hydrated salt is heated strongly, the water is driven off and the solid turns back from blue to white (and water vapour/condensation is seen). The reaction is reversible.",
            markScheme: [
              "Correct formulae CuSO₄ and CuSO₄·5H₂O (and H₂O) [1]",
              "Balanced with 5H₂O [1]",
              "Correct state symbols (s, l, s) [1]",
              "On heating: blue to white / water driven off (reversible) [1]",
            ],
            commonError: "Forgetting the 5 waters of crystallisation, or stating the change is irreversible.",
            guideRef: "Testing for Water and Its Purity",
            difficulty: "core",
            hints: [
              "The hydrated salt has five waters of crystallisation.",
              "Balance the hydrogen and oxygen using 5H₂O.",
              "Heating reverses the change — colour goes back the other way.",
            ],
          },
          {
            id: "chem-environment-bq1-08",
            question: "A 'pure' bottled water is found to boil at 100.5 °C at standard atmospheric pressure. Explain what this result reveals, and what it implies about the labelling.",
            marks: 3,
            modelAnswer: "Pure water boils at exactly 100 °C at standard pressure. A boiling point of 100.5 °C is above this, showing that dissolved solutes (e.g. mineral salts) are present, which raise the boiling point. Therefore the water is not chemically pure — the 'pure' label refers to it being safe/clean to drink, not to it being a single pure substance.",
            markScheme: [
              "Pure water boils at exactly 100 °C (standard pressure) [1]",
              "Higher boiling point shows dissolved impurities/solutes present [1]",
              "So not chemically pure / 'pure' means safe to drink not single substance [1]",
            ],
            commonError: "Assuming any drinkable water must be chemically pure — dissolved minerals are common and raise the boiling point.",
            guideRef: "Testing for Water and Its Purity",
            difficulty: "core",
            hints: [
              "Compare the value to the boiling point of pure water.",
              "What raises the boiling point above 100 °C?",
              "Consider what 'pure' means on a food label versus in chemistry.",
            ],
          },
          {
            id: "chem-environment-bq1-09",
            question: "Chlorine added during water treatment must be carefully controlled. Explain why too little and too much chlorine are both problems.",
            marks: 3,
            modelAnswer: "Too little chlorine fails to kill all the harmful bacteria and pathogens, so the water remains unsafe and can spread disease. Too much chlorine gives the water an unpleasant taste/smell and can form harmful by-products, and excess chlorine is itself toxic. The dose is controlled to be just enough to sterilise the water safely.",
            markScheme: [
              "Too little: bacteria/pathogens not killed / water unsafe [1]",
              "Too much: bad taste/smell / harmful by-products / chlorine is toxic [1]",
              "Dose controlled to sterilise effectively without harm [1]",
            ],
            commonError: "Only giving one side of the argument; the question requires both too little and too much.",
            guideRef: "Treatment of the Domestic Water Supply",
            difficulty: "core",
            hints: [
              "Consider the consequence of not enough chlorine.",
              "Consider the consequence of too much chlorine.",
              "There is an optimum, controlled amount.",
            ],
          },
          {
            id: "chem-environment-bq1-10",
            question: "A 250 cm³ sample of clean dry air is passed repeatedly over heated copper until no further reaction occurs. The copper removes only the oxygen. Calculate the final volume of gas remaining, and name the main gas left.",
            marks: 4,
            modelAnswer: "Oxygen is about 21% of air. Volume of oxygen removed = 21/100 × 250 = 52.5 cm³. Volume remaining = 250 − 52.5 = 197.5 cm³ (about 198 cm³). The main gas left is nitrogen (with small amounts of argon and CO₂).",
            markScheme: [
              "Oxygen is ~21% of air [1]",
              "Oxygen removed = 0.21 × 250 = 52.5 cm³ [1]",
              "Remaining = 250 − 52.5 = 197.5 cm³ (≈ 198 cm³) [1]",
              "Main gas remaining is nitrogen [1]",
            ],
            commonError: "Subtracting nitrogen's 78% instead of oxygen's 21%, or forgetting that copper removes oxygen (not nitrogen).",
            guideRef: "Composition of Clean Dry Air",
            difficulty: "challenge",
            hints: [
              "Which gas does heated copper remove?",
              "Find 21% of 250 cm³.",
              "Subtract that volume from 250 cm³.",
            ],
            solutions: [
              {
                label: "Percentage method",
                steps: [
                  "Step 1: Oxygen ≈ 21% of clean dry air.",
                  "Step 2: Oxygen removed = 21/100 × 250 cm³ = 52.5 cm³.",
                  "Step 3: Gas remaining = 250 − 52.5 = 197.5 cm³ ≈ 198 cm³.",
                  "Step 4: The remaining gas is mostly nitrogen (≈ 78% of the original air).",
                ],
              },
            ],
          },
        ],
      },
      // ── QA PAPER 2 ── air pollutants, sources, effects, control
      {
        id: "chem-environment-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Carbon monoxide, sulfur dioxide, oxides of nitrogen, particulates: sources, effects and reduction.",
        questions: [
          {
            id: "chem-environment-bq2-01",
            question: "State the source and one harmful effect of carbon monoxide.",
            marks: 2,
            modelAnswer: "Source: incomplete combustion of carbon-containing fuels (where there is too little oxygen). Effect: it is toxic — it binds to haemoglobin, reducing the blood's ability to carry oxygen.",
            markScheme: [
              "Source: incomplete combustion of (carbon-containing) fuels [1]",
              "Effect: toxic / binds to haemoglobin / reduces oxygen transport in blood [1]",
            ],
            commonError: "Saying CO comes from sulfur impurities (that is SO₂) or from nitrogen (that is NOₓ).",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bq2-02",
            question: "Explain how oxides of nitrogen are formed in a car engine. Include a balanced equation.",
            marks: 3,
            modelAnswer: "Inside the engine, combustion produces very high temperatures. These provide enough energy for nitrogen and oxygen from the air to react together: N₂ + O₂ → 2NO. The nitrogen monoxide can then be further oxidised in air to nitrogen dioxide: 2NO + O₂ → 2NO₂.",
            markScheme: [
              "High temperature (in the engine) provides the energy [1]",
              "Nitrogen and oxygen from the air react together [1]",
              "Balanced equation N₂ + O₂ → 2NO (accept 2NO + O₂ → 2NO₂) [1]",
            ],
            commonError: "Writing N + O → NO (atoms instead of molecules) or forgetting that the high temperature is essential.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "core",
            hints: [
              "What two gases are drawn into the engine from the air?",
              "What conditions inside the engine let them react?",
              "Balance: N₂ + O₂ → 2NO.",
            ],
          },
          {
            id: "chem-environment-bq2-03",
            question: "Describe how a catalytic converter reduces pollution from a car exhaust. Include a balanced equation and name a catalyst metal.",
            marks: 4,
            modelAnswer: "A catalytic converter contains a catalyst such as platinum or rhodium on a large surface area. As exhaust gases pass over it, carbon monoxide and oxides of nitrogen react together to form harmless products: 2CO + 2NO → 2CO₂ + N₂. This removes two pollutants (toxic CO and acid-rain-causing NOₓ) at once.",
            markScheme: [
              "Catalyst named: platinum / rhodium / palladium [1]",
              "CO and NO(x) react on the catalyst surface [1]",
              "Balanced equation 2CO + 2NO → 2CO₂ + N₂ [1]",
              "Products are harmless / less polluting (CO₂ and N₂) [1]",
            ],
            commonError: "Writing an unbalanced equation, or claiming the converter removes CO₂ (it produces CO₂, which is not its target pollutant).",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "core",
            hints: [
              "Name the precious-metal catalyst used.",
              "Two pollutants react together — which two?",
              "Balance 2CO + 2NO → 2CO₂ + N₂.",
            ],
          },
          {
            id: "chem-environment-bq2-04",
            question: "State two harmful effects of particulates (e.g. soot from diesel engines) and their main source.",
            marks: 3,
            modelAnswer: "Source: incomplete combustion of fuels (e.g. soot/carbon from diesel engines and burning wood). Effect 1: fine particulates penetrate deep into the lungs, causing respiratory disease (and heart disease). Effect 2: they reduce visibility / cause smog and can deposit a dark layer on buildings.",
            markScheme: [
              "Source: incomplete combustion / diesel engines / burning fuels [1]",
              "Effect 1: respiratory / lung / heart disease [1]",
              "Effect 2: reduced visibility / smog / dirtying buildings (any other valid effect) [1]",
            ],
            commonError: "Confusing particulate effects with toxic-gas effects (e.g. saying particulates bind to haemoglobin — that is CO).",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bq2-05",
            question: "Sulfur dioxide can be removed from power-station waste gases by flue-gas desulfurisation using calcium oxide. Write a balanced equation for the reaction of calcium oxide with sulfur dioxide and explain why this reduces acid rain.",
            marks: 4,
            modelAnswer: "Calcium oxide is a basic oxide and reacts with the acidic sulfur dioxide: CaO + SO₂ → CaSO₃. By removing SO₂ from the waste gases before they leave the chimney, less SO₂ enters the atmosphere. Since SO₂ is the gas that dissolves and oxidises in rain to form sulfuric acid, removing it reduces the amount of acid rain produced.",
            markScheme: [
              "Balanced equation CaO + SO₂ → CaSO₃ [1]",
              "CaO is basic / neutralises acidic SO₂ [1]",
              "Less SO₂ released into the atmosphere [1]",
              "SO₂ forms sulfuric acid in rain, so less acid rain [1]",
            ],
            commonError: "Writing CaO + SO₂ → CaSO₄ (that would need an extra oxygen). With SO₂ the product is calcium sulfite, CaSO₃.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "challenge",
            hints: [
              "CaO is a base; SO₂ is acidic — a base + acidic oxide gives a salt.",
              "Balance Ca, S and O: one CaO with one SO₂.",
              "Less SO₂ in the air means less sulfuric acid in rain.",
            ],
            solutions: [
              {
                label: "Balancing the equation",
                steps: [
                  "Step 1: Reactants are CaO and SO₂.",
                  "Step 2: Combine the basic oxide and acidic oxide to form a salt (a sulfite).",
                  "Step 3: Count atoms — Ca:1, S:1, O:1+2 = 3. Product CaSO₃ has Ca:1, S:1, O:3.",
                  "Step 4: Equation balances: CaO + SO₂ → CaSO₃.",
                ],
              },
            ],
          },
          {
            id: "chem-environment-bq2-06",
            question: "Compare the source of sulfur dioxide with the source of oxides of nitrogen in terms of where the sulfur/nitrogen atoms come from.",
            marks: 3,
            modelAnswer: "Sulfur dioxide forms from sulfur impurities that are already inside the fossil fuel; when the fuel burns, the sulfur is oxidised: S + O₂ → SO₂. Oxides of nitrogen do not come from the fuel — the nitrogen comes from the air drawn into the hot engine, where N₂ and O₂ combine: N₂ + O₂ → 2NO. So SO₂ comes from the fuel, but NOₓ comes from the nitrogen in the air.",
            markScheme: [
              "SO₂: sulfur is an impurity in the fuel [1]",
              "NOₓ: nitrogen comes from the air (not the fuel) [1]",
              "NOₓ forms because of high temperature in the engine / S + O₂ → SO₂ shown [1]",
            ],
            commonError: "Thinking the nitrogen in NOₓ comes from the fuel — it comes from atmospheric N₂.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "core",
            hints: [
              "Where does the sulfur in SO₂ originate?",
              "Where does the nitrogen in NOₓ originate?",
              "One is in the fuel; one is in the air.",
            ],
          },
          {
            id: "chem-environment-bq2-07",
            question: "Carbon monoxide is described as a 'silent killer'. Explain why it is so dangerous, referring to its physical properties and its effect in the body.",
            marks: 3,
            modelAnswer: "Carbon monoxide is colourless and has no smell, so people cannot detect it and may breathe it in without knowing. In the body it binds strongly (irreversibly) to haemoglobin, forming carboxyhaemoglobin, so the red blood cells can no longer carry oxygen. This deprives the tissues of oxygen and can cause unconsciousness and death.",
            markScheme: [
              "Colourless and odourless / cannot be detected [1]",
              "Binds to haemoglobin (forms carboxyhaemoglobin) [1]",
              "Reduces oxygen transport / tissues starved of oxygen [1]",
            ],
            commonError: "Saying CO 'suffocates by filling the lungs' — the danger is its chemical binding to haemoglobin, not physical blocking.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "core",
            hints: [
              "Why can't people sense CO around them?",
              "Which blood molecule does CO attack?",
              "What can no longer be transported as a result?",
            ],
          },
          {
            id: "chem-environment-bq2-08",
            question: "A student claims: 'Banning all petrol and diesel cars would stop acid rain completely.' Evaluate this claim.",
            marks: 4,
            modelAnswer: "Banning cars would reduce oxides of nitrogen (formed in hot engines), which are a cause of acid rain, and would also cut CO and particulates. However, it would not stop acid rain completely, because sulfur dioxide from burning sulfur-containing fossil fuels in power stations and industry would still be released. SO₂ dissolves to form sulfuric acid in rain. Therefore the claim is wrong: vehicle bans reduce but do not eliminate acid rain.",
            markScheme: [
              "Cars produce NOₓ which contributes to acid rain, so banning them helps [1]",
              "But SO₂ from power stations/industry still released [1]",
              "SO₂ forms sulfuric acid / still causes acid rain [1]",
              "Conclusion: claim wrong — acid rain reduced but not eliminated [1]",
            ],
            commonError: "Agreeing with the claim by forgetting that power-station SO₂ is a separate, major source of acid rain.",
            guideRef: "Acid Rain: Formation and Effects",
            difficulty: "challenge",
            hints: [
              "Which acid-rain gas comes from cars?",
              "Which acid-rain gas comes from power stations?",
              "Does banning cars affect both sources?",
            ],
          },
          {
            id: "chem-environment-bq2-09",
            question: "Suggest three different measures that could reduce air pollution from road transport, briefly explaining how each works.",
            marks: 3,
            modelAnswer: "1. Fit catalytic converters: they convert toxic CO and NOₓ into harmless CO₂ and N₂ (2CO + 2NO → 2CO₂ + N₂). 2. Use electric or hybrid vehicles: these avoid burning fuel (or burn less), reducing CO, NOₓ and particulate emissions. 3. Improve public transport / reduce car use: fewer vehicles on the road means less combustion and so fewer pollutants. (Accept: use low-sulfur fuels to reduce SO₂.)",
            markScheme: [
              "Catalytic converters convert CO/NOₓ to CO₂/N₂ [1]",
              "Electric/hybrid vehicles reduce or remove combustion emissions [1]",
              "Reduce car use / better public transport, OR low-sulfur fuel reduces SO₂ [1]",
            ],
            commonError: "Listing measures without explaining how each one reduces pollution.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "core",
            hints: [
              "Think of a device fitted to the exhaust.",
              "Think of a way to avoid combustion altogether.",
              "Think of reducing the number of journeys.",
            ],
          },
          {
            id: "chem-environment-bq2-10",
            question: "Explain how oxides of nitrogen contribute to photochemical smog, and state two effects of this smog.",
            marks: 4,
            modelAnswer: "Oxides of nitrogen from vehicle exhausts react with unburnt hydrocarbons in the presence of sunlight. This produces photochemical smog, which contains ground-level ozone and other irritant compounds. Effect 1: it irritates the eyes and the respiratory system, worsening conditions such as asthma. Effect 2: it reduces visibility / damages crops and plants.",
            markScheme: [
              "NOₓ reacts with (unburnt) hydrocarbons [1]",
              "Reaction needs sunlight (photochemical) [1]",
              "Effect 1: irritates eyes/lungs / worsens asthma [1]",
              "Effect 2: reduces visibility / damages crops (any second valid effect) [1]",
            ],
            commonError: "Confusing photochemical smog (sunlight + NOₓ + hydrocarbons) with acid rain; they are different problems.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "challenge",
            hints: [
              "What does NOₓ react with, and what is needed to trigger it?",
              "The word 'photochemical' tells you sunlight is involved.",
              "Give two effects on health or the environment.",
            ],
          },
        ],
      },
      // ── QA PAPER 3 ── acid rain, greenhouse effect, climate change
      {
        id: "chem-environment-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Acid rain formation and effects, the greenhouse effect, greenhouse gases, and reducing emissions.",
        questions: [
          {
            id: "chem-environment-bq3-01",
            question: "Acid rain is rain with a pH below about 5.6. Name the two pollutant gases mainly responsible and the acid each produces.",
            marks: 2,
            modelAnswer: "Sulfur dioxide (SO₂) produces sulfuric acid (H₂SO₄). Oxides of nitrogen (NOₓ) produce nitric acid (HNO₃).",
            markScheme: [
              "SO₂ → sulfuric acid (H₂SO₄) [1]",
              "Oxides of nitrogen (NOₓ) → nitric acid (HNO₃) [1]",
            ],
            commonError: "Naming carbon dioxide (carbonic acid) — although CO₂ makes rain slightly acidic naturally, the gases responsible for harmful acid rain are SO₂ and NOₓ.",
            guideRef: "Acid Rain: Formation and Effects",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bq3-02",
            question: "Using balanced equations, show the three steps by which sulfur in coal ends up as sulfuric acid in rain.",
            marks: 3,
            modelAnswer: "Step 1: sulfur burns to form sulfur dioxide: S + O₂ → SO₂. Step 2: sulfur dioxide is oxidised in the atmosphere to sulfur trioxide: 2SO₂ + O₂ → 2SO₃. Step 3: sulfur trioxide dissolves in rainwater to form sulfuric acid: SO₃ + H₂O → H₂SO₄.",
            markScheme: [
              "S + O₂ → SO₂ [1]",
              "2SO₂ + O₂ → 2SO₃ [1]",
              "SO₃ + H₂O → H₂SO₄ [1]",
            ],
            commonError: "Writing SO₂ + O₂ → SO₃ unbalanced (it needs 2SO₂ + O₂ → 2SO₃), or jumping straight from SO₂ to H₂SO₄.",
            guideRef: "Acid Rain: Formation and Effects",
            difficulty: "challenge",
            hints: [
              "Start with sulfur burning.",
              "SO₂ is then oxidised — balance 2SO₂ + O₂ → 2SO₃.",
              "Finally SO₃ reacts with water.",
            ],
            solutions: [
              {
                label: "Three-step equation chain",
                steps: [
                  "Step 1: Combustion of sulfur: S + O₂ → SO₂.",
                  "Step 2: Atmospheric oxidation: 2SO₂ + O₂ → 2SO₃ (balance: 2 S, 6 O each side).",
                  "Step 3: Dissolving in rain: SO₃ + H₂O → H₂SO₄ (balance: 1 S, 4 O, 2 H each side).",
                ],
              },
            ],
          },
          {
            id: "chem-environment-bq3-03",
            question: "Describe three harmful effects of acid rain, naming the substances or organisms affected.",
            marks: 3,
            modelAnswer: "1. It lowers the pH of lakes and rivers, killing fish and other aquatic organisms (and leaching toxic aluminium ions from soils). 2. It damages forests by washing essential mineral ions (such as magnesium and calcium) out of the soil and harming leaves. 3. It reacts with limestone and marble (CaCO₃) in buildings and statues, dissolving and eroding them, and it corrodes metals faster.",
            markScheme: [
              "Kills aquatic life / lowers lake and river pH [1]",
              "Damages forests / leaches minerals from soil [1]",
              "Dissolves limestone/marble buildings (CaCO₃) / corrodes metals [1]",
            ],
            commonError: "Giving vague answers like 'it is bad for the environment' without naming specific affected things.",
            guideRef: "Acid Rain: Formation and Effects",
            difficulty: "core",
            hints: [
              "Think about water, then land/forests, then buildings.",
              "Which rock used in buildings reacts with acid?",
              "Name the organisms harmed in lakes.",
            ],
          },
          {
            id: "chem-environment-bq3-04",
            question: "Acid rain dissolves marble statues made of calcium carbonate. Write a balanced equation for the reaction of calcium carbonate with sulfuric acid, and name all the products.",
            marks: 3,
            modelAnswer: "CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂. The products are calcium sulfate, water and carbon dioxide.",
            markScheme: [
              "Correct formulae for reactants and products [1]",
              "Equation balanced [1]",
              "Products named: calcium sulfate, water, carbon dioxide [1]",
            ],
            commonError: "Forgetting that a carbonate + acid also produces water and carbon dioxide, not just a salt.",
            guideRef: "Acid Rain: Formation and Effects",
            difficulty: "core",
            hints: [
              "Acid + carbonate → salt + water + carbon dioxide.",
              "Sulfuric acid gives a sulfate salt.",
              "Check Ca, C, S, O and H all balance.",
            ],
          },
          {
            id: "chem-environment-bq3-05",
            question: "Describe how the greenhouse effect keeps the Earth warm, referring to the types of radiation involved.",
            marks: 4,
            modelAnswer: "Short-wavelength solar radiation (visible light and ultraviolet) passes through the atmosphere and is absorbed by the Earth's surface, warming it. The warm surface re-emits energy as longer-wavelength infrared (IR) radiation. Greenhouse gases such as carbon dioxide and methane absorb this outgoing infrared radiation and re-radiate it in all directions, including back towards the surface. This trapping of heat keeps the Earth's surface warmer than it would otherwise be.",
            markScheme: [
              "Solar radiation (short wavelength / UV / visible) passes in and warms surface [1]",
              "Surface re-emits infrared / longer wavelength radiation [1]",
              "Greenhouse gases absorb the outgoing infrared [1]",
              "Re-radiated back to surface / heat trapped, warming Earth [1]",
            ],
            commonError: "Saying greenhouse gases 'trap heat like a blanket' without explaining the absorption and re-radiation of infrared.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "core",
            hints: [
              "What kind of radiation comes in from the Sun?",
              "What kind of radiation does the warm Earth give out?",
              "What do greenhouse gases do to that outgoing radiation?",
            ],
          },
          {
            id: "chem-environment-bq3-06",
            question: "Name the two greenhouse gases required at IGCSE and give one human source of each.",
            marks: 4,
            modelAnswer: "Carbon dioxide (CO₂): from the combustion of fossil fuels (and from deforestation). Methane (CH₄): from cattle/livestock digestion (or from rice paddies, or from decomposition of waste in landfill sites).",
            markScheme: [
              "Carbon dioxide named [1]",
              "Source of CO₂ (combustion of fossil fuels / deforestation) [1]",
              "Methane named [1]",
              "Source of CH₄ (cattle / rice paddies / landfill) [1]",
            ],
            commonError: "Listing pollutants such as SO₂ or CO as greenhouse gases — they are not the IGCSE greenhouse gases.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bq3-07",
            question: "Explain how deforestation increases the concentration of carbon dioxide in the atmosphere in two different ways.",
            marks: 3,
            modelAnswer: "Way 1: When forests are cut down and burned, the carbon stored in the wood is released as carbon dioxide during combustion. Way 2: Removing the trees means there are fewer plants to take in carbon dioxide by photosynthesis, so less CO₂ is removed from the atmosphere. Both the increased release and the reduced removal raise atmospheric CO₂.",
            markScheme: [
              "Burning the trees releases CO₂ (combustion) [1]",
              "Fewer trees means less photosynthesis [1]",
              "So less CO₂ removed from the atmosphere [1]",
            ],
            commonError: "Only giving one mechanism; the question specifically asks for two ways.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "core",
            hints: [
              "What happens to the carbon in the trees when they are burned?",
              "What useful process do living trees carry out with CO₂?",
              "Removing trees affects both release and removal of CO₂.",
            ],
          },
          {
            id: "chem-environment-bq3-08",
            question: "Suggest two predicted consequences of climate change (rising global temperatures) and explain the link in each case.",
            marks: 4,
            modelAnswer: "1. Melting of polar ice and glaciers: higher temperatures melt ice on land, adding water to the oceans and raising sea levels, which floods low-lying coastal areas. 2. More extreme weather: more energy in the atmosphere leads to more frequent or severe storms, droughts and floods, disrupting agriculture and ecosystems. (Accept: changing rainfall patterns, loss of habitats/species.)",
            markScheme: [
              "Consequence 1 stated (e.g. melting ice / sea-level rise) [1]",
              "Explanation of consequence 1 (e.g. melted ice raises sea level, flooding) [1]",
              "Consequence 2 stated (e.g. extreme weather / changing rainfall) [1]",
              "Explanation of consequence 2 [1]",
            ],
            commonError: "Stating consequences without explaining the causal link to higher temperatures.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "core",
            hints: [
              "Think about ice and sea levels.",
              "Think about weather patterns and energy.",
              "For each, explain why higher temperature causes it.",
            ],
          },
          {
            id: "chem-environment-bq3-09",
            question: "Describe three strategies that could reduce carbon dioxide emissions, explaining how each works.",
            marks: 3,
            modelAnswer: "1. Use renewable energy (solar, wind, hydroelectric): generates electricity without burning fossil fuels, so no CO₂ is released. 2. Carbon capture and storage (CCS): CO₂ is captured from power-station waste gases and stored underground instead of being released. 3. Reforestation: planting trees increases photosynthesis, removing CO₂ from the atmosphere (carbon sink). (Accept: improving energy efficiency.)",
            markScheme: [
              "Renewable energy avoids combustion / produces no CO₂ [1]",
              "Carbon capture and storage traps CO₂ before release [1]",
              "Reforestation / planting trees removes CO₂ by photosynthesis [1]",
            ],
            commonError: "Naming strategies without explaining the mechanism, or suggesting catalytic converters (which do not reduce CO₂).",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "core",
            hints: [
              "How can we make energy without combustion?",
              "How can CO₂ be captured before it escapes?",
              "How can we remove CO₂ already in the air?",
            ],
          },
          {
            id: "chem-environment-bq3-10",
            question: "Venus has an atmosphere of about 96% carbon dioxide and a surface temperature of about 465 °C, hotter than Mercury despite being farther from the Sun. Explain what this tells us about the greenhouse effect, and use it to predict the effect of rising CO₂ on Earth.",
            marks: 4,
            modelAnswer: "Venus's very dense CO₂ atmosphere absorbs almost all of the infrared radiation the planet tries to emit and re-radiates it back, producing an extreme greenhouse effect. The fact that Venus is hotter than Mercury, even though it is farther from the Sun, shows that the concentration of greenhouse gas — not just distance from the Sun — is a major factor controlling surface temperature. By analogy, increasing CO₂ in Earth's atmosphere will trap more outgoing infrared and raise Earth's average surface temperature (the direction is certain, though the exact size depends on feedback effects).",
            markScheme: [
              "Dense CO₂ atmosphere absorbs/traps infrared (extreme greenhouse effect) [1]",
              "Distance from Sun is not the only factor / CO₂ concentration matters [1]",
              "Higher CO₂ → more IR trapped [1]",
              "So rising CO₂ on Earth raises surface temperature [1]",
            ],
            commonError: "Concluding only that Venus is hot 'because it has lots of gas' without linking CO₂ concentration to infrared trapping and to Earth.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "challenge",
            hints: [
              "Why is Venus hotter than the closer planet Mercury?",
              "What is special about Venus's atmosphere?",
              "Apply the same reasoning to rising CO₂ on Earth.",
            ],
            strategy: "Use the extreme case (Venus) to isolate CO₂ concentration as the key variable, then transfer the reasoning to Earth.",
          },
        ],
      },
      // ── QA PAPER 4 ── rusting & prevention, eutrophication, carbon cycle, synthesis
      {
        id: "chem-environment-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Rusting and its prevention, eutrophication, the carbon cycle, and synthesis across the topic.",
        questions: [
          {
            id: "chem-environment-bq4-01",
            question: "State the two substances needed for iron to rust, and name the substance formed.",
            marks: 2,
            modelAnswer: "Iron rusts when both oxygen (from the air) and water are present. The substance formed is rust, which is hydrated iron(III) oxide.",
            markScheme: [
              "Oxygen and water both needed [1]",
              "Product is rust / hydrated iron(III) oxide [1]",
            ],
            commonError: "Saying carbon dioxide is needed for rusting — only oxygen and water are required (salt speeds it up but is not essential).",
            guideRef: "Treatment of the Domestic Water Supply",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bq4-02",
            question: "An experiment uses three test tubes with iron nails: (A) nail in water and air, (B) nail in boiled water with a layer of oil on top, (C) nail with dry air over anhydrous calcium chloride (a drying agent). Predict which nail(s) rust and explain why.",
            marks: 4,
            modelAnswer: "Only nail A rusts, because it has BOTH water and oxygen (from the air) present. Nail B does not rust because boiling removed the dissolved oxygen and the oil stops air re-entering, so oxygen is absent even though water is present. Nail C does not rust because the drying agent removes water vapour, so although air (oxygen) is present, water is absent. This confirms that both water and oxygen are required for rusting.",
            markScheme: [
              "Only A rusts [1]",
              "A has both water and oxygen present [1]",
              "B: no oxygen (boiled out / oil seals air out) so no rust [1]",
              "C: no water (drying agent removes it) so no rust [1]",
            ],
            commonError: "Predicting that B or C rusts because 'water/air is there' — each tube deliberately removes one essential factor.",
            guideRef: "Treatment of the Domestic Water Supply",
            difficulty: "core",
            hints: [
              "Rusting needs both water and oxygen.",
              "What does boiling + oil remove in tube B?",
              "What does the drying agent remove in tube C?",
            ],
          },
          {
            id: "chem-environment-bq4-03",
            question: "Explain the difference between barrier methods and sacrificial protection for preventing rusting, giving an example of each.",
            marks: 4,
            modelAnswer: "Barrier methods work by keeping oxygen and water away from the iron, for example painting, greasing, or coating with plastic — but if the barrier is scratched, the iron underneath can rust. Sacrificial protection uses a more reactive metal (such as zinc or magnesium) attached to the iron; this metal is oxidised in preference to the iron, so the iron is protected even if the surface is scratched. For example, zinc blocks bolted to a ship's hull corrode instead of the steel.",
            markScheme: [
              "Barrier method keeps out oxygen/water — example (paint/grease/plastic) [1]",
              "Barrier fails if scratched [1]",
              "Sacrificial protection uses a more reactive metal [1]",
              "More reactive metal corrodes instead of iron — example (zinc/magnesium) [1]",
            ],
            commonError: "Describing galvanising as purely a barrier method — zinc also gives sacrificial protection because it is more reactive than iron.",
            guideRef: "Treatment of the Domestic Water Supply",
            difficulty: "core",
            hints: [
              "One method physically blocks oxygen and water.",
              "The other uses a more reactive metal to corrode first.",
              "Give a named example of each.",
            ],
          },
          {
            id: "chem-environment-bq4-04",
            question: "Galvanising coats iron with zinc. Explain TWO ways in which the zinc protects the iron from rusting.",
            marks: 3,
            modelAnswer: "First, the zinc layer acts as a barrier, keeping oxygen and water away from the iron surface. Second, even if the zinc layer is scratched and the iron is exposed, the zinc still protects the iron by sacrificial protection: zinc is more reactive than iron, so the zinc is oxidised (corrodes) in preference to the iron.",
            markScheme: [
              "Barrier: zinc keeps out oxygen and water [1]",
              "Sacrificial: zinc is more reactive than iron [1]",
              "Zinc corrodes/oxidises in preference to iron (even if scratched) [1]",
            ],
            commonError: "Giving only the barrier explanation and missing that galvanising also offers sacrificial protection.",
            guideRef: "Treatment of the Domestic Water Supply",
            difficulty: "core",
            hints: [
              "First think of the coating as a physical layer.",
              "Then think about what happens if it is scratched.",
              "Zinc is more reactive than iron.",
            ],
          },
          {
            id: "chem-environment-bq4-05",
            question: "Describe the process of eutrophication in the correct order, from the addition of excess fertiliser to the death of fish.",
            marks: 5,
            modelAnswer: "1. Excess nitrate and phosphate from fertilisers run off or leach into a river or lake. 2. The extra nutrients cause algae and water plants to grow rapidly, forming an algal bloom on the surface. 3. The algae block sunlight, so submerged plants cannot photosynthesise and they die. 4. Aerobic bacteria decompose the dead plant and algal matter, and in doing so they use up the dissolved oxygen in the water. 5. With the dissolved oxygen depleted, fish and other aquatic animals can no longer respire and they die (suffocate).",
            markScheme: [
              "Excess nitrate/phosphate enters the water [1]",
              "Rapid algal growth / algal bloom [1]",
              "Algae block sunlight, plants die [1]",
              "Bacteria decompose dead matter, using up dissolved oxygen [1]",
              "Oxygen depleted, fish die / suffocate [1]",
            ],
            commonError: "Getting the order wrong, or saying nitrates poison the fish directly — the fish die from lack of oxygen.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "core",
            hints: [
              "Begin with nutrients entering the water.",
              "Algae grow, then block light — what dies first?",
              "Decomposition uses up which dissolved gas?",
            ],
          },
          {
            id: "chem-environment-bq4-06",
            question: "Suggest two ways in which farmers could reduce the eutrophication caused by their fertiliser use.",
            marks: 2,
            modelAnswer: "1. Apply fertiliser carefully — in the correct amounts and at the right time — so less is washed away. 2. Leave buffer strips of vegetation between fields and waterways to absorb run-off (or use slow-release fertilisers). ",
            markScheme: [
              "Apply correct amount / at correct time / avoid over-use [1]",
              "Buffer strips of vegetation / slow-release fertiliser / avoid spreading near water [1]",
            ],
            commonError: "Suggesting 'stop using fertiliser completely', which is impractical; the aim is careful management.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bq4-07",
            question: "In the carbon cycle, state one process that removes carbon dioxide from the atmosphere and two processes that add carbon dioxide to it. Write the word equation for the removing process.",
            marks: 4,
            modelAnswer: "Removing process: photosynthesis. Word equation: carbon dioxide + water → glucose + oxygen (in the presence of light and chlorophyll). Adding processes: respiration (by plants and animals) and combustion of fuels (also accept decomposition of dead organisms).",
            markScheme: [
              "Removal: photosynthesis [1]",
              "Word equation: carbon dioxide + water → glucose + oxygen [1]",
              "Adding process 1: respiration [1]",
              "Adding process 2: combustion / decomposition [1]",
            ],
            commonError: "Listing combustion as a process that removes CO₂ — combustion releases CO₂; only photosynthesis removes it here.",
            guideRef: "Composition of Clean Dry Air",
            difficulty: "core",
            hints: [
              "Which process uses CO₂ to make glucose?",
              "Which living process releases CO₂ in all organisms?",
              "Burning fuels also releases CO₂.",
            ],
          },
          {
            id: "chem-environment-bq4-08",
            question: "A fuel is burned in a limited supply of air. Explain why this produces carbon monoxide and soot rather than only carbon dioxide, and state one danger of each product.",
            marks: 4,
            modelAnswer: "With a limited supply of air there is not enough oxygen for complete combustion, so the carbon in the fuel is only partly oxidised. Some forms carbon monoxide (incomplete oxidation) and some remains as unburnt carbon (soot/particulates). Danger of carbon monoxide: it is toxic — it binds to haemoglobin and reduces oxygen transport in the blood. Danger of soot/particulates: they are inhaled and cause respiratory disease (and dirty buildings / reduce visibility).",
            markScheme: [
              "Limited oxygen / insufficient air for complete combustion [1]",
              "Carbon partly oxidised → CO; some unburnt → soot/carbon [1]",
              "Danger of CO: toxic / binds haemoglobin [1]",
              "Danger of soot: respiratory disease / lung damage [1]",
            ],
            commonError: "Saying incomplete combustion produces sulfur dioxide or nitrogen oxides — those come from impurities or air, not from a shortage of oxygen.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "core",
            hints: [
              "What is in short supply during incomplete combustion?",
              "Carbon is only partly oxidised — what two carbon products form?",
              "Give a health danger for each product.",
            ],
          },
          {
            id: "chem-environment-bq4-09",
            question: "A power station burns coal containing 2.0% sulfur by mass. It burns 500 tonnes of coal per day. Calculate the mass of sulfur dioxide produced per day, assuming all the sulfur is converted to SO₂. (Ar: S = 32, O = 16)",
            marks: 4,
            modelAnswer: "Mass of sulfur = 2.0/100 × 500 = 10 tonnes per day. The equation S + O₂ → SO₂ shows 1 mole of S (32 g) gives 1 mole of SO₂ (32 + 2×16 = 64 g), so the mass doubles. Mass of SO₂ = 10 × (64/32) = 10 × 2 = 20 tonnes per day.",
            markScheme: [
              "Mass of sulfur = 0.020 × 500 = 10 tonnes [1]",
              "Mr of SO₂ = 32 + 32 = 64; Ar of S = 32 [1]",
              "Ratio 64/32 = 2 (1 S → 1 SO₂) [1]",
              "Mass of SO₂ = 10 × 2 = 20 tonnes per day [1]",
            ],
            commonError: "Forgetting to scale the sulfur mass by the SO₂:S mass ratio (×2), or using 2% wrongly (e.g. ×2 instead of ×0.02).",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "challenge",
            hints: [
              "First find the mass of sulfur: 2.0% of 500 tonnes.",
              "Use S + O₂ → SO₂; 1 mole S gives 1 mole SO₂.",
              "Compare the masses: 32 g of S gives 64 g of SO₂ (×2).",
            ],
            solutions: [
              {
                label: "Mass-ratio method",
                steps: [
                  "Step 1: Mass of sulfur = 2.0/100 × 500 = 10 tonnes.",
                  "Step 2: Equation S + O₂ → SO₂ — mole ratio S : SO₂ = 1 : 1.",
                  "Step 3: Ar(S) = 32; Mr(SO₂) = 32 + 2×16 = 64. Mass ratio = 64/32 = 2.",
                  "Step 4: Mass of SO₂ = 10 tonnes × 2 = 20 tonnes per day.",
                ],
              },
            ],
          },
          {
            id: "chem-environment-bq4-10",
            question: "A catalytic converter removes carbon monoxide and nitrogen monoxide from exhaust gases by the reaction 2CO + 2NO → 2CO₂ + N₂. Calculate the volume of nitrogen gas produced (at room conditions) when 48 dm³ of carbon monoxide is fully converted. (Assume gas volumes are measured at the same temperature and pressure.)",
            marks: 3,
            modelAnswer: "Using the equation, the mole ratio of CO to N₂ is 2 : 1. At the same temperature and pressure, equal volumes contain equal numbers of moles, so the volume ratio is also 2 : 1. Volume of N₂ = 48 ÷ 2 = 24 dm³.",
            markScheme: [
              "Mole/volume ratio CO : N₂ = 2 : 1 (from the equation) [1]",
              "Equal volumes contain equal moles at same T and P [1]",
              "Volume of N₂ = 48 ÷ 2 = 24 dm³ [1]",
            ],
            commonError: "Using a 1:1 ratio (giving 48 dm³) instead of the 2:1 ratio of CO to N₂ from the balanced equation.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "challenge",
            hints: [
              "Read the ratio of CO to N₂ from the balanced equation.",
              "At the same T and P, volume ratio equals mole ratio.",
              "Divide the CO volume by 2.",
            ],
            solutions: [
              {
                label: "Volume-ratio method (Avogadro's law)",
                steps: [
                  "Step 1: From 2CO + 2NO → 2CO₂ + N₂, ratio CO : N₂ = 2 : 1.",
                  "Step 2: At the same temperature and pressure, volume ratio = mole ratio = 2 : 1.",
                  "Step 3: Volume of N₂ = 48 dm³ ÷ 2 = 24 dm³.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
