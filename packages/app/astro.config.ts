import netlify from '@astrojs/netlify/functions'
import vue3 from '@astrojs/vue'
import { defineConfig } from 'astro/config'
import {
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetDaisy } from 'unocss-preset-daisy'
import UnoCSS from 'unocss/astro'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default /** @type {import('astro').AstroUserConfig} */ defineConfig({
  // 你的配置项都在这里
  // https://docs.astro.build/zh-cn/reference/configuration-reference/
  compressHTML: false,
  integrations: [
    vue3({
      appEntrypoint: '/src/pages/_app',
    }),
    UnoCSS({
      // injectReset: true,
      // injectReset: false,
      injectReset: '@unocss/reset/tailwind-compat.css',
      // injectEntry: true,
      injectExtra: [
        ...[
          '@unocss/reset/normalize.css',
          '@unocss/reset/sanitize/sanitize.css',
          '@unocss/reset/sanitize/assets.css',
          // '@unocss/reset/tailwind-compat.css',
        ].map(m => `import '${m}'`),
      ],
      // inspector: true,
      // mode: 'global',
      // shortcuts: [
      //   // ...
      // ],
      // theme: {
      //   colors: {
      //     // ...
      //   },
      // },
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
          fonts: {
            // ...
          },
        }),
        presetDaisy({}),
      ],
      transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
      ],
    }),
    mdx(),
  ],
  output: 'server',
  adapter: netlify({
    dist: new URL('./dist/', import.meta.url),
  }),
})
