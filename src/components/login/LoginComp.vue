<script setup>
import LoginForm from './LoginForm.vue'
</script>
<template>
  <section>
    <LoginForm />
  </section>
</template>
<style scoped lang="scss">
@use '../../assets/main';
section {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(/public/backgroundLogin.png);
  background-size: cover;
}
</style>
