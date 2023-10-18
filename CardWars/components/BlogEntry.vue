<template>
    <div class="blog-entry">
      <div class="blog-info">
        <h2>{{ entry.title }}</h2>
        <p>{{ entry.description }}</p>
      </div>
      <button @click="deleteEntry">Eliminar</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      entry: Object
    },
    methods: {
      deleteEntry() {
        // Emitir un evento para enviar la información de la entrada a la página padre (BlogPage)
        this.$emit('delete-entry', this.entry);
      }
    }
  };
  </script>
  
  <style scoped>
  .blog-entry {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.9); /* Fondo semitransparente */
    border-radius: 10px; /* Bordes redondeados */
    width: 50%; /* Establece el ancho fijo al 50% */
    margin: auto; /* Centrar en la página */
    max-width: 800px; /* Establece el ancho máximo a 800px */
    margin-top: 10px; /* Margen superior de 10px */
    margin-bottom: 10px; /* Margen inferior de 10px */
  }
  
  .blog-info {
    color: #000; /* Color del texto */
  }
  
  .blog-info h2 {
  font-size: 24px; /* Tamaño del título */
  margin-bottom: 10px; /* Espacio entre título y descripción */
}

.blog-info h2::after {
  content: "";
  display: block;
  width: 100%; /* Ancho de la línea */
  border-bottom: 2px solid #db3e3e; /* Estilo y color de la línea */
  margin-top: 8px; /* Espacio entre el título y la línea */
}

.blog-info p {
  font-size: 18px; /* Tamaño de la descripción */
}

  button {
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #ff0000;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  
  