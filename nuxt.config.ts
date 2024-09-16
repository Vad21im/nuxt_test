// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', '@pinia/nuxt'],
  svgo: {
    autoImportPath: './assets/icons/',
    componentPrefix: 'i',
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
})