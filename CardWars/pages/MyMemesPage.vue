<template>
  <div>
    <h1 id="Mis-Memes">Mis Memes</h1>
    <div v-for="(meme, index) in savedMemes" :key="index" class="meme-item">
      <div v-html="meme.memeContainer"></div>
      <button @click="editMeme(index)">Editar</button>
      <button @click="deleteMeme(index)">Eliminar</button>

      <!-- Diálogo de edición -->
      <div v-if="isEditDialogOpen && editMemeIndex === index" class="edit-dialog">
        <h2>Editar Meme</h2>
        <div class="form-group">
          <label for="editedMemeTitle">Título:</label>
          <input type="text" id="editedMemeTitle" v-model="editedMemeTitle" />
        </div>
        <div class="form-group">
          <label for="editedMemeImage">Imagen:</label>
          <input type="file" accept="image/*" @change="handleImageUpload" id="editedMemeImage" />
        </div>
        <div class="form-group">
          <label for="editedMemeTemplate">Plantilla:</label>
          <select v-model="editedMemeTemplate" class="template-selector">
            <option v-for="template in availableTemplates" :key="template" :value="template">
              {{ template }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="editedMemeCard">Carta asociada:</label>
          <select v-model="editedMemeCard" class="template-selector">
            <option v-for="(card, index) in savedCards" :key="index" :value="card">
              Carta {{ index + 1 }}
            </option>
          </select>
        </div>
        <div class="buttons">
          <button @click="saveEditedMeme">Guardar</button>
          <button @click="closeEditDialog">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      savedMemes: [],
      isEditDialogOpen: false,
      editMemeIndex: null,
      editedMemeTitle: '',
      editedMemeImage: '',
      editedMemeTemplate: null,
      editedMemeCard: null,
      availableTemplates: ['Amarillo', 'Azul', 'Morado', 'Negro', 'Galaxia', 'Oro']
    };
  },
  created() {
    if (typeof localStorage !== 'undefined') {
      this.savedMemes = JSON.parse(localStorage.getItem('savedMemes')) || [];
    }
  },
  methods: {
    editMeme(index) {
      this.isEditDialogOpen = true;
      this.editMemeIndex = index;
      this.editedMemeTitle = this.savedMemes[index].title;
      this.editedMemeImage = this.savedMemes[index].image;
      this.editedMemeTemplate = this.savedMemes[index].template;
      this.editedMemeCard = this.savedMemes[index].card;
    },
    closeEditDialog() {
      this.isEditDialogOpen = false;
      this.editMemeIndex = null;
      this.editedMemeTitle = '';
      this.editedMemeImage = '';
      this.editedMemeTemplate = null;
      this.editedMemeCard = null;
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.editedMemeImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    saveEditedMeme() {
      if (this.editMemeIndex !== null) {
        // Update the meme properties
        this.savedMemes[this.editMemeIndex].title = this.editedMemeTitle;
        this.savedMemes[this.editMemeIndex].image = this.editedMemeImage;
        this.savedMemes[this.editMemeIndex].template = this.editedMemeTemplate;
        this.savedMemes[this.editMemeIndex].card = this.editedMemeCard;

        // Save to localStorage
        localStorage.setItem('savedMemes', JSON.stringify(this.savedMemes));

        // Close the edit dialog
        this.closeEditDialog();
      }
    },
    deleteMeme(index) {
      this.savedMemes.splice(index, 1);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('savedMemes', JSON.stringify(this.savedMemes));
      }
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

/* Estilos para el diálogo de edición */
.edit-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 9999;
}
</style>
