import { api } from '@/plugins/index'
class VehicleService {
  async createVehicle(driver) {
    try {
      const { data } = await api.post('vehicle/', driver)
      return data
    } catch (error) {
      return error.message
    }
  }

  async getVehicles() {
    try {
      const { data } = await api.get('vehicle/')
      return data
    } catch (error) {
      return error.message
    }
  }

  async getVehicle(id) {
    try {
      const { data } = await api.get(`vehicle/${id}/`)
      return data
    } catch (error) {
      return error.message
    }
  }

  async updateVehicle(driver) {
    try {
      const { data } = await api.patch(`vehicle/${driver.id}/`, driver)
      return data
    } catch (error) {
      return error.message
    }
  }

  async deleteVehicle(id) {
    try {
      const { data } = await api.delete(`vehicle/${id}/`)
      return data
    } catch (error) {
      return error.message
    }
  }
}

export default new VehicleService()
