<script setup>
import { ref, onMounted } from 'vue'
import { useOrderStore } from '@/stores'
import router from '@/router'

const orderStore = useOrderStore()
const currentOrder = ref(null)
onMounted(async () => {
  currentOrder.value = await orderStore.getOrder(router.currentRoute.value.params?.id)

  orderStore.state.statusCurrentOrder = currentOrder.value?.status
})
</script>
<template>
  <section>
    <div class="container">
      <div class="container-informations">
        <div class="container-field">
          <div class="container-input">
            <label>Nome do item</label>
            <input
              class="input"
              placeholder="Inserir nome"
              type="text"
              name=""
              disabled
              :value="currentOrder?.items[0].name"
            />
          </div>
          <div class="container-input">
            <label>Quantidade</label>
            <input
              class="input"
              type="text"
              name=""
              disabled
              :value="currentOrder?.items[0].quantity"
            />
          </div>
        </div>
        <div class="container-field">
          <div class="container-input">
            <label>Observação</label>
            <input
              class="input"
              placeholder="Inserir observação"
              type="text"
              name=""
              disabled
              :value="currentOrder?.items[0].observation"
            />
          </div>
          <div class="container-input">
            <label>Unidade de medida</label>
            <input class="input" type="select" name="" disabled :value="currentOrder?.items[0]" />
          </div>
        </div>
        <h2 class="title-data">Dados de Coleta</h2>
        <div class="container-field">
          <div class="container-input">
            <label>CEP</label>
            <input
              class="input"
              placeholder="Inserir CEP"
              type="text"
              name=""
              disabled
              :value="currentOrder?.address_collect.cep"
            />
          </div>
          <div class="container-input">
            <label>Número</label>
            <input
              class="input"
              placeholder="Inserir número"
              type="text"
              name=""
              disabled
              :value="currentOrder?.address_collect.number"
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
              disabled
              :value="currentOrder?.address_collect.street"
            />
          </div>
          <div class="container-input">
            <label>Complemento</label>
            <input
              class="input"
              placeholder="Inserir complemento"
              type="text"
              name=""
              disabled
              :value="currentOrder?.address_collect.complement"
            />
          </div>
        </div>
        <div class="container-field">
          <div class="container-input" disabled>
            <label>Cidade</label>
            <input
              class="input"
              placeholder="Inserir cidade"
              type="text"
              name=""
              disabled
              :value="currentOrder?.address_collect.city"
            />
          </div>
          <div class="container-input">
            <label>Estado</label>
            <input
              class="input"
              placeholder="Inserir estado"
              type="text"
              name=""
              disabled
              :value="currentOrder?.address_collect.state"
            />
          </div>
        </div>
        <h2 class="title-data">Dados de Entrega</h2>
        <div class="container-field">
          <div class="container-input">
            <label>CEP</label>
            <input
              class="input"
              placeholder="Inserir CEP"
              type="text"
              name=""
              :value="currentOrder?.address_delivery.cep"
            />
          </div>
          <div class="container-input">
            <label>Número</label>
            <input
              class="input"
              placeholder="Inserir número"
              type="text"
              name=""
              :value="currentOrder?.address_delivery.number"
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
              :value="currentOrder?.address_delivery.street"
            />
          </div>
          <div class="container-input">
            <label>Complemento</label>
            <input
              class="input"
              placeholder="Inserir complemento"
              type="text"
              name=""
              :value="currentOrder?.address_delivery.complement"
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
              :value="currentOrder?.address_delivery.city"
            />
          </div>
          <div class="container-input">
            <label>Estado</label>
            <input
              class="input"
              placeholder="Inserir estado"
              type="text"
              name=""
              :value="currentOrder?.address_delivery.state"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- {{ currentOrder }} -->
</template>
<style scoped lang="scss">
@use '../../assets/main.scss';

section {
  width: 100%;
  background-color: main.$standard-black;
  display: flex;
  justify-content: center;
  background-color: transparent;

  .container {
    width: 80%;

    .title-data {
      color: main.$standard-white;
      margin-left: 1em;
      margin-bottom: 0.5em;
    }

    .container-informations {
      width: 100%;

      .container-field {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 1rem;

        .container-input {
          display: flex;
          align-items: center;

          label {
            width: 90%;
            color: main.$standard-white;
            margin-bottom: 0.2em;
          }

          .input {
            width: 90%;
            height: 2.75rem;
            border-radius: 1rem;
            border: 1px solid main.$standard-white;
            padding: 0 10px;
            color: main.$standard-white;
            background-color: main.$standard-black;
          }
        }

        .container-input {
          width: 60%;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
}
</style>
