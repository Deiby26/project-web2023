<template>
  <center>
    <h1>Welcome to CardWars</h1>
    <br>
    <p>A place where your ideas can be brought to life</p>
    <br>
    <nuxt-link to="/Login">Go to Login</nuxt-link>
    <br>
    <br>
    <nuxt-link to="/SignUp">Sign up</nuxt-link>
    <br>
    <br>
    <nuxt-link to="/CardPage">Create a card</nuxt-link>
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
</script>
