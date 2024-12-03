<script setup>
import { RouterLink } from 'vue-router'
import NavFooterComp from './NavFooterComp.vue'
import SocialFooterComp from './SocialFooterComp.vue'
import AddressFooterComp from './AddressFooterComp.vue'
import ContactFooterComp from './ContactFooterComp.vue'
</script>
<template>
  <footer>
    <NavFooterComp />
    <SocialFooterComp />
    <AddressFooterComp />
    <ContactFooterComp />
  </footer>
</template>
<style scoped lang="scss">
@use '../../assets/main';

footer {
  height: 16rem;
  background-color: main.$standard-black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
}

@media screen and (max-width: 1150px) {
  footer {
    height: 13rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
