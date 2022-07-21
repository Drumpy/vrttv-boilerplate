/** @type {import('vite').UserConfig} */

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import postcss from './postcss.config.js'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss
  }
})
