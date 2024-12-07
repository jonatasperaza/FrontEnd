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

const statusOptions = [
  { value: 0, label: 'Aguardando Pagamento' },
  { value: 1, label: 'Pagamento Aprovado' },
  { value: 2, label: 'Em Preparação' },
  { value: 3, label: 'Aguardando Coleta' },
  { value: 4, label: 'Em Andamento' },
  { value: 5, label: 'Pedido Coletado' },
  { value: 6, label: 'Pronto para a Entrega' },
  { value: 7, label: 'Aguardando Entrega' },
  { value: 8, label: 'Entregue' },
  { value: 9, label: 'Falha na Entrega' },
  { value: 10, label: 'Devolvido' },
  { value: 11, label: 'Cancelado' },
];

function statusProcessor(satusId){
  return statusOptions.find(status => status.value === satusId).label
}

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
  <h3 style="margin: auto; width: 80%;">Manage Orders:</h3>
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
          <p>{{ statusProcessor(order.status) }}</p>
          <p>{{ order.vehicle?.plate || 'Não informado' }}</p>
        </div>
      </div>
    </div>

    <!-- Modal de detalhes do pedido -->
    <OrderDetailsModal
      :order="selectedOrder"
      @close="closeModal"
      v-if="isModalVisible"
    />
  </article>
</template>

<style scoped lang="scss">
@use '@/assets/main';

article {
  width: 80%;
  background-color: #070707;
  padding: 1rem;
  border-radius: 15px;
  overflow: hidden;
  margin: auto;
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
  transition: 0.4s ease-in-out;
}

.list div:hover {
  background-color: #333;
}
</style>
