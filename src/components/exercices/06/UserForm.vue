<script setup>/**
Créez une variable user avec les propriétés name et email.
Dans le modèle, créez un formulaire avec des champs de saisie pour le nom et l'e-mail.
Utilisez v-model pour lier ces champs de saisie aux propriétés name et email du user.
Ajoutez un paragraphe dans le modèle qui affiche le contenu du user en temps réel.
Utilisez v-on pour écouter l'événement de soumission du formulaire (submit) et déclencher une méthode submitForm.
Implémentez la méthode submitForm dans le composant. Cette méthode doit afficher une alerte avec les données du user lorsque le formulaire est soumis.
Ajoutez un bouton "Effacer le formulaire" avec un événement de clic qui déclenche une méthode clearForm.
Implémentez la méthode clearForm qui réinitialise les propriétés name et email du user à une chaîne vide.
*/
import {reactive} from "vue";

const user = reactive({
  name: '',
  email: '',
})

const submit = () => {
  alert(`User: ${user.name} - ${user.email}`)
}

const clearForm = () => {
  user.name = ''
  user.email = ''
}
</script>

<template>
  <br>
  <br>
  <br>
  <h3>Ex 06</h3>
  <v-sheet width="700" class="mx-auto">
    <v-form @submit.prevent>
      <v-text-field
          v-model="user.name"
          label="Name"
      ></v-text-field>
      <v-text-field
          v-model="user.email"
          label="Email"
      ></v-text-field>
      <v-btn type="button" @click="submit" block class="mt-2">Submit</v-btn>
      <v-btn type="button" @click="clearForm" block class="mt-2">Clear</v-btn>
    </v-form>
  </v-sheet>

  <p>Name</p>
  <p>{{ user.name }}</p>
  <p>Email</p>
  <p>{{ user.email }}</p>
</template>

<style scoped>
</style>
