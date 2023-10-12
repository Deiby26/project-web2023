<template>
    <div class="meme-page">
      <h1>Meme Creator</h1>
      <MemeCreator />
      <nuxt-link to="/MyMemesPage" id="Ver-Mis-Memes">Ver Mis Memes</nuxt-link>
    </div>
  </template>
  
  <script>
  import MemeCreator from '@/components/MemeCreator.vue';
  
  export default {
    components: {
      MemeCreator
    }
  };
  </script>
  
  <style scoped>
  .meme-page {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  
  