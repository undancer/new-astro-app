import type { App } from 'vue-demi'

export default (app: App) => {
  // app.use(i18nPlugin);
  app.use(() => {
    console.log('_app')
  })
}
