<script setup>
// import ManageOrders from './ManageOrders.vue';
import ManageVehicles from './ManageVehicles.vue'
</script>

<template>
    <div class="container">
      <ManageVehicles />
      <ManageVehicles />
      <!-- <ManageOrders /> -->
    </div>
</template>

<style scoped lang="scss">
@use '@/assets/main';

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 82vw;
  margin: auto;
  gap: 1rem;
}

@media screen and (max-width: 1150px) {
  .container {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
}

}
</style>
