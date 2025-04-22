import { resolve } from "path";
import dts from "vite-plugin-dts";
import tailwindPostCSS from "@tailwindcss/postcss";
import path from "path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
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
        assetFileNames: (assetInfo) => {
          if (assetInfo.names[0].endsWith(".css")) {
            return "index.css"; // This renames the CSS file
          }
          return assetInfo.names[0] || "[name].[ext]";
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts({ rollupTypes: true })],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./lib/setupTests.ts"],
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "lib") },
  },
  css: {
    postcss: {
      plugins: [tailwindPostCSS],
    },
  },
});
