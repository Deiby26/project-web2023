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