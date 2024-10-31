<script setup>
</script>
<template>
    <section>
        <div class="container-first-info">
            <div class="container">
                <div class="container-title">
                    <h1>
                        Caminhões
                        <span class="strong-pink">Scania</span>
                    </h1>
                </div>
                <div class="container-text">
                    <p>Os caminhões da Scania são reconhecidos mundialmente por sua durabilidade, eficiência e inovação
                        tecnológica, projetados para oferecer alto desempenho, desde transporte de cargas pesadas até
                        serviços urbanos e de longa distância. </p>
                </div>
            </div>
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
    background-image: url(./public/imgs/background-line.png);
    background-size: cover;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    border-bottom: 3px solid main.$standard-pink;
    border-top: 3px solid main.$standard-pink;


    .container-first-info {
        margin: 4em;
        color: white;

        .container {
            padding-left: 3em;
            border-left: 4px solid main.$standard-pink;

            .container-title {
                display: flex;

                h1 {

                    font-size: 60px;
                }


            }

            .container-text {
                margin-top: 1.5em;

                p {
                    font-size: 23px;
                }

            }
        }

    }

    .container-ul {
        display: grid;
        grid-template-columns: 2fr 1fr;
        justify-items: center;
        color: white;

        ul {
            li {
                margin-bottom: 1em;
                font-size: 25px;
            }

            li::marker {
                color: main.$standard-pink;
            }
        }
    }

    .truck-container {
        width: 80%;

        img {
            width: 100%;
        }

        margin-top: 2em;
        display: flex;
        grid-column: 2;
        grid-row: 1 / span 2;
    }
}

@media screen and (max-width: 1200px) {
    section {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;

        .container-first-info {
            grid-column: 1 / span 2;

            .container {

                .container-title {



                    h1 {
                        font-size: 50px;
                    }


                }

            }

            .container-text {
                margin-top: 1.5em;

                p {
                    font-size: 23px;
                }
            }
        }

        .container-ul {
            display: flex;
            grid-row: 2;
            grid-column: 1;
            justify-content: center;
            

            ul {
                
                li {
                    font-size: 25px;
                }

                li::marker {
                    color: main.$standard-pink;
                }
            }
        }

        .truck-container {
            width: 100%;
            height: 100%;
            margin: 0%;
            margin-bottom: 2em;

            img {
                width: 25em;
                height: 20em;
            }

            margin-top: 0;
            display: flex;
            justify-content: center;
            grid-row: 3;
            grid-column: 1 / span 2;
        }
    }
}



@media screen and (max-width: 600px) { 
    section {
        height: 65rem;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;

        .container-first-info {
            top: 0;
            margin: 1em;
            color: white;

            .container {
                padding-left: 2em;
                border-left: 4px solid main.$standard-pink;

                .container-title {
                    display: flex;

                    h1 {

                        font-size: 60px;
                    }


                }

                .container-text {
                    display: flex;
                    font

                    p {
                        font-size: 16px;
                    }

                }
            }

        }

        .container-ul {
            display: flex;
            grid-row: 2;
            grid-column: 1;
            justify-content: center;
            

            ul {
                
                li {
                    font-size: 25px;
                }

                li::marker {
                    color: main.$standard-pink;
                }
            }
        }

        .truck-container {
            width: 100%;
            height: 100%;

            img {
                width: 18em;
                height: 16em;
            }

            margin-top: 0;
            display: flex; 
            justify-content: center;
            grid-row: 3;
            grid-column: 1;
        }
    }
}
</style>