<template>
    <div>
        
        <Navbar/>

        <main class="m-10 mb-38">
                <div class="mb-8 flex-nowrap">
                    <h1 class="text-cyan-800 font-extrabold text-4xl mb-2">
                        Información General
                      </h1>
                      <p class="mt-2 mb-2 font-sans font-light text-xl text-gray-500">
                        Observa la Información general del hospital seleccionado
                      </p>
                      <div class="text-left mt-5 mb-5">
                        <router-link
                          to="/lista"
                          class="bg-cyan-700 text-white rounded-md px-4 py-2 hover:bg-cyan-800 focus:outline-none focus:ring focus:border-cyan-600 "
                        >
                          Volver a Listado
                        </router-link>
                      </div>
                </div>
        
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-300 bg-slate-100 shadow-xl rounded-md">
                    <thead>
                        <tr>
                            <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Nombre Del Hospital
                            </th>
                            <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Dirección
                            </th>
                            <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Teléfono
                            </th>
                            <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Horario
                            </th>
                            <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Url Google
                            </th>
                            <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Activo
                            </th>
                            <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Estado
                            </th>
                            <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Observaciones
                            </th>
                            <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr v-for="hospital in hospitals" :key="hospital.id">
                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ hospital.name }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-500" >{{ hospital.direccion }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ hospital.telefono }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ hospital.horario }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ hospital.urlGoogleMaps }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ hospital.enabled }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ hospital.municipio }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ hospital.observaciones }}</td>
                            
                          </tr>
                        
                    </tbody>
                    </table>
                </div>

                <div  v-for="hospital in hospitals" :key="hospital.id" class="text-left mt-5 mb-5">
                    <router-link
                      :to="{ name: 'Update', query: { id: hospital._id } }"
                      class="bg-cyan-700 text-white rounded-md px-4 py-2 hover:bg-cyan-800 focus:outline-none focus:ring focus:border-cyan-600 "
                    >
                      Editar Datos
                    </router-link>
                    
                </div>
                
        </main>
          
        <Nodatos/>
    | <Footer class=" bottom-0"/>
  
    </div>
    
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  import Nodatos from '@/components/nodatos.vue';
  import axios from 'axios';
  
  export default {
    data() {
      return {
        hospitals: [], 
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
  
          // Verificar si el token está presente
          if (jwtToken) {
            // Configurar los encabezados de la solicitud con el token
            const headers = {
              Authorization: `Bearer ${jwtToken}`,
            };
  
            // Realizar la solicitud API
            const response = await axios.get('https://meddi-training.vercel.app/api/v1/hospital/get/all', { headers });
  
            // Obtener el ID del hospital desde la ruta
            const hospitalId = this.$route.query.id;
  
            // Filtrar la lista de hospitales para incluir solo el que tiene el ID correspondiente
            this.hospitals = response.data.data.data.filter(hospital => hospital._id === hospitalId);
  
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
      Nodatos,
    },
  };
  </script>