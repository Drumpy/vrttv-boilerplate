/** @type {import('vite').UserConfig} */

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import viteImagemin from 'vite-plugin-imagemin'

import config from './config.js'
import postcss from './postcss.config.js'

const { imagemin } = config

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin(imagemin),
    createHtmlPlugin({
      minify: true,
      // /**
      //  * After writing entry here, you will not need to add script tags in `index.html`, the original tags need to be deleted
      //  * @default src/main.ts
      //  */
      entry: 'src/main.tsx'
    })
  ],
  css: {
    postcss
  }
})
