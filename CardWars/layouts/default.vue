<template>
  <div class="loged">
    <nav class="navbar">
      <div class="logo">
        <img src="logo.png" alt="Logo" />
      </div>

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
  
<style setup>
.loged {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Esto distribuirá el contenido verticalmente */
  min-height: 100vh; /* Establece una altura mínima de la ventana */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.xtrafondos.com/wallpapers/astronauta-perdido-en-el-espacio-5498.jpg);
  background-repeat: no-repeat;
  background-size: cover; /* Usa cover para asegurarte de que la imagen cubra todo el contenedor */
  background-attachment: fixed;
  background-position: center center;
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>

<style scoped>
.loged {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Esto distribuirá el contenido verticalmente */
  min-height: 100vh; /* Establece una altura mínima de la ventana */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.xtrafondos.com/wallpapers/astronauta-perdido-en-el-espacio-5498.jpg);
  background-repeat: no-repeat;
  background-size: cover; /* Usa cover para asegurarte de que la imagen cubra todo el contenedor */
  background-attachment: fixed;
  background-position: center center;
  margin: 0;
  padding: 0;
  width: 100%;
}
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
  position: relative; /* Agregamos posición relativa */
}

.navbar a {
  color: white;
  text-decoration: none;
  transition: 0.3s; /* Agregamos una transición suave */
}

.navbar a:hover {
  text-decoration: underline;
  font-size: 1.1em; /* Agrandamos el texto */
}

.navbar a::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  transform: scaleX(0); /* Inicialmente sin ancho */
  transform-origin: bottom right;
  transition: transform 0.3s ease-out; /* Agregamos una transición a la línea */
}

.navbar a:hover::after {
  transform: scaleX(1); /* Hacemos que la línea aparezca */
  transform-origin: bottom left;
}

.logo img {
  max-width: 100px; 
  height: auto; 
}
</style>
  