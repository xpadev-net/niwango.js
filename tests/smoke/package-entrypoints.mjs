import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const workspace = mkdtempSync(join(tmpdir(), "niwango-package-smoke-"));
const packDirectory = join(workspace, "pack");
const consumerDirectory = join(workspace, "consumer");

process.on("exit", () => {
  rmSync(workspace, { recursive: true, force: true });
});

const run = (command, args, options = {}) => {
  execFileSync(command, args, {
    cwd: repoRoot,
    stdio: "inherit",
    ...options,
  });
};

mkdirSync(packDirectory, { recursive: true });
mkdirSync(consumerDirectory, { recursive: true });

const packOutput = execFileSync(
  "npm",
  ["pack", "--json", "--ignore-scripts", "--pack-destination", packDirectory],
  {
    cwd: repoRoot,
    encoding: "utf8",
  },
).trim();
const packJsonMatch = /(?:^|\n)(\[\s*\{)/.exec(packOutput);
if (!packJsonMatch) {
  throw new Error(`npm pack did not return JSON output:\n${packOutput}`);
}
const packJsonStart = packJsonMatch.index + packJsonMatch[0].indexOf("[");
const [{ filename: tarballFilename }] = JSON.parse(
  packOutput.slice(packJsonStart),
);
const tarball = join(packDirectory, tarballFilename);

writeFileSync(
  join(consumerDirectory, "package.json"),
  JSON.stringify({ private: true, type: "module" }, null, 2),
);

run(
  "npm",
  [
    "install",
    "--ignore-scripts",
    "--no-audit",
    "--no-fund",
    "--package-lock=false",
    tarball,
  ],
  { cwd: consumerDirectory },
);

writeFileSync(
  join(consumerDirectory, "esm.mjs"),
  [
    'import Niwango from "@xpadev-net/niwango";',
    'if (typeof Niwango !== "function") {',
    '  throw new Error("ESM import did not resolve the Niwango constructor");',
    "}",
    "if (Niwango.default !== Niwango) {",
    '  throw new Error("ESM import lost the constructor default alias");',
    "}",
  ].join("\n"),
);

writeFileSync(
  join(consumerDirectory, "cjs.cjs"),
  [
    'const Niwango = require("@xpadev-net/niwango");',
    'if (typeof Niwango !== "function") {',
    '  throw new Error("CJS require did not resolve the Niwango constructor");',
    "}",
    "if (Niwango.default !== Niwango) {",
    '  throw new Error("CJS require lost the constructor default alias");',
    "}",
  ].join("\n"),
);

writeFileSync(
  join(consumerDirectory, "types.ts"),
  [
    'import Niwango from "@xpadev-net/niwango";',
    "",
    "const Ctor: typeof Niwango = Niwango;",
    'const element = document.createElement("div");',
    "const player = new Ctor(element, []);",
    "const didDraw: boolean = player.draw(0);",
    "void didDraw;",
  ].join("\n"),
);

writeFileSync(
  join(consumerDirectory, "tsconfig.json"),
  JSON.stringify(
    {
      compilerOptions: {
        strict: true,
        target: "ES2022",
        module: "NodeNext",
        moduleResolution: "NodeNext",
        lib: ["ES2022", "DOM"],
        noEmit: true,
      },
      include: ["types.ts"],
    },
    null,
    2,
  ),
);

run("node", ["esm.mjs"], { cwd: consumerDirectory });
run("node", ["cjs.cjs"], { cwd: consumerDirectory });

const tscCommand = process.platform === "win32" ? "tsc.cmd" : "tsc";
run(
  join(repoRoot, "node_modules", ".bin", tscCommand),
  ["--project", "tsconfig.json"],
  { cwd: consumerDirectory },
);
