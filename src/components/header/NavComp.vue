<script setup></script>
<template>
  <nav>
    <div class="nav-link"><router-link to="/">Home</router-link></div>
    <div class="nav-link"><router-link to="/about">Sobre nós</router-link></div>
    <div class="nav-link"><router-link to="/vehicles">Veículos</router-link></div>
    <div class="nav-link"><router-link to="/make-order">Pedido</router-link></div>
  </nav>
</template>
<style scoped lang="scss">
@use '../../assets/main';
nav {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav-link {
  color: main.$standard-white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  a {
    text-decoration: none;
    color: main.$standard-white;
  }
}
</style>
