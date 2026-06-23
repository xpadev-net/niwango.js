import { defineConfig } from 'rolldown';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const banner = `/*!
  niwango.js v${pkg.version}
  (c) 2023 xpadev-net https://xpadev.net
  Released under the ${pkg.license} License.

  build at: ${(new Date()).getTime()}
*/`;

export default defineConfig({
  input: 'src/main.ts',
  output: [
    {
      file: 'dist/index.mjs',
      format: 'es',
      banner,
    },
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      exports: 'default',
      banner,
    },
    {
      file: 'dist/browser/niwango.js',
      format: 'umd',
      name: 'Niwango',
      exports: 'default',
      banner,
    },
  ],
  resolve: {
    alias: {
      '@': './src',
    },
  },
});
