<script setup>
import { useOrdersStore } from '@/stores';

const ordersStore = useOrdersStore();
</script>
<template>
    <section>
        <div>
            <h1 class="strong-pink" v-if="ordersStore.state.step == 1">Dados<span class="white">do Pedido</span>
            </h1>
            <h1 class="strong-pink" v-if="ordersStore.state.step == 2">Dados<span class="white">de Coleta</span>
            </h1>
            <h1 class="strong-pink" v-if="ordersStore.state.step == 3">Dados<span class="white">de Entrega</span>
            </h1>
            <h1 class="strong-pink" v-if="ordersStore.state.step == 4">Conferir<span class="white"> Dados</span>
            </h1>
        </div>
    </section>
</template>
<style scoped lang="scss">
@use '../../../assets/main.scss';
section {
    width: 100%;
    height: 10rem;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 50%;
        height: 5em;
        h1 {
            font-size: 4rem;
            span{
                margin-left: 0.25em 
            };
        }
    }
}
@media screen and (max-width: 1024px){
    section{
        height: 5rem;
        div{
            width: 80%;
            h1{
                font-size: 2rem;
            }
        }
    }
}
</style>