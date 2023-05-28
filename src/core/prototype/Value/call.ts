import { PrototypeValueFunction } from "@/core/prototype/Value/index";
import { A_CallExpression } from "@/@types/ast";
import { execute } from "@/core/coreContext";
import { InvalidTypeError } from "@/errors/InvalidTypeError";

const processCall: PrototypeValueFunction = (script, scopes) => {
  const functionNameAst = script.arguments[0];
  if (!functionNameAst)
    throw new InvalidTypeError("function name must be exist", script, scopes);
  const functionName = execute(script.arguments[0], scopes);
  if (typeof functionName !== "string")
    throw new InvalidTypeError(
      "typeof function name must be string",
      script,
      scopes
    );
  const newScript: A_CallExpression = {
    type: "CallExpression",
    callee: functionNameAst,
    arguments: script.arguments[1] ? [script.arguments[1]] : [],
  };
  return execute(newScript, scopes);
};

export { processCall };
