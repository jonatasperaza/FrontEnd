<script setup>
import { watch, ref } from 'vue'
import { useDriverStore, useCepStore } from '@/stores'
import { toast } from 'vue3-toastify'
import router from '@/router'
const driverStore = useDriverStore()
const cepStore = useCepStore()
const canStreet = ref(false)
const canNeighborhood = ref(false)

watch(
  () => driverStore.state.driver_data.address.cep,
  async (newValue) => {
    if (newValue.length === 8) {
      const response = await cepStore.getEndereco(driverStore.state.driver_data.address.cep)
      driverStore.state.driver_data.address.state = response.uf || ''
      driverStore.state.driver_data.address.city = response.localidade || ''
      driverStore.state.driver_data.address.neighborhood = response.bairro || ''
      driverStore.state.driver_data.address.street = response.logradouro || ''

      if (response.bairro) {
        canNeighborhood.value = true
      }

      if (response.logradouro) {
        canStreet.value = true
      }
    }
  }
)

function verify() {
  if (
    driverStore.state.driver_data.address.cep === '' ||
    driverStore.state.driver_data.address.number === ''
  ) {
    toast.warn('Preencha todos os campos')
    return false
  } else {
    return true
  }
}
</script>
<template>
  <h2>Endereço</h2>
  <form @submit.prevent>
    <label for="">CEP</label>
    <input
      type="text"
      placeholder="Insira seu CEP"
      v-model="driverStore.state.driver_data.address.cep"
    />
    <label for="">Estado</label>
    <input
      type="text"
      placeholder="Insira seu estado"
      v-model="driverStore.state.driver_data.address.state"
      disabled
    />
    <label for="">Cidade</label>
    <input
      type="text"
      placeholder="Insira sua cidade"
      v-model="driverStore.state.driver_data.address.city"
      disabled
    />
    <label for="">Bairro</label>
    <input
      type="text"
      placeholder="Insira seu bairro"
      v-model="driverStore.state.driver_data.address.neighborhood"
      :disabled="canNeighborhood"
    />
    <label for="">Endereço</label>
    <input
      type="text"
      placeholder="Insira seu endereço"
      v-model="driverStore.state.driver_data.address.street"
      :disabled="canStreet"
    />
    <label for="">Número</label>
    <input
      type="text"
      placeholder="Insira seu número"
      v-model="driverStore.state.driver_data.address.number"
    />
    <label for="">Complemento</label>
    <input
      type="text"
      placeholder="Insira um complemento"
      v-model="driverStore.state.driver_data.address.complement"
    />
    <button
      class="normalColor"
      @click="
        verify()
          ? (driverStore.createDriver(driverStore.state.driver_data), router.push('/'))
          : null
      "
    >
      Finalizar
    </button>
    <button class="invertColor" @click="$emit('back')">Voltar</button>
  </form>
</template>
<style scoped lang="scss">
@use '../../../assets/main';

h2 {
  color: main.$standard-white;
  font-size: 50px;
  width: max-content;
  font-weight: 800;
  margin: 1rem auto;
  padding-left: 1rem;
  border-left: 2px solid main.$standard-pink;
  font-style: italic;
}

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
