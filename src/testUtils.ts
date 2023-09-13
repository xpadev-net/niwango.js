import Core from "@xpadev-net/niwango-core";

import { setup } from "@/utils/setup";

setup();
if (!globalThis.structuredClone) {
  globalThis.structuredClone = <T>(objectToClone: T) => {
    return JSON.parse(JSON.stringify(objectToClone)) as T;
  };
}
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
  const ast = Core.parseScript(niwango, "jest");
  return Core.execute(
    ast,
    [globalScope, environmentScope, Core.prototypeScope],
    [ast]
  );
};
export { run };
