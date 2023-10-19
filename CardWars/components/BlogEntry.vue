<template>
  <div class="blog-entry">
    <div class="blog-info">
      <h2>{{ entry.title }}</h2>
      <p>{{ entry.description }}</p>
    </div>
    <button @click="deleteEntry">Eliminar</button>
  </div>
</template>
  
<script>
export default {
  props: {
    entry: Object
  },
  methods: {
    deleteEntry() {
      this.$emit('delete-entry', this.entry);
    }
  }
};
</script>
  
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

button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
  
  