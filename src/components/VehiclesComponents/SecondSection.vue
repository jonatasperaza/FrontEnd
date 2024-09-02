<script setup>
</script>
<template>
    <section>
        <div>
            <div class="container-title">
                <h1>Caminhões</h1><h1 class="colored-text">Scania</h1>
            </div>
            <p>Os caminhões da Scania são reconhecidos mundialmente por sua durabilidade, eficiência e inovação tecnológica, projetados para oferecer alto desempenho, desde transporte de cargas pesadas até serviços urbanos e de longa distância. </p>
        </div>
        <div class="container-ul">
            <ul>
                <li>Scania r450 ‘2012</li>
                <li>Scania s500 ‘2016</li>
                <li>Scania g410 ‘2014</li>
                <li>Scania p280 ‘2017</li>
            </ul>
        </div>  
        <div class="truck-container">
            <img src="/public/imgs/caminhao-scania.png">
        </div>
    </section>
</template>
<style scoped lang="scss">
@use '../../assets/main';

section {
    height: 40rem;
    background-color: black;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    div {
        margin: 2em;
        color: white;
        .container-title {
            display: flex;
            h1 {
                font-size: 60px;
                
            }

            .colored-text{
            color: main.$standard-pink;
            margin-left: 0.3em;
            }

        }
        
        p {
            font-size: 20px;
        }
    }
    .container-ul {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        ul {
            li {
                font-size: 25px;
            }
        }
    }
    .truck-container {
        grid-column: 2;
        grid-row: 1 / span 2;
    }
}
</style>