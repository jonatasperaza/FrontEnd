<script setup></script>

<template>
  <section>
    <div class="container">
      <div class="cards">
        <div class="card-row">
          <div class="card">
            <span class="blue"></span>
            <div class="text">
              <h2>Rapidez</h2>
              <p>
                Entendemos que tempo é um recurso valioso. Por isso, trabalhamos de forma ágil e eficiente, entregando resultados em prazos que superam expectativas sem comprometer a qualidade do serviço prestado.
              </p>
            </div>
          </div>
          <div class="card">
            <span class="orange"></span>
            <div class="text">
              <h2>Segurança</h2>
              <p>
                Garantimos total segurança em nossos processos, utilizando tecnologias avançadas e métodos confiáveis para proteger os dados e informações dos nossos clientes. Seu projeto estará em boas mãos conosco.
              </p>
            </div>
          </div>
        </div>
        <div class="card-row">
          <div class="card">
            <span class="yellow"></span>
            <div class="text">
              <h2>Qualidade</h2>
              <p>
                Nosso compromisso é entregar serviços que atendam aos mais altos padrões de qualidade. Cada detalhe é pensado e executado com excelência para garantir que você obtenha o melhor. 
              </p>
            </div>
          </div>
          <div class="card">
            <span class="pink"></span>
            <div class="text">
              <h2>Preço Justo</h2>
              <p>
                Oferecemos soluções acessíveis e competitivas, equilibrando custos e benefícios. Nosso objetivo é proporcionar o máximo de valor pelo menor investimento possível, respeitando o seu orçamento.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="info">
        <div class="info-align">
          <h1>
            Levamos as
            <div class="strong-pink">Soluções</div>
            dos seus
            <div class="strong-pink">Problemas</div>
          </h1>
          <p>
            Seja qual for o desafio, estamos prontos para resolvê-lo. Nosso time de especialistas trabalha com dedicação e criatividade para oferecer soluções práticas e eficazes, ajudando você a alcançar seus objetivos de maneira simples e eficiente.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

section {
  width: 100%;
  background-color: black;
  padding: 3rem;
  min-height: 42rem;
  display: flex;
  justify-content: center;
  color: white;
}

.container {
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.cards {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 3rem;
}

.card-row {
  display: flex;
  gap: 3rem;
}

.card {
  background-color: #161616;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  width: 50%;
}

span {
  position: relative;
  left: -16px;
  top: -16px;
  width: 13px;
  height: 122px;
}

span.blue {
  background-color: #00b7f1;
}

span.orange {
  background-color: #dc5407;
}

span.yellow {
  background-color: #faff01;
}

span.pink {
  background-color: #fc1d87;
}

.text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.info-align {
  padding: 1rem 1rem 1rem 2rem;
  border-left: 2px solid #fc1d87;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 95%;
  align-items: center;
  justify-content: center;
  width: 100%;
}

h1 {
  font-size: 60px;
  font-weight: 700;
  color: white;
  width: 100%;
  word-break: break-all;
}
h2 {
  font-size: 25px;
}
@media screen and (max-width: 1024px) {
  section {
    min-height: 92vh;
  }
  .container {
    grid-template-columns: 1fr;
  }
  .card-row {
    flex-direction: column;
  }
  .card {
    width: 90%;
    margin: auto;
  }
  span {
    left: -16px;
    top: -16px;
    width: 13px;
    height: 122px;
  }
  h1 {
    font-size: 40px;
  }
  .info {
    width: 90%;
    margin: auto;
  }
}
@media screen and (max-width: 450px) {
  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 24px;
  }
  span {
    left: -16px;
    top: -16px;
    width: 13px;
    height: 122px;
  }
  .card {
    width: 100%;
  }
  .info {
    width: 100%;
    margin: auto;
  }
}
</style>
