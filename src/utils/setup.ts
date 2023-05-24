import { initAssign } from "@/utils/assign";
import { initArgumentParser } from "@/utils/argumentParser";
import { initGetName } from "@/utils/getName";
import { initExecute } from "@/executor";
import { resetQueue } from "@/queue";
import { resetObjects } from "@/utils/objectManager";
import { resetHandlers } from "@/commentHandler";
import { resetScripts } from "@/scripts";

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
