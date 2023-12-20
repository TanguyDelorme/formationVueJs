<script setup>/**
Objectif :
Pratiquer l'utilisation de la directive watch pour observer une variable et filtrer une liste de tâches en fonction de cette variable.

Instructions :

Déclarez une variable tasks avec une liste de tâches. Chaque tâche devrait être un objet avec une propriété name.
Déclarez une variable search avec une valeur initiale vide.
Ajoutez un champ de recherche (input) dans le modèle lié à la variable search à l'aide de la directive v-model.
Déclarez une variable filteredTasks avec une valeur initiale égale à la liste complète des tâches.
Affichez la liste des tâches filtrées (filteredTasks) dans le modèle. Utilisez v-for pour itérer sur les tâches et affichez le nom de chaque tâche dans un élément de liste (li).

Utilisez la directive watch pour observer les changements de la variable search.
À chaque changement de search, mettez à jour la variable filteredTasks pour inclure uniquement les tâches dont le nom contient la valeur de search. Vous pouvez utiliser la méthode filter pour cela.
*/
import {reactive, ref, watch} from "vue";
import debounce from 'lodash.debounce'

const tasks = ref([
  {
    name: "Eplucher les pommes de terre"
  },
  {
    name: "Faire cuire les oignons"
  },
  {
    name: "Ajouter les lardons aux oignons"
  },
  {
    name: "Verser le vin blanc dans la mixture"
  }
])

const search = ref("")

const filteredTasks = ref(tasks.value)

// watch(search, (newSearch) => {
//   filteredTasks.value = tasks.value.filter(t => t.name.toLowerCase().includes(newSearch.toLowerCase()))
// })

watch(search, debounce((newSearch) => {
  filteredTasks.value = tasks.value.filter(t => t.name.toLowerCase().includes(newSearch.toLowerCase()))
}, 500))

</script>

<template>
  <br>
  <br>
  <br>
  <h3>Ex 10</h3>
  <v-text-field
      v-model="search"
      label="Search"
  ></v-text-field>

  <ul>
    <li v-for="task in filteredTasks">
      <div class="flex">
        <p>{{ task.name }}</p>
      </div>
    </li>
  </ul>
</template>

<style scoped>
</style>
