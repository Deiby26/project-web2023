<template>
  <div><br><br><br>
    <center>
      <button type="submit" @click="redirigirCrearCarta" id="crearCarta">Crear carta</button><br><br>
      <button type="submit" @click="redirigirAOtraPagina" id="crearMeme">Crear Meme</button><br><br>
      <button type="submit" @click="redirigirOpciones" id="opcionesUsuario">Configuración</button>
    </center>
  </div>
</template>

<style>
.content{
  flex-grow: 1;
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