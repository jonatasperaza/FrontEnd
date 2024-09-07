<script setup>
import { ref } from 'vue'

const selectedGender = ref(null)

const selectGender = (gender) => {
  selectedGender.value = gender
}
</script>

<template>
  <h2>Dados <span class="strong-pink">Pessoais</span></h2>
  <form @submit.prevent>
    <label for="">Nome</label>
    <input type="text" placeholder="Insira seu nome" />
    <label for="">Email</label>
    <input type="email" placeholder="Insira seu email" />
    <label for="">Senha</label>
    <input type="password" placeholder="Insira sua senha" />
    <label for="">CPF</label>
    <input type="text" placeholder="Insira seu CPF" />
    <label for="">Data de Nascimento</label>
    <input type="date" placeholder="Insira sua data de nascimento" />
    <label for="">Telefone</label>
    <input type="tel" placeholder="Insira seu telefone" />
    <div class="GenderSelection">
      <button @click="selectGender('man')" :class="{ selectedPink: selectedGender === 'man' }">
        <img src="/public/man-icon.svg" alt="Ícone masculino" />
      </button>
      <button @click="selectGender('woman')" :class="{ selectedPink: selectedGender === 'woman' }"> <img src="/public/woman-icon.svg" alt="Ícone feminino" /></button>
    </div>
    <button @click="$emit('next')">Próximo</button>
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
