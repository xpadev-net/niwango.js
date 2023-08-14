import { A_ANY, T_scope } from "@xpadev-net/niwango-core";

import { IrObject } from "@/objects/object";

export type Script = {
  type: "script";
  script: A_ANY;
  time: number;
};

export type T_environment = {
  chat?: T_chat;
  commentColor: number | null; //0xffffff
  commentPlace: T_commentPos | null; //naka
  commentSize: T_commentSize | null; //medium
  commentInvisible: boolean | null; //false
  commentReverse: number | null; //0
  defaultSage: false; //false
  postDisabled: boolean | null; //false
  seekDisabled: boolean | null; //false
  isLoaded: true; //true
  isWide: boolean | null; //false
  lastVideo: "sm1"; //sm1
  screenWidth: number;
  readonly screenHeight: number;
};
export type T_chat = {
  message: string;
  vpos: number;
  isYourPost: false;
  mail: string;
  fromButton: boolean;
  isPremium: boolean;
  color: number | undefined;
  size: number | undefined;
  no: number;
};
export type T_commentPos = "ue" | "naka" | "shita";
export type T_commentSize = "big" | "medium" | "small";
export type Argument<T> = T & {
  NIWANGO_Identifier: null | A_ANY;
};
export type IQueue = {
  script: A_ANY;
  time: number;
  scopes: T_scope[];
  type: "queue";
  trace: A_ANY[];
};
export type IHandler = {
  script: A_ANY;
  scopes: T_scope[];
  time: number;
  duration?: number;
  type: "commentHandler";
  trace: A_ANY[];
};
export type ISnapshot = {
  vpos: number;
  queue: IQueue[];
  scripts: Script[];
  handlers: IHandler[];
  globalScope: T_scope;
  environmentScope: T_environment;
  drawObjects: IrObject[];
};
export type ICanvas = {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
};
