<script setup>
import { ref, onMounted } from 'vue';

</script>
<template>
    <section>
        <div class="container">
            <div class="container-title">
                <h2>Feito</h2>
                <h2>Esperando Pagamento</h2>
                <h2>Pago</h2>
                <h2>Esperando Coleta</h2>
                <h2>Pedido Coletado</h2>
                <h2>Esperando Para Sair</h2>
                <h2>Saiu Para Entrega</h2>
                <h2>Entregue</h2>
            </div>
            <div class="circles">
                <div></div>
                <span></span>
                <div></div>
                <span></span>
                <div></div>
                <span></span>
                <div></div>
                <span></span>
                <div></div>
                <span></span>
                <div></div>
                <span></span>
                <div></div>
                <span></span>
                <div></div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
@use '../../assets/main.scss';

section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 55%;
    background-color: main.$standard-black;
    border-right: 2px solid main.$standard-pink;
    

    .container {
        height: 90%;
        display: grid;
        grid-template-columns: 2fr 1fr;
        justify-items: center;

        .container-title {
            width: 100%;
            height: 50%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;

            h2 {
                color: main.$standard-pink;
                font-size: 1rem;
            }
        }
    }

    .circles {
        width: 20%;
        height: 50%;
        display: flex;
        align-items: center;
        flex-direction: column;

        div {
            background-color: main.$standard-white;
            border-radius: 50%;
            height: 8rem;
            width: 1.5rem;
        }

        span {
            height: 60%;
            width: 0.1rem;
            background-color: main.$standard-white;
        }

    }
    
}
</style>