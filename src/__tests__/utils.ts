import { execute } from "@/executor";
//@ts-ignore
import { parse } from "@/parser/parser";

const run = (niwango: string) => {
  const globalScope = {
      Object: {},
    },
    environmentScope = {
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
  const ast = (parse as T_parse)(niwango);
  return execute(ast, [globalScope, environmentScope]);
};
export { run };
