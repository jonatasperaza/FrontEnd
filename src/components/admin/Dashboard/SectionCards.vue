<script setup>
import { ref } from 'vue';
import CardsComp from './CardsComp.vue';
import TruckFast from 'vue-material-design-icons/TruckFast.vue';
import Account from 'vue-material-design-icons/Account.vue';
import CardAccountDetails from 'vue-material-design-icons/CardAccountDetails.vue';
import Tire from 'vue-material-design-icons/Tire.vue';

const data = ref([
    {
        icon: Tire,
        title: 'Motoristas Cadastrados',
        number: 230,
        color: 'limegreen'
    },
    {
        icon: TruckFast,
        title: 'Veiculos Cadastrados',
        number: 340,
        color: 'yellow'
    }
    ,
    {
        icon: Account,
        title: 'Clientes Cadastrados',
        number: 140,
        color: 'aqua'
    }
    ,
    {
        icon: CardAccountDetails,
        title: 'Funcionarios Cadastrados',
        number: 923,
        color: 'orange'
    }

])


</script>

<template>
    <section>
        <div class="title">
            <h2>Meu <span class="strong-pink">Dashboard</span></h2>
        </div>
        <div class="cards">
            <CardsComp v-for="item in data" :key="item" :option="item" />
        </div>
    </section>
</template>


<style scoped lang="scss">
@use '@/assets/main';

section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.title {
    width: 80%;
    margin: auto;
    font-size: 1.5rem;
}

.cards{
    width: 80%;
    margin: auto;
    display: flex;
    gap: 2rem
}


</style>