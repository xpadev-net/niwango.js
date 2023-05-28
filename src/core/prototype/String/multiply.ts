import { PrototypeStringFunction } from "@/core/prototype/String/index";
import { execute } from "@/core/coreContext";
import { Multiplication } from "@/core/operators";

const processMultiply: PrototypeStringFunction = (script, scopes, object) => {
  const repeatCount = execute(script.arguments[0], scopes);
  return Multiplication(object, repeatCount);
};

export { processMultiply };
