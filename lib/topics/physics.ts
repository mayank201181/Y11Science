import type { Topic } from "../types";
import { physMotion } from "./phys-motion";
import { physForces } from "./phys-forces";
import { physEnergy } from "./phys-energy";
import { physThermal } from "./phys-thermal";
import { physWaves } from "./phys-waves";
import { physSoundEm } from "./phys-sound-em";
import { physElectricity } from "./phys-electricity";
import { physMagnetism } from "./phys-magnetism";
import { physNuclear } from "./phys-nuclear";
import { physSpace } from "./phys-space";

export const physicsTopics: Topic[] = [
  physMotion,
  physForces,
  physEnergy,
  physThermal,
  physWaves,
  physSoundEm,
  physElectricity,
  physMagnetism,
  physNuclear,
  physSpace,
];
