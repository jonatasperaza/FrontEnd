<script setup>
import { useOrderStore } from '@/stores'

const orderStore = useOrderStore()
</script>

<template>
  <section>
    <div class="container">
      <div class="container-title">
        <h2>Feito</h2>
        <h2>Esperando Pagamento</h2>
        <h2>Pago</h2>
        <h2>Esperando Coleta</h2>
        <h2>Pedido Coletado</h2>
        <h2>Esperando Para Sair</h2>
        <h2>Saiu Para Entrega</h2>
        <h2>Entregue</h2>
      </div>
      <div class="circles">
        <!-- {{ orderStore.state.statusCurrentOrder }} -->
        <div :class="{ stepSelected: orderStore.state.statusCurrentOrder >= 1 }"></div>
        <span :class="{ stepSelected: orderStore.state.statusCurrentOrder >= 2 }"></span>
        <div :class="{ stepSelected: orderStore.state.statusCurrentOrder >= 2 }"></div>
        <span :class="{ stepSelected: orderStore.state.statusCurrentOrder >= 3 }"></span>
        <div :class="{ stepSelected: orderStore.state.statusCurrentOrder >= 3 }"></div>
        <span :class="{ stepSelected: orderStore.state.statusCurrentOrder >= 4 }"></span>
        <div :class="{ stepSelected: orderStore.state.statusCurrentOrder >= 4 }"></div>
        <span :class="{ stepSelected: orderStore.state.statusCurrentOrder >= 5 }"></span>
        <div :class="{ stepSelected: orderStore.state.statusCurrentOrder >= 5 }"></div>
        <span :class="{ stepSelected: orderStore.state.statusCurrentOrder >= 6 }"></span>
        <div :class="{ stepSelected: orderStore.state.statusCurrentOrder >= 6 }"></div>
        <span :class="{ stepSelected: orderStore.state.statusCurrentOrder >= 7 }"></span>
        <div :class="{ stepSelected: orderStore.state.statusCurrentOrder >= 7 }"></div>
        <span :class="{ stepSelected: orderStore.state.statusCurrentOrder == 8 }"></span>
        <div :class="{ stepSelected: orderStore.state.statusCurrentOrder == 8 }"></div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@use '../../assets/main.scss';

section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 55%;
  background-color: main.$standard-black;
  border-right: 2px solid main.$standard-pink;

  .container {
    height: 90%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-items: center;

    .container-title {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;

      h2 {
        color: main.$standard-pink;
        font-size: 1rem;
      }
    }
  }

  .circles {
    width: 20%;
    height: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;

    div {
      background-color: main.$standard-white;
      border-radius: 50%;
      height: 8rem;
      width: 1.5rem;
    }

    span {
      height: 60%;
      width: 0.1rem;
      background-color: main.$standard-white;
    }

    .stepSelected {
      background-color: main.$standard-pink;
    }
  }
}

@media screen and (max-width: 768px) {
 section {
  border: none;
  margin-top: 5rem;

  .container{
    height: 65vh;
  }
 }
}
</style>
