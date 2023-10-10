<template>
  <center>
    <div class="container">
      <div class="col-2">
        <form @submit="submitForm">
          <br>
          <p style="color: aliceblue;">USERNAME</p>
          <input type="text" placeholder="Create your Username here" v-model="username" required>
          <p style="color: aliceblue;">EMAIL ADDRESS</p>
          <input type="email" placeholder="Type your Email here" v-model="email" required>
          <p style="color: aliceblue;" >PASSWORD</p>
          <input type="password" placeholder="Create your Password here" v-model="password" required>
          <p style="color: aliceblue;" >PASSWORD CONFIRM</p>
          <input type="password" placeholder="Confirm your Password here" v-model="password2" required>
          <input type="checkbox" id="cbox2" value="second_checkbox" required/>
          <label for="cbox2" style="color: aliceblue;">Terminos y condiciones </label>
          
          <nuxt-link to="/terms" style="color: aliceblue;"><p>Tratamiento de datos personales</p></nuxt-link>
          <br>
          <button type="submit">Sing up</button>
          <br>
          
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

      var json ={};
      const passwordsAreEqual = passwordCredential === passwordCredential2;
      if (passwordsAreEqual) {
        json["username"]  = this.username;
        json["email"] = this.email;
        json["password"] = this.password;
        return console.log(json);
        
      } else { 
        window.alert("passwords are incorrect")

        return console.log(false);
      }

    }
  }
};
export const numero = 666;


</script>