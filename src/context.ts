import { ArgumentParser, Assign, Execute, GetName } from "@/@types/execute";
import { CommentMapper } from "@/commentMapper";

let execute: Execute;
let argumentParser: ArgumentParser;
let assign: Assign;
let getName: GetName;

let context: CanvasRenderingContext2D;

let currentTime = 0;

let comments: CommentMapper[] = [];

const setExecute = (val: Execute) => {
  execute = val;
};

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

export {
  execute,
  argumentParser,
  assign,
  getName,
  context,
  currentTime,
  comments,
  setExecute,
  setArgumentParser,
  setAssign,
  setGetName,
  setContext,
  setCurrentTime,
  setComments,
};
