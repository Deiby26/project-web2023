<template>
  <div class="entry-creator">
    <h2>Nueva Entrada de Blog</h2>
    <form @submit.prevent="createEntry">
      <div class="form-group">
        <label for="title">Título:</label>
        <input v-model="title" type="text" id="title" required class="input-field" />
      </div>
      <div class="form-group">
        <label for="description">Descripción:</label>
        <textarea v-model="description" id="description" required class="input-field textarea"></textarea>
      </div>
      <button type="submit">Crear Entrada</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: ''
    };
  },
  methods: {
      createEntry() {
  const entry = {
    title: this.title,
    description: this.description
  };

  this.$emit('new-entry', entry);

  this.title = '';
  this.description = '';
}
  }
};
</script>

<style scoped>
.form-group {
  margin-bottom: 10px;
  width: 100%;
}

.form-group label {
  color: white;
}

.input-field,
.textarea {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.textarea {
  height: 150px;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #0080ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #005d9f;
}

.entry-creator {
  max-width: 500px;
  margin: auto;
  text-align: center;
  color: white;
  margin-top: 50px;
}

.form-group {
margin-bottom: 10px;
display: flex; 
justify-content: center; 
}

.form-group label {
color: white;
flex: 1; 
margin-top: 20px; 
}

.input-field,
.textarea {
flex: 2; 
}

.button-container {
display: flex;
justify-content: space-around; 
}
</style>
