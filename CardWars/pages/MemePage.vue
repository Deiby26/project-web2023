<template>
  <div class="meme-page">
    <h1 style="color: white;">Crear meme</h1>
    <MemeCreator />
  </div>
</template>
  
<style scoped>
.meme-page {
  text-align: center;
  margin-top: 50px;
}
</style>
  
<script>
import MemeCreator from '@/components/MemeCreator.vue';

export default {
  components: {
    MemeCreator
  }
}
</script>