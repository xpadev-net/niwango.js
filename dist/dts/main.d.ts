import type { Comment } from "./@types/comment";
type NiwangoParseErrorEvent = {
    phase: "parse";
    error: unknown;
    comment: Comment;
};
type NiwangoExecuteErrorEvent = {
    phase: "execute";
    error: unknown;
    source: "script" | "queue" | "commentHandler";
    vpos: number;
};
export type NiwangoErrorEvent = NiwangoParseErrorEvent | NiwangoExecuteErrorEvent;
export type NiwangoOptions = {
    onError?: (event: NiwangoErrorEvent) => void;
};
declare class Niwango {
    private readonly render;
    private readonly onError?;
    static default: typeof Niwango;
    private lastVpos;
    constructor(targetElement: HTMLCanvasElement | HTMLDivElement, comments: Comment[], options?: NiwangoOptions);
    private skipToVpos;
    private execute;
    draw(vpos: number, clear?: boolean): boolean;
    private _draw;
    addComments(...newComments: Comment[]): void;
}
export default Niwango;
