<template>
    <center>
        <form @submit="submitconfig">
            <button type="submit" @click="showInfo = true" class="btn-leer">Leer</button>
        </form>
        <br>
        <button type="button" @click="showForm = true" class="crudupdate">Modificar</button><br><br>
        <button type="button" @click="crudeliminar" class="crudeliminar">Eliminar Usuario</button><br><br>
        <div class="nombre-local-container" v-show="showInfo">
            <p style="color: white;">Nombre: {{ nombrelocalstorage }}</p>
            <p style="color: white;">Correo: {{ emailstorage }}</p>
            <p style="color: white;">Contraseña: {{ passwordstorage }}</p>
        </div><br>
        <div class="contenedoreliminar" v-show="showForm">
            <input type="text" placeholder="Nuevo Nombre" v-model="newUsername">
            <input type="text" placeholder="Nuevo Correo" v-model="newEmail">
            <input type="text" placeholder="Nueva Contraseña" v-model="newPassword">
            <button @click="updateUser">Guardar Cambios</button>
        </div>
    </center>
</template>

<style>
#Login {
    font-family: sans-serif;
    color: white;
}

.nombre-local-container {
    background-color: rgba(38, 233, 158, 0.5);
    padding: 10px;
    margin-top: 10px;
    height: 85px;
    width: 400px;
    border-radius: 20px;
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

.crudupdate {
    background-color: rgb(235, 211, 1);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.contenedoreliminar {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    height: 300px;
    width: 400px;
}

.contenedoreliminar input {
width: 100%;
padding: 10px;
margin-bottom: 10px;
border: 1px solid #ccc;
border-radius: 5px;
height: 40px;
}

.contenedoreliminar button {
background-color: #007BFF;
color: #fff;
padding: 10px 20px;
border: none;
border-radius: 5px;
cursor: pointer;
font-size: 16px;
}

.btn-leer {
    background-color: #007BFF;
    color: white; 
    border: none; 
    padding: 10px 20px;
    cursor: pointer; 
    border-radius: 10px; 
}


</style>

<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
            nombrelocalstorage: '',
            showInfo: false,
            showForm: false,
            newUsername: '',
            newEmail: '',
            newPassword: ''
        };
    },

    methods: {
        submitconfig(event) {
            event.preventDefault();
            var objetoRecuperado = JSON.parse(localStorage.getItem('JSON'));
            this.nombrelocalstorage = objetoRecuperado["username"];
            this.emailstorage = objetoRecuperado['email'];
            this.passwordstorage = objetoRecuperado['password'];
        },

        crudeliminar() {
            const confirmDelete = window.confirm("Esta acción no podrá ser reversible. ¿Estás seguro?");
            if (confirmDelete) {
                localStorage.removeItem('JSON');
                localStorage.clear();
                this.$router.push('/');
            }
        },

        updateUser() {
            const newUserData = {
                username: this.newUsername,
                email: this.newEmail,
                password: this.newPassword
            };
            const newUserDataJSON = JSON.stringify(newUserData);
            localStorage.setItem('JSON', newUserDataJSON);
            this.newUsername = '';
            this.newEmail = '';
            this.newPassword = '';
            this.showForm = false;
            this.nombrelocalstorage = newUserData.username;
            this.emailstorage = newUserData.email;
            this.passwordstorage = newUserData.password;
        }
    }
}
</script>