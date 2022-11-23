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
const getGlobalScope = (scopes: T_scope[]): T_scope | undefined => {
  if (scopes.length < 2) {
    return undefined;
  } else {
    return scopes[scopes.length - 2];
  }
};
export { resolve, getGlobalScope };
