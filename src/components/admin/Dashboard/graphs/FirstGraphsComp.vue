<script setup>
import PieGraph from './PieGraph.vue'
import LineGraph from './LineGraph.vue'
import DynamicGraph from './DynamicGraph.vue'
</script>

<template>
  <section>
    <div class="container">
      <div class="first">
        <PieGraph />
      </div>
      <div class="second">
        <LineGraph />
      </div>
    </div>
    <div class="dynamic">
      <DynamicGraph />
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
}

.container {
  display: flex;
  width: 82%;
  margin: auto;
  padding: 1rem;
  gap: 2rem;
  justify-self: space-between;
  align-items: center;
}

.first {
  width: 30%;
}

.second {
  width: 70%;
  margin-right: -100px;
  margin: auto;
}

.dynamic {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 1rem;
}

@media screen and (max-width: 1150px) {
  .container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;
    padding: 1rem;
    gap: 2rem;
    justify-content: center;

    .first {
      width: 90%;
    }

    .second {
      width: 90%;
      margin: auto;
    }
  }

  .dynamic {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 1rem;
  }

}
</style>
