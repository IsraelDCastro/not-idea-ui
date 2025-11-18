import { mkdir, readFile, writeFile, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { transform } from "lightningcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distCssDir = resolve(__dirname, "../dist/css");
const inputFile = resolve(distCssDir, "not-idea-ui.css");
const outputFile = resolve(distCssDir, "not-idea-ui.min.css");
const noopBundle = resolve(__dirname, "../dist/noop.js");

const css = await readFile(inputFile);

const { code } = transform({
  filename: inputFile,
  code: css,
  minify: true,
  sourceMap: false
});

await mkdir(distCssDir, { recursive: true });
await writeFile(outputFile, code);

await rm(noopBundle, { force: true }).catch(() => undefined);

console.log(`Minified CSS written to ${outputFile}`);
