<script setup>
</script>

<template>
    <section>
        <div class="container">
            <div>
                <h1>Faça seu pedido <div class="strong-pink">AQUI !</div></h1>
            </div>
            <div class="a">
                <router-link to="/makeOrder">
                    Fazer meu Pedido
                </router-link>
            </div>
        </div>

    </section>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

section{
    width: 100%;
    height: 85vh;
    background-image: url(./public/imgs/OrderTruck.png);
    background-size: cover;
    display: flex;
    align-items: center;
    color: main.$standard-white;
}

h1{
    font-size: 5rem;
    display: flex;
    gap: 1rem;
}

.container{
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    height: 200px;
}

.a{
    width: 100%;
    display: flex;
    align-items: center;
}

a{
    text-decoration: none;
    padding: .75rem;
    width: 45%;
    text-align: center;
    margin: auto;
    background-color: main.$standard-pink;
    color: white;
    font-size: 1rem;
    font-weight: 800;
    border-radius: 15px;
    transition: 0.5s ease-in-out;
}

a:hover{
    background: black;
}
</style>