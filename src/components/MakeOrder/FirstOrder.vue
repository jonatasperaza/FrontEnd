<script setup>
import { ref, onMounted } from 'vue'
import ArrowDownBold from 'vue-material-design-icons/ArrowDownBold.vue'
import Trash from 'vue-material-design-icons/TrashCan.vue'
import { useOrderStore, useAuthStore } from '@/stores'

const ordersStore = useOrderStore()
const authStore = useAuthStore()

const showFirst = ref(false)
const items = ref([])

const form = ref({
  name: '',
  observation: '',
  quantity: '',
  weight: '',
  height: ''
})

const toggleFirstContainer = () => {
  showFirst.value = !showFirst.value
}

const closeAndOpen = () => {
  showFirst.value = false
  ordersStore.state.step = 2
}

const addItem = () => {
  const newItem = { ...form.value }
  items.value.push(newItem)
  ordersStore.state.order.items.push(newItem)

  form.value = {
    name: '',
    observation: '',
    quantity: '',
    weight: '',
    height: ''
  }
}

const removeItem = (index) => {
  items.value.splice(index, 1)
  ordersStore.state.order.items.splice(index, 1)
}

onMounted(() => {
  const user = authStore.state.user

  ordersStore.state.order.payment.payer_email = user.email
  if (user.client_physical_person) {
    ordersStore.state.order.payment.payer_identification_type = 'CPF'
    ordersStore.state.order.payment.payer_identification_number = user.client_physical_person.cpf
    ordersStore.state.order.id_client = user.client.id
  } else {
    ordersStore.state.order.payment.payer_identification_type = 'CNPJ'
    ordersStore.state.order.payment.payer_identification_number = user.client_legal_person.cnpj
    ordersStore.state.order.id_client = user.client.id
  }
})
</script>

<template>
  <section>
    <div class="access" @click="toggleFirstContainer">
      <p>1 - Itens Do Pedido:</p>
      <ArrowDownBold :class="{ rotated: showFirst }" />
    </div>
    <transition name="slide">
      <div class="firstContainer" v-if="showFirst">
        <p>Adicione Todos os Itens Para o transporte</p>
        <div class="row">
          <div class="form-container">
            <div class="container-input">
              <label for="name">Item:</label>
              <input type="text" id="name" v-model="form.name" placeholder="Nome do item" />
            </div>
            <div class="container-input">
              <label for="quantity">Quantidade:</label>
              <input type="number" id="quantity" v-model="form.quantity" placeholder="Quantidade" />
            </div>
            <div class="container-input">
              <label for="height">Altura:</label>
              <input type="number" id="height" v-model="form.height" placeholder="Altura (m)" />
            </div>
            <div class="container-input">
              <label for="weight">Peso:</label>
              <input type="number" id="weight" v-model="form.weight" placeholder="Peso (kg)" />
            </div>
            <div class="container-input">
              <label for="observation">Observação:</label>
              <textarea
                id="observation"
                v-model="form.observation"
                placeholder="Ex: Oversized"
                class="obs"
              ></textarea>
            </div>
            <button @click="addItem" class="add-button">Adicionar Item</button>
          </div>
          <div class="teste">
            <div class="list-container">
              <h3>Itens Adicionados:</h3>
              <ul>
                <li v-for="(item, index) in items" :key="index" class="list-item">
                  <div class="item-content">
                    <strong>{{ item.name }}</strong>
                    <div class="item-details">
                      {{ item.quantity }} unidades, {{ item.weight }}kg, {{ item.height }}m
                      <!-- <p>{{ item.observation }}</p> -->
                    </div>
                  </div>
                  <button @click="removeItem(index)" class="delete-button" title="Remover">
                    <Trash />
                  </button>
                </li>
              </ul>
            </div>
            <div class="alignButton">
              <button @click="closeAndOpen" class="add-button">Proxima Etapa</button>
            </div>
          </div>
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
  border-radius: 5px 5px 0px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #131316;
  cursor: pointer;
}

.alignButton {
  display: flex;
  justify-content: flex-end;
}

.teste {
  display: grid;
  grid-template-rows: 92.5% 7.5%;
  gap: 1rem;
  padding: 1rem;
}

.teste:last-child {
  width: 100%;
}

.teste:last-child button {
  width: 30%;
}

textarea.obs {
  text-align: left;
  vertical-align: top;
  height: 150px;
  padding: 0.5rem;
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 0.5rem;
  resize: none;
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
  flex-direction: column;
  background-color: #131316;
  padding: 1rem;
  gap: 1rem;
  overflow: hidden;
  border-bottom: 2px solid #fc1d87;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.form-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.list-container {
  flex: 1;
  background-color: #202024;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-y: auto;
  min-height: 100%;
}

.list-container h3 {
  margin: 0 0 1rem;
  color: #fc1d87;
}

.list-container ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-container li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #444;
}

.list-container li strong {
  color: #fc1d87;
}

.container-input {
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
  height: 100%;
  width: 30%;
}

.add-button:hover {
  background-color: #d01970;
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

.list-item {
  display: grid;
  grid-template-columns: 90% 10%;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #444;
  gap: 1rem;
}

.item-content {
  flex: 1;
}

.item-content strong {
  display: block;
  color: #fc1d87;
  font-size: 1.2rem;
}

.item-details {
  font-size: 0.9rem;
  color: #ccc;
}

.delete-button {
  background: none;
  border: none;
  color: #fc1d87;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.delete-button:hover {
  color: #d01970;
}
@media screen and (max-width: 1024px){
    .teste{
      padding: 0;
    }
  .row{
    display: flex;
    flex-direction: column;
  }
  .firstContainer{
    height: 100vh;
  }
  .list-container{
    margin: auto;
    height: 120px;
    width: 100%;
    overflow-y: scroll;
  }
  .alignButton{
    width: 100%;
    height: 3rem;
    button.add-button{
    margin: auto;
    height: 3rem;
    width: 100%;
  }
  }
  .add-button{
    margin: auto;
    height: 3rem;
    width: 100%;
  }
}
</style>
