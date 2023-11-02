import { measureTextInput, parsedComment } from "./../@types/flashText";
declare const parse: (string: string, compat?: boolean) => parsedComment;
declare const measure: (context: CanvasRenderingContext2D, comment: measureTextInput) => {
    width: number;
    height: number;
};
export { measure, parse };
