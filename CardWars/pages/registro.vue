<template>
  <center>
    <br>
    <div class="transparent-div">
      <div class="container">
        <div class="col-2">
          <form @submit="submitForm"><br>
            <p style="font-size: 25px;  color: white;">Usuario</p>
            <input id="Usuario" type="text" placeholder="Ingresa tu usuario" v-model="username" required>
            <p style="font-size: 25px;  color: white;">Correo electrónico</p>
            <input id="Correo" type="email" placeholder="Ingresa tu correo electrónico" v-model="email" required>
            <p style="font-size: 25px;  color: white;">Contraseña</p>
            <input id="Contra" type="password" placeholder="Ingresa tu contraseña" v-model="password" required>
            <p style="font-size: 25px;  color: white;">Confirmar contraseña</p>
            <input id="VerificarContra" type="password" placeholder="Ingresa tu contraseña para confirmar" v-model="password2" required>
            <input type="checkbox" id="cbox2" value="second_checkbox" required/>
            <label for="cbox2" id="TermsyCond"> Terminos y condiciones </label>
            <a href="https://cache.dominos.com/olo/6_53_4/assets/build/market/PE/_en/pdf/national_menu.pdf"
              style="font-size: 20px;  color: white;"
              target="_blank" id="Tratamiento">Tratamiento de datos personales (PDF)</a><br><br>
            <button type="submit" id="Registrarse">Registrarse</button><br>
            <br>
          </form>
          <button type="submit" @click="regresarindex" id="regresarindex">Regresar</button>
        </div>
      </div>
    </div>
  </center>
</template>

<style>
.transparent-div{
  background-color: rgba(197, 197, 231, 0.5);
  width: 650px;
  height: 700px;
  border-radius: 20px;
}

#Usuario{
  font-size: 20px;
}

#Correo{
  font-size: 20px;
}

#Contra{
  font-size: 20px;
}

#VerificarContra{
  font-size: 20px;
}

#TermsyCond{
  color: white;
  font-size: 20px;
}

#Registrarse{
  background-color: green;
  color: white;
  font-size: 20px;
  padding: 15px 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
}

#Registrarse:hover{
  transform: translateY(-5px);
}

#regresarindex{
  background-color: green;
  color: white;
  font-size: 20px;
  padding: 15px 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
}

#regresarindex:hover{
  transform: translateY(-5px);
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
}
</script>