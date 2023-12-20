<script setup>/**
Créez une variable message data avec une valeur initiale.
Ajoutez un paragraphe dans le modèle qui affiche le contenu de la variable message.
Ajoutez un bouton avec le texte "Changer le message".
Utilisez la directive v-on pour écouter l'événement de clic sur le bouton et déclencher une méthode updateMessage.
Implémentez la méthode updateMessage dans le composant. Cette méthode doit changer la valeur de la variable message pour un nouveau message.
Ajoutez un champ de texte dans le modèle.
Utilisez v-on pour écouter l'événement de saisie de texte (input) et déclencher une méthode updateMessage à chaque modification.
Implémentez la méthode updateMessage qui met à jour la variable message avec la valeur saisie dans le champ de texte.
Astuces :
v-on peut être utilisé pour écouter différents types d'événements, comme les clics, les saisies de texte, les survols de la souris, etc.
*/
import {ref} from "vue";

const messageData = ref("Default message")

const updateMessage = (message) => {
  messageData.value = message
}
</script>

<template>
  <br>
  <br>
  <br>
  <h3>Ex 05</h3>
  <p>{{messageData}}</p>
  <v-btn  @click="updateMessage('New Message')" density="default" color="orange">Changer le message</v-btn>
  <p>Type a message</p>
  <v-text-field
      label="Message"
      @input="(e) => updateMessage(e.target.value)"
  ></v-text-field>
</template>

<style scoped>
</style>
