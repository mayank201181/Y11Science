import type { Topic } from "../types";

export const bioCoordination: Topic = {
  id: "bio-coordination",
  title: "Coordination & Response",
  subject: "biology",
  icon: "🧠",
  blurb: "Nervous system, reflexes, hormones, homeostasis and plant tropisms.",
  intro:
    "Your body faces a constant challenge: the outside world changes every second, yet your internal environment must stay remarkably stable. The nervous system handles fast, precise responses — think of the reflex that pulls your hand from a hot surface before you even feel pain — while the hormonal system orchestrates slower, longer-lasting changes such as adjusting blood sugar after a meal. Together with homeostatic mechanisms that regulate body temperature and plant growth responses driven by auxin, this topic reveals how living organisms detect, process, and respond to signals at every scale.",

  guide: [
    {
      heading: "The Human Nervous System",
      body:
        "The nervous system is split into two divisions. The **central nervous system (CNS)** consists of the **brain** and the **spinal cord**; it is the site of coordination and decision-making. The **peripheral nervous system** is the network of nerves that carry signals between the CNS and the rest of the body.\n\nThree types of **neurone** (nerve cell) carry information:\n\n- **Sensory neurones** carry impulses *from* receptors (sense organs, skin) *to* the CNS.\n- **Relay neurones** (interneurones) sit entirely within the CNS, linking sensory and motor pathways.\n- **Motor neurones** carry impulses *from* the CNS *to* effectors (muscles or glands).\n\nAll neurones share the same basic structure: a cell body (with nucleus), **dendrites** that receive incoming signals, and an **axon** that transmits the impulse away. Many axons are wrapped in a **myelin sheath** — a fatty insulating layer that speeds transmission.\n\nReceptors are specialised cells or structures that detect stimuli (e.g. light, pressure, temperature). Effectors are the muscles or glands that produce a response.",
      diagrams: [
        {
          caption: "Three types of neurone and their roles in the nervous system",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Diagram showing sensory, relay and motor neurones">\n  <rect width="320" height="200" fill="#0f172a"/>\n  <!-- Sensory neurone -->\n  <text x="10" y="20" fill="#38bdf8" font-size="11" font-weight="bold">Sensory neurone</text>\n  <circle cx="40" cy="50" r="10" fill="none" stroke="#34d399" stroke-width="1.5"/>\n  <text x="34" cy="54" y="54" fill="#34d399" font-size="8">R</text>\n  <line x1="50" y1="50" x2="120" y2="50" stroke="#38bdf8" stroke-width="2"/>\n  <polygon points="120,46 130,50 120,54" fill="#38bdf8"/>\n  <ellipse cx="145" cy="50" rx="12" ry="9" fill="none" stroke="#fbbf24" stroke-width="1.5"/>\n  <text x="139" y="53" fill="#fbbf24" font-size="8">cell</text>\n  <line x1="157" y1="50" x2="210" y2="50" stroke="#38bdf8" stroke-width="2"/>\n  <polygon points="210,46 220,50 210,54" fill="#38bdf8"/>\n  <text x="222" y="54" fill="#b7bce0" font-size="9">to CNS</text>\n  <!-- Relay neurone -->\n  <text x="10" y="90" fill="#38bdf8" font-size="11" font-weight="bold">Relay neurone</text>\n  <text x="18" y="108" fill="#b7bce0" font-size="9">(inside CNS)</text>\n  <ellipse cx="145" cy="105" rx="15" ry="10" fill="none" stroke="#a78bfa" stroke-width="1.5"/>\n  <text x="134" y="109" fill="#a78bfa" font-size="8">relay</text>\n  <line x1="100" y1="105" x2="130" y2="105" stroke="#a78bfa" stroke-width="2"/>\n  <polygon points="130,101 140,105 130,109" fill="#a78bfa"/>\n  <line x1="160" y1="105" x2="200" y2="105" stroke="#a78bfa" stroke-width="2"/>\n  <polygon points="200,101 210,105 200,109" fill="#a78bfa"/>\n  <!-- Motor neurone -->\n  <text x="10" y="150" fill="#38bdf8" font-size="11" font-weight="bold">Motor neurone</text>\n  <text x="18" y="165" fill="#b7bce0" font-size="9">from CNS</text>\n  <line x1="70" y1="175" x2="150" y2="175" stroke="#fb7185" stroke-width="2"/>\n  <ellipse cx="165" cy="175" rx="12" ry="9" fill="none" stroke="#fbbf24" stroke-width="1.5"/>\n  <line x1="177" y1="175" x2="240" y2="175" stroke="#fb7185" stroke-width="2"/>\n  <polygon points="240,171 250,175 240,179" fill="#fb7185"/>\n  <rect x="252" y="167" width="18" height="16" rx="3" fill="none" stroke="#34d399" stroke-width="1.5"/>\n  <text x="255" y="178" fill="#34d399" font-size="8">eff.</text>\n</svg>',
        },
      ],
      keyPoints: [
        "CNS = brain + spinal cord; peripheral nervous system = all other nerves.",
        "Sensory neurones carry impulses from receptors to the CNS.",
        "Relay neurones connect sensory and motor pathways inside the CNS.",
        "Motor neurones carry impulses from the CNS to effectors (muscles/glands).",
        "Myelin sheath insulates the axon and speeds up impulse transmission.",
      ],
      discovery: {
        problem:
          "If a nerve signal travels at up to 120 m/s in a myelinated axon but only ~1 m/s in an unmyelinated axon, estimate how much longer it would take a signal to travel the 1 m from your spinal cord to your foot without myelin. What does this suggest about the importance of myelination?",
        idea:
          "Without myelin: 1 m ÷ 1 m/s = 1 second. With myelin: 1 m ÷ 120 m/s ≈ 0.008 s. The myelin sheath allows saltatory conduction — the impulse 'jumps' between gaps (nodes of Ranvier), massively speeding transmission. This is why fast protective responses are possible.",
      },
      whyItWorks:
        "Myelin acts as an electrical insulator. Instead of the impulse regenerating along every point of the membrane, it jumps from one node of Ranvier to the next (saltatory conduction). Each jump covers a long stretch almost instantly, so overall speed scales with the distance between nodes rather than the density of ion channels.",
    },

    {
      heading: "Reflex Arcs",
      body:
        "A **reflex** is a rapid, automatic, involuntary response to a stimulus. Because the pathway bypasses conscious decision-making in the brain, it is faster and protective.\n\nThe **reflex arc** is the pathway taken by a nerve impulse during a reflex:\n\n**Stimulus → Receptor → Sensory neurone → Relay neurone (spinal cord) → Motor neurone → Effector → Response**\n\nExample — withdrawing a hand from a hot object:\n1. **Stimulus**: heat on the skin.\n2. **Receptor**: heat/pain receptors in the skin detect the stimulus.\n3. **Sensory neurone**: carries the impulse to the spinal cord (CNS).\n4. **Relay neurone**: synapses in the spinal cord link sensory to motor pathway.\n5. **Motor neurone**: carries impulse out of the spinal cord to the arm muscles.\n6. **Effector**: biceps muscle contracts.\n7. **Response**: hand is pulled away — before conscious awareness of pain.\n\nThe brain is informed (you feel pain) but the protective action occurs first. Reflexes protect the body from damage and free the brain for more complex tasks.\n\nA **synapse** is a tiny gap between two neurones. Transmission across a synapse is chemical:\n- An electrical impulse arrives at the **pre-synaptic** knob.\n- **Neurotransmitter** molecules are released into the synaptic cleft.\n- They diffuse across the gap and bind to receptors on the **post-synaptic** membrane.\n- This triggers a new impulse in the next neurone.",
      diagrams: [
        {
          caption: "The reflex arc — from stimulus to response",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Reflex arc diagram showing receptor, sensory neurone, relay neurone in spinal cord, motor neurone and effector">\n  <rect width="320" height="200" fill="#0f172a"/>\n  <!-- Spinal cord box -->\n  <rect x="120" y="60" width="80" height="80" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="2"/>\n  <text x="127" y="97" fill="#a78bfa" font-size="10" font-weight="bold">Spinal cord</text>\n  <text x="133" y="111" fill="#a78bfa" font-size="9">(relay neurone)</text>\n  <!-- Receptor -->\n  <circle cx="28" cy="100" r="18" fill="none" stroke="#34d399" stroke-width="2"/>\n  <text x="14" y="98" fill="#34d399" font-size="8">Recep-</text>\n  <text x="16" y="108" fill="#34d399" font-size="8">tor</text>\n  <!-- Sensory neurone arrow -->\n  <line x1="46" y1="90" x2="118" y2="82" stroke="#38bdf8" stroke-width="2.5"/>\n  <polygon points="115,78 122,82 116,88" fill="#38bdf8"/>\n  <text x="55" y="75" fill="#38bdf8" font-size="9">sensory</text>\n  <!-- Motor neurone arrow -->\n  <line x1="118" y1="122" x2="46" y2="130" stroke="#fb7185" stroke-width="2.5"/>\n  <polygon points="49,125 43,130 50,135" fill="#fb7185"/>\n  <text x="55" y="148" fill="#fb7185" font-size="9">motor</text>\n  <!-- Effector -->\n  <rect x="264" y="78" width="46" height="44" rx="6" fill="none" stroke="#fbbf24" stroke-width="2"/>\n  <text x="269" y="98" fill="#fbbf24" font-size="9">Effector</text>\n  <text x="270" y="112" fill="#fbbf24" font-size="8">(muscle)</text>\n  <!-- Arrow from cord to effector -->\n  <line x1="200" y1="100" x2="262" y2="100" stroke="#fb7185" stroke-width="2.5"/>\n  <polygon points="259,96 266,100 259,104" fill="#fb7185"/>\n  <!-- Stimulus label -->\n  <text x="2" y="148" fill="#b7bce0" font-size="9">Stimulus</text>\n  <text x="268" y="140" fill="#b7bce0" font-size="9">Response</text>\n  <!-- Arrows direction labels -->\n  <text x="130" y="50" fill="#eef0ff" font-size="10" font-weight="bold">Reflex Arc</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Order: stimulus → receptor → sensory neurone → relay neurone → motor neurone → effector → response.",
        "Reflexes are fast because they bypass the conscious brain.",
        "The relay neurone is located in the spinal cord (or brain stem for cranial reflexes).",
        "Synapses use neurotransmitters that diffuse across the synaptic cleft to trigger the next neurone.",
        "Reflexes are protective — e.g. blinking, withdrawing from pain.",
      ],
      strategies: ["Draw the arc", "Trace the impulse step by step"],
      thinkDeeper:
        "Why can transmission only go in one direction across a synapse? Because neurotransmitter is only released from the pre-synaptic membrane and receptors only exist on the post-synaptic membrane. This one-way gate ensures coordinated, controlled signalling — no backward crosstalk.",
      whyItWorks:
        "Reflexes evolved because in the time it takes a sensory signal to reach the brain, be processed, and a decision sent back, tissue damage can occur. Routing through the spinal cord reduces the path length from metres to centimetres, cutting response time from ~500 ms to ~80 ms.",
    },

    {
      heading: "The Eye and Pupil Reflex",
      body:
        "The **eye** is the receptor organ for light. Key structures:\n\n- **Cornea**: transparent layer at the front; provides most of the refraction (bending) of light.\n- **Iris**: the coloured ring of muscle surrounding the **pupil** (the gap that lets light in).\n- **Lens**: a flexible, transparent structure that fine-tunes focus by changing shape.\n- **Retina**: the light-sensitive layer at the back; contains rod cells (dim light/black-white) and cone cells (colour/bright light).\n- **Optic nerve**: carries impulses from the retina to the brain.\n- **Ciliary muscles** and **suspensory ligaments** control lens shape during accommodation.\n\n**Pupil reflex** (response to light intensity — antagonistic muscles):\n\n| Condition | Circular muscles | Radial muscles | Pupil |\n|-----------|-----------------|----------------|-------|\n| Bright light | Contract | Relax | Constricts (smaller) |\n| Dim light | Relax | Contract | Dilates (larger) |\n\nThis is a reflex — it happens automatically and protects the retina from intense light.\n\n**Accommodation** — focusing on objects at different distances:\n\n- **Near object**: ciliary muscles **contract** → suspensory ligaments go **slack** → lens becomes **fat/more curved** → greater refraction → focused image on retina.\n- **Distant object**: ciliary muscles **relax** → suspensory ligaments go **taut** → lens becomes **thin/flat** → less refraction → focused image on retina.",
      diagrams: [
        {
          caption: "Cross-section of the human eye with key structures labelled",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Cross-section of the human eye showing cornea, iris, pupil, lens, retina and optic nerve">\n  <rect width="320" height="200" fill="#0f172a"/>\n  <!-- Eyeball outline -->\n  <ellipse cx="150" cy="100" rx="90" ry="85" fill="#1e293b" stroke="#b7bce0" stroke-width="2"/>\n  <!-- Cornea (front arc) -->\n  <path d="M 80,65 Q 55,100 80,135" fill="none" stroke="#38bdf8" stroke-width="3"/>\n  <text x="22" y="103" fill="#38bdf8" font-size="9">Cornea</text>\n  <line x1="57" y1="100" x2="79" y2="100" stroke="#38bdf8" stroke-width="1" stroke-dasharray="3,2"/>\n  <!-- Iris -->\n  <ellipse cx="100" cy="100" rx="20" ry="28" fill="#1e293b" stroke="#a78bfa" stroke-width="2"/>\n  <!-- Pupil -->\n  <ellipse cx="100" cy="100" rx="9" ry="13" fill="#0f172a" stroke="#eef0ff" stroke-width="1"/>\n  <text x="2" y="145" fill="#a78bfa" font-size="9">Iris</text>\n  <line x1="30" y1="140" x2="85" y2="115" stroke="#a78bfa" stroke-width="1" stroke-dasharray="3,2"/>\n  <text x="2" y="162" fill="#eef0ff" font-size="9">Pupil</text>\n  <line x1="30" y1="158" x2="92" y2="105" stroke="#eef0ff" stroke-width="1" stroke-dasharray="3,2"/>\n  <!-- Lens -->\n  <ellipse cx="130" cy="100" rx="14" ry="22" fill="none" stroke="#fbbf24" stroke-width="2"/>\n  <text x="122" y="170" fill="#fbbf24" font-size="9">Lens</text>\n  <line x1="130" y1="165" x2="130" y2="122" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,2"/>\n  <!-- Retina (back arc) -->\n  <path d="M 210,45 Q 240,100 210,155" fill="none" stroke="#34d399" stroke-width="3"/>\n  <text x="245" y="55" fill="#34d399" font-size="9">Retina</text>\n  <line x1="243" y1="58" x2="213" y2="70" stroke="#34d399" stroke-width="1" stroke-dasharray="3,2"/>\n  <!-- Optic nerve -->\n  <rect x="238" y="94" width="32" height="12" rx="4" fill="none" stroke="#fb7185" stroke-width="2"/>\n  <text x="243" y="103" fill="#fb7185" font-size="8">Optic n.</text>\n  <line x1="238" y1="100" x2="212" y2="100" stroke="#fb7185" stroke-width="2"/>\n  <!-- Ciliary muscle label -->\n  <text x="105" y="52" fill="#b7bce0" font-size="8">Ciliary m.</text>\n  <line x1="127" y1="56" x2="130" y2="78" stroke="#b7bce0" stroke-width="1" stroke-dasharray="3,2"/>\n</svg>',
        },
      ],
      keyPoints: [
        "Cornea provides most refraction; lens fine-tunes focus.",
        "Iris has circular and radial muscles — antagonistic pair — to control pupil size.",
        "In bright light pupil constricts; in dim light pupil dilates.",
        "Accommodation: near object → ciliary muscles contract → lens fat; distant object → ciliary muscles relax → lens thin.",
        "Rod cells detect dim light; cone cells detect colour in bright light.",
      ],
      discovery: {
        problem:
          "When you step into a brightly lit room from darkness, you momentarily see a blinding white. A few seconds later your vision is comfortable. What two separate mechanisms are responsible for this rapid adjustment?",
        idea:
          "First (within milliseconds), the **pupil reflex** constricts the pupil — circular iris muscles contract, reducing light entry immediately. Second (over seconds), the retina undergoes **light adaptation**: rod cells (highly sensitive) become bleached/less responsive and cone cells (less sensitive) take over. Both mechanisms protect and adapt the eye to the new light level.",
      },
      strategies: ["Antagonistic pairs: one contracts, the other relaxes", "Near = fat lens (more refraction needed)"],
      whyItWorks:
        "Antagonistic muscles work in opposition because a muscle can only pull, not push. To return to the original position, a second muscle must pull in the opposite direction. In the iris, circular muscles reduce pupil diameter and radial muscles increase it — they can never both be contracted simultaneously at full tension.",
    },

    {
      heading: "Hormonal Control and Blood Glucose Regulation",
      body:
        "**Hormones** are chemical messengers secreted by **endocrine glands** directly into the blood. They travel to **target organs** where they produce a response. Effects are slower and longer-lasting than nerve impulses.\n\nKey hormones for IGCSE:\n\n- **Adrenaline** (secreted by the adrenal glands, above the kidneys): the 'fight or flight' hormone. Effects: increases heart rate, dilates pupils, diverts blood to muscles, raises blood glucose, prepares the body for emergency action.\n- **Insulin** (secreted by the **pancreas**): released when blood glucose rises. Causes liver and muscle cells to convert glucose → glycogen (**glycogenesis**); glucose uptake by cells increases. Blood glucose falls back to normal.\n- **Glucagon** (secreted by the **pancreas**): released when blood glucose falls. Causes liver to convert glycogen → glucose (**glycogenolysis**) and release it into the blood. Blood glucose rises back to normal.\n\n**Blood glucose regulation — negative feedback:**\n\nIf blood glucose **rises** (e.g. after a meal): pancreas secretes **insulin** → blood glucose falls → less insulin secreted.\n\nIf blood glucose **falls** (e.g. during exercise): pancreas secretes **glucagon** → blood glucose rises → less glucagon secreted.\n\nThis is **negative feedback**: the response opposes the initial change and restores the set point. It is a fundamental principle of **homeostasis** (maintaining a constant internal environment).\n\nIn **Type 1 diabetes**, the pancreas cannot produce insulin; blood glucose rises dangerously. Management involves monitoring glucose and injecting insulin. In **Type 2 diabetes**, cells become less responsive to insulin.",
      keyPoints: [
        "Hormones are chemical messengers carried in the blood to target organs.",
        "Insulin: released when blood glucose is high; promotes glycogen storage; lowers glucose.",
        "Glucagon: released when blood glucose is low; promotes glycogen breakdown; raises glucose.",
        "Negative feedback: the response counters the change and restores the normal level.",
        "Adrenaline prepares the body for emergency — increases heart rate, raises blood glucose.",
      ],
      discovery: {
        problem:
          "A student eats a large sugary meal at noon. Draw a sketch graph showing how blood glucose might change from noon to 2 pm, and annotate when insulin and glucagon would be secreted. What would happen to a Type 1 diabetic who ate the same meal without injecting insulin?",
        idea:
          "Blood glucose rises steeply after the meal (peak ~30-60 min). Insulin is secreted as it rises, causing glucose to be absorbed into cells/stored as glycogen, so blood glucose falls back to the normal range (~90 mg/dL) by ~2 pm. Glucagon would be secreted if it dipped below normal. A Type 1 diabetic without insulin would show persistently high blood glucose (hyperglycaemia) because cells cannot take up glucose without insulin — glucose spills into urine and cells are starved despite high blood levels.",
      },
      whyItWorks:
        "Negative feedback is stable because the corrective response is proportional to the deviation from the set point. As the error shrinks (blood glucose approaches normal), the stimulus for correction also shrinks, preventing overshoot. This is mathematically equivalent to a proportional controller — the very reason biological systems are so precisely regulated.",
      thinkDeeper:
        "Adrenaline also raises blood glucose. Why would it be counterproductive for the body to release insulin at the same time as adrenaline? During 'fight or flight', you need maximum blood glucose available to muscles and brain — any insulin response would counteract this. The adrenal signal actually suppresses insulin release temporarily, illustrating that hormone systems have override mechanisms.",
      strategies: ["Negative feedback loop diagram", "Track insulin/glucagon relative to glucose level"],
    },

    {
      heading: "Homeostasis: Temperature Control",
      body:
        "**Homeostasis** is the maintenance of a constant internal environment despite external changes. The body's core temperature is maintained at approximately **37 °C** — the optimum for enzyme activity.\n\n**When the body is too hot** (temperature rises above set point):\n\n- **Sweating**: sweat glands secrete water onto the skin surface; water evaporates, removing heat (latent heat of vaporisation).\n- **Vasodilation**: blood vessels near the skin surface widen → more blood flows near the surface → heat is lost to the environment by radiation and conduction.\n- Body hairs lie flat (erector muscles relax) → reduced insulating air layer.\n\n**When the body is too cold** (temperature falls below set point):\n\n- **Shivering**: rapid involuntary muscle contractions generate heat through respiration.\n- **Vasoconstriction**: blood vessels near the skin surface narrow → less blood near surface → less heat lost.\n- Body hairs stand on end (erector muscles contract) → trapped air layer insulates skin.\n- Metabolic rate increases.\n\nAll these mechanisms form **negative feedback loops**: deviation from 37 °C triggers corrective responses that return temperature toward the set point. The **hypothalamus** in the brain acts as the thermostat — it detects blood temperature and coordinates the responses.",
      diagrams: [
        {
          caption: "Skin responses to hot and cold — vasodilation and vasoconstriction",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Diagram showing skin blood vessel responses in hot and cold conditions">\n  <rect width="320" height="200" fill="#0f172a"/>\n  <!-- HOT side -->\n  <text x="10" y="18" fill="#fb7185" font-size="11" font-weight="bold">TOO HOT</text>\n  <!-- Skin surface -->\n  <rect x="10" y="25" width="140" height="8" rx="2" fill="#a78bfa" opacity="0.4"/>\n  <text x="12" y="33" fill="#eef0ff" font-size="7">Skin surface</text>\n  <!-- Wide blood vessel -->\n  <rect x="50" y="33" width="60" height="50" rx="6" fill="none" stroke="#fb7185" stroke-width="3"/>\n  <text x="55" y="62" fill="#fb7185" font-size="8">Wide vessel</text>\n  <text x="52" y="74" fill="#fb7185" font-size="8">(vasodilation)</text>\n  <!-- Heat arrows up -->\n  <line x1="80" y1="33" x2="80" y2="8" stroke="#fbbf24" stroke-width="2"/>\n  <polygon points="76,12 80,4 84,12" fill="#fbbf24"/>\n  <text x="85" y="22" fill="#fbbf24" font-size="8">Heat lost</text>\n  <!-- Sweat drops -->\n  <ellipse cx="30" cy="30" rx="4" ry="5" fill="#38bdf8" opacity="0.8"/>\n  <ellipse cx="120" cy="28" rx="4" ry="5" fill="#38bdf8" opacity="0.8"/>\n  <text x="10" y="98" fill="#38bdf8" font-size="8">Sweat evaporates</text>\n  <!-- COLD side -->\n  <text x="172" y="18" fill="#38bdf8" font-size="11" font-weight="bold">TOO COLD</text>\n  <!-- Skin surface -->\n  <rect x="172" y="25" width="140" height="8" rx="2" fill="#a78bfa" opacity="0.4"/>\n  <text x="174" y="33" fill="#eef0ff" font-size="7">Skin surface</text>\n  <!-- Narrow blood vessel -->\n  <rect x="212" y="33" width="60" height="50" rx="6" fill="none" stroke="#38bdf8" stroke-width="1.5"/>\n  <rect x="228" y="43" width="28" height="30" rx="4" fill="#1e3a5f" stroke="#38bdf8" stroke-width="2"/>\n  <text x="215" y="62" fill="#38bdf8" font-size="8">Narrow vessel</text>\n  <text x="212" y="74" fill="#38bdf8" font-size="8">(vasoconstriction)</text>\n  <!-- Less heat arrows -->\n  <line x1="242" y1="33" x2="242" y2="18" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,2"/>\n  <text x="249" y="22" fill="#b7bce0" font-size="8">Less heat</text>\n  <!-- Hair standing -->\n  <line x1="182" y1="25" x2="178" y2="10" stroke="#b7bce0" stroke-width="1.5"/>\n  <line x1="194" y1="25" x2="190" y2="8" stroke="#b7bce0" stroke-width="1.5"/>\n  <line x1="306" y1="25" x2="302" y2="10" stroke="#b7bce0" stroke-width="1.5"/>\n  <text x="172" y="98" fill="#b7bce0" font-size="8">Hairs erect; shivering</text>\n  <!-- Labels -->\n  <text x="10" y="120" fill="#34d399" font-size="9" font-weight="bold">Both: negative feedback → restore 37 C</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Hypothalamus detects blood temperature and coordinates homeostatic responses.",
        "Too hot: sweating (evaporative cooling) and vasodilation increase heat loss.",
        "Too cold: shivering (muscular heat) and vasoconstriction reduce heat loss.",
        "Body hair position changes the insulating air layer above skin.",
        "All responses are negative feedback — they oppose the change and restore 37 °C.",
      ],
      strategies: ["Negative feedback: always opposes the change", "Vasodilation = wider vessel = more heat loss"],
    },

    {
      heading: "Nervous vs Hormonal Control and Plant Tropisms",
      body:
        "**Comparison of nervous and hormonal control:**\n\n| Feature | Nervous | Hormonal |\n|---------|---------|----------|\n| Speed | Fast (milliseconds) | Slow (seconds to hours) |\n| Transmission | Electrical impulse along neurones | Chemical in blood |\n| Duration | Short-lived | Long-lasting |\n| Target | Specific effector | All target organs with receptors |\n| Examples | Reflex, muscle contraction | Blood glucose, puberty |\n\n**Plant tropisms** — growth responses to directional stimuli:\n\n- **Phototropism**: growth response to light.\n  - Shoots: positively phototropic (grow *towards* light).\n  - Roots: negatively phototropic (grow *away from* light, though this is less critical).\n- **Gravitropism (geotropism)**: growth response to gravity.\n  - Roots: positively gravitropic (grow *downward*, with gravity).\n  - Shoots: negatively gravitropic (grow *upward*, against gravity).\n\n**The role of auxin:**\n\nAuxin (IAA) is a plant hormone produced at the tip of shoots. It diffuses down the shoot and promotes cell elongation.\n\nIn a shoot lit from one side:\n- Auxin migrates to the *shaded* side.\n- Higher auxin concentration on shaded side → greater cell elongation there.\n- Unequal growth causes the shoot to **bend towards the light** (positive phototropism).\n\nIn roots, auxin has the *opposite* effect at high concentrations — it *inhibits* elongation. So auxin accumulating on the lower side of a horizontal root *inhibits* growth there → root bends downward (positive gravitropism).",
      keyPoints: [
        "Nervous: fast, electrical, short-lived, precise target. Hormonal: slow, chemical in blood, long-lasting, widespread.",
        "Phototropism: shoots grow towards light (positive); role of auxin redistribution.",
        "Gravitropism: roots grow downwards with gravity (positive); shoots grow upwards (negative).",
        "Auxin promotes cell elongation in shoots; high auxin inhibits elongation in roots.",
        "Unequal auxin distribution → unequal growth → bending of plant organ.",
      ],
      discovery: {
        problem:
          "A student removes the tip of a seedling shoot and replaces it off-centre on one side. The shoot then bends toward the side that has no tip. Explain why, using your knowledge of auxin.",
        idea:
          "Auxin is produced in the shoot tip. With the tip placed off-centre, auxin diffuses down predominantly on the side where the tip is located. That side elongates faster than the other. The shoot bends away from the side with more auxin — i.e. towards the tipless side. This demonstrates that auxin causes bending by promoting unequal cell elongation, not by pulling the shoot.",
      },
      whyItWorks:
        "Auxin promotes the uptake of H⁺ ions into the cell wall space (acid growth theory), loosening cross-links between cellulose microfibrils and allowing cells to absorb water and expand. Because cell division is roughly equal on both sides, it is this differential *elongation* — not cell division — that produces directional bending.",
      strategies: ["Draw shaded/lit shoot, mark auxin distribution, predict bending direction"],
      thinkDeeper:
        "Weed killers like 2,4-D are synthetic auxins. At high concentrations they cause uncontrolled, disorganised growth in broad-leaved plants (dicots), killing them. Narrow-leaved grasses (monocots) are much less sensitive. How does this make 2,4-D useful as a selective herbicide on lawns?",
    },
  ],

  learn: {
    keyFacts: [
      "The CNS consists of the brain and spinal cord.",
      "The order of a reflex arc is: stimulus → receptor → sensory neurone → relay neurone → motor neurone → effector → response.",
      "Synapses transmit impulses chemically using neurotransmitters that diffuse across the synaptic cleft.",
      "In bright light, circular iris muscles contract, constricting the pupil; in dim light, radial muscles contract, dilating the pupil.",
      "Accommodation for a near object: ciliary muscles contract, suspensory ligaments slacken, lens becomes fat (more curved).",
      "Insulin lowers blood glucose; glucagon raises blood glucose — both secreted by the pancreas.",
      "Negative feedback: the response opposes the initial change and restores the set point.",
      "Vasodilation increases heat loss; vasoconstriction reduces heat loss.",
      "Sweating cools the body by the evaporation of water from the skin surface.",
      "Auxin promotes cell elongation in shoots; accumulates on the shaded side, causing bending towards light.",
      "Positive phototropism: shoots grow towards light. Positive gravitropism: roots grow downwards.",
    ],
    flashcards: [
      { front: "What are the two main divisions of the human nervous system?", back: "Central nervous system (brain + spinal cord) and peripheral nervous system." },
      { front: "What is the function of a relay neurone?", back: "To connect sensory and motor neurones inside the CNS; it processes and relays impulses." },
      { front: "What happens at a synapse?", back: "Neurotransmitter is released from the pre-synaptic knob, diffuses across the cleft, and triggers an impulse in the post-synaptic neurone." },
      { front: "State the order of the reflex arc.", back: "Stimulus → receptor → sensory neurone → relay neurone → motor neurone → effector → response." },
      { front: "How does the pupil respond to bright light and why?", back: "Circular muscles of the iris contract → pupil constricts. This reduces light entering the eye, protecting the retina." },
      { front: "What happens to the lens when focusing on a near object?", back: "Ciliary muscles contract, suspensory ligaments slacken, and the lens becomes fat (more curved) to increase refraction." },
      { front: "What does insulin do and what triggers its release?", back: "Insulin lowers blood glucose by stimulating glycogen storage in liver/muscle. Released when blood glucose rises." },
      { front: "What is negative feedback?", back: "A control mechanism where the response opposes the change that triggered it, restoring conditions to the set point." },
      { front: "How does sweating cool the body?", back: "Water in sweat evaporates from the skin, absorbing latent heat from the body and lowering skin temperature." },
      { front: "What is auxin and what does it do in shoots?", back: "Auxin (IAA) is a plant hormone produced at the shoot tip. It promotes cell elongation; it accumulates on the shaded side, causing the shoot to bend towards light." },
      { front: "Distinguish nervous from hormonal control in terms of speed and duration.", back: "Nervous: fast (milliseconds), short-lived. Hormonal: slow (seconds–hours), long-lasting." },
      { front: "What is the role of the hypothalamus in temperature regulation?", back: "It acts as the body's thermostat, detecting blood temperature changes and coordinating responses (sweating, vasodilation, shivering, vasoconstriction)." },
    ],
    keyTerms: [
      { term: "CNS", definition: "Central nervous system; consists of the brain and spinal cord; the site of coordination." },
      { term: "Sensory neurone", definition: "A nerve cell that carries impulses from receptors to the CNS." },
      { term: "Motor neurone", definition: "A nerve cell that carries impulses from the CNS to effectors (muscles/glands)." },
      { term: "Synapse", definition: "A junction between two neurones across which neurotransmitter molecules diffuse to transmit the impulse." },
      { term: "Reflex", definition: "A rapid, automatic, involuntary response to a stimulus that bypasses conscious thought." },
      { term: "Accommodation", definition: "The process by which the eye changes the shape of the lens to focus on objects at different distances." },
      { term: "Insulin", definition: "A hormone secreted by the pancreas that lowers blood glucose by stimulating uptake and glycogen storage." },
      { term: "Glucagon", definition: "A hormone secreted by the pancreas that raises blood glucose by stimulating glycogen breakdown in the liver." },
      { term: "Negative feedback", definition: "A control mechanism in which a deviation from the set point triggers a corrective response that opposes the change." },
      { term: "Homeostasis", definition: "The maintenance of a constant internal environment within the body despite external changes." },
      { term: "Vasodilation", definition: "Widening of blood vessels near the skin surface to increase heat loss to the environment." },
      { term: "Auxin", definition: "A plant hormone (IAA) produced at shoot tips that promotes cell elongation; its unequal distribution causes tropistic bending." },
      { term: "Phototropism", definition: "The growth of a plant in response to light; shoots are positively phototropic (grow towards light)." },
      { term: "Gravitropism", definition: "The growth of a plant in response to gravity; roots are positively gravitropic (grow downwards)." },
    ],
  },

  quiz: {
    mcq: [
      {
        id: "bio-coordination-mcq-q01",
        question: "Which part of the nervous system coordinates responses during a spinal reflex?",
        options: ["Cerebral cortex", "Cerebellum", "Spinal cord", "Medulla oblongata"],
        answerIndex: 2,
        explanation: "In a spinal reflex, the relay neurone is located in the spinal cord. The reflex arc is completed without involving higher brain centres, which is why it is faster than a voluntary response.",
        difficulty: "warmup",
        guideRef: "Reflex Arcs",
      },
      {
        id: "bio-coordination-mcq-q02",
        question: "A student steps on a drawing pin. Which sequence correctly describes the reflex arc?",
        options: [
          "Motor neurone → relay neurone → sensory neurone → effector",
          "Receptor → sensory neurone → relay neurone → motor neurone → effector",
          "Receptor → motor neurone → brain → sensory neurone → effector",
          "Sensory neurone → receptor → relay neurone → motor neurone",
        ],
        answerIndex: 1,
        explanation: "The reflex arc order is: receptor (detects stimulus) → sensory neurone (to CNS) → relay neurone (in spinal cord) → motor neurone (to effector) → effector (muscle produces response). Options A and D reverse the order; C incorrectly routes the arc through the brain.",
        difficulty: "core",
        hints: [
          "Think about what detects the stimulus first.",
          "Remember: sensory carries signals towards the CNS, motor carries signals away from the CNS.",
          "The relay neurone is always in the middle, inside the CNS.",
        ],
        guideRef: "Reflex Arcs",
      },
      {
        id: "bio-coordination-mcq-q03",
        question: "In dim light, which change occurs in the iris to allow more light into the eye?",
        options: [
          "Circular muscles contract, pupil constricts",
          "Radial muscles contract, pupil dilates",
          "Circular muscles relax, pupil dilates",
          "Radial muscles relax, pupil constricts",
        ],
        answerIndex: 1,
        explanation: "In dim light, radial (dilator) muscles of the iris contract, pulling the iris outward and widening the pupil — this is pupil dilation. Circular muscles relax. This allows more light to reach the retina.",
        difficulty: "core",
        hints: [
          "Radial muscles run like spokes on a wheel — contracting them pulls the iris outward.",
          "Dilation means enlarging; constriction means narrowing.",
        ],
        guideRef: "The Eye and Pupil Reflex",
      },
      {
        id: "bio-coordination-mcq-q04",
        question: "Which statement about accommodation for a near object is correct?",
        options: [
          "Ciliary muscles relax; suspensory ligaments tighten; lens becomes flat",
          "Ciliary muscles contract; suspensory ligaments slacken; lens becomes fat",
          "Ciliary muscles contract; suspensory ligaments tighten; lens becomes flat",
          "Ciliary muscles relax; suspensory ligaments slacken; lens becomes fat",
        ],
        answerIndex: 1,
        explanation: "For a near object, greater refraction is needed. Ciliary muscles contract, reducing the tension on the suspensory ligaments, which slacken. The elastic lens is then free to bulge into its natural fat (more convex) shape. Options A and C have incorrect ligament/lens relationships.",
        difficulty: "core",
        hints: [
          "A fatter lens refracts light more strongly — needed for near objects.",
          "When ciliary muscles contract, the ring they form gets smaller — this releases tension on the ligaments.",
        ],
        guideRef: "The Eye and Pupil Reflex",
      },
      {
        id: "bio-coordination-mcq-q05",
        question: "Blood glucose falls below the normal level. Which response is expected?",
        options: [
          "Pancreas releases insulin; liver stores more glycogen",
          "Pancreas releases glucagon; liver converts glycogen to glucose",
          "Adrenal gland releases insulin; muscles release glucose",
          "Pancreas releases glucagon; liver converts glucose to glycogen",
        ],
        answerIndex: 1,
        explanation: "When blood glucose is too low, the pancreas releases glucagon. Glucagon stimulates the liver to break down glycogen into glucose (glycogenolysis) and release it into the blood, raising glucose back to normal. Insulin has the opposite effect and is released when glucose is high.",
        difficulty: "warmup",
        guideRef: "Hormonal Control and Blood Glucose Regulation",
      },
      {
        id: "bio-coordination-mcq-q06",
        question: "A seedling is placed on its side in the dark. After 48 hours, the root has grown downward and the shoot has grown upward. Which combination of tropism descriptions is correct?",
        options: [
          "Root: positively gravitropic; shoot: positively gravitropic",
          "Root: negatively gravitropic; shoot: positively gravitropic",
          "Root: positively gravitropic; shoot: negatively gravitropic",
          "Root: negatively gravitropic; shoot: negatively gravitropic",
        ],
        answerIndex: 2,
        explanation: "Roots grow towards gravity (positively gravitropic — downward). Shoots grow against gravity (negatively gravitropic — upward). Since the experiment is in the dark, phototropism is eliminated, so only gravitropism drives the bending.",
        difficulty: "core",
        hints: [
          "Positive tropism = growth towards the stimulus direction.",
          "Gravity acts downward; roots grow with it, shoots grow against it.",
        ],
        guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
      },
    ],
    qa: [
      {
        id: "bio-coordination-qa-q01",
        question: "Describe how a synapse transmits an impulse from one neurone to the next. [4 marks]",
        marks: 4,
        modelAnswer:
          "When an electrical impulse reaches the pre-synaptic knob, vesicles containing neurotransmitter molecules fuse with the pre-synaptic membrane and release neurotransmitter into the synaptic cleft. The neurotransmitter diffuses across the narrow gap and binds to receptor proteins on the post-synaptic membrane. This triggers a new electrical impulse in the post-synaptic neurone. The neurotransmitter is then broken down or reabsorbed, resetting the synapse.",
        markScheme: [
          "Impulse causes neurotransmitter to be released from pre-synaptic knob / vesicles",
          "Neurotransmitter diffuses across the synaptic cleft / gap",
          "Neurotransmitter binds to receptors on the post-synaptic membrane",
          "New impulse generated in the post-synaptic neurone",
        ],
        commonError: "Students often say the electrical impulse 'jumps' across the synapse — it cannot; only the chemical neurotransmitter crosses the gap.",
        guideRef: "Reflex Arcs",
        difficulty: "core",
        hints: [
          "Start at the arriving impulse — what does it trigger?",
          "Name the molecules released and where they go.",
          "What do they bind to and what does that cause?",
          "Mention that transmission is one-way and why.",
        ],
        strategy: "Use 'pre-synaptic' and 'post-synaptic' as structural anchors to organise your answer.",
      },
      {
        id: "bio-coordination-qa-q02",
        question: "Explain how the body responds to a rise in blood glucose concentration after a meal, using the concept of negative feedback. [5 marks]",
        marks: 5,
        modelAnswer:
          "After a meal, blood glucose concentration rises above the normal set point. The pancreas detects this rise and secretes insulin into the blood. Insulin travels to the liver and muscle cells (target organs), causing them to absorb glucose and convert it to glycogen for storage (glycogenesis). As blood glucose falls back toward the normal level, the stimulus for insulin secretion decreases. The pancreas reduces insulin secretion. This is negative feedback because the response (lowering blood glucose) opposes the original change (the rise) and restores the set point.",
        markScheme: [
          "Blood glucose rises above normal / set point",
          "Pancreas detects rise and secretes insulin",
          "Insulin causes liver/muscle to convert glucose to glycogen / take up glucose",
          "Blood glucose returns to normal / set point",
          "Negative feedback: response opposes the original change / restores set point",
        ],
        commonError: "Confusing insulin (lowers glucose) with glucagon (raises glucose). Also, stating that 'the body destroys glucose' rather than converting it to glycogen for storage.",
        guideRef: "Hormonal Control and Blood Glucose Regulation",
        difficulty: "core",
        hints: [
          "Which organ detects and responds to blood glucose?",
          "Name the hormone released and where it acts.",
          "What happens to the glucose at the target cells?",
          "Explain why this is called 'negative' feedback — does the response add to or oppose the change?",
        ],
        strategy: "Negative feedback loop: state the change → the detection → the corrective response → the return to normal → reduced stimulus.",
      },
      {
        id: "bio-coordination-qa-q03",
        question: "A student investigates phototropism by placing seedlings in boxes with a single hole on one side. After 5 days, all shoots bend towards the hole. Design a controlled experiment to show that the bending is caused by auxin redistribution, not by the shoot simply growing faster overall on the lit side. [6 marks]",
        marks: 6,
        modelAnswer:
          "Hypothesis: Auxin accumulates on the shaded side of the shoot tip, causing greater cell elongation there. Set up two groups of seedlings:\n\nGroup 1 (experimental): Intact shoot tip, lit from one side. Expected result: shoot bends towards the light, as auxin migrates to the shaded side.\n\nGroup 2 (control): Remove the shoot tip (decapitated); lit from one side. Expected result: no bending occurs, confirming the tip produces the signal.\n\nGroup 3 (auxin redistribution test): Place a thin piece of impermeable material (mica) down the centre of the shoot tip, splitting it, lit from one side. Expected result: no bending — auxin cannot migrate to one side.\n\nMeasure rate of elongation on the lit and shaded sides using a ruler and growth marks every 24 h. All other variables (light intensity, temperature, water, species of seedling) kept constant. If auxin redistribution is the mechanism, the shaded side should show measurably greater elongation. Compare results across groups.",
        markScheme: [
          "Clear hypothesis / prediction stated",
          "Control: removal of shoot tip prevents bending / tip produces the tropism signal",
          "Experimental: intact seedling bends towards light",
          "Measurement of elongation on lit vs shaded sides",
          "Identification of variables kept constant (temperature, light intensity, species)",
          "Mica/barrier experiment or mention that auxin redistribution can be tested",
        ],
        commonError: "Students design experiments that test whether shoots respond to light but not whether auxin redistribution is the mechanism. The experiment must specifically isolate auxin movement.",
        guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
        difficulty: "challenge",
        hints: [
          "You need to isolate auxin as the cause — what would happen with no tip at all?",
          "If auxin migrates sideways, what would stop it? Think of a physical barrier.",
          "What measurements would distinguish 'more growth on shaded side' from 'equal growth but bending'?",
          "Name at least three variables to control and explain why each matters.",
        ],
        strategy: "Experimental design: hypothesis → independent variable → control variable → dependent variable → results prediction for each group.",
        solutions: [
          {
            label: "Method 1: Decapitation control",
            steps: [
              "Remove shoot tips from Group 2 seedlings.",
              "Light both groups from one side equally.",
              "Observe: Group 1 bends, Group 2 does not — shows the tip is needed.",
              "This rules out the shoot bending due to light directly affecting all cells.",
            ],
          },
          {
            label: "Method 2: Agar block auxin transfer",
            steps: [
              "Remove the tip, collect auxin by placing agar block under cut tip.",
              "Place agar block off-centre on the cut stump of a decapitated seedling in the dark.",
              "Observe bending towards the side without agar — auxin from agar promotes elongation on that side.",
              "This directly demonstrates auxin causes bending without any light being involved.",
            ],
          },
        ],
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "bio-coordination-bank-mcq-1",
        title: "Coordination & Response — MCQ Paper 1",
        description: "Nervous system, reflexes, the eye, and hormones.",
        questions: [
          {
            id: "bio-coordination-bank-mcq1-q01",
            question: "Which type of neurone carries impulses away from the CNS to a muscle?",
            options: ["Sensory neurone", "Relay neurone", "Motor neurone", "Receptor cell"],
            answerIndex: 2,
            explanation: "Motor neurones carry impulses from the CNS to effectors (muscles and glands). Sensory neurones go TO the CNS; relay neurones are within the CNS.",
            difficulty: "warmup",
            guideRef: "The Human Nervous System",
          },
          {
            id: "bio-coordination-bank-mcq1-q02",
            question: "How does transmission at a synapse differ from transmission along a neurone?",
            options: [
              "Synaptic transmission is electrical; along the neurone it is chemical",
              "Synaptic transmission is chemical (neurotransmitter); along the neurone it is electrical",
              "Both are electrical but synaptic transmission is slower",
              "Both are chemical but the neurotransmitters are different",
            ],
            answerIndex: 1,
            explanation: "Along the neurone, the impulse is an electrical signal (changes in membrane potential). Across the synapse, transmission is chemical — neurotransmitter is released, diffuses across the cleft, and triggers the next electrical impulse.",
            difficulty: "core",
            hints: [
              "Think about what actually crosses the synaptic gap.",
              "Electrical signals travel along membranes; chemical signals travel through fluid.",
            ],
            guideRef: "Reflex Arcs",
          },
          {
            id: "bio-coordination-bank-mcq1-q03",
            question: "Which structure in the eye is responsible for most of the refraction of light?",
            options: ["Lens", "Iris", "Cornea", "Retina"],
            answerIndex: 2,
            explanation: "The cornea provides approximately 2/3 of the eye's total refractive power because it has a strongly curved surface and a large refractive index difference with air. The lens fine-tunes focus but provides less total refraction.",
            difficulty: "core",
            hints: [
              "Refraction happens where light changes medium and meets a curved surface.",
              "The lens is flexible for accommodation, but the cornea is fixed — which has the larger total effect?",
            ],
            guideRef: "The Eye and Pupil Reflex",
          },
          {
            id: "bio-coordination-bank-mcq1-q04",
            question: "A person moves from a brightly lit room into darkness. Which changes occur in the iris?",
            options: [
              "Circular muscles contract; radial muscles relax",
              "Circular muscles relax; radial muscles contract",
              "Both sets of muscles contract",
              "Both sets of muscles relax",
            ],
            answerIndex: 1,
            explanation: "In darkness, the pupil must dilate (widen) to admit more light. This is achieved by circular muscles relaxing and radial muscles contracting. Both cannot contract simultaneously — they are antagonistic.",
            difficulty: "core",
            hints: [
              "The pupil must dilate — which muscle arrangement achieves this?",
              "Antagonistic muscles: one contracts, the other relaxes.",
            ],
            guideRef: "The Eye and Pupil Reflex",
          },
          {
            id: "bio-coordination-bank-mcq1-q05",
            question: "Adrenaline is released during exercise. Which effect does it NOT have?",
            options: [
              "Increased heart rate",
              "Increased blood glucose",
              "Decreased blood flow to muscles",
              "Dilation of the pupils",
            ],
            answerIndex: 2,
            explanation: "Adrenaline diverts blood TOWARDS muscles (and the heart and brain) during the 'fight or flight' response. Blood flow to the gut and skin is reduced, but skeletal muscles receive more blood. All other options (increased heart rate, raised blood glucose, pupil dilation) are genuine adrenaline effects.",
            difficulty: "core",
            hints: [
              "Adrenaline prepares you for action — what do muscles need?",
              "Identify the one option that opposes the 'fight or flight' logic.",
            ],
            guideRef: "Hormonal Control and Blood Glucose Regulation",
          },
          {
            id: "bio-coordination-bank-mcq1-q06",
            question: "A patient with Type 1 diabetes does not inject insulin before a large meal. Which outcome is most likely?",
            options: [
              "Blood glucose falls dangerously low (hypoglycaemia)",
              "Blood glucose rises dangerously high (hyperglycaemia)",
              "Glucagon compensates fully so blood glucose stays normal",
              "The liver immediately converts excess glucose to glycogen without insulin",
            ],
            answerIndex: 1,
            explanation: "Without insulin, glucose cannot be taken up by cells or stored as glycogen efficiently. Blood glucose rises to dangerous levels — hyperglycaemia. In Type 1 diabetes the pancreatic beta cells are destroyed so no insulin is produced. Glucagon would worsen, not correct, a high glucose level.",
            difficulty: "core",
            hints: [
              "Type 1 = no insulin at all. What does insulin normally do after a meal?",
              "Without that action, where does the absorbed glucose go?",
            ],
            guideRef: "Hormonal Control and Blood Glucose Regulation",
          },
        ],
      },
      {
        id: "bio-coordination-bank-mcq-2",
        title: "Coordination & Response — MCQ Paper 2",
        description: "Homeostasis, temperature regulation, tropisms, and synoptic questions.",
        questions: [
          {
            id: "bio-coordination-bank-mcq2-q01",
            question: "During vigorous exercise, body temperature rises. Which combination of responses increases heat loss from the skin?",
            options: [
              "Vasodilation and increased sweating",
              "Vasoconstriction and reduced sweating",
              "Vasodilation and reduced sweating",
              "Vasoconstriction and increased sweating",
            ],
            answerIndex: 0,
            explanation: "When the body is hot, it needs to LOSE more heat. Vasodilation (widening of surface blood vessels) increases blood flow to the skin surface, increasing heat loss by radiation/conduction. Increased sweating increases evaporative cooling. Both responses together maximise heat loss.",
            difficulty: "warmup",
            guideRef: "Homeostasis: Temperature Control",
          },
          {
            id: "bio-coordination-bank-mcq2-q02",
            question: "Which statement correctly distinguishes nervous from hormonal communication?",
            options: [
              "Hormones act faster but have shorter-lasting effects",
              "Nerve impulses travel in blood; hormones travel along neurones",
              "Nerve impulses are electrical along neurones; hormones are chemicals in blood",
              "Both use electrical signals but hormones act on more specific targets",
            ],
            answerIndex: 2,
            explanation: "Nerve impulses are electrical signals transmitted along neurones to specific effectors. Hormones are chemical substances secreted into the bloodstream and act on target organs with appropriate receptors. Options A and B have the mechanisms reversed; D is incorrect about specificity.",
            difficulty: "warmup",
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
          },
          {
            id: "bio-coordination-bank-mcq2-q03",
            question: "A shoot tip is covered with an opaque cap so light cannot reach it. Light is then shone from one side. What would you observe?",
            options: [
              "Normal phototropic bending towards the light",
              "No bending; growth continues straight",
              "Bending away from the light",
              "The shoot stops growing entirely",
            ],
            answerIndex: 1,
            explanation: "Auxin is produced in and just below the shoot tip. The opaque cap prevents light from reaching the tip, so no redistribution of auxin occurs. Without unequal auxin distribution, growth is equal on both sides and the shoot grows straight. This classic experiment (Boysen-Jensen/Went type) demonstrates the tip is the site of light detection.",
            difficulty: "core",
            hints: [
              "Where is auxin produced?",
              "What is needed for bending — is it the whole shoot or just the tip that detects light?",
            ],
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
          },
          {
            id: "bio-coordination-bank-mcq2-q04",
            question: "Which correctly describes the effect of auxin on roots vs shoots?",
            options: [
              "Promotes elongation in both at all concentrations",
              "Promotes elongation in shoots at low concentrations; inhibits elongation in roots at the same concentration",
              "Inhibits elongation in shoots; promotes elongation in roots",
              "Has no effect on roots; only affects shoot cells",
            ],
            answerIndex: 1,
            explanation: "Roots are far more sensitive to auxin than shoots. A concentration of auxin that promotes elongation in shoots actually inhibits elongation in roots. This differential sensitivity explains why a horizontal root (with auxin accumulating on the lower side) bends downward — the lower side is inhibited relative to the upper side.",
            difficulty: "core",
            hints: [
              "Roots and shoots have different sensitivity thresholds for auxin.",
              "A concentration optimal for shoot elongation is too high for roots.",
            ],
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
          },
          {
            id: "bio-coordination-bank-mcq2-q05",
            question: "Which statement about the role of the hypothalamus in homeostasis is correct?",
            options: [
              "It produces insulin in response to high blood glucose",
              "It detects changes in blood temperature and coordinates responses like sweating and shivering",
              "It is part of the peripheral nervous system",
              "It directly contracts blood vessels to cause vasoconstriction",
            ],
            answerIndex: 1,
            explanation: "The hypothalamus is the brain's thermostat. It monitors blood temperature and sends nervous signals to effectors — sweat glands, blood vessels, muscles — to correct deviations from 37 °C. Insulin is produced by the pancreas; the hypothalamus is part of the CNS; blood vessel contraction is an effector response coordinated by the hypothalamus, not done directly by it.",
            difficulty: "core",
            hints: [
              "The hypothalamus is in the brain — which system is that?",
              "Which organ produces insulin?",
            ],
            guideRef: "Homeostasis: Temperature Control",
          },
          {
            id: "bio-coordination-bank-mcq2-q06",
            question: "A student measures blood glucose at 08:00 (fasting), 09:00 (1 hour after breakfast), and 11:00 (3 hours after breakfast). At which time would insulin secretion be highest, and why?",
            options: [
              "08:00 — fasting state maximises insulin release",
              "09:00 — blood glucose is highest following absorption of breakfast, stimulating insulin secretion",
              "11:00 — glucose has been metabolised so insulin is no longer needed, triggering release",
              "All times equally — insulin is secreted at a constant basal rate only",
            ],
            answerIndex: 1,
            explanation: "Insulin secretion is stimulated by rising blood glucose. At 09:00, glucose absorbed from breakfast has entered the blood, raising blood glucose to its peak. This is the strongest stimulus for insulin release. By 11:00, insulin has already acted (glycogen stored) and blood glucose has returned toward normal — lower glucose means less insulin stimulus.",
            difficulty: "challenge",
            hints: [
              "When would blood glucose be highest — immediately after eating, or hours later?",
              "Insulin is triggered by high blood glucose — so when is the trigger strongest?",
              "Think about the time course of digestion and absorption.",
            ],
            guideRef: "Hormonal Control and Blood Glucose Regulation",
            strategy: "Time course reasoning: trace the glucose level, then apply the negative feedback rule.",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-coordination-bank-qa-1",
        title: "Coordination & Response — Structured Paper 1",
        description: "Nervous system, reflex arc, eye, and hormones.",
        questions: [
          {
            id: "bio-coordination-bank-qa1-q01",
            question: "The diagram shows a cross-section through the spinal cord and the neurones involved in a withdrawal reflex.\n\n(a) State the role of each of the following structures in the reflex arc:\n   (i) Receptor [1]\n   (ii) Relay neurone [1]\n   (iii) Effector [1]\n\n(b) Explain why reflexes are faster than voluntary responses. [2]\n\n(c) A student touches a hot plate and withdraws their hand before consciously feeling pain. Explain how this is possible. [2]",
            marks: 7,
            modelAnswer:
              "(a)(i) Receptor: detects the stimulus (e.g. heat/pain at the skin surface).\n(a)(ii) Relay neurone: connects the sensory neurone to the motor neurone inside the spinal cord / CNS; processes and relays the impulse.\n(a)(iii) Effector: carries out the response; e.g. muscle contracts to withdraw the hand.\n\n(b) Reflexes are faster than voluntary responses because the impulse pathway is shorter — it only passes through the spinal cord rather than up to the brain and back. Fewer synapses and shorter distances mean the response occurs in ~80 ms rather than ~500 ms.\n\n(c) The reflex arc bypasses the brain — the motor response (hand withdrawal) is initiated as soon as the impulse reaches the relay neurone in the spinal cord. The brain is informed of the pain slightly later when signals from the sensory neurone eventually reach the cerebral cortex, so conscious awareness of pain comes after the hand has already moved.",
            markScheme: [
              "(a)(i) Detects the stimulus / converts stimulus to nerve impulse",
              "(a)(ii) Connects sensory to motor neurone in CNS / relays impulse within spinal cord",
              "(a)(iii) Produces the response / muscle contracts",
              "(b) Shorter pathway / does not travel to brain and back",
              "(b) Fewer synapses / shorter distance = faster",
              "(c) Spinal cord initiates the motor response before impulse reaches brain",
              "(c) Brain receives signal later — conscious pain perceived after withdrawal",
            ],
            commonError: "Stating that 'the brain is not involved at all'. The brain is informed — it just is not needed to initiate the reflex response.",
            guideRef: "Reflex Arcs",
            difficulty: "core",
            hints: [
              "For (b): compare the route of a reflex vs a voluntary action.",
              "For (c): where is the reflex pathway completed — spinal cord or brain?",
            ],
            strategy: "Explain the pathway, then explain what is bypassed.",
          },
          {
            id: "bio-coordination-bank-qa1-q02",
            question: "Describe how the eye adjusts to focus on a book held 25 cm away compared with a tree 50 m away. Include the roles of the ciliary muscles, suspensory ligaments, and the lens in your answer. [6 marks]",
            marks: 6,
            modelAnswer:
              "When focusing on the book (near object, 25 cm):\nCiliary muscles contract, forming a smaller ring. This reduces tension on the suspensory ligaments, which become slack. The elastic lens is no longer pulled taut and returns to its naturally fat, more convex shape. The fatter lens refracts light more strongly, converging the diverging rays from the near object onto the retina.\n\nWhen focusing on the tree (distant object, 50 m):\nCiliary muscles relax, the ring expands. The suspensory ligaments become taut, pulling on the edges of the lens and flattening it into a thinner, less convex shape. Less refraction is needed because light from a distant object arrives almost parallel. The thinner lens converges these nearly-parallel rays onto the retina.",
            markScheme: [
              "Near: ciliary muscles contract",
              "Near: suspensory ligaments slacken / less tension",
              "Near: lens becomes fat / more convex / more curved",
              "Near: greater refraction of diverging rays",
              "Distant: ciliary muscles relax",
              "Distant: suspensory ligaments taut / pull lens flat",
            ],
            commonError: "Reversing the ciliary muscle state: saying ciliary muscles relax for near vision. Remember: 'near = contract'. Many students also confuse the ligaments as actively pulling when they actually transmit tension from the ciliary muscle ring.",
            guideRef: "The Eye and Pupil Reflex",
            difficulty: "core",
            hints: [
              "For a near object, more refraction is needed. Which lens shape does that?",
              "When ciliary muscles contract, does the ring get bigger or smaller? What effect does that have on ligament tension?",
              "Think of the lens like a stress ball — release the pull and it springs back to its natural shape.",
            ],
            strategy: "Work through the chain: ciliary muscles → ligament tension → lens shape → refraction needed.",
          },
          {
            id: "bio-coordination-bank-qa1-q03",
            question: "Graph question: Blood glucose concentration was monitored in a healthy person and a person with Type 1 diabetes over 4 hours. Both ate the same meal at time = 0.\n\n(a) Predict the shape of the blood glucose curve for each person over the 4 hours, and explain the difference. [4]\n\n(b) The healthy person's blood glucose peaked at 8.5 mmol/L at 45 minutes then returned to 5 mmol/L by 2 hours. Identify the hormones involved and describe the role of each in bringing about this change. [4]\n\n(c) Explain why the blood glucose of the person with Type 1 diabetes remains high even though glucagon is not being released. [2]",
            marks: 10,
            modelAnswer:
              "(a) Healthy person: blood glucose rises after the meal (peak ~45 min), then falls back to the fasting level (~5 mmol/L) by 2 hours. Type 1 diabetic: blood glucose rises similarly after the meal but remains elevated and does not return to normal — the curve stays high because without insulin the glucose cannot be taken up by cells or stored.\n\n(b) As blood glucose rose above normal, the pancreas released insulin into the blood. Insulin caused liver and muscle cells to absorb glucose and convert it to glycogen (glycogenesis), reducing blood glucose. As blood glucose fell back toward 5 mmol/L, insulin secretion decreased. If blood glucose had fallen too low, glucagon would have been released by the pancreas to convert glycogen back to glucose.\n\n(c) Even without glucagon (which would raise glucose further), the diabetic's glucose remains high because: (1) insulin is absent — cells cannot absorb glucose from the blood; (2) the liver cannot convert glucose to glycogen without the insulin signal. The glucose simply accumulates in the blood as it cannot enter most cells.",
            markScheme: [
              "(a) Healthy: rises then returns to normal; Type 1: rises and stays high",
              "(a) Difference: Type 1 lacks insulin so glucose cannot be stored/taken up",
              "(b) Insulin released by pancreas in response to high glucose",
              "(b) Insulin causes glycogenesis in liver/muscle / glucose uptake by cells",
              "(b) Blood glucose falls; insulin secretion reduces (negative feedback)",
              "(b) Glucagon released if glucose falls too low; glycogenolysis raises glucose",
              "(c) Without insulin, cells cannot absorb glucose from blood",
              "(c) Liver cannot convert glucose to glycogen without insulin signal",
            ],
            commonError: "Students often state that glucagon is causing the diabetic's high glucose. In fact glucagon would not be released (glucose is high, not low) — the problem is the absence of insulin.",
            guideRef: "Hormonal Control and Blood Glucose Regulation",
            difficulty: "challenge",
            hints: [
              "For (a): think about what insulin does and what happens without it.",
              "For (b): identify which hormone acts when glucose is high and which acts when glucose is low.",
              "For (c): insulin has two key jobs — cell uptake of glucose AND glycogen storage. Both are absent.",
            ],
            strategy: "For each part, first identify the direction of the change, then identify the hormone triggered, then state the mechanism.",
          },
          {
            id: "bio-coordination-bank-qa1-q04",
            question: "Compare the nervous system and hormonal system as methods of coordination. Include speed, type of signal, duration of response, and specificity of target. [6 marks]",
            marks: 6,
            modelAnswer:
              "Speed: Nervous impulses are fast (up to 120 m/s in myelinated axons), producing responses in milliseconds. Hormonal responses are slow — hormones must be secreted, travel in blood, and reach target organs; responses may take seconds to hours.\n\nType of signal: Nervous uses electrical impulses along neurones, with chemical transmission at synapses. Hormonal uses chemical molecules (hormones) secreted into the bloodstream.\n\nDuration: Nervous responses are short-lived — impulses stop when stimulus stops, and neurotransmitter is rapidly broken down. Hormonal responses are long-lasting — hormones persist in blood until broken down by the liver.\n\nSpecificity: Nervous signals go to specific effectors (a named muscle or gland) via defined nerve pathways. Hormones travel in blood to all tissues but only affect target organs with the appropriate receptor proteins, so specificity is determined by receptor presence rather than pathway.",
            markScheme: [
              "Speed: nervous faster (milliseconds) than hormonal (seconds to hours)",
              "Signal: nervous = electrical along neurones / hormonal = chemical in blood",
              "Duration: nervous short-lived / hormonal long-lasting",
              "Specificity: nervous acts on specific effector via nerve / hormonal acts on target organs with receptors",
              "Two further valid comparative points (e.g. reversibility, precision, examples)",
            ],
            commonError: "Stating that hormones act on 'all organs' — they only act on organs with the correct receptor proteins.",
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
            difficulty: "core",
            hints: [
              "Structure your answer with four clear headings or paragraphs.",
              "For each feature, give both systems and make the comparison explicit.",
            ],
            strategy: "Comparison answers: state both sides for each criterion — don't describe one system then the other separately.",
          },
        ],
      },
      {
        id: "bio-coordination-bank-qa-2",
        title: "Coordination & Response — Structured Paper 2",
        description: "Homeostasis, skin, temperature regulation, and plant tropisms.",
        questions: [
          {
            id: "bio-coordination-bank-qa2-q01",
            question: "Describe how the skin helps regulate body temperature when a person is too hot. Name four different mechanisms and explain how each reduces body temperature. [8 marks]",
            marks: 8,
            modelAnswer:
              "1. Sweating: sweat glands in the skin secrete a watery fluid onto the skin surface. Water in the sweat evaporates, taking latent heat energy away from the skin and cooling the body.\n\n2. Vasodilation: arterioles (small blood vessels) near the skin surface widen. More warm blood flows close to the skin surface. Heat is lost to the environment by radiation, conduction, and convection.\n\n3. Hairs lie flat: erector pili muscles relax, so body hairs lie flat against the skin. This reduces the layer of insulating air trapped near the skin, allowing more heat to escape.\n\n4. Reduced metabolic heat production: the body reduces unnecessary activity / shivering stops (was not occurring in hot conditions) to generate less heat internally.\n\nAll four responses are coordinated by the hypothalamus and constitute a negative feedback response — they oppose the rise in temperature and restore the set point of ~37 °C.",
            markScheme: [
              "Sweating: sweat evaporates / removes latent heat from skin",
              "Vasodilation: surface arterioles widen / more blood near surface",
              "Vasodilation: more heat lost by radiation/conduction/convection",
              "Hairs lie flat: erector muscles relax / reduced insulating air layer",
              "Any fourth valid response with explanation (e.g. reduced metabolic rate, redirect blood from core)",
              "Reference to negative feedback / hypothalamus coordinates response",
            ],
            commonError: "Describing vasodilation as 'blood moves to the skin' without explaining how that increases heat loss. Heat transfer requires a temperature gradient — being close to the cooler skin surface and external environment is the mechanism.",
            guideRef: "Homeostasis: Temperature Control",
            difficulty: "core",
            hints: [
              "Name the mechanism, then explain the physics of how it removes heat.",
              "Vasodilation — what changes and what is the consequence?",
              "Sweating — which property of water is responsible for cooling?",
            ],
            strategy: "For each mechanism: name it → describe the physical/structural change → explain why heat is lost.",
          },
          {
            id: "bio-coordination-bank-qa2-q02",
            question: "A gardener notices that seedlings growing on a windowsill all lean towards the window.\n\n(a) Name this growth response and state whether it is positive or negative. [1]\n\n(b) Explain, in terms of auxin distribution, why the seedlings lean towards the window. [4]\n\n(c) The gardener turns the plant pots 180° so the shoots face away from the light. Predict what will happen over the next 48 hours and explain your prediction. [2]\n\n(d) If the same seedling were placed horizontally in the dark, describe and explain the direction in which the root would grow. [2]",
            marks: 9,
            modelAnswer:
              "(a) Phototropism; positive (because the shoot grows towards the light source).\n\n(b) Light from the window strikes the shoot from one side. Auxin, produced at the shoot tip, migrates laterally away from the light source to the shaded side of the shoot. The shaded side therefore has a higher auxin concentration. Higher auxin concentration promotes greater cell elongation on the shaded side compared to the lit side. Because cells on the shaded side elongate more, the shoot bends towards the light (window).\n\n(c) Over the next 48 hours the shoot will begin to bend towards the light again — it will curve back towards the window. This is because the light now comes from the opposite direction (the window), so auxin again migrates to what is now the new shaded side (previously the lit side), promoting greater elongation on that side, causing bending towards the window.\n\n(d) The root would grow downward (in the direction of gravity). This is positive gravitropism. Auxin accumulates on the lower side of the horizontal root due to gravity. In roots, high auxin concentration inhibits elongation (unlike shoots). So the upper side elongates more than the lower side, causing the root to bend and grow downward.",
            markScheme: [
              "(a) Phototropism; positive",
              "(b) Auxin migrates to shaded side",
              "(b) Higher auxin on shaded side",
              "(b) Greater cell elongation on shaded side",
              "(b) Shoot bends toward light",
              "(c) Shoot bends back towards the window / towards the new light side",
              "(c) Auxin redistributes to new shaded side causing bending",
              "(d) Root grows downward / positive gravitropism",
              "(d) Auxin accumulates on lower side; inhibits root elongation on that side; upper side elongates more; root bends down",
            ],
            commonError: "In part (d), students often say auxin 'promotes elongation in roots' (same as shoots). This is wrong — at the concentrations generated by gravity, auxin inhibits root elongation. This is why the root bends the same way auxin accumulates (downward) — because that side is inhibited, not promoted.",
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
            difficulty: "core",
            hints: [
              "For (b): trace auxin from production at the tip to its final asymmetric distribution.",
              "For (c): re-apply the same logic — which side is now shaded?",
              "For (d): remember auxin has the OPPOSITE effect on root cells compared to shoot cells.",
            ],
            strategy: "For tropism questions: identify the stimulus direction → predict auxin migration → apply elongation rule for shoot vs root → predict bending direction.",
          },
          {
            id: "bio-coordination-bank-qa2-q03",
            question: "A researcher measures blood glucose in four volunteers after an overnight fast. All four then eat identical meals. The results for blood glucose at 1 hour after eating are: Person A: 5.8 mmol/L (normal); Person B: 14.2 mmol/L (very high); Person C: 3.1 mmol/L (very low); Person D: 5.9 mmol/L (normal but takes medication).\n\n(a) Suggest a diagnosis for Person B. Justify your answer. [2]\n\n(b) Person C's blood glucose is dangerously low 1 hour after eating. Suggest two possible reasons for this. [2]\n\n(c) Person D has Type 2 diabetes and takes metformin, which increases cell sensitivity to insulin. Explain why this drug helps control blood glucose. [3]\n\n(d) Explain what would happen in a healthy person if blood glucose fell to 3.1 mmol/L (as in Person C). Name the hormone involved and describe its mechanism. [3]",
            marks: 10,
            modelAnswer:
              "(a) Person B likely has diabetes mellitus (Type 1 or Type 2). After eating, blood glucose rises to 14.2 mmol/L and does not return to normal, suggesting insufficient insulin action — either the pancreas cannot produce insulin (Type 1) or cells are insufficiently responsive to insulin (Type 2).\n\n(b) Possible reasons for Person C's low blood glucose: (1) They injected too much insulin (e.g. if they are a known diabetic on insulin therapy) — excess insulin causes too much glucose to be removed from the blood. (2) They did very intense exercise before the meal, depleting blood glucose. (3) The meal may not have been fully absorbed yet, or there was a delay in glucose absorption.\n\n(c) In Type 2 diabetes, cells are less sensitive to insulin so do not take up glucose efficiently even when insulin is present. Metformin increases cell sensitivity to insulin, so the same amount of insulin causes greater glucose uptake by liver/muscle cells, more glycogenesis occurs, and blood glucose falls toward the normal range.\n\n(d) In a healthy person with blood glucose at 3.1 mmol/L (below normal), the pancreas releases glucagon. Glucagon travels in the blood to the liver (target organ). In the liver, glucagon stimulates the conversion of glycogen to glucose (glycogenolysis). Glucose is released into the blood, raising blood glucose back toward the normal set point (~5 mmol/L). This is negative feedback.",
            markScheme: [
              "(a) Diabetes mellitus / diabetic; glucose remains very high after meal / insufficient insulin action",
              "(b) Any 2 of: excess insulin dose / intense exercise / delayed absorption / (glucagon deficiency)",
              "(c) Cells more responsive to insulin / take up more glucose",
              "(c) More glycogen stored / more glycogenesis",
              "(c) Blood glucose falls toward normal",
              "(d) Pancreas releases glucagon",
              "(d) Glucagon acts on liver / stimulates glycogenolysis",
              "(d) Glucose released into blood / blood glucose rises / negative feedback",
            ],
            commonError: "In part (d), students sometimes say 'insulin is no longer released, so glucose rises'. This is a correct partial answer but incomplete — the active correction by glucagon must be described.",
            guideRef: "Hormonal Control and Blood Glucose Regulation",
            difficulty: "challenge",
            hints: [
              "For (a): compare to the normal pattern — what is failing?",
              "For (b): think of two different reasons blood glucose could be too low — one hormonal, one physiological.",
              "For (c): if cells are more sensitive to insulin, what happens to the rate of glucose uptake?",
              "For (d): low glucose triggers which hormone? Trace its mechanism step by step.",
            ],
            strategy: "Apply negative feedback logic: identify the deviation → identify the hormone triggered → describe its mechanism → describe restoration of set point.",
          },
          {
            id: "bio-coordination-bank-qa2-q04",
            question: "Evaluate the evidence for auxin being responsible for phototropic bending in shoots, using the following experimental observations:\n- Observation 1: An intact seedling bends towards light from one side.\n- Observation 2: A seedling with its tip removed does not bend, but continues growing straight.\n- Observation 3: An agar block placed under a removed tip, then placed off-centre on a decapitated stump in the dark, causes bending toward the side without the agar block.\n- Observation 4: Chromatography of agar blocks from the shaded side of illuminated shoot tips contains more auxin than blocks from the lit side.\n[6 marks]",
            marks: 6,
            modelAnswer:
              "Observation 1 shows that phototropism is a real phenomenon in shoots — they bend towards light — but does not identify the mechanism.\n\nObservation 2 demonstrates that the tip is essential for the response: without the tip, auxin is not produced and no bending occurs. This supports the idea that the tip produces a signal required for bending.\n\nObservation 3 is strong evidence that a diffusible chemical from the tip causes bending. The agar block carries a chemical from the tip; when placed off-centre, it causes one-sided elongation and bending without any light, ruling out a direct effect of light on elongation. This supports auxin as the diffusible substance.\n\nObservation 4 provides direct chemical evidence that more auxin accumulates on the shaded side of an illuminated shoot. Combined with observations 2 and 3, this supports the conclusion that light causes lateral redistribution of auxin from tip to shaded side, greater elongation on the shaded side, and bending towards the light.\n\nOverall, the observations collectively provide strong, consistent evidence that auxin redistribution is responsible for phototropism. The evidence is reinforced because each observation rules out an alternative explanation.",
            markScheme: [
              "Obs 1: establishes phototropism is real but does not explain mechanism",
              "Obs 2: tip needed for bending / auxin produced in tip",
              "Obs 3: chemical (auxin) diffuses from tip and causes elongation / not a direct effect of light",
              "Obs 3: bending in dark rules out direct light effect on cells",
              "Obs 4: chemical evidence of more auxin on shaded side",
              "Overall conclusion: lateral auxin redistribution causes unequal elongation and bending",
            ],
            commonError: "Treating each observation in isolation rather than using them cumulatively to build an argument. IGCSE extended tier expects evaluation — not just description.",
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
            difficulty: "challenge",
            hints: [
              "For each observation: what does it tell you, and what does it rule out?",
              "Observation 3 is particularly powerful — why does bending in the dark matter?",
              "Observation 4 is the most direct chemical evidence — what does chromatography prove?",
              "Finish with an overall evaluation — do the observations together make a strong case?",
            ],
            strategy: "Evaluate = describe the evidence AND state what conclusion it supports AND identify its strengths or limits.",
          },
        ],
      },
    ],
  },
};
