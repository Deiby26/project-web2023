<template class="body">
  <div>
    
    <!-- slot: Carga el contenido de la página (pages/..) -->
    <slot />

  </div>
</template>

<style>
body{
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.xtrafondos.com/wallpapers/gato-astronauta-en-el-espacio-5516.jpg);
    background-color: #272322;
    background-repeat: no-repeat;
    background-size: 107%;
    background-attachment: fixed;
    background-position: center center;
    margin: 0;
    padding: 0;
}
</style>