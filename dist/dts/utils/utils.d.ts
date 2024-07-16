import { T_scope } from "@xpadev-net/niwango-core";
import { commentFont } from "./../@types/IrText";
import { ValueType } from "./../@types/types";
declare const getGlobalScope: (scopes: T_scope[]) => T_scope | undefined;
declare const parseFont: (font: commentFont, size: string | number) => string;
declare const getValue: <T>(value: T | undefined, fallback: T) => T;
declare const format: (options: {
    [key: string]: unknown;
}, types: {
    [key: string]: ValueType;
}) => {
    [key: string]: unknown;
};
export { format, getGlobalScope, getValue, parseFont };
