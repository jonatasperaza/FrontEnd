<script setup>
</script>
<template>
    <section>
        <article>
            <div>
                <h1>
                    Confira nossos Veículos
                    <span class="strong-pink">mais usados.</span>
                </h1>
            </div>
        </article>
    </section>
</template>
<style scoped lang="scss">
@use '../../assets/main';
section {
    background-image: url(./public/imgs/TruckVehicle.png);
    width: 100%;
    background-size: cover;
    height: 40rem;
    display: flex;
    justify-content: center;
    border-bottom: 3.5px solid #FC1D87;

    article {
        width: 80%;
        margin: auto;

        div {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            width: 65%;

            h1 {
                font-size: 80px;
                font-weight: 700;
                color: white;
            }
        }
    }
}

@media screen and (max-width: 1024px){
    section {
        background-image: url(./public/imgs/TruckVehicle-responsive.png);
    }
}

@media screen and (max-width: 650px){
    section {
        background-image: url(./public/imgs/TruckVehicle-responsive-2.png);
    }
}
</style>