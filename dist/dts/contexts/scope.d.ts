import { T_scope } from "@xpadev-net/niwango-core";
import { T_environment } from "./../@types/types";
declare let globalScope: T_scope;
declare let environmentScope: T_environment;
declare const setGlobalScope: (scope: T_scope) => void;
declare const setEnvironmentScope: (scope: T_environment) => void;
export { environmentScope, globalScope, setEnvironmentScope, setGlobalScope };
