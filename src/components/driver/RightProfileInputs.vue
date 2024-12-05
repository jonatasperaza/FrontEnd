<script setup>
import { useAuthStore } from '@/stores';
const authStore = useAuthStore();
</script>
<template>
  <div class="clientPic">
    <img src="/public/client-Icon.svg" alt="" />
  </div>
  <form @submit.prevent>
    <label for="">Categoria</label>
    <input type="text" placeholder="Categoria" :value="authStore.state.type" disabled />
    <label for="">Nome</label>
    <input type="text" placeholder="Nome" :value="authStore.state.user.name" disabled/>
    <label for="">Email</label>
    <input type="text" placeholder="Email" :value="authStore.state.user.email" disabled/>
    <label for="">Telefone</label>
    <input type="text" placeholder="Telefone" :value="authStore.state.user.telephone" disabled />
    <label for="">Endereço</label>
    <input type="text" placeholder="Endereço" :value="authStore.state.user.address[0].street" disabled />
  </form>
</template>
<style scoped lang="scss">
@use '../../assets/main';
.clientPic {
  width: 30%;
  height: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 3rem auto;
}

form {
  display: flex;
  width: 80%;
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
