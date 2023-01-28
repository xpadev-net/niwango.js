import { Scripts } from "@/@types/types";

let scripts: Scripts = [];
const addScript = (script: A_ANY, time: number) => {
  scripts.push({ type: "script", script, time });
};
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
export { scripts, addScript, getScripts };
