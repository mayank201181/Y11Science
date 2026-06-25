import type { Topic } from "../types";

export const bioDiseaseImmunity: Topic = {
  id: "bio-disease-immunity",
  title: "Diseases & Immunity",
  subject: "biology",
  icon: "🦠",
  blurb: "Pathogens, transmission, body defences, antibodies, and vaccination.",
  intro:
    "Every day your body is under attack from pathogens — bacteria, viruses, fungi, and parasites — yet most of the time you stay healthy. This topic unpacks how diseases spread, how your body erects physical and chemical barriers, how white blood cells mount a targeted immune response, and how vaccination trains your immune system before the real pathogen arrives. Understanding these mechanisms is both fundamental biology and urgent public-health knowledge.",

  guide: [
    {
      heading: "Pathogens and Transmissible Disease",
      body:
        "A **pathogen** is any organism or agent that causes disease. Cambridge IGCSE 0610 expects you to know the four main groups:\n\n- **Bacteria** — single-celled prokaryotes; they may release toxins or directly damage host cells (e.g. *Salmonella*, *Mycobacterium tuberculosis*).\n- **Viruses** — non-cellular; they hijack host-cell machinery to replicate, often destroying the host cell in the process (e.g. influenza virus, HIV).\n- **Fungi** — eukaryotic; most human fungal diseases are superficial (e.g. athlete's foot) though some are systemic in immunocompromised patients.\n- **Parasites** — range from single-celled protists such as *Plasmodium* (malaria) to multicellular organisms such as tapeworms.\n\nA **transmissible (communicable) disease** is one that can be passed from one host to another, directly or indirectly.\n\n**Direct transmission**\n- *Contact* — touching infected skin, wounds, or bodily fluids (e.g. HIV, ringworm).\n- *Droplets* — respiratory droplets released by coughing or sneezing carry pathogens through the air over short distances (e.g. influenza, COVID-19, tuberculosis).\n- *Sexual contact* — transfer of pathogens in bodily fluids (e.g. HIV, gonorrhoea).\n\n**Indirect transmission**\n- *Contaminated food and water* — pathogens ingested via food or drinking water (e.g. *Salmonella* in undercooked poultry, cholera in contaminated water).\n- *Fomites* — contaminated surfaces and objects that a new host then touches.\n- *Vectors* — organisms that carry the pathogen from host to host without necessarily being harmed themselves. The *Anopheles* mosquito is the vector for *Plasmodium* (malaria); the mosquito takes a blood meal from an infected person and injects *Plasmodium* sporozoites into the next host.",
      diagrams: [
        {
          caption: "Routes of pathogen transmission",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Routes of pathogen transmission showing direct and indirect pathways"><rect width="320" height="200" fill="#0f172a"/><text x="160" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#eef0ff" font-family="sans-serif">Pathogen Transmission Routes</text><rect x="120" y="34" width="80" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1.5"/><text x="160" y="53" text-anchor="middle" font-size="10" fill="#38bdf8" font-family="sans-serif">PATHOGEN</text><text x="48" y="88" text-anchor="middle" font-size="9" fill="#fbbf24" font-family="sans-serif">DIRECT</text><text x="240" y="88" text-anchor="middle" font-size="9" fill="#a78bfa" font-family="sans-serif">INDIRECT</text><line x1="140" y1="62" x2="80" y2="100" stroke="#fbbf24" stroke-width="1" stroke-dasharray="4,2"/><line x1="160" y1="62" x2="160" y2="100" stroke="#fbbf24" stroke-width="1" stroke-dasharray="4,2"/><line x1="180" y1="62" x2="220" y2="100" stroke="#a78bfa" stroke-width="1" stroke-dasharray="4,2"/><line x1="185" y1="62" x2="265" y2="100" stroke="#a78bfa" stroke-width="1" stroke-dasharray="4,2"/><rect x="10" y="100" width="70" height="22" rx="4" fill="#fbbf24" fill-opacity="0.15" stroke="#fbbf24" stroke-width="1"/><text x="45" y="115" text-anchor="middle" font-size="8" fill="#fbbf24" font-family="sans-serif">Contact/Skin</text><rect x="90" y="100" width="60" height="22" rx="4" fill="#fbbf24" fill-opacity="0.15" stroke="#fbbf24" stroke-width="1"/><text x="120" y="115" text-anchor="middle" font-size="8" fill="#fbbf24" font-family="sans-serif">Droplets</text><rect x="170" y="100" width="70" height="22" rx="4" fill="#a78bfa" fill-opacity="0.15" stroke="#a78bfa" stroke-width="1"/><text x="205" y="115" text-anchor="middle" font-size="8" fill="#a78bfa" font-family="sans-serif">Food/Water</text><rect x="250" y="100" width="60" height="22" rx="4" fill="#a78bfa" fill-opacity="0.15" stroke="#a78bfa" stroke-width="1"/><text x="280" y="115" text-anchor="middle" font-size="8" fill="#a78bfa" font-family="sans-serif">Vectors</text><text x="280" y="140" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">(e.g. mosquito)</text><text x="45" y="150" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">e.g. HIV</text><text x="120" y="150" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">e.g. flu</text><text x="205" y="150" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">e.g. cholera</text><text x="280" y="158" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">e.g. malaria</text><text x="160" y="185" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif" font-style="italic">Plasmodium carried by Anopheles mosquito (vector)</text></svg>',
        },
      ],
      keyPoints: [
        "A pathogen is an organism (bacterium, virus, fungus, parasite) that causes disease.",
        "Transmissible diseases pass from host to host; non-transmissible diseases do not.",
        "Direct routes: contact, droplets, sexual transmission.",
        "Indirect routes: contaminated food/water, vectors such as mosquitoes.",
        "Vectors carry pathogens between hosts without necessarily being harmed.",
      ],
      discovery: {
        problem:
          "Malaria kills hundreds of thousands of people each year. The pathogen (*Plasmodium*) lives inside red blood cells. If you cannot directly touch an infected person and still catch malaria, how must the pathogen be getting into new hosts?",
        idea:
          "The *Anopheles* mosquito acts as a **vector**: when it feeds on an infected person's blood it ingests *Plasmodium* cells, which develop further inside the mosquito. When the mosquito bites a new host it injects the parasite with its saliva. This is indirect transmission via a vector — no direct host-to-host contact needed.",
      },
      strategies: ["Classify the route before naming the disease", "Distinguish pathogen from vector"],
    },
    {
      heading: "The Body's Non-Specific Defences",
      body:
        "Before the immune system mounts a targeted response, the body uses a set of **non-specific defences** — barriers and chemicals that act against ALL pathogens equally.\n\n**Mechanical / physical barriers**\n- **Skin** — the intact epidermis forms a tough, keratinised barrier. Pathogens cannot penetrate unbroken skin. Sebaceous glands secrete slightly acidic sebum, inhibiting microbial growth.\n- **Mucus and ciliated epithelium** — the respiratory tract is lined with cells that secrete sticky mucus, trapping inhaled particles and pathogens. Cilia beat rhythmically upward (the *mucociliary escalator*), moving the mucus toward the throat where it is swallowed.\n- **Nose hairs (nasal cilia and mucus)** — filter larger particles.\n\n**Chemical barriers**\n- **Stomach acid (hydrochloric acid, pH 1–2)** — denatures proteins in pathogens swallowed with food or mucus, killing the vast majority before they can reach the intestines.\n- **Lysozyme** — an enzyme present in tears, saliva, and nasal secretions that breaks down bacterial cell walls.\n\n**Blood clotting** — when a blood vessel is damaged, a cascade of reactions leads to **clot formation**: platelets aggregate at the wound; a soluble plasma protein called **fibrinogen** is converted to insoluble **fibrin** threads that form a mesh, trapping red blood cells to create a **clot**. The dried clot becomes a scab, sealing the wound against pathogen entry while repair occurs beneath it.\n\nThe steps of clotting (simplified for IGCSE):\n1. Platelets and damaged tissue release clotting factors.\n2. Clotting factors convert fibrinogen → fibrin.\n3. Fibrin mesh traps cells → clot → scab.",
      diagrams: [
        {
          caption: "Blood clotting — from wound to scab",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Steps of blood clotting showing platelet aggregation and fibrin mesh formation"><rect width="320" height="200" fill="#0f172a"/><text x="160" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#eef0ff" font-family="sans-serif">Blood Clotting at a Wound</text><rect x="10" y="28" width="90" height="60" rx="5" fill="#1e293b" stroke="#38bdf8" stroke-width="1.2"/><text x="55" y="44" text-anchor="middle" font-size="9" fill="#38bdf8" font-family="sans-serif" font-weight="bold">Step 1</text><text x="55" y="57" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">Damage exposes</text><text x="55" y="68" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">vessel wall</text><text x="55" y="79" text-anchor="middle" font-size="8" fill="#fb7185" font-family="sans-serif">Platelets arrive</text><rect x="115" y="28" width="90" height="60" rx="5" fill="#1e293b" stroke="#fbbf24" stroke-width="1.2"/><text x="160" y="44" text-anchor="middle" font-size="9" fill="#fbbf24" font-family="sans-serif" font-weight="bold">Step 2</text><text x="160" y="57" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">Clotting factors</text><text x="160" y="68" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">released</text><text x="160" y="79" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">fibrinogen activated</text><rect x="220" y="28" width="90" height="60" rx="5" fill="#1e293b" stroke="#34d399" stroke-width="1.2"/><text x="265" y="44" text-anchor="middle" font-size="9" fill="#34d399" font-family="sans-serif" font-weight="bold">Step 3</text><text x="265" y="57" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">Fibrin mesh forms</text><text x="265" y="68" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">traps red blood</text><text x="265" y="79" text-anchor="middle" font-size="8" fill="#34d399" font-family="sans-serif">cells → CLOT</text><line x1="100" y1="58" x2="115" y2="58" stroke="#b7bce0" stroke-width="1.5" marker-end="url(#arr)"/><line x1="205" y1="58" x2="220" y2="58" stroke="#b7bce0" stroke-width="1.5"/><polygon points="218,54 226,58 218,62" fill="#b7bce0"/><rect x="60" y="115" width="200" height="50" rx="6" fill="#1e293b" stroke="#a78bfa" stroke-width="1.2"/><text x="160" y="132" text-anchor="middle" font-size="9" fill="#a78bfa" font-family="sans-serif" font-weight="bold">Key molecules</text><text x="160" y="146" text-anchor="middle" font-size="8.5" fill="#b7bce0" font-family="sans-serif">fibrinogen (soluble plasma protein)</text><text x="160" y="158" text-anchor="middle" font-size="8.5" fill="#34d399" font-family="sans-serif">fibrin (insoluble mesh) + platelets</text><text x="160" y="185" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif" font-style="italic">Dried clot = scab — seals wound against pathogens</text></svg>',
        },
      ],
      keyPoints: [
        "Skin, mucus, cilia, and nose hairs are physical barriers against pathogen entry.",
        "Stomach acid (pH 1–2) kills most pathogens in swallowed material.",
        "Lysozyme in tears and saliva digests bacterial cell walls.",
        "Platelets and clotting factors convert fibrinogen to fibrin, forming a clot/scab.",
        "Blood clotting seals wounds, preventing pathogen entry and blood loss.",
      ],
      whyItWorks:
        "Blood clotting is a cascade: each clotting factor activates the next, amplifying the signal. Fibrinogen is always present in plasma; converting it to fibrin only at a wound site (where clotting factors are released by damaged cells and platelets) means clotting is both rapid and localised — essential to avoid dangerous clotting throughout the bloodstream.",
      thinkDeeper:
        "Haemophilia is a genetic condition in which a clotting factor is absent. Without that one protein the cascade is broken and dangerous internal bleeding can occur from minor injuries. This illustrates how the cascade amplifies but also depends on every component being present.",
    },
    {
      heading: "The Immune Response: Phagocytosis and Lymphocytes",
      body:
        "When pathogens breach the non-specific barriers, the **immune system** mounts a targeted response. Two types of white blood cell (leucocyte) are central.\n\n**Phagocytes and phagocytosis**\nPhagocytes (e.g. macrophages, neutrophils) patrol tissues and blood. When they detect a pathogen:\n1. The phagocyte engulfs the pathogen by wrapping its cell membrane around it, forming a **phagosome** (vacuole).\n2. Lysosomes fuse with the phagosome, releasing digestive enzymes that destroy the pathogen.\n3. Fragments (antigens) may be displayed on the phagocyte surface to activate lymphocytes.\n\nPhagocytosis is **non-specific** — phagocytes engulf any foreign particle.\n\n**Antigens and antibodies**\nPathogens carry **antigens** — specific molecules on their surface (usually proteins) that the immune system recognises as foreign. Each antigen has a unique shape.\n\n**Lymphocytes** (B-cells) are the key cells for producing antibodies:\n1. A B-cell whose receptor is **complementary in shape** to a specific antigen binds to that antigen.\n2. The B-cell is activated and divides rapidly (clonal expansion) into many **plasma cells**.\n3. Plasma cells secrete large quantities of **antibodies** — proteins with a binding site (paratope) whose shape is **complementary** to the specific antigen.\n4. Antibody–antigen binding: agglutinates pathogens, neutralises toxins, or marks pathogens for phagocytosis (**opsonisation**).\n5. Some B-cells become long-lived **memory cells** that persist in the body.\n\n**T-cells (T-lymphocytes)** — for IGCSE you need to know that some T-cells destroy infected body cells (cytotoxic T-cells) and others help coordinate the immune response (helper T-cells). HIV specifically destroys helper T-cells, crippling the immune response.",
      diagrams: [
        {
          caption: "Phagocytosis — engulfing and destroying a pathogen",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Diagram of phagocytosis showing a phagocyte engulfing a bacterium step by step"><rect width="320" height="200" fill="#0f172a"/><text x="160" y="16" text-anchor="middle" font-size="11" font-weight="bold" fill="#eef0ff" font-family="sans-serif">Phagocytosis</text><circle cx="55" cy="90" r="32" fill="#38bdf8" fill-opacity="0.15" stroke="#38bdf8" stroke-width="1.5"/><text x="55" y="88" text-anchor="middle" font-size="8" fill="#38bdf8" font-family="sans-serif">Phagocyte</text><text x="55" y="99" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">(e.g. macrophage)</text><ellipse cx="55" cy="70" rx="8" ry="5" fill="#a78bfa" fill-opacity="0.5"/><text x="55" y="72" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">nucleus</text><circle cx="120" cy="90" r="10" fill="#fb7185" fill-opacity="0.3" stroke="#fb7185" stroke-width="1.2"/><text x="120" y="93" text-anchor="middle" font-size="7" fill="#fb7185" font-family="sans-serif">pathogen</text><text x="120" y="60" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">1. Detects</text><text x="120" y="70" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">pathogen</text><path d="M 83,82 Q 105,65 118,82" stroke="#34d399" stroke-width="1.2" fill="none" stroke-dasharray="3,2"/><polygon points="116,85 119,79 122,85" fill="#34d399"/><circle cx="210" cy="90" r="32" fill="#38bdf8" fill-opacity="0.15" stroke="#38bdf8" stroke-width="1.5"/><text x="210" y="88" text-anchor="middle" font-size="8" fill="#38bdf8" font-family="sans-serif">Phagocyte</text><circle cx="210" cy="90" r="12" fill="#fb7185" fill-opacity="0.2" stroke="#fb7185" stroke-width="1"/><text x="210" y="93" text-anchor="middle" font-size="6" fill="#fb7185" font-family="sans-serif">phagosome</text><text x="210" y="55" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">2. Engulfs into</text><text x="210" y="65" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">phagosome</text><circle cx="285" cy="90" r="32" fill="#38bdf8" fill-opacity="0.15" stroke="#38bdf8" stroke-width="1.5"/><text x="285" y="93" text-anchor="middle" font-size="8" fill="#34d399" font-family="sans-serif">DESTROYED</text><circle cx="285" cy="78" r="8" fill="#fbbf24" fill-opacity="0.3" stroke="#fbbf24" stroke-width="1"/><text x="285" y="81" text-anchor="middle" font-size="6" fill="#fbbf24" font-family="sans-serif">lysosome</text><text x="285" y="55" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">3. Lysosomes</text><text x="285" y="65" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">digest pathogen</text><line x1="87" y1="90" x2="178" y2="90" stroke="#b7bce0" stroke-width="1" stroke-dasharray="4,2"/><polygon points="176,87 182,90 176,93" fill="#b7bce0"/><line x1="242" y1="90" x2="253" y2="90" stroke="#b7bce0" stroke-width="1" stroke-dasharray="4,2"/><polygon points="251,87 257,90 251,93" fill="#b7bce0"/><text x="160" y="185" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif" font-style="italic">Antigen fragments may be displayed to activate lymphocytes</text></svg>',
        },
        {
          caption: "Antibody–antigen complementary binding",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Diagram showing Y-shaped antibody with binding sites complementary to antigen on a pathogen surface"><rect width="320" height="200" fill="#0f172a"/><text x="160" y="16" text-anchor="middle" font-size="11" font-weight="bold" fill="#eef0ff" font-family="sans-serif">Antibody-Antigen Complementary Binding</text><rect x="10" y="140" width="145" height="45" rx="8" fill="#fb7185" fill-opacity="0.15" stroke="#fb7185" stroke-width="1.5"/><text x="82" y="165" text-anchor="middle" font-size="9" fill="#fb7185" font-family="sans-serif">PATHOGEN SURFACE</text><polygon points="50,140 58,120 66,140" fill="#fb7185" fill-opacity="0.7"/><polygon points="90,140 98,120 106,140" fill="#fb7185" fill-opacity="0.7"/><text x="58" y="133" text-anchor="middle" font-size="7" fill="#eef0ff" font-family="sans-serif">antigen</text><text x="98" y="133" text-anchor="middle" font-size="7" fill="#eef0ff" font-family="sans-serif">antigen</text><polygon points="50,85 58,105 66,85" fill="#34d399" fill-opacity="0.8"/><polygon points="90,85 98,105 106,85" fill="#34d399" fill-opacity="0.8"/><line x1="58" y1="85" x2="58" y2="65" stroke="#34d399" stroke-width="2.5"/><line x1="98" y1="85" x2="78" y2="65" stroke="#34d399" stroke-width="2.5"/><line x1="78" y1="65" x2="78" y2="35" stroke="#34d399" stroke-width="2.5"/><text x="58" y="78" text-anchor="middle" font-size="7" fill="#eef0ff" font-family="sans-serif">binding</text><text x="58" y="87" text-anchor="middle" font-size="7" fill="#eef0ff" font-family="sans-serif">site</text><text x="78" y="25" text-anchor="middle" font-size="9" fill="#34d399" font-family="sans-serif" font-weight="bold">ANTIBODY</text><text x="18" y="50" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">Y-shaped</text><text x="18" y="60" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">protein</text><rect x="170" y="140" width="140" height="45" rx="8" fill="#a78bfa" fill-opacity="0.15" stroke="#a78bfa" stroke-width="1.5"/><text x="240" y="165" text-anchor="middle" font-size="9" fill="#a78bfa" font-family="sans-serif">DIFFERENT PATHOGEN</text><polygon points="195,140 203,120 211,140" fill="#a78bfa" fill-opacity="0.4"/><text x="203" y="108" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">different</text><text x="203" y="118" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">antigen shape</text><line x1="203" y1="120" x2="203" y2="100" stroke="#b7bce0" stroke-width="1" stroke-dasharray="3,2"/><text x="203" y="95" text-anchor="middle" font-size="9" fill="#fb7185" font-family="sans-serif">NO FIT</text><text x="160" y="190" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif" font-style="italic">Each antibody is specific to one antigen shape — like a lock and key</text></svg>',
        },
      ],
      keyPoints: [
        "Phagocytes engulf pathogens into a phagosome; lysosomes digest them.",
        "Antigens are surface molecules on pathogens recognised as foreign by lymphocytes.",
        "B-lymphocytes produce antibodies whose binding site is complementary in shape to a specific antigen.",
        "Antibodies agglutinate pathogens, neutralise toxins, and flag cells for phagocytosis.",
        "Some B-cells become long-lived memory cells after the initial infection.",
      ],
      discovery: {
        problem:
          "If antibodies are proteins, and every protein has a specific shape, how can the immune system produce an antibody that fits the surface of a pathogen it has *never encountered before*? The body cannot predict what pathogens are coming.",
        idea:
          "The body doesn't predict — it pre-builds an enormous **repertoire** of B-cells, each with a slightly different receptor shape (due to random gene rearrangement during development). When a pathogen arrives, only the B-cell(s) whose receptor shape is **complementary** to that antigen bind to it. Those specific B-cells then divide rapidly (clonal expansion), flooding the body with antibodies of that one shape. It's a combinatorial lottery that works because the repertoire is vast.",
      },
      whyItWorks:
        "Antibody specificity works on the same principle as enzyme specificity: the three-dimensional shape of the antibody binding site (paratope) is complementary to the three-dimensional shape of the antigen epitope. Only when shapes match can non-covalent intermolecular forces (hydrogen bonds, van der Waals forces) hold the complex together long enough to have an effect. A slight mismatch and the antigen is not bound — explaining why each antibody is specific to one (or very few) antigens.",
      strategies: ["Lock-and-key analogy", "Clonal selection logic"],
    },
    {
      heading: "Active and Passive Immunity",
      body:
        "**Immunity** is the ability to resist a pathogen. There are two fundamentally different ways to acquire it.\n\n**Active immunity** — the body's own immune system produces antibodies and memory cells.\n- *Natural active immunity* — acquired through actually being infected. The primary response takes days–weeks; memory cells then allow a faster, larger secondary response to the same pathogen, usually preventing disease.\n- *Artificial active immunity* — acquired through **vaccination** (see next section). The vaccine introduces antigen without causing disease; the immune system responds and creates memory cells.\n\n**Active immunity is long-lasting** because memory cells survive for years or decades.\n\n**Passive immunity** — ready-made antibodies from another organism are introduced into the body. The recipient does NOT produce their own antibodies or memory cells.\n- *Natural passive immunity* — maternal antibodies cross the placenta to the foetus (IgG class) and are transferred in breast milk (IgA in colostrum). This gives the newborn immediate protection while its own immune system matures.\n- *Artificial passive immunity* — an injection of antibodies (antiserum) from a donor is given to a patient who needs immediate protection (e.g. antivenom after a snake bite, or immunoglobulin for someone exposed to tetanus who has not been vaccinated).\n\n**Passive immunity is short-lived** — the borrowed antibodies are gradually broken down (weeks to months) and, because no memory cells were formed, the body has no enhanced response to future exposure.\n\n| | Active | Passive |\n|---|---|---|\n| Source of antibodies | Own lymphocytes | External donor |\n| Speed of protection | Slow (days–weeks) | Immediate |\n| Memory cells formed? | Yes | No |\n| Duration | Long-lasting (years) | Short-lived (weeks–months) |",
      keyPoints: [
        "Active immunity = own body produces antibodies + memory cells; long-lasting.",
        "Passive immunity = ready-made antibodies received from outside; immediate but short-lived.",
        "Natural active: infection. Artificial active: vaccination.",
        "Natural passive: placenta/breast milk. Artificial passive: antibody injection.",
        "Passive immunity provides no memory cells, so no enhanced response on future exposure.",
      ],
      thinkDeeper:
        "A newborn receiving maternal antibodies through breast milk cannot produce more of those antibodies — it has passive immunity. But the breast milk also contains immune factors that help the infant's gut microbiome develop, which itself influences how well the infant's immune system matures. This illustrates that immunity involves more than just antibodies.",
      strategies: ["Source of antibodies test", "Duration test"],
    },
    {
      heading: "Vaccination and Herd Immunity",
      body:
        "**Vaccination** is the deliberate introduction of an antigen into the body to stimulate active immunity **without causing the disease**.\n\n**How a vaccine works:**\n1. The vaccine contains a weakened (attenuated), killed (inactivated), or fragmented form of the pathogen — or just its antigens — that cannot cause disease but still displays the antigens.\n2. The immune system mounts a **primary immune response**: B-lymphocytes with complementary receptors are activated, dividing to produce antibodies and **memory cells**.\n3. Because antibody levels from the primary response fall back to baseline, the person may still get mild symptoms from a booster, but the key outcome is the **memory cells** that persist.\n4. On real infection, memory cells enable a **secondary immune response** — much faster (days rather than weeks) and producing far higher antibody levels — so the pathogen is cleared before it can cause serious disease.\n\n**Herd immunity** occurs when a sufficiently large fraction of a population is immune (naturally or through vaccination) that the pathogen can no longer spread efficiently — there are too few susceptible hosts to maintain transmission chains. This indirectly protects people who cannot be vaccinated (newborns, immunocompromised patients). The fraction needed varies by pathogen (measles requires ~95% immunity; polio ~80–85%).",
      diagrams: [
        {
          caption: "Antibody level vs. time — primary and secondary immune response",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Graph showing antibody concentration over time with a low primary response after first antigen exposure and a much higher faster secondary response after second exposure"><rect width="320" height="200" fill="#0f172a"/><text x="160" y="15" text-anchor="middle" font-size="11" font-weight="bold" fill="#eef0ff" font-family="sans-serif">Antibody Levels vs. Time</text><line x1="40" y1="170" x2="305" y2="170" stroke="#b7bce0" stroke-width="1.5"/><line x1="40" y1="170" x2="40" y2="25" stroke="#b7bce0" stroke-width="1.5"/><text x="15" y="100" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif" transform="rotate(-90 15 100)">Antibody concentration</text><text x="172" y="185" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif">Time (weeks)</text><line x1="85" y1="25" x2="85" y2="170" stroke="#fbbf24" stroke-width="1" stroke-dasharray="4,3"/><text x="85" y="22" text-anchor="middle" font-size="8" fill="#fbbf24" font-family="sans-serif">1st antigen</text><line x1="200" y1="25" x2="200" y2="170" stroke="#fbbf24" stroke-width="1" stroke-dasharray="4,3"/><text x="200" y="22" text-anchor="middle" font-size="8" fill="#fbbf24" font-family="sans-serif">2nd antigen</text><polyline points="40,168 85,168 95,165 110,145 125,130 140,128 155,132 175,148 195,162 200,162 205,155 215,90 225,50 235,38 245,40 255,50 265,65 275,85 285,105 295,125 305,140" fill="none" stroke="#38bdf8" stroke-width="2"/><line x1="115" y1="128" x2="185" y2="128" stroke="#38bdf8" stroke-width="0.8" stroke-dasharray="2,2"/><text x="148" y="124" text-anchor="middle" font-size="7" fill="#38bdf8" font-family="sans-serif">PRIMARY response</text><text x="265" y="35" text-anchor="middle" font-size="8" fill="#34d399" font-family="sans-serif" font-weight="bold">SECONDARY</text><text x="265" y="45" text-anchor="middle" font-size="8" fill="#34d399" font-family="sans-serif">response</text><text x="265" y="55" text-anchor="middle" font-size="8" fill="#34d399" font-family="sans-serif">(faster, higher)</text><line x1="40" y1="150" x2="305" y2="150" stroke="#fb7185" stroke-width="0.8" stroke-dasharray="5,3"/><text x="308" y="153" text-anchor="middle" font-size="7" fill="#fb7185" font-family="sans-serif">threshold</text><text x="40" y="175" text-anchor="start" font-size="8" fill="#b7bce0" font-family="sans-serif">0</text></svg>',
        },
      ],
      keyPoints: [
        "Vaccines contain weakened/killed pathogens or just their antigens — they stimulate immunity without causing disease.",
        "Primary immune response: slow, low antibody peak; produces memory cells.",
        "Secondary immune response (on real infection or booster): fast, high antibody peak — memory cells enable this.",
        "Herd immunity protects susceptible individuals when enough of the population is immune.",
        "Herd immunity threshold depends on pathogen transmissibility (e.g. ~95% for measles).",
      ],
      whyItWorks:
        "Memory B-cells express the same antigen receptor as the parent B-cell but are long-lived and more numerous. On second exposure, many more cells recognise the antigen simultaneously, so clonal expansion is faster and antibody production peaks much higher. The threshold antibody level needed to neutralise the pathogen is reached before symptoms appear.",
      strategies: ["Trace memory cells as the mechanism", "Compare primary vs. secondary response graph features"],
    },
    {
      heading: "Controlling the Spread of Disease",
      body:
        "Preventing disease requires breaking the chain of transmission. Key public-health measures:\n\n**Hygiene**\n- Regular handwashing with soap destroys lipid-enveloped viruses and removes bacteria physically.\n- Covering mouth/nose when coughing/sneezing reduces droplet spread.\n- Sterilising medical equipment prevents hospital-acquired infections.\n\n**Sanitation and clean water**\n- Treatment of sewage prevents faecal–oral transmission of pathogens such as cholera (*Vibrio cholerae*) and typhoid (*Salmonella typhi*).\n- Chlorination and filtration of drinking water kills or removes pathogens.\n- Proper disposal of waste reduces breeding sites for vectors (e.g. stagnant water for mosquitoes).\n\n**Food safety**\n- Cooking food thoroughly (esp. poultry) kills pathogens such as *Salmonella*.\n- Refrigeration slows bacterial growth.\n- Keeping raw and cooked foods separate prevents cross-contamination.\n- Pasteurisation of milk kills most pathogens without significantly altering nutritional value.\n\n**Vector control**\n- Insecticide-treated bed nets and indoor residual spraying reduce *Anopheles* mosquito populations (malaria).\n- Draining standing water reduces mosquito breeding sites (dengue, Zika).\n\n**Vaccination programmes** (covered in the previous section) reduce the susceptible population.",
      keyPoints: [
        "Handwashing, surface sterilisation, and respiratory hygiene break direct and droplet transmission.",
        "Sewage treatment and water purification (chlorination, filtration) prevent faecal-oral disease.",
        "Cooking, refrigeration, pasteurisation, and avoiding cross-contamination prevent foodborne disease.",
        "Vector control (bed nets, insecticides, removing standing water) reduces vector-borne disease.",
        "Multiple simultaneous measures are more effective than any single intervention.",
      ],
      strategies: ["Identify the link in the transmission chain being broken"],
    },
  ],

  learn: {
    keyFacts: [
      "A pathogen is an organism that causes disease (bacteria, virus, fungus, or parasite).",
      "Transmissible diseases spread directly (contact, droplets) or indirectly (food/water, vectors).",
      "The skin, mucus, cilia, and stomach acid are the body's first-line non-specific defences.",
      "Blood clotting: platelets release clotting factors → fibrinogen converted to fibrin → mesh traps cells → scab.",
      "Phagocytes engulf pathogens by phagocytosis; lysosomes digest them inside a phagosome.",
      "Antigens are surface molecules on pathogens; antibodies have a binding site complementary in shape to a specific antigen.",
      "B-lymphocytes produce antibodies and memory cells; memory cells enable the faster secondary immune response.",
      "Active immunity is long-lasting and produces memory cells; passive immunity is immediate but short-lived.",
      "Vaccines contain weakened/killed antigen; they stimulate a primary response and memory cells.",
      "Herd immunity protects susceptible individuals when enough of the population is immune.",
    ],
    flashcards: [
      { front: "Define: pathogen", back: "An organism (bacterium, virus, fungus, or parasite) that causes disease in its host." },
      { front: "Give two examples of direct transmission", back: "Physical contact (e.g. skin-to-skin, touching infected wounds) AND respiratory droplets (e.g. coughing/sneezing)." },
      { front: "What is a vector?", back: "An organism (e.g. Anopheles mosquito) that carries a pathogen from one host to another without necessarily being harmed." },
      { front: "How does stomach acid defend against pathogens?", back: "Hydrochloric acid (pH 1–2) denatures proteins in pathogens swallowed with food or mucus, killing the majority of them." },
      { front: "What is phagocytosis?", back: "A phagocyte engulfs a pathogen into a phagosome (vacuole); lysosomes then fuse with the phagosome and release digestive enzymes to destroy the pathogen." },
      { front: "Why must an antibody's binding site be complementary to its antigen?", back: "Only a complementary shape allows the antibody to bind tightly via non-covalent intermolecular forces; a mismatched shape cannot bind, so the antibody is specific to one antigen." },
      { front: "What is the role of memory cells?", back: "Memory B-cells persist after the primary response; on re-exposure to the same antigen they enable a faster and larger secondary immune response, often clearing the pathogen before symptoms develop." },
      { front: "Distinguish active from passive immunity", back: "Active: own lymphocytes produce antibodies + memory cells (long-lasting). Passive: ready-made antibodies introduced from outside (immediate but short-lived, no memory cells)." },
      { front: "Give one example of natural passive immunity", back: "Maternal antibodies (IgG) crossing the placenta to the foetus, or IgA in breast milk/colostrum, giving the newborn immediate protection." },
      { front: "How does vaccination produce immunity?", back: "Vaccine antigen (weakened/killed pathogen or its fragments) is introduced → primary immune response → antibodies + memory cells → on real infection, secondary response is fast and high, clearing pathogen before disease occurs." },
      { front: "What is herd immunity?", back: "When a sufficient proportion of a population is immune that the pathogen cannot spread efficiently, indirectly protecting those who cannot be vaccinated." },
      { front: "How does fibrinogen differ from fibrin?", back: "Fibrinogen is a soluble plasma protein; when activated by clotting factors it is converted to insoluble fibrin threads that form the mesh of a blood clot." },
    ],
    keyTerms: [
      { term: "Pathogen", definition: "An organism or agent (bacterium, virus, fungus, parasite) that causes disease in a host organism." },
      { term: "Transmissible disease", definition: "A disease that can be passed from one host to another, directly or indirectly." },
      { term: "Vector", definition: "An organism that carries a pathogen from one host to another; the vector is not necessarily harmed (e.g. Anopheles mosquito carrying Plasmodium)." },
      { term: "Antigen", definition: "A molecule (usually a protein) on the surface of a pathogen or foreign cell that is recognised as non-self by the immune system and triggers an immune response." },
      { term: "Antibody", definition: "A Y-shaped protein produced by plasma cells (from B-lymphocytes) whose binding sites are complementary in shape to a specific antigen." },
      { term: "Phagocytosis", definition: "The process by which a phagocyte engulfs a pathogen or particle into a vacuole (phagosome) and digests it using lysosomal enzymes." },
      { term: "Lymphocyte", definition: "A type of white blood cell involved in the specific immune response; B-lymphocytes produce antibodies, T-lymphocytes coordinate the response or destroy infected cells." },
      { term: "Memory cell", definition: "A long-lived B- or T-lymphocyte produced during the primary immune response that enables a faster, larger secondary immune response on re-exposure to the same antigen." },
      { term: "Active immunity", definition: "Immunity resulting from the body's own lymphocytes producing antibodies and memory cells, following infection or vaccination; long-lasting." },
      { term: "Passive immunity", definition: "Immunity resulting from the introduction of ready-made antibodies from another organism; immediate but short-lived because no memory cells are formed." },
      { term: "Vaccination", definition: "The deliberate introduction of a weakened, killed, or fragmented form of a pathogen (or its antigens) to stimulate active immunity without causing the disease." },
      { term: "Herd immunity", definition: "Indirect protection of susceptible individuals that occurs when a sufficiently large proportion of a population is immune, preventing efficient spread of the pathogen." },
      { term: "Fibrin", definition: "Insoluble protein threads formed from fibrinogen by clotting factors; fibrin forms the mesh of a blood clot that seals a wound." },
    ],
  },

  quiz: {
    mcq: [
      {
        id: "bio-disease-immunity-mcq-q01",
        question: "Which of the following is an example of indirect transmission of a pathogen?",
        options: [
          "Touching a skin rash caused by ringworm",
          "Inhaling droplets from a cough",
          "Drinking water contaminated with Vibrio cholerae",
          "Receiving a needle-stick injury in a hospital",
        ],
        answerIndex: 2,
        explanation:
          "Drinking contaminated water is indirect transmission because there is no direct host-to-host contact — the pathogen travels via a contaminated vehicle (water). Touching a rash and inhaling droplets are direct routes; needle-stick is direct contact with infected material.",
        guideRef: "Pathogens and Transmissible Disease",
        difficulty: "warmup",
      },
      {
        id: "bio-disease-immunity-mcq-q02",
        question: "How does the mucociliary escalator in the respiratory tract protect against pathogens?",
        options: [
          "It acidifies inhaled air to kill bacteria",
          "Cilia sweep mucus containing trapped pathogens upward toward the throat",
          "It produces lysozyme that digests bacterial cell walls",
          "Mucus cells engulf pathogens by phagocytosis",
        ],
        answerIndex: 1,
        explanation:
          "The respiratory epithelium secretes sticky mucus that traps pathogens; cilia beat upward (toward the throat), moving the mucus — and trapped pathogens — to be swallowed. Acidification is not the mechanism; lysozyme is in tears/saliva; phagocytosis is a separate process by white blood cells.",
        guideRef: "The Body's Non-Specific Defences",
        difficulty: "core",
        hints: [
          "Think about what mucus does and which cells are responsible for moving it.",
          "The word 'escalator' hints at a direction of movement.",
          "Cilia are hair-like projections on epithelial cells — what do they do?",
        ],
      },
      {
        id: "bio-disease-immunity-mcq-q03",
        question: "In blood clotting, fibrinogen is converted to fibrin. Which best describes this change?",
        options: [
          "A soluble plasma protein becomes an insoluble mesh of threads",
          "An insoluble clot protein dissolves to allow wound healing",
          "Platelets are converted into fibrin by the liver",
          "A cell-surface protein is secreted into the plasma",
        ],
        answerIndex: 0,
        explanation:
          "Fibrinogen is a soluble plasma protein. Clotting factors activate thrombin, which cleaves fibrinogen into fibrin monomers that polymerise into insoluble threads, forming the clot mesh. The other options contain factual errors.",
        guideRef: "The Body's Non-Specific Defences",
        difficulty: "core",
        hints: [
          "Note the -ogen suffix: fibrinogen is a precursor that is converted.",
          "Think soluble vs. insoluble — which state would form a solid clot?",
        ],
      },
      {
        id: "bio-disease-immunity-mcq-q04",
        question: "A patient is given an injection of antibodies against tetanus toxin immediately after a deep wound. What type of immunity does this provide?",
        options: [
          "Natural active immunity",
          "Artificial active immunity",
          "Natural passive immunity",
          "Artificial passive immunity",
        ],
        answerIndex: 3,
        explanation:
          "Ready-made antibodies are introduced artificially (by injection) from an outside source, so this is artificial passive immunity. No antigens are introduced; the patient's own B-cells do not produce antibodies; no memory cells are formed. Natural passive is via placenta/breast milk; active immunity requires the patient's own lymphocytes to respond.",
        guideRef: "Active and Passive Immunity",
        difficulty: "core",
        hints: [
          "Passive = received ready-made antibodies (not made by the patient's own body).",
          "Artificial = delivered deliberately by a medical intervention, not from the mother.",
        ],
      },
      {
        id: "bio-disease-immunity-mcq-q05",
        question: "Why does a secondary immune response produce a higher peak antibody concentration than the primary response?",
        options: [
          "More pathogens are present in the body during the second infection",
          "Memory cells respond rapidly and divide extensively on re-exposure to the same antigen",
          "The pathogen mutates, so new antibodies are produced more quickly",
          "The secondary response occurs in different lymph nodes with more B-cells overall",
        ],
        answerIndex: 1,
        explanation:
          "Memory B-cells, produced during the primary response, are long-lived and numerous. On re-exposure they recognise the antigen quickly and undergo rapid clonal expansion, producing large quantities of specific antibodies very quickly. The pathogen load and location of lymph nodes are not the primary reasons; pathogen mutation would, if anything, reduce the effectiveness of memory cells.",
        guideRef: "Vaccination and Herd Immunity",
        difficulty: "core",
        hints: [
          "What cell type is specifically produced during the first immune response and persists long-term?",
          "More of those cells means faster and greater production of antibodies.",
        ],
      },
      {
        id: "bio-disease-immunity-mcq-q06",
        question: "Herd immunity to measles requires approximately 95% of the population to be immune. A region achieves 98% vaccination coverage. Which individual is MOST directly protected by herd immunity (not by their own vaccination)?",
        options: [
          "A 25-year-old who received the MMR vaccine as a child",
          "A 3-month-old infant too young to be vaccinated",
          "A 40-year-old who declined vaccination but has never caught measles",
          "A 70-year-old whose vaccine immunity has partially waned",
        ],
        answerIndex: 1,
        explanation:
          "Herd immunity provides indirect protection to people who cannot be vaccinated — the 3-month-old infant falls into this category because the MMR vaccine is not given before 12 months. The vaccinated adult and partially-immune 70-year-old have some direct protection. The person who declined vaccination is susceptible but relies on herd immunity; however the question asks who is MOST directly protected — the infant literally cannot be vaccinated, making them the clearest example of herd-immunity beneficiaries.",
        guideRef: "Vaccination and Herd Immunity",
        difficulty: "challenge",
        hints: [
          "Herd immunity protects people who cannot be vaccinated, not those who choose not to be.",
          "Think about who in the population is physically unable to receive the vaccine.",
          "Infants have age restrictions on certain vaccines — what does that mean for their protection?",
        ],
        strategy: "Identify who cannot (vs. will not) be vaccinated",
      },
    ],
    qa: [
      {
        id: "bio-disease-immunity-qa-q01",
        question:
          "Describe how the body's non-specific defences prevent a pathogen inhaled in a droplet from reaching the lungs. [4]",
        marks: 4,
        modelAnswer:
          "The nasal passages contain hairs (cilia) and mucus-secreting cells; the sticky mucus traps the inhaled pathogen. Cilia lining the respiratory tract beat upward (the mucociliary escalator), sweeping the mucus — and trapped pathogen — toward the throat. If swallowed, the pathogen reaches the stomach where hydrochloric acid (pH 1–2) denatures its proteins, killing it. Lysozyme in saliva may also begin to digest bacterial cell walls.",
        markScheme: [
          "Mucus produced by goblet cells in respiratory epithelium / mucus traps pathogen (1)",
          "Cilia beat (upward / toward throat) moving mucus and trapped pathogen (1)",
          "Pathogen swallowed and reaches stomach / stomach acid / HCl (1)",
          "Acid denatures pathogen proteins / kills pathogen / pH 1–2 stated (1)",
        ],
        commonError:
          "Students often credit 'white blood cells in the lungs' — these are part of the specific immune response, not the non-specific physical barrier described here.",
        guideRef: "The Body's Non-Specific Defences",
        difficulty: "core",
        hints: [
          "Start at the nose and trace the pathway down the respiratory tract.",
          "Mucus does the trapping; what moves the mucus?",
          "Where does swallowed material end up, and what is the defence mechanism there?",
        ],
        strategy: "Trace the pathway from entry point to final defence",
      },
      {
        id: "bio-disease-immunity-qa-q02",
        question:
          "Explain how a vaccine against influenza virus protects a person when they later encounter the real influenza virus. [5]",
        marks: 5,
        modelAnswer:
          "The influenza vaccine contains weakened, killed, or fragmented influenza antigens that cannot cause disease. These antigens are recognised as foreign by B-lymphocytes whose receptors are complementary in shape to the influenza antigens. Those B-cells are activated and divide (clonal expansion) to produce plasma cells that secrete specific antibodies, and memory B-cells. The antibodies clear the antigen during this primary response. When the person later encounters real influenza virus, the memory cells recognise the same antigens quickly and divide extensively, producing a much faster and larger secondary immune response — high antibody levels are achieved before the virus can replicate sufficiently to cause disease.",
        markScheme: [
          "Vaccine contains weakened/killed/inactivated influenza antigen (1)",
          "Antigen stimulates B-lymphocytes whose receptors are complementary / immune response produces antibodies (1)",
          "Memory cells (B-cells) are produced / persist in the body (1)",
          "On re-exposure: memory cells recognise antigen / secondary response faster and larger (1)",
          "High antibody levels destroy pathogen before disease develops / pathogen cleared quickly (1)",
        ],
        commonError:
          "A common error is to say the vaccine 'teaches the body about the virus' without naming memory cells as the mechanism. Always state that memory cells are produced and that they are responsible for the faster secondary response.",
        guideRef: "Vaccination and Herd Immunity",
        difficulty: "core",
        hints: [
          "What exactly does the vaccine introduce into the body?",
          "Which type of white blood cell responds to antigens and produces both antibodies and memory cells?",
          "What is special about memory cells that makes the second response faster and larger?",
          "Connect the secondary response to why the person does not get sick.",
        ],
        strategy: "Link each step: antigen → lymphocyte → memory cell → secondary response → protection",
      },
      {
        id: "bio-disease-immunity-qa-q03",
        question:
          "The graph below shows antibody levels in a person's blood after a first and second exposure to the same antigen. Analyse the graph to explain the differences between the primary and secondary immune responses, and predict what would happen if the person received a third exposure to the same antigen two years later. [6]",
        marks: 6,
        modelAnswer:
          "**Primary response (1st exposure):** There is a lag period (several days) before antibody levels rise, the peak is relatively low, and levels fall back toward zero after the antigen is cleared. This is because naive B-cells must first recognise the antigen, undergo clonal expansion, and differentiate into plasma cells — a slow process. Memory B-cells are produced as a by-product.\n\n**Secondary response (2nd exposure):** Antibody levels rise much more quickly (within 1–2 days), reach a much higher peak, and remain elevated for longer. Memory B-cells from the primary response already exist in large numbers and recognise the antigen immediately, dividing rapidly to produce many plasma cells.\n\n**Third exposure (2 years later):** Memory B-cells are long-lived (years to decades), so they would still be present. The tertiary response would be at least as fast and high as the secondary response — possibly higher if more memory cells accumulated. The pathogen would be cleared very rapidly, likely before any symptoms developed.",
        markScheme: [
          "Primary: lag before antibody rise / slow response / low peak antibody level (1)",
          "Primary response slow because naive B-cells must be activated / clonal expansion takes time (1)",
          "Secondary: faster rise / higher peak / antibodies persist longer — any two features for 1 mark (1)",
          "Secondary faster/larger because memory cells already exist / respond immediately (1)",
          "Memory cells are long-lived / persist for years (1)",
          "Third exposure: fast, high response / at least as strong as secondary / pathogen cleared before disease (1)",
        ],
        commonError:
          "Students often attribute the secondary response to 'more antibodies already in the blood' — the critical point is that it is memory CELLS (not pre-existing antibodies) that provide the rapid second response, because the antibodies from the primary response have already been broken down.",
        guideRef: "Vaccination and Herd Immunity",
        difficulty: "challenge",
        hints: [
          "Describe three features of the primary response from the graph (timing, peak height, duration).",
          "Do the same for the secondary response and note all three differences.",
          "What cell type is responsible for the difference between primary and secondary responses?",
          "Memory cells live for years — apply that fact to a third exposure two years later.",
        ],
        strategy: "Read graph features precisely, then explain mechanism, then extrapolate",
        solutions: [
          {
            label: "Graph-analysis approach",
            steps: [
              "Identify the lag period (days to first antibody rise) in the primary response.",
              "Identify the peak height — primary is lower, secondary is higher.",
              "Identify the duration — secondary antibody levels are sustained longer.",
              "Explain each difference using clonal selection and memory cell theory.",
              "Extrapolate to 3rd exposure: memory cells survive, so response is as fast or faster.",
            ],
          },
        ],
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "bio-disease-immunity-bank-mcq-1",
        title: "MCQ Practice Paper 1 — Pathogens, Transmission & Defences",
        description: "6 questions covering pathogen types, routes of transmission, and non-specific defences.",
        questions: [
          {
            id: "bio-disease-immunity-bank-mcq1-q01",
            question: "Which type of pathogen is non-cellular and replicates only inside host cells?",
            options: ["Bacterium", "Fungus", "Virus", "Protozoan"],
            answerIndex: 2,
            explanation:
              "Viruses are non-cellular — they consist of nucleic acid surrounded by a protein coat. They lack the metabolic machinery to replicate independently and must hijack a host cell's ribosomes and enzymes. Bacteria, fungi, and protozoa are all cellular organisms.",
            guideRef: "Pathogens and Transmissible Disease",
            difficulty: "warmup",
          },
          {
            id: "bio-disease-immunity-bank-mcq1-q02",
            question: "A child catches chickenpox after playing with an infected classmate who was coughing. What type of transmission is this?",
            options: [
              "Indirect transmission via a vector",
              "Indirect transmission via contaminated food",
              "Direct transmission via droplets",
              "Direct transmission via contact with skin lesions",
            ],
            answerIndex: 2,
            explanation:
              "The varicella-zoster virus (chickenpox) is spread mainly via respiratory droplets produced when an infected person coughs or sneezes. This is direct transmission because the pathogen travels directly from host to host via droplets, without an intermediate vehicle or vector. Contact with skin lesions is another route but is not described here.",
            guideRef: "Pathogens and Transmissible Disease",
            difficulty: "warmup",
          },
          {
            id: "bio-disease-immunity-bank-mcq1-q03",
            question: "Malaria is transmitted by the Anopheles mosquito. In this relationship, the mosquito is best described as a:",
            options: [
              "Host of the disease",
              "Pathogen causing malaria",
              "Vector carrying Plasmodium",
              "Reservoir of the human immune response",
            ],
            answerIndex: 2,
            explanation:
              "The mosquito is the vector — it carries the Plasmodium parasite (the actual pathogen) between human hosts. The mosquito is not the host in the biological disease sense (humans are), and it is certainly not the pathogen. The term 'reservoir' in epidemiology refers to a long-term host of the pathogen, but vector is the most precise IGCSE term here.",
            guideRef: "Pathogens and Transmissible Disease",
            difficulty: "warmup",
          },
          {
            id: "bio-disease-immunity-bank-mcq1-q04",
            question: "Which defence is correctly matched to the pathogen it primarily targets?",
            options: [
              "Stomach acid — airborne viruses inhaled through the mouth",
              "Cilia in the trachea — pathogens in contaminated food",
              "Skin keratin layer — pathogens trying to enter through intact skin",
              "Blood clotting — pathogens already circulating in the bloodstream",
            ],
            answerIndex: 2,
            explanation:
              "Intact skin forms a physical barrier because the outer epidermis is keratinised (tough and waterproof), preventing pathogen entry. Stomach acid targets swallowed pathogens (not primarily airborne viruses), cilia deal with inhaled pathogens (not food-borne ones), and blood clotting seals a wound to prevent entry — it does not target pathogens already in the blood.",
            guideRef: "The Body's Non-Specific Defences",
            difficulty: "core",
            hints: [
              "For each option, ask: does the described defence actually work at the location/route stated?",
              "Keratin makes skin tough and resistant to penetration — it is a physical barrier.",
            ],
          },
          {
            id: "bio-disease-immunity-bank-mcq1-q05",
            question: "A student claims that 'mucus produced in the trachea acts as a chemical defence by killing bacteria.' Evaluate this claim.",
            options: [
              "Correct — mucus contains hydrochloric acid that kills bacteria",
              "Incorrect — mucus is a physical barrier that traps pathogens; killing requires stomach acid or lysozyme",
              "Correct — mucus contains antibodies specifically made against inhaled bacteria",
              "Incorrect — mucus has no defensive role; cilia alone protect the airway",
            ],
            answerIndex: 1,
            explanation:
              "Mucus is primarily a physical (mechanical) barrier — its sticky nature traps pathogens. It does not kill bacteria by chemical means on its own. HCl is found in the stomach, not the trachea. Antibodies are produced by lymphocytes, not secreted into mucus in the trachea (though IgA is present in some secretions, this is not the main mechanism being tested here). Mucus and cilia both have defensive roles — neither alone is sufficient.",
            guideRef: "The Body's Non-Specific Defences",
            difficulty: "core",
            hints: [
              "What is mucus's physical property that is relevant to defence?",
              "Which substance in the respiratory/digestive system acts as a chemical that kills pathogens?",
            ],
          },
          {
            id: "bio-disease-immunity-bank-mcq1-q06",
            question:
              "During an outbreak of cholera, investigators found that all cases lived downstream from a sewage outlet into a river that was the only water source. The MOST effective single public-health measure to stop new cases would be:",
            options: [
              "Vaccinating all residents against cholera immediately",
              "Treating the river water (chlorination and filtration) or providing an alternative safe water source",
              "Distributing antibiotics to everyone in the affected area",
              "Spraying the river with insecticide to kill mosquitoes",
            ],
            answerIndex: 1,
            explanation:
              "Cholera is transmitted by the faecal-oral route via contaminated water (Vibrio cholerae). Treating or replacing the contaminated water supply breaks the chain of transmission at source — the most direct intervention. Vaccination would provide immunity but takes time and does not remove the ongoing source. Antibiotics treat disease but do not prevent new infections from the water. Insecticide targets mosquitoes (vector for malaria/dengue, not cholera).",
            guideRef: "Controlling the Spread of Disease",
            difficulty: "challenge",
            hints: [
              "Identify the route of transmission: faecal-oral via water.",
              "Which intervention breaks the chain of transmission at its source?",
              "Vaccination, antibiotics, and insecticide target different points — none of them removes the contaminated water.",
            ],
            strategy: "Identify transmission route, then target the most upstream break-point",
          },
        ],
      },
      {
        id: "bio-disease-immunity-bank-mcq-2",
        title: "MCQ Practice Paper 2 — Immune Response, Vaccination & Immunity Types",
        description: "6 questions covering phagocytosis, lymphocytes, antibodies, and types of immunity.",
        questions: [
          {
            id: "bio-disease-immunity-bank-mcq2-q01",
            question: "Which sequence correctly describes phagocytosis?",
            options: [
              "Pathogen → antibody binds → lysosome fuses → phagosome forms",
              "Pathogen detected → engulfed into phagosome → lysosomes fuse → pathogen digested",
              "Pathogen → B-cell activated → antibody secreted → pathogen destroyed",
              "Pathogen detected → histamine released → phagocyte dies → clot forms",
            ],
            answerIndex: 1,
            explanation:
              "Phagocytosis: phagocyte detects and approaches pathogen → cell membrane engulfs it into a vacuole (phagosome) → lysosomes fuse with the phagosome → digestive enzymes break down the pathogen. Antibody binding can trigger phagocytosis (opsonisation) but antibodies are not produced by phagocytes. Option C describes the antibody response of B-cells, which is separate.",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "warmup",
          },
          {
            id: "bio-disease-immunity-bank-mcq2-q02",
            question: "An antibody raised against influenza virus does NOT bind to measles virus. The most precise explanation is:",
            options: [
              "Influenza antibodies are made of different amino acids to measles antibodies",
              "The antibody's binding site is complementary to influenza antigen only; measles antigen has a different shape",
              "Measles virus has no antigens on its surface",
              "The antibody cannot survive outside the blood, so it cannot reach measles virus",
            ],
            answerIndex: 1,
            explanation:
              "Antibody specificity arises because the binding site (paratope) has a three-dimensional shape complementary to the specific antigen (epitope) it was raised against. Measles virus surface proteins have different shapes, so the binding site does not fit, preventing binding. Both antibodies are proteins made of amino acids — the difference is shape, not amino acid composition in general. Measles virus does have antigens (surface proteins). Antibodies circulate freely in blood and tissue fluid.",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "core",
            hints: [
              "Think lock-and-key: only a complementary shape fits.",
              "What specific feature of the antibody determines what it can bind?",
            ],
          },
          {
            id: "bio-disease-immunity-bank-mcq2-q03",
            question: "A person contracts measles and recovers. Ten years later they are exposed to measles virus again but do not develop the disease. Which cells are MOST responsible for this protection?",
            options: [
              "Phagocytes that remember the measles virus surface",
              "Memory B-lymphocytes that enable a rapid secondary immune response",
              "Red blood cells that carry measles antibodies to the infection site",
              "Platelets that produce antibodies specific to measles",
            ],
            answerIndex: 1,
            explanation:
              "Memory B-lymphocytes, produced during the primary immune response to the first measles infection, are long-lived. On re-exposure ten years later, they recognise measles antigens and rapidly divide and differentiate into plasma cells, producing high antibody levels quickly — clearing the virus before disease develops. Phagocytes are non-specific and have no immunological memory. Red blood cells do not carry antibodies. Platelets are involved in clotting, not antibody production.",
            guideRef: "Vaccination and Herd Immunity",
            difficulty: "core",
            hints: [
              "Which specific white blood cell type persists long-term after an infection?",
              "What feature of memory cells makes the second response so much faster?",
            ],
          },
          {
            id: "bio-disease-immunity-bank-mcq2-q04",
            question: "A pregnant woman with immunity to rubella passes antibodies to her foetus through the placenta. The newborn has immunity to rubella for the first few months of life. What type of immunity is this for the infant?",
            options: [
              "Artificial active immunity",
              "Natural active immunity",
              "Natural passive immunity",
              "Artificial passive immunity",
            ],
            answerIndex: 2,
            explanation:
              "The infant receives ready-made antibodies from the mother (passive — no own lymphocytes involved) via the placenta (a natural biological process — no medical intervention). Therefore it is natural passive immunity. It is short-lived because the infant's body does not produce these antibodies and they are gradually broken down.",
            guideRef: "Active and Passive Immunity",
            difficulty: "warmup",
          },
          {
            id: "bio-disease-immunity-bank-mcq2-q05",
            question:
              "A new vaccine is tested on two groups: Group A receives the vaccine; Group B receives a placebo. Six months later, both groups are exposed to the pathogen. Group A shows a rapid secondary-type immune response; Group B shows a slow primary response. Which conclusion is BEST supported by these results?",
            options: [
              "Group A had natural immunity before the trial began",
              "The vaccine successfully induced memory cell formation in Group A",
              "Group B's phagocytes were less effective than Group A's",
              "The placebo caused a mild immune response in Group B",
            ],
            answerIndex: 1,
            explanation:
              "Group A shows a rapid, high secondary response on exposure to the real pathogen — this is the hallmark of pre-existing memory cells. Because Group A received the vaccine (and Group B did not), the memory cells must have been generated by the vaccine's primary immune response. We cannot conclude Group A had prior natural immunity (they were assigned randomly), nor that Group B's phagocytes differ, nor that the placebo had immunological effects.",
            guideRef: "Vaccination and Herd Immunity",
            difficulty: "core",
            hints: [
              "What cell type is needed to explain a secondary-type (fast, high) response?",
              "The only difference between the groups is the vaccine — so the vaccine must explain the memory cells.",
            ],
          },
          {
            id: "bio-disease-immunity-bank-mcq2-q06",
            question:
              "HIV destroys helper T-lymphocytes. A patient with advanced HIV infection has almost no helper T-cells. Which consequence is MOST directly explained by this?",
            options: [
              "The patient cannot form blood clots after injury",
              "The patient's stomach acid is too low to kill pathogens",
              "B-lymphocytes cannot be fully activated, so antibody production is severely impaired",
              "Phagocytes stop engulfing pathogens because they require T-cell signals to function",
            ],
            answerIndex: 2,
            explanation:
              "Helper T-cells release cytokines that activate B-lymphocytes (and other immune cells). Without helper T-cells, B-cells cannot be fully stimulated, so antibody production is severely impaired — leaving the patient unable to mount an effective specific immune response against new pathogens or infections. Blood clotting relies on platelets and clotting factors (unrelated to T-cells). Stomach acid production is unrelated to T-cells. While phagocyte activity can be enhanced by T-cell signals, phagocytes retain some basic function independently.",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "challenge",
            hints: [
              "What is the role of helper T-cells in the immune response?",
              "Which cells need T-cell signals to be fully activated?",
              "If B-cells cannot be activated, what is the downstream consequence?",
              "Link impaired antibody production to susceptibility to opportunistic infections.",
            ],
            strategy: "Trace the consequence of removing one component from the immune cascade",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-disease-immunity-bank-qa-1",
        title: "Structured Question Paper 1 — Pathogens, Defences & Phagocytosis",
        description: "4 structured questions on pathogen types, transmission, non-specific defences, and phagocytosis.",
        questions: [
          {
            id: "bio-disease-immunity-bank-qa1-q01",
            question:
              "(a) State what is meant by the term 'pathogen'. [1]\n(b) Give one example each of: (i) a bacterial pathogen and the disease it causes; (ii) a viral pathogen and the disease it causes. [2]\n(c) Explain the difference between direct and indirect transmission of a transmissible disease, giving one example of each. [4]",
            marks: 7,
            modelAnswer:
              "(a) A pathogen is an organism (or agent) that causes disease in another organism (its host).\n\n(b) (i) *Mycobacterium tuberculosis* causes tuberculosis (TB). [Accept: *Salmonella* causing food poisoning / *Vibrio cholerae* causing cholera.]\n(ii) Influenza virus causes influenza (flu). [Accept: HIV causing AIDS / varicella-zoster causing chickenpox.]\n\n(c) **Direct transmission** involves the pathogen passing from one host to another without any intermediate vehicle or organism. Example: respiratory droplets produced by coughing/sneezing carry influenza virus directly to a new host.\n\n**Indirect transmission** involves the pathogen reaching a new host via an intermediate — a contaminated vehicle (food, water, surface) or a vector organism. Example: drinking water contaminated with *Vibrio cholerae* from sewage (indirect via contaminated water); OR: *Anopheles* mosquito carrying *Plasmodium* from an infected person to a new host (indirect via vector).",
            markScheme: [
              "(a) Organism/agent that causes disease (in a host) (1)",
              "(b)(i) Named bacterial pathogen + correct disease (1)",
              "(b)(ii) Named viral pathogen + correct disease (1)",
              "(c) Direct: no intermediate / host-to-host contact / droplets/contact named (1) + example (1)",
              "(c) Indirect: via intermediate vehicle or vector (1) + example (e.g. contaminated water / mosquito vector) (1)",
            ],
            commonError:
              "Many students give 'air' as the transmission route for droplet spread without clarifying that respiratory droplets carry the pathogen — they should distinguish airborne from droplet transmission and be specific.",
            guideRef: "Pathogens and Transmissible Disease",
            difficulty: "core",
            hints: [
              "A pathogen definition should mention it causes disease AND that it is an organism.",
              "For (b), choose organisms you can name confidently with the correct disease.",
              "For (c), the key distinction is whether anything is between the two hosts.",
            ],
          },
          {
            id: "bio-disease-immunity-bank-qa1-q02",
            question:
              "A student cuts their finger on a piece of glass. Describe the events that occur to prevent pathogens from entering the body through this wound, starting from the moment of injury. Include the role of platelets and fibrin in your answer. [5]",
            marks: 5,
            modelAnswer:
              "When the blood vessel is damaged, the wound is exposed and blood begins to flow. Platelets in the blood come into contact with the damaged vessel walls and become activated, aggregating (clumping) at the wound site. The damaged tissue and activated platelets release clotting factors. These clotting factors trigger a cascade: soluble fibrinogen (a plasma protein) is converted into insoluble fibrin threads. The fibrin threads form a mesh that traps red blood cells and more platelets, creating a blood clot. The clot dries and hardens to form a scab, physically sealing the wound and preventing pathogens from entering the underlying tissue while repair takes place beneath it.",
            markScheme: [
              "Platelets aggregate / clump at wound site (1)",
              "Clotting factors released by platelets/damaged tissue (1)",
              "Fibrinogen (soluble) converted to fibrin (insoluble) (1)",
              "Fibrin mesh forms / traps red blood cells / clot forms (1)",
              "Clot/scab seals wound / prevents pathogen entry (1)",
            ],
            commonError:
              "A very common error is confusing fibrinogen and fibrin — students state 'fibrin in the blood is converted to fibrinogen.' The correct direction is fibrinogen (present in plasma) → fibrin (the insoluble clot component).",
            guideRef: "The Body's Non-Specific Defences",
            difficulty: "core",
            hints: [
              "List the events in sequence: vessel damage → platelets → clotting factors → fibrinogen → fibrin → clot → scab.",
              "Remember fibrinogen is the precursor (soluble) and fibrin is the product (insoluble).",
              "End with how the clot physically prevents pathogen entry.",
            ],
            strategy: "Sequence the cascade from damage to sealed wound",
          },
          {
            id: "bio-disease-immunity-bank-qa1-q03",
            question:
              "Describe the process of phagocytosis and explain how it contributes to the body's defence against disease. [5]",
            marks: 5,
            modelAnswer:
              "Phagocytosis is carried out by phagocytes (such as macrophages and neutrophils). When a phagocyte detects a pathogen (often guided by chemical signals or by antibodies bound to the pathogen's surface), it moves toward the pathogen and surrounds it by extending its cell membrane around it. The pathogen is engulfed into a vacuole called a phagosome inside the phagocyte. Lysosomes in the cytoplasm fuse with the phagosome, releasing digestive (hydrolytic) enzymes into it. These enzymes break down and destroy the pathogen.\n\nPhagocytosis contributes to defence because it physically removes and destroys pathogens in a non-specific way (acting against any foreign particle), reducing pathogen numbers in the body. The antigen fragments displayed on the phagocyte surface after digestion can also activate lymphocytes, linking the non-specific response to the specific immune response.",
            markScheme: [
              "Phagocyte detects and moves toward pathogen (1)",
              "Cell membrane engulfs pathogen into a phagosome/vacuole (1)",
              "Lysosomes fuse with phagosome / digestive enzymes released (1)",
              "Pathogen digested/destroyed by enzymes (1)",
              "Non-specific defence / reduces pathogen numbers / OR: antigen presentation links to specific immune response (1)",
            ],
            commonError:
              "Students frequently confuse phagocytes with lymphocytes and state that phagocytes produce antibodies. Phagocytes engulf and destroy; lymphocytes (B-cells) produce antibodies.",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "core",
            hints: [
              "Name the type of white blood cell that performs phagocytosis.",
              "What is the name of the vacuole formed, and which organelle fuses with it?",
              "Explain both the direct role (destroy pathogen) and the wider role (link to specific immunity).",
            ],
          },
          {
            id: "bio-disease-immunity-bank-qa1-q04",
            question:
              "In a region where measles vaccination coverage has dropped to 82%, an outbreak of measles occurred. The herd immunity threshold for measles is approximately 95%. Analyse why the outbreak occurred despite 82% of the population being vaccinated, and suggest two public-health measures — other than vaccination — that could help control the spread of the outbreak. [6]",
            marks: 6,
            modelAnswer:
              "**Why the outbreak occurred:** At 82% vaccination coverage, the population falls below the herd immunity threshold of ~95%. This means a sufficient number of susceptible (unvaccinated or whose immunity has waned) individuals remain in the population for the virus to spread efficiently from person to person. Each infected person is likely to infect more than one other person on average (the effective reproduction number exceeds 1), so the infection can sustain itself and spread through the community. The 18% who are susceptible are not spread evenly — unvaccinated individuals may be geographically or socially clustered (e.g. communities that decline vaccination), making local outbreaks even more likely.\n\n**Two public-health measures:**\n1. **Isolating infected individuals** (quarantine/isolation) — removing infectious cases from the community breaks the chain of transmission, reducing spread.\n2. **Public education and hygiene campaigns** — advising people to cover their mouth when coughing/sneezing and to practise handwashing reduces droplet and contact transmission of the virus.",
            markScheme: [
              "Coverage (82%) below herd immunity threshold (95%) — susceptible individuals remain (1)",
              "Pathogen can spread from susceptible to susceptible / chain of transmission maintained (1)",
              "Unvaccinated individuals may be clustered, increasing local risk (1) [accept any reasonable elaboration on why insufficient coverage fails]",
              "Measure 1: isolation/quarantine of cases — breaks transmission chain (1)",
              "Measure 2: hygiene (covering coughs, handwashing) — reduces droplet/contact spread (1) [accept: contact tracing, school closures, improving ventilation, or other valid measures with explanation]",
              "Explanation of how measure 2 reduces spread (1)",
            ],
            commonError:
              "Students often suggest 'give everyone antibiotics' — antibiotics do not work against viruses (measles is caused by a virus). Always check whether a disease is bacterial or viral before suggesting antibiotic treatment.",
            guideRef: "Vaccination and Herd Immunity",
            difficulty: "challenge",
            hints: [
              "Calculate or compare: 82% vs 95% threshold — what is the consequence of falling short?",
              "Think about what determines whether an outbreak can sustain itself (number of susceptible hosts).",
              "For measures other than vaccination, think about breaking the chain of transmission at different points.",
              "Measles is a virus — antibiotics will not help; think about transmission control instead.",
            ],
            strategy: "Apply herd immunity threshold logic, then target transmission chain",
          },
        ],
      },
      {
        id: "bio-disease-immunity-bank-qa-2",
        title: "Structured Question Paper 2 — Immunity Types, Vaccination & Disease Control",
        description: "4 structured questions on active/passive immunity, vaccination, antibody graphs, and disease control.",
        questions: [
          {
            id: "bio-disease-immunity-bank-qa2-q01",
            question:
              "Distinguish between active immunity and passive immunity. For each type, give one natural and one artificial example. [6]",
            marks: 6,
            modelAnswer:
              "**Active immunity:** The body's own B-lymphocytes are stimulated by antigens to produce antibodies and memory cells. It is long-lasting because memory cells persist.\n- Natural active: acquiring immunity after infection with the pathogen (e.g. recovering from chickenpox).\n- Artificial active: immunity acquired through vaccination (e.g. MMR vaccine).\n\n**Passive immunity:** Ready-made antibodies produced by another organism are introduced into the body. The recipient's own lymphocytes are not involved, so no memory cells are formed. It is short-lived (weeks to months) because the borrowed antibodies are gradually broken down.\n- Natural passive: maternal antibodies crossing the placenta to the foetus, or IgA in breast milk given to a newborn.\n- Artificial passive: injection of antiserum/antibodies (e.g. antivenom for snake bite, or anti-tetanus immunoglobulin).",
            markScheme: [
              "Active: own lymphocytes produce antibodies (1)",
              "Active: memory cells formed / long-lasting (1)",
              "Passive: ready-made antibodies received from outside / no memory cells / short-lived (1)",
              "Natural active example (e.g. recovering from infection) (1)",
              "Artificial active example (e.g. vaccination) (1)",
              "Natural passive example (placenta/breast milk) (1) [artificial passive not required for 6th mark if all others correct]",
            ],
            commonError:
              "Students often say passive immunity is 'weaker' — the correct distinction is duration (short-lived) and mechanism (no memory cells), not strength of the immediate response.",
            guideRef: "Active and Passive Immunity",
            difficulty: "core",
            hints: [
              "The key word is: who produces the antibodies — your own body, or someone/something else?",
              "Active = own immune system; Passive = antibodies from outside.",
              "For each type, think of one that happens naturally and one that involves a medical procedure.",
            ],
          },
          {
            id: "bio-disease-immunity-bank-qa2-q02",
            question:
              "A scientist develops a vaccine against a new bacterial disease. The vaccine contains heat-killed bacteria. Explain, in terms of the immune response, how this vaccine would protect a person who later encounters the live bacterium. [6]",
            marks: 6,
            modelAnswer:
              "The heat-killed bacteria in the vaccine are non-infectious but still carry the bacterial antigens on their surface. When the vaccine is administered, these antigens are recognised as foreign by B-lymphocytes whose surface receptors are complementary in shape to the bacterial antigens. These B-cells are activated and undergo clonal expansion, dividing to produce plasma cells that secrete large quantities of specific antibodies against the bacterial antigens. A primary immune response occurs: antibody levels rise and then fall back as the antigens are cleared. Critically, some activated B-cells differentiate into memory B-cells that persist in the body for years.\n\nWhen the person later encounters the live bacterium, the memory B-cells immediately recognise the same bacterial antigens. They divide rapidly, generating many plasma cells that produce a much larger, faster secondary immune response. Antibody levels rise quickly to a high concentration, binding to the bacterial antigens, agglutinating the bacteria, and flagging them for phagocytosis. The bacteria are destroyed before they can replicate to numbers sufficient to cause disease.",
            markScheme: [
              "Heat-killed bacteria carry same antigens as live bacteria / antigens recognised as foreign (1)",
              "B-lymphocytes with complementary receptors activated (1)",
              "Clonal expansion / plasma cells produce antibodies (primary response) (1)",
              "Memory B-cells formed during primary response (1)",
              "On re-exposure: memory cells recognise antigen / secondary response faster and larger (1)",
              "High antibody levels destroy/neutralise bacteria before disease develops (1)",
            ],
            commonError:
              "Students often say the antibodies from the vaccine stay in the body and protect the person later. The antibodies from the primary response are broken down. It is the MEMORY CELLS (not the antibodies) that persist and provide long-term protection.",
            guideRef: "Vaccination and Herd Immunity",
            difficulty: "core",
            hints: [
              "What does 'heat-killed' mean for infectivity vs. antigen presence?",
              "Which cell type responds to antigens and produces both antibodies AND memory cells?",
              "What happens when memory cells meet the same antigen again?",
              "End your answer by explaining why the person does not get sick.",
            ],
            strategy: "Follow the antigen through primary response → memory cells → secondary response",
          },
          {
            id: "bio-disease-immunity-bank-qa2-q03",
            question:
              "The figure shows antibody concentration in a patient's blood after first receiving a vaccine (week 0) and then receiving a booster dose of the same vaccine (week 12). Describe and explain the differences between the responses to the first and second doses. [5]",
            marks: 5,
            modelAnswer:
              "**First dose (primary response):** Antibody levels begin to rise approximately 1–2 weeks after the vaccine, reach a modest peak, and then gradually decline as the antigen is cleared. This lag and low peak occur because naive B-cells must first recognise the antigen, undergo clonal expansion, and differentiate into plasma cells — all of which take time. Memory B-cells are produced.\n\n**Second dose (secondary response):** After the booster at week 12, antibody levels rise much more quickly (within a few days) and reach a much higher peak than after the first dose. Levels also remain elevated for longer. This is because memory B-cells produced after the first dose already exist in large numbers. They immediately recognise the booster antigen, undergo rapid clonal expansion, and produce far more plasma cells — resulting in a faster, greater antibody response. Additional memory cells are also produced, further strengthening long-term immunity.",
            markScheme: [
              "Primary: slower rise / lag of 1–2 weeks / lower peak antibody level (1)",
              "Primary slow because naive B-cells require time to activate and undergo clonal expansion (1)",
              "Secondary: faster rise / higher peak / sustained longer — any two features (1)",
              "Secondary faster/larger because memory B-cells already present (1)",
              "Memory cells respond immediately on re-exposure / more plasma cells produced (1)",
            ],
            commonError:
              "Students say the booster 'gives more antibodies directly' — the booster is antigen, not antibodies. It is the antigen in the booster that stimulates the memory cells to produce more antibodies.",
            guideRef: "Vaccination and Herd Immunity",
            difficulty: "core",
            hints: [
              "Describe three measurable differences between the two responses (timing, peak, duration).",
              "Then explain each difference using cell biology — which cells are responsible?",
              "The booster contains antigen, not antibodies — how does antigen trigger the secondary response?",
            ],
          },
          {
            id: "bio-disease-immunity-bank-qa2-q04",
            question:
              "Typhoid fever is caused by the bacterium *Salmonella typhi*, which is transmitted through contaminated food and water. In a low-income urban community, typhoid rates are high. A government health team proposes three interventions: (1) providing a safe chlorinated water supply; (2) vaccinating 90% of residents against typhoid; (3) running a food-hygiene education campaign. Evaluate the likely effectiveness of each intervention in reducing typhoid transmission, and justify which single intervention you would prioritise if resources allowed only one. [7]",
            marks: 7,
            modelAnswer:
              "**Intervention 1 — Safe water supply:** Typhoid is transmitted via contaminated water. Chlorination kills *Salmonella typhi* and filtration removes particles. This intervention directly eliminates the primary transmission route and would prevent new infections regardless of immune status. It provides immediate, population-wide protection with no need for individual compliance. It also protects against other waterborne diseases simultaneously. Very high effectiveness.\n\n**Intervention 2 — Vaccination (90% coverage):** The typhoid vaccine stimulates active immunity (antibodies + memory cells) in recipients. At 90% coverage, herd immunity may or may not be achieved depending on the herd immunity threshold for typhoid — if the threshold is below 90%, indirect protection is also provided. However, immunity may wane over time (booster doses required), it does not protect those who decline or cannot receive the vaccine, and it does not address the contaminated water source. Moderate–high effectiveness for vaccinated individuals.\n\n**Intervention 3 — Food-hygiene education:** Teaching proper food handling (cooking, storage, avoiding cross-contamination) reduces faecal-oral transmission via food. Effectiveness depends on behaviour change, which is difficult to sustain and measure. Education does not guarantee compliance, and benefits vary across households. Lower certainty of effectiveness.\n\n**Priority:** Safe water supply (Intervention 1). It removes the source of transmission entirely and automatically protects all residents, regardless of vaccination status or personal behaviour. It addresses the root cause — not just individual risk — and is therefore the most effective single intervention for reducing population-level typhoid transmission.",
            markScheme: [
              "Water supply: eliminates primary transmission route / chlorination kills Salmonella typhi (1)",
              "Water supply: population-wide protection / no individual compliance needed / also prevents other waterborne disease (1)",
              "Vaccination: induces active immunity (antibodies + memory cells) in individuals (1)",
              "Vaccination: limitation — does not remove source / waning immunity / not all individuals protected (1)",
              "Food hygiene: reduces faecal-oral transmission via food handling (1)",
              "Food hygiene: limitation — relies on behaviour change / hard to sustain (1)",
              "Justified prioritisation of water supply with valid reason (e.g. addresses root cause, population-wide, automatic) (1)",
            ],
            commonError:
              "Students sometimes prioritise vaccination because they recognise it as an immune-system intervention. However, vaccination does not remove the source of the pathogen — safe water does. The highest-impact intervention targets the transmission route at source.",
            guideRef: "Controlling the Spread of Disease",
            difficulty: "challenge",
            hints: [
              "For each intervention, ask: does it prevent exposure, reduce susceptibility, or change behaviour?",
              "Which intervention works automatically for the entire population vs. requiring individual action?",
              "Consider the herd immunity threshold — what happens if it is not met?",
              "The 'best' intervention removes the root cause (contaminated water) rather than managing consequences.",
            ],
            strategy: "Evaluate at source vs. at individual level; justify with transmission-chain logic",
          },
        ],
      },
    ],
  },
};
