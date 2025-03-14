import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
// import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
// import AutoImport from 'astro-auto-import';
import astroExpressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.nadav-daniel.com', // Set the correct blog site domain
  base: '/blog/',  // Ensures all paths start with /blog/
  outDir: '../out/blog/', // Ensure Astro outputs to the correct folder
  output: 'static', // Generate static site
  integrations: [
    //FIXME: AutoImport to avoid imports on content files
    // AutoImport({
    //   imports: ['./src/components/BlockCode.astro', './src/components/BlockBold.astro']
    // }),
    // sitemap(),

    astroExpressiveCode({
      // You can set configuration options here
      themes: ['dracula', 'aurora-x'],
      styleOverrides: {
        // You can also override styles
        borderRadius: '0.5rem',
        frames: {
          shadowColor: '#124',
        },
      },
    }),
    mdx(), react()],
  assetsInclude: ['**/*.woff2', '**/*.woff', '**/*.ttf'],
  build: {
    // assets: '/blog/',  // Ensures assets like images and scripts are resolved correctly
  },

  vite: {
    server: {
      proxy: {
        '/blog/': {
          target: 'http://localhost:4322',  // Ensure correct dev proxy
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/blog/, ''),
        },
      },
    },
  },
})