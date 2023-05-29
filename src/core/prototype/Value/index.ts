import { PrototypeFunction, PrototypeFunctions } from "@/@types/core/prototype";
import { processIndex } from "@/core/prototype/Value/_index";
import { processAlternative } from "@/core/prototype/Value/alternative";
import { processCall } from "@/core/prototype/Value/call";
import { processCompare } from "@/core/prototype/Value/compare";
import { processForEachSlot } from "@/core/prototype/Value/forEachSlot";
import { processHashCode } from "@/core/prototype/Value/hashCode";
import { processHasSlot } from "@/core/prototype/Value/hasSlot";
import { processMinus } from "@/core/prototype/Value/minus";
import { processMultiply } from "@/core/prototype/Value/multiply";
import { processPlus } from "@/core/prototype/Value/plus";
import { processEquals } from "@/core/prototype/Value/qeuals";
import { processRaw } from "@/core/prototype/Value/raw";
import { processToASBoolean } from "@/core/prototype/Value/toASBoolean";
import { processToASNumber } from "@/core/prototype/Value/toASNumber";
import { processToASString } from "@/core/prototype/Value/toASString";

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
  multiply: processMultiply,
  alt: processAlternative,
  alternative: processAlternative,
};

export { prototypeValueFunctions };
