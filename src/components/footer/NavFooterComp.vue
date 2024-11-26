<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="container">
    <div>
      <img src="/public/logo.svg" alt="logo" />
    </div>
    <nav>
      <!-- tem que linkar so -->
      <a href="">Home</a>
      <a href="">Sobre nós</a>
      <a href="">Veículos</a>
      <a href="">Motoristas</a>
    </nav>
  </div>
</template>
<style scoped lang="scss">
@use '../../assets/main';

.container {
  height: 100%;
  width: 16rem;
  div {
    margin: 1em;
  }
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    a {
      margin: 0.5em;
      margin-left: 2em;
      color: main.$standard-white;
      text-decoration: none;
    }
  }
}
</style>
