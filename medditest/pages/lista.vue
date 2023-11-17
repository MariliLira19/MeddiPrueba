<template>
    <div>
        
        <Navbar/>

        <main class="m-10 mb-38">
                <div class="mb-8 flex-nowrap">
                    <h1 class="text-cyan-800 font-extrabold text-4xl mb-2 ">
                        Listado de Hospitales
                    </h1>
                    <p class="mt-3 mb-3 font-sans font-light text-xl text-gray-500">Observe el listado de hospitales existentes en México</p>
                    <div class="text-left mt-5 mb-5">            
                        <router-link
                          to="/create"
                          class="bg-cyan-700 text-white rounded-md px-4 py-2 hover:bg-cyan-800 focus:outline-none focus:ring focus:border-cyan-600 ">
                          Añadir Hospital
                        </router-link>
                      </div>
                </div>
        
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-300 bg-slate-100 shadow-xl rounded-md">
                    <thead>
                        <tr>
                            <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Nombre Del Hospital</th>
                        <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Dirrección</th>
                        <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Teléfono</th>
                        <th class="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr v-for="hospital in hospitals" :key="hospital.id">
                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ hospital.name }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ hospital.address }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ hospital.phone }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                              <router-link :to="`/info/${hospital.id}`" class="text-blue-500">
                                Información
                              </router-link>
                            </td>
                          </tr>
                        
                    </tbody>
                    </table>
                </div>
        </main>
          
        <Nodatos/>
    | <Footer class="bottom-0"/>
  
    </div>
    
  </template>
  
  <script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Nodatos from '@/components/nodatos.vue'
import axios from 'axios';

export default {
  data() {
    return {
      hospitals: [], // Almacena los hospitales obtenidos de la API
    };
  },
  mounted() {
    // Llamar a la función que realiza la solicitud API al montar el componente
    this.getHospitalData();
  },
  methods: {
    async getHospitalData() {
      try {
        // Obtener el token de localStorage
        const jwtToken = localStorage.getItem('jwtToken');

        console.log(jwtToken); // Agregar esta línea para verificar el token

        // Verificar si el token está presente
        if (jwtToken) {
          // Configurar los encabezados de la solicitud con el token
          const headers = {
            Authorization: `Bearer ${jwtToken}`,
          };

          // Realizar la solicitud API
          const response = await axios.get('https://meddi-training.vercel.app/api/v1/hospital/get/all', { headers });

          // Almacenar los datos en la propiedad hospitals del componente
          this.hospitals = response.data;

        } else {
          // Manejar el caso en el que el token no esté presente (por ejemplo, redirigir a la página de inicio de sesión)
          this.$router.push({ name: 'Login' });
        }
      } catch (error) {
        // Manejar errores de la solicitud API
        this.$root.$emit('noDatos');
        console.error('Error al obtener datos del hospital:', error);
      }
    },
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>