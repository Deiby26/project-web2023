<template>
  <center>
    <h1 id="Welcome">¡Bienvenidos a la revolución del duelo con memes!</h1>
    <br>
    <p id="Subtittle">¡Duelo de memes en cada carta! Despierta al creador de cartas en ti.</p>
    <br>
    <button type="submit" @click="redirigirlogin" class="redirigirlogin">Ingresar</button><br><br>
    <button type="submit" @click="redirigirRegistro" class="redirigirRegistro">Registrarse</button>
  </center>
</template>

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
    redirigirlogin() {
      this.$router.push('/Login');

    },
    redirigirRegistro() {
      this.$router.push('/SignUp');
    }


  }
};


definePageMeta({
  layout: "blank",
});

</script>

<style>
#Welcome {
  font-family: sans-serif;
  color: white;
  text-align: center;
  line-height: 300px
}

#Subtittle {
  font-family: sans-serif;
  color: white;
  margin-top: -150px;
  text-align: center;
  line-height: 50px
}

#Got-To-Login {
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
}

.redirigirlogin {
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.redirigirlogin:hover {
  background-color: #0056b3;
}

.redirigirRegistro {
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.redirigirRegistro:hover {
  background-color: #0056b3;
}
</style>