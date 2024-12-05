<script setup></script>
<template>
  <section>
    <span></span>
    <div class="container">
      <div class="locationImg" id="loc1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.479943546926!2d-46.43355922539462!3d-23.443146357258374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce63078c968bf7%3A0x1980321f2d8c69eb!2sSKIBIDI%20SIGMA%20AURA%20RIZZ%20LAND!5e0!3m2!1spt-BR!2sbr!4v1731896138133!5m2!1spt-BR!2sbr"
          width="500"
          height="400"
          style="border: 2px solid #fc1d87"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="locationImg" id="loc2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.479943546926!2d-46.43355922539462!3d-23.443146357258374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce63078c968bf7%3A0x1980321f2d8c69eb!2sSKIBIDI%20SIGMA%20AURA%20RIZZ%20LAND!5e0!3m2!1spt-BR!2sbr!4v1731896138133!5m2!1spt-BR!2sbr"
          width="300"
          height="400"
          style="border: 2px solid #fc1d87"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="locationDesc">
        <div class="row">
          <h2>Onde</h2>
          <h2 class="titlePink">Estamos</h2>
          <h2>?</h2>
        </div>
        <span></span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, minus porro,
          dignissimos laboriosam soluta voluptatem nesciunt neque corrupti mollitia dolores vero
          cumque? Ullam nesciunt ipsum placeat iusto, quis mollitia molestiae. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Excepturi eum voluptatem nam, vero at labore maiores a
          temporibus asperiores? Ducimus quis sed minus. Nemo repellendus at cumque id autem dolor.
        </p>
      </div>
    </div>
    <span></span>
  </section>
</template>
<style scoped lang="scss">
@use '../../assets/main';
section {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(/public/background3About.png);
  background-size: cover;
  .container {
    width: 100%;
    height: 30rem;
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    .locationImg {
      width: 40%;
      padding: 1rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .locationDesc {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .row {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }
      p {
        color: main.$standard-white;
        font-size: 20px;
        margin: 1rem 0;
      }
    }
  }
}
span {
  width: 100%;
  height: 2px;
  background-color: main.$standard-pink;
}
h2 {
  font-size: 50px;
  color: main.$standard-white;
  font-weight: bold;
}
.titlePink {
  color: main.$standard-pink;
}
#loc2{
  display: none;
}
@media screen and (max-width: 1024px) {
  section {
    background-color: main.$standard-black;
    background-image: none;
    .container {
      flex-direction: column;
      height: 80vh;
      justify-content: center;
      .locationImg {
        width: 90%;
        margin: auto;
        border: img {
          width: 100%;
          height: 100%;
        }
      }
      .locationDesc {
        width: 90%;
        align-items: center;
        margin: auto;
        .row {
          width: 90%;
          justify-content: center;
          h2 {
            font-size: 40px;
          }
        }
        p {
          font-size: 16px;
        }
      }
    }
  }
  #loc1{
    display: none;
  }
  #loc2{
    display: block;
  }
}
</style>
