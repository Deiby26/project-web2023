<template>
    <center>
        <div>
            <h1 id="Mis-Memes">Mis Memes</h1>

            <!-- Selector de plantillas -->
            <select v-model="selectedTemplate">
                <option v-for="template in availableTemplates" :key="template" :value="template">
                    {{ template }}
                </option>
            </select>

            <!-- Selector de cartas -->
            <select v-model="selectedCard">
                <option v-for="(card, index) in savedCards" :key="index" :value="card">
                    Carta {{ index + 1 }}
                </option>
            </select>

            <!-- Botón para crear meme -->
            <button @click="createMeme">Create Meme</button>

            <!-- Contenedor para mostrar el meme -->
            <div v-if="memeCreated" class="meme-container" :style="memeStyle">
                <div v-if="selectedCard" class="card" :style="cardStyle">
                    {{ selectedCard.content }}
                </div>
            </div>
        </div>
    </center>
</template>
  
<script>
export default {
    data() {
        return {
            selectedTemplate: null,
            selectedCard: null,
            memeCreated: false,
            savedCards: JSON.parse(localStorage.getItem('savedCards')) || [], // Agregamos esta línea
            availableTemplates: ['azul', 'cafe', 'morado', 'negro', 'oliva', 'oro']
        };
    },
    computed: {
        memeStyle() {
            return {
                backgroundImage: `url(/cardimgs/${this.selectedTemplate}.jpeg)`,
                backgroundSize: 'cover',
                width: '650px',
                height: '965.5px',
                margin: '20px auto'
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
                top: '732px', // Ajuste de posición vertical
                left: '0px'   // Ajuste de posición horizontal
            };
        }
    },
    methods: {
        createMeme() {
            if (this.selectedTemplate && this.selectedCard) {
                this.memeCreated = true;
            }
        }
    },
    created() {
        // Cargamos las cartas guardadas del localStorage
        if (typeof localStorage !== 'undefined') {
            this.savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];
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
    background-color: #007bff;
    /* Cambia el color para el botón "Create Meme" */
    color: #fff;
}

.create-button:hover,
.template-selector:hover {
    background-color: #0056b3;
    /* Cambia el color al hacer hover */
}

.meme-container {
    border: 1px solid #ccc;
}
</style>
