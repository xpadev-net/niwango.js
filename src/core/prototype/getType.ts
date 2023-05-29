import { prototypeType } from "@/@types/core/prototype";

const getType = (i: unknown): prototypeType => {
  const type = typeof i;
  if (type === "object") {
    if (i === null) return "null";
    if (Array.isArray(i)) return "array";
    return "object";
  }
  return type;
};

export { getType };
