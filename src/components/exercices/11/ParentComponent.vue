<script setup>
import {ref} from "vue";
import ChildComponent from "@/components/exercices/11/ChildComponent.vue";

/**
Composant Parent :
Dans le composant parent, déclarez une variable message dans la section data avec une valeur initiale, par exemple "Bienvenue dans l'exercice sur les props !".
Affichez la valeur de message dans le modèle.

Composant Enfant :
Configurez ChildComponent pour accepter une prop nommée customMessage.

Dans le composant parent, incorporez le composant enfant en l'appelant dans le modèle. 
Passez la variable message en tant que prop customMessage.

Ajoutez un bouton "Modifier le message". dans le composant parent 
Ajoutez une méthode dans le composant parent qui modifie la valeur de la variable message à quelque chose de nouveau lorsque le bouton est cliqué.

Utilisez la directive v-if dans le composant enfant pour afficher un message conditionnel. Si la prop customMessage contient le mot "Vue", affichez "Message spécial pour les amateurs de Vue !", sinon, affichez "Message ordinaire".
*/
const message = ref("Bienvenue dans l'exercice sur les props !")

const updateMessage = () => {
  message.value = "Vue c'est cool!"
}
</script>

<template>
  <br>
  <br>
  <br>
  <h3>Ex 11</h3>
  <p>{{ message }}</p>
  <v-btn  @click="updateMessage()" density="default" color="blue">Update message</v-btn>
  <ChildComponent :custom-message="message"></ChildComponent>
</template>

<style scoped>
</style>
