declare const saveSnapshot: (vpos: number) => void;
declare const restoreSnapshot: (vpos: number) => number;
declare const getLatestSnapshotVpos: (vpos: number) => number;
declare const resetSnapshot: () => void;
declare const initResultHook: () => void;
export { getLatestSnapshotVpos, initResultHook, resetSnapshot, restoreSnapshot, saveSnapshot, };
