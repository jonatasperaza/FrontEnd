<script setup>
import { ref, onMounted } from 'vue';
import { useOrdersStore } from '@/stores';

import OrderProgressComp from './orderProgress/OrderProgressComp.vue';
import OrderData from './OrderInformations/OrderData.vue';
import CollectionData from './OrderInformations/CollectionData.vue';
import DeliveryData from './OrderInformations/DeliveryData.vue';
import SummaryData from './OrderInformations/SummaryData.vue';
import FinishedOrder from './OrderInformations/FinishedOrder.vue';

const ordersStore = useOrdersStore();
console.log(ordersStore.state.step);

const firstStep = ref(null);
const secondStep = ref(null);
const thirdStep = ref(null);
const finishedOrder = ref(null);
const summaryStep = ref(null);
const isSecondStepVisible = ref(false);
const isThirdStepVisible = ref(false);
const isSummaryVisible = ref(false);
const isFinishedVisible = ref(false);

const nextToSecond = () => {
    firstStep.value.classList.remove('slideInReverse', 'slideOut');
    secondStep.value.classList.remove('slideIn', 'slideOutReverse');
    firstStep.value.classList.add('slideOut');
    setTimeout(() => {
        isSecondStepVisible.value = true;
        firstStep.value.style.display = 'none';
        secondStep.value.classList.add('slideIn');
    }, 500);
    ordersStore.state.step++;
};

const nextToThird = () => {
    secondStep.value.classList.remove('slideInReverse', 'slideOut');
    secondStep.value.classList.add('slideOut');
    setTimeout(() => {
        isThirdStepVisible.value = true;
        secondStep.value.style.display = 'none';
        thirdStep.value.classList.add('slideIn');
    }, 500);
    ordersStore.state.step++;
};

const nextToSummary = () => {
    thirdStep.value.classList.remove('slideInReverse', 'slideOut');
    thirdStep.value.classList.add('slideOut');
    setTimeout(() => {
        isSummaryVisible.value = true;
        thirdStep.value.style.display = 'none';
        summaryStep.value.classList.add('slideIn');
    }, 500);
    ordersStore.state.step++;
};

const nextToFinished = () => {
    summaryStep.value.classList.remove('slideInReverse', 'slideOut');
    summaryStep.value.classList.add('slideOut');
    setTimeout(() => {
        isFinishedVisible.value = true;
        summaryStep.value.style.display = 'none';
        finishedOrder.value.classList.add('slideIn');
    }, 500);
    ordersStore.state.step++;
};

const backToFirst = () => {
    secondStep.value.classList.add('slideOutReverse');
    setTimeout(() => {
        isSecondStepVisible.value = false;
        firstStep.value.style.display = '';
        secondStep.value.classList.remove('slideOutReverse');
        setTimeout(() => {
            firstStep.value.classList.add('slideInReverse');
        }, 0);
    }, 500);
    ordersStore.state.step--;
};

const backToSecond = () => {
    thirdStep.value.classList.add('slideOutReverse');
    setTimeout(() => {
        isThirdStepVisible.value = false;
        secondStep.value.style.display = '';
        thirdStep.value.classList.remove('slideOutReverse');
        setTimeout(() => {
            secondStep.value.classList.add('slideInReverse');
        }, 0);
    }, 500);
    ordersStore.state.step--;
};

const backToThird = () => {
    summaryStep.value.classList.add('slideOutReverse');
    setTimeout(() => {
        isSummaryVisible.value = false;
        thirdStep.value.style.display = '';
        summaryStep.value.classList.remove('slideOutReverse');
        setTimeout(() => {
            thirdStep.value.classList.add('slideInReverse');
        }, 0);
    }, 500);
    ordersStore.state.step--;
};
</script>


<template>
    <section>
        <div v-if="ordersStore.state.step < 5">
            <OrderProgressComp />
        </div>
        <div ref="firstStep" :class="{ hidden: isSecondStepVisible || isThirdStepVisible || isSummaryVisible || isFinishedVisible }">
            <OrderData @next="nextToSecond" />
        </div>
        <div ref="secondStep" v-show="isSecondStepVisible" :class="{ hidden: isThirdStepVisible || isSummaryVisible || isFinishedVisible }">
            <CollectionData @next="nextToThird" @back="backToFirst" />
        </div>
        <div ref="thirdStep" v-show="isThirdStepVisible" :class="{ hidden: isSummaryVisible || isFinishedVisible }">
            <DeliveryData @next="nextToSummary" @back="backToSecond" />
        </div>
        <div ref="summaryStep" v-show="isSummaryVisible" :class="{ hidden: isFinishedVisible }">
            <SummaryData @next="nextToFinished" @back="backToThird" />
        </div>
        <div ref="finishedOrder" v-show="isFinishedVisible">
            <FinishedOrder />
        </div>
    </section>
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