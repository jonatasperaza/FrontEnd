<script setup>
import { ref, onMounted, watch } from 'vue'
import OrderBoolDescendingVariant from 'vue-material-design-icons/OrderBoolDescendingVariant.vue'
import { useGeolocation } from '@vueuse/core'

import { useOrderStore, useAuthStore } from '@/stores'

const orderStore = useOrderStore()
const authStore = useAuthStore()

const { coords, resume } = useGeolocation()

const live = ref(false)

let intervalId = null

console.log(orderStore.state.currentOrder?.id)

watch(live, async (isLive) => {
  if (isLive) {
    intervalId = setInterval(async () => {
      console.log('Analyzing your location...')
      console.log(JSON.stringify(coords.value.latitude + ' ' + coords.value.longitude))
      const response = await orderStore.updateOrderLocal(orderStore.state.currentOrder?.id, {
        driver_position: {
          latitude: coords.value.latitude,
          longitude: coords.value.longitude
        }
      })
      console.log(response)
    }, 10000)
  } else if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
})

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

async function editOrder() {
  await orderStore.updateOrderStatus(orderStore.state.currentOrder.id, 5)
}

onMounted(async () => {
  const orderId = await orderStore.getOrderByClientOrByDriver('', authStore.state.user?.driver.id)
  console.log(orderId[0].id)
  await orderStore.getOrder(orderId[0].id)
})
</script>

<template>
  <main v-if="orderStore.state.currentOrder">
    <!-- Top Information -->
    <article class="top">
      <div class="icon">
        <OrderBoolDescendingVariant size="100" />
      </div>
      <div class="title">
        <h2>Minha Entrega</h2>
        <p>Data do Pedido: {{ formatDate(orderStore.state.currentOrder.order_date) }}</p>
        <p>Preço Total: R$150,00</p>
      </div>
    </article>
    <hr />

    <!-- Itens -->
    <article class="items">
      <h3>Itens do Pedido:</h3>
      <div class="headerList">
        <p>Nome</p>
        <p>Quantidade</p>
        <p>Peso (kg)</p>
        <p>Altura (m)</p>
        <p>Observação</p>
      </div>
      <div class="list">
        <div v-for="item in orderStore.state.currentOrder.items" :key="item.name" class="itemList">
          <p>{{ item.name }}</p>
          <p>{{ item.quantity }}</p>
          <p>{{ item.weight }}</p>
          <p>{{ item.height }}</p>
          <p>{{ item.observation }}</p>
        </div>
      </div>
    </article>
    <hr />

    <!-- Dados de Coleta -->
    <article class="collect">
      <h3>Dados de Coleta:</h3>
      <p>
        Endereço: {{ orderStore.state.currentOrder.address_collect.street }}, Nº
        {{ orderStore.state.currentOrder.address_collect.number }}
      </p>
      <p>Bairro: {{ orderStore.state.currentOrder.address_collect.neighborhood }}</p>
      <p>Cidade: {{ orderStore.state.currentOrder.address_collect.city }}</p>
      <p>Estado: {{ orderStore.state.currentOrder.address_collect.state }}</p>
      <p>
        Data Prevista de Coleta:
        {{ formatDate(orderStore.state.currentOrder.delivery.date_preview_colect) }}
      </p>
    </article>
    <hr />

    <!-- Dados de Entrega -->
    <article class="delivery">
      <h3>Dados de Entrega:</h3>
      <p>
        Endereço: {{ orderStore.state.currentOrder.address_delivery.street }}, Nº
        {{ orderStore.state.currentOrder.address_delivery.number }}
      </p>
      <p>Bairro: {{ orderStore.state.currentOrder.address_delivery.neighborhood }}</p>
      <p>Cidade: {{ orderStore.state.currentOrder.address_delivery.city }}</p>
      <p>Estado: {{ orderStore.state.currentOrder.address_delivery.state }}</p>
      <p>
        Data Prevista de Entrega:
        {{ formatDate(orderStore.state.currentOrder.delivery.date_preview_delivery) }}
      </p>
    </article>
    <hr />

    <!-- Buttons -->
    <div class="actions">
      <button @click="editOrder">Confirmar Coleta</button>
      <button @click="resume">Iniciar Entrega</button>
      <button @click="live = !live">
        {{ live ? 'Stop Live Mode' : 'Start Live Mode' }}
      </button>
    </div>
  </main>
</template>

<style scoped>
main {
  margin: 20px auto;
  background-color: #070707;
  border: 1px solid #c1c1c1;
  border-radius: 10px;
  padding: 1rem;
  width: 50%;
}

.top {
  display: grid;
  grid-template-columns: 2fr 4fr;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

span {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title > p {
  margin: 0;
  color: #c1c1c1;
}

.items,
.collect,
.delivery {
  margin-top: 1rem;
}

.items h3,
.collect h3,
.delivery h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #c1c1c1;
}

.headerList {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-bottom: 1px solid #ccc;
  padding: 1rem;
  font-size: 80%;
}

.list {
  display: grid;
}

.itemList {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  font-size: 80%;
}

.date {
  display: flex;
  flex-direction: column;
}

.actions {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}

.actions button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #333;
  cursor: pointer;
}

.actions button:hover {
  background-color: #555;
}

@media screen and (max-width: 1024px) {
  main {
    width: 90%;
  }

  .headerList,
  .itemList {
    grid-template-columns: 1fr;
  }
}
</style>