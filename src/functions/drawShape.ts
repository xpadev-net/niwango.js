import Core from "@xpadev-net/niwango-core";

import { A_CallExpression, T_scope } from "@/@types/ast";
import { IrFunction } from "@/@types/core/functions";
import { context } from "@/context";
import { IrShape } from "@/objects/shape";

/**
 * @関数
 * 図形描画関数
 * @param script
 * @param scopes
 */
const processDrawShape: IrFunction = (
  script: A_CallExpression,
  scopes: T_scope[]
) => {
  const args = Core.utils.argumentParser(script.arguments, scopes, [
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
  ]);
  return new IrShape(context, args);
};

export { processDrawShape };
