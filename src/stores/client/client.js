import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { ClientService } from '@/services'

export const useClientStore = defineStore('client', () => {
  const state = reactive({
    clients: [],
    client_data: reactive({
      type: '',
      cpf_cnpj: 0,
      name: '',
      email: '',
      date_birth: '',
      username: '',
      address: {
        cep: 0,
        street: '',
        number: 0,
        complement: '',
        neighborhood: '',
        city: '',
        state: ''
      },
      telephone: 0
    }),
    loading: false,
    error: null
  })
  const isLoading = computed(() => state.loading)

  const getClients = async () => {
    state.loading = true
    try {
      state.clients = await ClientService.getClients()
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
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const deleteClient = async (id) => {
    state.loading = true
    try {
      const index = state.clients.findIndex((s) => s.id === id)
      state.clients.splice(index, 1)
      await ClientService.deleteClient(id)
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
