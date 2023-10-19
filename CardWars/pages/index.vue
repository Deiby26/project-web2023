<template>
  <center>
    <h1 id="Welcome">¡Bienvenidos a la revolución del duelo con memes!</h1>
    <br>
    <p id="Subtittle">¡Duelo de memes en cada carta! Despierta al creador de cartas en ti.</p>
    <br>

    <nuxt-link to="/Login" id="Got-To-Login">Ingresar</nuxt-link>
    <br>
    <br>
    <nuxt-link to="/SignUp" id="Sign-Up">Registrarse</nuxt-link>
    <br>
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
</style>