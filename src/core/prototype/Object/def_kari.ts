import { definedFunction } from "@/@types/function";
import { execute } from "@/core/coreContext";
import { PrototypeObjectFunction } from "@/core/prototype/Object/index";

/**
 * @関数
 * 関数定義用関数
 * @param script
 * @param scopes
 * @param object
 */
const processDefKari: PrototypeObjectFunction = (script, scopes, object) => {
  if (!script.arguments[0]) {
    return;
  }
  const functionName = execute(script.arguments[0], scopes);
  if (typeof functionName !== "string") {
    return;
  }
  object[functionName] = {
    type: "definedFunction",
    isKari: true,
    script,
  } as definedFunction;
};

export { processDefKari };
