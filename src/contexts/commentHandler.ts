import type { A_ANY, T_scope } from "@xpadev-net/niwango-core";
import Core from "@xpadev-net/niwango-core";

import { Comment } from "@/@types/comment";
import { IHandler } from "@/@types/types";
import { comments, currentTime } from "@/context";
import { getGlobalScope } from "@/utils/utils";

let handlers: IHandler[] = [];

const resetHandlers = () => {
  handlers = [];
};

const addHandler = (
  script: A_ANY,
  scopes: T_scope[],
  trace: A_ANY[],
  time: number,
  duration?: number,
) => {
  handlers.push({
    script,
    scopes,
    time,
    duration,
    type: "commentHandler",
    trace,
  });
};

const setHandlers = (newHandlers: IHandler[]) => {
  handlers = newHandlers;
};

const triggerHandlers = (comment: Comment) => {
  if (comment.message.startsWith("/")) return;
  for (const handler of handlers) {
    const globalScope = getGlobalScope(handler.scopes);
    if (!globalScope) continue;
    globalScope.chat = comment;
    Core.execute(handler.script, handler.scopes, [handler.script]);
  }
};

const getComments = (vpos: number) => {
  return comments
    .filter((comment) => comment._vpos <= vpos && comment._vpos > currentTime)
    .map((comment) => ({
      time: comment._vpos,
      comment,
      type: "comment",
    })) as { time: number; comment: Comment; type: "comment" }[];
};

export {
  addHandler,
  getComments,
  handlers,
  resetHandlers,
  setHandlers,
  triggerHandlers,
};
