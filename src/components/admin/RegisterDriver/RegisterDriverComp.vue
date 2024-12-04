<script setup>
import { ref } from 'vue'
import FormFirstStep from './FormFirstStep.vue'
import FormSecondStep from './FormSecondStep.vue'
import FormThirdStep from './FormThirdStep.vue'

const firstStep = ref(null)
const secondStep = ref(null)
const thirdStep = ref(null)
const isSecondStepVisible = ref(false)
const isThirdStepVisible = ref(false)
const nextToSecond = () => {
  firstStep.value.classList.remove('slideInReverse', 'slideOut')
  secondStep.value.classList.remove('slideIn', 'slideOutReverse')
  firstStep.value.classList.add('slideOut')
  setTimeout(() => {
    isSecondStepVisible.value = true
    firstStep.value.style.display = 'none'
    secondStep.value.classList.add('slideIn')
  }, 500)
}
const nextToThird = () => {
  secondStep.value.classList.remove('slideInReverse', 'slideOut')
  thirdStep.value.classList.remove('slideIn', 'slideOutReverse')
  secondStep.value.classList.add('slideOut')
  setTimeout(() => {
    isThirdStepVisible.value = true
    secondStep.value.style.display = 'none'
    thirdStep.value.classList.add('slideIn')
  }, 500)
}
const backToFirst = () => {
  secondStep.value.classList.add('slideOutReverse')
  setTimeout(() => {
    isSecondStepVisible.value = false
    firstStep.value.style.display = 'block'
    secondStep.value.classList.remove('slideOutReverse')
    setTimeout(() => {
      firstStep.value.classList.add('slideInReverse')
    }, 0)
  }, 500)
}
const backToSecond = () => {
  thirdStep.value.classList.add('slideOutReverse')
  setTimeout(() => {
    isThirdStepVisible.value = false
    secondStep.value.style.display = 'block'
    thirdStep.value.classList.remove('slideOutReverse')
    setTimeout(() => {
      secondStep.value.classList.add('slideInReverse')
    }, 0)
  }, 500)
}
</script>
<template>
  <section>
    <div class="container">
      <h1>Registro</h1>
      <div ref="firstStep" :class="{ hidden: isSecondStepVisible || isThirdStepVisible }">
        <FormFirstStep @next="nextToSecond" />
      </div>
      <div ref="secondStep" v-show="isSecondStepVisible" :class="{ hidden: isThirdStepVisible }">
        <FormSecondStep @next="nextToThird" @back="backToFirst" />
      </div>
      <div ref="thirdStep" v-show="isThirdStepVisible">
        <FormThirdStep @back="backToSecond" />
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
.container {
  width: 45%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: main.$standard-black;
  overflow: hidden;
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
    transform: translateX(-100%);
  }
}
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(100%);
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
    transform: translateX(100%);
  }
}
@keyframes slideInReverse {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media screen and (max-width: 1150px) {
  .container {
  width: 80%;
}
}
</style>
