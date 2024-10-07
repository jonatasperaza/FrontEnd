<script setup></script>
<template>
  <section>
    <div class="container">
      <div>
        <div class="circle"></div>
        <span></span>
        <div class="circle"></div>
        <span></span>
        <div class="circle"></div>
      </div>
      <div class="container-title">
        <h2>dados do pedido</h2>
        <h2>dados de coleta</h2>
        <h2>dados de entrega</h2>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@use '../../../assets/main.scss';
section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: main.$standard-black;

  .container {
    width: 50%;

    .container-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;

      h2 {
        color: main.$standard-white;
        font-size: 1rem;
      }
    }
    h2 {
      color: main.$standard-white;
      font-size: 1rem;
    }
  }
}
</style>
