import typeGuard from "@/typeGuard";

const resolve = (script: A_ANY, scopes: T_scope[]) => {
  if (typeGuard.Identifier(script)) {
    for (const scope of scopes) {
      if (scope[script.name] !== undefined) {
        return scope[script.name];
      }
    }
  }
  return undefined;
};
const assign = (target: A_ANY, value: unknown, scopes: T_scope[]) => {
  if (scopes.length < 1) return;
  if (typeGuard.Identifier(target)) {
    for (const scope of scopes) {
      if (scope[target.name] !== undefined) {
        scope[target.name] = value;
        return;
      }
    }
    if (scopes[0]) scopes[0][target.name] = value;
  }
};
const getGlobalScope = (scopes: T_scope[]): T_scope | undefined => {
  if (scopes.length < 2) {
    return undefined;
  } else {
    return scopes[scopes.length - 2];
  }
};
export {resolve,assign,getGlobalScope};