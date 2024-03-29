import { platformFont } from "@/@types/fonts";

type flashCharList = {
  [key in "simsunStrong" | "simsunWeak" | "gulim" | "gothic"]: string;
};
type flashMode = "xp" | "vista";
type flashScriptChar = {
  [key in "super" | "sub"]: string;
};
type fontList = {
  [key in "gulim" | "simsun"]: string;
};
export type baseConfig = {
  stageWidth: {
    default: number;
    full: number;
  };
  stageHeight: number;
  canvasWidth: number;
  canvasHeight: number;

  flashChar: flashCharList;
  flashMode: flashMode;
  flashScriptChar: flashScriptChar;
  font: fontList;
  fonts: platformFont;
  scriptCharOffset: number;
  lineHeight: number;
  commentYPaddingTop: number;
  commentYOffset: number;

  letterSpacing: number;

  compatWidth: {
    [key in compatWidthKey]: number;
  };
  colors: { [p: string]: string };
  snapshotIntervalVpos: number;
};

type compatWidthKey = "aa" | "ww" | "0020" | "3000";
