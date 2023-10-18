<template>
    <div>
      <h2>Nueva Entrada de Blog</h2>
      <form @submit.prevent="createEntry">
        <div class="form-group">
          <label for="title">Título:</label>
          <input v-model="title" type="text" id="title" required class="input-field" />
        </div>
        <div class="form-group">
          <label for="description">Descripción:</label>
          <textarea v-model="description" id="description" required class="input-field"></textarea>
        </div>
        <button type="submit" @click="createEntry">Crear Entrada</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        description: ''
      };
    },
    methods: {
    createEntry() {
      this.$emit('new-entry', {
        title: this.title,
        description: this.description
      });
      this.title = '';
      this.description = '';
    }
  }
  };
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 10px;
    color: #ffffff; /* Cambia el color del texto a negro */
  }
  
  .input-field {
    color: #000000; /* Cambia el color del texto a negro */
  }
  </style>
  