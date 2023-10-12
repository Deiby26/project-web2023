<template>
    <div>
      <h1 id="Mis-Memes">Mis Memes</h1>
      <div v-for="(meme, index) in savedMemes" :key="index" class="meme-item" v-html="meme.memeContainer"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        savedMemes: []
      };
    },
    created() {
      if (typeof localStorage !== 'undefined') {
        this.savedMemes = JSON.parse(localStorage.getItem('savedMemes')) || [];
      }
    }
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
  }
  /* Add any additional styling for your memes here */
  </style>
  