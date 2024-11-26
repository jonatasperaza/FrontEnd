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
              type="text"
              name=""
              v-model="ordersStore.state.order.collectionCep"
            />
          </div>
          <div class="container-input">
            <label>Número</label>
            <input
              class="input"
              placeholder="Inserir número"
              type="text"
              name=""
              v-model="ordersStore.state.order.collectionNumber"
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
              v-model="ordersStore.state.order.collectionAddress"
            />
          </div>
          <div class="container-input">
            <label>Complemento</label>
            <input
              class="input"
              placeholder="Inserir complemento"
              type="text"
              name=""
              v-model="ordersStore.state.order.collectionComplement"
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
              v-model="ordersStore.state.order.collectionCity"
            />
          </div>
          <div class="container-input">
            <label>Estado</label>
            <input
              class="input"
              placeholder="Inserir estado"
              type="text"
              name=""
              v-model="ordersStore.state.order.collectionState"
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
              v-model="ordersStore.state.order.deliveryNumber"
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
              v-model="ordersStore.state.order.deliveryAddress"
            />
          </div>
          <div class="container-input">
            <label>Complemento</label>
            <input
              class="input"
              placeholder="Inserir complemento"
              type="text"
              name=""
              v-model="ordersStore.state.order.deliveryComplement"
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
              v-model="ordersStore.state.order.deliveryCity"
            />
          </div>
          <div class="container-input">
            <label>Estado</label>
            <input
              class="input"
              placeholder="Inserir estado"
              type="text"
              name=""
              v-model="ordersStore.state.order.deliveryState"
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
