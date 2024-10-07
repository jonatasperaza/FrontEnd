<script setup>
import { ref, onMounted } from 'vue';
import { useOrdersStore } from '@/stores';


const ordersStore = useOrdersStore();
console.log(ordersStore.state.step);

</script>
<template>
  <section>
    <div class="container">
      <div class="circles">
        <div :class="{ 'stepSelected': ordersStore.state.step >= 1 }"></div>
        <span :class="{ 'stepSelected': ordersStore.state.step > 1 }"></span>
        <div :class="{ 'stepSelected': ordersStore.state.step > 1 }"></div>
        <span :class="{ 'stepSelected': ordersStore.state.step == 3 }"></span>
        <div :class="{ 'stepSelected': ordersStore.state.step == 3 }"></div>
      </div>
      <div class="container-title">
        <h2 :class="{ 'stepSelected2': ordersStore.state.step >= 1 }">dados do pedido</h2>
        <h2 :class="{ 'stepSelected2': ordersStore.state.step >= 1 }">dados de coleta</h2>
        <h2 :class="{ 'stepSelected2': ordersStore.state.step >= 1 }">dados de entrega</h2>
      </div>  
    </div>
  </section>
</template>
<style scoped lang="scss">
@use '../../../assets/main.scss';

section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: main.$standard-black;

  .container {
    width: 50%;

    .container-title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;

      h2 {
        color: main.$standard-white;
        font-size: 1rem;
      }
    }
  }
}

.circles {
  width: 88%;
  margin: auto;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    background-color: main.$standard-white;
    border-radius: 50%;
    width: 3.5rem;
    height: 1.5rem;
  }

  span {
    width: 100%;
    height: 0.1rem;
    background-color: main.$standard-white;
  }

  .stepSelected {
    background-color: main.$standard-pink !important;
  }
  .stepSelected2 {
    color: main.$standard-pink !important;
  }
}
</style>
