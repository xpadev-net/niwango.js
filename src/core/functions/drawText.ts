import { A_CallExpression, T_scope } from "@/@types/ast";
import { argumentParser, context } from "@/context";
import { IrText } from "@/objects/text";
import { IrFunction } from "@/@types/core/functions";

/**
 * @関数
 * 文字描画関数
 * @param script
 * @param scopes
 */
const processDrawText: IrFunction = (
  script: A_CallExpression,
  scopes: T_scope[]
) => {
  const args = argumentParser(script.arguments, scopes, [
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
  ]);
  return new IrText(context, args);
};

export { processDrawText };
