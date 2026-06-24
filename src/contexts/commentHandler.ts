import type { A_ANY, T_scope } from "@xpadev-net/niwango-core";
import Core from "@xpadev-net/niwango-core";

import type { Comment } from "@/@types/comment";
import type { IHandler } from "@/@types/types";
import { comments, currentTime } from "@/context";
import { getGlobalScope } from "@/utils/utils";

let handlers: IHandler[] = [];

type HandlerErrorReporter = (error: unknown, comment: Comment) => void;

const resetHandlers = () => {
  handlers = [];
};

const isExpiredHandler = (handler: IHandler, time: number) =>
  handler.duration !== undefined && handler.time + handler.duration <= time;

const removeExpiredHandlers = (time: number) => {
  for (let i = handlers.length - 1; i >= 0; i--) {
    const handler = handlers[i];
    if (handler && isExpiredHandler(handler, time)) {
      handlers.splice(i, 1);
    }
  }
};

const addHandler = (
  script: A_ANY,
  scopes: T_scope[],
  trace: A_ANY[],
  time: number,
  duration?: number,
) => {
  removeExpiredHandlers(time);
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

const triggerHandlers = (
  comment: Comment,
  reportError?: HandlerErrorReporter,
) => {
  removeExpiredHandlers(comment._vpos);
  if (comment.message.startsWith("/")) return;
  for (const handler of handlers) {
    const globalScope = getGlobalScope(handler.scopes);
    if (!globalScope) continue;
    globalScope.chat = comment;
    try {
      Core.execute(handler.script, handler.scopes, [handler.script]);
    } catch (e) {
      console.error(e);
      reportError?.(e, comment);
    }
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
