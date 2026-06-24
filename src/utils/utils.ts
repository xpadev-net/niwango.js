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

const format = <T extends object>(
  options: T,
  types: { [key: string]: ValueType },
) => {
  const objectOptions = options as { [key: string]: unknown };
  for (const key of Object.keys(options)) {
    const value = objectOptions[key];
    const type = types[key];
    if (!type || type === "any") continue;
    if (value !== undefined && typeof value !== type) {
      if (type === "string") {
        objectOptions[key] = Core.format(value, "string");
      } else if (type === "number") {
        objectOptions[key] = Core.format(value, "number");
      } else if (type === "boolean") {
        objectOptions[key] = Core.format(value, "boolean");
      }
    }
  }
  return options;
};

const getFiniteNumber = (
  value: number | undefined,
  fallback: number,
): number => {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
};

const getAllowedString = <T extends string>(
  value: string | undefined,
  allowedValues: readonly T[],
  fallback: T,
): T => {
  return allowedValues.includes(value as T) ? (value as T) : fallback;
};

const normalizeFiniteNumbers = <T extends object>(
  options: Partial<T>,
  defaults: T,
  keys: readonly (keyof T)[],
): Partial<T> => {
  for (const key of keys) {
    const value = options[key];
    if (
      value !== undefined &&
      (typeof value !== "number" || !Number.isFinite(value))
    ) {
      options[key] = defaults[key];
    }
  }
  return options;
};

const normalizeStringUnion = <
  T extends object,
  K extends keyof T,
  V extends Extract<T[K], string>,
>(
  options: Partial<T>,
  key: K,
  allowedValues: readonly V[],
  fallback: V,
): Partial<T> => {
  const value = options[key];
  if (
    value !== undefined &&
    (typeof value !== "string" || !allowedValues.includes(value as V))
  ) {
    options[key] = fallback as T[K];
  }
  return options;
};

export {
  format,
  getAllowedString,
  getFiniteNumber,
  getGlobalScope,
  getValue,
  normalizeFiniteNumbers,
  normalizeStringUnion,
  parseFont,
};
