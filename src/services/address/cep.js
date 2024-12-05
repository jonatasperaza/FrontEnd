import axios from 'axios'

class CepService {
  async getCep(cep) {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
      return response.data
    } catch (error) {
      console.error(error)
      return error
    }
  }
}

export default new CepService()
