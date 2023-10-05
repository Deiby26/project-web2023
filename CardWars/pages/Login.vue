<template>
  <center>
    <div class="container">
      <div class="col-2">
        <form>
          <br>
          <p id="Username">USERNAME</p>
          <input type="text" placeholder="Your Username here" v-model="username" required>
          <p id="Email-Address">EMAIL  ADDRESS</p>
          <input type="email" placeholder="Your Email here" v-model="email" required>
          <p id="Password">PASSWORD</p>
          <input type="password" placeholder="Password here" v-model="password" required>
          <button type="submit" id="Login">Login</button>
        </form>
      </div>
    </div>
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

<style>
#Username{
  font-family: sans-serif;
  color: white;
}

#Email-Address{
  font-family: sans-serif;
  color: white;
}

#Password{
  font-family: sans-serif;
  color: white;
}

#Login{
  font-family: sans-serif;
  color: white;
}
</style>