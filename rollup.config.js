import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from "@rollup/plugin-node-resolve";
import json from '@rollup/plugin-json';
import pkg from "./package.json" assert {type: 'json'};
import * as path from "path";
import {fileURLToPath} from "url";
const banner = `/*!
  niwango.js v${pkg.version}
  (c) 2023 xpadev-net https://xpadev.net
  Released under the ${pkg.license} License.
*/`;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    input: 'src/main.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'umd',
        name: 'Niwango',
        banner
    },
    plugins: [
        json(),
        typescript(),
        commonjs(),
        babel({
            babelHelpers: "bundled",
            configFile: path.resolve(__dirname, ".babelrc.js"),
        }),
        nodeResolve(),
    ]
}