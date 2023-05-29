import type { A_ANY, T_scope } from "@/@types/ast";
import { CommentMapper } from "@/commentMapper";
import { comments, currentTime } from "@/context";
import { execute } from "@/core/coreContext";
import { getGlobalScope } from "@/utils/utils";

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

const triggerHandlers = (comment: CommentMapper) => {
  if (comment.message.startsWith("/")) return;
  for (const handler of handlers) {
    const globalScope = getGlobalScope(handler.scopes);
    if (!globalScope) continue;
    globalScope.chat = comment;
    execute(handler.script, handler.scopes);
  }
};

const getComments = (vpos: number) => {
  return comments
    .filter((comment) => comment._vpos <= vpos && comment._vpos > currentTime)
    .map((comment) => ({
      time: comment._vpos,
      comment,
      type: "comment",
    })) as { time: number; comment: CommentMapper; type: "comment" }[];
};

export { addHandler, getComments, resetHandlers, triggerHandlers };
