import { execute } from "@/core/coreContext";
import { InvalidTypeError } from "@/errors/InvalidTypeError";

import { PrototypeObjectFunction } from "./index";

/**
 * @関数
 * 関数定義用関数
 * @param script
 * @param scopes
 * @param object
 */
const processSetSlot: PrototypeObjectFunction = (script, scopes, object) => {
  const key = execute(script.arguments[0], scopes);
  if (typeof key !== "string" && typeof key !== "number") {
    throw new InvalidTypeError(
      "[call expression] Object.setSlot: id must be string or number",
      script,
      scopes
    );
  }
  const value = execute(script.arguments[1], scopes);
  object[key] = value;
  return value;
};

export { processSetSlot };
