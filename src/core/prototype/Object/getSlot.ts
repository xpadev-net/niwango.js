import { InvalidTypeError } from "@/errors/InvalidTypeError";
import { execute } from "@/core/coreContext";
import { PrototypeObjectFunction } from "./index";

/**
 * @関数
 * 関数定義用関数
 * @param script
 * @param scopes
 * @param object
 */
const processGetSlot: PrototypeObjectFunction = (script, scopes, object) => {
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
