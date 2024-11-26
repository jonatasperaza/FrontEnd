<script setup>
import { useDriverStore } from '@/stores'
import { toast } from 'vue3-toastify'

const driverStore = useDriverStore()

function verify() {
  if (
    driverStore.state.driver_data.name === '' ||
    driverStore.state.driver_data.email === '' ||
    driverStore.state.driver_data.cnh === '' ||
    driverStore.state.driver_data.username === '' ||
    driverStore.state.driver_data.cpf === '' ||
    driverStore.state.driver_data.date_birth === '' ||
    driverStore.state.driver_data.telephone === ''
  ) {
    toast.warn('Preencha todos os campos')
    return false
  } else {
    return true
  }
}
</script>

<template>
  <h2>Dados <span class="strong-pink">Pessoais</span></h2>
  <form @submit.prevent>
    <label for="">Nome</label>
    <input type="text" placeholder="Insira seu nome" v-model="driverStore.state.driver_data.name" />
    <label for="">Email</label>
    <input
      type="text"
      placeholder="Insira seu email"
      v-model="driverStore.state.driver_data.email"
    />
    <label for="">CNH:</label>
    <input
      type="text"
      placeholder="Insira sua CNH"
      v-model="driverStore.state.driver_data.cnh"
      maxlength="9"
    />
    <label for="">Username:</label>
    <input
      type="text"
      placeholder="Insira seu username"
      v-model="driverStore.state.driver_data.username"
    />
    <label for="">CPF</label>
    <input
      type="text"
      placeholder="Insira seu CPF"
      v-model="driverStore.state.driver_data.cpf"
      maxlength="11"
    />
    <label for="">Data de Nascimento</label>
    <input
      type="date"
      placeholder="Insira sua data de nascimento"
      v-model="driverStore.state.driver_data.date_birth"
    />
    <label for="">Telefone</label>
    <input
      type="tel"
      placeholder="Insira seu telefone"
      v-model="driverStore.state.driver_data.telephone"
    />
    <button @click="verify() ? $emit('next') : null">Próximo</button>
  </form>
</template>

<style scoped lang="scss">
@use '../../../assets/main';

h2 {
  color: main.$standard-white;
  font-size: 50px;
  width: max-content;
  font-weight: 800;
  margin: 1rem auto;
  padding-left: 1rem;
  border-left: 2px solid main.$standard-pink;
  font-style: italic;
}

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

.GenderSelection {
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;

  button {
    width: 45%;
    height: 2.75rem;
    border: 2px solid main.$standard-white;
    border-radius: 1rem;
    background-color: main.$standard-black;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  button:hover {
    background-color: main.$standard-pink;
    border: 2px solid main.$standard-pink;
    color: main.$standard-black;
  }

  .selectedPink {
    background-color: main.$standard-pink;
    border: 2px solid main.$standard-pink;
    color: main.$standard-black;
  }
}
</style>
