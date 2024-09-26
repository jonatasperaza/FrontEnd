<script setup>
import LoginComp from './LoginComp.vue';
import NavComp from './NavComp.vue';
import ProfileComp from './ProfileComp.vue';
import { useAuthStore } from '@/stores';
const store = useAuthStore();
console.log(store.state.isLogged)
</script>
<template>
    <header>
        <div class="logo"><img src="/public/logo.svg" alt=""></div>
        <div class="navbar">
            <NavComp />
        </div>
        <div v-if="store.state.isLogged" class="teste">
            <ProfileComp />
        </div>
        <div v-else class="login">
            <LoginComp />
        </div>
    </header>
</template>
<style scoped lang="scss">
@use '../../assets/main';

header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: main.$standard-black;
    height: 100px;
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
