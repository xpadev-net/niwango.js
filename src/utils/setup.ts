import { initAssign } from "@/utils/assign";
import { initArgumentParser } from "@/utils/argumentParser";
import { initGetName } from "@/utils/getName";
import { initExecute } from "@/executor";

/**
 * 関数を初期化する
 */
const setup = () => {
  initAssign();
  initArgumentParser();
  initGetName();
  initExecute();
};

export { setup };
