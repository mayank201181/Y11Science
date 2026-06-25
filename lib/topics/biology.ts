import type { Topic } from "../types";
import { bioCells } from "./bio-cells";
import { bioTransportCell } from "./bio-transport-cell";
import { bioMolecules } from "./bio-molecules";
import { bioEnzymes } from "./bio-enzymes";
import { bioPlantNutrition } from "./bio-plant-nutrition";
import { bioHumanNutrition } from "./bio-human-nutrition";
import { bioTransportPlants } from "./bio-transport-plants";
import { bioTransportAnimals } from "./bio-transport-animals";
import { bioDiseaseImmunity } from "./bio-disease-immunity";
import { bioGasRespiration } from "./bio-gas-respiration";
import { bioCoordination } from "./bio-coordination";
import { bioReproduction } from "./bio-reproduction";
import { bioInheritance } from "./bio-inheritance";
import { bioEcology } from "./bio-ecology";

export const biologyTopics: Topic[] = [
  bioCells,
  bioTransportCell,
  bioMolecules,
  bioEnzymes,
  bioPlantNutrition,
  bioHumanNutrition,
  bioTransportPlants,
  bioTransportAnimals,
  bioDiseaseImmunity,
  bioGasRespiration,
  bioCoordination,
  bioReproduction,
  bioInheritance,
  bioEcology,
];
