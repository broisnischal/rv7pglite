import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  optimizeDeps: {
    exclude: ["@electric-sql/pglite"], // Exclude `@electric-sql/pglite` from pre-bundling
  },
  build: {
    target: "es2022", // Ensure WebAssembly support
    assetsInlineLimit: 0,
  },
  server: {

    // Allow serving WASM files from the specified directory

  },
  plugins: [reactRouter(), tsconfigPaths()],
});
