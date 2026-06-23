import { type T_scope } from "@xpadev-net/niwango-core";
import type { commentFont } from "./../@types/IrText";
import type { ValueType } from "./../@types/types";
declare const getGlobalScope: (scopes: T_scope[]) => T_scope | undefined;
type FontOptions = {
    bold?: boolean;
};
declare const parseFont: (font: commentFont, size: string | number, options?: FontOptions) => string;
declare const getValue: <T>(value: T | undefined, fallback: T) => T;
declare const format: (options: {
    [key: string]: unknown;
}, types: {
    [key: string]: ValueType;
}) => {
    [key: string]: unknown;
};
export { format, getGlobalScope, getValue, parseFont };
