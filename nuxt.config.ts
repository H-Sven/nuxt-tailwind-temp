// https://nuxt.com/docs/api/configuration/nuxt-config

const path = require('path')
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  nitro: {
    output: {
      publicDir: path.join(__dirname, 'docs')
    }
  },
  app: {
    baseURL: '/nuxt-tailwind-temp/',
    buildAssetsDir: 'nuxt_assets',
    head: {
      link: [
        { rel: "stylesheet", href: "https://at.alicdn.com/t/c/font_4647307_ihhptfto2x8.css" }
      ],
    },
  },
  experimental: {
    payloadExtraction: false
  },
})
