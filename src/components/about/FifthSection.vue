<script setup></script>
<template>
  <section>
    <div class="icon"><img src="/public/marks-icon.svg" alt="" /></div>
    <div class="text">
      <h2>
        A Fex nunca decepcionou nossa empresa em todo o período de 5 anos em que confiamos em seus
        serviços.
      </h2>
      <p>Obe de oma para perderie tiempo</p>
      <p>Diretor de Suprimentos Inylibra</p>
    </div>
  </section>
</template>
<style scoped lang="scss">
@use '../../assets/main';
section {
  width: 100%;
  height: 30rem;
  background-image: url(/public/background4About.png);
  background-size: cover;
  .icon {
    width: max-content;
    margin: auto;
    img {
      margin: 2rem 0;
    }
  }
  .text {
    width: 60%;
    margin: 1rem auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 30px;
      font-weight: bold;
      color: main.$standard-white;
      text-align: center;
      margin: 1rem 0;
    }
    p {
      font-size: 20px;
      font-weight: bold;
      margin: 1rem 0;
      color: main.$standard-pink;
    }
  }
}
@media screen and (max-width: 1024px) {
  section {
    height: 70vh;
    .text {
      width: 80%;
      h2 {
        font-size: 26px;
      }
    }
  }
}
</style>
