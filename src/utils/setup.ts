import { resetHandlers } from "@/commentHandler";
import { initExecute } from "@/executor";
import { resetQueue } from "@/queue";
import { resetScripts } from "@/scripts";
import { initArgumentParser } from "@/utils/argumentParser";
import { initAssign } from "@/utils/assign";
import { initGetName } from "@/utils/getName";
import { resetObjects } from "@/utils/objectManager";

/**
 * 関数を初期化する
 */
const setup = () => {
  initAssign();
  initArgumentParser();
  initGetName();
  initExecute();
  resetQueue();
  resetObjects();
  resetHandlers();
  resetScripts();
};

export { setup };
