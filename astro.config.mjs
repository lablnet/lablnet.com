import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import vue from "@astrojs/vue";
import AstroPWA from '@vite-pwa/astro'
import manifest from "./public/favicons/site.webmanifest"

export default defineConfig({
  integrations: [
    preact(),
    vue(),

    AstroPWA({
      mode: 'development',
      base: '/',
      scope: '/',
      manifest,
      workbox: {
        navigateFallback: '/',
        globPatterns: ['**/*.{css,js,html,svg,png,ico}'],
      },
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^\//],
      },
      experimental: {
        directoryAndTrailingSlashHandler: true,
      }
    }),
  ],

  vite: {
		plugins: [
		]
	}
});
