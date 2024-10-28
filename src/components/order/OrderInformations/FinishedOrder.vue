<script setup>
</script>
<template>
    <section>
        <h1>Tudo <span class="strong-pink">Finalizado</span>!</h1>
        <p>Obrigado pela preferência</p>
        <img src="/public/FinishedOrderIcon.svg" alt="">
        <button>Confirmar</button>
    </section>
</template>
<style scoped lang="scss">
@use '../../../assets/main.scss';
section{
    width: 100%;
    min-height: 30rem;
    background-image: url('/public/backgroundFinishedOrder.png');
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    h1{
        font-size: 50px;
        color: main.$standard-white;
        margin-bottom: 1rem;
    }
    p{
        font-size: 20px;
        color: main.$standard-white;
        margin-bottom: 1rem;
    }
    img{
        width: 15rem;
        margin: 2rem 0
    }
    button{
        background-color: main.$standard-pink;
        color: main.$standard-black;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        width: 10%;
        height: 2.5rem;
        font-size: 1rem;
        transition: .3s ease-in-out;
    }
    button:hover{
        background-color: main.$standard-black;
        color: main.$standard-pink;
    }
}
</style>