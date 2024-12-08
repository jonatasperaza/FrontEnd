import { api } from '@/plugins'
import { toast } from 'vue3-toastify'
import { handleErrorResponse } from '@/utils/errorHandler'

class OfficeService {
  async getOffices() {
    try {
      const response = await api.get('offices')
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao buscar escritórios')
      return error.response.data
    }
  }

  async getOffice(id) {
    try {
      const response = await api.get(`office/${id}`)
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao buscar escritório')
      return error.response.data
    }
  }

  async createOffice(data) {
    try {
      const response = await api.post('offices', data)
      toast.success('Escritório criado com sucesso')
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao criar escritório')
      return error.response.data
    }
  }

  async updateOffice(id, data) {
    try {
      const response = await api.put(`offices/${id}`, data)
      toast.success('Escritório atualizado com sucesso')
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao atualizar escritório')
      return error.response.data
    }
  }

  async deleteOffice(id) {
    try {
      const response = await api.delete(`offices/${id}`)
      toast.success('Escritório apagado com sucesso')
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao apagar escritório')
      return error.response.data
    }
  }
}

export default new OfficeService()
