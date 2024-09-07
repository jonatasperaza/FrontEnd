import { api } from "@/plugins"

class AuthService {
  async getUser(token) {
    try {
      const response = await api.get('/user/me/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(response.data)
      return response.data
    } catch (error) {
      return error
    }
  }
}

export default new AuthService()
