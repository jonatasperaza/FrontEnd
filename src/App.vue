<script setup>
import FooterComp from './components/footer/FooterComp.vue';
import { ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import HeaderComp from './components/header/HeaderComp.vue';
import Eye from 'vue-material-design-icons/Eye.vue';
const router = useRouter()
console.log(router.getRoutes())
const routes = router.getRoutes();
const showDev = ref(false)
</script>
<template>
  <span @click="showDev = !showDev" class="eye"><Eye /></span>
  <p class="data" v-if="showDev">
    <RouterLink  v-for="link in routes" :key="link.path" :to="link.path">{{ link.name }}</RouterLink>
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