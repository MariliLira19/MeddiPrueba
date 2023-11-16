<!-- Footer.vue -->

<template>
  <footer class="grid place-items-center bg-emerald-700 max-w-full shadow-md overflow-hidden h-28">
    <div class="">
      <div class="font-sans font-semibold text-white text-center text-xl">
        © 2023 MEDDI - TEST FROM MARILI LIRA ISLAS
      </div>
      <div class="flex justify-center columns-3 justify-around mt-3 ">
          
          <a class="text-underline-none " href="https://www.linkedin.com/in/marili-lira-islas-638078246/" target="_blank"><img
            src="~/static/linkedin.png"
            alt="Linkedin Address"
            class="w-10 h-10 transition-transform transform hover:scale-110 hover:opacity-75">
          </a>

          <a class="text-underline-none relative inline-block" href="https://github.com/MariliLira19" target="_blank">
            <img
              src="~/static/github.png"
              alt="Github Address"
              class="w-10 h-10 transition-transform transform hover:scale-110 hover:opacity-75">
          </a>

          <a class="text-underline-none " href="https://wa.me/7751043439?text=¡Hola%20Marili,%20me%20gustaria%20contactarte!" target="_blank"><img
            src="~/static/whatsapp.png"
            alt="Whatsapp Address"
            class="w-10 h-10 transition-transform transform hover:scale-110 hover:opacity-75">
          </a>
          
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
/* Estilos específicos del footer */
.custom-footer {
  background-color: #0b598d; /* Fondo azul */
  color: #d40a0a; /* Texto blanco */
}
</style>
