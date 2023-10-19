<template>
  <div>
    <h1 id="Mis-Memes">Mis Memes</h1>
    <div class="meme-container">
      <div v-for="(meme, index) in savedMemes" :key="index" class="meme-item">

        <div :id="'memeContent_' + index" class="meme-content" :style="memeStyle(meme)">
          <img :src="meme.image" alt="Meme Image" class="meme-image" />
          <div class="card-title" :style="cardTitleStyle(meme)">
            {{ meme.title }}
          </div>
          <div class="card" :style="cardStyle(meme)">
            {{ meme.card.content }}
          </div>
        </div>
        <div class="button-container">
          <button @click="editMeme(index)" class="edit-button">Editar</button>
          <button @click="deleteMeme(index)" class="delete-button">Eliminar</button>
          <button @click="downloadMeme(index)" class="download-button">Descargar</button>
        </div>
      </div>
    </div>

    <div v-if="isEditDialogOpen" class="edit-dialog">
      <h2>Editar Meme</h2>
      <div class="form-group">
        <label for="editedMemeTitle">Título:</label>
        <input type="text" id="editedMemeTitle" v-model="editedMemeTitle" maxlength="16" />
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
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
    if (process.client) {
      this.savedMemes = JSON.parse(localStorage.getItem('savedMemes')) || [];
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
      if (process.client) {
        if (this.editMemeIndex !== null) {
          this.savedMemes[this.editMemeIndex].title = this.editedMemeTitle;
          this.savedMemes[this.editMemeIndex].image = this.editedMemeImage;
          this.savedMemes[this.editMemeIndex].template = this.editedMemeTemplate;
          this.savedMemes[this.editMemeIndex].card = this.editedMemeCard;
          localStorage.setItem('savedMemes', JSON.stringify(this.savedMemes));
          this.closeEditDialog();
        }
      }
    },
    deleteMeme(index) {
      this.savedMemes.splice(index, 1);
      if (process.client) {
        localStorage.setItem('savedMemes', JSON.stringify(this.savedMemes));
      }
    },
    downloadMeme(index) {
      const content = document.getElementById('memeContent_' + index);

      html2canvas(content).then(canvas => {
        canvas.toBlob(blob => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'meme.png';
          link.click();
          URL.revokeObjectURL(url);
        });
      });
    }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
}


.button-container {
  margin-top: 10px;
  display: flex;
  align-items: center;
}


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

.download-button,
.edit-button,
.delete-button {
  margin: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  height: 30px;
  width: 100px;
}

.button-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.edit-button {
  background-color: #4caf50;
  color: #fff;
}

.delete-button {
  background-color: #f44336;
  color: #fff;
}

.download-button {
  background-color: #fff706;
  color: #fff;
}

.edit-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.edit-dialog h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.buttons {
  margin-top: 30px;
}

.buttons button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.buttons button:first-child {
  background-color: #4caf50;
  color: #ffffff;
}

.buttons button:last-child {
  background-color: #f44336;
  color: #ffffff;
}
</style>
