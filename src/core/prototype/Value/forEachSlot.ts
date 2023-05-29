import { PrototypeValueFunction } from "@/core/prototype/Value/index";
import { NotImplementedError } from "@/errors/NotImplementedError";

const processForEachSlot: PrototypeValueFunction = (script, scopes) => {
  throw new NotImplementedError(script, scopes);
};

export { processForEachSlot };
