import { PrototypeFunction, PrototypeFunctions } from "@/@types/core/prototype";
import { processHasSlot } from "@/core/prototype/Value/hasSlot";
import { processEquals } from "@/core/prototype/Value/qeuals";
import { processCompare } from "@/core/prototype/Value/compare";
import { processHashCode } from "@/core/prototype/Value/hashCode";
import { processForEachSlot } from "@/core/prototype/Value/forEachSlot";
import { processCall } from "@/core/prototype/Value/call";
import { processRaw } from "@/core/prototype/Value/raw";
import { processToASNumber } from "@/core/prototype/Value/toASNumber";
import { processToASString } from "@/core/prototype/Value/toASString";
import { processToASBoolean } from "@/core/prototype/Value/toASBoolean";
import { processIndex } from "@/core/prototype/Value/_index";
import { processPlus } from "@/core/prototype/Value/plus";
import { processMinus } from "@/core/prototype/Value/minus";

export type PrototypeValueFunction = PrototypeFunction<unknown>;

const prototypeValueFunctions: PrototypeFunctions<unknown> = {
  hasSlot: processHasSlot,
  equals: processEquals,
  compare: processCompare,
  hashCore: processHashCode,
  forEachSlot: processForEachSlot,
  call: processCall,
  sendMessage: processCall,
  raw: processRaw,
  toASNumber: processToASNumber,
  toASString: processToASString,
  toASBoolean: processToASBoolean,
  index: processIndex,
  plus: processPlus,
  minus: processMinus,
};

export { prototypeValueFunctions };
