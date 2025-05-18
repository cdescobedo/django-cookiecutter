import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    base: "/static/",
    plugins: [tailwindcss()],
    build: {
        manifest: "manifest.json",
        outDir: resolve("./assets"),
        assetsDir: "django-assets",
        rollupOptions: {
            vendor: resolve("./static/js/vendor.js"),
        },
    },
    resolve: {
        alias: {
            "@": resolve("./static"),
        },
    },
});
