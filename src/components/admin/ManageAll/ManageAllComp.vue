<script setup>
// import ManageOrders from './ManageOrders.vue';
import ManageVehicles from './ManageVehicles.vue';
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

.container{
    width: 80%;
    display: flex;
    gap: 2rem;
    margin: auto;
}
</style>