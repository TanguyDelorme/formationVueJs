
<script setup>/**
Créez une variable appelée isRed avec la valeur initiale false.

Utilisez la directive v-bind pour lier la classe CSS conditionnellement. Si isRed est vrai, appliquez la classe CSS "red", sinon, n'appliquez aucune classe.

Ajoutez un bouton qui inverse l'état de isRed lorsque vous cliquez dessus.

Créez un paragraphe avec du texte, et appliquez la classe conditionnelle à ce paragraphe.

Expérimentez en ajoutant une autre variable fontSize avec une valeur initiale.

Utilisez v-bind pour lier la taille de la police du paragraphe à la valeur de fontSize.

Ajoutez un champ de texte qui permet à l'utilisateur de mettre à jour la valeur de fontSize en temps réel.
*/
import {reactive, ref} from "vue";


const style = reactive({
  isRed: false,
  fontSize: 16
})

const handleClick = () => {
  style.isRed = !style.isRed
}
</script>

<template>
  <br>
  <br>
  <br>
  <h3>Ex 04</h3>
    <v-btn  @click="handleClick" density="default" color="red">Red button</v-btn>
    <p :class="{'red': style.isRed}">I'm a red tag</p>
    <p :style="{fontSize: style.fontSize + 'px'}">Change my size</p>
    <v-text-field
        v-model="style.fontSize"
        label="Size"
    ></v-text-field>
</template>

<style scoped>
.red {
  color: red;
}
</style>
