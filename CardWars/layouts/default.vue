<template>
  <div class="privado">
    <nav class="navbar">
      <div class="logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      <ul>
        <li><nuxt-link to="/paginaPrincipal">Inicio</nuxt-link></li>
        <li><nuxt-link to="/MyCardsPage">Mis Cartas</nuxt-link></li>
        <li><nuxt-link to="/MyMemesPage">Mis Memes</nuxt-link></li>
        <li><nuxt-link to="/BlogPage">Blog</nuxt-link></li>
      </ul>
    </nav>

    <main class="content">
      <slot />
    </main>
  </div>
</template>
  
<style setup>
.privado {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.xtrafondos.com/wallpapers/astronauta-perdido-en-el-espacio-5498.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.navbar ul {
  list-style: none;
  padding: 0;
}

.navbar li {
  display: inline;
  margin-right: 20px;
  position: relative;
}

.navbar a {
  color: white;
  font-size: 20px;
  text-decoration: none;
  transition: 0.3s;
}

.navbar a:hover {
  color: greenyellow;
  text-decoration: underline;
  font-size: 25px;
}

.navbar a::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}

.navbar a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.logo img {
  max-width: 100px;
  height: auto;
}
</style>
  