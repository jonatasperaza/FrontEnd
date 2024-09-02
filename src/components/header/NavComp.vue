<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <nav>
        <div class="nav-link"><RouterLink to="/">Home</RouterLink></div>
        <div class="nav-link"><RouterLink to="/">Sobre nós</RouterLink></div>
        <div class="nav-link"><RouterLink to="/">Veículos</RouterLink></div>
        <div class="nav-link"><RouterLink to="/">Pedido</RouterLink></div>
    </nav>
</template>
<style scoped lang="scss">
@use '../../assets/main';
nav{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.nav-link{
    color: main.$standard-white;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    a{
        text-decoration: none;
        color: main.$standard-white;
    }
}
</style>
