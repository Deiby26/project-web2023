<template>
  <div class="blog-page">
    <h1 id="Blog">Blog</h1><br>
    <div class="button-container">
      <button @click="showEntryCreator" id="nuevoBlog">Crear nueva entrada del blog</button>
    </div>
    <BlogEntryCreator v-if="showCreator" @new-entry="addNewEntry" @cancel="cancelEntryCreation" />
    <BlogEntry v-for="(entry, index) in blogEntries" :key="index" :entry="entry" @delete-entry="deleteEntry"
      @update-entry="updateEntry" />
  </div>
</template>

<style scoped>
#Blog {
  font-family: sans-serif;
  color: white;
  text-align: center;
  margin-top: 30px;
}

#nuevoBlog{
  background-color: green;
  color: white;
  font-size: 20px;
  padding: 15px 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
}

#nuevoBlog:hover{
  background-color: rgb(23, 208, 23);
  color: black;
  transform: translateY(-5px);
}

.button-container {
  text-align: center;
}
</style>

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
      savedMemes: this.loadMemesFromLocalStorage(),
      showCreator: false,
    };
  },

  methods: {
    addNewEntry(entry) {
      this.blogEntries.push({
        id: Date.now(), 
        ...entry
      });
      this.saveEntriesToLocalStorage(this.blogEntries);
      this.showCreator = false;
    },

    cancelEntryCreation() {
      this.showCreator = false;
    },

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

    loadMemesFromLocalStorage() {
      if (process.client) {
        return JSON.parse(localStorage.getItem('savedMemes')) || [];
      }
      return [];
    },

    saveEntriesToLocalStorage(entries) {
      if (process.client) {
        localStorage.setItem('blogEntries', JSON.stringify(entries));
      }
    },

    showEntryCreator() {
      this.showCreator = true; 
    }
  }
}
</script>