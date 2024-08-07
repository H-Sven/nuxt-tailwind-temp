// https://nuxt.com/docs/api/configuration/nuxt-config

const path = require('path')
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [ '@element-plus/nuxt', '@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  nitro: {
    output: {
      publicDir: path.join(__dirname, 'docs')
    }
  }
})
