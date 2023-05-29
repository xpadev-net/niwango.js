import { IrFunctions } from "@/@types/core/functions";
import { processAt } from "@/core/functions/At";
import { processPlayStartTime } from "@/core/functions/playStartTime";

import { processDistance } from "./distance";
import { processDump } from "./dump";
import { processIf } from "./if";
import { processRand } from "./rand";
import { processScreenHeight, processScreenWidth } from "./screen";
import { processTimethis } from "./timethis";
import { processWhileKari } from "./while_kari";

const functions: IrFunctions = {
  dump: processDump,
  while_kari: processWhileKari,
  if: processIf,
  rand: processRand,
  distance: processDistance,
  screenWidth: processScreenWidth,
  screenHeight: processScreenHeight,
  playStartTime: processPlayStartTime,
  timethis: processTimethis,
  "@": processAt,
};

export { functions };
