import { charItem } from "@/@types/flashText";
import { IObjectOptions } from "@/@types/IrObject";

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

type ITextFilter = "" | "fuchi" | "kasumi" | "kage";
type ITextOptions = {
  text: string;
  size: number;
  bold: boolean;
  filter: ITextFilter;
} & IObjectOptions;
type ITextOptionsNullable = Partial<ITextOptions>;
