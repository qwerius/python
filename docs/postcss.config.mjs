import { postcssIsolateStyles } from 'vitepress'
import { defineConfig } from 'vitepress'

export default defineConfig({
  plugins: {
    "@tailwindcss/postcss": {},
  }
})