<template>
  <div class="meme-page">
    <h1 style="color: white;">Crear meme</h1>
    <MemeCreator />
    <nuxt-link to="/MyMemesPage" id="Ver-Mis-Memes" class="custom-link">Ver Mis Memes</nuxt-link>
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

.custom-link {
  color: white;
}
</style>
  
  