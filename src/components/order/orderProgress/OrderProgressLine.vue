<script setup>
import { useOrdersStore } from '@/stores'

const ordersStore = useOrdersStore()
console.log(ordersStore.state.step)
</script>
<template>
  <section>
    <div class="container">
      <div class="circles">
        <div :class="{ stepSelected: ordersStore.state.step >= 1 }"></div>
        <span :class="{ stepSelected: ordersStore.state.step > 1 }"></span>
        <div :class="{ stepSelected: ordersStore.state.step > 1 }"></div>
        <span :class="{ stepSelected: ordersStore.state.step > 2 }"></span>
        <div :class="{ stepSelected: ordersStore.state.step > 2 }"></div>
        <span :class="{ stepSelected: ordersStore.state.step > 3 }"></span>
        <div :class="{ stepSelected: ordersStore.state.step > 3 }"></div>
        <span :class="{ stepSelected: ordersStore.state.step == 5 }"></span>
        <div :class="{ stepSelected: ordersStore.state.step == 5 }"></div>
      </div>
      <div class="container-title">
        <h2>Dados Do Pedido</h2>
        <h2>Dados De Coleta</h2>
        <h2>Dados De Entrega</h2>
        <h2>Conferir os Dados</h2>
        <h2>Finalizado</h2>
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
    width: 55%;
    .container-title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      h2 {
        color: main.$standard-pink;
        font-size: 1rem;
      }
    }
  }
}
.circles {
  width: 90%;
  margin: auto;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    background-color: main.$standard-white;
    border-radius: 50%;
    width: 6rem;
    height: 1.5rem;
  }
  span {
    width: 100%;
    height: 0.1rem;
    background-color: main.$standard-white;
  }
  .stepSelected {
    background-color: main.$standard-pink;
  }
}
@media screen and (max-width: 1024px) {
  section {
    .container {
      width: 95%;
      .container-title {
        h2 {
          font-size: 0.9rem;
        }
      }
      .circles {
        width: 100%;
        div {
          background-color: main.$standard-white;
          border-radius: 50%;
          width: 6rem;
          height: 1.5rem;
        }
        span {
          width: 100%;
          height: 0.1rem;
          background-color: main.$standard-white;
        }
        .stepSelected {
          background-color: main.$standard-pink;
        }
      }
    }
  }
}
</style>
