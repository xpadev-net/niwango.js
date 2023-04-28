import typeGuard from "@/typeGuard";
import { execute, setGetName } from "@/context";

const getName = (target: A_ANY, scopes: T_scope[]) => {
  if (typeGuard.Identifier(target)) {
    return target.name;
  } else {
    return execute(target, scopes);
  }
};

const initGetName = () => {
  setGetName(getName);
};

export { initGetName };
