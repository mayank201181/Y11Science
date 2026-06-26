import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "phys-forces",
  hook:
    "Every time you sit in a chair, billions of electrons in the atoms of the seat push back against the electrons in your body with exactly the force needed to keep you from falling — Newton's third law and electromagnetic repulsion working silently together. Forces are not just abstract arrows on a diagram; they are the reason the universe holds its shape.",
  didYouKnow: [
    "The International Space Station orbits at about 7 700 m/s — at this speed gravity is still pulling it strongly (about 89% of surface gravity) but the station is falling in a circle, so astronauts experience weightlessness: they are in continuous free fall.",
    "A gecko can support its entire body weight with a single toe because millions of microscopic hairs (setae) on its feet create van der Waals forces — a quantum-mechanical attraction between molecules — without any glue or suction.",
    "Newton's third law means that when the Earth pulls you down with your weight (e.g. 600 N), you simultaneously pull the Earth upward with 600 N. The Earth barely moves because its mass is 6 × 10²⁴ kg.",
    "The deepest point in the ocean, Challenger Deep (~11 km), subjects objects to water pressure of about 110 MPa — over 1 000 times atmospheric pressure. This compresses seawater very slightly, making it denser than surface water.",
    "A formula 1 racing car generates enough aerodynamic downforce at top speed to drive upside down on a ceiling — the wings produce more than the car's weight in downward force, greatly increasing tyre friction.",
    "The coefficient of friction between rubber tyres and dry asphalt is about 0.7–0.8, but drops to around 0.1–0.3 on ice — which is why stopping distances increase so dramatically in winter conditions.",
  ],
  experiments: [
    {
      title: "Investigate Friction on Different Surfaces",
      materials: [
        "A small wooden block or a thick hardcover book",
        "A spring balance (or a makeshift one: a rubber band, ruler, and small weight to calibrate it)",
        "At least three different surfaces: smooth table, carpet, sandpaper, polished floor tile",
        "A string tied securely around the block",
        "Pen and paper for results",
      ],
      steps: [
        "Attach the string to the block and connect it to the spring balance.",
        "Place the block on the first surface and pull the balance horizontally at a slow, constant speed.",
        "Read the force on the balance while the block is moving steadily — this equals the kinetic (sliding) friction force.",
        "Record the value. Then gently increase the pull from rest and record the maximum reading just before the block starts moving — this is the static friction force (it will be slightly higher).",
        "Repeat on each surface and tabulate: surface, static friction force, kinetic friction force.",
        "Calculate the coefficient of kinetic friction (mu) = friction force / normal force. The normal force equals the weight of the block (mass in kg times 9.8 N/kg).",
        "Plot a bar chart comparing mu values for each surface and write a conclusion.",
      ],
      science:
        "Friction is a contact force that opposes relative motion between surfaces. It arises from microscopic bumps and chemical bonds at the interface. The coefficient of friction (mu) is a dimensionless ratio that describes how 'grippy' a pair of surfaces is. Static friction is always greater than or equal to kinetic friction because at rest, surface irregularities interlock more completely. This experiment demonstrates F = muR, one of the most practically important equations in physics.",
      safety:
        "No significant hazards. Ensure the block cannot fly off and hit anyone if the string breaks. Pull gently and steadily.",
    },
    {
      title: "Demonstrate Newton's Third Law with Balloon Rockets",
      materials: [
        "A long balloon (at least 25 cm when inflated)",
        "A length of thin string or fishing line (at least 3 m)",
        "A plastic drinking straw",
        "Two chairs or fixed points to anchor the string",
        "Tape (masking or sellotape)",
      ],
      steps: [
        "Thread the string through the straw before tying the string taut between the two chairs.",
        "Inflate the balloon fully but do not tie it — pinch the neck closed.",
        "Tape the balloon (neck toward one end) securely to the straw while keeping the neck pinched.",
        "Release the neck and observe the balloon travel along the string.",
        "Measure the distance travelled. Repeat with the balloon inflated to different sizes and record results.",
        "Try pointing the neck at a slight angle and note whether the direction of travel changes.",
      ],
      science:
        "Compressed air inside the balloon is at higher pressure than the atmosphere. When released, air rushes out backward (action force). By Newton's third law, the balloon experiences an equal and opposite reaction force forward. This is the same principle as a rocket engine: exhaust gases are expelled backward, propelling the vehicle forward. The greater the mass of air ejected per second and the faster it is ejected, the greater the thrust — explaining why larger balloons travel further.",
      safety:
        "No significant hazards. Keep faces away from the balloon neck when releasing to avoid the air jet hitting eyes. Ensure the string is at head-height or above if people will be walking nearby.",
    },
  ],
};
