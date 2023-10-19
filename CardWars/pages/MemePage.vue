<template>
  <div class="meme-page">
<<<<<<< HEAD
    <h1>Meme Creator</h1>
    <MemeCreator />
=======
    <h1 style="color: white;">Crear meme</h1>
    <MemeCreator />
    <nuxt-link to="/MyMemesPage" id="Ver-Mis-Memes" class="custom-link">Ver Mis Memes</nuxt-link>
>>>>>>> 982e43dc5188cf9d2d12f5eada28b5da3d638f53
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

<<<<<<< HEAD
.h1 {
  color: blueviolet;
=======
.custom-link {
  color: white;
>>>>>>> 982e43dc5188cf9d2d12f5eada28b5da3d638f53
}
</style>
  
  