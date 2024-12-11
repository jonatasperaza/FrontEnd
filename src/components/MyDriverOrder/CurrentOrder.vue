<script setup>
import { ref, onMounted, watch } from "vue";
import OrderBoolDescendingVariant from "vue-material-design-icons/OrderBoolDescendingVariant.vue";
import { useGeolocation } from '@vueuse/core';

import { useOrderStore, useAuthStore } from "@/stores";

const orderStore = useOrderStore();
const authStore = useAuthStore();

const { coords, resume } = useGeolocation();

const live = ref(false);

let intervalId = null


console.log(orderStore.state.currentOrder?.id);

watch(live, async (isLive) => {
    if (isLive) {
        intervalId = setInterval(async () => {
            console.log("Analyzing your location...");
            console.log(JSON.stringify(coords.value.latitude + " " + coords.value.longitude));
            const response = await orderStore.updateOrderLocal(orderStore.state.currentOrder?.id, {
                "driver_position": {
                    "latitude": coords.value.latitude,
                    "longitude": coords.value.longitude,
                }
            });
            console.log(response)

        }, 10000);
    } else if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
});

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
}

async function editOrder() {
    await orderStore.updateOrderStatus(orderStore.state.currentOrder.id, 5);
}

onMounted(async () => {
    const orderId = await orderStore.getOrderByClientOrByDriver('', authStore.state.user?.driver.id);
    console.log(orderId[0].id);
    await orderStore.getOrder(orderId[0].id);
});
</script>

<template>
    <main v-if="orderStore.state.currentOrder">
        <!-- Top Information -->
        <article class="top">
            <div class="icon">
                <OrderBoolDescendingVariant size="100" />
            </div>
            <div class="title">
                <h2>Minha Entrega</h2>
                <p>Data do Pedido: {{ formatDate(orderStore.state.currentOrder.order_date) }}</p>
                <p>Preço Total: R$150,00</p>
            </div>
        </article>
        <hr />

        <!-- Itens -->
        <article class="items">
            <h3>Itens do Pedido:</h3>
            <div class="headerList">
                <p class="pink">Nome</p>
                <p>Quantidade</p>
                <p  class="pink">Peso (kg)</p>
                <p>Altura (m)</p>
                <p  class="pink">Observação</p>
            </div>
            <div class="list">
                <div
                    v-for="item in orderStore.state.currentOrder.items"
                    :key="item.name"
                    class="itemList"
                >
                    <p>{{ item.name }}</p>
                    <p>{{ item.quantity }}</p>
                    <p>{{ item.weight }}</p>
                    <p>{{ item.height }}</p>
                    <p>{{ item.observation }}</p>
                </div>
            </div>
        </article>
        <hr />

        <!-- Dados de Coleta -->
        <article class="collect">
            <h3 class="pink">Dados de Coleta:</h3>
            <p>Endereço: {{ orderStore.state.currentOrder.address_collect.street }}, 
                Nº {{ orderStore.state.currentOrder.address_collect.number }}</p>
            <p>Bairro: {{ orderStore.state.currentOrder.address_collect.neighborhood }}</p>
            <p>Cidade: {{ orderStore.state.currentOrder.address_collect.city }}</p>
            <p>Estado: {{ orderStore.state.currentOrder.address_collect.state }}</p>
            <p>Data Prevista de Coleta: 
                {{ formatDate(orderStore.state.currentOrder.delivery.date_preview_colect) }}</p>
        </article>
        <hr />

        <!-- Dados de Entrega -->
        <article class="delivery">
            <h3 class="pink">Dados de Entrega:</h3>
            <p>Endereço: {{ orderStore.state.currentOrder.address_delivery.street }}, 
                Nº {{ orderStore.state.currentOrder.address_delivery.number }}</p>
            <p>Bairro: {{ orderStore.state.currentOrder.address_delivery.neighborhood }}</p>
            <p>Cidade: {{ orderStore.state.currentOrder.address_delivery.city }}</p>
            <p>Estado: {{ orderStore.state.currentOrder.address_delivery.state }}</p>
            <p>Data Prevista de Entrega: 
                {{ formatDate(orderStore.state.currentOrder.delivery.date_preview_delivery) }}</p>
        </article>
        <hr />

        <!-- Buttons -->
        <div class="actions">
            <button @click="editOrder" v-if="orderStore.state.currentOrder.orderStatus">Confirmar Coleta</button>
            <button @click="resume">Iniciar Entrega</button>
            <button @click="live = !live">
            {{ live ? "Stop Live Mode" : "Start Live Mode" }}
        </button>
        </div>
    </main>
</template>

<style scoped>
main {
    margin: 3rem auto;
    background-color: #070707;
    border: 1px solid #c1c1c1;
    border-radius: 10px;
    padding: 1rem;
    width: 60%;
}

.top {
    display: flex;
    align-items: center;
    padding: 1rem;
}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
}

span {
    display: flex;
    justify-content: center;
    align-items: center;
}

.title > p {
    margin: 0;
    color: #c1c1c1;
}
.title > h2{
    color: #fc1d87 ;
}
.items,
.collect,
.delivery {
    margin: 1rem auto;
}

.items h3,
.collect h3,
.delivery h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #c1c1c1;
}

.headerList {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(5, 1fr);
    border-bottom: 1px solid #ccc;
    padding: 1rem;
    font-size: 80%;
}
.headerList > p{
    text-align: center;
    font-weight: bold;
}

.list {
    display: grid;
    max-height: 200px;
    overflow-y: scroll;
}
.pink{
    color: #fc1d87 !important;
}
.itemList {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 1rem;
    border-bottom: 1px solid #ccc;
    font-size: 80%;
}
.itemList > p{
    text-align: center;
}

.date {
    display: flex;
    flex-direction: column;
}

.actions {
    display: flex;
    justify-content: space-around;
    margin: 1rem 0;
}

.actions button {
    padding: .75rem;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #fc1d87;
    cursor: pointer;
    transition: .3s ease-in-out;
}

.actions button:hover {
    background-color: #d01970;
}

@media screen and (max-width: 1024px) {
    main {
        width: 90%;
    }

    .headerList,
    .itemList {
        grid-template-columns: 1fr;
    }
    .headerList > p{
        text-align: left;
    }
    .itemList > p{
        text-align: left;
    }
    .actions{
        flex-direction: column;
        gap: 1rem;
    }
}
</style>
