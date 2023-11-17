<template>
    <div>
         
  
        <Navbar/>
  
        <div class="h-[73vh] flex items-center justify-center">
            <div class="bg-gray-100 p-8 rounded shadow-md w-full sm:w-96">
              <h1 class="text-2xl font-bold mb-6">Registro</h1>
      
              <form @submit.prevent="regist">
                <div class="mb-4">
                  <label for="email" class="block text-gray-600 text-sm font-medium mb-2">Increse su Correo Electrónico</label>
                  <input type="email" id="email"  class="w-full border-gray-300 rounded-md p-2"  placeholder="example@gmail.com" required>
                </div>
      
                <div class="mb-4">
                  <label for="password" class="block text-gray-600 text-sm font-medium mb-2">Ingrese su Contraseña</label>
                  <input type="password" id="password"  class="w-full border-gray-300 rounded-md p-2" placeholder="*****"  required>
                </div>

                <div class="mb-4">
                    <label for="phone" class="block text-gray-600 text-sm font-medium mb-2">Ingrese su Número</label>
                    <div class="flex">
                      <!-- Selector de lada -->
                      <select v-model="selectedLada" class="w-1/4 border-gray-300 rounded-l-md p-2">
                        <option value="1">+1</option>
                        <option value="52">+52</option>
                        <!-- Agrega más opciones según sea necesario -->
                      </select>
                
                      <!-- Campo de entrada para el número -->
                      <input
                        type="text"
                        id="phone"
                        v-model="phoneNumber"
                        class="flex-1 border-gray-300 rounded-r-md p-2"
                        placeholder="Número telefónico"
                        maxlength="10"
                        pattern="\d{10}"
                        required
                      />
                    </div>
                  </div>

                <div class="text-center">
                  <button type="submit" class="bg-cyan-700 text-white rounded-md px-4 py-2 hover:bg-cyan-800 focus:outline-none focus:ring focus:border-cyan-600 ">
                      Registrarse
                    </button>
                </div>
                
              </form>
            </div>
          </div>
          
          <Exito/>

    |   <Footer/>
  
    </div>
    
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
  import Exito from '@/components/exitor.vue'
  
  export default {
    data() {
        return {
        email: '',
        password: '',
        selectedLada: '1', // Valor predeterminado de la lada
        phoneNumber: '',
        };
    },
    methods: {
              regist() {
                // Lógica para manejar la autenticación aquí
                //console.log('Iniciar Sesión con:', this.email, this.password);
                
                // Emitir el evento de registro exitoso
                this.$root.$emit('registroExitoso');

                setTimeout(() => {
                  this.$router.push({ name: 'Login' });
                }, 2000);
                
              },
            },
    components: {
      Navbar,
      Footer,
      Exito,
    },
  }
  </script>
  