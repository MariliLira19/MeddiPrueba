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
                        <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-500">Clinica 34</td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-500">Hidalgo</td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-500">7751234356</td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                            <router-link
                                to="/info"
                                class="text-blue-500">
                                    Informaci&oacute;n
                            </router-link>
                        </td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">Grey's Sloan Memorial</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">Seattle Grace Mercy</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">55678912y</td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                            <router-link
                                to="/info"
                                class="text-blue-500">
                                    Informaci&oacute;n
                            </router-link>
                        </td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">Hospital St Bonaventure</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">California</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">45234235536</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                                <router-link
                                to="/info"
                                class="text-blue-500">
                                    Informaci&oacute;n
                            </router-link>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
        </main>
          
  
    | <Footer class="bottom-0"/>
  
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