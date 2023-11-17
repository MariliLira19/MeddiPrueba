<template>
    <div >
        <Navbar />
        
            <div class="h-[73vh] flex items-center justify-center">
              <div class="bg-gray-100 p-8 rounded shadow-md w-full sm:w-96">
                <h1 class="text-2xl font-bold mb-6">Inicio de Sesión</h1>
        
                <form @submit.prevent="Login">
                  <div class="mb-4">
                    <label for="email" class="block text-gray-600 text-sm font-medium mb-2">Usuario</label>
                    <input type="email" id="email" v-model="email" class="w-full border-gray-300 rounded-md p-2" required>
                  </div>
        
                  <div class="mb-4">
                    <label for="password" class="block text-gray-600 text-sm font-medium mb-2">Contraseña</label>
                    <input type="password" id="password" v-model="password" class="w-full border-gray-300 rounded-md p-2" required>
                  </div>

                  <div class="text-center">
                    <button type="submit" class="bg-cyan-700 text-white rounded-md px-4 py-2 hover:bg-cyan-800 focus:outline-none focus:ring focus:border-cyan-600 ">
                        Iniciar Sesión
                      </button>
                  </div>
                  
                </form>
        
                <div class="mt-4 text-center">
                  <p class="text-gray-600">¿No tienes una cuenta? <router-link to="/registro" class="text-cyan-700 hover:underline">Regístrate aquí</router-link></p>
                </div>
              </div>
            </div>

            <Incorrecto class=""/>
        
        <Footer class=" bottom-0" />
      
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Incorrecto from '@/components/incorrecto.vue'


export default {
  
  data() {
              return {
                email: '',
                password: '',
              };
            },
            methods: {
              login() {
                // Lógica para manejar la autenticación aquí
                console.log('Iniciar Sesión con:', this.email, this.password);
                this.$router.push({ name: 'Detalles' });
              },
            },

      components: {
        Navbar,
        Footer,
        Incorrecto,
      },

            
}
</script>

