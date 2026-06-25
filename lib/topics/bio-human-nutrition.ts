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
        id: "bio-human-nutrition-bank-mcq-1",
        title: "MCQ Paper 1 — Diet, Teeth and the Gut",
        description: "6 questions covering balanced diet, nutrient roles, tooth structure and the alimentary canal.",
        questions: [
          {
            id: "bio-human-nutrition-bank-mcq1-q01",
            question: "Which of the following is a deficiency disease caused by an inadequate intake of iron?",
            options: ["Scurvy", "Rickets", "Anaemia", "Kwashiorkor"],
            answerIndex: 2,
            explanation: "Iron is needed to make haemoglobin, the oxygen-carrying protein in red blood cells. Iron deficiency → insufficient haemoglobin → anaemia (reduced oxygen transport). Scurvy = vitamin C deficiency; rickets = vitamin D deficiency; kwashiorkor = protein deficiency.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bank-mcq1-q02",
            question: "Which part of the tooth contains the nerves and blood vessels?",
            options: ["Enamel", "Dentine", "Pulp cavity", "Cement"],
            answerIndex: 2,
            explanation: "The pulp cavity is the central cavity of the tooth containing nerves (providing sensation) and blood vessels (supplying oxygen and nutrients to tooth tissue). Enamel is the hard outer layer; dentine forms the bulk; cement anchors the root.",
            guideRef: "Teeth and Dental Health",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bank-mcq1-q03",
            question: "A person has a diet rich in calories but lacking in protein. Which condition might they develop?",
            options: ["Marasmus", "Scurvy", "Kwashiorkor", "Rickets"],
            answerIndex: 2,
            explanation: "Kwashiorkor results specifically from protein deficiency (even when total calorie intake is sufficient). Marasmus results from total food (energy) deficiency. Scurvy is vitamin C deficiency; rickets is vitamin D deficiency.",
            guideRef: "Energy Requirements",
            difficulty: "core",
            hints: [
              "The question says 'rich in calories but lacking in protein' — so this is NOT a total energy deficiency.",
              "Which deficiency disease is specifically linked to inadequate protein intake?",
            ],
          },
          {
            id: "bio-human-nutrition-bank-mcq1-q04",
            question: "Dental caries (tooth decay) is caused by:",
            options: [
              "Fluoride in water dissolving enamel",
              "Bacteria producing lactic acid that dissolves enamel",
              "Calcium deficiency weakening dentine",
              "Viruses infecting the pulp cavity",
            ],
            answerIndex: 1,
            explanation: "Bacteria (especially Streptococcus mutans) in dental plaque ferment sugars anaerobically, producing lactic acid. This acid dissolves the calcium phosphate in enamel — a process called demineralisation — creating cavities. Fluoride actually strengthens enamel; calcium deficiency is not the primary mechanism; viruses do not cause dental caries.",
            guideRef: "Teeth and Dental Health",
            difficulty: "core",
            hints: [
              "Think about what bacteria in the mouth do with the sugars you eat.",
              "What product of bacterial fermentation is acidic?",
              "What effect does acid have on calcium phosphate in enamel?",
            ],
          },
          {
            id: "bio-human-nutrition-bank-mcq1-q05",
            question: "Which organ produces bile, and where is bile stored before release?",
            options: [
              "Produced by pancreas; stored in stomach",
              "Produced by liver; stored in gall bladder",
              "Produced by gall bladder; stored in liver",
              "Produced by liver; stored in duodenum",
            ],
            answerIndex: 1,
            explanation: "Bile is produced continuously by the liver and stored in the gall bladder until a fatty meal stimulates its release into the duodenum via the bile duct. The pancreas produces pancreatic juice (enzymes); the stomach does not store bile.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "warmup",
          },
          {
            id: "bio-human-nutrition-bank-mcq1-q06",
            question: "Which row correctly matches the enzyme to its substrate and the site where it acts?",
            options: [
              "Amylase — protein — stomach",
              "Pepsin — starch — small intestine",
              "Lipase — fat — small intestine",
              "Amylase — fat — mouth",
            ],
            answerIndex: 2,
            explanation: "Lipase is produced by the pancreas and acts in the small intestine (duodenum/ileum), catalysing the hydrolysis of fats into fatty acids and glycerol. Amylase acts on starch (not protein) in the mouth and duodenum; pepsin acts on proteins in the stomach (not small intestine).",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "core",
            hints: [
              "Eliminate options with obviously wrong substrates first: pepsin digests protein, not starch.",
              "Where does amylase work — mouth or stomach?",
              "Which enzyme acts specifically on fat?",
            ],
            strategy: "Use process of elimination: match enzyme to substrate first, then check the site.",
          },
        ],
      },
      {
        id: "bio-human-nutrition-bank-mcq-2",
        title: "MCQ Paper 2 — Enzymes, Absorption and Applied Nutrition",
        description: "6 questions covering digestive enzymes, villi adaptations, and applied/challenge scenarios.",
        questions: [
          {
            id: "bio-human-nutrition-bank-mcq2-q01",
            question: "The pH in the duodenum is approximately 7–8. Which action of bile makes this possible?",
            options: [
              "Bile contains lipase that digests fats, reducing acidity.",
              "Bile salts absorb hydrogen ions from the chyme.",
              "Bile contains sodium hydrogencarbonate, neutralising the acidic chyme from the stomach.",
              "Bile contains pepsin, which buffers the pH.",
            ],
            answerIndex: 2,
            explanation: "Bile contains sodium hydrogencarbonate (an alkali), which reacts with the acidic chyme (pH ≈ 2) arriving from the stomach, raising the pH to approximately 7–8. This neutralisation is essential for pancreatic enzymes (amylase, lipase, trypsin), which all have alkaline pH optima. Bile does not contain lipase or pepsin.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "core",
            hints: [
              "Chyme from the stomach is very acidic. What chemical property would neutralise it?",
              "Recall that bile is alkaline — what chemical does it contain?",
            ],
          },
          {
            id: "bio-human-nutrition-bank-mcq2-q02",
            question: "Why does emulsification of fats by bile speed up digestion by lipase?",
            options: [
              "It increases the pH of the intestine, activating lipase.",
              "It provides more substrate molecules for lipase to act on.",
              "It increases the surface area of fat available for lipase to bind to.",
              "It converts fat into fatty acids directly.",
            ],
            answerIndex: 2,
            explanation: "Emulsification breaks large fat globules into many tiny droplets. Because lipase is a surface-acting enzyme (it acts at the fat–water interface), smaller droplets mean a much greater total surface area exposed to lipase. More surface area → more enzyme-substrate contacts per unit time → faster rate. Emulsification does not alter pH (that is a separate bile function), does not increase the number of substrate molecules (same total fat), and does not itself convert fat chemically.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "core",
            hints: [
              "Think about what emulsification physically does to the fat globules.",
              "Lipase acts at the surface of fat droplets. What does increasing the number of smaller droplets do to the total surface area?",
            ],
          },
          {
            id: "bio-human-nutrition-bank-mcq2-q03",
            question: "Which blood vessel carries absorbed amino acids from the small intestine directly to the liver?",
            options: [
              "Hepatic artery",
              "Hepatic portal vein",
              "Hepatic vein",
              "Mesenteric artery",
            ],
            answerIndex: 1,
            explanation: "The hepatic portal vein carries nutrient-rich blood from the small intestine (and other digestive organs) directly to the liver for processing. The hepatic artery supplies oxygenated blood to the liver from the aorta; the hepatic vein drains blood from the liver to the vena cava; the mesenteric artery supplies blood to the gut wall.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "core",
            hints: [
              "Portal veins link two capillary beds. Which portal vein connects the gut to the liver?",
              "Distinguish: hepatic artery (takes blood TO liver from heart), hepatic portal vein (takes blood from gut TO liver).",
            ],
          },
          {
            id: "bio-human-nutrition-bank-mcq2-q04",
            question: "A student uses an iodine solution test on the contents of the stomach 30 minutes after eating bread. The solution turns blue-black. What does this indicate?",
            options: [
              "Amylase in the stomach has completely digested all the starch.",
              "Starch is still present because the stomach does not produce amylase.",
              "Pepsin has converted starch into glucose.",
              "The stomach acid has destroyed all the amylase, so no digestion occurred.",
            ],
            answerIndex: 1,
            explanation: "Iodine solution turns blue-black in the presence of starch. The stomach does not produce amylase — salivary amylase (which began starch digestion in the mouth) is denatured by the stomach's highly acidic pH (≈2). Therefore starch digestion does not continue in the stomach, and starch remains present. Pepsin is a protease — it acts on protein, not starch.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "challenge",
            hints: [
              "What does a blue-black iodine result tell you?",
              "Which enzyme digests starch? Where does it act — mouth, stomach, or small intestine?",
              "What happens to salivary amylase when it reaches the highly acidic stomach?",
              "Does the stomach produce its own amylase?",
            ],
            strategy: "Apply your knowledge of enzyme pH optima and location to interpret experimental data.",
          },
          {
            id: "bio-human-nutrition-bank-mcq2-q05",
            question: "A patient has their gall bladder surgically removed. Which of the following consequences is most likely?",
            options: [
              "They will be unable to digest proteins.",
              "Their pancreas will stop producing enzymes.",
              "Fat digestion will be less efficient, especially after a fatty meal.",
              "They will develop scurvy.",
            ],
            answerIndex: 2,
            explanation: "The gall bladder stores bile between meals and releases a concentrated bolus after a fatty meal. Without a gall bladder, bile still drips directly from the liver into the duodenum but cannot be concentrated or released in a large pulse. This means fat emulsification is less efficient after a fatty meal, slowing lipase activity. Protein digestion is unaffected (pepsin and trypsin remain). The pancreas continues producing enzymes. Scurvy is a vitamin C deficiency — unrelated.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "challenge",
            hints: [
              "What is the function of the gall bladder (NOT the liver)?",
              "If bile still drips from the liver, is it absent entirely? What is lost?",
              "Which process of digestion depends on bile for efficiency?",
            ],
            strategy: "Distinguish the liver's role (producing bile) from the gall bladder's role (concentrating and storing bile).",
          },
          {
            id: "bio-human-nutrition-bank-mcq2-q06",
            question: "Which sequence correctly describes the fate of dietary fat from ingestion to assimilation?",
            options: [
              "Fat → emulsified by bile → lipase → glucose + amino acids → absorbed into capillaries → liver",
              "Fat → amylase → maltose → absorbed into lacteal → lymph → blood",
              "Fat → emulsified by bile → lipase → fatty acids + glycerol → absorbed into lacteal → lymph → blood → cells",
              "Fat → pepsin → amino acids → absorbed into blood capillaries → liver",
            ],
            answerIndex: 2,
            explanation: "Fat is first emulsified by bile into tiny droplets, then hydrolysed by lipase into fatty acids and glycerol. These are absorbed into epithelial cells of the villi, reassembled into triglycerides (chylomicrons), and enter the lacteal (lymph vessel). Lymph drains into the bloodstream at the thoracic duct. From blood, fatty acids are delivered to cells for energy or membrane synthesis (assimilation). None of the other options correctly describes this pathway.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "challenge",
            hints: [
              "What enzyme digests fat, and what are the products?",
              "Do fat digestion products enter blood capillaries or the lacteal?",
              "What is the route from the lacteal to the bloodstream?",
              "Eliminate options that mention the wrong enzyme or wrong absorption route.",
            ],
            strategy: "Trace the molecule step by step: emulsification → enzyme → products → absorption route → transport.",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-human-nutrition-bank-qa-1",
        title: "Structured Questions Paper 1 — Diet, Teeth and the Gut",
        description: "4 structured questions on balanced diet, the alimentary canal, and dental health.",
        questions: [
          {
            id: "bio-human-nutrition-bank-qa1-q01",
            question: "A teenager's diet consists mainly of white rice, cooking oil, and small amounts of fish. State ONE nutrient that is likely to be deficient in this diet, name the deficiency disease it could cause, and describe TWO symptoms of that disease. [4 marks]",
            marks: 4,
            modelAnswer:
              "The diet is likely deficient in vitamin C (ascorbic acid), since it lacks fruits and vegetables. Deficiency of vitamin C causes scurvy. Symptoms include: bleeding gums (gums become swollen, inflamed and bleed easily) and slow or poor wound healing (wounds fail to close due to inadequate collagen production). Additionally, the person may experience bruising, fatigue, and loose teeth.",
            markScheme: [
              "Named deficient nutrient: vitamin C (ascorbic acid) / accept iron (for anaemia) or vitamin D (for rickets) with appropriate disease and symptoms",
              "Correct deficiency disease matching the named nutrient",
              "First correct symptom described",
              "Second correct symptom described",
            ],
            commonError:
              "Naming a nutrient but then giving the wrong disease — e.g. saying 'iron → scurvy' instead of 'iron → anaemia'. Ensure nutrient, disease, and symptoms are consistent.",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "core",
            hints: [
              "Look at the diet — white rice and oil, small fish. Which food groups are missing?",
              "Which vitamins and minerals come mainly from fruits, vegetables, and dairy?",
              "Match your chosen nutrient to its specific deficiency disease, then recall 2 symptoms.",
            ],
          },
          {
            id: "bio-human-nutrition-bank-qa1-q02",
            question: "(a) List the alimentary canal in the correct order from mouth to anus, including the two sections of the small intestine and the two named sections of the large intestine. [4 marks]\n(b) State one function of the liver in digestion. [1 mark]",
            marks: 5,
            modelAnswer:
              "(a) Mouth → oesophagus → stomach → duodenum → ileum → colon → rectum → anus.\n(b) The liver produces bile, which emulsifies fats and neutralises acid chyme in the duodenum.",
            markScheme: [
              "Mouth → oesophagus → stomach (in this order)",
              "Duodenum before ileum (both named)",
              "Colon → rectum → anus (in this order)",
              "Full correct sequence with no missing or transposed organs",
              "Liver produces bile / bile aids fat digestion / bile neutralises stomach acid",
            ],
            commonError:
              "Placing the colon before the ileum, or forgetting to distinguish duodenum from ileum. Candidates also sometimes state the liver digests fats — the liver produces bile; it is lipase that digests fats.",
            guideRef: "The Alimentary Canal",
            difficulty: "core",
            hints: [
              "Start from the mouth and trace the path food takes. Use the mnemonic: 'Most People Survive On Durable Intestines; Carefully Retain Anatomy'.",
              "The small intestine has two named parts — which comes first?",
              "The large intestine has two main named regions before the anus.",
            ],
          },
          {
            id: "bio-human-nutrition-bank-qa1-q03",
            question: "Describe the process of dental decay (caries), and explain THREE measures that can reduce the risk of dental caries. [5 marks]",
            marks: 5,
            modelAnswer:
              "Dental decay begins when bacteria in dental plaque (especially Streptococcus mutans) feed on sugars in the mouth and produce lactic acid as a waste product of fermentation. This acid dissolves the calcium phosphate in tooth enamel (demineralisation), creating a hole (cavity). If untreated, the decay progresses through dentine and into the pulp, causing pain and infection.\n\nThree preventive measures:\n1. Brushing teeth with fluoride toothpaste — fluoride ions replace hydroxide ions in hydroxyapatite, forming fluorapatite, which is more resistant to acid attack.\n2. Reducing the frequency of sugar intake — fewer acid attacks per day means more time for remineralisation between meals.\n3. Regular dental check-ups — early cavities can be detected and filled before decay reaches the dentine or pulp.",
            markScheme: [
              "Bacteria in plaque ferment sugars / produce lactic acid",
              "Acid dissolves enamel / calcium phosphate / demineralisation → cavity",
              "Preventive measure 1 correctly described with mechanism (e.g. fluoride toothpaste strengthens enamel)",
              "Preventive measure 2 correctly described with reason (e.g. reducing sugar frequency reduces acid attacks)",
              "Preventive measure 3 correctly described (e.g. dental check-ups, flossing, water fluoridation)",
            ],
            commonError:
              "Stating 'reduce sugar intake' without specifying that it is the frequency (number of exposures per day) rather than total quantity that most affects acid attack duration. Also: confusing enamel and dentine in describing which layer is attacked first.",
            guideRef: "Teeth and Dental Health",
            difficulty: "core",
            hints: [
              "Which microorganisms cause dental decay, and what do they produce from sugars?",
              "What does acid do to the calcium phosphate in enamel?",
              "For prevention, think about removing bacteria/plaque, strengthening enamel, and reducing the substrate (sugar) available to bacteria.",
            ],
          },
          {
            id: "bio-human-nutrition-bank-qa1-q04",
            question: "Compare the energy requirements of a 14-year-old student and a 70-year-old retired person. Explain THREE reasons for any difference you identify. [6 marks]",
            marks: 6,
            modelAnswer:
              "A 14-year-old typically requires more energy per day than a 70-year-old.\n\nReasons:\n1. Growth — the teenager is still growing rapidly, requiring extra energy for synthesis of new proteins, bones, and tissues. The elderly person has stopped growing.\n2. Activity level — teenagers are generally more physically active (e.g. PE, sports), requiring more energy for muscle contraction. Retired people typically lead more sedentary lifestyles.\n3. Basal metabolic rate (BMR) — BMR declines with age as muscle mass decreases and overall body metabolism slows. An older person needs less energy even at rest.",
            markScheme: [
              "Teenager requires more energy (stated or implied) / higher daily energy requirement",
              "Reason 1: growth (protein/tissue synthesis) in teenager / no growth in elderly",
              "Reason 2: higher activity level in teenager / more sedentary in elderly — reference to energy for muscle contraction",
              "Reason 3: higher BMR in youth / BMR declines with age / less muscle mass in elderly",
            ],
            commonError:
              "Vague answers such as 'teenagers are more active' without connecting activity to energy demand. Also: not mentioning growth as a separate factor from activity.",
            guideRef: "Energy Requirements",
            difficulty: "core",
            hints: [
              "Think about what uses energy in the body: movement, growth, maintaining body temperature, organ function.",
              "How does the rate of growth differ between a 14-year-old and a 70-year-old?",
              "How does basal metabolic rate (BMR) change with age?",
            ],
          },
        ],
      },
      {
        id: "bio-human-nutrition-bank-qa-2",
        title: "Structured Questions Paper 2 — Enzymes, Absorption and Challenge",
        description: "4 structured questions including enzyme-site matching challenge and experimental design.",
        questions: [
          {
            id: "bio-human-nutrition-bank-qa2-q01",
            question: "The table below shows four digestive enzymes. Complete it by providing the missing information.\n\nAmylase | Substrate: starch | Products: ? | Site of action: ?\nPepsin | Substrate: ? | Products: peptides/amino acids | Site of action: ?\nLipase | Substrate: ? | Products: fatty acids + glycerol | Site of action: ?\nMaltase | Substrate: maltose | Products: ? | Site of action: small intestine\n\n[8 marks]",
            marks: 8,
            modelAnswer:
              "Amylase | starch → maltose | acts in mouth and small intestine (duodenum).\nPepsin | substrate = proteins | products = peptides/amino acids | acts in stomach.\nLipase | substrate = fats (lipids/triglycerides) | products = fatty acids + glycerol | acts in small intestine (duodenum).\nMaltase | maltose → glucose + glucose | acts in small intestine.",
            markScheme: [
              "Amylase product: maltose",
              "Amylase site: mouth AND small intestine / duodenum",
              "Pepsin substrate: protein(s)",
              "Pepsin site: stomach",
              "Lipase substrate: fat(s) / lipids / triglycerides",
              "Lipase site: small intestine / duodenum",
              "Maltase product: glucose (accept: two glucose molecules)",
              "Maltase site: small intestine (already given — credit for recognising it is correct)",
            ],
            commonError:
              "Stating amylase acts only in the mouth (forgetting pancreatic amylase acts in the duodenum). Also: writing 'glycerol + fatty acids' for amylase products — amylase acts on starch, not fat.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "challenge",
            hints: [
              "For amylase: starch is a polysaccharide — what disaccharide is it broken into? In which TWO locations does amylase act?",
              "For pepsin: it is a protease working at very low pH — which part of the gut is strongly acidic?",
              "For lipase: it acts on fat. What are the two products of fat hydrolysis?",
              "Remember: enzymes act at specific pH optima — match this to where in the gut the conditions are right.",
            ],
            strategy: "Enzyme-site matching: first identify the substrate, then use pH optima and enzyme location knowledge to pin down the site.",
          },
          {
            id: "bio-human-nutrition-bank-qa2-q02",
            question: "Describe how the small intestine is adapted to absorb the products of digestion efficiently. Refer to both structural features and transport processes. [6 marks]",
            marks: 6,
            modelAnswer:
              "The inner surface of the small intestine (ileum) is folded into thousands of finger-like projections called villi, each covered in microvilli (the brush border). This creates an enormous surface area (approximately 200 m²) for absorption. Each villus has a single layer of epithelial cells, minimising the diffusion distance that molecules must cross. Inside each villus is a dense network of blood capillaries, which maintain a steep concentration gradient by continuously carrying away glucose and amino acids to the liver via the hepatic portal vein. This makes net diffusion continue rapidly.\n\nGlucose and amino acids are transported by active transport across the epithelial cell membrane, using ATP to move them against any concentration gradient. Each villus also contains a central lacteal (lymph vessel); fatty acids and glycerol are absorbed into epithelial cells, re-synthesised into triglycerides (packaged as chylomicrons), and enter the lacteal, passing into the lymphatic system and then into the blood.",
            markScheme: [
              "Villi / microvilli increase surface area",
              "Single layer of epithelial cells — short diffusion distance",
              "Rich blood capillary network maintains concentration gradient",
              "Active transport of glucose / amino acids across epithelium",
              "Central lacteal absorbs fatty acids and glycerol / chylomicrons",
              "Fatty acids and glycerol re-synthesised into triglycerides in epithelial cells before entering lacteal",
            ],
            commonError:
              "Failing to distinguish between absorption routes: many candidates state all products enter the blood capillaries, forgetting that fat products enter the lacteal.",
            guideRef: "Absorption: Structure of Villi",
            difficulty: "core",
            hints: [
              "Identify three structural adaptations. Think: size, thickness, blood supply.",
              "Are glucose and amino acids transported by diffusion only, or is active transport also involved?",
              "Fatty acids and glycerol do NOT enter blood capillaries — where do they go?",
            ],
          },
          {
            id: "bio-human-nutrition-bank-qa2-q03",
            question: "A scientist is investigating whether the drug X, which blocks bile secretion, affects protein digestion in the duodenum. Predict the outcome, justify your prediction, and suggest how you would test it experimentally. [6 marks]",
            marks: 6,
            modelAnswer:
              "Prediction: Drug X will have little or no significant effect on protein digestion in the duodenum.\n\nJustification: Bile does not digest proteins — it is not a protease and has no enzymatic action on peptide bonds. Bile's two roles are emulsification of fats and neutralisation of stomach acid. Protein digestion in the duodenum is carried out by pancreatic proteases (trypsin and chymotrypsin), which do not require bile. However, if bile is blocked, the duodenum may remain more acidic (since bile is not neutralising the chyme), which could reduce the activity of pancreatic proteases that have alkaline pH optima — this is a secondary, indirect effect.\n\nExperimental test: Set up two samples of duodenal fluid (from an animal model or in vitro): one with bile added, one without (control). Add a protein substrate (e.g. casein) and pancreatic protease to both. Measure rate of protein digestion over time (e.g. using a colorimetric assay such as Bradford or biuret test). Expect similar rates in both samples if bile has no direct effect on protease activity, but potentially slower digestion without bile if lower pH inhibits protease.",
            markScheme: [
              "Prediction: little/no direct effect on protein digestion from bile blockage",
              "Justification: bile is not a protease / does not act on proteins / bile emulsifies fat only",
              "Acknowledge indirect effect: without bile, lower pH may reduce pancreatic protease efficiency",
              "Experimental design: two conditions (with/without bile), protein substrate, pancreatic protease present",
              "Method for measuring rate of digestion (named technique or observable change)",
              "Expected result consistent with prediction, explained scientifically",
            ],
            commonError:
              "Incorrectly predicting that blocking bile will completely stop protein digestion — bile has no role in protein digestion. Candidates confuse the roles of bile with those of proteases.",
            guideRef: "Digestive Enzymes and Bile",
            difficulty: "challenge",
            hints: [
              "Does bile contain any protease enzymes? What are the two functions of bile?",
              "Which enzymes actually digest protein in the duodenum, and do they need bile to work?",
              "Could blocking bile have an indirect effect on protease activity? Think about pH.",
              "For the experiment: what is your independent variable? How will you measure protein digestion?",
            ],
            strategy: "Distinguish direct and indirect effects: ask 'Does bile directly act on protein?' then 'Could removing bile indirectly affect protein digestion?'",
          },
          {
            id: "bio-human-nutrition-bank-qa2-q04",
            question: "A 60-year-old pregnant woman is told by her doctor that she needs to increase her intake of iron, calcium, and vitamin D. Explain why each of these three nutrients is particularly important during pregnancy, and identify ONE food source for each. [6 marks]",
            marks: 6,
            modelAnswer:
              "Iron: During pregnancy, blood volume increases and the foetus requires iron to make its own haemoglobin for oxygen transport. Inadequate iron intake leads to maternal anaemia, reducing oxygen delivery to both mother and foetus. Food source: red meat / spinach / lentils.\n\nCalcium: Calcium is essential for the development of the foetal skeleton and teeth. If the mother's diet lacks calcium, it may be drawn from her own bones, weakening them and increasing her osteoporosis risk. Food source: dairy products (milk, cheese) / leafy green vegetables.\n\nVitamin D: Required for efficient absorption of calcium from the intestine. Without adequate vitamin D, even a calcium-rich diet may not provide enough calcium for foetal bone development. Also necessary for the foetus's own bone mineralisation. At 60, the mother also has reduced skin synthesis of vitamin D. Food source: oily fish (salmon, mackerel) / egg yolk.",
            markScheme: [
              "Iron: needed for foetal haemoglobin / prevents maternal anaemia / increased blood volume",
              "Iron food source: correct example (red meat, spinach, lentils)",
              "Calcium: foetal bone and teeth development / maternal bone density",
              "Calcium food source: correct example (dairy, leafy greens)",
              "Vitamin D: needed for calcium absorption / bone mineralisation in foetus / reference to age-related reduced synthesis",
              "Vitamin D food source: correct example (oily fish, eggs)",
            ],
            commonError:
              "Stating vitamin D builds bones — vitamin D's role is to enable calcium absorption; it is calcium itself (with vitamin D's help) that mineralises bone. Also: giving the same food source for both calcium and vitamin D (dairy is not rich in vitamin D).",
            guideRef: "Balanced Diet and Nutrients",
            difficulty: "challenge",
            hints: [
              "For each nutrient, ask: what does it do in the body, and why is that especially important when there is a growing foetus?",
              "Remember that vitamin D's role is to help ABSORB calcium — so even a calcium-rich diet may fail without vitamin D.",
              "For iron: what protein in red blood cells requires iron? Why is more iron needed during pregnancy?",
            ],
            strategy: "For each nutrient: function → why pregnancy increases demand → food source. Use a 3-part answer structure.",
          },
        ],
      },
    ],
  },
};
