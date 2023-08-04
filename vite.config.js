import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      VitePWA({
        registerType: 'autoUpdate',
        strategies: 'generateSW',
        devOptions: {
          enabled: true
        },
          // add this to cache all the imports
          workbox: {
              globPatterns: ["**/*"],
          },
          // add this to cache all the
          // static assets in the public folder
          includeAssets: [
              "**/*",
          ],
          manifest: {
            "theme_color": "#efef6a",
            "background_color": "#efef6a",
            "display": "fullscreen",
            "name": "Sunny Clock",
            "description": "Sunny Clock",
            "short_name": "Sunny Clock",
            "icons": [
                {
                    "src": "/icon-192x192.png",
                    "sizes": "192x192",
                    "type": "image/png"
                },
                {
                    "src": "/icon-256x256.png",
                    "sizes": "256x256",
                    "type": "image/png"
                },
                {
                    "src": "/icon-384x384.png",
                    "sizes": "384x384",
                    "type": "image/png"
                },
                {
                    "src": "/icon-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png"
                }
            ]
        }
      })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
