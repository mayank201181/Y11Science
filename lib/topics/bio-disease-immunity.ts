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
        id: "bio-disease-immunity-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Pathogens and transmission: types of pathogens, routes of spread, vectors, and key definitions.",
        questions: [
          {
            id: "bio-disease-immunity-bm1-01",
            question: "What is a pathogen?",
            options: [
              "A type of white blood cell",
              "A disease-causing organism",
              "A chemical that kills bacteria",
              "A protein that triggers immunity",
            ],
            answerIndex: 1,
            explanation:
              "A pathogen is a disease-causing organism. Pathogens include some bacteria, viruses, fungi and protoctists. White blood cells defend against pathogens but are not themselves pathogens.",
            guideRef: "Pathogens and Transmissible Disease",
            difficulty: "warmup",
          },
          {
            id: "bio-disease-immunity-bm1-02",
            question: "A transmissible disease is one that can be:",
            options: [
              "Inherited from a parent",
              "Caused only by poor diet",
              "Passed from an infected to an uninfected person",
              "Cured without treatment",
            ],
            answerIndex: 2,
            explanation:
              "A transmissible (communicable) disease is caused by a pathogen that can be passed from one host to another. Inherited conditions and dietary deficiency diseases are not transmissible.",
            guideRef: "Pathogens and Transmissible Disease",
            difficulty: "warmup",
          },
          {
            id: "bio-disease-immunity-bm1-03",
            question: "Which pathogen group is non-cellular and can only reproduce inside a host cell?",
            options: ["Bacteria", "Fungi", "Viruses", "Protoctists"],
            answerIndex: 2,
            explanation:
              "Viruses are non-cellular, consisting of genetic material in a protein coat. They have no metabolic machinery of their own, so they can only replicate by taking over a host cell.",
            guideRef: "Pathogens and Transmissible Disease",
            difficulty: "core",
            hints: [
              "Think about which group lacks a cell structure entirely.",
              "Which pathogen cannot reproduce on agar plates without living cells?",
              "Bacteria and fungi are cellular and can grow on nutrient media.",
            ],
          },
          {
            id: "bio-disease-immunity-bm1-04",
            question: "Cholera is spread mainly by which route?",
            options: [
              "Airborne droplets",
              "Contaminated water and food",
              "An insect vector",
              "Direct skin contact",
            ],
            answerIndex: 1,
            explanation:
              "Cholera is caused by a bacterium and is spread by water (and food) contaminated with faeces containing the pathogen. Improving sanitation and water treatment controls its spread.",
            guideRef: "Pathogens and Transmissible Disease",
            difficulty: "core",
            hints: [
              "Cholera affects the digestive system and causes severe diarrhoea.",
              "How does the pathogen leave one host and reach another?",
              "Think about which control measure (clean water) stops it.",
            ],
          },
          {
            id: "bio-disease-immunity-bm1-05",
            question: "Which of these is an example of a vector?",
            options: [
              "A droplet of mucus in the air",
              "A mosquito carrying the malarial parasite",
              "Contaminated drinking water",
              "An open wound on the skin",
            ],
            answerIndex: 1,
            explanation:
              "A vector is an organism that carries a pathogen from one host to another without itself being made ill. The mosquito transmits the malarial parasite (Plasmodium) when it feeds on blood.",
            guideRef: "Pathogens and Transmissible Disease",
            difficulty: "core",
            hints: [
              "A vector is a living organism, not water or air.",
              "Which option transports a pathogen between people?",
              "Malaria is the classic vector-borne disease example.",
            ],
          },
          {
            id: "bio-disease-immunity-bm1-06",
            question: "Influenza is spread by droplets. This is an example of:",
            options: [
              "Direct contact transmission",
              "Vector transmission",
              "Airborne (droplet) transmission",
              "Waterborne transmission",
            ],
            answerIndex: 2,
            explanation:
              "Coughing and sneezing release droplets containing the virus into the air, which are then inhaled by others. This is airborne transmission, controlled by covering the mouth and using tissues.",
            guideRef: "Pathogens and Transmissible Disease",
            difficulty: "core",
            hints: [
              "How does coughing or sneezing release the pathogen?",
              "No second organism carries it, so it is not a vector.",
              "Think about what you inhale.",
            ],
          },
          {
            id: "bio-disease-immunity-bm1-07",
            question: "Which of the following diseases is caused by a fungus?",
            options: ["Cholera", "Athlete's foot", "Malaria", "Influenza"],
            answerIndex: 1,
            explanation:
              "Athlete's foot is a fungal skin infection. Cholera is bacterial, malaria is caused by a protoctist (Plasmodium), and influenza is viral.",
            guideRef: "Pathogens and Transmissible Disease",
            difficulty: "core",
            hints: [
              "Fungal infections often affect skin, warm and moist areas.",
              "Malaria is caused by a protoctist, not a fungus.",
              "Cholera is bacterial.",
            ],
          },
          {
            id: "bio-disease-immunity-bm1-08",
            question: "A disease that is always present at low levels in a population is described as:",
            options: ["Pandemic", "Endemic", "Epidemic", "Sporadic"],
            answerIndex: 1,
            explanation:
              "Endemic means a disease is constantly present in a population or region. An epidemic is a sudden rise in cases; a pandemic spreads across countries or continents.",
            guideRef: "Pathogens and Transmissible Disease",
            difficulty: "challenge",
            hints: [
              "The key idea is 'always present at low levels'.",
              "Pandemic and epidemic describe rapid increases.",
              "Endemic and epidemic differ by whether numbers suddenly rise.",
            ],
            strategy: "Match the scale and timing in the definition to the correct term before choosing.",
          },
          {
            id: "bio-disease-immunity-bm1-09",
            question: "Why can a person be a carrier of a pathogen yet show no symptoms?",
            options: [
              "The pathogen has died inside them",
              "Their immune system controls but does not fully clear the pathogen",
              "They were vaccinated, so the pathogen cannot reproduce",
              "Carriers never actually contain the pathogen",
            ],
            answerIndex: 1,
            explanation:
              "A carrier harbours and can transmit a live pathogen without showing symptoms, often because their immune response keeps numbers low. They remain a source of infection for others.",
            guideRef: "Pathogens and Transmissible Disease",
            difficulty: "challenge",
            hints: [
              "A carrier still spreads the disease, so the pathogen must be alive.",
              "Symptoms depend on pathogen numbers and the host response.",
              "Rule out any option that says the pathogen is absent or dead.",
            ],
            strategy: "Carriers transmit disease, so eliminate any answer implying the pathogen is gone.",
          },
          {
            id: "bio-disease-immunity-bm1-10",
            question: "Which combination correctly pairs a pathogen type with a disease?",
            options: [
              "Virus — cholera",
              "Bacterium — malaria",
              "Protoctist — malaria",
              "Fungus — influenza",
            ],
            answerIndex: 2,
            explanation:
              "Malaria is caused by the protoctist Plasmodium, transmitted by mosquitoes. Cholera is bacterial, influenza is viral, and the other pairings are incorrect.",
            guideRef: "Pathogens and Transmissible Disease",
            difficulty: "challenge",
            hints: [
              "Recall the pathogen type for malaria first.",
              "Cholera is bacterial, so the first option is wrong.",
              "Influenza is viral, not fungal.",
            ],
            strategy: "Eliminate the three pairings you can confidently disprove.",
          },
        ],
      },
      {
        id: "bio-disease-immunity-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Non-specific defences: skin, mucus, cilia, stomach acid, lysozyme and blood clotting.",
        questions: [
          {
            id: "bio-disease-immunity-bm2-01",
            question: "Which structure forms a physical barrier that stops most pathogens entering the body?",
            options: ["The skin", "The liver", "Red blood cells", "The pancreas"],
            answerIndex: 0,
            explanation:
              "The skin is a continuous physical barrier covering the body surface. As long as it is intact, it prevents most pathogens from entering the tissues beneath.",
            guideRef: "The Body's Non-Specific Defences",
            difficulty: "warmup",
          },
          {
            id: "bio-disease-immunity-bm2-02",
            question: "Defences such as skin and stomach acid are described as 'non-specific' because they:",
            options: [
              "Only act against one type of pathogen",
              "Act against many types of pathogen in the same way",
              "Produce specific antibodies",
              "Provide long-term memory",
            ],
            answerIndex: 1,
            explanation:
              "Non-specific defences act against pathogens in general, not against a particular pathogen. Specific defences (antibodies, memory cells) target individual pathogens.",
            guideRef: "The Body's Non-Specific Defences",
            difficulty: "warmup",
          },
          {
            id: "bio-disease-immunity-bm2-03",
            question: "What is the role of mucus in the airways?",
            options: [
              "To digest food",
              "To trap pathogens and dust",
              "To kill pathogens with acid",
              "To produce antibodies",
            ],
            answerIndex: 1,
            explanation:
              "Mucus produced by the lining of the airways traps pathogens and particles. Cilia then sweep the mucus up towards the throat where it is swallowed or removed.",
            guideRef: "The Body's Non-Specific Defences",
            difficulty: "core",
            hints: [
              "Think about why airways feel sticky.",
              "Trapping comes before removal.",
              "Mucus works together with cilia.",
            ],
          },
          {
            id: "bio-disease-immunity-bm2-04",
            question: "Cilia in the trachea help defend the body by:",
            options: [
              "Producing stomach acid",
              "Sweeping mucus and trapped pathogens away from the lungs",
              "Engulfing pathogens by phagocytosis",
              "Clotting the blood at wounds",
            ],
            answerIndex: 1,
            explanation:
              "Cilia are tiny hair-like structures that beat to move mucus, with trapped pathogens, upwards to the throat. This keeps pathogens out of the gas-exchange surfaces of the lungs.",
            guideRef: "The Body's Non-Specific Defences",
            difficulty: "core",
            hints: [
              "Cilia move in a sweeping motion.",
              "They work on the mucus, not directly on pathogens.",
              "Which direction protects the lungs?",
            ],
          },
          {
            id: "bio-disease-immunity-bm2-05",
            question: "How does stomach acid act as a defence against pathogens?",
            options: [
              "It traps pathogens in mucus",
              "Its low pH kills many pathogens in food and drink",
              "It produces antibodies",
              "It seals wounds in the gut wall",
            ],
            answerIndex: 1,
            explanation:
              "The stomach produces hydrochloric acid, giving a very low pH that kills most pathogens swallowed in food and drink before they reach the intestines.",
            guideRef: "The Body's Non-Specific Defences",
            difficulty: "core",
            hints: [
              "The stomach is highly acidic.",
              "Pathogens enter the gut in food and drink.",
              "Low pH denatures pathogen enzymes and proteins.",
            ],
          },
          {
            id: "bio-disease-immunity-bm2-06",
            question: "Lysozyme is an enzyme found in tears and saliva. It defends the body by:",
            options: [
              "Clotting blood",
              "Breaking down the cell walls of bacteria",
              "Trapping viruses in mucus",
              "Producing memory cells",
            ],
            answerIndex: 1,
            explanation:
              "Lysozyme is an antibacterial enzyme that digests the cell walls of bacteria, killing them. It is present in secretions such as tears and saliva.",
            guideRef: "The Body's Non-Specific Defences",
            difficulty: "core",
            hints: [
              "It is an enzyme, so it breaks something down.",
              "Bacteria have cell walls; viruses do not.",
              "Found in tears, it protects the eyes.",
            ],
          },
          {
            id: "bio-disease-immunity-bm2-07",
            question: "When the skin is cut, which process helps prevent pathogens entering?",
            options: [
              "Phagocytosis only",
              "Blood clotting",
              "Antibody production by skin cells",
              "Increased mucus secretion",
            ],
            answerIndex: 1,
            explanation:
              "Blood clotting seals the wound. Platelets and clotting factors form a fibrin mesh and a scab, restoring the physical barrier and preventing pathogen entry.",
            guideRef: "The Body's Non-Specific Defences",
            difficulty: "core",
            hints: [
              "What forms a scab over a cut?",
              "Platelets are involved.",
              "The aim is to restore the skin barrier.",
            ],
          },
          {
            id: "bio-disease-immunity-bm2-08",
            question: "In blood clotting, which protein forms a mesh of fibres that traps blood cells?",
            options: ["Haemoglobin", "Fibrin", "Lysozyme", "Antibody"],
            answerIndex: 1,
            explanation:
              "Soluble fibrinogen is converted into insoluble fibrin, which forms a network of fibres. This traps red blood cells and platelets to form a clot that seals the wound.",
            guideRef: "The Body's Non-Specific Defences",
            difficulty: "challenge",
            hints: [
              "The protein is made from fibrinogen.",
              "Haemoglobin carries oxygen, not clotting.",
              "Think 'fibre-forming' protein.",
            ],
            strategy: "Link the named end-product (fibrin) to the soluble precursor (fibrinogen).",
          },
          {
            id: "bio-disease-immunity-bm2-09",
            question: "A patient has damaged cilia in their airways. Which consequence is most likely?",
            options: [
              "Faster blood clotting",
              "Mucus and trapped pathogens build up, increasing lung infections",
              "Higher stomach acidity",
              "More antibody production",
            ],
            answerIndex: 1,
            explanation:
              "Without working cilia, mucus carrying trapped pathogens is not swept out of the airways. It accumulates, so pathogens reach the lungs more easily and infections become more frequent.",
            guideRef: "The Body's Non-Specific Defences",
            difficulty: "challenge",
            hints: [
              "Cilia normally remove mucus.",
              "If mucus is not moved, where does it stay?",
              "Trapped pathogens then have time to cause infection.",
            ],
            strategy: "Trace the consequence: remove one defence, then follow what the trapped pathogens do next.",
          },
          {
            id: "bio-disease-immunity-bm2-10",
            question: "Which statement best explains why non-specific defences are described as the body's 'first line of defence'?",
            options: [
              "They produce antibodies before pathogens enter",
              "They act immediately and prevent or limit entry of pathogens before the immune response is needed",
              "They are only used after vaccination",
              "They give long-lasting immunity to one disease",
            ],
            answerIndex: 1,
            explanation:
              "Non-specific defences (skin, mucus, acid, clotting) act immediately and continuously to keep pathogens out. The specific immune response is slower and only develops if pathogens get past these barriers.",
            guideRef: "The Body's Non-Specific Defences",
            difficulty: "challenge",
            hints: [
              "Which defences work before any pathogen is recognised?",
              "Antibodies belong to the specific response, not the first line.",
              "Think about timing: immediate versus delayed.",
            ],
            strategy: "Separate 'always-on barriers' from the slower specific immune response.",
          },
        ],
      },
      {
        id: "bio-disease-immunity-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "The immune response: phagocytosis, antigens, antibodies, lymphocytes, memory cells and specificity.",
        questions: [
          {
            id: "bio-disease-immunity-bm3-01",
            question: "Which type of white blood cell engulfs and digests pathogens?",
            options: ["Phagocyte", "Lymphocyte", "Red blood cell", "Platelet"],
            answerIndex: 0,
            explanation:
              "Phagocytes carry out phagocytosis: they engulf pathogens and digest them using enzymes. Lymphocytes produce antibodies instead.",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "warmup",
          },
          {
            id: "bio-disease-immunity-bm3-02",
            question: "An antigen is best described as:",
            options: [
              "A protein made by lymphocytes",
              "A molecule on the surface of a pathogen that the body recognises as foreign",
              "A type of white blood cell",
              "A chemical that clots blood",
            ],
            answerIndex: 1,
            explanation:
              "Antigens are molecules (often proteins) on the surface of a pathogen. The immune system recognises them as foreign and responds by producing complementary antibodies.",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "warmup",
          },
          {
            id: "bio-disease-immunity-bm3-03",
            question: "Antibodies are produced by:",
            options: ["Phagocytes", "Lymphocytes", "Platelets", "Red blood cells"],
            answerIndex: 1,
            explanation:
              "Lymphocytes are the white blood cells that produce antibodies. Each antibody has a shape complementary to a specific antigen.",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "core",
            hints: [
              "Phagocytes engulf rather than produce antibodies.",
              "The cell name starts with 'lymph'.",
              "Antibodies are specific proteins.",
            ],
          },
          {
            id: "bio-disease-immunity-bm3-04",
            question: "Why does a particular antibody only act against one type of pathogen?",
            options: [
              "It is produced very slowly",
              "Its shape is complementary to one specific antigen",
              "It is too large to fit other pathogens",
              "It only works at a certain temperature",
            ],
            answerIndex: 1,
            explanation:
              "Antibodies are specific because their shape is complementary to a particular antigen. An antibody for one antigen will not fit the antigens of a different pathogen.",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "core",
            hints: [
              "Think 'complementary shape', like enzyme and substrate.",
              "Specificity is about fit, not size or speed.",
              "Each pathogen has its own antigens.",
            ],
          },
          {
            id: "bio-disease-immunity-bm3-05",
            question: "How can antibodies help destroy pathogens?",
            options: [
              "By producing stomach acid",
              "By clumping pathogens together (agglutination) so phagocytes engulf them more easily",
              "By forming a scab",
              "By beating like cilia",
            ],
            answerIndex: 1,
            explanation:
              "Antibodies can cause pathogens to clump together (agglutination), making it easier for phagocytes to engulf many at once. Some antibodies also mark pathogens or neutralise toxins.",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "core",
            hints: [
              "Antibodies can bind several pathogens together.",
              "Clumping helps another type of cell do its job.",
              "Phagocytes finish the destruction.",
            ],
          },
          {
            id: "bio-disease-immunity-bm3-06",
            question: "What is the function of memory cells produced after an infection?",
            options: [
              "They engulf pathogens immediately",
              "They allow a faster, stronger antibody response if the same pathogen returns",
              "They produce stomach acid",
              "They form blood clots",
            ],
            answerIndex: 1,
            explanation:
              "Memory cells remain in the body after infection. If the same pathogen invades again, they enable a faster and larger antibody response, so the person often does not become ill.",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "core",
            hints: [
              "Memory is about the second exposure.",
              "Compare the speed of the first and second responses.",
              "This is the basis of long-term immunity.",
            ],
          },
          {
            id: "bio-disease-immunity-bm3-07",
            question: "Place the steps of phagocytosis in the correct order: 1) digestion by enzymes 2) engulfing the pathogen 3) recognition of the pathogen.",
            options: ["1, 2, 3", "3, 2, 1", "2, 3, 1", "3, 1, 2"],
            answerIndex: 1,
            explanation:
              "The phagocyte first recognises the pathogen, then engulfs it into a vacuole, and finally digests it using enzymes. So the order is 3, 2, 1.",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "core",
            hints: [
              "You must find the pathogen before engulfing it.",
              "Enzymes act last, once the pathogen is inside.",
              "Recognition, then engulf, then digest.",
            ],
          },
          {
            id: "bio-disease-immunity-bm3-08",
            question: "On a graph of antibody concentration, the second exposure to a pathogen shows a higher and faster peak than the first. This is because:",
            options: [
              "Phagocytes have multiplied",
              "Memory cells from the first exposure respond rapidly",
              "Stomach acid is stronger",
              "Antibodies last forever after the first exposure",
            ],
            answerIndex: 1,
            explanation:
              "After the first exposure, memory cells remain. On re-exposure they rapidly produce large amounts of the specific antibody, giving the higher, faster secondary response.",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "challenge",
            hints: [
              "Compare what is present before the second exposure.",
              "Antibody levels fall after the first exposure, so they are not permanent.",
              "Which cells 'remember' the antigen?",
            ],
            strategy: "Read the secondary response as evidence that memory cells already exist.",
          },
          {
            id: "bio-disease-immunity-bm3-09",
            question: "A pathogen mutates so that its surface antigens change shape. What is the likely effect on existing immunity?",
            options: [
              "Existing antibodies still fit perfectly",
              "Existing antibodies no longer match the new antigens, so immunity is reduced",
              "The pathogen can no longer cause disease",
              "Phagocytes can no longer engulf any pathogen",
            ],
            answerIndex: 1,
            explanation:
              "Antibodies and memory cells are specific to particular antigens. If the antigens change, the existing antibodies no longer fit, so the person may become ill again — this is why some vaccines must be updated.",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "challenge",
            hints: [
              "Immunity depends on complementary shape.",
              "If the antigen changes, does the antibody still fit?",
              "Think about why the flu vaccine changes each year.",
            ],
            strategy: "Apply the lock-and-key idea: change the lock and the old key fails.",
          },
          {
            id: "bio-disease-immunity-bm3-10",
            question: "Why is the specific immune response slower the first time a pathogen is encountered than during the non-specific response?",
            options: [
              "Non-specific defences must be switched off first",
              "Specific lymphocytes must recognise the antigen and multiply before enough antibodies are made",
              "Antibodies are made by phagocytes, which are rare",
              "Stomach acid blocks the immune response",
            ],
            answerIndex: 1,
            explanation:
              "On first exposure, the few lymphocytes that recognise the antigen must divide and produce antibodies, which takes time. The non-specific defences act immediately, so they respond first.",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "challenge",
            hints: [
              "Few matching lymphocytes exist at first.",
              "They must divide before antibody levels rise.",
              "Compare with the always-ready non-specific defences.",
            ],
            strategy: "Account for the time needed to find, then multiply, the correct lymphocyte.",
          },
        ],
      },
      {
        id: "bio-disease-immunity-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Immunity types, vaccination, herd immunity and disease control.",
        questions: [
          {
            id: "bio-disease-immunity-bm4-01",
            question: "Active immunity is defence against a pathogen due to:",
            options: [
              "Antibodies given directly in an injection",
              "Antibodies the body makes itself after exposure to an antigen",
              "Antibodies passed in breast milk",
              "Antibiotics taken during infection",
            ],
            answerIndex: 1,
            explanation:
              "Active immunity arises when the body's own lymphocytes produce antibodies in response to an antigen, after infection or vaccination. It is usually long-lasting because memory cells are formed.",
            guideRef: "Active and Passive Immunity",
            difficulty: "warmup",
          },
          {
            id: "bio-disease-immunity-bm4-02",
            question: "Passive immunity is provided by:",
            options: [
              "Making your own antibodies after a vaccine",
              "Receiving ready-made antibodies, e.g. through the placenta or breast milk",
              "Memory cells made after infection",
              "Phagocytosis",
            ],
            answerIndex: 1,
            explanation:
              "Passive immunity is short-term protection from receiving ready-made antibodies, such as those passed from mother to baby. No memory cells are formed, so protection is temporary.",
            guideRef: "Active and Passive Immunity",
            difficulty: "warmup",
          },
          {
            id: "bio-disease-immunity-bm4-03",
            question: "What does a vaccine usually contain?",
            options: [
              "A large dose of antibiotics",
              "Weakened, dead or modified pathogens (or their antigens)",
              "Ready-made antibodies only",
              "Memory cells from another person",
            ],
            answerIndex: 1,
            explanation:
              "A vaccine contains a weakened or dead form of the pathogen, or its antigens. These trigger an immune response without causing the disease, so memory cells are formed.",
            guideRef: "Vaccination and Herd Immunity",
            difficulty: "core",
            hints: [
              "A vaccine must not cause the full disease.",
              "It still needs to present antigens.",
              "Antibiotics treat bacterial infection, they are not vaccines.",
            ],
          },
          {
            id: "bio-disease-immunity-bm4-04",
            question: "Which sequence describes how a vaccine produces immunity?",
            options: [
              "Antigen introduced → lymphocytes make antibodies → memory cells formed",
              "Antibodies injected → memory cells formed → antigens destroyed",
              "Antibiotics taken → pathogen killed → antibodies made",
              "Phagocytes injected → pathogens engulfed → immunity",
            ],
            answerIndex: 0,
            explanation:
              "The vaccine introduces antigens, lymphocytes respond by producing antibodies, and memory cells are formed. If the real pathogen later invades, the memory cells give a rapid secondary response.",
            guideRef: "Vaccination and Herd Immunity",
            difficulty: "core",
            hints: [
              "A vaccine gives antigens, not ready-made antibodies.",
              "Memory cells are the key long-term outcome.",
              "The order must start with the antigen.",
            ],
          },
          {
            id: "bio-disease-immunity-bm4-05",
            question: "Why does active immunity from a vaccine usually last longer than passive immunity?",
            options: [
              "Vaccines contain more antibodies",
              "Active immunity produces memory cells; passive immunity does not",
              "Passive immunity uses stronger antibodies",
              "Active immunity uses antibiotics",
            ],
            answerIndex: 1,
            explanation:
              "Active immunity stimulates the body to make memory cells, giving long-term protection. Passive immunity only supplies ready-made antibodies, which are broken down over time, so it is short-lived.",
            guideRef: "Active and Passive Immunity",
            difficulty: "core",
            hints: [
              "What does active immunity make that passive does not?",
              "Ready-made antibodies do not last forever.",
              "Memory cells enable a future response.",
            ],
          },
          {
            id: "bio-disease-immunity-bm4-06",
            question: "Herd immunity protects unvaccinated people because:",
            options: [
              "The vaccine spreads from person to person",
              "When most people are immune, the pathogen cannot spread easily, so unvaccinated people are less likely to meet it",
              "Antibodies are shared between people",
              "Unvaccinated people produce more antibodies",
            ],
            answerIndex: 1,
            explanation:
              "If a high enough proportion of the population is immune, the pathogen cannot easily pass between hosts. This breaks transmission chains and protects those who are not vaccinated.",
            guideRef: "Vaccination and Herd Immunity",
            difficulty: "core",
            hints: [
              "Think about the pathogen's chances of finding a new host.",
              "Vaccines do not spread between people.",
              "Immunity reduces transmission across the whole group.",
            ],
          },
          {
            id: "bio-disease-immunity-bm4-07",
            question: "Which of these is a method of controlling the spread of a disease such as cholera?",
            options: [
              "Providing clean water and good sanitation",
              "Stopping all vaccination",
              "Increasing contact between infected and healthy people",
              "Removing all phagocytes",
            ],
            answerIndex: 0,
            explanation:
              "Cholera spreads through contaminated water, so providing clean drinking water and proper sewage treatment breaks the transmission route and controls the disease.",
            guideRef: "Controlling the Spread of Disease",
            difficulty: "core",
            hints: [
              "Match the control method to how cholera spreads.",
              "Cholera is waterborne.",
              "Breaking the transmission route is the aim.",
            ],
          },
          {
            id: "bio-disease-immunity-bm4-08",
            question: "A disease has a herd immunity threshold of 90%. Vaccination coverage falls from 92% to 80%. What is the most likely outcome?",
            options: [
              "No change, because most people are still immune",
              "Outbreaks become more likely because coverage is now below the threshold",
              "The pathogen becomes harmless",
              "Passive immunity replaces the loss",
            ],
            answerIndex: 1,
            explanation:
              "Once coverage falls below the threshold needed for herd immunity, the pathogen can spread again. The proportion of immune people is too low to break transmission chains, so outbreaks become more likely.",
            guideRef: "Vaccination and Herd Immunity",
            difficulty: "challenge",
            hints: [
              "Compare the coverage with the threshold value.",
              "Below threshold, can transmission be blocked?",
              "Think about what protects the unvaccinated.",
            ],
            strategy: "Compare the actual coverage to the threshold, then reason about transmission.",
          },
          {
            id: "bio-disease-immunity-bm4-09",
            question: "A traveller is bitten by a venomous snake and given an injection of ready-made antibodies (antiserum). This is an example of:",
            options: [
              "Active immunity from vaccination",
              "Passive immunity giving rapid but short-term protection",
              "Herd immunity",
              "Non-specific defence",
            ],
            answerIndex: 1,
            explanation:
              "Injecting ready-made antibodies gives passive immunity. It works immediately, which is vital for fast-acting venom, but provides no memory cells, so protection is short-term.",
            guideRef: "Active and Passive Immunity",
            difficulty: "challenge",
            hints: [
              "Were the antibodies made by the patient or given to them?",
              "Why is speed important after a snake bite?",
              "No memory cells means short-term protection.",
            ],
            strategy: "Identify the source of the antibodies, then classify the immunity type.",
          },
          {
            id: "bio-disease-immunity-bm4-10",
            question: "Why are antibiotics not used to treat viral diseases such as influenza?",
            options: [
              "Viruses are too small to be affected by any drug",
              "Antibiotics act on processes in bacteria, which viruses do not have",
              "Antibiotics only work on fungi",
              "Viruses are killed by stomach acid instead",
            ],
            answerIndex: 1,
            explanation:
              "Antibiotics target features and processes of bacteria, such as cell walls or protein synthesis. Viruses lack these and reproduce inside host cells, so antibiotics have no effect on them.",
            guideRef: "Controlling the Spread of Disease",
            difficulty: "challenge",
            hints: [
              "Antibiotics target bacterial structures.",
              "Do viruses have a cell wall or their own metabolism?",
              "Viruses reproduce inside the body's own cells.",
            ],
            strategy: "Match the drug's target to the pathogen's biology to see why it fails.",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-disease-immunity-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Pathogens, transmission and non-specific defences.",
        questions: [
          {
            id: "bio-disease-immunity-bq1-01",
            question: "Define the term 'pathogen'.",
            marks: 1,
            modelAnswer: "A pathogen is a disease-causing organism.",
            markScheme: ["A disease-causing organism / microorganism that causes disease (1)"],
            commonError:
              "Saying a pathogen is 'a disease' rather than the organism that causes the disease.",
            guideRef: "Pathogens and Transmissible Disease",
            difficulty: "warmup",
          },
          {
            id: "bio-disease-immunity-bq1-02",
            question: "Name the four main types of pathogen.",
            marks: 2,
            modelAnswer: "Bacteria, viruses, fungi and protoctists.",
            markScheme: [
              "Any two of: bacteria / viruses (1)",
              "fungi / protoctists (protozoa) (1)",
            ],
            commonError: "Listing diseases (e.g. cholera) instead of pathogen types.",
            guideRef: "Pathogens and Transmissible Disease",
            difficulty: "warmup",
          },
          {
            id: "bio-disease-immunity-bq1-03",
            question: "Explain what is meant by a transmissible disease and give one example.",
            marks: 3,
            modelAnswer:
              "A transmissible disease is a disease in which the pathogen can be passed from an infected person to an uninfected person. The pathogen leaves one host and enters another. An example is cholera (or influenza).",
            markScheme: [
              "Caused by a pathogen (1)",
              "Can be passed / transmitted from one (infected) host to another (uninfected) host (1)",
              "Correct named example, e.g. cholera / influenza / malaria (1)",
            ],
            commonError: "Giving a non-transmissible example such as scurvy or an inherited disease.",
            guideRef: "Pathogens and Transmissible Disease",
            difficulty: "core",
            hints: [
              "Start with what causes the disease.",
              "Describe how it moves between people.",
              "Choose an example you can justify as transmissible.",
            ],
          },
          {
            id: "bio-disease-immunity-bq1-04",
            question: "Describe two ways in which pathogens can be transmitted from one person to another.",
            marks: 4,
            modelAnswer:
              "By direct contact, for example touching an infected person or contaminated surfaces. By airborne droplets, for example breathing in droplets released when an infected person coughs or sneezes. (Other valid routes include contaminated water or food, and via a vector such as a mosquito.)",
            markScheme: [
              "First route named, e.g. direct contact / droplets / water / food / vector (1)",
              "Explanation of how that route transfers the pathogen (1)",
              "Second different route named (1)",
              "Explanation of how that route transfers the pathogen (1)",
            ],
            commonError: "Naming two routes but not explaining how each one transfers the pathogen.",
            guideRef: "Pathogens and Transmissible Disease",
            difficulty: "core",
            hints: [
              "Routes include contact, droplets, water/food, and vectors.",
              "For each route, say what carries the pathogen.",
              "Make sure the two routes are genuinely different.",
            ],
          },
          {
            id: "bio-disease-immunity-bq1-05",
            question: "Explain how the skin acts as a defence against pathogens.",
            marks: 2,
            modelAnswer:
              "The skin forms a continuous physical barrier over the body surface. As long as it is intact, it prevents most pathogens from entering the tissues beneath.",
            markScheme: [
              "Acts as a physical barrier / covers body surface (1)",
              "Prevents (most) pathogens entering the body (when intact) (1)",
            ],
            commonError: "Saying the skin 'kills' pathogens rather than acting as a barrier.",
            guideRef: "The Body's Non-Specific Defences",
            difficulty: "warmup",
          },
          {
            id: "bio-disease-immunity-bq1-06",
            question: "Describe how mucus and cilia work together to defend the airways.",
            marks: 3,
            modelAnswer:
              "Mucus produced by the lining of the airways traps pathogens and dust particles. Cilia are tiny hair-like structures that beat to sweep the mucus, with the trapped pathogens, upwards to the throat, where it is swallowed or removed. This keeps pathogens out of the lungs.",
            markScheme: [
              "Mucus traps pathogens / particles (1)",
              "Cilia beat / sweep the mucus (1)",
              "Mucus moved towards throat / out of airways so pathogens removed / kept from lungs (1)",
            ],
            commonError: "Confusing the roles, e.g. saying cilia trap pathogens or mucus beats.",
            guideRef: "The Body's Non-Specific Defences",
            difficulty: "core",
            hints: [
              "First say what mucus does.",
              "Then say what cilia do to the mucus.",
              "Finish with where the mucus goes.",
            ],
          },
          {
            id: "bio-disease-immunity-bq1-07",
            question: "Explain how stomach acid helps to protect the body against pathogens.",
            marks: 2,
            modelAnswer:
              "The stomach produces hydrochloric acid, giving a very low pH. This kills many pathogens taken in with food and drink before they can reach and infect the rest of the digestive system.",
            markScheme: [
              "Stomach produces (hydrochloric) acid / has low pH (1)",
              "Kills pathogens in food / drink (before they cause infection) (1)",
            ],
            commonError: "Saying acid 'traps' pathogens, confusing it with mucus.",
            guideRef: "The Body's Non-Specific Defences",
            difficulty: "core",
            hints: [
              "What does the stomach secrete?",
              "Describe the pH it creates.",
              "Link this to killing pathogens in food.",
            ],
          },
          {
            id: "bio-disease-immunity-bq1-08",
            question: "Describe how blood clotting helps to defend the body when the skin is cut.",
            marks: 4,
            modelAnswer:
              "When the skin is cut, platelets and clotting factors trigger the conversion of soluble fibrinogen into insoluble fibrin. The fibrin forms a mesh of fibres that traps blood cells, forming a clot and then a scab. This seals the wound, stops blood loss, and restores the barrier so pathogens cannot enter.",
            markScheme: [
              "Platelets / clotting factors involved (1)",
              "Fibrinogen converted to fibrin (1)",
              "Fibrin forms a mesh / network that traps blood cells to form a clot / scab (1)",
              "Seals the wound so pathogens cannot enter / restores the barrier (1)",
            ],
            commonError: "Describing a scab but not mentioning fibrin or that it blocks pathogen entry.",
            guideRef: "The Body's Non-Specific Defences",
            difficulty: "core",
            hints: [
              "Start with the cells/factors that trigger clotting.",
              "Name the soluble protein and the insoluble one it becomes.",
              "Explain how the clot blocks pathogens.",
            ],
          },
          {
            id: "bio-disease-immunity-bq1-09",
            question: "A person inhales air containing influenza virus but does not become ill. Suggest how their non-specific defences may have prevented infection.",
            marks: 4,
            modelAnswer:
              "Mucus lining the airways may have trapped the virus particles. The cilia then swept the mucus, with the trapped virus, up to the throat, where it was swallowed. In the stomach, the low pH of the acid could kill the virus. Because the virus was trapped and removed or destroyed, it did not reach and infect the lung cells.",
            markScheme: [
              "Mucus traps the virus (1)",
              "Cilia sweep mucus / virus to throat (1)",
              "Swallowed / stomach acid (low pH) kills it (1)",
              "Virus removed or destroyed before infecting cells / reaching lungs (1)",
            ],
            commonError: "Describing antibodies or phagocytosis, which are specific/immune responses, not non-specific defences.",
            guideRef: "The Body's Non-Specific Defences",
            difficulty: "challenge",
            hints: [
              "Stick to non-specific defences only.",
              "Trace the virus from airway to stomach.",
              "Explain why it never reaches the lungs.",
            ],
            strategy: "Follow the inhaled virus step by step through each barrier it meets.",
          },
          {
            id: "bio-disease-immunity-bq1-10",
            question: "Two villages get their drinking water from the same river. Village A treats its sewage and water; Village B does not. Cholera cases are far higher in Village B. Explain these results.",
            marks: 5,
            modelAnswer:
              "Cholera is caused by a bacterium spread by water contaminated with faeces from infected people. In Village B, untreated sewage enters the river, so the drinking water contains the pathogen; people drink it and become infected, and infected people add more pathogen to the water, creating a transmission cycle. In Village A, treating sewage removes faecal contamination and treating the water kills or removes the pathogen, so the transmission route is broken and far fewer people are infected.",
            markScheme: [
              "Cholera is caused by a bacterium / pathogen spread by contaminated water (1)",
              "Untreated sewage in Village B contaminates the drinking water with the pathogen (1)",
              "People drink contaminated water and become infected (1)",
              "Treating water/sewage in Village A removes or kills the pathogen (1)",
              "Transmission route broken in A, so fewer cases (clear comparison) (1)",
            ],
            commonError: "Describing the symptoms of cholera instead of explaining the difference in transmission between the villages.",
            guideRef: "Controlling the Spread of Disease",
            difficulty: "challenge",
            hints: [
              "State how cholera is transmitted.",
              "Explain what happens in the untreated village.",
              "Explain how treatment breaks the cycle in the other village.",
            ],
            strategy: "Build a transmission chain, then show which step each village's treatment removes.",
            solutions: [
              {
                label: "Compare-and-explain approach",
                steps: [
                  "Identify the pathogen and its transmission route (waterborne bacterium).",
                  "Describe the situation in Village B: untreated sewage contaminates water, infection spreads.",
                  "Describe Village A: treatment removes/kills the pathogen.",
                  "Conclude by linking the broken transmission route to fewer cases.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "bio-disease-immunity-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "The immune response and phagocytosis.",
        questions: [
          {
            id: "bio-disease-immunity-bq2-01",
            question: "Name the type of white blood cell that carries out phagocytosis.",
            marks: 1,
            modelAnswer: "A phagocyte.",
            markScheme: ["Phagocyte (1)"],
            commonError: "Writing 'lymphocyte', which makes antibodies rather than engulfing pathogens.",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "warmup",
          },
          {
            id: "bio-disease-immunity-bq2-02",
            question: "What is an antigen?",
            marks: 2,
            modelAnswer:
              "An antigen is a molecule, usually a protein, on the surface of a pathogen that the body recognises as foreign and that triggers an immune response.",
            markScheme: [
              "A molecule / protein on the surface of a pathogen (1)",
              "Recognised as foreign / triggers an immune response (antibody production) (1)",
            ],
            commonError: "Confusing antigen with antibody.",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "warmup",
          },
          {
            id: "bio-disease-immunity-bq2-03",
            question: "Describe the process of phagocytosis.",
            marks: 3,
            modelAnswer:
              "The phagocyte recognises the pathogen and moves towards it. It engulfs the pathogen, taking it into a vacuole inside the cell. Enzymes are then released to digest and destroy the pathogen.",
            markScheme: [
              "Phagocyte recognises / moves towards / surrounds the pathogen (1)",
              "Engulfs the pathogen (into a vacuole) (1)",
              "Enzymes digest / break down / destroy the pathogen (1)",
            ],
            commonError: "Saying the phagocyte 'makes antibodies' — that is the lymphocyte's role.",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "core",
            hints: [
              "Start with recognition.",
              "Then describe engulfing.",
              "Finish with enzyme digestion.",
            ],
          },
          {
            id: "bio-disease-immunity-bq2-04",
            question: "Explain why each type of antibody only works against one type of pathogen.",
            marks: 3,
            modelAnswer:
              "Antibodies are specific: each antibody has a shape that is complementary to a particular antigen on the surface of one pathogen. The antibody binds to that antigen but does not fit the antigens of other pathogens, so it acts against only one type.",
            markScheme: [
              "Antibody has a specific shape (1)",
              "Complementary to / fits a particular antigen (1)",
              "Will not fit / bind antigens of other pathogens (1)",
            ],
            commonError: "Explaining specificity by size or speed rather than complementary shape.",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "core",
            hints: [
              "Think enzyme-and-substrate style fit.",
              "The key word is complementary.",
              "Explain why other antigens are not affected.",
            ],
          },
          {
            id: "bio-disease-immunity-bq2-05",
            question: "Describe two ways in which antibodies help to destroy pathogens.",
            marks: 2,
            modelAnswer:
              "Antibodies can cause pathogens to clump together (agglutination) so that phagocytes can engulf many at once. They can also bind to and neutralise toxins released by pathogens, or mark pathogens so phagocytes destroy them.",
            markScheme: [
              "Cause pathogens to clump / agglutinate (so phagocytes engulf them) (1)",
              "Neutralise toxins / mark pathogens for phagocytes (1)",
            ],
            commonError: "Saying antibodies 'eat' pathogens — that is phagocytosis.",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "core",
            hints: [
              "One way involves clumping pathogens.",
              "Another involves toxins.",
              "Link antibody action to the phagocyte's job.",
            ],
          },
          {
            id: "bio-disease-immunity-bq2-06",
            question: "Explain the role of memory cells in protecting the body against future infection.",
            marks: 3,
            modelAnswer:
              "After an infection, memory cells remain in the body for a long time. If the same pathogen invades again, the memory cells recognise its antigens and respond very quickly, producing large amounts of the specific antibody. This faster, stronger response usually destroys the pathogen before symptoms develop, giving immunity.",
            markScheme: [
              "Memory cells remain in the body (after infection) (1)",
              "On re-infection by the same pathogen, they respond faster / produce more antibodies (1)",
              "Pathogen destroyed before causing illness / person is immune (1)",
            ],
            commonError: "Saying memory cells engulf pathogens, confusing them with phagocytes.",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "core",
            hints: [
              "State how long memory cells last.",
              "Describe the second response.",
              "Link this to immunity.",
            ],
          },
          {
            id: "bio-disease-immunity-bq2-07",
            question: "Compare the role of phagocytes and lymphocytes in defending the body against pathogens.",
            marks: 4,
            modelAnswer:
              "Phagocytes engulf and digest pathogens non-specifically, attacking many types in the same way. Lymphocytes act specifically: they produce antibodies that match the antigens of a particular pathogen, and they form memory cells for long-term immunity. So phagocytes give a fast, general response while lymphocytes give a specific, longer-lasting one.",
            markScheme: [
              "Phagocytes engulf / digest pathogens (1)",
              "Phagocytes act non-specifically / on many pathogens (1)",
              "Lymphocytes produce specific antibodies (1)",
              "Lymphocytes form memory cells / give long-term immunity (1)",
            ],
            commonError: "Treating the two cell types as if they do the same job.",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "core",
            hints: [
              "Describe what phagocytes do.",
              "Describe what lymphocytes do.",
              "Highlight specific vs non-specific.",
            ],
          },
          {
            id: "bio-disease-immunity-bq2-08",
            question: "Explain why the body's response to a pathogen is slower the first time it is encountered than on later encounters.",
            marks: 4,
            modelAnswer:
              "On first exposure, only a few lymphocytes can recognise the pathogen's antigens. These must first divide to increase in number and then produce antibodies, which takes several days, so the response is slow. After this, memory cells remain. On a second encounter, the memory cells recognise the antigen immediately and rapidly produce large amounts of antibody, so the response is much faster.",
            markScheme: [
              "First time: few matching lymphocytes present (1)",
              "They must divide / multiply and start producing antibodies, which takes time (1)",
              "Memory cells are formed and remain (1)",
              "Second time: memory cells respond quickly / make more antibody faster (1)",
            ],
            commonError: "Stating the second response is faster without explaining why (memory cells).",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "challenge",
            hints: [
              "Think about how many matching lymphocytes exist at first.",
              "What must they do before antibodies appear?",
              "Explain how memory cells change the second response.",
            ],
            strategy: "Contrast the first and second responses point by point.",
          },
          {
            id: "bio-disease-immunity-bq2-09",
            question: "A pathogen mutates so that its surface antigens change. Explain why a person who was previously immune may now become ill.",
            marks: 4,
            modelAnswer:
              "Immunity depends on antibodies and memory cells that are specific to the original antigens. When the antigens change shape, the existing antibodies and memory cells no longer fit or recognise them. The body must mount a new primary response, which is slow, so the pathogen can multiply and cause illness before enough new antibodies are made.",
            markScheme: [
              "Existing antibodies / memory cells are specific to the original antigens (1)",
              "Changed antigens no longer match / are not recognised (1)",
              "A new (slow) primary response is needed (1)",
              "Pathogen multiplies and causes illness before enough antibody is made (1)",
            ],
            commonError: "Saying the immune system 'forgets' rather than the antigens no longer matching.",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "challenge",
            hints: [
              "Recall what immunity is specific to.",
              "Explain why the old antibodies fail.",
              "Link the slow new response to becoming ill.",
            ],
            strategy: "Use the complementary-shape idea, then connect it to response speed.",
          },
          {
            id: "bio-disease-immunity-bq2-10",
            question: "The graph of antibody concentration after a first and second exposure to the same antigen shows a small, slow rise after the first exposure and a large, rapid rise after the second. Explain the shape of this graph.",
            marks: 5,
            modelAnswer:
              "After the first exposure, only a few lymphocytes recognise the antigen; they must divide and then produce antibodies, so the rise is small and slow. Antibody levels later fall. Memory cells, however, remain in the body. On the second exposure to the same antigen, the memory cells recognise it immediately and rapidly divide and produce antibodies, so the concentration rises much faster and to a higher level. This secondary response usually destroys the pathogen before illness develops.",
            markScheme: [
              "First exposure: few lymphocytes recognise antigen (1)",
              "They divide and make antibodies, so rise is slow / small (1)",
              "Memory cells are formed and remain (1)",
              "Second exposure: memory cells respond immediately / divide rapidly (1)",
              "So antibody rise is faster and higher / pathogen destroyed before illness (1)",
            ],
            commonError: "Describing the graph shape without explaining it in terms of lymphocytes and memory cells.",
            guideRef: "The Immune Response: Phagocytosis and Lymphocytes",
            difficulty: "challenge",
            hints: [
              "Explain the first (primary) response first.",
              "Note that memory cells persist.",
              "Then explain the second (secondary) response.",
            ],
            strategy: "Annotate the graph mentally: primary curve, then secondary curve, explaining each in cell terms.",
            solutions: [
              {
                label: "Two-stage explanation",
                steps: [
                  "Explain the small, slow primary response (few lymphocytes, must divide).",
                  "Note that memory cells are produced and remain.",
                  "Explain the large, fast secondary response from memory cells.",
                  "Conclude with the protective outcome.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "bio-disease-immunity-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Active and passive immunity and vaccination.",
        questions: [
          {
            id: "bio-disease-immunity-bq3-01",
            question: "State what is meant by 'active immunity'.",
            marks: 1,
            modelAnswer:
              "Active immunity is defence against a pathogen by the body producing its own antibodies after exposure to an antigen.",
            markScheme: ["Body produces / makes its own antibodies (after exposure to an antigen) (1)"],
            commonError: "Describing receiving ready-made antibodies, which is passive immunity.",
            guideRef: "Active and Passive Immunity",
            difficulty: "warmup",
          },
          {
            id: "bio-disease-immunity-bq3-02",
            question: "State one way a baby can gain passive immunity.",
            marks: 1,
            modelAnswer:
              "By receiving antibodies from its mother through the placenta before birth (or through breast milk after birth).",
            markScheme: ["Antibodies passed from mother via placenta / breast milk (1)"],
            commonError: "Saying the baby makes its own antibodies, which would be active immunity.",
            guideRef: "Active and Passive Immunity",
            difficulty: "warmup",
          },
          {
            id: "bio-disease-immunity-bq3-03",
            question: "Distinguish between active and passive immunity.",
            marks: 4,
            modelAnswer:
              "In active immunity the body makes its own antibodies in response to an antigen, and memory cells are formed, so it is long-lasting. In passive immunity ready-made antibodies are received from another source, no memory cells are formed, and it is only short-term.",
            markScheme: [
              "Active: body makes its own antibodies (1)",
              "Active: memory cells formed / long-lasting (1)",
              "Passive: ready-made antibodies received (1)",
              "Passive: no memory cells / short-term (1)",
            ],
            commonError: "Only describing one type, or mixing up which type produces memory cells.",
            guideRef: "Active and Passive Immunity",
            difficulty: "core",
            hints: [
              "For each type say where the antibodies come from.",
              "State whether memory cells are formed.",
              "Comment on how long protection lasts.",
            ],
          },
          {
            id: "bio-disease-immunity-bq3-04",
            question: "State what a vaccine contains.",
            marks: 2,
            modelAnswer:
              "A vaccine contains a weakened, dead or modified form of the pathogen, or its antigens.",
            markScheme: [
              "Weakened / dead / inactivated pathogen (1)",
              "or its antigens (accept harmless form that does not cause disease) (1)",
            ],
            commonError: "Saying a vaccine contains antibiotics or ready-made antibodies.",
            guideRef: "Vaccination and Herd Immunity",
            difficulty: "core",
            hints: [
              "It must not cause the disease.",
              "It still needs to show antigens.",
              "Think 'weakened/dead pathogen'.",
            ],
          },
          {
            id: "bio-disease-immunity-bq3-05",
            question: "Describe how a vaccine produces immunity to a disease.",
            marks: 4,
            modelAnswer:
              "The vaccine introduces antigens (in the weakened or dead pathogen) into the body. Lymphocytes recognise these antigens and produce specific antibodies. Memory cells are also formed and remain in the body. If the real pathogen later enters, the memory cells respond rapidly, producing antibodies quickly so the person does not become ill.",
            markScheme: [
              "Vaccine introduces antigens (1)",
              "Lymphocytes produce specific antibodies (1)",
              "Memory cells are formed / remain (1)",
              "On later infection, rapid (secondary) response / person does not get ill (1)",
            ],
            commonError: "Saying the vaccine gives antibodies directly rather than triggering their production.",
            guideRef: "Vaccination and Herd Immunity",
            difficulty: "core",
            hints: [
              "Start with what the vaccine introduces.",
              "Describe the lymphocyte response.",
              "Explain what happens on later infection.",
            ],
          },
          {
            id: "bio-disease-immunity-bq3-06",
            question: "Explain why active immunity usually lasts longer than passive immunity.",
            marks: 3,
            modelAnswer:
              "In active immunity, the body makes its own antibodies and also forms memory cells. The memory cells remain in the body and can produce antibodies again quickly if the pathogen returns, so protection is long-lasting. In passive immunity, only ready-made antibodies are supplied; no memory cells are formed, and the antibodies are gradually broken down, so protection is short-lived.",
            markScheme: [
              "Active immunity forms memory cells (1)",
              "Memory cells remain / give a future response, so long-lasting (1)",
              "Passive immunity: no memory cells / antibodies broken down, so short-term (1)",
            ],
            commonError: "Stating that passive immunity is short-term without explaining the lack of memory cells.",
            guideRef: "Active and Passive Immunity",
            difficulty: "core",
            hints: [
              "Identify what active immunity produces that passive does not.",
              "Explain what memory cells allow later.",
              "Explain what happens to ready-made antibodies over time.",
            ],
          },
          {
            id: "bio-disease-immunity-bq3-07",
            question: "A newborn baby is given antibodies through its mother's breast milk. Explain why this protection is only temporary.",
            marks: 3,
            modelAnswer:
              "The baby receives ready-made antibodies rather than making its own. Because the baby's own lymphocytes are not stimulated, no memory cells are formed. The supplied antibodies are gradually broken down in the body and are not replaced, so the protection lasts only a short time.",
            markScheme: [
              "Antibodies are ready-made / not made by the baby (1)",
              "No memory cells are formed (1)",
              "Antibodies are broken down / not replaced, so protection is short-term (1)",
            ],
            commonError: "Saying breast milk antibodies last for life.",
            guideRef: "Active and Passive Immunity",
            difficulty: "challenge",
            hints: [
              "Where did the antibodies come from?",
              "Were any memory cells made?",
              "What happens to antibodies over time?",
            ],
            strategy: "Tie 'temporary' directly to no memory cells and antibody breakdown.",
          },
          {
            id: "bio-disease-immunity-bq3-08",
            question: "Explain why a person who is vaccinated against a disease usually does not become ill when later exposed to the pathogen.",
            marks: 4,
            modelAnswer:
              "The vaccine causes the body to produce antibodies and, importantly, memory cells against the pathogen's antigens. When the real pathogen later enters, the memory cells recognise its antigens immediately and rapidly produce large amounts of specific antibody. This secondary response destroys the pathogen before it can multiply enough to cause symptoms, so the person stays well.",
            markScheme: [
              "Memory cells were formed by the vaccine (1)",
              "They recognise the antigen on re-exposure (1)",
              "Rapid / large secondary antibody response (1)",
              "Pathogen destroyed before causing illness (1)",
            ],
            commonError: "Describing the primary response again instead of the rapid secondary response.",
            guideRef: "Vaccination and Herd Immunity",
            difficulty: "challenge",
            hints: [
              "Recall what the vaccine left behind.",
              "Describe the speed of the second response.",
              "Link this to not becoming ill.",
            ],
            strategy: "Focus on the secondary response driven by memory cells.",
          },
          {
            id: "bio-disease-immunity-bq3-09",
            question: "A snake-bite victim is given an injection of ready-made antibodies (antiserum) rather than a vaccine. Explain why this treatment is used in this situation.",
            marks: 4,
            modelAnswer:
              "Snake venom acts very quickly, so the person needs immediate protection. A vaccine would only stimulate the body to make its own antibodies, which takes several days — too slow to help. The injected ready-made antibodies act at once to neutralise the venom. This is passive immunity: it is fast but short-term, which is acceptable because protection is only needed against this single dose of venom.",
            markScheme: [
              "Venom acts quickly / immediate protection needed (1)",
              "A vaccine / making own antibodies would be too slow (1)",
              "Ready-made antibodies act immediately to neutralise venom (1)",
              "This is passive immunity / short-term protection, which is sufficient here (1)",
            ],
            commonError: "Saying the antiserum gives long-term immunity to snake venom.",
            guideRef: "Active and Passive Immunity",
            difficulty: "challenge",
            hints: [
              "Why does speed matter with venom?",
              "Why would a vaccine be too slow?",
              "Classify the type of immunity given.",
            ],
            strategy: "Weigh speed against duration to justify passive immunity here.",
          },
          {
            id: "bio-disease-immunity-bq3-10",
            question: "The graph shows antibody concentration in two people exposed to the same pathogen: Person X had been vaccinated; Person Y had not. Person X shows a faster, larger rise in antibodies. Explain this difference.",
            marks: 5,
            modelAnswer:
              "Person X was vaccinated, so they already have memory cells specific to the pathogen's antigens. When exposed, these memory cells recognise the antigens immediately and rapidly produce large amounts of antibody — a secondary response — giving the faster, larger rise. Person Y has never met the antigen, so only a few lymphocytes recognise it; these must divide and then begin producing antibody, which is slow and gives a smaller rise (a primary response). As a result, Person X clears the pathogen quickly and is far less likely to become ill.",
            markScheme: [
              "Person X already has memory cells (from the vaccine) (1)",
              "Memory cells recognise antigen and respond rapidly (1)",
              "Secondary response: faster / larger antibody production (1)",
              "Person Y has no memory cells, so few lymphocytes must divide first (1)",
              "Person Y's primary response is slow / small (clear comparison) (1)",
            ],
            commonError: "Explaining only one person's response instead of comparing both.",
            guideRef: "Vaccination and Herd Immunity",
            difficulty: "challenge",
            hints: [
              "What does vaccination leave behind in Person X?",
              "Compare with Person Y who has no memory cells.",
              "Name the primary and secondary responses.",
            ],
            strategy: "Explain X (secondary response) and Y (primary response) side by side.",
            solutions: [
              {
                label: "Comparison approach",
                steps: [
                  "State that Person X has memory cells from vaccination.",
                  "Explain the rapid secondary response in Person X.",
                  "State that Person Y has no memory cells.",
                  "Explain the slow primary response in Person Y and conclude with the comparison.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "bio-disease-immunity-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Herd immunity, disease control and integrated application.",
        questions: [
          {
            id: "bio-disease-immunity-bq4-01",
            question: "State what is meant by 'herd immunity'.",
            marks: 2,
            modelAnswer:
              "Herd immunity is when a large enough proportion of a population is immune to a disease that the pathogen cannot spread easily, which protects the unimmunised individuals too.",
            markScheme: [
              "A large proportion / most of the population is immune (1)",
              "Pathogen cannot spread easily, so unimmunised people are also protected (1)",
            ],
            commonError: "Saying everyone must be immune, or that immunity spreads between people.",
            guideRef: "Vaccination and Herd Immunity",
            difficulty: "warmup",
          },
          {
            id: "bio-disease-immunity-bq4-02",
            question: "State two methods used to control the spread of transmissible diseases.",
            marks: 2,
            modelAnswer:
              "Examples include: providing clean water and good sanitation; vaccination; isolating infected people; good personal hygiene such as hand-washing; and controlling vectors such as mosquitoes.",
            markScheme: [
              "Any one valid method, e.g. clean water / sanitation / vaccination (1)",
              "A second different valid method, e.g. hygiene / isolation / vector control (1)",
            ],
            commonError: "Giving two versions of the same method (e.g. 'wash hands' and 'use soap').",
            guideRef: "Controlling the Spread of Disease",
            difficulty: "warmup",
          },
          {
            id: "bio-disease-immunity-bq4-03",
            question: "Explain how vaccinating a large proportion of a population can protect people who have not been vaccinated.",
            marks: 3,
            modelAnswer:
              "When most people are vaccinated, there are few susceptible hosts for the pathogen to infect. The pathogen cannot pass easily from person to person, so transmission chains are broken. This means an unvaccinated person is much less likely to come into contact with the pathogen, so they are protected — this is herd immunity.",
            markScheme: [
              "Most people are immune, so few hosts to infect (1)",
              "Pathogen cannot spread easily / transmission chains broken (1)",
              "Unvaccinated people unlikely to meet the pathogen, so are protected (1)",
            ],
            commonError: "Saying the vaccine itself spreads to unvaccinated people.",
            guideRef: "Vaccination and Herd Immunity",
            difficulty: "core",
            hints: [
              "Think about the pathogen's supply of hosts.",
              "What happens to transmission when most are immune?",
              "Link this to the unvaccinated person's risk.",
            ],
          },
          {
            id: "bio-disease-immunity-bq4-04",
            question: "Explain how providing clean water and proper sanitation helps control diseases such as cholera.",
            marks: 3,
            modelAnswer:
              "Cholera is spread by water contaminated with faeces containing the pathogen. Proper sanitation keeps sewage away from drinking water, and treating water kills or removes the pathogen. This breaks the transmission route, so people do not take in the pathogen and far fewer become infected.",
            markScheme: [
              "Cholera spread by contaminated water / faeces (1)",
              "Sanitation / water treatment removes or kills the pathogen (1)",
              "Transmission route broken, so fewer infections (1)",
            ],
            commonError: "Describing cholera symptoms instead of how the control method breaks transmission.",
            guideRef: "Controlling the Spread of Disease",
            difficulty: "core",
            hints: [
              "State how cholera spreads.",
              "Explain what sanitation/treatment does to the pathogen.",
              "Link this to fewer cases.",
            ],
          },
          {
            id: "bio-disease-immunity-bq4-05",
            question: "Explain how good personal hygiene, such as regular hand-washing, helps reduce the spread of disease.",
            marks: 3,
            modelAnswer:
              "Pathogens can be present on the hands after contact with contaminated surfaces, food or other people. Washing the hands removes or kills these pathogens, so they are not transferred to the mouth, food or other people. This breaks the transmission route and reduces the chance of infection.",
            markScheme: [
              "Pathogens are carried on the hands (from surfaces / people / food) (1)",
              "Washing removes / kills the pathogens (1)",
              "Stops transfer to mouth / food / others, breaking transmission (1)",
            ],
            commonError: "Saying hand-washing 'kills the disease' without explaining transmission.",
            guideRef: "Controlling the Spread of Disease",
            difficulty: "core",
            hints: [
              "Where do pathogens come from on the hands?",
              "What does washing do to them?",
              "Explain how this stops spread.",
            ],
          },
          {
            id: "bio-disease-immunity-bq4-06",
            question: "Explain why antibiotics are effective against bacterial diseases but not against viral diseases.",
            marks: 4,
            modelAnswer:
              "Antibiotics work by targeting structures or processes found in bacteria, such as the bacterial cell wall or the way bacteria carry out protein synthesis, which kills the bacteria or stops them reproducing. Viruses do not have these structures and reproduce inside the body's own cells using the host cell's machinery. Antibiotics therefore have no target in viruses and cannot harm them without harming host cells, so they do not work against viral diseases.",
            markScheme: [
              "Antibiotics target bacterial structures / processes (e.g. cell wall, protein synthesis) (1)",
              "This kills bacteria / stops them reproducing (1)",
              "Viruses lack these structures (1)",
              "Viruses reproduce inside host cells, so antibiotics have no effect on them (1)",
            ],
            commonError: "Saying viruses are 'immune' to antibiotics or that they are simply too small.",
            guideRef: "Controlling the Spread of Disease",
            difficulty: "core",
            hints: [
              "What do antibiotics actually target?",
              "Do viruses have those structures?",
              "Where do viruses reproduce?",
            ],
          },
          {
            id: "bio-disease-immunity-bq4-07",
            question: "A disease needs 85% of a population to be immune for herd immunity. In one town, vaccination coverage falls from 90% to 70%. Explain what is likely to happen to the number of cases and why.",
            marks: 4,
            modelAnswer:
              "When coverage was 90%, it was above the 85% threshold, so herd immunity was maintained and the pathogen could not spread easily. After coverage falls to 70%, it is now below the threshold. There are more susceptible people, so the pathogen can pass between them and transmission chains are no longer broken. The number of cases is therefore likely to rise, and outbreaks may occur, affecting both unvaccinated and some vaccinated people.",
            markScheme: [
              "90% was above the 85% threshold, so herd immunity maintained (1)",
              "70% is below the threshold (1)",
              "More susceptible people / pathogen can now spread between them (1)",
              "Number of cases rises / outbreaks likely (1)",
            ],
            commonError: "Ignoring the threshold value and just saying 'fewer people are immune'.",
            guideRef: "Vaccination and Herd Immunity",
            difficulty: "challenge",
            hints: [
              "Compare each coverage figure with the threshold.",
              "Identify whether the threshold is met before and after.",
              "Reason about transmission once below the threshold.",
            ],
            strategy: "Compare coverage to the threshold at each stage, then reason about transmission.",
            solutions: [
              {
                label: "Threshold comparison",
                steps: [
                  "Compare 90% with the 85% threshold: above, herd immunity intact.",
                  "Compare 70% with 85%: below, herd immunity lost.",
                  "Explain that more susceptible hosts allow spread.",
                  "Conclude that cases rise / outbreaks become likely.",
                ],
              },
            ],
          },
          {
            id: "bio-disease-immunity-bq4-08",
            question: "Malaria is caused by a protoctist transmitted by mosquitoes. Suggest and explain two methods that could be used to control the spread of malaria.",
            marks: 4,
            modelAnswer:
              "Using insecticide-treated bed nets stops mosquitoes biting people at night, so the pathogen is not passed from mosquito to person, breaking the transmission route. Removing or spraying areas of standing water destroys mosquito breeding sites, reducing the mosquito (vector) population so there are fewer mosquitoes to carry and transmit the parasite. Both methods break the link between the vector and humans.",
            markScheme: [
              "Method 1 named, e.g. bed nets / insecticide (1)",
              "Explanation: stops mosquito biting / breaks vector-to-human transmission (1)",
              "Method 2 named, e.g. removing standing water / draining breeding sites (1)",
              "Explanation: reduces mosquito numbers / breeding, so less transmission (1)",
            ],
            commonError: "Suggesting methods (e.g. clean drinking water) that do not affect mosquito transmission.",
            guideRef: "Controlling the Spread of Disease",
            difficulty: "challenge",
            hints: [
              "Malaria spreads through a vector, the mosquito.",
              "One method should stop bites; another should reduce mosquito numbers.",
              "Explain how each breaks transmission.",
            ],
            strategy: "Target the vector: stop bites and reduce the mosquito population.",
          },
          {
            id: "bio-disease-immunity-bq4-09",
            question: "During an outbreak of an airborne viral disease, a government introduces vaccination, isolation of infected people, and a public information campaign on hygiene. Explain how each measure helps to control the outbreak.",
            marks: 5,
            modelAnswer:
              "Vaccination makes more of the population immune, so the pathogen has fewer hosts and may reach herd immunity, breaking transmission. Isolating infected people keeps the source of the pathogen away from healthy people, so droplets from coughs and sneezes are not passed on. The hygiene campaign encourages behaviours such as covering the mouth when coughing and hand-washing, which reduces the release and transfer of the virus. Together, these measures attack the transmission chain at several points, reducing the spread far more than any single measure alone.",
            markScheme: [
              "Vaccination increases immunity / herd immunity, fewer hosts (1)",
              "Isolation keeps infected people / the pathogen source away from others (1)",
              "Hygiene campaign reduces release / transfer of the virus (e.g. covering coughs, hand-washing) (1)",
              "Each measure breaks the transmission route / chain (1)",
              "Combining measures is more effective than one alone (1)",
            ],
            commonError: "Explaining only one or two measures, or not linking each to transmission.",
            guideRef: "Controlling the Spread of Disease",
            difficulty: "challenge",
            hints: [
              "Take each measure in turn.",
              "For each, say which part of transmission it blocks.",
              "Comment on the benefit of combining them.",
            ],
            strategy: "Map each intervention to a different step in the transmission chain.",
            solutions: [
              {
                label: "Measure-by-measure approach",
                steps: [
                  "Explain how vaccination reduces the number of susceptible hosts.",
                  "Explain how isolation removes the source of the pathogen.",
                  "Explain how the hygiene campaign reduces virus transfer.",
                  "Conclude that combining measures breaks the chain at multiple points.",
                ],
              },
            ],
          },
          {
            id: "bio-disease-immunity-bq4-10",
            question: "A community suffers repeated outbreaks of a waterborne bacterial disease. Officials must choose between (a) treating each outbreak with antibiotics or (b) building clean water and sewage treatment systems. Evaluate which option is the better long-term strategy.",
            marks: 6,
            modelAnswer:
              "Treating outbreaks with antibiotics deals with the consequences but not the cause: the contaminated water remains, so people keep becoming infected and outbreaks recur. Repeated antibiotic use is also costly and can encourage the development of antibiotic-resistant bacteria, making future treatment less effective. Building clean water and sewage treatment removes the pathogen from the water supply, breaking the transmission route at its source. This prevents people from becoming infected in the first place, so outbreaks should stop rather than just being treated. Although the water and sewage systems have a high initial cost, they give long-term protection, reduce illness and deaths, and avoid the resistance problems of repeated antibiotic use. Therefore, building clean water and sanitation is the better long-term strategy because it tackles the root cause and prevents recurrence.",
            markScheme: [
              "Antibiotics treat the consequence, not the cause / contaminated water remains (1)",
              "Repeated antibiotic use risks antibiotic resistance / is costly (1)",
              "Clean water / sanitation removes the pathogen from the water (1)",
              "This breaks the transmission route at source / prevents infection (1)",
              "Acknowledges high initial cost but long-term benefit (1)",
              "Reasoned conclusion that sanitation is the better long-term strategy (1)",
            ],
            commonError: "Listing points about each option without making a justified overall judgement.",
            guideRef: "Controlling the Spread of Disease",
            difficulty: "challenge",
            hints: [
              "Decide whether each option treats the cause or the symptoms.",
              "Consider the herd-level effect and antibiotic resistance.",
              "The best option removes the root cause (contaminated water).",
            ],
            strategy: "Evaluate at source vs. at individual level; weigh cost against long-term prevention; then judge.",
            solutions: [
              {
                label: "Evaluation approach",
                steps: [
                  "Assess option (a): antibiotics treat symptoms, outbreaks recur, resistance risk.",
                  "Assess option (b): clean water removes the pathogen at source.",
                  "Weigh high initial cost against long-term prevention.",
                  "Give a justified conclusion favouring clean water and sanitation.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
