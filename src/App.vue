<script setup>
import HeaderComp from './components/header/HeaderComp.vue';
import FooterComp from './components/footer/FooterComp.vue';
</script>

<template>
  <HeaderComp /> 
  <RouterView />
  <FooterComp />
</template>