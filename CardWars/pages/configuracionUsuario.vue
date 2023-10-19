<template>
    <center>
        <form @submit="submitconfig">
            <button type="submit">Leer</button>
        </form>

        <div class="nombre-local-container">
            <p>Usuario:          {{ nombrelocalstorage }}</p>
            <p>Email:            {{ emailstorage }}</p>
            <p>Contraseña:       {{passwordstorage }}</p>

        </div>
        <br>
        <button type="submit" @click="crudeliminar" class="crudeliminar">Eliminar Usuario</button>

        <div class= "contenedoreliminar">
            <h1>HolaMundo</h1>


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
            nombrelocalstorage: ''
        };
    },
    methods: {
        submitconfig(event) {
            event.preventDefault();
            var objetoRecuperado = JSON.parse(localStorage.getItem('JSON'));
            this.nombrelocalstorage = objetoRecuperado["username"];
            this.emailstorage = objetoRecuperado['email']
            this.passwordstorage = objetoRecuperado['password']

            //console.log(nombrelocalstorage)
        },
        crudeliminar(){
            window.confirm("Esta accion no podra ser reversible")
            localStorage.removeItem('JSON');
            localStorage.clear();
            this.$router.push('/');
            
        }

    }
};
</script>

<style>
#Login {
    font-family: sans-serif;
    color: white;
}

.nombre-local-container {
    background-color: lightgray;
    padding: 10px;
    border: 1px solid gray;
    margin-top: 10px;
}
.contenedoreliminar {
    background-color: lightgray;
    padding: 10px;
    border: 1px solid gray;
    margin-top: 10px;
}
.crudeliminar {
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
</style>
