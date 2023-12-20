<script setup>/**
Créez deux compteurs, l'un géré avec ref et l'autre avec reactive. Affichez ces compteurs dans le modèle.

Ajoutez des boutons pour incrémenter et décrémenter chaque compteur.

Affichez la somme des deux compteurs.

Ajoutez un champ de texte qui permet de mettre à jour la valeur d'un des compteurs directement.

Bonus : Ajoutez une fonctionnalité pour réinitialiser les compteurs à zéro.

Astuces :
Utilisez ref pour créer des références réactives simples.
Utilisez reactive pour créer un objet réactif contenant plusieurs propriétés.
*/
import {defineProps, reactive, ref} from "vue";
let count = ref(0)
let data = reactive({ counter: 0})
const add = () => {
  count.value += 1;
}

const decrease = () => {
  if (count.value > 0) {
    count.value -= 1;
  }
}

const add2 = () => {
  data.counter += 1;
}

const decrease2 = () => {
  if (data.counter > 0) {
    data.counter -= 1;
  }
}

const reset = () => {
  count.value = 0;
}

const reset2 = () => {
  data.counter = 0;
}

</script>

<template>
  <br>
  <br>
  <br>
  <h3>Ex 03</h3>
  <div>Ref</div>
  <v-btn  @click="add" density="default" color="green">Incrémente</v-btn>
  <v-btn  @click="decrease" density="default" color="orange">Décrémente</v-btn>
  <div>{{count}}</div>
  <v-btn  @click="reset" density="default" color="black">Reset</v-btn>
  <div>Change left count</div>
  <input type="text" v-model="count">

  <div>Reactive</div>
  <v-btn  @click="add2" density="default" color="green">Incrémente</v-btn>
  <v-btn  @click="decrease2" density="default" color="orange">Décrémente</v-btn>
  <div>{{data.counter}}</div>
  <v-btn  @click="reset2" density="default" color="black">Reset</v-btn>
  <div>Change left count</div>
  <input type="text" v-model="data.counter">
</template>

<style scoped>
</style>
