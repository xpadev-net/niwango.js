import { execute, prototypeScope } from "@/core/coreContext";
import { parseScript } from "@/parser/parse";
import { setup } from "@/utils/setup";

setup();

/**
 * テスト用サンドボックス
 * @param niwango
 */
const run = (niwango: string) => {
  const globalScope = {};
  const environmentScope = {
    chat: undefined,
    commentColor: null, //0xffffff
    commentPlace: null, //naka
    commentSize: null, //medium
    commentInvisible: null, //false
    commentReverse: null, //0
    defaultSage: false, //false
    postDisabled: null, //false
    seekDisabled: null, //false
    isLoaded: true, //true
    isWide: null, //false
    lastVideo: "sm1", //sm1
  };
  const ast = parseScript(niwango, "jest");
  return execute(ast, [globalScope, environmentScope, prototypeScope]);
};
export { run };
