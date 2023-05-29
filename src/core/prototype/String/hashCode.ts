import { PrototypeStringFunction } from "@/core/prototype/String/index";

const processHashCode: PrototypeStringFunction = (_script, _scopes, object) => {
  let seed = 0;
  for (let i = 0; i < object.length; i++) {
    seed = seed * 31 + object.charCodeAt(i);
  }
  return seed;
};

export { processHashCode };
