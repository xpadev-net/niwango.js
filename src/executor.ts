import typeGuard from "@/typeGuard";

const execute = (script: A_ANY, scope: T_scope[]) => {
  if (typeGuard.CallExpression(script)) {
    console.log(script, scope);
  }
};
export default execute;
