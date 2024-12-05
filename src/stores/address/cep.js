import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { CepService } from '@/services'

export const useCepStore = defineStore('cep', () => {
  const state = reactive({
    address: {
      cep: '',
      endereco: '',
      estado: '',
      cidade: '',
      bairro: '',
      numero: 0,
      complemento: '',
      ddd: 0,
      uf: ''
    },
    loading: false,
    error: null
  })
  const isLoading = computed(() => state.loading)
  const hasError = computed(() => state.error !== null)
  const address = computed(() => state.address)

  const getEndereco = async (cep) => {
    state.loading = true
    try {
      console.log(cep)
      state.address.cep = cep
      const response = await CepService.getCep(cep)
      state.address.cidade = response.localidade
      state.address.estado = response.estado
      state.address.bairro = response.bairro
      state.address.endereco = response.logradouro
      state.address.uf = response.uf
      console.log(response)
      return response
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  return {
    isLoading,
    hasError,
    address,
    getEndereco
  }
})
