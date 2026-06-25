import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "bio-coordination",

  hook:
    "The nerve impulse hurtling down your sciatic nerve right now travels at up to 120 metres per second — faster than a Formula 1 car — yet it is nothing more than a wave of charged ions sloshing in and out through protein pores in a membrane just 7 nanometres thick. Your entire sense of self, every memory and emotion, emerges from roughly 86 billion of these microscopic electrical events firing in concert.",

  didYouKnow: [
    "The human brain contains approximately 86 billion neurons, each forming on average 7,000 synaptic connections — giving roughly 100 trillion synapses in total, more than the number of stars in 1,000 Milky Way galaxies.",
    "Adrenaline (epinephrine) reaches its target organs within seconds of release because it travels in the bloodstream, yet its effects can last 20–30 minutes — far longer than a nerve signal that is over in milliseconds. This illustrates the speed-versus-duration trade-off between nervous and hormonal control.",
    "Reflex arcs bypass the brain entirely: the signal travels from receptor to spinal cord to effector, which is why you pull your hand away from a hot object before you consciously feel pain. The pain signal arrives in the brain a fraction of a second later.",
    "The myelin sheath around neurons — made by Schwann cells — acts like insulation on an electrical wire and increases conduction speed up to 100-fold. Multiple sclerosis is caused by the immune system attacking this myelin, slowing or blocking nerve signals.",
    "Insulin and glucagon are both secreted by the pancreas but have opposite effects: insulin lowers blood glucose and glucagon raises it. This push-pull antagonism is an example of negative feedback — the system constantly corrects itself to maintain a set point near 4–6 mmol/L.",
    "Plants coordinate their responses using hormones too: auxin made in a shoot tip moves away from light, causing cells on the shaded side to elongate more — bending the whole shoot towards the light source. This phototropism can be observed in just a few hours on a windowsill."
  ],

  experiments: [
    {
      title: "Ruler-Drop Reaction Time Test",
      materials: [
        "30 cm ruler",
        "A partner",
        "Chair (to sit comfortably)",
        "Pencil and paper for recording results"
      ],
      steps: [
        "Sit in a chair with your forearm resting on a table so your hand extends just beyond the edge. Open your thumb and index finger about 3 cm apart, positioned at the zero end of the ruler.",
        "Your partner holds the ruler vertically so that the zero mark is level with the top of your thumb and forefinger, without touching your hand.",
        "Without warning, your partner drops the ruler. Catch it as quickly as possible by closing your fingers.",
        "Record the distance the ruler fell (in cm) before you caught it. Use the formula: distance = ½ × g × t², rearranged to t = √(2d/g) where g = 9.8 m/s², to calculate your reaction time in seconds.",
        "Repeat 10 times and calculate your mean reaction time. Then test the effect of a distracting factor (e.g. your partner saying a random word while dropping) — does mean reaction time change?",
        "Compare dominant vs. non-dominant hand, or test before and after a short period of physical exercise."
      ],
      science:
        "The ruler-drop test measures the time taken for a stimulus (seeing the ruler move) to be converted into a nerve impulse by retinal receptors, transmitted along sensory neurones to the brain, processed in the cerebral cortex, and a motor signal sent along motor neurones to hand muscles. This entire pathway is a voluntary reflex. Longer reaction times under distraction show that the brain's processing capacity is limited — the cortex is involved and can become a bottleneck, unlike a spinal reflex arc which bypasses conscious processing entirely. Typical human reaction time is 150–300 ms.",
      safety:
        "Keep feet clear of the floor below to avoid the ruler landing on them. Sit safely on a stable chair."
    },
    {
      title: "Pupil Reflex Investigation",
      materials: [
        "A partner",
        "Torch (phone torch is ideal)",
        "Mirror (optional — for solo observation)",
        "Dim room"
      ],
      steps: [
        "Sit in a normally lit room. Look at your partner's eyes and observe the size of their pupils. Estimate or sketch the diameter.",
        "Ask your partner to close their eyes for 60 seconds (to allow pupils to dilate in darkness behind their eyelids).",
        "When they open their eyes, immediately shine the torch from the side (not directly in the face) towards one eye and observe both pupils simultaneously.",
        "Record: (a) the approximate diameter of each pupil before and after the light stimulus, (b) whether both pupils responded or just the one directly illuminated, and (c) the speed of the response.",
        "Repeat in the other eye. Note the consensual reflex — the unlit eye also constricts.",
        "Wait 2 minutes, then ask your partner to stare at a distant object, then at their fingertip held 10 cm away. Observe and record pupil size change."
      ],
      science:
        "The pupil light reflex is a reflex arc: light hitting the retina (receptor) sends signals along the optic nerve to the brain stem (coordination centre), which sends signals along the oculomotor nerve (effector) to the circular and radial smooth muscles of the iris. Circular muscles contract to constrict the pupil; radial muscles relax. The consensual response (both eyes reacting to light in one) occurs because nerve fibres from each eye cross to both sides of the brain stem. This reflex protects the retina from damage by bright light and is one of the first checks doctors perform when assessing brain function.",
      safety:
        "Never shine the torch directly into the eye at close range. Keep the beam to the side of the face. This activity is entirely safe if light intensity is kept to normal torch levels."
    }
  ]
};
