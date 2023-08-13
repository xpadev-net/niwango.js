import { resetHandlers } from "@/contexts/commentHandler";
import { resetObjects } from "@/contexts/objectManager";
import { resetQueue } from "@/contexts/queue";
import { resetScripts } from "@/contexts/scripts";
import { initDefinedFunctions } from "@/functions";

/**
 * 関数を初期化する
 */
const setup = () => {
  initDefinedFunctions();
  resetQueue();
  resetObjects();
  resetHandlers();
  resetScripts();
};

export { setup };
