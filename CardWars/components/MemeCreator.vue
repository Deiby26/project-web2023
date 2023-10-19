<template>
<<<<<<< HEAD
  <div class="template-container">
    <div class="meme-creator">
      <div class="select-container">
        <select v-model="selectedTemplate" class="template-selector">
          <option v-for="template in availableTemplates" :key="template" :value="template">
            {{ template }}
          </option>
        </select>
        <select v-model="selectedCard" class="template-selector">
          <option v-for="(card, index) in savedCards" :key="index" :value="card">
            Carta {{ index + 1 }}
          </option>
        </select>
      </div>
      <div class="title-input-container">
        <input v-model="memeTitle" type="text" placeholder="Enter meme title" class="template-selector" maxlength="16">
        <input v-model="titleColor" type="color" class="color-input title-color-input">
      </div>
      <input type="file" accept="image/*" @change="handleImageUpload" class="template-selector" />
      <div class="button-container">
        <button @click="createMeme" class="create-button">Crear Meme</button>
        <button @click="saveMeme" class="create-button">Guardar Meme</button>
      </div>
    </div>
    <div v-if="memeCreated" class="meme-container" :style="memeStyle">
      <div class="meme-content">
        <img :src="memeImage" alt="Meme Image" class="meme-image" />
        <div class="card-title" :style="{
          fontFamily: selectedCard.font,
          color: titleColor
        }">
          {{ memeTitle }}
        </div>
        <div class="card" :style="cardStyle">
          {{ selectedCard.content }}
=======
  <center>
    <div>
      <h1 id="Mis-Memes">Mis Memes</h1>

      <select v-model="selectedTemplate" class="template-selector">
        <option v-for="template in availableTemplates" :key="template" :value="template">
          {{ template }}
        </option>
      </select>

      <select v-model="selectedCard" class="template-selector">
        <option v-for="(card, index) in savedCards" :key="index" :value="card">
          Carta {{ index + 1 }}
        </option>
      </select>

      <div class="title-input-container">
        <input v-model="memeTitle" type="text" placeholder="Ingresar titulo del meme" class="template-selector"
          maxlength="50">

        <input v-model="titleColor" type="color" class="color-input title-color-input">
      </div>

      <input type="file" accept="image/*" @change="handleImageUpload"
        class="template-selector with-white-border-and-background" />

      <button @click="createMeme" class="create-button">Crear meme</button>

      <button @click="saveMeme" class="create-button">Guardar meme</button>

      <div v-if="memeCreated" class="meme-container" :style="memeStyle">
        <div class="meme-content">
          <img :src="memeImage" alt="Meme Image" class="meme-image" />
          <div class="card-title" :style="{
            fontFamily: selectedCard.font,
            color: titleColor
          }">
            {{ memeTitle }}
          </div>
          <div class="card" :style="cardStyle">
            {{ selectedCard.content }}
          </div>
>>>>>>> 982e43dc5188cf9d2d12f5eada28b5da3d638f53
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTemplate: null,
      selectedCard: null,
      memeCreated: false,
      savedCards: JSON.parse(localStorage.getItem('savedCards')) || [],
      availableTemplates: ['Amarillo', 'Azul', 'Morado', 'Negro', 'Galaxia', 'Oro'],
      memeTitle: '',
      titleColor: '#000000',
      memeImage: ''
    };
  },
  computed: {
    memeStyle() {
      return {
        backgroundImage: `url(/cardimgs/${this.selectedTemplate}.jpeg)`,
        backgroundSize: 'cover',
        width: '650px',
        height: '965.5px',
      };
    },
    cardStyle() {
      return {
        backgroundColor: this.selectedCard.backgroundColor,
        fontFamily: this.selectedCard.font,
        width: '603px',
        height: '196px',
        padding: '20px',
        border: '1px solid #ccc',
        position: 'relative',
        top: '732px',
        left: '0px',
        margin: 'auto',
      };
    }
  },
  methods: {
    createMeme() {
      if (this.selectedTemplate && this.selectedCard) {
        this.memeCreated = true;
      }
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.memeImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    saveMeme() {
      const memeContainer = document.querySelector('.meme-container').outerHTML;
      const meme = {
        template: this.selectedTemplate,
        card: this.selectedCard,
        title: this.memeTitle,
        color: this.titleColor,
        image: this.memeImage,
        memeContainer: memeContainer
      };
      this.savedMemes.push(meme);
      localStorage.setItem('savedMemes', JSON.stringify(this.savedMemes));
      alert('¡Meme guardado correctamente!');
    }
  },
  created() {
    if (typeof localStorage !== 'undefined') {
      this.savedMemes = JSON.parse(localStorage.getItem('savedMemes')) || [];
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

.template-container {
  text-align: center;
}

.select-container {
  display: flex;
  width: 100%;
  margin-bottom: 10px;
}

.select-container select {
  flex-grow: 1;
  margin-right: 10px;
  width: 50%;
}

.title-input-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.title-input-container input {
  flex-grow: 1;
  margin-right: 10px;
  width: 900%;
}

.title-color-input {
  height: 35px;
  padding: 0;
  cursor: grab;
}

.template-selector,
.create-button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.create-button {
  background-color: #0080ff;
  color: #fff;
}

.create-button:hover,
.template-selector:hover {
  background-color: #bdc7d1;
}

.meme-container {
  border: 1px solid #ccc;
  display: inline-block;
  margin-top: 20px;
}

.card-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.meme-content {
  position: relative;
}

.card-title {
  font-size: 55px;
  font-weight: bold;
  margin-bottom: 10px;
  position: absolute;
  top: 24px;
  left: 24px;
}

.title-input-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  max-width: 550px;
  width: 100%;
}

.title-input-container input {
  margin-right: 10px;
}

.title-color-input {
  height: 35px;
  padding: 0;
  cursor: grab;
}

.meme-image {
  width: 526px;
  height: 523px;
  position: absolute;
  top: 163px;
  right: 61px;
}

<<<<<<< HEAD
.meme-creator {
  max-width: 500px;
  margin: auto;
  text-align: center;
  color: white;
  margin-top: 15px;
}

.button-container {
  margin-top: 20px;
}

.create-button {
  margin: 0 10px;
=======
.with-white-border-and-background {
  border: 2px solid white;
  background-color: white;
>>>>>>> 982e43dc5188cf9d2d12f5eada28b5da3d638f53
}
</style>

