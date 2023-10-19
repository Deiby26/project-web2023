<template>
  <center>
    <div class="container">
      <div class="col-2">
        <div class="styled-div">
          <br>
          <form @submit="submitlogin">
            <br>
            <p id="Username">Usuario</p>
            <input type="text" placeholder="Ingresa tu usuario" v-model="usernamel" required>
            <p id="Email-Address">Correo electrónico</p>
            <input type="email" placeholder="Ingresa tu correo electrónico" v-model="emaill" required>
            <p id="Password">Contraseña</p>
            <input type="password" placeholder="Ingresa tu contraseña" v-model="passwordl" required>
            <button type="submit">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  </center>
</template>

<script >

definePageMeta({
  layout: "blank",
});

const contenedor = [];
export default {
  data() {
    return {
      usernamel: '',
      emaill: '',
      passwordl: ''
    };
  },

  methods: {
    submitlogin(event) {
      event.preventDefault();
      const contenedor = [];

      var objetoRecuperado = JSON.parse(localStorage.getItem('JSON'));
      const nombrelogin = this.usernamel;
      const nombrelocalstorage = objetoRecuperado["username"];

      const sonIgualesnombre = nombrelogin === nombrelocalstorage;
      if (sonIgualesnombre == true) {
        contenedor.push(true);
      } else {
        contenedor.push(false);
      }

      const correol = this.emaill;
      const correolocalstorage = objetoRecuperado["email"];

      const sonIgualescorreo = correol === correolocalstorage;
      if (sonIgualescorreo == true) {
        contenedor.push(true);
      } else {
        contenedor.push(false);
      }

      const contral = this.passwordl;
      const passwordlocalstorage = objetoRecuperado["password"];
      const sonIgualescontra = contral === passwordlocalstorage;

      if (sonIgualescontra == true) {
        contenedor.push(true);
      } else {
        contenedor.push(false);
      }



      console.log(contenedor)
      var contador = 0
      for (var i = 0; i < contenedor.length; i++) {
        var elemento = contenedor[i];
        if (elemento === true) {
          contador++;
        } else {
          continue
        }
      }
      if (contador === 3) {
        window.alert("INCIO DE SESIÓN")
        this.$router.push('/Home');
      } else {
        window.alert("LAS CREDECIALES NO COINCIDEN")

      }
    }

  }
};

</script>

<style>
.styled-div {
  background-color: rgba(233, 38, 200, 0.5);
  width: 600px;
  height: 350px;
  border-radius: 20px;
}

#Username {
  font-family: sans-serif;
  color: white;
}

#Email-Address {
  font-family: sans-serif;
  color: white;
}

#Password {
  font-family: sans-serif;
  color: white;
}

#Login {
  font-family: sans-serif;
  color: white;
}
</style>