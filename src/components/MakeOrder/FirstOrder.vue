<script setup>
import { ref } from 'vue';
import ArrowDownBold from 'vue-material-design-icons/ArrowDownBold.vue';

// Controla o estado do container
const showFirst = ref(false);

// Armazena os itens criados
const items = ref([]);

// Campos do formulário
const form = ref({
  name: '',
  observation: '',
  quantity: '',
  weight: '',
  height: '',
});

// Alterna a exibição do container
const toggleFirstContainer = () => {
  showFirst.value = !showFirst.value;
};

// Adiciona um item ao array de itens
const addItem = () => {
  const newItem = { ...form.value };
  items.value.push(newItem);

  // Limpa o formulário
  form.value = {
    name: '',
    observation: '',
    quantity: '',
    weight: '',
    height: '',
  };
};
</script>


<template>
    <section>
      <div class="access" @click="toggleFirstContainer">
        <p>1 - Items Do Pedido:</p>
        <ArrowDownBold :class="{ rotated: showFirst }" />
      </div>
      <transition name="slide">
        <div class="firstContainer" v-if="showFirst">
          <p>Adicione Todos os Itens Para o transporte</p>
          <div class="row3">
            <div class="container-input">
              <label for="name">Item:</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                placeholder="Nome do item"
              />
            </div>
            <div class="container-input">
              <label for="observation">Observação:</label>
              <input
                type="text"
                id="observation"
                v-model="form.observation"
                placeholder="Ex: Oversized"
              />
            </div>
          </div>
          <div class="row2">
            <div class="container-input">
              <label for="quantity">Quantidade:</label>
              <input
                type="number"
                id="quantity"
                v-model="form.quantity"
                placeholder="Quantidade"
              />
            </div>
            <div class="container-input">
              <label for="height">Altura:</label>
              <input
                type="number"
                id="height"
                v-model="form.height"
                placeholder="Altura (m)"
              />
            </div>
            <div class="container-input">
              <label for="weight">Peso:</label>
              <input
                type="number"
                id="weight"
                v-model="form.weight"
                placeholder="Peso (kg)"
              />
            </div>
          </div>
          <div class="button-container">
            <button @click="addItem" class="add-button">Adicionar Item</button>
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
    border-bottom: 2px solid #fc1d87;
    border-radius: 5px 5px 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: rgb(37, 37, 37);
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
    background-color: rgb(37, 37, 37);
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden; 
    border-bottom: 2px solid #fc1d87;
}

.row3,
.row2 {
    display: flex;
    gap: 1rem;
}

.row3 .container-input {
    flex: 1;
}

.row2 .container-input {
    flex: 1; 
}

.container-input {
    display: flex;
    flex-direction: column;
}

input {
    width: 100%;
    border-radius: .5rem;
    border: 1px solid #fff;
    padding: .75rem;
    color: #fff;
    background-color: transparent;
}

.slide-enter-active,
.slide-leave-active {
    transition: max-height 0.3s ease, opacity 0.3s ease;
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

.button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
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

</style>
