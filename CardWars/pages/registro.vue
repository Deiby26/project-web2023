<template>
  <center>
    <br />
    <div class="transparent-div">
      <div class="container">
        <div class="col-2">
          <form @submit="submitForm">
            <div class="form-group">
              <label for="Usuario">Usuario</label>
              <input
                id="Usuario"
                type="text"
                placeholder="Ingresa tu usuario"
                v-model="username"
                required
              />
            </div>

            <div class="form-group">
              <label for="Correo">Correo electrónico</label>
              <input
                id="Correo"
                type="email"
                placeholder="Ingresa tu correo electrónico"
                v-model="email"
                required
              />
            </div>

            <div class="form-group">
              <label for="Contra">Contraseña</label>
              <input
                id="Contra"
                type="password"
                placeholder="Ingresa tu contraseña"
                v-model="password"
                required
              />
            </div>

            <div class="form-group">
              <label for="VerificarContra">Confirmar contraseña</label>
              <input
                id="VerificarContra"
                type="password"
                placeholder="Ingresa tu contraseña para confirmar"
                v-model="password2"
                required
              />
            </div>

            <div class="form-group">
              <label for="cbox2" id="TermsyCond">Acepto los términos y condiciones</label>
              <input type="checkbox" id="cbox2" value="second_checkbox" v-model="termsChecked" required />
              <a href="/terminosycondiciones.pdf" style="font-size: 20px; color: white" target="_blank"
                id="Tratamiento">Tratamiento de datos personales (PDF)</a>
            </div>

            <button class="buton" type="submit" id="Registrarse">Registrarse</button>
            <br />
          </form>
          <button class="buton" type="button" @click="regresarindex()" id="regresarindex">
            Regresar
          </button>
        </div>
      </div>
    </div>
  </center>
</template>

<style>
.transparent-div {
  background-color: rgba(171, 171, 217, 0.5);
  width: 650px;
  height: 700px;
  border-radius: 20px;
  padding: 20px; /* Ajusta según tus necesidades */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px); /* Efecto de borde difuminado */
}

.form-group {
  margin-bottom: 20px; /* Ajusta según tus necesidades */
}

label {
  font-size: 20px;
  color: white;
  margin-bottom: 5px; /* Ajusta según tus necesidades */
  display: block;
}

input {
  font-size: 16px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 15px; /* Ajusta según tus necesidades */
  transition: border-color 0.3s ease-in-out; 
}

input:valid {
  background-color: #ddffdd;
}

#TermsyCond {
  color: white;
  font-size: 20px;
}

.buton {
  width: 150px;
  background-image: linear-gradient(92.88deg, #4CAF50 9.16%, #43A047 43.89%, #388E3C 64.72%);
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin: 3px;
  height: 4rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.buton:hover {
  /* Estilos para el botón cuando está en hover */
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: .1s;
}

@media (min-width: 768px) {

  /* Estilos para el botón cuando la pantalla tiene un ancho mínimo de 768px */
  .buton {
    padding: 0 2.6rem;
  }
}
</style>

<script>
import axios from "axios";
definePageMeta({
  layout: "blank",
});

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password2: "",
      termsChecked: false,
      usernameValid: true,
      emailValid: true,
      passwordValid: true,
      password2Valid: true,
      termsValid: true,
    };
  },

  methods: {
    async submitForm(event) {
      event.preventDefault();
      const { username, email, password, password2 } = this;

      if (password !== password2) {
        window.alert("Las contraseñas no coinciden");
        return;
      }

      try {
        const response = await axios.post(
          "http://localhost:8080/api/users/registro",
          {
            username,
            email,
            password,
          }
        );
        console.log(response.data);
        this.$router.push("/");
      } catch (error) {
        console.error(error);

        if (error.response && error.response.data) {
          window.alert(error.response.data.msg || "Error during signup");
        }
      }
    },
    regresarindex() {
      this.$router.push("/");
    },
  },
  
};
</script>
