<template>
    <div class="min-h-screen flex items-center justify-center">
      <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-6 text-center">Registrarse</h2>
        <form>
          <div class="mb-4">
            <label class="block text-gray-700">Nombre</label>
            <input type="text" class="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Correo Electrónico</label>
            <input type="email" class="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Contraseña</label>
            <input type="password" class="mt-1 p-2 w-full border rounded-md" />
          </div>
          <button class="w-full bg-blue-500 text-white p-2 rounded-md">Registrarse</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Register',
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para esta vista */
  </style>
  