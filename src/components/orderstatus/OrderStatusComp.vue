<script setup>
    import OrderStatusTitle from './OrderStatusTitle.vue';
    import OrderStatusProgress from './OrderStatusProgress.vue';
    import OrderStatusInformations from './OrderStatusInformations.vue';
</script>
<template>
    <section class="order-status">
        <div class="container-comp">
            <OrderStatusTitle />
            <OrderStatusProgress />
            <OrderStatusInformations />
        </div>
    </section>
</template>
<style scoped lang="scss">
@use '../../assets/main';
    .order-status {
        background-image: url(../public/imgs/background-order-status.png);
        background-size: cover;
        min-height: 100vh;

        .container-comp {
            padding: 3rem 10rem 10rem 10rem;
            min-height: 100vh;
            display: grid;
            grid-template-rows: 10rem 4fr;
            grid-template-columns: 1fr 4fr;
        }
    }

</style>
