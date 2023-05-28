import { PrototypeValueFunction } from "@/core/prototype/Value/index";
import { execute } from "@/core/coreContext";
import { InvalidTypeError } from "@/errors/InvalidTypeError";
import { Multiplication } from "@/core/operators";

const processMultiply: PrototypeValueFunction = (script, scopes, object) => {
  const value = execute(script.arguments[0], scopes);
  if (value === undefined)
    throw new InvalidTypeError("undefined", script, scopes);
  return Multiplication(object, value);
};

export { processMultiply };
