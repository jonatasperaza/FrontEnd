<script setup>
import { ref } from 'vue'
import FormFirstStep from './FormFirstStep.vue';
import FormSecondStep from './FormSecondStep.vue';
const firstStep = ref(null)
const secondStep = ref(null)
const isSecondStepVisible = ref(false)
const next = () => {
  firstStep.value.classList.remove('slideInReverse', 'slideOut')
  secondStep.value.classList.remove('slideIn', 'slideOutReverse')
  firstStep.value.classList.add('slideOut')
  setTimeout(() => {
    isSecondStepVisible.value = true
    firstStep.value.style.display = 'none'
    secondStep.value.classList.add('slideIn')
  }, 500)}
const back = () => {
 secondStep.value.classList.add('slideOutReverse')
  setTimeout(() => {
    isSecondStepVisible.value = false
    firstStep.value.style.display = ''
    secondStep.value.classList.remove('slideOutReverse')
    setTimeout(() => {
      firstStep.value.classList.add('slideInReverse')
    }, 0)
  }, 500)}
</script>
<template>
  <section>
    <div class="container">
      <div ref="firstStep" :class="{ hidden: isSecondStepVisible }">
        <div class="container-title">
          <h1>Dados <span class="white">Pessoais</span></h1>
        </div>
        <FormFirstStep @next="next" />
      </div>
      <div ref="secondStep" v-show="isSecondStepVisible">
        <div class="container-title-Second-Steap">
          <h1>Endereço</h1>
        </div>
        <FormSecondStep @back="back" />
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@use '../../../assets/main';
section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(/public/backgroundLogin.png);
  background-size: cover;
}
div {
  width: 100%;
}
.container-title {
  display: flex;
  justify-content: center;

  h1 {
    width: 9em;
    border-left: 2px solid main.$standard-pink;

  }
}
.container-title-Second-Steap {
  display: flex;
  justify-content: center;

  h1 {
    width: 5em;
    border-left: 2px solid main.$standard-pink;
  }
}
h1 {
  color: main.$standard-pink;
  font-style: italic;
  font-size: 50px;
  padding: 0 0 0 0.5em;
  font-weight: 800;
}
.container {
  width: 45%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: main.$standard-black;
}
.hidden {
  display: none;
}
.slideOut {
  animation: slideOut 0.5s forwards;
}
.slideIn {
  animation: slideIn 0.5s forwards;
}
.slideInReverse {
  animation: slideInReverse 0.5s forwards;
}
.slideOutReverse {
  animation: slideOutReverse 0.5s forwards;
}
@keyframes slideOut {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-20%);
  }
}
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(20%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slideOutReverse {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(20%);
  }
}
@keyframes slideInReverse {
  from {
    opacity: 0;
    transform: translateX(-20%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>