<script setup>/**
Créez une liste de tâches dans avec plusieurs objets, chaque objet ayant une propriété title représentant le nom de la tâche.
Utilisez la directive v-for pour effectuer le rendu de la liste des tâches dans le modèle.
Affichez le nom de chaque tâche dans un élément <li>.
Ajoutez un bouton à côté de chaque tâche pour permettre à l'utilisateur de supprimer la tâche de la liste.
Utilisez v-on pour écouter l'événement de clic sur le bouton et déclencher une méthode removeTask(index) qui supprime la tâche correspondante de la liste.
Ajoutez un formulaire en bas de la liste pour permettre à l'utilisateur d'ajouter de nouvelles tâches.
Utilisez v-on pour écouter l'événement de soumission du formulaire (submit) et déclencher une méthode addTask qui ajoute une nouvelle tâche à la liste.
*/
import {reactive, ref} from "vue";

const tasks = reactive([
  {
    title: "Eplucher les pommes de terre"
  },
  {
    title: "Faire cuire les oignons"
  },
  {
    title: "Ajouter les lardons aux oignons"
  },
  {
    title: "Verser le vin blanc dans la mixture"
  }
])

const task = ref("")

const removeTask = (index) => {
  tasks.splice(index, 1)
}

const addTask = () => {
  tasks.push({
    title: task.value
  })
  task.value = ""
}
</script>

<template>
  <br>
  <br>
  <br>
  <h3>Ex 08</h3>
  <p>Recette de la tartiflette</p>
  <ul>
    <li v-for="(task, index) in tasks">
      <div class="flex">
        <p style="width: 220px">{{ task.title }}</p>
        <v-btn type="button" @click="removeTask(index)">Remove task</v-btn>
      </div>
    </li>
  </ul>
  <v-form @submit.prevent>
    <v-text-field
        v-model="task"
        label="Task"
    ></v-text-field>
    <v-btn type="button" @click="addTask" block class="mt-2">Ajouter une tache</v-btn>
  </v-form>
</template>

<style scoped>
.flex {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
</style>
