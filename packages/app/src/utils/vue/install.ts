import type { App } from 'vue-demi'
import type { SFCWithInstall } from '../types'

export function withInstall<T, E extends Record<string, any>>(main: T, extra?: E): T {
  (main as SFCWithInstall<T>).install = (app: App): void => {
    for (const comp of [main, ...Object.values(extra ?? {})])
      app.component(comp.name, comp)
  }
  return main
}
