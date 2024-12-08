<script setup>
import { useOrderStore } from '@/stores'

const ordersStore = useOrderStore()
</script>
<template>
  <section>
    <div class="container-itens">
      <form @submit.prevent>
        <div v-for="item in ordersStore.state.order.items">
          <div class="container-field">
            <div class="container-input">
              <label>Nome do item</label>
              <input
                class="input-1"
                placeholder="Inserir nome"
                type="text"
                name="Nome do item"
                v-model="item.name"
              />
            </div>
            <div class="container-input-2">
              <label>Quantidade</label>
              <input
                class="input-2"
                type="text"
                name="quantidade do item"
                v-model="item.itemQuantity"
              />
            </div>
          </div>
          <div class="container-field">
            <div class="container-input">
              <label>Observação</label>
              <input
                class="input-1"
                placeholder="Inserir observação"
                type="text"
                name="observação do item"
                v-model="item.observation"
              />
            </div>
            <div class="container-input-2">
              <label>Largura</label>
              <input class="input-2" type="select" name="largura do item" v-model="item.widht" />
            </div>
            <div class="container-input-2">
              <label>Altura</label>
              <input class="input-2" type="select" name="altura do item" v-model="item.height" />
            </div>
          </div>
        </div>
      </form>
    </div>
    <h2>Endereço de <span class="strong-pink">Coleta</span></h2>
    <div class="container">
      <form @submit.prevent>
        <div class="container-field">
          <div class="container-input">
            <label>CEP</label>
            <input
              class="input"
              placeholder="Inserir CEP"
              type="number"
              name=""
              v-model="ordersStore.state.order.address_collect.cep"
            />
          </div>
          <div class="container-input">
            <label>Número</label>
            <input
              class="input"
              placeholder="Inserir número"
              type="number"
              name=""
              v-model="ordersStore.state.order.address_collect.number"
            />
          </div>
        </div>
        <div class="container-field">
          <div class="container-input">
            <label>Endereço</label>
            <input
              class="input"
              placeholder="Inserir endereço"
              type="text"
              name=""
              v-model="ordersStore.state.order.address_collect.street"
            />
          </div>
          <div class="container-input">
            <label>Complemento</label>
            <input
              class="input"
              placeholder="Inserir complemento"
              type="text"
              name=""
              v-model="ordersStore.state.order.address_collect.complement"
            />
          </div>
        </div>
        <div class="container-field">
          <div class="container-input">
            <label>Cidade</label>
            <input
              class="input"
              placeholder="Inserir cidade"
              type="text"
              name=""
              v-model="ordersStore.state.order.address_collect.city"
            />
          </div>
          <div class="container-input">
            <label>Estado</label>
            <input
              class="input"
              placeholder="Inserir estado"
              type="text"
              name=""
              v-model="ordersStore.state.order.address_collect.state"
            />
          </div>
        </div>
      </form>
    </div>
    <h2>Endereço de <span class="strong-pink">Entrega</span></h2>
    <div class="container">
      <form @submit.prevent>
        <div class="container-field">
          <div class="container-input">
            <label>CEP</label>
            <input
              class="input"
              placeholder="Inserir CEP"
              type="number"
              name=""
              v-model="ordersStore.state.order.address_delivery.cep"
            />
          </div>
          <div class="container-input">
            <label>Número</label>
            <input
              class="input"
              placeholder="Inserir número"
              type="number"
              name=""
              v-model="ordersStore.state.order.address_delivery.number"
            />
          </div>
        </div>
        <div class="container-field">
          <div class="container-input">
            <label>Endereço</label>
            <input
              class="input"
              placeholder="Inserir endereço"
              type="text"
              name=""
              v-model="ordersStore.state.order.address_delivery.street"
            />
          </div>
          <div class="container-input">
            <label>Complemento</label>
            <input
              class="input"
              placeholder="Inserir complemento"
              type="text"
              name=""
              v-model="ordersStore.state.order.address_delivery.complement"
            />
          </div>
        </div>
        <div class="container-field">
          <div class="container-input">
            <label>Cidade</label>
            <input
              class="input"
              placeholder="Inserir cidade"
              type="text"
              name=""
              v-model="ordersStore.state.order.address_delivery.city"
            />
          </div>
          <div class="container-input">
            <label>Estado</label>
            <input
              class="input"
              placeholder="Inserir estado"
              type="text"
              name=""
              v-model="ordersStore.state.order.address_delivery.state"
            />
          </div>
        </div>
      </form>
      <div class="container-buttons">
        <button class="invertColor" @click="$emit('back')">Voltar</button>
        <button class="normalColor" @click="$emit('next')">Avançar</button>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@use '../../../assets/OrderForm.scss';
</style>
