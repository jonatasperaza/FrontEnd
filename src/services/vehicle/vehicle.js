import { api } from '@/plugins/index'
import { toast } from 'vue3-toastify'
import { handleErrorResponse } from '@/utils/errorHandler'
class VehicleService {
  async createVehicle(driver) {
    try {
      const { data } = await api.post('vehicle/', driver)
      return data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao criar veículo')
      return error.message
    }
  }

  async getVehicles() {
    try {
      const { data } = await api.get('vehicle/')
      return data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao buscar veículos')
      return error.message
    }
  }

  async getVehicle(id) {
    try {
      const { data } = await api.get(`vehicle/${id}/`)
      return data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao buscar veículo')
      return error.message
    }
  }

  async updateVehicle(driver) {
    try {
      const { data } = await api.patch(`vehicle/${driver.id}/`, driver)
      return data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao atualizar veículo')
      return error.message
    }
  }

  async deleteVehicle(id) {
    try {
      const { data } = await api.delete(`vehicle/${id}/`)
      return data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao apagar veículo')
      return error.message
    }
  }
}

export default new VehicleService()
