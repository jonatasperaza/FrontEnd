<script setup>
import { ref } from 'vue'

const selectedType = ref(null)
function selectType(Type) {
  selectedType.value = Type
}
</script>
<template>
  <div class="row">
    <button @click="selectType('feito')" :class="{ selectedPink: selectedType === 'feito' }">
      Feito</button
    ><button @click="selectType('pendente')" :class="{ selectedPink: selectedType === 'pendente' }">
      Pendente</button
    ><button
      @click="selectType('finalizado')"
      :class="{ selectedPink: selectedType === 'finalizado' }"
    >
      Finalizado
    </button>
  </div>
</template>
<style scoped lang="scss">
@use '../../../assets/main';
.row {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  width: 100%;
  margin: 1rem 0;
  button {
    width: 25%;
    height: 3rem;
    font-size: 35px;
    border: none;
    cursor: pointer;
    border-bottom: 2px solid main.$standard-white;
    color: main.$standard-white;
    background-color: main.$standard-black;
  }
  .selectedPink {
    border-bottom: 2px solid main.$standard-pink;
  }
}
</style>
