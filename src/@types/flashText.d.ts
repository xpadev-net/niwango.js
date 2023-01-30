import { commentContentItem, commentFont } from "@/@types/IrText";

export type parsedComment = {
  content: commentContentItem[];
  font: commentFont;
  lineCount: number;
  lineOffset: number;
};

export type measureTextInput = {
  content: commentContentItem[];
  font: commentFont;
  lineCount: number;
  size: number;
};

export type charItem = compatFillItem | normalCharItem | compatSpaceItem;

export type compatFillItem = {
  type: "fill";
  char: string;
  width: number;
};
export type normalCharItem = {
  type: "text";
  text: string;
};

export type compatSpaceItem = {
  type: "space";
  char: string;
  width: number;
};
