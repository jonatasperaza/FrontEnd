import { api } from '@/plugins'
import { toast } from 'vue3-toastify'
import { handleErrorResponse } from '@/utils/errorHandler'

class ClientService {
  async getClients() {
    try {
      const response = await api.get('client')
        toast.success('Clientes encontrados com sucesso')
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao buscar clientes')
      return error.response.data
    }
  }

  async getClient(id) {
    try {
      const response = await api.get(`client/${id}`)
        toast.success('Cliente encontrado com sucesso')
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao buscar cliente')
      return error.response.data
    }
  }

  async createClient(data) {
    try {
      const response = await api.post('client', data)
        toast.success('Cliente criado com sucesso')
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao criar cliente')
      return error.response.data
    }
  }

  async updateClient(id, data) {
    try {
      const response = await api.put(`client/${id}`, data)
        toast.success('Cliente atualizado com sucesso')
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao atualizar cliente')
      return error.response.data
    }
  }

  async deleteClient(id) {
    try {
      const response = await api.delete(`client/${id}`)
        toast.success('Cliente apagado com sucesso')
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao apagar cliente')
      return error.response.data
    }
  }
}

export default new ClientService()
