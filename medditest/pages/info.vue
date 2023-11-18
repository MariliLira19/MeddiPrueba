<template>
    <div>
      <Navbar />
  
      <main class="m-10 mb-38">
        <div class="mb-6 flex-nowrap">
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
                <!-- Agrega las columnas según la información detallada que desees mostrar -->
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
                <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Código Estado
                </th>
                <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Estado
                </th>
                <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Observaciones
                </th>
                <!-- Agrega más columnas según tus necesidades -->
              </tr>
            </thead>
            <tbody>
              <tr>
                <!-- Utiliza las propiedades del hospitalDetail para mostrar la información -->
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ hospitalDetail.name }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ hospitalDetail.dirreccion }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ hospitalDetail.telefono }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ hospitalDetail.horario }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ hospitalDetail.urlGoogleMaps }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ hospitalDetail.estadoCode }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ hospitalDetail.municipio }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ hospitalDetail.observaciones }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      
      <Nodatos/>
      <Footer class="fixed bottom-0" />
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue";
  import Footer from "@/components/Footer.vue";
    import Nodatos from '@/components/nodatos.vue'
  import axios from "axios";
  
  export default {
    components: {
      Navbar,
      Footer,
    },
    data() {
      return {
        hospitalDetail: {}, // Almacena la información detallada del hospital
      };
    },
    mounted() {
      // Llamar a la función que realiza la solicitud API al montar el componente
      this.getHospitalDetail();
    },
    methods: {
      async getHospitalDetail() {
        try {
          // Obtener el token de localStorage
          const jwtToken = localStorage.getItem("jwtToken");
  
          console.log(jwtToken); // Agregar esta línea para verificar el token
  
          // Verificar si el token está presente
          if (jwtToken) {
            // Obtener el ID del hospital de los parámetros de la ruta
            const hospitalId = this.$route.params.id;
  
            // Configurar los encabezados de la solicitud con el token
            const headers = {
              Authorization: `Bearer ${jwtToken}`,
            };
  
            // Realizar la solicitud API para obtener la información detallada del hospital
            const response = await axios.get(
              `https://meddi-training.vercel.app/api/v1/hospital/${hospitalId}`,
              { headers }
            );
  
            // Almacenar la información en la propiedad hospitalDetail del componente
            this.hospitalDetail = response.data.data.data;
          } else {
            // Manejar el caso en el que el token no esté presente (por ejemplo, redirigir a la página de inicio de sesión)
            this.$router.push({ name: "Login" });
          }
        } catch (error) {
          // Manejar errores de la solicitud API
          this.$root.$emit('noDatos');
          console.error("Error al obtener información del hospital:", error);
        }
      },
    },
  };
  </script>
  