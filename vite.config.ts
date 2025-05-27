import path from "path";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";
import preserveDirectives from "rollup-preserve-directives";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./lib/index.ts"),
      name: "@barrelrolla/react-components-library",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts({ rollupTypes: true }), preserveDirectives()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./lib/setupTests.ts"],
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "lib") },
  },
});
