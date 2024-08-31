<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="container">
       <div class="container-title">
        <h1>NOSSO ENDEREÇO</h1>
       </div>
       <div>
        <p>Rua Skibidi Bomboclat DogAmostrading, 500 Jardim dos Charltons II 89245-000 | Pink Boga – PR </p>
       </div>
    </div>
</template>
<style scoped lang="scss">
@use '../../assets/main';
.container {
    height: 100%;
    width: 16rem;

    .container-title {
        margin: 1em;
        width: 100%;
        h1 {
            color: main.$standard-pink;
        }
    }
    div {
        margin: 1em;
        p { 
            margin-top: 2em;
            color: main.$standard-white;
        }
    }
}
</style>
