<script setup>
</script>
<template>
    <section>
        <div class="containerText">
        <div class="title">
            <h1 class="titlePink">Conheça</h1>
            <h1>mais sobre </h1>
            <h1>a</h1>
            <h1 class="titlePink">FEX</h1>
            <h1>.</h1>
        </div>
        <div class="textContent"><p>A FEX, através do comprometimento da alta direção e seus colaboradores, busca fornecer serviços de alta qualidade, com segurança, sustentabilidade e satisfação de nossos clientes. Nos esforçamos para atender e superar as expectativas dos nossos clientes e colaboradores através de soluções de transporte confiáveis e eficientes</p></div>
    </div>
    </section>
</template>
<style scoped lang="scss">
@use '../../assets/main';
section{
    width: 100%;
    height: 600px;
    background-image: url("/public/background1About.png");
    background-size: cover;
    .containerText{
        width: 50%;
        height: 100%;
        margin: 0 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title{
            display: flex;
            flex-direction: row;    
            width: 95%;
            flex-wrap: wrap;
            gap: .75rem;
        }
        .textContent{
            width: 85%;
            margin: 1rem 0;
            font-size: 16px;
            color: main.$standard-white;
        }
    }
}
h1{
    font-size: 80px;
    color: main.$standard-white;
    font-weight: bold;
}
.titlePink{
    color: main.$standard-pink;
}
</style>