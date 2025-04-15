// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  app: {
    head: {
      title: 'Hung Ho - Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          key: 'description', 
          name: 'description', 
          content: 'Professional portfolio of Hung Ho - Frontend Developer' 
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
        }
      ],
      script: [
        { src: 'https://unpkg.com/aos@2.3.1/dist/aos.js', tagPosition: 'bodyClose' }
      ]
    }
  },
  css: [
    '~/assets/css/main.css',
    'aos/dist/aos.css'
  ],
  plugins: [
    '~/plugins/aos.client.js'
  ]
})
