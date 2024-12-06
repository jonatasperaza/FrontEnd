<script setup>
</script>
<template>
  <div class="container">
    <div class="container-title">
      <h1>Endereço</h1>
    </div>
    <div>
      <p>
        Rua Skibidi Bomboclat DogAmostrading, 500 Jardim dos Charltons II 89245-000 | Hidden Spot –
        PR
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use '../../assets/main';
.container {
  height: 100%;
  width: 16rem;

  .container-title {
    margin: 1em;
    width: 100%;
    h1 {
      color: main.$standard-pink;
    }
  }
  div {
    margin: 1em;
    p {
      margin-top: 2em;
      color: main.$standard-white;
    }
  }
}

@media screen and (max-width: 1150px) {
  .container {
    height: 80%;
  .container-title {
    margin: 0;
    width: 100%;
    h1 {
      color: main.$standard-pink;
    }
  }
  div {
    margin: 1em;
    p {
      margin-top: 2em;
      color: main.$standard-white;
    }
  }
}
}
</style>
