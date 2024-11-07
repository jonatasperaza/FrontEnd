<script setup>
</script>

<template>
    <section>
        <img src="../../../public/imgs/OrderTruck.png" alt="Order Truck Background" class="background-image">
        <div class="container">
            <div>
                <h1 class="title-last-section">Faça seu pedido</h1>
                <h1 class="title-last-section strong-pink">AQUI !</h1>
            </div>
            <div class="a">
                <router-link to="/make-order">
                    Fazer meu Pedido
                </router-link>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

section {
    position: relative;
    width: 100%;
    height: 85vh;
    display: flex;
    align-items: center;
    color: main.$standard-white;
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

.title-last-section {
    font-size: 70px;
    display: flex;
}

.container {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    height: 200px;
    z-index: 1;
    
    div {
        display: flex;
        gap: 10px;
    }
}

.a {
    width: 100%;
    display: flex;
    align-items: center;
}

a {
    text-decoration: none;
    padding: .75rem;
    width: 20%;
    text-align: center;
    margin: auto;
    background-color: main.$standard-pink;
    color: white;
    font-size: 1rem;
    font-weight: 800;
    border-radius: 15px;
    transition: 0.5s ease-in-out;
}

a:hover {
    background: black;
}

@media screen and (max-width: 1024px) {
    section {
        height: 50vh;
    }
    .container {
        height: 100%;
        gap: 1rem;
    }
    .a {
        width: 100%;
    }
    a {
        width: 50%;
    }
}

@media screen and (max-width: 450px) {
    .title-last-section {
        font-size: 35px;
    }
    .container {
        width: 90%;
    }
    a {
        width: 70%;
    }
    .a {
        width: 80%;
    }
}
</style>
