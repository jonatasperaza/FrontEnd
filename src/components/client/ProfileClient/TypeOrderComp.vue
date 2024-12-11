<script setup>
import { ref, onMounted } from 'vue'
import { useOrderStore, useAuthStore } from '@/stores'
import router from '@/router'
import ExportVariant from 'vue-material-design-icons/ExportVariant.vue'

const orderStore = useOrderStore()
const authStore = useAuthStore()

const orders = ref([])

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

function statusProcessor(satusId) {
  return statusOptions.find((status) => status.value === satusId).label
}

onMounted(async () => {
  orders.value =
    (await orderStore.getOrderByClientOrByDriver(authStore.state.user.client.id, '')) || []
})

const exampleOrder = {
  id: 7,
  status: 5,
  order_date: '2024-12-09T13:30:17.185054-03:00',
  client: {
    id: 16,
    name: 'Jonatas Peraza',
    user: {
      id: 71,
      password: '!IIUrYskyEFauB6FLZLasNirntHY2ytfDxXipsCjP',
      last_login: null,
      is_superuser: false,
      first_name: '',
      last_name: '',
      is_staff: false,
      is_active: true,
      date_joined: '2024-12-06T00:34:58.286712-03:00',
      username: 'jonatasperaza',
      name: 'Jonatas Peraza',
      email: 'jonatassilvaperaza@gmail.com',
      telephone: '47984206606',
      passage_id: 'Ouh6wkVwfiTh7QBagiqjji32',
      groups: [],
      user_permissions: []
    }
  },
  vehicle: null,
  driver: {
    id: 24,
    name: 'Anthony Gabriel Loche dos Reis',
    type_cnh: 'E',
    cpf: '11345562926',
    date_birth: '1212-12-12',
    cnh: '123123123',
    user: {
      id: 74,
      password: '!mNvjWMbeN65G6hBiETH1phQxpi8YXwinDwE78SGj',
      last_login: null,
      is_superuser: false,
      first_name: '',
      last_name: '',
      is_staff: false,
      is_active: true,
      date_joined: '2024-12-10T13:52:05.659459-03:00',
      username: 'AnthonyTadalafila',
      name: 'Anthony Gabriel Loche dos Reis',
      email: 'anthonygabrielloche@gmail.com',
      telephone: '12345678',
      passage_id: 'RU6Jq7Y8ZyanNvL0IyAk9toz',
      groups: [],
      user_permissions: []
    }
  },
  delivery: {
    id: 27,
    driver_position: "{'latitude': -26.394619290449427, 'longitude': -48.737841699994085}",
    date_preview_delivery: '2024-12-13T00:00:00-03:00',
    date_effected_delivery: null,
    date_preview_colect: '2024-12-11T00:00:00-03:00',
    date_effected_colect: null,
    address: 'Rua Lituânia 180, Morro do Meio, Joinville, SC, ',
    distance: 25175.0
  },
  payment: {
    id: 25,
    payment_id: '95795183280',
    status: 'cancelled',
    transaction_amount: '1.00',
    description: 'Descrição para Um Pedido',
    payment_method_id: 'pix',
    payer_email: 'jonatassilvaperaza@gmail.com',
    payer_identification_type: 'CPF',
    payer_identification_number: '13754587951',
    pix_copyPaste:
      '00020126580014br.gov.bcb.pix013603fff190-7f9f-43ee-bb38-083eb807869a52040000530398654041.005802BR5925PERAZASUNAMITA202206062026009Sao Paulo62240520mpqrinter9579518328063049495',
    date_generated: '2024-12-09T13:30:16.254000-03:00',
    date_update: '2024-12-10T13:36:46-03:00',
    date_expiration: '2024-12-10T13:30:15.989000-03:00',
    ticket_url:
      'https://www.mercadopago.com.br/payments/95795183280/ticket?caller_id=1807436309&hash=06140a97-b30d-4e42-8132-de70eeb65b7f',
    card: null,
    installments: null
  },
  address_delivery: {
    id: 13,
    cep: '',
    street: 'Rua Lituânia',
    number: '180',
    complement: null,
    neighborhood: 'Morro do Meio',
    city: 'Joinville',
    state: 'SC',
    typeAddress: '0',
    id_order: 7
  },
  address_collect: {
    id: 14,
    cep: '',
    street: 'Rua Lituânia',
    number: '180',
    complement: null,
    neighborhood: 'Morro do Meio',
    city: 'Joinville',
    state: 'SC',
    typeAddress: '1',
    id_order: 7
  },
  items: [
    {
      name: 'Item teste',
      quantity: 10,
      observation: 'teste',
      weight: '10.00',
      height: '10.00',
      id_order: 7
    },
    {
      name: 'teste 2',
      quantity: 102,
      observation: 'testeee',
      weight: '2.00',
      height: '29.00',
      id_order: 7
    }
  ]
}

const copyPixKey = async (key) => {
  try {
    await navigator.clipboard.writeText(key)
    alert('Chave PIX copiada com sucesso!')
  } catch (error) {
    console.error('Erro ao copiar a chave PIX:', error)
    alert('Erro ao copiar a chave PIX.')
  }
}
</script>

<template>
  <div class="container">
    <h2 class="title">Lista de Pedidos</h2>
    <div class="table">
      <div class="table-header">
        <p>ID</p>
        <p>Produto</p>
        <p>Peso (kg)</p>
        <p>Data</p>
        <p>Status</p>
        <p>Pagamento</p>
        <p>PIX</p>
      </div>
      <div class="table-body">
        <div
          class="table-row"
          v-for="order in orders"
          :key="order.id"
        >
          <p>{{ order.id }}</p>
          <p>{{ order.items[0]?.name || 'N/A' }}</p>
          <p>{{ order.items[0]?.weight || '0.00' }}</p>
          <p>{{ new Date(order.order_date).toLocaleDateString() }}</p>
          <p>{{ statusProcessor(order.status) }}</p>
          <p>
            {{
              order.payment.status == 'approved'
                ? 'Pagamento aprovado'
                : order.payment.status == 'cancelled'
                  ? 'Pagamento cancelado'
                  : order.payment.status == 'pending'
                    ? ''
                    : order.payment.status
            }}
          </p>
          <p>
            <button @click="copyPixKey(order.payment.pix_copyPaste)">Copiar chave PIX</button>
          </p>
          <ExportVariant class="export-icon" @click="router.push(`/order-status/${order.id}`)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../../../assets/main.scss';

.container {
  width: 90%;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid main.$standard-bordeaux;
  border-radius: 8px;
  background-color: main.$standard-black;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  font-size: 1.5rem;
  color: main.$standard-pink;
  margin-bottom: 1.5rem;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table-header {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: main.$standard-black;
  color: main.$standard-white;
  border-radius: 8px;
  font-weight: bold;
}

.table-row {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: main.$standard-black;
  color: main.$standard-white;
  border: 1px solid main.$standard-bordeaux;
  border-radius: 6px;
  transition: background-color 0.3s;
}

.table-row:hover {
  background-color: main.$standard-purple;
  color: main.$standard-white;
}

p {
  flex: 1;
  text-align: center;
  margin: 0;
  font-size: 0.9rem;
}

p:first-child {
  flex: 0.5;
}

p:last-child {
  flex: 1.5;
}

.table-body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 8px;
  overflow-y: auto;
  max-height: 400px;
}

.export-icon {
  color: main.$standard-white;
  cursor: pointer;
  height: 10px;
}
</style>
