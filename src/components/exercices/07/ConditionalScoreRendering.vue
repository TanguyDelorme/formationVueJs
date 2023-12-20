<script setup>
import {ref} from "vue";

/**
Créez une variable score dans le data avec une valeur initiale.
Utilisez les directives v-if, v-else-if, et v-else pour effectuer un rendu conditionnel en fonction de la valeur de score.
Affichez les messages suivants en fonction de la valeur de score :
Si score est supérieur à 90, affichez "Excellent !"
Si score est compris entre 70 et 90, affichez "Bien joué !"
Si score est inférieur à 70, affichez "Peut faire mieux."
Ajoutez un bouton pour permettre à l'utilisateur de générer une nouvelle valeur pour score.
*/
const score = ref(80)

const randomScore = () => {
  score.value = Math.floor(Math.random() * 150)
}
</script>

<template>
  <br>
  <br>
  <br>
  <h3>Ex 07</h3>
  <h1>Score:  {{ score }}</h1>
  <h2 v-if="score > 90">Excellent!</h2>
  <h2 v-else-if="score > 70">Bien joué!</h2>
  <h2 v-else>Peut faire mieux.</h2>
  <v-btn type="button" @click="randomScore" block class="mt-2">Nouveau score</v-btn>
</template>

<style scoped>
</style>
