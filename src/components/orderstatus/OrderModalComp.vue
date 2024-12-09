<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useDriverStore, useVehicleStore, useOrderStore } from '@/stores'

const driverStore = useDriverStore()
const vehicleStore = useVehicleStore()
const orderStore = useOrderStore()

const props = defineProps({
  order: {
    type: Object,
    required: true,
    default: null
  }
})

const emit = defineEmits(['close', 'update-status', 'close-loader'])

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
  { value: 11, label: 'Cancelado' }
]

const statusSelect = ref(props.order.status || 0)
const vehicleSelect = ref(props.order?.vehicle?.id || '')
const driverSelect = ref(props.order?.driver?.id || '')

const changes = ref({ status: false, vehicle: false, driver: false })

const updateField = (field, value) => {
  changes.value[field] = true
  if (field === 'status') statusSelect.value = value
  if (field === 'vehicle') vehicleSelect.value = value
  if (field === 'driver') driverSelect.value = value
}

const updateVehicleDriver = async () => {
  const { id } = props.order

  try {
    if (changes.value.status) {
      await orderStore.updateOrderStatus(id, statusSelect.value)
    }
    if (changes.value.vehicle) {
      await orderStore.updateOrderVehicle(id, vehicleSelect.value)
    }
    if (changes.value.driver) {
      await orderStore.updateOrderDriver(id, driverSelect.value)
    }
    emit('close-loader')
  } catch (error) {
    console.error('Error updating order:', error)
  }
}

onMounted(() => {
  statusSelect.value = props.order.status || 0
  vehicleSelect.value = props.order?.vehicle?.id || ''
  driverSelect.value = props.order?.driver?.id || ''
})
</script>

<template>
  <div class="modal-overlay" @click.self="emit('close')">
    <div class="modal-content">
      <h2>Detalhes do Pedido</h2>
      <div v-if="order">
        <div class="field-row">
          <label for="driver"><strong>Motorista:</strong></label>
          <select
            id="driver"
            v-model="driverSelect"
            @change="updateField('driver', $event.target.value)"
          >
            <option value="" disabled>Selecione um motorista</option>
            <option v-for="driver in driverStore.state.drivers" :key="driver.id" :value="driver.id">
              {{ driver.name }}
            </option>
          </select>
        </div>

        <div class="field-row">
          <label for="vehicle"><strong>Veículo:</strong></label>
          <select
            id="vehicle"
            v-model="vehicleSelect"
            @change="updateField('vehicle', $event.target.value)"
          >
            <option value="" disabled>Selecione um veículo</option>
            <option
              v-for="vehicle in vehicleStore.state.vehicles"
              :key="vehicle.id"
              :value="vehicle.id"
            >
              {{ vehicle.plate }}
            </option>
          </select>
        </div>

        <div class="field-row">
          <label for="status"><strong>Status:</strong></label>
          <select
            id="status"
            v-model="statusSelect"
            @change="updateField('status', $event.target.value)"
          >
            <option value="" disabled>Selecione um status</option>
            <option v-for="option in statusOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>

      <div class="actions">
        <button class="close-btn" @click="emit('close')">Fechar</button>
        <button class="update-btn" @click="updateVehicleDriver">Alterar</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/main';

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
  z-index: 1;
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

.field-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}

label {
  margin-right: 10px;
  color: #fff;
}

select {
  background: #333;
  color: white;
  border: 1px solid #c1c1c1;
  border-radius: 4px;
  padding: 5px;
  transition: 0.3s ease-in-out;
}

select:hover {
  background: #4444;
}

option {
  background: #333;
  color: white;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.close-btn,
.update-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
}

.close-btn {
  background-color: #fc1d87;
  transition: 0.3s ease-in-out;
}

.update-btn {
  background-color: #1d87fc;
  transition: 0.3s ease-in-out;
}

.close-btn:hover {
  background-color: #ff4c4c;
}

.update-btn:hover {
  background-color: #1d70fc;
}
</style>
