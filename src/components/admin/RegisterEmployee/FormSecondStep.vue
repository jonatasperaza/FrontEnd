<script setup>
import { watch, ref } from 'vue';
import { useEmployeeStore, useCepStore } from '@/stores';
import { toast } from 'vue3-toastify';

const employeeStore = useEmployeeStore();
const cepStore = useCepStore();
const canStreet = ref(false);
const canNeighborhood = ref(false);

watch(
    () => employeeStore.state.employee_data.address.cep,
    async (newValue) => {
        if (newValue.length === 8) {
            const response = await cepStore.getEndereco(employeeStore.state.employee_data.address.cep);
            console.log(response);
            employeeStore.state.employee_data.address.state = response.uf || '';
            employeeStore.state.employee_data.address.city = response.localidade || '';
            employeeStore.state.employee_data.address.neighborhood = response.bairro || '';
            employeeStore.state.employee_data.address.street = response.logradouro || '';

            if (response.bairro) {
                canNeighborhood.value = true;
            }

            if (response.logradouro) {
                canStreet.value = true;
            }

        }
    }
);

function verify() {
    if (employeeStore.state.employee_data.address.cep === '' || employeeStore.state.employee_data.address.number === '') {
        toast.warn('Preencha todos os campos');
        return false;
    } else {
        return true;
    }
}
</script>

<template>
    <form @submit.prevent>
        <label for="">CEP</label>
        <input type="text" placeholder="Insira seu CEP" v-model="employeeStore.state.employee_data.address.cep" />

        <label for="">Estado</label>
        <input type="text" placeholder="Insira seu estado" :value="employeeStore.state.employee_data.address.state"
            disabled />

        <label for="">Cidade</label>
        <input type="text" placeholder="Insira sua cidade" :value="employeeStore.state.employee_data.address.city"
            disabled />

        <label for="">Bairro</label>
        <input type="text" placeholder="Insira seu bairro"
            v-model="employeeStore.state.employee_data.address.neighborhood" :disabled="canNeighborhood" />

        <label for="">Rua</label>
        <input type="text" placeholder="Insira seu endereço" v-model="employeeStore.state.employee_data.address.street"
            :disabled="canStreet" />

        <label for="">Número</label>
        <input type="text" placeholder="Insira seu número" v-model="employeeStore.state.employee_data.address.number" />

        <label for="">Complemento</label>
        <input type="text" placeholder="Insira um complemento"
            v-model="employeeStore.state.employee_data.address.complement" />

        <button class="normalColor"
            @click="verify() ? ($emit('next'), employeeStore.createEmployee(employeeStore.state.employee_data)) : null">Finalizar</button>
        <button class="invertColor" @click="$emit('back')">Voltar</button>
    </form>
</template>

<style scoped lang="scss">
@use '../../../assets/main';

form {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem auto 4rem auto;

    label {
        color: main.$standard-white;
        width: 50%;
        height: 1.5em;
        font-size: 16px;
        font-weight: 800;
        margin: 0.5rem 0.5rem;
    }

    input {
        height: 3.25rem;
        border-radius: 1rem;
        border: 1px solid main.$standard-white;
        padding: 0 10px;
        color: main.$standard-white;
        background-color: main.$standard-black;
    }

    button {
        width: 100%;
        height: 3rem;
        border: none;
        border-radius: 0.5rem;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        margin: 1rem 0 0 0;
        transition: 0.3s ease-in-out;
    }
}

.normalColor {
    background-color: main.$standard-pink;
    color: main.$standard-white;
}

.invertColor {
    background-color: main.$standard-black;
    color: main.$standard-pink;
    border: 2px solid main.$standard-pink;
}

.normalColor:hover {
    background-color: main.$standard-black;
    color: main.$standard-pink;
}

.invertColor:hover {
    background-color: main.$standard-pink;
    color: main.$standard-white;
}
</style>
