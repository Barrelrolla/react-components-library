import path from "path";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";
import preserveDirectives from "rollup-preserve-directives";
import react from "@vitejs/plugin-react";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "./lib/index.ts"),
        plugin: resolve(__dirname, "./lib/plugin/index.ts"),
      },
      formats: ["es", "cjs"],
      name: "@barrelrolla/react-components-library",
      fileName: (format, entryName) =>
        `${entryName}.${format === "es" ? "js" : "cjs"}`,
    },
    rollupOptions: {
      external: [/^react($|\/)/, /^react-dom($|\/)/, /^tailwindcss($|\/)/],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(),
    dts({ rollupTypes: true }),
    preserveDirectives(),
    storybookTest({
      configDir: path.join(__dirname, ".storybook"),
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./lib/setupTests.ts"],
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "lib") },
  },
});
