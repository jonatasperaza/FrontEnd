<script setup>
</script>
<template>
    <div class="clientPic"></div>
    <form @submit.prevent>
        <label for="">Nome</label>
        <input type="text" placeholder="Nome">
        <label for="">Email</label>
        <input type="text" placeholder="Email">
        <label for="">Telefone</label>
        <input type="text" placeholder="Telefone">
        <label for="">Endereço</label>
        <input type="text" placeholder="Endereço">
    </form>
</template>
<style scoped lang="scss">
@use '../../../assets/main';
.clientPic {
  width: 30%;
  height: 7rem;
  background-color: main.$standard-white;
  border-radius: 50%;
  margin: 3rem auto;
}
form {
  width: 70%;
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
    height: 2.75rem;
    border-radius: 1rem;
    border: 1px solid main.$standard-white;
    padding: 0 10px;
    color: main.$standard-white;
    background-color: main.$standard-black;
  }
}
</style>