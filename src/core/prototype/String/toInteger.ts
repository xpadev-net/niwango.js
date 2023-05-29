import { PrototypeStringFunction } from "@/core/prototype/String/index";

const processToInteger: PrototypeStringFunction = (
  _script,
  _scopes,
  object
) => {
  if (object.match(/^0[1-7]+/)) {
    return parseInt(object, 8);
  }
  return parseInt(object);
};

export { processToInteger };
