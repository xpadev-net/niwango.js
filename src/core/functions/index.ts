import { processDump } from "./dump";
import { processDef } from "./def";
import { processDefKari } from "./def_kari";
import { processWhileKari } from "./while_kari";
import { processTimes, timesCondition } from "./times";
import { processDrawText } from "./drawText";
import { processDrawShape } from "./drawShape";
import { processIf } from "./if";
import { processCommentTrigger } from "./commentTrigger";
import { processTimer } from "./timer";
import { processRand } from "./rand";
import { processDistance } from "./distance";
import { processScreenHeight, processScreenWidth } from "./screen";
import { processTimethis } from "./timethis";
import { IrFunctions } from "@/@types/core/functions";
import { processPlayStartTime } from "@/core/functions/playStartTime";

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
};

export { functions };
