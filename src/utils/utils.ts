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

type FontOptions = {
  bold?: boolean;
};

const FONT_WEIGHT_KEYWORDS = new Set(["normal", "bold", "bolder", "lighter"]);

const isFontWeight = (weight: string): boolean => {
  return /^\d+$/.test(weight) || FONT_WEIGHT_KEYWORDS.has(weight.toLowerCase());
};

const toBoldWeight = (weight: string | number): string => {
  const value = `${weight}`;
  const normalized = value.trim().toLowerCase();
  if (/^\d+$/.test(normalized)) {
    return `${Math.max(Number(normalized), 700)}`;
  }
  if (normalized === "bold" || normalized === "bolder") {
    return value;
  }
  return "bold";
};

const applyBoldToFontString = (font: string): string => {
  const sizeMatch = font.match(/\b\d+(?:\.\d+)?px\b/);
  if (!sizeMatch || sizeMatch.index === undefined) {
    return `700 ${font}`;
  }
  const prefix = font.slice(0, sizeMatch.index);
  const suffix = font.slice(sizeMatch.index);
  const tokens = prefix.trim().split(/\s+/).filter(Boolean);
  for (let index = tokens.length - 1; index >= 0; index -= 1) {
    const token = tokens[index];
    if (token !== undefined && isFontWeight(token)) {
      tokens[index] = toBoldWeight(token);
      return `${tokens.join(" ")} ${suffix}`;
    }
  }
  return tokens.length > 0
    ? `${tokens.join(" ")} 700 ${suffix}`
    : `700 ${suffix}`;
};

/**
 * フォント名とサイズをもとにcontextで使えるフォントを生成する
 * @param font
 * @param size
 * @returns
 */
const parseFont = (
  font: commentFont,
  size: string | number,
  options: FontOptions = {},
): string => {
  const bold = options.bold ?? false;
  switch (font) {
    case "gulim":
    case "simsun":
      return bold
        ? applyBoldToFontString(config.font[font].replace("[size]", `${size}`))
        : config.font[font].replace("[size]", `${size}`);
    default:
      return `${bold ? toBoldWeight(config.fonts.defont.weight) : config.fonts.defont.weight} ${size}px ${config.fonts.defont.font}`;
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
