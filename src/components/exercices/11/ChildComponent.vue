<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  customMessage:{
    type: String,
    default: 'Custom Message'
  }
})


const containsVue = () => {
  return props.customMessage.indexOf('Vue') > -1
}
</script>

<template>
  <div>
    <p>Child</p>
    <p v-if="containsVue()">Message spécial pour les amateurs de Vue !</p>
    <p v-else>Message ordinaire</p>
  </div>
</template>

<style scoped>
</style>
