import type { Topic } from "../types";

export const bioHumanNutrition: Topic = {
  id: "bio-human-nutrition",
  title: "Human Nutrition",
  subject: "biology",
  icon: "🍎",
  blurb: "Balanced diet, digestive system, enzymes, absorption and assimilation.",
  intro:
    "Every cell in your body depends on nutrients broken down from the food you eat. In this topic you will trace a meal from mouth to anus, discover how specialised enzymes chemically dismantle macromolecules, and explore how the small intestine is brilliantly engineered to absorb the products of digestion into the bloodstream.",

  // ─────────────────────────────────────────────────────────────────────────────
  // GUIDE
  // ─────────────────────────────────────────────────────────────────────────────
  guide: [
    // ── Section 1 ─────────────────────────────────────────────────────────────
    {
      heading: "Balanced Diet and Nutrients",
      body: `A **balanced diet** contains all the nutrients needed, in the correct proportions, to maintain health. The seven components are: carbohydrates, fats, proteins, vitamins, minerals, dietary fibre, and water.

**Carbohydrates** are the main energy source. Simple carbohydrates (glucose, sucrose) give rapid energy; complex carbohydrates (starch, glycogen) store energy. Sources: bread, rice, pasta, potatoes.

**Fats** (lipids) provide a concentrated energy store (twice the energy per gram of carbohydrate), form cell membranes, insulate the body, and act as a solvent for fat-soluble vitamins. Sources: butter, oils, nuts, oily fish.

**Proteins** are needed for growth, repair, and production of enzymes and hormones. They are built from amino acids. Sources: meat, fish, eggs, legumes, dairy.

**Vitamins:**
- *Vitamin C* (ascorbic acid): needed for synthesis of collagen, which strengthens connective tissue. Deficiency → **scurvy** (bleeding gums, slow wound healing). Sources: citrus fruits, peppers, tomatoes.
- *Vitamin D* (calciferol): needed for absorption of calcium from the gut and for bone mineralisation. Deficiency → **rickets** in children (soft, deformed bones). Sources: oily fish, egg yolk, sunlight (skin synthesis).

**Minerals:**
- *Calcium*: needed for bone and teeth formation and muscle contraction. Sources: dairy, leafy greens.
- *Iron*: component of haemoglobin. Deficiency → anaemia (reduced oxygen transport). Sources: red meat, spinach, lentils.

**Dietary fibre** (roughage) — mainly cellulose from plant cell walls — cannot be digested but adds bulk to faeces and stimulates peristalsis, reducing constipation risk.

**Water** is essential as the solvent for all biochemical reactions, for transport in blood and lymph, and for temperature regulation via sweating.`,
      keyPoints: [
        "A balanced diet supplies carbohydrates, fats, proteins, vitamins, minerals, fibre, and water in correct proportions.",
        "Vitamin C deficiency causes scurvy; vitamin D deficiency causes rickets.",
        "Iron is needed for haemoglobin; calcium for bones and teeth.",
        "Dietary fibre adds bulk to faeces and stimulates peristalsis.",
        "Water is the universal biological solvent and essential for all metabolic reactions.",
      ],
      discovery: {
        problem:
          "Sailors on long voyages in the 1700s suffered bleeding gums, loose teeth, and poor wound healing — yet they ate enough food. What could cause disease not from eating too little, but from eating the wrong things?",
        idea:
          "The sailors lacked vitamin C, which the body needs to synthesise collagen. Without collagen, connective tissue breaks down. This discovery led to the concept of 'vital amines' (vitamins) — specific molecules required in tiny amounts for normal body function.",
      },
      whyItWorks:
        "Vitamin C is a cofactor for the enzyme prolyl hydroxylase, which adds hydroxyl groups to proline residues during collagen synthesis. Without hydroxylated proline, collagen triple helices cannot form stable cross-links, so connective tissue literally falls apart — explaining every symptom of scurvy.",
      strategies: ["Categorise by function (energy, structure, regulation) to remember which nutrient does what."],
      thinkDeeper:
        "Why can humans not synthesise vitamin C but most other mammals can? Humans, other great apes, and guinea pigs share a mutation disabling the gene GULO that encodes the final enzyme in the ascorbic acid synthesis pathway.",
      diagrams: [
        {
          caption: "Nutritional roles of the seven diet components",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Table of seven dietary components and their roles">
  <rect width="320" height="200" fill="#0f172a" rx="8"/>
  <text x="160" y="18" fill="#eef0ff" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">Seven Dietary Components</text>
  <!-- headers -->
  <rect x="8" y="24" width="140" height="16" fill="#1e3a5f" rx="3"/>
  <rect x="152" y="24" width="160" height="16" fill="#1e3a5f" rx="3"/>
  <text x="78" y="35" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">Nutrient</text>
  <text x="232" y="35" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">Main Role</text>
  <!-- rows -->
  <text x="14" y="52" fill="#b7bce0" font-size="9" font-family="sans-serif">Carbohydrates</text>
  <text x="158" y="52" fill="#fbbf24" font-size="9" font-family="sans-serif">Energy source (4 kcal/g)</text>
  <text x="14" y="67" fill="#b7bce0" font-size="9" font-family="sans-serif">Fats</text>
  <text x="158" y="67" fill="#fbbf24" font-size="9" font-family="sans-serif">Energy store (9 kcal/g); membranes</text>
  <text x="14" y="82" fill="#b7bce0" font-size="9" font-family="sans-serif">Proteins</text>
  <text x="158" y="82" fill="#fbbf24" font-size="9" font-family="sans-serif">Growth, repair, enzymes</text>
  <text x="14" y="97" fill="#b7bce0" font-size="9" font-family="sans-serif">Vitamin C</text>
  <text x="158" y="97" fill="#34d399" font-size="9" font-family="sans-serif">Collagen synthesis (defic. = scurvy)</text>
  <text x="14" y="112" fill="#b7bce0" font-size="9" font-family="sans-serif">Vitamin D</text>
  <text x="158" y="112" fill="#34d399" font-size="9" font-family="sans-serif">Ca absorption; bones (defic. = rickets)</text>
  <text x="14" y="127" fill="#b7bce0" font-size="9" font-family="sans-serif">Calcium</text>
  <text x="158" y="127" fill="#a78bfa" font-size="9" font-family="sans-serif">Bone/teeth formation; muscle contraction</text>
  <text x="14" y="142" fill="#b7bce0" font-size="9" font-family="sans-serif">Iron</text>
  <text x="158" y="142" fill="#a78bfa" font-size="9" font-family="sans-serif">Haemoglobin (defic. = anaemia)</text>
  <text x="14" y="157" fill="#b7bce0" font-size="9" font-family="sans-serif">Fibre</text>
  <text x="158" y="157" fill="#fb7185" font-size="9" font-family="sans-serif">Peristalsis; prevents constipation</text>
  <text x="14" y="172" fill="#b7bce0" font-size="9" font-family="sans-serif">Water</text>
  <text x="158" y="172" fill="#fb7185" font-size="9" font-family="sans-serif">Solvent; transport; temp. regulation</text>
</svg>`,
        },
      ],
    },

    // ── Section 2 ─────────────────────────────────────────────────────────────
    {
      heading: "Energy Requirements",
      body: `The **metabolic rate** is the rate at which the body uses energy. Total daily energy requirements vary considerably between individuals.

**Factors affecting energy requirements:**

- **Age**: Children and adolescents need more energy per kilogram of body mass for growth. Metabolic rate declines in old age.
- **Sex**: Males generally have higher muscle mass and therefore a higher basal metabolic rate (BMR) than females of the same size.
- **Activity level**: Physical work (e.g. a manual labourer vs. a desk worker) dramatically increases energy demand. Athletes can require >4000 kcal/day.
- **Pregnancy and lactation**: Extra energy is needed to support foetal growth and milk production. Pregnant women require approximately 300 kcal/day extra in the third trimester.
- **Body size**: A larger body has more cells to supply, so energy demand is greater.
- **Climate**: In cold climates, extra energy is needed to maintain body temperature.

**Malnutrition** arises when diet is unbalanced — either from **undernutrition** (not enough food; causes kwashiorkor if protein is lacking, marasmus if total food is lacking) or **overnutrition** (excess calorie intake leading to obesity, increasing risk of type 2 diabetes and cardiovascular disease).`,
      keyPoints: [
        "Age, activity level, and pregnancy are major factors affecting daily energy requirements.",
        "Manual workers and athletes require significantly more energy than sedentary individuals.",
        "Pregnancy increases energy requirements by approximately 300 kcal/day in late pregnancy.",
        "Malnutrition includes both undernutrition and overnutrition (excess intake).",
        "Basal metabolic rate (BMR) is the energy needed for vital functions at rest.",
      ],
      strategies: [
        "When asked about factors, list them systematically: biological (age, sex, size) then lifestyle (activity, pregnancy, climate).",
      ],
      thinkDeeper:
        "Why do endurance athletes 'carbohydrate load' before a race? Glycogen stores in muscle and liver are limited (~500 g). Eating extra carbohydrate maximises these stores, delaying the point at which the body must switch to slower fat metabolism during prolonged exercise.",
    },

    // ── Section 3 ─────────────────────────────────────────────────────────────
    {
      heading: "The Alimentary Canal",
      body: `The **alimentary canal** (gut) is a muscular tube running from mouth to anus. Food passes through it in one direction, driven by **peristalsis** — coordinated contraction and relaxation of circular and longitudinal muscles in the gut wall.

**Regions in order:**

1. **Mouth** — mechanical digestion by teeth; chemical digestion by salivary amylase; food formed into a bolus lubricated by mucus.
2. **Oesophagus** — muscular tube that moves the bolus to the stomach by peristalsis; no digestion occurs here.
3. **Stomach** — muscular sac; churns food (mechanical); secretes gastric juice containing pepsin (protease) and hydrochloric acid (HCl, pH ≈ 2); HCl kills bacteria and provides the optimal pH for pepsin.
4. **Small intestine** — main site of digestion and absorption; divided into:
   - *Duodenum*: receives bile from the liver/gall bladder and pancreatic juice from the pancreas; most chemical digestion occurs here.
   - *Ileum*: lined with villi for absorption; longest section.
5. **Large intestine** — comprises the colon and rectum; absorbs water from undigested material, forming faeces.
   - *Colon*: absorbs water and mineral salts.
   - *Rectum*: stores faeces.
6. **Anus** — faeces expelled by egestion (defaecation).

**Accessory organs:**
- **Liver**: produces bile (stored in gall bladder), regulates blood glucose, processes absorbed amino acids.
- **Pancreas**: produces pancreatic juice containing amylase, lipase, and proteases; secretes sodium hydrogencarbonate to neutralise acid chyme in the duodenum.

The five key processes are: **ingestion** (taking in food), **digestion** (mechanical and chemical breakdown), **absorption** (nutrients entering blood/lymph), **assimilation** (nutrients used by cells), and **egestion** (elimination of undigested matter).`,
      keyPoints: [
        "The order is: mouth → oesophagus → stomach → duodenum → ileum → colon → rectum → anus.",
        "Peristalsis — wave-like muscular contractions — propels food along the gut.",
        "The liver produces bile; the pancreas produces amylase, lipase, and proteases.",
        "The five digestive processes are ingestion, digestion, absorption, assimilation, egestion.",
        "The stomach secretes HCl (kills bacteria; activates pepsin) and pepsin (protein digestion).",
      ],
      diagrams: [
        {
          caption: "The human alimentary canal — labelled diagram",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Labelled diagram of the human alimentary canal showing mouth, oesophagus, stomach, duodenum, ileum, colon, rectum and anus, plus liver and pancreas">
  <rect width="320" height="200" fill="#0f172a" rx="8"/>
  <!-- oesophagus -->
  <rect x="138" y="22" width="14" height="38" rx="4" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <!-- stomach -->
  <ellipse cx="120" cy="82" rx="28" ry="22" fill="none" stroke="#fbbf24" stroke-width="2"/>
  <!-- duodenum curve -->
  <path d="M 148 82 Q 170 82 170 102 Q 170 122 148 122" fill="none" stroke="#34d399" stroke-width="2"/>
  <!-- ileum loops -->
  <path d="M 148 122 Q 130 130 120 145 Q 108 160 120 168 Q 132 178 150 168 Q 168 158 158 142 Q 148 128 148 122" fill="none" stroke="#34d399" stroke-width="2"/>
  <!-- colon -->
  <path d="M 150 168 Q 180 172 188 148 Q 194 120 188 90 Q 184 72 172 66" fill="none" stroke="#a78bfa" stroke-width="2"/>
  <!-- rectum -->
  <rect x="182" y="162" width="12" height="24" rx="4" fill="none" stroke="#a78bfa" stroke-width="2"/>
  <!-- anus -->
  <circle cx="188" cy="190" r="4" fill="none" stroke="#fb7185" stroke-width="2"/>
  <!-- liver -->
  <ellipse cx="72" cy="72" rx="22" ry="14" fill="none" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4 2"/>
  <!-- pancreas -->
  <ellipse cx="72" cy="104" rx="18" ry="8" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 2"/>
  <!-- mouth label -->
  <circle cx="145" cy="14" r="6" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
  <!-- labels -->
  <text x="162" y="16" fill="#38bdf8" font-size="8" font-family="sans-serif">Mouth</text>
  <text x="162" y="30" fill="#38bdf8" font-size="8" font-family="sans-serif">Oesophagus</text>
  <text x="82" y="86" fill="#fbbf24" font-size="8" font-family="sans-serif">Stomach</text>
  <text x="172" y="94" fill="#34d399" font-size="8" font-family="sans-serif">Duodenum</text>
  <text x="96" y="155" fill="#34d399" font-size="8" font-family="sans-serif">Ileum</text>
  <text x="196" y="110" fill="#a78bfa" font-size="8" font-family="sans-serif">Colon</text>
  <text x="197" y="176" fill="#a78bfa" font-size="8" font-family="sans-serif">Rectum</text>
  <text x="196" y="192" fill="#fb7185" font-size="8" font-family="sans-serif">Anus</text>
  <text x="28" y="70" fill="#fbbf24" font-size="8" font-family="sans-serif">Liver</text>
  <text x="24" y="106" fill="#38bdf8" font-size="8" font-family="sans-serif">Pancreas</text>
</svg>`,
        },
      ],
      discovery: {
        problem:
          "If you swallow while hanging upside down, the food still reaches your stomach. How does it get there against gravity?",
        idea:
          "Peristalsis — the wave of muscular contraction — is entirely responsible. The gut wall contains layers of circular and longitudinal smooth muscle; their coordinated contraction squeezes the food bolus forward regardless of body orientation.",
      },
      whyItWorks:
        "Circular muscle contracts behind the bolus (narrowing the tube) while longitudinal muscle contracts ahead of it (shortening and widening the tube). The net effect is a travelling wave that propels contents forward. The myenteric nerve plexus in the gut wall coordinates this reflex autonomously — no conscious effort required.",
    },

    // ── Section 4 ─────────────────────────────────────────────────────────────
    {
      heading: "Teeth and Dental Health",
      body: `Humans have two sets of teeth: **deciduous** (milk teeth, 20 total) and **permanent** (32 total, including wisdom teeth).

**Types of teeth and functions:**
- **Incisors** — chisel-shaped; cutting and biting food.
- **Canines** — pointed; tearing food (more prominent in carnivores).
- **Premolars** — two cusps; grinding and crushing.
- **Molars** — broad, multiple cusps; grinding food into smaller pieces.

**Tooth structure:**
- *Enamel*: hardest substance in the body; protects the crown; made of calcium phosphate.
- *Dentine*: slightly softer than enamel; forms the bulk of the tooth.
- *Pulp cavity*: contains nerves and blood vessels; supplies the tooth.
- *Cement*: anchors the root to the jawbone via the periodontal ligament.

**Dental decay (dental caries):**
Bacteria in the mouth (especially *Streptococcus mutans*) feed on sugars and produce **lactic acid** as a by-product. This acid dissolves the calcium phosphate in enamel (demineralisation), creating cavities. If untreated, decay reaches dentine and eventually the pulp, causing pain and infection.

**Prevention:**
- Brushing with fluoride toothpaste (fluoride strengthens enamel by forming fluorapatite).
- Reducing frequency of sugar intake (fewer acid attacks per day).
- Flossing to remove plaque (biofilm of bacteria).
- Regular dental check-ups.
- Fluoridation of water supplies.`,
      keyPoints: [
        "Four tooth types: incisors (cutting), canines (tearing), premolars and molars (grinding).",
        "Enamel is the hardest substance in the body; made of calcium phosphate.",
        "Dental decay: bacteria convert sugars → lactic acid → enamel dissolution.",
        "Fluoride toothpaste strengthens enamel and reduces decay risk.",
        "Reducing sugar frequency (not just total amount) is key to preventing acid attacks.",
      ],
      strategies: ["Remember ICPM — Incisor, Canine, Premolar, Molar — in order from front to back."],
    },

    // ── Section 5 ─────────────────────────────────────────────────────────────
    {
      heading: "Digestive Enzymes and Bile",
      body: `**Chemical digestion** uses enzymes to hydrolyse (break down with water) large insoluble molecules into small soluble ones that can be absorbed.

**Key enzymes:**

| Enzyme | Substrate | Product(s) | Where produced | Where it acts |
|---|---|---|---|---|
| Salivary amylase | Starch | Maltose | Salivary glands | Mouth |
| Pancreatic amylase | Starch | Maltose | Pancreas | Small intestine (duodenum) |
| Maltase | Maltose | Glucose | Small intestine wall | Small intestine |
| Pepsin (protease) | Proteins | Peptides/amino acids | Stomach wall | Stomach (pH 2) |
| Pancreatic protease (e.g. trypsin) | Proteins/peptides | Amino acids | Pancreas | Small intestine |
| Lipase | Fats (lipids) | Fatty acids + glycerol | Pancreas | Small intestine |

**pH optima:** Pepsin works best at pH 2 (stomach); amylase and lipase work best at pH 7–8 (small intestine).

**Bile** is not an enzyme. It is a secretion produced by the **liver**, stored in the **gall bladder**, and released into the duodenum via the bile duct. Bile has two roles:
1. **Emulsification of fats**: Bile salts break large fat globules into smaller droplets (emulsion), greatly increasing the surface area for lipase to act on.
2. **Neutralisation**: Bile is alkaline (contains sodium hydrogencarbonate); it neutralises the acidic chyme arriving from the stomach, providing the optimal pH for pancreatic enzymes.

**Hydrolysis reactions (summary):**
- Starch (polymer of glucose) + water → maltose; maltose + water → glucose + glucose
- Protein (polymer of amino acids) + water → amino acids
- Fat (glycerol + 3 fatty acids) + water → glycerol + 3 fatty acids`,
      keyPoints: [
        "Amylase digests starch → maltose; acts in mouth and small intestine.",
        "Pepsin (protease) digests proteins in the stomach at pH 2.",
        "Lipase digests fats → fatty acids + glycerol in the small intestine.",
        "Bile emulsifies fats (increases surface area) and neutralises stomach acid in the duodenum.",
        "All digestive enzymes catalyse hydrolysis reactions — adding water to break bonds.",
      ],
      diagrams: [
        {
          caption: "Enzyme action: amylase, protease, lipase — substrates and products",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing three digestive enzymes, their substrates and products with arrows">
  <rect width="320" height="200" fill="#0f172a" rx="8"/>
  <text x="160" y="18" fill="#eef0ff" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">Digestive Enzyme Reactions</text>

  <!-- Amylase row -->
  <rect x="8" y="30" width="80" height="28" rx="4" fill="#1e3a5f" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="48" y="43" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">STARCH</text>
  <text x="48" y="54" fill="#b7bce0" font-size="8" text-anchor="middle" font-family="sans-serif">(large; insoluble)</text>
  <text x="108" y="46" fill="#fbbf24" font-size="9" text-anchor="middle" font-family="sans-serif">Amylase</text>
  <text x="108" y="56" fill="#b7bce0" font-size="7" text-anchor="middle" font-family="sans-serif">+ H2O</text>
  <line x1="88" y1="44" x2="130" y2="44" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arr)"/>
  <rect x="132" y="30" width="80" height="28" rx="4" fill="#1e3a5f" stroke="#34d399" stroke-width="1.5"/>
  <text x="172" y="43" fill="#34d399" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">MALTOSE</text>
  <text x="172" y="54" fill="#b7bce0" font-size="8" text-anchor="middle" font-family="sans-serif">→ glucose (maltase)</text>
  <text x="240" y="44" fill="#b7bce0" font-size="8" text-anchor="middle" font-family="sans-serif">Mouth / duodenum</text>

  <!-- Protease row -->
  <rect x="8" y="80" width="80" height="28" rx="4" fill="#1e3a5f" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="48" y="93" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">PROTEIN</text>
  <text x="48" y="104" fill="#b7bce0" font-size="8" text-anchor="middle" font-family="sans-serif">(large; insoluble)</text>
  <text x="108" y="96" fill="#fbbf24" font-size="9" text-anchor="middle" font-family="sans-serif">Protease</text>
  <text x="108" y="106" fill="#b7bce0" font-size="7" text-anchor="middle" font-family="sans-serif">+ H2O</text>
  <line x1="88" y1="94" x2="130" y2="94" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arr)"/>
  <rect x="132" y="80" width="80" height="28" rx="4" fill="#1e3a5f" stroke="#34d399" stroke-width="1.5"/>
  <text x="172" y="93" fill="#34d399" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">AMINO ACIDS</text>
  <text x="172" y="104" fill="#b7bce0" font-size="8" text-anchor="middle" font-family="sans-serif">(small; soluble)</text>
  <text x="240" y="94" fill="#b7bce0" font-size="8" text-anchor="middle" font-family="sans-serif">Stomach / duodenum</text>

  <!-- Lipase row -->
  <rect x="8" y="130" width="80" height="28" rx="4" fill="#1e3a5f" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="48" y="143" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">FAT (LIPID)</text>
  <text x="48" y="154" fill="#b7bce0" font-size="8" text-anchor="middle" font-family="sans-serif">(large; insoluble)</text>
  <text x="108" y="146" fill="#fbbf24" font-size="9" text-anchor="middle" font-family="sans-serif">Lipase</text>
  <text x="108" y="156" fill="#b7bce0" font-size="7" text-anchor="middle" font-family="sans-serif">+ H2O</text>
  <line x1="88" y1="144" x2="130" y2="144" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arr)"/>
  <rect x="132" y="130" width="80" height="28" rx="4" fill="#1e3a5f" stroke="#34d399" stroke-width="1.5"/>
  <text x="172" y="143" fill="#34d399" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">FATTY ACIDS</text>
  <text x="172" y="154" fill="#34d399" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">+ GLYCEROL</text>
  <text x="240" y="144" fill="#b7bce0" font-size="8" text-anchor="middle" font-family="sans-serif">Small intestine</text>

  <defs>
    <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#fbbf24"/>
    </marker>
  </defs>
</svg>`,
        },
      ],
      strategies: [
        "Use the acronym SAPL: Salivary amylase (mouth) → Amylase/Protease/Lipase (pancreas → duodenum).",
        "Remember: bile emulsifies, it does NOT digest. It has no enzymatic action.",
      ],
      thinkDeeper:
        "Why does pepsin not digest the stomach wall itself? The stomach lining is protected by a thick layer of alkaline mucus that prevents pepsin reaching the epithelial cells. When this protection breaks down (e.g. due to *Helicobacter pylori* infection or aspirin overuse), stomach ulcers result.",
    },

    // ── Section 6 ─────────────────────────────────────────────────────────────
    {
      heading: "Absorption: Structure of Villi",
      body: `The small intestine is the main site of absorption. Digested nutrients must cross the gut wall into the blood or lymph. The inner surface of the ileum is folded into finger-like projections called **villi** (singular: villus), and each villus cell is itself covered in **microvilli** (the brush border), creating an enormous surface area.

**Adaptations of villi for efficient absorption:**

1. **Large surface area**: villi and microvilli increase the absorptive surface by up to 600-fold compared with a smooth tube.
2. **Single layer of epithelial cells**: very short diffusion distance for nutrients to cross.
3. **Rich blood capillary network**: carries glucose and amino acids away, maintaining a steep concentration gradient for diffusion/active transport.
4. **Central lacteal**: a lymph vessel that absorbs fatty acids and glycerol (reassembled into fats before entering the lacteal as chylomicrons).
5. **Thin walls**: further reduces diffusion distance.
6. **Constant movement**: villi move rhythmically, stirring the intestinal contents and maintaining concentration gradients.

**What is absorbed where:**
- **Glucose and amino acids**: absorbed by active transport into blood capillaries → hepatic portal vein → liver.
- **Fatty acids + glycerol**: absorbed into epithelial cells, resynthesised into triglycerides, packaged into **chylomicrons**, and enter the **lacteal** (lymph) → lymphatic system → bloodstream.
- **Water**: absorbed mainly in the large intestine (colon).
- **Mineral ions** (e.g. Na+, Ca2+, Fe2+): absorbed by active transport.

**Assimilation** is the process by which absorbed nutrients are taken up by cells and used — for example, glucose used in respiration, amino acids used to synthesise proteins, fatty acids used to make cell membranes.`,
      keyPoints: [
        "Villi and microvilli provide a large surface area, short diffusion distance, and rich blood supply for fast absorption.",
        "Glucose and amino acids enter blood capillaries; fatty acids and glycerol enter the lacteal (lymph vessel).",
        "The hepatic portal vein carries absorbed nutrients from the small intestine to the liver.",
        "Water is absorbed mainly in the colon (large intestine).",
        "Assimilation is the use of absorbed nutrients by body cells — distinct from absorption.",
      ],
      diagrams: [
        {
          caption: "A single villus — labelled cross-section showing adaptations for absorption",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Labelled diagram of a single intestinal villus showing epithelial cells with microvilli, blood capillaries and central lacteal">
  <rect width="320" height="200" fill="#0f172a" rx="8"/>
  <!-- villus outline -->
  <path d="M 100 190 Q 100 50 130 30 Q 160 16 190 30 Q 220 50 220 190 Z" fill="#1e3a5f" stroke="#38bdf8" stroke-width="2"/>
  <!-- microvilli top -->
  <line x1="120" y1="32" x2="120" y2="22" stroke="#34d399" stroke-width="2"/>
  <line x1="130" y1="26" x2="130" y2="16" stroke="#34d399" stroke-width="2"/>
  <line x1="140" y1="22" x2="140" y2="12" stroke="#34d399" stroke-width="2"/>
  <line x1="150" y1="20" x2="150" y2="10" stroke="#34d399" stroke-width="2"/>
  <line x1="160" y1="18" x2="160" y2="8" stroke="#34d399" stroke-width="2"/>
  <line x1="170" y1="20" x2="170" y2="10" stroke="#34d399" stroke-width="2"/>
  <line x1="180" y1="22" x2="180" y2="12" stroke="#34d399" stroke-width="2"/>
  <line x1="190" y1="26" x2="190" y2="16" stroke="#34d399" stroke-width="2"/>
  <line x1="200" y1="32" x2="200" y2="22" stroke="#34d399" stroke-width="2"/>
  <!-- lacteal -->
  <path d="M 155 185 Q 155 120 155 70 Q 155 50 155 40" fill="none" stroke="#a78bfa" stroke-width="5" stroke-linecap="round"/>
  <!-- capillaries -->
  <ellipse cx="130" cy="100" rx="12" ry="40" fill="none" stroke="#fb7185" stroke-width="2"/>
  <ellipse cx="190" cy="100" rx="12" ry="40" fill="none" stroke="#fb7185" stroke-width="2"/>
  <!-- epithelial cell layer hint -->
  <path d="M 100 190 Q 100 50 130 30 Q 160 16 190 30 Q 220 50 220 190" fill="none" stroke="#38bdf8" stroke-width="3"/>

  <!-- labels -->
  <text x="222" y="25" fill="#34d399" font-size="8" font-family="sans-serif">Microvilli</text>
  <text x="222" y="38" fill="#b7bce0" font-size="7" font-family="sans-serif">(brush border)</text>

  <line x1="218" y1="44" x2="200" y2="55" stroke="#38bdf8" stroke-width="1"/>
  <text x="220" y="58" fill="#38bdf8" font-size="8" font-family="sans-serif">Epithelial</text>
  <text x="220" y="68" fill="#38bdf8" font-size="8" font-family="sans-serif">cells (1 layer)</text>

  <line x1="140" y1="100" x2="118" y2="100" stroke="#fb7185" stroke-width="1"/>
  <text x="46" y="98" fill="#fb7185" font-size="8" font-family="sans-serif">Blood</text>
  <text x="46" y="108" fill="#fb7185" font-size="8" font-family="sans-serif">capillary</text>
  <text x="46" y="118" fill="#b7bce0" font-size="7" font-family="sans-serif">(glucose,</text>
  <text x="46" y="128" fill="#b7bce0" font-size="7" font-family="sans-serif">amino acids)</text>

  <line x1="155" y1="105" x2="170" y2="105" stroke="#a78bfa" stroke-width="1"/>
  <text x="194" y="102" fill="#a78bfa" font-size="8" font-family="sans-serif">Lacteal</text>
  <text x="194" y="112" fill="#b7bce0" font-size="7" font-family="sans-serif">(fatty acids</text>
  <text x="194" y="122" fill="#b7bce0" font-size="7" font-family="sans-serif">+ glycerol)</text>

  <text x="90" y="185" fill="#b7bce0" font-size="7" font-family="sans-serif" text-anchor="middle">Gut lumen</text>
  <text x="160" y="198" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">Single Villus</text>
</svg>`,
        },
      ],
      discovery: {
        problem:
          "The small intestine is about 6 m long. Even so, if its inner surface were perfectly smooth, only a few square metres of absorptive area would be available. Yet the rate of absorption of a large meal is remarkably fast. What structural features might account for this?",
        idea:
          "Three levels of folding multiply the surface area enormously: (1) circular folds of the gut wall, (2) villi projecting from those folds, and (3) microvilli on each epithelial cell. Together they increase the surface area to approximately 200 m² — the size of a tennis court — in a tube less than 4 cm in diameter.",
      },
      whyItWorks:
        "Absorption rate depends on Fick's law: rate ∝ (surface area × concentration difference) / diffusion distance. Villi maximise surface area; a single epithelial cell layer minimises diffusion distance; a dense capillary network maintains the concentration gradient by constantly removing absorbed molecules. Each adaptation directly targets one term in this relationship.",
      strategies: [
        "For any absorption question, think: 'How does this feature increase surface area, reduce diffusion distance, or maintain the concentration gradient?'",
      ],
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // LEARN SMART
  // ─────────────────────────────────────────────────────────────────────────────
  learn: {
    keyFacts: [
      "A balanced diet contains carbohydrates, fats, proteins, vitamins (C, D), minerals (Ca, Fe), dietary fibre, and water.",
      "Vitamin C deficiency causes scurvy (bleeding gums, poor wound healing); vitamin D deficiency causes rickets (soft bones).",
      "Amylase converts starch → maltose in the mouth and duodenum; maltase then converts maltose → glucose.",
      "Pepsin (protease) digests proteins in the stomach at pH 2; the stomach also produces HCl to kill bacteria.",
      "Lipase digests fats → fatty acids + glycerol in the small intestine.",
      "Bile is produced by the liver, stored in the gall bladder, and emulsifies fats and neutralises acid in the duodenum.",
      "Villi and microvilli in the ileum provide a large surface area (~200 m²) for absorption.",
      "Glucose and amino acids are absorbed into blood capillaries; fatty acids and glycerol enter lacteals (lymph).",
      "The colon absorbs water from undigested material to form faeces.",
      "Energy requirements are affected by age, activity level, pregnancy, body size, and sex.",
    ],
    flashcards: [
      { front: "What are the products of fat digestion?", back: "Fatty acids and glycerol (by lipase)." },
      { front: "What enzyme breaks down starch, and what does it produce?", back: "Amylase → maltose (then maltase → glucose)." },
      { front: "Where is bile produced, and where is it released?", back: "Produced in the liver; stored in the gall bladder; released into the duodenum." },
      { front: "Name two functions of bile.", back: "1. Emulsification of fats (increases surface area for lipase). 2. Neutralisation of stomach acid in the duodenum." },
      { front: "What deficiency disease is caused by lack of vitamin C?", back: "Scurvy — symptoms include bleeding gums and slow wound healing." },
      { front: "What deficiency disease is caused by lack of vitamin D?", back: "Rickets — soft, deformed bones in children." },
      { front: "List the alimentary canal in order from mouth to anus.", back: "Mouth → oesophagus → stomach → duodenum → ileum → colon → rectum → anus." },
      { front: "What is the difference between absorption and assimilation?", back: "Absorption: nutrients enter the blood/lymph from the gut. Assimilation: cells take up and use those nutrients." },
      { front: "What are the five key digestive processes?", back: "Ingestion, digestion (mechanical + chemical), absorption, assimilation, egestion." },
      { front: "Why does the stomach produce HCl?", back: "To kill bacteria in food; to provide the low pH (≈2) that is optimal for pepsin activity." },
      { front: "How do villi adapt the small intestine for absorption?", back: "Large surface area, single layer of epithelial cells (short diffusion distance), rich blood capillary network, central lacteal." },
      { front: "What happens to fatty acids and glycerol inside villus epithelial cells?", back: "They are resynthesised into triglycerides, packaged as chylomicrons, and enter the lacteal (lymph vessel)." },
    ],
    keyTerms: [
      { term: "Balanced diet", definition: "A diet containing all seven nutrient classes in the correct proportions to maintain health." },
      { term: "Peristalsis", definition: "Wave-like muscular contractions of the gut wall that propel food along the alimentary canal." },
      { term: "Ingestion", definition: "The taking of food into the body through the mouth." },
      { term: "Mechanical digestion", definition: "Physical breakdown of food into smaller pieces (e.g. by teeth or churning in stomach) without chemical change." },
      { term: "Chemical digestion", definition: "Enzymatic hydrolysis of large, insoluble food molecules into small, soluble ones." },
      { term: "Absorption", definition: "The passage of digested nutrients from the gut lumen into the blood or lymph." },
      { term: "Assimilation", definition: "The uptake and use of absorbed nutrients by body cells for metabolism." },
      { term: "Egestion", definition: "The elimination of undigested material from the body as faeces via the anus." },
      { term: "Emulsification", definition: "The breaking of large fat globules into smaller droplets by bile salts, increasing surface area for lipase." },
      { term: "Villus (pl. villi)", definition: "Finger-like projection of the small intestine lining that increases surface area for absorption." },
      { term: "Lacteal", definition: "A lymph vessel inside a villus that absorbs fatty acids and glycerol (as chylomicrons)." },
      { term: "Scurvy", definition: "A deficiency disease caused by lack of vitamin C; symptoms include bleeding gums and poor wound healing." },
      { term: "Rickets", definition: "A deficiency disease in children caused by lack of vitamin D; results in soft, deformed bones." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // QUICK QUIZ
  // ─────────────────────────────────────────────────────────────────────────────
  quiz: {
    mcq: [
      {
        id: "bio-human-nutrition-mcq-q01",
        question: "Which nutrient deficiency causes rickets?",
        options: ["Vitamin C", "Vitamin D", "Iron", "Calcium"],
        answerIndex: 1,
        explanation: "Vitamin D is required for calcium absorption from the gut and for bone mineralisation. Its deficiency in children leads to rickets — soft, bowed bones. Vitamin C deficiency causes scurvy; iron deficiency causes anaemia; calcium deficiency weakens bones but rickets is specifically the vitamin D deficiency disease.",
        guideRef: "Balanced Diet and Nutrients",
        difficulty: "warmup",
      },
      {
        id: "bio-human-nutrition-mcq-q02",
        question: "Which enzyme catalyses the digestion of starch in the mouth?",
        options: ["Pepsin", "Lipase", "Salivary amylase", "Trypsin"],
        answerIndex: 2,
        explanation: "Salivary amylase is secreted by salivary glands into the mouth and begins the digestion of starch into maltose. Pepsin acts on proteins in the stomach; lipase acts on fats in the small intestine; trypsin is a protease from the pancreas.",
        guideRef: "Digestive Enzymes and Bile",
        difficulty: "warmup",
      },
      {
        id: "bio-human-nutrition-mcq-q03",
        question: "What is the role of bile in digestion?",
        options: [
          "It digests fats by hydrolysis into fatty acids and glycerol.",
          "It emulsifies fats and neutralises acid chyme in the duodenum.",
          "It activates pepsin in the stomach.",
          "It absorbs glucose into the bloodstream.",
        ],
        answerIndex: 1,
        explanation: "Bile is not an enzyme and does not chemically digest fats. It emulsifies fats — breaking large globules into smaller droplets to increase surface area for lipase — and neutralises the acidic chyme from the stomach, providing the alkaline pH needed for pancreatic enzymes. The other options describe functions of enzymes or absorption processes.",
        guideRef: "Digestive Enzymes and Bile",
        difficulty: "core",
        hints: [
          "Is bile an enzyme? Think about whether it breaks chemical bonds.",
          "Bile comes from the liver. What property would it need to counteract stomach acid?",
          "Think about fat droplets — what physical process makes them smaller without breaking bonds?",
        ],
      },
      {
        id: "bio-human-nutrition-mcq-q04",
        question: "In the correct order, food passes through: mouth → oesophagus → stomach → _____ → ileum → colon → rectum → anus. Which organ fills the blank?",
        options: ["Liver", "Pancreas", "Duodenum", "Caecum"],
        answerIndex: 2,
        explanation: "The duodenum is the first section of the small intestine, immediately following the stomach. The liver and pancreas are accessory organs that deliver secretions into the duodenum but food does not pass through them. The caecum is a pouch at the start of the large intestine, after the ileum.",
        guideRef: "The Alimentary Canal",
        difficulty: "warmup",
      },
      {
        id: "bio-human-nutrition-mcq-q05",
        question: "A student eats a meal and then tests their blood in the hepatic portal vein. Which substances would be at highest concentration immediately after absorption?",
        options: [
          "Fatty acids and glycerol",
          "Glucose and amino acids",
          "Starch and proteins",
          "Maltose and peptides",
        ],
        answerIndex: 1,
        explanation: "The hepatic portal vein carries blood from the small intestine to the liver. After a meal, the absorbed products of carbohydrate digestion (glucose) and protein digestion (amino acids) enter the blood capillaries of the villi and travel via the hepatic portal vein. Fatty acids and glycerol enter lacteals (lymph), not blood capillaries. Starch, proteins, maltose, and peptides are not fully digested and would not be absorbed directly.",
        guideRef: "Absorption: Structure of Villi",
        difficulty: "core",
        hints: [
          "What are the final products of carbohydrate and protein digestion?",
          "Do fatty acids enter blood capillaries or lacteals?",
          "The hepatic portal vein connects the small intestine to the liver — only blood-borne molecules are carried here.",
        ],
      },
      {
        id: "bio-human-nutrition-mcq-q06",
        question: "A long-distance runner needs far more daily energy than a sedentary office worker of the same age, sex, and mass. Which factor best explains this difference?",
        options: ["Age", "Body mass", "Level of physical activity", "Pregnancy"],
        answerIndex: 2,
        explanation: "Physical activity dramatically increases the rate of ATP production needed by muscles, increasing overall energy demand. The question specifies same age, sex, and mass, ruling out those factors. Pregnancy is irrelevant unless specified.",
        guideRef: "Energy Requirements",
        difficulty: "warmup",
      },
    ],
    qa: [
      {
        id: "bio-human-nutrition-qa-q01",
        question: "Describe how a villus in the ileum is adapted for the absorption of glucose. [4 marks]",
        marks: 4,
        modelAnswer:
          "The villus has a large surface area due to the finger-like projections from the gut wall, and each epithelial cell is itself covered in microvilli (brush border), further increasing surface area for diffusion/active transport. The epithelial layer is only one cell thick, providing a very short diffusion distance. Inside the villus is a dense network of blood capillaries, which maintain a steep concentration gradient by constantly carrying glucose away to the liver via the hepatic portal vein. Glucose is transported into epithelial cells by active transport (using ATP) against its concentration gradient.",
        markScheme: [
          "Large surface area due to villi / microvilli / brush border",
          "Single layer of epithelial cells / thin wall for short diffusion distance",
          "Rich blood capillary supply maintains concentration gradient",
          "Active transport of glucose across epithelial cell membrane / requires ATP",
        ],
        commonError:
          "Stating that glucose enters the lacteal — glucose and amino acids enter blood capillaries; only fatty acids and glycerol enter the lacteal.",
        guideRef: "Absorption: Structure of Villi",
        difficulty: "core",
        hints: [
          "Think of Fick's law: rate depends on surface area, concentration difference, and diffusion distance.",
          "How thick is the epithelial layer, and why does that matter?",
          "What carries glucose away from the villus, and why does this maintain absorption rate?",
          "Is glucose transported by diffusion alone, or is active transport needed?",
        ],
        strategy: "Match each adaptation to the factor it improves (surface area, diffusion distance, or gradient).",
      },
      {
        id: "bio-human-nutrition-qa-q02",
        question: "Explain why the stomach produces both pepsin and hydrochloric acid. [4 marks]",
        marks: 4,
        modelAnswer:
          "The stomach produces pepsin, which is a protease enzyme that digests proteins by hydrolysing peptide bonds, breaking proteins into shorter peptides and amino acids. Hydrochloric acid (HCl) creates the strongly acidic conditions (pH ≈ 2) in the stomach lumen, which is the optimal pH for pepsin to work efficiently. HCl also kills most bacteria and other pathogens that enter with food, protecting against infection. Additionally, HCl denatures proteins, unfolding them and making their peptide bonds more accessible to pepsin.",
        markScheme: [
          "Pepsin is a protease / digests proteins into peptides / amino acids",
          "HCl provides optimal (acidic) pH for pepsin activity",
          "HCl kills bacteria / pathogens in food",
          "HCl denatures proteins / unfolds protein structure",
        ],
        commonError:
          "Confusing pepsin and pepsinogen — pepsin is the active enzyme; it is secreted as inactive pepsinogen and activated by HCl. At IGCSE level, 'pepsin' is sufficient.",
        guideRef: "The Alimentary Canal",
        difficulty: "core",
        hints: [
          "Pepsin is an enzyme — what type, and what is its substrate?",
          "What pH does pepsin work best at, and how does HCl help?",
          "Think beyond digestion — what other function does a strongly acidic environment serve?",
        ],
      },
      {
        id: "bio-human-nutrition-qa-q03",
        question: "A student designs an experiment to investigate the effect of bile on the digestion of fat by lipase. Describe how the student should set up the experiment, identify the key variables, and explain the expected result. [6 marks]",
        marks: 6,
        modelAnswer:
          "Set-up: Prepare two test tubes, each containing: fat emulsion (e.g. full-fat milk), lipase solution, and a pH indicator (e.g. phenolphthalein — pink in alkaline, colourless in acid). Add a buffer to maintain starting pH at approximately 7. Test tube A also contains bile solution; test tube B contains an equal volume of water (control). Place both tubes in a water bath at 37°C (body temperature) and record the time for the indicator to change from pink to colourless (as fatty acids produced by lipase lower the pH).\n\nVariables: Independent — presence/absence of bile. Dependent — time for colour change (rate of fat digestion). Controlled — temperature, volume and concentration of lipase, fat, starting pH, volume of bile/water added.\n\nExpected result: Test tube A (with bile) will change colour faster than test tube B (without bile). Bile emulsifies fat globules into smaller droplets, greatly increasing the surface area available for lipase to act on, so digestion is faster.",
        markScheme: [
          "Two test tubes: one with bile, one without (water as control) / fair test",
          "Both contain lipase and fat (e.g. milk) at same concentrations",
          "pH indicator used to detect fatty acid production / colour change described correctly",
          "Temperature controlled at 37°C / water bath used",
          "Independent variable: presence of bile; dependent variable: rate of pH change / time for colour change",
          "Expected result: bile tube reacts faster / bile emulsifies fat / increases surface area for lipase",
        ],
        commonError:
          "Forgetting to state a control tube (without bile) — without it the experiment cannot show the effect of bile specifically.",
        guideRef: "Digestive Enzymes and Bile",
        difficulty: "challenge",
        hints: [
          "What does a fair test require? Identify what you are changing and what you must keep the same.",
          "How can you measure the rate of fat digestion? Think about what products are produced.",
          "Phenolphthalein turns colourless in acid — as fatty acids are released, pH drops. How does this help you compare rates?",
          "Why is 37°C the appropriate temperature for this experiment?",
        ],
        strategy: "Experiment design: state the IV, DV, CVs, and then describe the method step by step. Conclude by predicting results using scientific explanation.",
        solutions: [
          {
            label: "Method using phenolphthalein pH indicator",
            steps: [
              "Add 5 cm³ full-fat milk + 1 cm³ lipase + 0.5 cm³ phenolphthalein to each tube; adjust starting pH to 8 with Na2CO3 so indicator is pink.",
              "Add 1 cm³ bile solution to tube A; 1 cm³ distilled water to tube B (control).",
              "Place both tubes in a 37°C water bath. Start a timer.",
              "Record the time taken for the indicator to turn colourless (pH drops below 7 as fatty acids form).",
              "Repeat 3 times; calculate mean. Shorter time in tube A → bile speeds fat digestion.",
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // QUESTION BANK
  // ─────────────────────────────────────────────────────────────────────────────
  questionBank: {
    mcqPapers: [
      {
        id: "bio-human-nutrition-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Balanced diet, nutrient roles, deficiency diseases and energy requirements.",
        questions: [
          {
            id: "bio-human-nutrition-bm1-01",
            question: "Which nutrient provides the most concentrated store of energy per gram?",
            options: ["Carbohydrate", "Protein", "Fat", "Dietary fibre"],
            answerIndex: 2,
            explanation: "Fat (lipid) provides about 9 kcal per gram, roughly twice the energy of carbohydrate or protein (about 4 kcal per gram). This makes it the body's most concentrated energy store. Dietary fibre cannot be digested and provides essentially no usable energy.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bm1-02",
            question: "Which component of the diet cannot be digested but is needed to stimulate peristalsis?",
            options: ["Starch", "Dietary fibre", "Glycogen", "Protein"],
            answerIndex: 1,
            explanation: "Dietary fibre (roughage) is mainly cellulose from plant cell walls. Humans lack the enzyme to digest cellulose, so it passes through the gut undigested, adding bulk to the faeces and stimulating peristalsis, which reduces the risk of constipation.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bm1-03",
            question: "A child has soft, deformed leg bones that bow under the body's weight. Which deficiency is the most likely cause?",
            options: ["Iron", "Vitamin C", "Vitamin D", "Dietary fibre"],
            answerIndex: 2,
            explanation: "Vitamin D is needed for the absorption of calcium from the gut and for bone mineralisation. Its deficiency in children causes rickets — soft bones that bend under the body's weight. Iron deficiency causes anaemia; vitamin C deficiency causes scurvy.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "core",
            hints: [
              "Soft, weak bones point to a problem with bone mineralisation.",
              "Which vitamin is needed for calcium to be absorbed and laid down in bone?",
              "Distinguish this from a calcium-only deficiency: the named disease here is specifically a vitamin deficiency.",
            ],
          },
          {
            id: "bio-human-nutrition-bm1-04",
            question: "Why is water described as essential in the diet?",
            options: [
              "It provides a concentrated source of energy.",
              "It is the solvent in which biochemical reactions occur and the medium for transport in blood.",
              "It is digested into glucose by amylase.",
              "It stimulates peristalsis in the same way as fibre.",
            ],
            answerIndex: 1,
            explanation: "Water is the universal biological solvent: metabolic reactions take place in solution, and substances are transported dissolved in blood and lymph. Water is also vital for temperature regulation through sweating. It is not an energy source and is not digested.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "core",
            hints: [
              "Water is not broken down for energy — so what physical role does it play?",
              "Think about where chemical reactions in cells take place.",
              "Consider how substances move around in blood and how the body cools itself.",
            ],
          },
          {
            id: "bio-human-nutrition-bm1-05",
            question: "Which mineral is a component of haemoglobin?",
            options: ["Calcium", "Iron", "Iodine", "Sodium"],
            answerIndex: 1,
            explanation: "Iron is a component of haemoglobin, the protein in red blood cells that binds and transports oxygen. A lack of iron reduces haemoglobin production, causing anaemia. Calcium is needed for bones and teeth; it is not part of haemoglobin.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bm1-06",
            question: "Pregnant women in the third trimester are advised to consume about 300 kcal extra per day. The best explanation is that the extra energy is needed for:",
            options: [
              "Increased peristalsis in the mother's gut.",
              "Growth of the foetus and associated tissues.",
              "Production of extra digestive enzymes.",
              "Replacing iron lost in sweat.",
            ],
            answerIndex: 1,
            explanation: "Pregnancy increases energy requirements because energy is needed for the growth of the foetus and associated tissues (placenta, increased maternal blood volume), and later for milk production during lactation. The roughly 300 kcal/day figure applies to late pregnancy.",
            guideRef: "Energy Requirements",
            difficulty: "core",
            hints: [
              "What new structures are being built during pregnancy?",
              "Energy is needed wherever new tissue is synthesised.",
              "The figure applies to late pregnancy when the foetus is growing fastest.",
            ],
          },
          {
            id: "bio-human-nutrition-bm1-07",
            question: "Which factor would NOT, by itself, increase a person's daily energy requirement?",
            options: [
              "Becoming a manual labourer instead of an office worker",
              "Living in a very cold climate",
              "Spending the day resting in bed instead of training",
              "Entering a period of rapid adolescent growth",
            ],
            answerIndex: 2,
            explanation: "Resting in bed lowers, not raises, energy demand because little energy is used for muscle contraction. Manual work, a cold climate (extra heat production needed), and rapid growth all increase energy requirements.",
            guideRef: "Energy Requirements",
            difficulty: "core",
            hints: [
              "Three options raise energy demand and one lowers it — find the odd one out.",
              "Energy use is dominated by activity and growth.",
              "What happens to energy demand when muscles are inactive?",
            ],
          },
          {
            id: "bio-human-nutrition-bm1-08",
            question: "Marasmus and kwashiorkor are both forms of undernutrition. What is the key difference between them?",
            options: [
              "Marasmus is caused by lack of vitamin C; kwashiorkor by lack of vitamin D.",
              "Marasmus is caused by a deficiency of total food/energy; kwashiorkor by a deficiency of protein.",
              "Marasmus is caused by excess calorie intake; kwashiorkor by excess protein.",
              "Marasmus affects only adults; kwashiorkor only the elderly.",
            ],
            answerIndex: 1,
            explanation: "Marasmus results from a severe deficiency of total food (energy and all nutrients), giving extreme thinness. Kwashiorkor results specifically from protein deficiency, even when energy intake may be adequate, and is characterised by a swollen abdomen (oedema). Both are forms of undernutrition, a type of malnutrition.",
            guideRef: "Energy Requirements",
            difficulty: "challenge",
            hints: [
              "Both are undernutrition, so neither involves excess.",
              "One is about a shortage of all food; the other about a shortage of one specific nutrient class.",
              "Kwashiorkor is the classic protein-deficiency disease.",
            ],
            strategy: "Pair each named condition with the single nutrient idea it tests: total energy vs protein.",
          },
          {
            id: "bio-human-nutrition-bm1-09",
            question: "A nutritionist compares two men of the same age, mass and activity level. Man A has much more muscle and less fat than Man B. Which statement is most likely correct?",
            options: [
              "Man A has a lower basal metabolic rate because muscle uses little energy.",
              "Man A has a higher basal metabolic rate because muscle tissue is more metabolically active than fat.",
              "Both have identical energy requirements because mass and activity are equal.",
              "Man B requires more energy because fat releases more energy than muscle.",
            ],
            answerIndex: 1,
            explanation: "Muscle (lean) tissue is more metabolically active at rest than fat (adipose) tissue, so a person with more muscle has a higher basal metabolic rate and therefore a higher resting energy requirement, even at the same total mass and activity level.",
            guideRef: "Energy Requirements",
            difficulty: "challenge",
            hints: [
              "BMR depends on the metabolic activity of the tissues making up the body, not just total mass.",
              "Is resting muscle tissue or fat tissue more metabolically active?",
              "More active tissue at rest means a higher basal metabolic rate.",
            ],
            strategy: "When two people share mass and activity, look at body composition to explain a difference in energy needs.",
          },
          {
            id: "bio-human-nutrition-bm1-10",
            question: "Scurvy involves bleeding gums and slow wound healing. Which statement best explains why vitamin C deficiency produces these symptoms?",
            options: [
              "Vitamin C is part of haemoglobin, so without it blood cannot clot.",
              "Vitamin C is required to make collagen; without it connective tissue weakens.",
              "Vitamin C is needed to absorb calcium for strong gums.",
              "Vitamin C is an enzyme that digests dead tissue in wounds.",
            ],
            answerIndex: 1,
            explanation: "Vitamin C is needed for the synthesis of collagen, the protein that gives strength to connective tissue. Without collagen, blood vessel walls and gum tissue weaken (bleeding gums) and wounds cannot be repaired effectively (slow healing). Vitamin C is not part of haemoglobin (that is iron) and is not itself an enzyme.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "challenge",
            hints: [
              "The symptoms all involve weak connective tissue.",
              "Which structural protein does vitamin C help to build?",
              "Without that protein, tissues cannot hold together or repair.",
            ],
            strategy: "Trace symptoms back to a single molecular cause: collagen failure explains every sign of scurvy.",
          },
        ],
      },
      {
        id: "bio-human-nutrition-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "The alimentary canal, peristalsis, teeth and dental health.",
        questions: [
          {
            id: "bio-human-nutrition-bm2-01",
            question: "Which process moves food along the alimentary canal?",
            options: ["Diffusion", "Peristalsis", "Osmosis", "Active transport"],
            answerIndex: 1,
            explanation: "Peristalsis is the wave-like contraction and relaxation of circular and longitudinal muscles in the gut wall, which propels food along the canal in one direction, even against gravity.",
            guideRef: "The Alimentary Canal",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bm2-02",
            question: "Which tooth type is chisel-shaped and used mainly for cutting and biting?",
            options: ["Incisor", "Canine", "Premolar", "Molar"],
            answerIndex: 0,
            explanation: "Incisors are the chisel-shaped front teeth used for cutting and biting food. Canines are pointed for tearing; premolars and molars are broad with cusps for grinding and crushing.",
            guideRef: "Teeth and Dental Health",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bm2-03",
            question: "Which is the hardest substance in the human body?",
            options: ["Dentine", "Cement", "Enamel", "Pulp"],
            answerIndex: 2,
            explanation: "Enamel, made largely of calcium phosphate, is the hardest substance in the body and forms the protective outer layer of the crown of the tooth. Dentine is softer and forms the bulk; cement anchors the root; pulp contains nerves and blood vessels.",
            guideRef: "Teeth and Dental Health",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bm2-04",
            question: "In which region of the gut is most water absorbed from undigested material to form faeces?",
            options: ["Stomach", "Duodenum", "Ileum", "Colon"],
            answerIndex: 3,
            explanation: "The colon (part of the large intestine) absorbs water and mineral salts from the undigested material passing through it, forming semi-solid faeces. The ileum absorbs the products of digestion; most water reabsorption to form faeces happens in the colon.",
            guideRef: "The Alimentary Canal",
            difficulty: "core",
            hints: [
              "Faeces become firmer as they pass through the gut — where does this happen?",
              "Which part of the large intestine specialises in water absorption?",
              "Distinguish nutrient absorption (ileum) from water absorption to form faeces (colon).",
            ],
          },
          {
            id: "bio-human-nutrition-bm2-05",
            question: "Which statement correctly describes the role of the stomach's hydrochloric acid?",
            options: [
              "It digests proteins directly into amino acids.",
              "It provides the optimal pH for pepsin and kills many bacteria in food.",
              "It emulsifies fats into smaller droplets.",
              "It neutralises the acidic chyme before it enters the duodenum.",
            ],
            answerIndex: 1,
            explanation: "Hydrochloric acid gives the stomach a pH of about 2, which is the optimal pH for the protease pepsin and also kills many bacteria and pathogens entering with food. HCl does not itself digest proteins (pepsin does), does not emulsify fats (bile does), and acidifies rather than neutralises.",
            guideRef: "The Alimentary Canal",
            difficulty: "core",
            hints: [
              "HCl is not an enzyme, so it does not digest food directly.",
              "Think about what conditions pepsin needs to work.",
              "Acid also has a protective, antibacterial role.",
            ],
          },
          {
            id: "bio-human-nutrition-bm2-06",
            question: "Which of the following is an accessory organ that does NOT have food passing through it?",
            options: ["Duodenum", "Pancreas", "Ileum", "Colon"],
            answerIndex: 1,
            explanation: "The pancreas is an accessory organ: it delivers pancreatic juice into the duodenum but food does not pass through it. The duodenum, ileum and colon are all parts of the alimentary canal through which food passes.",
            guideRef: "The Alimentary Canal",
            difficulty: "core",
            hints: [
              "Accessory organs add secretions but are not part of the food's path.",
              "Which option produces enzymes but never contains the food bolus?",
              "Three options are sections of the gut tube itself.",
            ],
          },
          {
            id: "bio-human-nutrition-bm2-07",
            question: "Dental caries is most strongly linked to the FREQUENCY of sugar intake rather than the total amount. Why?",
            options: [
              "Each exposure to sugar triggers a separate acid attack on enamel.",
              "Sugar eaten in one sitting cannot be used by bacteria.",
              "Total sugar is harmless because saliva removes it instantly.",
              "Bacteria die when sugar concentration is high.",
            ],
            answerIndex: 0,
            explanation: "Each time sugar is eaten, plaque bacteria ferment it and produce acid, lowering the mouth's pH for a period before saliva restores it. Frequent snacking means many separate acid attacks per day, giving enamel less time to remineralise, so frequency matters more than the total quantity consumed at once.",
            guideRef: "Teeth and Dental Health",
            difficulty: "challenge",
            hints: [
              "Think about what happens to mouth pH each time you eat sugar.",
              "How long does the acid attack last after each exposure?",
              "Compare one large sugary meal with many small sugary snacks.",
            ],
            strategy: "Reason in terms of repeated acid attacks and the time available for remineralisation between them.",
          },
          {
            id: "bio-human-nutrition-bm2-08",
            question: "Fluoride toothpaste helps prevent decay mainly because fluoride:",
            options: [
              "Kills all bacteria in the mouth permanently.",
              "Forms fluorapatite in enamel, making it more resistant to acid.",
              "Neutralises lactic acid into water and carbon dioxide.",
              "Digests plaque between the teeth.",
            ],
            answerIndex: 1,
            explanation: "Fluoride ions are incorporated into enamel, converting hydroxyapatite into fluorapatite, which is harder and more resistant to dissolving in acid. Fluoride does not permanently kill all bacteria, does not chemically neutralise acid, and does not digest plaque.",
            guideRef: "Teeth and Dental Health",
            difficulty: "challenge",
            hints: [
              "Fluoride changes the enamel itself rather than the bacteria.",
              "What new, more acid-resistant mineral is formed?",
              "Stronger enamel resists demineralisation by acid.",
            ],
            strategy: "Focus on the mechanism: fluoride strengthens enamel chemically, it is not an antiseptic.",
          },
          {
            id: "bio-human-nutrition-bm2-09",
            question: "Circular and longitudinal muscles work antagonistically during peristalsis. Which description is correct for moving a bolus forward?",
            options: [
              "Both muscle layers contract together along the whole gut at once.",
              "Circular muscle contracts behind the bolus while longitudinal muscle contracts ahead of it.",
              "Only longitudinal muscle is involved; circular muscle is relaxed throughout.",
              "Circular muscle relaxes behind the bolus to pull it backwards.",
            ],
            answerIndex: 1,
            explanation: "In peristalsis, circular muscle contracts behind the bolus (narrowing the tube to push it forward), while longitudinal muscle contracts ahead of it (shortening and widening that region to receive it). This coordinated wave travels along the gut, propelling food forward.",
            guideRef: "The Alimentary Canal",
            difficulty: "challenge",
            hints: [
              "Antagonistic muscles do opposite things in different places at the same time.",
              "What must happen behind the bolus to push it, and what ahead of it to make room?",
              "Picture a wave squeezing toothpaste along a tube.",
            ],
            strategy: "Separate the action behind the bolus from the action in front of it.",
          },
          {
            id: "bio-human-nutrition-bm2-10",
            question: "Place the following in the correct order that food encounters them: 1 ileum, 2 oesophagus, 3 duodenum, 4 rectum, 5 colon.",
            options: ["2, 3, 1, 5, 4", "2, 1, 3, 5, 4", "3, 2, 1, 4, 5", "2, 3, 5, 1, 4"],
            answerIndex: 0,
            explanation: "After the mouth and stomach, food passes from the oesophagus (2) earlier in the tract, then through the duodenum (3), ileum (1), colon (5) and finally the rectum (4). Note the oesophagus comes before the stomach and the others follow it; the correct relative order of the listed items is 2, 3, 1, 5, 4.",
            guideRef: "The Alimentary Canal",
            difficulty: "core",
            hints: [
              "The oesophagus comes near the start; the rectum is near the end.",
              "Within the small intestine, duodenum comes before ileum.",
              "The colon precedes the rectum in the large intestine.",
            ],
          },
        ],
      },
      {
        id: "bio-human-nutrition-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Digestive enzymes, hydrolysis, bile and pH optima.",
        questions: [
          {
            id: "bio-human-nutrition-bm3-01",
            question: "What are the products when amylase acts on starch?",
            options: ["Glucose", "Maltose", "Amino acids", "Fatty acids and glycerol"],
            answerIndex: 1,
            explanation: "Amylase catalyses the hydrolysis of starch into the disaccharide maltose. Maltase then breaks maltose into glucose. Amino acids come from protein digestion; fatty acids and glycerol from fat digestion.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bm3-02",
            question: "Which enzyme digests proteins in the stomach?",
            options: ["Amylase", "Lipase", "Pepsin", "Maltase"],
            answerIndex: 2,
            explanation: "Pepsin is a protease secreted in the stomach. It works best at the low pH (about 2) created by hydrochloric acid, hydrolysing proteins into shorter peptides and amino acids.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bm3-03",
            question: "All digestive enzymes catalyse the same type of reaction. What is it?",
            options: ["Condensation", "Hydrolysis", "Oxidation", "Neutralisation"],
            answerIndex: 1,
            explanation: "Digestive enzymes catalyse hydrolysis reactions: water is added to break the chemical bonds in large molecules, splitting them into smaller, soluble products. Condensation is the reverse (building molecules and releasing water).",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "core",
            hints: [
              "Digestion breaks large molecules into smaller ones using water.",
              "The opposite reaction builds molecules and releases water.",
              "Recall the term that literally means 'splitting with water'.",
            ],
          },
          {
            id: "bio-human-nutrition-bm3-04",
            question: "Pepsin works best at about pH 2, while pancreatic amylase works best at about pH 7-8. The best explanation is that:",
            options: [
              "Enzymes work at any pH equally well.",
              "Each enzyme has an optimum pH matching the conditions where it normally acts.",
              "Pepsin is denatured by acid but amylase is not.",
              "Amylase is a stronger enzyme than pepsin.",
            ],
            answerIndex: 1,
            explanation: "Each enzyme has an optimum pH at which its active site has the correct shape for catalysis. Pepsin acts in the acidic stomach (pH 2), so its optimum is low; pancreatic amylase acts in the duodenum after acid is neutralised (pH 7-8), so its optimum is near neutral/alkaline. Outside the optimum, the active site changes shape and activity falls.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "core",
            hints: [
              "Enzymes are matched to the environment in which they normally work.",
              "Where in the gut does each enzyme act, and what is the pH there?",
              "Think about how pH affects the shape of the active site.",
            ],
          },
          {
            id: "bio-human-nutrition-bm3-05",
            question: "Which statement about bile is correct?",
            options: [
              "Bile is an enzyme that hydrolyses fats.",
              "Bile is produced in the gall bladder and stored in the liver.",
              "Bile emulsifies fats and is not an enzyme.",
              "Bile is acidic and lowers the pH in the duodenum.",
            ],
            answerIndex: 2,
            explanation: "Bile is a secretion, not an enzyme: it emulsifies fats (breaking large globules into small droplets) and is alkaline, helping neutralise acidic chyme. It is produced by the liver and stored in the gall bladder (not the reverse).",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "core",
            hints: [
              "Does bile chemically break bonds, or just physically change fat globules?",
              "Recall where bile is made and where it is stored.",
              "Is bile acidic or alkaline in the duodenum?",
            ],
          },
          {
            id: "bio-human-nutrition-bm3-06",
            question: "Maltase is produced in, and acts in, the small intestine. What does it do?",
            options: [
              "Hydrolyses maltose into two glucose molecules.",
              "Builds maltose from glucose.",
              "Digests protein into amino acids.",
              "Emulsifies fats with bile.",
            ],
            answerIndex: 0,
            explanation: "Maltase completes carbohydrate digestion by hydrolysing the disaccharide maltose into two glucose molecules, which can then be absorbed. It is a carbohydrase, not a protease, and does not build molecules or emulsify fats.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bm3-07",
            question: "Bile is alkaline. Why is this important for the action of pancreatic enzymes in the duodenum?",
            options: [
              "It makes the duodenum acidic so pepsin can continue working.",
              "It neutralises acidic chyme, providing the pH 7-8 optimum for pancreatic enzymes.",
              "It denatures pancreatic enzymes to slow digestion.",
              "It dissolves the fat-soluble vitamins.",
            ],
            answerIndex: 1,
            explanation: "Chyme leaving the stomach is acidic (pH about 2). Bile (and pancreatic sodium hydrogencarbonate) neutralises this, raising the pH to about 7-8, which is the optimum for pancreatic amylase, lipase and proteases. Without neutralisation these enzymes would be far less active.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "challenge",
            hints: [
              "Chyme arriving from the stomach is strongly acidic.",
              "Pancreatic enzymes have a neutral-to-alkaline optimum.",
              "What must happen to the pH before those enzymes can work well?",
            ],
            strategy: "Link the alkalinity of bile to the pH optimum of the enzymes that follow it.",
          },
          {
            id: "bio-human-nutrition-bm3-08",
            question: "Fat is treated by bile and then lipase. Which sequence is correct and why does the order help?",
            options: [
              "Lipase first to make droplets, then bile to digest them.",
              "Bile first to emulsify into droplets, then lipase to hydrolyse the larger surface area.",
              "Bile and lipase both chemically digest fat into glucose.",
              "Lipase emulsifies fat; bile then absorbs the products.",
            ],
            answerIndex: 1,
            explanation: "Bile acts first, emulsifying large fat globules into many small droplets and greatly increasing the surface area. Lipase, which acts at the fat-water surface, then hydrolyses the fat into fatty acids and glycerol more quickly because more surface is exposed. Bile does not digest fat, and lipase does not emulsify it.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "challenge",
            hints: [
              "One step is physical (emulsification), the other chemical (hydrolysis).",
              "Which must happen first to speed up the second?",
              "Lipase acts at the surface of droplets — more droplets means more surface.",
            ],
            strategy: "Separate physical emulsification from chemical digestion and ask which order maximises rate.",
          },
          {
            id: "bio-human-nutrition-bm3-09",
            question: "A patient cannot release pancreatic juice into the duodenum. Which set of digestive processes is most affected?",
            options: [
              "Only protein digestion in the stomach.",
              "Digestion of starch, fat and protein in the small intestine.",
              "Only water absorption in the colon.",
              "Only emulsification of fats.",
            ],
            answerIndex: 1,
            explanation: "Pancreatic juice contains amylase, lipase and proteases, plus sodium hydrogencarbonate. Without it, digestion of starch, fat and protein in the small intestine is all severely impaired. Stomach protein digestion by pepsin still occurs; emulsification by bile is separate from pancreatic juice.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "challenge",
            hints: [
              "List what pancreatic juice contains.",
              "Which macronutrients are digested by those enzymes?",
              "Remember the stomach and bile contribute separately.",
            ],
            strategy: "Identify every enzyme in the missing secretion, then map each to a nutrient.",
          },
          {
            id: "bio-human-nutrition-bm3-10",
            question: "Salivary amylase begins working in the mouth but does little digestion overall. Which factor best explains why its action is limited?",
            options: [
              "Starch is already soluble and needs no digestion.",
              "Food is in the mouth only briefly, and the enzyme is then denatured by stomach acid.",
              "Salivary amylase only works at pH 2.",
              "The mouth contains no starch-rich food.",
            ],
            answerIndex: 1,
            explanation: "Food spends only a short time in the mouth, so salivary amylase digests only a little starch there. When the bolus reaches the acidic stomach, the low pH denatures salivary amylase, halting its action; most starch digestion is later completed by pancreatic amylase in the duodenum.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "core",
            hints: [
              "How long does food stay in the mouth?",
              "What happens to the enzyme when it reaches the acidic stomach?",
              "Where is most starch digestion actually completed?",
            ],
          },
        ],
      },
      {
        id: "bio-human-nutrition-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Absorption, villi adaptations, assimilation and applied scenarios.",
        questions: [
          {
            id: "bio-human-nutrition-bm4-01",
            question: "What is the name of the finger-like projections of the ileum that increase surface area for absorption?",
            options: ["Alveoli", "Villi", "Nephrons", "Cilia"],
            answerIndex: 1,
            explanation: "Villi are the finger-like projections lining the ileum; each is covered with microvilli. Together they greatly increase the surface area available for absorbing the products of digestion.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bm4-02",
            question: "Into which structure are fatty acids and glycerol absorbed?",
            options: ["Blood capillary", "Lacteal", "Hepatic portal vein", "Pulp cavity"],
            answerIndex: 1,
            explanation: "Fatty acids and glycerol are absorbed into the epithelial cells, reassembled into fats, and pass into the lacteal — a lymph vessel in the centre of the villus. Glucose and amino acids, by contrast, enter the blood capillaries.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bm4-03",
            question: "Which feature of a villus gives the shortest diffusion distance for absorbed nutrients?",
            options: [
              "Its rich capillary network",
              "Its single layer of epithelial cells",
              "Its central lacteal",
              "Its large overall length",
            ],
            answerIndex: 1,
            explanation: "The wall of a villus is just one epithelial cell thick, so absorbed molecules cross a very short distance to reach the capillaries. The capillary network maintains the gradient, and the lacteal handles fats, but it is the thin single-cell layer that minimises diffusion distance.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "core",
            hints: [
              "Diffusion distance is about how far a molecule must travel through tissue.",
              "Which feature describes the thinness of the barrier?",
              "Capillaries maintain the gradient but do not set the distance.",
            ],
          },
          {
            id: "bio-human-nutrition-bm4-04",
            question: "Glucose is sometimes absorbed against its concentration gradient. Which process makes this possible?",
            options: ["Diffusion", "Osmosis", "Active transport", "Emulsification"],
            answerIndex: 2,
            explanation: "When the concentration of glucose in the gut is lower than inside the epithelial cells, glucose can still be absorbed by active transport, which uses energy from ATP to move it against its concentration gradient. Diffusion and osmosis move substances only down a gradient.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "core",
            hints: [
              "Moving a substance from low to high concentration needs energy.",
              "Which transport process uses ATP?",
              "Diffusion and osmosis cannot work against a gradient.",
            ],
          },
          {
            id: "bio-human-nutrition-bm4-05",
            question: "What is the difference between absorption and assimilation?",
            options: [
              "They are two words for the same process.",
              "Absorption is nutrients entering the blood/lymph; assimilation is cells taking up and using them.",
              "Absorption happens in the stomach; assimilation in the mouth.",
              "Absorption uses enzymes; assimilation does not occur in humans.",
            ],
            answerIndex: 1,
            explanation: "Absorption is the passage of digested nutrients from the gut into the blood or lymph. Assimilation is the subsequent uptake and use of those nutrients by body cells — for example, glucose used in respiration or amino acids used to build proteins.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "core",
            hints: [
              "One step gets nutrients into the transport system; the next gets them into cells to be used.",
              "Which word describes cells actually using the nutrients?",
              "Absorption comes before assimilation.",
            ],
          },
          {
            id: "bio-human-nutrition-bm4-06",
            question: "Three levels of folding raise the small intestine's surface area to about 200 m². Which is NOT one of these levels?",
            options: [
              "Circular folds of the gut wall",
              "Villi projecting from the folds",
              "Microvilli on each epithelial cell",
              "Alveoli within the lacteal",
            ],
            answerIndex: 3,
            explanation: "Surface area is increased by circular folds, villi, and microvilli (the brush border). Alveoli are air sacs in the lungs, not features of the intestine, so they are not involved here.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "core",
            hints: [
              "Recall the three nested levels of folding in the gut.",
              "One option belongs to the respiratory system.",
              "Microvilli sit on top of villi, which sit on folds.",
            ],
          },
          {
            id: "bio-human-nutrition-bm4-07",
            question: "Why does a dense capillary network in each villus increase the rate of glucose absorption?",
            options: [
              "It supplies oxygen so the gut can photosynthesise glucose.",
              "It carries glucose away quickly, maintaining a steep concentration gradient.",
              "It digests glucose into smaller molecules.",
              "It reduces the surface area for absorption.",
            ],
            answerIndex: 1,
            explanation: "By constantly carrying absorbed glucose away to the liver via the hepatic portal vein, the capillaries keep the glucose concentration inside the villus low. This maintains a steep concentration gradient between the gut lumen and the blood, so absorption (by diffusion and active transport) continues rapidly.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "challenge",
            hints: [
              "Absorption slows if glucose builds up inside the villus.",
              "What does the blood do with absorbed glucose?",
              "Removing the product keeps the gradient steep.",
            ],
            strategy: "Connect blood flow to the maintenance of a concentration gradient, a key factor in diffusion rate.",
          },
          {
            id: "bio-human-nutrition-bm4-08",
            question: "After absorption, glucose and amino acids travel first to the liver. Which vessel carries them there?",
            options: ["Hepatic artery", "Hepatic vein", "Hepatic portal vein", "Pulmonary vein"],
            answerIndex: 2,
            explanation: "The hepatic portal vein carries nutrient-rich blood from the small intestine directly to the liver, where glucose levels are regulated and amino acids are processed. The hepatic artery brings oxygenated blood to the liver; the hepatic vein drains blood away from it.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "core",
            hints: [
              "A portal vein links the gut capillaries to the liver capillaries.",
              "Distinguish the vessel taking blood TO the liver from the gut versus from the heart.",
              "The hepatic vein drains the liver, so it is not the answer.",
            ],
          },
          {
            id: "bio-human-nutrition-bm4-09",
            question: "A person has a section of their ileum surgically removed. Which consequence is most likely?",
            options: [
              "Faster water absorption and constipation.",
              "Reduced absorption of digested nutrients, risking weight loss and deficiencies.",
              "Increased production of bile by the liver.",
              "Complete loss of the ability to digest starch.",
            ],
            answerIndex: 1,
            explanation: "The ileum is the main site for absorbing the products of digestion. Removing part of it reduces the surface area available, so absorption of nutrients falls, risking weight loss and nutrient deficiencies. Digestion (chemical breakdown) still occurs; the problem is absorption, not digestion.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "challenge",
            hints: [
              "What is the main job of the ileum?",
              "Distinguish digestion from absorption.",
              "Less absorptive surface means what for nutrient uptake?",
            ],
            strategy: "Map the removed structure to its function, then predict the loss of that function.",
          },
          {
            id: "bio-human-nutrition-bm4-10",
            question: "Inside villus epithelial cells, fatty acids and glycerol are recombined before entering the lacteal. What is the main reason for this?",
            options: [
              "To turn them into glucose for respiration.",
              "To reform fats (as chylomicrons) that are transported in lymph rather than blood.",
              "To make them small enough to enter blood capillaries.",
              "To denature them so they cannot be lost.",
            ],
            answerIndex: 1,
            explanation: "Fatty acids and glycerol are reassembled into triglycerides and packaged as chylomicrons inside the epithelial cells. These fat particles then enter the lacteal and are transported via the lymphatic system, eventually joining the blood. They are not converted into glucose and are not made smaller to enter capillaries.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "challenge",
            hints: [
              "The products of fat digestion are reassembled, not broken down further.",
              "Which transport route do fats take out of the villus?",
              "Recall the name for the fat particles that enter the lacteal.",
            ],
            strategy: "Follow the fat pathway: absorb, reassemble, package, then transport via lymph.",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-human-nutrition-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Balanced diet, nutrient functions, deficiencies and energy requirements.",
        questions: [
          {
            id: "bio-human-nutrition-bq1-01",
            question: "State two functions of fat (lipids) in the body, other than as an energy source. [2 marks]",
            marks: 2,
            modelAnswer:
              "Fat forms part of cell membranes; it insulates the body to reduce heat loss; it acts as a solvent for fat-soluble vitamins; and it provides protection by cushioning organs. Any two of these are acceptable.",
            markScheme: [
              "Component of cell membranes / forms membranes",
              "Insulation / reduces heat loss / protects organs / solvent for fat-soluble vitamins (any second valid function)",
            ],
            commonError:
              "Repeating 'energy store' in different words — the question asks for functions OTHER than energy.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bq1-02",
            question: "Name one mineral and one vitamin needed in the diet, and for each state one role in the body and one deficiency disease. [4 marks]",
            marks: 4,
            modelAnswer:
              "Mineral — iron: needed to make haemoglobin for oxygen transport in red blood cells; deficiency causes anaemia. Vitamin — vitamin C: needed to make collagen for connective tissue; deficiency causes scurvy. (Calcium for bones/teeth and vitamin D for calcium absorption / rickets are also acceptable pairings.)",
            markScheme: [
              "Named mineral with correct role (e.g. iron — haemoglobin / calcium — bones and teeth)",
              "Correct deficiency disease for that mineral (anaemia for iron / weak bones for calcium)",
              "Named vitamin with correct role (e.g. vitamin C — collagen / vitamin D — calcium absorption)",
              "Correct deficiency disease for that vitamin (scurvy for C / rickets for D)",
            ],
            commonError:
              "Mismatching the nutrient and disease, for example pairing iron with scurvy instead of anaemia.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bq1-03",
            question: "Explain why dietary fibre and water, although they provide little or no energy, are still essential components of a balanced diet. [4 marks]",
            marks: 4,
            modelAnswer:
              "Dietary fibre (roughage) adds bulk to the contents of the gut, which stimulates peristalsis and helps move material along the intestine, reducing the risk of constipation. Water is the solvent in which metabolic reactions take place and in which substances are transported in blood and lymph; it is also needed for temperature regulation through sweating. Both therefore support essential body functions even though they are not energy sources.",
            markScheme: [
              "Fibre adds bulk / roughage to gut contents",
              "Fibre stimulates peristalsis / prevents constipation",
              "Water is a solvent for reactions / medium for transport in blood",
              "Water needed for temperature regulation / sweating (any valid second water role)",
            ],
            commonError:
              "Saying fibre is digested for energy — it is not digested by humans; its value is mechanical (bulk and peristalsis).",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "core",
            hints: [
              "Fibre is not absorbed, so its benefit must be physical — think about gut movement.",
              "List several distinct roles of water in the body.",
              "Connect each substance to a specific body process.",
            ],
          },
          {
            id: "bio-human-nutrition-bq1-04",
            question: "Describe three factors that increase a person's daily energy requirement, explaining how each one raises energy demand. [6 marks]",
            marks: 6,
            modelAnswer:
              "1. Activity level: physical work and exercise require muscle contraction, which uses ATP; the more active a person is, the greater their energy demand (an athlete may need over 4000 kcal/day). 2. Growth (age): children and adolescents are building new tissues, requiring extra energy for the synthesis of proteins and bone, so they need more energy per unit body mass. 3. Pregnancy: extra energy is needed to support the growth of the foetus and associated tissues, and later for milk production (about 300 kcal/day extra in late pregnancy). (A cold climate, increasing energy needed to maintain body temperature, is also acceptable.)",
            markScheme: [
              "Activity level increases demand — energy for muscle contraction",
              "Growth/age — energy for building new tissue / synthesis",
              "Pregnancy/lactation — energy for foetal growth / milk production",
              "Each factor linked to HOW it raises demand (3 valid explanations) — award up to 3 further marks",
            ],
            commonError:
              "Listing factors without explaining the mechanism — each factor must be linked to why it raises energy use.",
            guideRef: "Energy Requirements",
            difficulty: "core",
            hints: [
              "Think about what processes in the body consume energy.",
              "For each factor, state the process it increases (movement, growth, heat production).",
              "Marks come from explanation, not just naming the factor.",
            ],
          },
          {
            id: "bio-human-nutrition-bq1-05",
            question: "A region suffers a famine. Doctors observe two groups of children: Group A is extremely thin with very little body fat or muscle; Group B has thin limbs but swollen abdomens. Suggest which form of malnutrition each group is suffering from, and justify your answer. [4 marks]",
            marks: 4,
            modelAnswer:
              "Group A is suffering from marasmus, which results from a severe deficiency of total food (energy and all nutrients); the body uses up its fat and muscle stores for energy, causing extreme thinness. Group B is suffering from kwashiorkor, caused by a deficiency of protein in particular; the lack of plasma proteins leads to fluid accumulation in the abdomen (oedema), giving the characteristic swollen belly despite some energy intake.",
            markScheme: [
              "Group A: marasmus",
              "Justification: deficiency of total food/energy; body breaks down fat and muscle stores",
              "Group B: kwashiorkor",
              "Justification: protein deficiency causing oedema / swollen abdomen",
            ],
            commonError:
              "Assuming the swollen abdomen means the child is well-fed — it is oedema caused by protein deficiency, not stored fat.",
            guideRef: "Energy Requirements",
            difficulty: "challenge",
            hints: [
              "Both groups are undernourished; the difference is what they lack.",
              "Extreme thinness suggests a total shortage of food.",
              "A swollen abdomen with thin limbs is the classic sign of one specific deficiency.",
            ],
            strategy: "Match each observed sign to the specific nutrient deficiency that causes it.",
          },
          {
            id: "bio-human-nutrition-bq1-06",
            question: "A nutritionist measures the daily energy intake of a 25-year-old marathon runner as 4200 kcal, while a 25-year-old office worker of the same mass and sex needs only 2300 kcal. Calculate the percentage increase in energy requirement for the runner compared with the office worker, and explain the biological reason for the difference. [4 marks]",
            marks: 4,
            modelAnswer:
              "Percentage increase = (4200 - 2300) / 2300 x 100 = 1900 / 2300 x 100 = 82.6%, which is about 83%. The difference is due to the much higher level of physical activity of the runner: sustained exercise requires large amounts of ATP for repeated muscle contraction, greatly increasing energy demand compared with a sedentary office worker.",
            markScheme: [
              "Correct difference: 4200 - 2300 = 1900 kcal",
              "Divides by the office worker value (2300) and multiplies by 100",
              "Answer about 83% (accept 82.6%)",
              "Explanation: higher activity level / energy for muscle contraction during exercise",
            ],
            commonError:
              "Dividing by the larger value (4200) instead of the baseline (2300), or giving the answer as a ratio rather than a percentage increase.",
            guideRef: "Energy Requirements",
            difficulty: "challenge",
            hints: [
              "Percentage increase compares the change to the ORIGINAL (baseline) value.",
              "The baseline is the office worker's requirement.",
              "Find the difference first, then divide by the baseline and multiply by 100.",
            ],
            strategy: "For a percentage increase: (new - original) / original x 100.",
            solutions: [
              {
                label: "Percentage increase calculation",
                steps: [
                  "Difference in energy = 4200 - 2300 = 1900 kcal.",
                  "Percentage increase = (difference / original) x 100 = (1900 / 2300) x 100.",
                  "1900 / 2300 = 0.8260...",
                  "0.8260 x 100 = 82.6%, which rounds to about 83% (2 sig figs).",
                  "Biological reason: the runner's high activity level demands far more ATP for muscle contraction.",
                ],
              },
            ],
          },
          {
            id: "bio-human-nutrition-bq1-07",
            question: "Explain why a diet that is high in energy (calories) but unbalanced can still be described as a form of malnutrition. [3 marks]",
            marks: 3,
            modelAnswer:
              "Malnutrition means having an unbalanced diet, not simply too little food. A diet high in energy but lacking in certain nutrients can cause overnutrition: excess calorie intake leads to obesity, raising the risk of type 2 diabetes and cardiovascular disease. At the same time, the diet may be deficient in specific vitamins or minerals, causing deficiency diseases. So an unbalanced high-energy diet is still malnutrition because the proportions of nutrients are wrong.",
            markScheme: [
              "Malnutrition = unbalanced diet (not only undernutrition)",
              "Overnutrition: excess energy causes obesity / risk of type 2 diabetes / heart disease",
              "Diet may still lack specific vitamins/minerals despite high energy",
            ],
            commonError:
              "Treating malnutrition as meaning only starvation — it includes overnutrition and imbalance.",
            guideRef: "Energy Requirements",
            difficulty: "core",
            hints: [
              "Define malnutrition carefully — does it only mean too little food?",
              "What health problems come from too many calories?",
              "Can a high-calorie diet still miss certain nutrients?",
            ],
          },
          {
            id: "bio-human-nutrition-bq1-08",
            question: "Vitamin D and calcium are both important for healthy bones. Explain the relationship between them and why a person could develop weak bones even if their diet contains plenty of calcium. [4 marks]",
            marks: 4,
            modelAnswer:
              "Calcium is the mineral needed to harden and strengthen bones (and teeth) by mineralisation. Vitamin D is required for the absorption of calcium from the gut into the blood. If a person lacks vitamin D, calcium cannot be absorbed efficiently, so even a calcium-rich diet fails to supply enough calcium to the bones. As a result the bones remain soft and weak (rickets in children), despite high dietary calcium.",
            markScheme: [
              "Calcium is needed for bone strength / mineralisation",
              "Vitamin D is needed for absorption of calcium from the gut",
              "Without vitamin D, calcium is not absorbed even if present in the diet",
              "Result: weak/soft bones / rickets despite adequate dietary calcium",
            ],
            commonError:
              "Stating that vitamin D itself hardens bone — vitamin D enables calcium absorption; calcium does the mineralising.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "core",
            hints: [
              "What is the specific job of each nutrient?",
              "Calcium must be absorbed before it can be used in bone.",
              "What controls calcium absorption from the gut?",
            ],
          },
          {
            id: "bio-human-nutrition-bq1-09",
            question: "Define the term 'balanced diet' and explain why the proportions of nutrients required differ between a 5-year-old child and a sedentary 80-year-old. [4 marks]",
            marks: 4,
            modelAnswer:
              "A balanced diet is one that contains all the nutrients needed (carbohydrates, fats, proteins, vitamins, minerals, fibre and water) in the correct proportions to maintain health. The proportions differ with age because a 5-year-old is growing rapidly and so needs relatively more protein (for building new tissue), calcium and vitamin D (for developing bones and teeth) and more energy per unit body mass. An 80-year-old has stopped growing, is usually less active and has a lower basal metabolic rate, so requires less total energy; their needs shift towards maintenance rather than growth.",
            markScheme: [
              "Definition: all nutrients in correct proportions to maintain health",
              "Child is growing — needs more protein / calcium / energy per body mass",
              "Elderly person not growing / less active / lower BMR — needs less energy",
              "Conclusion that correct proportions therefore differ with age/activity",
            ],
            commonError:
              "Giving only the definition without explaining the age-related difference, or vice versa.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "core",
            hints: [
              "Start with a precise definition mentioning 'correct proportions'.",
              "What is the child doing biologically that the elderly person is not?",
              "Relate energy needs to growth, activity and metabolic rate.",
            ],
          },
          {
            id: "bio-human-nutrition-bq1-10",
            question: "Suggest why the gene mutation that prevents humans from making their own vitamin C did not cause early humans to die out, and what this implies about their diet. [3 marks]",
            marks: 3,
            modelAnswer:
              "Early humans must have obtained enough vitamin C from their diet, so the inability to synthesise it was not harmful as long as the diet was rich in fruits and vegetables (which contain vitamin C). Because the dietary supply was sufficient, individuals with the mutation survived and reproduced normally, so the mutation was not selected against. This implies their natural diet regularly included vitamin C-rich plant foods.",
            markScheme: [
              "Vitamin C was supplied by the diet / from fruits and vegetables",
              "Mutation was not harmful because dietary supply was adequate / not selected against",
              "Implication: diet regularly contained vitamin C-rich plant foods",
            ],
            commonError:
              "Assuming the body found another way to make vitamin C — it cannot; the supply must come from food.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "challenge",
            hints: [
              "If the body cannot make a substance, where must it come from?",
              "A harmful mutation is usually removed by natural selection — why wasn't this one?",
              "What does that tell you about the foods early humans ate?",
            ],
            strategy: "Reason from the logic of natural selection: a mutation persists if it does not reduce survival.",
          },
        ],
      },
      {
        id: "bio-human-nutrition-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "The alimentary canal, peristalsis, mechanical digestion and teeth.",
        questions: [
          {
            id: "bio-human-nutrition-bq2-01",
            question: "Name the five key processes involved in human nutrition, in the order they occur, and give a one-word or short definition of each. [5 marks]",
            marks: 5,
            modelAnswer:
              "Ingestion — taking food into the body through the mouth. Digestion — the mechanical and chemical breakdown of large food molecules into small soluble ones. Absorption — the passage of digested nutrients from the gut into the blood or lymph. Assimilation — the uptake and use of absorbed nutrients by body cells. Egestion — the elimination of undigested material as faeces through the anus.",
            markScheme: [
              "Ingestion — taking food into the mouth",
              "Digestion — breakdown of food (mechanical and chemical)",
              "Absorption — nutrients pass into blood/lymph",
              "Assimilation — cells take up and use nutrients",
              "Egestion — removal of undigested material as faeces",
            ],
            commonError:
              "Confusing egestion (removal of undigested food) with excretion (removal of metabolic waste such as urea).",
            guideRef: "The Alimentary Canal",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bq2-02",
            question: "Name the four types of teeth and state the function of each. [4 marks]",
            marks: 4,
            modelAnswer:
              "Incisors — chisel-shaped front teeth used for cutting and biting food. Canines — pointed teeth used for tearing food. Premolars — teeth with two cusps used for grinding and crushing food. Molars — broad teeth with several cusps used for grinding food into small pieces.",
            markScheme: [
              "Incisors — cutting / biting",
              "Canines — tearing",
              "Premolars — grinding / crushing",
              "Molars — grinding / crushing into small pieces",
            ],
            commonError:
              "Swapping canine and incisor functions — incisors cut, canines tear.",
            guideRef: "Teeth and Dental Health",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bq2-03",
            question: "Describe how peristalsis moves a bolus of food along the oesophagus. Refer to the muscle layers involved. [4 marks]",
            marks: 4,
            modelAnswer:
              "The gut wall contains two layers of muscle: circular muscle and longitudinal muscle, which act antagonistically. Behind the bolus, the circular muscle contracts (and longitudinal relaxes), narrowing the tube and squeezing the bolus forward. Ahead of the bolus, the longitudinal muscle contracts (and circular relaxes), shortening and widening the tube to receive it. This coordinated wave of contraction passes along the oesophagus, pushing the bolus towards the stomach, even against gravity.",
            markScheme: [
              "Two muscle layers: circular and longitudinal",
              "Circular muscle contracts behind the bolus, narrowing the tube",
              "Longitudinal muscle contracts ahead, widening/shortening the tube",
              "Wave of contraction propels bolus forward / works against gravity",
            ],
            commonError:
              "Saying both layers contract at the same place at once — they act antagonistically in different positions.",
            guideRef: "The Alimentary Canal",
            difficulty: "core",
            hints: [
              "Name the two muscle layers in the gut wall.",
              "What must happen behind the bolus to push it?",
              "What must happen ahead of the bolus to make room?",
            ],
          },
          {
            id: "bio-human-nutrition-bq2-04",
            question: "Explain the difference between mechanical digestion and chemical digestion, giving one example of each that occurs in the human gut. [4 marks]",
            marks: 4,
            modelAnswer:
              "Mechanical digestion is the physical breakdown of food into smaller pieces without changing it chemically; for example, the teeth chewing food in the mouth, or churning of food in the stomach. Chemical digestion is the breakdown of large insoluble molecules into small soluble ones by enzymes (hydrolysis); for example, amylase breaking starch into maltose in the mouth, or pepsin breaking proteins into peptides in the stomach. Mechanical digestion increases the surface area for chemical digestion to act on.",
            markScheme: [
              "Mechanical: physical breakdown, no chemical change",
              "Mechanical example: chewing by teeth / churning in stomach",
              "Chemical: enzymatic breakdown of large molecules into small soluble ones (hydrolysis)",
              "Chemical example: amylase on starch / pepsin on protein (any valid)",
            ],
            commonError:
              "Describing chewing as 'chemical' digestion — chewing is mechanical; only enzyme action is chemical.",
            guideRef: "The Alimentary Canal",
            difficulty: "core",
            hints: [
              "Does the type of digestion change the chemical structure of the food?",
              "Teeth and churning are examples of which type?",
              "Enzymes carry out which type of digestion?",
            ],
          },
          {
            id: "bio-human-nutrition-bq2-05",
            question: "Describe the structure of a tooth, naming four parts and stating the function of each. [4 marks]",
            marks: 4,
            modelAnswer:
              "Enamel — the hard outer layer of calcium phosphate covering the crown; it is the hardest substance in the body and protects the tooth. Dentine — a slightly softer layer beneath the enamel that forms the bulk of the tooth. Pulp cavity — the central cavity containing nerves (giving sensation) and blood vessels (supplying nutrients and oxygen). Cement — anchors the root of the tooth to the jawbone, with the periodontal ligament holding it in the socket.",
            markScheme: [
              "Enamel — hard protective outer layer (calcium phosphate)",
              "Dentine — softer layer forming the bulk of the tooth",
              "Pulp cavity — contains nerves and blood vessels",
              "Cement — anchors the root to the jaw / holds tooth in socket",
            ],
            commonError:
              "Confusing dentine and enamel — enamel is the harder, outer layer; dentine lies beneath it.",
            guideRef: "Teeth and Dental Health",
            difficulty: "core",
            hints: [
              "Work from the outside of the tooth inwards.",
              "Which layer is hardest and protects the crown?",
              "Which part contains the living tissue and nerves?",
            ],
          },
          {
            id: "bio-human-nutrition-bq2-06",
            question: "Describe how dental caries (tooth decay) develops, and explain why reducing the FREQUENCY of sugary snacks is more effective at preventing decay than simply reducing the total quantity of sugar eaten in one meal. [5 marks]",
            marks: 5,
            modelAnswer:
              "Bacteria in dental plaque (such as Streptococcus mutans) ferment sugars and produce lactic acid as a waste product. This acid dissolves the calcium phosphate in enamel (demineralisation), forming a cavity; if untreated, decay spreads through the dentine to the pulp, causing pain and infection. Each time sugar is eaten, an acid attack begins and the mouth's pH drops for a period before saliva neutralises it and allows remineralisation. Frequent snacking causes many separate acid attacks per day, leaving little time for remineralisation, so enamel is steadily lost. Eating the same total sugar in one sitting produces only one acid attack, after which the mouth recovers — so frequency matters more than total quantity.",
            markScheme: [
              "Bacteria in plaque ferment sugar to produce (lactic) acid",
              "Acid dissolves enamel / calcium phosphate / demineralisation → cavity",
              "Each sugar exposure causes a separate acid attack / drop in pH",
              "Saliva neutralises acid and allows remineralisation between attacks",
              "Frequent snacking = more acid attacks / less recovery time than one large intake",
            ],
            commonError:
              "Stating that total sugar amount is irrelevant — it still matters, but frequency has a greater effect because of repeated acid attacks.",
            guideRef: "Teeth and Dental Health",
            difficulty: "challenge",
            hints: [
              "Describe the bacteria-acid-enamel sequence first.",
              "What happens to mouth pH after each sugar exposure?",
              "Compare many small acid attacks with one larger one.",
            ],
            strategy: "Build the answer in two parts: the decay mechanism, then the time-based argument about acid attacks.",
          },
          {
            id: "bio-human-nutrition-bq2-07",
            question: "The stomach has a thick layer of mucus on its inner lining. Explain why this is necessary, referring to the contents of the stomach. [3 marks]",
            marks: 3,
            modelAnswer:
              "The stomach secretes pepsin (a protease) and hydrochloric acid (pH about 2). Without protection, the pepsin would digest the proteins of the stomach's own lining cells and the acid would damage them. The thick layer of alkaline mucus forms a barrier that prevents the acid and pepsin from reaching and digesting the epithelial cells, protecting the stomach wall from self-digestion (which would otherwise cause ulcers).",
            markScheme: [
              "Stomach contains pepsin (protease) and hydrochloric acid (low pH)",
              "These would digest/damage the stomach lining cells",
              "Mucus forms a protective barrier preventing self-digestion / ulcers",
            ],
            commonError:
              "Saying mucus 'neutralises all the acid' — it protects the wall as a barrier; it does not neutralise the acid in the lumen needed for pepsin.",
            guideRef: "The Alimentary Canal",
            difficulty: "core",
            hints: [
              "What two damaging substances does the stomach produce?",
              "What would those substances do to the stomach's own cells?",
              "How does a mucus layer prevent that?",
            ],
          },
          {
            id: "bio-human-nutrition-bq2-08",
            question: "If you swallow a mouthful of food while standing on your head, it still reaches your stomach. Explain how this is possible. [3 marks]",
            marks: 3,
            modelAnswer:
              "Food is moved by peristalsis, not by gravity. The circular and longitudinal muscles in the wall of the oesophagus contract in a coordinated wave: circular muscle contracts behind the bolus to push it forward while the region ahead widens to receive it. This muscular squeezing propels the bolus towards the stomach regardless of body orientation, so food moves even against gravity.",
            markScheme: [
              "Movement is by peristalsis, not gravity",
              "Coordinated contraction of circular (and longitudinal) muscle",
              "Wave of contraction pushes bolus forward regardless of orientation",
            ],
            commonError:
              "Attributing movement to gravity or to 'suction' — the cause is muscular peristalsis.",
            guideRef: "The Alimentary Canal",
            difficulty: "core",
            hints: [
              "What normally moves food along the gut?",
              "Does this process depend on the direction of gravity?",
              "Refer to the muscle layers in the gut wall.",
            ],
          },
          {
            id: "bio-human-nutrition-bq2-09",
            question: "Compare the roles of the liver and the pancreas in digestion. Give two specific contributions of each organ. [4 marks]",
            marks: 4,
            modelAnswer:
              "Liver: it produces bile, which emulsifies fats (increasing surface area for lipase); bile is also alkaline and helps neutralise acidic chyme in the duodenum. The liver also processes absorbed nutrients (e.g. regulating blood glucose and processing amino acids). Pancreas: it produces pancreatic juice containing digestive enzymes (amylase, lipase and proteases such as trypsin) that act in the small intestine; it also secretes sodium hydrogencarbonate to neutralise the acidic chyme, providing the optimal pH for these enzymes.",
            markScheme: [
              "Liver produces bile (emulsifies fats)",
              "Liver: bile neutralises acid / liver processes absorbed nutrients (regulates glucose / amino acids)",
              "Pancreas produces digestive enzymes (amylase / lipase / protease)",
              "Pancreas secretes sodium hydrogencarbonate to neutralise acid / provide correct pH",
            ],
            commonError:
              "Saying the liver produces digestive enzymes — it produces bile (no enzymes); the pancreas produces the enzymes.",
            guideRef: "The Alimentary Canal",
            difficulty: "challenge",
            hints: [
              "What does the liver make, and what are its two roles?",
              "Does the liver produce any digestive enzymes?",
              "List the enzymes and the alkaline secretion from the pancreas.",
            ],
            strategy: "Keep the two organs separate: liver = bile (and nutrient processing); pancreas = enzymes (and bicarbonate).",
          },
          {
            id: "bio-human-nutrition-bq2-10",
            question: "Egestion and excretion are sometimes confused. Explain the difference between them, using examples from human nutrition and metabolism. [4 marks]",
            marks: 4,
            modelAnswer:
              "Egestion is the removal of undigested material (food that was never absorbed into the body's cells) from the gut as faeces through the anus; for example, the cellulose fibre and other indigestible matter that passes through the alimentary canal. Excretion is the removal of waste products made by the body's own metabolism; for example, urea (made in the liver from excess amino acids) removed by the kidneys in urine, and carbon dioxide from respiration removed by the lungs. The key difference is that egested material has never taken part in metabolism, whereas excreted material is a metabolic waste product.",
            markScheme: [
              "Egestion: removal of undigested/unabsorbed material as faeces",
              "Egestion example: fibre / cellulose / undigested food via anus",
              "Excretion: removal of metabolic waste products made by the body",
              "Excretion example: urea in urine / carbon dioxide from lungs",
            ],
            commonError:
              "Calling faeces an 'excretory product' — faeces is egested (never metabolised), not excreted.",
            guideRef: "The Alimentary Canal",
            difficulty: "challenge",
            hints: [
              "Has the egested material ever entered the body's cells?",
              "Excretion deals with products the body itself has made.",
              "Give a clear example of each from the human body.",
            ],
            strategy: "Use the test 'was it ever part of metabolism?' to classify a waste as egested or excreted.",
          },
        ],
      },
      {
        id: "bio-human-nutrition-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Digestive enzymes, hydrolysis, bile, pH and experimental design.",
        questions: [
          {
            id: "bio-human-nutrition-bq3-01",
            question: "State the substrate and the product(s) for each of the following enzymes: amylase, protease, lipase. [3 marks]",
            marks: 3,
            modelAnswer:
              "Amylase: substrate is starch; product is maltose. Protease (e.g. pepsin): substrate is protein; products are peptides/amino acids. Lipase: substrate is fat (lipid); products are fatty acids and glycerol.",
            markScheme: [
              "Amylase: starch → maltose",
              "Protease: protein → amino acids / peptides",
              "Lipase: fat / lipid → fatty acids + glycerol",
            ],
            commonError:
              "Writing 'glucose' as the direct product of amylase — amylase makes maltose; maltase then makes glucose.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bq3-02",
            question: "State two functions of bile and name the organ that produces it and the organ that stores it. [3 marks]",
            marks: 3,
            modelAnswer:
              "Bile emulsifies fats — it breaks large fat globules into smaller droplets, increasing the surface area for lipase. Bile is also alkaline and neutralises the acidic chyme arriving from the stomach, giving the optimal pH for pancreatic enzymes. Bile is produced by the liver and stored in the gall bladder.",
            markScheme: [
              "Function 1: emulsifies fats / increases surface area for lipase",
              "Function 2: neutralises acid chyme / provides correct pH for enzymes",
              "Produced by liver; stored in gall bladder",
            ],
            commonError:
              "Saying bile digests fats — bile emulsifies fats physically; it contains no enzymes.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bq3-03",
            question: "Explain what is meant by hydrolysis, and write a word equation for the complete digestion of starch to its final absorbable product. [4 marks]",
            marks: 4,
            modelAnswer:
              "Hydrolysis is the breakdown of a large molecule into smaller ones by the addition of water, which splits the chemical bonds. In starch digestion: starch + water → maltose (catalysed by amylase), then maltose + water → glucose + glucose (catalysed by maltase). The final absorbable product is glucose.",
            markScheme: [
              "Hydrolysis = breaking bonds by adding water",
              "Starch + water → maltose (amylase)",
              "Maltose + water → glucose (maltase)",
              "Final product identified as glucose",
            ],
            commonError:
              "Omitting water from the equation or jumping straight from starch to glucose without the maltose step.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "core",
            hints: [
              "Hydrolysis literally means 'splitting with water'.",
              "Starch is first broken into a disaccharide before glucose.",
              "Name the enzyme for each step.",
            ],
          },
          {
            id: "bio-human-nutrition-bq3-04",
            question: "Explain why pepsin works in the stomach but pancreatic amylase would not work efficiently there. [4 marks]",
            marks: 4,
            modelAnswer:
              "Each enzyme has an optimum pH at which its active site has the correct shape. Pepsin's optimum is about pH 2, which matches the highly acidic conditions in the stomach created by hydrochloric acid, so pepsin works efficiently there. Pancreatic amylase has an optimum of about pH 7-8 (neutral to slightly alkaline). In the acidic stomach the low pH would change the shape of amylase's active site (denaturing it), so it could not bind starch efficiently and its activity would be very low.",
            markScheme: [
              "Enzymes have an optimum pH / active site shape depends on pH",
              "Pepsin optimum about pH 2 matches acidic stomach",
              "Amylase optimum about pH 7-8 (neutral/alkaline)",
              "In the acidic stomach amylase is denatured / active site changes shape / low activity",
            ],
            commonError:
              "Saying enzymes are 'killed' by the wrong pH — enzymes are not alive; they are denatured (active site changes shape).",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "core",
            hints: [
              "Recall the optimum pH of each enzyme.",
              "What does the stomach's HCl do to the pH?",
              "How does an unsuitable pH affect the active site?",
            ],
          },
          {
            id: "bio-human-nutrition-bq3-05",
            question: "A student investigates how temperature affects the rate at which amylase digests starch. They add amylase to starch at different temperatures and time how long until iodine solution no longer turns blue-black. Identify the independent, dependent and two controlled variables, and predict the result. [5 marks]",
            marks: 5,
            modelAnswer:
              "Independent variable: temperature of the reaction mixture. Dependent variable: time taken for the iodine to stop turning blue-black (i.e. time for starch to be fully digested), from which rate can be calculated. Two controlled variables (any two): concentration and volume of amylase; concentration and volume of starch; pH; volume of iodine used. Prediction: as temperature rises from low values, the rate of digestion increases (time decreases) because molecules have more kinetic energy and collide more often, up to the optimum (about 37-40°C). Above the optimum, the enzyme begins to denature, so the rate falls again (time increases) and at high temperatures digestion may stop.",
            markScheme: [
              "Independent variable: temperature",
              "Dependent variable: time for iodine to stop turning blue-black / rate of digestion",
              "Two valid controlled variables (e.g. amylase amount, starch amount, pH, volume)",
              "Rate rises to an optimum (about 37-40°C) — more kinetic energy / more collisions",
              "Above optimum enzyme denatures and rate falls",
            ],
            commonError:
              "Stating the rate keeps rising with temperature — above the optimum the enzyme denatures and the rate falls.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "challenge",
            hints: [
              "The independent variable is the one you deliberately change.",
              "The dependent variable is what you measure (here, a time).",
              "Think about what happens to enzymes both below and above their optimum temperature.",
            ],
            strategy: "Identify IV, DV and CVs first, then describe the optimum curve: rise to a peak, then fall due to denaturing.",
          },
          {
            id: "bio-human-nutrition-bq3-06",
            question: "Describe an experiment to show that bile increases the rate of fat digestion by lipase, including how you would make it a fair test. [6 marks]",
            marks: 6,
            modelAnswer:
              "Set up two test tubes, each containing the same volume and concentration of full-fat milk (the fat source), the same amount of lipase, and a few drops of an indicator such as phenolphthalein, with the starting pH adjusted to be alkaline so the indicator is pink. To tube A add a measured volume of bile solution; to tube B add the same volume of distilled water (the control). Place both tubes in a water bath at 37°C. As lipase digests the fat, fatty acids are released and the pH falls, turning the indicator from pink to colourless. Time how long each tube takes to change colour. Fair test: keep the volume and concentration of milk, lipase and indicator, the temperature, and the starting pH the same in both tubes; the only difference (independent variable) is the presence of bile. Expected result: tube A (with bile) changes colour faster because bile emulsifies the fat, increasing the surface area for lipase, so digestion is quicker.",
            markScheme: [
              "Two tubes: one with bile, one without (control with water)",
              "Both contain same milk (fat) and lipase / indicator (e.g. phenolphthalein)",
              "Kept at 37°C / in a water bath; same starting pH",
              "Measure time for colour change as fatty acids lower pH",
              "Fair test: all variables kept the same except presence of bile",
              "Expected result: bile tube faster because emulsification increases surface area for lipase",
            ],
            commonError:
              "Forgetting the control tube without bile, so the effect of bile cannot be isolated.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "challenge",
            hints: [
              "What single variable should differ between the two tubes?",
              "How can you detect that fat is being digested (what do the products do to pH)?",
              "List everything that must be kept constant for a fair test.",
            ],
            strategy: "Plan around one independent variable (bile or not) and a measurable change (colour/pH) with all else controlled.",
            solutions: [
              {
                label: "Method using a pH indicator",
                steps: [
                  "Add 5 cm3 full-fat milk + 1 cm3 lipase + a few drops of phenolphthalein to each of two tubes; adjust pH to alkaline so each is pink.",
                  "Add 1 cm3 bile solution to tube A; add 1 cm3 distilled water to tube B (control).",
                  "Stand both tubes in a 37°C water bath and start a timer.",
                  "Record the time for each tube to turn from pink to colourless as fatty acids lower the pH.",
                  "Repeat three times and compare means: a shorter time in tube A shows bile speeds fat digestion by emulsification.",
                ],
              },
            ],
          },
          {
            id: "bio-human-nutrition-bq3-07",
            question: "Explain why the stomach secretes pepsin as an inactive form, and why hydrochloric acid is important for pepsin to function. [4 marks]",
            marks: 4,
            modelAnswer:
              "Pepsin is secreted as an inactive precursor (pepsinogen) so that it does not digest the proteins of the cells that make and store it before it is released into the stomach lumen. In the stomach, hydrochloric acid (pH about 2) activates pepsinogen into active pepsin and also provides the acidic optimum pH at which pepsin works most efficiently. HCl additionally denatures (unfolds) dietary proteins, exposing their bonds so pepsin can hydrolyse them more easily. (At IGCSE level, referring simply to 'pepsin' is acceptable.)",
            markScheme: [
              "Secreted inactive to avoid digesting the cells that produce/store it",
              "HCl activates pepsinogen into pepsin",
              "HCl provides the optimal acidic pH for pepsin",
              "HCl denatures dietary proteins, exposing bonds for digestion",
            ],
            commonError:
              "Saying HCl is itself an enzyme that digests protein — HCl is not an enzyme; pepsin digests the protein.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "challenge",
            hints: [
              "Why would it be dangerous to make active pepsin inside a cell?",
              "What converts the inactive form into the active enzyme?",
              "Beyond activation, what other roles does the acid play?",
            ],
            strategy: "Separate the reasons for inactivity (self-protection) from the multiple roles of HCl (activation, pH, denaturing).",
          },
          {
            id: "bio-human-nutrition-bq3-08",
            question: "A meal contains starch, protein and fat. Describe where in the gut each is digested and name the enzyme(s) responsible for each. [6 marks]",
            marks: 6,
            modelAnswer:
              "Starch: digestion begins in the mouth by salivary amylase (starch → maltose) and is completed in the small intestine (duodenum) by pancreatic amylase; maltase in the small intestine then converts maltose to glucose. Protein: digestion begins in the stomach by pepsin (a protease), which breaks proteins into peptides; it continues in the small intestine where pancreatic proteases (e.g. trypsin) complete digestion to amino acids. Fat: digestion occurs in the small intestine, where bile first emulsifies it and then lipase (from the pancreas) hydrolyses it into fatty acids and glycerol.",
            markScheme: [
              "Starch: mouth (salivary amylase) and small intestine (pancreatic amylase) / maltase → glucose",
              "Starch enzyme(s) named correctly (amylase, maltase)",
              "Protein: stomach (pepsin) and small intestine (trypsin/protease)",
              "Protein enzyme(s) named correctly",
              "Fat: small intestine, lipase (with bile emulsifying first)",
              "Fat products / role of bile referenced",
            ],
            commonError:
              "Stating fat is digested in the stomach — fat digestion occurs in the small intestine, aided by bile.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "core",
            hints: [
              "Track each nutrient through the gut in turn.",
              "Some nutrients are digested in more than one place.",
              "Name the specific enzyme for each location.",
            ],
          },
          {
            id: "bio-human-nutrition-bq3-09",
            question: "Lipase is described as a surface-acting enzyme. Use this idea to explain why emulsification by bile increases the rate of fat digestion. [4 marks]",
            marks: 4,
            modelAnswer:
              "Lipase can only act on fat molecules at the surface of a fat droplet, where the fat and water meet. A large fat globule has a small surface area relative to its volume, so few lipase molecules can act at once and digestion is slow. Bile emulsifies the globule into many tiny droplets; the same volume of fat now has a much greater total surface area. More fat surface is exposed to lipase, so more enzyme-substrate complexes form per unit time and the rate of digestion increases.",
            markScheme: [
              "Lipase acts only at the surface of fat droplets (fat-water interface)",
              "A large globule has little surface area for its volume",
              "Emulsification produces many small droplets with greater total surface area",
              "More surface exposed → more enzyme-substrate contacts → faster rate",
            ],
            commonError:
              "Saying emulsification 'breaks the chemical bonds' in fat — it is a physical change that increases surface area only.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "core",
            hints: [
              "Where on a fat droplet can lipase actually work?",
              "Compare the surface area of one big droplet with many small ones of the same total volume.",
              "Link greater surface area to faster enzyme action.",
            ],
          },
          {
            id: "bio-human-nutrition-bq3-10",
            question: "A patient's bile duct becomes blocked by a gallstone. Predict and explain the effect on the digestion and absorption of a fatty meal. [5 marks]",
            marks: 5,
            modelAnswer:
              "If the bile duct is blocked, bile cannot reach the duodenum. Without bile, fat is not emulsified, so it remains as large globules with a small surface area; lipase can act only slowly, so fat digestion is greatly reduced and much fat passes through undigested. Because the products of fat digestion (fatty acids and glycerol) are not formed in normal amounts, their absorption into the lacteals is also reduced, and the undigested fat appears in the faeces (making them pale and greasy). In addition, the loss of bile's alkalinity means the chyme in the duodenum is less well neutralised, which can further reduce the activity of pancreatic enzymes.",
            markScheme: [
              "Bile cannot reach the duodenum",
              "Fat is not emulsified / remains large globules with small surface area",
              "Lipase acts slowly / fat digestion greatly reduced",
              "Reduced fatty acids and glycerol → reduced fat absorption / fat in faeces",
              "Less neutralisation of acid → reduced pancreatic enzyme activity (any valid extra effect)",
            ],
            commonError:
              "Saying protein and carbohydrate digestion stop completely — they are largely unaffected; the main effect is on fat.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "challenge",
            hints: [
              "What does bile normally do to fat, and what happens without it?",
              "If fat is not digested, what happens to its absorption?",
              "Remember bile's second role: neutralising acid.",
            ],
            strategy: "Trace the consequences step by step: no bile → no emulsification → slow lipase → poor digestion → poor absorption.",
          },
        ],
      },
      {
        id: "bio-human-nutrition-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Absorption, villi adaptations, transport, assimilation and applied questions.",
        questions: [
          {
            id: "bio-human-nutrition-bq4-01",
            question: "State where in the alimentary canal most water is absorbed, and state where most nutrients (products of digestion) are absorbed. [2 marks]",
            marks: 2,
            modelAnswer:
              "Most water is absorbed in the colon (large intestine). Most nutrients (the products of digestion) are absorbed in the small intestine, mainly the ileum.",
            markScheme: [
              "Most water absorbed in the colon / large intestine",
              "Most nutrients absorbed in the small intestine / ileum",
            ],
            commonError:
              "Saying water is mainly absorbed in the small intestine — most water reabsorption to form faeces occurs in the colon.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bq4-02",
            question: "State which products of digestion are absorbed into the blood capillaries of a villus and which are absorbed into the lacteal. [2 marks]",
            marks: 2,
            modelAnswer:
              "Glucose and amino acids are absorbed into the blood capillaries. Fatty acids and glycerol are absorbed into the lacteal (a lymph vessel).",
            markScheme: [
              "Glucose and amino acids → blood capillaries",
              "Fatty acids and glycerol → lacteal / lymph",
            ],
            commonError:
              "Stating that fatty acids enter the blood capillaries — they enter the lacteal (lymph).",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bq4-03",
            question: "Describe three ways in which a villus is adapted for the efficient absorption of digested food. [3 marks]",
            marks: 3,
            modelAnswer:
              "A villus has a large surface area because of its finger-like shape and the microvilli on its epithelial cells. It has a wall just one cell thick (a single layer of epithelial cells), giving a short diffusion distance. It has a rich network of blood capillaries which carry absorbed nutrients away quickly, maintaining a steep concentration gradient. (A central lacteal for fat absorption is also acceptable.)",
            markScheme: [
              "Large surface area (villi / microvilli)",
              "Single layer of epithelial cells / thin wall — short diffusion distance",
              "Rich blood capillary supply maintains concentration gradient (or central lacteal for fats)",
            ],
            commonError:
              "Listing features without explaining how they aid absorption when the question implies it.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "core",
            hints: [
              "Think about surface area, the thinness of the barrier, and the blood supply.",
              "Each feature should aid diffusion or active transport.",
              "Recall Fick's law: surface area, distance, gradient.",
            ],
          },
          {
            id: "bio-human-nutrition-bq4-04",
            question: "Explain the difference between absorption and assimilation, giving one example of assimilation. [3 marks]",
            marks: 3,
            modelAnswer:
              "Absorption is the passage of digested nutrients from the gut lumen into the blood or lymph. Assimilation is the uptake and use of those absorbed nutrients by the body's cells. For example, amino acids absorbed into the blood are taken up by cells and used to build new proteins (such as enzymes or muscle proteins) — this use of the amino acids is assimilation. (Glucose being used in respiration is also acceptable.)",
            markScheme: [
              "Absorption: nutrients pass from gut into blood/lymph",
              "Assimilation: cells take up and use the absorbed nutrients",
              "Valid example of assimilation (amino acids → proteins / glucose used in respiration)",
            ],
            commonError:
              "Treating the two terms as identical, or giving an example of absorption when an example of assimilation is required.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "core",
            hints: [
              "Which step gets nutrients into the transport system, and which gets them into cells?",
              "Assimilation is about USING the nutrient.",
              "Give an example where a cell actually uses a nutrient.",
            ],
          },
          {
            id: "bio-human-nutrition-bq4-05",
            question: "Glucose is absorbed from the small intestine partly by active transport. Explain what active transport is and why it is needed for complete glucose absorption. [4 marks]",
            marks: 4,
            modelAnswer:
              "Active transport is the movement of a substance across a cell membrane against its concentration gradient (from a lower to a higher concentration), using energy released by respiration (ATP) and carrier proteins in the membrane. It is needed because towards the end of absorption the concentration of glucose in the gut may fall below that inside the epithelial cells; diffusion alone would then stop or even reverse. Active transport allows glucose to continue being absorbed against the gradient, ensuring that as much glucose as possible is taken up rather than being lost in the faeces.",
            markScheme: [
              "Active transport: movement against the concentration gradient",
              "Requires energy from respiration / ATP and carrier proteins",
              "Diffusion alone stops once gut glucose is lower than in the cells",
              "Active transport ensures complete/maximal glucose absorption",
            ],
            commonError:
              "Confusing active transport with diffusion — active transport works against the gradient and needs energy.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "core",
            hints: [
              "In which direction does active transport move substances relative to the gradient?",
              "What does active transport require that diffusion does not?",
              "Why would diffusion alone leave some glucose unabsorbed?",
            ],
          },
          {
            id: "bio-human-nutrition-bq4-06",
            question: "Describe the full pathway taken by a molecule of fat from the gut lumen until its products reach a body cell to be used. [6 marks]",
            marks: 6,
            modelAnswer:
              "In the small intestine, bile first emulsifies the fat into small droplets, increasing the surface area. Lipase then hydrolyses the fat into fatty acids and glycerol. These products are absorbed across the membrane into the epithelial cells of a villus, where they are recombined into fats (triglycerides) and packaged as chylomicrons. The chylomicrons enter the lacteal (the lymph vessel in the centre of the villus). The lymph carries them through the lymphatic system and empties into the bloodstream (at a vein near the heart). The blood then transports the fats around the body to cells, which take them up (assimilation) and use them — for example for respiration to release energy or to build cell membranes.",
            markScheme: [
              "Bile emulsifies fat / lipase digests fat to fatty acids and glycerol",
              "Products absorbed into epithelial cells of villus",
              "Recombined into fats / chylomicrons in the epithelial cells",
              "Enter the lacteal (lymph vessel)",
              "Lymphatic system drains into the blood",
              "Blood transports fat to cells, which use it (assimilation)",
            ],
            commonError:
              "Saying fat products enter the blood capillaries directly — they enter the lacteal and travel via lymph first.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "challenge",
            hints: [
              "Start with emulsification and digestion in the gut.",
              "Which vessel inside the villus receives the fat?",
              "How does fat get from the lymph into the blood and then to cells?",
            ],
            strategy: "Follow the molecule in order: emulsify → digest → absorb → repackage → lacteal → lymph → blood → cell.",
          },
          {
            id: "bio-human-nutrition-bq4-07",
            question: "The total surface area of the small intestine is estimated at about 200 m2. Explain how this enormous surface area is achieved and why it is important for absorption. [4 marks]",
            marks: 4,
            modelAnswer:
              "The surface area is increased by three levels of folding: the inner wall is thrown into circular folds; these folds are covered in finger-like villi; and each epithelial cell of a villus is covered in microvilli (the brush border). Together these multiply the absorptive surface enormously (to about 200 m2 in a tube only a few centimetres wide). A large surface area is important because the rate of absorption (by diffusion and active transport) is proportional to the surface area available, so a large area allows the products of digestion to be absorbed quickly before food leaves the small intestine.",
            markScheme: [
              "Circular folds of the gut wall",
              "Villi projecting from the folds",
              "Microvilli on epithelial cells (brush border)",
              "Large surface area increases rate of absorption (proportional to area)",
            ],
            commonError:
              "Mentioning only villi and forgetting microvilli, or not linking surface area to rate of absorption.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "core",
            hints: [
              "There are three nested levels of folding — name them from largest to smallest.",
              "How does surface area relate to the rate of diffusion?",
              "Why does the food need to be absorbed quickly?",
            ],
          },
          {
            id: "bio-human-nutrition-bq4-08",
            question: "Explain why a rich blood supply in each villus, and the constant movement of villi, both help to maintain a high rate of nutrient absorption. [4 marks]",
            marks: 4,
            modelAnswer:
              "A rich blood supply (a dense network of capillaries) continuously carries absorbed glucose and amino acids away from the villus to the hepatic portal vein and liver. This keeps the concentration of these nutrients low inside the villus, maintaining a steep concentration gradient between the gut lumen and the blood, so diffusion (and active transport) continues rapidly. The constant rhythmic movement of the villi stirs the contents of the gut, bringing fresh, nutrient-rich material into contact with the absorptive surface and preventing a local build-up of already-absorbed material; this also helps maintain the concentration gradient and so the rate of absorption.",
            markScheme: [
              "Blood supply carries absorbed nutrients away (to hepatic portal vein/liver)",
              "This keeps villus nutrient concentration low / maintains steep gradient",
              "Steep gradient keeps diffusion/active transport rate high",
              "Movement of villi stirs gut contents / brings fresh material to the surface",
            ],
            commonError:
              "Saying blood supply increases surface area — its role is to maintain the concentration gradient by removing absorbed nutrients.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "challenge",
            hints: [
              "What happens to the gradient if absorbed nutrients are carried away quickly?",
              "Why does stirring the gut contents help?",
              "Link both features to the concentration gradient.",
            ],
            strategy: "Relate each feature to one factor in diffusion: here, maintaining the concentration gradient.",
          },
          {
            id: "bio-human-nutrition-bq4-09",
            question: "After absorption, glucose and amino acids are taken to the liver. Describe the route they take and outline what the liver does with each. [5 marks]",
            marks: 5,
            modelAnswer:
              "Glucose and amino acids are absorbed into the blood capillaries of the villi and carried in the blood to the hepatic portal vein, which delivers them directly to the liver. In the liver, glucose levels in the blood are regulated: excess glucose is converted to glycogen for storage (under the influence of insulin) and released again when blood glucose falls. Amino acids are processed in the liver; those not needed for protein synthesis cannot be stored, so they are deaminated — the amino group is removed and converted to urea (which is excreted by the kidneys), while the remainder can be used in respiration or converted to carbohydrate/fat.",
            markScheme: [
              "Absorbed into blood capillaries of villi",
              "Carried by the hepatic portal vein to the liver",
              "Liver regulates blood glucose / stores excess as glycogen",
              "Excess amino acids cannot be stored / are deaminated",
              "Deamination forms urea (excreted by kidneys)",
            ],
            commonError:
              "Saying amino acids are stored as protein in the liver — excess amino acids are deaminated, not stored.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "challenge",
            hints: [
              "Which vein carries absorbed nutrients to the liver?",
              "How does the liver handle excess glucose?",
              "What happens to amino acids that are not needed (think deamination and urea)?",
            ],
            strategy: "Handle glucose and amino acids separately: storage of glucose vs deamination of amino acids.",
          },
          {
            id: "bio-human-nutrition-bq4-10",
            question: "A patient suffers from coeliac disease, in which the villi of the small intestine become flattened and damaged. Predict and explain the effects this would have on the patient. [5 marks]",
            marks: 5,
            modelAnswer:
              "If the villi become flattened, the surface area of the small intestine for absorption is greatly reduced, and the diffusion distance may increase. As a result, the products of digestion (glucose, amino acids, fatty acids and glycerol) and other nutrients such as vitamins and minerals are absorbed much less efficiently. The patient may therefore suffer weight loss and tiredness due to reduced energy and nutrient uptake, and may develop deficiency symptoms (for example anaemia from poor iron absorption). Undigested or unabsorbed food, especially fat, may also pass into the faeces, causing diarrhoea. Digestion itself (by enzymes) still occurs; the main problem is poor absorption.",
            markScheme: [
              "Flattened villi → reduced surface area for absorption",
              "Reduced absorption of nutrients (glucose / amino acids / fats / vitamins / minerals)",
              "Consequence: weight loss / tiredness / lack of energy",
              "Possible deficiency symptoms (e.g. anaemia from poor iron absorption)",
              "Digestion still occurs; the problem is absorption / nutrients lost in faeces",
            ],
            commonError:
              "Saying the patient cannot digest food — digestion by enzymes continues; it is absorption that is impaired.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "challenge",
            hints: [
              "What do villi provide that flattening would remove?",
              "Distinguish digestion from absorption.",
              "What symptoms follow from poor nutrient uptake?",
            ],
            strategy: "Link the damaged structure (villi) to its function (absorption), then predict the downstream symptoms.",
          },
        ],
      },
    ],
  },
};
