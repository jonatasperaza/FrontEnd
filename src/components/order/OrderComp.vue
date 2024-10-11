<script setup>
import { ref, onMounted } from 'vue';
import { useOrdersStore } from '@/stores';

import OrderProgressComp from './OrderProgress/OrderProgressComp.vue';
import OrderData from './OrderInformations/OrderData.vue';
import CollectionData from './OrderInformations/CollectionData.vue';
import DeliveryData from './OrderInformations/DeliveryData.vue';

const ordersStore = useOrdersStore();
console.log(ordersStore.state.step);

const firstStep = ref(null);
const secondStep = ref(null);
const thirdStep = ref(null);
const isSecondStepVisible = ref(false);
const isThirdStepVisible = ref(false);
const nextToSecond = () => {
    firstStep.value.classList.remove('slideInReverse', 'slideOut')
    secondStep.value.classList.remove('slideIn', 'slideOutReverse')
    firstStep.value.classList.add('slideOut');
    setTimeout(() => {
        isSecondStepVisible.value = true;
        firstStep.value.style.display = 'none';
        secondStep.value.classList.add('slideIn');
    }, 500);
    ordersStore.state.step++
};
const nextToThird = () => {
    firstStep.value.classList.remove('slideInReverse', 'slideOut')
    secondStep.value.classList.remove('slideIn', 'slideOutReverse')
    secondStep.value.classList.add('slideOut');
    setTimeout(() => {
        isThirdStepVisible.value = true;
        secondStep.value.style.display = 'none';
        thirdStep.value.classList.add('slideIn');
    }, 500);
    ordersStore.state.step++
};
const backToFirst = () => {
    secondStep.value.classList.add('slideOutReverse')
    setTimeout(() => {
        isSecondStepVisible.value = false
        firstStep.value.style.display = '';
        secondStep.value.classList.remove('slideOutReverse')
        setTimeout(() => {
            firstStep.value.classList.add('slideInReverse')
        }, 0)
    }, 500)
    ordersStore.state.step--
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
    ordersStore.state.step--
};
</script>
<template>
    <section>
        <OrderProgressComp />
        <div ref="firstStep" :class="{ hidden: isSecondStepVisible || isThirdStepVisible }">
            <OrderData @next="nextToSecond" />
        </div>
        <div ref="secondStep" v-show="isSecondStepVisible" :class="{ hidden: isThirdStepVisible }">
            <CollectionData @next="nextToThird" @back="backToFirst" />
        </div>
        <div ref="thirdStep" v-show="isThirdStepVisible">
            <DeliveryData @back="backToSecond" />
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/main.scss';

section {
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