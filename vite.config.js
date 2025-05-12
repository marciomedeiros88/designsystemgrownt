import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true, // 👈 deixa o SVG escalável como ícone
      },
      exportAsDefault: true, // 👈 isso faz você importar sem precisar usar ?react
    }),
  ],
  server: {
    allowedHosts: true,
  },
});
