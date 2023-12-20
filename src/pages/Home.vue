<script setup>
import router from '@/router/index.js'
const goTo = (url) => {
  router.push({ path: `/${url}` })
}
</script>

<template>
  <h1>Welcome to Task app! </h1>
  <v-btn type="button" @click="goTo('computed')" class="mt-2">Exercice 09</v-btn>
  <v-btn type="button" @click="goTo('my-watch')" class="mt-2">Exercice 10</v-btn>
</template>

<style scoped>
</style>
