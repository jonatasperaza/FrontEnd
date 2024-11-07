<script setup>
import FooterComp from './components/footer/FooterComp.vue';
import HeaderComp from './components/header/HeaderComp.vue';
import DevContainer from './views/DevContainer.vue';
</script>
<template>
  <DevContainer />
  <HeaderComp />
  <RouterView />
  <FooterComp />
</template>

<style scoped>
p.data{
  position: absolute;
  color: white;
  background-color: red;
  padding: 10px;
  border-radius: 10px;
  top: 35px;
  left: 40px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  z-index: 100;
}

a{
  color: white;
  text-decoration: none;
  border: 2px solid white;
  padding: 7px;
  /* font-size: 1.5rem;;;;;;/ */
}

a:hover{
  background-color: white;
  color: black;
}

.eye{
  cursor: pointer;
  position: absolute;
  color:white;
  top: 10px;
  left: 10px;
}
</style>
