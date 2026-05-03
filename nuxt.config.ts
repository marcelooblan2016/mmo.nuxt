// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  srcDir: './app',
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
  alias: {
    '@shared': '../shared',
    '@utils': '../shared/utils',
  },
  css: [
    '~/assets/css/app.css',
    '~/assets/css/menu.css'
  ]
})
