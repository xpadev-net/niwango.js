import type { measureTextInput, parsedComment } from "./../@types/flashText";
declare const normalizeNewlines: (string: string) => string;
declare const parse: (string: string, compat?: boolean) => parsedComment;
declare const measure: (context: CanvasRenderingContext2D, comment: measureTextInput) => {
    width: number;
    height: number;
};
export { measure, normalizeNewlines, parse };
