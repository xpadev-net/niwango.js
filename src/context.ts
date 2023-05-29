import { ArgumentParser, Assign, Execute, GetName } from "@/@types/execute";
import { CommentMapper } from "@/commentMapper";

let argumentParser: ArgumentParser;
let assign: Assign;
let getName: GetName;

let context: CanvasRenderingContext2D;

let currentTime = 0;

let comments: CommentMapper[] = [];
let isWide = false;

const setArgumentParser = (val: ArgumentParser) => {
  argumentParser = val;
};

const setAssign = (val: Assign) => {
  assign = val;
};

const setGetName = (val: GetName) => {
  getName = val;
};

const setContext = (val: CanvasRenderingContext2D) => {
  context = val;
};

const setCurrentTime = (time: number) => {
  currentTime = time;
};

const setComments = (val: CommentMapper[]) => {
  comments = val;
};

const setIsWide = (val: boolean) => (isWide = val);

export {
  argumentParser,
  assign,
  comments,
  context,
  currentTime,
  getName,
  isWide,
  setArgumentParser,
  setAssign,
  setComments,
  setContext,
  setCurrentTime,
  setGetName,
  setIsWide,
};
