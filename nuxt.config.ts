export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  devtools: { enabled: false },
  srcDir: './app',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@element-plus/nuxt'
  ],
  runtimeConfig: {
    recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY,
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
      recaptchaSiteKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY
    }
  },
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
