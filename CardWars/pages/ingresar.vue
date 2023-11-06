<template>
  <center>
    <div class="container">
      <div class="col-2">
        <div class="styled-div"><br>
          <form @submit="submitlogin"><br>
            <p style="font-size: 25px;  color: white;">Usuario</p>
            <input id="Usuario" type="text" placeholder="Ingresa tu usuario" v-model="usernamel" required>
            <p style="font-size: 25px;  color: white;">Correo electrónico</p>
            <input id="Correo" type="email" placeholder="Ingresa tu correo electrónico" v-model="emaill" required>
            <p style="font-size: 25px;  color: white;">Contraseña</p>
            <input id="Contra" type="password" placeholder="Ingresa tu contraseña" v-model="passwordl" required><br>
            <button id="Ingresar" type="submit">Ingresar</button><br><br>
          </form>
          <button type="submit" @click="regresar" id="regresar">Regresar</button>
        </div>
      </div>
    </div>
  </center>
</template>

<style>
.styled-div {
  background-color: rgba(233, 38, 200, 0.5);
  width: 600px;
  height: 480px;
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

#Ingresar {
  background-color: green;
  color: white;
  font-size: 20px;
  padding: 15px 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
}

#Ingresar:hover{
  transform: translateY(-5px);
}

#regresar {
  background-color: green;
  color: white;
  font-size: 20px;
  padding: 15px 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
}

#regresar:hover {
  background-color: green;
  transform: translateY(-5px);
}
</style>

<script >
definePageMeta({
  layout: "blank",
});

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
    },

    regresar(){
      this.$router.push('/');
    }
  },
};

</script>