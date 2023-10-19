import { charItem, measureTextInput, parsedComment } from "@/@types/flashText";
import {
  commentContentIndex,
  commentContentItem,
  commentFlashFont,
} from "@/@types/IrText";
import { config } from "@/definition/config";
import { nativeSort } from "@/utils/sort";
import { getValue, parseFont } from "@/utils/utils";

/**
 * Flashのフォント名を取得する
 * @param font
 */
const getFontName = (font: string): commentFlashFont => {
  if (font.match(/^simsun/)) {
    return "simsun";
  }
  if (font === "gothic") {
    return "defont";
  }
  return "gulim";
};

/**
 * Flash処理用にコメントを分割する
 * @param string
 */
const splitContents = (string: string) => {
  return Array.from(string.match(/[\n\r]|[^\n\r]+/g) || []).map((val) =>
    Array.from(val.match(/[ -~｡-ﾟ]+|[^ -~｡-ﾟ]+/g) || []),
  );
};

/**
 * 描画するフォントを処理
 * @param string
 */
const getFontIndex = (string: string): commentContentIndex[] => {
  const regex = {
    simsunStrong: new RegExp(config.flashChar.simsunStrong),
    simsunWeak: new RegExp(config.flashChar.simsunWeak),
    gulim: new RegExp(config.flashChar.gulim),
    gothic: new RegExp(config.flashChar.gothic),
  };
  const index: commentContentIndex[] = [];
  let match;
  if ((match = regex.simsunStrong.exec(string)) !== null) {
    index.push({ font: "simsunStrong", index: match.index });
  }
  if ((match = regex.simsunWeak.exec(string)) !== null) {
    index.push({ font: "simsunWeak", index: match.index });
  }
  if ((match = regex.gulim.exec(string)) !== null) {
    index.push({ font: "gulim", index: match.index });
  }
  if ((match = regex.gothic.exec(string)) !== null) {
    index.push({ font: "gothic", index: match.index });
  }
  return index;
};

/**
 * 文字列をFlash処理用にパースする
 * @param string
 * @param compat
 */
const parse = (string: string, compat = false): parsedComment => {
  const content: commentContentItem[] = [];
  const lines = splitContents(string);
  for (const line of lines) {
    const lineContent: commentContentItem[] = [];
    for (const part of line) {
      if (part.match(/[ -~｡-ﾟ]+/g) !== null) {
        lineContent.push(parseHalfStr(part, compat));
        continue;
      }
      lineContent.push(...parseFullStr(part));
    }
    const firstContent = lineContent[0];
    if (firstContent?.font) {
      content.push(
        ...lineContent.map((val) => {
          val.font ||= firstContent.font;
          return val;
        }),
      );
    } else {
      content.push(...lineContent);
    }
  }
  const lineCount = Array.from(string.match(/[\n\r]/g) || []).length + 1;
  const font = content[0]?.font || "defont";
  const lineOffset =
    (string.match(new RegExp(config.flashScriptChar.super, "g"))?.length || 0) *
      -1 *
      config.scriptCharOffset +
    (string.match(new RegExp(config.flashScriptChar.sub, "g"))?.length || 0) *
      config.scriptCharOffset;
  return { content, font, lineCount, lineOffset };
};

/**
 * 半角文字列をFlash処理用にパースする
 * @param string
 * @param compat
 */
