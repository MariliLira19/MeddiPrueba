<template>
  <div>
       

      <Navbar/>

      <main class="mt-20 mb-20">

        <div class=" flex items-center justify-center">
          <div class="bg-gray-100 p-8 rounded shadow-md w-full sm:w-[40rem]">
            <h1 class="text-2xl font-bold mb-6 text-center">Agrega Hospital</h1>

            <form @submit.prevent="create">
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
                    <label for="long" class="block text-gray-600 text-sm font-medium mb-2">Activo</label>
                    <input type="text" id="long" v-model="act" class="w-full border-gray-300 rounded-md p-2"  placeholder="True/false" required>
                  </div>

                  <div class="mb-4">
                    <label for="lat" class="block text-gray-600 text-sm font-medium mb-2">Municipio</label>
                    <input type="text" id="lat" v-model="mun" class="w-full border-gray-300 rounded-md p-2" required>
                  </div>

                  <div class="mb-4">
                    <label for="employees" class="block text-gray-600 text-sm font-medium mb-2">Observaciones</label>
                    <input type="text" id="employees" v-model="observaciones" class="w-full border-gray-300 rounded-md p-2" required>
                  </div>
                </div>
              </div>

              <div class="text-center">
                <button type="submit" class="bg-cyan-700 text-white rounded-md px-4 py-2 hover:bg-cyan-800 focus:outline-none focus:ring focus:border-cyan-600">
                  Agregar
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

        <Agregar/>
        <Error/>
  |   <Footer/>

  </div>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Agregar from '@/components/agregar.vue'
import Error from '@/components/regerror.vue'

import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      direccion: '',
      selectedLada: '1',
      phoneNumber: '',
      horario: '',
      maps: '',
      act: '',
      mun: '',
      observaciones: '',
    };
  },
  methods: {
    async create() {
      try {
        // Obtener el token de localStorage
        const jwtToken = localStorage.getItem("jwtToken");

        // Verificar si el token está presente
        if (jwtToken) {
          const response = await axios.post('https://meddi-training.vercel.app/api/v1/hospital/create', {
            name: this.name,
            direccion: this.direccion,
            telefono: this.phoneNumber,
            horario: this.horario,
            urlGoogleMaps: this.maps,
            enabled: this.act,
            municipio: this.mun,
            observaciones: this.observaciones,
          }, {
            // Configurar los encabezados de la solicitud con el token
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          });

          // Emitir el evento de registro exitoso
          this.$root.$emit('agregarH');

          setTimeout(() => {
            this.$router.push({ name: 'Lista' });
          }, 2000);
        } else {
          // Manejar el caso en el que el token no esté presente (por ejemplo, redirigir a la página de inicio de sesión)
          this.$router.push({ name: 'Login' });
        }
      } catch (error) {
        this.$root.$emit('errorR');
        // Manejar el error de la solicitud POST si es necesario
        console.error('Error al registrar:', error.response.data);
      }
    },
  },
  components: {
    Navbar,
    Footer,
    Agregar,
    Error,
  },
}
</script>
