import { defineConfig } from 'rolldown';
import { dts } from 'rolldown-plugin-dts';

export default defineConfig({
  input: './dist/dts/main.d.ts',
  plugins: [dts()],
  output: {
    file: 'dist/index.d.ts',
    format: 'es',
  },
});
