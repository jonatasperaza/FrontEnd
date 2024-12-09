<script setup>
import { ref } from 'vue'
import ArrowDownBold from 'vue-material-design-icons/ArrowDownBold.vue'

import { useOrderStore } from '@/stores'

const ordersStore = useOrderStore()
ordersStore.getAddressByCep

const showFirst = ref(false)

const toggleFirstContainer = () => {
  showFirst.value = !showFirst.value
}

const previousStep = () => {
  if (ordersStore.state.step > 1) {
    ordersStore.state.step -= 1
  }
}

const nextStep = () => {
  if (ordersStore.state.step < 3) {
    ordersStore.state.step += 1
  }
}
</script>

<template>
  <section>
    <div class="access" @click="toggleFirstContainer">
      <p>2 - Dados da Coleta:</p>
      <ArrowDownBold :class="{ rotated: showFirst }" />
    </div>
    <transition name="slide">
      <div class="firstContainer" v-if="ordersStore.state.step == 2">
        <p>Adicione Todos os dados para a coleta</p>
        <div class="row">
          <div class="container-input">
            <label for="cep">CEP:</label>
            <input
              type="text"
              id="cep"
              placeholder="Cep"
              v-model="ordersStore.state.order.address_collect.cep"
              @change="
                ordersStore.state.order.address_collect.cep.length == 8
                  ? ordersStore.getAddressByCep(
                      ordersStore.state.order.address_collect.cep,
                      'collect'
                    )
                  : null
              "
            />
          </div>
          <div class="container-input">
            <label for="street">Rua:</label>
            <input
              type="text"
              id="street"
              placeholder="Rua"
              v-model="ordersStore.state.order.address_collect.street"
            />
          </div>
        </div>
        <div class="row">
          <div class="container-input">
            <label for="number">Número:</label>
            <input
              type="number"
              id="number"
              placeholder="Quantidade"
              v-model="ordersStore.state.order.address_collect.number"
            />
          </div>
          <div class="container-input">
            <label for="complement">Complemento:</label>
            <input
              type="string"
              id="complement"
              placeholder="Complemento"
              v-model="ordersStore.state.order.address_collect.complement"
            />
          </div>
        </div>
        <div class="row">
          <div class="container-input">
            <label for="state">Estado:</label>
            <input
              type="string"
              id="state"
              placeholder="Estado"
              v-model="ordersStore.state.order.address_collect.state"
              disabled
            />
          </div>
          <div class="container-input">
            <label for="city">Cidade:</label>
            <input
              type="string"
              id="city"
              placeholder="Cidade"
              v-model="ordersStore.state.order.address_collect.city"
              disabled
            />
          </div>
          <div class="container-input">
            <label for="city">Bairro:</label>
            <input
              type="string"
              id="city"
              placeholder="Bairro"
              v-model="ordersStore.state.order.address_collect.neighborhood"
            />
          </div>
        </div>
        <div class="buttons">
          <button @click="previousStep">Voltar Etapa</button>
          <button @click="nextStep">Próxima Etapa</button>
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

.firstContainer {
  width: 100%;
  display: flex;
  background-color: #131316;
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  border-bottom: 2px solid #fc1d87;
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

input {
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid #fff;
  padding: 0.75rem;
  color: #fff;
  background-color: transparent;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

button {
  padding: 0.75rem 1.5rem;
  background-color: #fc1d87;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e11774;
}

button:disabled {
  background-color: #555;
  cursor: not-allowed;
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
  max-height: 300px;
  opacity: 1;
}

.slide-leave-from {
  max-height: 300px;
  opacity: 1;
}

.slide-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
