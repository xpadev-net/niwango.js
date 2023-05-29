import { resetHandlers } from "@/commentHandler";
import { initDefinedFunctions } from "@/functions";
import { resetQueue } from "@/queue";
import { resetScripts } from "@/scripts";
import { resetObjects } from "@/utils/objectManager";

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
