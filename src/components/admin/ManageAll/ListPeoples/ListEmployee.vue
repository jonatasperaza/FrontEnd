<script setup>
import { ref } from 'vue';

const vehicles = ref([
    {
        id: 1,
        model: 'Fusca',
        status: 'Disponivel',
    },
    {
        id: 2,
        model: 'Gol',
        status: 'Disponivel',
    },
    {
        id: 3,
        model: 'Uno',
        status: 'Disponivel',
    },
    {
        id: 4,
        model: 'Celta',
        status: 'Disponivel',
    },
    {
        id: 5,
        model: 'Palio',
        status: 'Disponivel',
    },
    {
        id: 6,
        model: 'Civic',
        status: 'Disponivel',
    },
    {
        id: 7,
        model: 'Corolla',
        status: 'Disponivel',
    },
    {
        id: 8,
        model: 'Cruze',
        status: 'Disponivel',
    },
    {
        id: 9,
        model: 'Onix',
        status: 'Disponivel',
    },
    {
        id: 10,
        model: 'HB20',
        status: 'Disponivel',
    },
    {
        id: 11,
        model: 'Kwid',
        status: 'Disponivel',
    },
    {
        id: 12,
        model: 'Kombi',
        status: 'Disponivel',
    },
    {
        id: 13,
        model: 'S10',
        status: 'Disponivel',
    },
    {
        id: 14,
        model: 'Hilux',
        status: 'Disponivel',
    },
    {
        id: 15,
        model: 'Ranger',
        status: 'Disponivel',
    },
    {
        id: 16,
        model: 'Toro',
        status: 'Disponivel',
    },
    {
        id: 17,
        model: 'Saveiro',
        status: 'Disponivel',
    },
    {
        id: 18,
        model: 'Strada',
        status: 'Disponivel',
    },
    {
        id: 19,
        model: 'Frontier',
        status: 'Disponivel',
    },
    {
        id: 20,
        model: 'Hilux SW4',
        status: 'Disponivel',
    },
    {
        id: 21,
        model: 'Tiguan',
        status: 'Disponivel',
    },
    {
        id: 22,
        model: 'Compass',
        status: 'Disponivel',
    },
    {
        id: 23,
        model: 'Renegade',
        status: 'Disponivel'
    }
]);
</script>

<template>
    <article>
        <div class="listVehicles">
            <div class="headerList">
                <p>ID:</p>
                <p>Teste:</p>
                <p>Teste:</p>
            </div>
            <div class="list">
                <div v-for="vehicle in vehicles" :key="vehicle.id">
                    <p>{{ vehicle.id }}</p>
                    <p>{{ vehicle.model }}</p>
                    <p>{{ vehicle.status }}</p>
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped lang="scss">
@use '@/assets/main';

article {
    width: 100%;
    background-color: #070707;
    padding: 1rem 0;
    border-radius: 5px;
    overflow: hidden;
}

.headerList {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-bottom: 1px solid #c1c1c1;
}

.list {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 300px;
    overflow-y: auto;
}

.list div {
    border-bottom: 1px solid #c1c1c1;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 1rem 0;
}

button {
    border: 0;
    background-color: transparent;
    color: main.$standard-white;
}
</style>