<template>
    <center>
        <div>
            <h1>Create Your Card</h1>
            <br>
            <br>
            <card-creator />
            <nuxt-link to="/MyCardsPage">Ver Mis Cartas</nuxt-link>
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