<script setup>
import { useOrderStore } from '@/stores'
import { reactive } from 'vue'

const ordersStore = useOrderStore()

const item = reactive({
  name: '',
  quantity: null,
  observation: '',
  weight: null,
  height: null
})
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
                v-model="item.name"
              />
            </div>
            <div class="container-input-2">
              <label>Quantidade</label>
              <input class="input-2" type="number" name="" v-model="item.quantity" />
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
                v-model="item.observation"
              />
            </div>
            <div class="container-input-2">
              <label>Tamanho</label>
              <input class="input-2" type="number" name="" v-model="item.weight" />
            </div>
            <div class="container-input-2">
              <label>Altura</label>
              <input class="input-2" type="number" name="" v-model="item.height" />
            </div>
          </div>
        </div>
      </form>
      <div class="container-buttons">
        <button @click="ordersStore.state.order.items.push(item)">Adicionar item</button>
      </div>
      <div class="container-buttons">
        <button @click="$emit('next')">Avançar</button>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@use '../../../assets/OrderForm.scss';
</style>
