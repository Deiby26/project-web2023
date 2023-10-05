<template>
  <center>
    <div class="container">
      <div class="col-2">
        <form>
          <br>
          <p>USERNAME</p>
          <input type="text" placeholder="Your Username here" v-model="username" required>
          <p>EMAIL  ADDRESS</p>
          <input type="email" placeholder="Your Email here" v-model="email" required>
          <p>PASSWORD</p>
          <input type="password" placeholder="Password here" v-model="password" required>
          <button type="submit">Login</button>
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
