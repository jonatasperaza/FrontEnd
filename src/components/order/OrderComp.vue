<script setup>
import { ref, onMounted } from 'vue'
import { useOrderStore, useAuthStore } from '@/stores'

import { OrderProgressComp, OrderData, CollectionData, DeliveryData, SummaryData, FinishedOrder } from './';

const ordersStore = useOrderStore()
const authStore = useAuthStore()

const firstStep = ref(null)
const secondStep = ref(null)
const thirdStep = ref(null)
const finishedOrder = ref(null)
const summaryStep = ref(null)
const isSecondStepVisible = ref(false)
const isThirdStepVisible = ref(false)
const isSummaryVisible = ref(false)
const isFinishedVisible = ref(false)
const nextToSecond = () => {
  firstStep.value.classList.remove('slideInReverse', 'slideOut')
  secondStep.value.classList.remove('slideIn', 'slideOutReverse')
  firstStep.value.classList.add('slideOut')
  setTimeout(() => {
    isSecondStepVisible.value = true
    firstStep.value.style.display = 'none'
    secondStep.value.classList.add('slideIn')
  }, 500)
  ordersStore.state.step++
}
const nextToThird = () => {
  secondStep.value.classList.remove('slideInReverse', 'slideOut')
  secondStep.value.classList.add('slideOut')
  setTimeout(() => {
    isThirdStepVisible.value = true
    secondStep.value.style.display = 'none'
    thirdStep.value.classList.add('slideIn')
  }, 500)
  ordersStore.state.step++
}
const nextToSummary = () => {
  thirdStep.value.classList.remove('slideInReverse', 'slideOut')
  thirdStep.value.classList.add('slideOut')
  setTimeout(() => {
    isSummaryVisible.value = true
    thirdStep.value.style.display = 'none'
    summaryStep.value.classList.add('slideIn')
  }, 500)
  ordersStore.state.step++
}
const nextToFinished = () => {
  summaryStep.value.classList.remove('slideInReverse', 'slideOut')
  summaryStep.value.classList.add('slideOut')
  setTimeout(() => {
    isFinishedVisible.value = true
    summaryStep.value.style.display = 'none'
    finishedOrder.value.classList.add('slideIn')
  }, 500)
  ordersStore.state.step++
  ordersStore.createOrder(ordersStore.state.order)
}
const backToFirst = () => {
  secondStep.value.classList.add('slideOutReverse')
  setTimeout(() => {
    isSecondStepVisible.value = false
    firstStep.value.style.display = ''
    secondStep.value.classList.remove('slideOutReverse')
    setTimeout(() => {
      firstStep.value.classList.add('slideInReverse')
    }, 0)
  }, 500)
  ordersStore.state.step--
}
const backToSecond = () => {
  thirdStep.value.classList.add('slideOutReverse')
  setTimeout(() => {
    isThirdStepVisible.value = false
    secondStep.value.style.display = ''
    thirdStep.value.classList.remove('slideOutReverse')
    setTimeout(() => {
      secondStep.value.classList.add('slideInReverse')
    }, 0)
  }, 500)
  ordersStore.state.step--
}
const backToThird = () => {
  summaryStep.value.classList.add('slideOutReverse')
  setTimeout(() => {
    isSummaryVisible.value = false
    thirdStep.value.style.display = ''
    summaryStep.value.classList.remove('slideOutReverse')
    setTimeout(() => {
      thirdStep.value.classList.add('slideInReverse')
    }, 0)
  }, 500)
  ordersStore.state.step--
}

onMounted(async () => {
  ordersStore.state.order.payment.payer_email = authStore.state.user.email
  ordersStore.state.order.id_client = authStore.state.user.client?.id

  if (authStore.state.user.client_physical_person) {
    ordersStore.state.order.payment.payer_identification_type = 'CPF'
    ordersStore.state.order.payment.payer_identification_number =
      authStore.state.user.client_physical_person.cpf
  } else if (authStore.state.user.client_legal_person) {
    ordersStore.state.order.payment.payer_identification_type = 'CNPJ'
    ordersStore.state.order.payment.payer_identification_number =
      authStore.state.user.client_legal_person.cnpj
  }
})
</script>

<template>
  <div>

    <span class="show">
      <div v-for="(value, key) in ordersStore.state.order" :key="key">
      <template v-if="typeof value === 'object' && !Array.isArray(value)">
        <strong>{{ key }}:</strong>
        <div style="margin-left: 20px">
          <div v-for="(subValue, subKey) in value" :key="subKey">{{ subKey }}: {{ subValue }}</div>
        </div>
      </template>
      <template v-else-if="Array.isArray(value)">
        <strong>{{ key }}:</strong>
        <div style="margin-left: 20px">
          <div v-for="(item, index) in value" :key="index">
            <strong>Item {{ index + 1 }}:</strong>
            <div style="margin-left: 20px">
              <div v-for="(itemValue, itemKey) in item" :key="itemKey">
                {{ itemKey }}: {{ itemValue }}
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else> {{ key }}: {{ value }} </template>
    </div>
  </span>
  <p>{{ authStore.state }}</p>
  <section>
    <div v-if="ordersStore.state.step < 5">
      <OrderProgressComp />
    </div>
    <div
      ref="firstStep"
      :class="{
        hidden: isSecondStepVisible || isThirdStepVisible || isSummaryVisible || isFinishedVisible
      }"
    >
    <OrderData @next="nextToSecond" />
  </div>
  <div
  ref="secondStep"
  v-show="isSecondStepVisible"
  :class="{ hidden: isThirdStepVisible || isSummaryVisible || isFinishedVisible }"
  >
  <CollectionData @next="nextToThird" @back="backToFirst" />
</div>
<div
ref="thirdStep"
v-show="isThirdStepVisible"
:class="{ hidden: isSummaryVisible || isFinishedVisible }"
>
<DeliveryData @next="nextToSummary" @back="backToSecond" />
</div>
<div ref="summaryStep" v-show="isSummaryVisible" :class="{ hidden: isFinishedVisible }">
  <SummaryData @next="nextToFinished" @back="backToThird" />
</div>
<div ref="finishedOrder" v-show="isFinishedVisible">
  <FinishedOrder />
</div>
</section>
</div>
</template>
<style scoped lang="scss">
@use '../../assets/main.scss';

section {
  background-color: main.$standard-black;
  width: 100%;
  min-height: 100vh;
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

span.show {
  position: absolute;
  top: 20;
  left: 20;
  color: white;
  background-color: red;
  padding: 10px;
  border-radius: 10px;
  z-index: 100;
  width: 20%;
}

@keyframes slideOut {
  from {
    opacity: 1;
    transform: translateX(0);
  }

  to {
    opacity: 0;
    transform: translateX(-5%);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(5%);
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
    transform: translateX(5%);
  }
}

@keyframes slideInReverse {
  from {
    opacity: 0;
    transform: translateX(-5%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
