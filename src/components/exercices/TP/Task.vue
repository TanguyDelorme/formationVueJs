<script setup>
import {defineEmits, defineProps, ref, computed, defineAsyncComponent} from "vue";
let ConfirmDialog = defineAsyncComponent(() =>
    import('@/components/exercices/TP/ConfirmDialog.vue')
)

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  }
})

const isModalOpen = ref(false)

const isValidDate = () => {
  const today = new Date();
  return today?.getTime() < props?.task?.limitDate?.getTime();
}

const showConfirmDialog = () => {
  isModalOpen.value = true
}

const emit = defineEmits(['delete', 'complete'])
const removeTask = () => {
  isModalOpen.value = false;
  emit('delete', props.index)
}

const color = computed(() => !isValidDate() && !props.task.completed)
const formattedDate = computed(() => props?.task?.limitDate?.toLocaleDateString('fr-FR', {year: 'numeric', month: 'long', day: 'numeric'}))
</script>

<template>
  <li class="task">
    <p :style="{textDecoration: task.completed ? 'line-through' : 'none', color: color ? 'red' : 'black' }"
       style="width: 250px">
      {{ task.name }}</p>
    <p>{{ formattedDate }}</p>
    <v-icon icon="mdi:mdi-delete" @click="showConfirmDialog"/>
    <v-icon v-if="!task.completed" icon="mdi:mdi-check" @click="$emit('complete', {index: index, complete: true})"/>
    <ConfirmDialog v-if="isModalOpen" @yes="removeTask" @no="isModalOpen = false"></ConfirmDialog>
  </li>

</template>

<style scoped>
.task {
  display: flex;
  align-items: center;
}
</style>
