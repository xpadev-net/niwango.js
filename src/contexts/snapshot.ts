import Core from "@xpadev-net/niwango-core";

import type { ISnapshot } from "@/@types/types";
import { currentTime, setCurrentTime } from "@/context";
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
  snapshots.push({
    vpos,
    currentTime,
    queue: structuredClone(queue),
    scripts: structuredClone(scripts),
    handlers: structuredClone(handlers),
    globalScope: structuredClone(globalScope),
    environmentScope: structuredClone(environmentScope),
    drawObjects: structuredClone(drawObjects),
  });
};

const restoreSnapshot = (vpos: number) => {
  const snapshot = getLatestSnapshot(vpos);

  if (!snapshot) throw new Error("snapshot not found");
  snapshots = snapshots.filter((s) => s.vpos <= snapshot.vpos);
  resetObjects();
  for (const obj of structuredClone(snapshot.drawObjects)) {
    restoreObjectLiteral(obj, true);
  }
  setQueue(structuredClone(snapshot.queue));
  setScripts(structuredClone(snapshot.scripts));
  setHandlers(structuredClone(snapshot.handlers));
  setGlobalScope(structuredClone(snapshot.globalScope));
  setEnvironmentScope(structuredClone(snapshot.environmentScope));
  setCurrentTime(snapshot.currentTime);
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
  return restoreObjectLiteral(input);
};

const restoreObjectLiteral = (input: unknown, restoreState = false) => {
  if (typeof input === "object") {
    if (typeGuard.IrShapeLiteral(input)) {
      const shape = drawObjects.find((obj) => obj.__id === input.options.__id);
      const restoredShape = shape ?? new IrShape(input.options);
      if (restoreState) {
        restoredShape.__restoreSnapshotState(input);
      }
      return restoredShape;
    } else if (typeGuard.IrTextLiteral(input)) {
      const text = drawObjects.find((obj) => obj.__id === input.options.__id);
      const restoredText = text ?? new IrText(input.options);
      if (restoreState) {
        restoredText.__restoreSnapshotState(input);
      }
      return restoredText;
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
  resultHook,
  saveSnapshot,
};
