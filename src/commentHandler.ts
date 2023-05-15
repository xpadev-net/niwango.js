import { getGlobalScope } from "@/utils/utils";
import { CommentMapper } from "@/commentMapper";
import { comments, currentTime, execute } from "@/context";

let handlers: { script: A_ANY; scopes: T_scope[]; time: number; duration?: number; type: "commentHandler" }[] = [];

const resetHandlers = () => {
  handlers = [];
};

const addHandler = (script: A_ANY, scopes: T_scope[], time: number, duration?: number) => {
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
    .filter((comment) => comment.vpos <= vpos && comment.vpos > currentTime)
    .map((comment) => ({
      time: comment.vpos,
      comment,
      type: "comment",
    })) as { time: number; comment: CommentMapper; type: "comment" }[];
};

export { resetHandlers, addHandler, triggerHandlers, getComments };
