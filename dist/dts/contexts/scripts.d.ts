import { A_ANY } from "@xpadev-net/niwango-core";
import { Script } from "./../@types/types";
declare let scripts: Script[];
declare const addScript: (script: A_ANY, time: number) => void;
declare const getScripts: (time: number) => Script[];
declare const resetScripts: () => void;
declare const setScripts: (newScripts: Script[]) => void;
export { addScript, getScripts, resetScripts, scripts, setScripts };
