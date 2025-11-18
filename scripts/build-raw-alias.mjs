import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcAssetsDir = resolve(__dirname, "../src/assets");
const distTailwindDir = resolve(__dirname, "../dist/tailwind");
const aliasFile = resolve(distTailwindDir, "not-idea-ui.css");

await rm(distTailwindDir, { recursive: true, force: true });
await mkdir(distTailwindDir, { recursive: true });
await cp(srcAssetsDir, distTailwindDir, { recursive: true });
await writeFile(aliasFile, '@import "./main.css";\n');
console.log(`Copied raw assets and created alias at ${aliasFile}`);
