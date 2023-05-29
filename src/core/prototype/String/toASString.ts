import { PrototypeStringFunction } from "@/core/prototype/String/index";

const processToASString: PrototypeStringFunction = (
  _script,
  _scopes,
  object
) => {
  return object;
};

export { processToASString };
