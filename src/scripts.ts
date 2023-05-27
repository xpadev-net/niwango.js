import { Scripts } from "@/@types/types";
import { A_ANY } from "@/@types/ast";

let scripts: Scripts = [];

/**
 * スクリプトを追加する
 * @param script
 * @param time
 */
const addScript = (script: A_ANY, time: number) => {
  scripts.push({ type: "script", script, time });
};

/**
 * スクリプトを取得する
 * @param time
 */
const getScripts = (time: number) => {
  const result = [];
  const newScripts = [];
  for (const item of scripts) {
    if (item.time <= time) {
      result.push(item);
    } else {
      newScripts.push(item);
    }
  }
  scripts = newScripts;
  return result;
};

const resetScripts = () => {
  scripts = [];
};

export { scripts, addScript, getScripts, resetScripts };
