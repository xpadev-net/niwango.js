import { T_scope } from "@xpadev-net/niwango-core";

import { T_environment } from "@/@types/types";

let globalScope: T_scope;
let environmentScope: T_environment;

const setGlobalScope = (scope: T_scope) => {
  globalScope = scope;
};

const setEnvironmentScope = (scope: T_environment) => {
  environmentScope = scope;
};

export { environmentScope, globalScope, setEnvironmentScope, setGlobalScope };
