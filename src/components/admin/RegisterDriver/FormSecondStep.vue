<script setup>
import { ref } from 'vue'
import { useDriverStore } from '@/stores'
import { toast } from 'vue3-toastify'

const driverStore = useDriverStore()
const selectedCategory = ref(null)
function selectCategory(Category) {
  selectedCategory.value = Category
  driverStore.state.driver_data.type_cnh = Category
}

function verify() {
  if (driverStore.state.driver_data.type_cnh === '') {
    toast.warn('Selecione uma categoria')
    return false
  } else {
    return true
  }
}
</script>
<template>
  <h2>Carteira</h2>
  <form @submit.prevent>
    <h3>Categoria de <span class="strong-pink">Carteira:</span></h3>
    <button @click="selectCategory('A')" :class="{ selectedPink: selectedCategory === 'A' }">
      A</button
    ><button @click="selectCategory('B')" :class="{ selectedPink: selectedCategory === 'B' }">
      B</button
    ><button @click="selectCategory('C')" :class="{ selectedPink: selectedCategory === 'C' }">
      C</button
    ><button @click="selectCategory('D')" :class="{ selectedPink: selectedCategory === 'D' }">
      D</button
    ><button @click="selectCategory('E')" :class="{ selectedPink: selectedCategory === 'E' }">
      E</button
    ><button @click="selectCategory('AB')" :class="{ selectedPink: selectedCategory === 'AB' }">
      AB</button
    ><button @click="selectCategory('AC')" :class="{ selectedPink: selectedCategory === 'AC' }">
      AC</button
    ><button @click="selectCategory('AD')" :class="{ selectedPink: selectedCategory === 'AD' }">
      AD</button
    ><button @click="selectCategory('AE')" :class="{ selectedPink: selectedCategory === 'AE' }">
      AE
    </button>
    <button class="nextButton" @click="verify() ? $emit('next') : null">Próximo</button>
    <button class="backButton" @click="$emit('back')">Voltar</button>
  </form>
</template>
<style scoped lang="scss">
@use '../../../assets/main';
h2 {
  color: main.$standard-white;
  font-size: 50px;
  width: max-content;
  font-weight: 800;
  margin: 1rem auto;
  padding-left: 1rem;
  border-left: 2px solid main.$standard-pink;
  font-style: italic;
}
form {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem auto 4rem auto;
  h3 {
    color: main.$standard-white;
    font-size: 25px;
    text-align: center;
    font-weight: 800;
    margin: 1rem 0;
  }
  button {
    width: 100%;
    height: 3rem;
    border: 2px solid main.$standard-white;
    border-radius: 0.5rem;
    color: main.$standard-pink;
    background-color: main.$standard-black;
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;
    margin: 1rem 0;
    transition: 0.3s ease-in-out;
    text-align: left;
    padding: 0 0 0 1rem;
  }
  button:hover {
    background-color: main.$standard-pink;
    color: main.$standard-black;
    border: 2px solid main.$standard-pink;
  }
  .selectedPink {
    background-color: main.$standard-pink;
    border: 2px solid main.$standard-pink;
    color: main.$standard-black;
  }
  .nextButton {
    background-color: main.$standard-pink;
    color: main.$standard-white;
    border: none;
    text-align: center;
    padding: 0;
  }
  .backButton {
    background-color: main.$standard-black;
    color: main.$standard-pink;
    border: 2px solid main.$standard-pink;
    text-align: center;
    padding: 0;
  }
  .nextButton:hover {
    background-color: main.$standard-black;
    color: main.$standard-pink;
    border: none;
  }
  .backButton:hover {
    background-color: main.$standard-pink;
    color: main.$standard-white;
  }
}
</style>
