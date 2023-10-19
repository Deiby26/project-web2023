<template>
  <div class="entry-creator">
    <h2>Nueva Entrada de Blog</h2>
    <form @submit.prevent="createEntry">
      <div class="form-group">
        <label for="title">Título:</label>
        <input v-model="title" type="text" id="title" required class="input-field" />
      </div>
      <div class="form-group">
        <label for="description">Descripción:</label>
        <textarea v-model="description" id="description" required class="input-field textarea"></textarea>
      </div>
<<<<<<< HEAD
      <div class="form-group">
        <label for="selectedMeme">Selecciona un Meme:</label>
      <select v-model="selectedMeme" id="selectedMeme" required class="input-field">
        <option v-for="meme in savedMemes" :key="meme.id" :value="meme.id">{{ meme.title }}</option>
      </select>
      </div>
      <div class="button-container">
      <button type="submit">Crear Entrada</button>
      <button type="button" @click="cancel">Cancelar</button>
    </div>
    </form>
  </div>
</template>
  
=======
      <button type="submit">Crear Entrada</button>
    </form>
  </div>
</template>

>>>>>>> 982e43dc5188cf9d2d12f5eada28b5da3d638f53
<script>
export default {
  data() {
    return {
      title: '',
<<<<<<< HEAD
      description: '',
      selectedMeme: '', // Agregamos el dato seleccionado para el meme
    };
  },
  computed: {
    savedMemes() {
      // Obtén los memes guardados del localStorage (si están disponibles)
      return JSON.parse(localStorage.getItem('savedMemes')) || [];
    },
  },
  methods: {
    createEntry() {
      const entry = {
        title: this.title,
        description: this.description,
        memeId: this.selectedMeme, // Agregamos el ID del meme seleccionado
      };

      this.$emit('new-entry', entry);

      this.title = '';
      this.description = '';
      this.selectedMeme = ''; // Limpiamos la selección del meme después de crear la entrada
    },
    cancel() {
    this.$emit('cancel'); // Emite un evento para notificar que se ha cancelado la creación de entrada
    this.title = '';
    this.description = '';
    this.selectedMeme = ''; // Limpia los campos después de cancelar
  }
  }
};
</script>
  
=======
      description: ''
    };
  },
  methods: {
      createEntry() {
  const entry = {
    title: this.title,
    description: this.description
  };

  this.$emit('new-entry', entry);

  this.title = '';
  this.description = '';
}
  }
};
</script>

>>>>>>> 982e43dc5188cf9d2d12f5eada28b5da3d638f53
<style scoped>
.form-group {
  margin-bottom: 10px;
  width: 100%;
}

.form-group label {
  color: white;
}

.input-field,
.textarea {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.textarea {
  height: 150px;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #0080ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #005d9f;
}

.entry-creator {
  max-width: 500px;
  margin: auto;
  text-align: center;
  color: white;
<<<<<<< HEAD
  margin-top: 15px;
}

.form-group {
  margin-bottom: 10px;
  display: flex;
  /* Añade display flex */
  justify-content: center;
  /* Centra horizontalmente los elementos */
}

.form-group label {
  color: white;
  flex: 1;
  /* El label toma el espacio disponible */
  margin-top: 20px;
  /* Agrega un margen en la parte inferior del label */
=======
  margin-top: 50px;
}

.form-group {
margin-bottom: 10px;
display: flex; 
justify-content: center; 
}

.form-group label {
color: white;
flex: 1; 
margin-top: 20px; 
>>>>>>> 982e43dc5188cf9d2d12f5eada28b5da3d638f53
}

.input-field,
.textarea {
<<<<<<< HEAD
  flex: 2;
  /* El campo de entrada toma más espacio */
}

.button-container {
  display: flex;
  justify-content: flex-end; /* Alinea los elementos al final del contenedor (derecha) */
  margin-top: 20px; /* Espacio entre los botones y el formulario */
}

.button-container button {
  margin-left: 10px; /* Espacio entre los botones */
}
</style>
  
=======
flex: 2; 
}

.button-container {
display: flex;
justify-content: space-around; 
}
</style>
>>>>>>> 982e43dc5188cf9d2d12f5eada28b5da3d638f53
