<script setup>
import { useOrderStore } from '@/stores'

const ordersStore = useOrderStore()
</script>
<template>
  <section>
    <div class="container">
      <form @submit.prevent>
        <div class="container-field">
          <div class="container-input">
            <label>CEP</label>
            <input
              class="input"
              placeholder="Inserir CEP"
              type="text"
              name=""
              v-model="ordersStore.state.order.deliveryCep"
            />
          </div>
          <div class="container-input">
            <label>Número</label>
            <input
              class="input"
              placeholder="Inserir número"
              type="text"
              name=""
              v-model="ordersStore.state.order.address_delivery.street"
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
