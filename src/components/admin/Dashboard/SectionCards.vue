<script setup>
import { ref, onMounted } from 'vue'
import { ContentLoader } from 'vue-content-loader'

import { useDriverStore } from '@/stores'
import { useVehicleStore } from '@/stores'
import { useClientStore } from '@/stores'
import { useEmployeeStore } from '@/stores'

import CardsComp from './CardsComp.vue'
import TruckFast from 'vue-material-design-icons/TruckFast.vue'
import Account from 'vue-material-design-icons/Account.vue'
import CardAccountDetails from 'vue-material-design-icons/CardAccountDetails.vue'
import Tire from 'vue-material-design-icons/Tire.vue'

const driverStore = useDriverStore()
const vehicleStore = useVehicleStore()
const clientStore = useClientStore()
const employeeStore = useEmployeeStore()

const data = ref([])
onMounted(async () => {
  await driverStore.getDrivers()
  await vehicleStore.getVehicles()
  await clientStore.getClients()
  await employeeStore.getEmployees()
  data.value = [
    {
      icon: Tire,
      title: 'Motoristas Cadastrados',
      number: driverStore.state.count,
      color: 'limegreen'
    },
    {
      icon: TruckFast,
      title: 'Veiculos Cadastrados',
      number: vehicleStore.state.count,
      color: 'yellow'
    },
    {
      icon: Account,
      title: 'Clientes Cadastrados',
      number: clientStore.state.count,
      color: 'aqua'
    },
    {
      icon: CardAccountDetails,
      title: 'Funcionarios Cadastrados',
      number: employeeStore.state.count,
      color: 'orange'
    }
  ]
})
</script>

<template>
  <section>
    <div class="title">
      <h2>Meu <span class="strong-pink">Dashboard</span> {{ driverStore.isLoading }}</h2>
    </div>
    <ContentLoader v-if="driverStore.isLoading || vehicleStore.isLoading" animate="true" primary-color="#FC1D87"
      secondary-color="#242424">
      <rect x="43" y="20" rx="5" ry="5" width="76%" height="70" />
    </ContentLoader>
    <div class="cards" v-else>
      <CardsComp v-for="item in data" :key="item" :option="item" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../../../assets/main.scss';

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

.cards {
  width: 80%;
  margin: auto;
  display: flex;
  gap: 2rem;
}

@media screen and (max-width: 1150px) {
  section {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  div {
    display: flex;
    justify-content: center;

    .title {
      font-size: 1.3rem
    }
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
  }


}
</style>
