<script setup>
import { useClientStore } from '@/stores';
import { computed } from 'vue';

const clientStore = useClientStore();

const clientData = computed(() => clientStore.state.client_data);

const handleCpfCnpjChange = () => {
  const length = clientData.value.cpf_cnpj.length;
  clientData.value.type = length > 11 ? 'J' : length === 11 ? 'F' : null;
};
</script>
<template>
  <form @submit.prevent="$emit('next')">
    <label for="email">Email</label>
    <input id="email" type="email" placeholder="Insira seu email" v-model="clientData.email" required/>

    <label for="username">Username</label>
    <input id="username" type="text" placeholder="Insira seu username" v-model="clientData.username" required/>

    <label for="date_birth">Data de Nascimento</label>
    <input id="date_birth" type="date" v-model="clientData.date_birth" required/>

    <label for="name">Nome</label>
    <input id="name" type="text" placeholder="Insira seu nome completo" v-model="clientData.name" required/>

    <label for="telephone">Telefone</label>
    <input id="telephone" type="tel" placeholder="Insira seu telefone" v-model="clientData.telephone" required maxlength="11"/>

    <label for="cpf_cnpj">CPF ou CNPJ</label>
    <input
      id="cpf_cnpj"
      type="text"
      placeholder="Insira seu CPF ou CNPJ"
      v-model="clientData.cpf_cnpj"
      @change="handleCpfCnpjChange"
      required
      max="14"
    />

    <button>Próximo</button>
  </form>
</template>
<style scoped lang="scss">
@use '../../assets/main';

form {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem auto 4rem auto;

  label {
    color: main.$standard-white;
    width: 50%;
    font-size: 16px;
    font-weight: 800;
    margin: 0.5rem 0.5rem;
  }

  input {
    height: 3.25rem;
    border-radius: 1rem;
    border: 1px solid main.$standard-white;
    padding: 0 10px;
    color: main.$standard-white;
    background-color: main.$standard-black;
  }

  button {
    width: 100%;
    height: 3rem;
    border: none;
    border-radius: 0.5rem;
    color: main.$standard-white;
    background-color: main.$standard-pink;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    margin: 1rem 0;
    transition: 0.3s ease-in-out;
  }
}

button:hover {
  background-color: main.$standard-black;
  color: main.$standard-pink;
}

@media screen and (max-width: 1150px) {
  form {
    width: 100%;
  }

}
</style>
