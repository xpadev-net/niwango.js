import { execute } from "@/core/coreContext";
import { Multiplication } from "@/core/operators";
import { PrototypeStringFunction } from "@/core/prototype/String/index";

const processMultiply: PrototypeStringFunction = (script, scopes, object) => {
  const repeatCount = execute(script.arguments[0], scopes);
  return Multiplication(object, repeatCount);
};

export { processMultiply };
