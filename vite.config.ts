import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      // TypeScript 파일 확장자 추가
      "/@/": path.resolve(__dirname, "src/"),
    },
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    minify: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "./src/main.tsx"), // entry 파일 경로 지정
      },
    },
  },
});
