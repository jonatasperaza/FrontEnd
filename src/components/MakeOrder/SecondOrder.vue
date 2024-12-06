<script setup>
import { ref } from 'vue';
import ArrowDownBold from 'vue-material-design-icons/ArrowDownBold.vue';

const showFirst = ref(false);

const toggleFirstContainer = () => {
  showFirst.value = !showFirst.value;
};

</script>

<template>
  <section>
    <div class="access" @click="toggleFirstContainer">
      <p>2 - Dados da Coleta:</p>
      <ArrowDownBold :class="{ rotated: showFirst }" />
    </div>
    <transition name="slide">
      <div class="firstContainer" v-if="showFirst">
        <p>Adicione Todos os dados para a coleta</p>
        <div class="row">
          <div class="container-input">
            <label for="name">CEP:</label>
            <input
              type="text"
              id="name"
              placeholder="Nome do item"
            />
          </div>
          <div class="container-input">
            <label for="observation">Rua:</label>
            <input
              type="text"
              id="observation"
              placeholder="Ex: Oversized"
            />
          </div>
        </div>
        <div class="row">
          <div class="container-input">
            <label for="quantity">Número:</label>
            <input
              type="number"
              id="quantity"
              placeholder="Quantidade"
            />
          </div>
          <div class="container-input">
            <label for="height">Complemento:</label>
            <input
              type="number"
              id="height"
              placeholder="Altura (m)"
            />
          </div>
        </div>
        <div class="row">
          <div class="container-input">
            <label for="weight">Estado:</label>
            <input
              type="number"
              id="weight"
              placeholder="Peso (kg)"
            />
          </div>
          <div class="container-input">
            <label for="width">Cidade:</label>
            <input
              type="number"
              id="width"
              placeholder="Largura (m)"
            />
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
  border-bottom: 2px solid #fc1d87;
//   border-radius: 5px;
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
</style>
