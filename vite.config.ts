import { defineConfig } from "vite";
import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";

const rootDir = resolve(__dirname);

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: "dist",
    emptyOutDir: false,
    rollupOptions: {
      input: {
        style: resolve(rootDir, "src/assets/main.css")
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "css/not-idea-ui.css";
          }
          return "assets/[name][extname]";
        },
        entryFileNames: () => "noop.js"
      }
    }
  }
});
