<script setup>
    import { ref } from 'vue';
    import JeuDrapeaux from './../views/JeuDrapeaux.vue';

    const Drapeaux = ref(false);

  function resetAll() {
    Drapeaux.value = false;
  }

  function fDrapeaux() {
    resetAll();
    Drapeaux.value = true;
  }
</script>

<template>
    <header>
        <h1>Choisissez le jeu auquel vous voulez jouer !</h1>
    </header>

    <nav>
        <v-btn @click="fDrapeaux">Jeu des drapeaux</v-btn>
    </nav>

    <JeuDrapeaux v-if="Drapeaux" />
</template>

<style scoped>
    header {
        background-color: #ffffff;
        padding: 20px;
        text-align: center;
    }

    h1 {
        color: #000000;
        font-size: 2rem;
    }
</style>