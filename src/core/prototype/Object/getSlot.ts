import { InvalidTypeError } from "@/errors/InvalidTypeError";
import { execute } from "@/core/coreContext";
import { PrototypeFunction } from "@/@types/core/prototype";

/**
 * @関数
 * 関数定義用関数
 * @param script
 * @param scopes
 * @param object
 */
const processGetSlot: PrototypeFunction = (script, scopes, object) => {
  const key = execute(script.arguments[0], scopes);
  if (typeof key !== "string" && typeof key !== "number") {
    throw new InvalidTypeError(
      "[call expression] Object.getSlot: id must be string or number",
      script,
      scopes
    );
  }
  return object[key];
};

export { processGetSlot };
