<template>
  <div>
    <NuxtLink to="/MemePage">CREAR MEME</NuxtLink>
    <h1 id="Mis-Memes">Mis Memes</h1>
    <div class="meme-container">
      <div v-for="(meme, index) in savedMemes" :key="index" class="meme-item">
        <div class="meme-content" :style="memeStyle(meme)">
          <img :src="meme.image" alt="Meme Image" class="meme-image" />
          <div class="card-title" :style="cardTitleStyle(meme)">
            {{ meme.title }}
          </div>
          <div class="card" :style="cardStyle(meme)">
            {{ meme.card.content }}
          </div>
        </div>
        <button @click="editMeme(index)">Editar</button>
        <button @click="deleteMeme(index)">Eliminar</button>
      </div>
    </div>

    <!-- Diálogo de edición -->
    <div v-if="isEditDialogOpen" class="edit-dialog">
      <h2>Editar Meme</h2>
      <div class="form-group">
        <label for="editedMemeTitle">Título:</label>
        <input type="text" id="editedMemeTitle" v-model="editedMemeTitle" maxlength="16"/>
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
          <option value="">Selecciona una carta</option>
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
      availableTemplates: ['Amarillo', 'Azul', 'Morado', 'Negro', 'Galaxia', 'Oro'],
    };
  },
  created() {
    if (typeof localStorage !== 'undefined') {
      this.savedMemes = JSON.parse(localStorage.getItem('savedMemes')) || [];
      // Actualiza savedCards con tus cartas guardadas
      this.savedCards = this.savedMemes.map(meme => meme.card);
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
    memeStyle(meme) {
      return {
        backgroundImage: `url('/cardimgs/${meme.template}.jpeg')`,
        backgroundSize: 'cover',
        width: '650px',
        height: '965.5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      };
    },
    cardTitleStyle(meme) {
      return {
        fontFamily: meme.card.font,
        color: meme.color,
        fontSize: '55px',
        fontWeight: 'bold',
        marginBottom: '10px',
        textAlign: 'center',
      };
    },
    cardStyle(meme) {
      return {
        backgroundColor: meme.card.backgroundColor,
        fontFamily: meme.card.font,
        width: '603px',
        height: '196px',
        padding: '20px',
        border: '1px solid #ccc',
        textAlign: 'center',
      };
    },
    saveEditedMeme() {
      if (this.editMemeIndex !== null) {
        // Actualiza las propiedades del meme
        this.savedMemes[this.editMemeIndex].title = this.editedMemeTitle;
        this.savedMemes[this.editMemeIndex].image = this.editedMemeImage;
        this.savedMemes[this.editMemeIndex].template = this.editedMemeTemplate;
        this.savedMemes[this.editMemeIndex].card = this.editedMemeCard;

        // Guarda en localStorage
        localStorage.setItem('savedMemes', JSON.stringify(this.savedMemes));

        // Cierra el diálogo de edición
        this.closeEditDialog();
      }
    },
    deleteMeme(index) {
      this.savedMemes.splice(index, 1);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('savedMemes', JSON.stringify(this.savedMemes));
      }
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

/* Estilos para el meme */
.meme-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.meme-image {
  width: 100%;
  max-width: 526px;
  height: 525px;
  position: relative;
  top: 79px;
  left: -1px;
}

.card-title {
  font-size: 24px;
  font-weight: bold;
  position: relative;
  top: -585px;
  left: -30px;
}

.card {
  position: relative;
  top: 50px;
  left: -2px;
}
/* Resto del estilo... */
</style>
