<script setup>
import { ref, computed } from 'vue'
import DoneOrders from './DoneOrders.vue'
import PendingOrders from './PendingOrders.vue'
import FinishedOrders from './FinishedOrders.vue'

const selectedType = ref('done')
const selectedTypeComponent = computed(() => {
  if (selectedType.value === 'done') return DoneOrders
  if (selectedType.value === 'pending') return PendingOrders
  if (selectedType.value === 'finished') return FinishedOrders
})
function selectType(type) {
  selectedType.value = type
}
</script>
<template>
  <div class="row">
    <button @click="selectType('done')" :class="{ selectedPink: selectedType === 'done' }">
      Feito
    </button>
    <button @click="selectType('pending')" :class="{ selectedPink: selectedType === 'pending' }">
      Pendente
    </button>
    <button @click="selectType('finished')" :class="{ selectedPink: selectedType === 'finished' }">
      Finalizado
    </button>
  </div>
  <transition name="fade" mode="out-in">
    <component :is="selectedTypeComponent" key="selectedType" />
  </transition>
</template>
<style scoped lang="scss">
@use '../../assets/main';
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
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

@media screen and (max-width: 1150px) {
  .row {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;
  button {
    width: 30%;
    height: 3rem;
    font-size: 25px;
  }
  .selectedPink {
    border-bottom: 2px solid main.$standard-pink;
  }
}
}
</style>
