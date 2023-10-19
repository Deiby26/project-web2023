<template>
  <center>
    <div class="card-creator">
      <div class="color-picker">
        <h3>Select Color:</h3>
        <input type="color" v-model="selectedColor" />
      </div>

      <div class="font-picker">
        <h3>Select Font:</h3>
        <select v-model="selectedFont">
          <option v-for="font in availableFonts" :key="font" :value="font">{{ font }}</option>
        </select>
      </div>

      <textarea v-model="cardContent" placeholder="Enter your card content"></textarea>

      <button @click="createCard" class="create-button">Create Card</button>

      <div v-if="cardCreated" class="card" :style="cardStyle">{{ cardContent }}</div>

      <button @click="saveCard" class="save-button">Save Card</button>
    </div>
  </center>
</template>

<script>
export default {
  data() {
    return {
      selectedColor: '#ffffff',
      selectedFont: 'Arial, sans-serif',
      cardContent: '',
      cardCreated: false,
      availableFonts: ['Arial, sans-serif', 'Times New Roman', 'Courier New']
    };
  },
  computed: {
    cardStyle() {
      return {
        backgroundColor: this.selectedColor,
        fontFamily: this.selectedFont,
        padding: '20px',
        border: '1px solid #ccc'
      };
    }
  },
  methods: {
    createCard() {
      this.cardCreated = true;
    },

    saveCard() {
      const cardData = {
        backgroundColor: this.selectedColor,
        font: this.selectedFont,
        content: this.cardContent
      };

      const savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];
      savedCards.push(cardData);
      localStorage.setItem('savedCards', JSON.stringify(savedCards));

      alert('La carta ha sido guardada correctamente.');
    }
  }
};
</script>

<style scoped>
.card-creator {
  max-width: 400px;
  padding: 20px;
  border: 1px solid #cccccc;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 20px;
}

.color-picker,
.font-picker,
.card-content,
.card-buttons {
  margin-bottom: 20px;
}

input[type="color"],
select,
textarea,
button {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  margin-bottom: 10px;
}

input[type="color"]{
    height: 35px;
    padding: 0;
    cursor: grab;
}

button {
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #617562;
}

h3 {
  font-size: larger;
  color: hsl(0, 0%, 0%);
}

.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background-repeat: no-repeat;
  background-size: cover;
}

.col-2 {
  flex-basis: 50%;
  flex-grow: 1;
  padding: 50px 80px;
}


.create-button {
  background-color: #28a745; 
}

.save-button {
  background-color: #007bff;
}

form button:hover {
  transform: translateY(-5px);
}
</style>
