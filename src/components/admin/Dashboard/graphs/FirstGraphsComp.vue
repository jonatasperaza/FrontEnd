<script setup>
import PieGraph from './PieGraph.vue';
import LineGraph from './LineGraph.vue';
import DynamicGraph from './DynamicGraph.vue';
</script>

<template>
    <section>
        <div class="container">
            <div class="first">
                <PieGraph />
            </div>
            <div class="second">
                <LineGraph />
            </div>
        </div>
        <div class="dynamic">
            <DynamicGraph />

        </div>
    </section>
</template>

<style scoped>
section {
    width: 100%;
}

.container {
    display: flex;
    width: 90%;
    margin: auto;
    padding: 1rem;
    gap: 1rem;
    justify-self: space-between;
    align-items: center;
}

.first {
    width: 30%;
}

.second {
    width: 70%;
    margin: auto;
}

.dynamic {
    width: 90%;
    margin: auto;
    padding: 1rem;
}
</style>