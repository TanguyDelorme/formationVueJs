<script setup>/**
Créez deux variables : inputValue avec une valeur initiale "" et computedValue avec une valeur initiale de null.
Ajoutez un champ de texte dans le modèle lié à la variable inputValue en utilisant v-model.
Utilisez une valeur calculée (computed) pour afficher la longueur de la valeur actuelle de inputValue. Cette valeur calculée doit s'appeler inputLength.
Affichez computedValue dans le modèle.
Affichez un message conditionnel dans le modèle. Si inputLength est supérieur à 5, affichez "Texte trop long !", sinon, affichez "Texte de longueur acceptable."
*/
import {computed, ref} from "vue";

const inputValue = ref("");

const computedValue = computed(() => inputValue.value.length);
</script>

<template>
  <br>
  <br>
  <br>
  <h3>Ex 09</h3>
  <v-text-field
      v-model="inputValue"
      label="Input Value"
  ></v-text-field>
  <p>Input length : {{ computedValue }}</p>
  <div v-if="computedValue > 5">Texte trop long!</div>
  <div v-else>Texte de longueur acceptable.</div>
</template>

<style scoped>
</style>
