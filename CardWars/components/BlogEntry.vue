<template>
    <div class="blog-entry">
      <div class="blog-info">
        <h2>{{ entry.title }}</h2>
        <p>{{ entry.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      entry: Object
    }
  };
  </script>
  
  <style scoped>
  .blog-entry {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
  }
  
  .blog-info h2 {
    font-size: 20px;
  }
  
  .blog-info p {
    font-size: 16px;
  }
  </style>
  