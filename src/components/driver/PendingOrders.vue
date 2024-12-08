<script setup>
const testOrders = [
  {
    id: 1,
    product: 'viga',
    quantity: '1',
    weight: '1000kg',
    date: '01/01/2021'
  },
  {
    id: 2,
    product: 'alternador',
    quantity: '2',
    weight: '200kg',
    date: '02/02/2021'
  },
  {
    id: 3,
    product: 'soja',
    quantity: '3',
    weight: '3000kg',
    date: '03/03/2021'
  },
  {
    id: 4,
    product: 'arroz',
    quantity: '4',
    weight: '4000kg',
    date: '04/04/2021'
  }
]
</script>
<template>
  <div class="container">
    <div class="headerTable">
      <p>Produto</p>
      <span></span>
      <p>Quantidade</p>
      <span></span>
      <p>Peso</p>
      <span></span>
      <p>Data</p>
    </div>
    <div class="tableScroll">
      <div class="tableIten" v-for="order in testOrders" :key="order.id">
        <p>{{ order.product }}</p>
        <p>{{ order.quantity }}</p>
        <p>{{ order.weight }}</p>
        <p>{{ order.date }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use '../../assets/OrderTable';
@media screen and (max-width: 1150px) {
  .container {
    padding: 1rem;
    width: 100%;
    display: flex;

    .heardTable {
      width: 80%;
    }
    .TableScroll {
      width: 80%;
    }
  }
}
</style>
