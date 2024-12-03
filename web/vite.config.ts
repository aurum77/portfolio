import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import compression from "vite-plugin-compression2";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [compression(), TanStackRouterVite(), react()],
});
