<script setup>
import NavComp from './NavComp.vue'
import LoginComp from './LoginComp.vue'
</script>
<template>
  <header>
    <div class="logo"><img src="/public/logo.svg" alt=""></div>
    <div class="navbar">
     <NavComp />
    </div>
    <div class="login">
     <LoginComp />
    </div>
  </header>
</template>
<style scoped lang="scss">
@use '../../assets/main';
header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: main.$standard-black;
    height: 100px;
}
.logo{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;
    img{
        width: 45%;
        height: 45%;
    }
}
.navbar{
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
