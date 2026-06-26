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
        description: "Ten multiple-choice questions on a balanced diet, the nutrients, deficiency diseases and the gut.",
        questions: [
          {
            id: "bio-human-nutrition-bm1-01",
            question: "Which nutrient is the body's main source of energy?",
            options: ["Protein", "Carbohydrate", "Vitamin C", "Water"],
            answerIndex: 1,
            explanation: "Carbohydrates (e.g. starch and glucose) are the main and most readily-used energy source, providing about 4 kcal per gram. Proteins are mainly for growth and repair; vitamin C is needed for collagen synthesis; water is the solvent for metabolism but yields no energy.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bm1-02",
            question: "Which mineral is needed to make haemoglobin?",
            options: ["Calcium", "Iron", "Sodium", "Iodine"],
            answerIndex: 1,
            explanation: "Iron is a component of haemoglobin, the red pigment in red blood cells that carries oxygen. A lack of iron reduces haemoglobin production, causing anaemia. Calcium is needed for bones and teeth; sodium for nerve/muscle function; iodine for thyroid hormone.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bm1-03",
            question: "A balanced diet contains seven components. Which list gives ALL seven?",
            options: [
              "Carbohydrate, fat, protein, vitamins, minerals, fibre, water",
              "Carbohydrate, fat, protein, vitamins, minerals, oxygen, water",
              "Carbohydrate, fat, protein, enzymes, minerals, fibre, water",
              "Carbohydrate, fat, protein, vitamins, glucose, fibre, water",
            ],
            answerIndex: 0,
            explanation: "A balanced diet supplies carbohydrate, fat, protein, vitamins, minerals, dietary fibre and water in the correct proportions. Oxygen is taken in by breathing, not eating; enzymes are made by the body, not a dietary requirement; glucose is itself a carbohydrate, not a separate component.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "core",
            hints: [
              "Oxygen enters the body through the lungs, not through food — can it be a 'diet' component?",
              "Enzymes are made by your own cells; they are not eaten as a separate nutrient.",
              "Glucose is just one example of a carbohydrate — it cannot be a separate eighth class.",
            ],
          },
          {
            id: "bio-human-nutrition-bm1-04",
            question: "Why is dietary fibre (roughage) included in a healthy diet even though it cannot be digested?",
            options: [
              "It is absorbed in the colon to provide extra energy.",
              "It adds bulk to the gut contents and stimulates peristalsis, preventing constipation.",
              "It is broken down by enzymes into glucose for respiration.",
              "It is needed to make haemoglobin in red blood cells.",
            ],
            answerIndex: 1,
            explanation: "Fibre (mainly cellulose from plant cell walls) is not digested by human enzymes, but it adds bulk to the food and faeces. This bulk stretches the gut wall and stimulates peristalsis, keeping material moving and reducing the risk of constipation. It is not absorbed for energy, not digested to glucose, and has nothing to do with haemoglobin.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "core",
            hints: [
              "Humans have no enzyme that digests cellulose — so fibre cannot be a fuel.",
              "Think about what extra bulk does to the muscular gut wall.",
              "Which muscular process moves food along the gut?",
            ],
          },
          {
            id: "bio-human-nutrition-bm1-05",
            question: "A child has soft, deformed leg bones that bend under the child's weight. Which deficiency is the most likely cause?",
            options: ["Vitamin C", "Vitamin D", "Iron", "Protein"],
            answerIndex: 1,
            explanation: "Soft, bowed bones in a growing child are the classic sign of rickets, caused by a lack of vitamin D. Vitamin D is needed for the absorption of calcium from the gut and for bone mineralisation; without it, bones are poorly mineralised and deform. Vitamin C deficiency causes scurvy; iron deficiency causes anaemia; severe protein deficiency causes kwashiorkor.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "core",
            hints: [
              "Soft bones point to a problem with bone mineralisation.",
              "Which vitamin is needed for calcium to be absorbed and laid down in bone?",
              "The deficiency disease in children with soft bones has a specific name.",
            ],
          },
          {
            id: "bio-human-nutrition-bm1-06",
            question: "Which row correctly matches a vitamin or mineral to its deficiency disease?",
            options: [
              "Vitamin C — anaemia",
              "Iron — scurvy",
              "Vitamin D — rickets",
              "Calcium — rickets",
            ],
            answerIndex: 2,
            explanation: "Vitamin D deficiency causes rickets in children (soft bones). Vitamin C deficiency causes scurvy (bleeding gums), and iron deficiency causes anaemia — so the first two rows are swapped. Calcium deficiency weakens bones, but the named deficiency disease of soft bones in children is specifically the vitamin D disease, rickets.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "challenge",
            hints: [
              "Match each one carefully — two of the rows have the nutrient and disease swapped.",
              "Scurvy is the vitamin C disease; anaemia is the iron disease.",
              "Which vitamin's absence directly leads to soft, deformed bones?",
            ],
          },
          {
            id: "bio-human-nutrition-bm1-07",
            question: "In which order does food pass through these four regions of the gut?",
            options: [
              "Stomach → oesophagus → duodenum → ileum",
              "Oesophagus → stomach → duodenum → ileum",
              "Oesophagus → stomach → ileum → duodenum",
              "Stomach → duodenum → oesophagus → ileum",
            ],
            answerIndex: 1,
            explanation: "After the mouth, the bolus is carried down the oesophagus to the stomach, then enters the duodenum (first part of the small intestine) and finally the ileum (the longer absorptive part). The duodenum always comes before the ileum.",
            guideRef: "The Alimentary Canal",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bm1-08",
            question: "Peristalsis is best described as:",
            options: [
              "The chemical breakdown of food by enzymes",
              "Waves of muscular contraction that push food along the gut",
              "The absorption of nutrients into the blood",
              "The release of bile into the duodenum",
            ],
            answerIndex: 1,
            explanation: "Peristalsis is the coordinated contraction and relaxation of the circular and longitudinal muscles in the gut wall, producing waves that push food along the alimentary canal. It is a mechanical (physical) process, not chemical digestion, absorption, or secretion.",
            guideRef: "The Alimentary Canal",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bm1-09",
            question: "Which type of tooth is chisel-shaped and used mainly for cutting and biting food?",
            options: ["Incisor", "Canine", "Premolar", "Molar"],
            answerIndex: 0,
            explanation: "Incisors are the flat, chisel-shaped teeth at the front of the mouth, adapted for cutting and biting. Canines are pointed, for tearing; premolars and molars are broad with cusps, for grinding and crushing.",
            guideRef: "Teeth and Dental Health",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bm1-10",
            question: "A scientist removes the salivary glands of a mammal so no saliva enters the mouth. Which single step of digestion is most directly lost in the mouth?",
            options: [
              "The chewing of food into smaller pieces by the teeth",
              "The start of starch digestion by salivary amylase",
              "The neutralisation of stomach acid",
              "The emulsification of fats by bile",
            ],
            answerIndex: 1,
            explanation: "Saliva carries salivary amylase, which begins the chemical digestion of starch into maltose in the mouth. Removing the salivary glands removes this enzyme, so starch digestion no longer starts in the mouth (it can still occur later via pancreatic amylase). Chewing is done by the teeth, not saliva; acid neutralisation and fat emulsification happen later in the gut, by bile, not in the mouth.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "challenge",
            hints: [
              "What does saliva contain besides water and mucus?",
              "Mechanical chewing is done by the teeth — would removing saliva stop that?",
              "Which enzyme in saliva starts a specific chemical breakdown?",
              "Bile and acid neutralisation happen in the intestine, not the mouth.",
            ],
            strategy: "Separate mechanical jobs (teeth) from chemical jobs (enzymes in saliva) before choosing.",
          },
        ],
      },
      {
        id: "bio-human-nutrition-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Ten multiple-choice questions on digestion, enzymes, the stomach and bile.",
        questions: [
          {
            id: "bio-human-nutrition-bm2-01",
            question: "Which process is an example of MECHANICAL (physical) digestion?",
            options: [
              "Amylase breaking starch into maltose",
              "Teeth chewing food into smaller pieces",
              "Pepsin breaking proteins into peptides",
              "Lipase breaking fats into fatty acids",
            ],
            answerIndex: 1,
            explanation: "Mechanical digestion is the physical breaking of food into smaller pieces without changing it chemically — for example, chewing by the teeth and churning in the stomach. The other three options are chemical digestion, in which enzymes change food molecules into different, smaller molecules.",
            guideRef: "The Alimentary Canal",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bm2-02",
            question: "What are the products when lipase digests a fat?",
            options: [
              "Glucose and maltose",
              "Amino acids",
              "Fatty acids and glycerol",
              "Glycerol and glucose",
            ],
            answerIndex: 2,
            explanation: "Lipase catalyses the hydrolysis of fats (lipids) into fatty acids and glycerol. Glucose and maltose are products of carbohydrate digestion; amino acids are products of protein digestion.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bm2-03",
            question: "Where does pepsin act, and what conditions does it need?",
            options: [
              "In the mouth, at neutral pH",
              "In the stomach, at a low (acidic) pH of about 2",
              "In the small intestine, at an alkaline pH of about 8",
              "In the duodenum, at neutral pH",
            ],
            answerIndex: 1,
            explanation: "Pepsin is a protease secreted in the stomach. It has an acidic pH optimum of about 2, which the hydrochloric acid in gastric juice provides. Amylase and lipase, by contrast, work best in the slightly alkaline small intestine.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "core",
            hints: [
              "Pepsin works in the most acidic part of the gut — which organ is that?",
              "Recall the pH of gastric juice.",
              "Different enzymes have different optimum pH values — pepsin's is very low.",
            ],
          },
          {
            id: "bio-human-nutrition-bm2-04",
            question: "What is the role of hydrochloric acid in the stomach?",
            options: [
              "It digests fats into fatty acids and glycerol.",
              "It provides the optimum acidic pH for pepsin and kills many bacteria in food.",
              "It emulsifies large fat droplets into smaller ones.",
              "It absorbs amino acids into the blood.",
            ],
            answerIndex: 1,
            explanation: "Hydrochloric acid creates the strongly acidic conditions (pH ≈ 2) that pepsin needs to work, and it kills many bacteria and pathogens swallowed with food. It does not digest fats (that is lipase), does not emulsify fats (that is bile), and does not absorb nutrients.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "core",
            hints: [
              "HCl makes the stomach very acidic — which enzyme needs that pH?",
              "What might a strong acid do to bacteria entering with the food?",
              "Emulsification is bile's job, not acid's.",
            ],
          },
          {
            id: "bio-human-nutrition-bm2-05",
            question: "Bile is described as not being an enzyme. Which statement explains its role in fat digestion?",
            options: [
              "Bile hydrolyses fats directly into fatty acids and glycerol.",
              "Bile emulsifies fats, increasing their surface area for lipase to act on.",
              "Bile lowers the pH so lipase can work.",
              "Bile transports fatty acids into the lacteal.",
            ],
            answerIndex: 1,
            explanation: "Bile contains bile salts that emulsify fats — they break large fat globules into many small droplets. This greatly increases the total surface area exposed to lipase, speeding up fat digestion. Bile is not an enzyme, so it does not hydrolyse fat itself; it is alkaline (it raises pH), and it does not transport fatty acids.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "core",
            hints: [
              "Bile is not an enzyme — so it cannot break chemical bonds itself.",
              "What physical change does bile make to large fat globules?",
              "Lipase acts at the surface of droplets — why would smaller droplets help?",
            ],
          },
          {
            id: "bio-human-nutrition-bm2-06",
            question: "Maltose produced by amylase is finally broken down to glucose. Which enzyme does this, and where?",
            options: [
              "Pepsin, in the stomach",
              "Lipase, in the duodenum",
              "Maltase, in the small intestine",
              "Amylase, in the mouth",
            ],
            answerIndex: 2,
            explanation: "Amylase converts starch to maltose, but the disaccharide maltose must be broken into glucose by the enzyme maltase, which acts in the small intestine (its wall produces it). Pepsin digests protein; lipase digests fat; amylase only takes starch as far as maltose.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "core",
            hints: [
              "Amylase only takes starch as far as maltose — another enzyme finishes the job.",
              "The enzyme that digests maltose has a related name.",
              "Where is glucose finally produced and absorbed?",
            ],
          },
          {
            id: "bio-human-nutrition-bm2-07",
            question: "All digestive enzymes catalyse the same general type of reaction. What is it?",
            options: [
              "Condensation, joining small molecules together",
              "Hydrolysis, using water to split large molecules into smaller ones",
              "Oxidation, adding oxygen to molecules",
              "Neutralisation, reacting acids with alkalis",
            ],
            answerIndex: 1,
            explanation: "Digestion is the breakdown of large, insoluble food molecules into small, soluble ones. Enzymes do this by hydrolysis — they add water across a bond to split it. Condensation is the reverse (building up molecules); oxidation and neutralisation are not how enzymes digest food.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "core",
            hints: [
              "Digestion breaks big molecules down — is that building up or splitting apart?",
              "The word contains 'hydro' — what reactant is involved?",
              "Condensation is the opposite reaction; rule it out.",
            ],
          },
          {
            id: "bio-human-nutrition-bm2-08",
            question: "In a food test, a few drops of iodine solution are added to a sample and it turns blue-black. What does this show?",
            options: [
              "Reducing sugar is present",
              "Protein is present",
              "Starch is present",
              "Fat is present",
            ],
            answerIndex: 2,
            explanation: "Iodine solution turns from orange-brown to blue-black in the presence of starch. Reducing sugars are tested with Benedict's solution (brick-red when heated); protein with biuret (purple); fat with the emulsion test or ethanol.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bm2-09",
            question: "A student adds amylase to a starch solution at 37 °C and tests it with iodine every minute. After 5 minutes the iodine stops turning blue-black. What is the best explanation?",
            options: [
              "The amylase has been used up and destroyed by the reaction.",
              "The starch has been digested into maltose, so no starch remains to react with iodine.",
              "The iodine has reacted with the maltose to give no colour.",
              "The temperature has denatured the amylase.",
            ],
            answerIndex: 1,
            explanation: "Iodine only goes blue-black with starch. Once amylase has hydrolysed the starch into maltose, there is no starch left, so iodine stays orange-brown. Enzymes are not used up (they are catalysts); iodine does not give a blue-black colour with maltose; 37 °C is the optimum, not a denaturing temperature.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "challenge",
            hints: [
              "Iodine only reacts with one substance — what is that?",
              "Enzymes are catalysts; are they consumed in the reaction?",
              "If the starch has gone, what has it become?",
              "Is 37 °C hot enough to denature a human enzyme?",
            ],
            strategy: "Tie the colour change directly to the substrate that the indicator detects.",
          },
          {
            id: "bio-human-nutrition-bm2-10",
            question: "A patient cannot release bile into the duodenum. Apart from poorer fat digestion, what secondary problem is most likely?",
            options: [
              "Protein digestion stops completely because pepsin needs bile.",
              "The chyme entering the duodenum is not neutralised, so it stays acidic and pancreatic enzymes work less well.",
              "Starch can no longer be digested anywhere in the gut.",
              "Water can no longer be absorbed in the colon.",
            ],
            answerIndex: 1,
            explanation: "Bile is alkaline and neutralises the acidic chyme arriving from the stomach, giving the slightly alkaline pH that pancreatic amylase, lipase and protease need. Without bile, the duodenum stays too acidic and these enzymes work less efficiently. Pepsin works in the stomach (not bile-dependent); starch is still digested by amylase; water absorption in the colon is unaffected.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "challenge",
            hints: [
              "Bile has two jobs — emulsification is one; what is the other?",
              "What is the pH of the chyme leaving the stomach?",
              "Which enzymes work in the duodenum, and what pH do they prefer?",
              "Pepsin acts in the stomach, so it is not affected here.",
            ],
            strategy: "Recall bile's TWO roles, then reason about the one that is not 'fat'.",
          },
        ],
      },
      {
        id: "bio-human-nutrition-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Ten multiple-choice questions on absorption, villi, the liver and assimilation.",
        questions: [
          {
            id: "bio-human-nutrition-bm3-01",
            question: "Which part of the gut is the main site of absorption of digested food?",
            options: ["Stomach", "Small intestine (ileum)", "Colon", "Oesophagus"],
            answerIndex: 1,
            explanation: "The small intestine, especially the ileum, is the main site of absorption because its inner surface is folded into villi and microvilli for a huge surface area. The stomach mainly digests; the colon absorbs water; the oesophagus only transports food.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bm3-02",
            question: "What are the finger-like projections that line the small intestine called?",
            options: ["Alveoli", "Villi", "Nephrons", "Cilia"],
            answerIndex: 1,
            explanation: "Villi are the finger-like projections of the small intestine lining that increase surface area for absorption. Alveoli are in the lungs; nephrons are in the kidney; cilia are tiny hair-like structures, not the gut folds.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bm3-03",
            question: "Which feature of a villus gives the SHORTEST diffusion distance for absorbed molecules?",
            options: [
              "Its rich network of capillaries",
              "Its wall being a single layer of epithelial cells",
              "Its central lacteal",
              "Its large overall surface area",
            ],
            answerIndex: 1,
            explanation: "The wall of a villus is just one epithelial cell thick, so molecules have a very short distance to diffuse from the gut lumen into the capillaries. The capillary network maintains the concentration gradient; the lacteal absorbs fats; surface area increases the amount absorbed — but it is the single cell layer that minimises distance.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "challenge",
            hints: [
              "Diffusion distance is about how THICK the barrier is.",
              "How many cells thick is the wall of a villus?",
              "Surface area and gradient are different factors from distance.",
            ],
          },
          {
            id: "bio-human-nutrition-bm3-04",
            question: "Into which structure are the products of fat digestion (fatty acids and glycerol) absorbed?",
            options: [
              "The blood capillaries",
              "The central lacteal (lymph vessel)",
              "The hepatic portal vein directly",
              "The colon wall",
            ],
            answerIndex: 1,
            explanation: "Fatty acids and glycerol enter the epithelial cells, are reassembled into fats, and pass into the central lacteal — a lymph vessel inside the villus. Glucose and amino acids, by contrast, are absorbed into the blood capillaries and carried to the liver in the hepatic portal vein.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "core",
            hints: [
              "Two routes leave a villus: blood capillaries and a lymph vessel.",
              "Glucose and amino acids take the blood route — what is left for fats?",
              "The lymph vessel inside a villus has a specific name.",
            ],
          },
          {
            id: "bio-human-nutrition-bm3-05",
            question: "Glucose can be absorbed into the blood even when its concentration is already higher in the blood than in the gut. Which process makes this possible?",
            options: [
              "Diffusion only",
              "Osmosis",
              "Active transport, using energy from respiration",
              "Filtration under pressure",
            ],
            answerIndex: 2,
            explanation: "Moving glucose against its concentration gradient requires active transport, which uses ATP from respiration to pump glucose across the epithelial cell membrane. Diffusion and osmosis only move substances down a gradient; filtration is not how the gut absorbs glucose.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "core",
            hints: [
              "Diffusion can only move substances from high to low concentration.",
              "Moving 'uphill' against a gradient needs energy — where from?",
              "Which transport process uses ATP?",
            ],
          },
          {
            id: "bio-human-nutrition-bm3-06",
            question: "Which blood vessel carries glucose and amino acids from the small intestine to the liver?",
            options: [
              "Hepatic artery",
              "Hepatic vein",
              "Hepatic portal vein",
              "Pulmonary vein",
            ],
            answerIndex: 2,
            explanation: "The hepatic portal vein carries nutrient-rich blood from the small intestine directly to the liver. The hepatic artery brings oxygenated blood to the liver from the heart; the hepatic vein takes blood away from the liver; the pulmonary vein carries blood from the lungs to the heart.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "core",
            hints: [
              "A 'portal' vein links two organs' capillary beds.",
              "Which organ processes absorbed nutrients first?",
              "Distinguish hepatic artery (blood in from heart) from hepatic portal vein (blood in from gut).",
            ],
          },
          {
            id: "bio-human-nutrition-bm3-07",
            question: "Most of the water remaining in the gut contents is absorbed in which region?",
            options: ["Stomach", "Duodenum", "Ileum", "Colon (large intestine)"],
            answerIndex: 3,
            explanation: "While some water is absorbed throughout the gut, the colon (large intestine) reabsorbs most of the remaining water from the undigested material, helping to form solid faeces. Failure of this absorption (e.g. in diarrhoea) leaves the faeces watery.",
            guideRef: "The Alimentary Canal",
            difficulty: "core",
            hints: [
              "After the small intestine, what is left is mostly water and indigestible matter.",
              "Which region forms the faeces by removing water?",
              "Think about what causes watery faeces (diarrhoea) when this region fails.",
            ],
          },
          {
            id: "bio-human-nutrition-bm3-08",
            question: "Assimilation is best defined as:",
            options: [
              "The breakdown of large food molecules by enzymes",
              "The movement of nutrients from the gut into the blood",
              "The uptake and use of absorbed nutrients by the body's cells",
              "The removal of undigested food as faeces",
            ],
            answerIndex: 2,
            explanation: "Assimilation is the process by which absorbed nutrients are taken into cells and used — for example, glucose used in respiration or amino acids built into new proteins. Breakdown by enzymes is digestion; movement into the blood is absorption; removal of undigested food is egestion.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "core",
            hints: [
              "Assimilation happens AFTER absorption.",
              "It involves cells actually USING the nutrients.",
              "Distinguish it from absorption (entering the blood) and digestion (breakdown).",
            ],
          },
          {
            id: "bio-human-nutrition-bm3-09",
            question: "After absorption, excess glucose arriving at the liver is converted to which storage molecule?",
            options: ["Starch", "Glycogen", "Maltose", "Cellulose"],
            answerIndex: 1,
            explanation: "The liver helps regulate blood glucose by converting excess glucose into glycogen, the animal storage carbohydrate, which can later be broken back down to glucose. Starch and cellulose are plant carbohydrates; maltose is a digestion intermediate, not a long-term store.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "core",
            hints: [
              "Animals store carbohydrate differently from plants.",
              "Plants store starch; animals (and the liver) store ____.",
              "The store can be broken back down to glucose when needed.",
            ],
          },
          {
            id: "bio-human-nutrition-bm3-10",
            question: "The small intestine of an adult is about 6 m long, yet villi and microvilli give it an absorptive surface area of roughly 200 m². Why is such a large surface area an advantage?",
            options: [
              "It increases the rate of peristalsis along the gut.",
              "It increases the rate at which digested nutrients can be absorbed.",
              "It allows more enzymes to be produced by the gut wall.",
              "It reduces the amount of water lost in the faeces.",
            ],
            answerIndex: 1,
            explanation: "A large surface area allows more molecules to be absorbed at the same time, so the rate of absorption of digested nutrients is much faster than it would be across a smooth tube. Surface area does not control peristalsis or water loss in the colon, and although more cells could make more enzymes, the key benefit of villi is faster absorption.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "challenge",
            hints: [
              "Think about what the small intestine's main job is.",
              "Rate of diffusion and active transport both depend on surface area.",
              "More surface means more molecules can cross at once.",
              "Peristalsis and water absorption are separate functions.",
            ],
            strategy: "Link the feature (big surface area) to the function it serves (fast absorption).",
          },
        ],
      },
      {
        id: "bio-human-nutrition-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Ten mixed multiple-choice questions spanning the whole human nutrition topic.",
        questions: [
          {
            id: "bio-human-nutrition-bm4-01",
            question: "Which food test uses Benedict's solution and a heat source, giving a brick-red result?",
            options: [
              "Test for starch",
              "Test for protein",
              "Test for reducing sugar (e.g. glucose)",
              "Test for fat",
            ],
            answerIndex: 2,
            explanation: "Benedict's solution is heated with a sample to test for reducing sugars such as glucose; a positive result changes from blue to brick-red. Starch uses iodine (blue-black); protein uses biuret (purple); fat uses the emulsion or ethanol test.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bm4-02",
            question: "Which nutrient is needed mainly for growth and the repair of tissues?",
            options: ["Carbohydrate", "Fat", "Protein", "Fibre"],
            answerIndex: 2,
            explanation: "Proteins, made of amino acids, are used to build new cells and tissues for growth and repair, and to make enzymes and some hormones. Carbohydrate and fat are mainly energy stores; fibre aids gut movement.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bm4-03",
            question: "Which statement about fats as a nutrient is correct?",
            options: [
              "Fats provide less energy per gram than carbohydrates.",
              "Fats provide about twice as much energy per gram as carbohydrates and help insulate the body.",
              "Fats cannot be stored in the body.",
              "Fats are the body's first choice fuel for respiration.",
            ],
            answerIndex: 1,
            explanation: "Fats are an energy-dense store, providing roughly twice the energy per gram of carbohydrate, and they insulate the body and form cell membranes. Carbohydrate, not fat, is the body's first-choice respiratory fuel, and fat is readily stored under the skin and around organs.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "core",
            hints: [
              "Compare the energy per gram of fat with carbohydrate.",
              "Which fuel does the body use first — carbohydrate or fat?",
              "Think about the insulating fat layer under the skin.",
            ],
          },
          {
            id: "bio-human-nutrition-bm4-04",
            question: "Water is an essential part of the diet. Which is NOT a function of water in the body?",
            options: [
              "Acting as a solvent for biochemical reactions",
              "Transporting substances in blood and lymph",
              "Helping to regulate body temperature through sweating",
              "Providing a major source of energy for respiration",
            ],
            answerIndex: 3,
            explanation: "Water is the solvent in which reactions occur, the medium for transport in blood and lymph, and is lost in sweat to cool the body. It provides no energy, because it is not respired — only carbohydrates, fats and (if needed) proteins release energy.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "core",
            hints: [
              "Three of these are genuine roles of water — find the odd one out.",
              "Does water contain chemical energy that can be respired?",
              "Energy comes from carbohydrate, fat and protein, not water.",
            ],
          },
          {
            id: "bio-human-nutrition-bm4-05",
            question: "Which is the correct sequence of the five processes of nutrition?",
            options: [
              "Digestion → ingestion → absorption → assimilation → egestion",
              "Ingestion → digestion → absorption → assimilation → egestion",
              "Ingestion → absorption → digestion → egestion → assimilation",
              "Ingestion → digestion → assimilation → absorption → egestion",
            ],
            answerIndex: 1,
            explanation: "Food is first taken in (ingestion), broken down (digestion), then the soluble products pass into the blood/lymph (absorption) and are used by cells (assimilation); undigested matter is finally removed (egestion). The order ingestion → digestion → absorption → assimilation → egestion is the only logical sequence.",
            guideRef: "The Alimentary Canal",
            difficulty: "core",
            hints: [
              "Food must be taken in before it can be broken down.",
              "Nutrients must be absorbed before cells can use them.",
              "Egestion (removing waste) comes last.",
            ],
          },
          {
            id: "bio-human-nutrition-bm4-06",
            question: "Egestion and excretion are sometimes confused. Which statement is correct?",
            options: [
              "Egestion is the removal of undigested food; excretion is the removal of metabolic waste made by the body.",
              "Egestion is the removal of urea; excretion is the removal of faeces.",
              "Both terms mean exactly the same thing.",
              "Egestion removes carbon dioxide; excretion removes faeces.",
            ],
            answerIndex: 0,
            explanation: "Egestion is the elimination of undigested material (faeces) that was never absorbed into cells. Excretion is the removal of waste products of metabolism made inside the body, such as urea and carbon dioxide. Faeces are egested, not excreted.",
            guideRef: "The Alimentary Canal",
            difficulty: "challenge",
            hints: [
              "Did the substance ever take part in the body's chemistry?",
              "Faeces are mostly undigested food that never entered cells.",
              "Urea and carbon dioxide are MADE by reactions inside cells.",
              "One term is for food waste, the other for metabolic waste.",
            ],
            strategy: "Ask: 'Was this made by the body's reactions?' If yes, it is excreted; if it is leftover food, it is egested.",
          },
          {
            id: "bio-human-nutrition-bm4-07",
            question: "Which row correctly states where an enzyme is produced and where it acts?",
            options: [
              "Salivary amylase — produced by pancreas — acts in stomach",
              "Pepsin — produced by stomach — acts in stomach",
              "Lipase — produced by stomach — acts in mouth",
              "Maltase — produced by liver — acts in colon",
            ],
            answerIndex: 1,
            explanation: "Pepsin is produced by the stomach wall and acts within the stomach. Salivary amylase is produced by the salivary glands and acts in the mouth; lipase is produced by the pancreas and acts in the small intestine; maltase is produced by the small intestine wall and acts there.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "core",
            hints: [
              "Match production site to action site for each enzyme.",
              "Salivary amylase comes from salivary glands, not the pancreas.",
              "Lipase acts in the small intestine, not the mouth.",
            ],
          },
          {
            id: "bio-human-nutrition-bm4-08",
            question: "Reducing the FREQUENCY of sugary snacks (rather than just the total amount) is recommended for dental health. Why?",
            options: [
              "Sugar directly dissolves enamel each time it is eaten.",
              "Each time sugar is eaten, bacteria produce acid; fewer episodes mean fewer acid attacks and more time for enamel to recover.",
              "Sugar makes saliva more acidic permanently.",
              "Frequent eating wears the enamel away mechanically.",
            ],
            answerIndex: 1,
            explanation: "Bacteria in plaque produce acid for a period of time after each exposure to sugar. Snacking frequently means repeated acid attacks with little recovery time, so enamel demineralises faster. Sugar itself is not acidic; the damage is from bacterial acid, not mechanical wear.",
            guideRef: "Teeth and Dental Health",
            difficulty: "challenge",
            hints: [
              "It is bacteria, not the sugar itself, that produce the acid.",
              "Each sugar exposure triggers an 'acid attack' lasting a while.",
              "Think about recovery time for enamel between attacks.",
              "Why is frequency worse than one large amount eaten once?",
            ],
            strategy: "Focus on the timeline of acid production after each exposure, not the total sugar.",
          },
          {
            id: "bio-human-nutrition-bm4-09",
            question: "An elderly housebound person who rarely goes outdoors and eats little oily fish is at risk of which deficiency?",
            options: ["Vitamin C", "Vitamin D", "Iron", "Fibre"],
            answerIndex: 1,
            explanation: "Vitamin D is made in the skin in sunlight and is found in oily fish and egg yolk. Someone with little sun exposure and a diet low in oily fish is at risk of vitamin D deficiency, which can cause weakened, soft bones (osteomalacia in adults). The scenario does not point to a lack of vitamin C, iron or fibre.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "core",
            hints: [
              "One vitamin is made in the skin using sunlight.",
              "Being housebound removes that source.",
              "Oily fish is a key dietary source of the same vitamin.",
            ],
          },
          {
            id: "bio-human-nutrition-bm4-10",
            question: "Which statement about the difference between mechanical and chemical digestion in the stomach is correct?",
            options: [
              "Churning of the stomach is chemical; pepsin action is mechanical.",
              "Churning of the stomach is mechanical; pepsin action is chemical.",
              "Both churning and pepsin action are mechanical.",
              "Both churning and pepsin action are chemical.",
            ],
            answerIndex: 1,
            explanation: "Churning of the stomach physically mixes and breaks up food without changing the molecules — this is mechanical digestion. Pepsin chemically hydrolyses proteins into peptides, changing the molecules — this is chemical digestion. The two types occur together in the stomach.",
            guideRef: "The Alimentary Canal",
            difficulty: "core",
            hints: [
              "Mechanical = physical breaking; chemical = enzymes changing molecules.",
              "Does churning change the food molecules themselves?",
              "Does pepsin change protein into a different substance?",
            ],
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-human-nutrition-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Ten structured questions on a balanced diet, nutrients and deficiency diseases.",
        questions: [
          {
            id: "bio-human-nutrition-bq1-01",
            question: "Name the seven components of a balanced diet. [3 marks]",
            marks: 3,
            modelAnswer:
              "Carbohydrate, fat (lipid), protein, vitamins, mineral ions (minerals), dietary fibre (roughage) and water.",
            markScheme: [
              "Carbohydrate; fat / lipid; protein (all three)",
              "Vitamins; minerals / mineral ions (both)",
              "Dietary fibre / roughage; water (both)",
            ],
            commonError:
              "Listing 'glucose' or 'starch' as separate components — these are types of carbohydrate, not extra classes. Forgetting fibre and water is also common.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bq1-02",
            question: "State one function and one dietary source for each of: (a) calcium, (b) iron. [4 marks]",
            marks: 4,
            modelAnswer:
              "(a) Calcium: needed for the formation of strong bones and teeth (also for muscle contraction and blood clotting). Source: dairy products such as milk or cheese / leafy green vegetables.\n(b) Iron: needed to make haemoglobin in red blood cells for the transport of oxygen. Source: red meat / spinach / lentils.",
            markScheme: [
              "Calcium function: strong bones and teeth / muscle contraction / blood clotting",
              "Calcium source: dairy / milk / cheese / leafy greens",
              "Iron function: to make haemoglobin / for oxygen transport",
              "Iron source: red meat / spinach / lentils / liver",
            ],
            commonError:
              "Swapping the two — e.g. saying iron is for bones and calcium for haemoglobin. Keep the function tied to the correct mineral.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bq1-03",
            question: "Explain why vitamin C is needed in the diet and describe the deficiency disease that results from its absence. [4 marks]",
            marks: 4,
            modelAnswer:
              "Vitamin C (ascorbic acid) is needed for the synthesis of collagen, a protein that strengthens connective tissue such as skin, blood vessels and gums. Without enough vitamin C, collagen cannot be made properly, so the deficiency disease scurvy develops. Symptoms include bleeding/swollen gums, loose teeth and slow wound healing.",
            markScheme: [
              "Vitamin C needed for collagen synthesis / strong connective tissue",
              "Deficiency disease named: scurvy",
              "Symptom: bleeding / swollen gums (or loose teeth)",
              "Symptom: slow / poor wound healing",
            ],
            commonError:
              "Naming the deficiency as rickets or anaemia — those are vitamin D and iron deficiencies. Scurvy is specifically the vitamin C disease.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "core",
            hints: [
              "Vitamin C is involved in making a structural protein — which one?",
              "That protein strengthens gums, skin and blood vessels.",
              "Name the disease and recall two symptoms.",
            ],
          },
          {
            id: "bio-human-nutrition-bq1-04",
            question: "Explain how vitamin D and calcium work together to keep bones healthy, and state what happens in a child who lacks vitamin D. [4 marks]",
            marks: 4,
            modelAnswer:
              "Calcium is the mineral that is deposited in bone (and teeth) to make them hard and strong. Vitamin D is needed for the absorption of calcium from the gut into the blood. So even a calcium-rich diet cannot strengthen bones if vitamin D is lacking, because the calcium is not absorbed. A child who lacks vitamin D absorbs too little calcium, so the bones are poorly mineralised, becoming soft and deformed — this is rickets.",
            markScheme: [
              "Calcium is deposited in / hardens bones (and teeth)",
              "Vitamin D is needed for absorption of calcium from the gut",
              "Without vitamin D, calcium is poorly absorbed even if eaten",
              "Child develops rickets / soft / bowed / deformed bones",
            ],
            commonError:
              "Stating that vitamin D itself hardens the bone — its role is to enable calcium absorption; calcium is the mineral that hardens bone.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "core",
            hints: [
              "Which of the two actually makes bone hard?",
              "What is vitamin D's specific job in relation to calcium?",
              "If calcium is eaten but not absorbed, what happens to the bones?",
            ],
          },
          {
            id: "bio-human-nutrition-bq1-05",
            question: "A villager's diet is high in calories but contains very little protein. Name the resulting condition and explain why protein deficiency is harmful, especially in children. [4 marks]",
            marks: 4,
            modelAnswer:
              "The condition is kwashiorkor, which results from a diet lacking protein even when energy intake is adequate. Protein provides amino acids needed for growth and the repair of tissues, and for making enzymes, antibodies and some hormones. In children, who are still growing rapidly, a lack of protein stops normal growth and tissue building, leading to symptoms such as a swollen abdomen (oedema), poor muscle development and weakened immunity.",
            markScheme: [
              "Condition named: kwashiorkor",
              "Protein supplies amino acids for growth / repair of tissues",
              "Protein also needed to make enzymes / antibodies / hormones",
              "Effect in children: growth is stunted / oedema (swollen belly) / weakened immunity",
            ],
            commonError:
              "Naming the condition as marasmus — marasmus is caused by overall lack of food (energy), whereas kwashiorkor is specifically protein deficiency with adequate calories.",
            guideRef: "Energy Requirements",
            difficulty: "core",
            hints: [
              "The diet has enough calories but no protein — which condition is that?",
              "What is protein used for in a growing body?",
              "Why would a growing child suffer more than an adult?",
            ],
          },
          {
            id: "bio-human-nutrition-bq1-06",
            question: "List four factors that affect a person's daily energy requirement, and for each briefly say why. [4 marks]",
            marks: 4,
            modelAnswer:
              "1. Age — children and teenagers need more energy per kg for growth, and metabolic rate falls in old age. 2. Activity level — physically active people (manual workers, athletes) use more energy for muscle contraction. 3. Sex — males usually have more muscle and a higher basal metabolic rate than females of the same size. 4. Pregnancy — extra energy is needed to support the growth of the foetus and later milk production. (Body size and climate are also acceptable.)",
            markScheme: [
              "Age — growth in young / lower metabolic rate in elderly",
              "Activity level — active people use more energy for muscle contraction",
              "Sex — males generally higher BMR / more muscle (or body size accepted)",
              "Pregnancy — energy for foetal growth (or climate accepted)",
            ],
            commonError:
              "Listing a factor without a reason. Each factor must be linked to why it changes energy demand to gain the mark.",
            guideRef: "Energy Requirements",
            difficulty: "core",
            hints: [
              "Think of biological factors (age, sex, size) and lifestyle factors (activity, pregnancy).",
              "For each, say what it does to energy demand.",
              "Growth and muscle activity are the two biggest energy uses.",
            ],
          },
          {
            id: "bio-human-nutrition-bq1-07",
            question: "Describe the test for protein and the test for fat, including the reagent used and the positive result in each case. [4 marks]",
            marks: 4,
            modelAnswer:
              "Protein test (biuret test): add biuret solution (or sodium hydroxide then copper(II) sulfate) to the sample; if protein is present the blue solution turns purple/lilac. Fat test (emulsion test): dissolve the sample in ethanol, then add the ethanol to water; if fat is present a cloudy white emulsion forms.",
            markScheme: [
              "Protein reagent: biuret solution / NaOH + copper(II) sulfate",
              "Protein positive result: blue → purple / lilac / mauve",
              "Fat test: emulsion test / sample mixed with ethanol then added to water",
              "Fat positive result: cloudy white emulsion forms",
            ],
            commonError:
              "Saying the biuret test needs heating — it does not (unlike Benedict's). Also confusing the fat emulsion test with simply adding water.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "core",
            hints: [
              "Protein uses a copper-based reagent — what colour change?",
              "The fat test uses an alcohol, then water.",
              "State the reagent AND the positive observation for each.",
            ],
          },
          {
            id: "bio-human-nutrition-bq1-08",
            question: "Anaemia is a common deficiency disease. (a) State the mineral whose deficiency causes it. (b) Explain how the deficiency leads to tiredness and breathlessness. [3 marks]",
            marks: 3,
            modelAnswer:
              "(a) Iron. (b) Iron is needed to make haemoglobin in red blood cells. Without enough iron, less haemoglobin is made, so the blood carries less oxygen to the body's tissues. With less oxygen, cells respire less and release less energy, causing tiredness; the body also breathes faster to try to take in more oxygen, causing breathlessness.",
            markScheme: [
              "Mineral: iron",
              "Less haemoglobin made / blood carries less oxygen",
              "Less oxygen to tissues → less respiration / energy → tiredness / breathlessness",
            ],
            commonError:
              "Saying the blood carries fewer nutrients — anaemia is about reduced oxygen transport due to low haemoglobin, not nutrients.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "core",
            hints: [
              "Which mineral is part of haemoglobin?",
              "What does haemoglobin carry?",
              "Link low oxygen to low energy release in respiration.",
            ],
          },
          {
            id: "bio-human-nutrition-bq1-09",
            question: "A dietician compares two adults of the same age, sex and body mass: Adult A is a manual labourer; Adult B works at a desk. (a) State who needs more energy each day. (b) A food label gives 250 kJ per 100 g for a yoghurt. Calculate the energy in a 150 g pot. Show your working. [4 marks]",
            marks: 4,
            modelAnswer:
              "(a) Adult A (the manual labourer) needs more energy per day, because greater physical activity means more muscle contraction and therefore more energy use.\n(b) Energy per gram = 250 ÷ 100 = 2.5 kJ per g. For 150 g: 2.5 × 150 = 375 kJ. So a 150 g pot provides 375 kJ.",
            markScheme: [
              "Adult A / the manual labourer needs more energy",
              "Reason: more physical activity / muscle contraction uses more energy",
              "Working: 250 ÷ 100 × 150 (or 250 × 1.5)",
              "Answer: 375 kJ",
            ],
            commonError:
              "Forgetting to scale from 100 g to 150 g, or giving the answer without units (kJ).",
            guideRef: "Energy Requirements",
            difficulty: "challenge",
            hints: [
              "Who uses more energy — the active worker or the desk worker?",
              "First find the energy in 1 g, then multiply by 150.",
              "Always include the unit, kJ, in your final answer.",
            ],
            solutions: [
              {
                label: "Scaling the energy value",
                steps: [
                  "Label value: 250 kJ per 100 g.",
                  "Energy per gram = 250 ÷ 100 = 2.5 kJ/g.",
                  "Multiply by the pot mass: 2.5 kJ/g × 150 g = 375 kJ.",
                  "Check: 150 g is 1.5 × 100 g, and 250 × 1.5 = 375 kJ. Final answer: 375 kJ.",
                ],
              },
            ],
          },
          {
            id: "bio-human-nutrition-bq1-10",
            question: "Explain why overnutrition (eating more energy than is used) can damage health, and describe how this differs from undernutrition. [5 marks]",
            marks: 5,
            modelAnswer:
              "Overnutrition means taking in more energy (calories) than the body uses. The excess energy is stored as fat, leading to obesity. Obesity increases the risk of type 2 diabetes, high blood pressure, heart disease and joint problems, because of the strain of extra body mass and the metabolic effects of excess fat. Undernutrition is the opposite: too little food overall (causing marasmus) or too little of a specific nutrient (e.g. protein causing kwashiorkor, or vitamins/minerals causing deficiency diseases). So overnutrition is a problem of excess energy stored as fat, whereas undernutrition is a problem of insufficient energy or nutrients leading to weight loss, poor growth and deficiency diseases. Both are forms of malnutrition (an unbalanced diet).",
            markScheme: [
              "Overnutrition: energy intake exceeds energy used / output",
              "Excess energy stored as fat → obesity",
              "Obesity raises risk of named disease (type 2 diabetes / heart disease / high blood pressure)",
              "Undernutrition: too little food (marasmus) or too little of a nutrient (kwashiorkor / deficiency disease)",
              "Both are types of malnutrition / unbalanced diet",
            ],
            commonError:
              "Treating 'malnutrition' as meaning only starvation — malnutrition includes overnutrition (too much) as well as undernutrition (too little).",
            guideRef: "Energy Requirements",
            difficulty: "challenge",
            hints: [
              "What happens to energy that is taken in but not used?",
              "Name a disease linked to obesity.",
              "Undernutrition can be a lack of total food OR a lack of one nutrient — give both.",
              "What word covers BOTH too much and too little?",
            ],
            strategy: "Define each term, give a consequence with an example, then state what they share (malnutrition).",
          },
        ],
      },
      {
        id: "bio-human-nutrition-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Ten structured questions on the alimentary canal, teeth, ingestion and egestion.",
        questions: [
          {
            id: "bio-human-nutrition-bq2-01",
            question: "Define the following terms: (a) ingestion, (b) egestion. [2 marks]",
            marks: 2,
            modelAnswer:
              "(a) Ingestion is the taking of food (and drink) into the body through the mouth. (b) Egestion is the removal of undigested food material (faeces) from the body through the anus.",
            markScheme: [
              "Ingestion: taking food into the body / through the mouth",
              "Egestion: removal of undigested food / faeces / via the anus",
            ],
            commonError:
              "Confusing egestion with excretion — egestion removes undigested food, not metabolic waste.",
            guideRef: "The Alimentary Canal",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bq2-02",
            question: "Put the following regions of the gut in the correct order, starting with the mouth: ileum, stomach, oesophagus, colon, duodenum, rectum, anus. [3 marks]",
            marks: 3,
            modelAnswer:
              "Mouth → oesophagus → stomach → duodenum → ileum → colon → rectum → anus.",
            markScheme: [
              "Oesophagus → stomach (correctly after mouth)",
              "Duodenum → ileum (in this order)",
              "Colon → rectum → anus (in this order)",
            ],
            commonError:
              "Placing the colon before the ileum, or swapping the duodenum and ileum. The duodenum (with the bile and pancreatic ducts) comes first.",
            guideRef: "The Alimentary Canal",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bq2-03",
            question: "Explain what peristalsis is and how the muscles of the gut wall bring it about. [4 marks]",
            marks: 4,
            modelAnswer:
              "Peristalsis is a wave of muscular contraction that moves food (the bolus) along the alimentary canal. The gut wall contains two muscle layers: circular muscle and longitudinal muscle. Behind the bolus, the circular muscle contracts to narrow the tube and push the food forward, while ahead of the bolus the longitudinal muscle contracts to shorten and widen the tube. These coordinated contractions and relaxations form a wave that travels along the gut, moving food in one direction even against gravity.",
            markScheme: [
              "Peristalsis = wave(s) of muscular contraction moving food along the gut",
              "Two muscle layers: circular and longitudinal",
              "Circular muscle contracts behind the bolus to push it forward",
              "Coordinated contraction/relaxation forms a travelling wave / moves food one way",
            ],
            commonError:
              "Saying the gut has only one muscle, or that gravity moves the food — peristalsis works even when upside down.",
            guideRef: "The Alimentary Canal",
            difficulty: "core",
            hints: [
              "Peristalsis is a muscular, not chemical, process.",
              "Name the two muscle layers in the gut wall.",
              "Which layer contracts behind the food to push it forward?",
            ],
          },
          {
            id: "bio-human-nutrition-bq2-04",
            question: "Name the four types of human teeth and give the function of each. [4 marks]",
            marks: 4,
            modelAnswer:
              "Incisors — chisel-shaped, used for cutting and biting food. Canines — pointed, used for tearing food (more developed in carnivores). Premolars — have cusps, used for grinding and crushing. Molars — broad with several cusps, used for grinding and chewing food into small pieces.",
            markScheme: [
              "Incisor — cutting / biting",
              "Canine — tearing / piercing",
              "Premolar — grinding / crushing / chewing",
              "Molar — grinding / chewing",
            ],
            commonError:
              "Giving the same function ('chewing') for all teeth. Distinguish cutting (incisor), tearing (canine), and grinding (premolar/molar).",
            guideRef: "Teeth and Dental Health",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bq2-05",
            question: "Describe the structure of a tooth, naming the enamel, dentine and pulp cavity and giving the role of each. [4 marks]",
            marks: 4,
            modelAnswer:
              "Enamel is the hard, white outer layer covering the crown of the tooth; it is the hardest substance in the body (made of calcium phosphate) and protects the tooth from wear and acid. Dentine lies beneath the enamel and forms the bulk of the tooth; it is slightly softer than enamel and supports it. The pulp cavity is the central space containing nerves (which give sensation/pain) and blood vessels (which supply oxygen and nutrients to the living tooth tissue).",
            markScheme: [
              "Enamel = hard outer layer / protects tooth / hardest substance",
              "Dentine = softer layer forming the bulk of the tooth beneath enamel",
              "Pulp cavity = central space with nerves and blood vessels",
              "Role of pulp: nerves give sensation / blood vessels supply nutrients and oxygen",
            ],
            commonError:
              "Swapping enamel and dentine, or saying enamel contains the nerves. The nerves and blood vessels are in the pulp cavity.",
            guideRef: "Teeth and Dental Health",
            difficulty: "core",
            hints: [
              "Work from the outside in: hardest layer first.",
              "Which layer forms most of the tooth?",
              "Where are the nerves and blood vessels found?",
            ],
          },
          {
            id: "bio-human-nutrition-bq2-06",
            question: "Explain how tooth decay (dental caries) is caused, from the action of bacteria to the formation of a cavity. [4 marks]",
            marks: 4,
            modelAnswer:
              "Bacteria in the mouth form a sticky layer of plaque on the teeth. These bacteria feed on sugars from food and respire, producing acid (lactic acid) as a waste product. The acid dissolves the calcium phosphate in the enamel (demineralisation). With repeated acid attacks the enamel is broken down, forming a cavity. If untreated, the decay spreads into the dentine and eventually the pulp, causing pain and infection.",
            markScheme: [
              "Bacteria in plaque feed on sugar",
              "Bacteria produce acid (lactic acid)",
              "Acid dissolves enamel / calcium phosphate (demineralisation)",
              "Cavity forms / decay spreads into dentine / pulp",
            ],
            commonError:
              "Saying sugar itself dissolves the enamel — it is the acid made by bacteria from the sugar that dissolves enamel.",
            guideRef: "Teeth and Dental Health",
            difficulty: "core",
            hints: [
              "What do the bacteria in plaque feed on?",
              "What do they produce as a result?",
              "What does that product do to enamel?",
            ],
          },
          {
            id: "bio-human-nutrition-bq2-07",
            question: "Describe three ways a person can reduce their risk of tooth decay, explaining how each works. [3 marks]",
            marks: 3,
            modelAnswer:
              "1. Brush with fluoride toothpaste — fluoride makes the enamel more resistant to acid attack (forming fluorapatite), and brushing removes plaque and food. 2. Reduce the frequency of sugary food and drink — fewer sugar exposures means fewer acid attacks and more time for enamel to recover. 3. Visit the dentist regularly — early cavities can be found and filled before decay reaches the dentine and pulp.",
            markScheme: [
              "Brush with fluoride toothpaste — strengthens enamel / removes plaque",
              "Reduce frequency of sugar — fewer acid attacks",
              "Regular dental check-ups / flossing — remove plaque / treat decay early",
            ],
            commonError:
              "Just listing actions ('brush teeth') without explaining how each reduces decay.",
            guideRef: "Teeth and Dental Health",
            difficulty: "core",
            hints: [
              "Think: strengthen enamel, remove bacteria, cut their food supply.",
              "Why is fluoride helpful?",
              "Why does the FREQUENCY of sugar matter, not just the amount?",
            ],
          },
          {
            id: "bio-human-nutrition-bq2-08",
            question: "Distinguish between mechanical digestion and chemical digestion, giving one example of each. [4 marks]",
            marks: 4,
            modelAnswer:
              "Mechanical (physical) digestion is the breaking of food into smaller pieces without changing the chemical nature of the molecules — for example, the teeth chewing food, or the churning of the stomach. Chemical digestion is the breakdown of large molecules into smaller, different molecules by enzymes (hydrolysis) — for example, amylase breaking starch into maltose. Mechanical digestion increases the surface area for enzymes; chemical digestion produces the small, soluble molecules that can be absorbed.",
            markScheme: [
              "Mechanical = physical breakdown, no change to molecules",
              "Mechanical example: chewing by teeth / churning in stomach",
              "Chemical = enzymes break large molecules into smaller (different) ones",
              "Chemical example: e.g. amylase → starch to maltose / pepsin → protein to peptides",
            ],
            commonError:
              "Calling stomach churning 'chemical' — churning is mechanical; only enzyme/acid action is chemical.",
            guideRef: "The Alimentary Canal",
            difficulty: "core",
            hints: [
              "Does the process change the molecules, or just break them into bits?",
              "Teeth and churning are physical; enzymes are chemical.",
              "Give a clear example of each type.",
            ],
          },
          {
            id: "bio-human-nutrition-bq2-09",
            question: "State the difference between egestion and excretion, and classify each of these as egested or excreted: (i) faeces, (ii) urea, (iii) carbon dioxide. [4 marks]",
            marks: 4,
            modelAnswer:
              "Egestion is the removal of undigested food material that was never absorbed into the body's cells. Excretion is the removal of waste products made by the body's own metabolic reactions. (i) Faeces — egested (mostly undigested food). (ii) Urea — excreted (a metabolic waste from breaking down excess amino acids). (iii) Carbon dioxide — excreted (a waste product of respiration).",
            markScheme: [
              "Egestion = removal of undigested food (not made by the body)",
              "Excretion = removal of metabolic waste made by the body",
              "Faeces = egested",
              "Urea AND carbon dioxide = excreted (both)",
            ],
            commonError:
              "Classifying faeces as excretion — faeces are egested because they are undigested food, not a product of metabolism.",
            guideRef: "The Alimentary Canal",
            difficulty: "challenge",
            hints: [
              "Ask whether the substance was made by the body's chemistry.",
              "Faeces are leftover food that never entered cells.",
              "Urea and carbon dioxide are produced by reactions inside cells.",
              "Match each to egestion or excretion accordingly.",
            ],
            strategy: "Test each substance: 'Made by metabolism?' → excretion; 'Leftover food?' → egestion.",
          },
          {
            id: "bio-human-nutrition-bq2-10",
            question: "A baby with severe diarrhoea loses a lot of water in watery faeces and becomes dehydrated. Using your knowledge of the gut, explain why diarrhoea leads to water loss and why dehydration is dangerous. [5 marks]",
            marks: 5,
            modelAnswer:
              "Normally, as food residues pass through the large intestine (colon), most of the remaining water is reabsorbed into the blood, leaving semi-solid faeces. In diarrhoea the gut contents move through too quickly (increased peristalsis) and/or the colon fails to absorb enough water, so the water is not reabsorbed and is lost in watery faeces. This causes the body to lose large amounts of water (and mineral salts). Water is essential as the solvent for reactions, for transporting substances in the blood, and for regulating temperature; losing too much (dehydration) reduces blood volume and disrupts cell function. In a small baby this can quickly become life-threatening, which is why rehydration (replacing water and salts) is vital.",
            markScheme: [
              "Normally the colon / large intestine reabsorbs water from gut contents",
              "In diarrhoea contents move too fast / water not reabsorbed",
              "Therefore water (and salts) lost in watery faeces",
              "Water is needed as solvent / for transport / temperature regulation",
              "Dehydration reduces blood volume / disrupts cell function / dangerous, especially in a baby",
            ],
            commonError:
              "Saying water is absorbed in the stomach — most reabsorption of remaining water happens in the colon. Also forgetting that salts are lost too.",
            guideRef: "The Alimentary Canal",
            difficulty: "challenge",
            hints: [
              "Which part of the gut normally reabsorbs most of the water?",
              "What happens if the contents move through too fast?",
              "List why water is essential in the body.",
              "Why is a baby especially at risk from losing fluid?",
            ],
            strategy: "Start with the normal function (colon absorbs water), then explain how diarrhoea disrupts it, then why the loss matters.",
          },
        ],
      },
      {
        id: "bio-human-nutrition-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Ten structured questions on enzymes, the stomach, bile and chemical digestion.",
        questions: [
          {
            id: "bio-human-nutrition-bq3-01",
            question: "Copy and complete the sentence: Amylase digests _____ into _____; it is produced in the salivary glands and the _____, and acts in the mouth and the _____. [4 marks]",
            marks: 4,
            modelAnswer:
              "Amylase digests starch into maltose; it is produced in the salivary glands and the pancreas, and acts in the mouth and the small intestine (duodenum).",
            markScheme: [
              "Substrate: starch",
              "Product: maltose",
              "Also produced in the pancreas",
              "Acts in the small intestine / duodenum",
            ],
            commonError:
              "Writing 'glucose' as the immediate product of amylase — amylase produces maltose; maltase then makes glucose.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bq3-02",
            question: "For each enzyme, state its substrate and the products formed: (a) protease/pepsin, (b) lipase. [4 marks]",
            marks: 4,
            modelAnswer:
              "(a) Protease (e.g. pepsin): substrate = protein; products = peptides and then amino acids. (b) Lipase: substrate = fat (lipid); products = fatty acids and glycerol.",
            markScheme: [
              "Protease substrate: protein",
              "Protease products: amino acids / peptides",
              "Lipase substrate: fat / lipid",
              "Lipase products: fatty acids and glycerol (both)",
            ],
            commonError:
              "Giving only 'fatty acids' for lipase — glycerol is also produced and is needed for the second mark.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bq3-03",
            question: "Explain why the stomach produces hydrochloric acid, giving two reasons. [4 marks]",
            marks: 4,
            modelAnswer:
              "First, the hydrochloric acid produces a low pH (about pH 2), which is the optimum pH for the enzyme pepsin, so pepsin can digest proteins efficiently. Second, the strongly acidic conditions kill many bacteria and other pathogens that are taken in with food, helping to prevent infection. (The acid also helps to denature/unfold proteins, making them easier for pepsin to break down.)",
            markScheme: [
              "Provides low / acidic pH (about pH 2)",
              "This is the optimum pH for pepsin / lets pepsin work",
              "Kills bacteria / pathogens in food",
              "(Extra) denatures proteins, aiding digestion",
            ],
            commonError:
              "Saying the acid digests the food directly — it is the enzymes that digest; the acid provides the right conditions and kills bacteria.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "core",
            hints: [
              "Which enzyme in the stomach needs a low pH?",
              "Food carries microbes — what could a strong acid do to them?",
              "Give two clearly separate reasons.",
            ],
          },
          {
            id: "bio-human-nutrition-bq3-04",
            question: "Bile is not an enzyme but it is essential for efficient fat digestion. Describe the two functions of bile and explain how each helps digestion. [4 marks]",
            marks: 4,
            modelAnswer:
              "First, bile emulsifies fats: bile salts break large fat globules into many tiny droplets. This greatly increases the surface area of fat exposed to lipase, so lipase digests the fat much faster. Second, bile is alkaline (it contains sodium hydrogencarbonate) and neutralises the acidic chyme arriving from the stomach, raising the pH to the slightly alkaline level at which pancreatic enzymes (including lipase) work best.",
            markScheme: [
              "Emulsifies fat / breaks large fat globules into small droplets",
              "This increases surface area for lipase / speeds fat digestion",
              "Neutralises acidic chyme / bile is alkaline",
              "Provides the optimum (alkaline) pH for pancreatic enzymes",
            ],
            commonError:
              "Stating that bile chemically digests fat — bile is not an enzyme; it only emulsifies (physical change) and neutralises acid.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "core",
            hints: [
              "Bile has one role about fat droplets and one about pH.",
              "Emulsification is a physical change — what does it do to surface area?",
              "Why does the acid from the stomach need neutralising?",
            ],
          },
          {
            id: "bio-human-nutrition-bq3-05",
            question: "Explain why digestion is described as a series of hydrolysis reactions, using starch as an example. [3 marks]",
            marks: 3,
            modelAnswer:
              "Digestion breaks large, insoluble molecules into smaller, soluble ones. In hydrolysis, water is added to break a chemical bond. For starch, amylase catalyses the addition of water to break the bonds between glucose units, producing maltose; maltase then adds water to split maltose into glucose. Because water is used to split the molecules, these are hydrolysis reactions.",
            markScheme: [
              "Hydrolysis = water added to break a bond / split a molecule",
              "Large insoluble molecule broken into smaller soluble ones",
              "Starch example: water splits starch → maltose (→ glucose)",
            ],
            commonError:
              "Confusing hydrolysis with condensation (which joins molecules and releases water). Digestion is hydrolysis (water is used up).",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "core",
            hints: [
              "What does the 'hydro' in hydrolysis refer to?",
              "Is water added or removed when bonds are broken?",
              "Use starch → maltose → glucose to illustrate.",
            ],
          },
          {
            id: "bio-human-nutrition-bq3-06",
            question: "Salivary amylase begins digesting starch in the mouth but stops working in the stomach. Explain why, referring to pH and enzymes. [4 marks]",
            marks: 4,
            modelAnswer:
              "Salivary amylase works in the mouth, where the pH is about neutral (near its optimum). When the food reaches the stomach, the hydrochloric acid makes the pH very low (about pH 2). This pH is far below amylase's optimum, so the very acidic conditions denature the amylase — its active site changes shape and it can no longer bind to starch. Therefore starch digestion stops in the stomach (and only resumes when pancreatic amylase acts in the slightly alkaline small intestine).",
            markScheme: [
              "Mouth pH is about neutral / suits amylase",
              "Stomach is strongly acidic (HCl / pH 2)",
              "Low pH denatures amylase / changes active site shape",
              "Amylase can no longer bind starch / starch digestion stops",
            ],
            commonError:
              "Saying the amylase is 'killed' — enzymes are not alive; the correct term is denatured (active site changes shape).",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "core",
            hints: [
              "What is the pH of the mouth compared with the stomach?",
              "What does a pH far from the optimum do to an enzyme?",
              "Use the correct term: denatured, and explain the active site.",
            ],
          },
          {
            id: "bio-human-nutrition-bq3-07",
            question: "A student investigates how pH affects the activity of pepsin. They mix pepsin with a cloudy protein suspension at pH 2, pH 7 and pH 9, at 37 °C, and time how long each takes to go clear. Predict the result and explain it, and state two variables that must be controlled. [5 marks]",
            marks: 5,
            modelAnswer:
              "Prediction: the suspension will clear fastest at pH 2 and slowest (or not at all) at pH 7 and pH 9. Explanation: pepsin is a stomach enzyme with an optimum pH of about 2, so it digests the protein fastest at pH 2; at higher pH values, which are far from its optimum, pepsin works slowly or is denatured, so little protein is digested and the suspension stays cloudy. Variables to control: temperature (kept at 37 °C), volume and concentration of pepsin, volume and concentration of protein suspension, and the time/method of measuring clearing. (Any two of these.)",
            markScheme: [
              "Prediction: fastest clearing at pH 2",
              "pH 2 is the optimum pH for pepsin",
              "At pH 7 / 9 pepsin works slowly or is denatured → stays cloudy",
              "Control variable 1: temperature (37 °C)",
              "Control variable 2: concentration/volume of pepsin OR of protein (any valid second)",
            ],
            commonError:
              "Predicting fastest digestion at pH 7 (the 'neutral' assumption) — pepsin is unusual in preferring a very low pH.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "challenge",
            hints: [
              "Recall pepsin's optimum pH — it is NOT neutral.",
              "At which pH will the cloudy protein clear fastest?",
              "Explain in terms of optimum pH and denaturing.",
              "A fair test must keep temperature and concentrations the same.",
            ],
            strategy: "State prediction, justify with optimum pH, then list controlled variables for a fair test.",
          },
          {
            id: "bio-human-nutrition-bq3-08",
            question: "An experiment finds that adding bile salts to a mixture of fat, lipase and pH indicator makes the indicator change colour faster than without bile. Explain this result fully. [4 marks]",
            marks: 4,
            modelAnswer:
              "Lipase digests fat into fatty acids and glycerol. The fatty acids are acidic, so as they are produced the pH falls and the indicator changes colour. Bile salts emulsify the fat, breaking it into smaller droplets and so increasing the surface area available for lipase to act on. With more surface area, lipase digests the fat faster, producing fatty acids more quickly, so the pH falls and the indicator changes colour sooner than in the tube without bile.",
            markScheme: [
              "Lipase digests fat into fatty acids (and glycerol)",
              "Fatty acids are acidic → lower pH → indicator changes colour",
              "Bile emulsifies fat / increases surface area",
              "Greater surface area → faster lipase action → faster colour change",
            ],
            commonError:
              "Saying bile digests the fat or that bile changes the pH directly here — the faster colour change is due to faster lipase action because of the increased surface area.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "challenge",
            hints: [
              "What products does lipase make, and are they acidic?",
              "Why does the indicator change colour at all?",
              "What does bile do to the fat physically?",
              "Link increased surface area to a faster rate of digestion.",
            ],
            strategy: "Trace: lipase → acidic products → pH change; then explain why bile speeds this up (surface area).",
          },
          {
            id: "bio-human-nutrition-bq3-09",
            question: "Construct a table for the three main digestive enzymes amylase, protease and lipase, giving for each: the substrate, the product(s), and one site where it acts. [6 marks]",
            marks: 6,
            modelAnswer:
              "Amylase — substrate: starch — products: maltose — site: mouth (or small intestine/duodenum).\nProtease (e.g. pepsin) — substrate: protein — products: amino acids (peptides) — site: stomach (pepsin) or small intestine (pancreatic protease).\nLipase — substrate: fat (lipid) — products: fatty acids and glycerol — site: small intestine (duodenum).",
            markScheme: [
              "Amylase substrate: starch; product: maltose",
              "Amylase site: mouth / small intestine",
              "Protease substrate: protein; product: amino acids / peptides",
              "Protease site: stomach / small intestine",
              "Lipase substrate: fat / lipid; products: fatty acids and glycerol",
              "Lipase site: small intestine / duodenum",
            ],
            commonError:
              "Giving glucose as the product of amylase (it is maltose), or omitting glycerol from the lipase products.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "core",
            hints: [
              "Each enzyme has its own substrate ending in '-ase' clue.",
              "Amylase → maltose, not glucose directly.",
              "Lipase gives TWO products — name both.",
            ],
          },
          {
            id: "bio-human-nutrition-bq3-10",
            question: "Explain why having different enzymes that work at different pH values along the gut is an advantage, rather than having one enzyme for everything. [5 marks]",
            marks: 5,
            modelAnswer:
              "Different food molecules (starch, protein, fat) have different structures, so a different enzyme is needed for each because enzymes are specific — each active site fits only one type of substrate. The conditions also differ along the gut: the stomach is strongly acidic (for pepsin and to kill bacteria), while the small intestine is slightly alkaline. Having enzymes with pH optima matched to where they act (pepsin at pH 2 in the stomach, amylase and lipase at pH 7–8 in the small intestine) means each enzyme works efficiently in its own region. This division of labour allows the right substrate to be digested in the right place under the right conditions, making overall digestion fast and complete. One 'universal' enzyme could not be specific to all substrates nor have one optimum pH suiting every region.",
            markScheme: [
              "Enzymes are specific — one active site fits one substrate",
              "Different foods (starch/protein/fat) need different enzymes",
              "Conditions differ along the gut (acidic stomach vs alkaline intestine)",
              "Each enzyme's optimum pH matches where it acts (pepsin pH 2, amylase/lipase pH 7–8)",
              "So digestion is efficient / each substrate digested in the right place",
            ],
            commonError:
              "Only mentioning specificity and forgetting the pH argument, or vice versa — a full answer needs both ideas.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "challenge",
            hints: [
              "Recall what 'enzymes are specific' means.",
              "Do all foods have the same kind of bonds?",
              "How do conditions differ between the stomach and small intestine?",
              "Link each enzyme's optimum pH to its location.",
            ],
            strategy: "Combine two ideas: enzyme specificity (different substrates) AND matching pH optima to gut regions.",
          },
        ],
      },
      {
        id: "bio-human-nutrition-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Ten structured questions on absorption, villi, the liver and assimilation.",
        questions: [
          {
            id: "bio-human-nutrition-bq4-01",
            question: "Define absorption and assimilation, making clear the difference between them. [2 marks]",
            marks: 2,
            modelAnswer:
              "Absorption is the passage of small, soluble digested nutrients from the gut (lumen) into the blood or lymph. Assimilation is the uptake and use of those absorbed nutrients by the body's cells — for example, glucose used in respiration or amino acids built into proteins.",
            markScheme: [
              "Absorption: nutrients move from gut into blood / lymph",
              "Assimilation: cells take up and use the absorbed nutrients",
            ],
            commonError:
              "Using the two words interchangeably — absorption is entering the blood; assimilation is cells using the nutrients.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bq4-02",
            question: "State which structures absorb (a) glucose and amino acids, and (b) fatty acids and glycerol, inside a villus. [2 marks]",
            marks: 2,
            modelAnswer:
              "(a) Glucose and amino acids are absorbed into the blood capillaries of the villus. (b) Fatty acids and glycerol are absorbed into the central lacteal (a lymph vessel).",
            markScheme: [
              "Glucose and amino acids → blood capillaries",
              "Fatty acids and glycerol → lacteal / lymph vessel",
            ],
            commonError:
              "Saying everything enters the blood — fat products enter the lacteal, not the capillaries.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bq4-03",
            question: "Describe three ways in which a villus is adapted for the efficient absorption of digested food. [3 marks]",
            marks: 3,
            modelAnswer:
              "1. The villus is one of many finger-like projections, and each epithelial cell has microvilli, giving a very large surface area for absorption. 2. The wall is a single layer of epithelial cells, giving a short diffusion distance for nutrients to cross. 3. There is a rich network of blood capillaries that carries absorbed glucose and amino acids away, maintaining a steep concentration gradient. (A central lacteal for fat absorption is also acceptable.)",
            markScheme: [
              "Large surface area (villi / microvilli)",
              "Single layer of epithelial cells / thin wall — short diffusion distance",
              "Rich blood capillary supply maintains concentration gradient (or lacteal for fats)",
            ],
            commonError:
              "Listing 'long' rather than the actual adaptations — give specific features (surface area, thin wall, blood supply).",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "core",
            hints: [
              "Think of three different factors: area, distance, gradient.",
              "How thick is the villus wall?",
              "What keeps the concentration gradient steep?",
            ],
          },
          {
            id: "bio-human-nutrition-bq4-04",
            question: "Explain why glucose is absorbed by active transport rather than only by diffusion, and what this requires. [4 marks]",
            marks: 4,
            modelAnswer:
              "By the end of absorbing a meal, the concentration of glucose in the gut can become lower than in the blood and epithelial cells. Diffusion would only move glucose down its concentration gradient and would stop (or reverse) once levels equalised, so some glucose would be left unabsorbed. Active transport can move glucose against its concentration gradient, from low to high concentration, ensuring that as much glucose as possible is absorbed. This requires energy in the form of ATP, which comes from respiration in the epithelial cells (which contain many mitochondria), and carrier proteins in the cell membrane.",
            markScheme: [
              "Glucose may need to move against the concentration gradient",
              "Diffusion only works down a gradient / would leave glucose unabsorbed",
              "Active transport moves glucose from low to high concentration",
              "Requires energy / ATP from respiration (and carrier proteins)",
            ],
            commonError:
              "Saying active transport does not need energy, or confusing it with osmosis. Active transport uses ATP and carrier proteins.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "core",
            hints: [
              "What is the limitation of diffusion once concentrations equalise?",
              "How does active transport differ in the direction it can move substances?",
              "What does active transport require that diffusion does not?",
            ],
          },
          {
            id: "bio-human-nutrition-bq4-05",
            question: "Trace the route taken by a glucose molecule from the lumen of the small intestine to a muscle cell where it is respired. [4 marks]",
            marks: 4,
            modelAnswer:
              "Glucose is absorbed by active transport across the epithelial cells of a villus into the blood capillaries inside the villus. The blood carries it in the hepatic portal vein to the liver, then on through the heart and around the body in the blood. At a muscle, glucose passes out of the blood capillaries and into the muscle cells, where it is used in respiration to release energy. (Glucose entering and being used by the cell is assimilation.)",
            markScheme: [
              "Glucose absorbed into blood capillary of villus (by active transport)",
              "Carried in the hepatic portal vein to the liver",
              "Transported in the blood (via heart) around the body to the muscle",
              "Diffuses into muscle cell and is used in respiration (assimilation)",
            ],
            commonError:
              "Routing glucose through the lacteal — glucose travels in the blood, not the lymph.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "core",
            hints: [
              "Does glucose enter the blood or the lacteal?",
              "Which vein carries it to the liver first?",
              "How does it finally reach a muscle cell?",
            ],
          },
          {
            id: "bio-human-nutrition-bq4-06",
            question: "Describe two functions of the liver in human nutrition (assimilation). [4 marks]",
            marks: 4,
            modelAnswer:
              "1. Regulation of blood glucose: the liver removes excess glucose from the blood arriving in the hepatic portal vein and stores it as glycogen; it later breaks glycogen back down to glucose when blood glucose is low, keeping the level steady. 2. Processing of amino acids: the liver removes excess amino acids that cannot be stored and breaks them down (deamination), forming urea (which is excreted by the kidneys) and a carbohydrate part that can be used for energy.",
            markScheme: [
              "Regulates blood glucose / stores excess glucose as glycogen",
              "Releases glucose from glycogen when blood glucose is low",
              "Deals with excess amino acids / deamination",
              "Forms urea (excreted by kidney) from broken-down amino acids",
            ],
            commonError:
              "Saying the liver stores glucose 'as starch' — the animal store is glycogen, not starch.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "core",
            hints: [
              "One function involves controlling sugar levels.",
              "What does the liver store excess glucose as?",
              "The other function deals with surplus amino acids — what is formed?",
            ],
          },
          {
            id: "bio-human-nutrition-bq4-07",
            question: "Explain why the hepatic portal vein is unusual compared with most veins, and why it is important. [3 marks]",
            marks: 3,
            modelAnswer:
              "Most veins carry blood from a capillary bed back towards the heart. The hepatic portal vein is unusual because it runs between two capillary beds: it collects nutrient-rich blood from the capillaries of the small intestine and delivers it to the capillaries of the liver, rather than going straight to the heart. This is important because it lets the liver process and regulate the absorbed nutrients (e.g. storing excess glucose, dealing with amino acids and removing toxins) before they reach the rest of the body.",
            markScheme: [
              "Unusual: links two capillary beds (gut and liver) / does not go straight to the heart",
              "Carries nutrient-rich blood from intestine to liver",
              "Allows liver to process / regulate nutrients before they reach the body",
            ],
            commonError:
              "Describing it as carrying blood from the liver — it carries blood TO the liver from the gut.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "challenge",
            hints: [
              "Where does a normal vein take blood?",
              "This vein connects the gut to which organ?",
              "Why is it useful for the liver to receive this blood first?",
            ],
            strategy: "Contrast it with a normal vein (one capillary bed → heart) versus this one (gut → liver).",
          },
          {
            id: "bio-human-nutrition-bq4-08",
            question: "A person has part of their ileum removed by surgery. Explain why they may need to eat more food than before to stay healthy. [4 marks]",
            marks: 4,
            modelAnswer:
              "The ileum is the main region where digested food is absorbed, because its villi and microvilli provide a huge surface area. Removing part of the ileum reduces the total surface area available for absorption, so a smaller proportion of the digested nutrients is absorbed into the blood and lymph. More of the food therefore passes out undigested/unabsorbed in the faeces. To take in the same amount of nutrients and energy as before, the person must eat more food to compensate for the reduced absorption.",
            markScheme: [
              "Ileum / small intestine is the main site of absorption (large surface area)",
              "Removing part reduces surface area for absorption",
              "Less of the digested food is absorbed / more lost in faeces",
              "Must eat more to absorb enough nutrients / energy",
            ],
            commonError:
              "Saying digestion stops — digestion still occurs; it is absorption that is reduced because of the smaller surface area.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "challenge",
            hints: [
              "What is the main job of the ileum?",
              "What happens to absorption if surface area is reduced?",
              "Where do the unabsorbed nutrients go?",
              "Why would eating more help?",
            ],
            strategy: "Link reduced surface area → reduced absorption → need to eat more to compensate.",
          },
          {
            id: "bio-human-nutrition-bq4-09",
            question: "The small intestine is about 6 m long with a folded surface giving roughly 200 m² of absorptive area. (a) Explain how this large area aids absorption. (b) If a smooth tube of the same length had only about 0.5 m² of surface, how many times greater is the villi-folded surface? Show your working. [4 marks]",
            marks: 4,
            modelAnswer:
              "(a) A large surface area means many more molecules can be absorbed at the same time, so the rate of absorption of digested nutrients is much higher than across a smooth tube; this lets a whole meal be absorbed quickly. (b) Number of times greater = 200 ÷ 0.5 = 400. So the folded surface is about 400 times greater than a smooth tube of the same length.",
            markScheme: [
              "Large surface area increases the rate/amount of absorption",
              "More molecules absorbed at once / meal absorbed quickly",
              "Working: 200 ÷ 0.5",
              "Answer: 400 (times greater)",
            ],
            commonError:
              "Dividing the wrong way round (0.5 ÷ 200) or forgetting that dividing by 0.5 is the same as multiplying by 2.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "core",
            hints: [
              "Why is more surface area useful for absorption?",
              "To find 'how many times greater', divide the large area by the small one.",
              "Dividing by 0.5 is the same as multiplying by 2.",
            ],
            solutions: [
              {
                label: "Ratio of surface areas",
                steps: [
                  "Folded (villi) area = 200 m²; smooth tube area = 0.5 m².",
                  "Times greater = folded ÷ smooth = 200 ÷ 0.5.",
                  "Dividing by 0.5 is the same as multiplying by 2: 200 × 2 = 400.",
                  "So the folded surface is 400 times greater than the smooth tube.",
                ],
              },
            ],
          },
          {
            id: "bio-human-nutrition-bq4-10",
            question: "Using the idea of surface area, concentration gradient and diffusion distance, explain fully why the structure of a villus allows very rapid absorption of glucose. [5 marks]",
            marks: 5,
            modelAnswer:
              "The rate of absorption depends on the surface area available, the steepness of the concentration gradient and the distance molecules must travel. A villus increases all three favourably. First, the finger-like villi and their microvilli give a very large surface area, so many glucose molecules can cross at once. Second, the wall is only one epithelial cell thick, giving a very short diffusion distance, so glucose crosses quickly. Third, a dense network of blood capillaries continuously carries absorbed glucose away (and active transport pumps glucose in), keeping the concentration of glucose inside low compared with the gut, so a steep concentration gradient is maintained. Together — large area, short distance and a maintained steep gradient — these features make absorption of glucose very rapid.",
            markScheme: [
              "Large surface area (villi + microvilli) → more glucose absorbed at once",
              "Single epithelial cell layer → short diffusion distance → faster crossing",
              "Rich blood capillaries carry glucose away → maintains steep concentration gradient",
              "Active transport also moves glucose in / keeps internal concentration low",
              "Conclusion: all three factors combine to give rapid absorption",
            ],
            commonError:
              "Listing the features without linking each to the correct factor (surface area, distance or gradient). Marks come from the explanation, not just naming the parts.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "challenge",
            hints: [
              "Name the three factors that affect rate of absorption.",
              "Match each villus feature to one factor.",
              "How do capillaries keep the gradient steep?",
              "End by combining all three into one conclusion.",
            ],
            strategy: "Address each of the three factors in turn (area, distance, gradient), tying a villus feature to each.",
          },
        ],
      },
    ],
  },
};
