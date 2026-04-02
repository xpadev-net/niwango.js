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
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'Niwango',
    banner,
  },
  resolve: {
    alias: {
      '@': './src',
    },
  },
});
