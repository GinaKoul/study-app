import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), imagetools()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.js",
  },
  assetsInclude: ["**/*.jpg", "**/*.png", "**/*.webp", "**/*.jpeg"],
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  define: {
    "process.env.NODE_ENV": '"development"', // optional, helps React in older setups
  },
});
