<script setup></script>
<template>
  <form @submit.prevent>
    <label for="">Email</label>
    <input type="email" placeholder="Insira seu email" />
    <label for="">Nome</label>
    <input type="text" placeholder="Insira seu nome" />
    <label for="">Senha</label>
    <input type="password" placeholder="Insira sua senha" />
    <label for="">Telefone</label>
    <input type="tel" placeholder="Insira seu telefone" />
    <label for="">CPF ou CNPJ</label>
    <input type="text" placeholder="Insira seu CPF ou CNPJ" />
    <button @click="$emit('next')">Próximo</button>
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
</style>
