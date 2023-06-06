import { Comment } from "@/@types/comment";

let context: CanvasRenderingContext2D;

let currentTime = 0;

let comments: Comment[] = [];
let isWide = false;

const setContext = (val: CanvasRenderingContext2D) => {
  context = val;
};

const setCurrentTime = (time: number) => {
  currentTime = time;
};

const setComments = (val: Comment[]) => {
  comments = val;
};

const setIsWide = (val: boolean) => (isWide = val);

export {
  comments,
  context,
  currentTime,
  isWide,
  setComments,
  setContext,
  setCurrentTime,
  setIsWide,
};
