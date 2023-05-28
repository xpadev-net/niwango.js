import { PrototypeObjectFunction } from "./index";

/**
 * @関数
 * 関数定義用関数
 * @param _script
 * @param _scope
 * @param object
 */
const processClone: PrototypeObjectFunction = (_script, _scope, object) => {
  return structuredClone(object);
};

export { processClone };
