<template>
    <div>
         
  
        <Navbar/>
  
        <div class="h-[73vh] flex items-center justify-center">
            <div class="bg-gray-100 p-8 rounded shadow-md w-full sm:w-96">
              <h1 class="text-2xl font-bold mb-6">Registro</h1>
      
              <form @submit.prevent="login">
                <div class="mb-4">
                  <label for="email" class="block text-gray-600 text-sm font-medium mb-2">Increse su Correo Electrónico</label>
                  <input type="email" id="email" v-model="email" class="w-full border-gray-300 rounded-md p-2" required>
                </div>
      
                <div class="mb-4">
                  <label for="password" class="block text-gray-600 text-sm font-medium mb-2">Ingrese su Contraseña</label>
                  <input type="password" id="password" v-model="password" class="w-full border-gray-300 rounded-md p-2" required>
                </div>

                <div class="text-center">
                  <button type="submit" class="bg-cyan-700 text-white rounded-md px-4 py-2 hover:bg-cyan-800 focus:outline-none focus:ring focus:border-cyan-600 ">
                      Registrarse
                    </button>
                </div>
                
              </form>
      
              
            </div>
          </div>
  
    |   <Footer/>
  
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
  