<template>
  <div>
    <Navbar />

    <div class="h-[73vh] flex items-center justify-center">
      <div class="bg-gray-100 p-8 rounded shadow-md w-full sm:w-96">
        <h1 class="text-2xl font-bold mb-6">Inicio de Sesión</h1>

        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="block text-gray-600 text-sm font-medium mb-2">Usuario</label>
            <input type="email" id="email" v-model="email" class="w-full border-gray-300 rounded-md p-2" placeholder="example@gmail.com" required>
          </div>

          <div class="mb-4">
            <label for="password" class="block text-gray-600 text-sm font-medium mb-2">Contraseña</label>
            <input type="password" id="password" v-model="password" class="w-full border-gray-300 rounded-md p-2" placeholder="*****" required>
          </div>

          <div class="text-center">
            <button type="submit" class="bg-cyan-700 text-white rounded-md px-4 py-2 hover:bg-cyan-800 focus:outline-none focus:ring focus:border-cyan-600 ">
              Iniciar Sesión
            </button>
          </div>
        </form>

        <div class="mt-4 text-center">
          <p class="text-gray-600">¿No tienes una cuenta? <router-link to="/registro" class="text-cyan-700 hover:underline">Regístrate aquí</router-link></p>
        </div>
      </div>
    </div>

    <Correcto/>
    <Incorrecto />
    <Footer class="bottom-0" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Incorrecto from '@/components/incorrecto.vue'
import Correcto from '@/components/correcto.vue'
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('https://meddi-training.vercel.app/api/v1/user/login', {
          username: this.email, 
          password: this.password,
        });

        console.log(response.data)
        // Almacenar el token en localStorage
        localStorage.setItem('jwtToken', response.data.data.jwtToken);
        console.log('Token:',response.data.data.jwtToken); // Agregar esta línea para verificar el token

        // muestra popup exitosos
        this.$root.$emit('logeoExitoso');

        // Redireccionar a la página de destino después de iniciar sesión
        setTimeout(() => {
          this.$router.push({ name: 'Lista' });
        }, 2000);

      } catch (error) {
        // Manejar el error de inicio de sesión
        this.$root.$emit('errorS');
      }
    },
  },
  components: {
    Navbar,
    Footer,
    Incorrecto,
  },
};
</script>