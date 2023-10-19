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
            <a href="https://www.sic.gov.co/sites/default/files/documentos/072020/Política%20de%20Tratamiento%20de%20Datos%20Personales%20-%20SIC.pdf"
              target="_blank" style="color: aliceblue;">Tratamiento de datos personales (PDF)</a>
            <br>
            <button type="submit">Registrarse</button>
            <br>
            <button type="submit">Regresar</button>
            <p style="color: white;">DAVID HAGA ESTE BOTON DE MONDA AQUI Y EN INGRESAR</p>
            <p style="color: white;">Y EN INGRESAR QUITE LO DE PONER CORREO, QUE SOLO SE INGRESE CON USUARIO O CORREO, NO
              AMBOS</p>
            <br>
          </form>
        </div>
      </div>
    </div>
  </center>
</template>

<style>
.transparent-div {
  background-color: rgba(197, 197, 231, 0.5);
  width: 600px;
  height: 500px;
  border-radius: 20px;
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

    }
  }
};



</script>