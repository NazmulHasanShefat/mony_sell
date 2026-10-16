import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/auth": {
        target: "https://mony-sell-backend.vercel.app",
        changeOrigin: true,
      },
    },
  },
});
