import { Comment } from "./@types/comment";
import { IRender } from "./@types/IRender";
declare let render: IRender;
declare let currentTime: number;
declare let comments: Comment[];
declare let isWide: boolean;
declare const setRender: (val: IRender) => void;
declare const setCurrentTime: (time: number) => void;
declare const setComments: (val: Comment[]) => void;
declare const setIsWide: (val: boolean) => boolean;
export { comments, currentTime, isWide, render, setComments, setCurrentTime, setIsWide, setRender, };
