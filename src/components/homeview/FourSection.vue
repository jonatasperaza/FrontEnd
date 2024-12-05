<script setup></script>

<template>
  <section>
    <div class="container">
      <div class="text">
        <h1>
          A <span class="strong-pink">Fex</span> tem os melhores caminhões do
          <span class="strong-pink">Brasil</span>
        </h1>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a o using
          'Content here, content here', making it look like readable English.
        </p>
      </div>
    </div>
    <img src="../../../public/imgs/TruckSide.png" alt="" loading="lazy" />
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

section {
  width: 100%;
  background-color: main.$standard-black;
  min-height: 35rem;
  display: flex;
  color: main.$standard-white;
}

.container {
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  height: 100%;
}

p {
  width: 100%;
}

.text {
  display: flex;
  text-align: left;
  flex-direction: column;
  gap: 1rem;
  width: 55%;
  margin: auto;
  padding: 1rem 1rem 1rem 2rem;
  border-left: 2px solid main.$standard-pink;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
}

img {
  width: 100%;
}
@media screen and (max-width: 1024px) {
  section {
    // min-height: 30vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .container {
    width: 60%;
    margin: auto;
    margin: 1rem 0;
  }
  .text {
    width: 100%;
    margin: auto;
    padding: 1rem;
  }
  img {
    width: 100%;
  }
}
@media screen and (max-width: 450px) {
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1rem;
  }
  .container {
    width: 80%;
  }
}
</style>
