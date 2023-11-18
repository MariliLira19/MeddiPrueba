<template>
  <div>
       

      <Navbar/>

      <main class="mt-20 mb-20">

        <div class=" flex items-center justify-center">
          <div class="bg-gray-100 p-8 rounded shadow-md w-full sm:w-[40rem]">
            <h1 class="text-2xl font-bold mb-6 text-center">Actualizar Hospital</h1>

            <form @submit.prevent="update">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Columna Izquierda -->
                <div>

                  <div class="mb-4">
                    <label for="name" class="block text-gray-600 text-sm font-medium mb-2">Nombre</label>
                    <input type="text" id="name" v-model="name" class="w-full border-gray-300 rounded-md p-2" required>
                  </div>

                  <div class="mb-4">
                    <label for="address" class="block text-gray-600 text-sm font-medium mb-2">Dirrección</label>
                    <input type="text" id="address" v-model="direccion" class="w-full border-gray-300 rounded-md p-2" required>
                  </div>

                  <div class="mb-4">
                    <label for="phone" class="block text-gray-600 text-sm font-medium mb-2">Número telefónico</label>
                    <div class="flex">
                      <select v-model="selectedLada" class="w-1/4 border-gray-300 rounded-l-md p-2">
                        <option value="1">+1</option>
                        <option value="52">+52</option>
                        <!-- Agrega más opciones según sea necesario -->
                      </select>

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

                  <div class="mb-4">
                    <label for="horario" class="block text-gray-600 text-sm font-medium mb-2">Horario</label>
                    <input type="text" id="horario" v-model="horario" class="w-full border-gray-300 rounded-md p-2" required>
                  </div>



                </div>

                <!-- Columna Derecha -->
                <div>
                  
                  <div class="mb-4">
                    <label for="maps" class="block text-gray-600 text-sm font-medium mb-2">Dirección Maps</label>
                    <input type="text" id="maps" v-model="maps" class="w-full border-gray-300 rounded-md p-2" required>
                  </div>

                  <div class="mb-4">
                    <label for="long" class="block text-gray-600 text-sm font-medium mb-2">Longitud</label>
                    <input type="number" id="long" v-model="long" class="w-full border-gray-300 rounded-md p-2" required>
                  </div>

                  <div class="mb-4">
                    <label for="lat" class="block text-gray-600 text-sm font-medium mb-2">Latitud</label>
                    <input type="number" id="lat" v-model="lat" class="w-full border-gray-300 rounded-md p-2" required>
                  </div>

                  <div class="mb-4">
                    <label for="employees" class="block text-gray-600 text-sm font-medium mb-2">Observaciones</label>
                    <input type="text" id="employees" v-model="observaciones" class="w-full border-gray-300 rounded-md p-2" required>
                  </div>
                </div>
              </div>

              <div class="text-center">
                <button type="submit" class="bg-cyan-700 text-white rounded-md px-4 py-2 hover:bg-cyan-800 focus:outline-none focus:ring focus:border-cyan-600">
                  Actualiza
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

        <Actualiza/>
        <Error/>
  |   <Footer/>

  </div>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Actualiza from '@/components/actualizado.vue'
import Error from '@/components/regerror.vue'

import axios from 'axios';

export default {
  data() {
      return {
      name: '',
      direccion: '',
      selectedLada: '1', // Valor predeterminado de la lada
      phoneNumber: '',
      horario: '',
      maps: '',
      cod: '',
      municipio: '',
      observaciones: '',
      };
  },
  methods: {
    
    async update() {
        try {
          const response = await axios.post('https://meddi-training.vercel.app/api/v1/user/create', {
            name: this.name,
            direccion: this.direccion,
            telefono: this.phoneNumber,
            horario: this.horario,
            urlGoogleMaps: this.maps,
            estadoCode: this.cod,
            municipio: this.municipio,
            observaciones: this.observaciones,

          });
                // Emitir el evento de registro exitoso
                this.$root.$emit('actualizadoE');

                setTimeout(() => {
                  this.$router.push({ name: 'Info' });
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
    Actualiza,
    Error,
  },

  
  
}
</script>
