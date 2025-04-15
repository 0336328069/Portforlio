<template>
  <div class="space-y-16 text-white">
    <!-- Hero Section with animated text -->
    <section class="py-20 relative overflow-hidden">
      <div class="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          <span class="gradient-text">Hung Ho</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-blue-200">Frontend Web Developer</p>
        <p class="max-w-3xl mx-auto mb-8 text-gray-300">
          I am a passionate Frontend Developer with expertise in Vue 3, NuxtJS, Svelte, Astro, and React, dedicated to building high-performance, user-centric web applications.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/contact" class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-md transition duration-300 transform hover:scale-105 shadow-lg">
            Contact Me
          </NuxtLink>
          <NuxtLink to="/projects" class="border border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-md transition duration-300 transform hover:scale-105">
            View Projects
          </NuxtLink>
        </div>
      </div>

      <!-- Animated shapes background -->
      <div class="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div class="absolute top-10 left-10 w-20 h-20 bg-blue-600/20 rounded-full blur-xl animate-pulse"></div>
        <div class="absolute bottom-10 right-10 w-32 h-32 bg-purple-600/20 rounded-full blur-xl animate-pulse" style="animation-delay: 1s;"></div>
        <div class="absolute top-1/2 left-1/4 w-40 h-40 bg-indigo-600/10 rounded-full blur-xl animate-pulse" style="animation-delay: 2s;"></div>
      </div>
    </section>

    <!-- Tech stack with infinite scroll -->
    <section class="py-12 relative" data-aos="fade-up">
      <div class="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 z-10 pointer-events-none"></div>
      <h2 class="text-2xl font-semibold mb-6 text-center text-gray-200">Technologies I Work With</h2>
      
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
    </section>

    <!-- Skills Section -->
    <section class="py-16" data-aos="fade-up">
      <h2 class="text-3xl font-bold mb-12 text-center gradient-text">My Skills</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-xl card-hover" data-aos="zoom-in" data-aos-delay="100">
          <div class="text-blue-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Frontend Development</h3>
          <ul class="space-y-2 text-gray-300">
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              HTML, CSS, JavaScript (ES6+)
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              TypeScript
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Vue.js 3, Nuxt.js
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Svelte, Astro
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              React
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Tailwind CSS
            </li>
          </ul>
        </div>

        <div class="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-xl card-hover" data-aos="zoom-in" data-aos-delay="200">
          <div class="text-purple-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">State Management</h3>
          <ul class="space-y-2 text-gray-300">
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Vuex, Pinia
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Redux
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Nanostores
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              SPA, SSR, CSR
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              PWA Development
            </li>
          </ul>
        </div>

        <div class="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-xl card-hover" data-aos="zoom-in" data-aos-delay="300">
          <div class="text-indigo-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Other Skills</h3>
          <ul class="space-y-2 text-gray-300">
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Git & GitHub
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              .NET MVC, Java MVC
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              SEO Optimization
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              UI/UX Design
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Responsive Web Design
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="py-16" data-aos="fade-up">
      <h2 class="text-3xl font-bold mb-12 text-center gradient-text">Featured Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div class="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl card-hover" data-aos="fade-right">
          <div class="h-64 overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5nYWdlbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                alt="Customer Engagement Website" 
                class="w-full h-full object-cover object-center transform hover:scale-110 transition duration-700">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-4 left-4">
              <span class="bg-blue-600/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">SvelteKit</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Customer Engagement Website</h3>
            <p class="mb-4 text-gray-300">Built an engaging, SEO-optimized website using SvelteKit, ensuring lightweight and high-performance web experiences with SSR and SSG.</p>
            <NuxtLink to="/projects" class="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
              Learn more 
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl card-hover" data-aos="fade-left">
          <div class="h-64 overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGVjb21tZXJjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                alt="eCommerce Platform" 
                class="w-full h-full object-cover object-center transform hover:scale-110 transition duration-700">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-4 left-4">
              <span class="bg-purple-600/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">Astro + Svelte</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">eCommerce Platform (PWA)</h3>
            <p class="mb-4 text-gray-300">Developed a Progressive Web App using Astro + Svelte with enhanced performance and optimized UX across all devices.</p>
            <NuxtLink to="/projects" class="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium">
              Learn more 
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <NuxtLink to="/projects" class="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-md text-white py-3 px-6 rounded-full transition duration-300">
          View All Projects
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
// Any additional script setup can go here
</script>

<style scoped>
/* Any additional component-specific styles */
</style>