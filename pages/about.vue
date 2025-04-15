<template>
  <div class="max-w-4xl mx-auto space-y-12 text-white">
    <h1 class="text-4xl md:text-5xl font-bold mb-6 text-center gradient-text" data-aos="fade-up">About Me</h1>

    <!-- Profile section -->
    <section class="flex flex-col md:flex-row gap-8 items-center bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl" data-aos="fade-up">
      <div class="w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-full flex-shrink-0 mx-auto md:mx-0 bg-gradient-to-br from-blue-500 to-purple-600 p-1">
        <img src="https://i.ibb.co/39dgW6SZ/476819970-1172171854423617-670546581047692700-n-1.jpg" alt="Hung Ho" class="w-full h-full object-cover rounded-full">
        <!-- <a href="https://ibb.co/zTxqb9Pv"><img src="https://i.ibb.co/39dgW6SZ/476819970-1172171854423617-670546581047692700-n-1.jpg" alt="476819970-1172171854423617-670546581047692700-n-1" border="0"></a> -->
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold gradient-text">Hung Ho</h2>
        <p class="text-lg text-blue-300">Frontend Web Developer at MGI Solutions (4MGI.COM LLC)</p>
        <p class="text-gray-300">I am a passionate Frontend Developer with expertise in Vue 3, NuxtJS, Svelte, Astro, and React, dedicated to building high-performance, user-centric web applications. With a solid background in JavaScript (ES6+), TypeScript, Tailwind CSS, and state management tools like Vuex, Pinia, Redux, and Nanostores, I have successfully developed and optimized scalable web solutions.</p>
        <p class="text-gray-300">In addition to frontend development, I have experience in .NET MVC and Java MVC, allowing me to understand and collaborate effectively in full-stack environments.</p>
        <div class="flex flex-wrap gap-3 mt-4">
          <a href="/resume.pdf" target="_blank" class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-md transition duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>

    <!-- Experience section -->
    <section class="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl" data-aos="fade-up">
      <h2 class="text-2xl font-bold mb-8 gradient-text">Experience</h2>
      
      <div class="space-y-12">
        <div class="space-y-4 relative pl-8 border-l-2 border-blue-500" data-aos="fade-right">
          <span class="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-blue-500"></span>
          <div>
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <h3 class="text-xl font-semibold">Frontend Web Developer</h3>
              <span class="bg-blue-600/30 text-blue-300 py-1 px-3 rounded-full text-sm inline-block">Aug 2021 - Present</span>
            </div>
            <h4 class="text-lg font-medium text-blue-300 mt-1">MGI Solutions (4MGI.COM LLC)</h4>
          </div>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-blue-400 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <p>Developed a Digital Assets Management (DAM) System using Vue 3, Vuex, and Vite that improved asset organization and retrieval efficiency by 35%</p>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-blue-400 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <p>Built shop websites using Nuxt.js 3 focused on SEO, SSR, and CSR, leading to a 40% increase in organic traffic</p>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-blue-400 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <p>Created Progressive Web Apps (PWA) using Astro + Svelte for eCommerce platforms, achieving performance scores of 95+ on Lighthouse</p>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-blue-400 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <p>Integrated RESTful APIs for dynamic product information management, decreasing data retrieval time by 25%</p>
            </li>
          </ul>
        </div>

        <div class="space-y-4 relative pl-8 border-l-2 border-purple-500" data-aos="fade-right">
          <span class="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-purple-500"></span>
          <div>
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <h3 class="text-xl font-semibold">Product Information Specialist</h3>
              <span class="bg-purple-600/30 text-purple-300 py-1 px-3 rounded-full text-sm inline-block">2022 - 2024</span>
            </div>
            <h4 class="text-lg font-medium text-purple-300 mt-1">MGI Solutions</h4>
          </div>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-purple-400 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <p>Developed and maintained front end using Vue 3, Pinia, and Vite with SPA architecture, reducing page load time by 40%</p>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-purple-400 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <p>Designed and developed reusable UI components for enhanced modularity, improving development efficiency by 30%</p>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-purple-400 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <p>Ensured responsive UI using Tailwind CSS and Quasar UI Framework, achieving 100% compatibility across devices</p>
            </li>
          </ul>
        </div>

        <div class="space-y-4 relative pl-8 border-l-2 border-indigo-500" data-aos="fade-right">
          <span class="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-indigo-500"></span>
          <div>
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <h3 class="text-xl font-semibold">Junior Web Developer</h3>
              <span class="bg-indigo-600/30 text-indigo-300 py-1 px-3 rounded-full text-sm inline-block">Aug 2021 - Feb 2025</span>
            </div>
            <h4 class="text-lg font-medium text-indigo-300 mt-1">MGI</h4>
          </div>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-indigo-400 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <p>Developed internal IT support website using Vue 3 (Composition API) and Vuex, reducing ticket resolution time by 25%</p>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-indigo-400 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <p>Created a sales funnel website using .NET MVC with Razor Pages, ES6, and CSS, increasing conversion rates by 20%</p>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-indigo-400 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <p>Implemented UI designs with Tailwind CSS and Vuetify for responsive interfaces, improving user engagement by 35%</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Education section -->
    <section class="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl" data-aos="fade-up">
      <h2 class="text-2xl font-bold mb-8 gradient-text">Education</h2>
      
      <div class="relative pl-8 border-l-2 border-green-500" data-aos="fade-right">
        <span class="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-green-500"></span>
        <div class="space-y-3">
          <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <h3 class="text-xl font-semibold">Bachelor's in Information Technology</h3>
            <span class="bg-green-600/30 text-green-300 py-1 px-3 rounded-full text-sm inline-block">2019 - 2023</span>
          </div>
          <h4 class="text-lg font-medium text-green-300">Hue University of Sciences</h4>
          <div class="flex items-start mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-green-400 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            <p class="text-gray-300">Graduated with honors. Specialized in web development and software engineering. Completed several practical projects including a university resource management system and a digital library application.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Any required script code
</script>

<style scoped>
/* Additional component-specific styles */
</style>