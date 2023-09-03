import { presetDaisy } from 'unocss-preset-daisy'
import { defineConfig } from 'vite'
import unocss from 'unocss/vite'
import { presetIcons, presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue(),
    unocss({
      presets: [presetUno(), presetDaisy(), presetIcons()],
    }),
  ],
})
