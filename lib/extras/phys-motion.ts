import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "phys-motion",
  hook:
    "When a cheetah accelerates from 0 to 100 km/h in three seconds, every equation you are about to learn is happening in its muscles and bones in real time. The same maths that describes that sprint also guided the Apollo spacecraft to the Moon — and brings your car to a safe stop.",
  didYouKnow: [
    "The fastest recorded human sprint speed is about 12.4 m/s (44.7 km/h), achieved by Usain Bolt during his 100 m world-record run in 2009 — yet a sneeze can briefly send air out of your nose at around 45 m/s.",
    "A skydiver in free fall reaches a terminal velocity of roughly 55 m/s (200 km/h) in the normal belly-down position, but can exceed 90 m/s head-down — all determined by the balance between gravity and air resistance.",
    "Light travels at approximately 3 × 10⁸ m/s in a vacuum, meaning it circles the entire Earth about 7.5 times every second — yet it still takes about 8 minutes to reach us from the Sun.",
    "On the Moon, where gravitational field strength is about 1.6 N/kg (roughly one-sixth of Earth's), a ball dropped from 1 m takes about 1.1 s to fall — compared with just 0.45 s on Earth.",
    "A car braking at a comfortable 5 m/s² from 30 m/s needs about 90 m to stop — roughly the length of nine double-decker buses end to end. Doubling the speed quadruples the stopping distance, a fact critical to road safety.",
    "Galileo is said to have dropped two cannon balls of different masses from the Leaning Tower of Pisa to show they hit the ground at the same time — disproving Aristotle's 2 000-year-old claim that heavier objects fall faster.",
  ],
  experiments: [
    {
      title: "Measure Your Reaction Time with a Dropped Ruler",
      materials: [
        "A 30 cm ruler",
        "A friend or family member",
        "A table to rest your arm on",
        "Pen and paper to record results",
      ],
      steps: [
        "Sit at a table and rest your forearm on the edge so only your hand hangs off.",
        "Hold your thumb and index finger about 3 cm apart, level with the 0 cm mark of the ruler your partner holds vertically.",
        "Ask your partner to drop the ruler without warning at a random moment.",
        "Catch it as quickly as possible and note the number of centimetres at the point where your fingers catch it.",
        "Convert the catch distance (d) to reaction time using t = sqrt(2d/g) where g = 9.8 m/s². For example, 15 cm gives t ≈ 0.175 s.",
        "Repeat 5 times, discard the highest and lowest, and average the remaining three.",
        "Try again after mild exercise or while distracted (e.g. reciting your times tables) — does your reaction time change?",
      ],
      science:
        "The ruler accelerates under gravity at 9.8 m/s². Using s = ½gt², the catch distance directly encodes the time delay between your eyes seeing the ruler move and your hand muscles responding — your neural reaction time. Most people react in 0.15–0.25 s. The experiment is a direct application of the equations of motion (SUVAT) to a real measurement.",
      safety:
        "No significant hazards. Ensure the ruler falls onto the table, not onto feet. Use a plastic ruler rather than metal to avoid sharp edges.",
    },
    {
      title: "Plot a Distance–Time Graph Using a Bouncing Ball",
      materials: [
        "A tennis ball or similar bouncy ball",
        "A tape measure or metre stick fixed vertically to a wall",
        "A phone or tablet (to record slow-motion video at 120 fps or higher)",
        "A bright, well-lit area",
        "Graph paper or a spreadsheet",
      ],
      steps: [
        "Fix the metre stick vertically against a wall so the scale is clearly visible.",
        "Open the slow-motion camera on your phone and position it so both the ball and the scale fill the frame.",
        "Hold the ball at the 0 cm mark and release it — do not throw it.",
        "Record the slow-motion footage of the ball falling and bouncing.",
        "Play back the footage frame by frame. Every 10 frames (approximately 0.08 s at 120 fps) note the ball's height from the ruler.",
        "Plot height (y-axis) against time (x-axis). During free fall the curve should be parabolic; at the bounce point the velocity instantly reverses.",
        "Calculate the gradient of the velocity–time graph derived from your data to estimate g. Compare to 9.8 m/s².",
      ],
      science:
        "A falling ball under constant gravitational acceleration produces a parabolic distance–time graph (s increases as t²). The gradient of a distance–time graph gives instantaneous speed. Each bounce dissipates energy, so the ball rises to a lower height each time — demonstrating energy transfer to thermal energy and sound. Comparing your calculated g to 9.8 m/s² lets you evaluate experimental error and discuss sources of uncertainty.",
      safety:
        "Ensure the ball bounces in an open area away from fragile objects and other people. Do not use a ball heavier than a tennis ball.",
    },
  ],
};
