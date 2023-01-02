// import { defineNuxtConfig } from 'nuxt'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ['vueuc']
  },
  vite: {
    plugins: [
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ],
    ssr: {
      noExternal: [
        'moment',
        'naive-ui',
        '@juggle/resize-observer',
        '@css-render/vue3-ssr'
      ]
    }
  }
})
