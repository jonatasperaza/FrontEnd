<script setup>
import '@passageidentity/passage-elements/passage-auth'
</script>
<template>
  <div class="container">
    <div class="row">
      <h1>Login</h1>
    </div>
    <div class="authContainer">
      <passage-auth app-id="RzLQanPc9KwBIjxhveHSYyaA"></passage-auth>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use '../../assets/main';
.container {
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: main.$standard-black;
  .row {
    display: flex;
    align-items: center;
  }
}
h1 {
  color: main.$standard-pink;
  font-style: italic;
  font-size: 50px;
  font-weight: 800;
}
</style>
