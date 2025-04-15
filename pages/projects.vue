<template>
  <div class="max-w-6xl mx-auto space-y-12 text-white">
    <h1 class="text-4xl md:text-5xl font-bold mb-8 text-center gradient-text" data-aos="fade-up">My Projects</h1>
    <p class="text-xl text-center text-blue-200 max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
      A collection of my most significant projects showcasing my skills in frontend development using Vue.js, Svelte, Astro, React, and other modern technologies.
    </p>
    
    <!-- Project Filter (Optional) -->
    <div class="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up" data-aos-delay="200">
      <button class="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full backdrop-blur-md transition">All Projects</button>
      <button class="bg-white/5 hover:bg-white/20 text-white/80 hover:text-white px-5 py-2 rounded-full backdrop-blur-md transition">Vue.js</button>
      <button class="bg-white/5 hover:bg-white/20 text-white/80 hover:text-white px-5 py-2 rounded-full backdrop-blur-md transition">Svelte</button>
      <button class="bg-white/5 hover:bg-white/20 text-white/80 hover:text-white px-5 py-2 rounded-full backdrop-blur-md transition">Nuxt.js</button>
      <button class="bg-white/5 hover:bg-white/20 text-white/80 hover:text-white px-5 py-2 rounded-full backdrop-blur-md transition">Astro</button>
    </div>
    
    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
      <!-- Project 1: Customer Engagement Website -->
      <div class="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl card-hover" data-aos="fade-up">
        <div class="h-64 overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5nYWdlbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
               alt="Customer Engagement Website" 
               class="w-full h-full object-cover object-center transform hover:scale-110 transition duration-700">
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
          <div class="absolute bottom-4 left-4 flex flex-wrap gap-2">
            <span class="bg-blue-600/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">SvelteKit</span>
            <span class="bg-green-600/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">Tailwind CSS</span>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-2xl font-semibold mb-3">Customer Engagement Website</h3>
          <p class="mb-4 text-gray-300">Built an engaging, SEO-optimized website using SvelteKit, ensuring lightweight and high-performance web experiences with SSR and SSG capabilities for improved search engine rankings.</p>
          
          <div class="space-y-4 mb-6">
            <h4 class="text-lg font-medium text-blue-300">Key Features:</h4>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Server-side rendering (SSR) for improved SEO performance
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Interactive customer feedback and support system
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Integration with HubSpot CRM for lead management
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Project 2: PWA eCommerce Platform -->
      <div class="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl card-hover" data-aos="fade-up" data-aos-delay="100">
        <div class="h-64 overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGVjb21tZXJjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
               alt="PWA eCommerce Platform" 
               class="w-full h-full object-cover object-center transform hover:scale-110 transition duration-700">
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
          <div class="absolute bottom-4 left-4 flex flex-wrap gap-2">
            <span class="bg-purple-600/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">Astro</span>
            <span class="bg-orange-600/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">Svelte</span>
            <span class="bg-blue-600/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">PWA</span>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-2xl font-semibold mb-3">PWA eCommerce Platform</h3>
          <p class="mb-4 text-gray-300">Developed a Progressive Web App using Astro + Svelte with enhanced performance optimization and offline capabilities, creating a seamless shopping experience across all devices.</p>
          
          <div class="space-y-4 mb-6">
            <h4 class="text-lg font-medium text-purple-300">Key Features:</h4>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-purple-400 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Offline product browsing and cart functionality
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-purple-400 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Push notifications for order updates and promotions
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-purple-400 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Stripe payment integration with secure checkout
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Project 3: Nuxt.js Shop Website -->
      <div class="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl card-hover" data-aos="fade-up">
        <div class="h-64 overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" 
               alt="Shop Website using Nuxt.js" 
               class="w-full h-full object-cover object-center transform hover:scale-110 transition duration-700">
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
          <div class="absolute bottom-4 left-4 flex flex-wrap gap-2">
            <span class="bg-green-600/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">Nuxt.js</span>
            <span class="bg-teal-600/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">Tailwind CSS</span>
            <span class="bg-yellow-600/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">SSR</span>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-2xl font-semibold mb-3">Shop Website using Nuxt.js</h3>
          <p class="mb-4 text-gray-300">Built shop websites using Nuxt.js 3 focused on SEO, SSR, and CSR, creating a fast and responsive online shopping experience with optimized performance metrics.</p>
          
          <div class="space-y-4 mb-6">
            <h4 class="text-lg font-medium text-green-300">Key Features:</h4>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-400 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Advanced product filtering and search capabilities
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-400 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Server-side rendering for SEO optimization
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-400 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Integrated user account and wishlist features
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Project 4: Digital Assets Management System -->
      <div class="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl card-hover" data-aos="fade-up" data-aos-delay="100">
        <div class="h-64 overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpZ2l0YWwlMjBhc3NldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" 
               alt="Digital Assets Management System" 
               class="w-full h-full object-cover object-center transform hover:scale-110 transition duration-700">
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
          <div class="absolute bottom-4 left-4 flex flex-wrap gap-2">
            <span class="bg-blue-600/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">Vue 3</span>
            <span class="bg-red-600/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">Vuex</span>
            <span class="bg-yellow-600/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">Vite</span>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-2xl font-semibold mb-3">Digital Assets Management System</h3>
          <p class="mb-4 text-gray-300">Developed a Digital Assets Management (DAM) System using Vue 3, Vuex, and Vite that improved asset organization and retrieval efficiency for marketing teams.</p>
          
          <div class="space-y-4 mb-6">
            <h4 class="text-lg font-medium text-blue-300">Key Features:</h4>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Advanced asset tagging and categorization system
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Drag-and-drop functionality with image previews
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                User permission and role-based access control
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Additional projects can be added in the same format -->
    </div>
    
    <!-- Technology stack with animations -->
    <section class="py-16 bg-white/5 backdrop-blur-md rounded-lg p-8" data-aos="fade-up">
      <h2 class="text-3xl font-semibold mb-8 text-center gradient-text">Technologies Used</h2>
      
      <div class="relative">
        <InfiniteScroll>
          <div class="flex gap-8 items-center">
            <div class="tech-pill bg-white/5 p-4 rounded-lg flex items-center gap-2 backdrop-blur-sm min-w-[120px] justify-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" class="w-8 h-8" alt="Vue.js" />
              <span>Vue.js</span>
            </div>
            <div class="tech-pill bg-white/5 p-4 rounded-lg flex items-center gap-2 backdrop-blur-sm min-w-[120px] justify-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" class="w-8 h-8" alt="Nuxt.js" />
              <span>Nuxt.js</span>
            </div>
            <div class="tech-pill bg-white/5 p-4 rounded-lg flex items-center gap-2 backdrop-blur-sm min-w-[120px] justify-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" class="w-8 h-8" alt="Svelte" />
              <span>Svelte</span>
            </div>
            <div class="tech-pill bg-white/5 p-4 rounded-lg flex items-center gap-2 backdrop-blur-sm min-w-[120px] justify-center">
              <img src="https://astro.build/assets/press/astro-icon-light-gradient.svg" class="w-8 h-8" alt="Astro" />
              <span>Astro</span>
            </div>
            <div class="tech-pill bg-white/5 p-4 rounded-lg flex items-center gap-2 backdrop-blur-sm min-w-[120px] justify-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" class="w-8 h-8" alt="React" />
              <span>React</span>
            </div>
            <div class="tech-pill bg-white/5 p-4 rounded-lg flex items-center gap-2 backdrop-blur-sm min-w-[120px] justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="32px" height="32px" viewBox="0 0 24 24" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/></svg>
              <span>Tailwind</span>
            </div>
            <div class="tech-pill bg-white/5 p-4 rounded-lg flex items-center gap-2 backdrop-blur-sm min-w-[120px] justify-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" class="w-8 h-8" alt="TypeScript" />
              <span>TypeScript</span>
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </section>
    
    <!-- Call to action -->
    <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center shadow-xl" data-aos="zoom-in">
      <h2 class="text-2xl font-bold mb-4 text-white">Interested in working together?</h2>
      <p class="text-white/90 mb-6">Let's collaborate on your next project and build something amazing together.</p>
      <NuxtLink to="/contact" class="inline-block bg-white text-blue-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-md transition duration-300 transform hover:scale-105 shadow-lg">
        Get in Touch
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// Any script setup code here
</script>

<style scoped>
/* Component-specific styles */
</style>