import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "bio-transport-animals",

  hook:
    "Your heart will beat around 2.5 billion times over your lifetime without a single rest — and in those beats it will pump enough blood to fill roughly 1.5 million barrels. The circulatory system is the most reliable pump ever built.",

  didYouKnow: [
    "Red blood cells have no nucleus — they expel it during development to make room for more haemoglobin. This means they cannot divide or repair themselves, so the body replaces about 2–3 million of them every second.",
    "Haemoglobin does not simply 'carry' oxygen — it changes shape when oxygen binds, causing a cooperative effect where each successive oxygen molecule binds more easily than the last. This S-shaped dissociation curve means haemoglobin loads up quickly in the lungs and releases oxygen efficiently in active tissues.",
    "The human circulatory system is double circulation: blood passes through the heart twice per circuit — once through the pulmonary circuit (heart to lungs and back) and once through the systemic circuit (heart to body and back). Fish have only a single circuit.",
    "Capillaries are so narrow that red blood cells must deform slightly to squeeze through in single file, which slows them down and maximises the time available for gas and nutrient exchange.",
    "Plasma makes up about 55% of blood volume and carries dissolved substances including glucose, hormones, antibodies, urea, and carbon dioxide in the form of hydrogencarbonate ions — far more CO2 is carried this way than directly dissolved or bound to haemoglobin.",
    "The left ventricle wall is roughly three times thicker than the right ventricle wall because it must pump blood around the entire body at high pressure, while the right ventricle only needs to push blood to the nearby lungs at lower pressure."
  ],

  experiments: [
    {
      title: "Measuring Your Resting and Active Heart Rate",
      materials: [
        "A timer or stopwatch (phone is fine)",
        "A quiet place to sit",
        "A pen and paper to record results",
        "Optional: a pulse oximeter (inexpensive from a pharmacy) for confirmation"
      ],
      steps: [
        "Sit quietly for 5 minutes — this establishes your resting state.",
        "Press two fingertips (not your thumb, which has its own pulse) gently against the inside of your wrist just below the base of your thumb, or against the side of your neck below your jaw.",
        "Count the number of pulses you feel in 15 seconds and multiply by 4 to get beats per minute (bpm). Record this as your resting heart rate.",
        "Repeat the count twice more and calculate the average.",
        "Now do 2 minutes of moderate exercise: jogging on the spot, stepping up and down on a stair, or star jumps.",
        "Immediately after stopping, count your pulse for 15 seconds and multiply by 4. Record this as your active heart rate.",
        "Continue recording your heart rate every 2 minutes until it returns to your resting value. The time taken is your recovery time — a measure of cardiovascular fitness.",
        "Compare your resting rate with published ranges: typically 60–100 bpm for adults, often lower in regular exercisers."
      ],
      science:
        "During exercise, muscles demand more oxygen and produce more CO2 and lactic acid. Rising CO2 detected by receptors in the aorta and brain triggers the cardiovascular centre in the medulla oblongata to increase heart rate via the sympathetic nervous system. More blood is pumped per minute (cardiac output = heart rate x stroke volume), delivering oxygen faster. Fit individuals have stronger hearts with larger stroke volumes, so they achieve the same cardiac output at a lower heart rate — explaining why athletes often have resting rates below 60 bpm.",
      safety:
        "If you have any heart condition or feel dizzy or unwell, do not perform the exercise component. Stop immediately if you feel chest pain or breathlessness beyond normal exertion."
    },
    {
      title: "Modelling a Valve with a Plastic Bag",
      materials: [
        "A zip-lock plastic bag or a small sandwich bag",
        "Scissors",
        "A rubber band",
        "A drinking straw",
        "Water and a sink or bowl"
      ],
      steps: [
        "Fill the zip-lock bag about one-quarter full with water and seal it.",
        "Make a small cut — about 1 cm — in one corner of the bag.",
        "Hold the bag so the cut corner points downward over a sink. Squeeze the bag gently: water should flow out through the cut.",
        "Now try squeezing from below the cut to push water upward through it — you will find far less (or no) water flows back through, because the flexible plastic flaps act like a one-way valve.",
        "Repeat and observe how the pressure direction determines whether the 'valve' opens or closes.",
        "Discuss: how does this model the function of the semi-lunar valves in the heart and the valves in veins?"
      ],
      science:
        "Heart valves (atrioventricular and semi-lunar) are flaps of fibrous tissue that open when pressure is higher on one side and snap shut when pressure reverses, preventing backflow. This model mimics that mechanism using the flexible plastic as valve cusps. In veins, where blood pressure is low, pocket valves prevent blood from pooling under gravity — crucial in the legs. Without valves, the heart's pumping action would be inefficient as blood would simply slosh back and forth.",
      safety:
        "Keep scissors away from young children. Use a bowl or work over a sink to contain spilled water."
    }
  ]
};
