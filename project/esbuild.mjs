import esbuild from 'esbuild';
import fs from 'fs';

fs.rmSync('./dist', {recursive: true})

esbuild.build({
  entryPoints: ['src/main.tsx'],
  bundle: true,
  minify: true,
  outfile: 'dist/index.js',
  logLevel: 'info',
  loader: {
    ".woff": "file",
    ".woff2": "file",
  },
}).then(() => {
  fs.copyFileSync('./build-template/index.html', 'dist/index.html')
})