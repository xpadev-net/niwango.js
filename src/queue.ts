import { A_ANY, T_scope } from "@xpadev-net/niwango-core";

import { currentTime } from "@/context";

let queue: { script: A_ANY; time: number; scopes: T_scope[]; type: "queue" }[] =
  [];

/**
 * キューの初期化
 */
const resetQueue = () => {
  queue = [];
};

/**
 * キューに追加する
 * @param script
 * @param offset
 * @param scopes
 */
const addQueue = (script: A_ANY, offset: number, scopes: T_scope[]) => {
  queue.push({
    script,
    time: currentTime + offset * 100,
    scopes,
    type: "queue",
  });
};

/**
 * キューを取得する
 * @param time
 */
const getQueue = (time: number) => {
  const result = [];
  const newQueue = [];
  for (const item of queue) {
    if (item.time <= time) {
      result.push(item);
    } else {
      newQueue.push(item);
    }
  }
  queue = newQueue;
  return result;
};
export { addQueue, getQueue, queue, resetQueue };
