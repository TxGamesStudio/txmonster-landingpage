import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": {},
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: "esnext",
    commonjsOptions: { transformMixedEsModules: true, include: [] },
    minify: false,
  },
  optimizeDeps: { disabled: false },
});
