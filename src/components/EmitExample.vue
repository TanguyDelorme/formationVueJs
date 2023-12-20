<script setup>

</script>

<template>
  <v-btn  @click="$emit('closeModal')" density="default" color="green">
    <slot></slot>
  </v-btn>
</template>

<style scoped>
</style>
