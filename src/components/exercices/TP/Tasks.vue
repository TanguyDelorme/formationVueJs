<script setup>/**
 Initialisation du Projet :

 Utilisez Vue CLI pour créer un nouveau projet Vue.js.
 Configurez une instance Vue dans le composant principal de l'application.
 Affichage de la Liste de Tâches :

 Dans le data de l'instance Vue, déclarez une variable tasks contenant une liste de tâches (chaque tâche est un objet avec une propriété name).
 Utilisez une directive v-for pour afficher chaque tâche dans le modèle. (Chaque taches doit être dans son propre composent)

 Ajout de Nouvelles Tâches :

 Ajoutez un champ de saisie et un bouton "Ajouter" au modèle.
 Utilisez v-model pour lier le champ de saisie à une nouvelle variable newTask.
 Créez une méthode qui ajoute une nouvelle tâche à la liste lorsque le bouton "Ajouter" est cliqué.

 Marquer une Tâche Comme Complétée :

 Ajoutez une propriété completed à chaque tâche dans la liste (initialisez-la à false).
 Utilisez v-bind pour conditionner l'affichage des tâches en fonction de leur état (completed).
 Ajoutez un bouton à chaque tâche pour la marquer comme complétée. Mettez à jour la propriété completed en conséquence.

 Suppression de Tâches :

 Ajoutez un bouton "Supprimer" à chaque tâche.
 Créez une méthode pour supprimer la tâche correspondante de la liste lorsque le bouton "Supprimer" est cliqué.
 Ajouter un component confirmDialog confirmant la suppression de la tâche.

 Ajoutez une fonctionnalité de filtrage pour afficher uniquement les tâches non complétées.
 Ajoutez des transitions pour améliorer l'expérience utilisateur lors de l'ajout ou de la suppression de tâches.
 Ajoutez une date de fin prévu à chaque tâches et affichez en rouges les tâches non terminé ayant dépassé leurs date de fin
 */
import {ref} from "vue";
import Task from "@/components/exercices/TP/Task.vue";

const task = ref("")
const tasks = ref([
  {
    name: "Eplucher les pommes de terre",
    completed: false,
    limitDate: new Date(2021, 0, 1),
  },
  {
    name: "Faire cuire les oignons",
    completed: true,
    limitDate: new Date(2021, 0, 1)
  },
  {
    name: "Ajouter les lardons aux oignons",
    completed: false,
    limitDate: new Date(2025, 0, 1)
  },
  {
    name: "Verser le vin blanc dans la mixture",
    completed: true,
    limitDate: new Date(2021, 0, 1)
  }
])

let filterTasks = ref(tasks.value)
const addTask = () => {
  const newTask = task.value
  tasks.value.push({name: newTask, limitDate: new Date(2025, 0, 1), completed: false})
  task.value = ""
}

const removeTask = (index) => {
  tasks.value.splice(index, 1)
}

const completeTask = (task) => {
  const tsk = tasks.value[task.index];
  tsk.completed = true;
  tasks.value[task.index] = tsk;
}

const filter = () => {
  filterTasks.value = tasks.value.filter(task => !task.completed)
}
</script>

<template>
  <div class="flex">
    <h1 style="margin-right: 20px">Liste des Tâches </h1>
    <v-icon icon="mdi:mdi-cancel" @click="filter"/>
  </div>
  <ul>
    <Task v-for="(task, index) in filterTasks" :index="index"
          :task="task"
          @complete="completeTask($event)"
          @delete="removeTask($event)">
    </Task>
  </ul>

  <v-form @submit.prevent>
    <v-text-field
        v-model="task"
        label="Tâche"
    ></v-text-field>
    <v-btn class="mt-2" type="button" @click="addTask">Ajouter</v-btn>
  </v-form>
  <br>
  <br>
  <br>
</template>

<style scoped>
.flex {
  display: flex;
  align-items: center;
}
</style>
