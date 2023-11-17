<template>
  <center>
    <h1 id="Bienvenido">¡Bienvenidos a la revolución del duelo con memes!</h1><br>
    <p id="SubTitulo">¡Duelo de memes en cada carta! Despierta al creador de cartas en ti.</p><br>
    <button type="submit" @click="redirigirIngresar" class="redirigirIngresar">Ingresar</button><br><br>
    <button type="submit" @click="redirigirRegistro" class="redirigirRegistro">Registrarse</button>
  </center>
</template>

<style>
#Bienvenido {
  font-family: sans-serif;
  color: white;
  text-align: center;
  line-height: 300px;
  font-size: 1.2cm;
}

#SubTitulo {
  font-family: sans-serif;
  color: white;
  margin-top: -150px;
  text-align: center;
  line-height: 50px;
  font-size: 0.8cm;
}

/* #Got-To-Login {
  font-family: sans-serif;
  color: white;
  text-align: center;
  line-height: 50px;
}

#Sign-Up {
  font-family: sans-serif;
  color: white;
  text-align: center;
  line-height: 50px;
}

#Create-Card {
  font-family: sans-serif;
  color: white;
  text-align: center;
  line-height: 50px;
}

#Create-Meme {
  font-family: sans-serif;
  color: white;
  text-align: center;
  line-height: 50px;
} */

.redirigirIngresar {
  background-color: #007BFF;
  color: white;
  padding: 20px 30px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  transition: 0.5s;
  width: 160px;
}

.redirigirIngresar:hover {
  background-color: #0056b3;
  transform: translateY(-5px);
}

.redirigirRegistro {
  background-color: #007BFF;
  color: white;
  padding: 20px 30px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  transition: 0.5s;
  width: 160px;
}

.redirigirRegistro:hover {
  background-color: #0056b3;
  transform: translateY(-5px);
}
</style>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },

  methods: {
    redirigirIngresar() {
      this.$router.push('/ingresar');

    },
    redirigirRegistro() {
      this.$router.push('/Registro');
    }
  }
};

definePageMeta({
  layout: "blank",
})
</script>