<script setup></script>
<template>
  <section>
    <span></span>
    <div class="container">
      <div class="cards">
        <div>
          <img src="/public/light-icon.svg" alt="" />
          <p>Soluções Inovadoras</p>
        </div>
        <div>
          <img src="/public/tools-icon.svg" alt="" />
          <p>Anos de Experiência</p>
        </div>
        <div>
          <img src="/public/handshake-icon.svg" alt="" />
          <p>Funcionários de Confiança</p>
        </div>
      </div>
      <div class="textContent">
        <div class="rowLogo"><img src="/public/logo.svg" alt="" /></div>
        <div class="rowText">
          <h2 class="titlePink">Benefícios</h2>
          <h2>que nossos</h2>
          <h2>clientes desfrutam.</h2>
        </div>
        <span></span>
      </div>
    </div>
    <span></span>
  </section>
</template>
<style scoped lang="scss">
@use '../../assets/main';
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: main.$standard-black;
  .container {
    width: 100%;
    height: 25rem;
    display: flex;
    justify-content: space-between;
    .cards {
      width: 60%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      div {
        width: 12rem;
        height: 16rem;
        display: flex;
        flex-direction: column;
        border: 4px solid main.$standard-white;
        padding: 1rem;
        img {
          width: 5rem;
          height: 5rem;
          margin: 0 auto;
        }
        p {
          color: main.$standard-pink;
          font-size: 24px;
          padding: 1rem;
          text-align: center;
          font-weight: 700;
        }
      }
    }
    .textContent {
      width: 35%;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .rowLogo {
        width: 70%;
        height: 20%;
        display: flex;
        justify-content: end;
        align-items: start;
      }
      .rowText {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin: 2rem 0 1rem 0;
      }
    }
  }
  h2 {
    font-size: 50px;
    color: main.$standard-white;
    font-weight: bold;
  }
  .titlePink {
    color: main.$standard-pink;
  }
  span {
    width: 100%;
    height: 2px;
    background-color: main.$standard-pink;
  }
}
@media screen and (max-width: 1024px) {
  section {
    .container {
      flex-direction: column;
      height: 90vh;
      justify-content: center;
      .cards {
        width: 90%;
        flex-direction: column;
        margin: auto;
        gap: 1rem;
        div {
          width: 100%;
          height: 10rem;
          justify-content: center;
          padding: 0.5rem;
          img {
            width: 3rem;
            height: 3rem;
          }
          p {
            font-size: 16px;
          }
        }
      }
      .textContent {
        width: 80%;
        .rowLogo {
          width: 90%;
          justify-content: center;
        }
        .rowText {
          width: 100%;
          h2 {
            font-size: 30px;
          }
        }
      }
    }
    h2 {
      font-size: 30px;
    }
  }
}
</style>
