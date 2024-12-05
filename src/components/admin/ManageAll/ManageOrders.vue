<script setup>
import { onMounted, ref } from 'vue'
import { useOrderStore } from '@/stores'
import OrderDetailsModal from '@/components/orderstatus/OrderModalComp.vue'

const orderStore = useOrderStore()
const orders = ref([])

onMounted(async () => {
  await orderStore.getOrders()
  orders.value = orderStore.state.orders
})

const selectedOrder = ref(null)
const isModalVisible = ref(false)

function openModal(order) {
  selectedOrder.value = order
  isModalVisible.value = true
}

function closeModal() {
  isModalVisible.value = false
  selectedOrder.value = null
}
</script>

<template>
  <article>
    <div class="listOrders">
      <div class="headerList">
        <p>ID:</p>
        <p>Status:</p>
        <p>Veículo:</p>
      </div>

      <div class="list">
        <div
          v-for="order in orderStore.state.orders" 
          :key="order.id"
          @click="openModal(order)"
        >
          <p>{{ order.id }}</p>
          <p>{{ order.status }}</p>
          <p>{{ order.vehicle?.plate || 'Não informado' }}</p>
        </div>
      </div>
    </div>

    <!-- Modal de detalhes do pedido -->
    <OrderDetailsModal
      :order="selectedOrder"
      :visible="isModalVisible"
      @close="closeModal"
    />
  </article>
</template>

<style scoped lang="scss">
@use '@/assets/main';

article {
  width: 100%;
  background-color: #070707;
  padding: 1rem 0;
  border-radius: 5px;
  overflow: hidden;
}

.headerList {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 1px solid #c1c1c1;
}

.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 300px;
  overflow-y: auto;
}

.list div {
  border-bottom: 1px solid #c1c1c1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1rem 0;
  cursor: pointer;
}

.list div:hover {
  background-color: #333;
}
</style>
