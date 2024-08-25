<script setup>
</script>

<template>
    <section>
        <div class="container">
            <div class="text">
            <h1>
                A <span class="strong-pink">Fex</span>
                tem os melhores
                caminhões
                do <span class="strong-pink">Brasil</span>
            </h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a o using 'Content here, content here', making it look like readable English.</p>
        </div>
        </div>
        <img src="../../../public/imgs/TruckSide.png" alt="">
    </section>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

section {
    width: 100%;
    background-color: main.$standard-black;
    height: 55vh;
    display: flex;
    color: main.$standard-white;
}

.container {
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    height: 100%;
}

.text {
    display: flex;
    text-align: left;
    flex-direction: column;
    gap: 1rem;
    width: 50%;
    margin: auto;
    padding: 1rem 1rem 1rem 2rem;
    border-left: 2px solid main.$standard-pink;
}

h1{
    font-size: 3rem;
    font-weight: 700;
}

img {
    width: 65%;
}
</style>