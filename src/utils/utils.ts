import Core, { type T_scope } from "@xpadev-net/niwango-core";

import type { commentFont } from "@/@types/IrText";
import type { ValueType } from "@/@types/types";
import { config } from "@/definition/config";

/**
 * 親変数の参照を取得する関数
 * @param scopes
 */
const getGlobalScope = (scopes: T_scope[]): T_scope | undefined => {
  if (scopes.length < 3) {
    return undefined;
  } else {
    return scopes[scopes.length - 3];
  }
};

/**
 * フォント名とサイズをもとにcontextで使えるフォントを生成する
 * @param font
 * @param size
 * @returns
 */
const formatFontWeight = (font: string, bold: boolean): string => {
  if (!bold) return font;
  return font.replace(/^(\S+\s+)(?:\d+|bold)(\s+)/, "$1bold$2");
};

const parseFont = (
  font: commentFont,
  size: string | number,
  bold = false,
): string => {
  switch (font) {
    case "gulim":
    case "simsun":
      return formatFontWeight(
        config.font[font].replace("[size]", `${size}`),
        bold,
      );
    default:
      return `${bold ? "bold" : config.fonts.defont.weight} ${size}px ${
        config.fonts.defont.font
      }`;
  }
};

/**
 * 値がundefinedの場合にfallbackを返す
 * @param value
 * @param fallback
 */
const getValue = <T>(value: T | undefined, fallback: T): T => {
  return value ?? fallback;
};

const format = (
  options: { [key: string]: unknown },
  types: { [key: string]: ValueType },
) => {
  for (const key of Object.keys(options)) {
    const value = options[key];
    const type = types[key];
    if (!type || type === "any") continue;
    if (value !== undefined && typeof value !== type) {
      if (type === "string") {
        options[key] = Core.format(value, "string");
      } else if (type === "number") {
        options[key] = Core.format(value, "number");
      } else if (type === "boolean") {
        options[key] = Core.format(value, "boolean");
      }
    }
  }
  return options;
};

export { format, getGlobalScope, getValue, parseFont };
