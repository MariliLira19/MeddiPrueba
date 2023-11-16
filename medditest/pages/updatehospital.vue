<template>
    <div>
         
  
        <Navbar/>
  
        <h1 class="text-3xl font-bold underline">
          Update
        </h1>
  
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