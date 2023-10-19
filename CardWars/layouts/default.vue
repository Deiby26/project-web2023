<template>
    <div>
      <nav class="navbar">
        <ul>
          <li><nuxt-link to="/">Inicio</nuxt-link></li>
          <li><nuxt-link to="/MyCardsPage">Mis Cartas</nuxt-link></li>
          <li><nuxt-link to="/CardPage">Crear Nueva Carta</nuxt-link></li>
          <li><nuxt-link to="/MyMemesPage">Mis Memes</nuxt-link></li>        
          <li><nuxt-link to="/MemePage">Crear Nuevo Meme</nuxt-link></li>
          <li><nuxt-link to="/BlogPage">Blog</nuxt-link></li>

        </ul>
      </nav>
  
      <main class="content">
        <slot />
      </main>
    </div>
  </template>
  
  <style scoped>
  .navbar {
    background-color: #333;
    color: white;
    padding: 10px;
  }
  
  .navbar ul {
    list-style: none;
    padding: 0;
  }
  
  .navbar li {
    display: inline;
    margin-right: 20px;
  }
  
  .navbar a {
    color: white;
    text-decoration: none;
  }
  
  .navbar a:hover {
    text-decoration: underline;
  }
</style>
  