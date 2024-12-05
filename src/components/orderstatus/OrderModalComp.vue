<script setup>
import order from '@/services/order/order';
import { defineProps, defineEmits, ref } from 'vue'
import axios from 'axios';

const props = defineProps({
  order: {
    type: Object,
    required: true,
  },
  visible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['close', 'update-status'])

// Lista de status disponíveis
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
]

const statusselect = ref('')
// Função para atualizar o status
async function updateStatus(newStatus) {
    statusselect.value = newStatus
    const response = await axios.post(`https://api.fexcompany.me/api/orders/${props.order.id}/status/${newStatus}/`, {})
    console.log(response)
}
</script>

<template>
  <div
    v-if="visible"
    class="modal-overlay"
    @click.self="emit('close')"
  >
    <div class="modal-content">
      <h2>Detalhes do Pedido</h2>
      <div v-if="order">
        <!-- Dados do pedido -->
        <p><strong>Motorista:</strong> {{ order.driver?.name || 'Não informado' }}</p>
        <p><strong>Veículo:</strong> {{ order.vehicle?.name || 'Não informado' }}</p>
        <p>
          <strong>Status:</strong>
          <select
            name="status"
            :value="order.status"
            @change="updateStatus($event.target.value)"
            id="status"

          >
            <option
              v-for="option in statusOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </p>
        <p><strong>Data Gerada:</strong> {{ new Date(order.payment?.date_generated).toLocaleString() || 'Não disponível' }}</p>
        <p><strong>Valor:</strong> R$ {{ parseFloat(order.payment?.transaction_amount).toFixed(2) || '0.00' }}</p>
      </div>
      <button class="close-btn" @click="emit('close')">Fechar</button>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #000;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  text-align: center;
  border: 1px solid #c1c1c1;
}

.close-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff5f5f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.close-btn:hover {
  background-color: #ff4c4c;
}

p {
  color: #fff;
}

select {
  background: #333;
  color: white;
  border: 1px solid #c1c1c1;
  border-radius: 4px;
  padding: 5px;
}
</style>
