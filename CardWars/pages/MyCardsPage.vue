<template>
  <div>
    <h1 id="Mis-Cartas">Mis Cartas</h1>

    <!-- Botón para abrir el diálogo -->
    <nuxt-link to="/CardPage" id="Crear-Nueva-Carta">Crear nueva carta</nuxt-link>

    <!-- Diálogo de edición -->
    <div class="edit-dialog" v-if="isEditDialogOpen">
      <h2>Editar Carta</h2>
      <div class="form-group">
        <label for="editedCardContent">Contenido:</label>
        <textarea id="editedCardContent" v-model="editedCardContent"></textarea>
      </div>
      <div class="form-group">
        <label for="editedCardColor">Color:</label>
        <input type="color" id="editedCardColor" class="color-input" v-model="editedCardColor" />
      </div>
      <div class="form-group">
        <label for="editedCardFont">Fuente:</label>
        <select id="editedCardFont" v-model="editedCardFont">
          <option v-for="font in availableFonts" :key="font" :value="font">{{ font }}</option>
        </select>
      </div>
      <div class="buttons">
        <button @click="saveEditedCard">Guardar</button>
        <button @click="closeEditDialog">Cancelar</button>
      </div>
    </div>

    <!-- Mostrar cartas aquí -->
    <div class="card-container">
      <div v-for="(card, index) in savedCards" :key="index" class="card-container-single">
        <div class="card" :style="{ backgroundColor: card.backgroundColor, fontFamily: card.font }">
          <div class="card-content">{{ card.content }}</div>
          <a @click="toggleCardButtons(index)">
            <img src="@/assets/icons/more-info.png" alt="More Info" class="more-info-icon" />
          </a>
        </div>
        <div v-if="card.showButtons" class="card-button-container">
          <button class="edit-button" @click="openEditDialog(index)">Editar</button>
          <button class="delete-button" @click="deleteCard(index)">Eliminar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      savedCards: [],
      isEditDialogOpen: false,
      editedCardContent: '',
      editedCardColor: '',
      editedCardFont: '',
      editedCardIndex: null,
      availableFonts: ['Arial, sans-serif', 'Times New Roman', 'Courier New']
    };
  },
  created() {
    if (typeof localStorage !== 'undefined') {
      this.savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];
    }
  },
  methods: {
    deleteCard(index) {
      this.savedCards.splice(index, 1);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('savedCards', JSON.stringify(this.savedCards));
      }
    },
    openEditDialog(index) {
      this.isEditDialogOpen = true;
      this.editedCardContent = this.savedCards[index].content;
      this.editedCardColor = this.savedCards[index].backgroundColor || '#ffffff';
      this.editedCardFont = this.savedCards[index].font || 'Arial, sans-serif';
      this.editedCardIndex = index;
    },
    closeEditDialog() {
      this.isEditDialogOpen = false;
      this.editedCardContent = '';
      this.editedCardColor = '';
      this.editedCardFont = '';
      this.editedCardIndex = null;
    },
    saveEditedCard() {
      if (this.editedCardIndex !== null) {
        this.savedCards[this.editedCardIndex].content = this.editedCardContent;
        this.savedCards[this.editedCardIndex].backgroundColor = this.editedCardColor;
        this.savedCards[this.editedCardIndex].font = this.editedCardFont;
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('savedCards', JSON.stringify(this.savedCards));
        }
        this.closeEditDialog();
      }
    },
    toggleCardButtons(index) {
      this.savedCards[index].showButtons = !this.savedCards[index].showButtons;
    },
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  background-color: white;
  width: 100px;
  height: 30px;
}

.card-content {
  word-break: break-all;
}

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

#Mis-Cartas {
  font-family: sans-serif;
  color: white;
  text-align: center;
  margin-top: 130px;
}

#Crear-Nueva-Carta {
  font-family: sans-serif;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.card-container-single {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  /* Ajusta según necesites */
}

.card {
  width: 300px;
  /* Ancho fijo de la carta */
  padding: 20px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-buttons {
  margin-left: 2%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.card-buttons button {
  margin-top: 1px;
  /* Espacio entre los botones */
  width: 100px;
  /* Ancho fijo de los botones */
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
}

textarea,
input,
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

.color-input {
  height: 40px;
  /* Ajusta la altura según tus preferencias */
}

.buttons button {
  margin-right: 10px;
}

.card-button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-button-container button.edit-button,
.card-button-container button.delete-button {
  margin-left: 20px;
  margin-left: 2px;
  border: none;
  background-color: #4caf50; 
  color: #fff; 
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.3s;
  border-radius: 4px;
  outline: none;
}

.card-button-container button.delete-button {
  background-color: #f44336; /* Color rojo */
}

.card-button-container button.edit-button:hover,
.card-button-container button.delete-button:hover {
  background-color: #7e9e7f; /* Color verde más oscuro */
  transform: scale(1.05); /* Efecto de escala al hacer hover */
}


.more-info-icon {
  cursor: pointer;
  width: 50px; /* Tamaño personalizado */
  height: 50px; /* Tamaño personalizado */
  transition: transform 0.3s;
  
}

.more-info-icon:hover {
  transform: scale(1.1); /* Efecto de escala al hacer hover */
}
</style>