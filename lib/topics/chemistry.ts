import type { Topic } from "../types";
import { chemParticles } from "./chem-particles";
import { chemAtoms } from "./chem-atoms";
import { chemPeriodic } from "./chem-periodic";
import { chemBonding } from "./chem-bonding";
import { chemStoichiometry } from "./chem-stoichiometry";
import { chemElectrochemistry } from "./chem-electrochemistry";
import { chemEnergetics } from "./chem-energetics";
import { chemRates } from "./chem-rates";
import { chemAcidsBases } from "./chem-acids-bases";
import { chemMetals } from "./chem-metals";
import { chemEnvironment } from "./chem-environment";
import { chemOrganic } from "./chem-organic";
import { chemAnalysis } from "./chem-analysis";

export const chemistryTopics: Topic[] = [
  chemParticles,
  chemAtoms,
  chemPeriodic,
  chemBonding,
  chemStoichiometry,
  chemElectrochemistry,
  chemEnergetics,
  chemRates,
  chemAcidsBases,
  chemMetals,
  chemEnvironment,
  chemOrganic,
  chemAnalysis,
];
