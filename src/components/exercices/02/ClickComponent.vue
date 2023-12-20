<script setup>

import {ref} from "vue";

const title = ref("Default title");
/**
Événement de clic :
Ajoutez un élément interactif (bouton, image, etc.) dans le modèle.

Réaction au clic :
Utilisez @click pour lier cet élément à une méthode handleClick.

Action de la méthode :
Dans handleClick, effectuez une action (par exemple, console.log, modification de propriété).

Personnalisation :
Ajoutez une fonctionnalité supplémentaire (effet visuel, changement de texte) en utilisant @click.

*/
const handleClick = () => {
  console.log('click');
  title.value = "New title";
}

</script>

<template>
  <br>
  <br>
  <br>
  <h3>Ex 02</h3>
  <h1>{{ title }}</h1>
  <v-btn  @click="handleClick" density="default" color="green">Change title</v-btn>
</template>

<style scoped>
</style>
