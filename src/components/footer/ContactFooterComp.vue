<script setup></script>
<template>
  <div class="container">
    <div class="container-title">
      <h1>Contato</h1>
    </div>
    <div>
      <h2>0800 545 8200</h2>
    </div>
    <div class="rights-reserved">
      <p>© Todos os direitos reservados</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use '../../assets/main';
.container {
  height: 100%;
  width: 18rem;
  position: relative;

  .container-title {
    margin: 1em;
    h1 {
      color: main.$standard-pink;
    }
  }
  div {
    margin: 1em;
    h2 {
      font-size: 2em;
      color: main.$standard-white;
    }
  }
  .rights-reserved {
    color: main.$standard-white;
    position: absolute;
    bottom: 0;
    font-size: 10pt;
  }
}

@media screen and (max-width: 1150px) {
  .container {
    height: 80%;
    .container-title {
      display: flex;
      justify-content: center;
      h1 {
        width: 8rem;
      }
    }
    div {
      margin: 1em;
      display: flex;
      justify-content: center;
      h2 {
        width: 14rem;
      }
    }
  }
}
</style>
