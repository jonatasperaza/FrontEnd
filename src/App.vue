<script setup>
import FooterComp from './components/footer/FooterComp.vue'
import HeaderComp from './components/header/HeaderComp.vue'
// import DevContainer from './views/DevContainer.vue'
</script>
<template>
  <!-- <DevContainer /> -->
  <HeaderComp />
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <FooterComp />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
