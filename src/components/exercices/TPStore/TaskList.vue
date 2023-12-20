<script setup>
import TaskLine from '@/components/exercices/TPStore/TaskLine.vue'
import {storeToRefs} from 'pinia'


import {useMouse} from "./useMouse.js";
import useTask from "@/store/taskStore.js";

const {x, y} = useMouse();

const todo = useTask()

const {nameToAdd, dateToAdd, filterCompleted} = storeToRefs(todo)

</script>

<template>
  <h1>TP TASK STORE</h1>
  <div class="flex">
    <v-form @submit.prevent style="margin-right: 20px">
      <v-text-field
          v-model="nameToAdd"
          label="Name"
      ></v-text-field>
      <v-date-picker v-model="dateToAdd" elevation="24"></v-date-picker>
    </v-form>

    <div class="flex-column">
      <v-btn class="mt-2" type="button" @click="todo.add()">Add</v-btn>
      <v-btn class="mt-2" type="button" @click="todo.hide()">{{todo.showCompleted ? 'Show Completed' : 'Hide Completed'}} </v-btn>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>DeadLine</th>
          <th>Actions</th>
        </tr>
        </thead>

        <TransitionGroup name="list" tag="tbody">
          <task-line
              v-for="task in filterCompleted" :key="task.name"
              :task="task"
              @completedTask="todo.completed"
              @deleteTask="todo.delete"
          />
        </TransitionGroup>
      </table>
    </div>

  </div>

  x : {{ x }}

  <br/>

  y : {{ y }}
</template>

<style scoped>
.flex {
  display: flex;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>
