import Core, { T_scope } from "@xpadev-net/niwango-core";

import { commentFont } from "@/@types/IrText";
import { ValueType } from "@/@types/types";
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
const parseFont = (font: commentFont, size: string | number): string => {
  switch (font) {
    case "gulim":
    case "simsun":
      return config.font[font].replace("[size]", `${size}`);
    default:
      return `${config.fonts.defont.weight} ${size}px ${config.fonts.defont.font}`;
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
    if (value !== undefined && type !== "any" && typeof value !== type) {
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
