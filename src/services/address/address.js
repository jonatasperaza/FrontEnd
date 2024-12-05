import { api } from '@/plugins'
import { toast } from 'vue3-toastify'
import { handleErrorResponse } from '@/utils/errorHandler'

class AddressService {
  async getAddresses() {
    try {
      const response = await api.get('address/')
      toast.success('Endereços encontrados com sucesso')
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao buscar endereços')
      return error
    }
  }

  async getAddress(id) {
    try {
      const response = await api.get(`address/${id}`)
      toast.success('Endereço encontrado com sucesso')
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao buscar endereço')
      return error
    }
  }

  async createAddress(data) {
    try {
      const response = await api.post('address/', data)
      toast.success('Endereço criado com sucesso')
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao criar endereço')
      return error
    }
  }

  async updateAddress(id, data) {
    try {
      const response = await api.put(`address/${id}`, data)
      toast.success('Endereço atualizado com sucesso')
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao atualizar endereço')
      return error
    }
  }

  async deleteAddress(id) {
    try {
      const response = await api.delete(`address/${id}`)
      toast.success('Endereço apagado com sucesso')
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao apagar endereço')
      return error
    }
  }
}

export default new AddressService()
