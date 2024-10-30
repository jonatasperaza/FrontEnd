<script setup>
import DropdownComp from './DropdownComp.vue';
import { useAuthStore } from '@/stores';
const store = useAuthStore();
console.log(store.state.isLogged)
</script>
<template>
    <header>
        <div class="container">
        <div class="logo"><img src="/public/logo.svg" alt=""></div>
        <DropdownComp />
    </div>
    </header>
</template>
<style scoped lang="scss">
@use '../../assets/main';

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: main.$standard-black;
    height: 100px;
    padding: 0 60px 0 20px;
}

.container{
    display: flex;
    width: 90%;
    margin: auto;
    align-items: center;
    justify-content: space-between;

}

.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;

    img {
        width: 45%;
        height: 45%;
    }
}

.navbar {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.teste {}
</style>
