<script setup>

import { defineProps, ref } from "vue";

let props = defineProps({
  title: {
    type: String,
    default: 'Rainbow title props'
  }
});

let classColor = ref("")

const changeColor = (color) => {
  classColor.value = color;
}

</script>

<template>
  <h1 :class="classColor">{{ title }}</h1>
  <v-btn  @click="changeColor('red')" density="default" color="red">Red</v-btn>
  <v-btn  @click="changeColor('blue')" density="default" color="blue">Blue</v-btn>
</template>

<style scoped>
.red {
  color: red;
}

.blue {
  color: blue;
}
</style>
