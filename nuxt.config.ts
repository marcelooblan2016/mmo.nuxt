export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: { enabled: false },
  srcDir: './app',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  runtimeConfig: {
    recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY,
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
      recaptchaSiteKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY
    }
  },
  routeRules: {
    // Services is hidden for now. Remove this rule and re-add it to the menu and sitemap to restore it.
    '/services': { redirect: { to: '/', statusCode: 301 } }
  },
  nitro: {
    compressPublicAssets: true
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
    '~/assets/css/app.css'
  ]
})
