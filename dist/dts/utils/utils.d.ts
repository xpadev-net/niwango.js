import { type T_scope } from "@xpadev-net/niwango-core";
import type { commentFont } from "./../@types/IrText";
import type { ValueType } from "./../@types/types";
declare const getGlobalScope: (scopes: T_scope[]) => T_scope | undefined;
type FontOptions = {
    bold?: boolean;
};
declare const parseFont: (font: commentFont, size: string | number, options?: FontOptions) => string;
declare const getValue: <T>(value: T | undefined, fallback: T) => T;
declare const format: <T extends object>(options: T, types: {
    [key: string]: ValueType;
}) => T;
declare const getFiniteNumber: (value: number | undefined, fallback: number) => number;
declare const getAllowedString: <T extends string>(value: string | undefined, allowedValues: readonly T[], fallback: T) => T;
declare const normalizeFiniteNumbers: <T extends object>(options: Partial<T>, defaults: T, keys: readonly (keyof T)[]) => Partial<T>;
declare const normalizeStringUnion: <T extends object, K extends keyof T, V extends Extract<T[K], string>>(options: Partial<T>, key: K, allowedValues: readonly V[], fallback: V) => Partial<T>;
export { format, getAllowedString, getFiniteNumber, getGlobalScope, getValue, normalizeFiniteNumbers, normalizeStringUnion, parseFont, };
