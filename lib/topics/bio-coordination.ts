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
      // ── MCQ PAPER 1 ── neurone types, synapse, reflex arc, eye structure
      {
        id: "bio-coordination-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Neurone types, synapse, reflex arc, and eye structure.",
        questions: [
          {
            id: "bio-coordination-bm1-01",
            question: "Which type of neurone carries impulses FROM the CNS TO a muscle?",
            options: [
              "Sensory neurone",
              "Relay neurone",
              "Motor neurone",
              "Receptor cell",
            ],
            answerIndex: 2,
            explanation:
              "Motor neurones carry impulses from the CNS to effectors such as muscles and glands. Sensory neurones carry impulses TO the CNS from receptors; relay neurones are entirely within the CNS.",
            difficulty: "warmup",
            guideRef: "The Human Nervous System",
          },
          {
            id: "bio-coordination-bm1-02",
            question:
              "What is the role of the myelin sheath that surrounds many axons?",
            options: [
              "It produces neurotransmitters for the synapse",
              "It insulates the axon and speeds up impulse transmission",
              "It carries nutrients from the cell body to the axon tip",
              "It converts electrical impulses into chemical signals",
            ],
            answerIndex: 1,
            explanation:
              "The myelin sheath is a fatty insulating layer. It allows saltatory conduction — the impulse jumps between nodes of Ranvier — greatly increasing transmission speed. It does not produce neurotransmitters or carry nutrients.",
            difficulty: "warmup",
            guideRef: "The Human Nervous System",
          },
          {
            id: "bio-coordination-bm1-03",
            question:
              "How does transmission across a synapse differ from transmission along a neurone?",
            options: [
              "Transmission along the neurone is chemical; across the synapse it is electrical",
              "Transmission across the synapse is chemical (neurotransmitter); along the neurone it is electrical",
              "Both are electrical but the synapse reverses the signal direction",
              "Both are chemical but different neurotransmitters are used in each section",
            ],
            answerIndex: 1,
            explanation:
              "Impulses travel as electrical changes in membrane potential along the neurone. At the synapse, neurotransmitter molecules are released, diffuse across the cleft, and bind to receptors on the post-synaptic membrane to trigger a new electrical impulse.",
            difficulty: "core",
            hints: [
              "Think about what physically crosses the synaptic gap.",
              "Electrical signals travel along membranes; chemical signals travel through fluid.",
              "The gap prevents direct electrical continuity between neurones.",
            ],
            guideRef: "Reflex Arcs",
          },
          {
            id: "bio-coordination-bm1-04",
            question:
              "In a withdrawal reflex, what is the correct order of structures involved?",
            options: [
              "Receptor → motor neurone → relay neurone → sensory neurone → effector",
              "Receptor → sensory neurone → relay neurone → motor neurone → effector",
              "Receptor → relay neurone → sensory neurone → motor neurone → effector",
              "Effector → sensory neurone → relay neurone → motor neurone → receptor",
            ],
            answerIndex: 1,
            explanation:
              "The reflex arc always runs: receptor → sensory neurone → relay neurone (in spinal cord) → motor neurone → effector. This unidirectional pathway is fixed because neurotransmitter release and receptor sites are polarised.",
            difficulty: "warmup",
            guideRef: "Reflex Arcs",
          },
          {
            id: "bio-coordination-bm1-05",
            question:
              "Why can nerve impulses only travel in ONE direction across a synapse?",
            options: [
              "The synaptic cleft is too narrow for reverse diffusion",
              "Neurotransmitter is released only from the pre-synaptic membrane and receptors are only on the post-synaptic membrane",
              "Myelin sheath blocks the backward pathway",
              "The relay neurone prevents backward transmission",
            ],
            answerIndex: 1,
            explanation:
              "Neurotransmitter is only produced and released from vesicles in the pre-synaptic knob, and receptor proteins that respond to it are only present on the post-synaptic membrane. This structural asymmetry enforces one-way transmission.",
            difficulty: "core",
            hints: [
              "Think about which side releases chemicals and which side receives them.",
              "Receptors are specific protein structures — where are they located?",
              "Myelin is on the axon, not involved in the synaptic gap.",
            ],
            strategy:
              "When asked 'why only one way', always link to structural asymmetry (release site vs receptor site), not just 'the gap is too small'.",
            guideRef: "Reflex Arcs",
          },
          {
            id: "bio-coordination-bm1-06",
            question:
              "Which structure in the eye is responsible for the MAJORITY of light refraction?",
            options: ["Lens", "Iris", "Cornea", "Retina"],
            answerIndex: 2,
            explanation:
              "The cornea performs about 70% of the eye's total refraction because light undergoes the greatest change in speed at the air-to-cornea boundary. The lens fine-tunes focus (accommodation) but contributes only about 30% of total refraction.",
            difficulty: "core",
            hints: [
              "Refraction occurs at boundaries between media of different densities.",
              "The biggest density change is at the very front of the eye.",
              "The lens changes shape — it adjusts focus, but does most refraction happen there?",
            ],
            guideRef: "The Eye and Pupil Reflex",
          },
          {
            id: "bio-coordination-bm1-07",
            question:
              "Which layer of the eye contains the photoreceptor cells (rods and cones)?",
            options: ["Cornea", "Iris", "Choroid", "Retina"],
            answerIndex: 3,
            explanation:
              "The retina is the innermost layer at the back of the eye, containing rod cells (sensitive to low light, monochromatic) and cone cells (colour vision, bright light). The choroid is pigmented to absorb stray light; the iris controls pupil size.",
            difficulty: "warmup",
            guideRef: "The Eye and Pupil Reflex",
          },
          {
            id: "bio-coordination-bm1-08",
            question:
              "A person moves from a brightly lit room into a dark room. Which muscle action adjusts the pupil?",
            options: [
              "Radial muscles contract, circular muscles relax — pupil dilates",
              "Circular muscles contract, radial muscles relax — pupil constricts",
              "Both circular and radial muscles contract — pupil constricts",
              "Both circular and radial muscles relax — pupil dilates",
            ],
            answerIndex: 0,
            explanation:
              "In dim light, radial (dilator) muscles of the iris contract and circular (constrictor) muscles relax, widening the pupil to allow more light in. In bright light, the opposite occurs.",
            difficulty: "core",
            hints: [
              "Radial muscles are arranged like spokes — what happens when spokes shorten?",
              "Circular muscles are arranged as a ring — shortening them squeezes the pupil.",
              "Dark room = need MORE light, so pupil should get BIGGER.",
            ],
            guideRef: "The Eye and Pupil Reflex",
          },
          {
            id: "bio-coordination-bm1-09",
            question:
              "During accommodation to view a NEAR object, what change occurs in the lens?",
            options: [
              "Ciliary muscles relax, suspensory ligaments tighten, lens becomes flatter",
              "Ciliary muscles contract, suspensory ligaments slacken, lens becomes more rounded",
              "Ciliary muscles contract, suspensory ligaments tighten, lens becomes flatter",
              "Ciliary muscles relax, suspensory ligaments slacken, lens becomes more rounded",
            ],
            answerIndex: 1,
            explanation:
              "For near vision: ciliary muscles contract → ring gets smaller → suspensory ligaments slacken → elastic lens recoils to a fatter, more curved shape → greater refractive power needed to converge light from a close source.",
            difficulty: "challenge",
            hints: [
              "Ciliary muscles form a ring. Contraction means the ring SHRINKS.",
              "Suspensory ligaments are attached between the ciliary body and lens — if the ring shrinks, the ligaments go slack.",
              "Slack ligaments means less tension on the lens — what shape does an elastic object adopt when tension is released?",
              "Near objects require MORE bending of light, so a FATTER lens is needed.",
            ],
            strategy:
              "Work through the mechanical chain: ciliary muscle → ligament tension → lens shape → refractive power. Don't try to memorise the answer; derive it each time.",
            guideRef: "The Eye and Pupil Reflex",
          },
          {
            id: "bio-coordination-bm1-10",
            question:
              "Which of the following best explains why a reflex response is faster than a voluntary response?",
            options: [
              "Reflexes use thicker, myelinated neurones that conduct faster",
              "Reflexes bypass the cerebral cortex, reducing the number of synapses in the pathway",
              "Reflex impulses travel at twice the speed along the axon",
              "The spinal cord is closer to muscles than the brain, so distance is shorter",
            ],
            answerIndex: 1,
            explanation:
              "The key factor is the number of synapses. Each synapse introduces a delay (~0.5 ms) because of neurotransmitter release and diffusion. By routing through just the spinal cord rather than the brain, the reflex arc has fewer synapses and no cortical processing time.",
            difficulty: "challenge",
            hints: [
              "Myelination does speed conduction, but both reflexes and voluntary actions can use myelinated neurones.",
              "Each synapse adds a delay — count how many synapses each route has.",
              "The question asks about 'faster', not 'shorter distance'.",
              "What role does the cerebral cortex play in voluntary movement?",
            ],
            strategy:
              "For 'why is X faster' questions, always consider synaptic delays alongside conduction speed and pathway length.",
            guideRef: "Reflex Arcs",
          },
        ],
      },

      // ── MCQ PAPER 2 ── pupil reflex, accommodation, adrenaline, blood glucose
      {
        id: "bio-coordination-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description:
          "Pupil reflex, accommodation, adrenaline, blood glucose regulation.",
        questions: [
          {
            id: "bio-coordination-bm2-01",
            question: "Which hormone is secreted by the adrenal glands in response to stress or danger?",
            options: ["Insulin", "Glucagon", "Adrenaline", "Oestrogen"],
            answerIndex: 2,
            explanation:
              "Adrenaline is secreted by the adrenal glands (located above the kidneys) in response to stress, fear, or excitement. It prepares the body for 'fight or flight' by raising heart rate, dilating airways, and increasing blood glucose.",
            difficulty: "warmup",
            guideRef: "Hormonal Control and Blood Glucose Regulation",
          },
          {
            id: "bio-coordination-bm2-02",
            question:
              "After a carbohydrate-rich meal, blood glucose rises. Which hormone is released and what does it do?",
            options: [
              "Glucagon from the pancreas; converts glycogen to glucose in the liver",
              "Insulin from the pancreas; stimulates cells to absorb glucose and converts glucose to glycogen",
              "Adrenaline from the adrenal glands; inhibits glucose uptake by cells",
              "Insulin from the liver; breaks down glycogen into glucose",
            ],
            answerIndex: 1,
            explanation:
              "Rising blood glucose triggers beta cells in the islets of Langerhans (pancreas) to secrete insulin. Insulin promotes uptake of glucose by body cells and stimulates the liver to convert glucose into glycogen (glycogenesis), lowering blood glucose back to normal.",
            difficulty: "warmup",
            guideRef: "Hormonal Control and Blood Glucose Regulation",
          },
          {
            id: "bio-coordination-bm2-03",
            question:
              "A person has not eaten for several hours and their blood glucose falls below normal. Which response occurs?",
            options: [
              "Beta cells secrete more insulin to conserve glucose",
              "Alpha cells secrete glucagon; liver converts glycogen to glucose",
              "Adrenal glands release insulin to raise blood glucose",
              "Alpha cells secrete insulin; muscles absorb less glucose",
            ],
            answerIndex: 1,
            explanation:
              "Low blood glucose stimulates alpha cells in the islets of Langerhans to secrete glucagon. Glucagon stimulates the liver to convert glycogen into glucose (glycogenolysis), releasing it into the blood and restoring normal levels.",
            difficulty: "core",
            hints: [
              "Two cell types in the pancreas: alpha cells and beta cells — which secretes which hormone?",
              "Glucagon and glucose share the same root — glucagon RAISES glucose.",
              "Think liver as the glucose store — where does the new glucose come from?",
            ],
            guideRef: "Hormonal Control and Blood Glucose Regulation",
          },
          {
            id: "bio-coordination-bm2-04",
            question:
              "In Type 1 diabetes, the pancreas cannot produce insulin. Why is this life-threatening if untreated?",
            options: [
              "Blood glucose falls permanently because no glucagon is made",
              "Blood glucose rises to dangerously high levels because cells cannot absorb glucose",
              "Body cells absorb too much glucose, causing hypoglycaemia",
              "The liver produces excess glycogen, causing liver failure",
            ],
            answerIndex: 1,
            explanation:
              "Without insulin, cells cannot take up glucose from the blood (especially muscle and fat cells). Blood glucose remains very high (hyperglycaemia). The kidneys cannot reabsorb all of it, so glucose appears in urine (glycosuria). Cells, starved of glucose, break down fats and proteins instead, which can lead to diabetic ketoacidosis.",
            difficulty: "core",
            hints: [
              "Insulin's job is to LOWER blood glucose — what happens without it?",
              "High blood glucose means glucose stays in blood, not in cells.",
              "Think about what cells use for energy when glucose cannot enter them.",
            ],
            guideRef: "Hormonal Control and Blood Glucose Regulation",
          },
          {
            id: "bio-coordination-bm2-05",
            question:
              "Which of the following is an effect of adrenaline on the body?",
            options: [
              "Decreased heart rate and widened blood vessels in skin",
              "Increased heart rate, raised blood glucose, and widened airways",
              "Lowered blood glucose and slower breathing",
              "Increased digestive activity and reduced muscle blood flow",
            ],
            answerIndex: 1,
            explanation:
              "Adrenaline prepares the body for 'fight or flight': it increases heart rate (more blood to muscles), converts glycogen to glucose (more fuel), dilates bronchioles (more oxygen), and redirects blood from digestive organs to muscles. Digestion is REDUCED, not increased.",
            difficulty: "warmup",
            guideRef: "Hormonal Control and Blood Glucose Regulation",
          },
          {
            id: "bio-coordination-bm2-06",
            question:
              "The pupil reflex is an example of a reflex arc. Which nerve is responsible for the constriction response when bright light is detected?",
            options: [
              "The optic nerve carries both the sensory and motor signals",
              "Sensory signal travels via the optic nerve; motor signal travels via the oculomotor nerve to the circular iris muscles",
              "Sensory signal travels via the oculomotor nerve; motor signal via the optic nerve",
              "Both signals travel through the trigeminal nerve",
            ],
            answerIndex: 1,
            explanation:
              "Light detected by retinal photoreceptors → optic nerve (sensory) → brain stem → oculomotor nerve (motor) → circular muscles of the iris contract → pupil constricts. The optic nerve is sensory only; it does not carry motor commands.",
            difficulty: "challenge",
            hints: [
              "Sensory (afferent) signals always travel TO the CNS — which nerve connects the eye to the brain?",
              "Motor (efferent) signals travel FROM the CNS — the oculomotor nerve controls eye muscles.",
              "The pupil reflex arc goes: retina → optic nerve → brain stem → oculomotor nerve → iris.",
            ],
            guideRef: "The Eye and Pupil Reflex",
          },
          {
            id: "bio-coordination-bm2-07",
            question:
              "A student shines a torch into their left eye. Both pupils constrict. Why does the RIGHT pupil also constrict?",
            options: [
              "Light from the left eye scatters through the skull and stimulates the right retina",
              "Nerve fibres from the left eye cross at the optic chiasma and the consensual reflex pathway stimulates the right iris",
              "The right eye independently detects increased ambient light",
              "Adrenaline released from the brain constricts both pupils simultaneously",
            ],
            answerIndex: 1,
            explanation:
              "Optic nerve fibres from each eye partially cross at the optic chiasma. The brain stem relay for the pupil reflex sends signals bilaterally — the consensual pupillary reflex — so constricting signals reach both oculomotor nerves, causing both pupils to constrict even when only one eye is stimulated.",
            difficulty: "challenge",
            hints: [
              "The optic chiasma is where some fibres from each eye cross to the opposite side.",
              "The brain stem sends signals to both eyes — this is called the consensual reflex.",
              "The right pupil constricting is NORMAL and expected — clinically it checks brain stem integrity.",
            ],
            strategy:
              "For IGCSE, the key point is that the reflex is bilateral due to crossing nerve pathways in the brain stem. You don't need to name the optic chiasma at IGCSE, but knowing it helps you reason.",
            guideRef: "The Eye and Pupil Reflex",
          },
          {
            id: "bio-coordination-bm2-08",
            question:
              "Which cells in the pancreas secrete glucagon?",
            options: ["Beta cells", "Alpha cells", "Delta cells", "Exocrine acinar cells"],
            answerIndex: 1,
            explanation:
              "Alpha cells in the islets of Langerhans secrete glucagon in response to low blood glucose. Beta cells secrete insulin. Delta cells secrete somatostatin (not required at IGCSE). Acinar cells are exocrine cells that secrete digestive enzymes — not hormones.",
            difficulty: "core",
            hints: [
              "Alphabetical order: Alpha comes before Beta — Alpha secretes Glucagon, Beta secretes Insulin.",
              "Islets of Langerhans are the endocrine portions of the pancreas.",
            ],
            guideRef: "Hormonal Control and Blood Glucose Regulation",
          },
          {
            id: "bio-coordination-bm2-09",
            question:
              "What is the term for the process by which the liver converts glycogen back into glucose?",
            options: ["Glycogenesis", "Glycolysis", "Glycogenolysis", "Gluconeogenesis"],
            answerIndex: 2,
            explanation:
              "Glycogenolysis is the breakdown of glycogen into glucose. Glycogenesis is the synthesis of glycogen FROM glucose (the opposite). Glycolysis is the breakdown of glucose for energy (cellular respiration). Gluconeogenesis is making glucose from non-carbohydrate precursors.",
            difficulty: "challenge",
            hints: [
              "'Lysis' means breaking down — glycogen-lysis = breaking down glycogen.",
              "'Genesis' means making — glycogen-genesis = making glycogen.",
              "The stimulus is LOW blood glucose — so you need to release glucose, not store it.",
            ],
            guideRef: "Hormonal Control and Blood Glucose Regulation",
          },
          {
            id: "bio-coordination-bm2-10",
            question:
              "In which organ are the islets of Langerhans, the source of insulin and glucagon, located?",
            options: ["Liver", "Adrenal gland", "Pancreas", "Kidney"],
            answerIndex: 2,
            explanation:
              "The islets of Langerhans are clusters of endocrine cells within the pancreas. The pancreas is a dual-function gland — its exocrine cells produce digestive enzymes and its endocrine islet cells produce insulin (beta cells) and glucagon (alpha cells).",
            difficulty: "warmup",
            guideRef: "Hormonal Control and Blood Glucose Regulation",
          },
        ],
      },

      // ── MCQ PAPER 3 ── homeostasis, temperature control, sweating, vasoconstriction
      {
        id: "bio-coordination-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description:
          "Homeostasis, temperature control, sweating, and vasoconstriction.",
        questions: [
          {
            id: "bio-coordination-bm3-01",
            question:
              "Which of the following is the correct definition of homeostasis?",
            options: [
              "The maintenance of a constant external environment around an organism",
              "The maintenance of a constant internal environment within the organism",
              "The regulation of blood glucose only, using insulin and glucagon",
              "The process of detecting stimuli and producing a response",
            ],
            answerIndex: 1,
            explanation:
              "Homeostasis is the maintenance of a stable internal environment despite changes in external conditions. It involves regulation of body temperature, blood glucose, water balance, and other variables. It is NOT limited to one variable.",
            difficulty: "warmup",
            guideRef: "Homeostasis: Temperature Control",
          },
          {
            id: "bio-coordination-bm3-02",
            question:
              "What is the normal core body temperature in humans, and where is the thermoregulatory centre located?",
            options: [
              "36°C; cerebellum",
              "37°C; hypothalamus",
              "37°C; medulla oblongata",
              "38°C; hypothalamus",
            ],
            answerIndex: 1,
            explanation:
              "Normal human core body temperature is approximately 37°C. The hypothalamus in the brain acts as the body's thermostat — it detects changes in blood temperature and coordinates the corrective responses.",
            difficulty: "warmup",
            guideRef: "Homeostasis: Temperature Control",
          },
          {
            id: "bio-coordination-bm3-03",
            question:
              "When the body is too HOT, which TWO responses help reduce body temperature?",
            options: [
              "Vasoconstriction and increased metabolic rate",
              "Vasodilation and sweating",
              "Shivering and vasoconstriction",
              "Vasodilation and increased hair erection",
            ],
            answerIndex: 1,
            explanation:
              "Vasodilation brings more blood to the skin surface so heat can radiate away. Sweating releases water onto the skin; evaporation requires heat energy (latent heat of vaporisation), cooling the skin. Vasoconstriction and shivering are responses to cold, not heat.",
            difficulty: "warmup",
            guideRef: "Homeostasis: Temperature Control",
          },
          {
            id: "bio-coordination-bm3-04",
            question:
              "How does sweating cool the body?",
            options: [
              "Sweat absorbs heat from the air around the skin",
              "Evaporation of sweat removes latent heat from the skin surface",
              "Sweat dilutes the blood, reducing its temperature",
              "Sweat glands use metabolic reactions that cool surrounding tissue",
            ],
            answerIndex: 1,
            explanation:
              "Evaporation of water (sweat) from the skin surface is an endothermic process — it requires energy. This energy is taken from the skin and underlying blood, lowering their temperature. This is called the latent heat of vaporisation.",
            difficulty: "core",
            hints: [
              "Think about what happens when you step out of a swimming pool on a breezy day.",
              "Evaporation requires energy — where does that energy come from?",
              "The key word is 'latent heat of vaporisation'.",
            ],
            guideRef: "Homeostasis: Temperature Control",
          },
          {
            id: "bio-coordination-bm3-05",
            question:
              "What is vasodilation and how does it help cool the body?",
            options: [
              "Constriction of arterioles near the skin; less blood near surface; less heat lost",
              "Widening of arterioles near the skin; more blood near surface; more heat radiated away",
              "Widening of veins deep in the body; blood moves away from skin",
              "Constriction of capillaries; reduces blood pressure",
            ],
            answerIndex: 1,
            explanation:
              "Vasodilation is the widening of arterioles just beneath the skin. More blood flows near the skin surface; the skin flushes pink and more heat is lost by radiation and convection to the environment. This is a key cooling mechanism.",
            difficulty: "core",
            hints: [
              "'Dilation' = widening. 'Vaso' = blood vessel.",
              "Wider vessels → more blood flow → more heat at the surface.",
              "Think of a radiator — more water through it means more heat released.",
            ],
            guideRef: "Homeostasis: Temperature Control",
          },
          {
            id: "bio-coordination-bm3-06",
            question:
              "When the body is too COLD, which response generates heat through rapid muscle contractions?",
            options: [
              "Vasodilation",
              "Sweating",
              "Shivering",
              "Hair erection (goosebumps)",
            ],
            answerIndex: 2,
            explanation:
              "Shivering is rapid involuntary skeletal muscle contractions. Muscle contraction requires ATP; the inefficiency of this process releases heat as a by-product, warming the body. Goosebumps trap an insulating layer of air (effective in furry animals but not humans).",
            difficulty: "warmup",
            guideRef: "Homeostasis: Temperature Control",
          },
          {
            id: "bio-coordination-bm3-07",
            question:
              "A runner exercises vigorously. Their skin becomes red and they sweat profusely. Which mechanisms are being used simultaneously?",
            options: [
              "Vasodilation only",
              "Vasoconstriction and shivering",
              "Vasodilation and sweating",
              "Hair erection and reduced blood flow to skin",
            ],
            answerIndex: 2,
            explanation:
              "Exercise raises core temperature. The hypothalamus triggers both vasodilation (skin flushes red as blood moves to the surface) and sweating (sweat glands produce more sweat for evaporative cooling). These work together to dissipate the extra heat generated by muscles.",
            difficulty: "core",
            hints: [
              "Red skin = more blood near the surface = vasodilation.",
              "Sweating = evaporative cooling.",
              "Both responses aim to LOSE heat — the body is too hot from exercise.",
            ],
            guideRef: "Homeostasis: Temperature Control",
          },
          {
            id: "bio-coordination-bm3-08",
            question:
              "The hypothalamus acts as a thermostat. How does it detect that the body temperature has risen?",
            options: [
              "It receives nerve signals from sweat glands about sweat production rate",
              "Thermoreceptors in the skin send signals to the hypothalamus",
              "Blood flowing through the hypothalamus is above 37°C, stimulating its thermosensitive neurons directly",
              "The hypothalamus measures the rate of metabolic reactions in the liver",
            ],
            answerIndex: 2,
            explanation:
              "The hypothalamus contains thermosensitive neurons that directly monitor blood temperature. When blood flowing through is warmer than the set point (~37°C), these neurons trigger cooling responses. Peripheral thermoreceptors in the skin provide additional (anticipatory) signals, but the core thermostat is in the hypothalamus itself.",
            difficulty: "challenge",
            hints: [
              "The hypothalamus is in the brain — blood passes through it constantly.",
              "It doesn't just receive signals from outside — it monitors temperature DIRECTLY.",
              "Peripheral skin receptors help anticipate temperature changes, but the set-point detection is in the hypothalamus.",
            ],
            strategy:
              "For IGCSE, accept that both central (hypothalamus) and peripheral (skin) receptors play a role, but emphasise the hypothalamus as the control centre.",
            guideRef: "Homeostasis: Temperature Control",
          },
          {
            id: "bio-coordination-bm3-09",
            question:
              "Which of the following correctly describes negative feedback in thermoregulation?",
            options: [
              "An increase in body temperature causes responses that further increase body temperature",
              "A deviation from the set point triggers responses that return the variable back towards the set point",
              "The body temperature is kept constant by stopping all metabolic reactions",
              "Cooling responses are triggered by a decrease in body temperature",
            ],
            answerIndex: 1,
            explanation:
              "Negative feedback means a deviation from the set point triggers a response that OPPOSES the deviation, returning the variable back to normal. If temperature rises, cooling responses are triggered; if it falls, warming responses occur. This is the basis of homeostasis.",
            difficulty: "core",
            hints: [
              "'Negative' means the response is OPPOSITE to the change.",
              "Think: too hot → cool down; too cold → warm up.",
              "Positive feedback would amplify the change — that is NOT homeostasis.",
            ],
            guideRef: "Homeostasis: Temperature Control",
          },
          {
            id: "bio-coordination-bm3-10",
            question:
              "Enzymes work best at 37°C in the human body. Why is maintaining this temperature so critical for metabolism?",
            options: [
              "Above 37°C, enzymes become permanently inactive because they run out of substrate",
              "At temperatures significantly above or below 37°C, enzyme shape changes, reducing active site complementarity and slowing metabolic reactions",
              "Below 37°C, enzymes are destroyed by the immune system",
              "Enzyme activity is unaffected by temperature; only pH matters",
            ],
            answerIndex: 1,
            explanation:
              "Enzymes are proteins with a specific 3-D shape, including the active site. Even a small rise above the optimum can begin to denature the enzyme (alter its tertiary structure), reducing the complementarity between active site and substrate. Below the optimum, reduced kinetic energy means fewer enzyme-substrate collisions. Either deviation slows metabolism.",
            difficulty: "challenge",
            hints: [
              "Enzymes are proteins — heat denatures proteins by breaking hydrogen bonds.",
              "Denaturation changes the shape of the active site.",
              "Low temperature = less kinetic energy = fewer collisions, not denaturation.",
              "Link to the induced-fit or lock-and-key model of enzyme action.",
            ],
            strategy:
              "Always specify the mechanism: denaturing (high T) vs. reduced collision frequency (low T). Both reduce enzyme effectiveness but by different mechanisms.",
            guideRef: "Homeostasis: Temperature Control",
          },
        ],
      },

      // ── MCQ PAPER 4 ── plant tropisms, auxin, nervous vs hormonal comparison, synoptic
      {
        id: "bio-coordination-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description:
          "Plant tropisms, auxin, nervous vs hormonal control, and synoptic challenge.",
        questions: [
          {
            id: "bio-coordination-bm4-01",
            question: "What is a tropism in plants?",
            options: [
              "A hormone that controls plant growth",
              "A directional growth response by a plant to a stimulus",
              "The movement of a plant towards sunlight",
              "A reflex response controlled by the plant nervous system",
            ],
            answerIndex: 1,
            explanation:
              "A tropism is a directional growth response of a plant or part of a plant to an external stimulus. The direction of growth is determined by the direction of the stimulus. Plants have no nervous system — tropisms are driven by differential hormone distribution.",
            difficulty: "warmup",
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
          },
          {
            id: "bio-coordination-bm4-02",
            question:
              "A shoot tip is illuminated from one side. Which of the following correctly describes auxin distribution and the resulting growth response?",
            options: [
              "Auxin moves to the illuminated side; that side grows faster; shoot bends away from light",
              "Auxin moves to the shaded side; that side grows faster; shoot bends towards light",
              "Auxin is destroyed on the illuminated side; growth is equal on both sides",
              "Auxin moves to the shaded side; that side grows slower; shoot bends towards light",
            ],
            answerIndex: 1,
            explanation:
              "Auxin (IAA) is redistributed away from the light source to the shaded side of the shoot. On the shaded side, higher auxin concentration promotes greater cell elongation. The shaded side grows faster and longer, causing the tip to curve towards the light (positive phototropism).",
            difficulty: "core",
            hints: [
              "Auxin moves AWAY from light — towards the shade.",
              "Higher auxin = more cell elongation in shoots.",
              "The side that elongates more is longer — which way does a longer side push the tip?",
            ],
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
          },
          {
            id: "bio-coordination-bm4-03",
            question:
              "What is geotropism (gravitropism), and how does auxin explain the downward growth of roots?",
            options: [
              "Roots grow towards gravity; high auxin on the lower side INHIBITS root elongation, so the upper side elongates more, bending the root downwards",
              "Roots grow towards gravity; high auxin on the lower side promotes root elongation, so the root tip bends upwards",
              "Roots grow away from gravity; low auxin on the lower side promotes elongation",
              "Roots grow towards gravity because of gravitational pull on the cells, not auxin",
            ],
            answerIndex: 0,
            explanation:
              "Auxin accumulates on the lower side of a horizontal root due to gravity. In roots (unlike shoots), high auxin INHIBITS elongation. So the lower side elongates less than the upper side, and the root bends downwards — towards gravity (positive geotropism).",
            difficulty: "challenge",
            hints: [
              "Key distinction: auxin PROMOTES elongation in SHOOTS but INHIBITS elongation in ROOTS at the same concentration.",
              "Gravity causes auxin to settle on the lower side.",
              "Lower side has more auxin → in roots, this INHIBITS growth → lower side shorter → tip bends down.",
            ],
            strategy:
              "Draw a horizontal root, mark where auxin accumulates (lower), then ask: does high auxin promote or inhibit in roots? This is the classic exam trap.",
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
          },
          {
            id: "bio-coordination-bm4-04",
            question:
              "An investigator removes the tip of a seedling shoot and replaces it with a plain agar block (no auxin). The seedling is then illuminated from one side. What will happen?",
            options: [
              "The shoot will grow straight upward with no bending",
              "The shoot will bend towards the light because the stump still produces auxin",
              "The shoot will bend away from the light due to photosynthesis in the stump",
              "The shoot will not grow at all and will die",
            ],
            answerIndex: 0,
            explanation:
              "The tip is the source of auxin. Without the tip (and with only a plain agar block providing no auxin), no auxin gradient can be set up. Growth may continue slightly using stored resources, but no differential elongation occurs and no bending towards or away from light is seen. The shoot grows straight (or very little).",
            difficulty: "core",
            hints: [
              "Where is auxin produced? The tip.",
              "If the tip is gone and agar has no auxin, what happens to the auxin gradient?",
              "No gradient = equal growth on both sides = no bending.",
            ],
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
          },
          {
            id: "bio-coordination-bm4-05",
            question:
              "Weed killers (herbicides) such as 2,4-D are synthetic auxins. At high concentrations they selectively kill broad-leaved weeds but not narrow-leaved grass. Which of the following best explains this selectivity?",
            options: [
              "Grass lacks the receptor proteins for auxin and is completely unaffected",
              "Broad-leaved plants are more sensitive to high auxin concentrations and their growth becomes abnormally stimulated leading to death; grass can tolerate these concentrations",
              "The herbicide is broken down by grass cells before it can act",
              "Grass has thicker cell walls that prevent auxin uptake",
            ],
            answerIndex: 1,
            explanation:
              "At very high auxin concentrations, broad-leaved dicot plants over-stimulate cell growth — stems grow abnormally fast, vascular tissue is disrupted, and the plant ultimately dies. Monocot grasses are physiologically less responsive to the same concentrations, so they are less affected. This is a practical application of differential auxin sensitivity.",
            difficulty: "challenge",
            hints: [
              "2,4-D mimics auxin — so think about what TOO MUCH auxin does to a plant.",
              "Different plant types (monocots vs dicots) respond differently to auxin.",
              "Over-stimulation of growth can be just as damaging as under-stimulation.",
            ],
            strategy:
              "For herbicide questions: identify that synthetic auxins work by over-stimulating — not by blocking. Then explain the differential sensitivity between plant types.",
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
          },
          {
            id: "bio-coordination-bm4-06",
            question:
              "Which of the following is a key difference between nervous and hormonal control?",
            options: [
              "Nervous control is slower and longer-lasting; hormonal control is faster and short-lived",
              "Nervous control is faster and more localised; hormonal control is slower, travels in blood, and has widespread or long-lasting effects",
              "Both nervous and hormonal systems use electrical signals along the same pathways",
              "Hormonal signals are always faster because hormones travel at the speed of blood flow",
            ],
            answerIndex: 1,
            explanation:
              "Nervous control: fast (milliseconds), short-lived, precise/localised (targets specific cells or organs via neurones). Hormonal control: slower (seconds to hours), longer-lasting, transported in blood to widespread target tissues. Knowing these contrasts is fundamental to IGCSE Biology.",
            difficulty: "core",
            hints: [
              "Nerve impulses travel at up to 120 m/s — blood flows at about 0.5 m/s.",
              "Hormones persist in the blood until broken down — nerve signals stop when the impulse ends.",
              "A reflex takes ~50 ms; a hormonal response to stress may take seconds.",
            ],
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
          },
          {
            id: "bio-coordination-bm4-07",
            question:
              "A student argues that the hormonal system is 'always better' than the nervous system because hormones can reach every cell in the body. What is a key flaw in this argument?",
            options: [
              "Hormones cannot reach cells in the brain",
              "The hormonal system lacks the speed and precision needed for rapid, localised responses such as reflexes",
              "The nervous system also travels in the bloodstream, so there is no difference",
              "Hormones are too large to enter cells and therefore have no effect",
            ],
            answerIndex: 1,
            explanation:
              "The hormonal system's broad reach is useful for long-term or widespread responses (e.g. puberty, blood glucose regulation) but makes it poorly suited for rapid, specific responses. A reflex withdrawal takes ~50 ms; a hormonal response could take seconds or longer — too slow to prevent injury. Each system is adapted for different purposes.",
            difficulty: "challenge",
            hints: [
              "Think of a situation where you need a FAST, SPECIFIC response — which system handles that?",
              "Hormones reaching every cell is an advantage for some tasks but a disadvantage for precision.",
              "The question tests whether you understand each system's limitations, not just its strengths.",
            ],
            strategy:
              "Evaluate questions: always argue BOTH sides before concluding. Here — hormonal system advantages and limits vs. nervous system advantages.",
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
          },
          {
            id: "bio-coordination-bm4-08",
            question:
              "A gardener notices that plants on a windowsill always grow towards the window. She rotates the plant 180°. After one week, the plant has bent back towards the window. What does this demonstrate?",
            options: [
              "The plant has a memory and prefers that direction",
              "Phototropism is a continuous directional growth response driven by current light direction",
              "The plant is negatively geotropic and therefore grows upwards and sideways",
              "Auxin production increases permanently once the plant is placed near a window",
            ],
            answerIndex: 1,
            explanation:
              "This demonstrates positive phototropism: the shoot grows towards the light source. When rotated, the new light direction creates a new auxin gradient, causing new differential elongation. The plant 'bends back' because it is continually responding to the current stimulus, not a remembered one.",
            difficulty: "core",
            hints: [
              "Tropisms are responses to CURRENT stimuli — not stored information.",
              "After rotation, the light now comes from a different angle — which side of the shoot is now shaded?",
              "New shaded side → more auxin → more elongation → bending towards light again.",
            ],
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
          },
          {
            id: "bio-coordination-bm4-09",
            question:
              "A student tests a hypothesis: 'Auxin is produced in the shoot tip.' She removes the tip and observes no further growth. She then replaces the tip — growth resumes. Which additional control experiment would strengthen the conclusion?",
            options: [
              "Repeat the experiment with roots instead of shoots",
              "Replace the tip with an agar block containing auxin extracted from the tip and observe resumed growth",
              "Grow another seedling in the dark to compare growth rates",
              "Cut the shoot at the base instead of the tip to confirm auxin is only at the top",
            ],
            answerIndex: 1,
            explanation:
              "Replacing the tip with an auxin-containing agar block demonstrates that it is the CHEMICAL (auxin) in the tip, not the tip tissue itself, that causes growth. This controls for any physical effect of the tip and isolates the chemical as the active agent — a key scientific principle of identifying the variable.",
            difficulty: "challenge",
            hints: [
              "What is the difference between 'the tip causes growth' and 'a chemical in the tip causes growth'?",
              "A control experiment isolates the VARIABLE being tested — here, the chemical vs. the tissue.",
              "If growth resumes with the auxin agar but not plain agar, that proves the chemical is responsible.",
            ],
            strategy:
              "For experimental design: always ask — 'what exactly am I testing?' Then design a control that differs by ONLY that one variable.",
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
          },
          {
            id: "bio-coordination-bm4-10",
            question:
              "A doctor tests a patient's reflexes with a tendon hammer. The knee-jerk reflex is absent. Which of the following could explain this? (Select the most precise answer.)",
            options: [
              "The patient's brain has been damaged, preventing voluntary movement",
              "Damage to the sensory or motor neurones in the reflex arc for that reflex, or damage within the spinal cord at that level",
              "Hormonal imbalance reducing muscle contraction strength",
              "Excess insulin lowering blood glucose and weakening muscles",
            ],
            answerIndex: 1,
            explanation:
              "A reflex arc is a local circuit: damage anywhere in the arc (sensory neurone, relay neurone in the spinal cord, motor neurone, or the neuromuscular junction) abolishes the reflex. Brain damage affects voluntary movement but not spinal reflexes (they can actually become exaggerated). Hormonal causes would not selectively eliminate one reflex.",
            difficulty: "challenge",
            hints: [
              "The knee-jerk reflex arc runs through the lumbar spinal cord — the brain is not part of the reflex.",
              "Trace the arc: where could damage block the signal?",
              "Brain damage causes exaggerated reflexes (upper motor neuron lesion), not absent ones.",
            ],
            strategy:
              "Absent reflex = lower motor neuron lesion (arc is broken). Exaggerated reflex = upper motor neuron lesion (brain/cord control is lost). This synoptic link connects biology to clinical medicine.",
            guideRef: "Reflex Arcs",
          },
        ],
      },
    ],
    qaPapers: [
      // ── QA PAPER 1 ── neurone types, synapse, reflex arc, eye structure
      {
        id: "bio-coordination-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Neurone types, synapse, reflex arc, and eye structure.",
        questions: [
          {
            id: "bio-coordination-bq1-01",
            question:
              "State the THREE types of neurone found in the nervous system and give the direction of impulse travel for each. [3]",
            marks: 3,
            modelAnswer:
              "Sensory neurones carry impulses FROM receptors TO the CNS. Relay neurones carry impulses WITHIN the CNS (connecting sensory to motor pathways). Motor neurones carry impulses FROM the CNS TO effectors (muscles or glands).",
            markScheme: [
              "Sensory neurone — from receptor to CNS (1)",
              "Relay neurone — within the CNS / connects sensory to motor (1)",
              "Motor neurone — from CNS to effector/muscle/gland (1)",
            ],
            difficulty: "warmup",
            guideRef: "The Human Nervous System",
          },
          {
            id: "bio-coordination-bq1-02",
            question:
              "Describe the structure and function of the myelin sheath. [3]",
            marks: 3,
            modelAnswer:
              "The myelin sheath is a fatty (lipid) insulating layer that wraps around the axon of many neurones. It is produced by Schwann cells. It insulates the axon electrically, so the nerve impulse cannot leak across the membrane between gaps (nodes of Ranvier). This allows saltatory conduction — the impulse jumps from node to node — greatly increasing the speed of transmission.",
            markScheme: [
              "Fatty / lipid insulating layer around the axon (1)",
              "Produced by Schwann cells / description of wrapping (credit if stated) (0 — not required at IGCSE but credit if accurate)",
              "Insulates axon / prevents ion leakage across membrane (1)",
              "Saltatory conduction / impulse jumps between nodes of Ranvier (1)",
              "Increases speed of impulse transmission (can replace saltatory conduction point) (1)",
            ],
            commonError:
              "Many students say myelin 'carries' the impulse — it does not. It insulates the axon so the impulse can jump between the gaps (nodes of Ranvier) more quickly.",
            difficulty: "core",
            hints: [
              "Think about what the sheath is MADE of — what does fat do to electricity?",
              "Where are the gaps in the myelin sheath and what happens there?",
              "What would transmission look like WITHOUT myelin — slower or faster?",
            ],
            guideRef: "The Human Nervous System",
          },
          {
            id: "bio-coordination-bq1-03",
            question:
              "A student pricks their finger on a pin. Describe the reflex arc that causes them to pull their hand away, naming the structures involved in the correct order. [5]",
            marks: 5,
            modelAnswer:
              "1. The pin is the stimulus. 2. Pain/pressure receptors in the skin of the finger detect the stimulus. 3. A sensory neurone carries the impulse from the receptor to the spinal cord (CNS). 4. In the spinal cord, a relay neurone receives the impulse and passes it on. 5. A motor neurone carries the impulse from the spinal cord to the effector. 6. The effector (arm muscle / biceps) contracts. 7. The response is the hand being pulled away.",
            markScheme: [
              "Stimulus: sharp object / pin (1)",
              "Receptor in skin detects stimulus (1)",
              "Sensory neurone carries impulse to spinal cord / CNS (1)",
              "Relay neurone in spinal cord (1)",
              "Motor neurone carries impulse from spinal cord to effector (1)",
              "Effector is a muscle / muscle contracts / arm pulled away (1)",
            ],
            commonError:
              "Students frequently omit the relay neurone or place it outside the spinal cord. Relay neurones are always within the CNS.",
            difficulty: "warmup",
            hints: [
              "Write out the sequence: stimulus → receptor → ... → response",
              "There are three types of neurone — make sure all three appear in your answer.",
              "Where exactly does the relay neurone sit?",
            ],
            guideRef: "Reflex Arcs",
          },
          {
            id: "bio-coordination-bq1-04",
            question:
              "Explain why reflexes are FASTER than voluntary responses. [3]",
            marks: 3,
            modelAnswer:
              "Reflexes are faster because the nerve impulse travels via the spinal cord rather than up to the brain. This means fewer synapses are involved in the reflex arc compared with a voluntary pathway. Each synapse introduces a delay because neurotransmitter must be released, diffuse across the cleft, and trigger a new impulse. Fewer synapses means less total delay, so the reflex response happens sooner.",
            markScheme: [
              "Reflex arc goes through spinal cord, not the brain / bypasses cerebral cortex (1)",
              "Fewer synapses in the reflex arc (1)",
              "Each synapse introduces a delay (neurotransmitter release / diffusion) (1)",
            ],
            commonError:
              "Students often say 'impulses travel faster in reflexes.' This is not accurate — conduction speed along the axon is the same. The difference is in the NUMBER of synapses and absence of brain processing.",
            difficulty: "core",
            hints: [
              "Draw the voluntary pathway vs. the reflex pathway — how many synapses does each have?",
              "Why does a synapse slow things down?",
              "What does the brain do during a voluntary action that the reflex skips?",
            ],
            guideRef: "Reflex Arcs",
          },
          {
            id: "bio-coordination-bq1-05",
            question:
              "Describe how a nerve impulse is transmitted across a synapse. [4]",
            marks: 4,
            modelAnswer:
              "An electrical impulse arrives at the pre-synaptic knob (terminal bouton). Vesicles containing neurotransmitter fuse with the pre-synaptic membrane and release neurotransmitter into the synaptic cleft. The neurotransmitter diffuses across the cleft and binds to specific receptor proteins on the post-synaptic membrane. This triggers a new electrical impulse in the post-synaptic neurone. The neurotransmitter is then broken down by enzymes or re-absorbed into the pre-synaptic neurone.",
            markScheme: [
              "Electrical impulse arrives at pre-synaptic knob (1)",
              "Neurotransmitter released from vesicles into synaptic cleft (1)",
              "Neurotransmitter diffuses across cleft (1)",
              "Binds to receptors on post-synaptic membrane (1)",
              "New electrical impulse generated in post-synaptic neurone (1)",
              "Neurotransmitter broken down / recycled (credit, not required for full marks)",
            ],
            commonError:
              "Students often say 'electricity crosses the gap' — it does not. The electrical signal stops at the pre-synaptic membrane; only the CHEMICAL (neurotransmitter) crosses the gap.",
            difficulty: "core",
            hints: [
              "Which side releases the chemical? Which side receives it?",
              "What is inside the vesicles in the pre-synaptic knob?",
              "How does the neurotransmitter cross the gap — active transport, or diffusion?",
              "What happens to the neurotransmitter after it has done its job?",
            ],
            guideRef: "Reflex Arcs",
          },
          {
            id: "bio-coordination-bq1-06",
            question:
              "Name and describe the function of FOUR named structures visible in a cross-section of the human eye. [4]",
            marks: 4,
            modelAnswer:
              "1. Cornea — transparent layer at the front; performs most (~70%) of the light refraction, bending light as it enters the eye. 2. Lens — transparent, biconvex structure behind the iris; fine-tunes focusing (accommodation) by changing shape. 3. Retina — inner layer at the back; contains photoreceptor cells (rods and cones) that convert light into electrical impulses. 4. Iris — coloured ring of muscle; controls the size of the pupil (the hole at its centre) to regulate how much light enters.",
            markScheme: [
              "Cornea — refracts / bends light entering the eye (1)",
              "Lens — focuses light / changes shape for accommodation (1)",
              "Retina — contains photoreceptors / rods and cones / converts light to nerve impulses (1)",
              "Iris — controls pupil size / regulates amount of light entering (1)",
              "Accept also: sclera (white protective layer), choroid (absorbs stray light), optic nerve (carries impulses to brain), ciliary body/muscles (control lens shape) — 1 mark each for correct name + function",
            ],
            difficulty: "warmup",
            guideRef: "The Eye and Pupil Reflex",
          },
          {
            id: "bio-coordination-bq1-07",
            question:
              "Explain the difference between rods and cones in the retina, including their distribution and the conditions under which each type functions best. [4]",
            marks: 4,
            modelAnswer:
              "Rod cells are sensitive to low light intensity and give black-and-white (monochromatic) vision. They are distributed across the entire retina except the fovea, and are most numerous in the periphery. Cone cells require bright light to function and provide colour vision; they contain different photopigments sensitive to red, green, or blue wavelengths. Cones are concentrated at the fovea (the area of sharpest vision, directly in line with the line of sight). At night, only rods are active, so colours cannot be distinguished.",
            markScheme: [
              "Rods: sensitive to low light / dim light (1)",
              "Rods: black and white / no colour discrimination (1)",
              "Cones: require bright light / high light intensity (1)",
              "Cones: colour vision / different types for different wavelengths (1)",
              "Cones concentrated at the fovea (credit for this bonus point)",
            ],
            commonError:
              "Students often say 'rods see at night' without clarifying that they only give monochromatic vision. In exams, always state what type of vision each cell provides.",
            difficulty: "core",
            hints: [
              "Think about why you can't see colour in a very dark room.",
              "Where is your central vision sharpest? That's the fovea — which cells are there?",
              "Three types of cone = three primary colours of light.",
            ],
            guideRef: "The Eye and Pupil Reflex",
          },
          {
            id: "bio-coordination-bq1-08",
            question:
              "A student views a nearby book, then looks up at a distant mountain. Describe the changes that occur in the eye to focus on each object. [5]",
            marks: 5,
            modelAnswer:
              "For the nearby book: ciliary muscles contract → the ciliary body ring becomes smaller → suspensory ligaments slacken (go slack) → the elastic lens is no longer stretched and recoils to a thicker, more curved shape → greater refraction bends light from the close source onto the retina. For the distant mountain: ciliary muscles relax → the ciliary body ring expands → suspensory ligaments are pulled taut (tighten) → the lens is stretched and becomes thinner and flatter → less refraction is needed because light from a distant source arrives nearly parallel.",
            markScheme: [
              "Near object: ciliary muscles CONTRACT (1)",
              "Suspensory ligaments slacken / go slack (1)",
              "Lens becomes fatter / thicker / more curved (1)",
              "Distant object: ciliary muscles RELAX (1)",
              "Suspensory ligaments tighten / become taut (1)",
              "Lens becomes thinner / flatter / less curved (1)",
            ],
            commonError:
              "The most common error is reversing the lens shape. Near vision requires a FATTER lens (more converging power). Students often confuse 'ciliary muscles contract' with 'ligaments tighten' — they are opposite: contraction shrinks the ring, which SLACKENS the ligaments.",
            difficulty: "challenge",
            hints: [
              "Ciliary muscles form a ring. What happens to the ring's diameter when the muscles CONTRACT?",
              "If the ring shrinks, are the ligaments pulled tight or do they go slack?",
              "Slack ligaments → no tension on lens → lens pings back to natural shape. Is that fat or flat?",
              "Near object needs MORE bending power — which lens shape gives more refraction?",
            ],
            strategy:
              "Always derive the answer by tracing the mechanical chain: muscle state → ring diameter → ligament tension → lens shape → refractive power. Never try to memorise isolated facts.",
            guideRef: "The Eye and Pupil Reflex",
          },
          {
            id: "bio-coordination-bq1-09",
            question:
              "Explain why transmission at a synapse can ONLY occur in one direction. [2]",
            marks: 2,
            modelAnswer:
              "Neurotransmitter is only produced and released from vesicles in the pre-synaptic membrane (knob). Receptor proteins that respond to the neurotransmitter are only present on the post-synaptic membrane. Because only the pre-synaptic side can release the chemical and only the post-synaptic side can receive it, the signal can only travel in one direction.",
            markScheme: [
              "Neurotransmitter released only from pre-synaptic membrane / vesicles (1)",
              "Receptors for neurotransmitter only on post-synaptic membrane (1)",
            ],
            difficulty: "core",
            hints: [
              "Which side has the vesicles of neurotransmitter?",
              "Which side has the receptor proteins?",
            ],
            guideRef: "Reflex Arcs",
          },
          {
            id: "bio-coordination-bq1-10",
            question:
              "A patient is given a drug that blocks the breakdown of neurotransmitter in synapses. Predict and explain the effect on nervous system signalling. [3]",
            marks: 3,
            modelAnswer:
              "If neurotransmitter is not broken down, it will remain in the synaptic cleft and continue to bind to receptors on the post-synaptic membrane. This means the post-synaptic neurone will be continuously stimulated — nerve impulses will keep being generated even without a new stimulus. Muscles or glands will be over-activated. This could lead to continuous muscle contractions (spasms) or overstimulation of glands.",
            markScheme: [
              "Neurotransmitter remains in synaptic cleft / not removed (1)",
              "Post-synaptic neurone continuously stimulated / repeated impulses generated (1)",
              "Effector (muscle/gland) over-activated / continuous contraction / spasm (1)",
            ],
            commonError:
              "Students often stop at 'more neurotransmitter in the cleft' without explaining the consequence for signalling. Always trace the effect through to the effector.",
            difficulty: "challenge",
            hints: [
              "What is the normal fate of neurotransmitter after it has triggered the post-synaptic impulse?",
              "If it cannot be broken down, it stays in the cleft — what happens when it stays bound to receptors?",
              "Continuous stimulation → continuous firing → what does that mean for muscles?",
            ],
            strategy:
              "Pharmacology questions: trace the drug effect through the normal mechanism, step by step. The drug blocks step X → therefore Y cannot happen → therefore Z is the consequence.",
            guideRef: "Reflex Arcs",
          },
        ],
      },

      // ── QA PAPER 2 ── pupil reflex, accommodation, adrenaline, blood glucose
      {
        id: "bio-coordination-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description:
          "Pupil reflex, accommodation, adrenaline, and blood glucose regulation.",
        questions: [
          {
            id: "bio-coordination-bq2-01",
            question:
              "Describe the pupil reflex when a bright light is shone into the eye. Include the pathway of the reflex and the muscle actions involved. [5]",
            marks: 5,
            modelAnswer:
              "Bright light is detected by photoreceptors (rods and cones) in the retina. The sensory signal travels via the optic nerve to the brain stem. A motor signal is sent via the oculomotor nerve to the circular muscles of the iris. The circular muscles contract, and the radial muscles relax. This makes the pupil smaller (constricts), reducing the amount of light entering the eye and protecting the retina.",
            markScheme: [
              "Light detected by photoreceptors / retina (1)",
              "Signal travels via optic nerve to brain (stem) (1)",
              "Circular (constrictor) muscles of iris contract (1)",
              "Radial (dilator) muscles relax (1)",
              "Pupil constricts / becomes smaller (1)",
              "Reduces light entering / protects retina (1)",
            ],
            difficulty: "core",
            hints: [
              "Name the sensory nerve that carries the signal from the eye to the brain.",
              "The iris has two sets of muscles — which set makes the pupil smaller?",
              "Think of the circular muscle as a drawstring around the pupil.",
            ],
            guideRef: "The Eye and Pupil Reflex",
          },
          {
            id: "bio-coordination-bq2-02",
            question:
              "Explain how the body responds when blood glucose concentration rises above normal after a meal. [4]",
            marks: 4,
            modelAnswer:
              "The rise in blood glucose is detected by beta cells in the islets of Langerhans in the pancreas. These cells secrete insulin into the blood. Insulin travels in the blood to target cells (liver, muscle, and fat cells). It causes cells to take up glucose by increasing the rate of glucose absorption. In the liver, insulin promotes glycogenesis — the conversion of glucose into glycogen for storage. As a result, blood glucose concentration falls back to normal.",
            markScheme: [
              "Detected by beta cells / islets of Langerhans in pancreas (1)",
              "Insulin secreted / released into blood (1)",
              "Glucose uptake by cells increased / cells absorb more glucose (1)",
              "Liver converts glucose to glycogen / glycogenesis (1)",
              "Blood glucose returns to / falls back towards normal (1)",
            ],
            difficulty: "warmup",
            guideRef: "Hormonal Control and Blood Glucose Regulation",
          },
          {
            id: "bio-coordination-bq2-03",
            question:
              "Explain how the body responds when blood glucose concentration falls below normal during prolonged exercise. [4]",
            marks: 4,
            modelAnswer:
              "Low blood glucose is detected by alpha cells in the islets of Langerhans in the pancreas. Alpha cells secrete glucagon into the blood. Glucagon travels to the liver and stimulates glycogenolysis — the breakdown of stored glycogen into glucose. Glucose is released from the liver into the bloodstream, raising blood glucose concentration back towards normal.",
            markScheme: [
              "Detected by alpha cells / islets of Langerhans in pancreas (1)",
              "Glucagon secreted / released (1)",
              "Glucagon stimulates liver to break down glycogen (glycogenolysis) (1)",
              "Glucose released into blood (1)",
              "Blood glucose returns to / rises towards normal (1)",
            ],
            commonError:
              "Students often say insulin is released when glucose is low — this is the opposite. Low glucose → glucagon (from alpha cells). High glucose → insulin (from beta cells).",
            difficulty: "core",
            hints: [
              "Low glucose needs to go UP — which hormone raises blood glucose?",
              "Alpha or beta cells — which type releases glucagon?",
              "Glycogen is stored in the liver — what enzyme process converts it back to glucose?",
            ],
            guideRef: "Hormonal Control and Blood Glucose Regulation",
          },
          {
            id: "bio-coordination-bq2-04",
            question:
              "Describe what is meant by negative feedback and explain how it applies to blood glucose regulation. [4]",
            marks: 4,
            modelAnswer:
              "Negative feedback is a control mechanism in which a deviation from the normal level (set point) triggers a response that opposes the change and returns the variable back to the set point. In blood glucose regulation: if blood glucose rises, insulin is secreted and brings it back down. If blood glucose falls, glucagon is secreted and brings it back up. In both cases, the response OPPOSES the original change, maintaining blood glucose within a narrow normal range.",
            markScheme: [
              "Definition: deviation from set point triggers response that opposes the change (1)",
              "Returns variable to set point / normal level (1)",
              "Applied example: high glucose → insulin released → glucose lowered (1)",
              "Applied example: low glucose → glucagon released → glucose raised (1)",
            ],
            difficulty: "core",
            hints: [
              "'Negative' means the response is OPPOSITE to the change.",
              "Write it as: IF [deviation] THEN [response] → [returns to normal].",
              "Positive feedback would amplify the change — that is not what homeostasis does.",
            ],
            guideRef: "Hormonal Control and Blood Glucose Regulation",
          },
          {
            id: "bio-coordination-bq2-05",
            question:
              "Describe the symptoms of uncontrolled Type 1 diabetes and explain why each symptom occurs. [4]",
            marks: 4,
            modelAnswer:
              "1. Frequent urination and excessive thirst: blood glucose is so high that the kidneys cannot reabsorb all of it. Glucose in the filtrate draws water out by osmosis, producing large volumes of dilute, sweet-tasting urine. Loss of water causes dehydration and thirst. 2. Extreme tiredness and weight loss: without insulin, cells cannot absorb glucose for respiration. The body breaks down fat and muscle protein as alternative fuels, causing weight loss and fatigue.",
            markScheme: [
              "High blood glucose / hyperglycaemia as the root cause (1)",
              "Glucose in urine / frequent urination (1)",
              "Thirst / dehydration (linked to water loss in urine) (1)",
              "Cells cannot absorb glucose → fatigue / tiredness (1)",
              "Fat / protein breakdown → weight loss (1)",
            ],
            commonError:
              "Students describe symptoms without explaining WHY they occur. For a 4-mark question, you must link each symptom to its mechanism.",
            difficulty: "challenge",
            hints: [
              "Start with what DOESN'T happen (glucose isn't absorbed) — then trace the consequences.",
              "Why does glucose in the filtrate cause more urine? Think osmosis.",
              "If cells can't use glucose, what do they use instead? What are the consequences?",
            ],
            strategy:
              "Mechanism → symptom chains. For each symptom: state the abnormality first, then explain the mechanism, then name the symptom.",
            guideRef: "Hormonal Control and Blood Glucose Regulation",
          },
          {
            id: "bio-coordination-bq2-06",
            question:
              "Explain why adrenaline is described as preparing the body for 'fight or flight'. Give THREE specific effects of adrenaline on the body. [4]",
            marks: 4,
            modelAnswer:
              "Adrenaline is released by the adrenal glands when a person perceives a threat or stress. It rapidly prepares the body to either fight or run away. Three effects: 1. Increases heart rate — pumps oxygenated blood to muscles faster so they can work harder. 2. Raises blood glucose — stimulates glycogenolysis in the liver, providing more fuel for cellular respiration in muscles and the brain. 3. Dilates bronchioles — widens the airways to increase oxygen uptake per breath, supplying more oxygen to muscles.",
            markScheme: [
              "Released by adrenal glands in response to stress/fear (1)",
              "Effect 1: increased heart rate (+ benefit to muscles) (1)",
              "Effect 2: raised blood glucose / glycogen → glucose in liver (+ provides fuel) (1)",
              "Effect 3: bronchiole dilation / dilated airways (+ more oxygen intake) (1)",
              "Accept also: redirects blood from digestive organs to muscles / dilates pupils",
            ],
            difficulty: "warmup",
            guideRef: "Hormonal Control and Blood Glucose Regulation",
          },
          {
            id: "bio-coordination-bq2-07",
            question:
              "Compare how insulin and glucagon together maintain blood glucose within normal limits. Your answer should refer to both hormones. [5]",
            marks: 5,
            modelAnswer:
              "Insulin and glucagon are both produced by islet cells in the pancreas and work antagonistically (in opposition) to keep blood glucose stable. When blood glucose is HIGH, beta cells release insulin. Insulin causes body cells to absorb more glucose and the liver to convert glucose to glycogen (glycogenesis) → blood glucose falls. When blood glucose is LOW, alpha cells release glucagon. Glucagon causes the liver to convert glycogen to glucose (glycogenolysis) → blood glucose rises. Together, these opposing hormones form a negative feedback system maintaining blood glucose near 90 mg per 100 cm³.",
            markScheme: [
              "Both produced in pancreas / islets of Langerhans (1)",
              "High glucose → insulin from beta cells (1)",
              "Insulin: cells absorb glucose / glycogenesis in liver → glucose falls (1)",
              "Low glucose → glucagon from alpha cells (1)",
              "Glucagon: glycogenolysis in liver → glucose rises (1)",
              "Reference to negative feedback / antagonistic / opposing action (1)",
            ],
            difficulty: "core",
            hints: [
              "Structure your answer: HIGH glucose paragraph, then LOW glucose paragraph.",
              "Name the specific cell type for each hormone.",
              "Name the process in the liver for each hormone (glycogenesis / glycogenolysis).",
              "Conclude with 'negative feedback' to get the quality mark.",
            ],
            guideRef: "Hormonal Control and Blood Glucose Regulation",
          },
          {
            id: "bio-coordination-bq2-08",
            question:
              "A patient is found to have blood glucose of 14 mmol/L (normal ~5 mmol/L) after fasting. Suggest and explain ONE possible diagnosis, and describe ONE test that could confirm it. [3]",
            marks: 3,
            modelAnswer:
              "Possible diagnosis: Type 2 diabetes (or Type 1 diabetes — accept either with justification). In Type 2 diabetes, body cells become resistant to insulin, so glucose cannot be absorbed efficiently even when insulin is present — blood glucose remains elevated. Confirmation test: urine dipstick test for glucose (glucose should not be present in urine in a healthy individual; its presence is called glycosuria and indicates blood glucose exceeded the renal threshold).",
            markScheme: [
              "Named diagnosis: diabetes (Type 1 or Type 2, accept either) (1)",
              "Explanation: pancreas insufficient insulin / cells resistant to insulin → glucose remains in blood (1)",
              "Test: urine test for glucose / glucose tolerance test / blood glucose measurement over time (1)",
            ],
            commonError:
              "Students forget to explain the mechanism behind the elevated glucose — don't just name the condition, explain WHY glucose is high.",
            difficulty: "challenge",
            hints: [
              "Normal fasting glucose is about 4–6 mmol/L. 14 is very high — what condition causes this?",
              "Type 1 vs Type 2: what is the fundamental difference?",
              "How do we test for diabetes? Think about glucose appearing where it shouldn't.",
            ],
            strategy:
              "For clinical-scenario questions: (1) identify the abnormality, (2) name the condition, (3) explain the mechanism, (4) suggest a test.",
            guideRef: "Hormonal Control and Blood Glucose Regulation",
          },
          {
            id: "bio-coordination-bq2-09",
            question:
              "Explain why a person with Type 1 diabetes must inject insulin rather than taking it as a tablet. [2]",
            marks: 2,
            modelAnswer:
              "Insulin is a protein hormone. If taken orally (as a tablet), it would be digested by protease enzymes in the stomach and small intestine into amino acids and would therefore lose its hormonal activity before reaching the bloodstream. Injection delivers insulin directly into the blood (or subcutaneous tissue), bypassing the digestive system.",
            markScheme: [
              "Insulin is a protein / would be digested by proteases if swallowed (1)",
              "Injection bypasses digestion / delivers insulin directly into blood / subcutaneous tissue (1)",
            ],
            difficulty: "core",
            hints: [
              "What happens to proteins in the digestive system?",
              "Why does the route of administration matter for a protein drug?",
            ],
            guideRef: "Hormonal Control and Blood Glucose Regulation",
          },
          {
            id: "bio-coordination-bq2-10",
            question:
              "Describe the role of the liver in blood glucose regulation. [3]",
            marks: 3,
            modelAnswer:
              "The liver acts as a buffer for blood glucose. When blood glucose is high (after a meal), insulin stimulates hepatocytes (liver cells) to convert excess glucose into glycogen for storage — this is glycogenesis. When blood glucose is low (during fasting or exercise), glucagon stimulates the liver to break down glycogen into glucose — glycogenolysis — and release it into the blood. The liver therefore stores glucose when it is in excess and releases it when needed.",
            markScheme: [
              "Liver stores glucose as glycogen / glycogenesis when glucose is high (1)",
              "Liver releases glucose by breaking down glycogen / glycogenolysis when glucose is low (1)",
              "Acts under control of insulin (glycogenesis) and glucagon (glycogenolysis) (1)",
            ],
            difficulty: "core",
            hints: [
              "Think of the liver as a glucose buffer — it absorbs excess and releases deficit.",
              "Two processes — one for storing, one for releasing. Name both.",
              "Which hormone controls each process?",
            ],
            guideRef: "Hormonal Control and Blood Glucose Regulation",
          },
        ],
      },

      // ── QA PAPER 3 ── homeostasis, temperature control
      {
        id: "bio-coordination-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description:
          "Homeostasis, temperature control, sweating, and thermoregulation.",
        questions: [
          {
            id: "bio-coordination-bq3-01",
            question:
              "Define homeostasis and give TWO variables (other than body temperature) that are regulated in the human body. [3]",
            marks: 3,
            modelAnswer:
              "Homeostasis is the maintenance of a stable internal environment within the organism despite changes in external conditions. Two variables regulated: blood glucose concentration; water content of the blood (osmoregulation). (Also accept: blood pH, carbon dioxide concentration, ion concentration.)",
            markScheme: [
              "Homeostasis: maintenance of constant / stable internal environment (1)",
              "Variable 1: blood glucose (1)",
              "Variable 2: water content / osmotic concentration / blood pH / CO₂ concentration (1)",
            ],
            difficulty: "warmup",
            guideRef: "Homeostasis: Temperature Control",
          },
          {
            id: "bio-coordination-bq3-02",
            question:
              "Explain why maintaining a constant body temperature of approximately 37°C is important for enzyme function. [4]",
            marks: 4,
            modelAnswer:
              "Enzymes are proteins with a specific 3-D shape, including the active site. They have an optimum temperature at which the rate of reaction is greatest. At 37°C, most human enzymes work at or near their optimum, maximising the rate of metabolic reactions. If temperature rises significantly above 37°C, the enzyme is denatured — hydrogen bonds and other interactions maintaining its tertiary structure break down, permanently altering the shape of the active site. Substrate molecules can no longer fit (complementarity is lost) and catalysis ceases. If temperature falls significantly below 37°C, molecules have less kinetic energy, enzyme-substrate collisions are less frequent, and metabolic rates slow dangerously.",
            markScheme: [
              "Enzymes have an optimum temperature (37°C for human enzymes) (1)",
              "Above optimum: denaturation / active site shape changes / tertiary structure disrupted (1)",
              "Substrate no longer fits / loss of complementarity / reduced catalysis (1)",
              "Below optimum: less kinetic energy / fewer enzyme-substrate collisions / slower reaction rate (1)",
            ],
            commonError:
              "Students often say enzymes are 'killed' or 'destroyed' above optimum — use 'denatured' and explain the structural change. Also, low temperature does not denature enzymes; it reduces collision frequency.",
            difficulty: "core",
            hints: [
              "Two scenarios: too hot and too cold — explain each separately.",
              "What does denaturation mean at the molecular level?",
              "For low temperature, think about kinetic energy and collision theory.",
            ],
            guideRef: "Homeostasis: Temperature Control",
          },
          {
            id: "bio-coordination-bq3-03",
            question:
              "Describe THREE physiological responses that occur when the body becomes too HOT. [3]",
            marks: 3,
            modelAnswer:
              "1. Vasodilation: arterioles near the skin surface widen, bringing more blood to the surface so heat is lost by radiation and convection. 2. Sweating: sweat glands produce more sweat; as sweat evaporates from the skin surface, latent heat is removed from the skin, cooling it. 3. Hairs lie flat (erector muscles relax): this reduces the thickness of the insulating air layer trapped near the skin, allowing more heat to escape. (Other acceptable response: increased breathing rate.)",
            markScheme: [
              "Vasodilation of skin arterioles (+ explanation of heat loss) (1)",
              "Increased sweating / evaporation cools skin (1)",
              "Hairs lie flat / reduced insulation (1)",
              "Accept: increased breathing rate or other valid physiological cooling response (1)",
            ],
            difficulty: "warmup",
            guideRef: "Homeostasis: Temperature Control",
          },
          {
            id: "bio-coordination-bq3-04",
            question:
              "Describe THREE physiological responses that occur when the body becomes too COLD. [3]",
            marks: 3,
            modelAnswer:
              "1. Vasoconstriction: arterioles near the skin surface narrow, reducing blood flow to the skin, minimising heat loss to the environment. 2. Shivering: rapid involuntary skeletal muscle contractions generate heat as a by-product of ATP use in the muscles. 3. Hairs stand on end (erector pili muscles contract): in humans this creates goosebumps; in furry animals, trapped air provides extra insulation.",
            markScheme: [
              "Vasoconstriction of skin arterioles / reduced blood to skin (+ reduces heat loss) (1)",
              "Shivering / involuntary muscle contractions generate heat (1)",
              "Hair erection / erector pili contract / increased insulation (1)",
            ],
            difficulty: "warmup",
            guideRef: "Homeostasis: Temperature Control",
          },
          {
            id: "bio-coordination-bq3-05",
            question:
              "Explain, in terms of physics, how sweating cools the body. [3]",
            marks: 3,
            modelAnswer:
              "Sweat (which is mainly water) is secreted onto the skin surface by sweat glands. The water molecules in sweat have a range of kinetic energies. The molecules with the highest kinetic energy escape from the liquid as vapour (evaporation). This removes the most energetic molecules from the skin surface. Because those molecules carry more thermal energy, the average kinetic energy (and therefore temperature) of the remaining liquid and the skin falls. This process is called evaporative cooling — it uses the latent heat of vaporisation, removing heat from the skin.",
            markScheme: [
              "Water evaporates from skin surface (1)",
              "Evaporation requires energy / latent heat of vaporisation removed from skin (1)",
              "Skin temperature falls / cooling effect on skin and blood beneath it (1)",
              "Reference to high-energy molecules escaping (credit for depth of explanation)",
            ],
            difficulty: "core",
            hints: [
              "Think about stepping out of a pool on a windy day.",
              "Why does evaporation cause cooling — which molecules escape?",
              "What is 'latent heat of vaporisation'?",
            ],
            guideRef: "Homeostasis: Temperature Control",
          },
          {
            id: "bio-coordination-bq3-06",
            question:
              "Explain the role of the hypothalamus in temperature regulation, using the concept of negative feedback. [4]",
            marks: 4,
            modelAnswer:
              "The hypothalamus is the thermoregulatory centre in the brain. It contains thermosensitive neurons that directly monitor the temperature of blood flowing through it. The hypothalamus acts as the set point (approximately 37°C). If blood temperature rises above the set point, the hypothalamus triggers cooling responses (vasodilation, sweating, hairs flat). If blood temperature falls below the set point, it triggers warming responses (vasoconstriction, shivering, hairs erect). In both cases, the response OPPOSES the original change, returning temperature towards 37°C — this is negative feedback.",
            markScheme: [
              "Hypothalamus monitors blood temperature / contains thermoreceptors (1)",
              "Acts as set point / reference for 37°C (1)",
              "Deviation triggers corrective response that opposes the change (1)",
              "Named cooling OR warming responses correctly linked to high or low temperature (1)",
              "Explicit mention of negative feedback (quality mark) (1)",
            ],
            difficulty: "core",
            hints: [
              "Where exactly is the hypothalamus and how does it detect temperature?",
              "What is the 'set point'?",
              "For negative feedback, always state: deviation → response → return to set point.",
            ],
            guideRef: "Homeostasis: Temperature Control",
          },
          {
            id: "bio-coordination-bq3-07",
            question:
              "A marathon runner collapses on a hot day. Their core temperature is 40.5°C. Explain the dangers of this situation and the physiological processes that should have been working to prevent it. [5]",
            marks: 5,
            modelAnswer:
              "A core temperature of 40.5°C (heatstroke) is dangerous because enzyme denaturation begins above approximately 40–41°C. Enzymes controlling metabolic pathways begin to lose their tertiary structure, active sites change shape, and reactions slow or stop — this is life-threatening if it affects heart muscle, the brain, or other vital organs. The physiological cooling responses that should have been active: (1) Vasodilation — more blood at the skin surface to radiate heat; (2) Sweating — evaporation of sweat removes latent heat; (3) Hairs lying flat — reduced insulation. In the marathon runner, these mechanisms were overwhelmed because the rate of heat production from muscle contraction exceeded the rate of heat loss in the hot environment. Dehydration would also have impaired sweating.",
            markScheme: [
              "Danger: enzyme denaturation above ~40°C / active site changes shape (1)",
              "Consequences for metabolism / vital organ function (1)",
              "Cooling mechanism 1: vasodilation (correctly explained) (1)",
              "Cooling mechanism 2: sweating / evaporative cooling (correctly explained) (1)",
              "Why mechanisms were overwhelmed: high heat production / hot environment / dehydration reduces sweating (1)",
            ],
            commonError:
              "Students often list symptoms of heatstroke (confusion, collapse) without linking them to the underlying enzyme denaturation. Always connect the physiological failure to the molecular mechanism.",
            difficulty: "challenge",
            hints: [
              "Why does 40.5°C matter specifically? Think about enzymes.",
              "List the cooling mechanisms, then explain why each was insufficient in this scenario.",
              "What resource does sweating require that a dehydrated runner lacks?",
            ],
            strategy:
              "For 'explain the dangers' questions: name the mechanism that fails first (enzyme denaturation), then connect it to the system-level failure (metabolic collapse).",
            guideRef: "Homeostasis: Temperature Control",
          },
          {
            id: "bio-coordination-bq3-08",
            question:
              "Explain how vasoconstriction in skin arterioles reduces heat loss from the body. [3]",
            marks: 3,
            modelAnswer:
              "Vasoconstriction is the narrowing of arterioles just beneath the skin. When arterioles constrict, less blood flows through the capillary network near the surface. Because the blood carries heat from the body core, less warm blood reaches the skin surface. Therefore, less heat is transferred from the blood to the skin and subsequently lost to the environment by radiation and convection. The skin appears pale or white because less blood is near the surface.",
            markScheme: [
              "Vasoconstriction = narrowing of arterioles / reduced diameter (1)",
              "Less blood flows near skin surface (1)",
              "Less heat transferred to environment / less heat radiated or convected (1)",
            ],
            difficulty: "core",
            hints: [
              "Narrow pipe = less flow. Less flow = less warm blood at the surface.",
              "Heat must be at the surface to escape — if blood is deeper, what happens to heat loss?",
              "Why does skin look pale in the cold?",
            ],
            guideRef: "Homeostasis: Temperature Control",
          },
          {
            id: "bio-coordination-bq3-09",
            question:
              "Explain why shivering generates heat. [2]",
            marks: 2,
            modelAnswer:
              "Shivering consists of rapid, involuntary contractions of skeletal muscles. Muscle contraction requires ATP, which is produced by cellular respiration. Respiration is not 100% efficient — much of the energy released from glucose is released as heat rather than being stored in ATP. This heat warms the body.",
            markScheme: [
              "Muscles contract rapidly / shivering = involuntary muscle contraction (1)",
              "Respiration / ATP use generates heat as a by-product / inefficient energy transfer releases heat (1)",
            ],
            difficulty: "core",
            hints: [
              "Why does exercise make you warm? The same mechanism applies to shivering.",
              "Efficiency of respiration: not all energy from glucose goes into ATP — where does the rest go?",
            ],
            guideRef: "Homeostasis: Temperature Control",
          },
          {
            id: "bio-coordination-bq3-10",
            question:
              "A scientist measures the skin temperature and core temperature of a volunteer who moves from a warm room (25°C) into a cold room (5°C). Predict and explain the changes in BOTH temperatures over the next 10 minutes. [4]",
            marks: 4,
            modelAnswer:
              "Skin temperature will drop rapidly at first because the skin is directly exposed to the cold air. Heat loss from the skin increases by conduction and convection to the colder environment. However, vasoconstriction will occur within minutes — arterioles narrow, reducing blood flow to the skin — and this will slow further heat loss, so skin temperature stabilises at a lower level. Core temperature is maintained near 37°C by the thermoregulatory responses: vasoconstriction reduces heat loss, and shivering generates extra heat. Core temperature may drop very slightly at first but negative feedback quickly activates warming responses to return it to 37°C. The body prioritises maintaining core temperature over skin temperature.",
            markScheme: [
              "Skin temperature drops quickly / rapidly at first (1)",
              "Vasoconstriction occurs / blood flow to skin reduced → skin temperature stabilises at lower value (1)",
              "Core temperature initially maintained near 37°C (1)",
              "Warming mechanisms (vasoconstriction + shivering) prevent significant fall in core temperature (1)",
              "Body prioritises core over skin temperature / skin acts as a buffer (credit for this insight)",
            ],
            commonError:
              "Students often predict that core temperature will fall immediately and significantly — this misses the point of thermoregulation. The whole point is that core temperature is defended.",
            difficulty: "challenge",
            hints: [
              "Which temperature is regulated by homeostasis — skin or core?",
              "What happens to blood flow in the skin in the cold?",
              "Predict a TIME COURSE — what happens first, then what stabilises?",
              "The body's priority is keeping the core warm — skin is sacrificed if necessary.",
            ],
            strategy:
              "For 'predict and explain' questions, structure as: immediate change → mechanism → stabilisation. Separate skin and core temperature carefully.",
            guideRef: "Homeostasis: Temperature Control",
          },
        ],
      },

      // ── QA PAPER 4 ── plant tropisms, auxin, nervous vs hormonal, synoptic
      {
        id: "bio-coordination-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description:
          "Plant tropisms, auxin, nervous vs hormonal control, and synoptic questions.",
        questions: [
          {
            id: "bio-coordination-bq4-01",
            question:
              "Define phototropism and explain, using auxin, why a shoot grows towards light. [4]",
            marks: 4,
            modelAnswer:
              "Phototropism is the growth response of a plant or plant organ towards (positive) or away from (negative) light. Shoots show positive phototropism. When light hits a shoot from one side, auxin (IAA) is redistributed away from the illuminated side and accumulates on the shaded side. Auxin promotes cell elongation. Cells on the shaded side elongate more than cells on the illuminated side. The shaded side becomes longer, causing the shoot tip to curve towards the light source.",
            markScheme: [
              "Definition: directional growth response to light (1)",
              "Auxin redistributed to shaded side / moves away from light (1)",
              "Auxin promotes cell elongation on shaded side (1)",
              "Differential elongation / shaded side longer → shoot bends towards light (1)",
            ],
            difficulty: "warmup",
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
          },
          {
            id: "bio-coordination-bq4-02",
            question:
              "Explain the difference between positive and negative tropisms. Give one example of each. [3]",
            marks: 3,
            modelAnswer:
              "A positive tropism is a growth response in which the plant organ grows TOWARDS the stimulus. Example: shoots show positive phototropism (grow towards light). A negative tropism is a growth response in which the plant organ grows AWAY FROM the stimulus. Example: roots show negative phototropism (grow away from light); OR shoots show negative geotropism (grow away from gravity).",
            markScheme: [
              "Positive tropism: growth towards stimulus (1)",
              "Negative tropism: growth away from stimulus (1)",
              "Correct example for each (must match definition) (1)",
            ],
            difficulty: "warmup",
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
          },
          {
            id: "bio-coordination-bq4-03",
            question:
              "Explain why the ROOT of a horizontally placed seedling grows downwards (positive geotropism), using the effect of auxin on root cells. [4]",
            marks: 4,
            modelAnswer:
              "When a root is placed horizontally, gravity causes auxin to accumulate on the lower side. In root cells, unlike shoot cells, high concentrations of auxin INHIBIT elongation rather than promoting it. So the lower side of the root (with more auxin) elongates LESS than the upper side (with less auxin). The upper side is therefore longer, and the root curves downward — towards gravity. This is positive geotropism.",
            markScheme: [
              "Gravity causes auxin to accumulate on lower side of root (1)",
              "In roots, high auxin INHIBITS (not promotes) elongation (1)",
              "Lower side elongates less than upper side (1)",
              "Root curves downward / towards gravity (1)",
            ],
            commonError:
              "Students incorrectly state that auxin promotes elongation in roots as it does in shoots — this is the critical distinction. In roots, auxin inhibits elongation at the concentrations found during geotropism.",
            difficulty: "challenge",
            hints: [
              "Where does auxin accumulate due to gravity in a horizontal root?",
              "Key difference from shoots: high auxin in roots = INHIBITS elongation.",
              "Which side grows more, upper or lower? Which direction does the root curve?",
              "Draw a horizontal root, label auxin concentrations, then predict bending direction.",
            ],
            strategy:
              "Always state explicitly: 'In roots, HIGH auxin INHIBITS elongation' — this is the exam-critical fact that distinguishes root from shoot tropism.",
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
          },
          {
            id: "bio-coordination-bq4-04",
            question:
              "Describe an experiment to demonstrate that auxin is produced in the shoot tip and is responsible for growth. [5]",
            marks: 5,
            modelAnswer:
              "Experiment: 1. Take several seedlings with intact tips — these grow normally (control). 2. Remove the tips of a second group — growth stops, confirming the tip is needed for growth. 3. Replace the removed tip with an agar block that has been left in contact with the cut tip (so auxin has diffused into the agar). Growth resumes, showing that a chemical (not the tissue) causes growth. 4. Place an auxin-containing agar block off-centre on a decapitated seedling in the dark (so light is not involved). The seedling bends away from the block side — confirming that auxin promotes differential growth. Each step controls for a different variable, building the evidence progressively.",
            markScheme: [
              "Control: intact seedling grows normally (1)",
              "Removing tip stops growth — tip is required (1)",
              "Replacing tip with auxin-containing agar restores growth — chemical responsible (1)",
              "Off-centre agar block causes bending — auxin causes differential growth (1)",
              "Dark conditions used to exclude light as a variable (1)",
            ],
            commonError:
              "Students describe only one step and call it the full experiment. A valid experiment needs controls and progressive steps that isolate each variable.",
            difficulty: "challenge",
            hints: [
              "Step 1: what is the normal (control) situation?",
              "Step 2: remove the variable you are testing — what happens?",
              "Step 3: replace it — does the effect return?",
              "Step 4: how do you show it is the CHEMICAL and not the tissue?",
            ],
            strategy:
              "For 'describe an experiment' questions: control → variable removed → variable replaced → result. Always mention what you are controlling for.",
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
          },
          {
            id: "bio-coordination-bq4-05",
            question:
              "Compare the nervous system and the hormonal system. Include: speed, duration, specificity, and the way signals are transmitted. [6]",
            marks: 6,
            modelAnswer:
              "Speed: Nervous — very fast (up to 120 m/s along myelinated axons; responses in milliseconds). Hormonal — slower (seconds to minutes for effects to appear because hormones travel in blood at ~0.5 m/s and must reach target tissues). Duration: Nervous — short-lived; the effect lasts only as long as the impulse continues. Hormonal — longer-lasting; hormones persist in the blood until broken down by the liver or kidneys. Specificity: Nervous — highly specific; impulses travel along defined neurones to specific effectors. Hormonal — less specific; hormones travel in blood to all tissues, but only target cells with the correct receptor respond. Signal transmission: Nervous — electrical impulse along neurones, with chemical transmission (neurotransmitter) at synapses. Hormonal — chemical signal (hormone) secreted into blood and carried to target tissues.",
            markScheme: [
              "Speed: nervous faster / hormonal slower (with values or comparison) (1)",
              "Duration: nervous short-lived / hormonal longer-lasting (1)",
              "Specificity: nervous specific to named effectors / hormonal widespread but receptor-dependent (1)",
              "Transmission: nervous = electrical along axon + chemical at synapse (1)",
              "Transmission: hormonal = chemical in blood / bloodstream transport (1)",
              "Overall conclusion or summary comparison (quality mark) (1)",
            ],
            difficulty: "core",
            hints: [
              "Organise your answer by the four criteria given in the question.",
              "Use comparative language: 'nervous is X; hormonal is Y'.",
              "Don't forget to mention that hormonal response requires receptors on target cells.",
              "Include a brief summary sentence at the end.",
            ],
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
          },
          {
            id: "bio-coordination-bq4-06",
            question:
              "Explain how auxin is used commercially, giving TWO different applications. [4]",
            marks: 4,
            modelAnswer:
              "1. Rooting powder: synthetic auxin (e.g. IBA — indole-3-butyric acid) is applied to the cut end of plant cuttings. Auxin stimulates root formation (adventitious roots), allowing the cutting to establish itself as a new plant without needing seeds. This is used by horticulturalists to propagate valuable plant varieties quickly. 2. Selective weedkillers (herbicides): synthetic auxins such as 2,4-D are applied to fields at high concentrations. Broad-leaved weeds are much more sensitive to high auxin than narrow-leaved grasses. The weeds grow abnormally fast (cells over-elongate, vascular tissue collapses) and die, while crop grasses are largely unaffected.",
            markScheme: [
              "Application 1: rooting powder / promoting root growth on cuttings (1)",
              "Explanation: auxin stimulates adventitious root formation (1)",
              "Application 2: selective herbicide / weedkiller (1)",
              "Explanation: high auxin kills broad-leaved weeds / different sensitivity in monocots vs dicots (1)",
            ],
            difficulty: "core",
            hints: [
              "Think about where plants are grown and what farmers/gardeners want to do.",
              "High auxin in shoots promotes growth — too much can be damaging.",
              "Different plant types respond differently to the same auxin concentration.",
            ],
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
          },
          {
            id: "bio-coordination-bq4-07",
            question:
              "A plant is placed on its side in the dark. After 24 hours, the shoot has grown upward and the root has grown downward. Explain these observations in terms of auxin distribution. [5]",
            marks: 5,
            modelAnswer:
              "When placed horizontally: Gravity causes auxin to settle on the lower side of both the shoot and root. In the SHOOT: High auxin on the lower side promotes MORE cell elongation on the lower side. The lower side becomes longer → shoot curves upward (negative geotropism). In the ROOT: High auxin on the lower side INHIBITS elongation in root cells. The lower side elongates LESS than the upper side → the upper side becomes relatively longer → root curves downward (positive geotropism). Both responses are due to the same gravitational redistribution of auxin, but the OPPOSITE responses of shoot and root cells to the same auxin concentration.",
            markScheme: [
              "Gravity redistributes auxin to lower side of both organs (1)",
              "Shoot: high auxin lower side → promotes elongation → lower side longer → curves UP (1)",
              "Root: high auxin lower side → INHIBITS elongation → lower side shorter → curves DOWN (1)",
              "Key distinction: same auxin concentration, opposite effect in shoot vs root (1)",
              "Correct directional outcome: shoot negative geotropism, root positive geotropism (1)",
            ],
            commonError:
              "Students describe the shoot correctly but then incorrectly apply the same logic to the root. The exam-critical distinction is that auxin has opposite effects in root vs shoot cells.",
            difficulty: "challenge",
            hints: [
              "Set up both organs: horizontal, lower and upper side labelled.",
              "Auxin accumulates on the lower side in BOTH — that part is the same.",
              "Now ask: what does high auxin DO in a shoot cell? What does it do in a root cell?",
              "Opposite effects → opposite bending directions.",
            ],
            strategy:
              "Treat the shoot and root separately. For each: (1) state where auxin accumulates, (2) state the effect on that side's elongation, (3) deduce the bending direction.",
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
          },
          {
            id: "bio-coordination-bq4-08",
            question:
              "Evaluate whether the hormonal or nervous system is better suited for controlling blood glucose regulation, using evidence from the topic. [4]",
            marks: 4,
            modelAnswer:
              "The hormonal system is better suited for blood glucose regulation. Evidence: Blood glucose regulation requires a sustained, widespread response — insulin must act on liver cells, muscle cells, and fat cells simultaneously across the entire body. Hormones travelling in the blood can reach all these tissues at once. The response also needs to last for several hours after a meal, not just for milliseconds as a nerve impulse would. The nervous system is poorly suited here because: nerve impulses are short-lived and highly localised — a single nerve could not simultaneously stimulate millions of liver cells. Conclusion: For slow, widespread, long-lasting homeostatic responses, hormonal control is more appropriate. For fast, precise, short-lived responses (e.g. reflexes), nervous control is better.",
            markScheme: [
              "States hormonal system is more suitable for blood glucose with justification (1)",
              "Reason 1: widespread / simultaneous response to multiple tissue types needed (1)",
              "Reason 2: long-lasting response required — hormones persist in blood (1)",
              "Reason 3: nervous system too fast and localised / impulses are short-lived (1)",
              "Balanced conclusion comparing both systems (quality mark) (1)",
            ],
            difficulty: "challenge",
            hints: [
              "What tissues does insulin need to reach? Can a nerve reach all of them simultaneously?",
              "How long does blood glucose regulation take — milliseconds or hours?",
              "Structure your answer: why hormonal is suited, then why nervous is not suited.",
            ],
            strategy:
              "For 'evaluate' questions: argue FOR and AGAINST both options, then reach a supported conclusion. Don't just pick one and ignore the other.",
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
          },
          {
            id: "bio-coordination-bq4-09",
            question:
              "A student claims: 'Plant tropisms and animal reflexes are both automatic responses to stimuli, so they must use the same mechanism.' Assess this claim, identifying similarities and differences. [5]",
            marks: 5,
            modelAnswer:
              "Similarities: Both are automatic responses to an external stimulus; both are adaptive (they improve the organism's chances of survival); both result in a directional response — a reflex moves a limb away from harm, tropism directs growth towards or away from a stimulus. Differences: Animal reflexes use the nervous system — electrical impulses along neurones and chemical transmission at synapses, producing a response in milliseconds. Plant tropisms use auxin — a hormone-like chemical that redistributes across the organ, promoting differential cell elongation, producing a response over hours to days. Plants have no nervous system, no neurones, no synapses. The mechanisms are fundamentally different even though the outcome (adaptive response to stimulus) is similar. Conclusion: The claim is partially correct in that both are adaptive automatic responses, but incorrect that they use the same mechanism.",
            markScheme: [
              "Similarity: both automatic / both response to stimulus / both adaptive (1)",
              "Difference: reflex uses nerve impulses / electrical signal (1)",
              "Difference: tropism uses chemical signal (auxin) / cell elongation over hours (1)",
              "Plants have no nervous system / neurones / synapses (1)",
              "Balanced conclusion: claim is partially correct — outcome similar, mechanism different (1)",
            ],
            difficulty: "challenge",
            hints: [
              "Identify what the two have in common before listing differences.",
              "What mechanism does a reflex use? What mechanism does a tropism use?",
              "Time scale: reflex takes milliseconds; tropism takes hours or days.",
              "Conclude whether the student is right, wrong, or partially right — justify it.",
            ],
            strategy:
              "For 'assess a claim': identify what is correct in the claim, what is incorrect, and reach an overall verdict with evidence.",
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
          },
          {
            id: "bio-coordination-bq4-10",
            question:
              "A researcher investigates the effect of auxin concentration on the growth of shoot and root tissue. The graph shows that low auxin concentrations promote growth in both tissues, but above a certain concentration, root growth is inhibited while shoot growth continues to be promoted. Explain these results in terms of receptor sensitivity and use them to explain geotropism in a horizontal seedling. [6]",
            marks: 6,
            modelAnswer:
              "The graph shows that roots are more sensitive to auxin than shoots — roots are inhibited at concentrations that still promote shoot growth. This is because root cells have receptors that respond to auxin differently from shoot cells; at concentrations optimal for shoot elongation, the root cell response becomes inhibitory (possibly because the receptor pathway triggers a different cellular response at high occupancy). Application to geotropism: When a seedling is placed horizontally, gravity redistributes auxin to the lower side of both organs. The lower side of the SHOOT has high auxin → promotes elongation → lower side longer → shoot curves upward (negative geotropism). The lower side of the ROOT also has high auxin → but this INHIBITS root elongation → lower side shorter → root curves downward (positive geotropism). The same auxin gradient produces opposite bending responses because of the different sensitivities of the two tissues. This explains the observation that shoots and roots respond oppositely to gravity.",
            markScheme: [
              "Roots more sensitive to auxin / inhibited at lower concentrations than shoots (1)",
              "Different receptor sensitivity or different cellular response in root vs shoot (1)",
              "Geotropism: gravity redistributes auxin to lower side in both organs (1)",
              "Shoot: high auxin lower side → promotes elongation → curves upward (1)",
              "Root: high auxin lower side → INHIBITS elongation → curves downward (1)",
              "Conclusion: same auxin distribution, opposite bending because different sensitivity (1)",
            ],
            commonError:
              "Students describe the graph but fail to apply it to geotropism. The question requires BOTH interpretation and application — don't stop at describing the graph.",
            difficulty: "challenge",
            hints: [
              "First, state what the graph tells you about relative sensitivity of roots vs shoots.",
              "Then apply this to geotropism: auxin accumulates on the lower side due to gravity.",
              "For the shoot: high auxin = promoted. For the root: same concentration = inhibited.",
              "Conclude by explaining why the two organs bend in OPPOSITE directions.",
            ],
            strategy:
              "Graph interpretation → biological explanation → application to context. Each step must be explicit — examiners cannot give marks for steps you assume.",
            guideRef: "Nervous vs Hormonal Control and Plant Tropisms",
          },
        ],
      },
    ],
  },
};
