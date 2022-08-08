import execute from "@/executor";
// @ts-ignore
import { parse } from "./parser/parser";

class Niwango {
  private readonly globalScope: T_scope;
  private readonly environmentScope: T_environment;
  constructor() {
    this.globalScope = {};
    this.environmentScope = {
      chat: undefined,
      commentColor: undefined, //0xffffff
      commentPlace: undefined, //naka
      commentSize: undefined, //medium
      commentInvisible: undefined, //false
      commentReverse: undefined, //0
      defaultSage: false, //false
      postDisabled: undefined, //false
      seekDisabled: undefined, //false
      isLoaded: true, //true
      isWide: undefined, //false
      lastVideo: "sm1", //sm1
    };
  }

  public execute(script: string) {
    const ast = (parse as T_parse)(script);
    execute(ast, [this.globalScope, this.environmentScope]);
  }
}

export default Niwango;
