<template>
  <center>
    <h1 id="Welcome">Welcome to CardWars</h1>
    <br>
    <p id="Subtittle">A place where your ideas can be brought to life</p>
    <br>
    <nuxt-link to="/Login" id="Got-To-Login">Go to Login</nuxt-link>
    <br>
    <br>
    <nuxt-link to="/SignUp" id="Sign-Up">Sign up</nuxt-link>
    <br>
    <br>
    <nuxt-link to="/CardPage" id="Create-Card">Create a personalized text</nuxt-link>
    <br>
    <br>
    <nuxt-link to="/MemePage" id="Create-Meme">Create a Meme card</nuxt-link>
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
body{
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images4.alphacoders.com/120/1205937.jpg);
  background-repeat: no-repeat;
  background-size: 107%;
  background-attachment: fixed;
  background-position: center center;
  margin: 0;
  padding: 0;
}

#Welcome{
  font-family: sans-serif;
  color: white;
  text-align: center;
  line-height: 300px
}

#Subtittle{
  font-family: sans-serif;
  color: white;
  margin-top: -150px;
  text-align: center;
  line-height: 50px
}

#Got-To-Login{
  font-family: sans-serif;
  color: white;
  text-align: center;
  line-height: 50px;
}

#Sign-Up{
  font-family: sans-serif;
  color: white;
  text-align: center;
  line-height: 50px;
}

#Create-Card{
  font-family: sans-serif;
  color: white;
  text-align: center;
  line-height: 50px;
  }

#Create-Meme{
  font-family: sans-serif;
  color: white;
  text-align: center;
  line-height: 50px;
  }
</style>