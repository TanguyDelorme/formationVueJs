<script setup>
import userCounter from "@/store/counterStore.js";

const countStore = userCounter()


</script>

<template>
  <div>
    <h1>Counter: {{ countStore.count }}</h1>
    <v-btn type="button" @click="countStore.increment" class="mt-2">Increment</v-btn>
    <v-btn type="button" @click="countStore.decrement" class="mt-2">Decrement</v-btn>
  </div>
</template>

<style scoped>
</style>
