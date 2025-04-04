import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  assetsInclude: ["**/*.png", "**/*.jpeg", "**/*.jpg", "**/*.svg"],
  plugins: [react(), tsconfigPaths()],
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173, 
    strictPort: true,
    proxy: {
      '/v1': {
        target: 'https://openapi.naver.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
