import type {
  A_CallExpression,
  IrFunction,
  T_scope,
} from "@xpadev-net/niwango-core";
import Core from "@xpadev-net/niwango-core";

import { IrText } from "@/objects/text";

/**
 * @関数
 * 文字描画関数
 * @param script
 * @param scopes
 */
const processDrawText: IrFunction = (
  script: A_CallExpression,
  scopes: T_scope[],
  _,
  trace
) => {
  const args = Core.utils.argumentParser(
    script.arguments,
    scopes,
    [
      "text",
      "x",
      "y",
      "z",
      "size",
      "pos",
      "color",
      "bold",
      "visible",
      "filter",
      "alpha",
      "mover",
      "scale",
    ],
    trace
  );
  return new IrText(args);
};

export { processDrawText };
