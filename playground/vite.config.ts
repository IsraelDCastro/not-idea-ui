import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";

const projectRoot = resolve(__dirname, "..");
const distCssDir = resolve(projectRoot, "dist/css");
const distTailwindDir = resolve(projectRoot, "dist/tailwind");
const distCssFile = resolve(distCssDir, "not-idea-ui.css");
const srcAssetsDir = resolve(projectRoot, "src/assets");
const srcMainCss = resolve(srcAssetsDir, "main.css");

const cssDirAlias = existsSync(distCssDir) ? distCssDir : srcAssetsDir;
const cssFileAlias = existsSync(distCssFile) ? distCssFile : srcMainCss;
const tailwindAlias = existsSync(distTailwindDir) ? distTailwindDir : srcAssetsDir;

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: "not-idea-ui/css/not-idea-ui.css", replacement: cssFileAlias },
      { find: "not-idea-ui/css", replacement: cssDirAlias },
      { find: "not-idea-ui/tailwind", replacement: tailwindAlias },
    ],
  },
  server: {
    port: 5173,
  },
});
