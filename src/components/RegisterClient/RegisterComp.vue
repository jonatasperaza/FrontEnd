<script setup>
import { ref } from 'vue'
import FormFirstStep from './FormFirstStep.vue';
import FormSecondStep from './FormSecondStep.vue';

const firstStep = ref(null);
const secondStep = ref(null);
const next = () =>{
    firstStep.value.classList.add('hideForm');
    secondStep.value.classList.add('passForm');
}
const back = () =>{
    firstStep.value.classList.remove('hideForm');
    firstStep.value.classList.add('backForm');
    secondStep.value.classList.remove('passForm');
}
</script>
<template>
<section>
    <div class="container">
        <h1>Registre-se</h1>
        <div ref="firstStep">
            <FormFirstStep  @next="next" />
        </div>
        <div ref="secondStep">
            <FormSecondStep  @back="back" />
        </div>
    </div>
</section>
</template>
<style scoped lang="scss">
@use '../../assets/main';
section{
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(/public/backgroundLogin.png);
    background-size: cover;
}
div{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}
h1{
    color: main.$standard-pink;
    font-style: italic;
    font-size: 50px;
    margin: 2rem;
    font-weight: 800;
}
.container{
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: main.$standard-black;   
}
.hideForm{
    display: none;
}
.passForm{
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: nextForm .5s;
}
.backForm{
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: backForm .5s;
}
@keyframes nextForm {
    from{
        opacity: 0;
        transform: translateX(100%);
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }
}
@keyframes backForm {
    from{
        opacity: 0;
        transform: translateX(-100%);
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }
}
</style>
