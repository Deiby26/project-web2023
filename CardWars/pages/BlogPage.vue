<template>
  <div class="blog-page">
    <h1 id="Blog">Blog</h1>
    <div class="button-container">
      <button @click="showEntryCreator">Crear nueva entrada del blog</button>
    </div>
    <BlogEntryCreator v-if="showCreator" @new-entry="addNewEntry" @cancel="cancelEntryCreation" />
    <BlogEntry v-for="(entry, index) in blogEntries" :key="index" :entry="entry" @delete-entry="deleteEntry"
      @update-entry="updateEntry" />
  </div>
</template>

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

.button-container {
  text-align: center;
}

.button-new-entry {
  margin-top: 15px;
  text-align: center;
}

.button-create-entry {
  margin-bottom: 10px;
  padding: 8px 16px;
  background-color: #81a6b3;
  color: #000000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

