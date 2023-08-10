import { A_ANY } from "@xpadev-net/niwango-core";

export type Scripts = {
  type: "script";
  script: A_ANY;
  time: number;
}[];

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
