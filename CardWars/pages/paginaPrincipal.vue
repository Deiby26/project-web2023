<template>
  <div><br><br><br>
    <center>
      <button @click="redirigirCrearCarta" class="styled-button" id="crearCarta">Crear carta</button><br /><br />
      <button @click="redirigirAOtraPagina" class="styled-button" id="crearMeme">Crear Meme</button><br /><br />
      <button @click="redirigirOpciones" class="styled-button" id="opcionesUsuario">Configuración</button><br><br><br><br>
      <div class="gif-container">
        <img src="https://media.tenor.com/42BnOO-Q6hsAAAAi/cat-funny.gif" alt="GIF" />
      </div>
    </center>
  </div>
</template>

<style>
.content {
  flex-grow: 1;
}

.styled-button {
  width: 250px;
  color: white;
  font-size: 20px;
  padding: 15px 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
  margin-bottom: 20px;
}

.styled-button:hover {
  transform: translateY(-5px);
}

#crearCarta {
  background-color: blue;
  color: white;
  font-size: 20px;
  padding: 15px 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
}

#crearCarta:hover {
  background-color: rgb(53, 147, 253);
  transform: translateY(-5px);
}

#crearMeme {
  background-color: purple;
  color: white;
  font-size: 20px;
  padding: 15px 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
}

#crearMeme:hover {
  background-color: rgb(234, 91, 234);
  transform: translateY(-5px);
}

#opcionesUsuario {
  background-color: red;
  color: white;
  font-size: 20px;
  padding: 15px 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
}

#opcionesUsuario:hover {
  background-color: rgb(255, 87, 25);
  transform: translateY(-5px);
}
</style>

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