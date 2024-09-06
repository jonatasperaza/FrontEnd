import axios from 'axios'

class AuthService {
  async postUserToken(token) {
    try {
      const response = await axios.post('/usuarios/me/', {
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
