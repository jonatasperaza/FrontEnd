<script setup>
</script>
<template>
    <section>
        <div>
            <h1></h1><h1></h1>
            <p></p>
        </div>
        <div>
            <h2></h2>
            <h2></h2>
            <h2></h2>
            <h2></h2>
        </div>
        <div class="Truck-container">
            <img src="" alt="">
        </div>
    </section>
</template>
<style scoped lang="scss">
@use '../../assets/main';

section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    .truck-container {
        grid-column: 1;
        grid-row: 2;
    }
}
</style>