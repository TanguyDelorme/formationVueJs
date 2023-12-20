<script setup>
import { computed, defineAsyncComponent, ref } from 'vue';
const ConfirmDialog = defineAsyncComponent(() =>
    import('@/components/exercices/TPStore/ConfirmDialog.vue')
)

let props = defineProps({
    task : Object
})

let isDialogOpen = ref(false)

let humanDate = computed( () => {
    return props.task.deadline.toLocaleDateString("fr-FR")
})

let lineColor = computed( () => {
    return props.task.deadline.getTime() < (new Date()).getTime() - 1000 * 3600 * 24 ? 'red' : ''
})

</script>

<template>
    <tr :style="{color : lineColor}">
        <td :style="{textDecoration: task.completed ? 'line-through' : ''}">
            {{task.name}}
        </td>

        <td>
            {{ humanDate }}
        </td>

        <td>
            <button @click="$emit('completedTask', task)">Completed</button>
          <v-icon v-if="!task.completed" icon="mdi:mdi-check" @click="$emit('completedTask', task)"/>
          <v-icon v-else icon="mdi:mdi-close" @click="$emit('completedTask', task)"/>
          <v-icon icon="mdi:mdi-delete" @click="isDialogOpen = true"/>
        </td>


        <confirm-dialog 
            v-if="isDialogOpen"
            @yes="isDialogOpen = false; $emit('deleteTask', task)"
            @no="isDialogOpen = false"
            />
    </tr>
</template>

<style scoped>
</style>