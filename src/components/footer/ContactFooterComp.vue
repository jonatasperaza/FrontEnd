<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="container">
       <div class="container-title">
        <h1>CONTATO</h1>
       </div>
       <div>
        <h2>0800 545 8200</h2>
       </div>
       <div class="rights-reserved">
            <h3>© Todos os direitos reservados</h3>
       </div>
    </div>
</template>
<style scoped lang="scss">
@use '../../assets/main';
.container {
    height: 100%;
    width: 18rem;
    position: relative;

    .container-title {
        margin: 1em;
        h1 {
            color: main.$standard-pink;
        }
    }
    div {
        margin: 1em;
        h2 { 
            font-size: 2em;
            color: main.$standard-white;
        }

    }
    .rights-reserved {
        color: main.$standard-white;
        position: absolute;
        bottom: 0;          
    }

}
</style>
