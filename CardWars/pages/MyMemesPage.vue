<template>
  <div>
    <NuxtLink to="/MemePage">CREAR MEME</NuxtLink>
    <h1 id="Mis-Memes">Mis Memes</h1>
    <div class="meme-container">
      <div v-for="(meme, index) in savedMemes" :key="index" class="meme-item">
        <div v-html="meme.memeContainer"></div>
        <button @click="deleteMeme(index)">Eliminar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      savedMemes: [],
    };
  },
  created() {
    if (typeof localStorage !== 'undefined') {
      this.savedMemes =
        JSON.parse(localStorage.getItem('savedMemes')) || [];
    }
  },
  methods: {
    deleteMeme(index) {
      this.savedMemes.splice(index, 1);
      localStorage.setItem('savedMemes', JSON.stringify(this.savedMemes));
    },
  },
};
</script>

<style scoped>
#Mis-Memes {
  font-family: sans-serif;
  color: white;
  text-align: center;
  margin-top: 30px;
}

.meme-item {
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
}

/* Add any additional styling for your memes here */
</style>