const parseHalfStr = (string: string, compat: boolean): commentContentItem => {
  if (!compat) {
    return {
      type: "normal",
      content: string,
    };
  }
  const result: charItem[] = [];
  let lastItem: charItem | undefined;
  let buffer = "";
  let lastChar = "";
  for (const char of string) {
    if (char === "a" && lastChar === "a") {
      if (buffer) {
        lastItem = { type: "text", text: buffer };
        result.push(lastItem);
        buffer = "";
      }
      lastChar = "";
      if (lastItem?.type === "fill" && lastItem.char === "a") {
        lastItem.width += config.compatWidth.aa;
        continue;
      }
      lastItem = { type: "fill", char: "a", width: config.compatWidth.aa };
      result.push(lastItem);
      continue;
    }
    if (char === "w" && lastChar === "w") {
      if (buffer) {
        lastItem = { type: "text", text: buffer };
        result.push(lastItem);
        buffer = "";
      }
      lastChar = "";
      if (lastItem?.type === "fill" && lastItem.char === "w") {
        lastItem.width += config.compatWidth.ww;
        continue;
      }
      lastItem = { type: "fill", char: "w", width: config.compatWidth.ww };
      result.push(lastItem);
      continue;
    }
    if (char === "\u0020") {
      if (lastChar) {
        lastItem = { type: "text", text: buffer + lastChar };
        result.push(lastItem);
        buffer = lastChar = "";
      }
      if (lastItem?.type === "space" && lastItem.char === "\u0020") {
        lastItem.width += config.compatWidth["0020"];
        continue;
      }
      lastItem = {
        type: "space",
        char: "\u0020",
        width: config.compatWidth["0020"],
      };
      result.push(lastItem);
      continue;
    }
    buffer += lastChar;
    lastChar = char;
  }
  if (buffer || lastChar) {
    result.push({ type: "text", text: buffer + lastChar });
  }
  return { type: "compat", content: result };
};

/**
 * 全角文字をFlash処理用にパースする
 * @param string
 */
const parseFullStr = (string: string): commentContentItem[] => {
  const index = getFontIndex(string);
  if (index.length === 0) {
    return [{ type: "normal", content: string }];
  }
  if (index.length === 1 && index[0]) {
    return [
      { type: "normal", content: string, font: getFontName(index[0].font) },
    ];
  }
  index.sort(nativeSort("index"));
  if (config.flashMode === "xp") {
    const result: commentContentItem[] = [];
    let offset = 0;
    for (let i = 1; i < index.length; i++) {
      const currentVal = index[i];
      const lastVal = index[i - 1];
      if (currentVal === undefined || lastVal === undefined) {
        continue;
      }
      result.push({
        type: "normal",
        content: string.slice(offset, currentVal.index),
        font: getFontName(lastVal.font),
      });
      offset = currentVal.index;
    }
    const val = index[index.length - 1];
    if (val) {
      result.push({
        type: "normal",
        content: string.slice(offset),
        font: getFontName(val.font),
      });
    }
    return result;
  }
  const firstVal = index[0];
  const secondVal = index[1];
  if (!(firstVal && secondVal)) {
    return [{ type: "normal", content: string }];
  }
  if (firstVal.font !== "gothic") {
    return [
      { type: "normal", content: string, font: getFontName(firstVal.font) },
    ];
  }
  return [
    {
      type: "normal",
      content: string.slice(0, secondVal.index),
      font: getFontName(firstVal.font),
    },
    {
      type: "normal",
      content: string.slice(secondVal.index),
      font: getFontName(secondVal.font),
    },
  ];
};

/**
 * 文字幅を計測する
 * @param context
 * @param comment
 */
const measure = (
  context: CanvasRenderingContext2D,
  comment: measureTextInput,
) => {
  const width_arr = [];
  let currentWidth = 0;
  for (const item of comment.content) {
    const widths = [];
    context.font = parseFont(getValue(item.font, comment.font), comment.size);
    if (item.type === "normal") {
      const lines = item.content.split(/[\n\r]/);
      let count = 0;
      for (const value of lines) {
        const measure = context.measureText(value);
        currentWidth += measure.width;
        widths.push(measure.width);
        if (count++ < lines.length - 1) {
          width_arr.push(currentWidth);
          currentWidth = 0;
        }
      }
    } else {
      for (const value of item.content) {
        if (value.type === "fill" || value.type === "space") {
          currentWidth += value.width * comment.size;
          widths.push(value.width * comment.size);
        } else {
          const measure = context.measureText(value.text);
          currentWidth += measure.width;
          widths.push(measure.width);
        }
      }
    }
    item.width = widths;
  }
  width_arr.push(currentWidth);
  const height =
    comment.size * config.lineHeight * comment.lineCount +
    config.commentYPaddingTop;
  return { width: Math.max(...width_arr, 0), height };
};
export { measure, parse };
