<script setup>
import { defineProps } from "vue";

const props = defineProps({
  isOpen:{
    type: Boolean,
    default: false
  }
})

</script>

<template>
    <p>Etes vous sur de vouloir supprimer cette Tache?</p>
    <v-btn  @click="$emit('yes')" density="default" color="blue">Supprimer</v-btn>
    <v-btn  @click="$emit('no')" density="default" color="blue">Annuler</v-btn>
</template>

<style scoped>

</style>
