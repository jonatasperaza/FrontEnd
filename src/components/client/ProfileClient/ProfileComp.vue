<script setup>
import LeftProfileInputsVue from './LeftProfileInputs.vue'
import RightProfileInputsVue from './RightProfileInputs.vue'
import TypeOrderComp from './TypeOrderComp.vue'
</script>
<template>
  <section>
    <div class="container">
      <h1><span class="strong-pink">Meu</span> Perfil</h1>
      <div class="rowInputs">
        <div class="left">
          <LeftProfileInputsVue />
        </div>
        <div class="right">
          <RightProfileInputsVue />
        </div>
      </div>
      <div class="pinkLine"></div>
      <h2><span class="strong-pink">Histórico</span></h2>
      <TypeOrderComp />
    </div>
  </section>
</template>
<style scoped lang="scss">
@use '../../../assets/main';
section {
  width: 100%;
  min-height: 100vh;
  background-color: main.$standard-black;
  .container {
    width: 100%;
    margin: auto;

    .pinkLine {
      width: 100%;
      height: 2px;
      background-color: main.$standard-pink;
      margin: 1rem 0;
    }
  }
  h1 {
    color: white;
    font-size: 45px;
    text-align: center;
    padding: 1rem;
  }
  h2 {
    color: white;
    font-size: 45px;
    text-align: center;
    padding: 1rem;
  }
  .rowInputs {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    .left,
    .right {
      width: 48%;
      height: 80vh;
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: center;
    }
  }
}

@media screen and (max-width: 1150px) {
  

  section {
  
  .container {
    

    .pinkLine {
      
    }
  }
  h1 {
    
  }
  h2 {
    
  }
  .rowInputs {
    flex-direction: column-reverse;
    width: 100%;
    .left {
      width: 80%;
      height: 55vh;
      justify-content: flex-start;
    }
    .right {
      width: 80%;
      height: 55vh;
      display: flex;
      justify-content: space-between;

    }
  }
}
}
</style>
