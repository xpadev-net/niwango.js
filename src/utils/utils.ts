import { A_ANY, T_scope } from "@/@types/ast";
import { commentFont } from "@/@types/IrText";
import { config } from "@/definition/config";
import typeGuard from "@/typeGuard";

/**
 * 変数の参照を取得する関数
 * @param script
 * @param scopes
 */
const resolve = (script: A_ANY, scopes: T_scope[]) => {
  try {
    if (typeGuard.Identifier(script)) {
      for (const scope of scopes) {
        if (scope[script.name] !== undefined) {
          return scope[script.name];
        }
      }
    }
    return undefined;
  } catch (e) {
    if (e instanceof Error) {
      console.error(`[resolve] ${e.name}: ${e.message}`, script, scopes);
    }
  }
};

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

export { getGlobalScope, getValue, parseFont, resolve };
