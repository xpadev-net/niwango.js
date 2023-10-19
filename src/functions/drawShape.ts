import type {
  A_CallExpression,
  IrFunction,
  T_scope,
} from "@xpadev-net/niwango-core";
import Core from "@xpadev-net/niwango-core";

import { IrShape } from "@/objects/shape";

/**
 * @関数
 * 図形描画関数
 * @param script
 * @param scopes
 */
const processDrawShape: IrFunction = (
  script: A_CallExpression,
  scopes: T_scope[],
  _,
  trace,
) => {
  const args = Core.utils.argumentParser(
    script.arguments,
    scopes,
    [
      "x",
      "y",
      "z",
      "shape",
      "width",
      "height",
      "color",
      "visible",
      "pos",
      "mask",
      "commentmask",
      "alpha",
      "rotation",
      "mover",
    ],
    trace,
  );
  return new IrShape(args);
};

export { processDrawShape };
