<template>
  <div class="blog-entry">
    <div class="blog-info">
      <h2>{{ entry.title }}</h2>
      <p>{{ entry.description }}</p>
    </div>
    <div class="button-container">
      <button @click="deleteEntry" id="eliminar">Eliminar</button>
      <button @click="editEntry" id="editar">Editar</button>
    </div>

    <div v-if="isEditModalOpen" class="edit-modal">
      <div class="edit-modal-content">
        <h3>Editar Entrada</h3>
        <div class="form-group">
          <input v-model="editedTitle" type="text" id="editedTitle" required placeholder="Título" />
        </div>
        <div class="form-group">
          <textarea v-model="editedDescription" id="editedDescription" required placeholder="Descripción"></textarea>
        </div>
        <div class="button-group">
          <button type="button" class="cancel-button" @click="closeEditModal">Cancelar</button>
          <button type="button" class="save-button" @click="saveChanges">Guardar Cambios</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-entry {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  width: 50%;
  margin: auto;
  max-width: 800px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.blog-info {
  color: #000;
}

.blog-info h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.blog-info h2::after {
  content: "";
  display: block;
  width: 100%;
  border-bottom: 2px solid #db3e3e;
  margin-top: 8px;
}

.blog-info p {
  font-size: 18px;
}

#editar {
  margin: 10px;
  padding: 8px 16px;
  background-color: #00be00;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#eliminar{
  margin: 10px;
  padding: 8px 16px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.edit-modal-content {
  text-align: center;
}

.edit-modal-content input,
.edit-modal-content textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button-group {
  display: flex;
  justify-content: center;
}

.cancel-button,
.save-button {
  padding: 8px 16px;
  margin: 0 10px;
  border-radius: 4px;
  cursor: pointer;
}

.cancel-button {
  background-color: #808080;
  color: #fff;
}

.save-button {
  background-color: #00ff00;
  color: #fff;
}
</style>

<script>
export default {
  props: {
    entry: Object
  },
  data() {
    return {
      isEditModalOpen: false,
      editedTitle: this.entry.title,
      editedDescription: this.entry.description
    };
  },
  methods: {
    deleteEntry() {
      this.$emit('delete-entry', this.entry);
    },
    
    editEntry() {
      this.isEditModalOpen = true;
    },

    closeEditModal() {
      this.isEditModalOpen = false;
    },

    saveChanges() {
      const updatedEntry = {
        ...this.entry,
        title: this.editedTitle,
        description: this.editedDescription
      };
      this.$emit('update-entry', updatedEntry);
      this.closeEditModal();
    }
  }
};
</script>