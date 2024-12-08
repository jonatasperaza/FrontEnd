<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="container">
    <div>
      <img src="/public/logo.svg" alt="logo" />
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">Sobre</RouterLink>
      <RouterLink to="/vehicles">Veiculos</RouterLink>
      <RouterLink to="/make-order">Pedido</RouterLink>
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

@media screen and (max-width: 1150px) {
  .container {
    display: none;
  }
}
</style>
