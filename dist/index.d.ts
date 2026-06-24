//#region dist/dts/@types/comment.d.ts
interface Comment {
  message: string;
  vpos: number;
  isYourPost: boolean;
  mail: string;
  fromButton: boolean;
  isPremium: boolean;
  color: number;
  size: number;
  no: number;
  _vpos: number;
  _owner: boolean;
}
//#endregion
//#region dist/dts/main.d.ts
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
type NiwangoErrorEvent = NiwangoParseErrorEvent | NiwangoExecuteErrorEvent;
type NiwangoOptions = {
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
//#endregion
export { type Comment, type NiwangoErrorEvent, type NiwangoOptions, Niwango as default };