<template>
  <div class="max-w-6xl mx-auto space-y-12 text-white relative">
    <!-- Contact page header with animation -->
    <div class="text-center" data-aos="fade-down">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">Get In Touch</h1>
      <p class="text-xl text-blue-200 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        Feel free to reach out for collaborations, project inquiries, or just to say hello!
      </p>
    </div>
    
    <!-- Contact information and form grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <!-- Contact information with icons -->
      <div class="space-y-8" data-aos="fade-right">
        <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
          <h2 class="text-2xl font-semibold mb-6 gradient-text">Contact Information</h2>
          
          <div class="space-y-6">
            <!-- Email -->
            <div class="flex items-start">
              <div class="bg-blue-500/20 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-medium text-gray-200">Email</h3>
                <a href="mailto:ho.x.hung.16@gmail.com" class="text-blue-400 hover:text-blue-300 transition-colors">
                  ho.x.hung.16@gmail.com
                </a>
              </div>
            </div>
            
            <!-- LinkedIn -->
            <div class="flex items-start">
              <div class="bg-blue-500/20 p-3 rounded-full mr-4">
                <svg class="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-medium text-gray-200">LinkedIn</h3>
                <a href="https://linkedin.com/in/04th11k1" target="_blank" class="text-blue-400 hover:text-blue-300 transition-colors">
                  linkedin.com/in/04th11k1
                </a>
              </div>
            </div>
            
            <!-- GitHub -->
            <div class="flex items-start">
              <div class="bg-blue-500/20 p-3 rounded-full mr-4">
                <svg class="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.387.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-medium text-gray-200">GitHub</h3>
                <a href="https://github.com/04th11k1" target="_blank" class="text-blue-400 hover:text-blue-300 transition-colors">
                  github.com/04th11k1
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Location map or image -->
        <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <h2 class="text-2xl font-semibold mb-6 gradient-text">Location</h2>
          <div class="rounded-lg overflow-hidden h-48 bg-gray-800 flex items-center justify-center">
            <div class="text-center px-4">
              <p class="text-gray-300 mb-2">Currently based in</p>
              <p class="text-xl font-medium text-white">New York City, USA</p>
              <p class="text-sm text-gray-400 mt-2">Available for remote work worldwide</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Contact form with animations -->
      <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg" data-aos="fade-left">
        <h2 class="text-2xl font-semibold mb-6 gradient-text">Send Me a Message</h2>
        
        <form class="space-y-6">
          <div class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
              <input 
                type="text" 
                id="name" 
                class="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring focus:ring-blue-500/20 focus:outline-none text-white"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <input 
                type="email" 
                id="email" 
                class="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring focus:ring-blue-500/20 focus:outline-none text-white"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-300 mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                class="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring focus:ring-blue-500/20 focus:outline-none text-white"
                placeholder="Enter subject"
              />
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                class="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring focus:ring-blue-500/20 focus:outline-none text-white"
                placeholder="Enter your message"
              ></textarea>
            </div>
          </div>
          
          <button 
            type="submit" 
            class="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-lg"
          >
            Send Message
          </button>
          
          <p class="text-xs text-center text-gray-400 mt-4">
            I'll respond to your message as soon as possible.
          </p>
        </form>
      </div>
    </div>
    
    <!-- Additional contact methods -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10" data-aos="fade-up" data-aos-delay="200">
      <!-- Freelance Availability -->
      <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center shadow-lg">
        <div class="bg-green-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-medium mb-2">Freelance Available</h3>
        <p class="text-gray-400">Currently accepting new projects</p>
      </div>
      
      <!-- Quick Response -->
      <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center shadow-lg">
        <div class="bg-blue-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-medium mb-2">Quick Response</h3>
        <p class="text-gray-400">Reply within 24 hours</p>
      </div>
      
      <!-- Remote Work -->
      <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center shadow-lg">
        <div class="bg-purple-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-.565M8 3.935l6-1.394" />
          </svg>
        </div>
        <h3 class="text-xl font-medium mb-2">Remote Work</h3>
        <p class="text-gray-400">Available worldwide</p>
      </div>
    </div>
    
    <!-- FAQ Section -->
    <div class="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg" data-aos="fade-up">
      <h2 class="text-2xl font-semibold mb-6 text-center gradient-text">Frequently Asked Questions</h2>
      
      <div class="space-y-6">
        <div class="bg-white/5 rounded-lg p-5">
          <h3 class="text-xl font-medium mb-2">What services do you offer?</h3>
          <p class="text-gray-300">I specialize in frontend development with Vue.js, Nuxt.js, and other modern frameworks to create responsive, high-performance web applications tailored to your specific needs.</p>
        </div>
        
        <div class="bg-white/5 rounded-lg p-5">
          <h3 class="text-xl font-medium mb-2">What is your typical project timeline?</h3>
          <p class="text-gray-300">Project timelines vary depending on complexity and scope. A simple website might take 2-3 weeks, while complex web applications could take several months. I'll provide a detailed estimate after understanding your requirements.</p>
        </div>
        
        <div class="bg-white/5 rounded-lg p-5">
          <h3 class="text-xl font-medium mb-2">How do you handle revisions and feedback?</h3>
          <p class="text-gray-300">I include multiple revision rounds in my project process to ensure your complete satisfaction. We'll establish clear communication channels for feedback and updates throughout the development lifecycle.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gradient-text {
  background: linear-gradient(to right, #4f46e5, #2563eb, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>