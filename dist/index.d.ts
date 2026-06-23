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
declare class Niwango {
  private readonly render;
  static default: typeof Niwango;
  private lastVpos;
  constructor(targetElement: HTMLCanvasElement | HTMLDivElement, comments: Comment[]);
  private skipToVpos;
  private execute;
  draw(vpos: number, clear?: boolean): boolean;
  private _draw;
  addComments(...newComments: Comment[]): void;
}
//#endregion
export { Niwango as default };
//# sourceMappingURL=index.d.ts.map