<template>
    <center>
        <div>
            <h1 id="Create-Your-Card">Create Your Card</h1>
            <br>
            <br>
            <card-creator />
            <nuxt-link to="/MyCardsPage" id="Ver-Mis-Cartas">Ver Mis Cartas</nuxt-link>
        </div>
    </center>
</template>
  
<script>
import CardCreator from '~/components/CardCreator.vue';

export default {
  components: {
    CardCreator
  }
};
</script>

<style>
#Create-Your-Card{
  font-family: sans-serif;
  color: white;
  text-align: center;
  margin-top: 100px;
}

#Ver-Mis-Cartas{
  font-family: sans-serif;
  color: white;
}
</style>