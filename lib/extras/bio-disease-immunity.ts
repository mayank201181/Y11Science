import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "bio-disease-immunity",

  hook:
    "Your blood is a battlefield: right now, billions of antibodies patrol your vessels, each shaped like a tiny Y with a lock that fits exactly one pathogen. When a new microbe invades, your immune system can churn out 10 million different antibody variants in days — and then remember the attacker for decades.",

  didYouKnow: [
    "A single B-lymphocyte can produce up to 2,000 antibody molecules every second once it has been activated by an antigen.",
    "The influenza virus mutates its surface proteins so rapidly that last year's antibodies often cannot recognise this year's strain — which is why the flu vaccine must be reformulated annually.",
    "Vaccination wiped out smallpox globally by 1980; the virus now exists only in two secure laboratories, making it the first human disease ever deliberately eradicated.",
    "Phagocytes can engulf bacteria that are many times their own diameter. After 'eating' a pathogen, they display fragments of it on their surface — effectively becoming a wanted poster for the rest of the immune system.",
    "Memory B and T cells can survive for 70+ years in your bone marrow and lymph nodes, meaning some elderly people today still carry immunity to the 1918 influenza pandemic strain from childhood exposure.",
    "Monoclonal antibodies — identical antibodies grown from a single B-cell clone — are used in pregnancy tests, COVID lateral-flow tests, and targeted cancer therapies, all based on the same lock-and-key principle."
  ],

  experiments: [
    {
      title: "Hand-washing Glow Test",
      materials: [
        "UV (blacklight) torch or lamp",
        "GloGerm gel or lotion (available online) — or petroleum jelly with a small amount of flour as a substitute",
        "Soap and water",
        "Paper towels"
      ],
      steps: [
        "Rub a small pea-sized amount of GloGerm gel over both hands as if applying hand sanitiser, covering all surfaces including between fingers and around nails.",
        "In a darkened room, shine the UV torch on your hands and observe where the gel glows — these patches represent where pathogens would lurk.",
        "Wash your hands using your normal technique for 20 seconds, then dry and check again under the UV light. Note which areas still glow.",
        "Repeat, this time following the NHS 6-step hand-washing technique (palm-to-palm, backs of hands, interlaced fingers, backs of fingers, thumbs, fingertips), wash for a full 20–30 seconds, dry thoroughly, and re-check.",
        "Record which areas (e.g. between fingers, nail beds, wrists) are hardest to clean and compare the two techniques."
      ],
      science:
        "Physical barriers such as skin and mucous membranes are the body's first line of defence against pathogens. Thorough hand-washing removes transient micro-organisms mechanically — soap molecules have a hydrophilic head and hydrophobic tail that disrupts lipid-based pathogen envelopes, while friction dislodges microbes. The UV tracer shows that technique matters far more than time alone; areas often missed (nail beds, thumb bases) remain contaminated after a brief rinse.",
      safety:
        "GloGerm is non-toxic and skin-safe. Keep the UV torch away from eyes. If using petroleum jelly, wash hands thoroughly afterwards."
    },
    {
      title: "Antiseptic vs. Antibiotics — Agar Plate Inhibition Zones",
      materials: [
        "2–3 pre-poured nutrient agar plates (available from biology suppliers or school science department)",
        "Cotton swabs",
        "Paper discs cut from filter paper (about 6 mm diameter)",
        "Common household antiseptics: diluted TCP, diluted Dettol, diluted lemon juice (natural acid)",
        "Sticky tape and marker pen",
        "Incubator or warm place (25–30 °C) — NOT above 30 °C to avoid culturing human pathogens"
      ],
      steps: [
        "Label the base of each agar plate with your name, date, and the substances you will test.",
        "Using a sterile cotton swab, gently inoculate the agar surface with a sweep of garden soil or leaf litter (a safe environmental source of bacteria — avoid human body sources).",
        "Soak three paper discs in three different test liquids (e.g. diluted TCP, diluted Dettol, water as a control). Use tweezers to place them evenly spaced on the inoculated agar.",
        "Seal the plates with tape but do NOT seal completely (allow gas exchange). Store upside-down at room temperature (20–25 °C) for 48–72 hours.",
        "Measure the diameter of any clear zone (zone of inhibition) around each disc in mm. A larger zone indicates stronger antimicrobial action.",
        "Record results, calculate mean zone diameters, and rank the antiseptics by effectiveness."
      ],
      science:
        "Antiseptics are chemicals that kill or inhibit micro-organism growth on living tissue. They disrupt cell membranes and denature bacterial proteins. The clear zone of inhibition forms because the chemical diffuses outward through the agar and prevents bacterial colonies from growing. This is the same method (the Kirby-Bauer disc diffusion test) used in hospitals to choose which antibiotic to prescribe for a given infection. Comparing zone sizes lets you quantify relative effectiveness.",
      safety:
        "Keep all cultures at or below 25 °C to prevent incubating potential pathogens. Do not open sealed plates. Autoclave or submerge plates in diluted bleach (1 part bleach : 9 parts water) for 30 minutes before disposal. Wash hands thoroughly after handling. Adult supervision recommended."
    }
  ]
};
