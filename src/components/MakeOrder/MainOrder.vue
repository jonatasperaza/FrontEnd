<script setup>
// import { ref, onMounted } from 'vue'
import { useOrderStore } from '@/stores'

import OrderProgressComp from '../order/orderProgress/OrderProgressComp.vue'
import FirstOrder from './FirstOrder.vue'

const ordersStore = useOrderStore()
// const authStore = useAuthStore()
</script>

<template>
  <div>
    <section>
      <div v-if="ordersStore.state.step < 5">
        <OrderProgressComp />
      </div>
    </section>
    <FirstOrder />
  </div>
</template>
<style scoped lang="scss">
@use '../../assets/main.scss';
</style>
