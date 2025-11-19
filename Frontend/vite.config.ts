import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  publicDir: path.resolve(__dirname, "client/public"),

  server: {
  host: "127.0.0.1", // force IPv4 localhost
  port: 5175,        // any free port
  strictPort: true   // fail if port is blocked
},
});
