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

declare class Niwango {
    private readonly render;
    static default: typeof Niwango;
    private lastVpos;
    constructor(targetElement: HTMLCanvasElement | HTMLDivElement, comments: Comment[]);
    private execute;
    draw(vpos: number, clear?: boolean): boolean;
    private _draw;
    addComments(...newComments: Comment[]): void;
}

export { Niwango as default };
