import type {
  A_CallExpression,
  IrFunction,
  T_scope,
} from "@xpadev-net/niwango-core";
import Core from "@xpadev-net/niwango-core";

import { IrText } from "@/objects/text";

const drawTextArgs = [
  "x",
  "y",
  "z",
  "text",
  "size",
  "scale",
  "pos",
  "color",
  "bold",
  "visible",
  "alpha",
  "filter",
  "mover",
];

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
  trace,
) => {
  const args = Core.utils.argumentParser(
    script.arguments,
    scopes,
    drawTextArgs,
    trace,
  );
  return new IrText(args);
};

/**
 * @関数
 * dt関数 (drawTextのエイリアス、AS側デフォルト値: size=30, filter="fuchi")
 */
const processDt: IrFunction = (
  script: A_CallExpression,
  scopes: T_scope[],
  _,
  trace,
) => {
  const args = Core.utils.argumentParser(
    script.arguments,
    scopes,
    drawTextArgs,
    trace,
  );
  if (args.size === undefined || args.size === 0) args.size = 30;
  if (args.filter === undefined) args.filter = "fuchi";
  return new IrText(args);
};

export { processDrawText,processDt };
