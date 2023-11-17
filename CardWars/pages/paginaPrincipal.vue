<template>
  <div><br><br><br>
    <center>
      <br>
      <br>
      <div class="welcome-message">
        <h1>Bienvenido a CardWars</h1>
        <p>¡Explora el emocionante mundo de CardWars, donde el humor se convierte en la mejor estrategia! Desata el poder
          de los memes en cada carta y prepárate para vivir situaciones épicas y divertidas. ¡Crea tus propias cartas de
          memes, da rienda suelta a la creatividad y sumérgete en las batallas más hilarantes en CardWars!</p>
      </div>

      <button @click="redirigirCrearCarta" class="styled-button" id="crearCarta">Crear carta</button><br /><br />
      <button @click="redirigirAOtraPagina" class="styled-button" id="crearMeme">Crear Meme</button><br /><br />
      <button @click="redirigirBlog" class="styled-button" id="blog">Ir al blog</button><br /><br />
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
  background-color: #3D5A80;
  /* Azul oscuro */
  color: white;
  font-size: 20px;
  padding: 15px 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
}

#crearCarta:hover {
  background-color: #98C1D9;
  /* Azul claro */
  transform: translateY(-5px);
}

#crearMeme {
  background-color: #4E4E4E;
  /* Gris oscuro */
  color: white;
  font-size: 20px;
  padding: 15px 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
}

#crearMeme:hover {
  background-color: #D9BF77;
  /* Amarillo dorado */
  transform: translateY(-5px);
}

#opcionesUsuario {
  background-color: #D1495B;
  /* Rojo */
  color: white;
  font-size: 20px;
  padding: 15px 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
}

#opcionesUsuario:hover {
  background-color: #FF6F61;
  /* Rojo más claro */
  transform: translateY(-5px);
}

#blog {
  background-color: #616161;
  /* Gris medio */
  color: white;
  font-size: 20px;
  padding: 15px 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
}

#blog:hover {
  background-color: #9BC53D;
  /* Verde */
  transform: translateY(-5px);
}

.welcome-message {

  text-align: center;
  max-width: 1000px;
  margin: 30px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.welcome-message h1 {
  font-family:monospace;
  font-size: 4rem;
  color: #91c8ff;
}

.welcome-message p {
  color: #cdf644;
  font-size: 18px;
  line-height: 1.5;
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