<template>
  <center>
    <div class="container">
      <div class="col-2">
        <div class="styled-div">
          <br />
          <form @submit="submitlogin">
            <br />
            <p style="font-size: 25px; color: white">Usuario</p>
            <input
              id="username"
              type="text"
              placeholder="Ingresa tu usuario"
              v-model="username"
              required
            />
            <p style="font-size: 25px; color: white">Correo electrónico</p>
            <input
              id="email"
              type="email"
              placeholder="Ingresa tu correo electrónico"
              v-model="email"
              required
            />
            <p style="font-size: 25px; color: white">Contraseña</p>
            <input
              id="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              v-model="password"
              required
            /><br />
            <button id="Ingresar" type="submit">Ingresar</button><br /><br />
          </form>
          <button type="submit" @click="regresar" id="regresar">
            Regresar
          </button>
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

#Usuario {
  font-size: 20px;
}

#Correo {
  font-size: 20px;
}

#Contra {
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

#Ingresar:hover {
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

<script>
import userService from "@/services/userService";
definePageMeta({
  layout: "blank",
});

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },

  methods: {
    async submitlogin(event) {
      event.preventDefault();
      const credentials = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      try {
        const userData = await userService.login(credentials);
        console.log("Login successful:", userData);
        this.$router.push("/paginaPrincipal");
      } catch (error) {
        console.error(error.message);
        window.alert(error.message || "Login failed");
      }
    },

    regresar() {
      this.$router.push("/");
    },
  },
};
</script>
