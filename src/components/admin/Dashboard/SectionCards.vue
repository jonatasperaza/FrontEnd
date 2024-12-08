<script setup>
import { ref, onMounted, markRaw, computed } from 'vue';
import { ContentLoader } from 'vue-content-loader';

import { useDriverStore } from '@/stores';
import { useVehicleStore } from '@/stores';
import { useClientStore } from '@/stores';
import { useEmployeeStore } from '@/stores';

import CardsComp from './CardsComp.vue';
import TruckFast from 'vue-material-design-icons/TruckFast.vue';
import Account from 'vue-material-design-icons/Account.vue';
import CardAccountDetails from 'vue-material-design-icons/CardAccountDetails.vue';
import Tire from 'vue-material-design-icons/Tire.vue';

const driverStore = useDriverStore();
const vehicleStore = useVehicleStore();
const clientStore = useClientStore();
const employeeStore = useEmployeeStore();

const data = ref([]);
const isLoading = computed(() =>
  driverStore.isLoading || vehicleStore.isLoading || clientStore.isLoading || employeeStore.isLoading
);

onMounted(async () => {
  await Promise.all([
    driverStore.getDrivers(),
    vehicleStore.getVehicles(),
    clientStore.getClients(),
    employeeStore.getEmployees()
  ]);

  data.value = [
    {
      id: 'drivers',
      icon: markRaw(Tire),
      title: 'Motoristas Cadastrados',
      number: driverStore.state.count,
      color: 'limegreen'
    },
    {
      id: 'vehicles',
      icon: markRaw(TruckFast),
      title: 'Veículos Cadastrados',
      number: vehicleStore.state.count,
      color: 'yellow'
    },
    {
      id: 'clients',
      icon: markRaw(Account),
      title: 'Clientes Cadastrados',
      number: clientStore.state.count,
      color: 'aqua'
    },
    {
      id:'employees',
      icon: markRaw(CardAccountDetails),
      title: 'Funcionários Cadastrados',
      number: employeeStore.state.count,
      color: 'orange'
    }
  ];
});
</script>

<template>
  <section>
    <div class="title">
      <h2>Meu <span class="strong-pink">Dashboard</span></h2>
    </div>

    <Transition name="fade" mode="out-in">
      <template v-if="isLoading">
        <ContentLoader :animate="true" primary-color="#000000" secondary-color="#D0D0D0" width="82vw" height="12%" style="margin-left: 8.5vw; border: 1px solid #C1C1C1; border-radius: 14px; margin-bottom: 3rem;">
          <rect x="0" y="0" rx="0" ry="0" width="100vw" height="100%"/>
        </ContentLoader>
      </template>
      <div class="cards" v-else>
        <CardsComp v-for="(item, index) in data" :key="index" :option="item" />
      </div>
    </Transition>
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
  width: 82vw;
  margin: auto;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

@media screen and (max-width: 1150px) {
  .title {
    font-size: 1.3rem;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
