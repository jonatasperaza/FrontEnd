import { api } from '@/plugins'

class DriverService {
  async getDrivers() {
    try {
      const response = await api.get('driver')
      return response.data
    } catch (error) {
      console.error(error)
      return error.response.data
    }
  }

  async getDriver(id) {
    try {
      const response = await api.get(`driver/${id}`)
      return response.data
    } catch (error) {
      console.error(error)
      return error.response.data
    }
  }

  async createDriver(data) {
    try {
      const response = await api.post('driver/', data)
      return response.data
    } catch (error) {
      console.error(error)
      return error.response.data
    }
  }

  async updateDriver(id, data) {
    try {
      const response = await api.put(`driver/${id}`, data)
      return response.data
    } catch (error) {
      console.error(error)
      return error.response.data
    }
  }

  async deleteDriver(id) {
    try {
      const response = await api.delete(`driver/${id}`)
      return response.data
    } catch (error) {
      console.error(error)
      return error.response.data
    }
  }
}

export default new DriverService()
