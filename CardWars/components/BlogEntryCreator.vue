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
      this.$emit('new-entry', {
        title: this.title,
        description: this.description
      });
      this.title = '';
      this.description = '';
    }
  }
};
</script>

<style scoped>
.form-group {
  margin-bottom: 10px;
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
}
</style>
