import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.nadav-daniel.com', // Set the correct blog site domain
  // base: '/blog/',  // Ensures all paths start with /blog/
  outDir: '../out/blog/', // Ensure Astro outputs to the correct folder
  output: 'static', // Generate static site
  integrations: [mdx(), sitemap()],
  assetsInclude: ['**/*.woff2', '**/*.woff', '**/*.ttf'],
  build: {
    // assets: '/blog/',  // Ensures assets like images and scripts are resolved correctly
  },

  // vite: {
  //   server: {
  //     proxy: {
  //       '/blog/': {
  //         target: 'http://localhost:4322',  // Ensure correct dev proxy
  //         changeOrigin: true,
  //         rewrite: (path) => path.replace(/^\/blog/, ''),
  //       },
  //     },
  //   },
  // },
})
