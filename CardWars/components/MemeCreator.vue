<template>
    <div>
        <h1 id="Mis-Memes">Mis Memes</h1>

        <!-- Selector de plantillas -->
        <select v-model="selectedTemplate" class="template-selector">
            <option v-for="template in availableTemplates" :key="template" :value="template">
                {{ template }}
            </option>
        </select>

        <!-- Botón para crear meme -->
        <button @click="createMeme" class="create-button">Create Meme</button>

        <!-- Contenedor para mostrar el meme -->
        <div v-if="memeCreated" class="meme-container" :style="memeStyle"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedTemplate: null,
            memeCreated: false,
            availableTemplates: ['azul', 'cafe', 'morado', 'negro', 'oliva', 'oro']
        };
    },
    computed: {
        memeStyle() {
            return {
                backgroundImage: `url(/cardimgs/${this.selectedTemplate}.jpeg)`, 
                backgroundSize: 'cover',
                width: '650px', /* Ajusta según tus necesidades */
                height: '965.5px', /* Ajusta según tus necesidades */
                margin: '20px auto' /* Ajusta según tus necesidades */
            };
        }
    },
    methods: {
        createMeme() {
            if (this.selectedTemplate) {
                this.memeCreated = true;
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
    background-color: #007bff; /* Cambia el color para el botón "Create Meme" */
    color: #fff;
}

.create-button:hover,
.template-selector:hover {
    background-color: #0056b3; /* Cambia el color al hacer hover */
}

.meme-container {
    border: 1px solid #ccc;
}
</style>
