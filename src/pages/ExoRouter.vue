<script setup>
import { useRoute } from 'vue-router'
import ParentComponent11 from "@/components/exercices/11/ParentComponent.vue";
import ParentComponent12 from "@/components/exercices/12/ParentComponent.vue";
import Tasks from "@/components/exercices/TP/Tasks.vue";
import router from '@/router/index.js'

const route = useRoute()

let id = route?.params?.id

const redirect = (name) => {
  router.push(`/exo/${name}`)
}
</script>

<template>
  <h1>id:  {{ id }}</h1>
  <v-btn type="button" @click="redirect('1')" class="mt-2">Exercice 11</v-btn>
  <v-btn type="button" @click="redirect('2')" class="mt-2">Exercice 12</v-btn>
  <v-btn type="button" @click="redirect('3')" class="mt-2">TP</v-btn>

  <ParentComponent11 v-if="route?.params?.id === '1'"></ParentComponent11>
  <ParentComponent12 v-else-if="route?.params?.id === '2'"></ParentComponent12>
  <Tasks v-else></Tasks>
</template>

<style scoped>
</style>
