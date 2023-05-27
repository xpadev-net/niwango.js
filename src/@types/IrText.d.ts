import { charItem } from "@/@types/flashText";

export type commentFlashFont = "defont" | "gulim" | "simsun";
export type commentContentItem =
  | commentNormalContentItem
  | commentCompatContentItem;
export type commentNormalContentItem = {
  type: "normal";
  content: string;
  font?: commentFlashFont;
  width?: number[];
};
export type commentCompatContentItem = {
  type: "compat";
  content: charItem[];
  font?: commentFlashFont;
  width?: number[];
};
export type commentContentIndex = {
  index: number;
  font: "gothic" | "gulim" | "simsunStrong" | "simsunWeak";
};
export type commentFont = "defont" | "gulim" | "simsun";
