<template>
  <div>
    <h1 id="Mis-Cartas">Mis Cartas</h1>

    <!-- Botón para abrir el diálogo -->
    <nuxt-link to="/CardPage" id="Crear-Nueva-Carta">Crear nueva carta</nuxt-link>

    <!-- Diálogo de edición -->
    <div class="edit-dialog" v-if="isEditDialogOpen">
      <h2>Editar Carta</h2>
      <textarea v-model="editedCardContent"></textarea>
      <input type="color" v-model="editedCardColor" />
      <select v-model="editedCardFont">
        <option v-for="font in availableFonts" :key="font" :value="font">{{ font }}</option>
      </select>
      <button @click="saveEditedCard">Guardar</button>
      <button @click="closeEditDialog">Cancelar</button>
    </div>

    <!-- Mostrar cartas aquí -->
    <div class="card-container">
      <div v-for="(card, index) in savedCards" :key="index" class="card"
        :style="{ backgroundColor: card.backgroundColor, fontFamily: card.font }">
        <div class="card-content">{{ card.content }}</div>
        <button @click="openEditDialog(index)">Editar</button>
        <button @click="deleteCard(index)">Eliminar</button>
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
    }
  }
};
</script>

<style scoped>
.card {
  width: 25%;
  display: block;
  padding: 20px;
  border: 1px solid #ccc;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

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
</style>
