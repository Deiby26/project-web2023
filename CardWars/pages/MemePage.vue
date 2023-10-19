<template>
  <div class="meme-page">
    <h1 style="color: white;">Crear meme</h1>
    <MemeCreator />
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
  
  