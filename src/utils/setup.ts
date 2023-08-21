import Core from "@xpadev-net/niwango-core";

import { resetCanvas } from "@/contexts/canvas";
import { resetHandlers } from "@/contexts/commentHandler";
import { resetObjects } from "@/contexts/objectManager";
import { resetQueue } from "@/contexts/queue";
import { resetScripts } from "@/contexts/scripts";
import { initResultHook, resetSnapshot } from "@/contexts/snapshot";
import { initDefinedFunctions } from "@/functions";

/**
 * 関数を初期化する
 */
const setup = () => {
  Core.resetCore();
  initDefinedFunctions();
  initResultHook();
  resetQueue();
  resetObjects();
  resetHandlers();
  resetScripts();
  resetCanvas();
  resetSnapshot();
};

export { setup };
