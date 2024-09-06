<script setup>
import FormFirstStep from './FormFirstStep.vue';
</script>
<template>
    <section>
    <div class="container">
        <div><h1>Dados <span>Pessoais</span></h1></div>
      <h1>Registre-se</h1>
      <div>
        <FormFirstStep/>
      </div>
      <!-- <div ref="secondStep" v-show="isSecondStepVisible">
        <FormSecondStep @back="back" />
      </div> -->
    </div>
  </section>
</template>
<style scoped lang="scss">
@use '../../../assets/main';
</style>
