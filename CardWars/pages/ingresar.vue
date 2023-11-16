<template>
  <center>
    <div class="container">
      <div class="col-2">
        <div class="styled-div">
          <br />
          <form @submit="submitlogin">
            <br />
            <div class="form-group">
              <label for="username">Usuario</label>
              <input
                id="username"
                type="text"
                placeholder="Ingresa tu usuario"
                v-model="username"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Correo electrónico</label>
              <input
                id="email"
                type="email"
                placeholder="Ingresa tu correo electrónico"
                v-model="email"
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Contraseña</label>
              <input
                id="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                v-model="password"
                required
              />
            </div>
            <br />
            <button class="buton" type="submit" id="Ingresar">Ingresar</button>
            <br /><br />
          </form>
          <button class="buton" type="button" @click="regresar" id="regresar">
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
  height: 580px;
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-size: 20px;
  color: white;
  margin-bottom: 5px;
  display: block;
}

input {
  font-size: 16px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
  transition: border-color 0.3s ease-in-out;
}

input:valid {
  background-color: #ddffdd;
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
