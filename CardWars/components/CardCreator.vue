<template>
    <center>
      <div>
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
        <br>
        <br>
        <button @click="createCard">Create Card</button>
        <br>
        <br>
        <div v-if="cardCreated" class="card" :style="cardStyle">{{ cardContent }}</div>
        <br>
        <br>
        <button @click="saveCard">Save Card</button>
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
  .color-picker {
    margin-bottom: 20px;
  }
  
  input[type="color"] {
    width: 50px;
    height: 35px;
    border-color: antiquewhite;
    background-color: white;
    outline: none;
    padding: 0;
    margin: 0;
    cursor: grab;
  }
  .font-picker {
    margin-bottom: 20px;
  }
  
  .card {
    display: inline-block;
    padding: 20px;
    border: 1px solid #ccc;
    margin-top: 20px;
  }
  
  textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    margin-bottom: 20px;
  }

  select {
    width: 20%;
    height: 30px;
    border: 1px solid #6cb2c6;
    border-radius: 5%;
    padding: 5px;
    cursor: grab;
  }

  option {
    background-color: white;
    color: black;
  }
  option:hover {
    background-color: #e2e2e2;
  }

  button{
    background-color: white;
    width: 20%;
    height: 30px;
  }
  </style>
  
  