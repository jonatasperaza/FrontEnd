<script setup></script>
<template>
  <section>
    <div class="textContainer">
      <h2>Nossos Compromissos</h2>
      <h2 class="titlePink">COM VOCÊ</h2>
      <p>
        Temos como objetivo fornecer o melhor atendimento e garantir a tranquilidade de nossos
        clientes em todas as etapas do processo de transporte.
      </p>
    </div>
    <div class="benefitContainer">
      <div class="row">
        <img src="/public/prize-icon.svg" alt="" />
        <p>Trabalhar com excelência.</p>
      </div>
      <div class="row">
        <img src="/public/successful-delivery-icon.svg" alt="" />
        <p>Assegurar que a entrega chegue corretamente ao seu destino.</p>
      </div>
      <div class="row">
        <img src="/public/inscription-icon.svg" alt="" />
        <p>Estar sempre apto a ouvir sugestões.</p>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@use '../../assets/main';
section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-image: url(/public/background2About.png);
  background-size: cover;
  height: 40rem;
  padding: 2rem 4rem;
  .textContainer {
    width: 40%;
    display: flex;
    flex-direction: column;
    border-left: 2px solid main.$standard-white;
    height: 70%;
    p {
      color: main.$standard-white;
      font-size: 20px;
      margin: 3rem 1rem;
    }
  }
  .benefitContainer {
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 2px solid main.$standard-white;
    border-radius: 0.5rem;
    padding: 2rem;
    height: 70%;
    .row {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      p {
        color: main.$standard-pink;
        font-size: 20px;
        font-weight: 700;
        padding: 1rem;
      }
    }
  }
}
h2 {
  font-size: 50px;
  color: main.$standard-white;
  font-weight: bold;
  margin: 0.25rem 1rem;
}
.titlePink {
  color: main.$standard-pink;
}
</style>
