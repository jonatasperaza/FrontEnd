import { api } from '@/plugins'
import { toast } from 'vue3-toastify'
import { handleErrorResponse } from '@/utils/errorHandler'
import router from '@/router'

class DriverService {
  async getDrivers() {
    try {
      const response = await api.get('driver/')
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao buscar motoristas')
      return error.response.data
    }
  }

  async getDriver(id) {
    try {
      const response = await api.get(`driver/${id}`)
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao buscar motorista')
      return error.response.data
    }
  }

  async createDriver(data) {
    try {
      const response = await api.post('driver/', data)
      toast.success('Motorista criado com sucesso', {
        delay: 2000
      })
      router.push('/login')
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao criar motorista')
      return error.response.data
    }
  }

  async updateDriver(id, data) {
    try {
      const response = await api.put(`driver/${id}`, data)
      toast.success('Motorista atualizado com sucesso', {
        delay: 2000
      })
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao atualizar motorista')
      return error.response.data
    }
  }

  async deleteDriver(id) {
    try {
      const response = await api.delete(`driver/${id}`)
      toast.success('Motorista apagado com sucesso', {
        delay: 2000
      })
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao apagar motorista')
      return error.response.data
    }
  }
}

export default new DriverService()
