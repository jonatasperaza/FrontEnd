import { api } from '@/plugins'

class AuthService {
  async getUser(token) {
    try {
      let data
      const response = await api.get('/user/me/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(response.data)
      if (response.data['driver']) {
        data = {
          ...response.data,
          type: 'driver'
        }
      } else if (response.data['employee']) {
        data = {
          ...response.data,
          type: 'employee'
        }
      } else {
        data = {
          ...response.data,
          type: 'client'
        }
      }
      console.log(data)
      return data
    } catch (error) {
      console.error(error)
      return error
    }
  }
}

export default new AuthService()
