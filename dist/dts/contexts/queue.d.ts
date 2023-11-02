import { A_ANY, T_scope } from "@xpadev-net/niwango-core";
import { IQueue } from "./../@types/types";
declare let queue: IQueue[];
declare const resetQueue: () => void;
declare const addQueue: (script: A_ANY, offset: number, scopes: T_scope[], trace: A_ANY[]) => void;
declare const getQueue: (time: number) => IQueue[];
declare const setQueue: (newQueue: IQueue[]) => void;
export { addQueue, getQueue, queue, resetQueue, setQueue };
