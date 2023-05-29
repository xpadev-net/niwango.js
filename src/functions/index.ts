import Core from "@xpadev-net/niwango-core";

import { processCommentTrigger } from "@/functions/commentTrigger";
import { processDrawShape } from "@/functions/drawShape";
import { processDrawText } from "@/functions/drawText";
import { processRand } from "@/functions/rand";
import { processTimer } from "@/functions/timer";

const initDefinedFunctions = () => {
  Core.appendDefinedFunctions("commentTrigger", processCommentTrigger);
  Core.appendDefinedFunctions("ctrig", processCommentTrigger);
  Core.appendDefinedFunctions("drawShape", processDrawShape);
  Core.appendDefinedFunctions("drawText", processDrawText);
  Core.appendDefinedFunctions("dt", processDrawText);
  Core.appendDefinedFunctions("rand", processRand);
  Core.appendDefinedFunctions("timer", processTimer);
};

export { initDefinedFunctions };
