<script setup>
</script>
<template>
    <section><div class="container"></div></section>
</template>
<style scoped lang="scss">
@use '../../../assets/main';
section{
    width: 100%;
    min-height: 100vh;
    background-image: url(/public/backgroundLogin.png);
    background-size: cover;
    display: flex;
    justify-content: center;
}
.container {
  width: 45%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: main.$standard-black;
}
</style>