import { initPrototypeScope } from "@/core/coreContext";
import { initExecute } from "@/core/executor";
import { initResolvePrototype } from "@/core/prototype/resolve";

const initCore = () => {
  initExecute();
  initResolvePrototype();
  initPrototypeScope();
};

export { initCore };
