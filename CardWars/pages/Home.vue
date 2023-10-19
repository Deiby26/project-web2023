<template>
<<<<<<< HEAD
    <center>
      <h1 id="Welcome">Welcome to CardWars</h1>
      <br>
      <nuxt-link to="/CardPage" id="Create-Card">Create a personalized text</nuxt-link>
      <br>
      <br>
      <nuxt-link to="/MemePage" id="Create-Meme">Create a Meme card</nuxt-link>
    </center>
  </template>

  <script>
definePageMeta({
  layout: "default",
});
</script>
=======
  <div>
    <br>
    <br>
    <br>
    <center>
      <button type="submit" @click="redirigirAOtraPagina" class="boton-crear-meme">Crear Meme</button><br><br>
      <button type="submit" @click="redirigirCrearCarta" class="crearcarta">Crear carta</button><br><br>

      <button type="submit" @click="redirigirOpciones" class="opcionesUsuario">Configuración</button>

    </center>

  </div>
</template>

<script>
export default {
  methods: {
    redirigirAOtraPagina() {
      this.$router.push('/MemePage');
    },
    redirigirOpciones() {
      this.$router.push('/configuracionUsuario');

    },
    redirigirCrearCarta() {
      this.$router.push('/CardPage');
    }


  }
}
</script>

<style>
.boton-crear-meme {
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.boton-crear-meme:hover {
  background-color: #0056b3;
}

.opcionesUsuario {
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.opcionesUsuario:hover {
  background-color: #eb6f0a;
}


.crearcarta {
  background-color: #0056b3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.opcionesUsuario:hover {
  background-color: #0056b3;
}
</style>
>>>>>>> 982e43dc5188cf9d2d12f5eada28b5da3d638f53
