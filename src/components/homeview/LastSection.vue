<script setup>
</script>

<template>
    <section>
        <div class="container">
            <div>
                <h1 class="title-last-section">Faça seu pedido </h1>
                <h1 class="title-last-section strong-pink">AQUI !</h1>
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

.title-last-section {
    font-size: 70px;
    display: flex;
}

.container{
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    height: 200px;
    div{
        display: flex;
        gap: 10px;
    }
}

.a{
    width: 100%;
    display: flex;
    align-items: center;
}

a{
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

a:hover{
    background: black;
}
// .title-last-section{
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
// }
@media screen and (max-width: 1024px){
    section{
        height: 50vh;
    }
    .container{
        height: 100%;
        gap: 1rem;
    }
    .a{
        width: 100%;
        display: flex;
        align-items: center;
    }
    a{
        width: 50%;
    }
}
@media screen and (max-width: 450px){
    .title-last-section{
        font-size: 35px;
    }
    .container{
        width: 90%;
    }
    a{
        width: 70%;
    }
    .a{
        width: 80%;
        display: flex;
        align-items: center;
    }
}
</style>