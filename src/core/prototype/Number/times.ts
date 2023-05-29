import { A_ANY, Argument } from "@/@types/ast";
import { execute } from "@/core/coreContext";
import { PrototypeNumberFunction } from "@/core/prototype/Number/index";

const processTimes: PrototypeNumberFunction = (script, scopes, object) => {
  const body = script.arguments[0] as Argument<A_ANY>;
  let lastResult;
  for (let i = 0; i < Number(object); i++) {
    if (body.type === "LambdaExpression") {
      lastResult = execute(body.body, [{ "@0": i }, ...scopes]);
      continue;
    }
    lastResult = execute(body, [{ "@0": i }, ...scopes]);
  }
  return lastResult;
};

export { processTimes };
