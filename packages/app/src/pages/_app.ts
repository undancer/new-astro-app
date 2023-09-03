import type { App } from 'vue'

export default (app: App) => {
  // app.use(i18nPlugin);
  app.use(() => {
    console.log('_app')
  })
}
