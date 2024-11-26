<script setup>
import { useOrderStore } from '@/stores'

const ordersStore = useOrderStore()
</script>
<template>
  <section>
    <div class="container-itens">
      <form @submit.prevent>
        <div>
          <div class="container-field">
            <div class="container-input">
              <label>Nome do item</label>
              <input
                class="input-1"
                placeholder="Inserir nome"
                type="text"
                name=""
                v-model="ordersStore.state.order.itemName"
              />
            </div>
            <div class="container-input-2">
              <label>Quantidade</label>
              <input
                class="input-2"
                type="text"
                name=""
                v-model="ordersStore.state.order.itemQuantity"
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
                name=""
                v-model="ordersStore.state.order.observation"
              />
            </div>
            <div class="container-input-2">
              <label>Unidade de medida</label>
              <input
                class="input-2"
                type="select"
                name=""
                v-model="ordersStore.state.order.unitOfMeasure"
              />
            </div>
          </div>
        </div>
      </form>
      <div class="container-buttons">
        <button @click="$emit('next')">Avançar</button>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@use '../../../assets/OrderForm.scss';
</style>
