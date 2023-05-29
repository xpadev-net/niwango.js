import {initExecute} from "@/core/executor";
import {initResolvePrototype} from "@/core/prototype/resolve";

const initCore = () => {
  initExecute();
  initResolvePrototype()
}

export {initCore};