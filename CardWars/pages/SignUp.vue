<template>
  <center>
    <br>
    <div class="transparent-div">
      <div class="container">
        <div class="col-2">
          <form @submit="submitForm">
            <br>
            <p style="color: aliceblue;">Usuario</p>
            <input type="text" placeholder="Ingresa tu usuario" v-model="username" required>
            <p style="color: aliceblue;">Correo electrónico</p>
            <input type="email" placeholder="Ingresa tu correo electrónico" v-model="email" required>
            <p style="color: aliceblue;">Contraseña</p>
            <input type="password" placeholder="Ingresa tu contraseña" v-model="password" required>
            <p style="color: aliceblue;">Confirmar contraseña</p>
            <input type="password" placeholder="Ingresa tu contraseña para confirmar" v-model="password2" required>
            <input type="checkbox" id="cbox2" value="second_checkbox" required />
            <label for="cbox2" style="color: aliceblue;">Terminos y condiciones </label>
            <a href="https://cache.dominos.com/olo/6_53_4/assets/build/market/PE/_en/pdf/national_menu.pdf"
              target="_blank" style="color: aliceblue;">Tratamiento de datos personales (PDF)</a>
            <br>
            <button type="submit">Registrarse</button>
            <br>
          </form>
          <button type="submit" @click="regresarindex" class="regresarindex">Regresar</button>
        </div>
      </div>
    </div>
  </center>
</template>

<style>
.transparent-div {
  background-color: rgba(197, 197, 231, 0.5);
  width: 600px;
  height: 600px;
  border-radius: 20px;
}
.regresarindex {
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}


</style>


<script>

definePageMeta({
  layout: "blank",
});

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

      var json = {};
      const passwordsAreEqual = passwordCredential === passwordCredential2;
      if (passwordsAreEqual) {
        json["username"] = this.username;
        json["email"] = this.email;
        json["password"] = this.password;
        localStorage.setItem('JSON', JSON.stringify(json));
        this.$router.push('/Login');

      } else {
        window.alert("Las contraseñas no coinciden")
      }

    },
    regresarindex(){
      this.$router.push('/');

    }
    
  }
};



</script>