<script setup></script>

<template>
    <section>
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
    width: 100%;
    background-image: url(./public/imgs/PeopleHome.png);
    background-size: cover;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
}

h1 {
    display: flex;
    flex-direction: column;
}
@media screen and (max-width: 1024px) {
    section{
        height: 50vh;
    }
    article{
        width: 70%;
        font-size: 3.5rem;
    }
}
@media screen and (max-width: 450px){
    article{
        font-size: 2.5rem;
    }
}
</style>
