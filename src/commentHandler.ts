import Core from "@xpadev-net/niwango-core";

import type { A_ANY, T_scope } from "@/@types/ast";
import { comments, currentTime } from "@/context";
import { getGlobalScope } from "@/utils/utils";
import { Comment } from "@/@types/comment";

let handlers: {
  script: A_ANY;
  scopes: T_scope[];
  time: number;
  duration?: number;
  type: "commentHandler";
}[] = [];

const resetHandlers = () => {
  handlers = [];
};

const addHandler = (
  script: A_ANY,
  scopes: T_scope[],
  time: number,
  duration?: number
) => {
  console.log(script, scopes, time, duration);
  handlers.push({
    script,
    scopes,
    time,
    duration,
    type: "commentHandler",
  });
};

const triggerHandlers = (comment: Comment) => {
  if (comment.message.startsWith("/")) return;
  for (const handler of handlers) {
    const globalScope = getGlobalScope(handler.scopes);
    if (!globalScope) continue;
    globalScope.chat = comment;
    Core.execute(handler.script, handler.scopes);
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

export { addHandler, getComments, resetHandlers, triggerHandlers };
