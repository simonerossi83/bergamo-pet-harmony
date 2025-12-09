import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import componentTagger from "vite-plugin-react-component-name";

export default defineConfig(({ mode }) => ({
  base: '/bergamo-pet-harmony/',  // <-- aggiungi SOLO QUESTA
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
