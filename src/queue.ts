let queue: { script: A_ANY; time: number }[] = [];
let currentTime: number = 0;
const resetQueue = () => {
  queue = [];
};
const setCurrentTime = (time: number) => {
  currentTime = time;
};
const addQueue = (script: A_ANY, offset: number) => {
  queue.push({ script, time: currentTime + offset });
};
const getQueue = (time: number) => {
  const result = [],
    newQueue = [];
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
