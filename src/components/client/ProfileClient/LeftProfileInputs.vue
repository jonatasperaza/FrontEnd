<script setup>
import { useAuthStore } from '@/stores'
const authStore = useAuthStore()
</script>
<template>
  <form @submit.prevent>
    <label for="">Estado</label>
    <input
      type="text"
      placeholder="Estado"
      :value="authStore.state.user?.address[0].state"
      disabled
    />
    <label for="">Cidade</label>
    <input
      type="text"
      placeholder="Cidade"
      :value="authStore.state.user?.address[0].city"
      disabled
    />
    <label for="">CEP</label>
    <input type="text" placeholder="CEP" :value="authStore.state.user?.address[0].cep" disabled />
    <label for="">Bairro</label>
    <input
      type="text"
      placeholder="Cracolandia"
      :value="authStore.state.user?.address[0].neighborhood"
      disabled
    />
    <label for="">Número</label>
    <input
      type="text"
      placeholder="Número"
      :value="authStore.state.user?.address[0].number"
      disabled
    />
    <label for="">Complemento</label>
    <input
      type="text"
      placeholder="Complemento"
      :value="authStore.state.user?.address[0].complement"
      disabled
    />
  </form>
</template>
<style scoped lang="scss">
@use '../../../assets/main';
form {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  label {
    color: main.$standard-white;
    width: 50%;
    font-size: 16px;
    font-weight: 800;
    margin: 0.5rem 0.5rem;
  }
  input {
    height: 2.5rem;
    border-radius: 1rem;
    border: 2px solid main.$standard-white;
    padding: 0 10px;
    color: main.$standard-white;
    background-color: main.$standard-black;
  }
}
</style>
