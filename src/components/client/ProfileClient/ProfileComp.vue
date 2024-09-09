<script setup>
</script>
<template>
    <section>
        <div class="container">
            
        </div>
    </section>
</template>
<style scoped lang="scss">
@use '../../../assets/main';
section{
    width: 100%;
    min-height: 100vh;
    background-color: main.$standard-black;
    .container{
        width: 60%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        align-items: center;
        border: 2px solid white;
        margin: auto;
    }
}
</style>