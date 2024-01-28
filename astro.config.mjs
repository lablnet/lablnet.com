import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import vue from "@astrojs/vue";

export default defineConfig({
  integrations: [
    preact(),
    vue(),

  ],
196});
