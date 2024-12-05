<script setup>
// import ManageOrders from './ManageOrders.vue';
import ManageVehicles from './ManageVehicles.vue'
</script>

<template>
  <section>
    <div class="container">
      <ManageVehicles />
      <ManageVehicles />
      <!-- <ManageOrders /> -->
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/main';

section {
  width: 100%;
}

.container {
  width: 80%;
  display: flex;
  gap: 2rem;
  margin: auto;
}

@media screen and (max-width: 1150px) {
  .container {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
}

}
</style>
