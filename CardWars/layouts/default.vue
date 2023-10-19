<template>
<<<<<<< HEAD
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
=======
  <div class="loged">
    <nav class="navbar">
      <ul>
        <li><nuxt-link to="/Home">Inicio</nuxt-link></li>
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
>>>>>>> 982e43dc5188cf9d2d12f5eada28b5da3d638f53
  
<style setup>
.loged {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.xtrafondos.com/wallpapers/astronauta-perdido-en-el-espacio-5498.jpg);
  background-repeat: no-repeat;
  background-size: 107%;
  background-attachment: fixed;
  background-position: center center;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
}
</style>

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
  