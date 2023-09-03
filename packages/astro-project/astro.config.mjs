import { defineConfig } from 'astro/config'

// import {presetUno, presetWind} from "unocss";
// import UnoCSSVite from 'unocss/vite'
// import UnoCSSAstro from 'unocss/astro'
// import {presetDaisy} from 'unocss-preset-daisy'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    // UnoCSSAstro({
    //     injectReset:true,
    //     presets:[
    //         presetUno(),
    //         presetWind(),
    //         presetDaisy(),
    //     ],
    //
    // }),
  ],
  /*
    vite:{
        plugins:[
            UnoCSSVite(),
        ],
    }
    */
})
