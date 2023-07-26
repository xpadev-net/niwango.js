import { Comment } from "@/@types/comment";
import { IRender } from "@/@types/IRender";

let render: IRender;

let currentTime = 0;

let comments: Comment[] = [];
let isWide = false;

const setRender = (val: IRender) => {
  render = val;
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
  currentTime,
  isWide,
  render,
  setComments,
  setCurrentTime,
  setIsWide,
  setRender,
};
