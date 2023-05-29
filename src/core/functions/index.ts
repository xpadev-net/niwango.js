import { IrFunctions } from "@/@types/core/functions";
import { processPlayStartTime } from "@/core/functions/playStartTime";

import { processCommentTrigger } from "./commentTrigger";
import { processDef } from "./def";
import { processDefKari } from "./def_kari";
import { processDistance } from "./distance";
import { processDrawShape } from "./drawShape";
import { processDrawText } from "./drawText";
import { processDump } from "./dump";
import { processIf } from "./if";
import { processRand } from "./rand";
import { processScreenHeight, processScreenWidth } from "./screen";
import { processTimer } from "./timer";
import { processTimes, timesCondition } from "./times";
import { processTimethis } from "./timethis";
import { processWhileKari } from "./while_kari";
import {processAt} from "@/core/functions/At";

const functions: IrFunctions = {
  dump: processDump,
  def: processDef,
  def_kari: processDefKari,
  while_kari: processWhileKari,
  times: {
    func: processTimes,
    condition: timesCondition,
  },
  drawText: processDrawText,
  dt: processDrawText,
  drawShape: processDrawShape,
  if: processIf,
  commentTrigger: processCommentTrigger,
  ctrig: processCommentTrigger,
  timer: processTimer,
  rand: processRand,
  distance: processDistance,
  screenWidth: processScreenWidth,
  screenHeight: processScreenHeight,
  playStartTime: processPlayStartTime,
  timethis: processTimethis,
  "@": processAt,
};

export { functions };
