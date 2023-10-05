<template>
    <div>
      <h1>Editar Tarjeta</h1>
      <div class="card" :style="{ backgroundColor: card.backgroundColor, fontFamily: card.font }">
        {{ card.content }}
      </div>
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      card: {},
    };
  },
  created() {
    const index = parseInt(this.$route.params.index);
    const savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];
    this.card = savedCards[index] || {}; // Si el índice no existe, asigna un objeto vacío
  },
};
</script>
  
  <style scoped>
  .card {
    display: inline-block;
    padding: 20px;
    border: 1px solid #ccc;
    margin-top: 20px;
    margin-right: 10px;
  }
  </style>
  
  
  