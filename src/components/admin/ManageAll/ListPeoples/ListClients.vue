<script setup>
import { onMounted, ref } from 'vue'
import { useClientStore } from '@/stores'
const clientStore = useClientStore()
</script>

<template>
  <article>
    <div class="listVehicles">
      <div class="headerList">
        <p>ID:</p>
        <p>Nome:</p>
        <p>Email:</p>
      </div>

      <div class="list">
        <div v-for="client in clientStore.state.clients" :key="client.id">
          <p>{{ client.id }}</p>
          <p>{{ client.name }}</p>
          <p>{{ client.user.email }}</p>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
@use '@/assets/main';

article {
  width: 100%;
  background-color: #070707;
  padding: 1rem 0;
  border-radius: 5px;
  overflow: hidden;
}

.headerList {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 1px solid #c1c1c1;
}

.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 300px;
  overflow-y: auto;
}

.list div {
  border-bottom: 1px solid #c1c1c1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1rem 0;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}

.list div:hover {
  background-color: #1c1c1c;
}

button {
  border: 0;
  background-color: transparent;
  color: main.$standard-white;
}
</style>
