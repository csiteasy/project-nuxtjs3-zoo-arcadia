//nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";



export default defineNuxtConfig({
  devtools: { enabled: true },

  // Activer l'importation automatique des composants
  components: true,

  // Déploiement statique
  ssr: true,

  build: {},

  alias: {
    '@': resolve(__dirname, '.'),
  },

  compatibilityDate: '2024-07-18',
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-swiper",
    "@weareheavy/nuxt-cookie-consent"
  ],
  cookieConsent: {
    provider: 'cookiebot',
    cbid: '3482a168-e7a2-4e35-990b-7b68ec39a164', // Replace with you own cbid

    // Optional
    consentMode: false, // Disable consent mode (default: true)
    consentModeDefaults: false, // Disable content mode defaults (default: true)
  },
  css: [
    '~/assets/css/tailwind.css'
  ],
  image: {
      provider: 'ipx',

  },
  plugins: [
    '~/plugins/vue-final-modal.js',
    '~/plugins/recaptcha.js'
  ],
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL_API,
      recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY
    },
    recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY,

  }
})