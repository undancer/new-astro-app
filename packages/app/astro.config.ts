import netlify from '@astrojs/netlify/functions'
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
import vue3 from '@astrojs/vue'

// https://astro.build/config
export default /** @type {import('astro').AstroUserConfig} */ defineConfig({
  // 你的配置项都在这里
  // https://docs.astro.build/zh-cn/reference/configuration-reference/
  integrations: [
    vue3({
      appEntrypoint: '/src/pages/_app',
    }),
    UnoCSS({
      injectReset: true,
      shortcuts: [
        // ...
      ],
      theme: {
        colors: {
          // ...
        },
      },
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
        presetDaisy({

        }),
      ],
      transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
      ],
    }),
  ],
  output: 'server',
  adapter: netlify({
    dist: new URL('./dist/', import.meta.url),
  }),
})
