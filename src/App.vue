<script setup>
import HeaderComp from './components/header/HeaderComp.vue';
import FooterComp from './components/footer/FooterComp.vue';
import { RouterView } from 'vue-router'
import { useDriverStore } from './stores';
const store = useDriverStore();
</script>

<template>
  <p class="data">
    {{ store.state.driver_data }}
  </p>
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
  top: 20px;
  left: 20px;
  width: 200px;
}
</style>
