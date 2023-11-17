<template>
  <div>
       

      <Navbar/>

      <main class="mt-20 mb-20">

        <div class=" flex items-center justify-center">
          <div class="bg-gray-100 p-8 rounded shadow-md w-full sm:w-[40rem]">
            <h1 class="text-2xl font-bold mb-6 text-center">Actualiza información</h1>

            <form @submit.prevent="login">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Columna Izquierda -->
                <div>
                  <div class="mb-4">
                    <label for="id" class="block text-gray-600 text-sm font-medium mb-2">ID</label>
                    <input type="text" id="id" class="w-full border-gray-300 rounded-md p-2" required>
                  </div>

                  <div class="mb-4">
                    <label for="name" class="block text-gray-600 text-sm font-medium mb-2">Nombre</label>
                    <input type="text" id="name" class="w-full border-gray-300 rounded-md p-2" required>
                  </div>

                  <div class="mb-4">
                    <label for="state" class="block text-gray-600 text-sm font-medium mb-2">Estado</label>
                    <input type="text" id="state" class="w-full border-gray-300 rounded-md p-2" required>
                  </div>
                </div>

                <!-- Columna Derecha -->
                <div>
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
                    <label for="email" class="block text-gray-600 text-sm font-medium mb-2">Correo Electrónico</label>
                    <input type="email" id="email" class="w-full border-gray-300 rounded-md p-2" required>
                  </div>

                  <div class="mb-4">
                    <label for="employees" class="block text-gray-600 text-sm font-medium mb-2">No. Empleados</label>
                    <input type="text" id="employees" class="w-full border-gray-300 rounded-md p-2" required>
                  </div>
                </div>
              </div>

              <div class="text-center">
                <button type="submit" class="bg-cyan-700 text-white rounded-md px-4 py-2 hover:bg-cyan-800 focus:outline-none focus:ring focus:border-cyan-600">
                  Actualizar
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

  |   <Footer/>

  </div>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  data() {
      return {
      selectedLada: '1', // Valor predeterminado de la lada
      phoneNumber: '',
      };
  },
  components: {
    Navbar,
    Footer,
  },
}
</script>
