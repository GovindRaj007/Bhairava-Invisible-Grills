import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  appType: 'spa',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    middlewareMode: false,
    // Ensure all non-existent routes fall back to index.html
    historyApiFallback: true,
  },
});
