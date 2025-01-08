import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8090",
        changeOrigin: true,
      },
      "/images": {
        target: "http://127.0.0.1:8090",
        changeOrigin: true,
      },
    },
  },
  envPrefix: "ENV",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [TanStackRouterVite(), react()],
});
