import { processDump } from "./dump";
import { processDef } from "./def";
import { processDefKari } from "./def_kari";
import { processWhileKari } from "./while_kari";
import { A_CallExpression, T_scope } from "@/@types/ast";
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

export type IrFunction = (
  script: A_CallExpression,
  scopes: T_scope[],
  object: { [key: string]: unknown }
) => unknown;

type IFunctions = {
  [key: string]:
    | {
        func: IrFunction;
        condition: (object: unknown, script: A_CallExpression) => boolean;
      }
    | IrFunction;
};

const functions: IFunctions = {
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
