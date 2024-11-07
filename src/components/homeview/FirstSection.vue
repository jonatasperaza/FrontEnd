<script setup>
</script>

<template>
    <section>
        <img src="../../../public/imgs/TruckHome.webp" alt="Background Truck" class="background-image" loading="eager">
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
    position: relative;
    width: 100%;
    height: 40rem;
    display: flex;
    justify-content: center;
    border-bottom: 3.5px solid #FC1D87;
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

article {
    width: 80%;
    margin: auto;
    z-index: 1;
    
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

@media screen and (max-width: 1024px) {
    article {
        width: 80%;
        
        div {
            width: 45%;
            margin: auto;

            h1 {
                font-size: 50px;
            }

            p {
                font-size: 16px;
            }
        }
    }
}

@media screen and (max-width: 450px) {
    article {
        width: 100%;

        div {
            width: 70%;
            margin: auto;

            h1 {
                font-size: 40px;
            }

            p {
                font-size: 16px;
            }
        }
    }
}
</style>
