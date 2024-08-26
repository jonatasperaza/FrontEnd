<script setup>
</script>

<template>
    <section>
        <article>
            <div>
                <h1>
                    Lhe Entregamos
                    <span class="strong-pink">A Solução.</span>
                </h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem Ipsum is that it has a o using 'Content here,
                    content here', making it look like readable English.</p>
            </div>
        </article>
    </section>
</template>


<style scoped lang="scss">
@use '@/assets/main.scss';
section {
    background-image: url(./public/imgs/TruckHome.png);
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
    width: 30%;
    h1 {
    font-size: 80px;
    font-weight: 700;
    color: white;
    }
    p {
    font-size: 16px;
    color: white;
    }
    }
    }
}
</style>
