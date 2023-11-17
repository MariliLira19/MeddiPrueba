<template>
    <div>
      <!-- Contenedor del popup -->
      <div v-if="showPopup" class="fixed bottom-0 right-2 mb-4 ml-4 bg-green-500 text-white px-4 py-2 rounded shadow">
        ¡Se actualizo correctamente la informaci&oacute;n!
      </div>
  
      <!-- Tu contenido principal aquí -->
  
      <!-- Fin del contenido principal -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'Actualizo',
    data() {
      return {
        showPopup: true,
      };
    },
    methods: {
      // Método para mostrar el popup
      showSuccessPopup() {
        this.showPopup = true;
  
        // Ocultar el popup después de 8 segundos
        setTimeout(() => {
          this.showPopup = false;
        }, 8000);
      },
    },
    mounted() {
      // Llamada al método showSuccessPopup cuando sea necesario, por ejemplo, después de un registro exitoso
      // this.showSuccessPopup();
    },
  };
  </script>
  