import { execute } from "@/context";
import { parse } from "./parser/parser";
import { setup } from "@/utils/setup";

setup();

/**
 * テスト用サンドボックス
 * @param niwango
 */
const run = (niwango: string) => {
  const globalScope = {
    Object: {},
  };
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
  const ast = parse(niwango);
  return execute(ast, [globalScope, environmentScope]);
};
export { run };
