import netlify from '@astrojs/netlify/functions'
import vue3 from '@astrojs/vue'
import { defineConfig } from 'astro/config'
import { presetUno } from 'unocss'
import { presetDaisy } from 'unocss-preset-daisy'
import UnoCSS from 'unocss/astro'

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
      injectEntry: true,
      injectExtra: [
          `import ${JSON.stringify('@unocss/reset/normalize.css')}`,
          `import ${JSON.stringify('@unocss/reset/sanitize/sanitize.css')}`,
          `import ${JSON.stringify('@unocss/reset/sanitize/assets.css')}`,
        // `import ${JSON.stringify('@unocss/reset/tailwind-compat.css')}`,
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
        // presetAttributify(),
        // presetIcons(),
        // presetTypography(),
        // presetWebFonts({
        //   fonts: {
        //     // ...
        //   },
        // }),
        presetDaisy({}),
      ],
      // transformers: [
      //   // transformerDirectives(),
      //   // transformerVariantGroup(),
      // ],
    }),
  ],
  output: 'server',
  adapter: netlify({
    dist: new URL('./dist/', import.meta.url),
  }),
})
