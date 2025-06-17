<script setup>
import { ref, onMounted } from 'vue'

// Références réactives
const drapeaux = ref([]) // tableau de tous les drapeaux chargés depuis le JSON
const drapeauActuel = ref(null) // le drapeau affiché actuellement
const reponseUtilisateur = ref(null) // la réponse que l'utilisateur a choisie
const resultat = ref(null) // vrai/faux selon si la réponse est bonne

// Fonction pour choisir un drapeau au hasard
function choisirDrapeau() {
  const index = Math.floor(Math.random() * drapeaux.value.length)
  drapeauActuel.value = drapeaux.value[index]
  reponseUtilisateur.value = null
  resultat.value = null
}

// Fonction appelée quand l'utilisateur clique sur "Vrai" ou "Faux"
function verifier(reponse) {
  reponseUtilisateur.value = reponse
  resultat.value = reponse === drapeauActuel.value.vraiFaux
}

// Quand le composant est monté, on charge le fichier JSON
onMounted(async () => {
  try {
    const res = await fetch('/drapeaux.json') // ton fichier doit être dans /public
    const data = await res.json()
    drapeaux.value = data.drapeaux || data // s'adapte selon que tu as { "drapeaux": [...] } ou juste [...]
    choisirDrapeau()
  } catch (error) {
    console.error('Erreur de chargement du fichier JSON :', error)
  }
})
</script>

<template>
    <div class="jeu">
    <h1>Ce drapeau est-il vrai ?</h1>
    <div v-if="drapeauActuel">
      <img :src="drapeauActuel.chemin" :alt="drapeauActuel.pays" class="drapeau" />
      <p><strong>Pays :</strong> {{ drapeauActuel.pays }}</p>

      <div class="boutons">
        <button @click="verifier('Vrai')">Vrai</button>
        <button @click="verifier('Faux')">Faux</button>
      </div>

      <div v-if="resultat !== null" class="resultat">
        <p :class="resultat ? 'bon' : 'faux'">
          {{ resultat ? 'Bonne réponse ! 🎉' : 'Mauvaise réponse 😢' }}
        </p>
        <button @click="choisirDrapeau">Nouveau drapeau</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
