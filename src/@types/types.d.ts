import type { A_ANY } from "@/@types/ast";

export type Scripts = {
  type: "script";
  script: A_ANY;
  time: number;
}[];
