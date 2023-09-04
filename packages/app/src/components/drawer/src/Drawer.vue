<script lang="ts" setup>
import type { Props } from './props'

withDefaults(defineProps<Props>(), {
  open: false,
})

const commonClass = [
  'bg-base-100',
  'sticky',
  'top-0',
  'bg-opacity-90',
  'flex',
  'backdrop-blur',
  'shadow-sm',
]

const contentClass = [
  ...commonClass,
  'z-30',
  'w-full',
  'h-16',
  'justify-center',
  'transition-all',
  'duration-100',
  'text-base-content',
]

const sideClass = [
  ...commonClass,
  'z-20',
  'px-4',
  'py-2',
  'gap-2',
  'items-center',
  'hidden',
]

// onMounted(()=>{
// addIcon("","")
// })
</script>

<template>
  <div class="drawer" :class="{ 'drawer-open': open }">
    <input type="checkbox" class="drawer-toggle">
    <div class="drawer-content">
      <div :class="contentClass">
        <nav class="w-full navbar bg-base-100">
          <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
        </nav>
      </div>
      <div class="max-w-[100vw] px-6 pb-16 xl:pr-2">
        <div class="flex flex-col-reverse justify-between gap-6 xl:flex-row">
          <div class="prose prose-sm md:prose-base w-full max-w-4xl flex-grow pt-10">
            <slot />
          </div>
        </div>
      </div>
    </div>
    <div class="drawer-side">
      <aside class="w-80 bg-base-100">
        <div :class="sideClass">
          <a class="flex-0 btn btn-ghost px-2" href="/" aria-current="page" aria-label="Homepage">
            ICON
          </a>
        </div>
        <div class="h-4" />
        <ul v-for="(x, index) of 10" :key="index" class="menu menu-sm lg:menu-md px-4 py-0">
          <li v-if="index > 0" />
          <li v-if="index > 0" class="menu-title flex flex-row gap-4">
            <span>
              {{ `${x}` }}
            </span>
          </li>
          <li v-for="y of 10" :key="y">
            <a>test</a>
          </li>
          <li>
            <a id="" href="/theme-generator/" data-sveltekit-preload-data="hover" class="  ">
              <span>
                <div class="i-mdi-home" />
              </span>
              <span class="undefined">
                主题生成器
              </span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
