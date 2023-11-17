<template>
  <div class="">
       

      <Navbar/>

      <main >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <!--Div Info-->
          <div class="m-10 grid place-items-center">
            <div class="sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold ...">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-900 to-cyan-700">
                Hospital Admin
              </span>
            </div>
            <p class="mt-2 mb-2 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-sans font-light text-gray-500 text-justify">
              El presente sitio fue creado como práctica para un sistema de gestión y administración de hospitales con la finalidad de brindar
               apoyo en la búsqueda de hospitales en la República Mexicana.
            </p>
            <div class="text-left">            
              <router-link
                to="/login"
                class="bg-cyan-700 text-white rounded-md px-4 py-2 hover:bg-cyan-800 focus:outline-none focus:ring focus:border-cyan-600 ">
                Iniciar Sesión
              </router-link>
            </div>

          </div>
          <!--Div Image-->
          <div>
              <img
              src="~/static/Principal.png"
              alt="Hospital by Marili">
          </div>
        </div>

        <div class="mt-6 mb-6 flex-nowrap text-center">
          <h1 class="text-cyan-800 font-extrabold text-4xl mb-2 ">
              Algunos de los Hospitales más Famosos
          </h1>
       </div>

        <div class="container mx-auto mt-10 flex flex-wrap justify-center">
          <!-- Card 1 -->
          <div class="max-w-sm bg-gray-200 shadow-lg rounded-lg overflow-hidden m-4">
            <img class="w-full h-40 object-cover object-center" src="~/static/gd.jpg" alt="Imagen 1">
            <div class="p-6">
              <h2 class="text-xl font-semibold text-gray-800 text-center">Hospital St Bonaventure</h2>
              <p class="mt-2 text-gray-600 text-center">El más reconocido en California</p>
            </div>
          </div>
        
          <!-- Card 2 -->
          <div class="max-w-sm bg-gray-200 shadow-lg rounded-lg overflow-hidden m-4">
            <img class="w-full h-40 object-cover object-center" src="~/static/gs.jpg" alt="Imagen 2">
            <div class="p-6">
              <h2 class="text-xl font-semibold text-gray-800 text-center">Grey's Sloan Memorial</h2>
              <p class="mt-2 text-gray-600 text-center">El más famoso de Seattle Grace Mercy</p>
            </div>
          </div>
        
          <!-- Card 3 -->
          <div class="max-w-sm bg-gray-200 shadow-lg rounded-lg overflow-hidden m-4">
            <img class="w-full h-40 object-cover object-center" src="~/static/gm.jpg" alt="Imagen 3">
            <div class="p-6">
              <h2 class="text-xl font-semibold text-gray-800 text-center">Hospital CDMX</h2>
              <p class="mt-2 text-gray-600 text-center">De los más concurridos en la ciudad</p>
            </div>
          </div>
        </div>


      </main>

  | <Footer/>

  </div>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>
