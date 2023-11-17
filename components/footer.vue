<!-- Footer.vue -->

<template>
  <footer class="grid place-items-center bg-cyan-950 max-w-full shadow-md overflow-hidden pb-4 bottom-0 w-full">
    <div class="max-w-screen-lg px-4">
      <div class="font-sans font-semibold text-white text-center text-xl py-3">
        © 2023 MEDDI - TEST BY MARILI LIRA ISLAS
      </div>
      <div class="flex justify-center space-x-4 mt-3">
        <a class="text-underline-none" href="https://www.linkedin.com/in/marili-lira-islas-638078246/" target="_blank">
          <img
            src="~/static/linkedin.png"
            alt="Linkedin Address"
            class="w-10 h-10 transition-transform transform hover:scale-110 hover:opacity-75"
          >
        </a>
        
        <a class="text-underline-none relative inline-block" href="https://github.com/MariliLira19" target="_blank">
          <img
            src="~/static/github.png"
            alt="Github Address"
            class="w-10 h-10 transition-transform transform hover:scale-110 hover:opacity-75"
          >
        </a>
        
        <a class="text-underline-none" href="https://wa.me/7751043439?text=¡Hola%20Marili,%20me%20gustaria%20contactarte!" target="_blank">
          <img
            src="~/static/whatsapp.png"
            alt="Whatsapp Address"
            class="w-10 h-10 transition-transform transform hover:scale-110 hover:opacity-75"
          >
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

