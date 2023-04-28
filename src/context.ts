import { ArgumentParser, Assign, Execute, GetName } from "@/@types/execute";

let execute: Execute;
let argumentParser: ArgumentParser;
let assign: Assign;
let getName: GetName;

let context: CanvasRenderingContext2D;

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

export {
  execute,
  argumentParser,
  assign,
  getName,
  context,
  setExecute,
  setArgumentParser,
  setAssign,
  setGetName,
  setContext,
};
