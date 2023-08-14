import { ICanvas } from "@/@types/types";
import { config } from "@/definition/config";

let internalCanvas: { [id: string]: ICanvas } = {};

const createCanvas = (id: string): ICanvas => {
  const canvas = document.createElement("canvas");
  canvas.width = config.canvasWidth;
  canvas.height = config.canvasHeight;
  canvas.id = id;
  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("Fail to get CanvasRenderingContext2D");
  }
  context.textAlign = "start";
  context.textBaseline = "alphabetic";
  context.lineWidth = 4;
  context.lineJoin = "round";
  context.strokeStyle = "#000000";
  const value = { canvas, context };
  internalCanvas[id] = value;
  return value;
};

const getCanvas = (id: string): ICanvas => {
  return internalCanvas[id] ?? createCanvas(id);
};

const resetCanvas = () => {
  internalCanvas = {};
};

export { getCanvas, resetCanvas };
