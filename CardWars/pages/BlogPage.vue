<template>
  <div class="blog-page">
    <h1 id="Blog">Blog</h1>
<<<<<<< HEAD
    <div class="button-container">
      <button @click="showEntryCreator">Crear nueva entrada del blog</button>
    </div>
    <BlogEntryCreator v-if="showCreator" @new-entry="addNewEntry" @cancel="cancelEntryCreation" />
=======
    <div class="button-new-entry">
      <button class="button-create-entry" @click="showEntryCreator">Crear nueva entrada del blog</button>
    </div>
    <BlogEntryCreator v-if="showCreator" @new-entry="addNewEntry" />
>>>>>>> 982e43dc5188cf9d2d12f5eada28b5da3d638f53
    <BlogEntry v-for="(entry, index) in blogEntries" :key="index" :entry="entry" @delete-entry="deleteEntry"
      @update-entry="updateEntry" />
  </div>
</template>
<<<<<<< HEAD

=======
>>>>>>> 982e43dc5188cf9d2d12f5eada28b5da3d638f53
<script>
import BlogEntry from '@/components/BlogEntry.vue';
import BlogEntryCreator from '@/components/BlogEntryCreator.vue';

export default {
  components: {
    BlogEntry,
    BlogEntryCreator
  },
  data() {
    return {
      blogEntries: this.loadEntriesFromLocalStorage(),
<<<<<<< HEAD
      savedMemes: this.loadMemesFromLocalStorage(),
      showCreator: false,

=======
      showCreator: false
>>>>>>> 982e43dc5188cf9d2d12f5eada28b5da3d638f53
    };
  },
  methods: {
    addNewEntry(entry) {
      this.blogEntries.push({
<<<<<<< HEAD
        id: Date.now(), // Generamos un id único (en este caso usando la marca de tiempo)
        ...entry
      });
      this.saveEntriesToLocalStorage(this.blogEntries);
      this.showCreator = false; // Ocultar el BlogEntryCreator después de crear una entrada

    },
    cancelEntryCreation() {
      this.showCreator = false; // Ocultar el BlogEntryCreator después de cancelar la creación
    },
=======
        id: Date.now(), 
        ...entry
      });
      this.saveEntriesToLocalStorage(this.blogEntries);
      this.showCreator = false; 

    },
>>>>>>> 982e43dc5188cf9d2d12f5eada28b5da3d638f53
    deleteEntry(entryToDelete) {
      this.blogEntries = this.blogEntries.filter(entry => entry.id !== entryToDelete.id);
      this.saveEntriesToLocalStorage(this.blogEntries);
    },
    updateEntry(updatedEntry) {
      this.blogEntries = this.blogEntries.map(entry => {
        if (entry.id === updatedEntry.id) {
          return updatedEntry;
        }
        return entry;
      });
      this.saveEntriesToLocalStorage(this.blogEntries);
    },
    loadEntriesFromLocalStorage() {
      if (process.client) {
        return JSON.parse(localStorage.getItem('blogEntries')) || [];
      }
      return [];
    },
<<<<<<< HEAD
    loadMemesFromLocalStorage() {
      if (process.client) {
        return JSON.parse(localStorage.getItem('savedMemes')) || [];
      }
      return [];
    },
=======
>>>>>>> 982e43dc5188cf9d2d12f5eada28b5da3d638f53
    saveEntriesToLocalStorage(entries) {
      if (process.client) {
        localStorage.setItem('blogEntries', JSON.stringify(entries));
      }
    },

    showEntryCreator() {
<<<<<<< HEAD
      this.showCreator = true; // Mostrar el BlogEntryCreator al hacer clic en el botón
=======
      this.showCreator = true; 
>>>>>>> 982e43dc5188cf9d2d12f5eada28b5da3d638f53
    }
  }
};
</script>

<style scoped>
#Blog {
  font-family: sans-serif;
  color: white;
  text-align: center;
  margin-top: 30px;
}

button {
  margin-bottom: 10px;
<<<<<<< HEAD
  margin-top: 10px;
=======
>>>>>>> 982e43dc5188cf9d2d12f5eada28b5da3d638f53
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

<<<<<<< HEAD
.button-container {
  text-align: center;
}

=======
>>>>>>> 982e43dc5188cf9d2d12f5eada28b5da3d638f53
.button-new-entry {
  margin-top: 15px;
  text-align: center;
}

<<<<<<< HEAD
.button-create-entry {
=======
.button-create-entry{
>>>>>>> 982e43dc5188cf9d2d12f5eada28b5da3d638f53
  margin-bottom: 10px;
  padding: 8px 16px;
  background-color: #81a6b3;
  color: #000000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
<<<<<<< HEAD

  
  
  

  
=======
>>>>>>> 982e43dc5188cf9d2d12f5eada28b5da3d638f53
