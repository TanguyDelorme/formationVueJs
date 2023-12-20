<script setup>

import {defineProps, ref, onMounted} from "vue";

let props = defineProps({
  counterDefault: {
    type: Number,
    default: 0
  }
});

let count = ref(0)
const add = () => {
  count.value += 1;
}

const decrease = () => {
  if (count.value > 0) {
    count.value -= 1;
  }
}

onMounted(() => {
  count.value = props.counterDefault;
})

</script>

<template>
  <v-btn  @click="add" density="default" color="green">Incrémente</v-btn>
  <v-btn  @click="decrease" density="default" color="orange">Décrémente</v-btn>
  <div>{{ count }}</div>
</template>

<style scoped>
</style>
