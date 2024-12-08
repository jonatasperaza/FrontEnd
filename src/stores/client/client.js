import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { ClientService } from '@/services'
import { useCepStore } from '../address/cep'
// import router from '@/router'

export const useClientStore = defineStore('client', () => {
  const cepStore = useCepStore()
  const state = reactive({
    clients: [],
    client_data: reactive({
      type: '',
      cpf_cnpj: '',
      name: '',
      email: '',
      date_birth: '',
      username: '',
      address: {
        cep: cepStore.address.cep,
        street: cepStore.address.endereco,
        number: cepStore.address.numero,
        complement: cepStore.address.complemento,
        neighborhood: cepStore.address.bairro,
        city: cepStore.address.cidade,
        state: cepStore.address.uf
      },
      telephone: 0
    }),
    count: 0,
    loading: false,
    error: null
  })
  const isLoading = computed(() => state.loading)

  const getClients = async () => {
    state.loading = true
    try {
      state.clients = await ClientService.getClients()
      state.count = state.clients.length
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const createClient = async (newClient) => {
    state.loading = true
    try {
      state.clients.push(await ClientService.createClient(newClient))
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const updateClient = async (client) => {
    state.loading = true
    try {
      const index = state.clients.findIndex((s) => s.id === client.id)
      state.clients[index] = await ClientService.updateClient(client)
      state.count = state.clients.length
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const deleteClient = async (id) => {
    state.loading = true
    try {
      await ClientService.deleteClient(id)
      const index = state.clients.findIndex((s) => s.id === id)
      state.clients.splice(index, 1)
      state.count = state.clients.length
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  return {
    state,
    isLoading,
    getClients,
    createClient,
    updateClient,
    deleteClient
  }
})
