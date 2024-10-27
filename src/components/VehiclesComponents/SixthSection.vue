<script setup>
</script>
<template>
    <section>
        <div class="container">
            <div>
                <h1 class="strong-pink">
                    Contate-nos
                    <span class="white">para mais</span>
                    informações
                </h1>
            </div>
            <div class="line"></div>
        </div>
    </section>
</template>
<style scoped lang="scss">
@use '../../assets/main';

section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(./public/imgs/background-sixth-section.png);
    background-size: cover;
    height: 35rem;
    border-top: 3px solid main.$standard-pink;

    .container {
        text-align: center;
        width: 70%;

        h1 {
            font-size: 80px;
            margin-bottom: 0.5em;
        }

        .line {
            width: 50%;
            height: 3px;
            background-color: white;
            margin: auto;
        }
    }
}

@media screen and (max-width: 1024px) {
    section {


        .container {


            h1 {
                
            }

            .line {
                width: 80%;
            }
        }
    }
}



@media screen and (max-width: 625px) {
    section {


        .container {


            h1 {
                font-size: 45px;
                margin-bottom: 0.5em;
            }

            .line {
                width: 90%;
            }
        }
    }
}
</style>