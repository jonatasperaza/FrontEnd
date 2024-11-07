<script setup></script>

<template>
    <section>
        <img src="../../../public/imgs/PeopleHome.png" alt="Background People" class="background-image" loading="lazy">
        <article>
            <h1>
                <p class="strong-pink">+50000</p>
                <p>Pedidos entregues no ano de</p>
                <p class="strong-pink">2023</p>
            </h1>
        </article>
    </section>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

section {
    position: relative;
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}

article {
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: white;
    font-size: 4.5rem;
    text-align: center;
    z-index: 1; 
}

h1 {
    display: flex;
    flex-direction: column;
}

@media screen and (max-width: 1024px) {
    section {
        height: 50vh;
    }
    article {
        width: 70%;
        font-size: 3.5rem;
    }
}

@media screen and (max-width: 450px) {
    article {
        font-size: 2.5rem;
    }
}
</style>
