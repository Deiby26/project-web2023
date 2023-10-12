<template>
  <center>
    <div class="container">
      <div class="col-2">
        <form @submit="submitlogin">
          <br>
          <p id="Username">USERNAME</p>
          <input type="text" placeholder="Your Username here" v-model="usernamel" required>
          <p id="Email-Address">EMAIL  ADDRESS</p>
          <input type="email" placeholder="Your Email here" v-model="emaill" required>
          <p id="Password">PASSWORD</p>
          <input type="password" placeholder="Password here" v-model="passwordl" required>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </center>
</template>

<script >

const contenedor = []; // Declarar la variable local aquí
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
    const contenedor = []; // Declarar la variable contenedor como una lista vacía

    var objetoRecuperado = JSON.parse(localStorage.getItem('JSON'));
    const nombrelogin = this.usernamel;
    const nombrelocalstorage = objetoRecuperado["username"];

    const sonIgualesnombre = nombrelogin === nombrelocalstorage;
    if (sonIgualesnombre == true){
      contenedor.push(true);
    } else {
      contenedor.push(false);
    }

    const correol = this.emaill;
    const correolocalstorage = objetoRecuperado["email"];

    const sonIgualescorreo = correol === correolocalstorage;
    if (sonIgualescorreo == true){
      contenedor.push(true);
    } else {
      contenedor.push(false);
    }
    //const contraseñal = this.usernamel;
    //const correolocalstorage = objetoRecuperado["email"];
    const contral = this.passwordl;
    const passwordlocalstorage = objetoRecuperado["password"];
    const sonIgualescontra = contral === passwordlocalstorage;

    if (sonIgualescontra == true){
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
      }else{
        continue
      }
    }
    if (contador === 3){
      window.alert("INCIO DE SECCION")
    }else{
      window.alert("LAS CREDECIALES NO COINCIDEN")
      
    }
  }
  
}



};
//console.log(contenedor)
//var objetoRecuperado = JSON.parse(localStorage.getItem('JSON'));
//console.log(objetoRecuperado)
//console.log(objetoRecuperado["username"]);





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