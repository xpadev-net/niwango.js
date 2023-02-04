import typeGuard from "@/typeGuard";
import { config } from "@/definition/config";
import { commentFont } from "@/@types/IrText";

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
const getGlobalScope = (scopes: T_scope[]): T_scope | undefined => {
  if (scopes.length < 2) {
    return undefined;
  } else {
    return scopes[scopes.length - 2];
  }
};

/**
 * フォント名とサイズをもとにcontextで使えるフォントを生成する
 * @param {string} font
 * @param {string|number} size
 * @returns {string}
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

const getValue = <T>(value: T | undefined, fallback: T): T => {
  return value ?? fallback;
};

export { resolve, getGlobalScope, parseFont, getValue };
