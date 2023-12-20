<script setup>
import {ref} from "vue";

const menuItems = ref([
  { path: '/', title: 'Home' },
  { path: '/task', title: 'Task' },
  { path: '/hello-world', title: 'HelloWorld' },
  { path: '/clic', title: 'ClickComponent' },
  { path: '/reactive', title: 'ReactiveVarsExercice' },
  { path: '/data-binding', title: 'DataBinding' },
  { path: '/directive-on', title: 'DirectiveOn' },
  { path: '/user-form', title: 'UserForm' },
  { path: '/conditional-score', title: 'ConditionnalScore' },
  { path: '/todo-list', title: 'ToDoList' },
  { path: '/counter', title: 'CounterStore' },
  { path: '/tp-store', title: 'TpStore' },
])
</script>

<template>

  <v-list-item class="flex" v-for="item in menuItems" :to="item.path" :key="item.title" link>
    <v-list-item-content>
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
<!--  <RouterLink to="/">Home</RouterLink>-->
<!--  <RouterLink to="/task">Task</RouterLink>-->
<!--  <RouterLink to="/hello-world">HelloWorld</RouterLink>-->
<!--  <RouterLink to="/clic">ClickComponent</RouterLink>-->
<!--  <RouterLink to="/reactive">ReactiveVarsExercice</RouterLink>-->
<!--  <RouterLink to="/data-binding">DataBinding</RouterLink>-->
<!--  <RouterLink to="/directive-on">DirectiveOn</RouterLink>-->
<!--  <RouterLink to="/user-form">UserForm</RouterLink>-->
<!--  <RouterLink to="/conditional-score">ConditionnalScore</RouterLink>-->
<!--  <RouterLink to="/todo-list">ToDoList</RouterLink>-->
<!--  <RouterLink to="/counter">CounterStore</RouterLink>-->
<!--  <RouterLink to="/tp-store">TpStore</RouterLink>-->
  <RouterView></RouterView>
</template>

<style scoped>
</style>
