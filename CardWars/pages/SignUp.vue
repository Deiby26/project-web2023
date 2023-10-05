<template>
  <center>
    <div class="container">
      <div class="col-2">
        <form @submit="submitForm">
          <br>
          <p>USERNAME</p>
          <input type="text" placeholder="Create your Username here" v-model="username" required>
          <p>EMAIL ADDRESS</p>
          <input type="email" placeholder="Type your Email here" v-model="email" required>
          <p>PASSWORD</p>
          <input type="password" placeholder="Create your Password here" v-model="password" required>
          <p>PASSWORD CONFIRM</p>
          <input type="password" placeholder="Confirm your Password here" v-model="password2" required>
          <button type="submit">Sign Up</button>
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
      password: '',
      password2: ''
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();

      const passwordCredential = this.password;
      const passwordCredential2 = this.password2;


      const passwordsAreEqual = passwordCredential === passwordCredential2;

      if (passwordsAreEqual) {
        console.log('Las contraseñas son iguales');
        return console.log(true);
        
      } else {
        console.log('Las contraseñas son diferentes');

        return console.log(false);
      }

    }
  }
};
</script>