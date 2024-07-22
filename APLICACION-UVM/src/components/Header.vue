<template>
    <header class="bg-white shadow">
      <div class="container mx-auto px-6 py-3 flex justify-between items-center">
        <div class="flex items-center">
          <img src="../images/cropped-logo-color.png" alt="Logotipo" class="logo-uvm mr-2">
        </div>
        <div class="flex items-center">
          <nav class="hidden md:flex space-x-8">
            <router-link to="/" class="text-gray-800 text-lg hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-110">Inicio</router-link>
            <router-link to="/about" class="text-gray-800 text-lg hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-110">Sobre Nosotros</router-link>
            <router-link to="/tutorials" class="text-gray-800 text-lg hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-110">Tutoriales</router-link>
            <router-link to="/login" class="text-gray-800 text-lg hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-110">Iniciar Sesión</router-link>
          </nav>
          <button @click="toggleMenu" class="md:hidden text-gray-800 focus:outline-none">
            <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div v-if="menuOpen" class="md:hidden">
        <nav class="px-2 pt-2 pb-4 space-y-1">
          <router-link to="/" class="block text-gray-800 px-2 py-1 text-lg hover:text-gray-600" @click="toggleMenu">Inicio</router-link>
          <router-link to="/about" class="block text-gray-800 px-2 py-1 text-lg hover:text-gray-600" @click="toggleMenu">Sobre Nosotros</router-link>
          <router-link to="/tutorials" class="block text-gray-800 px-2 py-1 text-lg hover:text-gray-600" @click="toggleMenu">Tutoriales</router-link>
          <router-link to="/login" class="block text-gray-800 px-2 py-1 text-lg hover:text-gray-600" @click="toggleMenu">Iniciar Sesión</router-link>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
    data() {
      return {
        menuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  