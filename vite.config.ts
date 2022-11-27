/// <reference types="vitest" />
import { defineConfig } from "vite";

// Plugins
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import vue from "@vitejs/plugin-vue";
import nightwatchPlugin from "vite-plugin-nightwatch";

// Utilities
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: "src/styles/quasar-variables.scss",
    }),
    nightwatchPlugin(),
  ],

  define: { "process.env": {} },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    coverage: {
      provider: "c8",
      all: true,
    },
    setupFiles: ["./tests/__mocks__/store.ts"],
    outputFile: "./reports/test/results.json",
    globals: true,
  },
  server: {
    port: 3000,
  },
});
