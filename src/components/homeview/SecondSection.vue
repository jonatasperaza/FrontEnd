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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores ex soluta
                officia magnam voluptates numquam eum recusandae, vel molestias, doloremque quasi
                vero ipsa unde saepe at commodi aliquid sapiente.
              </p>
            </div>
          </div>
          <div class="card">
            <span class="orange"></span>
            <div class="text">
              <h2>Segurança</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores ex soluta
                officia magnam voluptates numquam eum recusandae, vel molestias, doloremque quasi
                vero ipsa unde saepe at commodi aliquid sapiente.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores ex soluta
                officia magnam voluptates numquam eum recusandae, vel molestias, doloremque quasi
                vero ipsa unde saepe at commodi aliquid sapiente.
              </p>
            </div>
          </div>
          <div class="card">
            <span class="pink"></span>
            <div class="text">
              <h2>Preço Justo</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores ex soluta
                officia magnam voluptates numquam eum recusandae, vel molestias, doloremque quasi
                vero ipsa unde saepe at commodi aliquid sapiente.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores ex soluta
            officia magnam voluptates numquam eum recusandae, vel molestias, doloremque quasi vero
            ipsa unde saepe at commodi aliquid sapiente.
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
