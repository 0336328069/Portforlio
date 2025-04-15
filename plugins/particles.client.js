import { defineNuxtPlugin } from '#app'
import Particles from 'vue3-particles'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.vueApp.use(Particles)
  }
})