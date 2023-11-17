<template>
    <div>
      <!-- Botón de Ayuda -->
      <button
        @click="openPopup"
        type="button"
        class="relative rounded-full bg-cyan-700 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span class="absolute -inset-1.5"></span>
        <span class="sr-only">Ayuda</span>
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
      </button>
  
      <!-- Popup -->
      <div v-if="isPopupOpen" @click="closePopup" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div class="bg-gray-100 p-4 rounded shadow-md max-w-md">
          <div class="text-center">
          <h1 class="text-cyan-800 font-extrabold text-2xl mb-2">Gracias por visitar el Sitio</h1>
          </div>
          <p class="mt-2 mb-2 font-sans font-light text-lg text-gray-500">Con gusto puedo brindarte más información através de las redes sociales que se encuentan en el pie de página</p>
          <div class="text-center">
            <button @click="closePopup" class="bg-cyan-700 text-white rounded-md px-4 py-2 hover:bg-cyan-800 focus:outline-none focus:ring focus:border-cyan-600 ">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelpPopup',
    data() {
      return {
        isPopupOpen: false,
      };
    },
    methods: {
      openPopup() {
        this.isPopupOpen = true;
      },
      closePopup() {
        this.isPopupOpen = false;
      },
    },
  };
  </script>