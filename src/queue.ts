let queue: { script: A_ANY; time: number; scopes: T_scope[]; type: "queue" }[] = [];
let currentTime: number = 0;

/**
 * キューの初期化
 */
const resetQueue = () => {
  queue = [];
};

/**
 * 現在時刻の更新
 * @param time
 */
const setCurrentTime = (time: number) => {
  currentTime = time;
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
export { queue, resetQueue, setCurrentTime, getQueue, addQueue };
