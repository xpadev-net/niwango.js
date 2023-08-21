import Core from "@xpadev-net/niwango-core";

import { ISnapshot } from "@/@types/types";
import { handlers, setHandlers } from "@/contexts/commentHandler";
import { drawObjects, resetObjects } from "@/contexts/objectManager";
import { queue, setQueue } from "@/contexts/queue";
import {
  environmentScope,
  globalScope,
  setEnvironmentScope,
  setGlobalScope,
} from "@/contexts/scope";
import { scripts, setScripts } from "@/contexts/scripts";
import { config } from "@/definition/config";
import { IrShape } from "@/objects/shape";
import { IrText } from "@/objects/text";
import typeGuard from "@/typeGuard";

let snapshots: ISnapshot[] = [];

const saveSnapshot = (vpos: number) => {
  console.log("save snapshot", vpos);
  snapshots.push({
    vpos,
    queue: structuredClone(queue),
    scripts: structuredClone(scripts),
    handlers: structuredClone(handlers),
    globalScope: structuredClone(globalScope),
    environmentScope: structuredClone(environmentScope),
    drawObjects: structuredClone(drawObjects),
  });
};

const restoreSnapshot = (vpos: number) => {
  console.log("restore snapshot", vpos);
  const snapshot = getLatestSnapshot(vpos);

  if (!snapshot) throw new Error("snapshot not found");
  snapshots = snapshots.filter((s) => s.vpos <= snapshot.vpos);
  resetObjects();
  for (const obj of structuredClone(snapshot.drawObjects)) {
    console.log(obj);
    resultHook(obj);
  }
  setQueue(structuredClone(snapshot.queue));
  setScripts(structuredClone(snapshot.scripts));
  setHandlers(structuredClone(snapshot.handlers));
  setGlobalScope(structuredClone(snapshot.globalScope));
  setEnvironmentScope(structuredClone(snapshot.environmentScope));
  return snapshot.vpos;
};

const getLatestSnapshot = (vpos: number) => {
  let maxVpos = -1;
  let lastSnapshot: ISnapshot | undefined;
  for (const snapshot of snapshots) {
    if (snapshot.vpos <= vpos && maxVpos < snapshot.vpos) {
      maxVpos = snapshot.vpos;
      lastSnapshot = snapshot;
    }
  }
  return lastSnapshot;
};

const getLatestSnapshotVpos = (vpos: number) => {
  const snapshot = getLatestSnapshot(vpos);
  if (!snapshot) return config.snapshotIntervalVpos * -1;
  return snapshot.vpos;
};

const resultHook = (input: unknown) => {
  if (typeof input === "object") {
    if (typeGuard.IrShapeLiteral(input)) {
      console.log("restore shape", input.options.__id);
      const shape = drawObjects.find((obj) => obj.__id === input.options.__id);
      return shape ?? new IrShape(input.options);
    } else if (typeGuard.IrTextLiteral(input)) {
      console.log("restore text", input.options.__id);
      const text = drawObjects.find((obj) => obj.__id === input.options.__id);
      return text ?? new IrText(input.options);
    }
  }
  return input;
};

const resetSnapshot = () => {
  snapshots = [];
};

const initResultHook = () => {
  Core.appendResultHook(resultHook);
};

export {
  getLatestSnapshotVpos,
  initResultHook,
  resetSnapshot,
  restoreSnapshot,
  saveSnapshot,
};
