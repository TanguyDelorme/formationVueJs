<script setup>
import {defineProps} from "vue";

const props = defineProps({
  isOpen:{
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div v-if="isOpen">
    <p>Modal is opened !</p>
    <v-btn  @click="$emit('onPress')" density="default" color="blue">Fermer modal</v-btn>
  </div>
</template>

<style scoped>
</style>
