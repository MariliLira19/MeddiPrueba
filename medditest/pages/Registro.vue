<template>
  <div>
       

      <Navbar/>
  <main class="mt-10 mb-10">
      <div class="h-[73vh] flex items-center justify-center">
          <div class="bg-gray-100 p-8 rounded shadow-md w-full sm:w-96">
            <h1 class="text-2xl font-bold mb-6">Registro</h1>
    
            <form @submit.prevent="regist">
              <div class="mb-4">
                <label for="email" class="block text-gray-600 text-sm font-medium mb-2">Increse su Correo Electrónico</label>
                <input type="email" id="email" v-model="email"  class="w-full border-gray-300 rounded-md p-2"  placeholder="example@gmail.com" required>
              </div>
    
              <div class="mb-4">
                <label for="password" class="block text-gray-600 text-sm font-medium mb-2">Ingrese su Contraseña</label>
                <input type="password" id="password" v-model="password" class="w-full border-gray-300 rounded-md p-2" placeholder="*****"  required>
              </div>

              <div class="mb-4">
                <label for="name" class="block text-gray-600 text-sm font-medium mb-2">Nombre</label>
                <input type="text" id="name" v-model="name" class="w-full  border-gray-300 rounded-md p-2" laceholder="name" required>
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
        
      </main>

        <Exito/>
        <Error/>

  |   <Footer class="bottom-0"/>

  </div>
  
</template>
  
  <script>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
  import Exito from '@/components/exitor.vue'
  import Error from '@/components/regerror.vue'

  import axios from 'axios';

  export default {
    data() {
      return {
        email: '',
        password: '',
        name: '',
        selectedLada: '1',
        phoneNumber: '',
      };
    },
    methods: {
      async regist() {
        try {
          const response = await axios.post('https://meddi-training.vercel.app/api/v1/user/create', {
            username: this.email, // Aquí usamos "username" en lugar de "email"
            password: this.password,
            name: this.name,
            cellphone: this.phoneNumber,
          });

          // Emitir el evento de registro exitoso
          this.$root.$emit('registroExitoso');

          setTimeout(() => {
            this.$router.push({ name: 'Login' });
          }, 2000);
        } catch (error) {
          // Emitir el evento de registro exitoso
          this.$root.$emit('errorR');
          // Manejar el error de la solicitud POST si es necesario
          console.error('Error al registrar:', error.response.data);
        }
      },
    },
    components: {
      Navbar,
      Footer,
      Exito,
    },
  };
  </script>