import {execute,setContext} from "@/executor";
// @ts-ignore
import { parse } from "./parser/parser";

class Niwango {
  private readonly globalScope: T_scope;
  private readonly environmentScope: T_environment;
  constructor(context:CanvasRenderingContext2D) {
    setContext(context);
    this.globalScope = {
      Object: {},
    };
    this.environmentScope = {
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
  }

  public execute(script: string) {
    const ast = (parse as T_parse)(script);
    execute(ast, [this.globalScope, this.environmentScope]);
  }
}

export default Niwango;
