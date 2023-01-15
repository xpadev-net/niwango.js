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
