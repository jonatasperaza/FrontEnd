<script setup>
import { ref } from 'vue'
import ArrowDownBold from 'vue-material-design-icons/ArrowDownBold.vue'
import { useOrderStore } from '@/stores'
import { useAuthStore } from '@/stores'

const ordersStore = useOrderStore()
const authStore = useAuthStore()

const showDetails = ref(false)

const toggleDetails = () => {
  showDetails.value = !showDetails.value
}

const goBack = () => {
  ordersStore.state.step = 3
  console.log('Voltar para a etapa anterior')
}
</script>

<template>
  <section>
    <div class="access" @click="toggleDetails">
      <p>Exibir Todos os Dados</p>
      <ArrowDownBold :class="{ rotated: showDetails }" />
    </div>

    <transition name="slide">
      <div class="detailsContainer" v-if="ordersStore.state.step == 4">
        <div class="scroll-itens">
          <h2>Itens:</h2>
          <p>
            {{
              ordersStore.state.order.items[0]
                ? 'Confira os itens adicionados para o transporte:'
                : 'Não há itens'
            }}
          </p>
          <div
            v-for="(item, index) in ordersStore.state.order.items"
            :key="index"
            class="row row-itens"
          >
            <div class="container-input">
              <label>Item:</label>
              <p>{{ item.name }}</p>
            </div>
            <div class="container-input">
              <label>Observação:</label>
              <p>{{ item.observation }}</p>
            </div>
            <div class="container-input">
              <label>Quantidade:</label>
              <p>{{ item.quantity }}</p>
            </div>
            <div class="container-input">
              <label>Peso:</label>
              <p>{{ item.weight }} kg</p>
            </div>
            <div class="container-input">
              <label>Altura:</label>
              <p>{{ item.height }} m</p>
            </div>
          </div>
        </div>

        <div>
          <h2>Dados da Coleta:</h2>
          <div class="grid-layout">
            <div class="container-input">
              <label>Endereço:</label>
              <p>{{ ordersStore.state.order.address_collect.street }}</p>
            </div>
            <div class="container-input">
              <label>Cidade:</label>
              <p>{{ ordersStore.state.order.address_collect.city }}</p>
            </div>
            <div class="container-input">
              <label>CEP:</label>
              <p>{{ ordersStore.state.order.address_collect.cep }}</p>
            </div>
            <div class="container-input">
              <label>Complemento:</label>
              <p>{{ ordersStore.state.order.address_collect.complement }}</p>
            </div>
            <div class="container-input">
              <label>Estado:</label>
              <p>{{ ordersStore.state.order.address_collect.state }}</p>
            </div>
          </div>
        </div>

        <div>
          <h2>Dados da Entrega:</h2>
          <div class="grid-layout">
            <div class="container-input">
              <label>Endereço:</label>
              <p>{{ ordersStore.state.order.address_delivery.street }}</p>
            </div>
            <div class="container-input">
              <label>Cidade:</label>
              <p>{{ ordersStore.state.order.address_delivery.city }}</p>
            </div>
            <div class="container-input">
              <label>CEP:</label>
              <p>{{ ordersStore.state.order.address_delivery.cep }}</p>
            </div>
            <div class="container-input">
              <label>Complemento:</label>
              <p>{{ ordersStore.state.order.address_delivery.complement }}</p>
            </div>
            <div class="container-input">
              <label>Estado:</label>
              <p>{{ ordersStore.state.order.address_delivery.state }}</p>
            </div>
          </div>
        </div>

        <div>
          <h2>Dados do Pagamento:</h2>
          <div class="row">
            <div class="container-input">
              <label>{{ authStore.state?.user.client_physical_person ? 'CPF' : 'CNPJ' }}:</label>
              <p>
                {{
                  authStore.state?.user.client_physical_person
                    ? authStore.state?.user.client_physical_person.cpf
                    : authStore.state?.user.client_legal_person.cnpj
                }}
              </p>
            </div>
            <div class="container-input">
              <label>Email:</label>
              <p>{{ authStore.state?.user.email }}</p>
            </div>
          </div>
          <div class="row">
            <div class="container-input">
              <label>Valor Total:</label>
              <p>R$ 150,00</p>
            </div>
            <div class="container-input">
              <label>Forma de Pagamento:</label>
              <p>PIX</p>
            </div>
          </div>
        </div>

        <div class="button-container">
          <button @click="goBack" class="add-button">Voltar</button>
          <button
            v-if="ordersStore.state.step === 4"
            @click="ordersStore.createOrder(ordersStore.state.order)"
            class="add-button"
          >
            Gerar Pedido
          </button>
        </div>
      </div>
    </transition>
  </section>
</template>

<style scoped lang="scss">
section {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
}

.access {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #131316;
  cursor: pointer;
}

.access p {
  margin: 0;
}

.access .rotated {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}

.detailsContainer {
  width: 100%;
  display: flex;
  background-color: #131316;
  padding: 1rem;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
}

.row {
  display: flex;
  gap: 1rem;
}

.container-input {
  flex: 1;
  display: flex;
  flex-direction: column;
}

p {
  margin: 0;
  color: #fff;
}

h2 {
  margin: 0;
  color: #fc1d87;
}

.slide-enter-active,
.slide-leave-active {
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
  overflow: hidden;
}

.slide-enter-from {
  max-height: 0;
  opacity: 0;
}

.slide-enter-to {
  max-height: 1000px;
  opacity: 1;
}

.slide-leave-from {
  max-height: 1000px;
  opacity: 1;
}

.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.container-input {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  gap: 1rem;
}

.add-button {
  padding: 0.5rem 1rem;
  background-color: #fc1d87;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.add-button:hover {
  background-color: #d01970;
}
@media screen and (max-width: 1024px) {
  .row {
    flex-direction: column;
  }
  .scroll-itens {
    max-height: 200px;
    overflow-y: scroll;
    p {
      margin-bottom: 1rem;
    }
  }
  .row-itens {
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  .buttons {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
  .container-input {
    flex-direction: row;
    gap: 0.5rem;
    p {
      margin: 0;
    }
  }
  .grid-layout {
    grid-template-columns: 1fr;
  }
  .button-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      width: 100%;
    }
  }
}
</style>
