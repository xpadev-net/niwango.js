import type { A_ANY, T_scope } from "@xpadev-net/niwango-core";
import { Comment } from "./../@types/comment";
import { IHandler } from "./../@types/types";
declare let handlers: IHandler[];
declare const resetHandlers: () => void;
declare const addHandler: (script: A_ANY, scopes: T_scope[], trace: A_ANY[], time: number, duration?: number) => void;
declare const setHandlers: (newHandlers: IHandler[]) => void;
declare const triggerHandlers: (comment: Comment) => void;
declare const getComments: (vpos: number) => {
    time: number;
    comment: Comment;
    type: "comment";
}[];
export { addHandler, getComments, handlers, resetHandlers, setHandlers, triggerHandlers, };
