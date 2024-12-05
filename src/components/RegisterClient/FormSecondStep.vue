<script setup>
import { useCepStore } from '@/stores';
import { useClientStore } from '@/stores';
import { computed } from 'vue';

const cepStore = useCepStore();
const clientStore = useClientStore();

const cepData = computed(() => cepStore.address);

const handleCepChange = () => {
  if (cepData.value.cep.length === 8) {
    cepStore.getEndereco(cepData.value.cep);
  }
};

const createClient = async () => {
  clientStore.state.client_data.address = {
    cep: cepData.value.cep,
    street: cepData.value.endereco,
    number: cepData.value.numero,
    complement: cepData.value.complemento,
    neighborhood: cepData.value.bairro,
    city: cepData.value.cidade,
    state: cepData.value.uf,
  };
  await clientStore.createClient(clientStore.state.client_data);
};
</script>

<template>
  <form @submit.prevent="createClient">
    <label for="cep">CEP</label>
    <input
      id="cep"
      type="text"
      placeholder="Insira seu CEP"
      v-model="cepData.cep"
      @change="handleCepChange"
      required
      maxlength="8"
    />
    <label for="state">Estado</label>
    <input id="state" type="text" placeholder="Insira seu estado" v-model="cepData.estado" required />
    <label for="city">Cidade</label>
    <input id="city" type="text" placeholder="Insira sua cidade" v-model="cepData.cidade" required />
    <label for="neighborhood">Bairro</label>
    <input id="neighborhood" type="text" placeholder="Insira seu bairro" v-model="cepData.bairro" required />
    <label for="street">Endereço</label>
    <input id="street" type="text" placeholder="Insira seu endereço" v-model="cepData.endereco" required />
    <label for="number">Número</label>
    <input id="number" type="text" placeholder="Insira seu número" v-model="cepData.numero" required />
    <label for="complement">Complemento</label>
    <input id="complement" type="text" placeholder="Insira um complemento" v-model="cepData.complemento" />
    <button class="normalColor" type="submit">Finalizar</button>
    <button class="invertColor" type="button" @click="$emit('back')">Voltar</button>
  </form>
</template>

<style scoped lang="scss">
@use '../../assets/main';
form {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem auto 4rem auto;
  label {
    color: main.$standard-white;
    width: 50%;
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

@media screen and (max-width: 1150px) {
  form {
    width: 100%;
  }

}
</style>
