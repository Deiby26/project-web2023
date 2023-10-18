<template>
  <div class="blog-page">
    <h1 id="Blog">Blog</h1>
    <BlogEntryCreator @new-entry="addNewEntry" />
    <BlogEntry
      v-for="(entry, index) in blogEntries"
      :key="index"
      :entry="entry"
      @delete-entry="deleteEntry"
    />
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
      blogEntries: []
    };
  },
  methods: {
    addNewEntry(entry) {
      this.blogEntries.push(entry);
    },
    deleteEntry(entryToDelete) {
      this.blogEntries = this.blogEntries.filter(entry => entry !== entryToDelete);
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

.blog-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>



