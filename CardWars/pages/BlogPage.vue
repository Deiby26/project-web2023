<template>
  <div>
    <h1 id="Blog">Blog</h1>
    <BlogEntryCreator @new-entry="addNewEntry" />
    <BlogEntry v-for="(entry, index) in blogEntries" :key="index" :entry="entry" />
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
    }
  }
};
</script>


  