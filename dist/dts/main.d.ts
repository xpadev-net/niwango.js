import { Comment } from "./@types/comment";
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
export default Niwango;
