import { A_ANY, T_scope } from "@/@types/ast";
import { IFunction, IFunctions, INiwangoCore } from "@/@types/core/core";
import { execute } from "@/core/coreContext";

class NiwangoCore implements INiwangoCore {
  private functions: IFunctions;
  constructor() {
    this.functions = {};
  }

  bind(func: IFunction) {
    this.functions[func.name] = func;
  }

  run(niwango: A_ANY, scopes: T_scope[]) {
    execute(niwango, scopes);
  }
}

export { NiwangoCore };
