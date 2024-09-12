<script setup>
const testOrders = [{
    id: 1,
    product: 'carro',
    quantity: '1',
    weight: '1000kg',
    date: '01/01/2021'
    },
    {
    id: 2,
    product: 'moto',
    quantity: '2',
    weight: '200kg',
    date: '02/02/2021'
    },
    {
    id: 3,
    product: 'caminhao',
    quantity: '3',
    weight: '3000kg',
    date: '03/03/2021'
    },
    {
    id: 4,
    product: 'avião',
    quantity: '4',
    weight: '4000kg',
    date: '04/04/2021'
    }];
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
@use '../../../assets/main';
.container {
  min-width: 40rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
  .headerTable {
    width: 100%;
    height: 10%;
    display: grid;
    grid-template-columns: 1fr 2px 1fr 2px 1fr 2px 1fr;
    align-items: center;
    background-color: main.$standard-black;
    color: main.$standard-white;
    height: 2rem;
    font-weight: 800;
    margin: 1rem 0;
    p {
      text-align: center;
      font-size: 16px;
    }
    span {
      width: 2px;
      height: 100%;
      background-color: main.$standard-white;
    }
  }
  .tableScroll {
    width: 100%;
    max-height: 20rem;
    overflow-y: scroll;
    .tableIten {
      width: 100%;
      height: 10%;
      display: grid;
      margin: .5rem 0;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      background-color: main.$standard-black;
      color: main.$standard-white;
      padding: 1rem;
      border: 2px solid main.$standard-pink;
      border-radius: 0.5rem;
      p {
        text-align: center;
        font-size: 14px;
      }
    }
  }
}
.tableScroll::-webkit-scrollbar {
  display: none;
}
</style>
