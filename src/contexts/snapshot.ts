import Core, { T_scope } from "@xpadev-net/niwango-core";
import { cloneDeep, cloneDeepWith, isArray, isObject, mapValues } from "lodash";

import { IHandler, IQueue, ISnapshot, T_environment } from "@/@types/types";
import { render } from "@/context";
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
  console.log("create snapshot", vpos);
  snapshots.push({
    vpos,
    queue: cloneDeepWith(queue, objectToSnapshot) as IQueue[],
    scripts: cloneDeep(scripts),
    handlers: cloneDeepWith(handlers, objectToSnapshot) as IHandler[],
    globalScope: cloneDeepWith(globalScope, objectToSnapshot) as T_scope,
    environmentScope: cloneDeepWith(
      environmentScope,
      objectToSnapshot
    ) as T_environment,
    drawObjects: drawObjects.map((object) => object.toJSON()),
  });
};

const hasToJSON = (object: unknown): object is { toJSON: () => unknown } =>
  typeof object === "object" &&
  !!object &&
  !!(object as { toJSON: () => unknown }).toJSON;
const visitedObjects = new Set();
const objectToSnapshot = (object: unknown): unknown => {
  if (hasToJSON(object)) {
    return object.toJSON();
  } else if (isArray(object)) {
    return object.map(
      (item) => cloneDeepWith(item, objectToSnapshot) as unknown
    );
  } else if (isObject(object)) {
    if (visitedObjects.has(object)) {
      return object; // Already visited, return as is to break recursion
    }
    visitedObjects.add(object);
    const clonedObj = mapValues(
      object,
      (item) => cloneDeepWith(item, objectToSnapshot) as unknown
    );
    visitedObjects.delete(object);
    return clonedObj;
  }
  return object;
};

const restoreSnapshot = (vpos: number) => {
  const snapshot = getLatestSnapshot(vpos);

  if (!snapshot) throw new Error("snapshot not found");
  snapshots = snapshots.filter((s) => s.vpos <= snapshot.vpos);
  resetObjects();
  for (const obj of snapshot.drawObjects) {
    resultHook(cloneDeep(obj));
  }
  setQueue(cloneDeep(snapshot.queue));
  setScripts(cloneDeep(snapshot.scripts));
  setHandlers(cloneDeep(snapshot.handlers));
  setGlobalScope(cloneDeep(snapshot.globalScope));
  setEnvironmentScope(cloneDeep(snapshot.environmentScope));
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
      const shape = drawObjects.find((obj) => obj.__id === input.options.__id);
      console.log("restore:", shape?.__id);
      return shape ?? new IrShape(render, input.options);
    } else if (typeGuard.IrTextLiteral(input)) {
      const text = drawObjects.find((obj) => obj.__id === input.options.__id);
      console.log("restore:", text?.__id);
      return text ?? new IrText(render, input.options);
    }
  }
  return input;
};

const initResultHook = () => {
  Core.appendResultHook(resultHook);
};

export { getLatestSnapshotVpos, initResultHook, restoreSnapshot, saveSnapshot };
