<template>
  <div class="font-sans min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 text-gray-800 dark:text-gray-200" :class="{ 'dark': isDarkMode }">
    <ClientOnly>
      <ParticleBackground />
    </ClientOnly>
    
    <header class="sticky top-0 z-10 bg-white/80 dark:bg-gray-800/80 shadow-md backdrop-blur-lg">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold gradient-text">Hung Ho</NuxtLink>
        
        <!-- Mobile menu button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden flex items-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <!-- Desktop navigation links -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group">
            Home
            <span class="absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 w-full"></span>
          </NuxtLink>
          <NuxtLink to="/about" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group">
            About
            <span class="absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 w-full"></span>
          </NuxtLink>
          <NuxtLink to="/projects" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group">
            Projects
            <span class="absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 w-full"></span>
          </NuxtLink>
          <NuxtLink to="/contact" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group">
            Contact
            <span class="absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 w-full"></span>
          </NuxtLink>
          <DarkModeToggle />
        </div>
      </nav>
      
      <!-- Mobile navigation menu -->
      <div v-show="mobileMenuOpen" class="md:hidden bg-white dark:bg-gray-800 w-full px-4 py-4 shadow-lg">
        <div class="flex flex-col space-y-3">
          <NuxtLink to="/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2" @click="mobileMenuOpen = false">Home</NuxtLink>
          <NuxtLink to="/about" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2" @click="mobileMenuOpen = false">About</NuxtLink>
          <NuxtLink to="/projects" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2" @click="mobileMenuOpen = false">Projects</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2" @click="mobileMenuOpen = false">Contact</NuxtLink>
          <div class="py-2">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>

    <main class="container mx-auto px-4 py-8 relative z-0">
      <NuxtPage />
    </main>

    <footer class="bg-white/10 dark:bg-gray-800/10 shadow-inner py-8 backdrop-blur-sm mt-12">
      <div class="container mx-auto px-4 text-center">
        <p class="text-gray-800 dark:text-white">© {{ new Date().getFullYear() }} Hung Ho. All rights reserved.</p>
        <div class="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/04th11k1" target="_blank" class="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-300 transition-all">
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/04th11k1" target="_blank" class="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-300 transition-all">
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Mobile menu state
const mobileMenuOpen = ref(false);

// Dark mode state
const isDarkMode = ref(true);

onMounted(() => {
  const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  isDarkMode.value = userPrefersDark;
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.gradient-text {
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

/* Add active link styles */
.router-link-active {
  @apply text-blue-600 dark:text-blue-400;
  position: relative;
}

.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 2px;
}

/* Light mode improvements */
body {
  background-color: #f9fafb;
  color: #1f2937;
}
</style>
