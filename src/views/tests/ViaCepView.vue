<script setup>
import { ref } from 'vue'
import { useCepStore } from '@/stores/address/cep';

const cep = ref('');
const cepStore = useCepStore();
const dados = ref('');
const searchCep = async () => {
    try {
        await cepStore.getEndereco(cep.value);
        dados.value = cepStore.address;
    } catch (error) {
        console.log(error);
    }
}

const clear = () => {
  cep.value = '';
}

function sendData(data){
    console.log(data);
    alert('Dados enviados com sucesso');
    alert(JSON.stringify(data));
}
</script>

<template>

    <div>
        <h1>Buscar CEP</h1>
        <input type="text" v-model="cep" placeholder="Digite o CEP" />
        <button @click="searchCep">Buscar</button>
        <button @click="clear">Limpar</button>
        <form @submit.prevent="sendData(dados)" style="display: flex; flex-direction: column;">
            <input type="text" placeholder="Endereco" v-model="dados.endereco">
            <input type="text" placeholder="Bairro" v-model="dados.bairro">
            <input type="text" placeholder="Cidade" v-model="dados.cidade">
            <input type="text" placeholder="Estado" v-model="dados.estado">
            <input type="number" placeholder="Numero" v-model="dados.numero">
            <button type="submit">Enviar</button>
        </form>
    </div>
    
    <div v-if="cepStore.cep">
        <h2>Resultado</h2>
        <p>CEP: {{ cepStore.cep.cep }}</p>
        <p>Logradouro: {{ cepStore.cep.logradouro }}</p>
        <p>Bairro: {{ cepStore.cep.bairro }}</p>
        <p>Cidade: {{ cepStore.cep.localidade }}</p>
        <p>Estado: {{ cepStore.cep.uf }}</p>
    </div>
    
    <div v-if="cepStore.error">
        <h2>Erro</h2>
        <p>{{ cepStore.error }}</p>
    </div>
</template>

<style scoped>

</style>