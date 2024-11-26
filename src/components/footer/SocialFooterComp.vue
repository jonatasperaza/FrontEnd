<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="container">
    <div>
      <h1>ONDE ESTAMOS</h1>
    </div>
    <div class="container-img">
      <a href=""><img src="/public/instagram-icon.svg" /></a>
      <a href=""><img src="/public/twitter-icon.svg" /></a>
      <a href=""><img src="/public/github-icon.svg" /></a>
      <a href=""><img src="/public/linkedIn-icon.svg" /></a>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use '../../assets/main';
.container {
  height: 100%;
  width: 16rem;

  div {
    margin: 1em;
    color: main.$standard-pink;
  }
  .container-img {
    display: flex;
    justify-content: space-around;
    margin-top: 2em;
  }
}
</style>
