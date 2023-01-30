import { commentContentIndex, commentContentItem, commentFlashFont } from "@/@types/IrText";
import { config } from "@/definition/config";
import { charItem, measureTextInput, parsedComment } from "@/@types/flashText";
import { parseFont } from "@/utils/utils";

const parse = (string: string, compat = false): parsedComment => {
  console.log(compat);
  const content: commentContentItem[] = [];
  const parts = (string.match(/[\n\r]|[^\n\r]+/g) || []).map((val) =>
    Array.from(val.match(/[ -~｡-ﾟ]+|[^ -~｡-ﾟ]+/g) || []),
  );
  const regex = {
    simsunStrong: new RegExp(config.flashChar.simsunStrong),
    simsunWeak: new RegExp(config.flashChar.simsunWeak),
    gulim: new RegExp(config.flashChar.gulim),
    gothic: new RegExp(config.flashChar.gothic),
  };
  const getFontName = (font: string) =>
    font.match(/^simsun/) ? "simsun" : font === "gothic" ? "defont" : (font as commentFlashFont);
  for (const line of parts) {
    const lineContent: commentContentItem[] = [];
    for (const part of line) {
      if (part.match(/[ -~｡-ﾟ]+/g) !== null) {
        if (compat) {
          const result: charItem[] = [];
          let buffer = "";
          let lastItem: charItem | undefined;
          let lastChar = "";
          for (const char of part) {
            if (char === "a" && lastChar === "a") {
              if (buffer) {
                lastItem = { type: "text", text: buffer };
                result.push(lastItem);
                buffer = "";
              }
              lastChar = "";
              if (lastItem?.type === "fill" && lastItem.char === "a") {
                lastItem.width += 2;
                continue;
              }
              lastItem = { type: "fill", char: "a", width: 2 };
              result.push(lastItem);
              continue;
            }
            if (char === " ") {
              if (buffer) {
                lastItem = { type: "text", text: buffer };
                result.push(lastItem);
                buffer = "";
              }
              if (lastItem?.type === "space" && lastItem.char === " ") {
                lastItem.width += 1;
                continue;
              }
              lastItem = { type: "space", char: " ", width: 1 };
              result.push(lastItem);
              continue;
            }
            buffer += lastChar;
            lastChar = char;
          }
          if (buffer || lastChar) {
            result.push({ type: "text", text: buffer + lastChar });
          }
          lineContent.push({ type: "compat", content: result });
          continue;
        }
        lineContent.push({
          type: "normal",
          content: part,
        });
        continue;
      }
      const index: commentContentIndex[] = [];
      let match;
      if ((match = regex.simsunStrong.exec(part)) !== null) {
        index.push({ font: "simsunStrong", index: match.index });
      }
      if ((match = regex.simsunWeak.exec(part)) !== null) {
        index.push({ font: "simsunWeak", index: match.index });
      }
      if ((match = regex.gulim.exec(part)) !== null) {
        index.push({ font: "gulim", index: match.index });
      }
      if ((match = regex.gothic.exec(part)) !== null) {
        index.push({ font: "gothic", index: match.index });
      }
      if (index.length === 0) {
        lineContent.push({ type: "normal", content: part });
      } else if (index.length === 1 && index[0]) {
        lineContent.push({ type: "normal", content: part, font: getFontName(index[0].font) });
      } else {
        index.sort((a, b) => {
          if (a.index > b.index) {
            return 1;
          } else if (a.index < b.index) {
            return -1;
          } else {
            return 0;
          }
        });
        if (config.flashMode === "xp") {
          let offset = 0;
          for (let i = 1; i < index.length; i++) {
            const currentVal = index[i];
            const lastVal = index[i - 1];
            if (currentVal === undefined || lastVal === undefined) {
              continue;
            }
            lineContent.push({
              type: "normal",
              content: part.slice(offset, currentVal.index),
              font: getFontName(lastVal.font),
            });
            offset = currentVal.index;
          }
          const val = index[index.length - 1];
          if (val) {
            lineContent.push({ type: "normal", content: part.slice(offset), font: getFontName(val.font) });
          }
        } else {
          const firstVal = index[0];
          const secondVal = index[1];
          if (!(firstVal && secondVal)) {
            lineContent.push({ type: "normal", content: part });
            continue;
          }
          if (firstVal.font !== "gothic") {
            lineContent.push({ type: "normal", content: part, font: getFontName(firstVal.font) });
          } else {
            lineContent.push({
              type: "normal",
              content: part.slice(0, secondVal.index),
              font: getFontName(firstVal.font),
            });
            lineContent.push({
              type: "normal",
              content: part.slice(secondVal.index),
              font: getFontName(secondVal.font),
            });
          }
        }
      }
    }
    const firstContent = lineContent[0];
    if (firstContent?.font) {
      content.push(
        ...lineContent.map((val) => {
          if (!val.font) {
            val.font = firstContent.font;
          }
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
    (string.match(new RegExp(config.flashScriptChar.super, "g"))?.length || 0) * -1 * config.scriptCharOffset +
    (string.match(new RegExp(config.flashScriptChar.sub, "g"))?.length || 0) * config.scriptCharOffset;
  return { content, font, lineCount, lineOffset };
};

const measure = (context: CanvasRenderingContext2D, comment: measureTextInput) => {
  const width_arr = [];
  const spacedWidth_arr = [];
  let currentWidth = 0;
  let spacedWidth = 0;
  for (let i = 0; i < comment.content.length; i++) {
    const item = comment.content[i];
    if (item === undefined) {
      continue;
    }
    if (item.type === "normal") {
      const lines = item.content.split(/[\n\r]/);
      const widths = [];

      context.font = parseFont(item.font || comment.font, comment.size);
      for (let i = 0; i < lines.length; i++) {
        const value = lines[i];
        if (value === undefined) {
          continue;
        }
        const measure = context.measureText(value);
        currentWidth += measure.width;
        spacedWidth += measure.width + Math.max(value.length - 1, 0) * config.letterSpacing;
        widths.push(measure.width);
        if (i < lines.length - 1) {
          width_arr.push(currentWidth);
          spacedWidth_arr.push(spacedWidth);
          spacedWidth = 0;
          currentWidth = 0;
        }
      }
      width_arr.push(currentWidth);
      spacedWidth_arr.push(spacedWidth);
      item.width = widths;
    } else {
      context.font = parseFont(item.font || comment.font, comment.size);
      const widths = [];
      for (let i = 0; i < item.content.length; i++) {
        const value = item.content[i];
        if (value === undefined) {
          continue;
        }
        if (value.type === "fill" || value.type === "space") {
          currentWidth += value.width * comment.size;
          spacedWidth += value.width * comment.size;
          widths.push(value.width * comment.size);
        } else {
          const measure = context.measureText(value.text);
          currentWidth += measure.width;
          spacedWidth += measure.width + Math.max(value.text.length - 1, 0) * config.letterSpacing;
          widths.push(measure.width);
        }
        if (i < item.content.length - 1) {
          width_arr.push(currentWidth);
          spacedWidth_arr.push(spacedWidth);
          spacedWidth = 0;
          currentWidth = 0;
        }
      }
      width_arr.push(currentWidth);
      spacedWidth_arr.push(spacedWidth);
      item.width = widths;
    }
  }
  const leadLine = (function () {
    let max = 0;
    let index = -1;
    for (let i = 0, l = spacedWidth_arr.length; i < l; i++) {
      const val = spacedWidth_arr[i];
      if (val && max < val) {
        max = val;
        index = i;
      }
    }
    return { max, index };
  })();
  const scaleX = leadLine.max / (width_arr[leadLine.index] || 1);
  const height = comment.size * 1.22 * comment.lineCount + config.commentYPaddingTop;
  return { width: Math.max(...width_arr, 0), scaleX, height };
};
export { parse, measure };
