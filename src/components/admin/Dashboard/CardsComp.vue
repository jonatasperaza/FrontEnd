<script setup>

const props = defineProps({
    option: Object,
})
</script>

<template>
    <article>
        <div class="title">
            <h3>{{ props.option.title }}</h3>
        </div>
        <div class="info">
            <div class="number">
                <h2>{{ props.option.number }}</h2>
            </div>
            <div class="icon">
                <component :is="props.option.icon" :style="{ color: props.option.color }" :size="75" />
            </div>
        </div>
    </article>
</template>

<style scoped lang="scss">
@use '@/assets/main';

article {
    width: 100%;
    background-color: #070707;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid #c1c1c1;
    overflow: hidden;
}

.info {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    width: 100%;
    color: main.$standard-white;
}


.number {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    width: 100%;
    color: main.$standard-white;
}
</style>