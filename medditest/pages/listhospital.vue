<template>
    <div>
        
        <Navbar/>

        <main class="m-10 mb-38">
                <div class="mb-6 flex-nowrap">
                    <h1 class="text-cyan-800 font-extrabold text-4xl mb-2 ">
                        Listado de Hospitales
                    </h1>
                    <p class="mt-2 mb-2 font-sans font-light text-xl text-gray-500">Observe el listado de hospitales existentes en México</p>
                </div>
        
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-300 bg-slate-100 shadow-xl rounded-md">
                    <thead>
                        <tr>
                        <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">No. Del Hospital</th>
                        <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Nombre Del Hospital</th>
                        <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Estado</th>
                        <th class="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-500">1</td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-500">Clinica 34</td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-500">Hidalgo</td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                            <button class="text-blue-500">Información</button>
                        </td>
                        </tr>
                        <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-500">2</td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-500">Grey's Sloan Memorial</td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-500">Seattle Grace Mercy</td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                            <button class="text-blue-500">Información</button>
                        </td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">3</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">Hospital St Bonaventure</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">California</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                                <button class="text-blue-500">Información</button>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
        </main>
          
  
    | <Footer/>
  
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